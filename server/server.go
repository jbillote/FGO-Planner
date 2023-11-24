package server

import (
	"github.com/jbillote/fgo-planner-fullstack/controller"
	"github.com/jbillote/fgo-planner-fullstack/template"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"net/http"
)

type FGOPlannerAPI struct {
	e *echo.Echo
}

func NewServer() *FGOPlannerAPI {
	return &FGOPlannerAPI{
		e: echo.New(),
	}
}

func (s *FGOPlannerAPI) Start(port string) {
	s.e.Use(middleware.RemoveTrailingSlash())
	s.e.Use(middleware.Logger())
	s.e.Use(middleware.Recover())
	s.e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{ "*" },
		AllowMethods: []string{ echo.GET },
	}))

	template.NewTemplateRenderer(s.e, "public/*.html", "public/components/*.html")
	s.e.GET("/", func(c echo.Context) error {
		params := map[string]interface{}{
			"Name": "jbillote",
		}
		return c.Render(http.StatusOK, "index", params)
	})
	s.e.GET("/search", controller.SearchServant)

	s.e.Logger.Fatal(s.e.Start(":8080"))
}

func (s *FGOPlannerAPI) Close() {
	s.e.Close()
}

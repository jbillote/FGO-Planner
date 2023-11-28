package server

import (
	"github.com/jbillote/fgo-planner-fullstack/controller"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
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
        // AllowOrigins: []string{ "*" },
        AllowMethods: []string{echo.GET},
    }))
	s.e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Root: "build",
		Index: "index.html",
		HTML5: true,
		Browse: false,
	}))

    web := s.e.Group("")
    webRoutes(web)

    s.e.Logger.Fatal(s.e.Start(":8080"))
}

func webRoutes(e *echo.Group) {
    e.GET("/servant/:id", controller.ServantDisplay)
    e.GET("/search", controller.SearchDisplay)
}

func (s *FGOPlannerAPI) Close() {
    s.e.Close()
}

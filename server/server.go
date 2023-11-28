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

	fgo := s.e.Group("/api/fgo")
	v1 := fgo.Group("/v1")
	v1Routes(v1)

    s.e.Logger.Fatal(s.e.Start(":8080"))
}

func v1Routes(e *echo.Group) {
	servantGroup := e.Group("/servant")
	servantGroup.GET("", controller.SearchServant)
	servantGroup.GET("/:id", controller.GetServant)
}

func (s *FGOPlannerAPI) Close() {
    s.e.Close()
}

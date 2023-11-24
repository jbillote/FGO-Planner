package controller

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func SearchServant(c echo.Context) error {
	query := c.QueryParam("query")
	res := map[string]interface{}{
		"servant": query,
	}
	return c.Render(http.StatusOK, "servant_display", res)
}

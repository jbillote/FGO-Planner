package main

import (
	"fmt"
	"github.com/jbillote/fgo-planner/server"
	"os"
)

func main() {
	s := server.NewServer()
	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	s.Start(port)
}

package main

import (
	"fmt"
	"github.com/jbillote/fgo-planner-fullstack/server"
	"os"
)

func main() {
	s := server.NewServer()
	port := fmt.Sprintf(":%s", os.Getenv("PORT"))
	s.Start(port)
}

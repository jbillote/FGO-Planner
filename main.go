package main

import "github.com/jbillote/fgo-planner-fullstack/server"

func main() {
	s := server.NewServer()
	s.Start("8080")
}

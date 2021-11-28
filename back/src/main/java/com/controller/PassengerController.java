package com.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class PassengerController {

	@GetMapping("/home")
	public String getTest() {
		return "Hello world";
	}
	@GetMapping("/")
	public String gethome() {
		return "welcome home";
	}
	
}

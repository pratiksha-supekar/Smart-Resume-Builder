package com.resume.smartresumebuilder;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.resume.smartresumebuilder.repository")
public class SmartResumeBuilderApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmartResumeBuilderApplication.class, args);
    }
}
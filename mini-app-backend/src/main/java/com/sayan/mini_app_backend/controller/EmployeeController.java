package com.sayan.mini_app_backend.controller;

import com.sayan.mini_app_backend.model.Employee;
import com.sayan.mini_app_backend.dao.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepo emprepo;

    @GetMapping("allemployees")
    public List<Employee> getAllEmployees() {
        return emprepo.findAll();
    }

    @PostMapping("setEmployees")
    public Employee createEmployee(@RequestBody Employee employee) {
        System.out.println(employee.getName());
        return emprepo.save(employee);
    }
}

package com.sayan.mini_app_backend.dao;

import com.sayan.mini_app_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Long>{

}


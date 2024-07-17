package com.sayan.mini_app_backend.dao;

import com.sayan.mini_app_backend.model.Email;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepo extends JpaRepository<Email, Integer> {
}

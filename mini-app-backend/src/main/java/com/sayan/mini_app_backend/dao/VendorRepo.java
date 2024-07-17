package com.sayan.mini_app_backend.dao;

import com.sayan.mini_app_backend.model.Vendor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface VendorRepo extends JpaRepository<Vendor, Long> {
    @Query("select v from Vendor v where v.email = ?1")
    Optional<Vendor> findByEmail(String email);
}

package com.sayan.mini_app_backend.controller;

import com.sayan.mini_app_backend.dao.EmailRepo;
import com.sayan.mini_app_backend.model.Email;
import com.sayan.mini_app_backend.model.Employee;
import com.sayan.mini_app_backend.model.Vendor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sayan.mini_app_backend.dao.VendorRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin (origins = "http://localhost:3000")
@RequestMapping("/vendors")
public class VendorController {

    @Autowired
    private VendorRepo vendorRepo;

    @Autowired
    private EmailRepo emailrepo;

    @GetMapping("allvendors")
    public List<Vendor> getAllVendors() {
        return vendorRepo.findAll();
    }

    @PostMapping("setVendors")
    public Vendor createVendor(@RequestBody Vendor vendor) {
        return vendorRepo.save(vendor);
    }

    @PostMapping("sendEmails")
    public List<Email> sendEmail(@RequestBody List<String> lst) {
        List<Email> sentEmail = new ArrayList<>();
        for(String email: lst){
            Optional<Vendor> vendor = vendorRepo.findByEmail(email);
            if (vendor.isPresent()) {
                System.out.println("vendor to be emailed: " + vendor.get().getName());
                Email em = new Email();
                em.setEmailid(email);
                em.setMessage("Payment sent to " + vendor.get().getName() + " at UPI " + vendor.get().getUpi() );
                sentEmail.add(em);
                emailrepo.save(em);
//                return ResponseEntity.noContent().build();
            }
        }
        return sentEmail;
    }

    @DeleteMapping("{email}")
    public ResponseEntity<Void> deleteVendor(@PathVariable String email) {
        System.out.println("Inside delete vendor");
        Optional<Vendor> vendor = vendorRepo.findByEmail(email);
        if (vendor.isPresent()) {
            System.out.println("vendor to be deleted: " + vendor.get().getName());
            vendorRepo.delete(vendor.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

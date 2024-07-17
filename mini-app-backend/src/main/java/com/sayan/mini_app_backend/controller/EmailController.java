package com.sayan.mini_app_backend.controller;

import com.sayan.mini_app_backend.dao.EmailRepo;
import com.sayan.mini_app_backend.model.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("mails")
@CrossOrigin(origins = "http://localhost:3000")
public class EmailController {

    @Autowired
    private EmailRepo emrepo;

    @GetMapping("allmails")
    public List<List<String>> getAllEmails(){
        List<Email> emlist = emrepo.findAll();
        List<List<String>> lst = new ArrayList<>();
        for(Email e: emlist){
            List<String> to_add = new ArrayList<>();
            to_add.add(e.getEmailid());
            to_add.add(e.getMessage());
            lst.add(to_add);
        }

        return lst;
    }
}

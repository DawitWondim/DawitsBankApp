package com.model;

import javax.persistence.*;

import lombok.Data;

import java.math.BigDecimal;

@Data
@Entity
@Table(name = "Users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
    private BigDecimal balance;


}
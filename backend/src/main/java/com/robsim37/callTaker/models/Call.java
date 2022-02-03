package com.robsim37.callTaker.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity(name = "calls")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Call {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long call_id;
    private String last_name;
    private String first_name;
    private String dob;
    private String description;
    private String chief_complaint;
    private String pustreet;
    private String puapt;
    private String pucity;
    private String pustate;
    private String puzip_code;
    private String dostreet;
    private String doapt;
    private String docity;
    private String dostate;
    private String dozip_code;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(
            name = "call_needs",
            joinColumns = @JoinColumn(name = "callsId"),
            inverseJoinColumns = @JoinColumn(name = "needsId"))
    private List<Need> needs;

    public Call() {}

    public Long getCall_id() {
        return call_id;
    }

    public void setCall_id(Long call_id) {
        this.call_id = call_id;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getChief_complaint() {
        return chief_complaint;
    }

    public void setChief_complaint(String chief_complaint) {
        this.chief_complaint = chief_complaint;
    }

    public String getPustreet() {
        return pustreet;
    }

    public void setPustreet(String pustreet) {
        this.pustreet = pustreet;
    }

    public String getPuapt() {
        return puapt;
    }

    public void setPuapt(String puapt) {
        this.puapt = puapt;
    }

    public String getPucity() {
        return pucity;
    }

    public void setPucity(String pucity) {
        this.pucity = pucity;
    }

    public String getPustate() {
        return pustate;
    }

    public void setPustate(String pustate) {
        this.pustate = pustate;
    }

    public String getPuzip_code() {
        return puzip_code;
    }

    public void setPuzip_code(String puzip_code) {
        this.puzip_code = puzip_code;
    }

    public String getDostreet() {
        return dostreet;
    }

    public void setDostreet(String dostreet) {
        this.dostreet = dostreet;
    }

    public String getDoapt() {
        return doapt;
    }

    public void setDoapt(String doapt) {
        this.doapt = doapt;
    }

    public String getDocity() {
        return docity;
    }

    public void setDocity(String docity) {
        this.docity = docity;
    }

    public String getDostate() {
        return dostate;
    }

    public void setDostate(String dostate) {
        this.dostate = dostate;
    }

    public String getDozip_code() {
        return dozip_code;
    }

    public void setDozip_code(String dozip_code) {
        this.dozip_code = dozip_code;
    }

    public List<Need> getNeeds() {
        return needs;
    }

    public void setNeeds(List<Need> needs) {
        this.needs = needs;
    }
}

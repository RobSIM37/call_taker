package com.robsim37.callTaker.controllers;

import com.robsim37.callTaker.models.Call;
import com.robsim37.callTaker.repositories.CallRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/calls")
@CrossOrigin
public class CallController {
    @Autowired
    private CallRepository callRepository;

    @GetMapping
    public List<Call> list() { return callRepository.findAll(); }

    @GetMapping
    @RequestMapping("{id}")
    public Call get(@PathVariable Long id) { return callRepository.getById(id); }

    @PostMapping
    public Call create(@RequestBody final Call call) { return callRepository.saveAndFlush(call); }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) { callRepository.deleteById(id); }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Call update(@PathVariable Long id, @RequestBody Call call){
        Call existingCall = callRepository.getById(id);
        BeanUtils.copyProperties(call, existingCall, "callsId");
        return callRepository.saveAndFlush(existingCall);
    }
}

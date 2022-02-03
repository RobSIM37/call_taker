package com.robsim37.callTaker.controllers;

import com.robsim37.callTaker.models.Need;
import com.robsim37.callTaker.repositories.NeedRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/needs")
@CrossOrigin
public class NeedController {
    @Autowired
    private NeedRepository needRepository;

    @GetMapping
    public List<Need> list() { return needRepository.findAll(); }

    @GetMapping
    @RequestMapping("{id}")
    public Need get(@PathVariable Long id) { return needRepository.getById(id); }

    @PostMapping
    public Need create(@RequestBody final Need need) { return needRepository.saveAndFlush(need); }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id) { needRepository.deleteById(id); }

    @RequestMapping(value = "{id}", method = RequestMethod.PUT)
    public Need update(@PathVariable Long id, @RequestBody Need need){
        Need existingNeed = needRepository.getById(id);
        BeanUtils.copyProperties(need, existingNeed, "needsId");
        return needRepository.saveAndFlush(existingNeed);
    }
}

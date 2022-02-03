package com.robsim37.callTaker.repositories;

import com.robsim37.callTaker.models.Call;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CallRepository extends JpaRepository<Call, Long> {
}

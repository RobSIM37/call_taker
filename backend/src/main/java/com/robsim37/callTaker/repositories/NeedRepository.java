package com.robsim37.callTaker.repositories;

import com.robsim37.callTaker.models.Need;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NeedRepository extends JpaRepository<Need, Long> {
}

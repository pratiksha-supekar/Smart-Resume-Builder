package com.resume.smartresumebuilder.repository;

import com.resume.smartresumebuilder.entity.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResumeRepository extends JpaRepository<Resume, Long> {
}
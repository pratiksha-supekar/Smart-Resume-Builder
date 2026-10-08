package com.resume.smartresumebuilder.service;




import org.springframework.stereotype.Service;

import com.resume.smartresumebuilder.entity.Resume;
import com.resume.smartresumebuilder.repository.ResumeRepository;

import java.util.List;

@Service
public class ResumeService {

    private final ResumeRepository repository;

    public ResumeService(ResumeRepository repository) {
        this.repository = repository;
    }

    public Resume saveResume(Resume resume) {
        return repository.save(resume);
    }

    public List<Resume> getAllResumes() {
        return repository.findAll();
    }

    public Resume getResumeById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                    new RuntimeException("Resume not found"));
    }

    public Resume updateResume(Long id, Resume updatedResume) {

        Resume existing = getResumeById(id);

        existing.setFullName(updatedResume.getFullName());
        existing.setEmail(updatedResume.getEmail());
        existing.setPhone(updatedResume.getPhone());
        existing.setLocation(updatedResume.getLocation());
        existing.setLinkedin(updatedResume.getLinkedin());
        existing.setPortfolio(updatedResume.getPortfolio());
        existing.setSummary(updatedResume.getSummary());
        existing.setEducation(updatedResume.getEducation());
        existing.setExperience(updatedResume.getExperience());
        existing.setSkills(updatedResume.getSkills());
        existing.setProjects(updatedResume.getProjects());
        existing.setAchievements(updatedResume.getAchievements());
        existing.setCertifications(updatedResume.getCertifications());
        existing.setHobbies(updatedResume.getHobbies());
        existing.setReferencesText(updatedResume.getReferencesText());
        existing.setTemplate(updatedResume.getTemplate());
        existing.setFont(updatedResume.getFont());
        existing.setThemeColor(updatedResume.getThemeColor());

        return repository.save(existing);
    }

    public void deleteResume(Long id) {
        Resume resume = getResumeById(id);
        repository.delete(resume);
    }
}
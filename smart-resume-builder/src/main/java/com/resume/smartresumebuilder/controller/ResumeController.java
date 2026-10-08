package com.resume.smartresumebuilder.controller;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import com.resume.smartresumebuilder.entity.Resume;
import com.resume.smartresumebuilder.service.ResumeService;

import java.util.List;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.io.ByteArrayOutputStream;

@RestController
@RequestMapping("/api/resumes")
@CrossOrigin(origins = "*")
public class ResumeController {

    private final ResumeService service;

    public ResumeController(ResumeService service) {
        this.service = service;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Resume createResume(@RequestBody Resume resume) {
        return service.saveResume(resume);
    }

    @GetMapping
    public List<Resume> getAllResumes() {
        return service.getAllResumes();
    }

    @GetMapping("/{id}")
    public Resume getResumeById(@PathVariable Long id) {
        return service.getResumeById(id);
    }

    @PutMapping("/{id}")
    public Resume updateResume(
            @PathVariable Long id,
            @RequestBody Resume resume) {

        return service.updateResume(id, resume);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteResume(@PathVariable Long id) {
        service.deleteResume(id);
    }
    
    
    @GetMapping("/{id}/docx")
    public ResponseEntity<byte[]> exportDocx(@PathVariable Long id) {

        Resume resume = service.getResumeById(id);

        try {

            XWPFDocument document = new XWPFDocument();

            addParagraph(document, resume.getFullName());
            addParagraph(document, "Email: " + resume.getEmail());
            addParagraph(document, "Phone: " + resume.getPhone());
            addParagraph(document, "Location: " + resume.getLocation());

            addParagraph(document, "SUMMARY");
            addParagraph(document, resume.getSummary());

            addParagraph(document, "EDUCATION");
            addParagraph(document, resume.getEducation());

            addParagraph(document, "EXPERIENCE");
            addParagraph(document, resume.getExperience());

            addParagraph(document, "SKILLS");
            addParagraph(document, resume.getSkills());

            addParagraph(document, "PROJECTS");
            addParagraph(document, resume.getProjects());

            addParagraph(document, "ACHIEVEMENTS");
            addParagraph(document, resume.getAchievements());

            addParagraph(document, "CERTIFICATIONS");
            addParagraph(document, resume.getCertifications());

            addParagraph(document, "HOBBIES");
            addParagraph(document, resume.getHobbies());

            addParagraph(document, "REFERENCES");
            addParagraph(document, resume.getReferencesText());

            ByteArrayOutputStream outputStream =
                    new ByteArrayOutputStream();

            document.write(outputStream);
            document.close();

            return ResponseEntity.ok()
                    .header(
                            HttpHeaders.CONTENT_DISPOSITION,
                            "attachment; filename=\"resume.docx\""
                    )
                    .contentType(
                            MediaType.APPLICATION_OCTET_STREAM
                    )
                    .body(outputStream.toByteArray());

        } catch (Exception e) {

            return ResponseEntity.internalServerError().build();
        }
    }
    
    
    private void addParagraph(
            XWPFDocument document,
            String text) {

        XWPFParagraph paragraph =
                document.createParagraph();

        if (text != null && !text.isBlank()) {
            paragraph.createRun().setText(text);
        }
    }
    
}
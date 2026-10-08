

function removeItem(button) {

    const item = button.parentElement;

    item.remove();

    updatePreview();
}



function addEducation() {

    const container =
        document.getElementById("educationContainer");

    const div = document.createElement("div");

    div.className = "dynamic-item education-item";

    div.innerHTML = `

        <input type="text"
               class="degree"
               placeholder="Degree">

        <input type="text"
               class="institution"
               placeholder="Institution">

        <input type="text"
               class="educationYear"
               placeholder="Year">

        <input type="text"
               class="educationScore"
               placeholder="CGPA / Percentage">

        <button class="remove-btn"
                onclick="removeItem(this)">
            Remove
        </button>
    `;

    container.appendChild(div);
}




function addExperience() {

    const container =
        document.getElementById("experienceContainer");

    const div = document.createElement("div");

    div.className = "dynamic-item experience-item";

    div.innerHTML = `

        <input type="text"
               class="jobRole"
               placeholder="Job Role">

        <input type="text"
               class="company"
               placeholder="Company">

        <input type="text"
               class="duration"
               placeholder="Duration">

        <textarea class="responsibilities"
                  placeholder="Responsibilities"></textarea>

        <button class="remove-btn"
                onclick="removeItem(this)">
            Remove
        </button>
    `;

    container.appendChild(div);
}


/* =====================================
   ADD SKILL
===================================== */

function addSkill() {

    const container =
        document.getElementById("skillsContainer");

    const div = document.createElement("div");

    div.className = "skill-item";

    div.innerHTML = `

        <input type="text"
               class="skillName"
               placeholder="Example: Java">

        <select class="skillLevel">

            <option>Beginner</option>

            <option>Intermediate</option>

            <option>Expert</option>

        </select>

        <button class="remove-btn"
                onclick="removeItem(this)">
            Remove
        </button>
    `;

    container.appendChild(div);
}


/*
   ADD PROJECT
 */

function addProject() {

    const container =
        document.getElementById("projectsContainer");

    const div = document.createElement("div");

    div.className = "dynamic-item project-item";

    div.innerHTML = `

        <input type="text"
               class="projectName"
               placeholder="Project Name">

        <input type="text"
               class="projectTech"
               placeholder="Technologies">

        <textarea class="projectDescription"
                  placeholder="Project Description"></textarea>

        <button class="remove-btn"
                onclick="removeItem(this)">
            Remove
        </button>
    `;

    container.appendChild(div);
}


/* 
   ADD ACHIEVEMENT
*/

function addAchievement() {

    const container =
        document.getElementById("achievementContainer");

    const input =
        document.createElement("input");

    input.type = "text";

    input.className = "achievement";

    input.placeholder = "Achievement";

    input.style.marginBottom = "10px";

    container.appendChild(input);
}


/*
   ADD CERTIFICATION
*/

function addCertification() {

    const container =
        document.getElementById("certificationContainer");

    const input =
        document.createElement("input");

    input.type = "text";

    input.className = "certification";

    input.placeholder = "Certification";

    input.style.marginBottom = "10px";

    container.appendChild(input);
}


/* 
   LIVE PREVIEW
*/

function updatePreview() {

    /* Personal Information */

    const name =
        document.getElementById("fullName").value;

    const email =
        document.getElementById("email").value;

    const phone =
        document.getElementById("phone").value;

    const location =
        document.getElementById("location").value;

    const summary =
        document.getElementById("summary").value;


    document.getElementById("previewName").textContent =
        name || "Your Name";


    document.getElementById("previewContact").textContent =

        [
            email,
            phone,
            location
        ]
        .filter(Boolean)
        .join(" | ")
        ||
        "Email | Phone | Location";


    document.getElementById("previewSummary").textContent =

        summary ||
        "Your professional summary will appear here.";


    /* 
       EDUCATION
     */

    const educationPreview =
        document.getElementById("previewEducation");

    educationPreview.innerHTML = "";

    document.querySelectorAll(".education-item")
        .forEach(item => {

            const degree =
                item.querySelector(".degree").value;

            const institution =
                item.querySelector(".institution").value;

            const year =
                item.querySelector(".educationYear").value;

            const score =
                item.querySelector(".educationScore").value;


            if (
                degree ||
                institution ||
                year ||
                score
            ) {

                educationPreview.innerHTML += `

                    <div class="resume-item">

                        <h4>${degree}</h4>

                        <p>
                            ${institution}
                            ${year ? " | " + year : ""}
                            ${score ? " | " + score : ""}
                        </p>

                    </div>
                `;
            }

        });


    /* 
       EXPERIENCE
     */

    const experiencePreview =
        document.getElementById("previewExperience");

    experiencePreview.innerHTML = "";

    document.querySelectorAll(".experience-item")
        .forEach(item => {

            const role =
                item.querySelector(".jobRole").value;

            const company =
                item.querySelector(".company").value;

            const duration =
                item.querySelector(".duration").value;

            const responsibilities =
                item.querySelector(".responsibilities").value;


            if (
                role ||
                company ||
                duration ||
                responsibilities
            ) {

                experiencePreview.innerHTML += `

                    <div class="resume-item">

                        <h4>${role}</h4>

                        <p>
                            <strong>
                                ${company}
                            </strong>

                            ${duration
                                ? " | " + duration
                                : ""}
                        </p>

                        <p>
                            ${responsibilities}
                        </p>

                    </div>
                `;
            }

        });


    /* 
       SKILLS
     */

    const skillsPreview =
        document.getElementById("previewSkills");

    skillsPreview.innerHTML = "";

    document.querySelectorAll(".skill-item")
        .forEach(item => {

            const skill =
                item.querySelector(".skillName").value;

            const level =
                item.querySelector(".skillLevel").value;


            if (skill) {

                skillsPreview.innerHTML += `

                    <span class="skill-tag">

                        ${skill}
                        (${level})

                    </span>
                `;
            }

        });


    /* 
       PROJECTS
     */

    const projectsPreview =
        document.getElementById("previewProjects");

    projectsPreview.innerHTML = "";

    document.querySelectorAll(".project-item")
        .forEach(item => {

            const name =
                item.querySelector(".projectName").value;

            const technology =
                item.querySelector(".projectTech").value;

            const description =
                item.querySelector(".projectDescription").value;


            if (
                name ||
                technology ||
                description
            ) {

                projectsPreview.innerHTML += `

                    <div class="resume-item">

                        <h4>${name}</h4>

                        <p>
                            <strong>
                                Technologies:
                            </strong>

                            ${technology}
                        </p>

                        <p>
                            ${description}
                        </p>

                    </div>
                `;
            }

        });


    /* 
       ACHIEVEMENTS
    */

    const achievementsPreview =
        document.getElementById("previewAchievements");

    achievementsPreview.innerHTML = "";

    document.querySelectorAll(".achievement")
        .forEach(input => {

            if (input.value.trim()) {

                achievementsPreview.innerHTML +=
                    `<p>• ${input.value}</p>`;
            }

        });


    /* =====================================
       CERTIFICATIONS
    ===================================== */

    const certificationsPreview =
        document.getElementById("previewCertifications");

    certificationsPreview.innerHTML = "";

    document.querySelectorAll(".certification")
        .forEach(input => {

            if (input.value.trim()) {

                certificationsPreview.innerHTML +=
                    `<p>• ${input.value}</p>`;
            }

        });


    /* =====================================
       HOBBIES
    ===================================== */

    document.getElementById("previewHobbies")
        .textContent =
        document.getElementById("hobbies").value;


    /* =====================================
       REFERENCES
    ===================================== */

    document.getElementById("previewReferences")
        .textContent =
        document.getElementById("references").value;


    /* =====================================
       TEMPLATE
    ===================================== */

    const template =
        document.getElementById("template").value;

    const resume =
        document.getElementById("resumePreview");

    resume.className =
        "resume " + template;


    /* =====================================
       FONT
    ===================================== */

    const font =
        document.getElementById("font").value;

    resume.style.fontFamily = font;


    /* =====================================
       THEME COLOR
    ===================================== */

    const themeColor =
        document.getElementById("themeColor").value;

    resume.style.setProperty(
        "--theme-color",
        themeColor
    );

    resume.querySelectorAll("h3")
        .forEach(element => {

            element.style.color =
                themeColor;

        });

    resume.querySelector(
        ".resume-header"
    ).style.borderColor = themeColor;
}


/* =====================================
   SAVE RESUME
===================================== */

function saveResume() {

    const education = [...document.querySelectorAll(".education-item")]
        .map(item => ({
            degree: item.querySelector(".degree").value,
            institution: item.querySelector(".institution").value,
            year: item.querySelector(".educationYear").value,
            score: item.querySelector(".educationScore").value
        }));

    const experience = [...document.querySelectorAll(".experience-item")]
        .map(item => ({
            jobRole: item.querySelector(".jobRole").value,
            company: item.querySelector(".company").value,
            duration: item.querySelector(".duration").value,
            responsibilities: item.querySelector(".responsibilities").value
        }));

    const skills = [...document.querySelectorAll(".skill-item")]
        .map(item => ({
            skillName: item.querySelector(".skillName").value,
            skillLevel: item.querySelector(".skillLevel").value
        }));

    const projects = [...document.querySelectorAll(".project-item")]
        .map(item => ({
            projectName: item.querySelector(".projectName").value,
            projectTech: item.querySelector(".projectTech").value,
            projectDescription: item.querySelector(".projectDescription").value
        }));

    const achievements = [...document.querySelectorAll(".achievement")]
        .map(input => input.value);

    const certifications = [...document.querySelectorAll(".certification")]
        .map(input => input.value);


    const data = {

        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        linkedin: document.getElementById("linkedin").value,
        portfolio: document.getElementById("portfolio").value,
        summary: document.getElementById("summary").value,

        education: JSON.stringify(education),
        experience: JSON.stringify(experience),
        skills: JSON.stringify(skills),
        projects: JSON.stringify(projects),
        achievements: JSON.stringify(achievements),
        certifications: JSON.stringify(certifications),

        hobbies: document.getElementById("hobbies").value,
        referencesText: document.getElementById("references").value,

        template: document.getElementById("template").value,
        font: document.getElementById("font").value,
        themeColor: document.getElementById("themeColor").value
    };


    fetch("/api/resumes", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(data)

    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to save resume");
        }

        return response.json();

    })

    .then(savedResume => {

        localStorage.setItem(
            "resumeId",
            savedResume.id
        );

        alert(
            "Resume saved successfully! ID: "
            + savedResume.id
        );

        showAllResumes();

    })

    .catch(error => {

        console.error(error);

        alert(
            "Error saving resume. Please check the backend."
        );

    });
}



/*
   LOAD RESUME
 */

function loadResume() {

    fetch("/api/resumes")
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to load resumes");
            }

            return response.json();
        })
        .then(resumes => {

            if (resumes.length === 0) {
                alert("No saved resume found.");
                return;
            }

            // Load the latest resume
            const latestResume =
                resumes[resumes.length - 1];

            // Use the existing detailed loader
            loadResumeById(latestResume.id);

        })
        .catch(error => {

            console.error(error);

            alert(
                "Error loading resume. Please check the backend."
            );

        });
}


//update resume


function updateResume() {

    const resumeId = localStorage.getItem("resumeId");

    if (!resumeId) {
        alert("Please save or load a resume first.");
        return;
    }

    const education = [...document.querySelectorAll(".education-item")]
        .map(item => ({
            degree: item.querySelector(".degree").value,
            institution: item.querySelector(".institution").value,
            year: item.querySelector(".educationYear").value,
            score: item.querySelector(".educationScore").value
        }));

    const experience = [...document.querySelectorAll(".experience-item")]
        .map(item => ({
            jobRole: item.querySelector(".jobRole").value,
            company: item.querySelector(".company").value,
            duration: item.querySelector(".duration").value,
            responsibilities: item.querySelector(".responsibilities").value
        }));

    const skills = [...document.querySelectorAll(".skill-item")]
        .map(item => ({
            skillName: item.querySelector(".skillName").value,
            skillLevel: item.querySelector(".skillLevel").value
        }));

    const projects = [...document.querySelectorAll(".project-item")]
        .map(item => ({
            projectName: item.querySelector(".projectName").value,
            projectTech: item.querySelector(".projectTech").value,
            projectDescription: item.querySelector(".projectDescription").value
        }));

    const achievements = [...document.querySelectorAll(".achievement")]
        .map(input => input.value);

    const certifications = [...document.querySelectorAll(".certification")]
        .map(input => input.value);

    const data = {

        fullName: document.getElementById("fullName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        linkedin: document.getElementById("linkedin").value,
        portfolio: document.getElementById("portfolio").value,
        summary: document.getElementById("summary").value,

        education: JSON.stringify(education),
        experience: JSON.stringify(experience),
        skills: JSON.stringify(skills),
        projects: JSON.stringify(projects),
        achievements: JSON.stringify(achievements),
        certifications: JSON.stringify(certifications),

        hobbies: document.getElementById("hobbies").value,
        referencesText: document.getElementById("references").value,

        template: document.getElementById("template").value,
        font: document.getElementById("font").value,
        themeColor: document.getElementById("themeColor").value
    };

    fetch("/api/resumes/" + resumeId, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to update resume");
        }
        return response.json();
    })
    .then(updatedResume => {

        alert("Resume updated successfully!");

        showAllResumes();
    })
    .catch(error => {
        console.error(error);

        alert(
            "Error updating resume. Please check the backend."
        );
    });
}

/* 
   EXPORT TXT
*/

function downloadTXT() {

    const name =
        document.getElementById("fullName").value
        || "resume";


    const content = `

${name}

Email:
${document.getElementById("email").value}

Phone:
${document.getElementById("phone").value}

Location:
${document.getElementById("location").value}

PROFESSIONAL SUMMARY
${document.getElementById("summary").value}

HOBBIES
${document.getElementById("hobbies").value}

REFERENCES
${document.getElementById("references").value}

    `;


    const blob =
        new Blob(
            [content],
            { type: "text/plain" }
        );


    const link =
        document.createElement("a");

    link.href =
        URL.createObjectURL(blob);

    link.download =
        name + "_resume.txt";

    link.click();
}


/* 
   PRINT / PDF
 */

function printResume() {

    window.print();
}


/* 
   ATS CHECKER
 */

function checkATS() {

    const jobDescription =
        document.getElementById("jobDescription")
        .value
        .toLowerCase();


    if (!jobDescription.trim()) {

        alert(
            "Please enter a job description."
        );

        return;
    }


    const resumeText =
        document.getElementById("resumePreview")
        .innerText
        .toLowerCase();


    const words =
        jobDescription
        .match(/[a-zA-Z][a-zA-Z+#.-]{2,}/g);


    if (!words) {

        return;
    }


    const uniqueWords =
        [...new Set(words)];


    let matched = [];

    let missing = [];


    uniqueWords.forEach(word => {

        if (resumeText.includes(word)) {

            matched.push(word);

        } else {

            missing.push(word);

        }

    });


    const score =
        Math.round(
            (matched.length /
            uniqueWords.length) * 100
        );


    document.getElementById("atsResult")
        .innerHTML = `

            <h3>ATS Score: ${score}%</h3>

            <p>
                <strong>
                    Matched Keywords:
                </strong>
            </p>

            <p>
                ${matched.join(", ") || "None"}
            </p>

            <br>

            <p>
                <strong>
                    Missing Keywords:
                </strong>
            </p>

            <p>
                ${missing.join(", ") || "None"}
            </p>
        `;
}


/* 
   AUTO LIVE PREVIEW
 */

document.addEventListener(
    "input",
    function () {

        updatePreview();

    }
);


/* INITIAL PREVIEW */

updatePreview();
showAllResumes();


function deleteResume() {

    const resumeId = localStorage.getItem("resumeId");

    if (!resumeId) {
        alert("Please save or load a resume first.");
        return;
    }

    if (!confirm("Are you sure you want to delete this resume?")) {
        return;
    }

    fetch("/api/resumes/" + resumeId, {
        method: "DELETE"
    })
    .then(response => {

        if (!response.ok) {
            throw new Error("Failed to delete resume");
        }

        localStorage.removeItem("resumeId");

        alert("Resume deleted successfully!");

    })
    .catch(error => {

        console.error(error);

        alert("Error deleting resume.");

    });
}



function showAllResumes() {
	

    fetch("/api/resumes")
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to fetch resumes");
            }

            return response.json();

        })
        .then(resumes => {
		
            const resumeList =
                document.getElementById("resumeList");

            resumeList.innerHTML = "";

            if (resumes.length === 0) {

                resumeList.innerHTML =
                    "<p>No saved resumes found.</p>";

                return;
            }

            resumes.forEach(resume => {
				

                const div = document.createElement("div");

                div.innerHTML = `
                    <strong>${resume.fullName || "Untitled Resume"}</strong>
                    <button onclick="loadResumeById(${resume.id})">
                        Load
                    </button>
                `;

                resumeList.appendChild(div);

            });

        })
        .catch(error => {

            console.error(error);

            alert("Error loading resume list.");

        });
}

////
function loadResumeById(id) {

    fetch("/api/resumes/" + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load resume");
            }
            return response.json();
        })
        .then(data => {

            localStorage.setItem("resumeId", data.id);

            // Basic Information
            document.getElementById("fullName").value = data.fullName || "";
            document.getElementById("email").value = data.email || "";
            document.getElementById("phone").value = data.phone || "";
            document.getElementById("location").value = data.location || "";
            document.getElementById("linkedin").value = data.linkedin || "";
            document.getElementById("portfolio").value = data.portfolio || "";
            document.getElementById("summary").value = data.summary || "";

            // Hobbies and References
            document.getElementById("hobbies").value = data.hobbies || "";
            document.getElementById("references").value =
                data.referencesText || "";

            // Customization
            if (data.template) {
                document.getElementById("template").value = data.template;
            }

            if (data.font) {
                document.getElementById("font").value = data.font;
            }

            if (data.themeColor) {
                document.getElementById("themeColor").value =
                    data.themeColor;
            }

            // ---------------- EDUCATION ----------------

            const educationContainer =
                document.getElementById("educationContainer");

            educationContainer.innerHTML = "";

            let education = [];

            try {
                education = JSON.parse(data.education || "[]");
            } catch (error) {
                education = [];
            }

            education.forEach(item => {

                addEducation();

                const items =
                    document.querySelectorAll(".education-item");

                const lastItem = items[items.length - 1];

                lastItem.querySelector(".degree").value =
                    item.degree || "";

                lastItem.querySelector(".institution").value =
                    item.institution || "";

                lastItem.querySelector(".educationYear").value =
                    item.year || "";

                lastItem.querySelector(".educationScore").value =
                    item.score || "";
            });


            // ---------------- EXPERIENCE ----------------

            const experienceContainer =
                document.getElementById("experienceContainer");

            experienceContainer.innerHTML = "";

            let experience = [];

            try {
                experience = JSON.parse(data.experience || "[]");
            } catch (error) {
                experience = [];
            }

            experience.forEach(item => {

                addExperience();

                const items =
                    document.querySelectorAll(".experience-item");

                const lastItem = items[items.length - 1];

                lastItem.querySelector(".jobRole").value =
                    item.jobRole || "";

                lastItem.querySelector(".company").value =
                    item.company || "";

                lastItem.querySelector(".duration").value =
                    item.duration || "";

                lastItem.querySelector(".responsibilities").value =
                    item.responsibilities || "";
            });


            // ---------------- SKILLS ----------------

            const skillsContainer =
                document.getElementById("skillsContainer");

            skillsContainer.innerHTML = "";

            let skills = [];

            try {
                skills = JSON.parse(data.skills || "[]");
            } catch (error) {
                skills = [];
            }

            skills.forEach(item => {

                addSkill();

                const items =
                    document.querySelectorAll(".skill-item");

                const lastItem = items[items.length - 1];

                lastItem.querySelector(".skillName").value =
                    item.skillName || "";

                lastItem.querySelector(".skillLevel").value =
                    item.skillLevel || "Beginner";
            });


            // ---------------- PROJECTS ----------------

            const projectsContainer =
                document.getElementById("projectsContainer");

            projectsContainer.innerHTML = "";

            let projects = [];

            try {
                projects = JSON.parse(data.projects || "[]");
            } catch (error) {
                projects = [];
            }

            projects.forEach(item => {

                addProject();

                const items =
                    document.querySelectorAll(".project-item");

                const lastItem = items[items.length - 1];

                lastItem.querySelector(".projectName").value =
                    item.projectName || "";

                lastItem.querySelector(".projectTech").value =
                    item.projectTech || "";

                lastItem.querySelector(".projectDescription").value =
                    item.projectDescription || "";
            });


            // ---------------- ACHIEVEMENTS ----------------

            const achievementContainer =
                document.getElementById("achievementContainer");

            achievementContainer.innerHTML = "";

            let achievements = [];

            try {
                achievements = JSON.parse(data.achievements || "[]");
            } catch (error) {
                achievements = [];
            }

            achievements.forEach(value => {

                addAchievement();

                const inputs =
                    document.querySelectorAll(".achievement");

                const lastInput = inputs[inputs.length - 1];

                lastInput.value = value || "";
            });


            // ---------------- CERTIFICATIONS ----------------

            const certificationContainer =
                document.getElementById("certificationContainer");

            certificationContainer.innerHTML = "";

            let certifications = [];

            try {
                certifications =
                    JSON.parse(data.certifications || "[]");
            } catch (error) {
                certifications = [];
            }

            certifications.forEach(value => {

                addCertification();

                const inputs =
                    document.querySelectorAll(".certification");

                const lastInput = inputs[inputs.length - 1];

                lastInput.value = value || "";
            });


            // Update Preview
            updatePreview();

            alert("Resume loaded successfully!");

        })
        .catch(error => {

            console.error(error);

            alert("Error loading resume.");

        });
}



function downloadDOCX() {

    const resumeId = localStorage.getItem("resumeId");

    if (!resumeId) {
        alert("Please save or load a resume first.");
        return;
    }

    fetch("/api/resumes/" + resumeId + "/docx")
        .then(response => {

            if (!response.ok) {
                throw new Error("Failed to export DOCX");
            }

            return response.blob();

        })
        .then(blob => {

            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");

            link.href = url;

            link.download =
                "resume.docx";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            URL.revokeObjectURL(url);

            alert("DOCX exported successfully!");

        })
        .catch(error => {

            console.error(error);

            alert("Error exporting DOCX.");

        });
}


function importCSV() {

    document.getElementById("csvFile").click();

}

function importCSVFile(event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        const csvText = e.target.result;

        const rows = csvText.split(/\r?\n/);

        if (rows.length < 2) {
            alert("CSV file is empty.");
            return;
        }

        const headers = rows[0].split(",");

        const values = rows[1].split(",");

        const data = {};

        headers.forEach((header, index) => {

            data[header.trim()] =
                values[index]
                    ? values[index].trim()
                    : "";

        });

        if (data.fullName !== undefined) {
            document.getElementById("fullName").value =
                data.fullName;
        }

        if (data.email !== undefined) {
            document.getElementById("email").value =
                data.email;
        }

        if (data.phone !== undefined) {
            document.getElementById("phone").value =
                data.phone;
        }

        if (data.location !== undefined) {
            document.getElementById("location").value =
                data.location;
        }

        if (data.linkedin !== undefined) {
            document.getElementById("linkedin").value =
                data.linkedin;
        }

        if (data.portfolio !== undefined) {
            document.getElementById("portfolio").value =
                data.portfolio;
        }

        if (data.summary !== undefined) {
            document.getElementById("summary").value =
                data.summary;
        }

        updatePreview();

        alert("CSV imported successfully!");

    };

    reader.readAsText(file);
}


//ATS wording suggestions


// Free Local Resume Wording Suggestions

function suggestProfessionalSummary() {
    const summaryField = document.getElementById("summary");

    if (!summaryField || !summaryField.value.trim()) {
        alert("Please enter your professional summary first.");
        return;
    }

    const original = summaryField.value.trim();

    const improved = original
        .replace(/\bi am a fresher\b/gi, "I am an entry-level professional")
        .replace(/\bi know\b/gi, "I have knowledge of")
        .replace(/\bi learned\b/gi, "I have learned")
        .replace(/\bi want to\b/gi, "I aim to")
        .replace(/\bgood knowledge\b/gi, "working knowledge")
        .replace(/\bworking on\b/gi, "developing");

    if (improved === original) {
        alert("Your summary already uses suitable wording, or no matching rule was found. Try adding a simple sentence to improve.");
        return;
    }

    summaryField.value = improved;

    if (typeof updatePreview === "function") {
        updatePreview();
    }

    alert("Professional summary wording improved!");
}






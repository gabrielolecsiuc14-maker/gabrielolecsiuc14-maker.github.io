document.querySelector(".btn-primary").addEventListener("click", () => {
    document.getElementById("acesso").scrollIntoView({ behavior: "smooth" });
});

const members = document.querySelectorAll(".team-member");
members.forEach(member => {
    const header = member.querySelector(".member-header");
    header.addEventListener("click", () => {
        members.forEach(m => {
            if (m !== member) m.classList.remove("active");
        });
        member.classList.toggle("active");
    });
});

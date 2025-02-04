const teamMembers = [
    {"name": "VIJIT BALSORI", "role": "Club Head", "image": "images/club_head _Vijit Balsori.jpg"},
    {"name": "ABNEESH KUMAR", "role": "Club Co-Head", "image": "images/club_co_head_abneesh.jpg"},
    {"name": "Nandini Goyal", "role": "OPNL Head", "image": "images/opnl_head_Nandini Goyal.jpg"},
    {"name": "Vashista Boddula", "role": "Content Head", "image": "images/content_head_vashista boddula.jpg"},
    {"name": "Manaswi", "role": "Creative Head", "image": "images/creative_head_manaswi.jpg"},
    {"name": "Mohit Tiwari", "role": "Margadarshan Head", "image": "images/margadarshan_head_mohit tiwari.jpg"},
    {"name": "Abneesh", "role": "Social Media Head", "image": "images/social_media_head_abneesh.jpg"},
    {"name": "Manik", "role": "Member", "image": "images/member1_manik.jpeg"},
    {"name": "Aishwarya Agrawal", "role": "Member", "image": "images/member2_Aishwarya Agrawal.jpg"},
    {"name": "ARPIT", "role": "Member", "image": "images/member3_ARPIT.jpg"},
    {"name": "Riya Meena", "role": "Member", "image": "images/member4_Riya Meena.jpg"},
    {"name": "Harshit Kumar", "role": "Member", "image": "images/member5_Harshit Kumar.jpg"},
    {"name": "Chelsiya Goyal", "role": "Member", "image": "images/member6_Chelsiya Goyal.jpg"},
    {"name": "Gaurav Rajput", "role": "Member", "image": "images/member7_Gaurav Rajput.jpg"},
    {"name": "Sadhna Singh", "role": "Member", "image": "images/member8_Sadhna Singh.jpg"},
    {"name": "Jeetesh Patel", "role": "Member", "image": "images/member9_Jeetesh Patel.jpeg"},
    {"name": "Ghoti Sakshi", "role": "Member", "image": "images/member10_Ghoti Sakshi.jpg"},
    {"name": "Apram Bhati", "role": "Member", "image": "images/member11_Apram Bhati.jpg"},
    {"name": "Moksha Pathak", "role": "Member", "image": "images/member12_Moksha Pathak.jpg"},
    {"name": "Apekshit", "role": "Member", "image": "images/member13_Apekshit.jpg"},
    {"name": "Varikuti Reethika Prasanna", "role": "Member", "image": "images/member14_Varikuti Reethika Prasanna.jpg"},
    {"name": "Sourabh Goswami", "role": "Member", "image": "images/member15_Sourabh Goswami.jpg"},
    {"name": "Nivedita", "role": "Member", "image": "images/member16_Nivedita Iiti.jpg"},
    {"name": "Ravi Kumar", "role": "Member", "image": "images/member17_Ravi Kumar.jpg"},
    {"name": "Muskan", "role": "Member", "image": "images/member18_Muskan.jpg"},
    {"name": "Ashwin Bansod", "role": "Member", "image": "images/member19_Ashwin Bansod.jpg"},
    {"name": "Kanak Nagar", "role": "Member", "image": "images/member20_Kanak Nagar.jpg"},
    {"name": "Snehungsu Sahana", "role": "Member", "image": "images/member21_Snehungsu Sahana.jpg"},
    {"name": "Rasika Kalokhe", "role": "Member", "image": "images/member22_Rasika Kalokhe.jpg"},
    {"name": "Yash Kumar", "role": "Member", "image": "images/member23_Yash Kumar.jpg"},
    {"name": "Shalini Bharti", "role": "Member", "image": "images/member24_Shalini Bharti.jpg"},
    {"name": "Aman Singh", "role": "Member", "image": "images/member25_Aman Singh.jpg"},
    {"name": "Arvapalli Vagdevi", "role": "Member", "image": "images/member26_Arvapalli Vagdevi.jpg"},
    {"name": "Utkarsh Singh", "role": "Member", "image": "images/member27_Utkarsh Singh.jpg"},
    {"name": "Aarushi Singh", "role": "Member", "image": "images/member28_Aarushi Singh.jpeg"},
    {"name": "Dharmendra Kumar", "role": "Member", "image": "images/member29_Dharmendra Kumar.jpg"},
    {"name": "Avdhoot Ramchandra", "role": "Member", "image": "images/member30_Avdhoot Ramchandra.jpg"},
    {"name": "Ritika Rawat", "role": "Member", "image": "images/member31_Ritika rawat.jpg"},
    {"name": "Suhith", "role": "Member", "image": "images/member32_suhith.jpg"},
    {"name": "Batchu Kesava", "role": "Member", "image": "images/member33_Batchu Kesava.jpg"},
    {"name": "Tiwari Surendra", "role": "Member", "image": "images/member34_Tiwari Surendra.jpg"},
    {"name": "Mankad Nehansh", "role": "Member", "image": "images/member35_Mankad Nehansh.jpg"},
    {"name": "Ishan Shrivastava", "role": "Member", "image": "images/member36_Ishan Shrivastava.jpeg"}
];

const teamContainer = document.getElementById('team-container');

teamMembers.forEach(member => {
    const teamMemberDiv = document.createElement('div');
    teamMemberDiv.classList.add('team-member');
    if (['Club Head', 'Club Co-Head'].includes(member.role)) {
        teamMemberDiv.classList.add('large');
    }

    teamMemberDiv.innerHTML = `
        <img src="${member.image}" alt="${member.name}" class="team-pic">
        <h2 class="member-name">${member.name}</h2>
        <p class="member-role">${member.role}</p>
    `;

    teamContainer.appendChild(teamMemberDiv);
});

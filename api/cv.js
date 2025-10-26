export default function handler(req, res) {
  const cvData = {
    personal: {
      name: "Achmad Farhan Hilal",
      nim: "1512622065",
      gender: "Male",
      birthPlace: "Tangerang",
      birthDate: "14 November 2003",
      nationality: "Indonesia",
      address: "Jl. Warung Tipung, RT 02 RW 12 No 84, Kel. Bojongsari, Kec. Bojongsari",
      city: "Depok",
      phone: "081297018610",
      email: "farhanhilal.fh@gmail.com",
      social: "@achmad.frr",
      hobby: "Badminton, Chess",
      religion: "Islam",
      height: "167 cm",
      weight: "63 kg",
      maritalStatus: "Single"
    },
    education: [
      {
        stage: "Elementary",
        name: "SDN Bojongsari 01 Kota Depok",
        major: "-",
        year: "2009-2015"
      },
      {
        stage: "Junior High School",
        name: "SMP Negeri 2 Tangerang Selatan",
        major: "-",
        year: "2015-2019"
      },
      {
        stage: "Senior High School",
        name: "SMA Muhammadiyah 25 Pamulang",
        major: "Science Program",
        year: "2019-2022"
      },
      {
        stage: "University",
        name: "State University of Jakarta",
        major: "S1-Informatics Engineering Education",
        year: "2021–Present"
      }
    ],
    achievements: [
      { name: "Chess Competition – Dekan Cup Fakultas Teknik, Universitas Negeri Jakarta", year: "2022", Description: "2nd Place Winner" },
      { name: "Photography Contest “Koefisien” - Himatika, UIN Syarif Hidayatullah Jakarta", year: "2020", Description: "Favorite Winner in Photography" },
      { name: "National Chess Championship “Polinema Cup 2025” - Politeknik Negeri Malang", year: "2025", Description: "Participant Certificate" },
      { name: "Leadership Training Program – Fakultas Teknik, Universitas Negeri Jakarta", year: "2022", Description: "Participant Certificate" },
      { name: "Sekolah Prestasi", year: "2022", result: "Participant Certificate" }
    ],
    skills: [
      "Networking (Cisco, Packet Tracer)",
      "Basic Network Troubleshooting",
      "Basic Computer Hardware Maintenance",
      "Computer Application Operation",
      "Time Management",
      "Team Collaboration"
    ],
    experiences: [
      {
        title: "Internship",
        place: "SMA Negeri 1 Kota Depok",
        period: "July 2025 - November 2025",
        description: [
          "Assisting in teaching Informatics subjects for high school students.",
          "Delivering lessons on basic computer and information system concepts.",
          "Supporting teachers in evaluating students’ assignments and practical activities.",
          "Maintaining classroom discipline and promoting a positive learning environment."
        ]
      },
      {
        title: "Part-time Staff",
        place: "Saung Kang Dedi Restaurant",
        period: "Apr 2021 – May 2021",
        description: [
          "Assisted in serving customers and maintaining cleanliness of the dining area.",
          "Maintained cleanliness and assisted kitchen staff.",
          "Supported kitchen operations and ensured timely service.",
          "Learned teamwork and communication skills in a fast-paced environment."
        ]
      }
    ],
    organizations: [
      { name: "Karang Taruna Kelurahan Bojongsari", role: "Education and Training Officer", years: "2022–2027", description: "Managed and facilitated educational and training programs to improve youth skills and community development." },
      { name: "Karang Taruna IRNA", role: "Chairman", years: "2021–2025", description: "Led the organization and coordinated religious and social activities for local youth." },
      { name: "Ikatan Remaja Muhammadiyah Pecinta Alam", role: "Member", years: "2019–2022", description: "Participated in environmental and youth development activities under the Muhammadiyah organization." },
      { name: "Forum Anak Kelurahan Bojongsari", role: "Member", years: "2019-2021", description: "Collected and voiced the aspirations of children in Bojongsari Sub-District, and participated in youth empowerment and community programs." }
    ]
  };

  res.status(200).json(cvData);
}

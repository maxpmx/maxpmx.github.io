// Easy update file for the website.
// Edit text, add publications, or reorder sections here. No build step is needed.
window.SITE_DATA = {
  name: "Minxing Pang",
  shortName: "Minxing",
  title: "Ph.D. Candidate in Applied Mathematics and Computational Science",
  affiliation: "University of Pennsylvania",
  location: "Philadelphia, PA",
  lastUpdated: "July 2026",
  profileImage: "assets/profile.jpg",
  cvPath: "assets/cv.pdf",
  tagline: "Ph.D. candidate at Penn building AI for computational pathology and spatial omics.",
  researchStatement: "I build deep-learning systems that turn routine tissue images into spatial molecular, cellular, and microenvironment readouts.",
  focus: "Histology-to-omics modeling, tissue image understanding, and spatial microenvironment analysis.",
  interests: [
    "Computational Pathology",
    "Spatial Omics",
    "Biomedical Imaging",
    "Deep Learning"
  ],
  contact: {
    email: "minxing@sas.upenn.edu",
    github: "https://github.com/maxpmx",
    scholar: "https://scholar.google.com/citations?user=wZbrjsQAAAAJ"
  },
  researchThemes: [
    {
      icon: "✦",
      title: "Histology-to-omics",
      text: "Predicting spatial molecular measurements from routine tissue images."
    },
    {
      icon: "◎",
      title: "Tissue-image AI",
      text: "Unified segmentation and classification models for biomedical images."
    },
    {
      icon: "▣",
      title: "Spatial microenvironments",
      text: "Quantifying cell niches and disease-relevant tissue organization."
    }
  ],
  featuredWork: [
    {
      title: "CelloType: A Unified Model for Segmentation and Classification of Tissue Images",
      meta: "Nature Methods, 2025",
      text: "Unified segmentation and classification for tissue images.",
      links: [
        { label: "Paper", url: "https://www.nature.com/articles/s41592-024-02513-1" },
        { label: "Code", url: "https://github.com/tanlabcode/CelloType" }
      ]
    },
    {
      title: "Query-driven generative AI synthesizes multi-modal spatial omics from histology",
      meta: "Under review, 2025",
      text: "Generative framework for synthesizing spatial omics from histology.",
      links: [
        { label: "bioRxiv", url: "https://www.biorxiv.org/content/10.64898/2025.12.11.693669v1" }
      ]
    }
  ],
  publications: [
    {
      category: "journal",
      year: "2025",
      title: "CelloType: A Unified Model for Segmentation and Classification of Tissue Images",
      authors: ["Pang M", "Roy TK", "Wu X", "Tan K"],
      venue: "Nature Methods",
      status: "Published",
      links: [
        { label: "Paper", url: "https://www.nature.com/articles/s41592-024-02513-1" },
        { label: "Code", url: "https://github.com/tanlabcode/CelloType" }
      ]
    },
    {
      category: "journal",
      year: "2024",
      title: "Mapping the cellular biogeography of human bone marrow niches using single-cell transcriptomics and proteomic imaging",
      authors: ["Bandyopadhyay S", "Duffy M", "Ahn K", "Sussman J", "Pang M", "...", "Tan K"],
      venue: "Cell",
      status: "Published",
      links: [
        { label: "Paper", url: "https://www.cell.com/cell/fulltext/S0092-8674(24)00408-2" }
      ]
    },
    {
      category: "journal",
      year: "2025",
      title: "Longitudinal single-cell multiomic atlas of high-risk neuroblastoma reveals chemotherapy-induced tumor microenvironment rewiring",
      authors: ["Yu W", "Biyik-Sit R", "Uzun Y", "Chen CH", "Thadi A", "Sussman JH", "Pang M", "...", "Tan K"],
      venue: "Nature Genetics",
      status: "Published",
      links: []
    },
    {
      category: "conference",
      year: "2020",
      title: "Representation Learning and Translation between the Mouse and Human Brain using a Deep Transformer Architecture",
      authors: ["Pang M", "Tegnér J"],
      venue: "ICML 2020 Workshop on Computational Biology",
      status: "Contributed Talk, Top 5%",
      links: [
        { label: "PDF", url: "https://icml-compbio.github.io/icml-website-2020/2020/papers/WCBICML2020_paper_29.pdf" },
        { label: "Code", url: "https://github.com/maxpmx/scTT-pytorch" }
      ]
    },
    {
      category: "preprint",
      year: "2025",
      title: "A Query-driven generative AI synthesizes multi-modal spatial omics from histology",
      authors: ["Pang M", "Roy TK", "Wu X", "Tan K"],
      venue: "Under review",
      status: "Preprint",
      links: [
        { label: "bioRxiv", url: "https://www.biorxiv.org/content/10.64898/2025.12.11.693669v1" }
      ]
    },
    {
      category: "preprint",
      year: "2021",
      title: "Leveraging information in spatial transcriptomics to predict super-resolution gene expression from histology images in tumors",
      authors: ["Pang M", "Su K", "Li M"],
      venue: "bioRxiv",
      status: "Preprint",
      links: [
        { label: "bioRxiv", url: "https://www.biorxiv.org/content/10.1101/2021.02.28.433265" },
        { label: "Code", url: "https://github.com/maxpmx/HisToGene" }
      ]
    }
  ],
  talks: [
    {
      title: "Towards Unified Segmentation and Classification of Tissue Images",
      venue: "HTAN-HuBMAP Joint Meeting, Stanford University",
      location: "California",
      date: "March 2024"
    },
    {
      title: "Towards Unified Segmentation and Classification of Tissue Images",
      venue: "Schmidt Center Symposium: Biomedical Science and AI, Koch Institute, MIT",
      location: "Massachusetts",
      date: "April 2025"
    },
    {
      title: "Generative AI synthesizes multi-modal spatial omics from histology",
      venue: "Shanghai Medical College, Fudan University",
      location: "China",
      date: "December 2024",
      note: "Invited"
    },
    {
      title: "Generative AI synthesizes multi-modal spatial omics from histology",
      venue: "School of Medicine, Zhejiang University",
      location: "China",
      date: "July 2025",
      note: "Invited"
    }
  ],
  education: [
    {
      institution: "University of Pennsylvania",
      location: "Philadelphia, PA, USA",
      degree: "Ph.D. in Applied Mathematics and Computational Science",
      date: "2022 - 2026 expected",
      advisor: "Kai Tan, Ph.D., Professor of Pediatrics"
    },
    {
      institution: "King Abdullah University of Science and Technology (KAUST)",
      location: "Saudi Arabia",
      degree: "M.S. in Applied Mathematics and Computational Science",
      date: "2020 - 2022",
      advisor: "Jesper Tegnér, Ph.D., Professor of Bioscience"
    },
    {
      institution: "Nankai University",
      location: "Tianjin, China",
      degree: "B.S. in Information and Computational Science",
      date: "2016 - 2020",
      advisor: "Jishou Ruan, Ph.D., Professor of Mathematics",
      thesis: "Modeling single-cell RNA-seq data using deep learning"
    }
  ],
  awards: [
    { title: "KAUST Fellowship", date: "2020 - 2022" },
    { title: "Outstanding Undergraduate Thesis of Nankai University", date: "2020", note: "Top 3%" },
    { title: "Nankai University Innovation Scholarship", date: "2017, 2018" },
    { title: "Provincial First Prize in Chinese Physics Competition", date: "2015" }
  ],
  mentoring: [
    {
      title: "Research Mentor",
      institution: "Tan Lab, Children's Hospital of Philadelphia & UPenn",
      date: "2022 - Present",
      text: "Mentor junior graduate and undergraduate students on computational pathology and spatial omics projects."
    }
  ],
  skills: [
    { level: "Advanced", items: ["Python", "PyTorch", "Deep Learning", "Biomedical Imaging"] },
    { level: "Familiar", items: ["R", "C++"] }
  ]
};

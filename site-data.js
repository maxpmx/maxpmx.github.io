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
  tagline: "Generative AI for computational pathology and spatial biology.",
  introduction: "I build multimodal methods that connect routine histology with spatial molecular context—from query-driven synthesis of RNA and protein maps to unified cell segmentation and classification.",
  researchStatement: "I develop computational methods that infer molecular context from tissue morphology, resolve cells and tissue structures, and integrate those results with spatial and single-cell data.",
  focus: "Generative histology-to-omics models and unified tissue-image analysis.",
  profileFacts: [
    { label: "Affiliation", value: "University of Pennsylvania" },
    {
      label: "Advisor",
      value: "Kai Tan, Ph.D.",
      url: "https://genetics.med.upenn.edu/faculty-profile/8885111"
    },
    { label: "Ph.D.", value: "Expected 2026" }
  ],
  researchPathway: [
    "Routine histology",
    "Cells + tissue structures",
    "Spatial RNA + protein",
    "Tissue biology"
  ],
  interests: [
    "Computational Pathology",
    "Spatial Omics",
    "Biomedical Imaging",
    "Deep Learning"
  ],
  contact: {
    email: "minxing@sas.upenn.edu",
    github: "https://github.com/maxpmx",
    scholar: "https://scholar.google.com/citations?user=wZbrjsQAAAAJ",
    orcid: "https://orcid.org/0000-0001-5208-5972"
  },
  researchThemes: [
    {
      figure: "omics",
      title: "Virtual spatial omics",
      text: "Inferring spatial RNA and protein maps from routine histology, from super-resolution prediction to text-guided generative modeling."
    },
    {
      figure: "unified",
      title: "Unified tissue-image AI",
      text: "Jointly segmenting and classifying cells and tissue structures with transformer-based models."
    },
    {
      figure: "ecosystem",
      title: "Tissue microenvironments",
      text: "Integrating single-cell and spatial data to map bone-marrow niches and therapy-associated tumor ecosystems."
    }
  ],
  featuredWork: [
    {
      label: "Lead work",
      title: "TissueCraftAI: query-driven spatial omics from histology",
      meta: "bioRxiv preprint · 2025",
      text: "A text-guided generative framework that predicts spatial transcriptomic and proteomic maps from standard histology images.",
      highlights: ["12M+ paired patches", "14 tissue types", "spatial RNA + protein"],
      links: [
        { label: "Preprint", url: "https://doi.org/10.64898/2025.12.11.693669" },
        { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41415434/" }
      ]
    },
    {
      label: "Lead work",
      title: "CelloType: one model for tissue segmentation and classification",
      meta: "Nature Methods · 2025",
      text: "An end-to-end transformer model that jointly detects, segments, and classifies cellular and noncellular structures in biomedical images.",
      highlights: ["joint multitask learning", "multiscale annotation"],
      links: [
        { label: "Paper", url: "https://doi.org/10.1038/s41592-024-02513-1" },
        { label: "Code", url: "https://github.com/tanlabcode/CelloType" }
      ]
    },
    {
      label: "Collaborative studies",
      title: "Mapping disease microenvironments across scales",
      meta: "Cell · 2024 / Nature Genetics · 2025",
      text: "Single-cell, spatial, proteomic, and epigenomic atlases reveal human bone-marrow niches and treatment-driven rewiring in neuroblastoma.",
      highlights: ["bone-marrow niches", "tumor microenvironment"],
      links: [
        { label: "Cell", url: "https://doi.org/10.1016/j.cell.2024.04.013" },
        { label: "Nature Genetics", url: "https://doi.org/10.1038/s41588-025-02158-6" }
      ]
    }
  ],
  publications: [
    {
      category: "preprint",
      date: "2025-12-13",
      year: "2025",
      title: "Query-driven generative AI synthesizes multi-modal spatial omics from histology",
      authors: ["Pang M", "Roy TK", "Wu X", "Tan K"],
      venue: "bioRxiv",
      status: "Preprint",
      role: "Lead author",
      links: [
        { label: "Preprint", url: "https://doi.org/10.64898/2025.12.11.693669" },
        { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41415434/" }
      ]
    },
    {
      category: "journal",
      date: "2025-05-01",
      year: "2025",
      title: "Longitudinal single-cell multiomic atlas of high-risk neuroblastoma reveals chemotherapy-induced tumor microenvironment rewiring",
      authors: ["Yu W", "Biyik-Sit R", "Uzun Y", "Chen CH", "Thadi A", "Sussman JH", "Pang M", "et al."],
      venue: "Nature Genetics",
      status: "Published",
      role: "Co-author",
      links: [
        { label: "Paper", url: "https://doi.org/10.1038/s41588-025-02158-6" }
      ]
    },
    {
      category: "journal",
      date: "2025-02-01",
      year: "2025",
      title: "CelloType: a unified model for segmentation and classification of tissue images",
      authors: ["Pang M", "Roy TK", "Wu X", "Tan K"],
      venue: "Nature Methods",
      status: "Published",
      role: "Lead author",
      links: [
        { label: "Paper", url: "https://doi.org/10.1038/s41592-024-02513-1" },
        { label: "Code", url: "https://github.com/tanlabcode/CelloType" }
      ]
    },
    {
      category: "journal",
      date: "2024-06-06",
      year: "2024",
      title: "Mapping the cellular biogeography of human bone marrow niches using single-cell transcriptomics and proteomic imaging",
      authors: ["Bandyopadhyay S", "Duffy MP", "Ahn KJ", "Sussman JH", "Pang M", "et al."],
      venue: "Cell",
      status: "Published",
      role: "Co-author",
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.cell.2024.04.013" }
      ]
    },
    {
      category: "preprint",
      date: "2021-11-28",
      year: "2021",
      title: "Leveraging information in spatial transcriptomics to predict super-resolution gene expression from histology images in tumors",
      authors: ["Pang M", "Su K", "Li M"],
      venue: "bioRxiv",
      status: "Preprint",
      role: "Lead author",
      links: [
        { label: "Preprint", url: "https://doi.org/10.1101/2021.11.28.470212" },
        { label: "Code", url: "https://github.com/maxpmx/HisToGene" }
      ]
    },
    {
      category: "conference",
      date: "2020-07-01",
      year: "2020",
      title: "Representation Learning and Translation between the Mouse and Human Brain using a Deep Transformer Architecture",
      authors: ["Pang M", "Tegnér J"],
      venue: "ICML 2020 Workshop on Computational Biology",
      status: "Contributed Talk",
      role: "Lead author",
      links: [
        { label: "PDF", url: "https://icml-compbio.github.io/icml-website-2020/2020/papers/WCBICML2020_paper_29.pdf" },
        { label: "Code", url: "https://github.com/maxpmx/scTT-pytorch" }
      ]
    }
  ],
  talks: [
    {
      title: "Towards Unified Segmentation and Classification of Tissue Images",
      venue: "HTAN-HuBMAP Joint Meeting, Stanford University",
      location: "California",
      date: "March 2024",
      sortDate: "2024-03-01"
    },
    {
      title: "Towards Unified Segmentation and Classification of Tissue Images",
      venue: "Schmidt Center Symposium: Biomedical Science and AI, Koch Institute, MIT",
      location: "Massachusetts",
      date: "April 2025",
      sortDate: "2025-04-01"
    },
    {
      title: "Generative AI synthesizes multi-modal spatial omics from histology",
      venue: "Shanghai Medical College, Fudan University",
      location: "China",
      date: "December 2024",
      sortDate: "2024-12-01",
      note: "Invited"
    },
    {
      title: "Generative AI synthesizes multi-modal spatial omics from histology",
      venue: "School of Medicine, Zhejiang University",
      location: "China",
      date: "July 2025",
      sortDate: "2025-07-01",
      note: "Invited"
    }
  ],
  education: [
    {
      institution: "University of Pennsylvania",
      location: "Philadelphia, PA, USA",
      degree: "Ph.D. in Applied Mathematics and Computational Science",
      date: "2022 - 2026 expected",
      advisor: "Kai Tan, Ph.D., Professor of Pediatrics",
      advisorUrl: "https://genetics.med.upenn.edu/faculty-profile/8885111"
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

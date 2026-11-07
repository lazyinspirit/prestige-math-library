---
id: def-middle-extension-l-adic-sheaf-on-a-curve
kind: definition
title: "Middle extension of a lisse l-adic sheaf on a curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
    - title: "Mark Andrea A. de Cataldo, Perverse sheaves and the topology of algebraic varieties, PCMI 2015 lecture notes"
      url: https://www.math.stonybrook.edu/~mde/MyPublishedPapers/PCMI_2015_Lecture_Notes.pdf
verification:
  precheck: n/a
---
## Definition

Let $X$ be a smooth connected curve over an algebraically closed field, let $j:U\hookrightarrow X$ be a dense open immersion, and let $\mathcal L$ be a lisse finite-rank $\mathbb Q_\ell$-sheaf on $U$. For this page, the **middle-extension sheaf** of $\mathcal L$ is the ordinary, underived direct image $j_*\mathcal L$. On an étale open $V\to X$ its sections are $(j_*\mathcal L)(V)=\mathcal L(V\times_XU)$. This definition uses the sheaf direct image and does not include the derived direct image $Rj_*$.
## Definition references

[[def-lisse-l-adic-sheaf-on-a-scheme|Lisse finite-rank adic sheaves]]

[[def-constructible-l-adic-sheaf-on-a-scheme|Constructible rational adic sheaves]]

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, §2.6](https://people.math.ethz.ch/~kowalski/elements.pdf)

[Mark Andrea A. de Cataldo, *Perverse sheaves and the topology of algebraic varieties*, §2.5 and the curve calculation at §2.4](https://www.math.stonybrook.edu/~mde/MyPublishedPapers/PCMI_2015_Lecture_Notes.pdf)

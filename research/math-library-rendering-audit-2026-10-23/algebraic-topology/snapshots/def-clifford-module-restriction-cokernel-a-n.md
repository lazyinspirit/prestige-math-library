---
id: def-clifford-module-restriction-cokernel-a-n
kind: definition
title: "Clifford-module restriction cokernels A_n"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 2
deps: [def-real-graded-clifford-module-bundles-and-groups]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Definition

For n≥0 put C_n=Cl(ℝ^n,−‖·‖²). Let M_n be the Grothendieck group of finite-dimensional real Z/2-graded left C_n-modules and let r_n:M_{n+1}→M_n be restriction along the standard inclusion of the first n Clifford generators. Define A_n=coker(r_n). For n=0 the grading is retained, so M_0≅Z⊕Z from even and odd dimensions; no parity type is identified with a volume-element eigenspace.

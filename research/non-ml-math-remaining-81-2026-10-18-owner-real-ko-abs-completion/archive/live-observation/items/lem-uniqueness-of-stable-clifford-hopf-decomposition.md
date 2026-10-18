---
id: lem-uniqueness-of-stable-clifford-hopf-decomposition
kind: lemma
title: "Uniqueness of the stable Clifford–Hopf decomposition"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 7
deps: [lem-reduced-relative-ko-suspension-exactness-and-product, thm-stable-clifford-hopf-decomposition-over-sphere-bundles, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

Under the finite-CW and rank hypotheses of [[thm-stable-clifford-hopf-decomposition-over-sphere-bundles]], suppose π^*E₀⊕H(V,Λ) and π^*E₁⊕H(V,Μ) become isomorphic after adding trivial real bundles and regular Clifford–Hopf bundles. Here module-bundle stable isomorphism means that Λ and Μ become isomorphic after adding finite direct sums of the regular graded C(V)-module. Then E₀ and E₁ are stably isomorphic over X, and Λ and Μ are stably isomorphic as graded C(V)-module bundles. The local proof must use the explicit block-rotation estimate and the relative cell argument over X×I, whose dimension is dim X+1.

## Authoring status

Requires a complete relative cell argument over X×I in dimension dim(X)+1 and the explicit block-rotation result. Both are unavailable as proved suppliers in this batch.

---
id: thm-real-clifford-thom-isomorphism
kind: theorem
title: "Real Clifford–Thom isomorphism"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 8
deps: [def-reduced-relative-ko-and-ko-compact-support, def-real-graded-clifford-module-bundles-and-groups, def-clifford-module-restriction-cokernel-a-n, lem-reduced-relative-ko-suspension-exactness-and-product, thm-stable-clifford-hopf-decomposition-over-sphere-bundles, lem-uniqueness-of-stable-clifford-hopf-decomposition, def-axiom-of-choice, lem-volume-chirality-and-clifford-hopf-clutching]
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

For a finite CW complex X and oriented Euclidean bundle V→X of rank n=4m≥0, let M(V) be the Grothendieck group of graded real C(V)-module bundles and KO_c^0(V)=\widetilde{KO}^0(Th(V)). Define Φ_V:M(V)→KO_c^0(V) by sending [Λ] to the relative class of the volume-eigenspace clutching triple (Λ^+,c(v),Λ^−) from [[lem-volume-chirality-and-clifford-hopf-clutching]], equivalently the associated bundle H(V,Λ) minus the pullback of its plus eigenspace along the north-pole section. Prove Φ_V is an isomorphism, identify the kernel before quotienting, and include the rank-zero case with its basepoint convention.

## Authoring status

Headline map remains explicit, including rank zero and kernel, but no complete proof establishes surjectivity and injectivity from the local decomposition and uniqueness statements; those statements are themselves blocked.

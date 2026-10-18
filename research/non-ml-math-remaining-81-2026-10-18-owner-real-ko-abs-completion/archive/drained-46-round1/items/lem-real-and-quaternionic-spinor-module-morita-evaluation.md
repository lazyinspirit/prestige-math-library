---
id: lem-real-and-quaternionic-spinor-module-morita-evaluation
kind: lemma
title: "Real and quaternionic spinor Morita evaluation"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps: [def-given-spin-and-spinc-structures-and-associated-spinor-bundles, def-real-graded-clifford-module-bundles-and-groups, thm-real-complex-clifford-algebra-classification, thm-graded-clifford-modules-and-real-complex-types]
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

For a given Spin structure and rank-8m or rank-(8m+4) Euclidean bundle V, let Σ be the specified irreducible graded real Clifford spinor bundle and let D=ℝ in rank 8m and D=ℍ in rank 8m+4. In the quaternionic case take the commuting right-H action on Σ and define the right action on Hom_C(V)(Σ,Λ) by (f·q)(s)=f(s\bar q); give Σ the corresponding left-H action q·s=s\bar q. Thus Hom_C(V)(Σ,Λ)⊗_HΣ is a balanced tensor product. Prove the evaluation map f⊗s↦f(s) is a bundle isomorphism, with the analogous real tensor product in the rank-8m case. The commutant type and this exact conjugation convention must be checked from the real/graded Clifford classification.

## Authoring status

The exact real/quaternionic commutant type and the bundle-level evaluation isomorphism require a fully checked Morita proof, including the right-H action on Hom and balanced tensor product. The batch-35 classification and graded-module proof bodies were read, but their readiness is not established here.

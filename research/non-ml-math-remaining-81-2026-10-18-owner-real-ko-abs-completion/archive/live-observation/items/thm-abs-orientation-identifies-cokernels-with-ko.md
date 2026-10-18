---
id: thm-abs-orientation-identifies-cokernels-with-ko
kind: theorem
title: "The ABS symbol identifies Clifford cokernels with KO coefficients"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 12
deps: [thm-real-clifford-thom-isomorphism, thm-real-bott-periodicity-from-rank-eight-clifford-thom, thm-ko-coefficient-table-and-eightfold-periodicity, def-abs-cokernel-and-clifford-symbol, lem-real-clifford-restriction-matrices, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Statement

For C_n=Cl(ℝ^n,−‖·‖²), define α_n on a graded module M=M^0⊕M^1 by the relative symbol triple (π^*M^0,π^*M^1,c(v)) over the disk/sphere pair, with section subtraction and the map to \widetilde{KO}^0(S^n). Prove that this symbol vanishes on restrictions from M_(n+1), so factors through A_n=coker(r_n), and that the induced α_n:A_n→KO^(−n)(pt) is an isomorphism. Identify the kernel before quotienting, verify n=0,1,2,4,8, and prove multiplicativity under the graded tensor product. The ABS comparison theorem that imports real periodicity is not a local proof.

## Authoring status

No proof verifies the actual relative symbol, its kernel on M_(n+1), the factorization through A_n, and the isomorphism in every degree. ABS Theorem 11.5 uses preexisting periodicity and cannot prove its local replacement.

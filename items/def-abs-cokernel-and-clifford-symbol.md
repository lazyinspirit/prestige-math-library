---
id: def-abs-cokernel-and-clifford-symbol
kind: definition
title: "The ABS Clifford cokernel and symbol map"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 3
deps: [def-reduced-relative-ko-and-ko-compact-support, def-real-graded-clifford-module-bundles-and-groups, def-clifford-module-restriction-cokernel-a-n]
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

For C_n=Cl(ℝ^n,−‖·‖²), a finite-dimensional graded real module M=M^0⊕M^1 determines the ABS symbol triple (π^*M^0,π^*M^1,c(v)) on the disk/sphere pair of ℝ^n: over a nonzero vector v, Clifford multiplication c(v) is an isomorphism because c(v)^2=−‖v‖²I. Its relative KO class is the candidate symbol. The separate theorem proves that the symbol vanishes on restrictions from C_(n+1), descends to A_n, and is an isomorphism.

The symbol is a relative class on the disk/sphere pair; since c(v) is invertible for v≠0, the triple is admissible. This definition alone does not claim factorization through A_n.

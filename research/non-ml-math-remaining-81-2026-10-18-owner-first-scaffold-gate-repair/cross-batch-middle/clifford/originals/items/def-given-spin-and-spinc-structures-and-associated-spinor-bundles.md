---
id: def-given-spin-and-spinc-structures-and-associated-spinor-bundles
kind: definition
title: "Given Spin and Spin-c structures and their spinor bundles"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 8
deps: [def-oriented-real-vector-bundle-and-oriented-frame-bundle, def-real-clifford-group-and-normalized-pin-spin, def-principal-g-bundle-and-associated-fiber-bundle, thm-real-pin-spin-topological-double-covers, def-associated-bundle-to-a-principal-bundle-and-representation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
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

Let V→X be an oriented Euclidean real vector bundle of rank n, with oriented frame bundle P_SO(V). Use Spin(n)=Spin_N=1(ℝⁿ,−‖·‖²), the norm-one even subgroup of the negative-square Clifford algebra, and its standard twisted-Clifford homomorphism λ_n:Spin(n)→SO(n). A Spin structure on V is a principal Spin(n)-bundle P with a Spin(n)-equivariant two-fold map P→P_SO(V) covering the identity on X and compatible with λ_n. A Spin^c structure is a principal Spin^c(n) lift of P_SO(V), where Spin^c(n)=(Spin(n)×U(1))/⟨(−1,−1)⟩. A spinor bundle is the associated bundle for the specified real Clifford representation; a Spin^c spinor bundle uses the specified complex representation and its U(1) weight. These are given structures; this definition asserts no existence criterion.
---
id: def-orthogonal-clifford-families-and-centrioles
kind: definition
title: "Orthogonal Clifford families and centriole spaces"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 3
deps: [def-clifford-algebra-of-a-quadratic-space, thm-universal-property-of-clifford-algebra]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jost-Hinrich Eschenburg and Bernhard Hanke, Bott–Thom isomorphism, Hopf bundles and Morse theory (2021)"
      url: "https://arxiv.org/pdf/2011.14368"
    - title: "M. F. Atiyah, R. Bott, and A. Shapiro, Clifford Modules, Topology 3, Supplement 1 (1964)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/abs.pdf"
    - title: "M. F. Atiyah, K-Theory (lectures, notes by D. W. Anderson, 1967), with K-Theory and Reality reprint"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf"
---

## Definition

Let p be a positive even integer and define SO(p)={J∈M_p(ℝ):JᵀJ=I, det J=1}. Its trace metric is the left-invariant Riemannian metric whose inner product at the identity is ⟨A,B⟩=−(1/p)tr(AB) for skew-symmetric A,B; at J its value on tangent vectors JA,JB is the same. An orthogonal negative-square Clifford family of length l is a list J₁,…,J_l∈SO(p) with J_i²=−I and J_iJ_j=−J_jJ_i for i≠j, equivalently a representation of C_l=Cl(ℝ^l,−‖·‖²) by these matrices. For a Riemannian manifold P and points x,y, its midpoint set is {γ(1/2): γ:[0,1]→P is a length-minimizing geodesic from x to y}; a centriole is a connected component of such a midpoint set. Put P₀=SO(p), J₀=I, and for j≥1 define P̂_j={J∈SO(p):J²=−I and JJ_i=−J_iJ for i<j}; let P_j be the connected component of P̂_j containing J_j. A compatible family also satisfies J_j∈P_(j−1). The geometric midpoint interpretation of this algebraic component is the claim of the next lemma.
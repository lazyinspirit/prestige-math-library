---
id: lem-clifford-centrioles-and-geodesic-tangent-condition
kind: lemma
title: "Clifford centrioles and geodesic tangent conditions"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 1
deps: [def-orthogonal-clifford-families-and-centrioles]
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

For p even, the trace metric, and a compatible orthogonal Clifford family J₁,…,J_l as defined in [[def-orthogonal-clifford-families-and-centrioles]], let M_j be the midpoint set in P_(j−1) between J_(j−1) and −J_(j−1), with J₀=I. The component of M_j containing J_j is exactly the component P_j of the algebraic locus P̂_j. Each P_j is totally geodesic. For a skew-symmetric matrix A, the curve t↦exp(tA)J_j lies in P_j for every real t exactly when A anticommutes with J_j and commutes with each J_i for i<j.

## Authoring status

The statement requires a full proof that the trace metric geodesic midpoint loci equal the algebraic anticommuting loci, and a two-way tangent criterion. The source argument uses global geodesic facts for compact matrix groups; write and verify these locally with exact metric and connected-component hypotheses.

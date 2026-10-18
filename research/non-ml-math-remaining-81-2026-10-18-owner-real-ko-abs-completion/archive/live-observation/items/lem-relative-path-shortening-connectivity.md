---
id: lem-relative-path-shortening-connectivity
kind: lemma
title: "Relative path-shortening connectivity from index bounds"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 2
deps: [lem-clifford-centrioles-and-geodesic-tangent-condition]
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

Let P be a compact Riemannian manifold, o,p∈P, and Ω_*(o,p) a fixed path component of the H¹ path space of paths from o to p. Let Ω_*^0 be the subset of length-minimizing geodesics in that component. The energy is E(γ)=∫₀¹‖γ′(t)‖²dt; a geodesic is nonminimal if it does not minimize length, and its Morse index is the maximal dimension of a subspace of endpoint-vanishing variation fields on which the second variation of E is negative definite. If every nonminimal critical geodesic in Ω_* has Morse index at least d+1, then Ω_*^0→Ω_* is d-connected: for every finite CW pair (K,A) of dimension at most d, every map K→Ω_* carrying A into Ω_*^0 is homotopic relative to A to a map with all of K in Ω_*^0. The exact finite-dimensional polygon approximation and relative Morse argument are not supplied by the cited source and remain required locally.

## Authoring status

EH §4 does not give the required finite-dimensional relative Morse–Bott/path-shortening proof for arbitrary finite-CW pairs and prescribed boundary maps. Supply the compact finite-polygon model, relative approximation, index filtration and connectivity argument; otherwise the inclusion claim is unsupported.

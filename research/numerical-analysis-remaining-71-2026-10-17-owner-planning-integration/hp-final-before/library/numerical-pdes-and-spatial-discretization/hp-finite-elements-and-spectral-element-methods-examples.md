---
page: hp-finite-elements-and-spectral-element-methods-examples
title: hp finite elements and spectral elements — Examples
status: draft
items: []
examples:
  - ex-hp-analytic-p-refinement-on-a-fixed-box
  - ex-hp-gll-mass-top-mode-correction
  - cex-hp-degree-independent-sipdg-penalty-loses-coercivity
  - ex-hp-reentrant-corner-h-versus-hp
requires:
  - hp-finite-elements-and-spectral-element-methods
---

These examples apply the fixed-box analytic p estimate, compute the degree-two GLL mass correction, and give a two-cell SIPDG counterexample showing why a fixed penalty fails as degree grows. On one L-shaped polygon, the reentrant-corner example proves both the local fixed-degree h lower bound of order $h^{2/3}$ and the global $e^{-bN^{1/3}}$ hp upper bound on the stated geometrically graded meshes. Its Dirichlet set is exactly the two edges where the corner mode vanishes; no zero condition is imposed on the other edges.

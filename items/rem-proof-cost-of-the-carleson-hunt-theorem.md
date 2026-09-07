---
id: rem-proof-cost-of-the-carleson-hunt-theorem
kind: remark
title: What the Carleson–Hunt proof requires
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references: [{title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations', url: 'https://arxiv.org/pdf/math/0307008', locator: '§3 before §3.1, pp. 11–14; §7 opening and §7.2 opening through (7.9), pp. 24–26'}]
external_refs: [rem-carleson-hunt-almost-everywhere-convergence]
status: draft
origin: pipeline
---

## One proof route

The Lacey–Thiele route to [[rem-carleson-hunt-almost-everywhere-convergence]] uses a decomposition in time and frequency. Lacey's survey works with a real-line model; it is not a local transference argument to the torus.

In §3, tiles are organized into trees. Lemma 3.6 reduces residual density and controls the total length of selected tree tops by inverse density. Lemma 3.9 reduces residual size with an inverse-square size bound on that total length. Lemma 3.11 bounds a tree contribution by its top length times its size and density. Matching density with squared size balances these estimates, and (3.13)–(3.16) leave scale contributions bounded by multiples of $\min\{2^{-n},2^n\}$, summable over $n\in\mathbb Z$.

The $L^p$ extension in §7 uses distributional estimates and interpolation. For the large testing-set case, its opening removes an exceptional set defined by a maximal function and separately treats tiles inside and outside that set. This is a sourced roadmap of one method. The density, size, tree and exceptional-set estimates have not been proved on this page.

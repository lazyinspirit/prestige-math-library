---
id: def-euler-characteristic-of-a-compact-manifold
kind: definition
title: "Euler characteristic of a compact manifold"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-singular-chain-complex-and-singular-homology, def-dimension, def-rationals, def-smooth-manifold, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-euler-characteristic-of-a-finite-cw-complex, thm-euler-poincare-formula-for-finite-cw-complexes, thm-cellular-homology-computes-singular-homology, def-axiom-of-choice]
justified_by: [prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John W. Milnor, Topology from the Differentiable Viewpoint (complete 76-page PDF, including the appendix Classifying 1-manifolds)"
      url: "https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf"
      locator: "§6, printed pp. 32-41 (the Euler number of a compact manifold as an alternating sum of ranks of homology groups)"
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §5 and §7, printed pp. 132-150 (Euler characteristic as an alternating sum)"
dependency_level: 0
---

## Definition

Let $M$ be a compact smooth $n$-manifold, possibly with boundary
([[def-smooth-manifold]] in the boundaryless case,
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]] in the
boundary case). Its **Euler characteristic** is
$$\chi(M):=\sum_{i=0}^{n}(-1)^i\dim_{\mathbb Q}H_i(M;\mathbb Q)\in\mathbb Z,$$
the alternating sum of the rational Betti numbers of the singular homology of
$M$ ([[def-singular-chain-complex-and-singular-homology]], [[def-dimension]],
[[def-rationals]]). The empty manifold has $\chi(\varnothing)=0$, the empty
sum. The sum is finite because $\dim_{\mathbb Q}H_i(M;\mathbb Q)<\infty$ for
every $i$ and $H_i(M;\mathbb Q)=0$ for $i>n$; that finiteness is proved on this
page in
[[prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]],
which is why it is recorded as the well-definedness pointer rather than assumed
here. The definition itself uses no orientation and no choice of field or
coefficient system.

When $M$ has a finite CW model, $\chi(M)$ agrees with its cell-count Euler
characteristic ([[def-euler-characteristic-of-a-finite-cw-complex]]): the
finite rational cellular complex has one generator per cell, and alternating
rank-nullity cancels boundary dimensions. Cellular homology
([[thm-cellular-homology-computes-singular-homology]]) therefore identifies
that cell count with the rational Betti alternating sum. The integral
Euler-Poincare formula
([[thm-euler-poincare-formula-for-finite-cw-complexes]]) gives the same count.
The relative version is proved in
[[prop-euler-characteristic-additivity-for-relative-finite-cell-decompositions]].
The cited well-definedness proposition assumes the Axiom of Choice
([[def-axiom-of-choice]]) to obtain an excellent Morse function. The formula
for $\chi$ makes no selection of auxiliary data.

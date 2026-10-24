---
id: def-convergence-in-measure
kind: definition
title: "Convergence in measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-measure-space]
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  references:
    - title: "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th ed., Section 5.2"
      url: "https://fliphtml5.com/avac/zfwm/Measure_Theory_Royden/"
    - title: "Terence Tao, 245A Notes 4: Modes of convergence"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n,f : X \to \mathbb{R}$ be measurable. The sequence $(f_n)$
**converges to $f$ in measure** when for every real $\varepsilon > 0$,

$$\mu(\{x \in X : |f_n(x)-f(x)|>\varepsilon\}) \to 0.$$

Thus convergence in measure asks only that, for each fixed threshold
$\varepsilon$, the measure of the bad set $\{|f_n-f|>\varepsilon\}$ vanish as
$n \to \infty$.

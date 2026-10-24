---
id: def-cauchy-in-measure
kind: definition
title: "Cauchy sequences in measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-convergence-in-measure]
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.30"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "H. L. Royden and P. M. Fitzpatrick, Real Analysis, 4th ed., Section 5.2"
      url: "https://fliphtml5.com/avac/zfwm/Measure_Theory_Royden/"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space and let
$f_n : X \to \mathbb{R}$ be measurable for every $n \in \mathbb N$. The
sequence $(f_n)$ is **Cauchy in measure** when for every real
$\varepsilon > 0$,
$$\mu(\{x \in X : |f_n(x)-f_m(x)|>\varepsilon\}) \to 0$$
as $m,n \to \infty$.

Equivalently: for every $\varepsilon > 0$ and every $\eta > 0$ there is
$N \in \mathbb N$ such that
$$m,n \ge N \qquad\Longrightarrow\qquad \mu(\{|f_n-f_m|>\varepsilon\})<\eta.$$

---
id: alg-random-permutation-monte-carlo-pvalue
kind: algorithm
title: "Identity-corrected random-permutation Monte Carlo p-value"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - def-independent-random-elements
  - def-uniform-finite-probability-space
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, Definition 2 and Theorem 2"
      url: "https://arxiv.org/pdf/1411.7565"
    - title: "Eugene Katsevich, STAT 9610 Lecture Notes, §3.2.4.2, equations (3.18)–(3.20)"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf"
verification:
  precheck: n/a
---

## Definition

**Input:** a measurable finite-group setup
[[def-measurable-finite-group-permutation-setup]], an observed $x$, an
integer $B\ge0$, and one of the two simulation designs below. Simulated
transformations are independent of $X$.

1. **With replacement.** Draw $g_1,\ldots,g_B$ independently and uniformly
   from $G$. Set $g_0=e$, the identity, and return
   $$\widehat p_{B,\mathrm{wr}}(x):=\frac{1+\sum_{b=1}^{B}\mathbf 1\{T(g_b\cdot x)\ge T(x)\}}{B+1}.$$
   A simulated draw may itself equal $e$; it is still counted in addition to
   the distinguished identity.
2. **Without replacement.** Require $B\le |G|-1$. Draw a subset $S$ uniformly
   from the $B$-element subsets of $G\setminus\{e\}$, and return
   $$\widehat p_{B,\mathrm{wor}}(x):=\frac{\#\{g\in\{e\}\cup S:T(g\cdot x)\ge T(x)\}}{B+1}.$$
   This is a uniform-subset design; the selected transformations are distinct
   and the identity is adjoined.

In either design, a cutoff rule rejects when the returned value is at most
$\alpha\in[0,1]$. For $B=0$ the only transformation is the distinguished
identity and the returned value is $1$. Validity under an invariant null law,
including ties, is a separate theorem on this page.

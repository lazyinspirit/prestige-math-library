---
id: alg-three-dimensional-laplace-cluster-expansion
kind: algorithm
title: Single-cluster three-dimensional Laplace multipole evaluator
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-three-dimensional-spherical-harmonic-space, lem-three-dimensional-laplace-spherical-harmonic-addition-theorem]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Michael O’Neil, Integral Equations and Fast Algorithms, complete course lecture notes (2017)"
      url: "https://cims.nyu.edu/~oneil/courses/fa17-math2011/int_eq_notes_2017.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Definition

Fix an integer $p\ge0$, a finite set of source labels $J$ with positions $y_j\in\mathbb R^3$ and charges $q_j\in\mathbb C$, a center $c$, and a radius $a\ge0$ with $|y_j-c|\le a$. For each $0\le\ell\le p$, supply an orthonormal basis $\{Y_{\ell m}:-\ell\le m\le\ell\}$ of $\mathcal H_\ell$ from [[def-three-dimensional-spherical-harmonic-space]]; its existence and dimension are given by [[lem-three-dimensional-laplace-spherical-harmonic-addition-theorem]]. Form moments
$$M_{\ell m}=\sum_{j\in J}q_j\overline{H_{\ell m}(y_j-c)}.$$
For every target $x$ with $r=|x-c|>a$, evaluate the truncated single-cluster multipole field
$$\widetilde U_p(x)=4\pi\sum_{\ell=0}^p\frac{1}{2\ell+1}\frac{1}{r^{\ell+1}}\sum_{m=-\ell}^{\ell}M_{\ell m}Y_{\ell m}\!\left(\frac{x-c}{r}\right).$$
The output is an approximation to $U(x)=\sum_{j\in J}q_j/|x-y_j|$. This is the source-cluster-to-target evaluator only; it makes no 3D tree-translation or global all-target complexity claim.

For the arithmetic count, store each basis polynomial by its monomial coefficient array. Basis setup is done once for the chosen $p$. To evaluate the displayed formula directly, evaluate every basis polynomial by summing its monomials at each source and target point, then accumulate the moments and target sums. This convention makes the basis-evaluation work explicit rather than treating each special-function evaluation as free.

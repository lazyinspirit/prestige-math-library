---
id: thm-li-yang-final-divisor-circle-reduction
kind: theorem
title: "Li–Yang Final Divisor–Circle Reduction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: [thm-li-yang-first-spacing-proposition-3-1, thm-li-yang-second-spacing-bombieri-iwaniec-bound, thm-voronoi-divisor-summation-for-smooth-compact-support, thm-voronoi-two-square-summation-for-smooth-radial-tests, def-dirichlet-divisor-error-term, def-gauss-circle-error-term, def-countable-choice]
justified_by: []
axiom_use: "Countable Choice is required by the radial two-square Voronoï supplier; no full Axiom of Choice is asserted."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”"
      url: "https://arxiv.org/pdf/2308.14859v2"
      locator: "Theorem 1.2 and §5"
    - title: "Stephen D. Miller and Wilfried Schmid, “Summation Formulas, from Poisson and Voronoi to the Present”"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1 divisor and circle summation conventions"
verification:
  precheck: n/a
---

## Statement

Assume Countable Choice. For the divisor and squared-radius circle error terms Δ(X) and P(X), the reduction in Li–Yang §5 combines its first-spacing estimate, second-spacing estimate, and the divisor and radial two-square Voronoï formulas to bound both errors by the stated exponent θ*=0.3144831759741… with an arbitrary positive power loss. The final source reduction is the one asserted in Li–Yang Theorem 1.2 and §5.

## Statement references

[Xiao-Chun Li and Xuerui Yang, “An Improvement on Gauss’s Circle Problem and Dirichlet’s Divisor Problem”](https://arxiv.org/pdf/2308.14859v2)

[Stephen D. Miller and Wilfried Schmid, “Summation Formulas, from Poisson and Voronoi to the Present”](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** Countable Choice and the other hypotheses in the Statement.

[A1] [[def-countable-choice]]: Countable Choice asserts that every at most countable family of nonempty sets has a choice function.

[F1] [[def-dirichlet-divisor-error-term]]: For each positive integer $n$, put $d(n):=\tau(n)$, the number of positive divisors of $n$. Let $\gamma$ be the Euler–Mascheroni constant. All sums indexed by $n$ are over positive integers. For every real $x\ge1$,
$$\Delta(x):=\sum_{1\le n\le x}d(n)-x\log x-(2\gamma-1)x.$$

[F2] [[def-gauss-circle-error-term]]: For real $x\ge0$, define the squared-radius Gauss circle error by
$$P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x =1+\sum_{1\le n\le x}r_2(n)-\pi x,$$
where $r_2(n)$ counts ordered pairs of integers with sum of squares $n$. The radius of the counted disk is $\sqrt{x}$, and the initial $1$ records the origin.

## Proof status

Li–Yang §5 refers the decisive error/reduction estimates to §7 of Bourgain–Watt arXiv:1709.04340v1. The v2 record withdraws Theorems 1–3 because of proof faults. This batch has not reconstructed the reduction independently. The source claim is preserved but is not a ready theorem.

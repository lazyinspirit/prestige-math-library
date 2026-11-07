---
id: alg-turing-method-for-rigorous-zero-counts
kind: algorithm
title: "Turing's argument-principle method for certified zero counts"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - alg-interval-arithmetic-for-l-function-zero-counts
  - def-dirichlet-l-function
  - thm-primitive-dirichlet-l-analytic-continuation
  - def-completed-dirichlet-l-function
  - thm-primitive-dirichlet-l-functional-equation
  - def-euler-gamma-function
  - thm-euler-gamma-function-is-holomorphic
  - thm-cauchy-integral-formula-circle
  - thm-argument-principle-null-homologous-cycle
  - def-weighted-zero-and-pole-counts-on-cycle
  - def-countable-choice
  - def-riemann-xi-function
sources:
  references:
    - title: "David J. Platt, Isolating some non-trivial zeros of zeta, §§4.1–4.2"
      url: "https://community.ams.org/journals/mcom/2017-86-307/S0025-5718-2017-03198-7/S0025-5718-2017-03198-7.pdf"
    - title: "Nickolas Andersen, Analytic Number Theory, §§11.1–11.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
verification:
  precheck: n/a
---

## Definition

The generic input is a holomorphic function $F$ on an open neighbourhood of the closure of a bounded rational polygon $D\subset\mathbb C$, together with its positively oriented, piecewise-linear boundary parametrization $\gamma$. This generic contour-count mode is choice-free. For the degree-one L-function application, $F$ is a primitive Dirichlet $L$-function or its completed function on a pole-free region; the primitive-character and parity convention is the one in the stated functional equation. The zeta critical-line mode uses the entire completion $\xi(s)$ and therefore assumes Countable Choice. If a completion uses the Gamma factor, every Taylor disc must lie in a domain where that factor is holomorphic. The certificate also contains a finite rational partition of each edge and Taylor certificates for $F$ and $F'$ on rectangles covering every partition cell, as defined by the interval-arithmetic algorithm.

For each cell $[t_{j-1},t_j]$, compute rational complex rectangles $V_j$ and $W_j$ enclosing $F(\gamma(t))$ and $F'(\gamma(t))$ throughout the cell. Reject unless $0\notin V_j$. The edge derivative $\gamma'$ is constant and rational on each cell, so exact interval arithmetic forms
$$G_j:=W_j\,\gamma'/V_j,$$
which encloses $F'(\gamma(t))\gamma'/F(\gamma(t))$ on the cell. Since this enclosure is a convex rectangle, the integral over that cell is enclosed by $(t_j-t_{j-1})G_j$. Sum the cell rectangles and divide by $2\pi i$ using the rational interval for $\pi$ constructed by the interval-arithmetic algorithm. Reject unless the resulting rectangle $Q$ has exactly one integer $n$ in its real-coordinate interval and its imaginary-coordinate interval contains $0$. Otherwise return the zero-count certificate with output $n$. Reject if a Taylor disc, value bound, denominator, or boundary cell fails its stated domain or enclosure check. The returned count is conditional on the supplied Taylor coefficient and boundary bounds being valid; the procedure does not assert that a certificate exists or that a production computation has been run.

## Definition references

[[alg-interval-arithmetic-for-l-function-zero-counts]]

[[thm-primitive-dirichlet-l-functional-equation]]

[[thm-argument-principle-null-homologous-cycle]]

[[def-weighted-zero-and-pole-counts-on-cycle]]

[[thm-cauchy-integral-formula-circle]]

[[def-countable-choice]]

[[def-riemann-xi-function]]

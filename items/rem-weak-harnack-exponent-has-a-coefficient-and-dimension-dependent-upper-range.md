---
id: rem-weak-harnack-exponent-has-a-coefficient-and-dimension-dependent-upper-range
kind: remark
title: "Weak-Harnack exponent range and its dimension-dependent upper endpoint"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [thm-weak-harnack-inequality-for-nonnegative-supersolutions]
justified_by: []
forward_refs: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Theorem 2 and the Moser iteration generating the exponent range 0 < p < n/(n-2), printed pp. 1-9 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 17, Theorem 2 with the range 0 < p < n/(n-2), printed pp. 199-210 (read in full)"
---

## Statement

The weak Harnack inequality of [[thm-weak-harnack-inequality-for-nonnegative-supersolutions]] is asserted only for the sourced range $0<p<n/(n-2)$ when $n\ge3$ (and for every finite $p$ when $n=2$). The endpoint $n/(n-2)$ depends only on dimension; the seed exponent $p_0$ and constants depend on the coefficients. Starting from $p_0$, the higher exponents below that endpoint are obtained by the positive-integrability Sobolev transitions in the weak-Harnack proof, while Hölder interpolation supplies smaller exponents. No claim is made here that every positive exponent is admissible; in particular one must not restate the weak Harnack inequality with an arbitrary $p>0$, and the constant for the source $F\in L^q$ depends on $n,q,\theta,M_a,p$ as recorded.

## Sources

Krummel, *DeGiorgi-Nash lecture notes*, Theorem 2 (printed p. 1) states the weak Harnack inequality for $0<p<n/(n-2)$ when $n\ge3$, and its proof obtains higher exponents from the fixed seed by Sobolev transitions, with Hölder interpolation giving smaller exponents. Simon, *Lectures on Partial Differential Equations*, Lecture 17, Theorem 2 (printed pp. 199-210) states the same range. The remark records the exact range of the theorem of [[thm-weak-harnack-inequality-for-nonnegative-supersolutions]] and carries no proof obligation of its own.

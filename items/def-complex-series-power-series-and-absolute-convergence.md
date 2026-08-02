---
id: def-complex-series-power-series-and-absolute-convergence
kind: definition
title: "Complex series, absolute convergence, complex power series, and radius of convergence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-complex-numbers-form-a-field, def-monoid-finite-product, def-complex-metric-convergence-and-continuity, def-complex-integer-powers, def-series-of-vectors-and-rearrangement, def-real-power-series-and-radius-of-convergence, def-series]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Definition

A **complex sequence** is a function $a\colon\mathbb N\to\mathbb C$. Since the
additive reduct $(\mathbb C,+,0)$ of the complex field is a commutative monoid,
the finite-list construction of [[def-monoid-finite-product]], read additively,
defines its complex partial sums by
$$
S_0=0,\qquad S_{N+1}=S_N+a_N,\qquad S_N=\sum_{n<N}^{\mathbb C}a_n.
$$
The superscript is omitted when the summands already make the codomain clear.

The **complex series** $\sum a_n$ converges to $s\in\mathbb C$ when
$S_N\to s$ in the metric of
[[def-complex-metric-convergence-and-continuity]]; then $s$ is its sum. This is
the same finite sum and convergence as the vector-series definition on
$\mathbb R^2$ in [[def-series-of-vectors-and-rearrangement]]. The series
**converges absolutely** when the real series $\sum |a_n|$ of [[def-series]]
converges. For a bijection $\sigma\colon\mathbb N\to\mathbb N$, its
**rearrangement along $\sigma$** is the complex series $\sum a_{\sigma(n)}$.

Let $(c_n)$ be a complex sequence and $a\in\mathbb C$. The **complex power
series centered at $a$ with coefficients $(c_n)$** is
$$
\sum_{n=0}^{\infty}c_n(z-a)^n,
$$
with powers from [[def-complex-integer-powers]] and the preceding complex
partial sums. To define its radius without ambiguity, form the specific real
power series
$$
Q(x):=\sum_{n=0}^{\infty}|c_n|x^n
$$
centered at $0$. The **radius of convergence** of the complex power series is,
by definition, the radius of this $Q$ in
[[def-real-power-series-and-radius-of-convergence]]. Thus the coefficient
sequence, real variable, and center of the comparison series are all explicit.

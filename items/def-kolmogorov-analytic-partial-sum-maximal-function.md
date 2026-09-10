---
id: "def-kolmogorov-analytic-partial-sum-maximal-function"
kind: "definition"
title: "Kolmogorov analytic partial sum maximal function"
deps: ["def-period-one-fourier-coefficients-partial-sums-and-convolution"]
sources:
  references:
    - title: Grafakos, Classical Fourier Analysis, third edition
      url: https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf
      locator: 4.2.1; convention adaptation
provenance:
  statement: literature-derived
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

Use $\mathbb T=\mathbb R/\mathbb Z$, normalized measure $dx$ and $e_k(x)=e^{2\pi ikx}$ as in [[def-period-one-fourier-coefficients-partial-sums-and-convolution]]. An **analytic trigonometric polynomial** is $P=\sum_{k=0}^d a_ke_k$ for an integer $d\ge0$, with no negative-frequency terms. Set
$$A_nP=\sum_{k=0}^{\min(n,d)}a_ke_k\quad(n\ge0),\qquad A_{-1}P=0,\qquad A_*^dP=\max_{0\le n\le d}|A_nP|.$$
Trailing zero coefficients do not affect this maximum: every cutoff beyond the degree equals $P$, already attained at its degree. The zero polynomial may be represented with $d=0$ and has maximal function zero. Each partial sum and the finite maximum are continuous, hence measurable.

The coefficients agree with the integral Fourier coefficients of the cited convention: finite linearity reduces to $\int_0^1e_{k-\ell}(x)\,dx$, which is one for $k=\ell$ and is $[e^{2\pi i(k-\ell)x}/(2\pi i(k-\ell))]_0^1=0$ otherwise. Thus for an analytic polynomial, the symmetric partial sum $S_nP$ equals $A_nP$. No infinite series or choice of representatives is involved in these finite identities.

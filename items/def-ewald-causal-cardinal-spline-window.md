---
id: def-ewald-causal-cardinal-spline-window
kind: definition
title: "Causal cardinal spline window"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-convolution-of-two-functions-on-rn]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A theoretical and numerical comparison of various particle mesh routines (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§3, equations (19)–(20), and Appendix E: order-P cardinal spline as the P-fold convolution of the unit-interval indicator and its tensor-product use."
    - title: "Multi-Level Ewald: A hybrid multigrid / Fast Fourier Transform approach to the electrostatic particle-mesh problem (2011)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/"
      locator: "§2.1, equations (2)–(7): cardinal B-spline charge assignment and particle-to-mesh interpolation."
verification:
  precheck: n/a
---

## Definition

For $P=1$ set $W_1(u)=\mathbf 1_{[0,1]}(u)$, including both endpoints. For an
integer $P\ge2$, define the causal order-$P$ window by
$$W_P(u)=\begin{cases}\displaystyle\frac1{(P-1)!}\sum_{j=0}^{P}(-1)^j\binom Pj(u-j)_+^{P-1},&0\le u\le P,\\0,&u<0\text{ or }u>P.\end{cases}$$
Here $s_+=\max(s,0)$, $m!$ is the factorial of the nonnegative integer $m$
with $0!=1$, and for integers $0\le j\le P$,
$\binom Pj=P!/(j!(P-j)!)$. Convolution means the integral operation
$$(f*g)(u)=\int_{\mathbb R}f(u-s)g(s)\,ds,$$
when the integrand is measurable and integrable, as in
[[def-convolution-of-two-functions-on-rn]]. The displayed formula is finite at
every $u$ and directly defines $W_P$ to vanish outside $[0,P]$; the local
alias lemma proves that it agrees with the $P$-fold convolution of $W_1$ and
establishes the resulting integral, positivity, partition, Fourier-transform,
and derivative identities.

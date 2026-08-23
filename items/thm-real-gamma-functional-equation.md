---
id: thm-real-gamma-functional-equation
kind: theorem
title: 'The real Gamma functional equation $\Gamma(s+1)=s\Gamma(s)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-gamma-function-by-the-euler-integral, thm-real-gamma-euler-integral-convergence, thm-integration-by-parts, thm-exponential-beats-every-polynomial, thm-ftc-second-part]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.2"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(iv)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

For every $s>0$, $\Gamma(s+1)=s\Gamma(s)$, and $\Gamma(1)=1$.

## Facts & Assumptions

**Given:** A real parameter $s>0$ and truncation parameters $0<\varepsilon<1<R$.

[F1] If differentiable $u,v$ on a compact interval have integrable derivatives, then $\int uv'=uv|_a^b-\int u'v$ ([[thm-integration-by-parts]]).

[F2] The Euler integral converges if and only if its real parameter is positive ([[thm-real-gamma-euler-integral-convergence]]).

## Proof

**Proof technique:** direct.

1.1 Apply [F1] on $[\varepsilon,R]$ with $u(t)=t^s$ and $v'(t)=e^{-t}$: $\int_\varepsilon^Rt^se^{-t}\,dt=[-t^se^{-t}]_\varepsilon^R+s\int_\varepsilon^Rt^{s-1}e^{-t}\,dt$. [given, F1]

2.1 Since $s>0$, $\varepsilon^se^{-\varepsilon}\to0$ as $\varepsilon\downarrow0$. At infinity choose a natural $m>s$; then $R^se^{-R}\le R^me^{-R}\to0$ by exponential domination. [step 1.1, algebra]

3.1 Letting the two truncations approach their improper ends in step 1.1 and using [F2] gives $\Gamma(s+1)=s\Gamma(s)$. [step 1.1, step 2.1, F2]

4.1 At $s=1$, $\Gamma(1)=\int_0^\infty e^{-t}\,dt=[-e^{-t}]_0^\infty=1$. [F2, algebra] ∎

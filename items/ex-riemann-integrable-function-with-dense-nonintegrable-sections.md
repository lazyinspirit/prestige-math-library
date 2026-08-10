---
id: ex-riemann-integrable-function-with-dense-nonintegrable-sections
kind: example
title: "A Riemann-integrable Thomae-type function whose $x$-sections are nonintegrable at every rational height"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-riemann-fubini-on-product-rectangles, def-dirichlet-and-thomae-functions, thm-multidimensional-riemann-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Exercise 10.2.9"
      url: "https://www.jirka.org/ra/realanal2.pdf"
pipeline_run: null
---

## Example

Let $t:[0,1]\to[0,1]$ be Thomae's function and define
$$f(x,y)=\mathbf1_{\mathbb Q}(x)t(y)\qquad((x,y)\in[0,1]^2).$$
Then $f$ is Riemann integrable with integral $0$, although its $x$-section is nonintegrable at every rational height $y$. Those exceptional heights are dense and are not a content-zero set. The lower and upper $x$-section envelopes are nevertheless $0$ and $t$, and both have integral $0$.

## Facts & Assumptions

**Given:** The Thomae function $t$ and the displayed product on the unit square.

[L1] Thomae's function is positive at rational points, zero at irrational points, and Riemann integrable with integral $0$ ([[def-dirichlet-and-thomae-functions]]).

[L2] Product-grid Darboux gaps characterize multidimensional Riemann integrability ([[thm-multidimensional-riemann-criterion]]).

[L3] Riemann--Fubini identifies the multiple integral with both lower and upper section-envelope integrals without requiring every section to be integrable ([[thm-riemann-fubini-on-product-rectangles]]).

## Verification

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, only finitely many reduced rationals have Thomae height at least $\varepsilon/2$. Put those horizontal layers in strips of total height below $\varepsilon/2$; off the strips, $0\le f<\varepsilon/2$. The resulting product grid has Darboux gap below $\varepsilon$, so [L2] makes $f$ integrable with integral $0$. [L1, L2]

2.1 At rational height $y$, $t(y)>0$ and the $x$-section is a nonzero multiple of the Dirichlet function, hence nonintegrable; at irrational height it is zero. Thus the lower and upper section integrals are $0$ and $t(y)$, whose outer integrals both vanish by [L1] and [L3]. [L1, L3, step 1.1]

3.1 In the other direction, a rational $x$ gives the section $t$ and an irrational $x$ gives zero; every such section is integrable with value $0$. Hence that ordinary iterated integral is $0$, whereas the $x$-first ordinary iteration is undefined at a dense set of heights. [L1, step 2.1] ∎

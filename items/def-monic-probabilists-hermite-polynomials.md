---
id: def-monic-probabilists-hermite-polynomials
kind: definition
title: "The monic probabilists' Hermite polynomials"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-standard-normal-and-normal-laws, def-moments-variance-and-covariance, def-derivative]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Vladimir Ivanov and Grigori Olshanski, Kerov's central limit theorem for the Plancherel measure on Young diagrams, arXiv:math/0304010; survey-paper version in Symmetric Functions 2001, NATO Science Series II 74 (2002), 93-151"
      url: "https://arxiv.org/pdf/math/0304010"
      locator: "§6, the displayed definition of the monic Hermite polynomials and formula (6.3) $xH_m=H_{m+1}+mH_{m-1}$, printed p. 30"
---

## Definition

The **monic probabilists' Hermite polynomials** are the polynomials $H_m\in\mathbb R[x]$ defined by
$$H_0=1,\qquad H_1(x)=x,\qquad xH_m(x)=H_{m+1}(x)+m\,H_{m-1}(x)\quad(m\ge1).$$
The recurrence is solved for the higher polynomial, $H_{m+1}(x)=xH_m(x)-mH_{m-1}(x)$, so it determines $H_m$ uniquely by induction on $m$. Each $H_m$ is monic of degree $m$: $H_2=x^2-1$, $H_3=x^3-3x$ and $H_4=x^4-6x^2+3$; in general $H_m(x)=m!\sum_{j=0}^{\lfloor m/2\rfloor}\frac{(-1/2)^j x^{m-2j}}{j!\,(m-2j)!}$.

Under the AC assumption of the Gaussian-law supplier, these are the monic orthogonal polynomials for the standard normal law of [[def-standard-normal-and-normal-laws]]: they form an orthogonal system for the measure $(2\pi)^{-1/2}e^{-x^2/2}dx$; orthogonality and the expansion of monomials in this system are proved separately on this page. The moments of that law are those of [[def-moments-variance-and-covariance]], and the polynomial calculus used below is that of [[def-derivative]]. The defining property used in this batch is the recurrence; no choice principle is used.

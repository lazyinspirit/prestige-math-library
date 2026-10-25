---
id: def-fresnel-erf-and-hypergeometric-series
kind: definition
title: Fresnel, error, and Gauss hypergeometric series
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by:
  - lem-fresnel-series-geometric-tail
  - lem-erf-series-geometric-tail
  - lem-gauss-hypergeometric-series-geometric-tail
forward_refs: []
aliases: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: DLMF, §7.6, Series Expansions
      url: https://dlmf.nist.gov/7.6
    - title: DLMF, §15.2(i), Gauss Series
      url: https://dlmf.nist.gov/15.2
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §2
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 0
---

## Definition

For $z\in\mathbb C$, define the Fresnel functions and error function by

$$C(z)=\sum_{k=0}^{\infty}\frac{(-1)^k(\pi/2)^{2k}z^{4k+1}}{(2k)!(4k+1)}, \qquad S(z)=\sum_{k=0}^{\infty}\frac{(-1)^k(\pi/2)^{2k+1}z^{4k+3}}{(2k+1)!(4k+3)}, \qquad \operatorname{erf}(z)=\frac{2}{\sqrt\pi}\sum_{k=0}^{\infty}\frac{(-1)^kz^{2k+1}}{k!(2k+1)}, \qquad \operatorname{erfc}(z)=1-\operatorname{erf}(z).$$

The following local lemmas prove convergence and show that $C,S,\operatorname{erf}$
equal the standard entire integral functions with their usual normalizations.

For $a,b,c,z\in\mathbb C$ with $c\notin\{0,-1,-2,\ldots\}$ and $|z|<1$,
define

$$(a)_0=1,\qquad (a)_k=\prod_{j=0}^{k-1}(a+j),\qquad {}_2F_1(a,b;c;z)=\sum_{k=0}^{\infty}\frac{(a)_k(b)_k}{(c)_k k!}z^k.$$

Only this Gauss-series branch of ${}_2F_1$ is defined on this page; no value
outside $|z|<1$ or across a continuation cut is implicit.

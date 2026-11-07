---
id: def-voronoi-bessel-k-y-functions
kind: definition
title: "The integer-order Bessel functions $K_0,K_1,Y_0,Y_1$ in the divisor kernel"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-integer-order-bessel-series, def-euler-mascheroni-constant, thm-euler-mascheroni-constant-and-harmonic-asymptotic, def-natural-logarithm]
justified_by: [lem-voronoi-bessel-k-y-series-converge]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aleksandar Ivić, Topics in Recent Zeta-Function Theory, Chapter 3: The Voronoï Summation Formula"
      url: "https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf"
      locator: "§1, formulas (3.4)–(3.9), printed pp. 47–48"
verification:
  precheck: n/a
---

## Definition

For $z>0$, let $H_m:=\sum_{j=1}^m j^{-1}$ for each integer $m\ge1$, let $\log$ be the natural logarithm, and let $\gamma:=\lim_{N\to\infty}(\sum_{j=1}^{N}j^{-1}-\log N)$ be the Euler–Mascheroni constant. Define
$$J_0(z):=\sum_{m=0}^{\infty}\frac{(-1)^m(z^2/4)^m}{(m!)^2},\qquad I_0(z):=\sum_{m=0}^{\infty}\frac{(z^2/4)^m}{(m!)^2}.$$
Put
$$S_K(z):=\sum_{m=1}^{\infty}\frac{H_m(z^2/4)^m}{(m!)^2},\qquad S_Y(z):=\sum_{m=1}^{\infty}\frac{(-1)^{m+1}H_m(z^2/4)^m}{(m!)^2}.$$
Define
$$
Y_0(z):=\frac{2}{\pi}\bigl(\log(z/2)+\gamma\bigr)J_0(z)+\frac{2}{\pi}S_Y(z),
$$
$$
K_0(z):=-\bigl(\log(z/2)+\gamma\bigr)I_0(z)+S_K(z).
$$
The order-one functions are $Y_1(z):=-Y_0'(z)$ and $K_1(z):=-K_0'(z)$.

## Definition references

[Ivić, Chapter 3, §1, formulas (3.4)–(3.9)](https://bibliotheque.imo.universite-paris-saclay.fr/media/filer_public/86/6d/866d1cf0-a942-4f8a-9d30-7cb3b03e1b1c/i_ivic-66.pdf)

---
id: def-dickman-de-brujin-function
kind: definition
title: "Dickman–de Bruijn function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - thm-continuous-implies-integrable
justified_by:
  - lem-dickman-method-of-steps-existence-uniqueness-and-positivity
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
    - title: "Michal Klazar, Lecture 13: Friable integers. The saddle point method"
      url: "https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf"
    - title: "N. G. de Bruijn, On the number of positive integers <= x and free of prime factors > y"
      url: "https://pure.tue.nl/ws/files/1793853/597499.pdf"
---

## Definition

Define the Dickman–de Bruijn function $\rho:\mathbb R\to\mathbb R$ by $\rho(u)=0$ for $u<0$ and $\rho(u)=1$ for $0\le u\le1$. For each integer $m\ge1$, after $\rho$ is defined on $(-\infty,m]$, define it on $[m,m+1]$ by

$$\rho(u)=\rho(m)-\int_m^u\frac{\rho(t-1)}{t}\,dt.$$

At $u=m$ this agrees with the already assigned value $\rho(m)$; the integral uses only values on $[m-1,m]$.

## Definition references

[[thm-continuous-implies-integrable|continuous functions on compact intervals have the Riemann integrals used by the recursion]]

[Hildebrand and Tenenbaum, equations (1.5)–(1.6), printed p. 415, and §2, printed pp. 422–431](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

[Klazar, Lecture 13, p. 2](https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf)

[de Bruijn, equation (1.2), printed p. 51](https://pure.tue.nl/ws/files/1793853/597499.pdf)

## Facts & Assumptions

**Given:** The compact intervals and continuous integrands used in the recursive definition.

[F1] [[thm-continuous-implies-integrable]]: Every continuous real function on a compact interval $[a,b]$ is Riemann integrable there.

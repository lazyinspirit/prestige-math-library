---
id: ex-dickman-function-on-the-first-two-unit-intervals
kind: example
title: "Evaluating the Dickman function from zero to two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - def-dickman-de-brujin-function
  - thm-logarithm-derivative-and-integral
justified_by: []
aliases: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Michal Klazar, Lecture 13: Friable integers. The saddle point method"
      url: "https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf"
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
---

## Example

For $0\le u\le1$, $\rho(u)=1$. For $1\le u\le2$, the recursive definition gives $\rho(u)=1-\log u$.

## Example references

[[def-dickman-de-brujin-function|method-of-steps definition]]

[[thm-logarithm-derivative-and-integral|integral of $1/t$ is $\log u$]]

[Klazar, Lecture 13, p. 2](https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf)

## Facts & Assumptions

**Given:** A real number $u$ with $0\le u\le2$.

[F1] [[def-dickman-de-brujin-function]]: $\rho(u)=1$ on $[0,1]$, and for integer $m\ge1$, $\rho(u)=\rho(m)-\int_m^u\rho(t-1)/t\,dt$ on $[m,m+1]$.

[F2] [[thm-logarithm-derivative-and-integral]]: For $u>0$, $\int_1^u dt/t=\log u$.

## Verification

1.1 If $0\le u\le1$, the initial clause of [F1] gives $\rho(u)=1$. [given, F1]

2.1 If $1\le u\le2$, [F1] with $m=1$ has $t-1\in[0,1]$ throughout the integral, so $\rho(t-1)=1$ and $\rho(u)=\rho(1)-\int_1^u dt/t=1-\log u$ by [F1], [F2], and step 1.1. [given, F1, F2, step 1.1, algebra] ∎

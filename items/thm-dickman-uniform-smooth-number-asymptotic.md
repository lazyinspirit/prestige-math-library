---
id: thm-dickman-uniform-smooth-number-asymptotic
kind: theorem
title: "Uniform Dickman asymptotic for smooth-number counting"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: not-supplied
deps:
  - def-y-smooth-integer-and-smooth-counting-function
  - def-dickman-de-brujin-function
  - lem-dickman-method-of-steps-existence-uniqueness-and-positivity
  - thm-first-mertens-theorem-for-primes
  - thm-third-mertens-theorem-for-primes
  - thm-korobov-vinogradov-zero-free-region-for-riemann-zeta
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors"
      url: "https://numdam.org/item/JTNB_1993__5_2_411_0.pdf"
    - title: "N. G. de Bruijn, On the number of positive integers <= x and free of prime factors > y"
      url: "https://pure.tue.nl/ws/files/1793853/597499.pdf"
    - title: "Michal Klazar, Lecture 13: Friable integers. The saddle point method"
      url: "https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf"
---

## Statement

For every fixed $\varepsilon>0$, uniformly for real $x\ge y\ge2$ with

$$u:=\frac{\log x}{\log y}\quad\text{satisfying}\quad 1\le u\le\exp\bigl((\log y)^{3/5-\varepsilon}\bigr),$$

the number $\Psi(x,y)$ of positive integers $n\le x$ whose prime divisors are all at most $y$ satisfies

$$\Psi(x,y)=x\rho(u)\left(1+O_\varepsilon\left(\frac{\log(u+1)}{\log y}\right)\right).$$

## Statement references

[Hildebrand and Tenenbaum, Theorem 1.1, printed pp. 415–416; Theorem 1.8 and its proof, §3, printed pp. 431–440](https://numdam.org/item/JTNB_1993__5_2_411_0.pdf)

[de Bruijn, equations (1.3)–(1.5), printed pp. 51 and 57–58](https://pure.tue.nl/ws/files/1793853/597499.pdf)

[Klazar, Lecture 13, pp. 2–3](https://kam.mff.cuni.cz/~klazar/ACNT24lec13.pdf)

---
id: def-waring-singular-series-and-singular-integral
kind: definition
title: "Singular series and singular integral for Waring's problem"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
justified_by:
  - lem-waring-singular-series-well-defined-and-local-densities
  - lem-waring-singular-integral-converges-and-evaluates
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§1, equations (1.11)–(1.12), printed pp. 1578–1579; §10, printed pp. 1616–1621"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§§6.1–6.2, printed pp. 35–41"
---

## Definition

Let $k\ge2$ be an integer and let $s>2k$ be an integer. Put $e(t)=\exp(2\pi i t)$ for real $t$. For integers $q\ge1$ and $a$, define
$$S_k(q,a):=\sum_{r=0}^{q-1}e\!\left(\frac{ar^k}{q}\right).$$
For $n\ge1$ define
$$A_{s,k}(q,n):=\sum_{\substack{0\le a<q\\ \gcd(a,q)=1}}q^{-s}S_k(q,a)^s e\!\left(-\frac{an}{q}\right),\qquad \mathfrak S_{s,k}(n):=\sum_{q=1}^{\infty}A_{s,k}(q,n).$$
In the sum, $\gcd(a,q)=1$ means $a$ and $q$ have no positive common divisor other than $1$. The term at $q=1$ uses the single residue $a=0$ and the convention $\gcd(0,1)=1$. Define
$$v_k(\beta):=\int_0^1 e(\beta x^k)\,dx,\qquad \mathfrak J_{s,k}:=\int_{\mathbb R}v_k(\beta)^s e(-\beta)\,d\beta,$$
where the last integral is an absolutely convergent improper integral.

## Definition references

[Wooley, equations (1.11)–(1.12)](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §§6.1–6.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

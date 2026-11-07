---
id: def-smooth-moduli-and-progression-discrepancy
kind: definition
title: "Squarefree smooth moduli and progression discrepancy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [def-arithmetic-function, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Julia Stadlmann, On Primes in Arithmetic Progressions and Bounded Gaps Between Many Primes"
      url: "https://arxiv.org/pdf/2309.00425v3"
      locator: "§1.2.1, printed p. 4; §1.2.3, Definition 1, printed pp. 5–6"
    - title: "R. C. Baker and A. J. Irving, Bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1505.01815v1"
      locator: "§1, Definition 1, printed p. 3"
---

## Definition

For real $z>1$, let $P(z)=\prod_{p<z}p$, where the product is over positive primes and an empty product is $1$. A positive integer $q$ dividing $P(z)$ is called a squarefree $z$-smooth modulus. Thus $q=1$ is included, and every prime divisor of $q$ is strictly less than $z$.

Let $f:\mathbb N\times(1,\infty)\to\mathbb C$ be a family of coefficients, with the second argument denoted $x$. For a real $x>1$, integer $a$, and positive integer $q$, define the progression discrepancy
$$\Delta_x(f;a,q):=\sum_{\substack{n\in\mathbb N\;x\le n\le2x\\n\equiv a\ (\mathrm{mod}\ q)}} f(n;x)-\frac1{\varphi(q)}\sum_{\substack{n\in\mathbb N\;x\le n\le2x\\(n,q)=1}} f(n;x),$$
where $\varphi(q)$ is the number of invertible residue classes modulo $q$, with $\varphi(1)=1$. This discrepancy compares the coefficient mass in one reduced residue class with the uniform share of the mass on integers coprime to $q$.

## Definition references

[[def-arithmetic-function|Arithmetic functions]]

[[def-unit-group-modulo-n-and-euler-totient|Unit classes and Euler's totient]]

[Stadlmann, §1.2.1 and Definition 1](https://arxiv.org/pdf/2309.00425v3)

[Baker–Irving, Definition 1](https://arxiv.org/pdf/1505.01815v1)

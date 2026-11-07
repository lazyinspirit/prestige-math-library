---
id: def-prime-progression-discrepancy
kind: definition
title: "Full-weighted Chebyshev discrepancy in a reduced residue class"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-chebyshev-psi-function
  - def-unit-group-modulo-n-and-euler-totient
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 17"
      url: "https://kskedlaya.org/ant/chap-bombieri.html"
    - title: "Analytic Number Theory lecture notes, Chapter 11, equations (11.1)–(11.2)"
      url: "https://metaphor.ethz.ch/x/2018/hs/401-3100-68L/IANTnotes2018.pdf"
verification:
  precheck: n/a
---

## Definition

For a real number $x\ge1$, an integer $q\ge1$, and an integer $a$ with
$\gcd(a,q)=1$, define the full-weighted Chebyshev sum in the residue class
$a\pmod q$ and its discrepancy by

$$
\psi(x;q,a):=\sum_{\substack{n\in\mathbb Z_{\ge1}\\ n\le x\\ n\equiv a\ (\mathrm{mod}\ q)}}\Lambda(n), \qquad E_\psi(x;q,a):=\psi(x;q,a)-\frac{x}{\varphi(q)}.
$$

Here $\Lambda(n)=\log p$ if $n=p^k$ for a prime $p$ and integer $k\ge1$,
and $\Lambda(n)=0$ otherwise; $\varphi(q)$ is the number of invertible
residue classes modulo $q$. Thus prime powers occur with their full von
Mangoldt weight, and an integral endpoint $x$ receives no half-weight. For
$q=1$ there is one residue class and $\varphi(1)=1$.

## Definition references

[Chebyshev's psi function and the von Mangoldt weight](https://kskedlaya.org/ant/chap-bombieri.html)

[Unit groups modulo $q$ and Euler's totient](https://kskedlaya.org/ant/chap-bombieri.html)

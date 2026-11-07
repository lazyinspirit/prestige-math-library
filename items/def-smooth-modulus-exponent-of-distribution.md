---
id: def-smooth-modulus-exponent-of-distribution
kind: definition
title: "Exponent of distribution to squarefree smooth moduli"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-smooth-moduli-and-progression-discrepancy]
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
      locator: "§1.2.3, Definition 1, printed pp. 5–6"
    - title: "R. C. Baker and A. J. Irving, Bounded intervals containing many primes"
      url: "https://arxiv.org/pdf/1505.01815v1"
      locator: "§1, Definition 1, printed p. 3"
---

## Definition

Let $f:\mathbb N\times(1,\infty)\to\mathbb C$ be a coefficient family and let $\theta>0$. We say that $f$ has exponent of distribution $\theta$ to squarefree smooth moduli if, for every $\varepsilon>0$, there is a $\delta=\delta(\varepsilon)>0$ such that for every real $x>1$, integer $a$, and real $A>0$,
$$\sum_{\substack{q\le x^{\theta-\varepsilon}\\q\mid P(x^\delta)\\(q,a)=1}}|\Delta_x(f;a,q)|\ll_{A,\varepsilon,f}\frac{x}{(\log x)^A}.$$
The implied constant is uniform in $x$ and $a$; $q=1$ is included whenever it meets the displayed cutoff. Explicitly, $P(z)=\prod_{p<z}p$ and
$$\Delta_x(f;a,q)=\sum_{\substack{x\le n\le2x\\n\equiv a\ (q)}}f(n;x)-\frac1{\varphi(q)}\sum_{\substack{x\le n\le2x\\(n,q)=1}}f(n;x).$$
Thus the condition averages absolute discrepancies over squarefree moduli $q\le x^{\theta-\varepsilon}$ all of whose prime factors are below $x^\delta$.

## Definition references

[[def-smooth-moduli-and-progression-discrepancy|Squarefree smooth moduli and progression discrepancy]]

[Stadlmann, Definition 1](https://arxiv.org/pdf/2309.00425v3)

[Baker–Irving, Definition 1](https://arxiv.org/pdf/1505.01815v1)

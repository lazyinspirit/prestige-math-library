---
id: def-number-theoretic-mobius-function
kind: definition
title: "The number-theoretic Möbius function $\\mu(n)$ from prime factorisation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-fundamental-theorem-of-arithmetic, thm-canonical-prime-factorisation, def-p-adic-valuation, lem-p-adic-valuation-basic, def-group-power, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.785, Problem Set 8"
      url: "https://math.mit.edu/classes/18.785/2021fa/ProblemSet8.pdf"
    - title: "P. J. Cameron, Notes on Number Theory, §7.5"
      url: "https://maths.qmul.ac.uk/~pjc/notes/nt.pdf"
pipeline_run: null
---

## Definition

For a positive integer $n$, the **number-theoretic Möbius function** is

$$\mu(n):=\begin{cases}0,&v_p(n)\ge2\text{ for some prime }p,\\(-1)^r,&n=p_0p_1\cdots p_{r-1}\text{ for distinct primes }p_i.\end{cases}$$

The power $(-1)^r$ is the natural power in the multiplicative monoid of $\mathbb Z$ ([[def-group-power]], [[thm-int-comm-ring]]).

This definition is well posed. Canonical prime factorisation ([[thm-canonical-prime-factorisation]], [[def-p-adic-valuation]]) uniquely determines every exponent $v_p(n)$. If none exceeds $1$, the primes with exponent $1$ form a finite list whose length $r$ is invariant under reordering by the uniqueness clause of [[thm-fundamental-theorem-of-arithmetic]]. If some exponent exceeds $1$, the first clause applies independently of which such prime is noticed. For $n=1$ the prime list is empty, so

$$\mu(1)=(-1)^0=1.$$

Equivalently, $\mu(n)=0$ exactly when a prime square divides $n$; otherwise its sign records the parity of the number of distinct prime factors ([[lem-p-adic-valuation-basic]]).

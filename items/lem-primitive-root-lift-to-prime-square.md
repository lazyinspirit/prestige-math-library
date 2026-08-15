---
id: lem-primitive-root-lift-to-prime-square
kind: lemma
title: "For an odd prime $p$ and a primitive root $g$ modulo $p$, at least one of $g$ and $g+p$ is primitive modulo $p^2$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primitive-root-modulo-n, thm-unit-criterion-modulo-n, cor-order-of-element-divides-group-order, thm-totient-of-a-prime-power, lem-order-characterisation, lem-group-power-laws, def-congruence-modulo-an-integer, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Hackman, Elementary Number Theory, Lemma C.IV.1"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime and let the integer $g$ represent a primitive root modulo $p$. Then at least one of $g$ and $g+p$ represents a primitive root modulo $p^2$.

## Facts & Assumptions

**Given:** An odd prime $p$ and a primitive root $g$ modulo $p$.

[L1] A class is a primitive root when its order equals the totient of the modulus ([[def-primitive-root-modulo-n]]), and it is a unit exactly when its representative is coprime to the modulus ([[thm-unit-criterion-modulo-n]]).

[L2] The order of an element of a finite group divides the group order ([[cor-order-of-element-divides-group-order]]), and $\varphi(p^2)=p(p-1)$ ([[thm-totient-of-a-prime-power]]).

[L3] If an element has finite order $r$, a power is the identity exactly when its exponent is divisible by $r$ ([[lem-order-characterisation]]).

[L4] Group powers satisfy the usual addition and iteration laws ([[lem-group-power-laws]]).

[L5] Congruence modulo $p^2$ means divisibility of the difference by $p^2$ ([[def-congruence-modulo-an-integer]]).

[L6] Mathematical induction holds on $\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** cases.

1.1 Both $g$ and $g+p$ are units modulo $p^2$ by [L1] and reduce to the same primitive root modulo $p$. If either has order $r$ modulo $p^2$, reduction modulo $p$ makes its $r$th power $1$, so $p-1\mid r$ by [L1] and [L3]. By [L2], $r$ also divides $p(p-1)$, and hence $r$ is either $p-1$ or $p(p-1)$. [given, L1, L2, L3, algebra]

1.2 For every $r\ge1$, induction using the product law gives $(g+p)^r\equiv g^r+rpg^{r-1}\pmod{p^2}$. [L4, L5, L6]

2.1 Assume first that $g^{p-1}\not\equiv1\pmod{p^2}$. Then step 1.1 excludes order $p-1$, so $g$ has order $p(p-1)$ and is primitive modulo $p^2$. [assume-case first, step 1.1]

2.2 Assume instead that $g^{p-1}\equiv1\pmod{p^2}$. Step 1.2 gives $(g+p)^{p-1}\equiv1+p(p-1)g^{p-2}\pmod{p^2}$; the second term is not divisible by $p^2$, since neither $p-1$ nor $g$ is divisible by $p$. Thus $(g+p)^{p-1}\not\equiv1\pmod{p^2}$, and step 1.1 makes $g+p$ primitive. [assume-case second, step 1.1, step 1.2, L1, L5]

3.1 The two cases are exhaustive, and in each one of the two representatives is primitive modulo $p^2$. [step 2.1, step 2.2, cases-exhaustive] ∎

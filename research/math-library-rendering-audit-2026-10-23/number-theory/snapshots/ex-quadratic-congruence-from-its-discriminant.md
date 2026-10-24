---
id: ex-quadratic-congruence-from-its-discriminant
kind: example
title: "A nonmonic quadratic congruence solved through its discriminant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-quadratic-congruence-discriminant-criterion, def-legendre-symbol, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Example

The congruence

$$3x^2+4x+1\equiv0\pmod{11}$$

has exactly the two solution classes $[7]_{11}$ and $[10]_{11}$.

## Facts & Assumptions

**Given:** The polynomial $3x^2+4x+1$ modulo the odd prime $11$.

[L1] If $p$ is odd and $p\nmid A$, then $Ax^2+Bx+C\equiv0\pmod p$ has exactly $1+((B^2-4AC)/p)$ solution classes ([[cor-quadratic-congruence-discriminant-criterion]]).

[L2] For an odd prime $p$, $\left(\frac ap\right)=1$ when $p\nmid a$ and $a$ is a quadratic residue modulo $p$, and $\left(\frac ap\right)=-1$ when $p\nmid a$ and $a$ is a quadratic nonresidue modulo $p$ ([[def-legendre-symbol]]).

[L3] The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 The discriminant is $\Delta=4^2-4\cdot3\cdot1=4$. Here $11\nmid4$ and $2^2=4$, so $4$ is a quadratic residue modulo $11$ and [L2] gives $(\Delta/11)=1$. [L2, given, algebra]

2.1 Since $11$ is odd and $11\nmid3$, fact [L1] applies and predicts exactly $1+1=2$ solution classes. [L1, step 1.1]

3.1 Completing the square gives $(6x+4)^2\equiv4\pmod{11}$, so $((6x+4)-2)((6x+4)+2)\equiv0\pmod{11}$; by [L3] the field $\mathbb Z/11$ has no zero divisors, so $6x+4\equiv2$ or $6x+4\equiv-2$. Since $6^{-1}\equiv2\pmod{11}$, these yield $x\equiv7$ and $x\equiv10$; direct substitution gives $176\equiv0$ and $341\equiv0\pmod{11}$. Thus both predicted classes occur. [L3, step 1.1, step 2.1, algebra] ∎

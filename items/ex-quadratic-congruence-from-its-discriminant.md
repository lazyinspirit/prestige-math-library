---
id: ex-quadratic-congruence-from-its-discriminant
kind: example
title: "A nonmonic quadratic congruence solved through its discriminant"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-quadratic-congruence-discriminant-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

## Verification

**Proof technique:** direct.

1.1 The discriminant is $\Delta=4^2-4\cdot3\cdot1=4$, a nonzero square modulo $11$, so $(\Delta/11)=1$. [L1, given, algebra]

2.1 Fact [L1] therefore predicts exactly $1+1=2$ solution classes. [L1, step 1.1]

3.1 Completing the square gives $(6x+4)^2\equiv4\pmod{11}$, so $6x+4\equiv2$ or $-2$. Since $6^{-1}\equiv2\pmod{11}$, these yield $x\equiv7$ and $x\equiv10$; direct substitution gives $176\equiv0$ and $341\equiv0\pmod{11}$. Thus both predicted classes occur. [step 1.1, step 2.1, algebra] ∎

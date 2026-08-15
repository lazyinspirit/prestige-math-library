---
id: cor-quadratic-congruence-discriminant-criterion
kind: corollary
title: 'The discriminant counts roots of $Ax^2+Bx+C\equiv0\pmod p$ for odd prime $p\nmid A$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-number-of-solutions-to-quadratic-congruence-modulo-prime, thm-linear-congruence-solvability-and-solution-count, thm-unit-criterion-modulo-n, thm-integers-modulo-n-basic-algebra]
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

## Statement

Let $p$ be an odd prime, and let $A,B,C\in\mathbb Z$ with $p\nmid A$. Put $\Delta=B^2-4AC$. Then

$$Ax^2+Bx+C\equiv0\pmod p$$

has exactly

$$1+\left(\frac{\Delta}{p}\right)$$

solution classes modulo $p$.

## Facts & Assumptions

**Given:** An odd prime $p$ and integers $A,B,C$ with $p\nmid A$; write $\Delta=B^2-4AC$.

[L1] Addition and multiplication make $\mathbb Z/p$ a commutative ring ([[thm-integers-modulo-n-basic-algebra]]).

[L2] A class $[u]_p$ is a unit exactly when $\gcd(u,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L3] If $u,v\in\mathbb Z$, $n\ge1$, and $d=\gcd(u,n)$, then $ux\equiv v\pmod n$ is soluble exactly when $d\mid v$, and when soluble it has exactly $d$ solution classes ([[thm-linear-congruence-solvability-and-solution-count]]).

[L4] For every integer $d$ and odd prime $p$, the congruence $y^2\equiv d\pmod p$ has exactly $1+(d/p)$ solution classes ([[cor-number-of-solutions-to-quadratic-congruence-modulo-prime]]).

## Proof

**Proof technique:** direct.

1.1 In the commutative ring [L1], the identity $(2Ax+B)^2-\Delta=4A(Ax^2+Bx+C)$ holds. [L1, given, algebra]

2.1 Since $p$ is odd and $p\nmid A$, the prime $p$ divides neither $2A$ nor $4A$, so [L2] makes both classes units. Fact [L3] then says that $x\mapsto2Ax+B$ is a bijection of the residue classes, and cancellation of the unit $4A$ in step 1.1 shows that the original congruence is equivalent to $(2Ax+B)^2\equiv\Delta\pmod p$. [L2, L3, step 1.1]

3.1 The bijection in step 2.1 preserves the number of solutions, and [L4] gives exactly $1+(\Delta/p)$ solutions to the square congruence. [L4, step 1.1, step 2.1] ∎

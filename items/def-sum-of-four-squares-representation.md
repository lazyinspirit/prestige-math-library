---
id: def-sum-of-four-squares-representation
kind: definition
title: "Representations as sums of four squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "MIT 18.781 Theory of Numbers, Lecture 22: Four Squares Theorem"
      url: "https://ocw.mit.edu/courses/18-781-theory-of-numbers-spring-2012/fe790e3f49be0f81f6f25135d00476a9_MIT18_781S12_lec22.pdf"
pipeline_run: null
---

## Definition

Let $n$ be a nonnegative integer. A **representation of $n$ as a sum of four
squares** is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with
$n=a^2+b^2+c^2+d^2$. The integer $n$ **is a sum of four integer squares** when at
least one such quadruple exists.

Two representations $(a,b,c,d)$ and $(a',b',c',d')$ of the same $n$ are
**equivalent up to signs and order** when one is obtained from the other by
permuting the four coordinates and independently changing the sign of any of
them, and **essentially different** when they are not so equivalent. Since
changing a sign does not change an absolute value and permuting the coordinates
permutes them, two representations are equivalent exactly when the multisets
$\{|a|,|b|,|c|,|d|\}$ and $\{|a'|,|b'|,|c'|,|d'|\}$ coincide.

## Remarks

**The coordinates range over all of $\mathbb Z$.** They may be zero, they may be
negative, and they may repeat. So an integer written as a sum of one, two or
three squares is a sum of four squares as well, its remaining coordinates being
$0$; and $-1$ is an admissible coordinate wherever $1$ is, with the same square.
This matters where the identity of [[lem-euler-four-square-product-identity]] is
applied, since its output coordinates are frequently negative or zero even when
its inputs are not.

**Only nonnegative $n$ is defined.** A square is nonnegative and a sum of four
nonnegative integers is nonnegative, so no negative integer admits a quadruple
and the definition would be vacuous there.

**The value $0$.** A sum of four squares vanishes exactly when each square
vanishes, so $0=0^2+0^2+0^2+0^2$ and $(0,0,0,0)$ is the only representation of
$0$. Every representation of a positive integer therefore has at least one
nonzero coordinate.

**Agreement with the two-square convention.** The convention here is the one
[[def-sum-of-two-squares-representation]] uses for pairs: a representation is an
ordered tuple, so order and sign are recorded, and equivalence up to signs and
order is what quotients them out. The only change is the number of coordinates.
That every nonnegative integer has at least one representation is
[[thm-lagrange-four-square-theorem]]; the definition itself asserts nothing about
existence.

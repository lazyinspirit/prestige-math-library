---
id: cor-four-squares-closed-under-products
kind: corollary
title: "Sums of four squares are closed under products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sum-of-four-squares-representation, lem-euler-four-square-product-identity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Proofs by Descent, §6, Lemma 6.2"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/descent.pdf"
    - title: "Evan Dummit, Number Theory (part 9): The Geometry of Numbers, §9.1.2, Lemma 1"
      url: "https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf"
pipeline_run: null
---

## Statement

Let $m$ and $n$ be nonnegative integers. If each of $m$ and $n$ is a sum of four
integer squares ([[def-sum-of-four-squares-representation]]), then $mn$ is a sum
of four integer squares.

## Facts & Assumptions

**Given:** Nonnegative integers $m$ and $n$, each a sum of four integer squares.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$; the integer is a sum of four integer squares when at least one such quadruple exists ([[def-sum-of-four-squares-representation]]).

[L1] For all integers $x_1,\dots,x_4,y_1,\dots,y_4$, setting $z_1=x_1y_1+x_2y_2+x_3y_3+x_4y_4$, $z_2=x_1y_2-x_2y_1-x_3y_4+x_4y_3$, $z_3=x_1y_3+x_2y_4-x_3y_1-x_4y_2$ and $z_4=x_1y_4-x_2y_3+x_3y_2-x_4y_1$ gives $(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2$ ([[lem-euler-four-square-product-identity]]).

## Proof

**Proof technique:** direct.

1.1 Fix quadruples $(x_1,x_2,x_3,x_4)$ and $(y_1,y_2,y_3,y_4)$ of integers with $m=x_1^2+x_2^2+x_3^2+x_4^2$ and $n=y_1^2+y_2^2+y_3^2+y_4^2$, which the hypothesis supplies. [given, F1, choose]

2.1 With $z_1,z_2,z_3,z_4$ formed from those eight integers by the displayed formulas, $mn=(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2$. [step 1.1, L1]

3.1 The four integers $z_1,z_2,z_3,z_4$ therefore form a quadruple in $\mathbb Z^4$ whose squares sum to $mn$, so $mn$ is a sum of four integer squares; no coordinate is required to be positive or nonzero, so the argument is unaffected when a $z_i$ vanishes or is negative, and it covers $m=0$ and $n=0$, whose quadruple $(0,0,0,0)$ satisfies the hypothesis and returns $z_1=z_2=z_3=z_4=0$. [step 2.1, F1, algebra] ∎

## Remarks

**What the identity does and does not give.** The four coordinates $z_i$ are determined by the two chosen quadruples, so a different choice of representation of $m$ or of $n$ generally produces a different representation of $mn$. The statement asserts existence only; it makes no claim about how many representations $mn$ has, nor that every representation of $mn$ arises this way.

**Why the closure is needed.** Reducing [[thm-lagrange-four-square-theorem]] to [[thm-every-prime-is-a-sum-of-four-squares]] requires exactly this: a factorisation of $n$ into primes is useless unless the property being proved is inherited by products.

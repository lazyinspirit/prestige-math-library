---
id: lem-euler-four-square-product-identity
kind: lemma
title: "Euler's four-square product identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: []
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

Let $x_1,x_2,x_3,x_4$ and $y_1,y_2,y_3,y_4$ be integers, and set

$$\begin{aligned} z_1&=x_1y_1+x_2y_2+x_3y_3+x_4y_4, &\qquad z_2&=x_1y_2-x_2y_1-x_3y_4+x_4y_3,\\[4pt] z_3&=x_1y_3+x_2y_4-x_3y_1-x_4y_2, &\qquad z_4&=x_1y_4-x_2y_3+x_3y_2-x_4y_1. \end{aligned}$$

Then

$$(x_1^2+x_2^2+x_3^2+x_4^2)(y_1^2+y_2^2+y_3^2+y_4^2)=z_1^2+z_2^2+z_3^2+z_4^2.$$

## Facts & Assumptions

**Given:** Integers $x_1,x_2,x_3,x_4,y_1,y_2,y_3,y_4$, and $z_1,z_2,z_3,z_4$ defined by the four displayed formulas.

## Proof

**Proof technique:** direct.

1.1 Expanding the left-hand side term by term gives the sixteen products $x_i^2y_j^2$ with $1\le i\le 4$ and $1\le j\le 4$, each with coefficient $1$. [given, algebra]

1.2 Squaring $z_1$ gives $z_1^2=x_1^2y_1^2+x_2^2y_2^2+x_3^2y_3^2+x_4^2y_4^2+2(x_1x_2y_1y_2+x_1x_3y_1y_3+x_1x_4y_1y_4+x_2x_3y_2y_3+x_2x_4y_2y_4+x_3x_4y_3y_4)$. [given, algebra]

1.3 Squaring $z_2$ gives $z_2^2=x_1^2y_2^2+x_2^2y_1^2+x_3^2y_4^2+x_4^2y_3^2+2(-x_1x_2y_1y_2-x_1x_3y_2y_4+x_1x_4y_2y_3+x_2x_3y_1y_4-x_2x_4y_1y_3-x_3x_4y_3y_4)$. [given, algebra]

1.4 Squaring $z_3$ gives $z_3^2=x_1^2y_3^2+x_2^2y_4^2+x_3^2y_1^2+x_4^2y_2^2+2(x_1x_2y_3y_4-x_1x_3y_1y_3-x_1x_4y_2y_3-x_2x_3y_1y_4-x_2x_4y_2y_4+x_3x_4y_1y_2)$. [given, algebra]

1.5 Squaring $z_4$ gives $z_4^2=x_1^2y_4^2+x_2^2y_3^2+x_3^2y_2^2+x_4^2y_1^2+2(-x_1x_2y_3y_4+x_1x_3y_2y_4-x_1x_4y_1y_4-x_2x_3y_2y_3+x_2x_4y_1y_3-x_3x_4y_1y_2)$. [given, algebra]

2.1 The terms $x_i^2y_j^2$ occurring in steps 1.2 to 1.5 are the sixteen products of step 1.1, each occurring once: $z_1^2$ contributes the pairs $(i,j)$ with $i=j$, $z_2^2$ those with $\{i,j\}=\{1,2\}$ or $\{3,4\}$, $z_3^2$ those with $\{i,j\}=\{1,3\}$ or $\{2,4\}$, and $z_4^2$ those with $\{i,j\}=\{1,4\}$ or $\{2,3\}$. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, algebra]

2.2 The remaining terms of steps 1.2 to 1.5 cancel in six pairs of coordinate pairs: $2x_1x_2y_1y_2$ and $2x_3x_4y_3y_4$ from $z_1^2$ against their negatives in $z_2^2$; $2x_1x_3y_1y_3$ and $2x_2x_4y_2y_4$ from $z_1^2$ against their negatives in $z_3^2$; $2x_1x_4y_1y_4$ and $2x_2x_3y_2y_3$ from $z_1^2$ against their negatives in $z_4^2$; $2x_1x_4y_2y_3$ and $2x_2x_3y_1y_4$ from $z_2^2$ against their negatives in $z_3^2$; $2x_1x_3y_2y_4$ and $2x_2x_4y_1y_3$ from $z_4^2$ against their negatives in $z_2^2$; and $2x_1x_2y_3y_4$ and $2x_3x_4y_1y_2$ from $z_3^2$ against their negatives in $z_4^2$. [step 1.2, step 1.3, step 1.4, step 1.5, algebra]

3.1 Adding steps 1.2 to 1.5 and using steps 2.1 and 2.2, the sum $z_1^2+z_2^2+z_3^2+z_4^2$ equals the sixteen products of step 1.1, which is the left-hand side; since the computation used only the ring axioms, it is an identity of polynomials with integer coefficients and holds for every choice of the eight integers, negative or zero included. [step 2.1, step 2.2, algebra] ∎

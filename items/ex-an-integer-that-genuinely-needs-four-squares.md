---
id: ex-an-integer-that-genuinely-needs-four-squares
kind: example
title: "$7$ and $28$ have four-square representations with no zero coordinate"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-integers-requiring-four-squares, thm-lagrange-four-square-theorem, prop-three-square-congruence-obstruction, def-sum-of-four-squares-representation, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Evan Dummit, Number Theory (part 9): The Geometry of Numbers, §9.1.3"
      url: "https://dummit.cos.northeastern.edu/docs/numthy_9_geometry_of_numbers.pdf"
pipeline_run: null
---

## Example

The integers $7$ and $28$ have the four-square representations

$$7=2^2+1^2+1^2+1^2,\qquad 28=5^2+1^2+1^2+1^2,$$

and in each of them every coordinate is nonzero. That is not an accident of these
two displays: no representation of either integer can have a vanishing
coordinate, because deleting a zero coordinate would exhibit the integer as a sum
of three squares, which [[prop-three-square-congruence-obstruction]] forbids for
$7=4^0\cdot 7$ and for $28=4^1\cdot 7$. The two are the cases $a=0$ and $a=1$ of
[[cor-integers-requiring-four-squares]] at $m=7$.

## Facts & Assumptions

**Given:** The integers $7$ and $28$.

[F1] A representation of a nonnegative integer $n$ as a sum of four squares is an ordered quadruple $(a,b,c,d)\in\mathbb Z^4$ with $n=a^2+b^2+c^2+d^2$ ([[def-sum-of-four-squares-representation]]).

[F2] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] For $a\in\mathbb N$ and a positive integer $m$ with $m\equiv 7\pmod 8$, in every representation $(x_1,x_2,x_3,x_4)\in\mathbb Z^4$ of $4^am$ as a sum of four integer squares all four coordinates are nonzero ([[cor-integers-requiring-four-squares]]).

[L2] Every nonnegative integer is a sum of four integer squares ([[thm-lagrange-four-square-theorem]]).

[L3] For $a\in\mathbb N$ and a positive integer $m$ with $m\equiv 7\pmod 8$, there are no integers $x,y,z$ with $4^am=x^2+y^2+z^2$ ([[prop-three-square-congruence-obstruction]]).

## Verification

**Proof technique:** direct.

1.1 Both displays are representations in the sense of [F1], whose existence [L2] guarantees in advance: $4+1+1+1=7$ and $25+1+1+1=28$; and in each the four coordinates $2,1,1,1$ and $5,1,1,1$ are all nonzero. [given, F1, L2, algebra]

1.2 The integer $7$ is positive and $8\mid 7-7$, so $7\equiv 7\pmod 8$ by [F2]; moreover $4^0\cdot 7=7$ and $4^1\cdot 7=28$, so both integers have the form required by [L1] and [L3] with $m=7$ and $a=0$ or $a=1$. [given, F2, algebra]

2.1 If a representation of $7$ or of $28$ had a vanishing coordinate, deleting it would leave three integers whose squares sum to $7$ or to $28$ respectively, and by step 1.2 this is what [L3] excludes; so no representation of either integer has a vanishing coordinate. [step 1.1, step 1.2, L3, algebra]

3.1 Hence $7$ and $28$ each have a four-square representation, displayed in step 1.1, and every such representation has all four coordinates nonzero, which is [L1] at $a=0$ and at $a=1$. [step 1.1, step 1.2, step 2.1, L1, F1] ∎

## Remarks

**Why both $a=0$ and $a=1$ are shown.** The obstruction is stated for $4^am$, and its induction has a base case and a step. The witness $7$ exercises the base case and $28$ the first instance of the step, where the coordinates of a putative three-square representation are halved.

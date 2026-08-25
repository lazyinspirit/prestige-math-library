---
id: cex-sums-of-three-squares-are-not-closed-under-products
kind: counterexample
title: "$3$ and $5$ are sums of three squares and $15$ is not"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-three-square-congruence-obstruction, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
short: "three squares are not closed under products"
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

## Statement refuted

**False claim:** if two nonnegative integers are each a sum of three integer
squares, then so is their product.

The pair $3$, $5$ refutes it: $3=1^2+1^2+1^2$ and $5=2^2+1^2+0^2$, while
$15=3\cdot 5$ satisfies $15\equiv 7\pmod 8$ and is therefore excluded by
[[prop-three-square-congruence-obstruction]].

## Facts & Assumptions

**Given:** The integers $3$, $5$ and $15$.

[A1] The false claim: if $m$ and $n$ are nonnegative integers, each a sum of three integer squares, then $mn$ is a sum of three integer squares.

[F1] For $a,b,n\in\mathbb Z$, $a\equiv b\pmod n$ means $n\mid(a-b)$ ([[def-congruence-modulo-an-integer]]).

[L1] For $a\in\mathbb N$ and a positive integer $m$ with $m\equiv 7\pmod 8$, there are no integers $x,y,z$ with $4^am=x^2+y^2+z^2$ ([[prop-three-square-congruence-obstruction]]).

## Counterexample

**Proof technique:** direct.

1.1 Both factors are sums of three integer squares: $1^2+1^2+1^2=3$ and $2^2+1^2+0^2=5$. [given, algebra]

1.2 The product is $3\cdot 5=15$, and $15-7=8$, so $15\equiv 7\pmod 8$ by [F1]; taking $a=0$ and $m=15$, which is a positive integer congruent to $7$ modulo $8$, [L1] gives that no integers $x,y,z$ satisfy $4^0\cdot 15=15=x^2+y^2+z^2$. [given, L1, F1, algebra]

2.1 So $3$ and $5$ are sums of three integer squares while $15$ is not, and [A1] is false. [step 1.1, step 1.2, A1] ∎

## Remarks

**The failure is not universal.** Some products of three-square integers are again sums of three squares: $3\cdot 3=9=3^2+0^2+0^2$ is one. The claim refuted above is that this always happens, and a single product for which it fails is what settles it.

**What this separates.** Sums of two squares are closed under products by the Brahmagupta–Fibonacci identity ([[cor-sums-of-two-squares-closed-under-products]]), and sums of four squares by [[cor-four-squares-closed-under-products]]. Three squares admit no such product identity, and this pair is why: an identity expressing $(x_1^2+x_2^2+x_3^2)(y_1^2+y_2^2+y_3^2)$ as a sum of three squares of integer bilinear forms would make $15$ a sum of three squares.

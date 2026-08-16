---
id: ex-quadratic-algebraic-integers-and-one-half
kind: example
title: "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integral-element-and-algebraic-integer, cor-rational-algebraic-integers-are-integers, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eloisa Grifo, Commutative Algebra I, Section 1.4"
      url: "https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf"
pipeline_run: null
---

## Example

The numbers $\sqrt2$ and $(1+\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not. See [[def-integral-element-and-algebraic-integer]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is integral over $A$ when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An algebraic integer is a complex number integral over $\mathbb Z$. ([[def-integral-element-and-algebraic-integer]]).

[L2] A rational number is an algebraic integer if and only if it is an integer. ([[cor-rational-algebraic-integers-are-integers]]).

[L3] Let $F$ be a complete ordered field (def-complete-ordered-field). Then every $a \in F$ with $a \ge 0$ has a unique $s \in F$ with $s \ge 0$ and $s^2 = a$; we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$. ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 The number $\sqrt2$ is a root of the monic polynomial $X^2-2$, and $(1+\sqrt5)/2$ is a root of the monic polynomial $X^2-X-1$; both are therefore algebraic integers. [L1, L2, L3, given, algebra]

2.1 The rational algebraic-integer criterion already excludes $1/2$. Directly, a monic equation of degree $n$ at $1/2$ would, after multiplication by $2^n$, read $1+2a_{n-1}+\cdots+2^na_0=0$, whose left side is odd. This proves the stated claim. [step 1.1, given, algebra] ∎

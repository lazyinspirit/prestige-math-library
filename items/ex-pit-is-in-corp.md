---
id: ex-pit-is-in-corp
kind: example
title: "A random evaluation test that separates the zero polynomial from x^2-y^2"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-polynomial-identity-testing, thm-schwartz-zippel-lemma, cor-pit-is-in-corp]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Take the polynomial $f(x,y)=x^2-y^2$ over $\mathbb Q$, and sample uniformly from the grid $S\times S$ with $S=\{0,1,2\}$. Then $f$ vanishes on exactly three of the nine grid points, so one random evaluation misses its nonzeroness with probability $1/3$.

## Facts & Assumptions

**Given:** the polynomial $f(x,y)=x^2-y^2$ and the sample set $S=\{0,1,2\}$.

[L1] PIT tests whether a represented polynomial is identically zero by random evaluation in an admissible representation ([[def-polynomial-identity-testing]]).

[L2] The Schwartz-Zippel lemma bounds the vanishing probability of a nonzero polynomial on a finite grid ([[thm-schwartz-zippel-lemma]]).

[L3] Under the usual degree and evaluation assumptions, PIT lies in coRP ([[cor-pit-is-in-corp]]).

## Verification

**Proof technique:** direct.

1.1 The equality $x^2-y^2=0$ on $S\times S$ is equivalent to $x=y$ because all elements of $S$ are nonnegative rationals and squaring is injective there. Hence the roots on the grid are exactly $(0,0)$, $(1,1)$, and $(2,2)$. [given, algebra]

2.1 So a random point of $S\times S$ makes $f$ vanish with probability $3/9=1/3$. This is consistent with [L2], since the total degree is $2$ and $2/|S|=2/3$. Using the random-evaluation viewpoint from [L1], this is exactly the one-sided coRP behavior asserted in [L3], because the zero polynomial would vanish on every sample point. [L1, L2, L3, step 1.1, algebra] ∎

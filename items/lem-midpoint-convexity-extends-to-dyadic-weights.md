---
id: lem-midpoint-convexity-extends-to-dyadic-weights
kind: lemma
title: "Midpoint convexity gives the convexity inequality at every dyadic weight $k/2^n$"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-concave-and-midpoint-convex-functions, thm-induction-principle, def-integer-power, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Statement

Let $f:I\to\mathbb R$ be midpoint convex. For every $n\in\mathbb N$, every $k\in\{0,\ldots,2^n\}$, and all $x,y\in I$,

$$f\left(\frac{k}{2^n}x+\left(1-\frac{k}{2^n}\right)y\right)\le\frac{k}{2^n}f(x)+\left(1-\frac{k}{2^n}\right)f(y).$$

## Facts & Assumptions

**Given:** A midpoint-convex $f:I\to\mathbb R$ and $x,y\in I$.

[L1] Midpoint convexity is the convexity inequality at weight $1/2$ ([[def-convex-concave-and-midpoint-convex-functions]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, the only weights are $0$ and $1$, and the asserted inequalities are equalities. [base, L1]

2.1 Assume the assertion at $n$. At $n+1$, an even numerator $2j$ reduces to the induction hypothesis; an odd numerator $2j+1$ is the midpoint of the adjacent weights $j/2^n$ and $(j+1)/2^n$, so [L1] followed by the induction hypothesis proves the assertion. [ih, step 1.1, algebra]

3.1 The base and successor steps establish the assertion for every natural $n$ and every $0\le k\le2^n$. [step 1.1, step 2.1, discharge-induction] ∎

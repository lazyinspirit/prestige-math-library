---
id: thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent
kind: theorem
title: "All norms on a finite-dimensional complex normed space are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space,
       def-equivalent-norms, thm-all-norms-on-rn-are-equivalent,
       thm-complex-numbers-are-the-real-coordinate-plane,
       rem-real-and-complex-normed-space-convention]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Daniel Daners, Introduction to Functional Analysis"
      url: "https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf"
    - title: "Tomasz Kochanek, Functional analysis, Lecture 1"
      url: "https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf"
pipeline_run: frontier-29
---

## Statement

Let $X$ be a complex vector space carrying two norms $\|\cdot\|_a$ and
$\|\cdot\|_b$, and suppose $X$ admits an ordered basis of finite length. Then
$\|\cdot\|_a$ and $\|\cdot\|_b$ are equivalent in the sense of
[[def-equivalent-norms]].

## Facts & Assumptions

**Given:** A complex vector space $X$ with two norms $\|\cdot\|_a$ and
$\|\cdot\|_b$, and an ordered basis $e:n\to X$.

[L1] For either norm on $X$, the basis map from $\mathbb C^n$ with the
coordinate $\ell^1$ norm is a topological isomorphism
([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] Equivalent norms are exactly those satisfying
$c\|x\|_a\le\|x\|_b\le C\|x\|_a$ for some $c,C>0$
([[def-equivalent-norms]]).

## Proof

**Proof technique:** direct.

1.1 Let $T:\mathbb C^n\to X$ be the common algebraic basis map $T(a_0,\dots,a_{n-1})=\sum_{j<n}a_je_j$. Applied to the norm $\|\cdot\|_a$, [L1] gives constants $A,B>0$ such that $$\|T(a)\|_a\le A\|a\|_1 \quad\text{and}\quad \|a\|_1\le B\|T(a)\|_a$$ for every $a\in\mathbb C^n$. [L1, choose]

1.2 Applied to the norm $\|\cdot\|_b$, [L1] gives constants $A',B'>0$ such that $$\|T(a)\|_b\le A'\|a\|_1 \quad\text{and}\quad \|a\|_1\le B'\|T(a)\|_b$$ for every $a\in\mathbb C^n$. [L1, choose]

2.1 Let $x\in X$ and write $x=T(a)$, which is possible and unique by [L1]. Then $$\|x\|_b=\|T(a)\|_b\le A'\|a\|_1\le A'B\|T(a)\|_a=A'B\|x\|_a.$$ Interchanging $a$ and $b$ gives $$\|x\|_a\le AB'\|x\|_b.$$ [step 1.1, step 1.2, L1, algebra]

3.1 Step 2.1 is exactly the two-sided estimate of [L2], so the two norms are equivalent. [L2, step 2.1] ∎

## Remarks

- The proof does not need a separate norm-comparison theorem on $\mathbb C^n$:
  one coordinate isomorphism for each norm already supplies the comparison.
- The published theorem [[thm-all-norms-on-rn-are-equivalent]] remains the real
  base case on which [[thm-coordinate-map-for-a-finite-dimensional-normed-space]]
  rests.

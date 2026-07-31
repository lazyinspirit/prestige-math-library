---
id: ex-intervals-and-euclidean-spaces-are-contractible
kind: example
title: "Every nonempty interval and every $\\mathbb{R}^n$ with $n\\ge1$ contracts to any chosen point"
status: published
origin: session
deps: [cor-convex-subsets-of-rn-are-contractible, def-interval]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "MIT 18.901, Introduction to Topology lecture notes"
      url: "https://math.mit.edu/~pieloch/teaching/18.901-spring-2025/18.901-spring-2025-Lecture-Notes.pdf"
pipeline_run: null
---

## Example

Every nonempty interval $J\subseteq\mathbb R$ is contractible. If $c\in J$, the contraction is

$$H(x,t)=(1-t)x+tc.$$

Likewise, for every $n\ge1$, every chosen $c\in\mathbb R^n$ gives a contraction of $\mathbb R^n$ by the same formula.

## Facts & Assumptions

**Given:** A nonempty interval $J\subseteq\mathbb R$, a point $c\in J$, and a natural $n\ge1$.

[A1] Intervals are order-convex: if $x,c\in J$ and $x\le z\le c$, or $c\le z\le x$, then $z\in J$ ([[def-interval]]).

[L1] Every nonempty convex subset of $\mathbb R^m$ with $m\ge1$ is contractible to any chosen point by straight lines ([[cor-convex-subsets-of-rn-are-contractible]]).

## Verification

**Proof technique:** direct.

1.1 For $x,c\in J$ and $t\in I$, $(1-t)x+tc$ lies between $x$ and $c$, so it lies in $J$ by [A1]. Thus $J$, viewed as a subset of $\mathbb R^1$, is convex. [A1, algebra]

1.2 The whole space $\mathbb R^n$ is convex, since it is closed under vector addition and scalar multiplication. [algebra]

2.1 Apply [L1] to step 1.1 and the point $c$ to obtain the stated contraction of $J$, and apply it to step 1.2 and any chosen point of $\mathbb R^n$ to obtain the Euclidean contraction. [step 1.1, step 1.2, L1] ∎

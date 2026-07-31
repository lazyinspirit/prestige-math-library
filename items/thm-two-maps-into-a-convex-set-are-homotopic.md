---
id: thm-two-maps-into-a-convex-set-are-homotopic
kind: theorem
title: "Any two continuous maps into a nonempty convex subset of $\\mathbb{R}^n$ are homotopic by straight lines"
status: published
origin: session
deps: [lem-straight-line-homotopies-are-continuous, def-homotopy-relative-and-path-homotopy]
aliases: []
landmark: true
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

## Statement

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be nonempty and convex in the sense stated in [[lem-straight-line-homotopies-are-continuous]], and let $f,g:X\to C$ be continuous. Then

$$H(x,t)=(1-t)f(x)+tg(x)$$

is a homotopy from $f$ to $g$.

## Facts & Assumptions

**Given:** A nonempty convex $C\subseteq\mathbb R^n$ with $n\ge1$ and continuous maps $f,g:X\to C$.

[L1] The straight-line formula defines a continuous map $H:X\times I\to C$ ([[lem-straight-line-homotopies-are-continuous]]).

[A1] A homotopy from $f$ to $g$ is a continuous $H:X\times I\to C$ with $H(x,0)=f(x)$ and $H(x,1)=g(x)$ ([[def-homotopy-relative-and-path-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 The map $H(x,t)=(1-t)f(x)+tg(x)$ is continuous by [L1]. [L1]

1.2 Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. [algebra]

2.1 Thus $H$ satisfies the continuity and endpoint conditions of [A1], so it is a homotopy from $f$ to $g$. [step 1.1, step 1.2, A1] ∎

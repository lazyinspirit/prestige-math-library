---
id: ex-path-homotopy-through-straight-segments-in-a-convex-set
kind: example
title: "Two paths with the same endpoints in a convex subset of $\\mathbb{R}^n$ are path homotopic relative to their endpoints"
status: published
origin: session
deps: [def-homotopy-relative-and-path-homotopy, lem-straight-line-homotopies-are-continuous]
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

Let $C\subseteq\mathbb R^n$ be convex, with $n\ge1$, and let $\alpha,\beta:I\to C$ be paths with the same initial and terminal points. Then

$$H(s,t)=(1-t)\alpha(s)+t\beta(s)$$

is a path homotopy from $\alpha$ to $\beta$ relative to the endpoints.

## Facts & Assumptions

**Given:** A convex $C\subseteq\mathbb R^n$ and paths $\alpha,\beta:I\to C$ with $\alpha(0)=\beta(0)$ and $\alpha(1)=\beta(1)$.

[L1] The straight-line formula defines a continuous map $H:I\times I\to C$ ([[lem-straight-line-homotopies-are-continuous]]).

[A1] A path homotopy relative endpoints is a homotopy $H:I\times I\to C$ with the path parameter on the first coordinate and with $H(0,t)$ and $H(1,t)$ fixed ([[def-homotopy-relative-and-path-homotopy]]).

## Verification

**Proof technique:** direct.

1.1 The map $H$ is continuous by [L1]. [L1]

1.2 One has $H(s,0)=\alpha(s)$ and $H(s,1)=\beta(s)$. At the endpoints, $H(0,t)=(1-t)\alpha(0)+t\beta(0)=\alpha(0)$ and $H(1,t)=(1-t)\alpha(1)+t\beta(1)=\alpha(1)$. [algebra]

2.1 Thus $H$ satisfies all clauses of [A1], so it is a path homotopy from $\alpha$ to $\beta$ relative to the endpoints. [step 1.1, step 1.2, A1] ∎

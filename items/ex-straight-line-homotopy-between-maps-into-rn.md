---
id: ex-straight-line-homotopy-between-maps-into-rn
kind: example
title: "The formula $H(x,t)=(1-t)f(x)+tg(x)$ gives an explicit homotopy between maps into $\\mathbb{R}^n$"
status: published
origin: session
deps: [thm-two-maps-into-a-convex-set-are-homotopic, lem-straight-line-homotopies-are-continuous]
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

Let $n\ge1$, let $X$ be a topological space, and let $f,g:X\to\mathbb R^n$ be continuous. Since $\mathbb R^n$ is convex, the straight-line formula

$$H(x,t)=(1-t)f(x)+tg(x)$$

deforms $f$ to $g$.

## Facts & Assumptions

**Given:** Continuous maps $f,g:X\to\mathbb R^n$ with $n\ge1$.

[L1] The straight-line formula is continuous for maps into a convex subspace of $\mathbb R^n$ ([[lem-straight-line-homotopies-are-continuous]]).

[L2] Any two continuous maps into a nonempty convex subset of $\mathbb R^n$ are homotopic by that formula ([[thm-two-maps-into-a-convex-set-are-homotopic]]).

## Verification

**Proof technique:** direct.

1.1 For $u,v\in\mathbb R^n$ and $t\in I$, the vector $(1-t)u+tv$ lies in $\mathbb R^n$, so $\mathbb R^n$ is convex. [algebra]

1.2 The map $H$ is continuous by [L1]. [L1]

2.1 Substitution gives $H(x,0)=f(x)$ and $H(x,1)=g(x)$, so [L2] identifies $H$ as a homotopy from $f$ to $g$. [step 1.1, step 1.2, L2] ∎

---
id: ex-graph-as-a-regular-level-set
kind: example
title: 'The graph of a $C^k$ Euclidean map is a regular level set'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-regular-level-set-local-graph-theorem, def-tangent-space-to-a-regular-level-set, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-algebra-of-total-derivatives]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, graph and regular-level examples'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Example

Let $\psi:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$, $k\ge1$, and define $G:U\times\mathbb R^n\to\mathbb R^n$ by $G(x,y)=y-\psi(x)$. Then $0$ is a regular value, $G^{-1}(0)$ is the graph of $\psi$, and
$$T_{(x,\psi(x))}G^{-1}(0)=\{(v,D\psi(x)v):v\in\mathbb R^m\}.$$

## Facts & Assumptions

**Given:** The map $\psi$ and the associated map $G$.

[L1] Finite sums and scalar multiples of $C^k$ Euclidean maps are $C^k$, coordinate maps are $C^k$ componentwise, and total-derivative algebra gives $DG(x,y)(v,w)=w-D\psi(x)v$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-algebra-of-total-derivatives]]).

[L2] A regular level is locally a graph and has tangent space equal to the derivative kernel ([[cor-regular-level-set-local-graph-theorem]], [[def-tangent-space-to-a-regular-level-set]]).

## Verification

**Proof technique:** direct.

1.1 The equation $G(x,y)=0$ is equivalent to $y=\psi(x)$, so $G^{-1}(0)$ is precisely the graph. [given, algebra]

1.2 By [L1], $DG(x,y)(0,w)=w$ for every $w\in\mathbb R^n$, so $DG(x,y)$ is surjective at every point and $0$ is a regular value. [given, L1]

2.1 Solving $DG(x,\psi(x))(v,w)=0$ gives $w=D\psi(x)v$, and [L2] identifies this kernel with the displayed tangent space. [step 1.2, L1, L2]

3.1 The graph conclusion holds on the whole open set $U$, including when $U$ is empty, in which case both sides are empty. [step 1.1, step 2.1] ∎

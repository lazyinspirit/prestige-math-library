---
id: thm-euclidean-constant-rank-normal-form
kind: theorem
title: 'The Euclidean constant-rank normal form'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-differential-rank-and-constant-rank, lem-constant-rank-source-coordinate-map-is-locally-invertible, lem-constant-rank-tail-components-ignore-kernel-coordinates, thm-ck-euclidean-maps-closed-under-algebra-and-composition, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]
justified_by: []
aliases: []
landmark: true
short: '$(u,v)\mapsto(u,0)$'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Theorem 7.13'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Theorem 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $k\ge1$, let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$, and suppose $f$ has constant rank $r$ on a neighbourhood of $a$. There are local $C^k$ coordinate diffeomorphisms $\alpha$ at $a$ and $\beta$ at $f(a)$, both sending the distinguished point to $0$, such that
$$\beta\circ f\circ\alpha^{-1}(u,v)=(u,0)$$
for $(u,v)\in\mathbb R^r\times\mathbb R^{m-r}$ near $0$. The final zero lies in $\mathbb R^{n-r}$; every zero-dimensional block is omitted.

## Facts & Assumptions

**Given:** The stated $C^k$ map, point, and constant rank $r$.

[L1] Source rank coordinates make $f\circ\Phi^{-1}$ equal to $(u,h(u))$ after shrinking, and a differentiable map with zero derivative on a connected open set is constant ([[lem-constant-rank-source-coordinate-map-is-locally-invertible]], [[lem-constant-rank-tail-components-ignore-kernel-coordinates]], [[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

[L2] Finite sums, differences, componentwise maps, and composites of $C^k$ Euclidean maps are $C^k$ ([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Translate the source and target distinguished points to $0$ and apply [L1], obtaining $g(u,v)=(u,h(u))$ on a product neighbourhood. [given, L1]

2.1 Define the target shear $\beta(z,w)=(z,w-h(z))$. It is a $C^k$ diffeomorphism with explicit inverse $(z,w)\mapsto(z,w+h(z))$ by [L2]. [step 1.1, L2, construct]

3.1 The composite satisfies $\beta(g(u,v))=(u,0)$. When $r=0$, [L1] makes $f$ locally constant before the target translation; when $r=m$ or $r=n$, the empty blocks make the same displayed formula literal. [step 1.1, step 2.1, L1]

4.1 Taking $\alpha$ to be the translated source coordinate map gives the asserted local normal form. [step 3.1] ∎

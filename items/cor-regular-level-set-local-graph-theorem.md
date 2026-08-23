---
id: cor-regular-level-set-local-graph-theorem
kind: corollary
title: 'A regular level set is locally a $C^k$ graph of dimension $m-n$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-regular-critical-points-values-and-level-sets, thm-differential-rank-is-lower-semicontinuous, thm-constant-rank-level-set-local-normal-form, thm-finite-dimensional-orthogonal-decomposition, thm-rank-nullity, thm-euclidean-inverse-function-theorem, thm-higher-regularity-of-local-inverses]
justified_by: []
aliases: []
landmark: true
short: 'regular levels are local graphs'
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, Regular Level Set Theorem'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, Section 11.2'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Let $f:U\subseteq\mathbb R^m\to\mathbb R^n$ be $C^k$, $k\ge1$, and let $c$ be a regular value. Near each point, a regular level set is a $C^k$ graph over $\ker Df(a)$ of dimension $m-n$.

More precisely, for $a\in f^{-1}(c)$ put $K=\ker Df(a)$ and $E=K^\perp$, so $\mathbb R^m=K\oplus E$. There are neighbourhoods $P\subseteq K$ of $0$ and $Q\subseteq E$ of $0$ and a $C^k$ map $g:P\to Q$ with $g(0)=0$ and $Dg(0)=0$ such that, near $a$,
$$f^{-1}(c)=\{a+u+g(u):u\in P\}.$$
The empty fibre satisfies the regular-value convention vacuously, and when $m=n$ the local graph has zero-dimensional domain and is the isolated point $a$.

## Facts & Assumptions

**Given:** The stated map, regular value $c$, and a point $a\in f^{-1}(c)$.

[L1] Surjectivity of $Df(a)$ persists nearby, and a constant-rank level is locally a coordinate slice ([[def-regular-critical-points-values-and-level-sets]], [[thm-differential-rank-is-lower-semicontinuous]], [[thm-constant-rank-level-set-local-normal-form]]).

[L2] If $K$ is a subspace of the finite-dimensional Euclidean inner-product space $\mathbb R^m$, then $\mathbb R^m=K\oplus K^\perp$; rank-nullity gives $\dim K=m-n$, and the inverse function theorem turns an invertible derivative into a local $C^1$ diffeomorphism whose inverse is $C^k$ when the original map is $C^k$ ([[thm-finite-dimensional-orthogonal-decomposition]], [[thm-rank-nullity]], [[thm-euclidean-inverse-function-theorem]], [[thm-higher-regularity-of-local-inverses]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $f$ has constant rank $n$ near $a$, and its fibre is a $C^k$ coordinate slice. By [L2], put $E=K^\perp$, so $\mathbb R^m=K\oplus E$ and $\dim K=m-n$. [given, L1, L2, construct]

2.1 The projection of that slice to $K$ along $E$ has derivative equal to the identity at $a$: its tangent there is $K$, because differentiating the normal-form slice and undoing the source coordinates gives $\ker Df(a)$. By [L2], this projection is a local $C^k$ diffeomorphism. [step 1.1, L2, algebra]

3.1 Inverting the projection writes the slice uniquely as $a+u+g(u)$. Its derivative at $0$ takes values both in $E$ and in the tangent $K$, so $Dg(0)=0$; the zero-dimensional case is the same statement with $P=\{0\}$. [step 2.1, algebra]

4.1 This gives the asserted graph and dimension at every point of a nonempty regular fibre, while the empty-fibre case is vacuous. [step 3.1] ∎

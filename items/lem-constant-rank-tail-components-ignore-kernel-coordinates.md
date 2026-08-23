---
id: lem-constant-rank-tail-components-ignore-kernel-coordinates
kind: lemma
title: 'In source rank coordinates, the remaining components depend only on the rank coordinates'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-constant-rank-source-coordinate-map-is-locally-invertible, lem-matrix-rank-detected-by-nonzero-minors, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant, thm-chain-rule-for-total-derivatives, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
justified_by: []
aliases: []
landmark: true
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
    - title: 'J. M. Lee, Introduction to Smooth Manifolds, proof of Theorem 7.13'
      url: 'https://math.mit.edu/~hrm/palestine/lee-smooth-manifolds.pdf'
    - title: 'L. W. Tu, An Introduction to Manifolds, proof of Theorem 11.1'
      url: 'https://www.math.toronto.edu/~jeffrey/matd67/tu.pdf'
pipeline_run: null
---

## Statement

Assume the hypotheses of [[lem-constant-rank-source-coordinate-map-is-locally-invertible]] and that $f$ has constant rank $r$ near $a$. In the source coordinates $y=\Phi(x)$, shrink to a rectangular neighbourhood $P\times Q\subseteq\mathbb R^r\times\mathbb R^{m-r}$ and write
$$g=f\circ\Phi^{-1},\qquad g(u,v)=(u,h(u,v)).$$
Then $h(u,v)$ is independent of $v$. When $r=0$, $g$ is locally constant; when $r=m$, the $v$ block is empty; and when $r=n$, the $h$ block is empty.

## Facts & Assumptions

**Given:** A $C^k$ map of constant rank $r$ near $a$ and the local coordinates $\Phi$ from the source-coordinate lemma.

[L1] The source-coordinate map is a local $C^k$ diffeomorphism, the chain rule computes the derivative of $g=f\circ\Phi^{-1}$, and a nonzero $(r+1)$-rowed minor forces rank at least $r+1$ ([[lem-constant-rank-source-coordinate-map-is-locally-invertible]], [[thm-chain-rule-for-total-derivatives]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[lem-matrix-rank-detected-by-nonzero-minors]]).

[L2] A differentiable map with zero derivative on a nonempty connected open Euclidean set is constant ([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

## Proof

**Proof technique:** direct.

1.1 Shrink the coordinate image to a product of open rectangles $P\times Q$ around $\Phi(a)$. By [L1], $g$ is $C^k$, has constant rank $r$, and its first $r$ components are the coordinates $u$. [given, L1]

2.1 If $r<n$ and $r<m$, any nonzero partial derivative $\partial h_i/\partial v_j$ would join the identity $r\times r$ block of $Dg$ to form a nonzero $(r+1)$-rowed minor, contradicting constant rank $r$ by [L1]. Hence all derivatives of $v\mapsto h(u,v)$ vanish. [step 1.1, L1, algebra]

3.1 For each fixed $u$, the rectangle $Q$ is connected and [L2] makes $v\mapsto h(u,v)$ constant. If $r=0$, the same argument applies to all components on the connected rectangle; if $r=m$ or $r=n$, the relevant block is empty and the conclusion is immediate. [step 2.1, L2]

4.1 Thus, after shrinking, $g(u,v)=(u,h(u))$ in every rank regime. [step 3.1] ∎

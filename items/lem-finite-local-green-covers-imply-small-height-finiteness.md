---
dependency_level: 10
id: lem-finite-local-green-covers-imply-small-height-finiteness
kind: lemma
title: "Finite local Green covers imply small canonical-height finiteness"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-axiom-of-choice
  - lem-function-field-green-kernel-height-sum
  - def-local-dynamical-green-function
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, \u00a72, Remark 2.2, simultaneous finite-cover argument"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---
## Statement

Assume the Axiom of Choice. Let $K$ be a one-variable function field with the specified absolute values, and let $\phi$ have degree at least two. Suppose $S\subset M_K$ is finite and nonempty, and $g_{\phi,v}(P,Q)\ge0$ for distinct $K$-points whenever $v\notin S$. For every $v\in S$, suppose there is a finite cover $V_{v,1},\ldots,V_{v,s_v}$ of $\mathbb P^1(K)$, with $s_v\ge1$, and a number $\beta_v>0$, such that $g_{\phi,v}(P,Q)\ge\beta_v$ for distinct points in any one $V_{v,i}$. Put $B=\sum_{v\in S}\beta_v$ and $\epsilon=B/4$. Then
$$\#\{P\in\mathbb P^1(K):\widehat h_{\phi,K}(P)\le\epsilon\}\le\prod_{v\in S}s_v.$$
The covers are hypotheses; their existence is not asserted by this lemma.

## Statement references

[[lem-function-field-green-kernel-height-sum]]

[[def-local-dynamical-green-function]]

## Facts & Assumptions

**Given:** The function field, map, finite set of places, covers and positive constants in the statement.

[F1] For distinct $K$-points, the finite sum of local Green kernels equals the sum of the two canonical heights. ([[lem-function-field-green-kernel-height-sum]])

[A1] The Axiom of Choice is assumed by the function-field and height suppliers; the finite algebraic calculations below use no further choice. ([[def-axiom-of-choice]])

## Proof

1.1 Assign each point $P$ the signature $(i_v(P))_{v\in S}$, where $i_v(P)$ is the least index of a cover member containing $P$. Each index exists because the listed sets cover, and the least-index rule defines the signature without a further choice. There are exactly $\prod_{v\in S}s_v$ possible signatures. [given, construct]

1.2 If distinct $P,Q$ have the same signature, then $g_{\phi,v}(P,Q)\ge\beta_v$ for every $v\in S$, while the other local terms are nonnegative. By [F1], $\widehat h_{\phi,K}(P)+\widehat h_{\phi,K}(Q)\ge B$. If both heights are at most $\epsilon$, their sum is at most $B/2<B$, a contradiction. Thus at most one such point has any signature, which proves the bound. [F1, step 1.1, algebra] ∎

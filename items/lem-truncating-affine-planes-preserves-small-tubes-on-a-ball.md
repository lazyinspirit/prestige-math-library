---
id: lem-truncating-affine-planes-preserves-small-tubes-on-a-ball
kind: lemma
title: "Truncating an affine plane preserves its small tubes on a bounded ball"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-limsup-tubes-about-affine-subspaces
proof_strategy: direct
verification:
  precheck: n/a
sources:
  references:
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, §3"
      url: "https://arxiv.org/pdf/1703.10015v2"
---

## Statement

Let $B_0\subset\mathbb R^k$ be a bounded ball, let $Q$ be a closed ball containing every point at distance at most $1$ from $B_0$, and let $R\subset\mathbb R^k$ be an affine plane. For every $0<r\le1$,

$$\Delta(R,r)\cap B_0=\Delta(R\cap Q,r)\cap B_0.$$

## Facts & Assumptions

**Given:** $\Delta(R,r)$ consists of points at distance strictly less than $r$ from $R$.

[F1] The tube $\Delta(R,r)$ is defined by the Euclidean distance to the affine plane. ([[def-limsup-tubes-about-affine-subspaces]])

## Proof

1.1 Since $R\cap Q\subseteq R$, every point of $\Delta(R\cap Q,r)\cap B_0$ lies in $\Delta(R,r)\cap B_0$. [given, F1, algebra]

1.2 If $x\in\Delta(R,r)\cap B_0$, then $\operatorname{dist}(x,R)<r$, so some $y\in R$ satisfies $|x-y|<r\le1$. Because $x\in B_0$, this puts $y$ in the closed $1$-neighborhood of $B_0$, hence in $Q$. Thus $y\in R\cap Q$ and $x\in\Delta(R\cap Q,r)$. [given, F1, algebra]

2.1 Steps 1.1 and 1.2 prove the set equality. [step 1.1, step 1.2] ∎

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, §3](https://arxiv.org/pdf/1703.10015v2)

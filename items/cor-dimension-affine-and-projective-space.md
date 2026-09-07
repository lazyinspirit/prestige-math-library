---
id: "cor-dimension-affine-and-projective-space"
kind: "corollary"
title: "Affine and projective n-space have dimension n"
deps: ["thm-dimension-equals-transcendence-degree", "lem-chain-dimension-open-cover", "lem-standard-projective-opens-are-affine-spaces"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Arapura Example 4.1.1"
      url: https://www.math.purdue.edu/~arapura/preprints/algeom.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "Polynomial fraction field has transcendence basis the coordinates; standard projective affine cover gives the second assertion."
---

## Statement

For every integer $n\ge0$, $\dim\mathbf A_k^n=\dim\mathbf P_k^n=n$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] If $X$ is an irreducible classical variety, then $\dim X=\operatorname{trdeg}_k k(X)<\infty$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-dimension-equals-transcendence-degree]]).

[F2] For every open cover $T=\bigcup_{i\in I}U_i$ of a Noetherian space, $\dim T=\sup_i\dim U_i$, with empty supremum $-\infty$. ([[lem-chain-dimension-open-cover]]).

[F3] For every $i$, normalization of the $i$th coordinate identifies $D_+(x_i)$ with $\mathbf A_k^n$. In particular $[a_0:\cdots:a_n]\mapsto(a_1/a_0,\ldots,a_n/a_0)$ identifies $D_+(x_0)$ with $\mathbf A_k^n$. ([[lem-standard-projective-opens-are-affine-spaces]]).

## Proof

1.1 The polynomial coordinates are algebraically independent and generate the fraction field $k(x_1,\ldots,x_n)$ of affine space. Thus its transcendence degree, and hence its geometric dimension, is $n$. When $n=0$ the field is $k$ and affine space is one point. [F1]

2.1 The $n+1$ standard projective opens are affine $n$-spaces. Their open cover computes projective dimension as the supremum of their dimensions, namely $n$. For $n=0$ this is the single chart of the one-point projective space. [F2, F3, step 1.1] ∎

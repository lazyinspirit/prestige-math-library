---
id: lem-affine-plane-tube-covering-by-small-balls
kind: lemma
title: "Covering a bounded affine-plane tube by small balls"
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
    - title: "Allen and Beresnevich, A Mass Transference Principle for Systems of Linear Forms and Its Applications, Lemma 5"
      url: "https://arxiv.org/pdf/1703.10015v2"
---

## Statement

For integers $k\ge1$ and $0\le\ell<k$, there is a constant $C_{k,\ell}$ such that if $R\subset\mathbb R^k$ is an affine $\ell$-plane, $B(x_0,R_0)$ is a Euclidean ball with $R_0>0$, and $0<r\le R_0$, then $\Delta(R,r)\cap B(x_0,R_0)$ can be covered by at most $C_{k,\ell}(R_0/r)^\ell$ Euclidean balls of radius $2r$.

## Facts & Assumptions

**Given:** Euclidean orthogonal projection onto an affine plane is distance nonincreasing.

[F1] $\Delta(R,r)$ is the open $r$-neighborhood of $R$. ([[def-limsup-tubes-about-affine-subspaces]])

## Proof

1.1 Let $\pi_R$ be orthogonal projection onto $R$. If $z\in\Delta(R,r)\cap B(x_0,R_0)$, then $\pi_Rz\in R\cap B(\pi_Rx_0,R_0)$ and $|z-\pi_Rz|<r$. [given, F1, algebra]

2.1 Cover $R\cap B(\pi_Rx_0,R_0)$ by Euclidean balls in $R$ of radius $r$ using a cubical grid with side $r/\sqrt\ell$ when $\ell\ge1$. Each coordinate interval of length $2R_0$ meets at most $2\sqrt{\ell}R_0/r+2$ grid intervals, so at most $C_{k,\ell}(R_0/r)^\ell$ cells meet the projected ball when $r\le R_0$. A cell has diameter at most $r$; selecting one point in each nonempty intersection therefore gives a radius-$r$ cover after enlarging the constant. [given, step 1.1, algebra]

3.1 For each selected center $u\in R$, every associated $z$ from step 1.1 satisfies $|z-u|\le |z-\pi_Rz|+|\pi_Rz-u|<2r$. The ambient radius-$2r$ balls therefore cover the tube intersection, with the count asserted. If $\ell=0$, the projection set is one point and one radius-$2r$ ball suffices. [step 1.1, step 2.1, algebra] ∎

## Statement references

[Allen and Beresnevich, *A Mass Transference Principle for Systems of Linear Forms and Its Applications*, Lemma 5](https://arxiv.org/pdf/1703.10015v2)

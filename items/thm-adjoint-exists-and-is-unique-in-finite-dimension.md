---
id: thm-adjoint-exists-and-is-unique-in-finite-dimension
kind: theorem
title: "Every linear map between finite-dimensional inner product spaces has a unique adjoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-riesz-representation-in-finite-dimensions, lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., discussion following definition 7.1'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, §5.5.1'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Statement

Every linear map $T:V\to W$ between finite-dimensional real or complex inner product spaces has a unique adjoint $T^*:W\to V$.

## Facts & Assumptions

**Given:** A linear map $T:V\to W$ between finite-dimensional inner product spaces.

[L1] Every linear functional on a finite-dimensional inner product space has a unique representing vector ([[thm-riesz-representation-in-finite-dimensions]]).

[L2] An adjoint must satisfy $\langle Tv,w\rangle_W=\langle v,T^*w\rangle_V$ for all $v,w$ ([[def-adjoint-of-a-linear-map-between-inner-product-spaces]]).

[L3] Inner products separate vectors: equality of all pairings forces equality of the paired vectors ([[lem-inner-product-pairing-is-nondegenerate-and-norm-is-homogeneous]]).

## Proof

**Proof technique:** direct.

1.1 Fix $w\in W$. The function $v\mapsto\langle Tv,w\rangle_W$ is a linear functional on $V$, so [L1] supplies a unique vector, call it $T^*w$, satisfying [L2]. [L1, L2]

2.1 For scalars $a,b$ and $w_1,w_2\in W$, pairing the representatives from step 1.1 shows $T^*(aw_1+bw_2)$ and $aT^*w_1+bT^*w_2$ have the same pairing with every $v$. By [L3] they are equal. Thus $T^*$ is linear. [step 1.1, L3, algebra]

3.1 Any adjoint must assign to each $w$ the unique representative from step 1.1, so it equals $T^*$. This proves existence and uniqueness, including when either space is zero. [step 1.1, step 2.1, L1] ∎

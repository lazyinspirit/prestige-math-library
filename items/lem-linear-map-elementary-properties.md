---
id: lem-linear-map-elementary-properties
kind: lemma
title: "A linear map preserves zero, negatives, and subtraction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-map, def-vector-space, lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

If $T:V\to W$ is linear, then $T(0_V)=0_W$, $T(-v)=-T(v)$, and
$T(u-v)=T(u)-T(v)$ for all $u,v\in V$.

## Facts & Assumptions

**Given:** Vector spaces $V,W$ over a field $F$ and a linear map $T:V\to W$.

[L1] A linear map satisfies $T(au+bv)=aT(u)+bT(v)$ ([[def-linear-map]]).

[L2] The additive structure of a vector space is an abelian group, so it has identities, inverses, cancellation, and $u-v=u+(-v)$; also $0_Fv=0_V$ and $(-1_F)v=-v$ ([[def-vector-space]], [[lem-vector-space-elementary-consequences]]).

## Proof

**Proof technique:** direct.

1.1 Linearity gives $T(0_V)=T(0_F0_V+0_F0_V)=T(0_V)+T(0_V)$; cancellation in $W$ gives $T(0_V)=0_W$. [L1, L2, given]

2.1 Since $0_W=T(0_V)=T(v+(-v))=T(v)+T(-v)$, the inverse law gives $T(-v)=-T(v)$. [step 1.1, L1, L2, given]

3.1 Using $u-v=u+(-v)$ and step 2.1, $T(u-v)=T(u)+T(-v)=T(u)-T(v)$. [step 2.1, L1, L2, given] ∎

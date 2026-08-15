---
id: cor-flat-modules-preserve-intersections-of-ideals
kind: corollary
title: "For flat $M$, one has $IM\\cap JM=(I\\cap J)M$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-flat-and-faithfully-flat-modules-and-ring-maps, cor-tensor-product-with-a-quotient-ring, def-product-of-an-ideal-and-a-module, def-exact-and-short-exact-sequences-of-modules, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-symmetry-and-associativity-over-a-commutative-ring]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.39.2"
      url: "https://stacks.math.columbia.edu/tag/00H9"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, let $I,J\subseteq R$ be ideals, and let $M$ be a flat $R$-module. Then

$$IM\cap JM=(I\cap J)M.$$

## Facts & Assumptions

**Given:** Ideals $I,J$ of a commutative ring $R$ and a flat $R$-module $M$.

[L1] Tensoring an exact sequence with a flat module preserves exactness ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[L2] There is a natural isomorphism $M\otimes_R(R/I)\cong M/IM$, and similarly for $J$ ([[cor-tensor-product-with-a-quotient-ring]]).

[L3] The submodule $IM$ consists of finite sums of products $im$ ([[def-product-of-an-ideal-and-a-module]]).

[L4] Exactness at a module is equality of the incoming image and outgoing kernel ([[def-exact-and-short-exact-sequences-of-modules]]).

[L5] Tensor products commute with direct sums ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[L6] Over a commutative ring the natural symmetry $\sigma_{A,B}:A\otimes_RB\to B\otimes_RA$, $a\otimes b\mapsto b\otimes a$, is an isomorphism ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 The sequence $0\to I\cap J\to R\to R/I\oplus R/J$, whose last displayed map sends $r$ to $(r+I,r+J)$, is exact because its kernel is exactly $I\cap J$. [given, L4]

2.1 Tensor step 1.1 with the flat module $M$. By [L1], the resulting sequence is exact and begins $0\to(I\cap J)\otimes_RM\to M\to (R/I\otimes_RM)\oplus(R/J\otimes_RM)$, using [L5]. [step 1.1, L1, L5]

3.1 The symmetry of [L6] identifies $R/I\otimes_RM$ with $M\otimes_R(R/I)$ and likewise for $J$, so [L2] applies and the last map in step 2.1 is $m\mapsto(m+IM,m+JM)$, whose kernel is $IM\cap JM$. [step 2.1, L2, L6]

3.2 The image of $(I\cap J)\otimes_RM\to M$ is the set of finite sums of products $am$ with $a\in I\cap J$, namely $(I\cap J)M$ by [L3]. [step 2.1, L3]

4.1 Exactness in step 2.1 identifies the image in step 3.2 with the kernel in step 3.1, proving $(I\cap J)M=IM\cap JM$. The calculation also covers $I=0$, $J=0$, $I=R$, or $J=R$. [step 3.1, step 3.2, L4] ∎

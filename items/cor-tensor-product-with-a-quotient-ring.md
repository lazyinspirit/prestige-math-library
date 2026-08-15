---
id: cor-tensor-product-with-a-quotient-ring
kind: corollary
title: "$M\\otimes_RR/I\\cong M/IM$ naturally"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-exactness-of-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, def-product-of-an-ideal-and-a-module, def-quotient-module, thm-quotient-module-universal-property, thm-symmetry-and-associativity-over-a-commutative-ring]
aliases: []
landmark: true
short: "$M\\otimes_RR/I\\cong M/IM$"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Miller, Lectures on Algebraic Topology I, Sections 20-21"
      url: "https://math.mit.edu/~hrm/papers/905-notes-aug19.pdf"
    - title: "W. Li, Commutative Algebra, Lectures 9-10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring, $I\mathrel{\trianglelefteq}R$ an ideal, and $M$ an $R$-module. There is a natural $R$-module isomorphism

$$M\otimes_R(R/I)\cong M/IM,\qquad m\otimes(r+I)\longmapsto rm+IM.$$

Both sides also carry the induced $R/I$-module structure, and the isomorphism is $R/I$-linear. For $I=0$ it is the tensor-unit isomorphism, while for $I=R$ both sides are zero.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I$, and an $R$-module $M$.

[L1] Tensoring an exact sequence ending in zero preserves exactness at the two rightmost terms ([[thm-right-exactness-of-tensor-products]]).

[L2] The tensor-unit isomorphism sends $m\otimes r$ to $rm$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[L3] The submodule $IM$ consists of finite sums of products $im$ ([[def-product-of-an-ideal-and-a-module]]).

[L4] The quotient module $M/IM$ consists of cosets with the induced scalar action ([[def-quotient-module]]).

[L5] A homomorphism that kills a submodule factors uniquely through the quotient module ([[thm-quotient-module-universal-property]]).

[L6] Over a commutative ring the natural symmetry $\sigma_{A,B}:A\otimes_RB\to B\otimes_RA$, $a\otimes b\mapsto b\otimes a$, is an isomorphism ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 The sequence $I\to R\to R/I\to0$ is exact. Tensoring on the right by $M$ and applying [L1] gives the exact sequence $I\otimes_RM\to R\otimes_RM\to(R/I)\otimes_RM\to0$. The symmetry isomorphisms of [L6] carry it termwise to $M\otimes_RI\to M\otimes_RR\to M\otimes_R(R/I)\to0$, and since $\sigma$ commutes with the induced maps on elementary tensors, that sequence is exact too. [given, L1, L6]

2.1 Under [L2], the image of $M\otimes_RI\to M\otimes_RR\cong M$ consists exactly of finite sums $im$, hence is $IM$ by [L3]. [step 1.1, L2, L3]

3.1 Exactness in step 1.1 identifies $M\otimes_R(R/I)$ with the cokernel of the first map, which by step 2.1 is $M/IM$; [L5] gives the resulting isomorphism. [step 1.1, step 2.1, L4, L5]

4.1 Tracing $m\otimes(r+I)$ through the quotient gives $rm+IM$. Multiplication by an element of $I$ acts as zero on both sides, so the map and its inverse are $R/I$-linear. [step 3.1, L3, L4, algebra]

5.1 If $I=0$, step 4.1 is [L2]. If $I=R$, then [L3] gives $IM=M$ and $R/I=0$, so both sides are zero. [step 4.1, L2, L3, L4]

6.1 This proves the natural $R$-linear and $R/I$-linear isomorphism in every boundary case. [step 3.1, step 4.1, step 5.1] ∎

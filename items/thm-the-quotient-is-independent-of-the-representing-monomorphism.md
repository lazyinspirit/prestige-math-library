---
id: thm-the-quotient-is-independent-of-the-representing-monomorphism
kind: theorem
title: "The quotient by a subobject is independent of the chosen representing monomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-the-quotient-of-an-object-by-a-subobject, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence, thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Theorem 2.3"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

If two monomorphisms $m:M\to A$ and $n:N\to A$ represent the same subobject of
$A$, then their cokernels are canonically isomorphic. Hence the notation $A/B$
depends only on the subobject class $[B\to A]$.

## Facts & Assumptions

**Given:** Two monomorphisms $m:M\to A$ and $n:N\to A$ representing the same
subobject.

[L1] The quotient by a subobject is defined as the cokernel of a representing
monomorphism ([[def-the-quotient-of-an-object-by-a-subobject]]).

[L2] Representing the same subobject means mutual factorization
([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

[L3] The cokernel assignment depends only on the subobject class and gives the
inverse order-anti-isomorphism to the kernel assignment
([[thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the condition that $m$ and $n$ represent the same subobject is exactly $[m]=[n]$. Applying [L3] gives $[\operatorname{coker}(m)]=[\operatorname{coker}(n)]$ as quotient-object classes. [L2, L3]

2.1 Equality of quotient-object classes means the two cokernels are joined by a unique compatible isomorphism. By [L1], that is exactly the claim that the quotient $A/B$ is independent of the chosen representing monomorphism. [L1, step 1.1] ∎

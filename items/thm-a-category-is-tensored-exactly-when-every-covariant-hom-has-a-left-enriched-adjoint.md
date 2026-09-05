---
id: thm-a-category-is-tensored-exactly-when-every-covariant-hom-has-a-left-enriched-adjoint
kind: theorem
title: "A V-category is tensored exactly when each covariant hom has a left enriched adjoint"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cotensor-and-tensor, def-enriched-adjunction, def-representable-enriched-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 3.7"
      url: "https://www.scribd.com/document/891660167/tr10"
---

## Statement

Assume $\mathcal V$ is right closed monoidal. A $\mathcal V$-category
$\mathcal B$ is tensored if and only if, for every object $C$ of $\mathcal B$,
the covariant enriched hom-functor
$\mathcal B(C,-):\mathcal B\to\mathcal V$ has a left enriched adjoint.

## Facts & Assumptions

**Given:** A right-closed monoidal base $\mathcal V$, a $\mathcal V$-category $\mathcal B$, and an object $C$ of it.

[L1] Tensors of $C$ by objects $X\in\mathcal V$ are characterized by
$\mathcal B(X\otimes C,B)\cong[X,\mathcal B(C,B)]$
([[def-cotensor-and-tensor]]).

[L2] An enriched adjunction is exactly a natural isomorphism of enriched
hom-objects ([[def-enriched-adjunction]]).

[L3] The functor $\mathcal B(C,-)$ is the representable enriched functor at $C$
([[def-representable-enriched-functor]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal B$ is tensored, then for each $X\in\mathcal V$ and $B\in\mathcal B$ the tensor formula of [L1] is exactly the enriched adjunction isomorphism between the functor $X\mapsto X\otimes C$ and the representable functor $\mathcal B(C,-)$ from [L3]. So $\mathcal B(C,-)$ has a left enriched adjoint. [L1, L2, L3, given]

1.2 Conversely, suppose $\mathcal B(C,-)$ has a left enriched adjoint $L_C$. Then [L2] gives isomorphisms $\mathcal B(L_CX,B)\cong[X,\mathcal B(C,B)]$ natural in $X$ and $B$. Comparing with [L1], the object $L_CX$ is exactly the tensor $X\otimes C$. So tensors exist for every $X$ and $C$. [L1, L2, L3, algebra]

2.1 Hence $\mathcal B$ is tensored exactly when each covariant hom-functor has a left enriched adjoint. [step 1.1, step 1.2] ∎

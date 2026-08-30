---
id: thm-modules-over-a-commutative-ring-form-a-monoidal-category
kind: theorem
title: "Modules over a commutative ring form a monoidal category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-commutative-ring, prop-modules-and-homomorphisms-form-category-rmod, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, thm-symmetry-and-associativity-over-a-commutative-ring, prop-functoriality-of-module-tensor-products]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

If $R$ is a commutative ring, then the category $R\text{-}\mathbf{Mod}$ is
monoidal with tensor product $\otimes_R$ and unit object $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and $R$-modules $L,M,N$.

[L1] $R$ is a commutative ring in the sense of [[def-commutative-ring]], and its modules and module homomorphisms form the category $R\text{-}\mathbf{Mod}$ ([[prop-modules-and-homomorphisms-form-category-rmod]]).

[L2] Tensor products of compatible bimodules are associative and have the regular module as tensor unit ([[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[L3] Over a commutative ring the tensor product admits the natural symmetry and associativity isomorphisms ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[L4] Module homomorphisms induce tensor-product homomorphisms functorially ([[prop-functoriality-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the modules under discussion already form a category. Because $R$ is commutative, every left $R$-module is canonically an $(R,R)$-bimodule, so $M\otimes_RN$ is again an $R$-module. [given, L1]

1.2 The associator $((L\otimes_RM)\otimes_RN)\to L\otimes_R(M\otimes_RN)$ and the unitors $R\otimes_RM\to M$ and $M\otimes_RR\to M$ are exactly the isomorphisms supplied by [L2] and [L3]. [L2, L3]

2.1 By [L4], tensoring homomorphisms is functorial in each variable, so $\otimes_R$ is a bifunctor on $R\text{-}\mathbf{Mod}$. Steps 1.1 and 1.2 therefore provide the data of a monoidal category. [step 1.1, step 1.2, L1, L2, L3, L4]

3.1 Hence modules over a commutative ring form a monoidal category under tensor product. [step 2.1] ∎

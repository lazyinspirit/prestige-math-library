---
id: thm-the-category-of-abelian-groups-is-monoidal-under-the-tensor-product
kind: theorem
title: "Abelian groups are monoidal under the tensor product"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monoidal-category, prop-abelian-groups-are-z-modules, thm-abelian-groups-form-an-abelian-category, thm-associativity-of-balanced-tensor-products, thm-unit-isomorphisms-for-module-tensor-products, thm-symmetry-and-associativity-over-a-commutative-ring, thm-universal-property-of-module-tensor-products]
landmark: true
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

The category $\mathbf{Ab}$ of abelian groups is monoidal with tensor product
$\otimes_{\mathbb Z}$ and unit object $\mathbb Z$. The associator and unitors
are the canonical tensor-product isomorphisms over the commutative ring
$\mathbb Z$, and a morphism $A\otimes_{\mathbb Z}B\to C$ is exactly the same
data as a bilinear map $A\times B\to C$.

## Facts & Assumptions

**Given:** Abelian groups $A,B,C,D$.

[L1] Abelian groups and $\mathbb Z$-modules have the same objects and morphisms ([[prop-abelian-groups-are-z-modules]]).

[L2] The category of abelian groups already exists as an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L3] Tensor products of modules are associative and have the regular module as tensor unit ([[thm-associativity-of-balanced-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[L4] Over a commutative ring there are natural symmetry and associativity isomorphisms for tensor products ([[thm-symmetry-and-associativity-over-a-commutative-ring]]).

[L5] For modules over a unital ring, homomorphisms out of $A\otimes_RB$ are in bijection with balanced maps out of $A\times B$ ([[thm-universal-property-of-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every abelian group is a $\mathbb Z$-module and every group homomorphism is $\mathbb Z$-linear. Thus the tensor product over $\mathbb Z$ of two abelian groups is again an abelian group, and the tensor-product maps are morphisms in $\mathbf{Ab}$. [given, L1]

1.2 The associativity isomorphism $((A\otimes_{\mathbb Z}B)\otimes_{\mathbb Z}C)\cong A\otimes_{\mathbb Z}(B\otimes_{\mathbb Z}C)$ and the unit isomorphisms $\mathbb Z\otimes_{\mathbb Z}A\cong A$ and $A\otimes_{\mathbb Z}\mathbb Z\cong A$ are exactly the maps supplied by [L3] and [L4] for the commutative ring $\mathbb Z$. [L3, L4]

2.1 By [L5], homomorphisms $A\otimes_{\mathbb Z}B\to C$ are the same as balanced maps $A\times B\to C$. By step 1.1 and [L1], balanced over $\mathbb Z$ is exactly bilinear for abelian groups, so the same universal property identifies homomorphisms $A\otimes_{\mathbb Z}B\to C$ with bilinear maps $A\times B\to C$. Together with step 1.2 this is the monoidal structure on $\mathbf{Ab}$. [step 1.1, step 1.2, L1, L5]

3.1 Therefore $\mathbf{Ab}$ is monoidal under $\otimes_{\mathbb Z}$ with unit object $\mathbb Z$. [step 1.1, step 1.2, step 2.1, L2, L3, L4, L5] ∎

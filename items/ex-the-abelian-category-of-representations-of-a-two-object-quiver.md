---
id: ex-the-abelian-category-of-representations-of-a-two-object-quiver
kind: example
title: "Representations of the quiver 1 -> 2 in abelian groups form an abelian category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category, thm-abelian-groups-form-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra, §1.6"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-21
---

## Example

A representation of the quiver $1\to2$ in abelian groups is just a homomorphism
$u:A_1\to A_2$, and a morphism of such representations is a commutative square.
These representations form an abelian category.

## Facts & Assumptions

**Given:** The free preadditive category on the quiver $1\to2$ and the target
category $\mathbf{Ab}$.

[L1] Abelian groups form an abelian category
([[thm-abelian-groups-form-an-abelian-category]]).

[L2] Additive functors from a small preadditive category to an abelian category
form an abelian category
([[thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 The free preadditive category on the quiver $1\to2$ is small, and an additive functor out of it is exactly the data of two abelian groups and one homomorphism between them. [L1, L2]

2.1 Therefore the category of quiver representations is a special case of [L2] with target $\mathbf{Ab}$ from [L1]. So it is abelian. [L1, L2, step 1.1] ∎

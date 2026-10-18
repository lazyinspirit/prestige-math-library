---
id: lem-braided-tensor-product-of-separable-algebras-is-separable
kind: lemma
title: The braided tensor product of separable algebras is separable
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-separable-algebra-and-bimodule-in-fusion-category
  - thm-braided-category-tensor-product-algebra-structure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet, The Relative Deligne Tensor Product over Pointed Braided Fusion Categories, §1
      url: https://arxiv.org/pdf/2203.10331
---

## Statement

Let $\mathcal C$ be a braided fusion category and let $A,B$ be separable algebra objects, with bimodule sections $\sigma_A,\sigma_B$. Give $A\otimes B$ the braided tensor-product algebra structure from [[thm-braided-category-tensor-product-algebra-structure]]. A separability section is
$$\sigma_{A\otimes B}=(1_A\otimes c_{B,A}^{-1}\otimes1_B)\circ(\sigma_A\otimes\sigma_B):A\otimes B\longrightarrow(A\otimes B)\otimes(A\otimes B).$$
This is an $A\otimes B$-bimodule map and its composite with multiplication is the identity.


## Facts & Assumptions

**Given:** A braided fusion category and separable algebras $A,B$ with the chosen bimodule sections.

[F1] [[def-separable-algebra-and-bimodule-in-fusion-category]] gives the two bimodule-section equations and the section identity.

[F2] [[thm-braided-category-tensor-product-algebra-structure]] gives the positive braided tensor-product multiplication; naturality and both braiding hexagons hold.

## Proof

1.1 Let D=C⊠C, whose objects needed here are pairs, with componentwise tensor. Define `T(U,V)=U⊗V` and strong tensorator `t_{(U,V),(U',V')}=1_U⊗c_{V,U'}⊗1_{V'} : UVU'V'→UU'VV'`. [F1, F2, given, algebra]

1.2 The tensorator pentagon compares three such pairs. Expanding crossings past products by the two hexagons leaves crossings V1 past U2,U3 and V2 past U3; the two crossings on disjoint slots commute. Thus the two composites coincide. Unit coherence follows from the braiding unit equation. This proves T strong monoidal without a strictification theorem: insert the given associations and its pentagon throughout. [F1, F2, given, algebra]

1.3 For R=(A,B), put `mu=(m_A,m_B)`, `s=(sigma_A,sigma_B)`. In D, `mu s=id` and `s mu=(mu⊗id)(id⊗s)=(id⊗mu)(s⊗id)`, componentwise. Put `K=T(R)`, `m=T(mu)t`, `sigma=t^{-1}T(s)`. Naturality of t and its just-proved coherence transport the THREE equations to `m sigma=id_K`, `sigma m=(m⊗id_K)(id_K⊗sigma)`, `sigma m=(id_K⊗m)(sigma⊗id_K)`. [F1, F2, given, algebra]

2.1 For clarity the first left-linearity transport starts with `t^{-1} T(s mu)t`; replace `s mu` by `(mu⊗id)(id⊗s)`, use naturality to move T(s) to the last two inputs, and use the tensorator pentagon to replace the two intervening tensorators by `(t⊗id)(id⊗t^{-1})`. This is exactly `(T(mu)t⊗id)(id⊗t^{-1}T(s))`. The right-linearity calculation replaces `s mu` by `(id⊗mu)(s⊗id)` and gives `(id⊗T(mu)t)(t^{-1}T(s)⊗id)` in the same way. These are both linearity composites, not merely a multiplication/section cancellation. Expanding t gives exactly the candidate `sigma=(1_A⊗c_{B,A}^{-1}⊗1_B)(sigma_A⊗sigma_B)`. [F1, F2, given, algebra] ∎

---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-braided-tensor-product-of-separable-algebras-is-separable.json
  precheck: pass
id: lem-braided-tensor-product-of-separable-algebras-is-separable
kind: lemma
title: The braided tensor product of separable algebras is separable
status: published
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

1.1 Let $D=\mathcal C\boxtimes\mathcal C$, whose objects needed here are pairs, with componentwise tensor. Define $T(U,V)=U\otimes V$ and strong tensorator $t_{(U,V),(U',V')}=1_U\otimes c_{V,U'}\otimes 1_{V'} : UVU'V'\to UU'VV'$. [F1, F2, given, algebra]

1.2 The tensorator pentagon compares three such pairs. Expanding crossings past products by the two hexagons leaves crossings $V_1$ past $U_2,U_3$ and $V_2$ past $U_3$; the two crossings on disjoint slots commute. Thus the two composites coincide. Unit coherence follows from the braiding unit equation. This proves $T$ strong monoidal without a strictification theorem: insert the given associations and its pentagon throughout. [F1, F2, given, algebra]

1.3 For $R=(A,B)$, put $\mu=(m_A,m_B)$, $s=(\sigma_A,\sigma_B)$. In $D$, $\mu s=\mathrm{id}$ and $s \mu=(\mu\otimes \mathrm{id})(\mathrm{id}\otimes s)=(\mathrm{id}\otimes \mu)(s\otimes \mathrm{id})$, componentwise. Put $K=T(R)$, $m=T(\mu)t$, $\sigma=t^{-1}T(s)$. Naturality of $t$ and its just-proved coherence transport the THREE equations to $m \sigma=\mathrm{id}_K$, $\sigma m=(m\otimes \mathrm{id}_K)(\mathrm{id}_K\otimes \sigma)$, $\sigma m=(\mathrm{id}_K\otimes m)(\sigma\otimes \mathrm{id}_K)$. [F1, F2, given, algebra]

2.1 For clarity the first left-linearity transport starts with $t^{-1} T(s \mu)t$; replace $s \mu$ by $(\mu\otimes \mathrm{id})(\mathrm{id}\otimes s)$, use naturality to move $T(s)$ to the last two inputs, and use the tensorator pentagon to replace the two intervening tensorators by $(t\otimes \mathrm{id})(\mathrm{id}\otimes t^{-1})$. This is exactly $(T(\mu)t\otimes \mathrm{id})(\mathrm{id}\otimes t^{-1}T(s))$. The right-linearity calculation replaces $s \mu$ by $(\mathrm{id}\otimes \mu)(s\otimes \mathrm{id})$ and gives $(\mathrm{id}\otimes T(\mu)t)(t^{-1}T(s)\otimes \mathrm{id})$ in the same way. These are both linearity composites, not merely a multiplication/section cancellation. Expanding $t$ gives exactly the candidate $\sigma=(1_A\otimes c_{B,A}^{-1}\otimes 1_B)(\sigma_A\otimes \sigma_B)$. [F1, F2, given, algebra] ∎

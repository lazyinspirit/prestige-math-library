---
id: ex-density-computed-for-a-presheaf-on-a-two-object-category
kind: example
title: "Density computed for a presheaf on a two-object discrete category"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-density-for-a-small-category, def-category-of-elements, def-yoneda-embedding, prop-sets-and-functions-form-category-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $\mathcal C$ be the discrete category on two objects $0$ and $1$. Define a
presheaf $P:\mathcal C^{\mathrm{op}}\to\mathbf{Set}$ by

$$P(0)=\{x\},\qquad P(1)=\{y,z\}.$$

Then the category of elements of $P$ has three objects and no non-identity
morphisms, and the density theorem identifies $P$ as the coproduct

$$P\cong y(0)\sqcup y(1)\sqcup y(1)$$

in $[\mathcal C^{\mathrm{op}},\mathbf{Set}]$.

## Facts & Assumptions

**Given:** The discrete two-object category $\mathcal C$ and the presheaf $P$ above.

[F1] The category of elements has objects $(c,u)$ with $u\in P(c)$; because $\mathcal C$ is discrete, it has no non-identity arrows between distinct such objects ([[def-category-of-elements]]).

[F2] The Yoneda embedding sends $0$ and $1$ to the representables $y(0)$ and $y(1)$ ([[def-yoneda-embedding]], [[prop-sets-and-functions-form-category-set]]).

[L1] The density theorem expresses $P$ as the colimit of the diagram indexed by $\int P$ whose values are the representables at those objects ([[thm-density-for-a-small-category]]).

## Verification

**Proof technique:** direct.

1.1 The category of elements of $P$ has the three objects $(0,x)$, $(1,y)$, and $(1,z)$, and no non-identity morphisms, by [F1]. [F1]

2.1 Therefore the density diagram of [L1] is the discrete three-object diagram with values $y(0)$, $y(1)$, and $y(1)$, by [F2]. Its colimit is the coproduct $y(0)\sqcup y(1)\sqcup y(1)$. [F2, L1, step 1.1]

3.1 Applying [L1] to this presheaf gives exactly that coproduct as $P$. [L1, step 2.1] ∎

---
id: prop-an-adjunction-induces-adjunctions-on-functor-categories
kind: proposition
title: 'An adjunction induces postcomposition and precomposition adjunctions on legitimate functor categories'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-functor-category, prop-size-of-functor-categories]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.3.6'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Saunders Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter IV'
      url: 'https://doi.org/10.1007/978-1-4757-4721-8'
pipeline_run: null
---

## Statement

Let $F\dashv G:\mathcal D\to\mathcal C$. Whenever the indicated functor categories are legitimate:

1. postcomposition gives an adjunction $F_*:[\mathcal J,\mathcal C]\rightleftarrows[\mathcal J,\mathcal D]:G_*$;
2. precomposition gives an adjunction $G^*:[\mathcal C,\mathcal E]\rightleftarrows[\mathcal D,\mathcal E]:F^*$.

If $\mathcal J$ is small and $\mathcal C,\mathcal D$ are locally small, the functor categories in clause 1 are locally small.

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$, and categories for which the displayed functor categories are formed.

[F1] For a small source category, functors and natural transformations form the functor category ([[def-functor-category]]).

[F2] If the source is small and the target is locally small, the resulting functor category is locally small ([[prop-size-of-functor-categories]]).

[L1] The triangle identities are $(\varepsilon F)(F\eta)=1_F$ and $(G\varepsilon)(\eta G)=1_G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 Postcomposition sends $H:\mathcal J\to\mathcal C$ to $FH$ and $K:\mathcal J\to\mathcal D$ to $GK$. Whiskering $\eta$ and $\varepsilon$ gives unit components $\eta H:H\Rightarrow GFH$ and counit components $\varepsilon K:FGK\Rightarrow K$. [F1, L1]

1.2 Precomposition sends $H:\mathcal C\to\mathcal E$ to $HG$ and $K:\mathcal D\to\mathcal E$ to $KF$. Whiskering now gives the unit $H\eta:H\Rightarrow HGF$ and counit $K\varepsilon:KFG\Rightarrow K$, so $G^*\dashv F^*$. [F1, L1]

2.1 The two triangle identities hold at every object of $\mathcal J$ by [L1], hence hold as equalities of natural transformations. Therefore $F_*\dashv G_*$. [step 1.1, L1]

3.1 Again the triangle identities are the images under $H$ and $K$ of those in [L1]. The size assertion follows from [F2]; the componentwise unit-counit construction itself uses only legitimate functors and natural transformations. [step 1.2, F2, L1] ∎

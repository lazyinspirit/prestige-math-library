---
id: prop-an-adjoint-equivalence-is-an-adjunction-with-invertible-unit-and-counit
kind: proposition
title: 'An adjoint equivalence is an adjunction whose unit and counit are natural isomorphisms'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-equivalence-and-adjoint-equivalence-of-categories, thm-every-equivalence-can-be-made-an-adjoint-equivalence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.3.5'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 1.3 and Theorem 2.2.5'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

For functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$, the following data are equivalent:

1. an adjoint equivalence between $\mathcal C$ and $\mathcal D$ with functors $F$ and $G$;
2. an adjunction $F\dashv G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]) whose unit and counit are natural isomorphisms.

Consequently, every equivalence of categories can be equipped with such an adjunction.

## Facts & Assumptions

**Given:** Categories $\mathcal C,\mathcal D$ and functors $F:\mathcal C\to\mathcal D$, $G:\mathcal D\to\mathcal C$.

[F1] An adjoint equivalence consists of $F,G$, a natural isomorphism $\eta:1_{\mathcal C}\Rightarrow GF$, a natural isomorphism $\varepsilon:FG\Rightarrow1_{\mathcal D}$, and the two triangle identities ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[F2] Every equivalence of categories admits a choice of unit and counit satisfying the triangle identities, and hence can be equipped as an adjoint equivalence ([[thm-every-equivalence-can-be-made-an-adjoint-equivalence]]).

## Proof

**Proof technique:** direct.

1.1 Starting with an adjoint equivalence, forget only the assertion that $\eta$ and $\varepsilon$ are invertible. The remaining functors, natural transformations, and triangle identities are an adjunction, while the forgotten assertion still says its unit and counit are natural isomorphisms. [F1]

1.2 Conversely, an adjunction with invertible unit and counit has exactly the functors, natural isomorphisms, and triangle identities required by [F1], so it is an adjoint equivalence. [F1]

2.1 Finally, [F2] equips any equivalence with the data in step 1.1, proving the consequence. [F2, step 1.1] ∎

---
id: prop-an-adjunction-restricts-to-an-equivalence-on-its-fixed-subcategories
kind: proposition
title: 'An adjunction restricts to an equivalence on the subcategories fixed by its unit and counit'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-subcategory-and-full-subcategory, def-equivalence-and-adjoint-equivalence-of-categories]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.2.11'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

For an adjunction $F\dashv G$, let $\mathcal C_\eta$ be the full subcategory of objects $c$ for which $\eta_c$ is an isomorphism, and let $\mathcal D_\varepsilon$ be the full subcategory of objects $d$ for which $\varepsilon_d$ is an isomorphism. Then $F$ and $G$ restrict to an adjoint equivalence

$$\mathcal C_\eta\simeq\mathcal D_\varepsilon.$$

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$.

[F1] A full subcategory contains chosen objects and all morphisms between them from the ambient category ([[def-subcategory-and-full-subcategory]]).

[F2] An equivalence consists of quasi-inverse functors and natural isomorphisms between their composites and the identity functors ([[def-equivalence-and-adjoint-equivalence-of-categories]]).

[L1] The triangle identities are $\varepsilon_{Fc}F(\eta_c)=1_{Fc}$ and $G(\varepsilon_d)\eta_{Gd}=1_{Gd}$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 If $\eta_c$ is invertible, then $F(\eta_c)$ is invertible, and the first triangle identity makes $\varepsilon_{Fc}=F(\eta_c)^{-1}$; hence $Fc\in\mathcal D_\varepsilon$. [L1]

1.2 Dually, if $\varepsilon_d$ is invertible, then the second triangle identity makes $\eta_{Gd}=G(\varepsilon_d)^{-1}$; hence $Gd\in\mathcal C_\eta$. [L1]

2.1 By [F1], $F$ and $G$ therefore restrict to functors between the two full subcategories, and the restricted unit and counit remain natural. [step 1.1, step 1.2, F1]

3.1 Every component of the restricted unit and counit is an isomorphism by definition, so [F2] makes the restrictions quasi-inverse equivalences; the inherited triangle identities make the equivalence adjoint. [step 2.1, F2, L1] ∎

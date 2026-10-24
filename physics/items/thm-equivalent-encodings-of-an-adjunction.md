---
id: thm-equivalent-encodings-of-an-adjunction
kind: theorem
title: 'The unit-counit, hom-set, unit-universal, and counit-universal encodings of an adjunction are equivalent'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, thm-the-adjunction-hom-set-bijection-under-local-smallness, thm-unit-components-are-initial-in-their-comma-categories]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.2.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Theorem 2.3.6'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

For functors $F:\mathcal C\to\mathcal D$ and $G:\mathcal D\to\mathcal C$, the following descriptions carry the same adjunction data:

1. a unit and counit satisfying the triangle identities;
2. when $\mathcal C$ and $\mathcal D$ are locally small, a natural family of bijections $\mathcal D(Fc,d)\cong\mathcal C(c,Gd)$;
3. a natural family of universal arrows $(Fc,\eta_c)$ from each $c$ to $G$;
4. a natural family of universal arrows $(Gd,\varepsilon_d)$ from $F$ to each $d$.

Only description 2 requires local smallness.

## Facts & Assumptions

**Given:** Categories $\mathcal C,\mathcal D$ and functors $F:\mathcal C\to\mathcal D$, $G:\mathcal D\to\mathcal C$.

[L1] An adjunction is functors together with a unit, counit, and the two triangle identities ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L2] Under local smallness, unit-counit data and natural hom-set bijections determine one another uniquely ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

[L3] Unit components are universal arrows and initial comma objects, while counit components are universal arrows and terminal comma objects ([[thm-unit-components-are-initial-in-their-comma-categories]]).

## Proof

**Proof technique:** direct.

1.1 Descriptions 1 and 2 determine one another by [L2], including the recovery formulas obtained by transposing identity morphisms. [L2]

1.2 Description 1 gives descriptions 3 and 4 by [L3]. [L3]

1.3 Conversely, from description 3, put $u^\flat:=G(u)\circ\eta_c$ for $u:Fc\to d$; the unique-factorisation property of $(Fc,\eta_c)$ says exactly that this is a bijection onto the morphisms $c\to Gd$, with inverse the unique factorisation. Define $\varepsilon_d:FGd\to d$ as the unique morphism with $G(\varepsilon_d)\circ\eta_{Gd}=1_{Gd}$, which is the second triangle identity. For $g:d\to d'$ the two morphisms $g\circ\varepsilon_d$ and $\varepsilon_{d'}\circ FG(g)$ have the same factorisation datum, since $G(g)G(\varepsilon_d)\eta_{Gd}=G(g)$ and $G(\varepsilon_{d'})GFG(g)\eta_{Gd}=G(\varepsilon_{d'})\eta_{Gd'}G(g)=G(g)$; uniqueness makes $\varepsilon$ natural. Likewise $G(\varepsilon_{Fc})GF(\eta_c)\eta_c=G(\varepsilon_{Fc})\eta_{GFc}\eta_c=\eta_c=G(1_{Fc})\eta_c$, so uniqueness gives the first triangle identity $\varepsilon_{Fc}F(\eta_c)=1_{Fc}$. This recovers a unit and counit satisfying [L1]. [L1, L3]

2.1 The dual construction from description 4 defines $\eta_c:c\to GFc$ as the unique morphism with $\varepsilon_{Fc}\circ F(\eta_c)=1_{Fc}$, proves its naturality from terminality of $(Gd,\varepsilon_d)$ in $(F\downarrow d)$ by the argument of step 1.3 read in the opposite categories, and yields the second triangle identity the same way. It therefore gives the same unit-counit data. [step 1.3, L1, L3]

3.1 Steps 1.1 through 2.1 establish all implications. Since [L3] is expressed by unique individual factorisations, descriptions 1, 3, and 4 remain meaningful without local smallness, whereas [L2] explicitly uses hom-sets. [step 1.1, step 1.2, step 1.3, step 2.1] ∎

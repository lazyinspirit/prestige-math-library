---
id: thm-adjoints-are-unique-up-to-unique-natural-isomorphism
kind: theorem
title: 'Adjoints are unique up to a unique natural isomorphism compatible with the adjunction data'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-components-are-initial-in-their-comma-categories, def-adjunction-by-unit-counit-and-triangle-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.3.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 2.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Suppose $F\dashv G$ and $F'\dashv G$ are two left adjoints to the same functor, with units $\eta$ and $\eta'$. There is a unique natural isomorphism $\alpha:F\Rightarrow F'$ satisfying

$$G(\alpha_c)\circ\eta_c=\eta'_c$$

for every $c$. It also intertwines the two counits. Dually, two right adjoints to the same functor are uniquely naturally isomorphic in a way compatible with their adjunction data. No local-smallness hypothesis is needed.

## Facts & Assumptions

**Given:** Adjunctions $F\dashv G$ and $F'\dashv G$, with units $\eta,\eta'$ and counits $\varepsilon,\varepsilon'$.

[L1] An adjunction supplies a natural unit and counit satisfying the two triangle identities, in particular $G\varepsilon\circ\eta G=1_G$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

[L2] Each $(Fc,\eta_c)$ and $(F'c,\eta'_c)$ is initial in $(c\downarrow G)$, and no local-smallness hypothesis is needed ([[thm-unit-components-are-initial-in-their-comma-categories]]).

## Proof

**Proof technique:** direct.

1.1 By initiality of $(Fc,\eta_c)$ there is a unique $\alpha_c:Fc\to F'c$ with $G(\alpha_c)\eta_c=\eta'_c$; reversing the roles gives a unique $\beta_c:F'c\to Fc$ with $G(\beta_c)\eta'_c=\eta_c$. [L2]

2.1 The composites $\beta_c\alpha_c$ and $1_{Fc}$ both carry $\eta_c$ to itself, so initiality gives $\beta_c\alpha_c=1_{Fc}$; similarly $\alpha_c\beta_c=1_{F'c}$. [step 1.1, L2]

2.2 Let $a:c\to c'$. The object $(F'c',\eta'_{c'}\circ a)$ lies in $(c\downarrow G)$, so by initiality of $(Fc,\eta_c)$ exactly one morphism $Fc\to F'c'$ composes with $\eta_c$ to $\eta'_{c'}a$. Both candidates do: $G(F'a\,\alpha_c)\eta_c=G(F'a)\eta'_c=\eta'_{c'}a$ by naturality of $\eta'$, and $G(\alpha_{c'}Fa)\eta_c=G(\alpha_{c'})\eta_{c'}a=\eta'_{c'}a$ by naturality of $\eta$. Hence $F'a\,\alpha_c=\alpha_{c'}Fa$ and $\alpha$ is natural. This uses only initiality and naturality of the units, so no local smallness is required. [step 1.1, L1, L2]

3.1 Any natural transformation compatible with the units has components satisfying the uniqueness condition in step 1.1 and hence equals $\alpha$. For counit compatibility, both $\varepsilon_d$ and $\varepsilon'_d\circ\alpha_{Gd}$ are morphisms $FGd\to d$, and initiality of $(FGd,\eta_{Gd})$ determines such a morphism by its composite: $G(\varepsilon_d)\eta_{Gd}=1_{Gd}$ by the triangle identity of [L1], while $G(\varepsilon'_d)G(\alpha_{Gd})\eta_{Gd}=G(\varepsilon'_d)\eta'_{Gd}=1_{Gd}$ by step 1.1 and the triangle identity for $F'\dashv G$. So $\varepsilon'_d\circ\alpha_{Gd}=\varepsilon_d$. Passing to opposite categories proves the dual assertion. [step 1.1, step 2.2, L1, L2] ∎

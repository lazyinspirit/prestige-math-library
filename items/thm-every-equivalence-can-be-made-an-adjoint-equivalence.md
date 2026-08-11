---
id: thm-every-equivalence-can-be-made-an-adjoint-equivalence
kind: theorem
title: "Every equivalence of categories can be equipped as an adjoint equivalence"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-and-adjoint-equivalence-of-categories, prop-natural-isomorphisms-are-componentwise-isomorphisms, thm-fully-faithful-split-essentially-surjective-characterises-equivalence, prop-fully-faithful-functors-reflect-isomorphisms]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "Ahrens, Kapulkin and Shulman, Univalent categories and the Rezk completion, section 6"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/2CF86322C8415DE832BE304B4DC04D09/S0960129514000486a.pdf/div-class-title-univalent-categories-and-the-rezk-completion-div.pdf"
pipeline_run: null
---

## Statement

Every equivalence of categories admits a choice of unit and counit satisfying
the triangle identities, and hence can be equipped as an adjoint equivalence.

## Facts & Assumptions

**Given:** Equivalence data $F:\mathcal C\rightleftarrows\mathcal D:G$ with a natural isomorphism $\eta:1_{\mathcal C}\Rightarrow GF$.

[L1] An adjoint equivalence is equivalence data satisfying two triangle identities ([[def-equivalence-and-adjoint-equivalence-of-categories]]), and natural isomorphisms have invertible components ([[prop-natural-isomorphisms-are-componentwise-isomorphisms]]).

[L2] Every equivalence is fully faithful by [[thm-fully-faithful-split-essentially-surjective-characterises-equivalence]], and fully faithful functors reflect isomorphisms ([[prop-fully-faithful-functors-reflect-isomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 The quasi-inverse $G$ is itself an equivalence, hence fully faithful by [L2]; for each $D$, fullness gives a unique $\varepsilon'_D:FGD\to D$ with $G(\varepsilon'_D)=\eta_{GD}^{-1}$. [given, L1, L2]

2.1 Naturality of $\eta$ and faithfulness of $G$ show that the components $\varepsilon'_D$ are natural; since $G(\varepsilon'_D)$ is an isomorphism, reflection in [L2] makes each $\varepsilon'_D$ an isomorphism. [step 1.1, L1, L2]

3.1 The defining equation gives $G\varepsilon'\circ\eta G=1_G$; applying $G$ to $\varepsilon'F\circ F\eta$ and using naturality of $\eta$ at each $\eta_A$ gives the identity, and faithfulness of $G$ yields $\varepsilon'F\circ F\eta=1_F$. [step 2.1, L1, L2]

4.1 Thus $(F,G,\eta,\varepsilon')$ satisfies both triangle identities and is an adjoint equivalence. [step 3.1, L1] ∎

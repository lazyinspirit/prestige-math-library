---
id: prop-connected-groupoid-equivalent-to-an-automorphism-group
kind: proposition
title: "Under the Axiom of Choice, a connected small groupoid is equivalent to the automorphism group of any one of its objects"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-isomorphism-groupoid-and-connected-category, def-small-locally-small-and-large-category, def-axiom-of-choice, cor-full-faithful-essentially-surjective-small-target-characterises-equivalence, prop-monoids-and-groups-as-one-object-categories]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Assume the Axiom of Choice. If $\mathcal G$ is a connected small groupoid and
$A$ is any object, then $\mathcal G$ is equivalent to the one-object category
$\operatorname{Aut}_{\mathcal G}(A)$.

## Facts & Assumptions

**Given:** A connected small groupoid $\mathcal G$ and an object $A$.

[L1] In a connected groupoid, every object is isomorphic to $A$ ([[def-isomorphism-groupoid-and-connected-category]]), and smallness makes the object collection a set ([[def-small-locally-small-and-large-category]]).

[L2] Choice selects from set-indexed nonempty families ([[def-axiom-of-choice]]); a group is a one-object category ([[prop-monoids-and-groups-as-one-object-categories]]), and the small-target equivalence criterion is [[cor-full-faithful-essentially-surjective-small-target-characterises-equivalence]].

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], choose for every object $X$ an isomorphism $p_X:A\to X$, taking $p_A=1_A$. [given, L1, L2, choose]

2.1 Define $F:\mathcal G\to\operatorname{Aut}(A)$ by sending every object to the sole object and $f:X\to Y$ to $p_Y^{-1}fp_X$; identities and composites are preserved by cancellation of $p_Yp_Y^{-1}$. [step 1.1, L2]

3.1 For each $X,Y$, the inverse hom-map sends $u\in\operatorname{Aut}(A)$ to $p_Yup_X^{-1}$, so $F$ is fully faithful; it is split essentially surjective because its target has one object, and [L2] makes it an equivalence. [step 2.1, L2] ∎


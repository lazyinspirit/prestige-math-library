---
title: External exact extension by zero for module sheaves
status: draft
research_item: thm-author-50b5133c29cc-klocal-extension-by-zero-input
dependency_level: 1
---

PDF p. 7: Zariski locality; PDF p. 15: Localization diagram

## Prerequisites

- [thm-adjudicate-1ef158934564-ringed-derived-enhancement](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
For an open subspace $v:V\hookrightarrow X$ of a ringed space, module extension by zero $v_!$ is an exact additive functor left adjoint to exact restriction $v^*$. Its stalk is the given module stalk at points of $V$ and zero outside $V$, and $v^*v_!=\mathrm{id}$. Assuming the Axiom of Choice and fixed suitable universes for the derived constructions, applying both functors degreewise to complexes preserves quasi-isomorphisms and mapping cones, so they induce actual exact functors on the sheaf-derived infinity-localizations for these arbitrary ringed spaces. Their ordinary natural unit/counit maps induce natural transformations there.

## Source contract
**Given:** A ringed space and an open subspace with restricted structure sheaf; for enhancements, Choice and suitable fixed universes.

**Goal:** Supply an actual chain-level functor for the supported-category excision argument.

[F1] Stacks Definition 6.31.5 and Lemma 6.31.8 supply module extension by zero, its adjunction, stalks and restriction identity.

[A1] Choice is retained for the Grothendieck-module derived enhancement, not for an additional stalkwise step. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F2] Stacks §20.32 opening paragraphs and Lemma 20.32.8 supply exactness and the degreewise derived construction. [thm-adjudicate-1ef158934564-ringed-derived-enhancement](item-thm-adjudicate-1ef158934564-ringed-derived-enhancement) specifies the infinity-localization and exactness of induced functors.

## External input
Import the sheaf results [F1]–[F2]. The enhanced conclusion follows by the universal property of the supplied localization: the actual degreewise functors send quasi-isomorphisms to quasi-isomorphisms and commute with zero and cones. No claim is made that extension by zero preserves every quasi-coherent or perfect object; the following local support lemma proves preservation on precisely the subcategories where it is used.

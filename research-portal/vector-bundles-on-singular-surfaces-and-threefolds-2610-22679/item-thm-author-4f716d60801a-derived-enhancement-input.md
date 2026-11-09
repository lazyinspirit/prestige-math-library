---
title: External input on derived enhancements
status: published
research_item: thm-author-4f716d60801a-derived-enhancement-input
dependency_level: 0
---

PDF p. 16: Perfect complexes with support

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice and fix suitable universes. For a scheme $X$, let $\mathcal D(X)$ be the infinity-localization of cochain complexes of Zariski $\mathcal O_X$-modules at quasi-isomorphisms. For a ring $A$, define $\mathcal D(A)$ similarly using $A$-modules. These are stable presentable infinity-categories, with ordinary unbounded derived categories as their homotopy categories. Degreewise exact additive functors induce exact functors on these localizations. Mapping cones represent cofibers. Both the enhanced categories and their homotopy categories are idempotent complete.

## Source contract
**Given:** A scheme or ring, the Axiom of Choice, and a universe containing the relevant modules.

**Goal:** Record the ambient derived enhancements and their relation to ordinary derived categories.

[F1] The cited Stacks remark supplies the Grothendieck property; the cited Higher Algebra results supply the derived localization and presentability.

[F2] The cited Higher Topos Theory and Higher Algebra results supply enhanced and homotopy-category idempotent completeness.

## External input
Import [F1] and [F2] with the stated reading limits. A quasi-isomorphism induces isomorphisms on all cohomology objects. Stable means having a zero object and finite limits and colimits, with pushout squares also pullback squares. Exact functors preserve these finite operations. No identification of $D(\mathrm{QCoh}(X))$ with the quasi-coherent-cohomology subcategory is asserted for arbitrary $X$.

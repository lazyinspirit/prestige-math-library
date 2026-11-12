---
title: Extending a nonnegative filtration to integer indices
status: published
research_item: lem-author-98a750efd0cc-filtration-extension
dependency_level: 6
---

PDF p. 3: Section 2, filtered spectrum convention

## Prerequisites

- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible nested Grothendieck universes $U\in V\in W$, with $\omega\in U$, stipulated by the supplied stable spectra and filtration constructions. All indexing diagrams and objects obey those size bounds.

Let $F$ be a coherent multiplicative decreasing filtration indexed by $\mathbb N=\{0,1,2,\ldots\}$, with $F^0=E$ as commutative ring spectrum and with its maps to $F^0$ as multiplicative augmentation. It extends canonically to a multiplicative decreasing filtration indexed by $\mathbb Z$, by setting $\widetilde F^j=F^{\max(j,0)}$. Its stages and products in nonnegative degrees are the original ones, and every stage in nonpositive degree is $E$ with identity transition maps between such stages.

## Facts & Assumptions
**Given:** The specified coherent nonnegative multiplicative tower $F$.

**Goal:** Construct and justify the integer-indexed extension.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies transition directions and augmentation; [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specifies the coherent finite-input product data, the category of operators encoding all their compatibilities, and the multiplicative augmentation.

[F2] For the nonnegative input, use the same indexed-product convention as in [F1], with $I_{\mathbb N}$ the full symmetric monoidal subcategory on nonnegative integers of the integer index category $I_{\mathbb Z}$. Thus $I_{\mathbb N}$ has an arrow $a\to b$ exactly when $a\geq b$, and tensor is addition with unit $0$. Its category of operators has objects finite lists of nonnegative integers. Over a pointed map $f:\langle n\rangle\to\langle m\rangle$, an arrow from $(a_1,\ldots,a_n)$ to $(b_1,\ldots,b_m)$ exists exactly when $\sum_{t\in f^{-1}(s)}a_t\geq b_s$ for each non-basepoint $s$, and is unique if it exists. Composition is substitution as in [F1]. The given coherent multiplicative tower is a map from the nerve of this category of operators to the spectra operad preserving inert arrows, equipped with the stated multiplicative augmentation to $E$.

[A1] Retain the classical foundations and compatible universe bounds of the supplied constructions, including the Axiom of Choice and $\omega\in U$ for fixed $U\in V\in W$. These are premises of the selected framework; the algebraic image and product arguments below assert no necessity of Choice for the corresponding abstract group facts. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Proof
1.1 Put $r(j)=\max(j,0)$. If $j\geq k$, then $r(j)\geq r(k)$, so precomposition of the original coherent diagram with $r:I_{\mathbb Z}\to I_{\mathbb N}$ gives $\widetilde F^j=F^{r(j)}$ and the transition $F^{r(j)}\to F^{r(k)}$, with all composition and identity data. For $j\leq0$ these are the constant stage $F^0=E$ and identity transitions. For every finite list $(j_1,\ldots,j_n)$, the sum $\sum_t r(j_t)$ is nonnegative and at least $\sum_t j_t$, so it is at least $r(\sum_t j_t)$. This includes the empty list because $r(0)=0$. Consequently, whenever $\sum_{t\in f^{-1}(s)}j_t\geq k_s$, one has $\sum_{t\in f^{-1}(s)}r(j_t)\geq r(k_s)$. [F1, F2, given, construct]

2.1 Define $R:I_{\mathbb Z}^{\otimes}\to I_{\mathbb N}^{\otimes}$ on lists by applying $r$ to each entry, and send each operator over $f$ to the unique operator over the same $f$ with those new source and target lists. Step 1.1 proves that it exists, including for empty fibers. Identities and composites are preserved: both candidate composites have the same source, target and underlying pointed map, for which the operator is unique. Inert operators select entries with identity identifications, and $R$ preserves them. Taking nerves and composing with the given operad map defining $F$ therefore supplies the full coherent multiplicative structure on $\widetilde F$. Its finite-input product is precisely the original product into $F^{\sum_t r(j_t)}$ followed by the transition to $F^{r(\sum_t j_t)}$; hence it is the proposed construction, including the empty-input unit. All permutation, substitution and higher compatibility data are inherited by this composition. Precomposition likewise carries the given multiplicative augmentation to the constant $E$ diagram to the required augmentation; its components are the maps to $F^0=E$. On nonnegative lists and operators $R$ is the identity, so the original transitions, products and all their coherences are recovered. Together with step 1.1 this proves every stated property of the canonical extension. [F1, F2, given, step 1.1, construct] ∎

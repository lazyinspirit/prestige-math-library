---
title: Extending a nonnegative filtration to integer indices
status: draft
research_item: lem-author-98a750efd0cc-filtration-extension
dependency_level: 6
---

PDF p. 3: Section 2, filtered spectrum convention

## Prerequisites

- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

## Statement
Let $F$ be a coherent multiplicative decreasing filtration indexed by $\mathbb N=\{0,1,2,\ldots\}$, with $F^0=E$ as commutative ring spectrum and with its maps to $F^0$ as multiplicative augmentation. It extends canonically to a multiplicative decreasing filtration indexed by $\mathbb Z$, by setting $\widetilde F^j=F^{\max(j,0)}$. Its stages and products in nonnegative degrees are the original ones, and every stage in nonpositive degree is $E$ with identity transition maps between such stages.

## Facts & Assumptions
**Given:** The specified coherent nonnegative multiplicative tower $F$.

**Goal:** Construct and justify the integer-indexed extension.

[F1] [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum) specifies transition directions and augmentation; [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum) specifies the coherent finite-input product data and their compatibility.

## Proof
1.1 Put $r(j)=\max(j,0)$. If $j\geq k$, then $r(j)\geq r(k)$, so the original transition $F^{r(j)}\to F^{r(k)}$ defines the extended transition. Monotonicity also gives all composition and identity compatibilities by restriction of the original coherent diagram. For $j\leq0$, $r(j)=0$, giving the asserted constant stages and identity transitions. [F1, given, construct]

2.1 For any finite list $(j_1,\ldots,j_n)$, the inequality $\sum r(j_t)\geq r(\sum j_t)$ holds, including the empty list. Compose the original $n$-input product into $F^{\sum r(j_t)}$ with the transition to $F^{r(\sum j_t)}$. Associativity of addition, monotonicity and functoriality of the original transitions ensure that all alternative composites use the same original product followed by the same transition. The original coherent permutation, substitution and unit data therefore give the corresponding coherent data for the extension. [F1, given, step 1.1, construct]

3.1 The maps to $F^0=E$ provide the compatible multiplicative augmentation. When all indices are nonnegative, $r$ preserves their sum, so the construction recovers the original products and transitions. This proves the extension and its stated properties. [F1, step 1.1, step 2.1] ∎

---
title: Elmanto–Morrow filtration input
status: published
research_item: thm-author-98a750efd0cc-motivic-filtration-input
dependency_level: 10
---

PDF p. 3: Section 2, Elmanto–Morrow filtration; PDF p. 4: After Definition 2.2: functorial multiplicative filtration; EM23 Theorem 1.1(1)

## Prerequisites

- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface)
- [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)
- [Motivic cohomology of equicharacteristic schemes · Version 1 (15 September 2023; internal date 18 September 2023): Theorem 1.1(1) p.3; Definition 4.9 p.21; Definition 4.23 pp.27–28; initial assertions of Theorems 4.12 p.22 and 4.27 p.29; §2.2 pp.11–12](https://arxiv.org/pdf/2309.08463v1)

## Statement
Assume the Axiom of Choice for the selected local perfect-complex $K$-theory realization. Let $\mathbb F$ be $\mathbb Q$ or $\mathbb F_p$ for a prime $p$. On the opposite of the category of quasi-compact quasi-separated $\mathbb F$-schemes, nonconnective algebraic $K$-theory has a functorial, multiplicative, $\mathbb N$-indexed decreasing motivic filtration whose zeroth stage is naturally equivalent to $K$. In the terminology of coherently multiplicative filtered spectra, the imported multiplicative filtration includes coherent products, unit and transition compatibility; its maps to $K$ are induced through its zeroth stage.

## Statement references

[def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum)

## External input
This is the existence and zeroth-stage part of the cited Elmanto–Morrow results. It is imported as literature, not proved by the local formal lemmas. The source's later boundedness and convergence assertions require additional hypotheses and are not imported here. The nonconnective $K$-theory is used through the perfect-complex interface of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface), under its stated Choice assumption. This assumption belongs to the selected local realization; it is not an additional geometric hypothesis attributed to Elmanto–Morrow.

## Facts & Assumptions
**Given:** The Axiom of Choice, a prime field $\mathbb F$ and a qcqs $\mathbb F$-scheme.

**Goal:** Supply the functorial multiplicative filtration and its zeroth-stage equivalence under exactly these hypotheses.

[F1] The cited Theorem 1.1(1) states the functorial multiplicative filtration on nonconnective $K$-theory. The initial assertions of Theorems 4.12 and 4.27 state the nonnegative indexing and zeroth-stage identification, respectively in characteristics zero and $p$.

[F2] The assumed [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) discharges the explicit Choice premise of [def-nonconnective-k-spectrum-interface](item-def-nonconnective-k-spectrum-interface) when its common-family enhanced perfect categories and essentially small nonconnective-functor domain are invoked. Definitions 4.9 and 4.23 construct the imported filtration as a pullback of filtered $E_\infty$-algebras, providing the coherent multiplication specified by [def-multiplicative-filtered-spectrum](item-def-multiplicative-filtered-spectrum). No independent choice of a filtration is made here.

## Proof
1.1 Under the inherited Choice premise in [F2], use the selected $K$-theory realization and apply the characteristic-zero assertion of [F1] when $\mathbb F=\mathbb Q$, and the characteristic-$p$ assertion when $\mathbb F=\mathbb F_p$. [F1, F2, given]

2.1 The qcqs hypothesis is exactly the common hypothesis of those initial assertions. The stated functoriality and coherent multiplicativity are the imported theorem's data, with the filtered-algebra structure in [F2]; no finite-valuative-dimension conclusion is used. [F1, F2, given, step 1.1] ∎

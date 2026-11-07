---
id: thm-essential-shtuka-cohomology-splits-by-hecke-eigensystems
kind: theorem
title: "Essential shtuka cohomology splits into Hecke eigensystems"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - lem-boundary-and-truncation-shtuka-cohomology-is-lower-rank-negligible
  - thm-stabilized-hecke-correspondences-are-stable-near-fixed-points
  - thm-shtuka-fixed-point-count-has-cuspidal-plus-lower-rank-expansion
  - thm-level-zero-shtuka-lefschetz-count-has-cuspidal-plus-lower-rank-expansion
  - def-r-negligible-and-essential-shtuka-cohomology
  - def-axiom-of-choice
  - def-countable-choice
  - thm-existence-hardernarasimhan-truncation-for-drinfeld-shtukas
provenance:
  statement: literature-derived
  proof: not-supplied
axiom_use: >-
  AC and Countable Choice are inherited from the global Hecke and shtuka
  inputs. No weaker branch is asserted.
sources:
  references:
    - title: "Laurent Lafforgue, Chtoucas de Drinfeld et correspondance de Langlands"
      url: "https://www.laurentlafforgue.org/math/fulltext.pdf"
      locator: "Chapter VI §§2–3, especially Theorems VI.25–VI.27, printed pp. 181–192."
    - title: "Gérard Laumon, La correspondance de Langlands sur les corps de fonctions"
      url: "https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf"
      locator: "§§2–3, Hecke action and calculation of essential cohomology traces."
---

## Statement

Assume AC and Countable Choice. For rank $r\ge2$, finite level $N$, and a sufficiently convex truncation polygon, let $H_{N,\mathrm{ess}}$ be the essential compactly supported cohomology class of the corresponding Drinfeld shtuka stack modulo the degree-one-idele action. As a representation of the level-$N$ Hecke algebra and the Galois group of the two-leg function field, this class is a finite sum of Hecke eigensystems
$$H_{N,\mathrm{ess}}=\sum_{\pi\in\mathcal A_N^r}\pi\boxtimes H_\pi(1-r),$$
where $\mathcal A_N^r$ is the finite set of cuspidal representations occurring in the level-$N$ cuspidal spectrum, each $H_\pi$ is a semisimple $\ell$-adic representation pure of weight $0$, and its Frobenius traces at pairs of distinct sufficiently large-degree legs are the products of the corresponding sums of Hecke eigenvalues of $\pi$. The boundary and truncation classes in this statement are removed by the preceding negligibility result.

## Statement references

[Laurent Lafforgue, Theorems VI.25–VI.27](https://www.laurentlafforgue.org/math/fulltext.pdf)

[Gérard Laumon, §§2–3](https://www.numdam.org/item/SB_1999-2000__42__207_0.pdf)

## Proof obligations

The source obtains this decomposition from the fixed-point expansions, the Grothendieck–Lefschetz formula on unstable opens, stabilized Hecke correspondences, the lower-rank boundary filtration, and Deligne weights. These intermediate proofs are not locally complete. The finite-dimensionality, semisimplicity, purity, and trace identity for every Hecke eigensystem remain unresolved proof obligations.

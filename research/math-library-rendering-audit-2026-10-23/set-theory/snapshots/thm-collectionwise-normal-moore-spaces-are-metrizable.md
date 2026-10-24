---
id: thm-collectionwise-normal-moore-spaces-are-metrizable
kind: theorem
title: "Collectionwise normal Moore spaces are metrizable"
status: published
origin: pipeline
deps: [def-moore-spaces-and-developments, def-normalized-families-and-collectionwise-normality, lem-collectionwise-normal-moore-spaces-are-screenable, thm-normal-screenable-moore-spaces-are-metrizable, def-axiom-of-choice, def-normal-and-t4-spaces, def-discrete-family-and-sigma-bases, def-metrizable-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "R. H. Bing, Metrization of topological spaces"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/48C1A50A9E249D05BD7054529F93BAA1/S0008414X00030923a.pdf/metrization-of-topological-spaces.pdf"
      locator: "Theorems 8-10, printed pp. 181-182"
verification:
  audited: 2026-09-22
---

## Statement

In $\mathrm{ZFC}$, every collectionwise normal Moore space is metrizable
([[def-normalized-families-and-collectionwise-normality]],
[[def-moore-spaces-and-developments]], [[def-metrizable-space]]).

## Facts & Assumptions

**Given:** A collectionwise normal Moore space $X$.

[F1] Collectionwise normality implies normality: for disjoint closed $A,B$ the two-member family $\{A,B\}$ is discrete, and separating it gives disjoint open sets containing $A$ and $B$ ([[def-normalized-families-and-collectionwise-normality]], [[def-normal-and-t4-spaces]], [[def-discrete-family-and-sigma-bases]]).

[F2] Every collectionwise normal Moore space is screenable ([[lem-collectionwise-normal-moore-spaces-are-screenable]]).

[F3] Every normal screenable Moore space is metrizable ([[thm-normal-screenable-moore-spaces-are-metrizable]]).

## Proof

**Proof technique:** direct.

1.1 The space $X$ is normal by [F1] and screenable by [F2]; it is a Moore space by hypothesis. [given, F1, F2]

2.1 By [F3] applied to the normal screenable Moore space $X$, the space is metrizable. [step 1.1, F3] ∎

## Remarks

- **This is Bing's Theorem 10 through Theorem 8.** The separate screenability lemma is the combinatorial half of Bing's Theorem 10, and the metrization theorem is his Theorem 8 with the metrization criterion of Theorem 3; the two items are kept apart because the first carries the well-ordering argument and the second carries the metric construction.

- **No recorded result is used.** Both suppliers are items of this page, proved before this one; the argument is short only because the work sits in those two items.

---
id: thm-pmea-implies-normal-moore-space-conjecture
kind: theorem
title: "PMEA implies the normal Moore space conjecture"
status: draft
origin: pipeline
deps: [def-moore-spaces-and-developments, thm-pmea-normal-low-character-spaces-are-collectionwise-normal, thm-collectionwise-normal-moore-spaces-are-metrizable, def-product-measure-extension-axioms-pmea-and-pmea-sigma, def-metrizable-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "D. H. Fremlin, Real-valued-measurable cardinals"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/rvmc.pdf"
      locator: "Corollary 8G, printed p. 70"
    - title: "Dennis K. Burke, The Normal Moore Space Problem"
      url: "https://dmitripavlov.org/scans/ttu15.pdf"
      locator: "Theorems 5.1-5.3, printed pp. 9-11"
---

## Statement

$\mathrm{ZFC} + \mathrm{PMEA}$ proves the normal Moore space conjecture: every
normal Moore space is metrizable. Already PMEA-$\sigma$ suffices
([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]],
[[def-moore-spaces-and-developments]], [[def-metrizable-space]]).

## Facts & Assumptions

**Given:** A normal Moore space $X$ and PMEA-$\sigma$ (hence PMEA).

[F1] Every Moore space is first countable: a development supplies at each point the countable star family as a local base ([[def-moore-spaces-and-developments]]).

[F2] Under PMEA-$\sigma$, every first countable normal space is collectionwise normal ([[thm-pmea-normal-low-character-spaces-are-collectionwise-normal]]).

[F3] Every collectionwise normal Moore space is metrizable ([[thm-collectionwise-normal-moore-spaces-are-metrizable]]).

[F4] PMEA implies PMEA-$\sigma$, since a $\mathfrak c$-additive full extension is countably additive ([[def-product-measure-extension-axioms-pmea-and-pmea-sigma]]).

## Proof

**Proof technique:** direct.

1.1 The space $X$ is first countable by [F1] and is normal and Moore by hypothesis. [given, F1]

2.1 By [F2] the space $X$ is collectionwise normal. [step 1.1, F2]

3.1 By [F3] the collectionwise normal Moore space $X$ is metrizable; since PMEA implies PMEA-$\sigma$ by [F4], the argument used only PMEA-$\sigma$. [step 2.1, F3, F4] ∎

## Remarks

- **This is Nyikos' provisional solution in Fremlin's form.** The measure-theoretic input is PMEA-$\sigma$ alone; the topological input is that a first countable normal space is collectionwise normal under it; the metrization of collectionwise normal Moore spaces is the separate local theorem of this page.

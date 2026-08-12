---
id: cex-filtered-colimits-need-not-commute-with-infinite-products-in-set
kind: counterexample
title: "Filtered colimits in Set need not commute with countably infinite products"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-filtered-category-and-filtered-colimit, thm-filtered-colimits-commute-with-finite-limits-in-set, def-products-and-coproducts]
justified_by: []
aliases: []
landmark: false
proof_strategy: bounded-sequences
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Categories, Section 4.19"
      url: "https://stacks.math.columbia.edu/download/categories.pdf"
pipeline_run: frontier-12
---

## Statement refuted

Filtered colimits in $\mathbf{Set}$ commute with arbitrary set-indexed
products.

## Facts & Assumptions

**Given:** Positive integers $i,j$ and sets $M_{i,j}=\{1,\ldots,i\}$, with
inclusions as $i$ increases.

[F1] A category is filtered when it is nonempty, every two objects have a
common target, and every parallel pair is equalized at a later stage
([[def-filtered-category-and-filtered-colimit]]).

[L1] Filtered colimits commute with finite, not asserted infinite, limits in
$\mathbf{Set}$
([[thm-filtered-colimits-commute-with-finite-limits-in-set]]).

[F2] Products in a category represent families of coordinate maps
([[def-products-and-coproducts]]).

## Counterexample

**Proof technique:** bounded sequences.

1.1 The positive-integer chain is nonempty, two indices have their maximum as a common target, and it has no distinct parallel arrows, so it is filtered by [F1]. For fixed $i$, the countable product $\prod_{j\ge1}M_{i,j}$ is the set of positive-integer sequences all of whose entries are at most $i$. [F1, F2]

1.2 For each $j$, the filtered colimit $\operatorname*{colim}_iM_{i,j}$ is $\mathbb N_{>0}$. The product of these coordinatewise colimits is the set of all positive-integer sequences, including $(1,2,3,\ldots)$, which is unbounded. [F2]

2.1 Its filtered colimit over $i$ is therefore the set of bounded positive-integer sequences: a sequence appears at some stage exactly when one integer bounds all its coordinates. [step 1.1]

3.1 Hence the canonical map from step 2.1 to the set in step 1.2 is not surjective. The arbitrary-product assertion is false, while [L1] is not contradicted because the product is infinite. [L1, step 2.1, step 1.2] ∎

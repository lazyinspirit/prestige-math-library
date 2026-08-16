---
id: thm-general-adjoint-functor-theorem-objectwise-form
kind: theorem
title: "General adjoint functor theorem, objectwise initial-object form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object, thm-the-solution-set-condition-says-the-comma-category-has-a-jointly-weakly-initial-set, lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor, def-small-finite-and-large-limits-completeness-and-cocompleteness, def-small-locally-small-and-large-category, def-preservation-reflection-creation-continuity-and-cocontinuity]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, theorem 4.7.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, theorem 6.3.10"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

Let $U:\mathcal A\to\mathcal C$, where $\mathcal A$ is complete and locally small, and suppose $U$ is continuous. Fix $C\in\mathcal C$. If $U$ satisfies the solution-set condition at $C$, then the comma category $(C\downarrow U)$ has an initial object. Equivalently, there exists a universal arrow from $C$ to $U$.

## Facts & Assumptions

**Given:** The functor and hypotheses in the Statement, and one supplied solution set at the fixed object $C$.

[L1] A category is complete when every small diagram in it has a limit ([[def-small-finite-and-large-limits-completeness-and-cocompleteness]]).

[L2] Local smallness means that each hom-collection is a set ([[def-small-locally-small-and-large-category]]).

[L3] A solution set at $C$ is exactly a jointly weakly initial set in $(C\downarrow U)$ ([[thm-the-solution-set-condition-says-the-comma-category-has-a-jointly-weakly-initial-set]]).

[L4] The comma projection strictly creates every projected limit preserved by $U$ ([[lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor]]).

[L5] A complete locally small category with a supplied jointly weakly initial set has an initial object without class-indexed choice ([[thm-a-complete-locally-small-category-with-a-jointly-weakly-initial-set-has-an-initial-object]]).

[L6] A functor is continuous when it preserves all small limits ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Proof

**Proof technique:** constructive.

1.1 The comma category is locally small because each of its hom-collections is a subset of a hom-set in $\mathcal A$, which is a set by [L2]. Every small projected diagram has a limit by the completeness of $\mathcal A$ in the sense of [L1], and $U$ preserves that limit because $U$ is continuous in the sense of [L6], so [L4] creates its limit in the comma category. Hence $(C\downarrow U)$ is complete and locally small, and [L3] supplies a jointly weakly initial set. [L1, L2, L3, L4, L6, construct]

2.1 Apply [L5] to obtain an initial object of $(C\downarrow U)$. Its construction uses only the supplied solution set for this fixed $C$, so it performs no simultaneous selection over all objects of $\mathcal C$. [step 1.1, L5, discharge-construct] ∎

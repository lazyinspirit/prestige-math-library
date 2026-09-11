---
id: "thm-lc-measurable-implies-weakly-compact"
kind: "theorem"
title: "Measurable cardinals are weakly compact"
deps: ["thm-lc-measurability-normal-measures-and-embeddings", "lem-lc-complete-measures-small-fibres-and-inaccessibility", "lem-lc-tree-partition-equivalence", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Chapter 10 normal-measure partition proof p.111 and Chapter 17;
        local two-color specialization
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC every measurable cardinal is weakly compact.

## Facts & Assumptions

**Given:** ZFC. Normalized the measure, chose its unique tail colors, and used a measure-one diagonal intersection to calculate a kappa-sized homogeneous set.

[F1] [[thm-lc-measurability-normal-measures-and-embeddings]]: A measurable cardinal carries a normal measure closed under diagonal intersections.

[F2] [[lem-lc-complete-measures-small-fibres-and-inaccessibility]]: Kappa is inaccessible and every measure-one subset has size kappa.

[F3] [[lem-lc-tree-partition-equivalence]]: At an inaccessible, the two-color partition property implies weak compactness.

[F4] [[def-axiom-of-choice]]: ZFC propagates through normalization and the partition characterization.

## Proof

1.1 Let U be a normal measure on kappa, supplied by F1, and fix a coloring $c:[\kappa]^2\to2$. For each alpha<kappa the tail above alpha is measure one by F2. Its two color fibres are disjoint and cover that tail; exactly one belongs to U by the ultrafilter laws. Let i_alpha be this uniquely determined color and A_alpha its fibre. Exactly one of the sets $H_i=\{\alpha:i_\alpha=i\}$, i<2, belongs to U. Fix its color i. These selections are unique finite decisions, with no extra choice beyond the ambient F4. [F1, F2, F4]

2.1 By F1 the diagonal intersection $D=\{\beta<\kappa:(\forall\alpha<\beta)\ \beta\in A_\alpha\}$ belongs to U. Thus H=H_i intersect D belongs to U and has size kappa by F2. If alpha<beta both belong to H, then alpha lies in H_i and beta lies in D, so beta belongs to A_alpha and c(alpha,beta)=i_alpha=i. Hence H is homogeneous. F2 makes kappa inaccessible, and F3 turns this two-color partition property into weak compactness. [F1, F2, F3, step 1.1] ∎

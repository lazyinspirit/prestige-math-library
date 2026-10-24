---
id: thm-limits-and-colimits-are-adjoint-to-the-diagonal-functor
kind: theorem
title: 'Chosen limits and colimits are adjoint to the diagonal functor'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chosen-limits-and-colimits-assemble-into-functors, def-limit-and-colimit-of-a-diagram, def-functor-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Proposition 4.6.1'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 5.1'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $\mathcal J$ be small and let $\Delta:\mathcal C\to[\mathcal J,\mathcal C]$ be the diagonal functor.

1. If a limiting cone is supplied for every $D:\mathcal J\to\mathcal C$, the resulting limit functor satisfies $\Delta\dashv\lim_{\mathcal J}$.
2. If a colimiting cocone is supplied for every such $D$, the resulting colimit functor satisfies $\operatorname{colim}_{\mathcal J}\dashv\Delta$.

The choices are part of the hypotheses.

## Facts & Assumptions

**Given:** The small category $\mathcal J$ and the supplied choices in the Statement.

[F1] Chosen limiting or colimiting cones for every diagram assemble into limit or colimit functors ([[thm-chosen-limits-and-colimits-assemble-into-functors]]).

[F2] A limit is a terminal cone and a colimit is an initial cocone ([[def-limit-and-colimit-of-a-diagram]]).

[F3] Morphisms in a functor category are natural transformations ([[def-functor-category]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the supplied limiting cones define a functor $\lim_{\mathcal J}:[\mathcal J,\mathcal C]\to\mathcal C$. [F1]

1.2 A morphism $c\to\lim D$ is, by [F2], uniquely equivalent to a cone from $c$ to $D$; by [F3], such a cone is exactly a natural transformation $\Delta c\Rightarrow D$. [F2, F3]

1.3 Dually, supplied colimits assemble by [F1], and [F2] with [F3] make a morphism $\operatorname{colim}D\to c$ uniquely equivalent to a cocone $D\Rightarrow\Delta c$. [F1, F2, F3]

2.1 The correspondence in step 1.2 is natural in $c$ and $D$ because postcomposition of a mediating map and transport of a cone along a natural transformation preserve the defining cone equations. Hence $\Delta\dashv\lim_{\mathcal J}$. [step 1.1, step 1.2]

3.1 Reading step 2.1 in the opposite categories gives the corresponding check for step 1.3: the cocone correspondence is natural in $c$ and $D$ because precomposition of a mediating map and transport of a cocone along a natural transformation preserve the defining cocone equations. Hence $\operatorname{colim}_{\mathcal J}\dashv\Delta$. [step 1.3, step 2.1, F2, F3]

4.1 Both constructions begin with supplied objectwise choices; no selection is inferred from bare existence. [step 2.1, step 3.1] ∎

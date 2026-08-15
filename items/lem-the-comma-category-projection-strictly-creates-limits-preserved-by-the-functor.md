---
id: lem-the-comma-category-projection-strictly-creates-limits-preserved-by-the-functor
kind: lemma
title: "A comma-category projection strictly creates the limits preserved by the functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-comma-slice-and-coslice-categories, def-limit-and-colimit-of-a-diagram, def-preservation-reflection-creation-continuity-and-cocontinuity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, lemma 4.7.2"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, lemma A.2"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

Let $U:\mathcal A\to\mathcal C$, fix $C\in\mathcal C$, and let $\Pi:(C\downarrow U)\to\mathcal A$ be the projection. If a diagram $D:\mathcal J\to(C\downarrow U)$ has a projected limit $(L,p_j)$ in $\mathcal A$ and $U$ preserves that limit, then there is a unique structure arrow $\lambda:C\to U(L)$ making $(L,\lambda)$ the limit of $D$ in the comma category. Thus $\Pi$ strictly creates every limit of $\Pi D$ that $U$ preserves, including the empty limit.

## Facts & Assumptions

**Given:** A diagram $D$ in $(C\downarrow U)$, whose objects have structure arrows $\lambda_j:C\to U(A_j)$, and a limiting cone $(L,p_j)$ of $\Pi D$ preserved by $U$.

[L1] A comma morphism $h:(A,\alpha)\to(B,\beta)$ satisfies $\beta=U(h)\circ\alpha$ ([[def-comma-slice-and-coslice-categories]]).

[L2] A limiting cone has a unique mediating map from every cone, with the same clause for the empty diagram ([[def-limit-and-colimit-of-a-diagram]]).

[L3] Strict creation means that every target limiting cone has a unique lift with exactly the same apex and legs, and the lifted cone is limiting ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

## Proof

**Proof technique:** direct.

1.1 The arrows $\lambda_j:C\to U(A_j)$ form a cone over $U\Pi D$. Since $U(L)$ with legs $U(p_j)$ is limiting, [L2] gives a unique $\lambda:C\to U(L)$ satisfying $U(p_j)\lambda=\lambda_j$ for every $j$. By [L1], the same legs $p_j$ are comma morphisms from $(L,\lambda)$. [L1, L2]

2.1 Given any comma cone with apex $(B,\beta)$, the projected limit supplies a unique $h:B\to L$ with $p_jh$ equal to its legs. Both $U(h)\beta$ and $\lambda$ have the same composites with every $U(p_j)$, so uniqueness of the preserved limit gives $U(h)\beta=\lambda$; hence $h$ is the unique comma morphism. The lifted cone is limiting. [step 1.1, L1, L2]

3.1 The arrow $\lambda$ in step 1.1 is forced by the projected apex and legs, so the lift is unique on the nose. For an empty indexing category, preservation of the terminal object gives the unique map $C\to U(L)$ by the same limit property. Thus all strict-creation clauses in [L3] hold, including the degenerate and empty diagrams. [step 1.1, step 2.1, L2, L3] ∎

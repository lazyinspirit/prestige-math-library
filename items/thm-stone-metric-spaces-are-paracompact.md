---
id: thm-stone-metric-spaces-are-paracompact
kind: theorem
title: "Stone's theorem, under choice: every metric space is paracompact"
status: published
origin: session
deps: [lem-metric-open-covers-have-point-finite-refinements, lem-metric-point-finite-refinements-can-be-made-locally-finite, def-paracompact-space, def-metric-space, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "D. Ornstein, A New Proof of the Paracompactness of Metric Spaces, Proc. Amer. Math. Soc. 21 (1969), 341–342"
      url: "https://www.ams.org/proc/1969-021-02/S0002-9939-1969-0242120-3/S0002-9939-1969-0242120-3.pdf"
    - title: "C. Good, I. J. Tree and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://doi.org/10.1090/S0002-9939-98-04163-X"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Every metric space is paracompact.

## Facts & Assumptions

**Given:** The Axiom of Choice, a metric space $X$, and an arbitrary open cover $\mathcal U$ of its metric topology.

[L1] Under choice, every metric open cover has a point-finite open refinement, and Ornstein's second construction turns that point-finite cover into a locally finite open refinement ([[lem-metric-open-covers-have-point-finite-refinements]], [[lem-metric-point-finite-refinements-can-be-made-locally-finite]]).

[F1] Paracompactness means that every open cover has such a refinement ([[def-paracompact-space]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] to the arbitrary cover $\mathcal U$. [L1]

2.1 The resulting locally finite open refinement is exactly the condition in [F1], so $X$ is paracompact. [F1, step 1.1] ∎

## Remarks

The theorem is proved here with the Axiom of Choice as a sufficient hypothesis. No assertion is made that this is its exact set-theoretic strength.

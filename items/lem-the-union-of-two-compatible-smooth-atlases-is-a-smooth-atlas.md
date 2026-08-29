---
id: lem-the-union-of-two-compatible-smooth-atlases-is-a-smooth-atlas
kind: lemma
title: "The union of two compatible smooth atlases is a smooth atlas"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-atlas]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ and $\mathcal B$ be compatible smooth atlases on a topological
manifold $M$. Then the family $\mathcal A\cup\mathcal B$ of all charts belonging
to $\mathcal A$ or to $\mathcal B$ is again a smooth atlas on $M$.

## Facts & Assumptions

**Given:** Compatible smooth atlases $\mathcal A$ and $\mathcal B$ on $M$.

[F1] A smooth atlas is a family of charts whose domains cover $M$ and whose members are pairwise smoothly compatible, and compatible atlases have every chart of one smoothly compatible with every chart of the other ([[def-smooth-atlas]]).

## Proof

**Proof technique:** direct.

1.1 The union of the two domain covers is a cover of $M$, so the family [F1, given] $\mathcal A\cup\mathcal B$ satisfies the covering condition. [F1, given]

1.2 Two charts both from $\mathcal A$ are compatible by the pairwise condition [F1, given] inside $\mathcal A$, and likewise two charts both from $\mathcal B$; a chart of $\mathcal A$ and a chart of $\mathcal B$ are compatible because the two atlases are compatible. [F1, given]

2.1 Therefore every pair of members of $\mathcal A\cup\mathcal B$ is smoothly [F1, step 1.1, step 1.2] compatible, and step 1.1 gives the covering condition. Hence $\mathcal A\cup\mathcal B$ is a smooth atlas. [F1, step 1.1, step 1.2] ∎

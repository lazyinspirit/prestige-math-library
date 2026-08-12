---
id: cor-equalizers-are-monic-and-coequalizers-are-epic
kind: corollary
title: "Every equalizer is a monomorphism, and every coequalizer is an epimorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equalizers-and-coequalizers, lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct-corollary
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Exercise 3.1.iv"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Every equalizer morphism is monic, and every coequalizer morphism is epic.

## Facts & Assumptions

**Given:** An equalizer $e:E\to A$ and a coequalizer $q:B\to Q$.

[F1] An equalizer is the single nonidentity leg of a limiting cone, and a
coequalizer is the single nonidentity leg of a colimiting cocone
([[def-equalizers-and-coequalizers]]).

[L1] Limit legs are jointly monic and colimit legs are jointly epic
([[lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic]]).

## Proof

**Proof technique:** direct corollary.

1.1 If $er=es$, [F1] and the limiting clause of [L1] give $r=s$; hence $e$ is monic. [F1, L1]

2.1 If $rq=sq$, [F1] and the colimiting clause of [L1] give $r=s$; hence $q$ is epic. [F1, L1] ∎

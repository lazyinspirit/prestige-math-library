---
id: lem-schur-multiplier-of-a-finite-group-is-finite
kind: lemma
title: "Multiplier of a finite group is finite"
status: published
origin: pipeline
deps: [def-schur-multiplier-of-a-group, lem-every-finite-group-is-finitely-presented, cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated, lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

For finite G, M(G) is finite abelian.

## Proof

**Given:** Let $G$ be finite.

1.1 Its multiplier is finitely generated, and $|G|$ annihilates it because it is positive-degree integral homology. [given]

2.1 A finitely generated abelian group of bounded exponent is finite, so $M(G)$ is finite. [step 1.1, algebra] ∎

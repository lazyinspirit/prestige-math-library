---
id: lem-every-finite-group-is-finitely-presented
kind: lemma
title: "Every finite group is finitely presented"
status: draft
origin: pipeline
deps: [def-free-presentation-kernel-data]
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
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Every finite group has finitely many generators and relators.

## Proof

**Given:** Let $G$ be finite.

1.1 Use one generator $x_g$ for each $g\in G$ and the finitely many relations $x_gx_h=x_{gh}$ and $x_1=1$. [given]

2.1 Every word reduces to one $x_g$, so the presented group maps bijectively to $G$ and is a finite presentation. [step 1.1, algebra] ∎

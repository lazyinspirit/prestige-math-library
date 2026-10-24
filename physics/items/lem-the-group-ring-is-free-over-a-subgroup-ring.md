---
id: lem-the-group-ring-is-free-over-a-subgroup-ring
kind: lemma
title: "The group ring is free over a subgroup ring"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-restriction-induction-and-coinduction-for-group-modules, def-subgroup]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Löh, Proposition 1.7.2"
      url: "https://loeh.app.ur.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Statement

If $H\le G$ and a left (respectively right) coset transversal is supplied, then $\mathbb Z[G]$ is free as a right (respectively left) $\mathbb Z[H]$-module on it.

## Proof

**Given:** A supplied left coset transversal $T$.

1.1 Every $g\in G$ has a unique form $th$ with $t\in T,h\in H$. [given]

2.1 Group-ring basis expansion therefore gives $\mathbb Z[G]=\bigoplus_{t\in T}t\mathbb Z[H]$ as right modules. The opposite-side assertion follows from a right transversal. For arbitrary cosets, choosing $T$ is the only choice input. [step 1.1] ∎

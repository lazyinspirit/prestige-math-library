---
id: lem-c-prime-one-sixth-interior-faces-have-at-least-seven-arcs
kind: lemma
title: "C prime one sixth interior faces have at least seven arcs"
status: published
origin: pipeline
deps: [lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan \u00a73.5.1 paragraph preceding Definition 3.5.3"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html"
---

## Statement

Every interior face of an arc-reduced reduced $C'(1/6)$ diagram has at least seven incident arcs, counted with multiplicity.

## Facts & Assumptions

**Given:** An interior face with boundary relator $r$ and $d$ incident arcs $a_1,\ldots,a_d$.

[F1] Each internal arc, including one with the same face on both sides, is a piece and has length strictly below one sixth of each incident face perimeter ([[lem-internal-arcs-of-a-reduced-small-cancellation-diagram-are-pieces]]).

## Proof

1.1 Every boundary edge of an interior face is internal. The arcs partition its boundary occurrences, so $|r|=\sum_{j=1}^d|a_j|$. If an arc occurs twice at this face it contributes twice to this sum, and [F1] applies to each occurrence; no distinct-face or simple-boundary hypothesis is needed. The relator is nonempty, hence $|r|>0$ and $d\ge1$. By [F1], each summand is strictly below $|r|/6$. [given, F1]

2.1 Summing gives $|r|<d|r|/6$. Dividing by the positive number $|r|$ gives $d>6$; because $d$ is an integer, $d\ge7$. In particular equality at six arcs is excluded by strictness. [step 1.1, algebra] ∎

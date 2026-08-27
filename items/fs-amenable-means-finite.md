---
id: fs-amenable-means-finite
kind: false-statement
title: "FALSE: amenable means finite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-abelian-groups-are-amenable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Every amenable group is finite.

## Facts & Assumptions

**Given:** The false claim above and the ultrafilter lemma.

[L1] Under the ultrafilter lemma, every abelian group is amenable ([[thm-abelian-groups-are-amenable]]).

## Refutation

**Proof technique:** direct.

1.1 The additive group $(\mathbb Z,+)$ is abelian and infinite. [given]

2.1 By [L1], $(\mathbb Z,+)$ is amenable. Since it is infinite, it refutes the statement. [L1, step 1.1] ∎

---
id: fs-every-hnn-extension-is-an-ascending-hnn-extension
kind: false-statement
title: "FALSE: every HNN extension is an ascending HNN extension"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ascending-hnn-extension, def-hnn-extension-and-stable-letter]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Statement

Every HNN extension is the ascending HNN extension of some injective
endomorphism of its base group.

## Facts & Assumptions

**Given:** The definitions of a general HNN extension and of an ascending HNN extension.

[L1] An ascending HNN extension has one associated subgroup equal to the whole base group. ([[def-ascending-hnn-extension]])

[L2] A general HNN extension only requires two injectively embedded associated subgroups. ([[def-hnn-extension-and-stable-letter]])

## Refutation

**Proof technique:** direct.

1.1 Let $A=\mathbb Z$ and choose associated subgroups $2\mathbb Z$ and $3\mathbb Z$ with the isomorphism $2n\mapsto 3n$. By [L2] this defines an HNN extension. [L2, given, construct]

2.1 Neither associated subgroup is all of $A$, so this example cannot satisfy the condition in [L1]. Therefore it is an HNN extension that is not ascending, and the statement is false. [L1, step 1.1, algebra] ∎

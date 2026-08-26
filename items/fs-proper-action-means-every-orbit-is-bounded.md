---
id: fs-proper-action-means-every-orbit-is-bounded
kind: false-statement
title: "FALSE: a proper isometric action has bounded orbits"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-integers-acting-geometrically-on-the-line]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "C. Löh, Geometric Group Theory, Sections 4.4 and 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
pipeline_run: null
---

## Statement

A proper isometric action has bounded orbits.

## Facts & Assumptions

**Given:** The translation action of $\mathbb Z$ on $\mathbb R$ from [[ex-integers-acting-geometrically-on-the-line]].

[L1] That action is geometric, hence proper, and its orbit through $0$ is the unbounded subset $\mathbb Z \subseteq \mathbb R$ ([[ex-integers-acting-geometrically-on-the-line]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the action is proper. [L1]

1.2 The orbit of $0$ is $\mathbb Z$, which is unbounded in $\mathbb R$. So the conclusion of the statement fails. [L1]

2.1 Steps 1.1 and 1.2 refute the statement. [step 1.1, step 1.2] ∎

---
id: fs-a-block-is-an-invariant-subset
kind: false-statement
title: "FALSE: every block is an invariant subset"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-dihedral-actions-of-prime-and-composite-degree]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 4"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Every block is an invariant subset.

## Facts & Assumptions

**Given:** The composite-degree dihedral action from [[ex-dihedral-actions-of-prime-and-composite-degree]].

[L1] In the composite dihedral action, a residue class modulo a proper divisor is a block ([[ex-dihedral-actions-of-prime-and-composite-degree]]).

## Refutation

**Proof technique:** direct.

1.1 In the action of $D_6$ on $\mathbb Z/6\mathbb Z$, the subset $B=\{0,2,4\}$ is a block by [L1]. [L1]

2.1 The reflection $x \mapsto 1-x$ sends $B$ to $\{1,3,5\}$, which is disjoint from $B$ and not equal to it. So $B$ is a block but not an invariant subset. [step 1.1, algebra]

3.1 This refutes the statement. [step 2.1] ∎

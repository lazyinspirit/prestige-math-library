---
id: fs-every-transitive-action-is-primitive
kind: false-statement
title: "FALSE: every transitive action is primitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [ex-blocks-in-a-regular-cyclic-action]
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

Every transitive action is primitive.

## Facts & Assumptions

**Given:** The regular action of $C_n$ on itself for a composite integer $n$.

[L1] In the regular cyclic action, the blocks are exactly the cosets of subgroups. For composite $n$ this yields nontrivial blocks ([[ex-blocks-in-a-regular-cyclic-action]]).

## Refutation

**Proof technique:** direct.

1.1 The regular action of $C_n$ on itself is transitive, since every point is reached by a translation. [given, algebra]

1.2 When $n$ is composite, [L1] gives a nontrivial block system coming from a proper nontrivial subgroup of $C_n$. So this transitive action is not primitive. [L1]

2.1 Steps 1.1 and 1.2 refute the statement. [step 1.1, step 1.2] ∎

---
id: cor-lower-limit-line-is-normal
kind: corollary
title: "Assuming countable choice, the lower-limit line is normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-lower-limit-line-is-regular-and-lindelof, lem-regular-lindelof-spaces-are-normal]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

Assuming the Axiom of Countable Choice, the lower-limit line is normal.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice.

[L1] Under countable choice, the lower-limit line is regular and Lindelöf ([[lem-lower-limit-line-is-regular-and-lindelof]]).

[L2] Every regular Lindelöf space is normal ([[lem-regular-lindelof-spaces-are-normal]]).

## Proof

**Proof technique:** direct.

1.1 Under the stated hypothesis, [L1] supplies a regular Lindelöf lower-limit line. [L1]

2.1 Applying [L2] gives its normality. [L1, L2] ∎

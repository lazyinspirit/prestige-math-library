---
id: cex-paracompactness-is-not-productive
kind: counterexample
title: "Assuming choice, two paracompact lower-limit lines can have a nonparacompact product"
status: published
origin: session
deps: [fs-paracompactness-is-productive]
justified_by: []
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane and Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Statement refuted

Assuming the Axiom of Choice, a product of paracompact spaces is paracompact.

## Facts & Assumptions

**Given:** The lower-limit line $L$ under the Axiom of Choice.

[L1] The two factors $L$ are paracompact while $L^2$ is not paracompact ([[fs-paracompactness-is-productive]]).

## Counterexample

**Proof technique:** direct.

1.1 Take the two paracompact factors $L$ from [L1]. [L1]

2.1 Their product $L^2$ is not paracompact by [L1], which refutes the displayed productive assertion. [L1, step 1.1] ∎

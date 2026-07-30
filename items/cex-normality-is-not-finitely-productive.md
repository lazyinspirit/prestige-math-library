---
id: cex-normality-is-not-finitely-productive
kind: counterexample
title: "Assuming choice, normality is not even finitely productive: two copies of the lower-limit line"
status: published
origin: session
deps: [thm-normality-is-not-productive]
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
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
pipeline_run: null
---

## Statement refuted

Assuming choice, the product of any finite family of normal spaces is normal.

## Facts & Assumptions

**Given:** The lower-limit-line product theorem.

[L1] Under choice, the lower-limit line is normal and its binary square is not normal ([[thm-normality-is-not-productive]]).

## Counterexample

**Proof technique:** direct.

1.1 Take two copies of the normal lower-limit line from [L1]. [L1]

2.1 Their binary product is not normal by [L1], refuting the claim already for a finite product. [L1, step 1.1] ∎

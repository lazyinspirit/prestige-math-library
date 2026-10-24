---
id: thm-long-exact-sequence-in-group-cohomology
kind: theorem
title: "Long exact sequence in group cohomology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor, thm-right-derived-functors-form-a-cohomological-delta-functor]
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
    - title: "Weibel, §6.1"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

Assume the Axiom of Dependent Choice and fix supplied injective resolution data
on all left $G$-modules.
A short exact sequence $0\to A\to B\to C\to0$ of left $G$-modules induces a natural long exact sequence
$$0\to H^0(G;A)\to H^0(G;B)\to H^0(G;C)\to H^1(G;A)\to\cdots.$$

## Proof

**Given:** The displayed short exact sequence.

1.1 Invariants are left exact. Under the stated Choice and supplied-resolution hypotheses, [[thm-right-derived-functors-form-a-cohomological-delta-functor]] makes their right derived functors a cohomological delta functor. [given]

2.1 Its connecting maps give precisely the displayed sequence after the definition of $H^n(G;-)$ is substituted; delta-functor naturality gives naturality. [step 1.1] ∎

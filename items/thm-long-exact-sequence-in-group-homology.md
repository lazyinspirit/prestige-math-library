---
id: thm-long-exact-sequence-in-group-homology
kind: theorem
title: "Long exact sequence in group homology"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-homology-as-a-derived-functor, thm-left-derived-functors-form-a-homological-delta-functor]
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

Assume the Axiom of Dependent Choice and fix supplied projective resolution data
on all left $G$-modules.
A short exact sequence $0\to A\to B\to C\to0$ of left $G$-modules induces a natural long exact sequence
$$\cdots\to H_1(G;C)\to H_0(G;A)\to H_0(G;B)\to H_0(G;C)\to0.$$

## Proof

**Given:** The displayed short exact sequence.

1.1 Coinvariants are right exact. Under the stated Choice and supplied-resolution hypotheses, [[thm-left-derived-functors-form-a-homological-delta-functor]] makes their left derived functors a homological delta functor. [given]

2.1 Its connector has degree $H_n(G;C)\to H_{n-1}(G;A)$, giving the stated order after substituting the definition of $H_n$. [step 1.1] ∎

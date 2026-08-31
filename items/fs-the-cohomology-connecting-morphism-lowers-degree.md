---
id: fs-the-cohomology-connecting-morphism-lowers-degree
kind: false-statement
title: "FALSE: the cohomology connecting morphism lowers degree"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-long-exact-sequence-in-cohomology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-27
---

## Statement

The cohomology connecting morphism lowers degree.

## Facts & Assumptions

**Given:** A short exact sequence of cochain complexes.

[A1] The statement refuted is: the cohomology connecting morphism lowers degree.

[L1] The cohomology long exact sequence contains maps $$\partial^n:H^n(C)\to H^{n+1}(A)$$ ([[thm-long-exact-sequence-in-cohomology]]).

## Refutation

**Proof technique:** direct.

1.1 The degree shift displayed in [L1] goes from $H^n(C)$ to $H^{n+1}(A)$, so it raises the upper index by one rather than lowering it. [A1, L1, given, algebra]

2.1 Therefore [A1] contradicts the actual cohomology long exact sequence and is false. [A1, L1, step 1.1, algebra] ∎


---
id: fs-e-infinity-is-the-abutment-object
kind: false-statement
title: E infinity is the abutment object
deps: ["def-abutment-to-a-filtered-object", "cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects", "def-homological-spectral-sequence"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Charles A. Weibel, An Introduction to Homological Algebra, Chapter 5
      url: https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf
    - title: Romyar Sharifi, Homological Algebra
      url: https://math.ucla.edu/~sharifi/homalg.pdf
status: published
origin: pipeline
pipeline_run: phase-2-catchup-24
proof_strategy: direct
---




## Statement

It is false that $E^\infty$ is the abutment itself, without extension data.

## Facts & Assumptions

**Given:** The finite filtered group ℤ/4 described in F2.

[F1] Abutment identifies each stable term with a successive filtration quotient ([[def-abutment-to-a-filtered-object]]).

[F2] The filtered ℤ/4 has two ℤ/2 graded pieces, while every element of their direct sum is killed by 2 ([[cex-isomorphic-associated-graded-objects-need-not-give-isomorphic-filtered-objects]]).

[F3] An abstract sequence consists of square-zero differentials and specified homology isomorphisms ([[def-homological-spectral-sequence]]).

## Refutation

**Proof technique:** direct.

1.1 Take $H_0=ℤ/4$ with 0⊂{0,2}⊂ℤ/4 as in [F2]. A spectral sequence constant on every page, with ℤ/2 at (0,0) and (1,-1), zero elsewhere and zero differentials, has the identity quotient identifications as its transitions. Give it the abutment isomorphisms to these two graded pieces, as allowed by [F1]. [F1, F2, F3]

2.1 The finite direct sum of its stable terms in total degree zero is (ℤ/2)², killed by 2. The abutment $H_0$ has 2[1]₄=[2]₄≠0 by [F2]. Thus even summing the stable pieces does not give an isomorphic abutment. The stable page supplies the quotients, not the nonsplit extension. [F1, F2, step 1.1] ∎

## Source notes

[Weibel, Chapter 5](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §5.2 pp.122–125 and Definitions 5.4.2–4 pp.132–133; [Sharifi](https://math.ucla.edu/~sharifi/homalg.pdf), §4.1 pp.87–89 and Definition 4.2.1 p.90.

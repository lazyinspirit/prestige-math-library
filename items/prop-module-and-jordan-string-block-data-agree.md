---
id: prop-module-and-jordan-string-block-data-agree
kind: proposition
title: "For split characteristic polynomial, elementary divisors and Jordan strings give the same Jordan blocks"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-canonical-form-from-pid-module-structure, thm-jordan-form-uniqueness-from-ranks-of-powers, thm-power-ranks-determine-nilpotent-jordan-blocks]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Lectures 11-12"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 7.4"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

For an endomorphism with split characteristic polynomial, the elementary divisors $(x-\lambda)^e$ in the module construction and the Jordan strings in the rank-of-powers construction determine exactly the same block sizes and multiplicities, including the empty data on the zero space.

## Facts & Assumptions

**Given:** The module-derived Jordan form of [[thm-jordan-canonical-form-from-pid-module-structure]].

[L1] The ranks of all shifted powers determine the Jordan form uniquely up to permutation of its blocks ([[thm-jordan-form-uniqueness-from-ranks-of-powers]]).

[L2] For a nilpotent operator, successive kernel dimensions or rank differences give the number of blocks of each size ([[thm-power-ranks-determine-nilpotent-jordan-blocks]]).

## Proof

**Proof technique:** direct.

1.1 On the cyclic summand $F[x]/((x-\lambda)^e)$, multiplication by $(x-\lambda)^k$ has kernel dimension $\min(k,e)$ for $k\ge0$: it kills exactly the final $\min(k,e)$ translated-power basis vectors. [algebra]

2.1 Kernel dimensions add over direct sums, so for each $\lambda$ the module elementary divisors give $\dim\ker(T-\lambda I)^k=\sum_e\min(k,e)$, counted with multiplicity. [step 1.1, algebra]

3.1 By [L2], successive differences of the sequence in step 2.1 recover the number of blocks of size at least $k$ and exactly $k$. These are the same shifted-power invariants used in [L1], so the module and Jordan-string constructions have identical block multisets. For $k=0$ the kernel is zero; after the largest exponent the sequence stabilizes, and on the zero space every sequence and list is empty. [step 2.1, L1, L2] ∎

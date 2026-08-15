---
id: cor-free-modules-are-projective-and-flat
kind: corollary
title: "Under the stated choice boundary, free modules are projective and hence flat"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-free-modules-are-projective-with-choice-boundary, thm-projective-modules-are-flat, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 4 on tensor products and flatness"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week4b.pdf"
    - title: "W. Li, Commutative Algebra, Lectures 9-10"
      url: "https://www.math.columbia.edu/~wenqili/commalg_notes.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and let $F$ be a free $R$-module with basis indexed by $X$.

1. Assuming the Axiom of Choice, $F$ is projective and therefore flat.
2. If $X$ is finite, only finite choice is needed for projectivity; if $X=\varnothing$, no choice is needed.
3. Regardless of choice, $F$ is flat, because tensoring with $F$ is a direct sum of copies of the identity tensor functor.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a free $R$-module $F$ with basis indexed by $X$.

[L1] Under AC every free module is projective; a finite basis requires only finite choice, and an empty basis requires none ([[thm-free-modules-are-projective-with-choice-boundary]]).

[L2] Every projective module over a commutative ring is flat without choice ([[thm-projective-modules-are-flat]]).

[L3] Tensor products commute with arbitrary direct sums in either variable; in particular $A\otimes_R\bigoplus_{x\in X}R\cong\bigoplus_{x\in X}(A\otimes_RR)$ ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[L4] The regular module is a tensor unit ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 Under AC, [L1] makes $F$ projective and [L2] then makes it flat. The refined finite and empty-basis choice bounds are exactly those stated in [L1]. [given, L1, L2]

1.2 Independently of AC, write $F=\bigoplus_{x\in X}R$. By [L3] and [L4], tensoring an exact sequence with $F$ gives the direct sum, over $X$, of the original exact sequence; kernels and images are computed coordinatewise, so the result remains exact. Thus $F$ is flat without any choice principle. [L3, L4, algebra]

2.1 Step 1.1 establishes the projective route with its precise choice boundary, while step 1.2 establishes flatness unconditionally; the two routes are logically distinct. [step 1.1, step 1.2] ∎

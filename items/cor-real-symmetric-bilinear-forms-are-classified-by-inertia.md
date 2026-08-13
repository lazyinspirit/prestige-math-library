---
id: cor-real-symmetric-bilinear-forms-are-classified-by-inertia
kind: corollary
title: 'Two real symmetric bilinear forms are congruent if and only if they have the same inertia'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylvesters-law-of-inertia, thm-change-of-basis-for-a-bilinear-form-is-congruence]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §7.7'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Statement

Two real symmetric bilinear forms on vector spaces of the same finite dimension are congruent if and only if they have the same inertia $(p,q,r)$.

## Facts & Assumptions

**Given:** Real symmetric bilinear forms $B$ and $C$ in the same finite dimension.

[L1] Sylvester's law gives each form a unique normal form $\operatorname{diag}(I_p,-I_q,0_r)$ ([[thm-sylvesters-law-of-inertia]]).

[L2] A basis change acts on a bilinear-form matrix by congruence $A\mapsto P^{\mathsf T}AP$ ([[thm-change-of-basis-for-a-bilinear-form-is-congruence]]).

## Proof

**Proof technique:** direct, proving both implications.

1.1 If $B$ and $C$ are congruent, [L2] says they are two matrix representations of the same form after an invertible coordinate identification. The uniqueness clause of [L1] therefore gives them the same inertia. [L1, L2, given]

1.2 Conversely, suppose both have inertia $(p,q,r)$. By [L1], choose bases in which both matrices equal $D=\operatorname{diag}(I_p,-I_q,0_r)$. The linear map sending the first chosen basis to the second is an isomorphism and carries one form to the other, so the forms are congruent; equivalently, compose the two invertible change-of-basis matrices in [L2]. [L1, L2, choose]

2.1 Steps 1.1 and 1.2 prove both directions, including the zero-dimensional and degenerate cases. [step 1.1, step 1.2] ∎

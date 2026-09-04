---
id: lem-sylvester-inertia-makes-morse-index-intrinsic
kind: lemma
title: "Sylvester inertia makes the Morse index intrinsic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-coordinate-change-congruence-for-the-critical-hessian, def-nondegenerate-critical-point-nullity-index-and-coindex, thm-sylvesters-law-of-inertia, def-definiteness-inertia-and-signature-data-over-the-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: congruence invariance
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed."
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Statement

Let $f:M\to\mathbb R$ be smooth and let $p$ be a critical point of $f$. Then
the numbers of positive, negative, and zero directions of any chart matrix of
$\operatorname{Hess}_p(f)$ are independent of the chart. Equivalently, the
nullity, index, and coindex of $p$ are intrinsic.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$ and a critical point $p$.

[F1] Hessian matrices in two charts are congruent
([[lem-coordinate-change-congruence-for-the-critical-hessian]]).

[F2] Nullity, index, and coindex are defined from the Hessian as kernel
dimension and maximal negative- and positive-definite dimensions
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[L1] Congruent real symmetric matrices have the same inertia data
([[thm-sylvesters-law-of-inertia]]).

[L2] The inertia counts are exactly the numbers of positive, negative, and zero
entries in a diagonal normal form
([[def-definiteness-inertia-and-signature-data-over-the-reals]]).

## Proof

**Proof technique:** congruence invariance.

1.1 By [F1], any two chart matrices of $\operatorname{Hess}_p(f)$ are congruent real symmetric matrices. [F1, given]

2.1 Therefore [L1] and [L2] give the same triple $(\text{positive},\text{negative},\text{zero})$ for every chart matrix. [L1, L2, step 1.1]

3.1 For one diagonal normal form, the zero count is the kernel dimension, the negative count is the maximal dimension of a negative-definite subspace, and the positive count is the maximal dimension of a positive-definite subspace, by [F2] and [L2]. Hence nullity, index, and coindex are the same in every chart. [F2, L2, step 2.1]

4.1 Thus the Morse nullity, index, and coindex are intrinsic. [step 2.1, step 3.1] ∎

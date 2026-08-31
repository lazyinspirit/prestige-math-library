---
id: cex-a-preconditioner-can-worsen-the-preconditioned-condition-number
kind: counterexample
title: "A preconditioner can worsen the condition number that actually controls CG"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps,
       thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
---

## Statement refuted

Every invertible, or even every symmetric positive-definite, preconditioner
improves the condition number that governs CG.

## Facts & Assumptions

**Given:** The residual-and-error maps for preconditioning and the symmetric
positive-definite CG transform.

[F1] Symmetric preconditioning replaces $A$ by the transformed operator
$C^{-1}AC^{-*}$
([[prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps]]).

[L1] The CG bound is governed by the spectral condition number of the
transformed operator
([[thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem]]).

## Counterexample
**Proof technique:** direct calculation.

1.1 Take $$A=I_2,\qquad M=\operatorname{diag}(1,1/100).$$ Then $A$ is already Hermitian positive definite with $$\kappa_2(A)=1.$$ Since $M=CC^*$ with $C=\operatorname{diag}(1,1/10)$, [F1] gives the transformed operator $$C^{-1}AC^{-*}=\operatorname{diag}(1,10)I_2\operatorname{diag}(1,10)=\operatorname{diag}(1,100).$$ [F1, algebra]

2.1 The transformed spectral condition number is therefore $$\kappa_2(C^{-1}AC^{-*})=100>1=\kappa_2(A).$$ So this symmetric positive-definite preconditioner worsens the condition number that actually appears in the CG bound from [L1]. The refuted statement is false. [L1, step 1.1, algebra] ∎

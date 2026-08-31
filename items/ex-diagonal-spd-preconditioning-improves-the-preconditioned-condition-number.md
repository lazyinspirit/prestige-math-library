---
id: ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number
kind: example
title: "A diagonal positive-definite preconditioner can improve the relevant condition number"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem]
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

## Example

Let

$$A=\operatorname{diag}(100,1),\qquad M=\operatorname{diag}(100,1).$$

Then $M$ is diagonal and positive definite, and symmetric preconditioning turns
the CG condition number from $100$ into $1$.

## Facts & Assumptions

**Given:** The displayed Hermitian positive-definite system and diagonal
preconditioner.

[L1] Symmetric positive-definite preconditioning preserves the Hermitian
positive-definite CG problem and replaces the bound by the one for the
transformed operator
([[thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem]]).

## Verification
**Proof technique:** direct calculation.

1.1 The original spectral condition number is $$\kappa_2(A)=\frac{100}{1}=100.$$ If $M=CC^*$, then we may take $C=\operatorname{diag}(10,1)$. [algebra]

2.1 The symmetrically preconditioned operator is $$C^{-1}AC^{-*}=\operatorname{diag}(1/10,1)\operatorname{diag}(100,1)\operatorname{diag}(1/10,1)=I_2,$$ so $$\kappa_2(C^{-1}AC^{-*})=1.$$ Therefore the relevant condition number has improved from $100$ to $1$, exactly the transformed quantity singled out in [L1]. [L1, step 1.1, algebra] ∎

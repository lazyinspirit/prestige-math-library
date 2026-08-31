---
id: thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem
kind: theorem
title: "Symmetric positive-definite preconditioning preserves a Hermitian positive-definite CG problem, and the CG bound uses the transformed condition number"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-left-right-and-symmetric-positive-definite-preconditioning,
       prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps,
       thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique,
       thm-conjugate-gradient-chebyshev-bound-in-the-a-norm]
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
    - title: "Jonathan Richard Shewchuk, An Introduction to the Conjugate Gradient Method Without the Agonizing Pain"
      url: "https://www.cs.cmu.edu/~quake-papers/painless-conjugate-gradient.pdf"
    - title: "Richard Barrett et al., Templates for the Solution of Linear Systems: Building Blocks for Iterative Methods"
      url: "https://www.netlib.org/templates/templates.html"
---

## Statement

Let $A\in M_n(\mathbb C)$ be Hermitian positive definite, let $x_*$ solve
$Ax=b$, and let $M$ be Hermitian positive definite. Write $M=CC^*$, and define

$$\widetilde A:=C^{-1}AC^{-*},\qquad \widetilde b:=C^{-1}b,\qquad y:=C^*x,\qquad y_*:=C^*x_*.$$

Then $\widetilde A$ is Hermitian positive definite, the transformed system

$$\widetilde Ay=\widetilde b$$

is equivalent to $Ax=b$, and

$$\|y-y_*\|_{\widetilde A}=\|x-x_*\|_A.$$

Consequently, if

$$\kappa:=\frac{\lambda_{\max}(\widetilde A)}{\lambda_{\min}(\widetilde A)},$$

then exact-arithmetic CG on the transformed system obeys

$$\|y_*-y_m\|_{\widetilde A}\le 2\left(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\right)^m\|y_*-y_0\|_{\widetilde A},$$

which is the preconditioned CG bound.

## Facts & Assumptions

**Given:** A Hermitian positive-definite matrix $A$, a Hermitian positive-definite preconditioner $M$, and the symmetric transform $\widetilde A=C^{-1}AC^{-*}$.

[F1] Symmetric preconditioning uses the variable change $y=C^*x$ coming from a Cholesky factorization $M=CC^*$ ([[def-left-right-and-symmetric-positive-definite-preconditioning]]).

[L1] Equivalent preconditioned systems have the transformed residual and error maps recorded explicitly ([[prop-invertible-preconditioners-give-equivalent-linear-systems-with-explicit-residual-maps]]).

[L2] A Hermitian positive-definite matrix has a Cholesky factorization $M=CC^*$ with invertible $C$ ([[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]).

[L3] CG obeys the Chebyshev $A$-norm bound with the spectral condition number of its Hermitian positive-definite coefficient matrix ([[thm-conjugate-gradient-chebyshev-bound-in-the-a-norm]]).

## Proof
**Proof technique:** direct.

1.1 By [L2], the preconditioner has a factorization $M=CC^*$ with invertible $C$. For any nonzero $z$, $$z^*\widetilde Az=(C^{-*}z)^*A(C^{-*}z)>0,$$ because $C^{-*}z\ne0$ and $A$ is Hermitian positive definite. Also $$\widetilde A^*=(C^{-1}AC^{-*})^*=C^{-1}A^*C^{-*}=C^{-1}AC^{-*}=\widetilde A.$$ So $\widetilde A$ is Hermitian positive definite. [L2, algebra]

2.1 By [F1] and [L1], the transformed system $\widetilde Ay=\widetilde b$ is equivalent to $Ax=b$, and its transformed error is $e_{\mathrm{sym}}=y-y_*=C^*(x-x_*)$. Therefore $$\|y-y_*\|_{\widetilde A}^2=(y-y_*)^*\widetilde A(y-y_*)=(x-x_*)^*A(x-x_*)=\|x-x_*\|_A^2.$$ Hence the energy norms agree under the symmetric change of variables. [F1, L1, step 1.1, algebra]

3.1 Since step 1.1 shows that $\widetilde A$ is Hermitian positive definite, [L3] applies to the transformed system and gives $$\|y_*-y_m\|_{\widetilde A}\le 2\left(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\right)^m\|y_*-y_0\|_{\widetilde A},$$ where $\kappa=\lambda_{\max}(\widetilde A)/\lambda_{\min}(\widetilde A)$ is the spectral ratio from the Statement. By step 2.1, this is exactly the preconditioned CG estimate expressed in the original variables. The bound depends on the transformed operator $\widetilde A$, not on $\kappa_2(A)$ by itself. [L3, step 1.1, step 2.1] ∎

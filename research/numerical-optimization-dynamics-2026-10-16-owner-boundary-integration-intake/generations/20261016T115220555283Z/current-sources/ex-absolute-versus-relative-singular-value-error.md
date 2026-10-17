---
id: ex-absolute-versus-relative-singular-value-error
kind: example
title: "Absolute error can erase a tiny singular value while relative error preserves it"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-singular-values-lipschitz-in-spectral-norm, thm-bidiagonal-singular-values-relative-under-componentwise-perturbations]
dependency_level: 2
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Let $B=\operatorname{diag}(1,\epsilon)$ with $0<\epsilon<1$. A perturbation of spectral norm $\epsilon$ can change the small singular value to zero, giving relative error one. A componentwise relative perturbation of size $\eta$ instead changes it by relative error exactly $\eta$, independently of how small $\epsilon$ is. Thus the absolute guarantee and the stronger bidiagonal relative guarantee answer different questions.

## Facts & Assumptions

**Given:** $0<\epsilon<1$, $0<\eta<1$, and the diagonal matrix $B$.

[F1] [[lem-singular-values-lipschitz-in-spectral-norm]]: each singular-value change under a matrix perturbation is bounded by the spectral norm of that perturbation.

[F2] [[thm-bidiagonal-singular-values-relative-under-componentwise-perturbations]]: a componentwise relative perturbation of an upper bidiagonal matrix bounds every positive singular value relatively, with a factor independent of its absolute magnitude.

## Verification

1.1 The singular values of $B$ are $1$ and $\epsilon$. Set $E_0=\operatorname{diag}(0,-\epsilon)$. Then $B+E_0=\operatorname{diag}(1,0)$, $\|E_0\|_2=\epsilon$, and the small singular value changes by absolute error $\epsilon$ and relative error $\epsilon/\epsilon=1$. This attains the absolute bound in [F1]. [F1, algebra]

1.2 Set $E_1=\eta B$. Each nonzero diagonal entry is multiplied by $1+\eta$ and the zero superdiagonal remains zero, so [F2] applies. Directly, $B+E_1=(1+\eta)B$, whose small singular value is $(1+\eta)\epsilon$ and whose relative error is exactly $\eta$. [F2, algebra]

2.1 Since $\eta$ can be fixed while $\epsilon$ tends to zero, step 1.2 gives a relative guarantee independent of the small singular value; step 1.1 shows that the absolute error scale alone permits complete loss of that value. [step 1.1, step 1.2] ∎

---
id: ex-ip-prior-whitened-tikhonov-posterior
kind: example
title: "Prior whitening turns an anisotropic Gaussian posterior into Tikhonov form"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-axiom-of-choice
  - thm-ip-finite-linear-gaussian-posterior
  - cor-ip-gaussian-map-equals-tikhonov-minimizer
  - def-tikhonov-regularised-least-squares
  - thm-tikhonov-regularised-least-squares-has-a-unique-minimiser
proof_strategy: direct
axiom_use: "AC is inherited from the finite Gaussian posterior model. The covariance whitening and Tikhonov calculations use no stronger choice principle."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Christian Clason, Regularization of Inverse Problems: Lecture Notes, arXiv:2001.00617v2 (2021)"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 13, printed pp. 127–131 (PDF pp. 129–133), finite-dimensional Gaussian MAP/Tikhonov context; the anisotropic whitening calculation is local."
---

## Example

Assume AC. Let $X\sim N_2(0,\operatorname{diag}(4,1))$,
$\eta\sim N_2(0,\operatorname{diag}(1,4))$ independently, $A=I_2$, and
observe $y=(2,4)^T$ in $Y=AX+\eta$. Put
$L=\operatorname{diag}(2,1)$ and
$W=\operatorname{diag}(1,1/2)$. The coordinate change $x=Lz$ makes the
prior on $z$ standard Gaussian, and $W$ whitens the observation noise in
that $W\Gamma W^T=I_2$. The
preconditioned Tikhonov objective is
$$ \|WALz-Wy\|_2^2+\|z\|_2^2 =\|\operatorname{diag}(2,1/2)z-(2,2)^T\|_2^2+\|z\|_2^2. $$
The posterior mean, MAP point, and minimizer in the original parameter
coordinates are $(8/5,4/5)^T$, and the posterior covariance is
$(4/5)I_2$.

## Example references

[[thm-ip-finite-linear-gaussian-posterior|The posterior formula handles general positive-definite observation covariance.]]

[[cor-ip-gaussian-map-equals-tikhonov-minimizer|Prior whitening gives the support-coordinate Tikhonov objective whose unique minimizer is the MAP and posterior mean.]]

## Facts & Assumptions

**Given:** AC, the model and datum in the Example.

[A1] AC is inherited from the Gaussian-law and finite Gaussian-conditioning
interfaces. [[def-axiom-of-choice]]

[F1] The finite linear Gaussian posterior formula is valid for singular or
positive-definite prior covariance and positive-definite noise covariance.
[[thm-ip-finite-linear-gaussian-posterior]]

[F2] The finite Gaussian MAP and posterior mean equal the support-restricted
Tikhonov minimizer. [[cor-ip-gaussian-map-equals-tikhonov-minimizer]]

[F3] For $\lambda>0$, the Tikhonov objective is
$\|Dz-b\|_2^2+\lambda\|z\|_2^2$, with unique minimizer
$(D^TD+\lambda I)^{-1}D^Tb$. [[def-tikhonov-regularised-least-squares]],
[[thm-tikhonov-regularised-least-squares-has-a-unique-minimiser]]

## Verification

**Given:** The hypotheses and facts in the Example and Facts & Assumptions.

1.1 Here $S=C_0+\Gamma=5I_2$, so [F1] gives $m(y)=C_0S^{-1}y=(8/5,4/5)^T$ and $C(y)=C_0-C_0S^{-1}C_0=(4/5)I_2$. [A1, F1, given, algebra]

2.1 The whitening matrices satisfy $W\Gamma W^T=I_2$ and $D=WAL=\operatorname{diag}(2,1/2)$, while $b=Wy=(2,2)^T$. Applying [F3] with $\lambda=1$ gives $\widehat z=(D^TD+I_2)^{-1}D^Tb=(4/5,4/5)^T$. Therefore $x=L\widehat z=(8/5,4/5)^T$. By [F2] this is the unique MAP, posterior mean, and support-restricted minimizer. [F2, F3, step 1.1, algebra] ∎

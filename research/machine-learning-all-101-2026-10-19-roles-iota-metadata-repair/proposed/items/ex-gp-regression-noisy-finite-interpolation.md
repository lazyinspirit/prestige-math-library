---
id: ex-gp-regression-noisy-finite-interpolation
kind: example
title: Noisy interpolation on two independent coordinates
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gaussian-process
  - def-gaussian-process-regression-observation-model
  - lem-gp-regression-observed-covariance-invertibility
  - cor-gp-regression-posterior-predictive-law
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
justified_by: []
proof_strategy: direct finite verification
generation:
  role: example
  task: Verify posterior and noisy-predictive matrices in a two-point unit-noise model.
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2 §2.2
      url: https://gaussianprocess.org/gpml/chapters/RW2.pdf
    - title: Christopher M. Bishop, Pattern Recognition and Machine Learning, §6.4.2
      url: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf
---

## Example

Assume AC and take $T=\{a,b\}$ with distinct points, mean $m=0$, and
equality kernel $k(s,t)=1$ if $s=t$ and $0$ otherwise. Use the canonical
cylinder-space Gaussian-process prior with this mean and kernel. For
$X=(a,b)$, set $K_{XX}=(k(x_i,x_j))=I_2$; observe with covariance
$R=I_2$, so $A_X=K_{XX}+R=2I_2$, and data $y=(2,-1)^T$. Predict at
$X_*=X$. The latent posterior mean is $(1,-\tfrac12)^T$ and its covariance is
$\tfrac12 I_2$. If an independent future observation-noise vector with
covariance $R_*=I_2$ is added, the noisy predictive mean is unchanged and its
covariance is $\tfrac32 I_2$.

## Example references

[Rasmussen and Williams, GPML, Chapter 2 §2.2, printed pp. 13–18](https://gaussianprocess.org/gpml/chapters/RW2.pdf)

[Bishop, PRML, §6.4.2, printed pp. 306–309](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)

## Facts & Assumptions

**Given:** AC, the two-point set, equality kernel, zero mean, ordered training and test lists, $R=R_*=I_2$, and observation $y$ as stated.

[A1] AC is the axiom used by the canonical GP construction and finite conditioning interface. [[def-axiom-of-choice]]

[F0] Under AC, a symmetric positive-semidefinite kernel and mean define a canonical Gaussian process with the specified finite Gaussian laws. [[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]

[F1] The observation model permits finite ordered lists and defines $K_{AB}$, $m_X$, $Y=f_X+\varepsilon$, and independent prediction noise. [[def-gaussian-process-regression-observation-model]]

[F2] For $A_X\succ0$, the posterior latent mean and covariance are $m_*+K_{*X}A_X^{-1}(y-m_X)$ and $K_{**}-K_{*X}A_X^{-1}K_{X*}$; independent test noise adds its covariance. [[cor-gp-regression-posterior-predictive-law]]

[F3] For PSD Gram and noise matrices, the observed covariance is invertible exactly when it is positive definite. [[lem-gp-regression-observed-covariance-invertibility]]

## Verification

**Given:** The finite model in the Example.

1.1 For any finite list $t_1,\ldots,t_r\in T$ and scalars $c_i$, the equality-kernel Gram form is $\sum_{t\in T}(\sum_{i:t_i=t}c_i)^2\ge0$. Thus the kernel is positive semidefinite, and [A1, F0] supplies the stated canonical prior. At $X=(a,b)$, $K=I_2$, so $A_X=K+R=2I_2\succ0$ and the inverse required in [F2] exists by [F3]. [A1, F0, F1, F2, F3, given, construct, algebra]

2.1 Since $m_X=0$ and $K_{*X}=K_{XX}=I_2$, [F2] gives posterior mean $(2I_2)^{-1}y=\tfrac12(2,-1)^T=(1,-\tfrac12)^T$. It gives posterior covariance $I_2-I_2(2I_2)^{-1}I_2=\tfrac12I_2$. [A1, F2, step 1.1, algebra]

3.1 Independent test noise with $R_*=I_2$ leaves the conditional mean unchanged and adds $I_2$ to the covariance, yielding $\tfrac12I_2+I_2=\tfrac32I_2$. [F1, F2, step 2.1, algebra] ∎

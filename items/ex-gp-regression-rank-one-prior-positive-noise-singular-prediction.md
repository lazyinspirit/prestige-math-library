---
id: ex-gp-regression-rank-one-prior-positive-noise-singular-prediction
kind: example
title: Positive observation noise with a singular rank-one prediction
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
  task: Verify a nonconstant rank-one prior, positive observed covariance, and singular posterior covariance.
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2 §2.2
      url: https://gaussianprocess.org/gpml/chapters/RW2.pdf
    - title: Christopher M. Bishop, Pattern Recognition and Machine Learning, §6.4.2
      url: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf
---

## Example

Assume AC. Let $T=\{a,b\}$ with distinct points, $\phi(a)=1$,
$\phi(b)=2$, $m=0$, and $k(s,t)=\phi(s)\phi(t)$. Use the canonical
cylinder-space Gaussian-process prior with this mean and kernel. For
$X=X_*=(a,b)$, set $v=(1,2)^T$, $K_{XX}=K_{**}=vv^T$, and $R=I_2$, so
$A_X=K_{XX}+R=I_2+vv^T\succ0$. With data $y=(1,0)^T$, the latent posterior
mean is $v/6$ and the latent posterior covariance is $K_{XX}/6$, which is
singular.

## Example references

[Rasmussen and Williams, GPML, Chapter 2 §2.2, printed pp. 13–18](https://gaussianprocess.org/gpml/chapters/RW2.pdf)

[Bishop, PRML, §6.4.2, printed pp. 306–309](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)

## Facts & Assumptions

**Given:** AC, the two-point set, feature values $\phi(a)=1,\phi(b)=2$, kernel $k(s,t)=\phi(s)\phi(t)$, zero mean, ordered lists $X=X_*=(a,b)$, noise covariance $R=I_2$, and $y=(1,0)^T$.

[A1] AC is the axiom used by the canonical GP construction and finite conditioning interface. [[def-axiom-of-choice]]

[F0] Under AC, a symmetric positive-semidefinite kernel and mean define a canonical Gaussian process with the specified finite Gaussian laws. [[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]

[F1] The finite observation model defines Gram matrices, the observation vector, and noise covariance. [[def-gaussian-process-regression-observation-model]]

[F2] For positive-definite observed covariance, the posterior latent mean and covariance are $m_*+K_{*X}A_X^{-1}(y-m_X)$ and $K_{**}-K_{*X}A_X^{-1}K_{X*}$. [[cor-gp-regression-posterior-predictive-law]]

[F3] The observed matrix of PSD Gram and noise matrices is invertible exactly on the positive-definite branch. [[lem-gp-regression-observed-covariance-invertibility]]

## Verification

**Given:** The finite model in the Example.

1.1 For any finite list $t_1,\ldots,t_r\in T$ and real $c_i$, the Gram form for $k(s,t)=\phi(s)\phi(t)$ is $(\sum_i c_i\phi(t_i))^2\ge0$. Thus [A1, F0] supplies the canonical prior. At $X=(a,b)$ this gives $K=vv^T=\begin{pmatrix}1&2\\2&4\end{pmatrix}$. Therefore $A_X=I_2+vv^T$ satisfies $c^TA_Xc=\lVert c\rVert^2+(v^Tc)^2>0$ for every nonzero $c$; [F3] confirms the inverse branch applies. [A1, F0, F1, F3, given, construct, algebra]

2.1 The identity $(I_2+vv^T)v=(1+v^Tv)v=6v$ gives $A_X^{-1}v=v/6$, and hence $A_X^{-1}y=A_X^{-1}(1,0)^T=(5/6,-1/3)^T$. Since $K=v v^T$, $K A_X^{-1}y=v(v^TA_X^{-1}y)=v/6$. Formula [F2] therefore gives the stated posterior mean. [F2, step 1.1, algebra]

3.1 Also $K A_X^{-1}K=v(v^TA_X^{-1}v)v^T=(5/6)vv^T$, because $v^TA_X^{-1}v=5/6$. Thus the posterior covariance is $K-(5/6)K=K/6$. The nonzero vector $(2,-1)^T$ is annihilated by $K/6$, while $K/6\ne0$, so this covariance is singular. [F2, step 1.1, algebra] ∎

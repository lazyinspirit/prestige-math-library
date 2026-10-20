---
id: thm-gp-regression-kernel-ridge-posterior-mean-equivalence
kind: theorem
title: Kernel ridge regression equals the Gaussian-process posterior mean
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gaussian-process
  - def-gaussian-process-regression-observation-model
  - cor-gp-regression-posterior-predictive-law
  - lem-finite-span-orthogonal-projection-in-inner-product-space
  - lem-gp-regression-observed-covariance-invertibility
  - thm-least-squares-solutions-and-normal-equation
  - thm-non-negative-square-root-exists-and-is-unique
justified_by: []
proof_strategy: direct
axiom_use: AC is used only for the Gaussian prior and posterior-law interface; the finite-dimensional optimization proof is choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 6 §§6.1–6.4
      url: https://gaussianprocess.org/gpml/chapters/RW6.pdf
    - title: Trevor Hastie, Robert Tibshirani, and Jerome Friedman, The Elements of Statistical Learning, 2nd ed., §5.8
      url: https://esl.hohoweiya.xyz/book/The%20Elements%20of%20Statistical%20Learning.pdf
    - title: Sergei Treil, Linear Algebra Done Wrong, Chapter 5 §§5.3.2, 5.4.1
      url: https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html
---

## Statement

Assume AC. Let $T$ be a set, let $k:T\times T\to\mathbb R$ be a symmetric
kernel whose every finite Gram quadratic form is nonnegative, and let
$m:T\to\mathbb R$. Let $H$ be a real
Hilbert space of functions on $T$ such that, for every $x\in T$, the section
$k_x:T\to\mathbb R$, $k_x(t)=k(t,x)$, belongs to $H$ and satisfies
$h(x)=\langle h,k_x\rangle_H$ for every $h\in H$. Assume $m\in H$. For a
nonempty finite ordered list $X=(x_i)_{i=1}^n$ (repetitions allowed), let
$K=K_{XX}=(k(x_i,x_j))$, $m_X=(m(x_i))$, and take $y\in\mathbb R^n$ and
$\sigma>0$. On the affine space $m+H$, define
$$J(g)=\sum_{i=1}^n(y_i-g(x_i))^2+\sigma^2\lVert g-m\rVert_H^2.$$
Then $J$ has a unique minimizer
$$g_*=m+\sum_{i=1}^n\alpha_i k_{x_i},\qquad \alpha=(K+\sigma^2 I_n)^{-1}(y-m_X).$$
Its evaluation vector is
$$ (g_*(x_i))_{i=1}^n=m_X+K(K+\sigma^2I_n)^{-1}(y-m_X). $$
Under AC, the mean and kernel determine a canonical cylinder-space
Gaussian-process prior. If it is observed at $X$ with independent
$N_n(0,\sigma^2I_n)$ noise, this vector is the conditional mean of the latent
evaluation vector given the observation $Y=y$. The Hilbert-space existence
and reproducing-section properties are hypotheses here; the theorem makes no
general kernel-to-Hilbert-space existence claim.

## Statement references

[Rasmussen and Williams, GPML, Chapter 6 §§6.1–6.4, printed pp. 129–150](https://gaussianprocess.org/gpml/chapters/RW6.pdf)

[Hastie, Tibshirani, and Friedman, ESL, 2nd ed., §5.8, printed pp. 167–173](https://esl.hohoweiya.xyz/book/The%20Elements%20of%20Statistical%20Learning.pdf)

[Treil, Linear Algebra Done Wrong, Chapter 5 §§5.3.2, 5.4.1](https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html)

## Facts & Assumptions

**Given:** AC; the kernel, real Hilbert space, reproducing-section identities, mean function $m\in H$, finite list $X$, response $y$, and scalar $\sigma>0$ in the Statement; and the Gaussian-process observation model for the final comparison.

[A1] AC is the axiom used by the Gaussian-process and finite conditional-normal interfaces. [[def-axiom-of-choice]]

[F1] The observation model defines $K_{XX}$, $m_X$, and $Y=f_X+\varepsilon$; an independent Gaussian noise vector with covariance $R$ is added to the latent evaluations. [[def-gaussian-process-regression-observation-model]]

[F2] Every finite-dimensional subspace of a real inner-product space has an orthonormal basis, and projection onto it gives a unique orthogonal decomposition with the Pythagorean identity. [[lem-finite-span-orthogonal-projection-in-inner-product-space]]

[F3] A finite-dimensional positive-semidefinite operator has a positive-semidefinite square root whose square is the operator. [[thm-non-negative-square-root-exists-and-is-unique]]

[F4] For a linear map $C$ between finite-dimensional inner-product spaces, $\beta$ minimizes $\lVert C\beta-b\rVert$ exactly when $C^*(C\beta-b)=0$. [[thm-least-squares-solutions-and-normal-equation]]

[F5] Under AC, the finite Gaussian-process posterior at test list $X_*$ has mean $m_*+K_{*X}(K_{XX}+R)^{-1}(y-m_X)$ when the observed covariance is positive definite. [[cor-gp-regression-posterior-predictive-law]]

[F6] In the finite observation model, $K_{XX}+R$ is positive definite exactly when its ordinary inverse formulas are defined. [[lem-gp-regression-observed-covariance-invertibility]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Define the linear evaluation map $S:H\to\mathbb R^n$ by $(Sh)_i=h(x_i)$. It is bounded because $\lVert Sh\rVert_2^2=\sum_i|\langle h,k_{x_i}\rangle_H|^2\le\lVert h\rVert_H^2\sum_i\lVert k_{x_i}\rVert_H^2$. The reproducing identities then give its adjoint $S^*\beta=\sum_i\beta_i k_{x_i}$, since $\langle Sh,\beta\rangle=\sum_i\beta_i\langle h,k_{x_i}\rangle_H=\langle h,S^*\beta\rangle_H$. Consequently $SS^*=K$ and $V=\operatorname{ran}(S^*)=\operatorname{span}\{k_{x_i}:1\le i\le n\}$. [F1, given, construct, algebra]

1.2 For every $c\in\mathbb R^n$, $c^T(K+\sigma^2I_n)c=c^TKc+\sigma^2\lVert c\rVert^2\ge\sigma^2\lVert c\rVert^2$, because $K$ is a Gram matrix of the positive-semidefinite kernel. Hence $A=K+\sigma^2I_n$ is positive definite and, by [F6], its ordinary inverse exists. Put $r=y-m_X$, $\alpha=A^{-1}r$, and $h_0=S^*\alpha$. [F1, F6, given, algebra]

2.1 Write $g=m+h$, so $J(m+h)=\lVert r-Sh\rVert^2+\sigma^2\lVert h\rVert_H^2$. By [F2], each $h$ decomposes uniquely as $p+q$ with $p\in V$ and $q\perp V$. Then $Sq=0$ by the reproducing identities, and $\lVert p+q\rVert_H^2=\lVert p\rVert_H^2+\lVert q\rVert_H^2$. Thus $J(m+p+q)=J(m+p)+\sigma^2\lVert q\rVert_H^2$, so minimization reduces to $V$. [F2, step 1.1, given, algebra]

2.2 Let $B=K^{1/2}$ be supplied by [F3], and define $C:\mathbb R^n\to\mathbb R^n\oplus\mathbb R^n$ by $C\beta=(K\beta,\sigma B\beta)$. For $h=S^*\beta$, its objective is $\lVert C\beta-(r,0)\rVert^2$, because $Sh=K\beta$ and $\lVert S^*\beta\rVert_H^2=\beta^TK\beta=\lVert B\beta\rVert^2$. The normal equation is $C^*C\beta=C^*(r,0)$, that is $(K^2+\sigma^2K)\beta=Kr$. Our $\alpha$ satisfies it because $(K^2+\sigma^2K)\alpha=K(K+\sigma^2I_n)\alpha=Kr$. Therefore [F4] makes $h_0$ a minimizer on $V$. [F3, F4, step 1.1, step 1.2, algebra]

2.3 For any $d\in H$, $Sh_0-r=K\alpha-r=-\sigma^2\alpha$ and $S^*(Sh_0-r)=-\sigma^2h_0$. Expanding both squared norms and using the adjoint identity gives $J(m+h_0+d)-J(m+h_0)=\lVert Sd\rVert^2+\sigma^2\lVert d\rVert_H^2$. This is nonnegative and is zero only for $d=0$, so the minimizer is unique on all of $H$, not just on $V$. [step 1.1, step 1.2, algebra]

3.1 The minimizing function is $g_*=m+h_0=m+\sum_i\alpha_i k_{x_i}$, and $S h_0=K\alpha$, giving the displayed evaluation vector. For Gaussian observations with $R=\sigma^2I_n$, [F5] at test list $X_*=X$ gives the same conditional-mean vector; $A=K+R\succ0$ by step 1.2, so its inverse hypothesis holds. [A1, F1, F5, step 1.2, step 2.2] ∎

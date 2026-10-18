---
id: ex-rank-deficient-identifiability-and-lm-step
kind: example
title: "Rank-deficient data do not identify both parameters, while LM has a unique damped step"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-gauss-newton-qr-svd-step-with-rank-safeguard
  - alg-safeguarded-levenberg-marquardt
  - def-euclidean-inner-product
  - lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.2, printed pp. 252–253 / PDF pp. 271–272: SVD, sensitivity, and rank-deficient least-squares minimizers."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Sections Newton and Gauss-Newton and Levenberg-Marquardt: full-rank restrictions and regularized steps."
---

## Example

Let $r(a,b)=(a+b-1,\;2(a+b-1))^T$. The data depend only on $a+b$, so they do
not identify $a$ and $b$ separately. At $(0,0)$ the Gauss-Newton Jacobian is
rank deficient and its linearized least-squares problem has many minimizers.
With $D=I$, damping $\lambda=1$ gives a unique trial step. For trust radius
$\Delta=1$, ratio thresholds $\eta_1=1/4,\eta_2=3/4$, lower damping
$\lambda_{\min}=1/2$, update factor $\gamma=2$, and one allowed trial, that
step is accepted with ratio $1$.

## Facts & Assumptions

**Given:** The residual model, starting point $(0,0)$, and LM parameters in the Example.

[F1] [[alg-gauss-newton-qr-svd-step-with-rank-safeguard]]: with a supplied exact reduced QR factorization, a zero triangular diagonal returns rank-deficient rather than an asserted unique Gauss-Newton step.

[F2] [[alg-safeguarded-levenberg-marquardt]]: with a supplied exact reduced QR factorization of the augmented matrix, a feasible LM trial with positive predicted reduction and $\rho\ge\eta_1$ is accepted; a high-ratio boundary step is the only accepted branch that decreases damping.

[F3] [[lem-levenberg-marquardt-step-is-scaled-trust-region-minimizer]]: with nonsingular $D$ and $\lambda>0$, the damped normal system has a unique step and its predicted reduction is positive when $J^Tr\ne0$.

[F4] [[def-euclidean-inner-product]]: $\|(u,v)\|_2=\sqrt{u^2+v^2}$ in two dimensions.

## Verification

1.1 At $(0,0)$, $r=(-1,-2)^T$, $J=\begin{bmatrix}1&1\\2&2\end{bmatrix}$, and $J^TJ=\begin{bmatrix}5&5\\5&5\end{bmatrix}$. The two columns of $J$ coincide, so its rank is $1<2$. Supply the exact reduced QR $Q=\frac1{\sqrt5}\begin{bmatrix}1&-2\\2&1\end{bmatrix}$ and $R=\begin{bmatrix}\sqrt5&\sqrt5\\0&0\end{bmatrix}$, which satisfies $Q^TQ=I$ and $QR=J$. The exact QR branch therefore returns rank-deficient. The objective is $\frac52(a+b-1)^2$, whose minimizers are the full line $a+b=1$; hence the parameters are not separately identifiable. The linearized problem at $(0,0)$ is minimized whenever $p_1+p_2=1$, so it has no unique Gauss-Newton step. [given, F1, algebra]

2.1 For $D=I$ and $\lambda=1$, the augmented matrix and residual are $A_1=[J;I]$ and $s_1=[r;0]$. Supply the exact reduced QR $Q=\begin{bmatrix}1/\sqrt6&1/\sqrt{66}\\2/\sqrt6&2/\sqrt{66}\\1/\sqrt6&-5/\sqrt{66}\\0&6/\sqrt{66}\end{bmatrix}$ and $R=\begin{bmatrix}\sqrt6&5/\sqrt6\\0&\sqrt{66}/6\end{bmatrix}$, which satisfies $Q^TQ=I$ and $A_1=QR$. The damped system is $\begin{bmatrix}6&5\\5&6\end{bmatrix}p=(5,5)^T$, whose unique solution is $p=(5/11,5/11)^T$. The linear model residual is $r+Jp=(-1/11,-2/11)^T$, so $m_0(0)=5/2$, $m_0(p)=5/242$, and $\operatorname{pred}=300/121>0$. Since the residual is affine, the true residual at $(0,0)+p$ equals that linear model residual; therefore $\operatorname{ared}=\operatorname{pred}$ and $\rho=1$. Also $\|p\|_2=5\sqrt2/11<1=\Delta$, so the trial is feasible and is not a boundary step. By [F2]–[F3] it is accepted and $\lambda$ stays $1$. [given, F2, F3, F4, algebra] ∎

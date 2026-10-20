---
id: rem-gp-regression-computation-and-scope-caveats
kind: remark
title: Computational costs and limits of finite Gaussian-process regression
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-gaussian-process
  - def-gaussian-process-regression-observation-model
  - def-multivariate-normal-law
  - lem-characteristic-function-of-a-multivariate-normal-law
  - thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost
  - thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel
  - thm-gp-regression-log-marginal-likelihood
  - thm-continuity-from-above-for-measures
  - cor-gp-regression-posterior-predictive-law
justified_by: []
proof_strategy: direct witnesses and arithmetic counts
axiom_use: AC is inherited from the finite Gaussian-process, posterior, and log-density suppliers and is explicitly used for the arbitrary-index continuity witness; the scalar counterexamples and arithmetic calculations are choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 2 §§2.2–2.3
      url: https://gaussianprocess.org/gpml/chapters/RW2.pdf
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 3 §§3.3–3.4.1
      url: https://gaussianprocess.org/gpml/chapters/RW3.pdf
    - title: Carl Edward Rasmussen and Christopher K. I. Williams, Gaussian Processes for Machine Learning, Chapter 4 §4.1
      url: https://gaussianprocess.org/gpml/chapters/RW4.pdf
    - title: Christopher M. Bishop, Pattern Recognition and Machine Learning, §6.4.2
      url: https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §§2.5, 2.9
      url: https://fncbook.com/efficiency/
    - title: Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §2.9.3
      url: https://fncbook.com/structure/
---

## Remark

A real Gaussian process is a family whose finite evaluation vectors are
multivariate normal. Let $T$ be a set and let $f=(f_t)_{t\in T}$ be a real
Gaussian process with mean $m(t)=\mathbb E f_t$ and symmetric
positive-semidefinite covariance kernel
$k(s,t)=\mathbb E[(f_s-m(s))(f_t-m(t))]$; positive semidefinite means every
finite Gram quadratic form is nonnegative. For $n\ge1$ and a finite training
list $X=(x_i)_{i=1}^n$ in $T$, set $f_X=(f_{x_i})$, $K_{XX}=(k(x_i,x_j))$,
and let $\varepsilon$ be centered Gaussian observation noise independent of
$f$, with symmetric positive-semidefinite covariance $R$. Set
$Y=f_X+\varepsilon$ and $A_X=K_{XX}+R\succ0$. Write the dense Cholesky
factorization as
$A_X=LL^T$, where $L$ is lower triangular with positive diagonal. In the
scalar-operation model, where each addition, subtraction, multiplication,
division, or square root counts as one operation, factorization costs
$n^3/3+O(n^2)$ operations. For a test input $x_*\in T$, define
$k_{x_*X}=(k(x_*,x_i))_{i=1}^n$ and $k_{Xx_*}=k_{x_*X}^T$. After factorization,
the latent predictive variance
$k(x_*,x_*)-k_{x_*X}A_X^{-1}k_{Xx_*}$ requires $O(n^2)$ operations, where
$O(n^2)$ denotes an asymptotic operation count as $n$ grows. These are
arithmetic counts, not accuracy guarantees. For an invertible real $n\times n$
matrix $A$, define its spectral condition number by
$\kappa_2(A)=\lVert A\rVert_2\lVert A^{-1}\rVert_2$, where
$\lVert A\rVert_2=\sup_{\lVert x\rVert_2=1}\lVert Ax\rVert_2$ for
$x\in\mathbb R^n$. For $0<\epsilon<1$,
$A_\epsilon=\operatorname{diag}(1,\epsilon)$ has condition number
$1/\epsilon$, while $E=\operatorname{diag}(0,-\epsilon)$ has relative
spectral-norm size $\lVert E\rVert_2/\lVert A_\epsilon\rVert_2=\epsilon$
even though $A_\epsilon+E$ is singular.

The negative log marginal likelihood need not be convex in a covariance
hyperparameter. On the one-point set $T=\{t\}$, take the centered Gaussian
prior $f_t\sim N(0,\theta)$ with $\theta\ge0$, covariance kernel
$k_\theta(t,t)=\theta$, and independent observation noise
$\varepsilon\sim N(0,1)$. For observation $Y=f_t+\varepsilon$ at $y=0$, the
observed covariance is $A_\theta=1+\theta>0$ and the negative log marginal
likelihood is
$$L(\theta)=\tfrac12\log(1+\theta)+\tfrac12\log(2\pi).$$
For every $\theta>0$, its second derivative is
$L''(\theta)=-1/(2(1+\theta)^2)<0$, so $L$ is not convex on its parameter
domain.

The finite Gaussian-process regression posterior formula uses Gaussian
observation noise. Write
$\phi(z)=(2\pi)^{-1/2}e^{-z^2/2}$ for the standard normal density and
$\Phi(z)=\int_{-\infty}^z\phi(t)\,dt$ for its cumulative distribution
function. With one latent value $z\sim N(0,1)$ and one positive label, the
logistic likelihood $P(y=1\mid z)=\sigma(z)=(1+e^{-z})^{-1}$ or probit
likelihood $P(y=1\mid z)=\Phi(z)$ gives a non-Gaussian posterior: the
posterior log density has nonzero third derivative at $z=\log 3$ for logistic
and $z=0$ for probit. Both likelihoods lie in $(0,1)$, so multiplying by the
standard normal density gives a finite, positive normalizing integral. Finally,
a Gaussian process
specifies finite-dimensional laws but need not have continuous paths. A
continuous modification means a process on the same probability space that
agrees almost surely at each fixed input and has almost surely continuous
sample paths. Under AC, on $T=[0,1]$ the equality kernel $k(s,t)=1$ when $s=t$
and $0$ otherwise has no continuous modification.

## Remark references

[Rasmussen and Williams, GPML, Chapter 2 §§2.2–2.3, printed pp. 13–21](https://gaussianprocess.org/gpml/chapters/RW2.pdf)

[Rasmussen and Williams, GPML, Chapter 3 §§3.3–3.4.1, printed pp. 39–43](https://gaussianprocess.org/gpml/chapters/RW3.pdf)

[Rasmussen and Williams, GPML, Chapter 4 §4.1, printed pp. 79–80](https://gaussianprocess.org/gpml/chapters/RW4.pdf)

[Bishop, PRML, §6.4.2, printed pp. 306–310](https://www.microsoft.com/en-us/research/wp-content/uploads/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf)

[Driscoll and Braun, Fundamentals of Numerical Computation, §§2.5, 2.9](https://fncbook.com/efficiency/)

[Driscoll and Braun, Fundamentals of Numerical Computation, §2.9.3](https://fncbook.com/structure/)

## Facts & Assumptions

**Given:** The finite regression model, dense arithmetic-operation model, scalar covariance-parameter example, logistic and probit one-coordinate likelihoods, and arbitrary-index Gaussian-process construction described in the Remark.

[A1] The Axiom of Choice is used for arbitrary-index finite Gaussian laws and Kolmogorov extension. [[def-axiom-of-choice]]

[F1] For a positive-definite observed covariance, the Gaussian-process log marginal likelihood is $-\tfrac12(y-m_X)^TA_X^{-1}(y-m_X)-\tfrac12\log\det A_X-\tfrac n2\log(2\pi)$. [[thm-gp-regression-log-marginal-likelihood]]

[F2] A mean and symmetric positive-semidefinite kernel under AC define a Gaussian process with the stated finite Gaussian marginals, but the construction asserts no sample-path continuity. [[thm-gaussian-process-exists-from-mean-and-positive-semidefinite-covariance-kernel]]

[F3] Every finite evaluation vector of a Gaussian process is multivariate normal with the corresponding mean and covariance. [[def-gaussian-process]]

[F4] A multivariate-normal law with mean $a$ and covariance $\Sigma$ has characteristic function $u\mapsto\exp(iu^Ta-\tfrac12u^T\Sigma u)$, which uniquely determines the law. [[lem-characteristic-function-of-a-multivariate-normal-law]]

[F5] Dense Cholesky factorization costs $n^3/3+O(n^2)$ scalar operations, and the two triangular solves cost $2n^2+O(n)$. [[thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost]]

[F6] The finite Gaussian-process posterior formula has covariance $K_{**}-K_{*X}A_X^{-1}K_{X*}$ under independent Gaussian observation noise and permits that covariance to be singular. [[cor-gp-regression-posterior-predictive-law]]

[F7] For decreasing measurable sets under a finite measure, the measure of their intersection is the limit of their measures. [[thm-continuity-from-above-for-measures]]

## Proof

**Given:** The hypotheses and models in the Remark.

1.1 Cholesky factorization costs $n^3/3+O(n^2)$ by [F5]. For one test point, the posterior variance formula requires solving $A_Xu=k_{X*}$ and forming $k_{**}-k_{*X}u$. Factoring $A_X=L L^T$ reduces this to two triangular solves, each with $O(n^2)$ cost by [F5], followed by an $O(n)$ inner product. Therefore the variance calculation after factorization is $O(n^2)$. [F5, F6, given, algebra]

1.2 The spectral norm of $A_\epsilon=\operatorname{diag}(1,\epsilon)$ is $1$, its smallest singular value is $\epsilon$, and therefore its spectral condition number is $1/\epsilon$. The perturbation $E=\operatorname{diag}(0,-\epsilon)$ has norm $\epsilon$, so $\lVert E\rVert_2/\lVert A_\epsilon\rVert_2=\epsilon$, while $A_\epsilon+E=\operatorname{diag}(1,0)$ is singular. Thus operation counts alone do not control sensitivity to finite-precision perturbations near singularity. [given, algebra]

1.3 The scalar kernel $k_\theta(t,t)=\theta$ is positive semidefinite for $\theta\ge0$, and the observed covariance is $A_\theta=1+\theta>0$. Apply [F1] with $m=0$ and $y=0$ to get $L(\theta)=\tfrac12\log(1+\theta)+\tfrac12\log(2\pi)$. Differentiating twice gives $L''(\theta)=-1/(2(1+\theta)^2)<0$ for every $\theta>0$, so this negative log marginal likelihood is not convex on its parameter domain. [F1, given, algebra]

1.4 Write $\sigma(z)=(1+e^{-z})^{-1}$; then $0<\sigma(z)<1$ for all $z$, so $\int_{\mathbb R}\phi(z)\sigma(z)\,dz$ is finite and positive. The logistic posterior is therefore a positive density whose log, up to an additive constant, is $q(z)=-z^2/2-\log(1+e^{-z})$. Differentiation gives $q'''(z)=-\sigma(z)(1-\sigma(z))(1-2\sigma(z))$. At $z=\log 3$ this equals $3/32\ne0$. A positive density on all of $\mathbb R$ cannot be a degenerate Gaussian; every nondegenerate univariate Gaussian log density is quadratic and has third derivative zero, so this posterior is not Gaussian. [given, algebra]

1.5 Since $0<\Phi(z)<1$ for all $z$, the probit posterior normalizer $\int_{\mathbb R}\phi(z)\Phi(z)\,dz$ is finite and positive. Its positive log density, up to an additive constant, is $q(z)=-z^2/2+\log\Phi(z)$. Put $h=\phi/\Phi$ and $c=h(0)=\sqrt{2/\pi}$. Since $(\log\Phi)'=h$ and $h'=-zh-h^2$, differentiation yields $(\log\Phi)'''(0)=h''(0)=-c+2c^3=c(4/\pi-1)\ne0$; the last inequality uses $\pi<4$. A positive density on all of $\mathbb R$ cannot be a degenerate Gaussian; every nondegenerate univariate Gaussian log density is quadratic and has third derivative zero, so this posterior is not Gaussian. [given, algebra]

1.6 Let $D=\{t_i:1\le i\le r\}$ for any finite list $t_1,\ldots,t_r\in[0,1]$. The equality kernel has Gram form $\sum_{t\in D}(\sum_{i:t_i=t}a_i)^2\ge0$. Therefore it is positive semidefinite, and by [A1, F2] it defines a cylinder-space Gaussian process with standard normal coordinates and covariance $1_{s=t}$. [A1, F2, given, construct, algebra]

2.1 For any finite list of distinct inputs in $[0,1]$, [F3] gives a centered Gaussian vector with covariance identity. By [F4] its characteristic function is $\exp(-\tfrac12\sum_i u_i^2)$, which factors into the univariate standard-normal characteristic functions; uniqueness therefore gives independent standard-normal coordinates. [F3, F4, step 1.6, algebra]

3.1 Let $q_j=1/(j+2)$. If a continuous modification $G$ existed, the equalities $G_{q_j}=f_{q_j}$ for all $j$ and $G_0=f_0$ would hold simultaneously almost surely, since there are countably many coordinates. Let $E_0=\{|f_0|<1\}$, which has positive probability, and $E_j=\{|f_{q_j}|>2\}$, each of probability $p>0$ by [F2]. The finite-coordinate independence from step 2.1 gives $\Pr(E_0\cap\bigcap_{j=N}^M E_j^c)=\Pr(E_0)(1-p)^{M-N+1}$. By [F7], letting $M\to\infty$ gives $\Pr(E_0\cap\bigcap_{j=N}^\infty E_j^c)=0$ for each $N$; the countable union over $N$ then shows $E_0$ and infinitely many $E_j$ occur together with probability $\Pr(E_0)>0$. On that event $|G_0|<1$ while $|G_{q_j}|>2$ infinitely often, contradicting continuity at $0$. No continuous modification exists. [F2, F7, step 2.1, given, algebra]

4.1 The scope distinction in [F6] concerns a Gaussian observation likelihood; the explicit logistic and probit posterior calculations in steps 1.4 and 1.5 have nonzero third derivatives and are not Gaussian. Thus the exact finite Gaussian regression formula does not give an exact Gaussian posterior for those classification models. [F6, step 1.4, step 1.5] ∎

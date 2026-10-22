
## Definition

Let $X$ be a finite nonempty set, let $k\ge1$, let $w:X\to(0,\infty)$ be a positive reference weight, and let $T:X\to\mathbb R^k$. Use the Euclidean inner product $\theta\cdot T(x):=\sum_{j=1}^k\theta_jT_j(x)$. For $\theta\in\mathbb R^k$, define the partition sum and log-partition function by
$$Z(\theta):=\sum_{x\in X}w(x)e^{\theta\cdot T(x)},\qquad A(\theta):=\log Z(\theta),$$
and define the finite exponential Gibbs family by
$$\pi_\theta(x):=w(x)e^{\theta\cdot T(x)-A(\theta)}\quad(x\in X).$$
All objects here are mathematical; $\theta\cdot T(x)$ is a real number. The representation is called minimal when there is no nonzero $a\in\mathbb R^k$ for which $a\cdot T(x)$ is constant over all $x\in X$.

For a finite set $S\subseteq\mathbb R^k$, its convex hull is the set of sums $\sum_{s\in S}\lambda_s s$ with $\lambda_s\ge0$ and $\sum_{s\in S}\lambda_s=1$. Its affine hull is the set of sums of the same form with real coefficients $\lambda_s$ whose sum is $1$. The relative interior of a convex set is its interior in its affine hull with the Euclidean subspace topology. These definitions will be used for the sufficient-statistic support $T(X)$.

## Definition references

[[def-real-exponential-function-and-e]]

[[def-natural-logarithm]]

[[def-euclidean-inner-product]]

## Facts & Assumptions

**Given:** A finite nonempty $X$, positive weights $w(x)$, and a map $T:X\to\mathbb R^k$.

[F1] [[thm-csm-exponential-normalization-covariance]]: on a sigma-finite measure space, if a positive exponential weight has one integrable envelope on each compact parameter set for its zeroth, first, and second moments, then its partition function is finite, strictly positive, and $C^2$, its normalized density is a probability density, and the gradient and Hessian of the log partition function are the mean and covariance of the statistic.

[F2] Counting measure on finite $X$ is sigma-finite, and a function on $X$ is integrable exactly when its finite sum is finite.

[F3] [[def-euclidean-inner-product]]: $\theta\cdot T(x)$ is the ordinary Euclidean inner product, a finite sum of coordinate products.

[F4] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains a finite maximum and minimum.

[F5] [[def-real-exponential-function-and-e]]: $\exp$ is the real exponential power-series function defined for every real input.

[F6] [[def-natural-logarithm]]: $\log$ is the inverse of $\exp$ on $(0,\infty)$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm is a norm and satisfies $|a\cdot b|\le\|a\|_2\|b\|_2$.

[F8] [[cor-exponential-reciprocal-and-positivity]]: $\exp(t)>0$ and $\exp(-t)=1/\exp(t)$ for every real $t$.

[F9] [[thm-exponential-is-strictly-increasing]]: $\exp$ is strictly increasing on $\mathbb R$.

## Proof

**Given:** The finite family and the notation in the Definition.

1.1 For every nonempty compact $C\subseteq\mathbb R^k$ and every $x\in X$, [F3, F7] give $|\eta\cdot T(x)-\eta'\cdot T(x)|\le\|\eta-\eta'\|_2\|T(x)\|_2$; hence $\eta\mapsto\eta\cdot T(x)$ is continuous. It attains a finite maximum $M_C(x)$ on $C$ by [F4]. Define
$$G_C(x):=w(x)\exp(M_C(x))\left(1+\sum_{j=1}^{k}|T_j(x)|^2\right).$$
The exponential is finite and positive at this real input by [F5, F8], and the sum is finite, so $G_C$ is finite and nonnegative at every $x$. It is integrable under counting measure by [F2]. Since $\eta\cdot T(x)\le M_C(x)$ for every $\eta\in C$, monotonicity of $\exp$ [F9] shows that $G_C$ dominates
$w(x)e^{\theta\cdot T(x)}(1+\sum_j|T_j(x)|^2)$ for every $\theta\in C$. Thus the counting-measure model satisfies the envelope hypotheses of [F1]. Applying [F1] gives $0<Z(\theta)<\infty$, $A\in C^2(\mathbb R^k)$, and the normalized probability mass function $\pi_\theta$. [given, F1, F2, F3, F4, F5, F7, F8, F9]

2.1 Since every summand in $Z(\theta)$ is positive and finite [F5, F8], each $\pi_\theta(x)>0$. Also $\exp(A(\theta))=Z(\theta)$ by [F6], so $e^{-A(\theta)}=1/Z(\theta)$ by [F8]. Summing the defining formula over finite $X$ therefore gives $\sum_{x\in X}\pi_\theta(x)=e^{-A(\theta)}Z(\theta)=1$. Hence the Definition gives a probability vector with full support for every finite $\theta$. [F5, F6, F8, step 1.1, algebra] ∎

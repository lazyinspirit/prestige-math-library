---
id: thm-sgd-stability-nonconvex-loss
kind: theorem
title: Expected generalization of nonconvex stochastic gradient training
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-uniform-stability
  - thm-uniform-stability-implies-expected-generalization
  - def-total-derivative-in-euclidean-space
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-gradient-represents-directional-derivatives-and-steepest-ascent
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-identically-distributed-and-iid-random-variables
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-is-strictly-increasing
  - thm-exponential-addition-formula
  - def-real-exponential-function-and-e
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - def-real-power
  - thm-real-power-continuity-and-derivatives
  - thm-ftc-second-part
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Moritz Hardt, Benjamin Recht, and Yoram Singer, Train faster, generalize better: Stability of stochastic gradient descent, arXiv-version Theorem 3.12 and complete proof (conference Theorem 3.8)"
      url: "https://arxiv.org/pdf/1509.01240"
      locator: "§3.4, Theorem 3.12, Lemma 3.11, and complete proof; the ICML proceedings version numbers the theorem 3.8"
    - title: "Nikolai Matni, ESE680 Lecture 16: Algorithmic Stability and Stochastic Gradient Descent, §4"
      url: "https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf"
      locator: "§4, PDF pp. 4–6; nonconvex details are explicitly referred to Hardt et al."
---

## Statement

Let $n\ge2$, $T,d\ge1$, and let $\beta,c>0$ and $L\ge0$. Let $(\mathsf X,\Sigma_X)$, $(\mathsf Y,\Sigma_Y)$, and $(\mathsf A,\Sigma_A)$ be measurable spaces, let $P$ be a probability measure on $\mathsf X\times\mathsf Y$, let $\ell:\mathsf A\times\mathsf Y\to[0,+\infty)$ be a measurable loss, and let $f_w:\mathsf X\to\mathsf A$ be a measurable predictor for every $w\in\mathbb R^d$. For $z=(x,y)$ set $g(w,z)=\ell(f_w(x),y)$. Assume $(w,z)\mapsto g(w,z)$ and $(w,z)\mapsto\nabla_wg(w,z)$ are jointly measurable. For every $z$, assume $g(\cdot,z)$ is totally differentiable, takes values in $[0,1]$, is $L$-Lipschitz in values, and has a $\beta$-Lipschitz Euclidean gradient; these mean, respectively,

$$|g(w,z)-g(v,z)|\le L\|w-v\|_2,\qquad \|\nabla_wg(w,z)-\nabla_wg(v,z)\|_2\le\beta\|w-v\|_2$$

for all $v,w\in\mathbb R^d$. No convexity is assumed. Let $S=(Z_1,\ldots,Z_n)$ be IID with law $P$, and abbreviate $R_P(f_w)=\int g(w,z)\,P(dz)$ and $\widehat R_S(f_w)=n^{-1}\sum_{i=1}^ng(w,Z_i)$. Let $I_1,\ldots,I_T$ be random indices in $\{1,\ldots,n\}$, independent of $S$ and satisfying $\mathbb P(I_t=i)=1/n$ for every $1\le t\le T$ and $1\le i\le n$; dependence between indices at different times is allowed. From a fixed $w_0\in\mathbb R^d$, define

$$w_t=w_{t-1}-\alpha_t\nabla_wg(w_{t-1},Z_{I_t}),\qquad 1\le t\le T,$$

where $0\le\alpha_T\le\cdots\le\alpha_1$ and $\alpha_t\le c/t$. Assume the resulting random variables $R_P(f_{w_T})$ and $\widehat R_S(f_{w_T})$ are measurable; they are integrable because $0\le g\le1$. Then the randomized procedure has uniform replacement stability and absolute expected population-minus-empirical risk gap at most

$$\left(1+\frac1{\beta c}\right)\frac{(2cL^2)^{1/(\beta c+1)}}{n-1}\,T^{\beta c/(\beta c+1)}.$$

If $L=0$, the right side is interpreted as $0$. The conclusion concerns only this expected gap for the stated random sample-selection procedure; it does not assert generalization for every stochastic-gradient oracle.

## Statement references

Hardt, Recht, and Singer, arXiv-version Theorem 3.12 and complete proof (conference Theorem 3.8): [full arXiv paper](https://arxiv.org/pdf/1509.01240).

Matni, Lecture 16, §4: [full lecture notes](https://nikolaimatni.github.io/courses/ese680-fall2019/scribe-notes/lecture16.pdf).

## Facts & Assumptions

**Given:** The supervised IID sample, independent uniform-marginal indices, fixed initialization, loss range/Lipschitz/smoothness assumptions, nonincreasing steps, and integrable risk maps in the Statement.

[F1] [[def-total-derivative-in-euclidean-space]] and [[def-jacobian-matrix-and-gradient]]: total differentiability means a linear first-order approximation with normwise $o(\|h\|_2)$ remainder, and the scalar gradient is the vector of its partial derivatives.

[F2] [[def-euclidean-inner-product]]: $\langle u,v\rangle$ is the Euclidean inner product and $\|u\|_2=\sqrt{\langle u,u\rangle}$.

[F3] [[thm-gradient-represents-directional-derivatives-and-steepest-ascent]]: for a totally differentiable scalar field, $D_vg(w,z)=\langle\nabla_wg(w,z),v\rangle$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality and every normalized nonzero vector has norm $1$.

[F5] [[def-uniform-stability]]: uniform replacement stability bounds the absolute difference of expected test losses for every fixed adjacent sample pair and test observation.

[F6] [[thm-uniform-stability-implies-expected-generalization]]: such a stability bound implies the same absolute expected population-minus-empirical risk gap under its IID, measurability, and integrability conditions.

[F7] [[lem-exponential-dominates-one-plus-x]], [[thm-exponential-is-strictly-increasing]], and [[thm-exponential-addition-formula]]: $1+x\le\exp(x)$, the exponential is increasing, and exponentials multiply by addition of exponents.

[F8] [[thm-logarithm-derivative-and-integral]] and [[thm-natural-logarithm-laws]]: $\log b-\log a=\int_a^b x^{-1}\,dx$ for $0<a\le b$, and $\log(b/a)=\log b-\log a$.

[F9] [[def-real-power]]: for $a>0$, $a^q=\exp(q\log a)$; [[thm-real-power-continuity-and-derivatives]] gives $(x^q)'=q x^{q-1}$ on $(0,\infty)$.

[F10] [[thm-ftc-second-part]]: for $a<b$, if $G$ is differentiable on $[a,b]$ and $G'$ is integrable there, then $\int_a^b G'=G(b)-G(a)$.

[F11] [[thm-additivity-over-subintervals]] and [[thm-monotonicity-of-the-integral]]: finite adjacent interval integrals add, and pointwise ordered integrands have ordered integrals.

[F12] [[def-identically-distributed-and-iid-random-variables]]: the observations are mutually independent and have the common law $P$.

[F13] [[def-supervised-learning-problem]] and [[def-population-and-empirical-risk]]: the loss, population risk, and empirical risk use the stated measurable observation law and loss.

[F14] [[thm-continuous-implies-integrable]]: every continuous real function on a compact interval $[a,b]$ with $a<b$ is Riemann integrable there.

[A1] The joint loss and gradient maps and the displayed population-risk and empirical-risk random variables are measurable. The loss range $[0,1]$ makes all these risks integrable.

[A2] Each sample index is uniform and the whole index vector is independent of the sample; no cross-time independence is assumed.

## Proof

1.1 For any $w,z$ with $\nabla_wg(w,z)\ne0$, take $v=\nabla_wg(w,z)/\|\nabla_wg(w,z)\|_2$, which is a unit vector by [F2] and [F4]. The directional derivative of $t\mapsto g(w+tv,z)$ at zero is $\|\nabla_wg(w,z)\|_2$ by [F1] and [F3], while the value-Lipschitz condition bounds the absolute difference quotient by $L$. Thus $\|\nabla_wg(w,z)\|_2\le L$; the zero-gradient case is immediate. [F1, F2, F3, F4, given, algebra]

1.2 Put $q=\beta c>0$. By [F7], $\alpha_k\le c/k$, and finite multiplication, $\prod_{k=s+1}^T(1+\beta\alpha_k)\le\exp\!\left(q\sum_{k=s+1}^T\frac1k\right).$ If $s=T$, the product is empty and equals $(T/s)^q=1$. If $s<T$, then for each $k>s$ and $x\in[k-1,k]$, $1/x\ge1/k$, so [F11] gives $1/k\le\int_{k-1}^k dx/x$. Additivity over these nondegenerate intervals and [F8] yield $\sum_{k=s+1}^T1/k\le\int_s^T dx/x=\log(T/s)$. Therefore the product is at most $(T/s)^q$ by [F8] and [F9]. [F7, F8, F9, F11, given, algebra]

2.1 Fix neighboring samples $S,S'$ that differ at coordinate $j$ and couple their runs using the same index vector. Let $\delta_t=\|w_t(S)-w_t(S')\|_2$, with $\delta_0=0$. If $I_t\ne j$, the same example is used in both updates, so gradient smoothness gives $\delta_t\le(1+\beta\alpha_t)\delta_{t-1}$. If $I_t=j$, add and subtract $\nabla_wg(w_{t-1}(S'),Z_j)$; smoothness for the common example, the triangle inequality from [F4], and step 1.1 give $\delta_t\le(1+\beta\alpha_t)\delta_{t-1}+2\alpha_tL$. Thus, for every update, $\delta_t\le(1+\beta\alpha_t)\delta_{t-1}+2\alpha_tL\mathbf1_{\{I_t=j\}}.$ [A2, F4, step 1.1, given, construct]

3.1 Iterating the finite recurrence in step 2.1 from $\delta_0=0$ yields $\delta_T\le2L\sum_{s=1}^T\alpha_s\mathbf1_{\{I_s=j\}}\prod_{k=s+1}^T(1+\beta\alpha_k).$ The loss difference at any fixed test point is at most $1$ by the range hypothesis and at most $L\delta_T$ by value-Lipschitzness. For nonnegative $a_s$, $\min(1,\sum_s a_s)\le\sum_s\min(1,a_s)$: if any $a_s\ge1$ the right side is at least $1$, and otherwise it equals $\sum_s a_s$. Applying this to the displayed kicks and using $\mathbb P(I_s=j)=1/n$ gives $\mathbb E_I|g(w_T(S),z)-g(w_T(S'),z)|\le\frac1n\sum_{s=1}^T\min\!\left(1,2L^2\alpha_s\prod_{k=s+1}^T(1+\beta\alpha_k)\right).$ [A2, step 2.1, given, algebra]

4.1 If $L=0$, step 1.1 gives zero gradients, so the output is independent of the sample and stability is zero; set $r=0$. Suppose $L>0$ and put $r=(2cL^2)^{1/(q+1)}T^{q/(q+1)}>0.$ By step 1.2 and $\alpha_s\le c/s$, the $s$th summand in step 3.1 is at most $h(s)$, where $h(x)=\min\{1,(r/x)^{q+1}\}$ for $x\ge1$. This function is continuous by [F9]. If $r\ge1$, it equals $1$ up to $r$ and then decreases; if $r<1$, it decreases throughout, since $(r/x)^{q+1}$ has negative derivative. Thus it is nonincreasing. If $T=1$, the sum is $h(1)$. If $T\ge2$, [F14] makes $h$ integrable on $[1,T]$; for each integer $s\ge2$, [F11] gives $h(s)\le\int_{s-1}^{s}h(x)\,dx$. Additivity over these adjacent intervals then yields $\sum_{s=1}^T h(s)\le h(1)+\int_1^T h(x)\,dx$. [F9, F11, F14, step 1.1, step 1.2, step 3.1, given, algebra]

5.1 If $L=0$, step 4.1 gives stability zero. Suppose $L>0$. When $T=1$ and $r\ge1$, $h(1)=1\le(1+1/q)r$; when $T=1$ and $0<r<1$, $h(1)=r^{q+1}\le(1+1/q)r$. Now let $T\ge2$. The displayed integrands are continuous on their compact intervals and hence integrable by [F14]. If $r\ge1$, then $h(1)=1$. For $T\le r$, $h=1$ on $[1,T]$ and $\int_1^T h(x)\,dx=T-1\le r-1$. For $T>r=1$, $h(x)=x^{-(q+1)}$ on $[1,T]$, so [F9] and [F10] give $\int_1^T h(x)\,dx=(1/q)(1-T^{-q})\le1/q$. For $T>r>1$, split at $r$ using [F11] and integrate $1$ on $[1,r]$ and $r^{q+1}x^{-(q+1)}$ on $[r,T]$ to get $\int_1^T h(x)\,dx=(r-1)+(r/q)(1-(r/T)^q)\le r-1+r/q$. In each case $h(1)+\int_1^T h\le(1+1/q)r$. If $0<r<1$, then $h(1)=r^{q+1}$ and [F9]–[F10] give $\int_1^T h(x)\,dx=\frac{r^{q+1}}q(1-T^{-q})\le\frac{r^{q+1}}q$, so $h(1)+\int_1^T h\le(1+1/q)r^{q+1}\le(1+1/q)r$. In every case, step 4.1 now bounds the sum in step 3.1 by $(1+1/q)r$. Therefore the right side of step 3.1 is at most $(1+1/q)r/n$. [F9, F10, F11, F14, step 3.1, step 4.1, algebra]

6.1 Steps 3.1, 4.1, and 5.1 show that every neighboring sample pair and test point has expected absolute loss change at most $(1+1/q)r/n$. This implies uniform replacement stability at that level by [F5]. Since $n\ge2$, $(1+1/q)r/n\le(1+1/q)r/(n-1)$. The sample is IID by [F12], the risk conventions are [F13], and the measurable, integrable risks meet [A1]. Apply [F6] and substitute $q=\beta c$ and the value of $r$ to obtain the stated expected-gap bound. [A1, F5, F6, F12, F13, step 3.1, step 4.1, step 5.1, given, algebra] ∎

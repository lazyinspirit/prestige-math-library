---
id: thm-gaussian-conditional-optimal-transport-map
kind: theorem
title: The Gaussian conditional affine map is quadratic-cost optimal
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-probability-path-and-velocity-field
  - lem-affine-conditional-path-velocity
  - lem-affine-dilation-is-quadratic-cost-optimal
  - def-axiom-of-choice
  - def-standard-normal-and-normal-laws
  - def-multivariate-normal-law
  - thm-nondegenerate-multivariate-normal-law-has-density
  - thm-algebra-of-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-derivative-of-exponential
  - def-euclidean-inner-product
justified_by: []
axiom_use: >-
  AC is required by the library's standard and multivariate Gaussian-law definitions and by the positive-definite Gaussian density supplier; that supplier uses the countable- and dependent-choice consequences of AC for Lebesgue measure and change of variables. The affine-flow and generic affine-cost arguments are choice-free.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §4 Theorem 3 and §4.1"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §2.6 Remark 2.31"
      url: "https://arxiv.org/html/1803.00567"
---

## Statement

Assume the Axiom of Choice. Let $d\ge1$, fix $x_1\in\mathbb R^d$, and choose $\sigma_{\min}>0$. Let $Z$ have the standard multivariate normal law $N_d(0,I_d)$. For $t\in[0,1]$, define
$$\mu_t(x_1):=t x_1,\qquad \sigma_t:=1-(1-\sigma_{\min})t,\qquad \psi_t(z\mid x_1):=\sigma_t z+\mu_t(x_1),$$
and let $P_t(\cdot\mid x_1)$ be the law of $\psi_t(Z\mid x_1)$. Then $P_t(\cdot\mid x_1)$ is the Gaussian probability path with mean $\mu_t(x_1)$ and covariance $\sigma_t^2I_d$, and its Lebesgue density is
$$\rho_t(x\mid x_1)=(2\pi\sigma_t^2)^{-d/2} \exp\!\left(-\frac{\|x-\mu_t(x_1)\|_2^2}{2\sigma_t^2}\right).$$
A conditional velocity field for this path is
$$u_t(x\mid x_1)=\frac{\sigma_{\min}-1}{\sigma_t}(x-tx_1)+x_1.$$
For each endpoint $x_1$, these densities and fields form a conditional path in the probability-path definition; hence they can be mixed against any Borel endpoint law. At $t=0$ the law is $N_d(0,I_d)$, and at $t=1$ it is the law of $x_1+\sigma_{\min}Z$, a Gaussian with mean $x_1$ and covariance $\sigma_{\min}^2I_d$. The affine endpoint map $T(z)=x_1+\sigma_{\min}z$ is optimal for squared Euclidean cost between these two laws: every coupling has cost at least
$$\|x_1\|_2^2+d(1-\sigma_{\min})^2,$$
and the law of $(Z,T(Z))$ attains this value.

## Statement references

[Lipman et al., §4 Theorem 3, §4.1, and Appendix A](https://arxiv.org/html/2210.02747)

[Peyré and Cuturi, §2.6 Remark 2.31](https://arxiv.org/html/1803.00567)

## Facts & Assumptions

**Given:** AC, $d\ge1$, $x_1\in\mathbb R^d$, $\sigma_{\min}>0$, and $Z\sim N_d(0,I_d)$.

[A1] AC supplies the axiom required by the standard and multivariate Gaussian-law definitions and the Gaussian density theorem. [[def-axiom-of-choice]]

[F1] [[def-standard-normal-and-normal-laws]] and [[def-multivariate-normal-law]]: scalar normal laws are affine images of the standard normal; $N_d(m,\Sigma)$ has scalar projections $N(u^Tm,u^T\Sigma u)$, mean $m$, and covariance $\Sigma$.

[F2] [[thm-nondegenerate-multivariate-normal-law-has-density]]: if $\Sigma$ is positive definite, $N_d(m,\Sigma)$ has Lebesgue density $(2\pi)^{-d/2}\det(\Sigma)^{-1/2}\exp(-\tfrac12(x-m)^T\Sigma^{-1}(x-m))$.

[F3] [[lem-affine-conditional-path-velocity]]: for a differentiable affine flow $\psi_t(z)=\sigma_tz+\mu_t$ with $\sigma_t>0$, its unique Eulerian field is $\dot\mu_t+(\dot\sigma_t/\sigma_t)(x-\mu_t)$.

[F4] [[lem-affine-dilation-is-quadratic-cost-optimal]]: for any centered probability law with second moment $m_2$, the map $z\mapsto a+sz$, $s>0$, is optimal for squared Euclidean cost to its affine image and has cost $\|a\|_2^2+(1-s)^2m_2$.

[F5] [[def-euclidean-inner-product]]: $\|x\|_2^2=\langle x,x\rangle$ on $\mathbb R^d$.

[F6] [[thm-algebra-of-derivatives]]: sums, products, and quotients by nonzero functions obey the ordinary derivative rules.

[F7] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions of differentiable Euclidean maps obey the chain rule.

[F8] [[thm-derivative-of-exponential]]: $(\exp)'=\exp$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Since $\sigma_t=(1-t)+t\sigma_{\min}>0$, every affine map $\psi_t$ is invertible. For each $v\in\mathbb R^d$, the projection of $\psi_t(Z\mid x_1)$ is $v^T\mu_t(x_1)+\sigma_t v^TZ$. By [F1], this is normal with mean $v^T\mu_t(x_1)$ and variance $\sigma_t^2\|v\|_2^2$. Thus $P_t(\cdot\mid x_1)$ is multivariate normal with mean $\mu_t(x_1)$ and covariance $\sigma_t^2I_d$, which is positive definite. [given, A1, F1, F5, algebra]

1.2 By [F2], the Lebesgue density of $P_t(\cdot\mid x_1)$ is $$\rho_t(x\mid x_1)=(2\pi\sigma_t^2)^{-d/2} \exp\!\left(-\frac{\|x-\mu_t(x_1)\|_2^2}{2\sigma_t^2}\right).$$ It integrates to one for every $x_1$ and is continuous in $(t,x,x_1)$ because $\sigma_t>0$. Therefore for any endpoint probability law $\pi$ it is product-measurable and satisfies the conditional-density requirement in [[def-probability-path-and-velocity-field]]. [given, F2]

2.1 We have $\dot\mu_t(x_1)=x_1$ and $\dot\sigma_t=\sigma_{\min}-1$. Applying [F3] gives $u_t(x\mid x_1)=x_1+\frac{\sigma_{\min}-1}{\sigma_t}(x-tx_1)$. The density formula in step 1.2 and this affine field are continuously differentiable in $(t,x)$ by the algebra, chain, and exponential derivative rules [F6, F7, F8]. Thus $\rho_t$ and each component of $\rho_tu_t$ meet the regularity clauses of the conditional probability-path definition. [given, step 1.2, F3, F6, F7, F8, algebra]

2.2 At $t=0$ the parameters are $\mu_0=0,\sigma_0=1$; at $t=1$ they are $\mu_1=x_1,\sigma_1=\sigma_{\min}$. Thus the endpoints are the standard Gaussian law and the law of $x_1+\sigma_{\min}Z$. [given, step 1.1, algebra]

3.1 Put $r=x-tx_1$ and write $\dot\sigma=\sigma_{\min}-1$. We have $\partial_t r=-x_1$ and $\partial_t(\sigma_t^{-d})=-d\dot\sigma\sigma_t^{-d-1}$ by the product and quotient rules [F6]. Applying the chain rule [F7] to $-\|r\|_2^2/(2\sigma_t^2)$ and then the exponential derivative [F8] gives $$\partial_t\rho_t=\rho_t\left(-d\frac{\dot\sigma}{\sigma_t} +\frac{\langle r,x_1\rangle}{\sigma_t^2} +\frac{\dot\sigma\|r\|_2^2}{\sigma_t^3}\right), \qquad \nabla_x\rho_t=-\rho_t\frac{r}{\sigma_t^2}.$$ The field in step 2.1 has $\operatorname{div}_x u_t=d\dot\sigma/\sigma_t$. [step 1.1, step 1.2, step 2.1, F5, F6, F7, F8, algebra]

4.1 The product rule gives $$\operatorname{div}_x(\rho_tu_t) =\langle\nabla_x\rho_t,u_t\rangle+\rho_t\operatorname{div}_xu_t =\rho_t\left(-\frac{\langle r,x_1\rangle}{\sigma_t^2} -\frac{\dot\sigma\|r\|_2^2}{\sigma_t^3} +d\frac{\dot\sigma}{\sigma_t}\right).$$ Adding this to $\partial_t\rho_t$ in step 3.1 cancels each term, so the conditional continuity equation holds. [step 3.1, F5, F6, F7, algebra]

5.1 The standard Gaussian vector has mean $0$ and covariance $I_d$ by [F1]. Summing its $d$ coordinate second moments gives $\int\|z\|_2^2\,N_d(0,I_d)(dz)=d$. The endpoint law is the affine image under $T(z)=x_1+\sigma_{\min}z$. Applying [F4] with $a=x_1$, $s=\sigma_{\min}$, and $m_2=d$ shows that every coupling has cost at least $\|x_1\|_2^2+d(1-\sigma_{\min})^2$, and that the law of $(Z,T(Z))$ attains equality. [given, A1, F1, F4, F5, step 2.2, algebra] ∎

## Source notes

The paper and book give Gaussian optimal-transport context; the complete proof of optimality used here is the local choice-free coupling argument in [lem-affine-dilation-is-quadratic-cost-optimal].

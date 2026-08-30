---
id: thm-hermitian-rayleigh-quotient-iteration-has-local-cubic-convergence
kind: theorem
title: "Near a simple Hermitian eigenvector, Rayleigh-quotient iteration converges cubically"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rayleigh-quotient-iteration,
       def-self-adjoint-and-normal-endomorphism,
       thm-complex-spectral-theorem-for-normal-endomorphisms,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms,
       prop-orthogonal-projection-formula-and-linearity,
       thm-orthogonal-projection-is-the-unique-nearest-point,
       def-operator-norm-on-a-finite-dimensional-inner-product-space,
       thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Stuart and Jochen Voss, Matrix Analysis and Algorithms"
      url: "https://www.seehuhn.de/publications/StuaVo08/numlinalg.pdf"
---

## Statement

Let $\mathbb F\in\{\mathbb R,\mathbb C\}$, let $A\in M_n(\mathbb F)$ be
self-adjoint (Hermitian in the complex case), and let $q\in\mathbb F^n$ be a
unit eigenvector for a simple eigenvalue
$\lambda$. Then there are constants $C>0$ and $\delta>0$ such that whenever

$$0<\operatorname{dist}(x_k,\mathbb Fq)<\delta$$

and the Rayleigh-quotient step of [[def-rayleigh-quotient-iteration]] is
defined, the next iterate satisfies

$$\operatorname{dist}(x_{k+1},\mathbb Fq)\le C\,\operatorname{dist}(x_k,\mathbb Fq)^3.$$

Thus the convergence to the eigendirection is local and cubic.

## Facts & Assumptions

**Given:** A Hermitian matrix $A$, a simple eigenpair $(\lambda,q)$, and a Rayleigh-quotient iterate $x_k$ with $0<\operatorname{dist}(x_k,\mathbb Fq)<\delta$ for $\delta$ small enough that the current Rayleigh-quotient step is defined.

[L1] Hermitian means $A^*=A$, so $A$ is normal ([[def-self-adjoint-and-normal-endomorphism]]).

[L2] A self-adjoint real operator and a normal complex operator have
orthonormal eigenbases
([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]],
[[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[L3] Rayleigh-quotient iteration uses the current Rayleigh quotient as the shift ([[def-rayleigh-quotient-iteration]]).

[L4] Orthogonal projection onto a one-dimensional subspace gives the nearest
point on that subspace; for a unit vector $q$ it is
$P_{\mathbb Fq}x=\langle x,q\rangle q$
([[prop-orthogonal-projection-formula-and-linearity]],
[[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[L5] The induced operator norm and Cauchy--Schwarz imply
$|\langle Az,z\rangle|\le \|A\|_2\|z\|_2^2$
([[def-operator-norm-on-a-finite-dimensional-inner-product-space]],
[[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], choose an orthonormal eigenbasis $$q,q_2,\dots,q_n$$ over the given field, with eigenvalues $\lambda,\lambda_2,\dots,\lambda_n$. Let $$\gamma:=\min_{i\ge2}|\lambda_i-\lambda|>0.$$ For $\theta_k:=\operatorname{dist}(x_k,\mathbb Fq)$, [L4] gives the orthogonal decomposition $$x_k=c_kq+z_k,\qquad z_k\perp q,\qquad \|z_k\|_2=\theta_k.$$ Since the iterate has unit length, $|c_k|^2+\theta_k^2=1$. [L1, L2, L4, given]

2.1 The Rayleigh shift is $$\mu_k:=\langle Ax_k,x_k\rangle.$$ Because $Aq=\lambda q$, $z_k\perp q$, and $A$ is Hermitian, the cross terms vanish: $$ \mu_k=|c_k|^2\lambda+\langle Az_k,z_k\rangle. $$ Using $|c_k|^2+\theta_k^2=1$, this becomes $$ \mu_k-\lambda=\langle Az_k,z_k\rangle-\lambda\theta_k^2. $$ Hence [L5] gives $$ |\mu_k-\lambda|\le(\|A\|_2+|\lambda|)\theta_k^2. $$ Set $C_0:=\|A\|_2+|\lambda|$, and shrink $\delta$ so that $C_0\delta^2\le \gamma/2$ and $\delta\le 1/2$. Then whenever $\theta_k<\delta$, the shift satisfies $|\mu_k-\lambda|\le\gamma/2$, so $|\lambda_i-\mu_k|\ge\gamma/2$ for every $i\ge2$. [L1, L5, step 1.1, algebra]

3.1 By [L3], the next unnormalised iterate is $$y_{k+1}:=(A-\mu_k I)^{-1}x_k.$$ Using the eigenbasis from step 1.1, $$y_{k+1}=c_k(\lambda-\mu_k)^{-1}q+w_k,\qquad w_k:=(A-\mu_k I)^{-1}z_k\in q^\perp.$$ Because $|\lambda_i-\mu_k|\ge\gamma/2$ on $q^\perp$, one has $$\|w_k\|_2\le \frac{2}{\gamma}\,\theta_k.$$ [L2, L3, step 1.1, step 2.1, algebra]

4.1 Since $\theta_k<\delta\le1/2$, the identity $|c_k|^2+\theta_k^2=1$ gives $|c_k|\ge\sqrt{3}/2$. After normalising $y_{k+1}$, the distance to the line $\mathbb Fq$ is bounded by the ratio of the orthogonal and parallel parts: $$\theta_{k+1}\le \frac{\|w_k\|_2}{|c_k|\,|\lambda-\mu_k|^{-1}}\le \frac{4}{\sqrt3\,\gamma}\,|\lambda-\mu_k|\,\theta_k.$$ Combining this with step 2.1 yields $$\theta_{k+1}\le \frac{4C_0}{\sqrt3\,\gamma}\,\theta_k^3.$$ [step 2.1, step 3.1, algebra]

5.1 Taking $C:=4C_0/(\sqrt3\,\gamma)$ proves $$\operatorname{dist}(x_{k+1},\mathbb Fq)\le C\,\operatorname{dist}(x_k,\mathbb Fq)^3$$ whenever $0<\operatorname{dist}(x_k,\mathbb Fq)<\delta$ and the current Rayleigh-quotient step is defined. Hence the convergence is local and cubic. [step 4.1] ∎

---
id: thm-qa-19-matrix-exponential-unitary-properties
kind: theorem
title: Unitary and differential identities for finite matrix dynamics
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps:
  - def-complex-exponential
  - def-complex-integer-powers
  - def-factorial-and-falling-factorial
  - def-qa-19-finite-matrix-dynamics
  - def-self-adjoint-and-normal-endomorphism
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-real-and-complex-inner-product-space
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-functional-calculus-for-a-normal-endomorphism
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-is-entire-with-derivative-itself
  - cor-mean-value-theorem
  - thm-algebra-of-derivatives
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): finite graph-generator evolution."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: the finite-dimensional Schrödinger equation and the spectral definition of exp(−itH)."
---

## Statement

Let $H$ be a self-adjoint endomorphism of a finite-dimensional complex
inner-product space $V$. For real $t,s$, the evolution from
[[def-qa-19-finite-matrix-dynamics]] satisfies
$$U_H(0)=I_V,\qquad U_H(t)^*U_H(t)=I_V,\qquad U_H(t+s)=U_H(t)U_H(s),\qquad \frac{d}{dt}U_H(t)=-iHU_H(t).$$
Moreover, $U_H$ is the unique differentiable map $Y:\mathbb R\to
\operatorname{End}(V)$ satisfying $Y'(t)=-iHY(t)$ and $Y(0)=I_V$.

## Facts & Assumptions
**Given:** A finite-dimensional complex inner-product space $V$ and a
self-adjoint endomorphism $H:V\to V$.

[F1] [[def-self-adjoint-and-normal-endomorphism]]: self-adjoint means
$H^*=H$.

[F2] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: the
adjoint satisfies $\langle Hv,w\rangle=\langle v,H^*w\rangle$.

[F3] [[def-real-and-complex-inner-product-space]]: the complex inner product is
linear in its first argument and conjugate-linear in its second.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a normal
endomorphism of a finite-dimensional complex inner-product space has an
orthonormal eigenbasis.

[F5] [[def-functional-calculus-for-a-normal-endomorphism]]: if
$T=\sum_j\lambda_jP_j$ is its spectral resolution, then
$f(T)=\sum_jf(\lambda_j)P_j$.

[F6] [[thm-complex-exponential-addition-and-real-extension]]:
$\exp(z+w)=\exp(z)\exp(w)$ for complex $z,w$.

[F7] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
$|\exp(x+iy)|=e^x$ for real $x,y$.

[F8] [[thm-complex-exponential-is-entire-with-derivative-itself]]:
$\exp'(z)=\exp(z)$ for every $z\in\mathbb C$.

[F9] [[cor-mean-value-theorem]]: for a real function continuous on $[a,b]$
and differentiable on $(a,b)$, there is $c\in(a,b)$ with
$f(b)-f(a)=f'(c)(b-a)$.

[F10] [[thm-algebra-of-derivatives]]: for real differentiable functions,
$(fg)'=f'g+fg'$.

[F11] [[def-complex-exponential]] defines $\exp z=\sum_{n=0}^{\infty}z^n/n!$, with the natural factorial embedded into the complex field. The power recursion in [[def-complex-integer-powers]] gives $0^0=1$ and $0^n=0$ for $n\ge1$, and [[def-factorial-and-falling-factorial]] gives $0!=1$.

## Proof

**Proof technique:** direct.

1.1 If $Hv=\lambda v$ with $v\ne0$, then self-adjointness gives $\lambda\langle v,v\rangle=\langle Hv,v\rangle=\langle v,Hv\rangle =\overline\lambda\langle v,v\rangle$ by [F1]–[F3], so every eigenvalue $\lambda$ is real. Since $H$ is self-adjoint it is normal, and [F4] supplies an orthonormal eigenbasis. In dimension zero the assertions below hold for the unique endomorphism. [given, F1, F2, F3, F4, algebra]

2.1 Write the spectral resolution $H=\sum_\lambda\lambda P_\lambda$ over distinct eigenvalues. The projections satisfy $P_\lambda^*=P_\lambda$, $P_\lambda P_\mu=0$ for $\lambda\ne\mu$, and $\sum_\lambda P_\lambda=I_V$. Definition [[def-qa-19-finite-matrix-dynamics]] is the functional-calculus sum in [F5]. By [F11], at $z=0$ the exponential series has first term $1$ and every later term $0$, so every partial sum is $1$ and $e^0=1$. [step 1.1, F4, F5, F11, algebra]

3.1 The adjoint of this sum is $U_H(t)^*=\sum_\lambda e^{it\lambda}P_\lambda$. Thus $U_H(t)^*U_H(t)=\sum_\lambda |e^{-it\lambda}|^2P_\lambda =\sum_\lambda P_\lambda=I_V$, since $t\lambda$ is real and [F7] gives $|e^{-it\lambda}|=e^0=1$ by step 2.1. At $t=0$ every coefficient is $1$ by step 2.1, so $U_H(0)=I_V$. [step 2.1, F7, algebra]

3.2 The product $U_H(t)U_H(s)$ has coefficient $e^{-it\lambda}e^{-is\lambda}=e^{-i(t+s)\lambda}$ on each $P_\lambda$ by [F6]; all cross terms vanish by orthogonality. Hence $U_H(t+s)=U_H(t)U_H(s)$. [step 2.1, F6, algebra]

3.3 For each real eigenvalue $\lambda$, the difference quotient of $t\mapsto e^{-it\lambda}$ at $t$ equals $e^{-it\lambda}(e^{-i\lambda h}-1)/h$ by [F6]. If $\lambda\ne0$, set $z=-i\lambda h$ and use [F8] at $0$, together with $e^0=1$ from step 2.1, to obtain the limit $-i\lambda e^{-it\lambda}$; if $\lambda=0$, the quotient is identically zero. The spectral sum is finite, so differentiating it term by term gives $U_H'(t)=\sum_\lambda(-i\lambda)e^{-it\lambda}P_\lambda=-iHU_H(t)$. [step 2.1, F6, F8, algebra]

4.1 Let $Y$ be any differentiable solution with $Y(0)=I_V$. Write its entries in the orthonormal eigenbasis from step 1.1 as $y_{jk}(t)$. Taking each matrix coordinate of the difference quotient for $Y'(t)=-iHY(t)$ gives $y_{jk}'(t)=-i\lambda_jy_{jk}(t)$. Put $q_j(t):=e^{i\lambda_jt}$. By [F6], for $h\ne0$, $$\frac{q_j(t+h)-q_j(t)}h=e^{i\lambda_jt}\frac{e^{i\lambda_jh}-1}h.$$ If $\lambda_j=0$, this quotient is zero. Otherwise set $z=i\lambda_jh$; [F8] at $0$, with $e^0=1$ from step 2.1, gives $\lim_{z\to0}(e^z-1)/z=1$, and hence $q_j'(t)=i\lambda_jq_j(t)$. The real and imaginary parts of $y_{jk}$ and $q_j$ are differentiable. Since $\operatorname{Re}(q_jy_{jk})=(\operatorname{Re}q_j)(\operatorname{Re}y_{jk})-(\operatorname{Im}q_j)(\operatorname{Im}y_{jk})$ and $\operatorname{Im}(q_jy_{jk})=(\operatorname{Re}q_j)(\operatorname{Im}y_{jk})+(\operatorname{Im}q_j)(\operatorname{Re}y_{jk})$, the real product rule [F10] gives the complex product rule. Thus $g_{jk}(t):=q_j(t)y_{jk}(t)$ is differentiable and $$g_{jk}'(t)=q_j'(t)y_{jk}(t)+q_j(t)y_{jk}'(t)=0.$$ Each real-valued component $h$ of $g_{jk}$ is therefore differentiable on $\mathbb R$ with derivative zero. It is continuous at every $c$: for $x\ne c$, $$h(x)-h(c)=\frac{h(x)-h(c)}{x-c}(x-c),$$ and the difference quotient tends to the finite value $h'(c)$, so it is bounded near $c$ and the product tends to zero. Thus both components are continuous on every $[a,b]$ and differentiable on $(a,b)$. Applying [F9] to each component on any $a<b$ shows both are constant on $\mathbb R$. Since $q_j(0)=1$ by step 2.1 and $Y(0)=I_V$, $g_{jk}(0)=\delta_{jk}$; therefore $y_{jk}(t)=\delta_{jk}e^{-i\lambda_jt}$ by [F6]. Thus $Y(t)=U_H(t)$. The zero-dimensional case has only one endomorphism and is unique as well. [given, F4, F6, F8, F9, F10, step 1.1, step 2.1, algebra] ∎


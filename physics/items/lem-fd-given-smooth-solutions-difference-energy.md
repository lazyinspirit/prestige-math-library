---
id: lem-fd-given-smooth-solutions-difference-energy
kind: lemma
title: "Difference energy for given smooth incompressible and symmetric solutions"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-periodic-fourier-sobolev-spaces
  - lem-fd-periodic-fourier-embedding-products
  - def-fd-periodic-leray-pressure-maps
  - def-countable-choice
dependency_roles:
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)"
      url: "https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf"
      locator: "§§2.1.1–2.1.2, §2.1.5.2, §4.1.1; Fourier, weak derivatives, product estimate and Leray projection."
    - title: "Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)"
      url: "https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/"
      locator: "Periodic pressure/Leray discussion and Sobolev Proposition 35 / Exercise 36."
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, $T>0$, and $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$ with normalized measure $d\mu=(2\pi)^{-d}dx$. For $z:Q_d\to\mathbb R^M$, use componentwise Fourier coefficients $\widehat z(k)=\int_{Q_d}z(x)e^{-ik\cdot x}\,d\mu(x)$, weights $w_k=(1+|k|^2)^{1/2}$, and the weighted coefficient completion norm $\|z\|_{H^s}^2=\sum_{k\in\mathbb Z^d}w_k^{2s}|\widehat z(k)|^2$; the normalized Fourier isometry gives $\|z\|_2^2=\sum_k|\widehat z(k)|^2$, where $\|z\|_2=(\int_{Q_d}|z|^2\,d\mu)^{1/2}$ and the pointwise component norm is Euclidean. In particular, $H^0=L^2$. For a map $z:[0,T]\times Q_d\to\mathbb R^M$, smooth on the closed cylinder means that for every $m\in\mathbb N_0$ and spatial multi-index $\alpha$, $\partial_t^m\partial_x^\alpha z$ exists on $(0,T)\times Q_d$ and extends continuously to $[0,T]\times Q_d$; spatial derivatives are those of its periodic lift. For a spatial vector field define $\operatorname{div}z=\sum_{j=1}^d\partial_jz_j$ and $\Delta z=\sum_{j=1}^d\partial_j^2z$. Write $\nabla z$ for the spatial Jacobian and $\|\nabla z(t)\|_\infty=\sup_{x\in Q_d}|\nabla z(t,x)|_F$, where $|\cdot|_F$ is the Euclidean Frobenius matrix norm. Let $P$ be the coefficientwise vector multiplier with $P_0=I$ and $P_k=I-kk^{\mathsf T}/|k|^2$ for $k\ne0$. The equations below hold pointwise on $(0,T)\times Q_d$ and at the time endpoints by continuous extension.

(i) If $\nu\ge0$ and $u,v\in C^\infty([0,T]\times Q_d;\mathbb R^d)$ satisfy, for each $z\in\{u,v\}$,
$$z_t+P((z\cdot\nabla)z)=\nu\Delta z,\qquad \operatorname{div}z=0,$$
then for every $t\in[0,T]$, with $w=u-v$,
$$\|w(t)\|_2^2\le\|w(0)\|_2^2\exp\!\left(2\int_0^t\|\nabla v(\tau)\|_\infty\,d\tau\right).$$

(ii) Let $N\ge1$ and, for $1\le j\le d$, let $A_j:\mathbb R^N\to\mathbb R^{N\times N}$ be a fixed real-linear map whose image consists of symmetric matrices. If $q,r\in C^\infty([0,T]\times Q_d;\mathbb R^N)$ satisfy, for each $z\in\{q,r\}$,
$$z_t+\sum_{j=1}^dA_j(z)\partial_jz=0,$$
then for every $t\in[0,T]$,
$$\|q(t)-r(t)\|_2^2\le\|q(0)-r(0)\|_2^2\exp\!\left(C_{d,N,A}\int_0^t(\|\nabla q(\tau)\|_\infty+\|\nabla r(\tau)\|_\infty)\,d\tau\right),$$
where $C_{d,N,A}$ depends only on $d,N$ and the operator norms of the finitely many maps $A_j$. For either pair $(z_1,z_2)=(u,v)$ or $(q,r)$, put $w=z_1-z_2$. Let $\Gamma\ge0$ be any uniform rate for which the corresponding squared $L^2$ estimate above gives $\|w(t)\|_2^2\le\|w(0)\|_2^2e^{\Gamma t}$. If $s\ge1$ and $\max_{t\in[0,T]}\max(\|z_1(t)\|_{H^s},\|z_2(t)\|_{H^s})\le M$ for some $M\ge0$, define
$$B_s(M)=\begin{cases}1,&s=1,\\(2M)^{(s-1)/s},&s>1.\end{cases}$$
Then for every $t\in[0,T]$,
$$\|w(t)\|_{H^{s-1}}\le B_s(M)\|w(0)\|_2^{1/s}e^{\Gamma t/(2s)}.$$
These are conditional estimates for already given smooth maps on the stated cylinder and assert no existence theorem. All quantities are mathematical and no physical units are assigned to $\nu$.

## Statement references

[Erick Schulz, Introduction to the Navier–Stokes Equations, McGill MATH 595 notes (2014)](https://www.math.mcgill.ca/gantumur/math595f14/Notes.pdf).

[Terence Tao, 254A Notes 1: Local well-posedness of the Navier–Stokes equations (2018)](https://terrytao.wordpress.com/2018/09/16/254a-notes-1-local-well-posedness-of-the-navier-stokes-equations/).

## Facts & Assumptions

**Given:** The hypotheses and conventions stated in the formulation.

[F1] [[def-countable-choice]]: Countable Choice is the explicit periodic Fourier coefficient assumption.

[F2] [[def-fd-periodic-fourier-sobolev-spaces]]: $H^s$ is the weighted Fourier coefficient completion with $w_k=(1+|k|^2)^{1/2}$; for $s\ge0$ it has a unique $L^2$ representative, and $H^0=L^2$ isometrically with $\|z\|_2^2=\sum_k|\widehat z(k)|^2$.

[F3] [[def-fd-periodic-leray-pressure-maps]]: $P$ is self-adjoint, is a projection, and commutes with derivatives.

[F4] [[lem-fd-periodic-fourier-embedding-products]]: $H^s$ controls $C^1$ when $s>1+d/2$, and periodic Fourier truncations converge in the stated Sobolev norms.

## Proof

**Given:** The fixed $[0,T]$, Countable Choice, and either of the two pairs of smooth solutions in the Statement.

1.1 In case (i), subtract equations and set $w=u-v$ to get $w_t+P(u\cdot\nabla w+w\cdot\nabla v)=\nu\Delta w$. Pair with $w$; [F3] and $Pw=w$ remove $P$, periodic integration and $\operatorname{div}u=0$ give $\int(u\cdot\nabla w)\cdot w=0$, and diffusion contributes $-\nu\|\nabla w\|_2^2$. Thus $(\|w\|_2^2)'\le2\|\nabla v\|_\infty\|w\|_2^2$. [given, F3, algebra]

1.2 In case (ii), linearity of $A_j$ gives $w_t+\sum_jA_j(q)\partial_jw=-\sum_jA_j(w)\partial_jr$, where $w=q-r$. Symmetry implies
$\int w^TA_j(q)\partial_jw=-\frac12\int w^T(\partial_jA_j(q))w$.
The fixed linear maps $A_j$ are bounded in finite dimension, so pairing the equation with $w$ yields $(\|w\|_2^2)'\le C(\|\nabla q\|_\infty+\|\nabla r\|_\infty)\|w\|_2^2$. [given, algebra]

2.1 In either case, multiplying the differential inequality by its integrating factor proves the corresponding $L^2$ estimate, with a finite uniform rate $\Gamma$ because the stated derivatives are continuous on the compact cylinder. For $s>1$, weighted coefficient H\"older gives
$\sum_kw_k^{2(s-1)}|\widehat w(k)|^2\le(\sum_k|\widehat w(k)|^2)^{1/s}(\sum_kw_k^{2s}|\widehat w(k)|^2)^{(s-1)/s}$.
Taking square roots and using $\|w(t)\|_{H^s}\le2M$ proves the $H^{s-1}$ estimate with factor $(2M)^{(s-1)/s}$; if $M=0$, both fields vanish in $H^s$ and the same estimate holds. When $s=1$, $H^{s-1}=H^0=L^2$ by [F2], and the squared $L^2$ estimate gives the stated bound with $B_1(M)=1$, including $M=0$. No solution is constructed by this comparison. [given, F1, F2, F4, step 1.1, step 1.2, algebra] ∎


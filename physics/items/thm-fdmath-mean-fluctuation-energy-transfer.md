---
id: thm-fdmath-mean-fluctuation-energy-transfer
kind: theorem
title: Mean and fluctuation energy exchange
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - thm-fdmath-finite-reynolds-identity
dependency_roles:
  thm-fdmath-finite-reynolds-identity: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Glenn Flierl and Raffaele Ferrari, MIT OpenCourseWare 12.820, Turbulence in the Ocean and Atmosphere, Chapter 3 (Spring 2006 lecture notes)"
      url: "https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf"
    - title: "Gregory L. Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B) Reynolds Averaging and kinetic-energy balances, pp. 17–19"
      url: "https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval, let $d\ge2$ and $N\ge1$ be integers, and define the flat torus $\mathbb T^d:=(\mathbb R/2\pi\mathbb Z)^d$, with integration using Lebesgue measure on a periodic cell $[0,2\pi]^d$. Fix constants $a_j\ge0$ with $\sum_{j=1}^N a_j=1$ and a common constant $\nu\ge0$. For $j=1,\ldots,N$, let $u_j:I\times\mathbb R^d\to\mathbb R^d$ be continuously differentiable in $(t,x)$ with continuous second spatial derivatives, and let $p_j:I\times\mathbb R^d\to\mathbb R$ be continuously differentiable. Require these fields to be $2\pi$-periodic in each spatial coordinate, so they descend to $\mathbb T^d$. Suppose they are unforced and satisfy pointwise on $I\times\mathbb R^d$

$$\operatorname{div}u_j=0,\qquad \partial_tu_j+\operatorname{div}(u_j\otimes u_j)+\nabla p_j=\nu\Delta u_j.$$

Use $(u\otimes v)_{rs}=u_rv_s$, $(\operatorname{div}A)_r=\sum_s\partial_{x_s}A_{rs}$ for a matrix field $A$, and componentwise Laplacian. For $A\in\mathbb R^{d\times d}$ set $\operatorname{tr}A:=\sum_rA_{rr}$. Define $\bar u=\sum_j a_ju_j$, $v_j=u_j-\bar u$, $R=\sum_j a_jv_j\otimes v_j$, and

$$E_m(t):=\frac12\int_{\mathbb T^d}|\bar u(t,x)|^2\,dx,\qquad E_f(t):=\frac12\int_{\mathbb T^d}\operatorname{tr}R(t,x)\,dx=\frac12\int_{\mathbb T^d}\sum_j a_j|v_j(t,x)|^2\,dx.$$

For a matrix $A$ and vector field $q$, set $A:\nabla q:=\sum_{r,s=1}^d A_{rs}\partial_{x_s}q_r$ and $|\nabla q|^2:=\sum_{r,s=1}^d|\partial_{x_s}q_r|^2$. Then for every $t\in I$,

$$\frac{dE_m}{dt}=-\nu\int_{\mathbb T^d}|\nabla\bar u|^2\,dx+\int_{\mathbb T^d}R:\nabla\bar u\,dx,$$

$$\frac{dE_f}{dt}=-\nu\int_{\mathbb T^d}\sum_j a_j|\nabla v_j|^2\,dx-\int_{\mathbb T^d}R:\nabla\bar u\,dx.$$

For every $t_0<t_1$ in $I$, the endpoint identities are

$$E_m(t_1)-E_m(t_0)=-\nu\int_{t_0}^{t_1}\int_{\mathbb T^d}|\nabla\bar u|^2\,dx\,dt+\int_{t_0}^{t_1}\int_{\mathbb T^d}R:\nabla\bar u\,dx\,dt,$$

$$E_f(t_1)-E_f(t_0)=-\nu\int_{t_0}^{t_1}\int_{\mathbb T^d}\sum_j a_j|\nabla v_j|^2\,dx\,dt-\int_{t_0}^{t_1}\int_{\mathbb T^d}R:\nabla\bar u\,dx\,dt.$$

The transfer term has opposite signs in the two balances and cancels in their sum. No sign is asserted for $\int_{\mathbb T^d}R:\nabla\bar u\,dx$.

## Statement references

[Eyink, Johns Hopkins University Turbulence Notes, Chapter VIb, §(B) Reynolds Averaging and kinetic-energy balances, pp. 17–19](https://www.ams.jhu.edu/~eyink/Turbulence/notes/ChapterVIb.pdf)

[Flierl and Ferrari, MIT OCW 12.820, Chapter 3, §3.7, full lecture notes](https://www.ocw.mit.edu/courses/12-820-turbulence-in-the-ocean-and-atmosphere-spring-2006/a3ea9a7900aee9c9ebaf444ab2d92c1a_ch3.pdf)

## Facts & Assumptions

[F1] [[thm-fdmath-finite-reynolds-identity]]: For fixed nonnegative normalized weights and a smooth finite family of divergence-free solutions with common viscosity, the weighted mean satisfies the exact averaged equation with covariance term $-\operatorname{div}R$.

[F2] [[thm-fdmath-finite-reynolds-identity]]: The fixed-weight fluctuations have zero weighted mean, $\sum_j a_jv_j=0$.

[F3] [[thm-fdmath-finite-reynolds-identity]]: The pointwise kinetic-energy split is $\sum_j a_j|u_j|^2=|\bar u|^2+\operatorname{tr}R$.

[A1] The periodic lifts are maps on $\mathbb R^d$ satisfying the Statement’s regularity, fixed-weight, common-viscosity, divergence, and unforced equation hypotheses. Thus [F1] applies with its open spatial domain $\Omega=\mathbb R^d$; the periodic cell is used only for the energy integrals.

**Given:** The data in the Statement, including [A1] and the finite Reynolds averaged equation and energy split [F1].

## Proof

1.1 By [F1], the mean field satisfies $\partial_t\bar u+\operatorname{div}(\bar u\otimes\bar u)+\nabla\bar p=\nu\Delta\bar u-\operatorname{div}R$ with $\operatorname{div}\bar u=0$. Differentiate $E_m$ under the integral, which is valid by the stated regularity and compactness of the periodic cell. For every continuously differentiable periodic scalar $g$, $\int_{\mathbb T^d}\partial_{x_s}g\,dx=0$, since integration over $x_s\in[0,2\pi]$ gives equal endpoint values. Thus the convection and pressure terms integrate to zero because they are respectively $\operatorname{div}(|\bar u|^2\bar u/2)$ and $\operatorname{div}(\bar p\bar u)$; periodic integration by parts gives $\int\bar u\cdot\Delta\bar u=-\int|\nabla\bar u|^2$ and $-\int\bar u\cdot\operatorname{div}R=\int R:\nabla\bar u$. This proves the mean-energy identity. [given, A1, F1, algebra]

2.1 Dot the $j$th equation in [A1] with $u_j$, integrate, and multiply by $a_j$. The time term is $\frac12a_j\frac{d}{dt}\int|u_j|^2$. The convection and pressure terms are periodic divergences, respectively $\operatorname{div}(|u_j|^2u_j/2)$ and $\operatorname{div}(p_ju_j)$, because $\operatorname{div}u_j=0$; their integrals vanish by the periodic-cell argument in step 1.1. Periodic integration by parts gives the viscous contribution $-\nu a_j\int|\nabla u_j|^2$. Summing over $j$ yields $\frac{d}{dt}(\frac12\int\sum_j a_j|u_j|^2)=-\nu\int\sum_j a_j|\nabla u_j|^2$. [given, A1, step 1.1, algebra]

3.1 Fixed weights and [F2] give $\sum_j a_j\nabla v_j=\nabla(\sum_j a_jv_j)=0$, while [F3] gives $\frac12\int\sum_j a_j|u_j|^2=E_m+E_f$. Expanding $\nabla u_j=\nabla\bar u+\nabla v_j$ and summing squared norms therefore gives $\sum_j a_j|\nabla u_j|^2=|\nabla\bar u|^2+\sum_j a_j|\nabla v_j|^2$. Subtracting step 1.1's mean-energy balance from step 2.1's total balance yields the stated fluctuation-energy balance with the transfer term's opposite sign. [F2, F3, step 1.1, step 2.1, algebra]

4.1 Both energies and the transfer integrand are continuous in time under [A1]. Integrating the two derivative identities from step 3.1 and step 1.1 between any $t_0<t_1$ in $I$ by the fundamental theorem of calculus gives the stated finite-time identities. Adding them cancels the transfer integrals exactly; no sign restriction on either transfer integral was used. [given, A1, step 1.1, step 3.1, algebra] ∎

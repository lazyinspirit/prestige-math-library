---
id: pthm-td-fourier-entropy-production
kind: physics-theorem
title: Entropy production in the local Fourier heat model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
physical_scope: Conditional local entropy and energy balance for a sufficiently regular, fixed-composition local-equilibrium continuum field on a rectangular insulated body with a positive-semidefinite symmetric conductivity tensor.
deps:
  - def-td-rectangular-local-equilibrium-fields
  - post-td-local-energy-balance
  - post-td-fourier-conductivity
  - post-td-local-equilibrium-entropy-density
  - thm-newton-leibniz-with-interior-derivative
  - thm-riemann-fubini-on-product-rectangles
dependency_roles:
  def-td-rectangular-local-equilibrium-fields: formulation-prerequisite
  post-td-local-energy-balance: physical-assumption
  post-td-fourier-conductivity: physical-assumption
  post-td-local-equilibrium-entropy-density: physical-assumption
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §6.5, heat conduction"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 6, §6.5, equations (114)–(119), Fourier flux and entropy production
    - title: MIT OpenCourseWare, 18.303 Linear Partial Differential Equations, The 1-D Heat Equation
      url: https://ocw.mit.edu/courses/18-303-linear-partial-differential-equations-fall-2006/d11b374a85c3fde55ec971fe587f8a50_heateqni.pdf
      locator: Full-text lecture note retrieved; §§1.1–1.2, Fourier flux, balance, and insulated boundary conventions.
---

## Statement

Let $I\subseteq\mathbb R$ be an open time interval, $\Omega=\prod_{i=1}^3(0,L_i)$ a fixed rectangle, and $(T,u,j_Q,K)$ a field record from [[def-td-rectangular-local-equilibrium-fields]] satisfying the adopted local-energy, Fourier, and local-entropy postulates [[post-td-local-energy-balance]], [[post-td-fourier-conductivity]], and [[post-td-local-equilibrium-entropy-density]]. Assume additionally that $j_Q$ and its first spatial derivatives are continuous on every compact subset of $\overline\Omega\times I$. Then, throughout $\Omega\times I$,
$$\partial_t s(T)+\operatorname{div}\!\left(\frac{j_Q}{T}\right)=\frac{(\nabla T)^{\mathsf T}K_s(x,T)\nabla T}{T^2}\ge0,$$
where $K_s=(K+K^{\mathsf T})/2$. For every compact time interval $[t_0,t_1]\subset I$, the model's total entropy $S(t)=\int_\Omega s(T(x,t))\,dx$ is differentiable and nondecreasing, while $\int_\Omega u(T(x,t))\,dx$ is constant. These are conditional deductions of the declared continuum model, not observations or a claim that every medium obeys Fourier's law.

## Facts & Assumptions

**Given:** A rectangular field record on $\overline\Omega\times I$ with $T>0$, $u=u(T)$, $c(T)=u'(T)>0$, $j_Q=-K(x,T)\nabla T$, $K_s\succeq0$, $\partial_tu+\operatorname{div}j_Q=0$, and $j_Q\cdot n=0$ on every face.

[F1] [[def-td-rectangular-local-equilibrium-fields]]: $T$ is $C^1$ in time and $C^2$ in space up to the rectangular faces; $u$ and its heat capacity $c=u'$ are the stated local functions, and $\nabla$ and $\operatorname{div}$ are Euclidean coordinate derivatives.

[A1] [[post-td-local-energy-balance]]: $\partial_tu+\operatorname{div}j_Q=0$ and $j_Q\cdot n=0$ on each insulated face.

[A2] [[post-td-fourier-conductivity]]: $j_Q=-K\nabla T$ and $z^{\mathsf T}K_s z\ge0$ for every $z\in\mathbb R^3$.

[A3] [[post-td-local-equilibrium-entropy-density]]: $s'(T)=c(T)/T$ for the declared local-equilibrium entropy density.

[A4] The flux $j_Q$ and its first spatial derivatives are continuous on each compact time slab through the boundary, so the coordinate divergence and face traces in the proof are defined and integrable.

[F2] [[thm-newton-leibniz-with-interior-derivative]]: a continuously differentiable coordinate function on a closed interval has its derivative integral equal to its endpoint increment.

[F3] [[thm-riemann-fubini-on-product-rectangles]]: iterated Riemann integrals of continuous functions on product rectangles equal the multidimensional integral.

## Proof


1.1 By [A3] and the chain rule, $\partial_t s(T)=s'(T)\partial_tT=(c(T)/T)\partial_tT=(\partial_tu)/T$, since $u'(T)=c(T)$. [F1, A3, algebra]

1.2 Substituting $j_Q=-K\nabla T$ from [A2] makes the right side $(\nabla T)^{\mathsf T}K\nabla T/T^2$. For any real vector $z$, $z^{\mathsf T}Kz=z^{\mathsf T}K_sz$ because the scalar $z^{\mathsf T}(K-K^{\mathsf T})z$ equals its own negative; hence [A2] and $T>0$ make this quantity nonnegative. [A2, F1, algebra]

1.3 For each coordinate $i$, apply [F2] to the $i$th component of $j_Q/T$ on $[0,L_i]$: its integral is the endpoint difference $[(j_Q)_i/T]_{x_i=0}^{x_i=L_i}$. By [F3] these one-dimensional integrals may be integrated over the other two coordinates and summed. The result is $\int_\Omega\operatorname{div}(j_Q/T)\,dx=0$ because $j_Q\cdot n=0$ on every face and $T>0$. The same calculation gives $\int_\Omega\operatorname{div}j_Q\,dx=0$. [F2, F3, A1, A4]

2.1 The coordinate product rule and $\nabla(1/T)=-\nabla T/T^2$ give $\operatorname{div}(j_Q/T)=(\operatorname{div}j_Q)/T-j_Q\cdot\nabla T/T^2$. Substituting [A1] and step 1.1 yields $\partial_t s(T)+\operatorname{div}(j_Q/T)=-j_Q\cdot\nabla T/T^2$. [A1, step 1.1, algebra]

3.1 On $\overline\Omega\times[t_0,t_1]$, $\partial_t s(T)$ and $\partial_tu(T)$ are continuous. The one-dimensional fundamental theorem [F2] expresses each time difference quotient as the average of its continuous time derivative; uniform continuity on this compact set makes those quotients converge uniformly in $x$. Therefore differentiation passes through the bounded-box integrals. Integrating the local balance in step 2.1 and using the zero face integral in step 1.3 gives $S'(t)=\int_\Omega (\nabla T)^{\mathsf T}K_s\nabla T/T^2\,dx$. Its integrand is nonnegative by step 1.2. Integrating [A1] and using step 1.3 gives $\frac d{dt}\int_\Omega u(T)\,dx=0$. [F1, F2, A1, step 1.2, step 1.3, step 2.1, algebra] ∎

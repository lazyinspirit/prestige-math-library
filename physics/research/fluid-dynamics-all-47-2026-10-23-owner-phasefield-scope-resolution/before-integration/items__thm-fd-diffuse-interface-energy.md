---
id: thm-fd-diffuse-interface-energy
kind: theorem
title: Cancellation of capillary and transport energy exchange
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-diffuse-interface-equations
  - lem-fd-periodic-integration-by-parts
  - cor-mean-value-theorem
  - thm-heine-borel-r
dependency_roles:
  def-fd-diffuse-interface-equations: mathematical-premise
  lem-fd-periodic-integration-by-parts: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-heine-borel-r: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11: Phase-Field Models"
      url: "https://www.oden.utexas.edu/media/reports/2017/1701.pdf"
      locator: "§§11.2 and 11.4, printed pp. 209–212, equations (11.1)–(11.10) and (11.16)–(11.21)."
    - title: "Stefanos Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility"
      url: "https://d-nb.info/1352416549/34"
      locator: "§1, equations (1.1)–(1.10), and §2, Theorem 1 proof, pp. 1–7; the source's weak-solution assumptions are not used here."
---

## Statement

Let $d\ge1$, $T>0$, $\varepsilon,M,\nu>0$, and $W\in C^2(\mathbb R)$ be bounded below. On $\mathbb T^d=\mathbb R^d/(2\pi\mathbb Z)^d$, let $u:[0,T]\times\mathbb T^d\to\mathbb R^d$, $\phi:[0,T]\times\mathbb T^d\to\mathbb R$, and $\pi:[0,T]\times\mathbb T^d\to\mathbb R$ be periodic fields with

$$u\in C^1([0,T];C^2_{\rm per}(\mathbb T^d;\mathbb R^d)),\qquad \phi\in C^1([0,T];C^1_{\rm per}(\mathbb T^d;\mathbb R))\cap C([0,T];C^2_{\rm per}(\mathbb T^d;\mathbb R)),\qquad \pi\in C([0,T];C^1_{\rm per}(\mathbb T^d;\mathbb R)).$$

Define $\mu_c:=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta\phi$ and assume that this defined field belongs to $C([0,T];C^2_{\rm per}(\mathbb T^d;\mathbb R))$, so its gradient and Laplacian in the equations below are pointwise defined. Suppose the fields satisfy pointwise

$$\partial_t\phi+u\cdot\nabla\phi=M\Delta\mu_c,\qquad \partial_tu+(u\cdot\nabla)u+\nabla\pi=\nu\Delta u-\phi\nabla\mu_c,\qquad \nabla\cdot u=0.$$

For the energy

$$E(t):=\int_{\mathbb T^d}\left(\frac12|u(t,x)|^2+\frac{\varepsilon}{2}|\nabla\phi(t,x)|^2+\varepsilon^{-1}W(\phi(t,x))\right)\,dx,$$

where $|\nabla u|^2=\sum_{i,j=1}^d|\partial_j u_i|^2$, the exact conditional identity is

$$\frac{dE}{dt}(t)=-\nu\int_{\mathbb T^d}|\nabla u(t,x)|^2\,dx-M\int_{\mathbb T^d}|\nabla\mu_c(t,x)|^2\,dx\qquad(0<t<T).$$

## Statement references

[[def-fd-diffuse-interface-equations|Dimensionless periodic system, chemical potential, and total energy]]

[[lem-fd-periodic-integration-by-parts|Periodic divergence and integration-by-parts identities]]

## Facts & Assumptions

**Given:** The parameters, potential, periodic fields, regularity, chemical-potential formula, pointwise equations, and energy in the statement. All fields are dimensionless mathematical quantities.

[F1] [[def-fd-diffuse-interface-equations]]: the phase equation is $\partial_t\phi+u\cdot\nabla\phi=M\Delta\mu_c$, the momentum equation is $\partial_tu+(u\cdot\nabla)u+\nabla\pi=\nu\Delta u-\phi\nabla\mu_c$, and the constraint is $\nabla\cdot u=0$.

[F2] [[lem-fd-periodic-integration-by-parts]]: for periodic scalar $g$ and vector $F$, $\int_{\mathbb T^d}\operatorname{div}F\,dx=0$ and $\int_{\mathbb T^d}\nabla g\cdot F\,dx=-\int_{\mathbb T^d}g\,\operatorname{div}F\,dx$.

[F3] [[def-fd-diffuse-interface-equations]]: the chemical potential is defined by $\mu_c=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta\phi$.

[F4] [[cor-mean-value-theorem]]: for a function continuous on a closed interval and differentiable on its interior, its endpoint difference equals its derivative at some interior point times the interval length.

[F5] [[thm-heine-borel-r]]: every closed bounded interval in $\mathbb R$ is compact, so every open cover of it has a finite subcover.

[A1] The stated time regularity is differentiability in the supremum norms of the needed spatial derivatives. The displayed pointwise equations and all products in the proof are continuous periodic fields, and their torus integrals use the Riemann integral over the fixed fundamental cube.

## Proof

**Given:** The hypotheses and definitions in [F1] and [A1].

1.1 Put $E_\phi(t):=\int_{\mathbb T^d}(\varepsilon|\nabla\phi|^2/2+\varepsilon^{-1}W(\phi))\,dx$. At fixed $t\in(0,T)$, set $q_h(x):=[\phi(t+h,x)-\phi(t,x)]/h$. By [A1], $q_h\to\partial_t\phi(t,\cdot)$ and $[\nabla\phi(t+h,\cdot)-\nabla\phi(t,\cdot)]/h\to\nabla\partial_t\phi(t,\cdot)$ uniformly in $x$. The identity $|a|^2-|b|^2=(a+b)\cdot(a-b)$ therefore makes the difference quotients of $\varepsilon|\nabla\phi|^2/2$ converge uniformly to $\varepsilon\nabla\phi\cdot\nabla\partial_t\phi$. Set $R:=\|\phi(t,\cdot)\|_\infty+1$ and $J:=[-R,R]$. For sufficiently small $h$, both $\phi(t,\cdot)$ and $\phi(t+h,\cdot)$ take values in $J$. This closed bounded interval is compact and has the finite-subcover property by [F5]. The function $W'$ is continuous on $J$. For any $\eta>0$, form the family of intervals $(z-r/2,z+r/2)$ over all pairs $z\in J$, $r>0$ such that $|W'(y)-W'(z)|<\eta/2$ for every $y\in J$ with $|y-z|<r$. Continuity of $W'$ makes this family a cover of $J$; compactness [F5] gives a finite subcover with pairs $(z_i,r_i)$, and $\delta:=\min_i r_i/2>0$. If $y,y'\in J$ and $|y-y'|<\delta$, choose $i$ with $|y-z_i|<r_i/2$; then $|y'-z_i|<r_i$, so both values of $W'$ differ from $W'(z_i)$ by less than $\eta/2$ and hence $|W'(y)-W'(y')|<\eta$. Thus $W'$ is uniformly continuous on $J$. Taking $\eta=1$ in the finite-cover argument also bounds $W'$ there: each $y\in J$ lies within $r_i/2$ of one of finitely many centers $z_i$, giving $|W'(y)|<|W'(z_i)|+1/2$. For each $x$ with unequal values, [F4] gives some point $\xi$ between $\phi(t,x)$ and $\phi(t+h,x)$ such that the potential difference quotient is $W'(\xi)q_h(x)$; when the values agree the quotient and $q_h(x)$ are both zero. Every such $\xi$ satisfies $|\xi-\phi(t,x)|\le\|\phi(t+h,\cdot)-\phi(t,\cdot)\|_\infty$. Define $\omega(\rho):=\sup\{|W'(a)-W'(b)|:a,b\in J,\ |a-b|\le\rho\}$; uniform continuity gives $\omega(\rho)\to0$ as $\rho\downarrow0$. Thus the supremum of the difference between the potential quotient and $W'(\phi)q_h$ is at most $\|q_h\|_\infty\omega(\|\phi(t+h,\cdot)-\phi(t,\cdot)\|_\infty)\to0$, and boundedness of $W'$ on $J$ then gives $W'(\phi)q_h\to W'(\phi)\partial_t\phi$ uniformly. These estimates apply to every intermediate point supplied by [F4], so no pointwise selection is needed. Thus the full energy-density difference quotient converges uniformly to $\varepsilon\nabla\phi\cdot\nabla\partial_t\phi+\varepsilon^{-1}W'(\phi)\partial_t\phi$. The Riemann integral over $Q_d$ is bounded in absolute value by $(2\pi)^d$ times the supremum norm, so differentiation passes through the integral and gives $E_\phi'(t)=\int_{\mathbb T^d}(\varepsilon\nabla\phi\cdot\nabla\partial_t\phi+\varepsilon^{-1}W'(\phi)\partial_t\phi)\,dx$. [given, A1, F4, F5, algebra]

1.2 Put $K(t):=\frac12\int_{\mathbb T^d}|u|^2\,dx$. The $C^1$ time regularity in [A1] makes $(u(t+h)+u(t))\cdot(u(t+h)-u(t))/(2h)$ converge uniformly in space to $u\cdot\partial_tu$, so differentiation passes through the Riemann integral by its supremum-norm bound and $K'(t)=\int_{\mathbb T^d}u\cdot\partial_tu\,dx$. Substitute the momentum equation from [F1] to obtain $K'=-\int u\cdot((u\cdot\nabla)u)\,dx-\int u\cdot\nabla\pi\,dx+\nu\int u\cdot\Delta u\,dx-\int\phi\,u\cdot\nabla\mu_c\,dx$. [given, A1, F1, algebra]

2.1 Apply [F2] with scalar $g=\partial_t\phi$ and vector $F=\varepsilon\nabla\phi$. Since $\operatorname{div}(\varepsilon\nabla\phi)=\varepsilon\Delta\phi$, step 1.1 becomes $E_\phi'(t)=\int_{\mathbb T^d}\mu_c\,\partial_t\phi\,dx$ by the chemical-potential definition [F3]. [given, F2, F3, step 1.1]

2.2 For each $i,j$, the factorization $\frac{u_i(x+he_j)^2-u_i(x)^2}{2h}=\frac{u_i(x+he_j)+u_i(x)}2\frac{u_i(x+he_j)-u_i(x)}h$ and taking $h\to0$, differentiability gives $\partial_j(u_i^2/2)=u_i\partial_j u_i$; summing the finite identities yields $u\cdot((u\cdot\nabla)u)=u\cdot\nabla(|u|^2/2)$. By [F2], this term integrates to $-\int(|u|^2/2)\operatorname{div}u\,dx=0$; applying [F2] with $g=\pi$ and $F=u$ gives the pressure contribution $-\int u\cdot\nabla\pi\,dx=\int\pi\operatorname{div}u\,dx=0$ by [F1]. Applying [F2] componentwise with $g=u_i$, $F=\nabla u_i$ gives $\int u\cdot\Delta u\,dx=-\int|\nabla u|^2\,dx$. Therefore step 1.2 yields $K'(t)=-\nu\int_{\mathbb T^d}|\nabla u|^2\,dx-\int_{\mathbb T^d}\phi\,u\cdot\nabla\mu_c\,dx$. [given, F1, F2, step 1.2, algebra]

3.1 Substitute the phase equation from [F1] into step 2.1. The transport contribution is $-\int_{\mathbb T^d}\mu_c\,u\cdot\nabla\phi\,dx$, and [F2] with $g=\mu_c$, $F=\nabla\mu_c$ gives $\int_{\mathbb T^d}\mu_c\Delta\mu_c\,dx=-\int_{\mathbb T^d}|\nabla\mu_c|^2\,dx$. Hence $E_\phi'(t)=-\int_{\mathbb T^d}\mu_c\,u\cdot\nabla\phi\,dx-M\int_{\mathbb T^d}|\nabla\mu_c|^2\,dx$. [given, F1, F2, step 2.1, algebra]

4.1 For each component, the difference quotient of $\mu_cu_j$ can be written as $\frac{\mu_c(x+he_j)-\mu_c(x)}h u_j(x+he_j)+\mu_c(x)\frac{u_j(x+he_j)-u_j(x)}h$; taking $h\to0$ and summing over $j$ proves $\operatorname{div}(\mu_cu)=u\cdot\nabla\mu_c+\mu_c\operatorname{div}u=u\cdot\nabla\mu_c$ by [F1]. The stated regularity makes $\phi$ and $\mu_cu$ periodic $C^1$ fields, so [F2] applies with $g=\phi$ and $F=\mu_cu$ and gives $\int_{\mathbb T^d}\mu_cu\cdot\nabla\phi\,dx=-\int_{\mathbb T^d}\phi u\cdot\nabla\mu_c\,dx$. Consequently the transport term in step 3.1 cancels the capillary-work term in step 2.2. [given, F1, F2, step 3.1, step 2.2, algebra]

5.1 Since $E=K+E_\phi$, adding steps 3.1 and 2.2 and using the cancellation in step 4.1 gives the asserted identity for every $t\in(0,T)$. [given, step 3.1, step 2.2, step 4.1, algebra] ∎

## Remarks

This is a conditional model deduction for a solution in the stated regularity class. It proves neither existence of such a solution nor global smoothness in any dimension, a maximum principle for $\phi$, sharp-interface convergence, contact-line selection, or physical immiscibility.

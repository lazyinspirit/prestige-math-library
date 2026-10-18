---
id: thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d
kind: theorem
title: "Two-dimensional uniqueness and conditional three-dimensional weak–strong uniqueness"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-na-evolutionary-incompressible-ns-weak-solution, def-na-stokes-zero-mean-pressure-and-velocity-spaces, lem-na-evolutionary-skew-convective-form-bound, lem-pe12-evolution-energy-chain-rule, lem-na-homogeneous-dirichlet-korn-identity, thm-holder-inequality-for-integrals, thm-young-inequality-real-exponents, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-exponential-reciprocal-and-positivity, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Endre Süli and Tabea Tscherpel, Fully discrete finite element approximation of unsteady flows of implicitly constituted incompressible fluids, arXiv:1804.02264v1"
      url: https://arxiv.org/pdf/1804.02264
      locator: "§2.1, energy weak-solution class and dimension-dependent uniqueness context"
    - title: "Xiaoming He, Introduction and Basic Implementation for Finite Element Methods, Chapter 9: Finite elements for 2D unsteady Navier–Stokes equations"
      url: https://bpb-us-e2.wpmucdn.com/sites.mst.edu/dist/a/189/files/2023/09/Finite_Elements_Chapter_9.pdf
      locator: "§1, pp. 3–13, two-dimensional weak velocity formulation and energy testing"
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb R^d$ be bounded, connected and Lipschitz, let $\nu>0$, and use the energy weak-solution definition in [[def-na-evolutionary-incompressible-ns-weak-solution]]. For fixed data $(u_0,f)$, energy weak solutions are unique when $d=2$. When $d=3$, if one of two energy weak solutions $v$ additionally belongs to $C^1([0,T];V_\sigma)$, has $\nabla v\in L^1(0,T;L^\infty(D))$, and its equation holds as an identity in $V_\sigma^*$ almost everywhere in time, then every other energy weak solution with the same data equals $v$. The three-dimensional conclusion is conditional on this strong branch and asserts no uniqueness between arbitrary energy weak solutions.

## Facts & Assumptions

**Given:** The Axiom of Choice, a common bounded connected Lipschitz domain, $\nu>0$, forcing $f\in L^2(0,T;L^2)$, initial datum $u_0\in H_\sigma$, and one or two energy weak solutions with these data.

[F1] The pressure-bearing weak formulation tested on $V_\sigma$ has no pressure term; $V_\sigma$ consists of the exactly divergence-free vectors in $V=H^1_0(D)^d$. ([[def-na-evolutionary-incompressible-ns-weak-solution]], [[def-na-stokes-zero-mean-pressure-and-velocity-spaces]])

[F2] In two dimensions, for exactly divergence-free $a$, $c(a;b,w)=\int_D(a\cdot\nabla)b\cdot w$, and Ladyzhenskaya gives $\|w\|_4^2\le C_D\|w\|_2\|\nabla w\|_2$. ([[lem-na-evolutionary-skew-convective-form-bound]])

[F3] In both dimensions, $a_\nu(w,w)\ge\nu\|\nabla w\|_2^2$. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-homogeneous-dirichlet-korn-identity]])

[F4] If $w\in L^2(0,T;V_\sigma)\cap L^\infty(0,T;H_\sigma)$ and $w'\in L^2(0,T;V_\sigma^*)$, the evolution-space chain rule gives an $H_\sigma$-continuous representative and $\frac{d}{dt}\|w\|_2^2=2\langle w',w\rangle$ almost everywhere. ([[lem-pe12-evolution-energy-chain-rule]])

[F5] Absolutely continuous scalar functions satisfy the fundamental theorem of calculus, and products of absolutely continuous functions are absolutely continuous. ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous]])

[F6] The exponential derivative, ordinary scalar chain rule, and product rule give the derivative of $e^{-B(t)}Y(t)$ at points where the absolutely continuous factors are differentiable. ([[thm-derivative-of-exponential]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]])

[F7] Holder and Young bound the convection and absorb a fraction of the viscous term. ([[thm-holder-inequality-for-integrals]], [[thm-young-inequality-real-exponents]])

[F8] The real exponential is strictly positive. ([[cor-exponential-reciprocal-and-positivity]])

[A1] The chain-rule input uses the Axiom of Choice as stated by its supplier. ([[def-axiom-of-choice]], [[lem-pe12-evolution-energy-chain-rule]])

## Proof

1.1 Let $u,v$ be two energy weak solutions in dimension two and set $w=u-v$. The solenoidal equations show in $V_\sigma^*$ that $w'=-a_\nu(w,\cdot)-c(u;u,\cdot)+c(v;v,\cdot).$ By [F2], $\|c(z;z,\cdot)\|_{V_\sigma^*}\le C_D\|z\|_2\|z\|_V$ for $z=u,v$. Their $L^\infty H_\sigma$ and $L^2V_\sigma$ bounds therefore put the right side in $L^2(0,T;V_\sigma^*)$, so [F4] applies to $w$ under the Axiom of Choice [A1]. [A1, F1, F2, F4, given, algebra]

1.2 Now let $d=3$ and assume the additional hypotheses in the Statement. Testing the weak equation for $u$ by time cutoffs of $v$ is permitted by the definition. Its pressure term vanishes because $v$ is solenoidal; all remaining terms are integrable. The scalar function $(u(t),v(t))_2$ is therefore absolutely continuous and satisfies $\frac{d}{dt}(u,v)_2=(u,v_t)_2+(f,v)_2-a_\nu(u,v)-c(u;u,v)$ almost everywhere. Testing the equation for $v$ by $v$ gives its energy equality because $c(v;v,v)=0$. Combining this cross identity with the energy inequality for $u$ and energy equality for $v$, and using the strong equation for $v$ tested on $u-v\in V_\sigma$, yields $\frac12\|u(t)-v(t)\|_2^2+\nu\int_0^t\|\nabla(u-v)\|_2^2\,ds\le\int_0^t|c(u-v;v,u-v)|\,ds.$ The viscous cross terms combine as $a_\nu(u,u)+a_\nu(v,v)-2a_\nu(u,v)=a_\nu(u-v,u-v)$. For convection, skewness and $c(a;b,b)=0$ give $c(v;v,u)+c(u;u,v)=c(w;u,v)=c(w;v+w,v)=-c(w;v,w)$, where $w=u-v$. The assumed a.e. identity for $v$ can be paired with $w\in L^2(0,T;V_\sigma)$ and integrated; its pressure is absent on this space. [F1, F3, F5, given, algebra]

2.1 Pair the difference equation with $w(t)$. Since $u=v+w$ and $c(a;b,b)=0$, $c(u;u,w)-c(v;v,w)=c(w;v,w).$ As $w$ is exactly divergence-free, [F2] and Holder give $|c(w;v,w)|\le\|w\|_4^2\|\nabla v\|_2\le C_D\|w\|_2\|\nabla w\|_2\|\nabla v\|_2.$ Young's inequality absorbs half of $\nu\|\nabla w\|_2^2$ and leaves $C_D\nu^{-1}\|\nabla v\|_2^2\|w\|_2^2$. [F2, F3, F7, step 1.1]

3.1 The chain rule [F4], the common initial trace, and step 2.1 imply for every $t$, $y(t)\le C_D\nu^{-1}\int_0^t\|\nabla v(s)\|_2^2y(s)\,ds,\qquad y(t):=\|w(t)\|_2^2.$ Here $y$ is continuous and the coefficient $b(s)=C_D\nu^{-1}\|\nabla v(s)\|_2^2$ is nonnegative and integrable. Put $Y(t)=\int_0^tb(s)y(s)\,ds$ and $B(t)=\int_0^tb(s)\,ds$. Then $0\le y\le Y$, $Y(0)=0$, and $Y'=by\le bY$ almost everywhere. The function $e^{-B}$ is absolutely continuous because $B$ is absolutely continuous and the exponential has bounded derivative on the compact range of $-B$; [F5] makes $e^{-B}Y$ absolutely continuous. At almost every point its derivative is $e^{-B}(Y'-bY)\le0$. The fundamental theorem [F5] gives $e^{-B(t)}Y(t)\le0$, and [F8] gives $e^{-B(t)}>0$; because $Y(t)\ge0$, this forces $Y(t)=y(t)=0$. Thus $u=v$ in dimension two. [F4, F5, F6, F8, step 2.1, given, algebra]

4.1 Since $w=u-v$ is exactly divergence-free, the skew form in step 1.2 is $\int_D(w\cdot\nabla)v\cdot w$. Thus $|c(w;v,w)|\le\|\nabla v\|_{L^\infty}\|w\|_2^2.$ Dropping the nonnegative viscous term in step 1.2 gives $y(t)\le2\int_0^t b(s)y(s)\,ds$ with $y=\|w\|_2^2$ and $b=\|\nabla v\|_\infty\in L^1$. Replacing $b$ by $2b$ in the integrating-factor argument of step 3.1 gives $y(t)=0$ for every $t$. Hence the weak solution equals the specified strong branch; no three-dimensional unconditional uniqueness was used. [F1, F5, F6, F8, step 3.1, step 1.2, algebra] ∎

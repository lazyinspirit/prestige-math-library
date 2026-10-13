---
id: thm-cm-kelvin-circulation
kind: theorem
title: "Kelvin circulation: the circulation around a smooth material loop is constant in the barotropic inviscid model"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-fluid-constitutive-models, def-cm-euclidean-spatial-calculus, thm-cm-barotropic-momentum-and-bernoulli, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-ftc-second-part, thm-ftc-first-part, def-oriented-integral, thm-additivity-over-subintervals, def-euclidean-inner-product, thm-extreme-value-metric, thm-heine-borel-rn, def-interval, thm-continuous-implies-integrable, thm-heine-cantor-metric, lem-uniform-integral-error-bound, thm-substitution]
dependency_roles:
  def-cm-fluid-constitutive-models: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-barotropic-momentum-and-bernoulli: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-interval: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  lem-uniform-integral-error-bound: mathematical-premise
  thm-substitution: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 12.3 and Problem 12.14 (circulation and Kelvin's theorem)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 8.4 (the Kelvin theorem for an ideal fluid)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Statement

Let $O\subseteq\mathbb R^3$ be open, let $I\subseteq\mathbb R$ be a nonempty open interval, let $u:I\times O\to\mathbb R^3$ and $\rho:I\times O\to(0,\infty)$ be $C^1$, let $p:(0,\infty)\to\mathbb R$ be the restriction of a $C^1$ map on an open neighbourhood of the rectangle, with enthalpy $h$, and let $V:I\times O\to\mathbb R$ be $C^1$, with the barotropic inviscid stress $\sigma=-p(\rho)I_3$; assume the local equations (M) of [[thm-cm-barotropic-momentum-and-bernoulli]] on $I\times O$:

$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \rho\,D_tu=\rho(-\nabla V)+g,\qquad g_i=\sum_j\partial_j\sigma_{ij},$$

so that, by part (i) of that theorem, $D_tu=-\nabla(h(\rho)+V)$ on $I\times O$.

Let $t_0<t_1$ with $[t_0,t_1]\subseteq I$ and let $\gamma:[t_0,t_1]\times[0,1]\to O$ be $C^1$ with

$$\gamma(t,0)=\gamma(t,1)\quad\text{and}\quad\partial_t\gamma(t,s)=u\bigl(t,\gamma(t,s)\bigr)\qquad\bigl((t,s)\in[t_0,t_1]\times[0,1]\bigr) .$$

Then the **circulation**

$$\Gamma(t):=\int_0^1\sum_{i=1}^3u_i\bigl(t,\gamma(t,s)\bigr)\,\partial_s\gamma_i(t,s)\,ds$$

is constant on $[t_0,t_1]$. The integral is an ordinary Riemann integral of a continuous real function; a singleton time interval has a trivially constant circulation and requires no time differentiation.

## Facts & Assumptions

**Given:** The fields $u,\rho,p,V$ and the local equation; the material loop $\gamma$.

[F1] By [[thm-cm-barotropic-momentum-and-bernoulli]](i), $D_tu=-\nabla(h(\rho)+V)$ on $I\times O$; the enthalpy satisfies $h\in C^1$.

[F2] Chain rule for the composite $s\mapsto\varphi(t,\gamma(t,s))$ and for $t\mapsto u(t,\gamma(t,s))$: $\partial_s(u(t,\gamma))=(Du)(t,\gamma)\partial_s\gamma$, and $\partial_t(u(t,\gamma))=\partial_tu(t,\gamma)+(Du)(t,\gamma)\partial_t\gamma$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-cm-euclidean-spatial-calculus]]).

[F3] The identity $u\cdot(Du\,v)=\tfrac12\nabla(|u|_2^2)\cdot v$ for $C^1$ fields: componentwise, $\sum_iu_i\partial_ju_iv_j=\tfrac12\partial_j\bigl(\sum_iu_i^2\bigr)v_j$ ([[def-euclidean-inner-product]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[F4] If $g$ and $\partial_tg$ are continuous on a compact rectangle, FTC gives $h^{-1}(g(t+h,s)-g(t,s))=h^{-1}\int_t^{t+h}\partial_tg(\tau,s)d\tau$. Uniform continuity makes these quotients converge uniformly in $s$ to $\partial_tg(t,s)$; the uniform integral-error bound therefore gives $\frac{d}{dt}\int g(t,s)ds=\int\partial_tg(t,s)ds$. The same argument with the coordinate roles exchanged permits differentiation in $s$ of $\int_{t_0}^tU(\tau,s)d\tau$ when $U$ and $\partial_sU$ are continuous; endpoints use one-sided derivatives ([[thm-ftc-second-part]], [[thm-continuous-implies-integrable]], [[thm-heine-cantor-metric]], [[lem-uniform-integral-error-bound]]).

[F5] Fundamental theorem of calculus: $\int_0^1\partial_sF(s)\,ds=F(1)-F(0)$ for $C^1$ $F$; and $\int_0^1\partial_sF=0$ when $F(0)=F(1)$ ([[thm-ftc-second-part]], [[thm-ftc-first-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]]).

## Proof

**Proof technique:** direct; differentiate the parameterized circulation and recognize the integrand as a total $s$-derivative.

1.1 Put $U(t,s):=u(t,\gamma(t,s))$. The chain rule makes $U$ a $C^1$ map, with $\partial_tU=\partial_tu+(Du)\partial_t\gamma$ and $\partial_sU=(Du)\partial_s\gamma$. Although $\gamma$ is only assumed $C^1$, its material equation supplies the needed mixed derivative: from $\gamma(t,s)=\gamma(t_0,s)+\int_{t_0}^tU(\tau,s)\,d\tau$, differentiating in $s$ gives $\partial_s\gamma(t,s)=\partial_s\gamma(t_0,s)+\int_{t_0}^t\partial_sU(\tau,s)\,d\tau$ by [F4]. Therefore $\partial_t\partial_s\gamma=\partial_sU=(Du)\partial_s\gamma$, continuously. Thus the circulation integrand $U\cdot\partial_s\gamma$ has a continuous time derivative, and [F4] gives $$\Gamma'(t)=\int_0^1\Bigl[\bigl(\partial_tu+(Du)\partial_t\gamma\bigr)\cdot\partial_s\gamma+u\cdot(Du)\partial_s\gamma\Bigr]ds$$ for $t$ in the time interior. [given, F2, F4, algebra]

2.1 Since $\partial_t\gamma=u(t,\gamma)$, the first term in step 1.1 is $(\partial_tu+(Du)u)\cdot\partial_s\gamma=(D_tu)\cdot\partial_s\gamma$. The second term is exactly $u\cdot(Du)\partial_s\gamma=\partial_s(\tfrac12|u(t,\gamma)|_2^2)$ by the chain rule and [F3]. Hence $$\Gamma'(t)=\int_0^1\Bigl[(D_tu)\cdot\partial_s\gamma+\partial_s\bigl(\tfrac12|u|_2^2\bigr)\Bigr]ds.$$ No equality between $(Du)u$ and $(Du)^{\mathsf T}u$, and no symmetry of $Du$, is used. [step 1.1, F2, F3, algebra]

3.1 Substituting [F1], $\Gamma'(t)=\int_0^1\bigl[-\nabla(h(\rho)+V)\cdot\partial_s\gamma+\partial_s\tfrac12|u|_2^2\bigr]ds=-\int_0^1\partial_s\bigl[(h(\rho)+V)\bigl(t,\gamma(t,s)\bigr)\bigr]ds+\bigl[\tfrac12|u|_2^2\bigr]_{s=0}^{s=1}$ by the chain rule [F2] and the fundamental theorem [F5]. Since $\gamma(t,1)=\gamma(t,0)$, both boundary terms vanish, so $\Gamma'(t)=0$ for every $t\in(t_0,t_1)$; by continuity $\Gamma$ is constant on $[t_0,t_1]$. [step 2.1, F1, F2, F5, algebra] ∎

## Remarks

- The loop is material: its points move with the fluid velocity, which is the hypothesis $\partial_t\gamma=u(\gamma)$. The theorem is conditional on the barotropic inviscid local equation and uses the gradient form $D_tu=-\nabla(h+V)$; viscosity, non-barotropic pressure or a non-conservative body force invalidate the argument.

- The circulation is defined as an oriented line integral with the parameterization $(t,s)\mapsto\gamma(t,s)$; a different parameterization of the same oriented loop gives the same value by [[thm-substitution]] for a C1 orientation-preserving change of parameter with endpoints fixed. No claim is made about the existence of loops with prescribed circulation, nor about vortex dynamics.

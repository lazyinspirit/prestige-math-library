---
id: thm-cm-kelvin-circulation
kind: theorem
title: "Kelvin circulation: the circulation around a smooth material loop is constant in the barotropic inviscid model"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 5
deps: [def-cm-fluid-constitutive-models, def-cm-euclidean-spatial-calculus, thm-cm-barotropic-momentum-and-bernoulli, def-ck-euclidean-maps-and-diffeomorphisms, thm-differentiation-under-the-integral-sign, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-total-derivative-computes-directional-and-partial-derivatives, thm-ftc-second-part, thm-ftc-first-part, def-oriented-integral, thm-additivity-over-subintervals, def-integral-over-a-measurable-set, def-euclidean-inner-product, thm-extreme-value-metric, thm-heine-borel-rn, def-interval]
dependency_roles:
  def-cm-fluid-constitutive-models: mathematical-premise
  def-cm-euclidean-spatial-calculus: mathematical-premise
  thm-cm-barotropic-momentum-and-bernoulli: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-derivative-computes-directional-and-partial-derivatives: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-interval: mathematical-premise
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

Let $O\subseteq\mathbb R^3$ be open, let $I\subseteq\mathbb R$ be a nonempty open interval, let $u:I\times O\to\mathbb R^3$ and $\rho:I\times O\to(0,\infty)$ be $C^1$, let $p:(0,\infty)\to\mathbb R$ be $C^1$ with enthalpy $h$, and let $V:I\times O\to\mathbb R$ be $C^1$, with the barotropic inviscid stress $\sigma=-p(\rho)I_3$; assume the local equations (M) of [[thm-cm-barotropic-momentum-and-bernoulli]] on $I\times O$:

$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \rho\,D_tu=\rho(-\nabla V)+g,\qquad g_i=\sum_j\partial_j\sigma_{ij},$$

so that, by part (i) of that theorem, $D_tu=-\nabla(h(\rho)+V)$ on $I\times O$.

Let $[t_0,t_1]\subseteq I$ and let $\gamma:[t_0,t_1]\times[0,1]\to O$ be $C^1$ with

$$\gamma(t,0)=\gamma(t,1)\quad\text{and}\quad\partial_t\gamma(t,s)=u\bigl(t,\gamma(t,s)\bigr)\qquad\bigl((t,s)\in[t_0,t_1]\times[0,1]\bigr) .$$

Then the **circulation**

$$\Gamma(t):=\int_0^1\sum_{i=1}^3u_i\bigl(t,\gamma(t,s)\bigr)\,\partial_s\gamma_i(t,s)\,ds$$

is constant on $[t_0,t_1]$.

## Facts & Assumptions

**Given:** The fields $u,\rho,p,V$ and the local equation; the material loop $\gamma$.

[F1] By [[thm-cm-barotropic-momentum-and-bernoulli]](i), $D_tu=-\nabla(h(\rho)+V)$ on $I\times O$; the enthalpy satisfies $h\in C^1$.

[F2] Chain rule for the composite $s\mapsto\varphi(t,\gamma(t,s))$ and for $t\mapsto u(t,\gamma(t,s))$: $\partial_s(u(t,\gamma))=(Du)(t,\gamma)\partial_s\gamma$, and $\partial_t(u(t,\gamma))=\partial_tu(t,\gamma)+(Du)(t,\gamma)\partial_t\gamma$ ([[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-cm-euclidean-spatial-calculus]]).

[F3] The identity $u\cdot(Du\,v)=\tfrac12\nabla(|u|_2^2)\cdot v$ for $C^1$ fields: componentwise, $\sum_iu_i\partial_ju_iv_j=\tfrac12\partial_j\bigl(\sum_iu_i^2\bigr)v_j$ ([[def-euclidean-inner-product]], [[thm-total-derivative-computes-directional-and-partial-derivatives]], [[thm-algebra-of-derivatives]]).

[F4] Differentiation under the integral sign applies to $G(t)=\int_0^1g(t,s)ds$ when $g$ and $\partial_tg$ are continuous on $[t_0,t_1]\times[0,1]$: then $G'(t)=\int_0^1\partial_tg(t,s)ds$ ([[thm-differentiation-under-the-integral-sign]], [[def-integral-over-a-measurable-set]]); the continuous partial derivative on the compact rectangle supplies the integrable majorant ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]]).

[F5] Fundamental theorem of calculus: $\int_0^1\partial_sF(s)\,ds=F(1)-F(0)$ for $C^1$ $F$; and $\int_0^1\partial_sF=0$ when $F(0)=F(1)$ ([[thm-ftc-second-part]], [[thm-ftc-first-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]]).

## Proof

**Proof technique:** direct; differentiate the parameterized circulation and recognize the integrand as a total $s$-derivative.

1.1 The integrand $g(t,s):=\sum_iu_i(t,\gamma(t,s))\partial_s\gamma_i(t,s)$ is $C^1$ on $[t_0,t_1]\times[0,1]$, since $u$ and $\gamma$ are $C^1$; hence $\Gamma$ is differentiable on $(t_0,t_1)$ with, by [F4] and [F2], $$\Gamma'(t)=\int_0^1\Bigl[\sum_i\bigl(\partial_tu_i+(Du\,\partial_t\gamma)_i\bigr)\partial_s\gamma_i+\sum_iu_i\partial_s\partial_t\gamma_i\Bigr]ds .$$ [given, F2, F4, algebra]

2.1 Since $\partial_t\gamma=u(\gamma)$, the terms involving the $\partial_s$-derivative combine: by [F2], $\partial_s\partial_t\gamma=(Du)(t,\gamma)\partial_s\gamma$, so $$\sum_i(Du\,\partial_t\gamma)_i\partial_s\gamma_i+\sum_iu_i\partial_s\partial_t\gamma_i=\sum_i(Du\,u)_i\partial_s\gamma_i+\sum_iu_i(Du\,\partial_s\gamma)_i=(\nabla\tfrac12|u|_2^2)\cdot\partial_s\gamma+\tfrac12\partial_s(|u|_2^2),$$ using [F3] twice: the first sum is $u\cdot(Du\,\partial_s\gamma)$ and the second is the same quantity. Hence the bracket in step 1.1 is $\bigl[D_tu\bigr]\cdot\partial_s\gamma+\partial_s\bigl(\tfrac12|u|_2^2\bigr)$, because $D_tu=\partial_tu+Du\,u$. [step 1.1, F2, F3, algebra]

3.1 Substituting [F1], $\Gamma'(t)=\int_0^1\bigl[-\nabla(h(\rho)+V)\cdot\partial_s\gamma+\partial_s\tfrac12|u|_2^2\bigr]ds=-\int_0^1\partial_s\bigl[(h(\rho)+V)\bigl(t,\gamma(t,s)\bigr)\bigr]ds+\bigl[\tfrac12|u|_2^2\bigr]_{s=0}^{s=1}$ by the chain rule [F2] and the fundamental theorem [F5]. Since $\gamma(t,1)=\gamma(t,0)$, both boundary terms vanish, so $\Gamma'(t)=0$ for every $t\in(t_0,t_1)$; by continuity $\Gamma$ is constant on $[t_0,t_1]$. [step 2.1, F1, F2, F5, algebra] ∎

## Remarks

- The loop is material: its points move with the fluid velocity, which is the hypothesis $\partial_t\gamma=u(\gamma)$. The theorem is conditional on the barotropic inviscid local equation and uses the gradient form $D_tu=-\nabla(h+V)$; viscosity, non-barotropic pressure or a non-conservative body force invalidate the argument.

- The circulation is defined as an oriented line integral with the parameterization $(t,s)\mapsto\gamma(t,s)$; a different parameterization of the same oriented loop gives the same value by the substitution rule for one-dimensional integrals. No claim is made about the existence of loops with prescribed circulation, nor about vortex dynamics.

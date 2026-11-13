---
id: thm-se-3-7
kind: theorem
domain: mathematics
title: "Theorem 3.7: abstract small-data perturbation result"
status: published
proof_strategy: direct
deps:
  - def-se-dirichlet-scale
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-internal-systems
  - def-se-perturbation-hypotheses
  - def-se-feedback-map
  - def-se-foundation-time-function-spaces
  - thm-se-3-6
  - prop-se-feedback-estimates
  - prop-se-nonlinear-mild
  - math:def-axiom-of-choice
dependency_roles:
  def-se-dirichlet-scale: mathematical-premise
  def-se-geometry: mathematical-premise
  def-se-control-cutoffs: mathematical-premise
  def-se-internal-systems: mathematical-premise
  def-se-perturbation-hypotheses: mathematical-premise
  def-se-feedback-map: mathematical-premise
  def-se-foundation-time-function-spaces: mathematical-premise
  thm-se-3-6: mathematical-premise
  prop-se-feedback-estimates: mathematical-premise
  prop-se-nonlinear-mild: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
formulation_deps:
  - def-se-dirichlet-scale
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-internal-systems
  - def-se-perturbation-hypotheses
  - def-se-foundation-time-function-spaces
  - prop-se-nonlinear-mild
  - math:def-axiom-of-choice
argument_deps:
  - def-se-dirichlet-scale
  - def-se-geometry
  - def-se-control-cutoffs
  - def-se-internal-systems
  - def-se-perturbation-hypotheses
  - def-se-feedback-map
  - def-se-foundation-time-function-spaces
  - thm-se-3-6
  - prop-se-feedback-estimates
  - prop-se-nonlinear-mild
  - math:def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
      locator: PDF pages 14–15, Theorem 3.7
dependency_level: 21
---

## Statement

Assume the Axiom of Choice and hypothesis (H): $n\ge2$, the nonempty compact obstacle $\Theta\subset\mathbb R^n$ has smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$, and its generalized reflected rays leave every compact set in finite time. Fix $T>0$, $s\in[1,2]$, $m\in\{3,5\}$ and real $\lambda\ne0$. Let $H=H_D^s(\Omega)$ be the Dirichlet spectral space, $W(t)=e^{it\Delta_D}$ its free group, and $\varphi$ the control cutoff of [[def-se-control-cutoffs]]. Let $X_T$ satisfy the three abstract perturbation hypotheses of [[def-se-perturbation-hypotheses]], including its norm-one continuous inclusion into $C([0,T];H)$.

Then there is $\delta>0$ such that, for every $v_0,v_T\in H$ with $\|v_0\|_H,\|v_T\|_H\le\delta$, there are a control $h\in C([0,T];H)$ and an integral solution $v\in X_T$ of $i\partial_t v+\Delta_Dv+\lambda|v|^{m-1}v=\varphi h$ with $v(0)=v_0$ and $v(T)=v_T$. The integral solution is understood through the variation-of-constants formulation in [[prop-se-nonlinear-mild]], with the homogeneous Dirichlet condition encoded by the Dirichlet realization.

## Facts & Assumptions

[F1] The geometry and cutoff have the meanings in [[def-se-geometry]] and [[def-se-control-cutoffs]]. The controlled equation and power nonlinearity are those of [[def-se-internal-systems]].

[F2] The perturbation hypotheses provide a Banach path space $X_T$, its continuous inclusion into $C([0,T];H)$, and the homogeneous, retarded-forcing and nonlinear estimates with a fixed constant $C_0\ge1$. Continuous paths and the $L^1$ forcing spaces use the conventions of [[def-se-foundation-time-function-spaces]]. [[def-se-perturbation-hypotheses]]

[F3] Under Choice and the stated geometry and regularity, [[thm-se-3-6]] supplies a bounded linear endpoint selector $G:H\times H\to C([0,T];H)$ for the linear controlled evolution. [[math:def-axiom-of-choice]]

[F4] With this selector, [[def-se-feedback-map]] defines $N(v)=D(ig(v))$, $h_v=G(v_0,v_T-N(v)(T))$, and $\mathcal T(v)=W(\cdot)v_0+N(v)+D(-i\varphi h_v)$, where $g(z)=\lambda|z|^{m-1}z$ and $D$ is the retarded forcing operator. These expressions belong to their stated spaces.

[F5] The feedback estimates in [[prop-se-feedback-estimates]] give constants $C_1,C_2$ depending on the fixed data such that, with $M=4C_1\delta$ and $4C_2M^{m-1}\le1$, the feedback map has a fixed point in the closed radius-$M$ ball of $X_T$ whenever each endpoint norm is at most $\delta$. That fixed point has the prescribed endpoints.

[F6] The variation-of-constants equivalence in [[prop-se-nonlinear-mild]] identifies a continuous path satisfying the displayed mild equation, with both nonlinear and control forcings Bochner integrable in $H$, as an integral solution of the controlled abstract equation.

[F7] The normed Dirichlet spectral space $H=H_D^s(\Omega)$ and the free group $W(t)=e^{it\Delta_D}$ are those of [[def-se-dirichlet-scale]], under the same Choice and exterior-geometry hypotheses.

## Proof

**Given:** The assumptions and notation of the Statement.

**Goal:** Construct a continuous control and an integral solution in $X_T$ with the prescribed endpoints for sufficiently small endpoint data.

1.1 The stated range $s\in[1,2]$ is contained in the selector theorem's range. Choose its bounded endpoint selector $G$ and use it in the feedback construction. The three perturbation hypotheses apply to this same $X_T$, free group and power nonlinearity, so the feedback map and its control $h_v$ are well defined as in F4. [F2, F3, F4, F7]

1.2 The constants in F5 are fixed once the geometry, time, parameters, cutoff, selector and perturbation bounds are fixed. Since $m>1$, choose $\delta>0$ small enough that, for $M=4C_1\delta$, the inequality $4C_2M^{m-1}\le1$ holds. For any two endpoints with norms at most $\delta$, F5 then gives a fixed point $v\in X_T$ with $v(0)=v_0$ and $v(T)=v_T$. Its selected control $h=h_v$ belongs to $C([0,T];H)$. [F4, F5]

2.1 The fixed-point identity is $v=W(\cdot)v_0+D(ig(v))+D(-i\varphi h)$. The perturbation hypotheses give $g(v)\in L^1(0,T;H)$; the feedback construction gives $\varphi h\in L^1(0,T;H)$. These are Bochner-integrable forcings, and the identity is exactly the mild equation in F6. [F2, F4, step 1.2]

3.1 Applying F6 gives the asserted integral solution of the controlled equation with initial value $v_0$. Its terminal value is $v_T$ by step 1.2. Thus the chosen $\delta$ works for every endpoint pair in the stated balls. The argument asserts uniqueness only for the constructed feedback fixed point inside its chosen small ball, not for all controlled solutions. [F1, F5, F6, step 1.2, step 2.1] ∎

## Source notes

The frozen article, PDF pages 14–15, is cited for attribution of Theorem 3.7 and its feedback construction. The deduction above uses the stated selector, feedback estimates and mild-solution equivalence.

---
id: prop-emg-fx-nonlinear-maxwell-variation
kind: proposition
title: "Constitutive field equation from compact variations"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-emg-fx-nonlinear-lagrangian
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-maxwell-action-variation
dependency_roles:
  def-emg-fx-nonlinear-lagrangian: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes (2019), §3.2.5, The Maxwell Action"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
      locator: "§3.2.5, printed pp. 113–117 (PDF pp. 120–124): compact field-strength variations and the source-free and sourced Maxwell equations. The nonlinear chain rule and sign are derived in the local proof."
    - title: "Dmitri P. Sorokin, Introductory Notes on Non-linear Electrodynamics and its Applications, arXiv:2112.12118v3 (2022)"
      url: "https://arxiv.org/pdf/2112.12118"
      locator: "§3.2, equations (3.4)–(3.7), PDF pp. 5–6; §6, equations (6.1)–(6.3), PDF pp. 10–11. Its generic invariant action and field equation are used as independent context; the local proof supplies the exact fixed-sector argument and convention."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Chapter 4, equations (4.28)–(4.29) and (4.45), and Chapter 1, equations (1.77)–(1.78): potential-to-field-strength and Maxwell action conventions. Gaussian source signs are not imported."
---

## Statement

Use the fixed-metric, fixed-bundle-sector data and relative action of the Definition of a smooth nonlinear electromagnetic constitutive model. If the connection is stationary under every smooth compactly supported same-sector variation and the source coupling is absent, then
$$\nabla_aH^{ab}=0,\qquad dF=0.$$
For $L=X+\alpha X^2+\beta Y^2$ this gives
$$H^{ab}=(1+2\alpha X)F^{ab}+2\beta Y(\star_gF)^{ab}.$$
Here $\alpha,\beta$ are arbitrary fixed real parameters with units inverse to those of $X,Y$ when units are attached. This is a conditional Euler–Lagrange deduction for the stated mathematical model; it does not assign QED coefficients or assert that a field solves the equations. The variation alone gives no hyperbolicity, causal-cone, uniqueness, or well-posedness result.

## Statement references

[[def-emg-fx-nonlinear-lagrangian]]

[[lem-emg-lorentz-hodge-calculus]]

[[lem-emg-maxwell-action-variation]]

## Facts & Assumptions

**Given:** The Definition's smooth Lorentzian metric, fixed bundle connection sector, smooth curvature $F$, $C^2$ function $L$, and all compactly supported smooth global one-form variations.

[F1] [[def-emg-fx-nonlinear-lagrangian]] defines $X=-F_{ab}F^{ab}/4$, $Y=-F_{ab}(\star_gF)^{ab}/4$, $H^{ab}=L_XF^{ab}+L_Y(\star_gF)^{ab}$, and the relative source-free action; its fixed-sector variations satisfy $\delta F=da$ and its curvature is closed.

[F2] [[lem-emg-lorentz-hodge-calculus]] defines the Lorentzian Hodge map by the metric-orientation pairing. The symmetry of the induced two-form pairing gives $F_{ab}(\star_g\delta F)^{ab}=(\star_gF)^{ab}\delta F_{ab}$ at fixed $g$.

[F3] [[lem-emg-maxwell-action-variation]] proves that compactly supported connection variations may be integrated by parts on an arbitrary support and proves the local test-form argument needed to conclude that a continuous Euler–Lagrange coefficient vanishes when its integral against every compact test one-form is zero. Its linear-Maxwell equation is not substituted for the nonlinear equation here.

[A1] $F$ and the metric are smooth and $L\in C^2(\mathbb R^2)$, so $H$ is $C^1$ and $\nabla_aH^{ab}$ is continuous; stationarity is imposed for every permitted compactly supported one-form.

## Proof

1.1 At fixed $g$, variation of the contractions gives $\delta X=-\frac12F^{ab}\delta F_{ab}$. By [F2], $F_{ab}(\star_g\delta F)^{ab}=(\star_gF)^{ab}\delta F_{ab}$: in an oriented orthonormal coframe this follows from the component formula for $\star_g$ and the positive sign of exchanging the two antisymmetric index pairs of the volume tensor. Hence $\delta Y=-\frac12(\star_gF)^{ab}\delta F_{ab}$. The chain rule gives $\delta L=-\frac12H^{ab}\delta F_{ab}$. For a connection variation $a_b$, [F1] gives $\delta F_{ab}=2\nabla_{[a}a_{b]}$; antisymmetry of $H$ reduces the varied density to $-H^{ab}\nabla_a a_b$. [given, F1, F2, A1, algebra]

1.2 The connection-curvature construction in [F1] is locally $F=dA_i$ in every bundle chart. The exterior derivative satisfies $d^2=0$, so $dF=d^2A_i=0$ in each chart and hence globally. This equation is a curvature identity, not a second consequence of stationarity. [given, F1, algebra]

2.1 The field variation is compactly supported. Integrating the identity $\nabla_a(H^{ab}a_b)=(\nabla_aH^{ab})a_b+H^{ab}\nabla_aa_b$ and using the compact-divergence rule of [F3] yields
$$\delta S_L[a]=\int_M(\nabla_aH^{ab})a_b\,\mathrm{vol}_g.$$
No boundary term at infinity is used because the varied integrand has compact support. [given, F1, F3, step 1.1, algebra]

3.1 Put $P^b=\nabla_aH^{ab}$, which is continuous by [A1]. If $P^{b_0}$ were nonzero at a point in a chart, continuity would give a relatively compact coordinate ball on which that component has one strict sign. Choose a nonnegative smooth bump $\phi$ supported in the ball and positive near the point, set $a_{b_0}=\phi$ and all other coordinate components to zero, and extend by zero. The bump is smooth, for example by using $e^{-1/(r^2-|x|^2)}$ inside a coordinate ball of radius $r$ and zero outside; every boundary derivative vanishes because the exponential decays faster than every power. The integral in step 2.1 then has the strict sign of $P^{b_0}$ and is nonzero, contradicting stationarity. Thus $P^b=0$ in every chart. Conversely, $P=0$ makes the variation in step 2.1 zero for every allowed $a$. [given, A1, F3, step 2.1, construct, algebra]

4.1 For the displayed polynomial, $L_X=1+2\alpha X$ and $L_Y=2\beta Y$. Substitution into the definition of $H$ in [F1] gives the stated constitutive tensor. The proof derives no characteristic polynomial or principal symbol, so no hyperbolicity or causal-cone conclusion is available. [F1, algebra] ∎
## Remarks

The action uses the mathematical normalization $L=X$; physical SI factors require the inherited field-scaling convention before any physical adoption. Order reduction, when used in an effective model, is an additional approximation rather than an algebraic equivalence.

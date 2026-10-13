---
id: ex-sr-four-current-boost
kind: example
title: "Worked current boost law and coordinate versus rest density"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 10
deps: [thm-sr-tensor-and-current-transformation, def-lorentz-boost,
       lem-boost-is-proper-orthochronous-with-inverse,
       def-inertial-frame-and-inertial-chart,
       def-time-orientation-and-future-causal-sets,
       lem-timelike-cone-has-two-convex-components,
       def-causal-classification-of-lorentz-vectors,
       def-ck-tensor-field-on-minkowski-space,
       lem-inertial-chart-transitions-are-affine-lorentz]
dependency_roles:
  thm-sr-tensor-and-current-transformation: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-ck-tensor-field-on-minkowski-space: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation. In an inertial frame with coordinates
$(x^0,x^1,x^2,x^3)$ consider the constant vector field $U$ with components
$(U^0,U^1,U^2,U^3)=(5/4,3/4,0,0)$ on an open set $\Omega$
([[def-ck-tensor-field-on-minkowski-space]]), so that
$\eta_0(U,U)=-25/16+9/16=-1$ with $U^0>|U_{\mathrm{vec}}|=3/4$; $U$ is a
future timelike unit vector field. Let $\rho_0$ be a constant scalar field
and put $J:=\rho_0U$. Choose the primed inertial chart $x\prime=B_xx$,
where $B_x$ is the matrix of $B(\frac35e_1)$; it exists by
[[lem-inertial-chart-transitions-are-affine-lorentz]]. Thus the primed frame
basis has $e\prime_a=B(-\frac35e_1)e_a$ and the primed component columns
are $[U]_{x\prime}=B_x[U]_x$, $[J]_{x\prime}=B_x[J]_x$; these are changes
of components of the same fields. Then:

(i) $J$ has components $(J^0,J^1)=(5\rho_0/4,3\rho_0/4)$, and
$\partial_aJ^a=0$ because the components are constant; the continuity
equation of [[thm-sr-tensor-and-current-transformation]] reads
$\partial_0J^0+\partial_1J^1=0$ identically.

(ii) Under the passive boost $B=B(\frac35e_1)$ one computes $BU=e_0$: the
first component of $BU$ is
$(5/4)\bigl(5/4-(3/5)(3/4)\bigr)=(5/4)(16/20)=1$, the second is
$(5/4)\bigl(3/4-(3/5)(5/4)\bigr)=(5/4)\cdot0=0$, and the transverse
components vanish. Correspondingly $[J]_{x\prime}=(\rho_0,0,0,0)$: in the primed chart the
field $J$ has those components. Hence the coordinate density $J^0$ is
$5\rho_0/4$ in the original chart and $\rho_0$ in the chart in which $U=e\prime_0$,
while the scalar multiplier $\rho_0$ is the same in both; this is the worked
instance of clause (vii) of [[thm-sr-tensor-and-current-transformation]].

(iii) The general boost law of clause (vi) of
[[thm-sr-tensor-and-current-transformation]] reproduces (ii):
$J'^0=\gamma(J^0-\beta J^1)=(5/4)\bigl(5\rho_0/4-(3/5)(3\rho_0/4)\bigr)=(5/4)(16\rho_0/20)=\rho_0$
and
$J'^1=\gamma(J^1-\beta J^0)=(5/4)\bigl(3\rho_0/4-(3/5)(5\rho_0/4)\bigr)=0$.

The example carries no physical charge assignment: it illustrates the
transformation of a specified vector field, and the identification of $J$ with
a physical current is a model premise of the electromagnetic framework.

## Facts & Assumptions

**Given:** An inertial frame with coordinates $(x^0,x^1,x^2,x^3)$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, an open set $\Omega$, the constant future unit timelike vector field $U$ with components $(5/4,3/4,0,0)$, a constant scalar field $\rho_0$, and $J:=\rho_0U$.

[L1] A $\mathcal C^k$ vector field on $\Omega$ is a map assigning to each point a vector, with components in the inertial chart; for a constant field all partial derivatives of the components vanish, and for a $\mathcal C^1$ vector field $J$ in an inertial chart the continuity equation $\partial_aJ^a=0$ is equivalent to $\partial_0J^0+\sum_i\partial_iJ^i=0$; under the passive boost with parameter $\boldsymbol\beta$, $\Lambda=B(\boldsymbol\beta)$, the components transform as $J'^0=\gamma(J^0-\boldsymbol\beta\cdot J_{\mathrm{cov}})$ and $J'_{\mathrm{cov}}=J_{\mathrm{cov}}+\frac{\gamma-1}{|\boldsymbol\beta|^2}(\boldsymbol\beta\cdot J_{\mathrm{cov}})\boldsymbol\beta-\gamma\boldsymbol\beta J^0$ ([[thm-sr-tensor-and-current-transformation]]).

[L2] For a $\mathcal C^1$ future timelike vector field $U$ and a $\mathcal C^1$ scalar field $\rho_0$, $J=\rho_0U$ is a $\mathcal C^1$ vector field with first component $J^0=\rho_0U^0$; the normalized chart direction $u:=U/U^0$ satisfies $u^0=1$ and $\rho:=J^0=\rho_0U^0$ is the coordinate density, while $\rho_0$ is the scalar multiplier; $\rho=\rho_0$ holds exactly when $\rho_0(U^0-1)=0$, hence at points with $\rho_0\neq0$ exactly when $U^0=1$ ([[thm-sr-tensor-and-current-transformation]]).

[L3] For $\boldsymbol\beta=\beta e_1$ with $|\beta|<1$ the boost acts by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$ on the $(e_0,e_1)$ plane with $\gamma=(1-\beta^2)^{-1/2}$, and $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map ([[def-lorentz-boost]], [[lem-boost-is-proper-orthochronous-with-inverse]]).

[L4] In the frame, $e_0\in C^+$ and the coordinates identify the timelike sets: $T_+=\{v:v^0>|v_{\mathrm{vec}}|\}$, $T_-=\{v:v^0<-|v_{\mathrm{vec}}|\}$, with $C^+=T_+$; a nonzero vector with $\eta(v,v)<0$ is timelike, and $\eta(v,v)=-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2$ ([[def-inertial-frame-and-inertial-chart]], [[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]).



## Proof

**Proof technique:** direct.

1.1 By [L4], $\eta_0(U,U)=-(5/4)^2+(3/4)^2=(-25+9)/16=-1$, so $U$ is timelike, and $U^0=5/4>3/4=|U_{\mathrm{vec}}|$ places $U$ in $T_+=C^+$: $U$ is future timelike unit. Since $\rho_0$ is constant, [L2] gives $J=\rho_0U$ with components $(J^0,J^1,J^2,J^3)=\rho_0(5/4,3/4,0,0)=(5\rho_0/4,3\rho_0/4,0,0)$, and all partial derivatives of the components vanish; the sum $\partial_0J^0+\sum_i\partial_iJ^i$ is then a sum of vanishing terms, so the continuity equation $\partial_aJ^a=0$ holds by [L1]. [L1, L2, L4, algebra]

1.2 By [L3] with $\boldsymbol\beta=(3/5,0,0)$, $\gamma=5/4$: the first component of $BU$ is $(5/4)(5/4-(3/5)(3/4))=(5/4)(5/4-9/20)=(5/4)(16/20)=1$, the second is $(5/4)((3/4)-(3/5)(5/4))=(5/4)(3/4-3/4)=0$, and the transverse components of $U$ vanish, so $BU=e_0$. By linearity $BJ=\rho_0 e_0$ as an active image in $V$, and by the primed-chart component law [L1], $[J]_{x\prime}=B_x[J]_x=(\rho_0,0,0,0)$. Likewise $[U]_{x\prime}=(1,0,0,0)$, so $U=e\prime_0$ and $J=\rho_0e\prime_0$ intrinsically. This is clause (ii). [L2, L3, algebra]

2.1 For $\boldsymbol\beta=\frac35e_1$ the general law of [L1] reduces, since $J^2=J^3=0$ and $\boldsymbol\beta\cdot J_{\mathrm{cov}}=\frac35J^1$, to $J'^0=\gamma(J^0-\frac35J^1)$ and $J'^1=\gamma(J^1-\frac35J^0)$ (the correction term $(\gamma-1)J^1e_1$ combining with $J^1$ to give $\gamma J^1$). Substituting $\gamma=5/4$, $J^0=5\rho_0/4$ and $J^1=3\rho_0/4$: $J'^0=(5/4)\bigl(5\rho_0/4-(3/5)(3\rho_0/4)\bigr)=(5/4)(25\rho_0/20-9\rho_0/20)=(5/4)(16\rho_0/20)=\rho_0$ and $J'^1=(5/4)\bigl(3\rho_0/4-(3/5)(5\rho_0/4)\bigr)=(5/4)(3\rho_0/4-3\rho_0/4)=0$, reproducing the components of step 1.2; this is clause (iii). [L1, step 1.1, step 1.2, algebra]

3.1 Clause (i) is step 1.1, clause (ii) is step 1.2, and clause (iii) is step 2.1. Every entry is an exact rational evaluation of the boost matrix on the displayed components, and no physical identification of $J$ with a charge-current is made. [step 1.1, step 1.2, step 2.1] ∎

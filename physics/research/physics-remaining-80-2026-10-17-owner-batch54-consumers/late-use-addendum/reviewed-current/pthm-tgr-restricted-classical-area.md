---
id: pthm-tgr-restricted-classical-area
kind: physics-theorem
title: Conditional restricted classical area increase
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - post-tgr-smooth-horizon-energy-condition
  - thm-tgr-smooth-null-area
  - def-tgr-horizon-screen-family
  - def-countable-choice
  - post-emg-einstein-maxwell-equations
  - def-emg-lorentzian-forms
dependency_roles:
  post-tgr-smooth-horizon-energy-condition: physical-assumption
  thm-tgr-smooth-null-area: mathematical-premise
  def-tgr-horizon-screen-family: mathematical-premise
  def-countable-choice: mathematical-premise
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-lorentzian-forms: mathematical-premise
proof_strategy: direct
physical_scope: >
  A smooth classical Einstein–Maxwell solution with a specified future
  affine-complete null congruence, persistent compact spacelike cuts, and the
  adopted null energy condition on that congruence. The result is not a claim
  about arbitrary or nonsmooth event horizons, quantum states, or generalized
  entropy.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Complete 46-page review; §2, PDF pp. 3–5, the null-generator/Raychaudhuri focusing implication and the global predictability hypotheses used in the event-horizon area theorem."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Complete lecture notes; Chapter 7, equations (7.148)–(7.156), printed pp. 215–216 (PDF pp. 221–223), Kerr area and classical mechanics context; the local conditional proof is separate."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Complete 30-page review; §4.1, equations (4.1)–(4.2), printed pp. 20–21 (PDF pp. 21–22), horizon-area and thermodynamic-analogy context only."
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,o)$ be the smooth, oriented, time-oriented Lorentzian four-manifold
of [[def-emg-lorentzian-forms]], and let $U\subseteq M$ be open. For any
complete explicitly supplied named smooth classical matter-model instance
$\mathcal M=(\mathcal C_m,\mathcal E_m,\mathsf J_m,\mathsf T_m)$ of
[[post-tgr-smooth-horizon-energy-condition]], retain its specified matter-field
bundles, configuration fields, exact equations and constraints, constitutive
inputs, regularity, and additional domain or data hypotheses. Take a smooth
admitted configuration $\Psi\in\mathcal C_m[g,F]$ satisfying
$\mathcal E_m[g,F;\Psi]=0$ on $U$, and use the same source maps
$j=\mathsf J_m[g,F;\Psi]$ and $T^m=\mathsf T_m[g,F;\Psi]$. Assume the
equation-based Einstein–Maxwell equations and restricted total-stress null
energy condition of that postulate for this model and configuration. The
claim is uniform over these supplied named models, without requiring a
matter action or choosing a particular matter closure. Let $H\subset U$ be a
smooth embedded null hypersurface with a smooth nowhere-zero future null
generator field $k$ satisfying $\nabla_k k=0$. In the definitions of
[[def-tgr-horizon-screen-family]], $k$ is affine and its screen expansion is
$\theta=\operatorname{tr}_{\bar g}B$.

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]]. Let
$S_0\subset H$ be a compact smooth embedded spacelike two-dimensional
submanifold transverse to $k$, and let $\lambda_0\in\mathbb R$. Suppose a
smooth map
$$\Phi:[\lambda_0,\infty)\times S_0\to H$$
satisfies $\Phi(\lambda_0,x)=x$ and
$\partial_\lambda\Phi(\lambda,x)=k_{\Phi(\lambda,x)}$, with each
$\Phi_\lambda:=\Phi(\lambda,\cdot)$ an embedding whose image $S_\lambda$ is
compact and spacelike. Thus the same affine parameter runs for every future
value and the cuts persist without a caustic or endpoint on this domain. Define
the induced Riemannian metric $q_\lambda:=\Phi_\lambda^*g$ on $S_0$ and the
area
$$A_H(\lambda):=\int_{S_0}\mu_{q_\lambda}.$$
Then $\theta\ge0$ on every future cut,
$$A_H'(\lambda)=\int_{S_0}\theta(\Phi(\lambda,x))\,\mu_{q_\lambda}(x)=\int_{S_\lambda}\theta\,dA\ge0\qquad(\lambda>\lambda_0),$$
and $A_H(\lambda_2)\ge A_H(\lambda_1)$ whenever
$\lambda_2\ge\lambda_1\ge\lambda_0$.

This is a conditional deduction for the stated smooth classical model and
future-complete congruence. It makes no assertion about an arbitrary event
horizon, a rough null hypersurface, quantum energy conditions, or a horizon
entropy.

## Facts & Assumptions

**Given:** The fully specified named model $\mathcal M$ and its admitted
smooth configuration $\Psi$, including all actual model equations,
constraints and source maps; the equation-based Einstein–Maxwell field law
and total-stress null energy condition adopted for that same configuration
by [[post-tgr-smooth-horizon-energy-condition]]; a future affine null
generator and its smooth flow with compact spacelike cuts for every
$\lambda\ge\lambda_0$; and the stated $\mathrm{AC}_\omega$ assumption.

[F1] [[post-tgr-smooth-horizon-energy-condition]] is parameterized by the
complete named matter-model instance $\mathcal M$ and an admitted
configuration solving its actual $\mathcal E_m=0$. Its sources are
$j=\mathsf J_m[g,F;\Psi]$ and $T^m=\mathsf T_m[g,F;\Psi]$. For this same
configuration it adopts
$G_{ab}+\Lambda g_{ab}=(8\pi G_N/c^4)T_{ab}$ and
$T_{ab}k^ak^b\ge0$ on the specified smooth future null generator, with
$T_{ab}=T^{\mathrm{EM}}_{ab}+T^m_{ab}$.

[F2] [[post-emg-einstein-maxwell-equations]] defines
$G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Rg_{ab}$ and
$\kappa_E=8\pi G_N/c^4>0$ in the equation-based model.

[F3] [[def-emg-lorentzian-forms]] fixes
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and
$\operatorname{Ric}_{bd}=R^a{}_{bad}$, the same curvature and Ricci
convention used by [[thm-tgr-smooth-null-area]].

[F4] [[def-tgr-horizon-screen-family]] defines a smooth null hypersurface,
its smooth future null generator, the affine condition $\nabla_k k=0$, the
positive screen metric on $k^\perp/\mathbb Rk$, its deformation form $B$, and
the expansion $\theta=\operatorname{tr}_{\bar g}B$.

[F5] [[def-countable-choice]] states $\mathrm{AC}_\omega$: each countable
family of nonempty sets has a choice function.

[F6] [[thm-tgr-smooth-null-area]]: under $\mathrm{AC}_\omega$, a smooth
future affine null flow from a compact spacelike cut, with every future cut a
compact spacelike embedding and $\operatorname{Ric}(k,k)\ge0$ on the full
half-line, has $\theta\ge0$ and satisfies the displayed derivative and
monotonicity formulas. Its conditional proof is authored in the current
mathematical carrier; its draft status and lack of independent approval do not
remove its exact stated conditional interface.

[A1] The named model's actual field variables, equations, constraints and
source maps are fixed input, and $\Psi$ satisfies them on $U$. The field
equation and null energy inequality for its total stress hold at every point
of the chosen generator flow; $G_N>0$ and $c>0$.

[A2] The map $\Phi$ and all its compact spacelike embedded cuts exist for the
whole future half-line $[\lambda_0,\infty)$; no finite-affine-parameter
breakdown occurs on this specified domain.

[A3] The Axiom of Countable Choice $\mathrm{AC}_\omega$ in [F5] is retained;
no stronger choice principle is assumed.

## Proof

1.1 For the supplied model and admitted configuration in [F1] and [A1], use
$T=T^{\mathrm{EM}}+\mathsf T_m[g,F;\Psi]$ from that same configuration.
Set $\kappa_E:=8\pi G_N/c^4>0$ and contract its adopted field equation
from [F1]–[F2] with $k^ak^b$. Since $k$ is null,
$g_{ab}k^ak^b=0$, so both the cosmological term and the scalar-curvature
term in $G_{ab}k^ak^b$ vanish. The resulting identity is
$\operatorname{Ric}_{ab}k^ak^b=\kappa_E T_{ab}k^ak^b\ge0$ by [A1]. The
curvature convention in [F3] identifies this Ricci contraction with the one
in [F6]; hence the required null-convergence hypothesis holds along the full
flow. [given, F1, F2, F3, F6, A1, algebra]

2.1 The geometric assumptions [F4], [A2], and [A3] match the screen,
affine-flow, persistent-cut, and choice hypotheses of [F6]. Applying that
mathematical theorem gives $\theta\ge0$ and the stated area derivative
identity; its area density is positive, so $A_H'(\lambda)\ge0$ for
$\lambda>\lambda_0$. Its endpoint continuity and monotonicity conclusion
give $A_H(\lambda_2)\ge A_H(\lambda_1)$ for every
$\lambda_2\ge\lambda_1\ge\lambda_0$. This is a model deduction under the
adopted postulates, not an inference from observation. [given, F4, F5, F6, A2, A3, step 1.1, algebra] ∎

## Remarks

The Raychaudhuri and area-variation arguments are contained in the exact
conditional mathematical supplier [F6]. The physical step here is the null
contraction of the adopted Einstein equation. A different matter model, a
failure of the stated energy condition, or a generator that breaks down
before the full future half-line is outside this conclusion.

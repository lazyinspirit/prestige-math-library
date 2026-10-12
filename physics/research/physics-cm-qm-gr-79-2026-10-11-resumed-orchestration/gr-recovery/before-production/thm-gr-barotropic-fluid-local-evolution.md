---
id: thm-gr-barotropic-fluid-local-evolution
kind: theorem
title: "Local evolution for a strict barotropic perfect fluid: smooth constrained data admit a development, unique up to a data-fixing isometry"
status: draft
origin: session
domain: mathematics
dependency_level: 24
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-perfect-fluid-matter-model, def-gr-barotropic-enthalpy-variable, lem-gr-barotropic-fluid-symmetric-hyperbolic-system, thm-gr-local-geometric-development, thm-gr-constraint-equations-in-normal-frame, lem-gr-harmonic-initial-data-construction, prop-gr-dust-and-perfect-fluid-conservation-equations, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  lem-gr-barotropic-fluid-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  lem-gr-harmonic-initial-data-construction: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.1 (Local Existence Theorems for the Einstein Equations): harmonic-map gauge, the reduced initial data constructed from (h,chi), the propagation of the gauge by the homogeneous wave system for the gauge residual Delta^alpha, and the local existence theorem"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and Dependent Choice ([[def-dependent-choice]]).

Let a perfect-fluid model have smooth equation of state $p=p(\epsilon)$ on an
open interval $J$ with $\epsilon+p>0$ and $0<p'(\epsilon)<1$
([[def-gr-perfect-fluid-matter-model]]). Let
$(\Sigma,h,K_2,\epsilon_0,n_0)$ be smooth initial data: a three-manifold
$\Sigma$ with Riemannian metric $h$, symmetric $2$-tensor $K_2$, a smooth
function $\epsilon_0:\Sigma\to J$ and a smooth future-directed unit timelike
vector field $n_0$ on $\Sigma$ (not required to be normal). Suppose the
constraint equations of [[thm-gr-constraint-equations-in-normal-frame]] hold on
$\Sigma$ with the stress-energy tensor computed from $(\epsilon_0,n_0)$. Then
the data admit a local development in the sense of
[[thm-gr-local-geometric-development]]: a smooth Lorentzian metric $g$, a
smooth function $\epsilon$ and a smooth future-directed unit timelike field $n$
near $\Sigma$ satisfying
$$G_{ab}+\Lambda g_{ab}=\kappa\bigl((\epsilon+p)n_an_b+p\,g_{ab}\bigr),\qquad D\epsilon+(\epsilon+p)\vartheta=0,\qquad (\epsilon+p)a^b+h^{ba}\partial_ap=0$$
with $p=p(\epsilon)$ and $D,\vartheta,a,h$ as in
[[def-gr-perfect-fluid-matter-model]], with $\Sigma$ spacelike of induced data
$(h,K_2)$ and matter data $(\epsilon_0,n_0)$; and any two developments of the
same data agree near $\Sigma$ up to a data-fixing time-orientation-preserving
isometry.

## Facts & Assumptions

**Given:** Countable and Dependent Choice and the EOS data and the smooth constrained initial data.

[L1] The fluid equations in the enthalpy variable $r$ of [[def-gr-barotropic-enthalpy-variable]] are equivalent to the stated fluid equations, and the combined Einstein-fluid system with the reduced Einstein equation is a first-order quasilinear symmetric hyperbolic system with positive definite time matrix and zeroth-order coupling ([[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]] clauses (a),(c)).

[L2] The stress-energy tensor is divergence-free exactly on the solutions of the fluid equations ([[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]] clause (a), [[prop-gr-dust-and-perfect-fluid-conservation-equations]]).

[L3] The abstract development theorem applies to matter sectors with (L1)--(L2): it produces a local development from constrained data, places $\Sigma$ Cauchy on its domain of dependence, and gives uniqueness up to a data-fixing isometry ([[thm-gr-local-geometric-development]]).

[L4] The initial jet of the metric and of the fluid variables is determined by the data as in [[lem-gr-harmonic-initial-data-construction]] and the prescribed values of $(\epsilon_0,n_0)$; $n_0$ being future and unit on the spacelike $\Sigma$ persists in a neighborhood. [L4]

## Proof

**Proof technique:** direct.

1.1 (Hypotheses.) By [L1] the fluid sector has a first-order quasilinear symmetric hyperbolic reduction with zeroth-order metric coupling; by [L2] its stress tensor is on-shell divergence-free. [L1, L2]

2.1 (Application.) Applying [L3] to the matter sector described by [L1]--[L2] and to the data $(\Sigma,h,K_2)$ with matter data $(\epsilon_0,n_0)$, whose jet is fixed by [L4], gives the asserted local development, the causal statements and the uniqueness up to a data-fixing isometry. [step 1.1, L3, L4] ∎

## Remarks

- **Scope.** The theorem is a strict interior-fluid statement: it assumes $\epsilon+p>0$ and $0<p'<1$ throughout the relevant range and does not cover shocks, vacuum boundaries or a vanishing sound speed.

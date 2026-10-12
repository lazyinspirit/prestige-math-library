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

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Fix $\Lambda\in\mathbb R$, $\kappa>0$ and one smooth EOS $p=p(\epsilon)$ on an open interval $J$ with $\epsilon+p>0$ and $0<p'(\epsilon)<1$ ([[def-gr-perfect-fluid-matter-model]]). Let $\Sigma$ be a smooth three-manifold with smooth metric $h$, symmetric tensor $K_2$, density $\epsilon_0:\Sigma\to J$ and tangent field $v_0$ with $h(v_0,v_0)<1$. These specify the future unit initial velocity
$$U_0=W_0(N+v_0),\qquad W_0=(1-h(v_0,v_0))^{-1/2}$$
in $\mathcal V=\mathbb RN\oplus T\Sigma$, with metric $g_0(aN+X,bN+Y)=-ab+h(X,Y)$. Require the constraints of [[thm-gr-constraint-equations-in-normal-frame]] for
$$T_0=(\epsilon_0+p(\epsilon_0))U_0^{\flat_{g_0}}\otimes U_0^{\flat_{g_0}}+p(\epsilon_0)g_0.$$
Then a smooth time-oriented local development has metric $g$, density $\epsilon$ and future unit fluid velocity $u$ satisfying
$$G_{ab}+\Lambda g_{ab}=\kappa\left[(\epsilon+p)u_au_b+pg_{ab}\right],\qquad D\epsilon+(\epsilon+p)\vartheta=0,\qquad (\epsilon+p)a^b+\Pi^{ba}\partial_ap=0.$$
Here $D=\nabla_u$, $\vartheta=\nabla_a u^a$, $a=\nabla_u u$ and $\Pi^{ab}=g^{ab}+u^au^b$. Initial geometric data are $(h,K_2)$ and initial matter data are $(\epsilon_0,U_0)$ under $N\mapsto n$, $X\mapsto i_*X$. Arbitrary smooth subluminal tilt is allowed. The initial surface lies in the interior of its intrinsic domain of dependence; its interior Cauchy neighborhood is globally hyperbolic. Any two developments of this same EOS and complete data agree near the entire initial surface by a data-fixing future isometry matching density and velocity. The neighborhood may have position-dependent time width; shocks, vacuum boundaries and vanishing sound speed are outside this strict interior-fluid statement ([[thm-gr-local-geometric-development]]).

## Facts & Assumptions

**Given:** Countable and Dependent Choice, fixed constants and EOS, and smooth complete constrained data including the abstract bundle velocity.

[L1] Fix an enthalpy integration reference as in [[def-gr-barotropic-enthalpy-variable]]. The actual coordinate symmetrizer, smooth hyperboloid velocity reconstruction, initialization and matter recovery/conservation on the reduced solution are supplied by [[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]]. The fluid conservation identity is [[prop-gr-dust-and-perfect-fluid-conservation-equations]].

[L2] The fixed-model development theorem supplies the complete harmonic metric jet, reduced existence, normal constraint recovery, normal-collar patching, intrinsic Cauchy neighborhood and complete-data isometry uniqueness ([[thm-gr-local-geometric-development]]). The special metric jet in [[lem-gr-harmonic-initial-data-construction]] uses comparison metric $-dt^2+h$, rather than the flat comparison employed for this initializer.

[L3] The constraints are the geometric normal residuals for exactly the initial stress displayed above ([[thm-gr-constraint-equations-in-normal-frame]], [[def-gr-perfect-fluid-matter-model]]).

## Proof

1.1 (Full fluid contract.) In the initially orthogonal metric gauge, $U_0$ gives $u^0=W_0$ and $u^i=W_0v_0^i$. Thus $(r(\epsilon_0),u_0^i)$ initializes every independent fluid variable in [L1]'s reduction, while its positive-branch reconstruction enforces unit future normalization. That supplier gives smooth symmetric coefficients and positivity for the initial timelike conormal, and proves full fluid recovery and conserved stress on the reduced metric before Einstein recovery. Together with [L2]'s complete metric jet and [L3]'s constraints, every fixed-model hypothesis of [L2] holds. [given, L1, L2, L3, algebra]

2.1 (Development and comparison.) Apply [L2]. The resulting full solution has exactly the stated geometric and bundle matter data and satisfies the displayed Einstein-fluid equations. Its normal-collar patching and intrinsic Cauchy restriction give the claimed neighborhood and causal properties. Uniqueness uses the same EOS and full density/velocity data and yields a future data-fixing isometry matching both fields. No vanishing-sound-speed branch has been inferred. [step 1.1, L2] ∎
## Remarks

A timelike initial velocity is specified in the abstract Lorentz bundle over the Riemannian surface; it is not an intrinsic timelike vector of its tangent bundle. No small-tilt restriction or uniform noncompact width is required.

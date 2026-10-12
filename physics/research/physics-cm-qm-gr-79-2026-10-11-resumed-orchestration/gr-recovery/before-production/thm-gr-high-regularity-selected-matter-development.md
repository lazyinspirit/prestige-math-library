---
id: thm-gr-high-regularity-selected-matter-development
kind: theorem
title: "High-regularity local developments for the selected matter sectors: vacuum with Lambda, scalar, strict barotropic fluid and geodesic dust"
status: draft
origin: session
domain: mathematics
dependency_level: 25
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-harmonic-gauge-and-reduced-equations, thm-gr-reduced-einstein-local-existence, thm-gr-harmonic-constraint-propagation, thm-gr-local-geometric-development, thm-gr-local-geometric-uniqueness, thm-gr-scalar-field-local-evolution, thm-gr-barotropic-fluid-local-evolution, thm-gr-dust-local-evolution, def-gr-scalar-field-matter-model, def-gr-perfect-fluid-matter-model, def-gr-dust-matter-model, def-countable-choice, def-dependent-choice]
dependency_roles:
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  thm-gr-reduced-einstein-local-existence: mathematical-premise
  thm-gr-harmonic-constraint-propagation: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-local-geometric-uniqueness: mathematical-premise
  thm-gr-scalar-field-local-evolution: mathematical-premise
  thm-gr-barotropic-fluid-local-evolution: mathematical-premise
  thm-gr-dust-local-evolution: mathematical-premise
  def-gr-scalar-field-matter-model: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-dust-matter-model: mathematical-premise
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

Let $\Lambda\in\mathbb R$, $\kappa>0$ and $c>0$ be constants, let $\Sigma$ be a smooth
three-manifold with smooth Riemannian metric $h$ and symmetric $2$-tensor $K$,
and suppose smooth matter initial data and a matter sector are given in one of
the following four branches, with the constraint equations of
[[thm-gr-constraint-equations-in-normal-frame]] satisfied:

1. **vacuum with cosmological constant:** no matter fields; the constraints
   read $S_h+(\operatorname{tr}_hK)^2-|K|^2_h=2\Lambda$ and
   $\operatorname{div}_hK-d\operatorname{tr}_hK=0$;
2. **scalar field:** a model $(\varphi,V,K_\phi)$ as in
   [[def-gr-scalar-field-matter-model]] with smooth potential and initial data
   $(\varphi_0,\pi_0)$;
3. **strict barotropic perfect fluid:** a model with smooth $p=p(\epsilon)$ and
   $\epsilon+p>0$, $0<p'(\epsilon)<1$, with initial data
   $(\epsilon_0,n_0)$ ([[def-gr-perfect-fluid-matter-model]]);
4. **geodesic dust:** an energy-coefficient density $\varepsilon_0\ge0$
   with prescribed smooth future unit velocity $U_0$, as a section of
   $\mathbb RN\oplus T\Sigma$ with metric $-ab+h(X,Y)$.
   On positive-density regions this is the model $(\varepsilon,u)$ of
   [[def-gr-dust-matter-model]]; through zero-density regions its smooth
   unit velocity is separately prescribed and required to remain geodesic.
   Its source is $T=\varepsilon u^\flat\otimes u^\flat$.

Then in each branch there is a smooth local development with the properties
established in the corresponding item, [[thm-gr-scalar-field-local-evolution]]
(branch 2), [[thm-gr-barotropic-fluid-local-evolution]] (branch 3),
[[thm-gr-dust-local-evolution]] (branch 4) and, for branch 1, the vacuum
instance of [[thm-gr-local-geometric-development]]: a smooth Lorentzian metric
$g$ with $\Sigma$ spacelike of induced data $(h,K)$, solving
$G_{ab}+\Lambda g_{ab}=\kappa T_{ab}$ with the branch's stress tensor and matter
equations, with $\Sigma$ in the interior of its domain of dependence, and with
uniqueness near $\Sigma$ up to a data-fixing time-orientation-preserving
isometry.

## Facts & Assumptions

**Given:** Countable and Dependent Choice and the four branches with their smooth constrained data.

[L1] Reduced local existence and constraint propagation for the vacuum branch ([[thm-gr-reduced-einstein-local-existence]], [[thm-gr-harmonic-constraint-propagation]]).

[L2] The abstract development and uniqueness theorems, applicable to every matter sector with a symmetric hyperbolic reduction and on-shell conservation ([[thm-gr-local-geometric-development]], [[thm-gr-local-geometric-uniqueness]]).

[L3] The branch theorems verifying the hypotheses and producing the developments: scalar [[thm-gr-scalar-field-local-evolution]], barotropic fluid [[thm-gr-barotropic-fluid-local-evolution]], dust [[thm-gr-dust-local-evolution]].

## Proof

**Proof technique:** direct.

1.1 (Vacuum branch.) The vacuum equations are the reduced equations with $T=0$; [[thm-gr-reduced-einstein-local-existence]] gives a smooth reduced solution from the initial jet, and [[thm-gr-harmonic-constraint-propagation]] turns it into a solution of the field equation because the constraints hold; the causal and uniqueness conclusions are those of [[thm-gr-local-geometric-development]]. [L1, L2]

2.1 (Scalar and strict-fluid branches.) Their branch theorems verify the symmetric hyperbolic matter hypothesis and on-shell conservation of [L2], then give exactly the stated local developments and uniqueness from the constrained data. Countable Choice is available for their local analytic construction; smooth compactly supported chart data belong to every chosen integer $H^s$, $s\ge5$, and smooth persistence recovers the smooth branch. [given, L2, L3, algebra]

3.1 (Geodesic dust branch.) Put $\rho_0:=\varepsilon_0/c^2$ and apply [[thm-gr-dust-local-evolution]] to this mass-normalized density and the prescribed $U_0$. Its initial tensor is $\rho_0c^2U_0^\flat\otimes U_0^\flat=\varepsilon_0U_0^\flat\otimes U_0^\flat$, so its constraints are exactly the present constraints. It gives an independent smooth frame-reduction development with its common-flow uniqueness and variable-width patching, without invoking the abstract harmonic matter hypothesis for dust. Recover $\varepsilon=c^2\rho$; constant scaling preserves continuity, geodesic velocity, nonnegativity, the empty-region branch and the stress tensor. Its causal and isometry conclusions are therefore precisely the stated ones. [given, L3, algebra] ∎



- **Role.** This is the mathematical form of the Gr14 headline claim: the full high-regularity symmetric hyperbolic reduction yields local Einstein-matter developments in the selected branches. The physical reading and the scope exclusions are recorded in [[pthm-gr-high-regularity-local-development]] and [[rem-gr-high-regularity-scope]].

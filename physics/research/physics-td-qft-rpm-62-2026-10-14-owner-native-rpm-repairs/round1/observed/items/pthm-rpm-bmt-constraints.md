---
id: pthm-rpm-bmt-constraints
kind: physics-theorem
title: BMT orthogonality and conserved spin length
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Conditional constraint preservation and restricted-ansatz coefficient matching for the adopted classical BMT polarization model on a prescribed external field. No measured value of the gyromagnetic ratio, quantum-spin derivation, or empirical validation is asserted."
empirical_premises: []
deps:
  - def-countable-choice
  - def-em-electromagnetic-tensor
  - def-rpm-charge-spin-model
  - lem-rpm-bmt-transport-algebra
  - pthm-rpm-external-charge-action-equivalence
  - post-rpm-bmt-dipole-model
dependency_roles:
  def-countable-choice: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-rpm-charge-spin-model: formulation-prerequisite
  lem-rpm-bmt-transport-algebra: mathematical-premise
  pthm-rpm-external-charge-action-equivalence: physical-result
  post-rpm-bmt-dipole-model: physical-assumption
sources:
  references:
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: "Section “Relativistic Spin Precession: the BMT Equation”, covariant four-spin constraint and coefficient determination; the conditional model proof is given locally."
    - title: V. Bargmann, L. Michel and V. L. Telegdi, Precession of the Polarization of Particles Moving in a Homogeneous Electromagnetic Field, Physical Review Letters 2 (1959), 435–437
      url: https://www.ihes.fr/~vergne/LouisMichel/publications/PhysRevLett.2.435.pdf
      locator: Both pages of the complete author-hosted paper; the flat homogeneous-field polarization law is source context, while the curved model remains an adopted postulate.
verification: {}
---

## Statement

Assume $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the canonical tangent-bundle and connection suppliers used by the BMT transport and charged-action equivalence. No full Axiom of Choice is assumed.

Adopt the charged-body quantities and SI tensor convention of [[def-rpm-charge-spin-model]] and [[def-em-electromagnetic-tensor]], the polarization transport postulate [[post-rpm-bmt-dipole-model]], and its translational equation obtained from [[pthm-rpm-external-charge-action-equivalence]]. On a local potential domain, assume the finite curve segments are stationary for the adopted action. Let $z$ be a $C^2$ future timelike proper-time curve, $U=dz/d\tau$, $g(U,U)=-c^2$, with prescribed continuous alternating field $F$ along it. Let $m>0$, $q\in\mathbb R$, $g_s\in\mathbb R$, and an initial $C^1$ spin vector satisfy $g(s,U)=0$. Put $\alpha=q/m$, $G=g_s/2$, and $\kappa=g(s,F^\sharp(U))$. The adopted equations and action result give

$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left[G F^\sharp(s)+(1-G)\frac{U}{c^2}\kappa\right].$$

Then $g(s,U)=0$ and $g(s,s)$ are constant along every solution. In the restricted ansatz $D_\tau s=\alpha[aF^\sharp(s)+bU\kappa/c^2]$, preservation for arbitrary initial data requires $a+b=1$ when $\alpha\ne0$; matching the specified rest-frame law $d\mathbf s/d\tau=\alpha G(\mathbf s\times\mathbf B)$ with $F_{ij}=\epsilon_{ijk}B_k$ then gives $a=G$, $b=1-G$. This coefficient conclusion is only within that ansatz. If $\alpha=0$, the rest-frame matching condition does not identify $a,b$.

## Facts & Assumptions

[A3] [[def-countable-choice]]: assume only countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure and inherited BMT/action-equivalence supplier hypotheses.

**Given:** The adopted classical BMT model, $c>0$, constant $m>0,q,g_s$, a future timelike proper-time curve, a prescribed alternating field, and an initially orthogonal spin vector.

[A1] The adopted BMT transport and Lorentz-force translation equations, with $G=g_s/2$ and $\kappa=g(s,F^\sharp(U))$. [[post-rpm-bmt-dipole-model]]

[A2] The trajectory is stationary under the adopted action on a local potential domain, and the initial spin satisfies $g(U,s)=0$.

[F1] The SI field tensor has $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ in the named inertial convention; the charged-body definition uses the same convention. [[def-em-electromagnetic-tensor]]; [[def-rpm-charge-spin-model]]

[F2] For the restricted two-term transport ansatz, metric compatibility and skew-adjointness give $D_\tau g(U,s)=\alpha(1-a-b)\kappa$; if $a+b=1$, orthogonality and spin norm are preserved, and rest-frame coefficient matching determines $a=G$ when $\alpha\ne0$. [[lem-rpm-bmt-transport-algebra]]

[F3] Under [A3], stationarity of the adopted local charged-particle action implies $mD_\tau U=qF^\sharp(U)$ on the stated finite fixed-endpoint potential-domain model. [[pthm-rpm-external-charge-action-equivalence]]

## Proof

**Proof technique:** direct.

1.1 In the lemma [F2], set $a=G$ and $b=1-G$. The postulate [A1] has exactly this displayed transport equation because $-(G-1)=1-G$, and [F3] gives the matching translation equation $D_\tau U=\alpha F^\sharp(U)$. Thus $a+b=1$ in the lemma; its derivative identity gives $D_\tau g(U,s)=0$. The initial value is zero by [A2], hence orthogonality is preserved. [given, A3, A1, A2, F2, F3, algebra]

2.1 With $g(U,s)=0$ from step 1.1 and [A2], the same lemma gives $\tfrac12D_\tau g(s,s)=g(s,D_\tau s)=0$: the $F^\sharp$ term vanishes by skew-adjointness, and the term proportional to $U$ vanishes by orthogonality. Thus $g(s,s)$ is constant. [given, A3, A2, F2, step 1.1, algebra]

3.1 In the general ansatz, [F2] shows that for $\alpha\ne0$, preservation for arbitrary $\kappa$ requires $a+b=1$. In the rest frame, the spatial comparison in [F2] gives $a=G$ when the stipulated target law holds for every spatial $\mathbf s,\mathbf B$; substituting into $a+b=1$ gives $b=1-G$. If $\alpha=0$, both transport equations vanish and impose no coefficient condition. This establishes uniqueness only in the stated ansatz and model. [given, A3, F1, F2, step 1.1, algebra] ∎

## Remarks

This is a conditional deduction inside the adopted classical transport model. The original BMT treatment is flat and homogeneous-field; it does not prove the separately adopted curved or varying-field law, and this theorem makes no quantum or empirical claim.

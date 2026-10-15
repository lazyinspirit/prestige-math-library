---
id: ex-rpm-bmt-fw-and-g-two
kind: example
title: BMT G=0 Fermi–Walker and G=1 shared-generator cases
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact parameter specializations of the adopted classical BMT transport model: $g_s=0$ gives Fermi–Walker transport on the orthogonal spin space, and $g_s=2$ makes the same field generator act on $U$ and $s$. These are model deductions, not measured cases."
empirical_premises: []
deps:
  - def-countable-choice
  - def-rpm-charge-spin-model
  - pthm-rpm-external-charge-action-equivalence
  - post-rpm-bmt-dipole-model
  - pthm-rpm-bmt-constraints
dependency_roles:
  def-countable-choice: mathematical-premise
  def-rpm-charge-spin-model: formulation-prerequisite
  pthm-rpm-external-charge-action-equivalence: physical-result
  post-rpm-bmt-dipole-model: physical-assumption
  pthm-rpm-bmt-constraints: physical-result
sources:
  references:
    - title: "University of Virginia, Relativistic Spin Precession: the BMT Equation, Electromagnetic Theory lecture"
      url: https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_71_g-2.html
      locator: Full BMT lecture section, including the four-vector transport equation and rest-frame precession interpretation; the two parameter substitutions are verified here.
    - title: V. Bargmann, L. Michel and V. L. Telegdi, Precession of the Polarization of Particles Moving in a Homogeneous Electromagnetic Field, Physical Review Letters 2 (1959), 435–437
      url: https://www.ihes.fr/~vergne/LouisMichel/publications/PhysRevLett.2.435.pdf
      locator: Complete two-page author-hosted article; historical flat homogeneous-field context only.
verification: {}
---

## Example

Assume $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the canonical tangent-bundle and connection suppliers used by the BMT transport and charged-action equivalence. No full Axiom of Choice is assumed.

Use the charged-body conventions and adopted BMT transport equation of [[def-rpm-charge-spin-model]] and [[post-rpm-bmt-dipole-model]]. On a local potential domain, take the trajectory stationary under the action postulate so that [[pthm-rpm-external-charge-action-equivalence]] supplies its translation equation. Let $U$ be future timelike, $g(U,U)=-c^2$, and $g(U,s)=0$. Write $\alpha=q/m$, $G=g_s/2$, $\kappa=g(s,F^\sharp(U))$, and $a=D_\tau U=\alpha F^\sharp(U)$. The BMT law is
$$D_\tau s=\alpha\left[GF^\sharp(s)-(G-1)\frac{U\kappa}{c^2}\right].$$

(a) If $g_s=0$ ($G=0$), then $D_\tau s=Ug(a,s)/c^2$, the Fermi–Walker transport law on $U^\perp$.

(b) If $g_s=2$ ($G=1$), then $D_\tau s=\alpha F^\sharp(s)$ while $D_\tau U=\alpha F^\sharp(U)$, so the same linear field operator transports both vectors. Both parameter cases preserve orthogonality and spin norm by [[pthm-rpm-bmt-constraints]].

## Facts & Assumptions

[A3] [[def-countable-choice]]: assume only countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure and inherited BMT/action-equivalence supplier hypotheses.

**Given:** The adopted BMT and Lorentz-force equations, $m>0$, constant $q,g_s$, and an initially orthogonal spin vector.

[A2] The example selects the model parameters $G=0$ and $G=1$ in separate cases and assumes the initial spin is orthogonal to $U$.

[A1] The BMT transport law and translational Lorentz-force equation are adopted model equations. [[post-rpm-bmt-dipole-model]]

[F1] The spin remains orthogonal to $U$ and its norm is constant within this model. [[pthm-rpm-bmt-constraints]]

[F2] The model spin is a classical polarization vector and $g_s$ is a primitive dimensionless parameter; no measured value or quantum derivation is supplied. [[def-rpm-charge-spin-model]]

[F3] Under [A3], the adopted action model gives $a=D_\tau U=(q/m)F^\sharp(U)$. [[pthm-rpm-external-charge-action-equivalence]]

## Verification

**Proof technique:** direct.

1.1 In the $G=0$ case of [A2], [A1] gives $D_\tau s=\alpha U\kappa/c^2$. By [F3] and skew-adjointness from [F1], $g(a,s)=\alpha g(F^\sharp(U),s)=\alpha\kappa$. Hence $D_\tau s=Ug(a,s)/c^2$. The general Fermi–Walker expression subtracts $a g(U,s)/c^2$, which is zero by [A2] and [F1], proving (a). [given, A3, A1, A2, F1, F3, algebra]

1.2 In the $G=1$ case of [A2], [A1] has zero term proportional to $U$ and $D_\tau s=\alpha F^\sharp(s)$, while [F3] gives $D_\tau U=\alpha F^\sharp(U)$. Thus both vectors are acted on by the same linear map $\alpha F^\sharp$ along the worldline. [given, A3, A1, A2, F2, F3, algebra]

2.1 Applying [F1] to both parameter choices confirms that the initial constraint and spin norm remain unchanged; $G=0$ and $G=1$ are selected model parameters only, with no empirical inference. [F1, F2, step 1.1, step 1.2] ∎

## Remarks

The $G=0$ branch is Fermi–Walker transport for the prescribed Lorentz-force acceleration. The $G=1$ branch is a shared-generator statement; it does not claim $s=U$ or identify the polarization with a body angular-momentum moment.

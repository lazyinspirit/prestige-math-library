---
id: pthm-rpm-bmt-constraints
kind: physics-theorem
title: BMT orthogonality and conserved spin length
status: published
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Assume $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the canonical tangent-bundle and connection suppliers used by the BMT transport and charged-action equivalence. No full Axiom of Choice is assumed.

Adopt the charged-body quantities and SI tensor convention of [[def-rpm-charge-spin-model]] and [[def-em-electromagnetic-tensor]], the polarization transport postulate [[post-rpm-bmt-dipole-model]], and its translational equation obtained from [[pthm-rpm-external-charge-action-equivalence]]. On a local potential domain, assume the finite curve segments are stationary for the adopted action. Let $z$ be a $C^2$ future timelike proper-time curve, $U=dz/d\tau$, $g(U,U)=-c^2$, with prescribed continuous alternating field $F$ along it. Let $m>0$, $q\in\mathbb R$, $g_s\in\mathbb R$, and an initial $C^1$ spin vector satisfy $g(s,U)=0$. Put $\alpha=q/m$, $G=g_s/2$, and $\kappa=g(s,F^\sharp(U))$. The adopted equations and action result give

$$D_\tau U=\alpha F^\sharp(U),\qquad D_\tau s=\alpha\left[G F^\sharp(s)+(1-G)\frac{U}{c^2}\kappa\right].$$

Then $g(s,U)=0$ and $g(s,s)$ are constant along every solution. In the restricted ansatz $D_\tau s=\alpha[aF^\sharp(s)+bU\kappa/c^2]$, require preservation of orthogonality for every initially orthogonal datum and every allowed alternating field. For $\alpha\ne0$ this gives $a+b=1$. If, in addition, the pointwise projected rest-space matching condition of [[lem-rpm-bmt-transport-algebra]] holds with target coefficient $G$, that lemma gives $a=G$, and hence $b=1-G$. This coefficient conclusion is only within that ansatz and the stated joint conditions. If $\alpha=0$, the rest-space matching condition does not identify $a,b$.

## Facts & Assumptions

[A3] [[def-countable-choice]]: assume only countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure and inherited BMT/action-equivalence supplier hypotheses.

**Given:** The adopted classical BMT model, $c>0$, constant $m>0,q,g_s$, a future timelike proper-time curve, a prescribed alternating field, and an initially orthogonal spin vector.

[A1] The adopted BMT transport and Lorentz-force translation equations, with $G=g_s/2$ and $\kappa=g(s,F^\sharp(U))$. [[post-rpm-bmt-dipole-model]]

[A2] The trajectory is stationary under the adopted action on a local potential domain, and the initial spin satisfies $g(U,s)=0$.

[F1] The SI field tensor has $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ in the named inertial convention; the charged-body definition uses the same convention. [[def-em-electromagnetic-tensor]]; [[def-rpm-charge-spin-model]]

[F2] For the restricted two-term transport ansatz, metric compatibility and skew-adjointness give $D_\tau g(U,s)=\alpha(1-a-b)\kappa$; if $a+b=1$, orthogonality and spin norm are preserved, and the pointwise projected rest-space matching condition defined in the supplier determines $a=G$ when $\alpha\ne0$. [[lem-rpm-bmt-transport-algebra]]

[F3] Under [A3], stationarity of the adopted local charged-particle action implies $mD_\tau U=qF^\sharp(U)$ on the stated finite fixed-endpoint potential-domain model. [[pthm-rpm-external-charge-action-equivalence]]

## Proof

**Proof technique:** direct.

1.1 In the lemma [F2], set $a=G$ and $b=1-G$. The postulate [A1] has exactly this displayed transport equation because $-(G-1)=1-G$, and [F3] gives the matching translation equation $D_\tau U=\alpha F^\sharp(U)$. Thus $a+b=1$ in the lemma; its derivative identity gives $D_\tau g(U,s)=0$. The initial value is zero by [A2], hence orthogonality is preserved. [given, A3, A1, A2, F2, F3, algebra]

2.1 With $g(U,s)=0$ from step 1.1 and [A2], the same lemma gives $\tfrac12D_\tau g(s,s)=g(s,D_\tau s)=0$: the $F^\sharp$ term vanishes by skew-adjointness, and the term proportional to $U$ vanishes by orthogonality. Thus $g(s,s)$ is constant. [given, A3, A2, F2, step 1.1, algebra]

3.1 In the general ansatz, [F2] shows that for $\alpha\ne0$, preservation for every initially orthogonal datum and every allowed field requires $a+b=1$; an orthogonal rest spin $s=e_1$ with an alternating field satisfying $F(e_1,e_0)\ne0$ gives an allowed instance with $\kappa\ne0$. The pointwise spatial projection in [F2] gives $a=G$ under the stipulated rest-space matching condition for every $\mathbf s,\mathbf B$; substituting into $a+b=1$ gives $b=1-G$. If $\alpha=0$, both transport equations vanish and impose no coefficient condition. This establishes uniqueness only under the joint conditions and within the stated ansatz. [given, A3, F1, F2, step 1.1, algebra] ∎

## Remarks

This is a conditional deduction inside the adopted classical transport model. The original BMT treatment is flat and homogeneous-field; it does not prove the separately adopted curved or varying-field law, and this theorem makes no quantum or empirical claim.

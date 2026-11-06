---
id: def-cmp-n2-special-kahler-period-data
kind: definition
title: "Special Kähler period data in Calabi–Yau threefold reductions"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: physics
library: physics
category: string-theory
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-cmp-calabi-yau-threefold-compactification-data
  - def-gts-polarized-variation-of-hodge-structure-and-period-map
  - post-four-dimensional-n2-matter-coupled-supergravity
  - thm-gts-gaussmanin-connection-and-griffiths-transversality
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-cmp-calabi-yau-threefold-compactification-data: formulation-prerequisite
  def-gts-polarized-variation-of-hodge-structure-and-period-map: mathematical-premise
  post-four-dimensional-n2-matter-coupled-supergravity: physical-assumption
  thm-gts-gaussmanin-connection-and-griffiths-transversality: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Local two-derivative N=2 vector-multiplet geometry on a smooth complex-structure family. Periods are patchwise and frame dependent; no global prepotential is asserted."
empirical_premises: []
sources:
  references:
    - title: "Paul S. Aspinwall, Compactification, Geometry and Duality: N=2, arXiv:hep-th/0001001v1"
      url: "https://arxiv.org/pdf/hep-th/0001001v1"
      locator: "§3.1, equations (25)–(28), PDF pp. 25–26 (printed pp. 24–25); cycle periods and local prepotential. Intersection signs are fixed by the explicit local cycle/form duality, not imported from an unspecified intersection convention."
    - title: "Sheldon Katz, Albrecht Klemm, and Cumrun Vafa, Geometric Engineering of Quantum Field Theories, arXiv:hep-th/9609239v2"
      url: "https://arxiv.org/pdf/hep-th/9609239v2"
      locator: "§3.1 and §4.1 opening, PDF pp. 6–8; local mirror periods and prepotential conventions."
    - title: "Klaus Behrndt, Gabriel Lopes Cardoso, Bernard de Wit, Renata Kallosh, Dieter Lüst, and Thomas Mohaupt, Classical and quantum N=2 supersymmetric black holes, arXiv:hep-th/9610105v1"
      url: "https://arxiv.org/pdf/hep-th/9610105v1"
      locator: "§2.1, PDF p. 6 (printed p. 5); general prepotential and symplectic-frame dependence."
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "Equations (2.7) and (2.11), PDF pp. 5–6 (printed pp. 4–5); complete symplectic cohomology pairings, form periods, and expansion. The negative integral sign in (2.12) is not adopted; the complex-oriented positive norm is derived locally."
---

## Definition

Let $\pi:\mathcal X\to S$ be a smooth proper holomorphic family of compact Kähler Calabi–Yau threefolds satisfying the local-freeness and locally constant Hodge-number hypotheses stated below, with $h^{3,0}=1$. On a simply connected holomorphic coordinate chart $U\subseteq S$ where the degree-three Hodge line $F^3$ is holomorphically trivial, choose a nowhere-vanishing holomorphic section $s\mapsto\Omega_s\in F^3_s=H^{3,0}(X_s)$. Choose a flat marking of the torsion-free integral lattice $H^3(X_s;\mathbb Z)/\mathrm{tors}$ and a compatible cycle/cohomology frame as follows. The real cohomology classes $(\alpha_I,\beta^I)$ form a complete flat basis of $H^3(X_s;\mathbb R)$, represented by closed three-forms, with $\int_{X_s}\alpha_I\wedge\beta^J=\delta_I^J$ and $\int_{X_s}\alpha_I\wedge\alpha_J=\int_{X_s}\beta^I\wedge\beta^J=0$. Their signed dual cycle basis $(A^I,B_I)$ is fixed by
$$\int_{A^I}\eta=\int_{X_s}\eta\wedge\beta^I,\qquad \int_{B_I}\eta=\int_{X_s}\eta\wedge\alpha_I$$
for every closed three-form $\eta$. These identities specify the order and sign of the Poincaré-dual pairing; they are part of the chosen frame, not an independent choice of cycle and form bases. In particular,
$$\int_{A^I}\alpha_J=\delta_J^I,\quad \int_{B_I}\alpha_J=0,\quad \int_{A^I}\beta^J=0,\quad \int_{B_I}\beta^J=-\delta_I^J.$$
The integral normalization is used under the unimodularity assumption below; no integral normalized frame for a nonunimodular polarization is inferred. Define periods $X^I=\int_{A^I}\Omega_s$ and $F_I=\int_{B_I}\Omega_s$. The period vector $\Pi=(X^I,F_I)$ is defined only up to the specified holomorphic rescaling of $\Omega_s$ and integral symplectic change of marking. In a local symplectic frame admitting a homogeneous prepotential $\mathcal F(X)$ of degree two, $F_I=\partial\mathcal F/\partial X^I$ and $K_{cs}=-\log\!\left[i(\overline{X}^IF_I-X^I\overline{F}_I)\right]$. A prepotential is not asserted to exist globally in every symplectic frame. In the adopted Type IIB $N=2$ vector sector these are the complex-structure periods; Type IIA vector geometry uses complexified Kähler data, with worldsheet-instanton corrections beyond the large-volume cubic approximation.

## Facts & Assumptions

**Given:** AC; the compactification datum of [[def-cmp-calabi-yau-threefold-compactification-data]]; a smooth proper holomorphic family $\pi:\mathcal X\to S$ over a smooth complex manifold; compact Kähler fibers with locally constant degree-three Hodge numbers and $h^{3,0}=1$; a locally free relative holomorphic de Rham filtration commuting with restriction to fibers; a flat rational polarization; a simply connected holomorphic coordinate chart $U$ trivializing the degree-three Hodge line $F^3$; a chosen nowhere-vanishing holomorphic section $s\mapsto\Omega_s\in F^3_s$; a flat marking of the torsion-free integral degree-three lattice and the compatible symplectic cycle basis on $U$; and the stated local $N=2$ effective-field-theory convention.

[F1] [[def-cmp-calabi-yau-threefold-compactification-data]] fixes the complex threefold and its chosen nowhere-zero holomorphic three-form as geometric data.

[F2] [[thm-gts-gaussmanin-connection-and-griffiths-transversality]] assumes a smooth proper holomorphic submersion, compact Kähler fibers, locally constant Hodge numbers, and a locally free relative filtration commuting with fibers; it supplies the degree-three local system and flat Gauss–Manin connection. It states that a rational polarization requires projective/ample data or a separately supplied flat polarization.

[F3] [[def-gts-polarized-variation-of-hodge-structure-and-period-map]] defines a polarized integral local system modulo torsion, its rationalization, flat polarization, Hodge filtration, and the period map on a simply connected marked chart.

[F4] The current carrier [[post-four-dimensional-n2-matter-coupled-supergravity|Four-Dimensional $N=2$ Matter-Coupled Supergravity]] adopts the two-derivative 4D $N=2$ component framework and fixes a regular electric frame and symplectic section. Its current Step 1 record is escalated; the recorded reason says the conventions carrier is absent, although that live carrier is now present and ready. This local effective-field-theory interface is used conditionally, and the escalation is not overwritten.

[A1] The periods use only the free integral lattice; torsion classes pair trivially with differential forms. A unimodular integral symplectic basis is assumed when the selected integral polarization is unimodular. Compact Kähler geometry alone does not select the polarization or this marking. The compatible frame means the complete cohomology basis, all four cycle-period conditions, and signed duality identities explicitly specified in the Definition; in particular both cross periods vanish. All wedge integrals use the complex orientation and the cup pairing $S_s$ of [A3], not the opposite polarization $Q_s$.

[A2] Assume the full Axiom of Choice [[def-axiom-of-choice]] required by the imported cohomology and Hodge suppliers.

[A3] On the free degree-three lattice, let $S_s(u,v):=\int_{X_s}u\wedge v$ be the flat cup-pairing for the complex orientation in the Definition. Use $Q_s:=-S_s$ as the selected weight-three polarization under [F3]'s convention $h_s(u,v)=Q_s(C_su,\bar v)>0$. Since $C_s\Omega_s=i^{3-0}\Omega_s=-i\Omega_s$, this gives $h_s(\Omega_s,\Omega_s)=iS_s(\Omega_s,\bar\Omega_s)>0$. The displayed period basis is normalized for $S_s$; its global sign relative to a symplectic basis normalized for $Q_s$ is fixed by $Q_s=-S_s$.

## Proof

**Proof technique:** local-system construction and symplectic-pairing calculation.

**Given:** The smooth proper holomorphic family, its marked polarized degree-three local system, the chosen holomorphic three-form, and the stated local four-dimensional $N=2$ convention.

1.1 The family hypotheses in the Given clause are exactly those of [F2], so its third cohomology forms a flat local system and its Hodge filtration varies holomorphically. On the chosen chart $U$, the specified nowhere-vanishing holomorphic section $\Omega$ trivializes the Hodge line and varies holomorphically with $s$; the flat marking trivializes the free lattice there. The additional polarization and marking in [F3] fix the alternating symplectic pairing; they are not inferred from compact Kähler geometry. The full AC input [A2] is the stated choice strength for the imported cohomological facts. [F2, F3, A1, A2, given]

1.2 By the complete basis and four cycle-period conditions of [A1], write $\Omega=c^I\alpha_I+d_I\beta^I$. Integrating over $A^J$ and $B_J$ gives $c^J=X^J$ and $d_J=-F_J$; the zero cross periods are necessary here. Thus $\Omega=X^I\alpha_I-F_I\beta^I$, and the signed duality identities also give $X^I=\int_X\Omega\wedge\beta^I$ and $F_I=\int_X\Omega\wedge\alpha_I$. Direct expansion using the zero same-type cup pairings and $\int_X\beta^J\wedge\alpha_I=-\delta_I^J$ gives $i\int_X\Omega\wedge\overline\Omega=i(\overline X^IF_I-X^I\overline F_I)$. By [A3] and [F3], this norm is positive on the chosen Hodge line; defining its logarithm gives the displayed $K_{cs}$. Rescaling $\Omega\mapsto e^f\Omega$ multiplies the norm by $e^{f+\bar f}$ and changes $K_{cs}$ by $-(f+\bar f)$, the stated Kähler transformation. [A1, A3, F3, given, algebra]

2.1 The relation $F_I=\partial_I\mathcal F$ is the local-prepotential condition in the selected symplectic frame, not a consequence of the existence of the Gauss–Manin connection. The definition is restricted to patches and frames where such a degree-two homogeneous $\mathcal F$ exists; a general symplectic change need not preserve that graph form. The assignment of complex-structure periods to Type IIB vector geometry and complexified Kähler data to Type IIA is the physical $N=2$ convention of [F4] and the cited compactification treatment; it is not a mathematical consequence of [F1]–[F3]. [F1, F3, F4, given, step 1.2] ∎

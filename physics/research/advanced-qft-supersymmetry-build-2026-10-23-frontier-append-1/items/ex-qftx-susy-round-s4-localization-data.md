---
id: ex-qftx-susy-round-s4-localization-data
kind: example
title: The round S4 supercharge square and its finite geometric Cartan data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-backgrounds-examples
deps:
  - def-qftx-susy-background-data
  - post-qftx-rigid-supersymmetric-background
  - post-qftx-n4-super-yang-mills-model
  - def-torus-equivariant-cohomology-cartan-model
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
  post-qftx-rigid-supersymmetric-background: physical-assumption
  post-qftx-n4-super-yang-mills-model: physical-assumption
  def-torus-equivariant-cohomology-cartan-model: mathematical-premise
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "§2, equations (2.5)–(2.14), (2.26)–(2.30); §4.1–§4.3, equations (4.1)–(4.15); Appendix C, equations (C.1)–(C.17)."
    - title: "Vasilis Peelaers, 4d N=2 Localization lecture notes"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
      locator: "§1.1–§1.2, equations (19)–(26), PDF pp. 3–4; the notes state measure and off-shell assumptions rather than proving the continuum localization step."
physical_scope: "Conditional illustration of the source's N=4 localization supercharge on the round Euclidean S4 and the separate finite-dimensional circle action on its base; it asserts no continuum field-space measure or localization theorem."
verification:
  precheck: pending
---

## Example

Take the adopted massless $\mathcal N=4$ model on the round $S^4_r$ with its specified conformal Killing spinors, seven auxiliary scalars, and combined gauge-fixed differential $Q=s+\delta$. For every adjoint-valued tensor field $X$ and its odd superpartner $X'$, the source algebra gives $sX=X'$, $sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$, $\delta X=-[c,X]$, and $\delta X'=-[c,X']$, with $\delta^2X=\delta_{\mathrm{gauge}}(a_0)X$ and $\{s,\delta\}X=-\delta_{\mathrm{gauge}}(\phi)X$. For the connection, $sA=\psi$, its superpartner transforms by $s\psi=\delta_{\mathrm{gauge}}(\phi)A+\delta_{U(1)}(\omega)A$, and the Faddeev–Popov rule is $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$; the same square and mixed-square identities hold with the gauge action $\delta_{\mathrm{gauge}}(u)A_\mu=-D_\mu u$. On the ghost fields, $s^2=0$, $\delta^2=\delta_{\mathrm{gauge}}(a_0)$, and $\{s,\delta\}=\delta_{U(1)}(\omega)$. Thus the combined square is $Q^2=\delta_{\mathrm{gauge}}(a_0)+\delta_{U(1)}(\omega)$: a constant gauge transformation and the selected $U(1)$ isometry. The $U(1)$ factor acts smoothly on the finite-dimensional base $S^4_r$; its ordinary Cartan complex is the invariant polynomial-valued differential-form complex for that circle action. This finite Cartan complex concerns forms on $S^4_r$, not the infinite-dimensional field configuration space. The measure and noncommutative regulator extension remain formal assumptions of the adopted model.

## Example references

[Adopted rigid S4 background postulate] [[post-qftx-rigid-supersymmetric-background]]

[Flat-space N=4 model interface] [[post-qftx-n4-super-yang-mills-model]]

[Pestun, §§2 and 4.1–4.3, Appendix C](https://arxiv.org/pdf/0712.2824)

[Peelaers, §1](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

## Facts & Assumptions

**Given:** The round Euclidean $S^4_r$, the selected off-shell supercharge, its BRST gauge-fixing complex, and its smooth $U(1)$ isometry as stated above.

[A1] [[post-qftx-rigid-supersymmetric-background]] adopts $Q=s+\delta$ and the supersymmetry rules $sX=X'$, $sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$, and, for the connection, $sA=\psi$, $s\psi=\delta_{\mathrm{gauge}}(\phi)A+\delta_{U(1)}(\omega)A$.

[A2] [[post-qftx-rigid-supersymmetric-background]] states $\delta X=-[c,X]$ and $\delta X'=-[c,X']$ on adjoint tensor fields, and $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$ on the connection.

[A3] [[post-qftx-rigid-supersymmetric-background]] states $\delta^2X=\delta_{\mathrm{gauge}}(a_0)X$, $\{s,\delta\}X=-\delta_{\mathrm{gauge}}(\phi)X$ on tensor fields, the same graded algebra on the connection, and, on ghosts, $\{s,\delta\}=\delta_{U(1)}(\omega)$ and $s^2=0$, while $\delta^2=\delta_{\mathrm{gauge}}(a_0)$ follows from their displayed transformations.

[A4] [[post-qftx-rigid-supersymmetric-background]] states that its S4 noncommutative regulator extension is assumed but not constructed, and that the regulated measure and contour remain formal inputs.

[A5] [[post-qftx-n4-super-yang-mills-model]]: the current model postulate fixes global group $SU(2)$, $T_a=-i\sigma_a/2$, $\kappa=-2\operatorname{Tr}_2$, positive dimensionless coupling $g$, and connection-normalized chiral fields with canonical fields $\Phi_{i,\mathrm{can}}=\Phi_i/g$.

[A6] [[post-qftx-n4-super-yang-mills-model]]: its on-shell component content is one gauge connection, six real adjoint scalars, and four adjoint Weyl fermions, equivalently one vector and three adjoint chiral multiplets; its extended invariance is adopted as a physical postulate, not proved.

[A7] [[post-qftx-n4-super-yang-mills-model]]: in its N=1 decomposition, the carrier specifies one adjoint vector prepotential and three adjoint chiral superfields $\Phi_1,\Phi_2,\Phi_3$, with the scalar fields connection-normalized before the stated canonical rescaling.

[F1] [[def-qftx-susy-background-data]]: off-shell closure means that $Q^2$ is an explicitly stated combination of lifted isometries and internal transformations on every field; this is separate from existence of a measure or a continuum localization theorem.

[F2] [[def-torus-equivariant-cohomology-cartan-model]]: for a compact torus acting smoothly on a finite-dimensional smooth manifold, the Cartan complex is $(\operatorname{Sym}(\mathfrak t^*)\otimes\Omega(M))^T$ with the stated contraction deformation of $d$; this definition does not extend its claim to the infinite-dimensional field configuration space.

## Verification

1.1 The actual N=4 supplier interface in [A5], [A6], and [A7] matches this example's stated flat-space input: the global group, invariant trace form, dimensionless coupling, scalar normalization, and vector/chiral component content agree. This check does not prove the supplier's adopted N=4 invariance or identify its flat Minkowski action with the separate curved S4 action. [A5, A6, A7, given, algebra]

1.2 For an adjoint-valued tensor field $X$, expand $(s+\delta)^2X=s^2X+\{s,\delta\}X+\delta^2X$. By [A1], $s^2X=sX'=\delta_{\mathrm{gauge}}(\phi)X+\delta_{U(1)}(\omega)X$. By [A3], the gauge term cancels with its negative in $\{s,\delta\}X$, leaving $\delta_{\mathrm{gauge}}(a_0)X+\delta_{U(1)}(\omega)X$. [A1, A3, given, algebra]

2.1 For the connection, the same square expansion applies to $A$ and $\psi$. By [A1], $s^2A=s\psi=\delta_{\mathrm{gauge}}(\phi)A+\delta_{U(1)}(\omega)A$; by [A2] and [A3], its BRST rule is $\delta A_\mu=D_\mu c=-\delta_{\mathrm{gauge}}(c)A_\mu$, its mixed term cancels the $\phi$ action, and its BRST square is $\delta_{\mathrm{gauge}}(a_0)A$. Thus $Q^2A=\delta_{\mathrm{gauge}}(a_0)A+\delta_{U(1)}(\omega)A$, using the declared connection gauge action $-D_\mu u$. [A1, A2, A3, step 1.2, algebra]

3.1 On ghosts, [A3] gives $s^2=0$, BRST square $\delta_{\mathrm{gauge}}(a_0)$, and mixed square $\delta_{U(1)}(\omega)$. Adding the three terms yields the same constant-gauge plus circle symmetry. [A3, step 1.2, step 2.1, algebra]

4.1 The element $a_0$ is a constant gauge parameter and $\omega$ generates the selected smooth circle isometry of $S^4_r$. Thus the square is a gauge transformation plus an isometry on the fields. The induced circle action on $S^4_r$ satisfies the compact-group and smooth-action hypotheses in [F2], so its ordinary geometric Cartan complex is defined. This use is only on $S^4_r$ and does not transfer the finite-dimensional definition to the field configuration space. [A1, A2, A3, F1, F2, step 1.2, step 2.1, step 3.1]

5.1 The adopted contour, measure, and S4 regulator extension are explicit formal inputs in [A4]; the verification above neither constructs them nor proves a regulator-removal or $t\to\infty$ limit. [A4, step 4.1] ∎

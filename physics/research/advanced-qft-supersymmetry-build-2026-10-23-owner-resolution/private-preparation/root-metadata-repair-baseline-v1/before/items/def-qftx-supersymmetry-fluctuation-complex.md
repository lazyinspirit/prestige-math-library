---
id: def-qftx-supersymmetry-fluctuation-complex
kind: definition
title: Gauge-fixed supersymmetry fluctuation data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-qexact-field-theory-localization
deps:
  - def-qftx-susy-background-data
  - def-finite-dimensional-q-exact-localization-data
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
  def-finite-dimensional-q-exact-localization-data: formulation-prerequisite
dependency_level: 2
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Albert Schwarz and Oleg Zaboronsky, Supersymmetry and localization"
      url: "https://arxiv.org/pdf/hep-th/9511112"
      locator: "Section 2, PDF pp. 2–3, for odd tangent bundles, odd vector fields and Berezin integration; Section 3, PDF pp. 4–7, for finite-dimensional supermanifold hypotheses."
    - title: "Vasily Pestun and Maxim Zabzine, Introduction to localization in quantum field theory"
      url: "https://arxiv.org/pdf/1608.02953"
      locator: "Section 1, PDF pp. 1–3, for the finite-dimensional ΠTM model and the separate infinite-dimensional determinant problem."
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "Section 2, equations (2.5)–(2.14) and (2.26)–(2.30); Section 3, equations (3.1)–(3.3); Section 4.2, for the gauge-fixed Q-square, fluctuation operators and formal S4 regulator qualification."
    - title: "Vasilis Peelaers, 4d N=2 Localization lecture notes"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf"
      locator: "Section 1.1, equations (19)–(23), and Section 1.2, equations (24)–(26), PDF pp. 3–4; the notes state the background and measure assumptions but do not prove a continuum measure."
physical_scope: "A definition of gauge-fixed fluctuation and finite-regulator data for Euclidean rigid supersymmetry. It asserts no arbitrary-background existence, ellipticity, determinant evaluation, finite-dimensional regulator existence, continuum measure, regulator-removal theorem, or empirical conclusion."
verification:
  precheck: pending
---

## Definition

Use natural units $c=\hbar=1$. Let $M$ be a compact oriented smooth four-manifold with a Riemannian metric and with the spin, gauge, matter, auxiliary, and R-symmetry bundles supplied as part of a rigid-background package. For each declared field species $a$, let $E_a\to M$ be its specified vector bundle. Put $E^{\bar 0}=\bigoplus_{a\ {\rm bosonic}}E_a$ for bosonic and auxiliary fields and $E^{\bar 1}=\bigoplus_{a\ {\rm fermionic\ or\ ghost}}E_a$ for fermion and ghost fields. The grading is parity modulo two. Write $\Gamma^\infty(M,E)$ for the space of smooth sections of a bundle $E\to M$. The space of smooth field configurations is a specified subset of $\Gamma^\infty(M,E^{\bar 0}\oplus E^{\bar 1})$ satisfying the declared reality, contour, gauge, and boundary conditions; the smooth sections are the common classical domain unless a different domain is stated.

A gauge-fixed supersymmetry fluctuation datum at a smooth $Q$-fixed configuration $\Phi_*$, meaning a configuration with $Q\Phi_*=0$ after the declared gauge fixing, consists of the field bundles, the declared gauge-fixing condition, its Faddeev–Popov operator, the ghost and auxiliary fields, and the odd gauge-fixed transformation $Q$ on every field. Here $Q$ is the sum of the selected off-shell supersymmetry transformation and the specified gauge-fixing or BRST differential. Its square $H=Q^2$ is part of the data and must be given on every field; it may be a nonzero combination of gauge, spacetime, R-symmetry, and flavor transformations. For the round-sphere model used in this page, the total gauge-fixed convention is $Q=s+\delta$ and $H=\delta_{\rm gauge}(a_0)+\delta_{U(1)}(\omega)$ on fields and ghosts, with $\delta_{\rm gauge}(u)A_\mu=-D_\mu u$ on the connection and $\delta_{\rm gauge}(u)X=[u,X]$ on adjoint tensors. Thus $Q$ is not called nilpotent unless $H$ acts as zero on the specified sector.

The linearized fluctuation operator is the derivative $\mathcal D_{\Phi_*}=(dQ)_{\Phi_*}$ acting on tangent fluctuations, which are sections of $E^{\bar 0}\oplus E^{\bar 1}$ obeying the linearized gauge and boundary conditions. If $Q$ is a finite-order differential transformation, $\mathcal D_{\Phi_*}$ is a matrix of finite-order differential operators. The relation $Q^2=H$ implies $\mathcal D_{\Phi_*}^2=(dH)_{\Phi_*}$ at a $Q$-fixed configuration; it is a cochain differential on the subspace on which this linearized symmetry acts as zero. For operator domains on a compact manifold, one may choose Sobolev completions $W^{k,2}(M,E_a)$ defined by requiring all weak covariant derivatives through order $k$ to be square-integrable with respect to the chosen metric and bundle metric. An operator of order $m$ then has the stated domain $W^{k,2}$ and codomain $W^{k-m,2}$ for a declared integer $k\ge m$; the bundle metrics, connections, boundary conditions, and closed-operator realization are additional data.

For a differential operator $D$ of order $m$, its principal symbol $\sigma_m(D)(x,\xi)$ is the homogeneous degree-$m$ part obtained in local coordinates by replacing each highest-order derivative $\partial_\mu$ by $i\xi_\mu$. A differential sequence is elliptic when its symbol sequence is exact for every nonzero cotangent vector $\xi$. For a specified smooth compact-group action on $M$, it is transversely elliptic when the symbol sequence is exact for every nonzero cotangent vector that annihilates the tangent space to the action orbit. Any claim of either property must identify the operators, symbols, domains, and symmetry directions; this definition asserts neither. A zero mode of $D$ is a vector in its specified domain that lies in $\ker D$. A Faddeev–Popov zero mode is a vector in the kernel of the specified Faddeev–Popov operator, and an infinitesimal gauge stabilizer is a gauge transformation that fixes the background connection. A one-loop determinant is a regularized determinant or ratio of determinants of specified fluctuation operators with their domains, spectra, phases, and zero-mode conventions fixed. A primed determinant omits only the stated kernel; the omitted modes require separate treatment. No determinant follows from the symbol or from a formal supercharge algebra alone.

A finite-dimensional regulator is extra data, not a consequence of the continuum fluctuation datum. It consists of a finite-dimensional oriented smooth field-parameter manifold $\mathfrak F_\rho$, a smooth positive volume form, an integration cycle and boundary conditions, a graded algebra identified with $\Omega^\bullet(\mathfrak F_\rho;\mathbb C)$, a graded integral of its top-degree part, and an odd derivation $Q_\rho$ induced by the declared field transformation. Its square is the induced symmetry $H_\rho$. In this page the finite-dimensional integration and deformation data use the exact conventions of the finite-dimensional Q-exact localization definition: $Q_\rho$-invariance means the integral of $Q_\rho F$ vanishes on the admissible integrands, including the zero-boundary-flux condition. This data does not identify the formal noncommutative S4 regulator with a finite-dimensional regulator, and it does not construct an infinite-dimensional field-space measure.

## Definition references

[[def-qftx-susy-background-data|Rigid background and gauge-fixing data]]

[[def-finite-dimensional-q-exact-localization-data|Finite-dimensional Q-exact integration data]]

[Schwarz and Zaboronsky, Sections 2–3](https://arxiv.org/pdf/hep-th/9511112)

[Pestun and Zabzine, Section 1](https://arxiv.org/pdf/1608.02953)

[Pestun, Sections 2–4](https://arxiv.org/pdf/0712.2824)

[Peelaers, Sections 1.1–1.2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

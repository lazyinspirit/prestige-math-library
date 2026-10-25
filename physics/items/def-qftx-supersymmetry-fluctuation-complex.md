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
  - post-qftx-rigid-supersymmetric-background
dependency_roles:
  def-qftx-susy-background-data: formulation-prerequisite
  def-finite-dimensional-q-exact-localization-data: formulation-prerequisite
  post-qftx-rigid-supersymmetric-background: formulation-prerequisite
dependency_level: 9
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Albert Schwarz and Oleg Zaboronsky, Supersymmetry and localization"
      url: "https://arxiv.org/pdf/hep-th/9511112"
      locator: "Section 2, PDF pp. 2–3, for odd tangent bundles, odd vector fields and
        Berezin integration; Section 3, PDF pp. 4–7, for finite-dimensional
        supermanifold hypotheses."
    - title: "Vasily Pestun and Maxim Zabzine, Introduction to localization in quantum
        field theory"
      url: "https://arxiv.org/pdf/1608.02953"
      locator: "Section 1, PDF pp. 1–3, for the finite-dimensional ΠTM model and the
        separate infinite-dimensional determinant problem."
    - title: "Vasily Pestun, Localization of Gauge Theory on a Four-Sphere and
        Supersymmetric Wilson Loops"
      url: "https://arxiv.org/pdf/0712.2824"
      locator: "Section 2, equations (2.5)–(2.14) and (2.26)–(2.30), for off-shell
        transformations; Section 3, equations (3.1)–(3.3), for the Q-exact
        deformation; Sections 4.2–4.3, equations (4.4)–(4.15), for the
        supersymmetry and combined gauge-fixed Q-complex; Section 1, printed
        p. 4 (PDF p. 4), unnumbered paragraph between equations (1.5) and
        (1.6), for the assumed, unconstructed noncommutative S4 regulator."
    - title: "Wolfger Peelaers (lectures), Bruno Le Floch (notes), 4d N=2 Localization"
      url: "https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-Lec\
        tureNotes.pdf"
      locator: "Section 1.1, equations (19)–(23), and Section 1.2, equations
        (24)–(26), PDF pp. 3–4; the notes state the background and measure
        assumptions but do not prove a continuum measure."
physical_scope: "A definition of gauge-fixed fluctuation and finite-regulator
  data for Euclidean rigid supersymmetry. It asserts no arbitrary-background
  existence, ellipticity, determinant evaluation, finite-dimensional regulator
  existence, continuum measure, regulator-removal theorem, or empirical
  conclusion."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Definition

Use natural units $c=\hbar=1$. Let $M$ be a compact oriented smooth four-manifold with a Riemannian metric and with the spin, gauge, matter, auxiliary, and R-symmetry bundles supplied as part of a rigid-background package. For each declared field species $a$, let $E_a\to M$ be its specified vector bundle. Assign each species a parity $p(a)\in\{\bar 0,\bar 1\}$, including a separate parity for every auxiliary and ghost species, and put $E^{\bar j}=\bigoplus_{p(a)=\bar j}E_a$. Physical bosons are even and physical fermions are odd; ghosts may have either declared parity. The grading is parity modulo two. Write $\Gamma^\infty(M,E)$ for the space of smooth sections of a bundle $E\to M$, with the topology of uniform convergence of every covariant derivative. A connection is an affine variable, represented by its difference from a fixed reference connection, an adjoint-valued one-form. Smooth sections are the common classical domain unless a different domain is stated.

For linearization, supply a local graded field chart at the chosen configuration $\Phi_*$. Its even coordinates range over an open neighborhood of zero in a specified closed real linear subspace $V^{\bar 0}$ of the even section space; its odd coordinates are formal anticommuting variables with values in a specified closed linear subspace $V^{\bar 1}$ of the odd section space. Complex fields may be regarded as real pairs, with a declared complexification when required by $Q$. In this chart $\Phi_*$ has coordinate zero and the tangent fluctuations are $V=V^{\bar 0}\oplus V^{\bar 1}$. Require the chart, its inverse onto its image, and the coefficient maps of $Q$ to be smooth: all iterated directional derivatives in the even variables exist and are jointly continuous in the base point and directions; dependence on odd variables is specified by continuous alternating multilinear coefficient maps, smooth in the even variables. Taylor expansions below are formal jets at zero, with no convergence assertion. Products obey $uv=(-1)^{|u||v|}vu$ for homogeneous variables, and $Q$ obeys $Q(uv)=(Qu)v+(-1)^{|u|}u(Qv)$. Reality, contour, gauge, and boundary constraints used to restrict this chart must have a supplied smooth parametrization and be preserved by $Q$ (or by its declared complexification). Their tangent space is the image of the chart derivative, with the corresponding linearized conditions; it is not inferred from an arbitrary subset of sections. Gauge fixing by an action insertion does not by itself restrict the fields to a gauge slice. No smooth chart, or tangency to a contour or slice, is asserted to follow merely from specifying those conditions.

A gauge-fixed supersymmetry fluctuation datum at a smooth $Q$-fixed configuration $\Phi_*$, meaning a configuration with $Q\Phi_*=0$ after the declared gauge fixing, consists of the field bundles, the declared gauge-fixing condition, its Faddeev–Popov operator, the ghost and auxiliary fields, and the odd gauge-fixed transformation $Q$ on every field. Here $Q$ is the sum of the selected off-shell supersymmetry transformation and the specified gauge-fixing or BRST differential. Its square $H=Q^2$ is part of the data and must be given on every field; it may be a nonzero combination of gauge, spacetime, R-symmetry, and flavor transformations. For the round-sphere model used in this page, take the fields, spinors, gamma matrices, bundle lifts, ghost domains and gauge fermion from the adopted rigid $N=4$ Yang–Mills localization background on the round four-sphere postulate. Its total gauge-fixed convention is $Q=s+\delta$ and $H=\delta_{\rm gauge}(a_0)+\delta_{U(1)}(\omega)$ on fields and ghosts, with $\delta_{\rm gauge}(u)A_\mu=-D_\mu u$ on the connection and $\delta_{\rm gauge}(u)X=[u,X]$ on adjoint tensors. Here $\delta_{U(1)}(\omega)=-\mathcal L_v^{\mathrm{lift}}-\delta_R$ is the combined geometric-lift/R operator, with $R^Q_{AB}=2\epsilon\widetilde\Gamma_{AB}\widetilde\epsilon$ in the source order and the auxiliary-index lift fixed by its off-shell square; its action on adjoint ghosts is $-\mathcal L_v^{\mathrm{lift}}$. The lift is separate from the gauge-covariant source Lie derivative: in a local gauge frame with lift coefficient $\beta_{v,P}$, the latter is $\mathcal L_v^{\mathrm{lift}}+\delta_{\mathrm{gauge}}(\kappa_v)$ with $\kappa_v=v^\mu A_\mu-\beta_{v,P}+v^A\Phi_A$. The unpaired parameter is $\phi=-\kappa_v$, with affine ghost rule $\delta\phi=-[c,\phi]+\rho_{\mathrm{gh}}(\omega)c$; $a_0$ lies in the fixed background stabilizer algebra $\ker D_{A_*}$. The declared sectorwise background-gauge insertion is the completed $Q\Psi_{\mathrm{gf}}$ on its specified ghost/zero-mode domains. Thus $Q$ is not called nilpotent unless $H$ acts as zero on the specified sector.

In the supplied chart write $\eta=\Phi-\Phi_*$ for the fluctuation coordinates and expand the field transformation as $Q\eta=\mathcal D_{\Phi_*}\eta+O(\eta^2)$, where $O(\eta^2)$ means terms of total Taylor degree at least two in even and odd fluctuations. The zero-degree term vanishes by $Q\Phi_*=0$. This defines $\mathcal D_{\Phi_*}=(dQ)_{\Phi_*}$ as the odd linearized field transformation on $V$, extended to products by the graded Leibniz rule. The square $Q^2$ means composition as a derivation on fields, equivalently $\tfrac12[Q,Q]$ with the graded commutator. Since $Q$ has no constant term, it preserves terms of degree at least two; taking the linear part of $Q^2\eta=H\eta$ therefore gives $\mathcal D_{\Phi_*}^2=(dH)_{\Phi_*}$. On the common smooth domain $V$, $\mathcal D_{\Phi_*}$ preserves $\ker(dH)_{\Phi_*}$ because it commutes with its own square. Its restriction there is a parity-graded cochain differential, meaning an odd linear map with square zero. If the chart is affine in the fields and $Q$ is a finite-order differential transformation with smooth dependence on finitely many field derivatives, $\mathcal D_{\Phi_*}$ is a matrix of finite-order differential operators. For operator domains on a compact manifold, one may choose Sobolev completions $W^{k,2}(M,E_a)$ defined by requiring all weak covariant derivatives through order $k$ to be square-integrable with respect to the chosen metric and bundle metric. An operator of order $m$ then maps $W^{k,2}$ to $W^{k-m,2}$ for a declared integer $k\ge m$; the bundle metrics, connections, boundary conditions, and closed-operator realization are additional data. Compositions of closed realizations require their own common domain; the square identity above is on smooth fluctuations and does not assert equality of arbitrary closed extensions.

For a differential operator $D$ of order $m$, its principal symbol $\sigma_m(D)(x,\xi)$ is the homogeneous degree-$m$ part obtained in local coordinates by replacing each highest-order derivative $\partial_\mu$ by $i\xi_\mu$. A differential sequence is elliptic when its symbol sequence is exact for every nonzero cotangent vector $\xi$. For a specified smooth compact-group action on $M$, it is transversely elliptic when the symbol sequence is exact for every nonzero cotangent vector that annihilates the tangent space to the action orbit. Any claim of either property must identify the operators, symbols, domains, and symmetry directions; this definition asserts neither. A zero mode of $D$ is a vector in its specified domain that lies in $\ker D$. A Faddeev–Popov zero mode is a vector in the kernel of the specified Faddeev–Popov operator, and an infinitesimal gauge stabilizer is a gauge transformation that fixes the background connection. A one-loop determinant is a regularized determinant or ratio of determinants of specified fluctuation operators with their domains, spectra, phases, and zero-mode conventions fixed. A primed determinant omits only the stated kernel; the omitted modes require separate treatment. No determinant follows from the symbol or from a formal supercharge algebra alone.

A finite-dimensional regulator is extra data, not a consequence of the continuum fluctuation datum. It consists of a finite-dimensional oriented smooth field-parameter manifold $\mathfrak F_\rho$, a smooth positive volume form, an integration cycle and boundary conditions, a graded algebra identified with $\Omega^\bullet(\mathfrak F_\rho;\mathbb C)$, a graded integral of its top-degree part, and a smooth odd derivation $Q_\rho$. Compatibility with the continuum field transformation requires additional data: a smooth parity-preserving graded map $\iota_\rho:\Pi T\mathfrak F_\rho\to\mathcal U$ into the supplied local field chart $\mathcal U$. Here $\Pi T\mathfrak F_\rho$ denotes the graded manifold whose functions are $\Omega^\bullet(\mathfrak F_\rho;\mathbb C)$ with parity given by form degree modulo two. The map specifies every regulated field coordinate as a form of its declared parity, has a smooth body map from $\mathfrak F_\rho$ into the even chart, and admits pullback $\iota_\rho^*$ of the chart's smooth graded observables by substitution and their finite Taylor expansion in positive-degree forms. Require the exact intertwining identity $Q_\rho(\iota_\rho^*F)=\iota_\rho^*(QF)$ for every such observable $F$, including each field coordinate. This identity is the tangency requirement: applying the regulated transformation to the parametrized fields agrees with the continuum transformation evaluated on those fields. It is part of the supplied regulator data, not a consequence of a cutoff or of the integration algebra alone. The square $H_\rho=Q_\rho^2$ then satisfies $H_\rho(\iota_\rho^*F)=\iota_\rho^*(HF)$ by applying the identity twice. These identities define “induced” here; no unrelated odd derivation is identified with the model transformation. In this page the finite-dimensional integration and deformation data use the exact conventions of the finite-dimensional Q-exact localization definition: $Q_\rho$-invariance means the integral of $Q_\rho F$ vanishes on the admissible integrands, including the zero-boundary-flux condition. This data does not identify the formal noncommutative S4 regulator with a finite-dimensional regulator, and it does not construct an infinite-dimensional field-space measure.

## Definition references

[[def-qftx-susy-background-data|Rigid background and gauge-fixing data]]

[[def-finite-dimensional-q-exact-localization-data|Finite-dimensional Q-exact integration data]]

[[post-qftx-rigid-supersymmetric-background|Adopted round-sphere fields, spinors, lifted symmetry, ghost rules and gauge fixing]]

[Schwarz and Zaboronsky, Sections 2–3](https://arxiv.org/pdf/hep-th/9511112)

[Pestun and Zabzine, Section 1](https://arxiv.org/pdf/1608.02953)

[Pestun, Sections 2–4](https://arxiv.org/pdf/0712.2824)

[Peelaers, Sections 1.1–1.2](https://indico.math.cnrs.fr/event/3026/attachments/2163/2457/Peelaers-LectureNotes.pdf)

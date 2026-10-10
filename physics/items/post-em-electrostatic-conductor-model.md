---
id: post-em-electrostatic-conductor-model
kind: postulate
title: "The ideal electrostatic conductor model"
status: draft
origin: session
dependency_level: 16
domain: physics
deps: [def-bounded-c-k-domain-and-boundary-charts, def-countable-choice, def-em-electrostatic-regime, def-em-fields, def-em-lab-geometry, def-em-si-conventions, def-em-sources, def-em-surface-distribution, def-em-weak-sources, lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface, lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain, post-em-distributional-vacuum-maxwell]
dependency_roles:
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-countable-choice: mathematical-premise
  lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface: mathematical-premise
  lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-fields: formulation-prerequisite
  def-em-sources: formulation-prerequisite
  def-em-electrostatic-regime: formulation-prerequisite
  def-em-surface-distribution: operational-prerequisite
  def-em-weak-sources: operational-prerequisite
  post-em-distributional-vacuum-maxwell: operational-prerequisite
physical_scope: "The ideal electrostatic conductor idealization of the classical framework in one named inertial frame: finitely many compact smooth field-free conductor bodies inside a general open laboratory region, with a separate bounded smooth ambient branch, all conductor charge carried by continuous stationary surface densities, a connected vacuum region in which the pure electrostatic regime and the adopted distributional Maxwell equations hold, and a continuous equilibrium potential that is constant on each conductor body and continuous across its surface. The item is a model choice: it asserts no existence, uniqueness, dynamics, conductivity, forces, energy, radiation, measurement or apparatus claim, and it excludes cavity configurations with disconnected vacuum regions."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "Sections 2.5.1-2.5.3 printed pp. 96-103 (conductors: E = 0 in the equilibrium interior, charge on the surface, surface-charge relation (2.48) and normal-derivative form (2.49)); Section 2.5.4 printed pp. 103-106 (capacitance Q = CV (2.53)); Sections 3.1.5-3.1.6 printed pp. 116-121 (first and second uniqueness theorems, grounded-conductor data)."
    - title: "David Tong, Electromagnetism, University of Cambridge Mathematical Tripos lecture notes (Lent Term 2015, 236 PDF pages)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "Section 2.4 printed pp. 30-31 (conductors: E = 0 and constant phi inside, no interior charge, surface charge with outside field sigma/epsilon_0 n-hat, Eq. (2.31)); Section 2.4.2 printed pp. 33-35 (fixed-potential versus fixed-charge conductors, grounded conductors, Dirichlet/Neumann data and the uniqueness theorem)."
    - title: "Weng Cho Chew, Lectures on Electromagnetic Field Theory (Purdue University, Fall 2020, 497 pp.)"
      url: https://engineering.purdue.edu/wcchew/ece604f20/EMFTAll.pdf
      locator: "Sections 32.1-32.2 and 32.2.1 printed pp. 351-354 (shielding and image theory for a flat conductor surface: tangential static field zero); Section 24.4 printed p. 263 (capacitance Q = CV)."
verification:
  precheck: n/a
---

## Postulate

Under the Countable Choice convention of the stated boundary and sheet-distribution interfaces ([[def-countable-choice]]), adopt as a physical model of ideal electrostatic conductors, for the classical laboratory framework of [[def-em-lab-geometry]] with the units and constants of [[def-em-si-conventions]]: a **conductor configuration** consists of the following data, and every model of this postulate is required to satisfy the clauses below. No experiment is reported and no empirical value is inferred; this is an explicitly adopted equilibrium idealization together with its geometric and source conventions.

(a) [Geometry] a laboratory region $\Omega\times I$ with $\Omega\subseteq\mathbb R^3$ an arbitrary open ambient region, a finite family $D_1,\dots,D_m$ ($m\ge1$) of bounded $C^\infty$ domains with pairwise disjoint closures in the sense of [[def-bounded-c-k-domain-and-boundary-charts]] with closures strictly inside $\Omega$ (the **conductor bodies**), the **conductor** $D:=D_1\cup\cdots\cup D_m$, its **surface** $\partial D$, and the **vacuum region** $\Omega_v:=\Omega\setminus\overline D$. By [[lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface]], $\partial D=\partial D_1\cup\cdots\cup\partial D_m$ is a disjoint union of compact embedded $C^\infty$ hypersurfaces. The vacuum $\Omega_v$ is open, and near each conductor surface it is locally the smooth exterior side of that conductor. No boundedness or regularity of the ambient boundary is inferred from openness. In the additional **bounded smooth ambient branch**, assume that $\Omega$ is a bounded $C^\infty$ domain; only then [[lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain]] gives that $\Omega_v$ is a bounded $C^\infty$ domain with the specified outer/conductor boundary charts; we additionally require $\Omega_v$ to be connected (configurations whose vacuum region is separated by the conductors, for instance by an enclosing closed shell, are outside this model as formulated here).

(b) [Equilibrium and sources] the configuration is in the pure electrostatic regime of [[def-em-electrostatic-regime]] on the vacuum region: $B=0$, $J=0$, $E$ is the fixed-time electric field of [[def-em-fields]], the volume source density $\rho_v$ is a continuous real map on $\overline{\Omega_v}$ (C m$^{-3}$, [[def-em-sources]]) extended by zero to $D$; the **conductor charge is a stationary surface charge**, i.e. a continuous density $\sigma:\partial D\to\mathbb R$ (C m$^{-2}$) whose pairing with test functions is the stationary-sheet source of [[def-em-weak-sources]](c) with tangential current $K=0$ and $S=\partial D$; and the field pair $(E,0)$ together with the source pair $(\rho_v+\sigma\,\delta_{\partial D},\ 0)$ satisfies the adopted distributional vacuum Maxwell equations [[post-em-distributional-vacuum-maxwell]]. Inside the conductor the field vanishes: $E\equiv0$ on $D$ (the **equilibrium condition**); equivalently the conductor interior is field-free and carries no volume charge.

(c) [Potential and equipotential convention] there is a function $\varphi\in C^0(\Omega)\cap C^2(\Omega_v)$ with $E=-\nabla\varphi$ on $\Omega_v$ and with $\varphi$ constant on each conductor body, $\varphi|_{D_j}\equiv V_j$ for real constants $V_j$ (volts, [[def-em-si-conventions]]); by continuity of $\varphi$ the trace of $\varphi$ on each $\partial D_j$ from the vacuum side equals $V_j$ as well. This is the single-function convention of an ideal conductor with no double layer: the model reads the same potential value on both sides of $\partial D_j$, while the normal component of $E$ may jump.

(d) [Data] a model is completed either by the component potentials $V_1,\dots,V_m$ together with the volume source $\rho_v$ and the data on $\partial\Omega$ where the laboratory region is bounded, or by the component total charges $Q_j:=\int_{\partial D_j}\sigma\,dS$ (C) together with those same ambient data. These are two declared data types; the postulate asserts neither that both data types are simultaneously specifiable nor that either is solvable for arbitrary data.

(e) [Scope] This is a static, frame-relative equilibrium idealization: it excludes transient finite-conductivity dynamics, relaxation to equilibrium, moving surface charge, electrode polarization and contact effects, and it is not derived from a microscopic matter model. It asserts no existence or uniqueness theorem (those are separate conditional results), no force, no energy, no radiation, no measurement and no apparatus realization; the value $V_j$ is a model parameter and the surface density $\sigma$ is an idealization variable determined by the equilibrium problem when it is solvable. The general open ambient branch retains compact conductor bodies in exterior configurations. Its additional bounded smooth ambient branch is distinct from the separately declared grounded-half-space and infinite parallel-plane idealizations, whose conductor bodies are themselves noncompact. Those examples retain the equilibrium/equipotential interpretation but their noncompact bodies and plane distributions are not instances of this compact-body configuration or its compact-sheet predicate. No arbitrary exterior solvability is asserted.

## Interpretation and source basis

The postulate records a model choice, not a deduction, and its clauses are the exact objects the rest of this page consumes. The field-free interior with all charge on the surface and the constant-potential (equipotential) surface are the standard ideal-conductor clauses of the source treatments (Griffiths §2.5.1 printed pp. 96-98; Tong §2.4 printed pp. 30-31; Chew §32.1-32.2 printed pp. 351-354), presented there for equilibrium configurations and reproduced here as adopted assumptions rather than as derived theorems. The division into two data types in (d) is the fixed-potential versus fixed-charge distinction of Tong §2.4.2 printed pp. 33-35 and Griffiths §3.1.5-3.1.6 printed pp. 116-121; it is a definitional choice about which quantities are prescribed. Nothing in (e) turns the idealization into a universal statement about real metals: finite conductivity, transients, contact potentials, surface forces and material properties are outside the model, and no numerical or empirical value of any material quantity is asserted.

The mathematical content used to *name* the objects is exact and proved earlier on this page: the surface $\partial D$ of finitely many pairwise disjoint bounded $C^\infty$ bodies is a disjoint finite union of compact embedded smooth hypersurfaces, and in the bounded smooth ambient branch the vacuum region is again a bounded smooth domain whose boundary pieces are the outer boundary and the conductor surfaces. The stationary-sheet pairing $\sigma\,\delta_{\partial D}$ is the surface-distribution object of [[def-em-surface-distribution]] as used by [[def-em-weak-sources]](c), and the solution predicate for the field-source pair is the separately adopted [[post-em-distributional-vacuum-maxwell]]; the postulate itself neither proves that predicate nor asserts that it is satisfiable for the declared data. The countable-choice convention belongs to those measure and distribution interfaces and is carried here explicitly ([[def-countable-choice]]).

The model is deliberately silent about configurations whose conductor bodies enclose a cavity of the vacuum: the bounded smooth ambient branch requires $\Omega_v$ connected, so configurations separated by the conductors are outside the model as formulated. The separately declared grounded-plane and ideal parallel-plate examples are noncompact idealizations and are not instances of this compact-body configuration; they retain their own explicit statements and are not theorems about this postulate.

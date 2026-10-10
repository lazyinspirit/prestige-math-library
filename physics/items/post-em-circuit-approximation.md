---
id: post-em-circuit-approximation
kind: postulate
title: "Lumped circuit approximation: branch data, terminal laws and the declared quasistatic regime"
domain: physics
status: draft
origin: session
dependency_level: 18
deps:
  - post-em-material-closure
  - def-em-steady-current-regime
  - def-em-si-conventions
  - def-em-lab-geometry
  - def-interval
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-invertible-matrix-theorem
dependency_roles:
  thm-invertible-matrix-theorem: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  post-em-material-closure: formulation-prerequisite
  def-em-steady-current-regime: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-lab-geometry: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: "§4.1.2-4.1.3 printed pp. 71-77 (inductance L=Phi/I and the inductive terminal law; the resistance E=IR as a material-dependent input and V=IR; the sliding-bar circuit); read in the retained complete text of the 236-page printing."
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: "§7.2.1-7.2.4 printed pp. 303-323 (the flux-linkage definition of inductance, the coil equation V=L dI/dt, the mutual inductance and the magnetic-energy circuit bookkeeping); read in the stamped 596-page scan."
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: "chapter 7 'Magnetic induction' printed pp. 216-241, nodes 81-86 (inductance, magnetic energy, the coil equation V=L dI/dt+RI and the RL circuit); read in the fetched complete 364-page course book."
physical_scope: "An adopted reduced lumped-circuit model: fixed finite branch data with constant symmetric L, positive-definite C and symmetric positive-semidefinite R, the Faraday/capacitive/Ohmic branch relations and Kirchhoff laws, confined to a declared quasistatic smallness condition with negligible radiation and leakage and ideal terminals. It is not derived from the vacuum Maxwell equations, asserts no error bound, and excludes radiation, distributed, nonlinear, hysteretic, leakage, proximity and material-dissipative effects beyond the cited material branch."
---

## Postulate

Adopt the following reduced circuit model in the laboratory frame and SI units of [[def-em-lab-geometry]] and [[def-em-si-conventions]]. The continuum material reference is [[post-em-material-closure]]; the terminal laws below are additional assumptions, rather than consequences of its pointwise constitutive relations or of Maxwell's equations.

(a) **Branch data.** Fix a nonempty interval $J\subseteq\mathbb R$, a finite set of nodes $\mathcal N$, and a finite set of oriented branches $\mathcal E$, each with specified tail and head nodes. Designate $n$ inductive/resistive branches, $m$ capacitive branches and any source branches. On the first family specify currents $I:J\to\mathbb R^n$ and separate voltage-drop vectors $V_L,V_R:J\to\mathbb R^n$; on the second specify charges $Q:J\to\mathbb R^m$, currents $I_C:J\to\mathbb R^m$ and voltage drops $V_C:J\to\mathbb R^m$. Currents $I$ and charges $Q$ admit $C^1$ extensions to an open interval containing $J$; included endpoint derivatives are their one-sided derivatives, and at a singleton the chosen extensions are part of the data supplying the jets. Voltages and source currents are continuous. The matrices $L,R\in\mathbb R^{n\times n}$ and $C\in\mathbb R^{m\times m}$ are constant, with $L^{\mathsf T}=L$, $C^{\mathsf T}=C$, $z^{\mathsf T}Cz>0$ for every $z\ne0$, $R^{\mathsf T}=R$, and $y^{\mathsf T}Ry\ge0$ for every $y$. These inequalities define positive definiteness and positive semidefiniteness here. Symmetry alone is imposed on a declared $L$; a smooth compact-current realization can supply its additional positivity. Geometry, orientations and source data are fixed.

(b) **Element and network relations.** Adopt
$$V_L=L\dot I,\qquad V_R=RI,\qquad I_C=\dot Q,\qquad V_C=C^{-1}Q.$$
Positive definiteness makes $C^{-1}$ well defined: $Cz=0$ implies $z^{\mathsf T}Cz=0$, hence $z=0$; an injective square finite matrix is invertible by [[thm-invertible-matrix-theorem]]. The voltage drop on an inductive/resistive branch is $(V_L+V_R)_\alpha$, with either element omitted by setting its corresponding matrix to zero; a capacitive branch has drop $(V_C)_\beta$. Thus the three voltage symbols refer to distinct element drops. In a purely inductive use, abbreviate $V_L$ by $V$. The linkage is $LI$ and the induced emf convention is $e_L:=-V_L$. The capacitor scalar law is $V_C=Q/C$ when $m=1$.

For a branch $b$ let $i_b$ be its oriented current and $v_b$ its voltage drop from tail to head (a source may have a negative drop). Define the incidence matrix by $A_{ab}:=\mathbf1_{\{a=\operatorname{tail}(b)\}}-\mathbf1_{\{a=\operatorname{head}(b)\}}$. **Kirchhoff's current law** is $Ai(t)=0$, expressing no node-charge accumulation. A **closed walk** is a finite sequence of traversals of branches with matching successive nodes and final node equal to initial node. If its signed traversal count is $z_b$ (forward minus backward), **Kirchhoff's voltage law** is $\sum_bz_bv_b(t)=0$. Adopt it for every closed walk. Equivalently it suffices to impose it on a chosen linearly independent spanning set (basis) of the real span of their traversal-count vectors; this is the meaning of independent loops here. These are imposed ideal network constraints, not statements about arbitrary field circulations.

The bookkeeping energies are $\frac12I^{\mathsf T}LI$ and $\frac12Q^{\mathsf T}C^{-1}Q$. If a smooth compact conserved-profile realization of [[def-em-steady-current-regime]](b) is specified, identification of its linkage matrix with the declared $L$ is an additional model premise, not automatic.

(c) **Quasistatic regime.** Specify a geometric size $\ell>0$, a time scale $T>0$ and a chosen dimensionless tolerance $0<\epsilon_{\rm qs}<1$. The declaration $\ell/(cT)\ll1$ means $\ell/(cT)\le\epsilon_{\rm qs}$ with a tolerance regarded as small in the chosen application. Negligible radiation and leakage, ideal terminals and the fixed conductor geometry are separately adopted idealizations. Neither this inequality nor these idealizations give a quantitative error bound for an arbitrary full Maxwell solution; no universal accuracy is asserted.

(d) **Units and scope.** $V_L,V_R,V_C,v_b$ carry volts, $I,I_C,i_b$ amperes, $Q$ coulombs, $t$ seconds, $L$ henries ($\mathrm H=\mathrm V\,\mathrm s\,\mathrm A^{-1}$), $C$ farads ($\mathrm F=\mathrm C\,\mathrm V^{-1}$), and $R$ ohms ($\Omega=\mathrm V\,\mathrm A^{-1}$). The model excludes radiation, distributed-element, nonlinear, hysteretic, leakage and proximity effects; resistor loss is retained through $R$. Subluminal material speeds are required if a relativistic moving-matter interpretation is added. The model is adopted and contains no measurement or derivation from the vacuum Maxwell equations.

## Status and conventions

The scalar series RL loop consists of one inductive/resistive branch and a source: voltage balance gives $L\dot I+RI=V_{\rm source}$. The source-free scalar LC loop uses $R=0$, equal oriented currents $I=I_C=\dot Q$ from the node law, and voltage balance $L\dot I+Q/C=0$. These identify the exact network assumptions used by the later conditional deductions. General network solvability is not asserted.

## Source notes

Tong §4.1.2–4.1.3, printed pp. 71–77, supplies inductive energy, the induced-emf sign and the adoption of Ohm's law; its worked dynamical example there is a sliding bar. Fitzpatrick §7.4–7.6, printed pp. 222–234, supplies the distinct inductive/resistive voltage drops, RL equation (7.37), and series LCR law (7.76), including capacitor current as the charge derivative. The finite network and matrix formulation here is explicitly adopted model content; no source is represented as proving a Maxwell-to-network error estimate.

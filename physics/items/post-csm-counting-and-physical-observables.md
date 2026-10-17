---
id: post-csm-counting-and-physical-observables
kind: postulate
title: "Classical particle counting and physical observables"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-csm-phase-space-reference
  - def-csm-statistical-state-observable
  - def-cm01-units
dependency_roles:
  def-csm-phase-space-reference: formulation-prerequisite
  def-csm-statistical-state-observable: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
physical_scope: "Finite-N classical phase spaces with explicitly declared species and observationally indistinguishable labels; no derivation of indistinguishability or quantum statistics."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §§1.2–1.3"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

For a declared classical model with $N_a$ operationally indistinguishable
particles of each species $a$, label those particles by
$\{(a,i):1\le i\le N_a\}$ on the auxiliary labelled cover, and let
$S_{N_a}$ denote the permutation group of that species' finite label set.
The product group $G=\prod_a S_{N_a}$ acts on the labelled phase space
$\Gamma_N=T^*Q_N$ by the cotangent lifts of within-species permutations. Let
$\Pi_N:\Gamma_N\to\Gamma_N/G$ be its measurable orbit map from
[[def-csm-phase-space-reference]]. Choose $a_0>0$ as a fixed primitive
reference parameter with action units J s; [[def-cm01-units]] supplies its
dimension, not its value or the choice of this parameter. Here $d$ is the
number of spatial dimensions and $N=\sum_aN_a$. No numerical value or
identification of $a_0$ with Planck's constant is imposed.

Use the weighted labelled lift
$$m_N^{\mathrm{phys}}:=\frac{1}{\prod_aN_a!\,a_0^{dN}}\,d\Lambda_N =\frac{1}{\prod_aN_a!\,a_0^{dN}}\,dq\,dp$$
on $\Gamma_N$, where $d\Lambda_N$ is the Liouville density and the last
expression is its coordinate density in canonical charts, with coordinates
read in SI numerical units. The coordinate volume $dq\,dp$ has action
dimension $(\mathrm{J\,s})^{dN}$, so the reference is dimensionless. The
physical quotient reference is
$$\bar m_N^{\mathrm{phys}}(B):=m_N^{\mathrm{phys}}(\Pi_N^{-1}(B))\qquad(B\in\mathcal F_{\mathrm{quot}}).$$
Thus $m_N^{\mathrm{phys}}$ is on the labelled cover $\Gamma_N$, and
$\bar m_N^{\mathrm{phys}}=(\Pi_N)_*m_N^{\mathrm{phys}}$ is on
$\Gamma_N/G$; with $c_N=a_0^{-dN}$, the latter is exactly the normalized
quotient reference of [[def-csm-phase-space-reference]].

Physical observables for indistinguishable particles are measurable
$G$-invariant functions $A:\Gamma_N\to\mathbb R$, equivalently measurable
functions $\bar A$ on the quotient with $A=\bar A\circ\Pi_N$. For every such
observable with an integrable expectation, its integral against
$m_N^{\mathrm{phys}}$ equals the quotient integral against
$\bar m_N^{\mathrm{phys}}$. A labelled density represents a physical state on
the quotient only if it is invariant under $G$ almost everywhere with respect
to $m_N^{\mathrm{phys}}$; an invariant representative may then be used. In
particular, an indistinguishable-particle Hamiltonian must be invariant under
these permutations (or agree almost everywhere with its permuted versions
when only its Gibbs density is at issue). A label-specific coordinate
statistic on the lift is not itself a quotient observable. Under a
permutation-invariant state its marginal law
can instead be interpreted as the law of a uniformly selected particle within
the same species, or of a uniformly selected coordinate of the same type
within that species. Symmetric sums and averages within each species are
quotient observables.
Calculations of labelled momentum components in
[[pthm-csm-canonical-momentum-equipartition]] use this symmetric labelled
lift, and their permutation-invariant kinetic sums and averages are physical
observables.

If labels are operationally distinguishable, omit the corresponding
permutation factor and use the labelled phase space directly. The convention
is part of the preparation and reference model; it is not deduced from
Hamiltonian mechanics. Whether a quantity is represented by a gauge-dependent
canonical momentum or by a gauge-invariant mechanical momentum is fixed by the
stated model and gauge convention. No quantum exchange law, actual preparation
mechanism, or empirical indistinguishability test is asserted.

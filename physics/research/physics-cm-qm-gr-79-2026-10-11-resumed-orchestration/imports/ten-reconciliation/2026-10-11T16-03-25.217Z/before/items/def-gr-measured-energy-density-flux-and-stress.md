---
id: def-gr-measured-energy-density-flux-and-stress
kind: definition
title: "Physical reading of the observer split: measured energy density, energy flux and momentum density, and measured stress"
status: draft
origin: session
domain: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-observer-energy-momentum-current, lem-gr-observer-energy-momentum-decomposition, def-gr-stress-energy-tensor-field, def-gr-si-unit-and-coordinate-conventions, def-gr-metric-volume-form-and-current-flux, def-gr-observer-congruence-and-adapted-charts, def-gr-observer-and-rest-space]
dependency_roles:
  def-gr-observer-energy-momentum-current: mathematical-premise
  lem-gr-observer-energy-momentum-decomposition: mathematical-premise
  def-gr-stress-energy-tensor-field: formulation-prerequisite
  def-gr-si-unit-and-coordinate-conventions: formulation-prerequisite
  def-gr-metric-volume-form-and-current-flux: formulation-prerequisite
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
physical_scope: "The physical reading of the algebraic observer split of a smooth symmetric two-tensor on the smooth classical branch of the framework: the measured energy density, energy-flux and momentum-density readings and the measured stress of a prescribed tensor for a prescribed observer congruence, with the framework's unit conventions. The item fixes names, component formulas and units only; it asserts no positivity, no conservation, no dynamics, no measurement and no claim that the tensor is realized by matter."
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 4.1.2: E = T(n,n) is the matter energy density and p = -T(n,gamma(.)) the momentum density measured by the Eulerian observer, with S = gamma*T the measured stress, printed p. 52 (PDF p. 52); section 5.2.3: the remark that p plays the role of an energy flux and that both aspects are equivalent, printed p. 74 (PDF p. 74)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.3: T_{mu nu}u^mu u^nu = rho is the energy density measured by an observer comoving with the fluid, printed p. 186 (PDF p. 193); section 4.5.5: the conserved charge of the current -K^mu T_{mu nu} and its energy interpretation for a timelike Killing vector, printed pp. 188-189 (PDF pp. 195-196)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4: the energy-momentum tensor as the source of the field equation and the reading of its components, printed pp. 116-118 (PDF pp. 123-125)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Adopt the framework's unit and reading conventions
([[def-gr-si-unit-and-coordinate-conventions]]) and the stress-energy slot
([[def-gr-stress-energy-tensor-field]]). Let $(M,g,N)$ be a time-oriented
smooth Lorentzian four-manifold, let $U\subseteq M$ be a nonempty open subset,
let $T$ be a smooth symmetric covariant $2$-tensor field on $U$ and let $n$ be
a smooth observer congruence on $U$
([[def-gr-observer-congruence-and-adapted-charts]]). Let $\mu$, $J$, $\Phi$
and $S$ be the fields of [[def-gr-observer-energy-momentum-current]].

**(a) Measured energy density and its unit.** The smooth function
$\mu=T_{ab}n^an^b$ is read as the **energy density measured by the observers of
the congruence $n$**, with numerical values in $\mathrm J\,\mathrm m^{-3}$ when
$T$ is read in the orthonormal-frame convention of
[[def-gr-si-unit-and-coordinate-conventions]] clause (c). The same item fixes
the reading "$T_{ab}n^an^b$ for unit timelike $n$ in
$\mathrm J\,\mathrm m^{-3}$".

**(b) Energy flux and momentum density.** The smooth spatial vector field
$\Phi=h(J)$ of [[def-gr-observer-energy-momentum-current]] clause (d) is read
as the **energy-flux vector** of the congruence, and its metric dual
$\Phi^{\flat}$ (the covector $a\mapsto g(\Phi,a)$) is read as the **momentum
density** of the congruence; the framework's component reading of
[[def-gr-stress-energy-tensor-field]] names the corresponding component of $T$
energy flux and momentum density, and section 5.2.3 of the cited Gourgoulhon
reference records that these are two aspects of one object. Explicitly, in
every ordered $g_p$-orthonormal basis $(e_0,e_1,e_2,e_3)$ with $e_0=n_p$ the
component of $\Phi$ in the direction $e_i$ is

$$\Phi^i(p)=T^{0i}(p)=-T(e_0,e_i)(p),\qquad i=1,2,3,$$

by clause (d) of [[lem-gr-observer-energy-momentum-decomposition]]; the sign
convention is part of this definition. The energy-flux and momentum-density
components are read in $\mathrm J\,\mathrm m^{-3}$ by the same component
convention, and the SI energy flux is obtained from these components by the
unit-restoration rule of [[def-gr-si-unit-and-coordinate-conventions]].

**(c) Measured stress.** The smooth symmetric field $S=h^*h^*T$ of
[[def-gr-observer-energy-momentum-current]] clause (e) is read as the **stress
measured by the observers** of the congruence: for unit spatial vectors
$e,e'$ in the rest space of $n_p$, $S_p(e,e')$ is read as the force per unit
area in the direction $e$ across a surface whose normal is $e'$, with
components in $\mathrm J\,\mathrm m^{-3}$ by the conventions.

**(d) Current and charge reading.** The smooth vector field $J$ of
[[def-gr-observer-energy-momentum-current]] clause (c) is read as the
**energy-momentum current density measured by the congruence**, and for a
finite smooth singular $3$-chain $\Sigma$ of $U$ the flux $\Phi_J(\Sigma)$ of
[[def-gr-metric-volume-form-and-current-flux]] clause (b) is read as the
energy-momentum assigned to $\Sigma$ by the congruence, in the sense of the
charge reading of that item. For a $3$-chain carried by a spacelike slice
whose normal is (up to sign) $n$, the index-lowered component $-J_an^a=\mu$ is
the density integrated in that reading.

**(e) Scope.** The reading is interpretive and applies to every prescribed
smooth symmetric $T$ and every observer congruence. No positivity of $\mu$, no
conservation of $J$, no dynamics, no existence of a matter model realizing $T$
and no measurement is asserted; the definition is confined to the smooth
branch of the framework, and $T$ need not satisfy any field equation.

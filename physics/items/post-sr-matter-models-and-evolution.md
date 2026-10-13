---
id: post-sr-matter-models-and-evolution
kind: postulate
title: "Adopted continuum matter models, evolution equations and observer readings"
status: published
origin: pipeline
domain: physics
physical_scope: "Flat affine Minkowski spacetime with the SI conventions of the framework, in one inertial chart; matter described only by the adopted scalar-field, dust and perfect-fluid models, their additive total tensor and the adopted observer readings. The postulate contains no gravity, no electromagnetic coupling, no force law, no equation of state, no microscopic derivation, no claim that these models exhaust physical matter, and no empirical premise; it asserts no conservation of the tensors."
deps: [def-sr-affine-minkowski-model, def-sr-si-units-and-coordinate-conventions, lem-sr-scalar-field-euler-lagrange, lem-sr-scalar-field-hilbert-stress-energy, lem-sr-perfect-fluid-conservation-equations, def-ck-tensor-field-on-minkowski-space, def-sr-observer-congruence-and-kinematics, post-sr-massive-particle-dynamics, def-sr-stress-energy-tensor-and-force-density, post-sr-inertial-covariance, post-sr-ideal-clocks-and-light, lem-sr-observer-stress-energy-decomposition]
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  lem-sr-scalar-field-euler-lagrange: formulation-prerequisite
  lem-sr-scalar-field-hilbert-stress-energy: formulation-prerequisite
  lem-sr-perfect-fluid-conservation-equations: formulation-prerequisite
  def-ck-tensor-field-on-minkowski-space: formulation-prerequisite
  def-sr-observer-congruence-and-kinematics: formulation-prerequisite
  post-sr-massive-particle-dynamics: formulation-prerequisite
  def-sr-stress-energy-tensor-and-force-density: formulation-prerequisite
  post-sr-inertial-covariance: formulation-prerequisite
  post-sr-ideal-clocks-and-light: formulation-prerequisite
  lem-sr-observer-stress-energy-decomposition: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Tong, General Relativity, University of Cambridge Part III Mathematical Tripos (Michaelmas Term 2019); c = 1 formulas converted to x^0 = c t; 4.5.1-4.5.5 printed pp. 181-191: scalar-field action (4.42)-(4.43) and equation of motion, Hilbert energy-momentum tensor (4.46), diffeomorphism invariance and conservation (4.50), flat-space Noether form, scalar tensor (4.51), Maxwell tensor (4.52), perfect fluid (4.53) with conservation equations (4.54)-(4.55), and the flat-space conserved-charge box argument of 4.5.5"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 printed pp. 28-30 (energy-momentum tensor, dust T^{mu nu}=rho U^mu U^nu (1.106), perfect fluid (1.107)-(1.110), scalar and Maxwell tensors (1.111)-(1.112), conservation (1.113) with the remark that the proof follows from each matter model's equations of motion) and Chapter 5 printed pp. 138-139 (on-shell conservation from diffeomorphism invariance with compact-support variations, (5.34)-(5.38))"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Chapter 9 pp. 179-197: 9.1 pp. 179-182 (current vector, flux, charge conservation), 9.2 pp. 183-191 (stress-energy tensor, conservation and flux, symmetry, dust, rank-2 transformation law, pressure, perfect fluid, worked examples, energy conditions), 9.3 pp. 192-197 (Gauss's theorem, integral conservation laws, the energy-momentum vector, angular momentum); the printed 9.2.8 dominant energy condition p. 191 has the defective |P| > rho and is not used"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Postulate

Adopt, on top of the flat spacetime postulates [[post-sr-inertial-covariance]] and [[post-sr-ideal-clocks-and-light]], the SI conventions [[def-sr-si-units-and-coordinate-conventions]] and the particle premises [[post-sr-massive-particle-dynamics]], the following classical continuum matter models on an open set $\Omega\subseteq A$ of the affine Minkowski model ([[def-sr-affine-minkowski-model]]).

The adopted matter models, stress-energy terminology, scalar stationarity and Hilbert-tensor identification in clauses (i)–(v) below apply when $\Omega$ is nonempty, as required by [[def-sr-stress-energy-tensor-and-force-density]], [[lem-sr-scalar-field-euler-lagrange]] and [[lem-sr-scalar-field-hilbert-stress-energy]]. If $\Omega=\varnothing$, retain only the degenerate mathematical branch of [[def-ck-tensor-field-on-minkowski-space]]: every field is the unique empty map of its type, tensor addition and the displayed component formulas are empty maps, and all pointwise equations are vacuous. That branch supplies no matter or observer reading, does not invoke the nonempty-domain stress-energy, stationarity or Hilbert-tensor interfaces, and makes no assertion about an action integral.

**(i) Scalar field.** A real smooth dimensionless field $\varphi:\Omega\to\mathbb R$, a smooth potential $V:\mathbb R\to\mathbb R$ with values in inverse square metres ($\mathrm m^{-2}$) and a constant $K>0$ in joule per metre ($\mathrm J/\mathrm m$) have the field equation $\Box\varphi=V'(\varphi)$ — the Euler–Lagrange equation of the adopted local action density, with stationarity defined by the finite relative action for compactly supported field variations ([[lem-sr-scalar-field-euler-lagrange]]); the model's stress-energy tensor is the Hilbert tensor of [[lem-sr-scalar-field-hilbert-stress-energy]].

**(ii) Dust.** A $C^1$ rest energy density $\rho:\Omega\to(0,\infty)$ (joule per cubic metre) and a $C^1$ future unit timelike field $n:\Omega\to V$ ($\eta(n,n)=-1$) satisfy $\partial_a(\rho n^a)=0$ and $n^a\partial_an^b=0$; the stress-energy tensor is $T=\rho\,n\otimes n$.

**(iii) Perfect fluid.** $C^1$ maps $\varepsilon,P:\Omega\to\mathbb R$ (energy density and pressure), both in joule per cubic metre, and a $C^1$ future unit timelike field $n$ satisfy the energy-balance and Euler equations of [[lem-sr-perfect-fluid-conservation-equations]]; an equation of state or evolution equation determining $P$ is part of the model and is not supplied by this postulate; the stress-energy tensor is $T=(\varepsilon+P)n\otimes n+P\eta^{-1}$, where $\eta^{-1}$ is the symmetric type-$(2,0)$ inverse metric with components $\eta^{ab}$.

**(iv) Additivity.** The total stress-energy tensor of a composite system is the sum of the stress-energy tensors of its constituents (tensor-field addition on $\Omega$).

**(v) Adopted observer readings and units.** For a tensor physically assigned to matter in this model, all inertial components $T^{ab}$ have units joule per cubic metre. In length coordinates $x^0=ct$, an ideal observer with future unit direction $n$ and four-velocity $U=cn$ reads the numerical contractions of [[lem-sr-observer-stress-energy-decomposition]] as energy density $\varepsilon_n=T^{ab}n_an_b$, momentum density $\pi_n^a=-c^{-1}h^a{}_bT^{bc}n_c$ and rest stress $S_n^{ab}=h^a{}_ch^b{}_dT^{cd}$, where $h(v)=v+\eta(n,v)n$. In an adapted inertial frame these are $T^{00}$, $T^{0i}/c$ and $T^{ij}$ respectively, and the energy-flux components are $cT^{i0}=c^2\pi_n^i$. Momentum density has units kilogram per square metre per second, energy flux has units watt per square metre, and rest stress has units joule per cubic metre. These identifications are adopted model readings, not mathematical facts about an arbitrary symmetric tensor and not reported measurements. If $f^b=\partial_aT^{ab}$ is assigned to external exchange, the spatial components $f^i$ are force per volume and $cf^0$ is power per volume; the corresponding numerical balances are $\partial_t(T^{00})+\partial_i(cT^{i0})=cf^0$ and $\partial_t(T^{0j}/c)+\partial_iT^{ij}=f^j$. Neither assignment selects a force law or asserts conservation.

## Scope and status

This postulate adopts model equations and tensor identifications only. It does not assert conservation of the tensors — that is derived from these equations in [[pthm-sr-local-stress-energy-conservation]] — does not select any force law, interaction, equation of state, thermodynamic or dissipative behaviour, does not claim that these models exhaust physical matter, and contains no empirical premise, measurement or uncertainty statement. The dimensionless scalar field, the potential with its stated units and the constant $K$ are adopted primitive data of the scalar model; the SI conventions and the identification of the coordinate $x^0$ with $ct$ are those of [[def-sr-si-units-and-coordinate-conventions]], and the observer congruence vocabulary agrees with [[def-sr-observer-congruence-and-kinematics]] for smooth fields ([[def-ck-tensor-field-on-minkowski-space]]).

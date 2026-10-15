---
id: def-qft-framework-units
kind: definition
domain: physics
library: physics
title: "Quantum field quantities and compatible SI normalizations"
status: draft
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 0
deps:
  - def-sr-affine-minkowski-model
  - def-inertial-frame-and-inertial-chart
  - def-sr-si-units-and-coordinate-conventions
  - def-em-si-conventions
  - def-em-electromagnetic-tensor
  - def-test-function-space-d-of-an-open-set
  - def-test-function-topology
  - def-distribution
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-unbounded-linear-operator-domain-and-graph
  - def-countable-choice
  - def-symmetric-self-adjoint-and-essentially-self-adjoint
  - def-projection-valued-measure
  - lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus
dependency_roles:
  def-sr-affine-minkowski-model: formulation-prerequisite
  def-inertial-frame-and-inertial-chart: formulation-prerequisite
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-em-electromagnetic-tensor: formulation-prerequisite
  def-test-function-space-d-of-an-open-set: mathematical-premise
  def-test-function-topology: mathematical-premise
  def-distribution: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-real-and-complex-inner-product-space: mathematical-premise
  def-unbounded-linear-operator-domain-and-graph: mathematical-premise
  def-countable-choice: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus: mathematical-premise
proof_strategy: direct
physical_scope: "A unit and domain dictionary for selected quantum-field model data in four-dimensional Minkowski length coordinates. It declares engineering normalizations and conventions only; it constructs no field representation, QED dynamics, continuum limit, apparatus, or empirical result."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark Srednicki, Quantum Field Theory (author-hosted 2006 prepublication book draft), §12, ‘Dimensional Analysis with hbar = c = 1,’ printed pp. 104–105 (PDF pp. 103–104), equations (12.1)–(12.12)"
      url: "https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf"
    - title: "David Tong, Quantum Field Theory, author-hosted Part III lecture notes, Chapter 0 and §0.1 Units and Scales"
      url: "https://davidtong.org/teaching/quantum-field-theory/qfthtml/S0"
    - title: "BIPM, The International System of Units (SI), 9th edition, official current PDF version 4.01, §2.2 and §2.3.1"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition, §5.1, Theorem 5.1 and complete proof, printed pp. 145–146"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
---

## Definition

Fix the oriented, time-oriented affine Minkowski spacetime and an inertial
chart of [[def-sr-affine-minkowski-model]] and
[[def-inertial-frame-and-inertial-chart]]. Use signature
$\eta=\operatorname{diag}(-1,1,1,1)$, length coordinates
$x^0=ct$ and $x^i$ in metres, and coordinate time $t$ in seconds as in
[[def-sr-si-units-and-coordinate-conventions]]. Greek spacetime indices run
from $0$ to $3$; spatial indices run from $1$ to $3$ and are contracted with
the Euclidean spatial metric. The coordinates $x^a$ have unit metre and
$\partial_a:=\partial/\partial x^a$ has unit $\mathrm m^{-1}$.

The positive constants $c$, $h$ and $e_{\rm SI}$ have the exact SI defining
values; write $\hbar:=h/(2\pi)$. The magnetic constant $\mu_0>0$ has SI unit
$\mathrm{N\,A^{-2}}$ and is experimentally determined under the current SI;
no exact numerical value or current estimate for it is adopted. Put
$\varepsilon_0=(\mu_0c^2)^{-1}$ when that symbol is used. These are SI
normalization inputs, not empirical claims about a selected QFT model.

For a species with rest mass $m_{\rm rest,SI}>0$ in kilograms define its
inverse-length mass parameter

$$\mu:=\frac{m_{\rm rest,SI}c}{\hbar}\quad[\mathrm m^{-1}].$$

For a spatial wave vector $\mathbf k\in\mathbb R^3$, with each component in
$\mathrm m^{-1}$ and the Euclidean norm, define
$\omega_\mu(\mathbf k):=\sqrt{|\mathbf k|^2+\mu^2}\in\mathbb R_{>0}$, with
unit $\mathrm m^{-1}$. Here $\omega_\mu$ is the temporal wave number, not the
SI angular frequency; the corresponding SI angular frequency is
$c\omega_\mu$. Energy and momentum are $E=\hbar c\omega_\mu$ in joules and
$\mathbf p=\hbar\mathbf k$ in $\mathrm{kg\,m\,s^{-1}}$. With
$p=(\omega_\mu(\mathbf k),\mathbf k)\in\mathbb R^4$ and
$x=(x^0,\mathbf x)\in\mathbb R^4$, the phase convention is

$$p\mathbin{\circ}x:=\omega_\mu(\mathbf k)x^0-\mathbf k\cdot\mathbf x=-\eta(p,x).$$

For a selected local action represented on a chart region
$\mathcal U\subseteq\mathbb R^4$ by
$$\frac{S}{\hbar}=\int_{\mathcal U}\mathcal L_{\mathrm{nat}}(x)\,d^4x,\quad d^4x:=dx^0dx^1dx^2dx^3,$$
the natural Lagrangian density $\mathcal L_{\mathrm{nat}}$ has unit
$\mathrm m^{-4}$. Since $x^0=ct$, the corresponding SI Lagrangian density is
$\mathcal L_{\mathrm{SI}}:=\hbar c\,\mathcal L_{\mathrm{nat}}$ and has unit
$\mathrm{J\,m^{-3}}$. This unit conversion alone does not identify a
Lagrangian density with the model's Hamiltonian energy density.

For canonical engineering dimensions in this four-dimensional normalization,
use the formal field symbols $\phi_{\rm n}$ and $\psi_{\rm n}$ in the selected
scalar and Dirac kinetic terms, assigning them length degrees $-1$ and
$-3/2$, respectively. These are the dimensions fixed by those free kinetic
terms, not exact scaling dimensions of interacting fields: anomalous
dimensions, when present, are separate quantities. These symbols do not
assert pointwise field maps or operator fields; a model supplies its field
space and regularity. Let $A^\mu_{\rm SI}=(\varphi/c,\mathbf A)$ and
$F^{\mu\nu}_{\rm SI}$ use the component convention of
[[def-em-electromagnetic-tensor]], namely
$F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$, with
$F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$ only when a potential is
supplied. Define the normalized photon potential and field strength by

$$a^\mu:=\frac{A^\mu_{\rm SI}}{\sqrt{\mu_0\hbar c}},\qquad f^{\mu\nu}:=\frac{F^{\mu\nu}_{\rm SI}}{\sqrt{\mu_0\hbar c}}.$$

They have length degrees $-1$ and $-2$, respectively. The EM supplier is used
only for SI units and tensor components: no classical Maxwell equation,
Lorentz-force law, or classical-to-quantum identification is adopted here.

For any separately declared SI charge parameter $q_{\rm SI}$ in coulombs put

$$q_{\rm n}:=q_{\rm SI}\sqrt{\frac{\mu_0c}{\hbar}}.$$

It is dimensionless. For the positive exact SI elementary charge use
$e_{\rm n}:=e_{\rm SI}\sqrt{\mu_0c/\hbar}$ and define the rationalized
dimensionless coupling $\alpha:=e_{\rm n}^2/(4\pi)$. Since $\mu_0$ is
measured, these formulas do not assign an exact numerical value to
$e_{\rm n}$ or $\alpha$. If the model uses minimal coupling, its convention is
$D_\mu=\partial_\mu-iq_{\rm n}a_\mu$; for an electron with
$q_{\rm SI}=-e_{\rm SI}$ this reads $D_\mu=\partial_\mu+ie_{\rm n}a_\mu$.
Bare, renormalized-at-scale, and measured effective charges are separately
labelled model parameters; applying the conversion to one label does not
identify it with either of the others or specify a running law.

In a supplied four-component spinor representation, let
$\gamma^a\in\operatorname{End}_{\mathbb C}(\mathbb C^4)$, $a=0,1,2,3$, be
dimensionless linear maps satisfying
$\{\gamma^a,\gamma^b\}:=\gamma^a\gamma^b+\gamma^b\gamma^a
=-2\eta^{ab}I_4$, where $I_4$ is the identity map. Set $\beta:=\gamma^0$
and $\alpha^i:=\beta\gamma^i$; then $\beta^2=I_4$ and
$\gamma^i=\beta\alpha^i$. For a supplied four-component spinor $\psi$ write
$\bar\psi:=\psi^\dagger\beta$. The effective Clifford metric is $-\eta$.
A supplied free Dirac model may use
$(i\gamma^a\partial_a-\mu)\psi=0$ for its model-supplied spinor field
$\psi$; that model supplies its field domain and regularity. The phase and
Clifford choices are conventions; this item proves no representation or field
equation.

For the autonomous evolution convention, assume Countable Choice
[[def-countable-choice]]: every sequence of nonempty sets has a choice
function. Let a selected model supply a complex Hilbert space $\mathscr H$
as in [[def-hilbert-space]] and a time-independent complex-linear Hamiltonian
$H:D(H)\to\mathscr H$ with a specified dense linear domain
$D(H)\subseteq\mathscr H$ and SI energy
unit joules. Require self-adjointness as in
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]: $H=H^*$,
including equality of domains and values. Here $y\in D(H^*)$ precisely when
there is a $z\in\mathscr H$ such that
$\langle Hx,y\rangle=\langle x,z\rangle$ for every $x\in D(H)$, and
$H^*y=z$; density makes $z$ unique.

The published mathematical supplier
[[lem-nrqm-controlled-dynamics-cc-arbitrary-hilbert-spectral-calculus]]
then supplies the spectral measure $E_H$ on the Borel subsets of
$\mathbb R$. This is a normalized projection-valued measure as in
[[def-projection-valued-measure]]: its values are bounded orthogonal
projections, $E_H(\mathbb R)=I$, $E_H(B\cap C)=E_H(B)E_H(C)$, and it is
countably additive in norm on every vector. For $\xi\in\mathscr H$ put
$\nu_\xi(B):=\langle E_H(B)\xi,\xi\rangle$, a finite positive measure.
The spectral integral of $\lambda$ represents $H$, on exactly the domain
$D(H)=\{\xi\in\mathscr H:\int_{\mathbb R}\lambda^2\,d\nu_\xi(\lambda)<\infty\}$.
For real $t$ in seconds define the autonomous evolution by bounded Borel
functional calculus,
$$U(t):=\exp(-itH/\hbar):=\int_{\mathbb R}e^{-it\lambda/\hbar}\,dE_H(\lambda).$$
The spectral variable $\lambda$ carries unit joule. This exponential is a
bounded operator on all of $\mathscr H$, even when $H$ is unbounded; it
does not mean an operator power series on arbitrary vectors. The supplier
gives a strongly continuous unitary group: $U(0)=I$,
$U(t+s)=U(t)U(s)$ and $\|U(t)\xi-U(t_0)\xi\|\to0$ as $t\to t_0$ for
each $\xi\in\mathscr H$. A model may restrict it to a declared
$I\subseteq\mathbb R$. Each $U(t)$ is a surjective complex-linear map
satisfying $\langle U(t)\xi,U(t)\zeta\rangle=\langle\xi,\zeta\rangle$
for all $\xi,\zeta\in\mathscr H$; write $U(t)^*:=U(t)^{-1}$. The exponent
is dimensionless because $\hbar$ has unit $\mathrm{J\,s}$. For any
model-supplied complex-linear operator $O:D(O)\to\mathscr H$, with specified
linear domain $D(O)\subseteq\mathscr H$, define its Heisenberg conjugate by
$$O_H(t):=U(t)^*O\,U(t),\quad D(O_H(t)):=\{\xi\in\mathscr H:U(t)\xi\in D(O)\}.$$
The model supplies the Hamiltonian and operator domains; the spectral supplier
justifies this evolution only for those data and hypotheses. This dictionary
constructs no model-specific Hamiltonian or field representation and does not
adopt a physical dynamics law. Where a free-field
module uses an inner product linear in its second variable, convert to the
repository's first-variable-linear pairing by
$\langle u,v\rangle_{\rm FF}=(v,u)_{\rm root}$.

For precision about domains, let $\mathcal H$ be a complex Hilbert space with
inner product linear in its first variable and let
$\mathscr D\subseteq\mathcal H$ be a dense complex linear subspace. A **weak operator-valued distribution
on the common domain $\mathscr D$** means a complex-linear assignment
$g\mapsto\Phi(g)$ for $g\in\mathcal D(\mathbb R^4)$, where each
$\Phi(g):\mathscr D\to\mathcal H$ is linear and, for every
$u,v\in\mathscr D$, the scalar map
$g\mapsto\langle\Phi(g)u,v\rangle$ is a continuous complex-linear functional
on the test-function space with the topology of
[[def-test-function-topology]], hence a distribution as in [[def-distribution]].
This definition gives no pointwise field $\Phi(x)$ and no product
$\Phi(x)\Phi(x)$; a product or extension needs a separate construction. It
asserts only matrix-element continuity and the stated linear maps; all further
operator properties, locality, local observable algebras, graded locality,
and gauge-specific potential behavior must be supplied by a constructed
model. Test-function units can be chosen so a specified smeared observable is
dimensionless; there is no universal test-function unit asserted here.

Primitive data for a selected model include its species and rest masses,
declared charge parameters, regulator geometry, couplings, state and any
constructed measurement data. Vacuum-subtracted Hamiltonians, regulator
eigenvalues, distributions, correlations and outcome probabilities are
derived only when their constructions supply the required domains and
well-definedness. This dictionary neither constructs an interacting
four-dimensional QED Hilbert space nor asserts pointwise field products,
scattering, an LSZ limit, asymptotic completeness, or removal of a regulator.

## Facts & Assumptions

**Given:** SI base-unit identities, the stated Minkowski coordinate convention, and the canonical four-dimensional kinetic terms used only to check engineering dimensions.

[A1] For dimensional bookkeeping use $1\,\mathrm J=1\,\mathrm{kg\,m^2\,s^{-2}}$, $1\,\mathrm C=1\,\mathrm{A\,s}$, $1\,\mathrm N=1\,\mathrm{kg\,m\,s^{-2}}$, and $1\,\mathrm T=1\,\mathrm{N\,A^{-1}\,m^{-1}}$.

[A2] The canonical engineering-dimension check uses the local-action normalization $S/\hbar=\int\mathcal L_{\mathrm{nat}}\,d^4x$, dimensionless $S/\hbar$, four-volume of degree $+4$, and the four-dimensional free kinetic densities $\partial\phi\,\partial\phi$, $\bar\psi i\gamma^a\partial_a\psi$, and $f_{ab}f^{ab}$ with $f_{ab}=\partial_a a_b-\partial_b a_a$. It assigns $\bar\psi$ the same engineering degree as $\psi$. This is a normalization convention, not an existence or scaling theorem.

[L1] [[def-sr-si-units-and-coordinate-conventions]]: every inertial-chart coordinate $x^a$ has unit metre and $x^0=ct$.

[L2] [[def-em-si-conventions]]: $\mu_0$ carries $\mathrm{N\,A^{-2}}$ and is measured, while $e_{\rm SI}$ and $c$ have exact SI defining values.

[L3] [[def-em-si-conventions]]: the scalar potential $\varphi$ carries V and the vector potential $\mathbf A$ carries T m, so the four-potential components $(\varphi/c,\mathbf A)$ carry T m.

[L4] [[def-em-electromagnetic-tensor]]: the covariant components are $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$.

[L5] [[def-em-electromagnetic-tensor]]: when a $C^1$ potential $A_\mu$ is supplied, $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$.

## Proof

1.1 Since each coordinate has unit metre by [L1], each coordinate derivative has unit $\mathrm m^{-1}$. With $m_{\rm rest,SI}$ in kg, $c$ in $\mathrm{m\,s^{-1}}$, and $\hbar$ in $\mathrm{J\,s}$, the quotient $m_{\rm rest,SI}c/\hbar$ has unit $(\mathrm{kg\,m\,s^{-1}})/(\mathrm{kg\,m^2\,s^{-1}})=\mathrm m^{-1}$. Therefore $|\mathbf k|^2+\mu^2$ has unit $\mathrm m^{-2}$, $\omega_\mu$ has unit $\mathrm m^{-1}$, $\hbar c\omega_\mu$ has unit J, and $\hbar\mathbf k$ has unit $\mathrm{kg\,m\,s^{-1}}$. [given, L1, A1, algebra]

1.2 The SI four-potential has unit $\mathrm{T\,m}$ by [L3], which equals $\mathrm{kg\,m\,s^{-2}\,A^{-1}}$. From [L2] and [A1], $\mu_0\hbar c$ has unit $(\mathrm{kg\,m\,s^{-2}\,A^{-2}})(\mathrm{kg\,m^2\,s^{-1}}) (\mathrm{m\,s^{-1}})=\mathrm{kg^2\,m^4\,s^{-4}\,A^{-2}}$; its positive square root has unit $\mathrm{J\,A^{-1}}$. Thus $a^\mu$ has unit $\mathrm m^{-1}$. By [L5], differentiating the potential with a length-coordinate derivative gives $F_{\rm SI}$ unit $\mathrm{kg\,s^{-2}\,A^{-1}}$; division by $\sqrt{\mu_0\hbar c}$ gives $f^{\mu\nu}$ unit $\mathrm m^{-2}$. The $F$-component unit is consistent with $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ in [L4]. [given, L1, L2, L3, L4, L5, A1, algebra]

1.3 Using $\mu_0$ in $\mathrm{kg\,m\,s^{-2}\,A^{-2}}$, the quantity $\mu_0c/\hbar$ has unit $\mathrm{A^{-2}\,s^{-2}}=\mathrm{C^{-2}}$ by [A1]. Hence $q_{\rm n}$ and $e_{\rm n}$ are dimensionless, as is $\alpha=e_{\rm n}^2/(4\pi)$. Both $\partial_\mu$ and $q_{\rm n}a_\mu$ have unit $\mathrm m^{-1}$, so the terms in $D_\mu$ are dimensionally compatible. If $q_{\rm SI}=0$, then $q_{\rm n}=0$ and the same expression reduces to $D_\mu=\partial_\mu$, so the zero-charge case is also well-defined. [given, L2, A1, algebra]

1.4 Under [A2], the dimensionless action $S/\hbar$ is the integral of $\mathcal L_{\mathrm{nat}}$ against a four-volume of unit $\mathrm m^4$, so $\mathcal L_{\mathrm{nat}}$ has unit $\mathrm m^{-4}$. Multiplication by $\hbar c$, of unit $\mathrm{J\,m}$, gives the SI Lagrangian density $\mathcal L_{\mathrm{SI}}$ with unit $\mathrm{J\,m^{-3}}$. [given, A1, A2, algebra]

2.1 Write $d_L(X)$ for the exponent of metre in the engineering dimension of $X$. By [L1], $d_L(\partial_a)=-1$. The scalar kinetic density in [A2] has degree $2(d_L(\phi_{\rm n})-1)$; equating it to $-4$ gives $d_L(\phi_{\rm n})=-1$. The Dirac kinetic density has degree $d_L(\bar\psi)+d_L(\psi)-1$; the equality $d_L(\bar\psi)=d_L(\psi)$ in [A2] and density degree $-4$ give $d_L(\psi_{\rm n})=-3/2$. The photon kinetic density gives $2(d_L(a)-1)=-4$, hence $d_L(a)=-1$ and, since $f$ has one derivative of $a$, $d_L(f)=-2$. These are precisely the stated canonical engineering degrees. [given, L1, A2, algebra] ∎

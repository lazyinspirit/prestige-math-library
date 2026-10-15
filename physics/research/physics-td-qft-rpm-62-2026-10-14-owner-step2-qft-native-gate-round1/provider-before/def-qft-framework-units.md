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

For spatial wave vector $\mathbf k$ in $\mathrm m^{-1}$ put
$\omega(\mathbf k):=\sqrt{|\mathbf k|^2+\mu^2}$ in $\mathrm m^{-1}$. Here
$\omega$ is the temporal wave number, not the SI angular frequency; the
corresponding SI angular frequency is $c\omega$. Energy and momentum are
$E=\hbar c\omega$ in joules and $\mathbf p=\hbar\mathbf k$ in
$\mathrm{kg\,m\,s^{-1}}$. With $p=(\omega,\mathbf k)$ the phase convention is

$$p\mathbin{\circ}x:=\omega x^0-\mathbf k\cdot\mathbf x=-\eta(p,x).$$

The natural action is $S/\hbar$. Its canonical density in four dimensions has
unit $\mathrm m^{-4}$; the corresponding physical energy density is
$\hbar c$ times that density and has unit $\mathrm{J\,m^{-3}}$.

For canonical engineering dimensions in this four-dimensional normalization,
write $\phi_{\rm n}$ for a scalar field with length degree $-1$ and
$\psi_{\rm n}$ for a Dirac field with length degree $-3/2$. These are the
dimensions fixed by the selected free kinetic terms, not exact scaling
dimensions of interacting fields: anomalous dimensions, when present, are
separate quantities. Let $A^\mu_{\rm SI}=(\varphi/c,\mathbf A)$ and
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

The Clifford convention is $\gamma^0=\beta$, $\gamma^i=\beta\alpha^i$,
$\{\gamma^a,\gamma^b\}=-2\eta^{ab}$, so the effective Clifford metric is
$-\eta$. In a supplied free Dirac model the displayed equation is
$(i\gamma^a\partial_a-\mu)\psi=0$. The phase and Clifford choices are
conventions; this item proves no Dirac representation or field equation.
Time evolution is written $U(t)=\exp(-itH/\hbar)$ when a selected model has
actually constructed a self-adjoint Hamiltonian $H$ and its unitary group; the
corresponding Heisenberg conjugation is $O_H(t)=U(t)^*O\,U(t)$. No such
Hamiltonian or group is constructed here. Where a free-field module uses an
inner product linear in its second variable, convert to the repository's
first-variable-linear pairing by
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
$\Phi(x)\Phi(x)$; a product or extension needs a separate construction.
Smeared fields are not thereby bounded, symmetric, self-adjoint, or
self-adjointly closable. Locality, local observable algebras, graded locality,
and gauge-specific potential behavior are likewise supplied only by the
relevant constructed model modules. Test-function units can be chosen so a
specified smeared observable is dimensionless; there is no universal test
function unit asserted here.

Primitive data for a selected model include its species and rest masses,
declared charge parameters, regulator geometry, couplings, state and any
constructed measurement data. Vacuum-subtracted Hamiltonians, regulator
eigenvalues, distributions, correlations and outcome probabilities are
derived only when their constructions supply the required domains and
well-definedness. This dictionary neither constructs an interacting
four-dimensional QED Hilbert space nor asserts pointwise field products,
scattering, an LSZ limit, asymptotic completeness, or removal of a regulator.

## Facts & Assumptions

**Given:** SI base-unit identities, the stated Minkowski coordinate convention,
and the canonical four-dimensional kinetic terms used only to check
engineering dimensions.

[A1] For dimensional bookkeeping use $1\,\mathrm J=1\,\mathrm{kg\,m^2\,s^{-2}}$,
$1\,\mathrm C=1\,\mathrm{A\,s}$, $1\,\mathrm N=1\,\mathrm{kg\,m\,s^{-2}}$,
and $1\,\mathrm T=1\,\mathrm{N\,A^{-1}\,m^{-1}}$.

[A2] The canonical engineering-dimension check adopts dimensionless $S/\hbar$,
four-volume of degree $+4$, and the four-dimensional free kinetic densities
$\partial\phi\,\partial\phi$, $\bar\psi i\gamma^a\partial_a\psi$, and
$f_{ab}f^{ab}$ with $f_{ab}=\partial_a a_b-\partial_b a_a$. It assigns
$\bar\psi$ the same engineering degree as $\psi$. This is a normalization
convention, not an existence or scaling theorem.

[L1] [[def-sr-si-units-and-coordinate-conventions]]: every inertial-chart
coordinate $x^a$ has unit metre and $x^0=ct$.

[L2] [[def-em-si-conventions]]: $\mu_0$ carries $\mathrm{N\,A^{-2}}$ and is
measured, while $e_{\rm SI}$ and $c$ have exact SI defining values.

[L3] [[def-em-si-conventions]]: the scalar potential $\varphi$ carries V and
the vector potential $\mathbf A$ carries T m, so the four-potential components
$(\varphi/c,\mathbf A)$ carry T m.

[L4] [[def-em-electromagnetic-tensor]]: the covariant components are
$F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$.

[L5] [[def-em-electromagnetic-tensor]]: when a $C^1$ potential $A_\mu$ is
supplied, $F_{\mu\nu}=\partial_\mu A_\nu-\partial_\nu A_\mu$.

## Proof

1.1 Since each coordinate has unit metre by [L1], each coordinate derivative
has unit $\mathrm m^{-1}$. With $m_{\rm rest,SI}$ in kg,
$c$ in $\mathrm{m\,s^{-1}}$, and $\hbar$ in $\mathrm{J\,s}$, the quotient
$m_{\rm rest,SI}c/\hbar$ has unit
$(\mathrm{kg\,m\,s^{-1}})/(\mathrm{kg\,m^2\,s^{-1}})=\mathrm m^{-1}$.
Therefore $|\mathbf k|^2+\mu^2$ has unit $\mathrm m^{-2}$,
$\omega$ has unit $\mathrm m^{-1}$, $\hbar c\omega$ has unit J, and
$\hbar\mathbf k$ has unit $\mathrm{kg\,m\,s^{-1}}$. [given, L1, A1, algebra]

1.2 The SI four-potential has unit $\mathrm{T\,m}$ by [L3], which equals
$\mathrm{kg\,m\,s^{-2}\,A^{-1}}$. From [L2] and [A1],
$\mu_0\hbar c$ has unit
$(\mathrm{kg\,m\,s^{-2}\,A^{-2}})(\mathrm{kg\,m^2\,s^{-1}})
(\mathrm{m\,s^{-1}})=\mathrm{kg^2\,m^4\,s^{-4}\,A^{-2}}$;
its positive square root has unit $\mathrm{J\,A^{-1}}$. Thus $a^\mu$ has
unit $\mathrm m^{-1}$. By [L5], differentiating the potential with a
length-coordinate derivative gives $F_{\rm SI}$ unit
$\mathrm{kg\,s^{-2}\,A^{-1}}$; division by $\sqrt{\mu_0\hbar c}$ gives
$f^{\mu\nu}$ unit $\mathrm m^{-2}$. The $F$-component unit is consistent
with $F_{0i}=-E_i/c$ and $F_{ij}=\epsilon_{ijk}B_k$ in [L4].
[given, L1, L2, L3, L4, L5, A1, algebra]

1.3 Using $\mu_0$ in $\mathrm{kg\,m\,s^{-2}\,A^{-2}}$, the quantity
$\mu_0c/\hbar$ has unit $\mathrm{A^{-2}\,s^{-2}}=\mathrm{C^{-2}}$ by
[A1]. Hence $q_{\rm n}$ and $e_{\rm n}$ are dimensionless, as is
$\alpha=e_{\rm n}^2/(4\pi)$. Both $\partial_\mu$ and $q_{\rm n}a_\mu$
have unit $\mathrm m^{-1}$, so the terms in $D_\mu$ are dimensionally
compatible. If $q_{\rm SI}=0$, then $q_{\rm n}=0$ and the same expression
reduces to $D_\mu=\partial_\mu$, so the zero-charge case is also well-defined.
[given, L2, A1, algebra]

1.4 A dimensionless $S/\hbar$ integrated over four-volume of unit
$\mathrm m^4$ requires the natural density to have unit $\mathrm m^{-4}$.
Multiplication by $\hbar c$, of unit $\mathrm{J\,m}$, gives physical energy
density in $\mathrm{J\,m^{-3}}$. [given, A1, A2, algebra]

2.1 Write $d_L(X)$ for the exponent of metre in the engineering dimension of
$X$. By [L1], $d_L(\partial_a)=-1$. The scalar kinetic density in [A2] has degree
$2(d_L(\phi_{\rm n})-1)$; equating it to $-4$ gives
$d_L(\phi_{\rm n})=-1$. The Dirac kinetic density has degree
$d_L(\bar\psi)+d_L(\psi)-1$; the equality
$d_L(\bar\psi)=d_L(\psi)$ in [A2] and density degree $-4$ give
$d_L(\psi_{\rm n})=-3/2$. The photon kinetic density gives
$2(d_L(a)-1)=-4$, hence $d_L(a)=-1$ and, since $f$ has one derivative of
$a$, $d_L(f)=-2$. These are precisely the stated canonical engineering
degrees. [given, L1, A2, algebra] ∎

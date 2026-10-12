---
id: def-gr-observer-energy-momentum-current
kind: definition
title: "The observer split of a symmetric two-tensor: energy density, energy-momentum current, flux and stress"
status: draft
origin: session
domain: mathematics
dependency_level: 4
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, lem-gr-observer-projection-decomposition, def-gr-tensor-fields-and-components, def-c-r-and-smooth-maps-between-smooth-manifolds, def-smooth-vector-field-as-a-tangent-bundle-section, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  def-gr-tensor-fields-and-components: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: [lem-gr-observer-energy-momentum-decomposition]
sources:
  references:
    - title: "E. Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, arXiv:gr-qc/0703035v1 (2007), section 4.1.2 '3+1 decomposition of the stress-energy tensor': the energy density E = T(n,n), the momentum density p = -T(n,gamma(.)) and the stress S = gamma*T as measured by the Eulerian observer, printed p. 52 (PDF p. 52)"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.3: T_{mu nu}u^mu u^nu = rho as the energy density measured by an observer comoving with the fluid, printed p. 186 (PDF p. 193)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.107)-(1.110): the energy density and pressure reading of the components of the stress-energy tensor, printed pp. 29-30 (PDF pp. 36-37)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]), let $U\subseteq M$ be a nonempty open
subset carrying the restricted smooth structure of
[[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]],
let $T$ be a smooth symmetric covariant $2$-tensor field on $U$
([[def-gr-smooth-covariant-two-tensor-field]]), and let $n$ be a smooth observer
congruence on $U$ ([[def-gr-observer-congruence-and-adapted-charts]]), so that
$g_p(n_p,n_p)=-1$ and $n_p$ is future-directed at every $p\in U$.

**(a) Spatial projection field.** Let

$$h^a{}_b:=\delta^a{}_b+n^an_b$$

on $U$, the component expression of the field of $g$-orthogonal projections
onto the rest spaces $n_p^{\perp}$ of [[def-gr-observer-and-rest-space]]
([[lem-gr-observer-projection-decomposition]]); at every $p$ one has
$h^a{}_bn^b=0$, $h^a{}_bn_b=0$, $h^a{}_bh^b{}_c=h^a{}_c$ and
$h^a{}_a=3$. The field is smooth because $n$, $g$ and the identity are smooth
([[def-gr-tensor-fields-and-components]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

**(b) Measured energy density.** The **measured energy density** of $T$ for the
congruence $n$ is the smooth function

$$\mu:=T_{ab}n^an^b:U\to\mathbb R .$$

**(c) Energy-momentum current.** The **energy-momentum current** of $T$ for the
congruence $n$ is the smooth vector field on $U$ obtained by raising one index
of $T$ with the inverse metric and contracting with $n$,

$$J^a:=-T^{ab}n_b,$$

with $T^{ab}=g^{ac}g^{bd}T_{cd}$
([[def-gr-inverse-metric-and-musical-isomorphisms]],
[[def-gr-tensor-fields-and-components]]); the minus sign is the convention that
makes $J$ future-directed for matter with positive measured energy density.

**(d) Energy flux.** The **energy flux** of $T$ for the congruence $n$ is the
smooth vector field

$$\Phi^a:=h^a{}_bJ^b=J^a-\mu n^a,$$

the spatial projection of $J$; it satisfies $n_a\Phi^a=0$ and
$\Phi^a=-h^a{}_bT^{bc}n_c$.

**(e) Spatial stress.** The **spatial stress** of $T$ for the congruence $n$ is
the smooth field obtained by projecting both tensor slots,

$$S^{ab}:=h^a{}_ch^b{}_dT^{cd},$$

which is symmetric in $a,b$ and satisfies $S^{ab}n_b=0$.

The identities $\mu=-J^an_a$, $J=\mu n+\Phi$, $S^{ab}n_b=0$ and the orthogonal
decomposition

$$T^{ab}=\mu n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab},$$

together with the uniqueness of that decomposition and the component formulas
in a $g$-orthonormal frame, are proved in
[[lem-gr-observer-energy-momentum-decomposition]]; this definition asserts
none of them. The physical reading and the units of $\mu$, $\Phi$ and $S$ are
fixed by the framework's reading on this page and are not asserted here.

## Remarks

- **Scope.** The objects are defined for *every* smooth symmetric covariant
  $2$-tensor field $T$ on $U$ and every smooth observer congruence $n$. No
  symmetry of $T$ beyond its stated symmetry, no conservation equation, no
  positivity, no dynamics and no measurement is required or implied. In
  particular $T$ need not be the stress-energy tensor of any matter model.

- **Choice convention.** The smooth structure of the tangent bundle underlying
  the vector field $n$ assumes the axiom $\mathrm{AC}_\omega$ of
  [[def-countable-choice]] ([[def-smooth-vector-field-as-a-tangent-bundle-section]],
  [[def-gr-observer-congruence-and-adapted-charts]]); this is the only choice
  principle used in this item.

---
id: def-gr-perfect-fluid-matter-model
kind: definition
title: "The perfect-fluid matter model: rest energy density, pressure, four-velocity and stress-energy"
status: published
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-c-r-and-smooth-maps-between-smooth-manifolds, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-smooth-covariant-two-tensor-field: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure: mathematical-premise
justified_by: []
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 6.2: the perfect fluid energy-momentum tensor (6.30) and the conservation equations (6.31), printed pp. 65-66 (PDF pp. 66-67)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 4.5.4: the perfect fluid tensor (4.53) and the conservation equations (4.54)-(4.55), printed pp. 185-187 (PDF pp. 192-194)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 (1.107)-(1.110): the perfect fluid stress-energy tensor, printed pp. 29-30 (PDF pp. 36-37)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$ ([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and let
$U\subseteq M$ be a nonempty open matter domain
([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

**(a) Data.** A **perfect-fluid model** on $U$ is a triple $(\varepsilon,p,n)$
consisting of two smooth functions $\varepsilon,p:U\to\mathbb R$, the **rest
energy density** and the **pressure**, and a smooth future-directed unit
timelike vector field $n$ on $U$ with $g_p(n_p,n_p)=-1$ and
$g_p(n_p,N_p)<0$ at every $p$ ([[def-gr-smooth-lorentzian-objects]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]). No positivity of
$\varepsilon$ or of $p$ is required or implied. A model may carry the
additional data of an **equation of state**: a function
$P:D_P\to\mathbb R$ on a subset $D_P\subseteq\mathbb R$ with
$\varepsilon(U)\subseteq D_P$, together with the relation $p=P(\varepsilon)$;
the relation is a further assumption and is not part of the basic triple.

**(b) Stress-energy tensor and derived fields.** The model's
**stress-energy tensor** is

$$T^{ab}:=(\varepsilon+p)n^an^b+p\,g^{ab},$$

a smooth symmetric contravariant $2$-tensor field ([[def-gr-smooth-covariant-two-tensor-field]],
[[def-gr-inverse-metric-and-musical-isomorphisms]]). The **comoving
derivative**, **expansion** and **acceleration** of $n$ are

$$D f:=n^a\partial_af\quad(f\in C^\infty(U)),\qquad \vartheta:=\nabla_an^a,\qquad a^b:=n^a\nabla_an^b ,$$

and the **rest-space projection** is the smooth tensor field

$$h^{ab}:=g^{ab}+n^an^b .$$

The physical reading of $\varepsilon$ and $p$ as a rest-frame energy density
and pressure, and their units, are fixed by the framework's matter postulate,
not by this definition.

**(c) Fluid equations.** The **perfect-fluid equations** on $U$ are

$$D\varepsilon+(\varepsilon+p)\vartheta=0,\qquad (\varepsilon+p)a^b+h^{ba}\partial_ap=0 .$$

That the stress-energy tensor is divergence-free if and only if these two
equations hold is proved in
[[prop-gr-dust-and-perfect-fluid-conservation-equations]]; the definition
asserts neither divergence-freedom nor the equations.

## Remarks

- **Projection convention.** Since $n$ has unit length, $h^{ab}$ satisfies
  $h^{ab}n_b=0$ and $h^{ab}g_{bc}h^{cd}=h^{ad}$; it is the $g$-orthogonal
  projection onto the rest space $n^\perp$ raised with $g^{-1}$. The vector
  $a^b$ is automatically orthogonal to $n$: $n_ba^b=\tfrac12n^a\nabla_a(n_bn^b)=0$.

- **Scope.** A model with $\varepsilon+p=0$ has a stress-energy tensor
  proportional to $g^{ab}$ on $U$; the equations above then degenerate and the
  acceleration is not determined by the pressure gradient. Shock waves,
  dissipation and constitutive transport lie outside this model, as do
  equations of state with phase transitions, unless the smooth model is
  restricted to a phase.

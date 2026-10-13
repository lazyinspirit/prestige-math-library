---
id: rem-gr-chart-tetrad-congruence-and-observer-distinctions
kind: remark
title: "Charts, frames, tetrads, congruences and observers are distinct objects"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-tensor-fields-and-components, def-gr-local-frame-and-tetrad-fields, thm-gr-local-lorentz-tetrad-existence, lem-gr-tetrad-change-of-basis-is-lorentz, lem-gr-tensor-component-transformation-law, def-gr-observer-and-rest-space, def-gr-observer-congruence-and-adapted-charts, cor-gr-adapted-chart-existence, prop-gr-rest-space-integrability-criterion, def-gr-observer-relative-energy-and-momentum]
dependency_roles:
  def-gr-tensor-fields-and-components: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  thm-gr-local-lorentz-tetrad-existence: mathematical-premise
  lem-gr-tetrad-change-of-basis-is-lorentz: mathematical-premise
  lem-gr-tensor-component-transformation-law: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-observer-congruence-and-adapted-charts: mathematical-premise
  cor-gr-adapted-chart-existence: mathematical-premise
  prop-gr-rest-space-integrability-criterion: mathematical-premise
  def-gr-observer-relative-energy-and-momentum: mathematical-premise
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 1.7-1.8 on tensor components and tensor fields, printed pp. 16-21 (PDF pp. 17-22), and section 2.2 on orthonormal bases and Lorentz transformations between them, printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 2 'coordinate bases' and 'the tensor transformation law' (printed pp. 45-47; PDF pp. 52-54) and Ch. 3 'tetrads and non-coordinate bases' (printed pp. 88-91; PDF pp. 95-98)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: n/a
---

## Remark

This page introduces several objects that are related but not interchangeable;
the distinctions below are part of their definitions and are used throughout
the general-relativity track.

- **Observer.** An observer at $p$ is one future-directed unit timelike vector
  $n\in T_pM$, $g_p(n,n)=-1$
  ([[def-gr-observer-and-rest-space]]). It carries no parametrized curve and no
  clock reading by itself.
- **Congruence.** An observer congruence on an open set $U$ is a smooth field
  $n$ whose value at every point is an observer; its maximal integral curves
  are its observer curves, and its flow parameter is not a physical time
  ([[def-gr-observer-congruence-and-adapted-charts]]).
- **Frame and coordinate frame.** A local frame field is a tuple of four
  pointwise independent smooth vector fields; the coordinate frame of a smooth
  chart is the special case of the fields $\partial/\partial x^a$, whose
  members pairwise commute. A frame whose members do not commute is therefore
  not the coordinate frame of any chart
  ([[def-gr-local-frame-and-tetrad-fields]]).
- **Tetrad.** A tetrad field is a pointwise $g$-orthonormal frame field; it is
  future-directed when its first member is future-directed, and it is adapted
  to a congruence $n$ when that first member equals $n$. A tetrad field need
  not be a coordinate frame. Local existence near every point is proved in
  [[thm-gr-local-lorentz-tetrad-existence]]; global existence on $M$ is not asserted and would be a nontrivial
  parallelizability property of the manifold.
- **Adapted chart.** A chart is $n$-adapted when its spatial coordinates are
  constant along each integral curve of $n$ contained in its domain, with an
  interval as parameter domain
  ([[def-gr-observer-congruence-and-adapted-charts]], Definition (c)). Near
  every point of a congruence there is such a chart with
  $n=\partial/\partial u^0$ ([[cor-gr-adapted-chart-existence]]). The definition
  does not require this normalization: replacing $u^0$ in that chart by
  $v^0=2u^0$ and keeping the spatial coordinates gives another adapted chart
  with $n=2\partial/\partial v^0$. Thus adapted charts are not unique, and
  their zeroth coordinate field need not equal $n$.
- **Rest spaces and their integrability.** The rest spaces $n_q^{\perp}$ of a
  congruence always form a smooth rank-$3$ distribution, and they are tangent
  to local hypersurfaces exactly when $\alpha\wedge d\alpha=0$ for
  $\alpha=n^{\flat}$. Thus an adapted chart always exists, while an orthogonal
  rest-space foliation need not
  ([[prop-gr-rest-space-integrability-criterion]]).
- **Components.** Coordinate components of a tensor field transform by
  products of chart Jacobians
  ([[lem-gr-tensor-component-transformation-law]]), while its components in
  two future-directed tetrads are related by a matrix
  $\Lambda$ with $\Lambda^{\mathsf T}\eta\Lambda=\eta$ and
  $\Lambda^0{}_0>0$ ([[lem-gr-tetrad-change-of-basis-is-lorentz]]). The two
  component systems are different data
  ([[def-gr-tensor-fields-and-components]]).
- **Observer-relative quantities.** For $P\in T_pM$ and a fixed real parameter
  $c>0$, observer energy $E_n(P)=-c\,g_p(P,n)$ and spatial momentum
  $q_n(P)=h_n(P)$ depend on the chosen observer $n$, where
  $h_n(P)=P+g_p(n,P)n$ is the spatial projection of
  [[def-gr-observer-and-rest-space]], Definition (c). Different observers
  generally assign different energies to the same tangent vector, and no
  observer-independent energy-momentum split is asserted. In contrast, rest
  mass $m(P)=\sqrt{-g_p(P,P)}/c$, defined when $g_p(P,P)\le0$, depends only on
  $P$, $g_p$ and $c$, and is independent of $n$
  ([[def-gr-observer-relative-energy-and-momentum]], Definition (a)-(c)).
- **Physical readings.** The interpretation of these geometric objects as
  observers, reference frames, clocks, particles and measured energies belongs
  to the physical postulates and unit conventions of the framework, recorded
  elsewhere on this track; the items on this page assert no measurement,
  dynamics or claim about nature.

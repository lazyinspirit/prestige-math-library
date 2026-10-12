---
id: def-gr-local-frame-and-tetrad-fields
kind: definition
title: "Local frame fields, coordinate frames and tetrad fields"
status: draft
origin: session
domain: mathematics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-observer-and-rest-space, def-smooth-vector-field-as-a-tangent-bundle-section, def-c-r-and-smooth-maps-between-smooth-manifolds, def-lie-bracket-of-smooth-vector-fields, prop-coordinate-formula-for-the-lie-bracket, def-countable-choice]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-smooth-vector-field-as-a-tangent-bundle-section: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-lie-bracket-of-smooth-vector-fields: mathematical-premise
  prop-coordinate-formula-for-the-lie-bracket: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 3 'tetrads and non-coordinate bases': the vielbeins with g_mu nu e^mu_a e^nu_b = eta_ab (3.118)-(3.119) and the orthonormal-frame components, printed pp. 88-91 (PDF pp. 95-98)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2: orthonormal bases at a point and the Lorentz transformations between them (2.9)-(2.10), printed pp. 26-28 (PDF pp. 27-29)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 2.3.3 on tensors and tensor fields, printed pp. 72-75 (PDF pp. 79-82)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold and let
$U\subseteq M$ be a nonempty open subset
([[def-gr-smooth-lorentzian-objects]]). Write
$\eta:=\operatorname{diag}(-1,1,1,1)$ for the four-by-four diagonal matrix with
diagonal entries $-1,1,1,1$, and use capital indices $A,B=0,1,2,3$ for frame
members.

**(a) Local frame fields.** A **local frame field** on $U$ is a tuple
$E=(E_0,E_1,E_2,E_3)$ of smooth vector fields on $U$
([[def-smooth-vector-field-as-a-tangent-bundle-section]]) such that for every
$q\in U$ the vectors $E_0(q),E_1(q),E_2(q),E_3(q)$ form an ordered basis of
$T_qM$, equivalently a pointwise independent tuple of four vector fields.

**(b) Coordinate frames.** If $(U,x)$ is a smooth chart, the tuple
$(\partial/\partial x^0,\partial/\partial x^1,\partial/\partial x^2,\partial/\partial x^3)$
of coordinate fields is a local frame field on $U$, its **coordinate frame**.
Two coordinate fields of one chart commute: by the coordinate formula for the
Lie bracket ([[prop-coordinate-formula-for-the-lie-bracket]],
[[def-lie-bracket-of-smooth-vector-fields]]) applied to constant coordinate
components, $[\partial/\partial x^a,\partial/\partial x^b]=0$ for all $a,b$.
Consequently a local frame field $(E_0,\dots,E_3)$ with $[E_A,E_B]\neq0$ for
some $A,B$ is not the coordinate frame of any chart; this necessary condition
is the only one asserted here, and no converse is claimed by this definition.

**(c) Tetrad fields.** A **tetrad field** (or **$g$-orthonormal frame field**)
on $U$ is a local frame field $(E_0,E_1,E_2,E_3)$ on $U$ such that

$$g_q(E_A(q),E_B(q))=\eta_{AB}\qquad\text{for all }A,B\text{ and all }q\in U .$$

A tetrad field is **future-directed** when in addition $E_0(q)$ is
future-directed for every $q\in U$ ([[def-gr-smooth-lorentzian-objects]]); then
each $E_0(q)$ is an observer at $q$ ([[def-gr-observer-and-rest-space]]), so
$E_0$ is an observer congruence on $U$, while $E_1,E_2,E_3$ are pointwise an
orthonormal basis of the rest space of that observer. Neither existence of a
tetrad field on a prescribed open set, nor global existence on $M$, is
asserted by this definition; local existence near every point is proved in the
existence theorem on this page.

**(d) Observer-adapted tetrads.** Given an observer $n$ at a point $p$, a
tetrad at $p$ is **$n$-adapted** when its first member is $n$. Given an
observer congruence $n$ on $U$, a tetrad field on $U$ is
**$n$-adapted** when $E_0=n$; its remaining members are then $g$-orthonormal
fields in the moving rest spaces of the congruence.

**(e) Scope.** A tetrad field is not assumed to be a coordinate frame, and a
frame field is not assumed to be orthonormal. Components of a tensor field in a
tetrad and components in a chart are different objects; the transformation
rules for the two are distinguished later on this page. No relation to the
physical interpretation of a reference frame is asserted here beyond the
geometric data listed above.

## Remarks

**Choice convention.** Smooth vector fields are tangent-bundle sections, whose
canonical smooth structure assumes the axiom $\mathrm{AC}_\omega$ of
[[def-countable-choice]] ([[def-smooth-vector-field-as-a-tangent-bundle-section]]);
this definition inherits that assumption and uses no further choice principle.

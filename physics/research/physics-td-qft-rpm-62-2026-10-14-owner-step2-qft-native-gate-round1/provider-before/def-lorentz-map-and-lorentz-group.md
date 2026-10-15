---
id: def-lorentz-map-and-lorentz-group
kind: definition
title: Linear and affine Lorentz maps, and the Lorentz group
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 5
deps: [def-sr-affine-minkowski-model, def-lorentz-form-and-inertia,
       def-time-orientation-and-future-causal-sets,
       lem-lorentz-form-has-orthonormal-basis,
       def-inertial-frame-and-inertial-chart, def-linear-map,
       def-linear-isomorphism-and-invertible-linear-map,
       def-coordinate-column-and-matrix-of-a-linear-map,
       def-matrix-product-and-identity-matrix,
       def-determinant-of-a-linear-operator]
justified_by: [lem-lorentz-map-preserves-metric-and-causal-structure]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  def-coordinate-column-and-matrix-of-a-linear-map: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Definition

Let $(V,\eta)$ be a $4$-dimensional Lorentz vector space
([[def-lorentz-form-and-inertia]]) equipped with a time orientation $C^+$
([[def-time-orientation-and-future-causal-sets]]), and let
$(A,V,\eta,C^+)$ be the corresponding oriented time-oriented affine Minkowski
space ([[def-sr-affine-minkowski-model]]).

**(a) Linear Lorentz maps.** A **linear Lorentz map** is a linear map
$L:V\to V$ ([[def-linear-map]]) such that

$$\eta(Lv,Lw)=\eta(v,w)\qquad\text{for all }v,w\in V.$$

The set of all linear Lorentz maps is denoted $O(V,\eta)$.

**(b) Matrix criterion.** Let $(e_0,e_1,e_2,e_3)$ be an ordered
$\eta$-orthonormal basis of $V$ ([[lem-lorentz-form-has-orthonormal-basis]]),
so that $\eta_0:=\operatorname{diag}(-1,1,1,1)$ is the matrix of $\eta$ in
that basis, and let $M$ be the matrix of $L$ in that basis
([[def-coordinate-column-and-matrix-of-a-linear-map]]). Then $L$ is a linear
Lorentz map if and only if

$$M^{T}\eta_0 M=\eta_0,$$

where the product is matrix multiplication
([[def-matrix-product-and-identity-matrix]]). Every linear Lorentz map is a
linear isomorphism of $V$ ([[def-linear-isomorphism-and-invertible-linear-map]]),
and the criterion itself does not depend on the $\eta$-orthonormal basis used.
The three assertions of this clause are proved in
[[lem-lorentz-map-preserves-metric-and-causal-structure]].

**(c) Proper and orthochronous maps; the Lorentz group.** A linear Lorentz map
$L$ is **proper** if $\det L=+1$ ([[def-determinant-of-a-linear-operator]]) and
**orthochronous** if $L(C^+)=C^+$, a condition on the image of the set $C^+$.
The set of proper orthochronous linear Lorentz maps is denoted
$SO^{+}(V,\eta)$. The set $O(V,\eta)$ is called the **(full) Lorentz group** of
$(V,\eta)$ and $SO^{+}(V,\eta)$ the **proper orthochronous Lorentz group**;
that these sets are groups under composition is proved in
[[lem-lorentz-map-preserves-metric-and-causal-structure]], which also shows
that $L$ is orthochronous if and only if $L(C^+)$ is contained in $C^+$.

**(d) Affine Lorentz maps.** An **affine Lorentz map** is a map $F:A\to A$
for which there exist $p_0\in A$ and a linear Lorentz map $L$ with

$$F(p_0+v)=F(p_0)+Lv\qquad\text{for all }v\in V.$$

Equivalently $F(p)=F(p_0)+L(p-p_0)$ for all $p\in A$, and $L$ is then unique:
it is recovered as $Lv=F(p+v)-F(p)$ for every $p\in A$, so it is independent
of the base event. $F$ is called **proper** (respectively **orthochronous**)
when its linear part $L$ is. If $x$ is the chart of an inertial frame
([[def-inertial-frame-and-inertial-chart]]), then

$$x(F(p))=M\,x(p)+b\qquad\text{for all }p\in A,$$

where $M$ is the matrix of $L$ in the frame's ordered basis and
$b:=x(F(o))-Mx(o)\in\mathbb R^4$; the two sides are column vectors in
$\mathbb R^4$.

**(e) Convention.** In this framework, unless stated otherwise, the term
**Lorentz transformation** means a proper orthochronous affine Lorentz map.
Improper or non-orthochronous Lorentz maps are always named explicitly.

The composition of two affine Lorentz maps is affine Lorentz with linear part
the composition of the linear parts, and the identity and the inverse of an
affine Lorentz map are again such maps; these facts are part of
[[lem-lorentz-map-preserves-metric-and-causal-structure]].

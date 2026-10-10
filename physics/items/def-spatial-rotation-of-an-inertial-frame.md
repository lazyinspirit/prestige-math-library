---
id: def-spatial-rotation-of-an-inertial-frame
kind: definition
title: Spatial rotations of an inertial frame
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 6
deps: [def-inertial-frame-and-inertial-chart,
       def-spatial-euclidean-structure-of-an-inertial-frame,
       def-euclidean-inner-product, def-linear-map,
       def-linear-isomorphism-and-invertible-linear-map,
       def-linear-isometry-and-orthogonal-or-unitary-operator,
       cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus,
       def-determinant-of-a-linear-operator,
       thm-finite-dimensional-isometry-characterisations,
       thm-matrix-of-the-adjoint-is-the-conjugate-transpose,
       thm-operator-determinant-is-multiplicative]
dependency_roles:
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-linear-map: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus: mathematical-premise
  def-determinant-of-a-linear-operator: mathematical-premise
  thm-finite-dimensional-isometry-characterisations: mathematical-premise
  thm-matrix-of-the-adjoint-is-the-conjugate-transpose: mathematical-premise
  thm-operator-determinant-is-multiplicative: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Definition

Let $(o;e_0,e_1,e_2,e_3)$ be an inertial frame of the model
([[def-inertial-frame-and-inertial-chart]]) and let
$S:=\operatorname{span}(e_1,e_2,e_3)$ be its spatial three-space with
$\delta$ the restriction of $\eta$ to $S$
([[def-spatial-euclidean-structure-of-an-inertial-frame]]). Then $\delta$ is a
positive-definite symmetric bilinear form, $(e_1,e_2,e_3)$ is
$\delta$-orthonormal, and $S=\{w\in V:\eta(e_0,w)=0\}$.

A **spatial rotation of the frame** is a linear map $R:V\to V$
([[def-linear-map]]) such that

1. $R(e_0)=e_0$;
2. $R(S)\subseteq S$, so that the restriction $R|_S$ is an endomorphism of
   $S$;
3. $\delta(Rw,Rz)=\delta(w,z)$ for all $w,z\in S$; and
4. the restriction $R|_S$ has determinant $+1$ computed in the ordered basis
   $(e_1,e_2,e_3)$ ([[def-determinant-of-a-linear-operator]]).

Condition 3 makes $R|_S$ injective, since $Rw=0$ with $w\in S$ forces
$\delta(w,w)=\delta(Rw,Rw)=0$ and hence $w=0$ by positive definiteness;
$S$ being finite-dimensional, $R|_S$ is then an automorphism of $S$, so in
fact $R(S)=S$. The extension of such an $R|_S$ by $R(e_0)=e_0$ is also
written $R$ and called a spatial rotation of the frame.

**Matrix form and the group $SO(3)$.** Via the $\delta$-orthonormal basis
$(e_1,e_2,e_3)$, a linear map of $V$ fixing $e_0$ and preserving $S$
corresponds to the block matrix $\operatorname{diag}(1,A)$ with
$A\in M_3(\mathbb R)$; under this correspondence the maps of conditions 1-4
are exactly those with

$$A^{T}A=I_3\qquad\text{and}\qquad\det A=+1 .$$

Indeed, the matrix of the adjoint of an endomorphism of the inner product
space $(S,\delta)$ in a $\delta$-orthonormal basis is the transpose of its
matrix ([[thm-matrix-of-the-adjoint-is-the-conjugate-transpose]]), and an
endomorphism of a finite-dimensional inner product space preserves the inner
product exactly when $T^{*}T=I$
([[thm-finite-dimensional-isometry-characterisations]],
[[def-linear-isometry-and-orthogonal-or-unitary-operator]]). Writing
$SO(3):=\{A\in M_3(\mathbb R):A^{T}A=I_3,\ \det A=+1\}$, the orthogonal
operators on $S$ form a group and each of them has determinant $\pm1$
([[cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus]]),
and $\det(S_1S_2)=\det(S_1)\det(S_2)$ for composable endomorphisms
([[thm-operator-determinant-is-multiplicative]]); hence the determinant-one
part is a subgroup, the spatial rotations of the frame form a subgroup of the
general linear group of $V$, that is, of the group of invertible linear maps
$V\to V$ under composition
([[def-linear-isomorphism-and-invertible-linear-map]]), and the map
$R\mapsto A(R)$ sending a rotation to
the matrix of $R|_S$ in the basis $(e_1,e_2,e_3)$ is a group isomorphism onto
$SO(3)$. The determinant in condition 4 is independent of the ordered basis of $S$
([[def-determinant-of-a-linear-operator]]). Thus, for fixed $\eta$, the
rotation subgroup depends only on the time axis $e_0$: it fixes $e_0$ and
acts on $S=e_0^\perp$ by determinant-one $\delta$-isometries. Changing the
origin or the spatial orthonormal basis while retaining $e_0$ leaves this
subgroup unchanged; changing $e_0$ can change which maps are spatial rotations.
No claim is made here that spatial rotations are Lorentz maps; that is proved
in [[lem-boost-rotation-factorization]].

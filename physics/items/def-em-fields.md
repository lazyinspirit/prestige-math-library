---
id: def-em-fields
kind: definition
title: "The electric and magnetic fields as fixed-time spatial vector fields"
status: draft
origin: session
domain: physics
deps: [def-determinant-of-a-square-matrix, def-transpose-of-a-matrix, def-matrix-product-and-identity-matrix, def-ck-euclidean-maps-and-diffeomorphisms, def-em-lab-geometry, def-em-si-conventions]
dependency_roles:
  def-determinant-of-a-square-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The electric and magnetic fields of the classical electromagnetic framework as fixed-time spatial vector fields on a named laboratory region, with an explicit regularity class and the polar/axial convention. The definition asserts no field equation, no value at singular source support, and no physical covariance postulate for orientation-reversing descriptions."
sources:
  references:
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "§1.2 printed pp. 4-6 (the electric and magnetic fields as vector fields and the SI units in which they are measured); read in the stamped 236-page PDF"
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "§1.1-§1.2 printed pp. 1-10 (the electric and magnetic fields as vector functions of position and time; the pseudovector character of B is stated at eq. (5.1) with footnote 1 on p. 204) and §5.1.2 printed p. 204 (B is a pseudovector), read in the stamped scanned full text"
    - title: "L. D. Landau, E. M. Lifshitz, The Classical Theory of Fields, Third Revised English Edition (Course of Theoretical Physics vol. 2, Pergamon Press 1971, 387 pp.)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "§§24-25 printed pp. 62-66 (the field transformation and the invariants, in which E and H are the components of an antisymmetric tensor), read in the stamped 387-page full text"
---

## Definition

Let the laboratory region $U\cong I\times\Omega$, its spatial Euclidean structure
and its units be those of [[def-em-lab-geometry]] and
[[def-em-si-conventions]], and let $k\ge1$. An **electric field of class
$C^k$** on the region is a map $E:\Omega\times I\to\mathbb R^3$ that is of class
$C^k$ in the sense of [[def-ck-euclidean-maps-and-diffeomorphisms]]; a
**magnetic field of class $C^k$** is a map $B:\Omega\times I\to\mathbb R^3$ of
the same class. At fixed $t\in I$ the maps $E(\cdot,t),B(\cdot,t):\Omega\to
\mathbb R^3$ are real spatial vector fields on the region $\Omega$, read in the
$\delta$-orthonormal basis $(e_1,e_2,e_3)$ of the frame. The framework uses:
$C^1$ fields in the classical Maxwell branch, $C^2$ fields where second or
mixed time-space derivatives of the fields appear, and $C^\infty$ fields in
the smooth existence branches; every statement carries its own regularity and
no regularity beyond it is asserted.

Conventions:

(a) The **polar-vector** and **axial-vector** conventions mean the following
component rules under a spatial orthogonal coordinate change $y'=Qy$, where
$Q$ is a real $3\times3$ matrix with $Q^{\mathsf T}Q=I_3$. Transpose,
matrix product and identity are those of [[def-transpose-of-a-matrix]] and
[[def-matrix-product-and-identity-matrix]], and $\det Q$ is the determinant
of [[def-determinant-of-a-square-matrix]]. At corresponding
points $E'(y',t)=QE(y,t)$ and $B'(y',t)=(\det Q)QB(y,t)$. Thus polar and axial
components agree in their transformation rule when $\det Q=1$ and differ by
a sign when $\det Q=-1$. These rules specify the orientation convention;
the adopted inertial descriptions have positive orientation, and no physical
orientation-reversing change of description is adopted here.

(b) The fields are defined by their values on $\Omega\times I$, and no value at
a point of singular source support is asserted.

(c) $E$ carries V m$^{-1}$ and $B$ carries T.

(d) The identification of the pair $(E,B)$ with the components of an
alternating two-form, including its transformation behaviour, is made in the
framework's electromagnetic two-form definition on this page and is not
presupposed here.

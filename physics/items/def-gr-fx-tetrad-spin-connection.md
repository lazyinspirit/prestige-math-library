---
id: def-gr-fx-tetrad-spin-connection
kind: definition
title: Local Lorentz tetrad and connection
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-gr-smooth-lorentzian-objects
  - def-gr-local-frame-and-tetrad-fields
  - def-countable-choice
  - def-lorentz-map-and-lorentz-group
  - lem-gr-tetrad-change-of-basis-is-lorentz
  - def-affine-connection-on-a-smooth-manifold
  - def-smooth-principal-g-bundle
  - def-gauge-group-of-a-smooth-principal-bundle
  - def-smooth-differential-k-form
  - def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative
  - def-wedge-product-of-differential-forms
  - def-exterior-derivative-by-the-invariant-vector-field-formula
  - thm-curvature-two-form-structure-equation
  - thm-second-bianchi-identity-for-a-bundle-connection
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-local-frame-and-tetrad-fields: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-gr-tetrad-change-of-basis-is-lorentz: mathematical-premise
  def-affine-connection-on-a-smooth-manifold: mathematical-premise
  def-smooth-principal-g-bundle: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
  thm-curvature-two-form-structure-equation: mathematical-premise
  thm-second-bianchi-identity-for-a-bundle-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3, tetrads and non-coordinate bases, printed pp. 88–95 (PDF pp. 95–102)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 3, equations (3.114)–(3.143), printed pp. 88–94"
    - title: "David Tong, General Relativity, Cambridge Part III lecture notes, §3.4.2 Connection 1-forms and Curvature 2-forms"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html"
      locator: "§3.4.2, HTML lines 1133–1243"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
physical_scope: null
---

## Definition

Assume $\mathrm{AC}_\omega$ for the canonical tangent-bundle and tetrad
conventions of [[def-gr-smooth-lorentzian-objects]] and
[[def-gr-local-frame-and-tetrad-fields]]. Let $(M,g,N)$ be a smooth,
time-oriented Lorentzian four-manifold of signature $(-,+,+,+)$, let
$U\subseteq M$ be nonempty and open, and let
$E=(E_0,E_1,E_2,E_3)$ be a smooth future-directed tetrad on $U$. Thus the
$E_J$ are a pointwise basis of $TM|_U$, $g(E_I,E_J)=\eta_{IJ}$ for
$\eta=\operatorname{diag}(-1,1,1,1)$, and $E_0$ is future-directed. Write
$e=(e^0,e^1,e^2,e^3)^{\mathsf T}$ for the dual coframe, so
$e^I(E_J)=\delta^I{}_J$.

A **tetrad connection** is a smooth affine connection $\nabla$ on $TM|_U$;
its connection matrix $\omega=(\omega^I{}_J)$ in $E$ is defined by
$\nabla_XE_J=\sum_I\omega^I{}_J(X)E_I$. It is a **Lorentz connection** when
it is metric-compatible, equivalently when the matrix-valued one-form is
$\eta$-skew: $\omega_{IJ}:=\eta_{IK}\omega^K{}_J$ satisfies
$\omega_{IJ}=-\omega_{JI}$. A smooth local Lorentz change is a smooth map
$\Lambda:U\to SO^+(1,3)$. With the convention
$e'=\Lambda e$ (equivalently $E'=E\Lambda^{-1}$), the connection matrix
transforms as

$$e'=\Lambda e,\qquad \omega'=\Lambda\omega\Lambda^{-1}-d\Lambda\,\Lambda^{-1}.$$

Here $d$ is the componentwise exterior derivative, and products of
matrix-valued forms use matrix multiplication and the wedge product of their
scalar form entries. Define the torsion and curvature forms by

$$T^I:=de^I+\sum_J\omega^I{}_J\wedge e^J,\qquad F^I{}_J:=d\omega^I{}_J+\sum_K\omega^I{}_K\wedge\omega^K{}_J.$$

Thus $T$ is an $\mathbb R^4$-valued two-form and $F$ is an
$\operatorname{End}(\mathbb R^4)$-valued two-form. With this convention,
$F$ is the local curvature two-form of $\nabla$. A local $\Lambda$ is a
change of frame in a trivialization; it represents a gauge transformation in
the sense of [[def-gauge-group-of-a-smooth-principal-bundle]] only when it
extends to a principal-bundle automorphism over the identity. No such extension,
global tetrad, or spin structure is part of this definition.

## Definition references

[[def-gr-smooth-lorentzian-objects]]

[[def-gr-local-frame-and-tetrad-fields]]

[[def-lorentz-map-and-lorentz-group]]

[[def-affine-connection-on-a-smooth-manifold]]

[[def-smooth-principal-g-bundle]]

[[def-gauge-group-of-a-smooth-principal-bundle]]

[[def-smooth-differential-k-form]]

[[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]]

[[def-wedge-product-of-differential-forms]]

[[def-exterior-derivative-by-the-invariant-vector-field-formula]]

[[thm-curvature-two-form-structure-equation]]

[[thm-second-bianchi-identity-for-a-bundle-connection]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[def-countable-choice]]

[[lem-gr-tetrad-change-of-basis-is-lorentz]]

## Remarks

The coframe and connection form are local data on $U$; no global tetrad or
global spin structure is asserted. The metric-selected Levi-Civita connection
is one particular torsion-free instance of this local connection interface.
For any connection on $TM|_U$, the curvature $F$ also satisfies the second
Bianchi identity supplied by the cited bundle-connection theorem.

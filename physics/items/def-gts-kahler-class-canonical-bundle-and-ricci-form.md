---
id: def-gts-kahler-class-canonical-bundle-and-ricci-form
kind: definition
title: "Kähler class, canonical bundle, and Ricci form"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC; AC is used through the imported characteristic-class suppliers."
deps:
  - def-complex-manifolds-and-holomorphic-vector-bundles
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - def-de-rham-cohomology
  - def-chern-pontryagin-and-euler-characteristic-forms
  - thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals
  - lem-first-chern-form-agrees-with-the-topological-line-class
  - def-axiom-of-choice
dependency_roles:
  def-complex-manifolds-and-holomorphic-vector-bundles: mathematical-premise
  def-compact-kahler-manifold-and-hodge-polarization-conventions: mathematical-premise
  def-de-rham-cohomology: mathematical-premise
  def-chern-pontryagin-and-euler-characteristic-forms: mathematical-premise
  thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals: mathematical-premise
  lem-first-chern-form-agrees-with-the-topological-line-class: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, author manuscript (2012)"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
      locator: "Chapter VI, §6.1, printed pp. 304–306; Chapter VIII, §6, equations (6.6)–(6.7), printed pp. 378–379."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Assume the full Axiom of Choice for the characteristic-class identification below. Let $n\ge1$, and let $X$ be a compact complex manifold of complex dimension $n$. Write $J$ for its complex structure, and put $TX_{\mathbb C}:=TX\otimes_{\mathbb R}\mathbb C$ with the complex-linear extension $J_{\mathbb C}$ of $J$. Define $T_X^{1,0}:=\ker(J_{\mathbb C}-iI)$; in a holomorphic chart $(z^1,\ldots,z^n)$ its holomorphic frame is $\partial/\partial z^1,\ldots,\partial/\partial z^n$, whose transition matrices are holomorphic Jacobians. Define the holomorphic cotangent bundle $\Omega_X^1:=(T_X^{1,0})^*$, with dual local frame $dz^1,\ldots,dz^n$. The **canonical bundle** is the holomorphic line bundle
$$K_X:=\Lambda^n\Omega_X^1.$$

A Hermitian metric $g$ is a positive Riemannian metric with $g(Ju,Jv)=g(u,v)$. Its real fundamental form is $\omega(u,v)=g(Ju,v)$. It is a **Kähler form** when it is a smooth real positive $(1,1)$-form and $d\omega=0$. A **Kähler class** is a real de Rham cohomology class represented by such a form; for a specified Kähler form it is $[\omega]\in H^2_{\mathrm{dR}}(X;\mathbb R)$.

In holomorphic coordinates $(z^1,\ldots,z^n)$ use the repository convention
$$\omega=i\sum_{j,k=1}^n h_{j\bar k}\,dz^j\wedge d\bar z^k,\qquad h_{j\bar k}=g_{\mathbb C}\!\left(\frac{\partial}{\partial z^j},\frac{\partial}{\partial\bar z^k}\right),$$
where $g_{\mathbb C}$ is the complex-bilinear extension of $g$ and $H=(h_{j\bar k})$ is positive Hermitian. Define the **Ricci form**
$$\rho(\omega):=-i\,\partial\bar\partial\log\det H.$$
This expression is independent of the holomorphic coordinates and is a smooth real closed $(1,1)$-form. Under the Chern–Weil normalization of the imported characteristic-class suppliers,
$$\frac{[\rho(\omega)]}{2\pi}=\bigl(c_1(T_X^{1,0})\bigr)_{\mathbb R}\quad\hbox{in }H^2_{\mathrm{dR}}(X;\mathbb R),$$
where the right side is the image of the integral first Chern class under change of coefficients $\mathbb Z\to\mathbb R$.

## Definition references

[[def-complex-manifolds-and-holomorphic-vector-bundles]]

[[def-compact-kahler-manifold-and-hodge-polarization-conventions]]

[[def-de-rham-cohomology]]

[[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]

[[lem-first-chern-form-agrees-with-the-topological-line-class]]

[[def-axiom-of-choice]]

[Demailly, Chapter VI §6.1 and Chapter VIII §6](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

## Facts & Assumptions

**Given:** Full AC; a compact smooth complex $n$-manifold $X$, $n\ge1$, and a supplied Kähler metric with the real fundamental-form convention stated above.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]. The imported Chern–Weil and line-class suppliers explicitly assume it.

[A2] Use the local coordinate convention declared in this Definition: $\omega=i h_{j\bar k}dz^j\wedge d\bar z^k$ with $H=(h_{j\bar k})$ positive Hermitian.

[F1] A complex manifold has holomorphic charts, complex structure $J$, holomorphic tangent and cotangent bundles, and Hermitian metrics as in [[def-complex-manifolds-and-holomorphic-vector-bundles]].

[F2] In holomorphic charts, complex-valued forms decompose by bidegree and $d=\partial+\bar\partial$; compact Kähler manifolds use the supplied positive closed real fundamental form ([[def-compact-kahler-manifold-and-hodge-polarization-conventions]]).

[F3] For a supplied Hermitian connection on a smooth complex bundle, the normalized Chern forms represent the real coefficient images of the topological Chern classes ([[thm-chern-weil-forms-represent-the-at-characteristic-classes-over-the-reals]]).

[F4] For a Hermitian connection on a complex line, the first Chern form is $-\Omega/(2\pi i)$ and represents the real image of the integral line class ([[lem-first-chern-form-agrees-with-the-topological-line-class]]).

[F5] Real de Rham cohomology is the cohomology of the smooth real de Rham complex; a real closed form that has a real primitive represents zero ([[def-de-rham-cohomology]]).

[F6] The total Chern form is $c(\nabla)=\det(I-\Omega/(2\pi i))$; its degree-two term is the normalized first Chern form ([[def-chern-pontryagin-and-euler-characteristic-forms]]).

## Proof

**Proof technique:** direct.

1.1 On an overlap, write the coordinate change as $z=z(w)$ and let $A=(\partial z_j/\partial w_a)_{j,a}$. The Hermitian metric matrices satisfy $H^{(w)}=A^{\mathsf T}H^{(z)}\overline A$, so $\log\det H^{(w)}=\log\det H^{(z)}+\log|\det A|^2$. The holomorphic function $\det A$ is nowhere zero; locally it has a holomorphic logarithm, whence $\partial\bar\partial\log|\det A|^2=0$. Thus the displayed local forms agree on overlaps and define a global $(1,1)$-form. [given, A2, F1, algebra]

2.1 Since $\det H>0$, $f=\log\det H$ is real. Complex conjugation gives $\overline{-i\partial\bar\partial f}=-i\partial\bar\partial f$, so $\rho$ is real. Also $\partial\rho=-i\partial^2\bar\partial f=0$ and $\bar\partial\rho=-i\bar\partial\partial\bar\partial f=i\partial\bar\partial^2f=0$; hence $d\rho=0$. [step 1.1, F2, algebra]

2.2 In a holomorphic frame $e_j=\partial/\partial z^j$ of $T_X^{1,0}$, let $H_{j\bar k}=g_{\mathbb C}(e_j,\bar e_k)$. Define a connection $\nabla=d+A$ by the matrix $A^{\mathsf T}=(\partial H)H^{-1}$, whose $(0,1)$-part is zero in this holomorphic frame and hence equals the holomorphic structure $\bar\partial$. The relation $\partial H=A^{\mathsf T}H$ and its conjugate give metric compatibility; under a holomorphic frame change $e'=eB$, the formula transforms as $A'=B^{-1}AB+B^{-1}\partial B$, so these local formulas define a global Hermitian connection. Its determinant connection has trace form $\operatorname{tr}A=\partial\log\det H$. For its curvature $F=dA+A\wedge A$, $\operatorname{tr}(A\wedge A)=0$, and therefore $\operatorname{tr}F=d\operatorname{tr}A=\bar\partial\partial\log\det H=-\partial\bar\partial\log\det H$. [F1, A2, F2, step 1.1, algebra]

3.1 The normalized first Chern form of this Hermitian connection on $T_X^{1,0}$ is $-\operatorname{tr}F/(2\pi i)$ by [F6]. By step 2.2 it equals $-i\,\partial\bar\partial\log\det H/(2\pi)=\rho/(2\pi)$; the line normalization in [F4] gives the same sign on the determinant connection. [F3, F4, F6, step 2.2, algebra]

4.1 Apply the Chern–Weil statement [F3] to $E=T_X^{1,0}$ and this connection. It identifies the real cohomology class of the normalized form in step 3.1 with the real image of $c_1(T_X^{1,0})$, giving the asserted equality. [A1, F3, F5, step 3.1] ∎

---
id: cex-emg-fx-constant-radius-rigidity
kind: counterexample
title: Constant-radius Bertotti–Robinson data are outside areal-coordinate rigidity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - thm-emg-fx-local-charged-birkhoff
  - def-emg-xs-br-products
  - thm-emg-xs-br-verification
  - def-emg-xs-rn-data
  - def-emg-fx-spherical-orbit-geometry
  - def-emg-fx-spherical-quotient
dependency_roles:
  thm-emg-fx-local-charged-birkhoff: mathematical-premise
  def-emg-xs-br-products: mathematical-premise
  thm-emg-xs-br-verification: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  def-emg-fx-spherical-orbit-geometry: mathematical-premise
  def-emg-fx-spherical-quotient: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.2.5, printed pp. 266–268 (PDF pp. 273–275): the extremal RN throat and its AdS2 times S2 Bertotti–Robinson limit."
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Section 4, PDF pp. 3–4: the separate constant-radius branch and the conditions needed for any additional symmetry."
verification:
  precheck: pass
---

## Statement refuted

Every exact spherical Einstein–Maxwell–$\Lambda$ datum is locally expressible
in the charged Reissner–Nordström–(A)dS form with its areal radius $r$ as a
coordinate, without any restriction on $dr$.

## Statement references

[[thm-emg-fx-local-charged-birkhoff]]

## Facts & Assumptions

**Given:** The first Bertotti–Robinson product branch with parameter $L>0$,
its sphere radius and electromagnetic two-form.

[F1] [[def-emg-xs-br-products]] defines the branch
$g=L^2(-z^2d\tau^2+z^{-2}dz^2+\gamma_{S^2})$,
$\mathcal F=-L\,d\tau\wedge dz$, with sphere radius $L$.

[F2] [[thm-emg-xs-br-verification]] proves that every datum in
[[def-emg-xs-br-products]], including this branch, satisfies the
source-free geometric Einstein–Maxwell equations.

[F3] [[thm-emg-fx-local-charged-birkhoff]] assumes $dr\ne0$ and
$q^{-1}(dr,dr)\ne0$ before using the areal radius as a coordinate.

[F4] [[def-emg-xs-rn-data]] fixes the unit-sphere outward area form
$\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$.

[F5] [[def-emg-fx-spherical-orbit-geometry]] defines the exact local
$SO(3)$-action, the pullback action on tensor fields, and rotational
invariance.

[F6] [[def-emg-fx-spherical-quotient]] defines the spherical
Einstein–Maxwell–$\Lambda$ datum, including the requirement that its smooth
two-form be rotationally invariant; for $\Lambda=0$ its equations are exactly
the geometric electrovac equations verified in [F2].

## Counterexample

1.1 On the branch $f(z)=z^2$ of [F1], take $U=\mathbb R_\tau\times
(0,\infty)_z$, $q=L^2(-z^2d\tau^2+z^{-2}dz^2)$,
$\epsilon_2=-L^2d\tau\wedge dz$, future timelike field
$N=(Lz)^{-1}\partial_\tau$, and constant $r=L$. This is a nonempty,
connected, simply connected smooth Lorentzian orbit patch with the orientation,
time orientation, and product metric of [F5]; its prescribed four-volume form
is $L^4d\tau\wedge dz\wedge\omega_{S^2}$, matching [F1]. For each
$R\in SO(3)$ the lift
$\rho_R(\tau,z,p)=(\tau,z,Rp)$ fixes the base two-form
$\mathcal F=-L\,d\tau\wedge dz$, so $\rho_R^*\mathcal F=\mathcal F$; also
$R$ preserves the induced round metric. Thus the field and metric satisfy the
rotational-invariance and warped-product clauses in [F5] and [F6]. Each symmetry sphere
has induced metric $L^2\gamma_{S^2}$ and area
$L^2\int_0^\pi\int_0^{2\pi}\sin\theta\,d\phi\,d\theta=4\pi L^2$ by [F4].
Its areal radius is therefore the constant scalar $r=L$, so $dr=0$ throughout
the product patch. A function whose differential vanishes cannot serve as a
coordinate in a chart, because the differential of every coordinate function
is nonzero. [F1, F4, F5, algebra]

2.1 By [F2], [F5], [F6], and step 1.1 this is an exact spherical
Einstein–Maxwell datum with $\Lambda=0$, yet it does not admit its areal radius
as a coordinate. It therefore refutes the unrestricted claim: the
Reissner–Nordström–(A)dS areal-coordinate form needs a nonzero areal-radius
gradient. This example is excluded by [F3] and makes no claim about whether
other coordinates or limiting relations connect the two geometries. [F2, F3,
F5, F6, step 1.1, algebra] ∎

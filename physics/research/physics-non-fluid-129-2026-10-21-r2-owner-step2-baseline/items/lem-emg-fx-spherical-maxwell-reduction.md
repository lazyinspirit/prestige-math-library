---
id: lem-emg-fx-spherical-maxwell-reduction
kind: lemma
title: Source-free rotational Maxwell fields have constant fluxes
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emg-fx-spherical-orbit-geometry
  - def-emg-xs-geometric-electrovac
  - def-countable-choice
dependency_roles:
  def-emg-fx-spherical-orbit-geometry: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: K. A. Bronnikov, S.-W. Kim and M. V. Skvortsov, The Birkhoff theorem and string clouds, arXiv:1604.04905v1 (2016)
      url: https://arxiv.org/pdf/1604.04905
      locator: "Section 3, Theorem 1 proof, PDF pp. 3–4: spherical source-free Maxwell fields carry constant electric and magnetic flux parameters."
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.2.1, printed pp. 259–260 (PDF pp. 266–267): electric and magnetic flux conventions for the Reissner–Nordström field."
verification:
  precheck: pass
---

## Statement

Assume the geometry and orientation of the preceding spherical orbit
definition and countable choice $\mathrm{AC}_\omega$. If a smooth
rotationally invariant real two-form $\mathcal F$ on $\mathcal M=U\times S^2$
satisfies
$d\mathcal F=0$ and $d(\star_g\mathcal F)=0$, then there are unique constants
$q_e,q_m\in\mathbb R$ such that
$$\mathcal F=\frac{q_e}{r^2}\pi_U^*\epsilon_2+q_m\pi_S^*\omega_{S^2}.$$
For every orbit sphere $S_y=\{y\}\times S^2$ the constants are the signed
fluxes with normalization
$$q_e=\frac1{4\pi}\int_{S_y}\star_g\mathcal F,\qquad q_m=\frac1{4\pi}\int_{S_y}\mathcal F.$$
The proof uses $\mathrm{AC}_\omega$ only through the supplied global flux
integration convention; its local algebra and differential-form calculation
make no use of full choice.

## Statement references

[[def-emg-fx-spherical-orbit-geometry]]

[[def-emg-xs-geometric-electrovac]]

## Facts & Assumptions

**Given:** The product $\mathcal M=U\times S^2$, its Lorentzian metric $g$, the
chosen volume forms, a smooth rotationally invariant two-form $\mathcal F$,
the equations $d\mathcal F=d(\star_g\mathcal F)=0$, and $\mathrm{AC}_\omega$.

[F1] [[def-emg-fx-spherical-orbit-geometry]] fixes $g=q+r^2\gamma_{S^2}$, the
rotation action $\rho_R(y,p)=(y,Rp)$, the invariant-field convention, and
$\mathrm{vol}_g=-r^2\epsilon_2\wedge\omega_{S^2}$.

[F2] [[def-emg-xs-geometric-electrovac]] fixes the signature and Lorentzian
Hodge convention, the source-free Maxwell equations, and the normalizations
$q_e=(4\pi)^{-1}\int\star_g\mathcal F$ and
$q_m=(4\pi)^{-1}\int\mathcal F$. Its Einstein equation is stated for
$\Lambda=0$; no nonzero-$\Lambda$ claim is drawn from it here.

[A1] [[def-countable-choice]]: use countable choice only as inherited by the
surface-integral convention in [F2]; no arbitrary-index choice is used in the
local reduction.

## Proof

1.1 At $(y,p)$ the rotations fixing $p$ act on $T_pS^2$ as all planar
rotations, including $-I$. The decomposition
$\Lambda^2(T_y^*U\oplus T_p^*S^2)=\Lambda^2T_y^*U\oplus
(T_y^*U\otimes T_p^*S^2)\oplus\Lambda^2T_p^*S^2$ is preserved by that action.
The middle summand changes sign under $-I$, so its invariant part is zero.
Each of the first and last summands is one-dimensional and has the invariant
generators $\epsilon_2$ and $\omega_{S^2}$, respectively. Transitivity of
$SO(3)$ on $S^2$ makes their coefficients independent of $p$. Smoothness of
$\mathcal F$ makes the coefficients smooth on $U$, so uniquely
$\mathcal F=E(y)\epsilon_2+B(y)\omega_{S^2}$. [F1, given, algebra]

2.1 Since $\epsilon_2$ and $\omega_{S^2}$ are top forms on their respective
two-dimensional factors, their exterior derivatives vanish, and
$d\mathcal F=dB\wedge\omega_{S^2}$. The form $\omega_{S^2}$ never vanishes, so
$d\mathcal F=0$ implies $dB=0$. A smooth function with zero differential is
constant on connected $U$ (differentiate along each smooth path in a
coordinate-ball chain); call this constant $q_m$. [F1, given, step 1.1, algebra]

3.1 In an oriented orthonormal coframe with $\epsilon_2=-e^0\wedge e^1$ and
$r^2\omega_{S^2}=e^2\wedge e^3$, the four-volume is
$e^0\wedge e^1\wedge e^2\wedge e^3$. The Lorentzian Hodge definition therefore
gives $\star_g\epsilon_2=r^2\omega_{S^2}$ and
$\star_g\omega_{S^2}=-r^{-2}\epsilon_2$. Hence
$\star_g\mathcal F=Er^2\omega_{S^2}-Br^{-2}\epsilon_2$, and
$d(\star_g\mathcal F)=d(Er^2)\wedge\omega_{S^2}$ because a base one-form
wedged with the base top form $\epsilon_2$ vanishes. The second Maxwell equation
implies $d(Er^2)=0$, so $q_e:=Er^2$ is constant on connected $U$. Restricting
$\mathcal F$ and its Hodge dual to $S_y$ gives $q_m\omega_{S^2}$ and
$q_e\omega_{S^2}$; since $\omega_{S^2}=\sin\theta\,d\theta\wedge d\phi$ and
$\int_0^\pi\sin\theta\,d\theta\int_0^{2\pi}d\phi=4\pi$, the stated flux
normalizations follow. This proves existence and uniqueness of both constants.
[F1, F2, A1, step 1.1, step 2.1, algebra] ∎

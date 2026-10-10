---
id: ex-em-quadrupole-symmetry
kind: example
domain: physics
dependency_level: 18
title: "Four stationary point charges with vanishing total charge and dipole moment and traceless quadrupole diag(6qa^2,-6qa^2,0)"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "A finite source-moment computation for four stationary point charges in a named inertial frame: vanishing total charge and dipole moment, vanishing odd Cartesian moments, and the exact traceless quadrupole $\\operatorname{diag}(6qa^2,-6qa^2,0)$. No field, force, self-energy, dynamics, stability or empirical claim is made."
proof_strategy: direct
deps: [def-em-electric-moments, pthm-em-moment-origin-change, def-em-lab-geometry, def-em-si-conventions, def-finite-sum, lem-finite-sum-laws, def-euclidean-inner-product, def-spatial-euclidean-structure-of-an-inertial-frame, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  def-em-electric-moments: formulation-prerequisite
  pthm-em-moment-origin-change: physical-result
  def-em-lab-geometry: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  def-finite-sum: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
sources:
  references:
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: "https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf"
      locator: "Section 3.4.2 printed pp. 150-151 (the four charges at the corners of a square, Fig. 3.30: combining the charges in pairs makes the net dipole moment vanish and the configuration is a quadrupole; Eq. (3.100), the dipole moment of a collection of point charges). Read in the stamped scanned full text, OCR cross-checked."
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition (Pergamon 1971, 387 pp.; full text)"
      url: "http://www.elegio.it/mc2/LandauLifshitz_TheClassicalTheoryOfFields_text.pdf"
      locator: "Section 41 printed p. 98 (the quadrupole moment D_ab = sum e (3 x_a x_b - r^2 delta_ab) by inserting the charges, and its tracelessness D_aa = 0, Eqs. (41.3)-(41.4); Gaussian units re-expressed in SI). Read in the stamped full text."
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (2026 printing, 236 pp.)"
      url: "https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf"
      locator: "Section 2.2.3 printed pp. 21-22 (the quadrupole moment Q_ij = integral rho (3 r'_i r'_j - delta_ij r'^2) as the next multipole after the dipole). Read in the stamped full text."
verification:
  precheck: pass
---

## Example

Let $q\in\mathbb R$ and $a>0$, let $(e_1,e_2,e_3)$ be the $\delta$-orthonormal positively oriented basis of the laboratory frame ([[def-em-lab-geometry]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]), and consider the four stationary point charges of [[def-em-electric-moments]] (c): $+q$ at $ae_1$, $+q$ at $-ae_1$, $-q$ at $ae_2$, $-q$ at $-ae_2$. Then:

(a) $Q=0$ and $p=0$; more generally every odd Cartesian moment vanishes, $M_{i_1\dots i_{2k+1}}=0$ for every $k\ge0$ and all indices, because the configuration is invariant under the central reflection $x\mapsto-x$ with the charges preserved;

(b) the degree-$2$ Cartesian moment is $M_{ij}=2qa^2\bigl(\delta_{i1}\delta_{j1}-\delta_{i2}\delta_{j2}\bigr)$, i.e. $\operatorname{diag}(2qa^2,-2qa^2,0)$ in the frame basis, and its trace vanishes;

(c) the traceless quadrupole is $Q_{ij}=6qa^2\bigl(\delta_{i1}\delta_{j1}-\delta_{i2}\delta_{j2}\bigr)=\operatorname{diag}(6qa^2,-6qa^2,0)$ and $\sum_iQ_{ii}=0$; since $Q=p=0$, it is independent of the reference point by the origin-shift theorem ([[pthm-em-moment-origin-change]] (d));

(d) [Scope] this is a finite source-moment computation for prescribed stationary point charges. No field, force, energy (in particular no claim that the self-energy of the point charges is finite), dynamics, stability or empirical content is asserted.

## Facts & Assumptions

**Given:** Let $q\in\mathbb R$, $a>0$, and let $(e_1,e_2,e_3)$ be the $\delta$-orthonormal positively oriented basis of the laboratory frame; the four stationary point charges are $+q$ at $ae_1$, $+q$ at $-ae_1$, $-q$ at $ae_2$, $-q$ at $-ae_2$, as in the finite system of stationary point charges of [[def-em-electric-moments]] (c).

[F1] For a finite system of stationary point charges the moments are $Q=\sum_kq_k$, $p=\sum_kq_kx_k$, $M_{i_1\dots i_l}=\sum_kq_kx_{k,i_1}\cdots x_{k,i_l}$ and $Q_{ij}=\sum_kq_k(3x_{k,i}x_{k,j}-|x_k|^2\delta_{ij})$, finite sums with $\sum_iQ_{ii}=0$ computed without Choice ([[def-em-electric-moments]]).

[F2] The basis $(e_1,e_2,e_3)$ is $\delta$-orthonormal and positively oriented, and the vector product and the inner product are those of the frame's positive spatial three-space; in particular $\delta(e_r,e_s)=\delta_{rs}$ ([[def-spatial-euclidean-structure-of-an-inertial-frame]]).

[F3] The frame basis is expressed in the laboratory chart with Euclidean norm $|w|^2=\delta(w,w)$ and coordinates $w=\sum_iw^ie_i$ ([[def-em-lab-geometry]], [[def-euclidean-inner-product]]).

[F4] $\sum_iQ_{ii}=0$ for the finite system, and if $Q=0$ and $p=0$ then the traceless quadrupole is independent of the reference point: $Q^{(b)}_{ij}=Q_{ij}$ for every $b$ ([[def-em-electric-moments]], [[pthm-em-moment-origin-change]]).

[F5] Finite sums may be reindexed over a bijection of their index set and expanded by distributivity ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[F6] The Euclidean norm of a coordinate vector $w=(w^1,w^2,w^3)$ is $|w|=\bigl(\sum_i(w^i)^2\bigr)^{1/2}$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]).

## Verification

**Proof technique:** direct.

1.1 Compute the total charge and the dipole moment by inserting the four points into the finite sums of [F1]: $Q=q+q+(-q)+(-q)=0$, and $p=q(ae_1)+q(-ae_1)+(-q)(ae_2)+(-q)(-ae_2)=qa(e_1-e_1)+(-q)a(e_2-e_2)=0$, using linearity and the coordinate expansions of [F2], [F3] and [F5]. [F1, F2, F3, F5]

2.1 Show that every odd Cartesian moment vanishes. The configuration is invariant under the central reflection $x\mapsto-x$: the charge $+q$ at $\pm ae_1$ is carried to the charge $+q$ at $\mp ae_1$, and the charge $-q$ at $\pm ae_2$ to the charge $-q$ at $\mp ae_2$, so pairing each point with its image and reindexing the finite sum [F5] gives $M_{i_1\dots i_{2k+1}}=\sum_{j=1}^4q_j\prod_{r=1}^{2k+1}x_{j,i_r}=\sum_{j=1}^4q_j(-x_{j,i_1})\cdots(-x_{j,i_{2k+1}})=-\sum_{j=1}^4q_j\prod_{r}x_{j,i_r}=-M_{i_1\dots i_{2k+1}}$, hence $M_{i_1\dots i_{2k+1}}=0$; the case $k=0$ is the vanishing dipole $p=0$; total charge $Q=0$ was computed separately in step 1.1. [step 1.1, F1, F5]

3.1 Compute the degree-two Cartesian moment. By [F1] and the coordinates of [F2], $M_{ij}=q(ae_1)_i(ae_1)_j+q(-ae_1)_i(-ae_1)_j-q(ae_2)_i(ae_2)_j-q(-ae_2)_i(-ae_2)_j=qa^2e_{1i}e_{1j}+qa^2e_{1i}e_{1j}-qa^2e_{2i}e_{2j}-qa^2e_{2i}e_{2j}=2qa^2(\delta_{i1}\delta_{j1}-\delta_{i2}\delta_{j2})$, which is $\operatorname{diag}(2qa^2,-2qa^2,0)$ in the frame basis and has vanishing trace $2qa^2(1-1)=0$. [step 2.1, F1, F2, F5]

4.1 Compute the traceless quadrupole. With [F1], $Q_{ij}=\sum_kq_k(3x_{k,i}x_{k,j}-|x_k|^2\delta_{ij})=3M_{ij}-\delta_{ij}\sum_kq_k|x_k|^2$; each of the four points has $|x_k|=a$ because $|\pm ae_r|^2=a^2\delta(e_r,e_r)=a^2$ by [F2], [F3] and [F6], so $\sum_kq_k|x_k|^2=a^2\bigl(q+q-q-q\bigr)=0$ and $Q_{ij}=3M_{ij}=6qa^2(\delta_{i1}\delta_{j1}-\delta_{i2}\delta_{j2})$, whose trace is $6qa^2(1-1)=0$, in agreement with the general tracelessness of [F4]. [step 3.1, F1, F2, F3, F4, F6]

5.1 Record the reference-point behaviour and the scope. Since $Q=p=0$ by steps 1.1 and 2.1, clause (d) of the origin-shift theorem [F4] gives $Q^{(b)}_{ij}=Q_{ij}$ for every reference point $b$, so the value $\operatorname{diag}(6qa^2,-6qa^2,0)$ is independent of the reference point; no field, force, energy or self-energy of the point charges is computed or claimed, and the computation is a finite source-moment identity for the prescribed stationary charges. [step 4.1, F4] ∎

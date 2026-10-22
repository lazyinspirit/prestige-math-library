---
id: def-emx-helicity-line-bundle
kind: definition
title: Helicity eigenlines over the direction sphere
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - pthm-emx-helicity-projection
  - def-emx-transverse-fourier-field
  - def-emx-lorentz-star
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-smooth-differential-k-form
  - def-wedge-product-of-differential-forms
  - def-exterior-derivative-by-the-invariant-vector-field-formula
dependency_roles:
  pthm-emx-helicity-projection: physical-result
  def-emx-transverse-fourier-field: formulation-prerequisite
  def-emx-lorentz-star: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-oriented-smooth-manifold-and-oriented-chart: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-wedge-product-of-differential-forms: mathematical-premise
  def-exterior-derivative-by-the-invariant-vector-field-formula: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional classical Maxwell-Lorentz vacuum model in the smooth source-free
  nonzero-Fourier-mode regime stated by the supplier. The construction is the
  direction-sphere geometry of those modes, with no additional approximation.
  Directions, unit polarization vectors, the helicity sigma, and angular
  coordinates are dimensionless; the Berry connection and holonomy are
  dimensionless. There is no quantization, photon position operator, material
  medium, measurement, or empirical claim.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Box 2, PDF pp. 3–4: helicity basis and direction-sphere Berry connection; the exact classical projector convention is fixed by the local supplier."
    - title: "David Tong, The Quantum Hall Effect, TIFR Infosys Lecture Notes (2016)"
      url: "https://www.damtp.cam.ac.uk/user/tong/qhe/qhe.pdf"
      locator: "§1.5.1, printed pp. 28–31: Berry connection as a parameter-space one-form and its phase-gauge transformation. Tong uses -i⟨n|dn⟩; this item fixes +i v†dv and does not import the adiabatic quantum model."
verification:
  precheck: pending
---

## Definition

Let $S^2:=\{n\in\mathbb R^3:n\cdot n=1\}$ with the smooth structure given by the six graph charts solving $n_j=\pm\sqrt{1-\sum_{k\ne j}n_k^2}$ on the hemispheres $\pm n_j>0$. Orient it outward using the ordered spatial basis $x^1,x^2,x^3$. Its tangent plane is $T_nS^2=\{X\in\mathbb R^3:n\cdot X=0\}$. Physically, $n=k/|k|$ for a nonzero spatial wavevector $k$ in the SI Fourier description, where $k$ has units $\mathrm{m^{-1}}$; hence $n$ is dimensionless and the radial magnitude is discarded. For $\sigma\in\{+1,-1\}$, set $C_nz:=i\,n\times z$, $P_T(n)z:=z-n(n\cdot z)$, and $P_\sigma(n):=\tfrac12(P_T(n)+\sigma C_n)$ on $\mathbb C^3$, using the complex-linear extension of the right-handed cross product. Define the helicity fibre $L_\sigma(n):=\operatorname{range}P_\sigma(n)$ and the total space $L_\sigma:=\{(n,z):n\in S^2,\ z\in L_\sigma(n)\}$, projected to $S^2$ by $(n,z)\mapsto n$. Use the Hermitian product $\langle u,v\rangle_H:=\sum_{j=1}^3\overline{u_j}v_j$.

On a spherical chart with $0<\theta<\pi$ and a smooth longitude branch $\phi$, write $n=(\sin\theta\cos\phi,\sin\theta\sin\phi,\cos\theta)$, $e_\theta=(\cos\theta\cos\phi,\cos\theta\sin\phi,-\sin\theta)$, and $e_\phi=(-\sin\phi,\cos\phi,0)$. The local unit helicity frame is $v_\sigma:=(e_\theta+i\sigma e_\phi)/\sqrt2$. For any local smooth unit frame $v$ of $L_\sigma$, define its Berry connection one-form by $A:=i v^\dagger d v$, where $d v$ differentiates its three complex components. A smooth phase change $v'=e^{i\chi}v$, with real smooth $\chi$, changes this local form to $A'=A-d\chi$. The local Berry curvature is the two-form $F:=dA$; this definition makes no global gluing assertion.

## Definition references

[[pthm-emx-helicity-projection]]

[[def-emx-transverse-fourier-field]]

[[def-emx-lorentz-star]]

[[def-cross-product-in-r3]]

[[def-euclidean-inner-product]]

[[def-oriented-smooth-manifold-and-oriented-chart]]

[[def-smooth-differential-k-form]]

[[def-wedge-product-of-differential-forms]]

[[def-exterior-derivative-by-the-invariant-vector-field-formula]]

## Facts & Assumptions

**Given:** The oriented unit direction sphere, its standard Hermitian space $\mathbb C^3$, and one fixed $\sigma\in\{+1,-1\}$.

[F1] [[pthm-emx-helicity-projection]] defines $C_n=i n\times$, $P_Tz=z-n(n\cdot z)$, and $P_\sigma=\tfrac12(P_T+\sigma C_n)$ for unit directions; it proves that $P_\sigma$ is smooth and is an orthogonal rank-one projection onto the $\sigma$ helicity eigenspace.

[F2] [[def-emx-transverse-fourier-field]] defines $k$ as a spatial wavevector with SI units $\mathrm{m^{-1}}$ and uses nonzero $k$ for its transverse Fourier amplitudes; normalizing $k$ gives the dimensionless direction $n$.

[F3] [[def-emx-lorentz-star]] fixes the ordered coframe $dx^0,dx^1,dx^2,dx^3$ and volume $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$; restricting to the spatial subspace gives the ordered orientation used here.

[F4] [[def-cross-product-in-r3]] fixes the coordinate formula for the right-handed cross product; [[def-euclidean-inner-product]] fixes the real Euclidean dot product and norm.

[F5] [[def-oriented-smooth-manifold-and-oriented-chart]] defines an orientation as a smoothly chosen orientation ray; the outward normal and fixed spatial orientation specify that ray here.

[F6] [[def-smooth-differential-k-form]] defines smooth $k$-forms as smooth sections of $\bigwedge^kT^*S^2$; [[def-wedge-product-of-differential-forms]] defines their wedge product pointwise, and [[def-exterior-derivative-by-the-invariant-vector-field-formula]] defines $d$.

## Proof

1.1 The six graph charts in the Definition are smooth coordinate charts on open hemispheres and cover $S^2$; their square-root transition formulas are smooth on overlaps. The outward tangent orientation ray is smooth by the nonvanishing normal $n$, with ambient spatial orientation fixed in [F3] and orientation-ray convention [F5]. By [F1], each $P_\sigma(n)$ is a smooth rank-one projection, so each fibre is a complex line. [F2] identifies the physical direction index with a nonzero SI wavevector normalized to unit length. At any $n_0$, choose a fixed $w\in\mathbb C^3$ with $P_\sigma(n_0)w\ne0$, which exists because the projection has nonzero range. Continuity makes $P_\sigma(n)w\ne0$ on a neighborhood of $n_0$, and $P_\sigma(n)w/\|P_\sigma(n)w\|$ is a smooth unit local section there. This proves local triviality without choosing a frame family over the whole sphere. [F1, F2, F3, F5, given, construct]

1.2 The coordinate vectors satisfy $n\cdot e_\theta=n\cdot e_\phi=e_\theta\cdot e_\phi=0$, $\|e_\theta\|=\|e_\phi\|=1$, and $n\times e_\theta=e_\phi$, $n\times e_\phi=-e_\theta$, by the coordinate formulas in [F4]. Hence $v_\sigma^\dagger v_\sigma=1$, $P_Tv_\sigma=v_\sigma$, and $C_nv_\sigma=\sigma v_\sigma$. Substitution gives $P_\sigma v_\sigma=v_\sigma$, so this is a unit local frame of the stated fibre. [F1, F4, algebra]

2.1 For a smooth section $s$ on a chart, define $\nabla s:=P_\sigma d s$. Since $P_\sigma s=s$, this is again $L_\sigma$-valued. For every smooth scalar $f$, the product rule gives $\nabla(fs)=P_\sigma(df\,s+f\,ds)=df\,s+f\nabla s$, so $\nabla$ is a connection on the line bundle. In a unit frame $v$, writing $s=a v$ gives $\nabla s=(da+a v^\dagger dv)v=(da-iAa)v$ because $A=i v^\dagger dv$. [F1, F6, step 1.1, step 1.2, algebra]

3.1 Under $v'=e^{i\chi}v$, direct differentiation gives $v'^\dagger d v'=i\,d\chi+v^\dagger dv$, hence $A'=i v'^\dagger d v'=A-d\chi$. This verifies the declared local gauge transformation and completes the definition of the local connection and curvature conventions. [given, F6, step 2.1, algebra] ∎

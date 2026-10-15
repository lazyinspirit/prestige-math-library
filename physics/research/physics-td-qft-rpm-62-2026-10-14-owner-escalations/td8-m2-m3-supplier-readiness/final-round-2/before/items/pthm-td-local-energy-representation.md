---
id: pthm-td-local-energy-representation
kind: physics-theorem
title: Local energy representation and thermodynamic conjugates
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Local single-phase, positive-temperature charts of the adopted macroscopic entropy representation; no global inverse or statement at a phase boundary is asserted.
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-galilean-rest-frame
  - post-td-concave-fundamental-entropy
  - def-td-temperature-pressure-chemical-potential
  - thm-chain-rule-for-total-derivatives
  - def-ck-euclidean-maps-and-diffeomorphisms
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-tdmath-local-implicit-rank
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-tdmath-local-implicit-rank: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §§1.2.4 and 1.4
      url: https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.9–2.10
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
---

## Statement

Let $c$ be a material constitution, let $r$ be its finite number of named species, and let $(U_0,V_0,n_{0,1},\ldots,n_{0,r})$ lie in an open single-phase chart $\Omega$ of physical SI coordinate values, with $U$ in joules, $V>0$ in cubic metres, and each $n_j>0$ in moles ([[def-td-equilibrium-state-domain]], [[def-td-si-quantities]]). The chart is the image of an open subset of the dimensionless domain $D_c$ under the fixed diagonal unit conversion $(\hat U,\hat V,\hat n)\mapsto(U,V,n)$. Write $S_c(U,V,n)$ for the entropy on $D_c$ composed with the inverse unit conversion; its physical-coordinate partials include those unit factors as specified in [[post-td-concave-fundamental-entropy]]. Assume this representative is $C^2$ and $S_{c,U}(U_0,V_0,n_0)>0$. Then there are open neighborhoods of $(S_c(U_0,V_0,n_0),V_0,n_0)$ and $(U_0,V_0,n_0)$ on which the equation

$$S_c(U,V,n)=s$$

has a unique solution $U=\mathcal U_c(s,V,n)$ of class $C^2$. On this local chart,

$$\mathcal U_{c,s}=T_c,\qquad \mathcal U_{c,V}=-p_c,\qquad \mathcal U_{c,n_j}=\mu_{c,j},$$

with the intensive functions defined by [[def-td-temperature-pressure-chemical-potential]]. This is a local representation only: it asserts neither global injectivity or domain coverage nor differentiability at a nonsmooth phase boundary.

## Facts & Assumptions

**Given:** A fixed constitution $c$, an open physical-coordinate neighborhood $\Omega\subseteq D_c$, a point $(U_0,V_0,n_0)\in\Omega$ with $V_0>0$ and positive mole amounts, and the adopted $C^2$ entropy with $S_{c,U}(U_0,V_0,n_0)>0$. Use the stated SI units and the center-of-mass rest-frame energy convention.

[A1] [[post-td-concave-fundamental-entropy]]: On each designated open single-phase chart, the entropy representative is $C^2$ and its finite partial derivative $S_{c,U}$ at fixed $V,n$ is strictly positive. This is an adopted physical premise, not a proved physical law.

[F1] [[def-td-equilibrium-state-domain]] and [[def-td-galilean-rest-frame]]: The state domain $D_c$ uses dimensionless SI numerical coordinates and maps them to physical $U,V,n_j$; $U$ is the internal energy evaluated in the center-of-mass rest frame. The definition does not assert that every ambient coordinate tuple is physically realizable.

[F2] [[def-td-temperature-pressure-chemical-potential]]: $T_c=1/S_{c,U}$, $p_c=T_cS_{c,V}$, and $\mu_{c,j}=-T_cS_{c,n_j}$, with the other physical coordinates held fixed in each partial derivative.

[F3] [[thm-chain-rule-for-total-derivatives]]: For differentiable maps on open Euclidean domains, differentiation of a composition obeys the total-derivative chain rule.

[F4] [[def-ck-euclidean-maps-and-diffeomorphisms]]: A scalar map is $C^2$ when its coordinate partial derivatives through order two exist and are continuous.

[F5] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]]: Finite sums and products and compositions of $C^1$ Euclidean maps are $C^1$.

[L1] [[thm-tdmath-local-implicit-rank]]: The current carrier's Statement says that a $C^1$ map on an open Euclidean set with a zero and an invertible derivative minor has a unique local $C^1$ graph representation, with derivative $D\varphi=-(D_vF)^{-1}D_uF$. In its scalar case, apply it to $G(U,s,V,n)=S_c(U,V,n)-s$, placing $U$ in the dependent-coordinate block; $G_U=S_{c,U}>0$. The carrier exists as an unregistered batch-4 draft, and its AI-altered proof has not been independently accepted. Its actual interface supplies $C^1$, not $C^2$; the proof derives the extra regularity below and remains conditional on the carrier's proof acceptance.

## Proof

1.1 Put $y=(V,n_1,\ldots,n_r)$ and choose an open interval $J$ around $s_0=S_c(U_0,y_0)$. On the open set where $(U,y)\in\Omega$ and $s\in J$, define $G(U,s,y)=S_c(U,y)-s$. By [A1] and [F1], this map is $C^1$, $G(U_0,s_0,y_0)=0$, and its $1\times1$ derivative minor in the $U$ coordinate equals $S_{c,U}(U_0,y_0)>0$. Since the total number of coordinates is $r+3>1$, the scalar graph case of [L1] applies after placing $U$ in the dependent block. Conditional on that draft supplier, it gives a unique local $C^1$ function $U=\mathcal U_c(s,y)$ solving $S_c(\mathcal U_c(s,y),y)=s$. [given, A1, F1, L1, construct]

2.1 Differentiate $S_c(\mathcal U_c(s,y),y)=s$ in each coordinate of $(s,y)$ using [F3]. Writing $\Psi(s,y)=(\mathcal U_c(s,y),y)$, the resulting first-derivative identities are $\mathcal U_{c,s}=1/(S_{c,U}\circ\Psi)$ and $\mathcal U_{c,y_j}=-(S_{c,y_j}\circ\Psi)/(S_{c,U}\circ\Psi)$. Each partial $S_{c,U},S_{c,y_j}$ is $C^1$ by [A1],[F4], and $\Psi$ is $C^1$ by [L1]. Thus their compositions with $\Psi$ are $C^1$ by [F3],[F5]. For a positive scalar $z$, $\rho(z)=1/z$ is $C^1$: its difference quotient is $[\rho(z+h)-\rho(z)]/h=-1/(z(z+h))\to-1/z^2$, a continuous derivative on $z>0$. Since $S_{c,U}\circ\Psi>0$, the displayed expressions for every first partial of $\mathcal U_c$ are $C^1$ by [F5]. Hence all second coordinate partials of $\mathcal U_c$ exist and are continuous, so $\mathcal U_c$ is $C^2$ by [F4]. [given, A1, F3, F4, F5, L1, step 1.1, algebra]

3.1 By [F2], $T_c=1/S_{c,U}$, $p_c=T_cS_{c,V}$, and $\mu_{c,j}=-T_cS_{c,n_j}$. The derivative identities in step 2.1 therefore give $\mathcal U_{c,s}=T_c$, $\mathcal U_{c,V}=-p_c$, and $\mathcal U_{c,n_j}=\mu_{c,j}$, with the other coordinates held fixed. [F2, step 2.1, algebra] ∎

## Remarks

The batch-4 carrier [[thm-tdmath-local-implicit-rank]] is present in `items/` but unregistered in its empty page manifest. Its actual statement supplies a C1 local graph, and the argument above derives C2 regularity from the entropy's C2 hypothesis. The carrier's proof remains an unreviewed draft, so the consuming theorem is escalated pending proof acceptance and manifest registration.

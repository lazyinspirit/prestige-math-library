---
id: pthm-cm12-local-legendre
kind: physics-theorem
title: "The velocity Hessian of the mechanical Lagrangian and the local invertibility of its Legendre map in every chart of the model"
status: published
origin: session
domain: physics
dependency_level: 15
deps: [def-cm12-cotangent-momentum, def-cm12-regularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm-legendre-map-in-a-time-dependent-chart, prop-cm-mechanical-chart-lagrangian-is-hyperregular, lem-cm-legendre-map-local-invertibility, thm-euclidean-inverse-function-theorem, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-regularity: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  prop-cm-mechanical-chart-lagrangian-is-hyperregular: mathematical-premise
  lem-cm-legendre-map-local-invertibility: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The Legendre map of a declared potential presentation of the force branch: the velocity Hessian of the mechanical Lagrangian in an inertial Cartesian chart and in a declared generalized-coordinate chart, its positivity, the resulting velocity-regularity at every state, and the existence of a local C^1 inverse branch at every state of those charts. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no global inverse branch on a momentum fibre, no equation of motion, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.1.1-4.1.3, printed pages 82-84 (PDF pages 88-90): inversion of p = dL/dqdot and the worked particle-in-a-potential case p = m r-dot, H = p^2/(2m) + V(r)"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 8.2-8.3: the Legendre transform of the Lagrangian, the inversion of the generalized momentum, and the resulting Hamilton equations"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 3.1 and 3.1.1: the Legendre transformation, its relation to the functional inverse of the velocity derivative, and Hamilton's equations"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 8-9 (PDF pages 11-12): the Legendre transformation from L to H and the explicit inverse for Lagrangians quadratic in the velocities"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential
$U:I_{0}\times Q\to\mathbb R$ and residual forces $d$ of the standing
regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Let $X:\Omega\to Q$ be a
generalized-coordinate map with substituted Lagrangian $\widetilde L$ and
kinetic metric $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$
([[def-cm07-generalized-coordinates-and-forces]]). Then:

1. **(velocity Hessian)** For every $(t,x,v)\in I_{0}\times Q\times\mathbb R^{3N}$
   one has $L_{v}(t,x,v)=\mathsf Mv$ and $L_{vv}(t,x,v)=\mathsf M$, and for
   every $(t,q,v)\in I_{0}\times\Omega\times\mathbb R^{r}$ one has
   $\widetilde L_{v}(t,q,v)=G(q)v$ and $\widetilde L_{vv}(t,q,v)=G(q)$. Both
   matrices are symmetric and positive definite; consequently the Cartesian
   presentation and the presentation in the coordinates $X$ are
   velocity-regular at every state in the sense of [[def-cm12-regularity]].

2. **(local inverse branch)** At every state $z$ of either chart there is a
   local inverse branch: open sets $W\ni z$ and
   $W'\ni\mathbb F(z)$ with $\mathbb F|_{W}:W\to W'$ a $C^{1}$
   diffeomorphism, where $\mathbb F$ is the Legendre map of the corresponding
   fibre-full chart ([[def-cm12-regularity]] clause (c),
   [[def-cm-legendre-map-in-a-time-dependent-chart]]).

The statement is conditional on the adopted force branch and on the declared
presentation; it asserts no global inverse Legendre branch on a momentum
fibre and no empirical content.

## Facts & Assumptions

**Given:** The model data of the statement, the mechanical Lagrangian $L=K-U$, the generalized-coordinate map $X$ with its substituted Lagrangian, and a state of one of the two charts.

[F1] Model and Lagrangian data ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]]): $L=K-U$ is of class $C^{2}$ on the open set $I_{0}\times Q\times\mathbb R^{3N}$, the velocity gradient and Hessian are formed with the Euclidean partial derivatives of [[def-jacobian-matrix-and-gradient]] and [[def-directional-and-partial-derivatives]], $K'(v)=\mathsf Mv$, the mass operator $\mathsf M$ is a symmetric positive definite linear map of $\mathbb R^{3N}$, and the presentation $(U,d)$ has $U$ of class $C^{2}$ with the standing regularity of the force branch; dimensions are read by [[def-cm01-units]].

[F2] Mechanical chart Lagrangian ([[prop-cm-mechanical-chart-lagrangian-is-hyperregular]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-euclidean-inner-product]]): for $C^{2}$ data $G,A,V$ with $G(t,q)$ symmetric positive definite, the Lagrangian $\mathcal L(t,q,v)=\tfrac12v^{\mathsf T}G(t,q)v+A(t,q)\cdot v-V(t,q)$ has $\mathcal L_{v}(t,q,v)=G(t,q)v+A(t,q)$ and $\mathcal L_{vv}(t,q,v)=G(t,q)$, and is regular on its chart; the products and transposes are those of the cited matrix items and the dot product is the Euclidean pairing.

[F3] Generalized-coordinate dictionary ([[def-cm07-generalized-coordinates-and-forces]]): the substituted Lagrangian is $\widetilde L(t,q,v)=L\bigl(t,X(q),DX(q)v\bigr)=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $\widetilde U(t,q)=U(t,X(q))$, the map $X$ is of class $C^{3}$ with injective derivative, and $G(q)$ is symmetric and positive definite.

[F4] Legendre derivative and inverse function theorem ([[lem-cm-legendre-map-local-invertibility]], [[thm-euclidean-inverse-function-theorem]]): for a fibre-full $C^{2}$ chart the Legendre map is $C^{1}$, its derivative acts by $(\tau,\delta q,\delta v)\mapsto(\tau,\delta q,\mathcal L_{vt}\tau+\mathcal L_{vq}\delta q+\mathcal L_{vv}\delta v)$, it is invertible exactly when the velocity Hessian is nonsingular, and a nonsingular velocity Hessian yields a local $C^{1}$ diffeomorphism onto the image; the cited inverse function theorem supplies the local $C^{1}$ inverse for a $C^{1}$ map with invertible derivative.

[F5] Fibre-full charts and closure of differentiability ([[def-cm-legendre-map-in-a-time-dependent-chart]], [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): a fibre-full time-dependent Lagrangian chart is a $C^{2}$ map on an open set of the form $J\times U\times\mathbb R^{n}$; finite sums and products of $C^{k}$ Euclidean maps are $C^{k}$ and composites of composable $C^{k}$ maps are $C^{k}$.



## Proof

**Proof technique:** direct; identify the model's two chart Lagrangians with mechanical chart Lagrangians, read off the velocity Hessians, and apply the local inverse-function criterion.

1.1 The set $I_{0}\times Q\times\mathbb R^{3N}$ is open, and $L$ is a $C^{2}$ map on it by [F1]; hence $(I_{0}\times Q\times\mathbb R^{3N},L)$ is a fibre-full time-dependent Lagrangian chart in the sense of [F5]. By [F1] one has $L(t,x,v)=\tfrac12v\cdot\mathsf Mv-U(t,x)$ with $\mathsf M$ symmetric positive definite and $U$ of class $C^{2}$, so $L$ is the mechanical chart Lagrangian of [F2] with the data $G:=\mathsf M$, $A:=0$, $V:=U$. [F1, F5, algebra]

1.2 By [F3] the substituted Lagrangian is $\widetilde L(t,q,v)=L(t,X(q),DX(q)v)=\tfrac12v^{\mathsf T}G(q)v-\widetilde U(t,q)$ with $\widetilde U(t,q)=U(t,X(q))$; since $X$ is of class $C^{3}$ its derivative $DX$ is of class $C^{2}$, so $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ and $\widetilde U$ are of class $C^{2}$ by the closure properties of [F5], and $G(q)$ is symmetric positive definite by [F3]. Thus $\widetilde L$ is the mechanical chart Lagrangian of [F2] with the data $G:=G(\cdot)$, $A:=0$, $V:=\widetilde U$, and [F2] gives $\widetilde L_{v}(t,q,v)=G(q)v$ and $\widetilde L_{vv}(t,q,v)=G(q)$. [F2, F3, F5, algebra]

1.3 By [F3] the determinant $\det G(q)$ is nonzero at every $q$, because $G(q)$ is positive definite and positive definiteness implies invertibility; hence the presentation in the coordinates $X$ is velocity-regular at every state. [F3, algebra]

2.1 Applying [F2] to step 1.1 gives $L_{v}(t,x,v)=\mathsf Mv+0=\mathsf Mv$ and $L_{vv}(t,x,v)=\mathsf M$ for every $(t,x,v)$; since $\mathsf M$ is symmetric positive definite by [F1], the Cartesian presentation is velocity-regular at every state in the sense of [[def-cm12-regularity]]. [F1, F2, step 1.1, algebra]

2.2 Generalized-coordinate local branch: the same argument applies to the chart of step 1.2 with the nonsingular velocity Hessian $G(q)$ of step 1.3, and gives a local inverse branch at every state of the chart of $X$. [F4, step 1.2, step 1.3, algebra]

3.1 Cartesian local branch: by [F4] the Legendre map $\mathbb F$ of the chart of step 1.1 is $C^{1}$, its derivative at a state is invertible exactly when the velocity Hessian there is nonsingular, and by step 2.1 the velocity Hessian is the invertible matrix $\mathsf M$; hence $\mathbb F$ has invertible derivative at every state, and [F4] (the inverse function theorem applied to the $C^{1}$ map $\mathbb F$ at the state) yields open sets $W\ni(t,x,v)$ and $W'\ni\mathbb F(t,x,v)$ with $\mathbb F|_{W}:W\to W'$ a $C^{1}$ diffeomorphism. [F4, step 2.1, algebra]

4.1 Clause 1 follows from steps 2.1, 1.2 and 1.3 together with the definition of velocity-regularity; clause 2 follows from steps 3.1 and 2.2 together with the notion of local inverse branch; no statement about a global inverse branch has been used. [step 2.1, step 1.2, step 1.3, step 3.1, step 2.2] ∎

## Remarks

- **What is used and what is not.** The proof uses only the positivity of the
  mass operator and of the kinetic metric, the identification of the model's
  Lagrangian with a mechanical chart Lagrangian, and the local
  inverse-function criterion of [[lem-cm-legendre-map-local-invertibility]];
  it does not use hyperregularity, and it does not claim that the local
  branches globalise. The global statement for the mechanical branch is
  proved later on this page, and the companion example
  $\mathcal L(v)=e^{v}$ shows that regularity at every state can fail to give
  a global fibre inverse.

- **Source reading.** The worked case $p=m\dot r$, $H=p^{2}/(2m)+V(r)$ of
  Tong's Section 4.1.3 is the Cartesian instance of clauses 1 and 2; the
  general quadratic form with positive definite kinetic matrix appears in
  Stewart's Section 1.2, and SICM's Section 3.1.1 states explicitly that the
  Legendre transform is available in closed form for velocity-quadratic
  Lagrangians because the velocity derivative is then invertible. The source
  audit's caveat that convexity is not the relevant hypothesis is respected:
  the hypothesis used here is the nonsingularity recorded in clause 1.

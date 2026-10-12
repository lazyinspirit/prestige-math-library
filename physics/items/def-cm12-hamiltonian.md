---
id: def-cm12-hamiltonian
kind: definition
title: "The Hamiltonian of a hyperregular potential presentation: the Legendre transform of the mechanical Lagrangian, its domain and its dimensions"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm12-hyperregularity, def-cm12-cotangent-momentum, def-cm12-regularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm-legendre-map-in-a-time-dependent-chart, def-cm01-configuration, def-cm01-units, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, def-ck-euclidean-maps-and-diffeomorphisms, thm-ck-euclidean-maps-closed-under-algebra-and-composition]
dependency_roles:
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-regularity: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The Hamiltonian datum of a hyperregular potential presentation: the Legendre transform p.v - L evaluated on the declared inverse Legendre branch, in Cartesian data and in a declared generalized-coordinate chart, its momentum phase domain, its energy dimension and its dependence on the declared chart, branch and potential representative. The item defines a model-derived function only; it asserts no equation of motion, no conservation law and no measured value, and the explicit kinetic-plus-potential form for the mechanical branch is a theorem of this page, not part of the definition."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.2, printed pages 83-84 (PDF pages 89-90): the Hamiltonian H = sum_i p_i qdot_i - L with the velocities eliminated in favour of the momenta"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 10.1, chapter page 2 (PDF page 238): H = sum_j p_j qdot_j - L computed as a function of t, the coordinates and the generalized momenta"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed pages 8-9 (PDF pages 11-12): the Legendre transformation H(q,p,t) = qdot_i p_i - L(q,qdot,t) and the general form for Lagrangians quadratic plus linear in the velocities"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2: the function which is the Legendre transform of the Lagrangian is called the Hamiltonian function"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$, open configuration domain $Q\subseteq\mathbb R^{3N}$,
time window $I_{0}$, mass operator $\mathsf M$
([[def-cm01-configuration]]), $C^{2}$ potential $U$ and residual forces $d$ of
the standing regularity ([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]); dimensions are read by
[[def-cm01-units]] and the Euclidean pairing is
[[def-euclidean-inner-product]].

**(a) Cartesian Hamiltonian.** Assume the presentation is hyperregular on the
Cartesian chart, with inverse Legendre branch
$v:I_{0}\times Q\times\mathbb R^{3N}\to\mathbb R^{3N}$
([[def-cm12-hyperregularity]], [[def-cm-legendre-map-in-a-time-dependent-chart]]).
The **Hamiltonian of the presentation on the Cartesian chart** is the function

$$H:I_{0}\times Q\times\mathbb R^{3N}\longrightarrow\mathbb R,\qquad H(t,x,p):=p\cdot v(t,x,p)-L\bigl(t,x,v(t,x,p)\bigr),$$

where $p\cdot v(t,x,p)$ is the Euclidean pairing of the momentum covector
with the inverse-branch velocity ([[def-cm12-cotangent-momentum]],
[[def-euclidean-inner-product]]). The momentum phase chart
$I_{0}\times Q\times\mathbb R^{3N}$ with coordinates $(t,x,p)$ is the
**Hamiltonian phase chart** of the presentation on the Cartesian chart.

**(b) Generalized-coordinate Hamiltonian.** Let $X:\Omega\to Q$ be a
generalized-coordinate map with substituted Lagrangian $\widetilde L$, kinetic
metric $G$ and inverse Legendre branch $v$ on
$I_{0}\times\Omega\times\mathbb R^{r}$ ([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-hyperregularity]]). The **Hamiltonian of the presentation in the
coordinates $X$** is

$$\widetilde H:I_{0}\times\Omega\times\mathbb R^{r}\longrightarrow\mathbb R,\qquad \widetilde H(t,q,p):=p\cdot v(t,q,p)-\widetilde L\bigl(t,q,v(t,q,p)\bigr).$$

For the Cartesian chart, $X=\mathrm{id}$ and $\widetilde H=H$; the general
definition is the same formula applied to the substituted fibre-full chart.

**(c) Dimensions and conventions.** Each term of the defining difference has
dimension $\mu\ell^{2}\tau^{-2}$ (energy): the pairing $p\cdot v$ multiplies
$\mu\ell\tau^{-1}$ by $\ell\tau^{-1}$ in Cartesian data
([[def-cm12-cotangent-momentum]]), and $L$ has energy dimension
([[def-cm07-action-and-mechanical-lagrangian]]). In the coordinates $X$ the
pairing is dimensionally consistent for every declared coordinate dimension
$\gamma_{a}$ and the dimension is unchanged. The Hamiltonian is $C^{1}$ on
its domain, being a sum of products of $C^{1}$ maps
([[thm-ck-euclidean-maps-closed-under-algebra-and-composition]],
[[def-ck-euclidean-maps-and-diffeomorphisms]]). The pairing is the coordinate
Euclidean product; no metric on momentum space and no symplectic form is
introduced by this definition.

**(d) Dependence and status.** The Hamiltonian depends on the declared chart,
on the declared inverse Legendre branch (when more than one branch exists it
is part of the data, as in [[def-cm12-hyperregularity]]) and on the potential
representative: replacing $U$ by $U+c(t)$ leaves the branch unchanged and
replaces $L$ by $L-c(t)$, hence replaces $H$ by $H+c(t)$
([[def-cm03-potential-and-mechanical-energy]] clause (c),
[[def-cm07-action-and-mechanical-lagrangian]] clause (b)). It asserts no
equation of motion, no conservation property and no measured value; the
explicit kinetic-plus-potential form of $H$ for the mechanical branch, the
equivalence of its equations with the model's equation of motion and its
relation to the mechanical energy are the theorems of this page. Matrix
identities used by those theorems are read through
[[def-matrix-product-and-identity-matrix]].

## Remarks

- **Why the branch matters.** The definition is the mathematical Legendre
  transform $\mathcal L_v\mapsto p$, $H=p\cdot v-\mathcal L$, evaluated on the
  branch $v(\,\cdot\,)$; the notation $H(t,q,p)$ presupposes that the branch is
  a function of the momentum, which is exactly the content of hyperregularity.
  At a merely regular state the formula defines a local Hamiltonian only, on
  the momentum image of the local branch of [[def-cm12-regularity]]; the
  global mechanical case is treated later on this page.

- **Energy is not defined by the formula alone.** The value $p\cdot v-L$ is
  an energy-dimension scalar built from the declared chart; whether it is the
  mechanical energy $K+U$ of the model, and under which chart choices, is the
  conditional statement of the energy item of this page. In particular a
  time-dependent chart can produce a Hamiltonian that differs from the
  mechanical energy, and the companion page records such a computation.

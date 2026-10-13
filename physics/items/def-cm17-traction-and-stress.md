---
id: def-cm17-traction-and-stress
kind: definition
title: "Traction fields and stress matrices of the continuum model, with units and sign conventions"
status: draft
origin: session
domain: physics
dependency_level: 10
deps: [def-cm17-continuum-body-and-units, post-cm17-continuum-kinematic-model, def-cm-traction-and-stress, def-cm01-units, def-cm-continuum-motion]
dependency_roles:
  def-cm17-continuum-body-and-units: formulation-prerequisite
  post-cm17-continuum-kinematic-model: formulation-prerequisite
  def-cm-traction-and-stress: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-cm-continuum-motion: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The model's contact-force quantity: a traction field assigning to each point and unit normal the force per unit area exerted across a surface, its dimensions, and the stress matrix representing it when one exists; the sign convention identifying compressive normal traction with negative scalar stress, the component reading, and the distinction from body-force densities. Existence of a representing stress matrix, its continuity and its symmetry are not asserted here; they are conditional conclusions of the balance items of this page. No measured force is asserted."
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 4.3 (force, Cauchy's hypothesis for contact forces, traction and the stress tensor)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Section 7.2 (the stress tensor and the force on a surface element)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: n/a
---

## Definition

Fix body data $(B,O,I)$ and a motion $\chi$ of the model with current regions
$\Omega_t=\chi_t(B)$ and $\mathcal U=\{(s,x):s\in I,\ x\in\chi_s(O)\}$.
Let $U\subseteq\mathcal U$ be open and contain the swept closure
$\{(s,x):s\in\overline{J_0},\ x\in\chi_s(\overline B)\}$, where $J_0$
is an open interval with compact closure in $I$
([[post-cm17-continuum-kinematic-model]], [[def-cm-continuum-motion]]).
Use on $U$ the restriction of the positive $C^1$ density slot
$\rho:\mathcal U\to(0,\infty)$ of [[def-cm17-continuum-body-and-units]],
and denote that restriction again by $\rho$. Let
$S^2=\{n\in\mathbb R^3:\|n\|_2=1\}$ be the unit sphere.

A **traction field of the model** is a map

$$t:U\times S^2\longrightarrow\mathbb R^3,$$

read with the convention of [[def-cm-traction-and-stress]]: $t(s,x,n)$ is the
force per unit area exerted **by the material on the side towards which $n$
points upon the material on the other side**, at the point $x$ of a surface
whose unit normal is $n$, at time $s$. Its dimension is that of force per
area, $[t]=\mu\ell^{-1}\tau^{-2}$, read in $\mathrm{N\,m^{-2}}$
([[def-cm01-units]]).

A $C^1$ field of matrices $\sigma:U\to M_3(\mathbb R)$ **represents** the
traction field when

$$t(s,x,n)=\sigma(s,x)\,n\qquad\text{for every }(s,x,n)\in U\times S^2 ,$$

the product being matrix-vector multiplication. The existence of such a
$\sigma$ for a given traction field is **not asserted here**: it is a
conditional conclusion of the balance items of this page. When it exists,
$\sigma(s,x)$ is the **stress matrix** of the model at that event, and its
entries read $\sigma_{ij}=\bigl(t(s,x,e_j)\bigr)_i$: the $i$-th component of
the traction across the surface with normal $e_j$.

The isotropic matrix $-\lambda I_3$ with $\lambda\in\mathbb R$ represents the
**normal** traction $t(n)=-\lambda n$: under the convention above, positive
$\lambda$ is a compressive normal traction and $\lambda$ is called the
**pressure** in this sign convention. Within this isotropic family,
$\lambda=0$ gives the zero stress matrix, a pressure-free unstressed state.
The **body force per unit mass** is a separate object: a continuous
field $b:U\to\mathbb R^3$ with the dimension of acceleration,
$[b]=\ell\tau^{-2}$. The **body-force density per unit volume** is
$\rho b:U\to\mathbb R^3$, of dimension $\mu\ell^{-2}\tau^{-2}$. A traction field need not satisfy
$t(-n)=-t(n)$ and its representing matrix, when one exists, need not be
symmetric; both properties are separate conditional conclusions.

## Remarks

- **Cauchy's hypothesis is a modelling assumption.** The definition lets the
  traction depend on the surface only through its unit normal at the point.
  Contact interactions that depend on the curvature of the surface, on a
  surface couple distribution, or on a thin boundary layer would require a
  richer object; the counterexample item of the companion page shows that the
  global symmetry $t(-n)=-t(n)$ alone, without a balance law, does not even
  force the existence of a representing matrix.

- **Units and interpretation.** The values of $t$ and $\sigma$ are model
  quantities in the fixed frame of [[def-cm17-continuum-body-and-units]]. A
  measured force per area is related to them only through a measurement model
  and is not asserted by this definition; no measured stress is recorded on
  this page.

- **Sign convention.** The convention is the one of [[def-cm-traction-and-stress]]:
  $t(n)$ acts on the material on the side opposite to that towards which $n$ points. With this convention
  a fluid whose total stress is assumed to lie in the isotropic family defined
  above has $\sigma=-pI_3$, so positive $p$ gives compression in the direction
  $-n$. Positive pressure alone does not impose this isotropic stress assumption.

---
id: def-cm12-hyperregularity
kind: definition
title: "Hyperregular potential presentations and their inverse Legendre branches in the model's charts"
status: draft
origin: session
domain: physics
dependency_level: 15
deps: [def-cm12-cotangent-momentum, def-cm12-regularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm-legendre-map-in-a-time-dependent-chart, def-cm01-configuration, def-cm01-units, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-linear-map]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-regularity: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm-legendre-map-in-a-time-dependent-chart: mathematical-premise
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-linear-map: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Hyperregularity of a potential presentation of the force branch and the vocabulary of its inverse Legendre branch: invertibility of the fibrewise velocity-to-momentum map, the globally defined inverse branch and its momentum phase chart in Cartesian data and in a declared generalized-coordinate chart. The item defines a condition on the model's declared chart data and the branch objects used by the Hamiltonian definition; it asserts neither that the model's presentations satisfy the condition nor any equation of motion, conservation law or measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.1.2, printed pages 83-84 (PDF pages 89-90): the elimination of the velocities in favour of the momenta by inverting p_i = dL/dqdot_i, and the Hamiltonian defined from the inverse relation"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 8.2: the Legendre transform states that the inverse formula can always be written as a first-order derivative, with the passive variables related by the corresponding partial derivatives"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 3.1.1: the Legendre transformation provides an inverse that gives the velocities in terms of the momenta, and the velocity-quadratic case is explicitly invertible"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 1.2, printed page 9 (PDF page 12): inverting the relation p-vector = a-vector + T-hat dot qdot-vector gives qdot-vector = T-hat inverse dot (p-vector - a-vector)"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
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
[[def-cm01-units]] and differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]].

**(a) Cartesian chart.** The presentation is **hyperregular on the Cartesian
chart** when for every $(t,x)\in I_{0}\times Q$ the fibre momentum map

$$\mathbb F_{t,x}:\mathbb R^{3N}\longrightarrow\mathbb R^{3N},\qquad \mathbb F_{t,x}(v):=L_{v}(t,x,v)=\mathsf Mv,$$

is a bijection of $\mathbb R^{3N}$ onto $\mathbb R^{3N}$ and the inverse
assignment

$$v:I_{0}\times Q\times\mathbb R^{3N}\longrightarrow\mathbb R^{3N},\qquad L_{v}\bigl(t,x,v(t,x,p)\bigr)=p,$$

is defined on the whole momentum phase chart $I_{0}\times Q\times\mathbb R^{3N}$
and is of class $C^{1}$. In that case $v$ is the **inverse Legendre branch**
of the presentation on the Cartesian chart. For $Q\ne\varnothing$,
hyperregularity of this chart is exactly hyperregularity of its fibre-full
Lagrangian in the sense of
[[def-cm-legendre-map-in-a-time-dependent-chart]], read through the
identification of the fibre derivative with the momentum of
[[def-cm12-cotangent-momentum]]. If $Q=\varnothing$, the fibre condition
is vacuous and the inverse assignment is the unique empty $C^{1}$ map;
this is an empty-domain convention, not an instance of that supplier's
fibre-full chart, whose base must be nonempty.

**(b) Generalized-coordinate chart.** Let $X:\Omega\to Q$ be a
generalized-coordinate map with substituted Lagrangian $\widetilde L$ and
kinetic metric $G$ ([[def-cm07-generalized-coordinates-and-forces]]). The
presentation is **hyperregular on the chart of $X$** when for every
$(t,q)\in I_{0}\times\Omega$ the fibre map
$v\mapsto\widetilde L_{v}(t,q,v)=G(q)v$ is a bijection of $\mathbb R^{r}$ onto
$\mathbb R^{r}$ and the inverse assignment
$v(t,q,p)$ on $I_{0}\times\Omega\times\mathbb R^{r}$ is of class $C^{1}$; $v$
is then the **inverse Legendre branch** in the coordinates $X$. Linear maps
and bijectivity are read by [[def-linear-map]], and the pairing of momentum
covectors with velocities is the Euclidean pairing of
[[def-euclidean-inner-product]].

**(c) Status.** The item defines the hyperregularity condition and the branch
objects for the two chart types of the model. It asserts no branch existence,
no relation between regularity [[def-cm12-regularity]] and hyperregularity, no
equation of motion and no empirical value. The global Legendre theorem for
the mechanical branch on this page establishes hyperregularity for every
admitted Cartesian and generalized-coordinate presentation. In the broader
class of fibre-full $C^{2}$ Lagrangian charts of
[[def-cm-legendre-map-in-a-time-dependent-chart]], regularity alone does not
imply hyperregularity: the companion page's example $\mathcal L(v)=e^{v}$
has a nonsurjective fibre momentum map. That example is outside the model's
mechanical class and witnesses the separation only in this broader class.

## Remarks

- **Two degrees of globality.** Hyperregularity has two quantifiers: the fibre
  map must be **bijective** for every $(t,q)$ (surjectivity and injectivity on
  each momentum fibre), and the inverse assignment must be defined on the
  whole phase domain and be $C^{1}$ there. Injectivity alone gives no
  description of which momenta occur. Fibrewise bijectivity determines a
  unique inverse assignment; its joint $C^{1}$ regularity on the whole
  phase domain is a further requirement of the definition.

- **The inverse branch is attached to the declared chart.** The next
  definition of this page defines the Hamiltonian of the presentation from the
  inverse Legendre branch introduced here; consequently each Hamiltonian
  statement names the chart on which hyperregularity and the branch are taken,
  and on a fixed hyperregular chart the inverse is unique by fibre
  bijectivity. Different charts express the inverse in their own coordinates.
  The later global Legendre theorem on this page proves its existence for
  every admitted mechanical presentation; that conclusion is not an
  existence assertion of the present definition.

- **Source caveat.** The cited treatments invert the velocity-momentum
  relation on the branch where it is invertible and do not distinguish the
  pointwise, local and global levels of the inverse; the scaffold's source
  audit notes that a global inverse is needed for global equivalence between
  the Lagrangian and Hamiltonian descriptions, which is why the condition
  above is stated globally in the fibre. The mathematical content of
  regularity, local inversion and global inversion is supplied by the cited
  items of this page, not by the physical treatments.

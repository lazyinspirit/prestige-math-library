---
id: def-cm13-two-form
kind: definition
title: "The canonical one-form and the two-form of a potential presentation: $\\lambda=p\\cdot dx$ on the Cartesian momentum phase chart and the induced forms on each generalized-coordinate chart"
status: draft
origin: session
domain: physics
dependency_level: 16
deps: [def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm-phase-domain-and-standard-symplectic-two-form, def-smooth-differential-k-form, def-pullback-of-a-differential-form, def-ck-euclidean-maps-and-diffeomorphisms, def-euclidean-inner-product, def-jacobian-matrix-and-gradient, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-determinant-of-a-square-matrix, def-euclidean-submersions-and-immersions, def-hamiltonian-vector-field-and-hamiltonian-function]
dependency_roles:
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-euclidean-submersions-and-immersions: mathematical-premise
  def-hamiltonian-vector-field-and-hamiltonian-function: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The symplectic data of a potential presentation of the framework's force branch: on the Cartesian momentum phase chart $Q\\times\\mathbb R^{3N}$ the canonical one-form $\\lambda=p\\cdot\\delta x$ and the two-form $\\omega=-d\\lambda$, and on each declared generalized-coordinate momentum chart the forms pulled back along the presentation's own chart map $(q,P)\\mapsto(X(q),\\mathsf M\\,DX(q)G(q)^{-1}P)$. The item defines model objects of the declared presentation and its declared chart only; it asserts no closedness, nondegeneracy, dynamics or measured value, and it fixes the sign convention $\\iota_X\\omega=dH$ used throughout this page."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.2 and 4.4, printed pages 88-101 (PDF pages 94-107): Hamilton's equations in the compact form $\\dot x=J\\,\\partial H/\\partial x$ with the $2n\\times2n$ matrix $J$, and the symplectic Jacobian condition $\\mathcal J J\\mathcal J^{\\mathsf T}=J$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.7: the symplectic representation of Hamiltonian mechanics, with the symplectic matrix and the bilinear form $\\omega$"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Section 5.2.2: the matrix $\\tilde J$ representation of the canonical condition and the fundamental Poisson brackets of the phase-space coordinates"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Definition

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data and conventions of [[def-cm12-cotangent-momentum]]: masses
$m_{1},\dots,m_{N}>0$ and nonempty open configuration domain $Q\subseteq\mathbb R^{3N}$
([[def-cm01-configuration]]), time window $I_{0}$, mass operator $\mathsf M$,
a $C^{2}$ potential $U:I_{0}\times Q\to\mathbb R$ of dimension
$\mu\ell^{2}\tau^{-2}$ and residual forces $d$ of the standing regularity
([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]]). Dimensions are read by
[[def-cm01-units]], the Euclidean product on $\mathbb R^{3N}$ is
[[def-euclidean-inner-product]], and differentiability classes are those of
[[def-ck-euclidean-maps-and-diffeomorphisms]]. Write $n:=3N\ge1$. The
Cartesian momentum phase chart of the presentation is
$I_{0}\times Q\times\mathbb R^{3N}$ with the momentum $p=\mathsf Mv$ of
[[def-cm12-cotangent-momentum]], and the momentum phase chart of a
generalized-coordinate map $X:\Omega\to Q$ with $r$ coordinates is
$I_{0}\times\Omega\times\mathbb R^{r}$ with the generalized momentum
$P=G(q)v$, $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$
([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-hyperregularity]]).

**(a) Cartesian chart.** The **Cartesian phase domain of the presentation** is
the nonempty open set

$$W:=Q\times\mathbb R^{3N}\subseteq\mathbb R^{2n},\qquad z=(x,p),$$

a phase domain in the sense of [[def-cm-phase-domain-and-standard-symplectic-two-form]]
(openness is clause (a) of [[def-cm01-configuration]]; nonemptiness is an
explicit hypothesis here, so an empty configuration domain has no instances
of this phase-domain definition). On $W$ the
**canonical one-form of the presentation in the Cartesian chart** is the smooth
one-form

$$\lambda_{(x,p)}(\delta x,\delta p):=p\cdot\delta x\qquad\bigl((x,p)\in W,\ (\delta x,\delta p)\in\mathbb R^{3N}\times\mathbb R^{3N}\bigr),$$

where $p\cdot\delta x$ is the Euclidean pairing of the momentum covector with
the displacement, and the **two-form of the presentation in the Cartesian
chart** is

$$\omega:=-d\lambda$$

([[def-smooth-differential-k-form]]). In coordinates, reading
$x=(x^{1},\dots,x^{3N})$ and $p=(p_{1},\dots,p_{3N})$ as the standard
coordinates of $W$,

$$\lambda=\sum_{a=1}^{3N}p_{a}\,dx^{a},\qquad \omega=\sum_{a=1}^{3N}dx^{a}\wedge dp_{a},\qquad \omega_{(x,p)}\bigl((\delta x,\delta p),(\delta x',\delta p')\bigr)=\delta x\cdot\delta p'-\delta p\cdot\delta x',$$

the last identity using the Euclidean product. The dimension of both forms is
that of action, $\mu\ell^{2}\tau^{-1}$: the pairing of a momentum
($\mu\ell\tau^{-1}$) with a displacement ($\ell$). The forms have no
explicit time dependence; for each $t\in I_{0}$ the slice $\{t\}\times W$
carries the same two-form. The momentum phase chart with time,
$I_{0}\times W$ with coordinates $(t,x,p)$, is the domain of the Hamiltonians
and fields of this page. The **sign convention** fixed by
[[def-hamiltonian-vector-field-and-hamiltonian-function]] and used
throughout is $\iota_{X}\omega=dH$; $H$ denotes a phase function as in that
item.

**(b) Generalized-coordinate chart.** Let $X:\Omega\to Q$ be a
generalized-coordinate map with substituted Lagrangian $\widetilde L$ and
kinetic metric $G$, and let $r$ be its number of coordinates
([[def-cm07-generalized-coordinates-and-forces]]). The **chart map of the
presentation in the coordinates $X$** is

$$\Phi_{X}:\Omega\times\mathbb R^{r}\longrightarrow Q\times\mathbb R^{3N},\qquad \Phi_{X}(q,P):=\Bigl(X(q),\ \mathsf M\,DX(q)\,G(q)^{-1}P\Bigr).$$

Here $DX(q)$ is the $(3N)\times r$ Jacobian of $X$ at $q$
([[def-jacobian-matrix-and-gradient]]), $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$
is symmetric positive definite ([[def-transpose-of-a-matrix]],
[[def-invertible-matrix-and-general-linear-group]]), and $P$ is a
generalized momentum. The image of $\Phi_{X}$ is

$$\Phi_{X}(\Omega\times\mathbb R^{r})=\bigl\{\,(X(q),\mathsf M\,DX(q)v)\ :\ q\in\Omega,\ v\in\mathbb R^{r}\,\bigr\},$$

the momentum chart of the presentation in the coordinates $X$; indeed
$P\mapsto v=G(q)^{-1}P$ is a linear bijection of $\mathbb R^{r}$. The map
$\Phi_X$ is $C^2$: $X$ is $C^3$, so $DX$ is $C^2$; hence
$G=DX^{\mathsf T}\mathsf M DX$ is $C^2$, and $G^{-1}$ is $C^2$ because
matrix inversion is given by the adjugate divided by the nonvanishing
determinant on the positive-definite matrices. The fiber
coefficient $\mathsf M DX(q)G(q)^{-1}$ is $C^2$. Thus $\Phi_X$ is a
$C^2$ immersion:
its derivative is injective at every point, because $DX(q)$ is injective
([[def-cm07-generalized-coordinates-and-forces]],
[[def-euclidean-submersions-and-immersions]]) and $P\mapsto G(q)^{-1}P$ is a
linear bijection; when $r=3N$ its derivative is invertible and it is a local
$C^2$ diffeomorphism onto its open image in $W$
(equivalently $\mathsf M\,DX(q)G(q)^{-1}=DX(q)^{-\mathsf T}$: see the
recorded identity below). We use the pointwise coordinate pullback: for a smooth
$k$-form $\eta$ on $W$, set
$(\Phi_X^*\eta)_{(q,P)}(v_1,\dots,v_k):=
\eta_{\Phi_X(q,P)}(D\Phi_X(q,P)v_1,\dots,D\Phi_X(q,P)v_k)$, extending the
formula of [[def-pullback-of-a-differential-form]] to this $C^2$ map. The
result has continuous coefficients. The **forms of the presentation in the
coordinates $X$** are

$$\lambda_{X}:=\Phi_{X}^{*}\lambda,\qquad \omega_{X}:=\Phi_{X}^{*}\omega$$

([[def-pullback-of-a-differential-form]]). In the coordinates $(q,P)$ on
$\Omega\times\mathbb R^{r}$ the following identities hold, and are proved in
clause 2 of the symplectic-structure theorem of this page:

$$\lambda_{X}=\sum_{a=1}^{r}P_{a}\,dq^{a},\qquad \omega_{X}=\sum_{a=1}^{r}dq^{a}\wedge dP_{a};$$

moreover, when $r=3N$ and $DX(q)$ is invertible,
$\mathsf M\,DX(q)G(q)^{-1}=DX(q)^{-\mathsf T}$, so that on an open
generalized-coordinate chart the chart map reads
$\Phi_X(q,P)=\bigl(X(q),DX(q)^{-\mathsf T}P\bigr)$ and the chart transition
between the two descriptions of the same momentum datum is a $C^2$ local
diffeomorphism.

**(c) Status.** The item defines the two-form datum of the declared
presentation on its declared charts, together with the sign convention for
fields. It asserts no closedness, no nondegeneracy, no equation of motion, no
conservation law and no measured value; those are the subject of the other
items of this page. The forms depend on the declared chart and its coordinate
dimensions, but not on the residual forces $d$ nor on the normalization
$U\mapsto U+c(t)$ of the potential representative. All objects are model
objects of the idealization declared by the force branch.

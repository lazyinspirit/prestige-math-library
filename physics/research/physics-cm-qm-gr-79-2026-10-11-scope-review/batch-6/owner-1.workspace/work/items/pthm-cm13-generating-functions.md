---
id: pthm-cm13-generating-functions
kind: physics-theorem
title: "Generating functions for a potential presentation: first- and second-kind data generate canonical maps locally, the local converse under an invertible projection, and the time-dependent Hamiltonian $K=H+S_t$"
status: draft
origin: session
domain: physics
dependency_level: 23
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm13-canonical-map, pthm-cm13-dynamics-transport-under-canonical-maps, lem-cm13-poincare-cartan-annihilation-characterization, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, def-cm-generating-function-of-the-first-and-second-kind, prop-cm-generating-functions-yield-canonical-maps, prop-cm-canonical-map-locally-has-a-generating-function, prop-cm-time-dependent-generating-function, thm-euclidean-inverse-function-theorem, def-pullback-of-a-differential-form, thm-the-exterior-derivative-commutes-with-pullback, def-smooth-differential-k-form, thm-local-coordinate-formula-for-the-exterior-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-linear-map, def-invertible-matrix-and-general-linear-group, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-interval]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  pthm-cm13-dynamics-transport-under-canonical-maps: physical-result
  lem-cm13-poincare-cartan-annihilation-characterization: mathematical-premise
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  prop-cm-generating-functions-yield-canonical-maps: mathematical-premise
  prop-cm-canonical-map-locally-has-a-generating-function: mathematical-premise
  prop-cm-time-dependent-generating-function: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Generating-function theory for the declared potential presentation: first- and second-kind generating functions of the model's canonical charts generate canonical local diffeomorphisms of the presentation with the recorded one-form identities and unit determinant; a canonical diffeomorphism with invertible $(q,Q)$-projection is locally generated in the first kind; and for a time-dependent generating function the transformed Hamiltonian is $K=H+S_t$, with the Hamilton systems of $H$ and $K$ carried into one another by the generated time-dependent map. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no global generating function and no empirical content."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.4.3, printed pages 104-105 (PDF pages 110-111): generating functions of the four kinds, $p=\\partial F/\\partial q$, $P=-\\partial F/\\partial Q$, and the time-dependent generating function with the transformed Hamiltonian $K=H+\\partial F/\\partial t$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.4-5.4.1: $F_1$ generates canonical transformations and the relation between the old and new Hamiltonians"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.3: generating functions of the first kind and the transformation of Hamilton's equations"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
momentum charts and two-form datum of [[def-cm13-two-form]], the canonical
coordinates of [[def-cm13-canonical-form]], the Hamiltonian fields of
[[def-cm13-hamiltonian-field]], the canonical maps of
[[def-cm13-canonical-map]] and the branch Hamiltonian $H$ of
[[def-cm12-hamiltonian]] and [[pthm-cm12-mechanical-hyperregularity]]
([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]], [[def-cm01-configuration]],
[[def-cm01-units]]). Write $n':=3N$ and let $O_{q},O_{Q},O_{P}\subseteq
Q$-coordinates and $\mathbb R^{n'}$ be as below. Then:

1. **(first kind)** Let $S:O_{q}\times O_{Q}\to\mathbb R$ be of class $C^{3}$
   with $\det S_{qQ}(q,Q)\neq0$ everywhere
   ([[def-cm-generating-function-of-the-first-and-second-kind]]), and define
   the **local map generated by $S$** by solving $p=S_{q}(q,Q)$ for
   $Q=Q(q,p)$ and setting $P:=-S_{Q}(q,Q)$: a $C^{2}$ map
   $C:(q,p)\mapsto(Q,P)$ defined on a neighbourhood of each point of the
   solution set. Then $C$ is a canonical $C^{2}$ local diffeomorphism of the
   presentation: $DC^{\mathsf T}J\,DC=J$, $C^{*}\omega=\omega$ and
   $|\det DC|=1$; and the one-form identity $p\cdot dq-P\cdot dQ=dS$ holds on
   the $(q,Q)$-domain ([[prop-cm-generating-functions-yield-canonical-maps]]).
2. **(second kind)** Let $S:O_{q}\times O_{P}\to\mathbb R$ be $C^{3}$ with
   $\det S_{qP}\neq0$ everywhere, and define the local map by
   $p=S_{q}(q,P)$, $Q=S_{P}(q,P)$. Then it is again a canonical $C^{2}$ local
   diffeomorphism of the presentation with the recorded identity
   $p\cdot dq+Q\cdot dP=dS$.
3. **(local converse)** Let $C$ be a $C^{2}$ canonical diffeomorphism between
   nonempty open subsets of the presentation's Cartesian phase domains, and
   suppose that the projection $z\mapsto(q(z),Q(z))$ onto the old position
   and the new position has invertible derivative at a point $z_{0}$. Then
   there are a neighbourhood of $z_{0}$ and a $C^{3}$ function
   $S:O_{q}\times O_{Q}\to\mathbb R$ with $\det S_{qQ}\neq0$ whose generated
   map agrees with $C$ on that neighbourhood
   ([[prop-cm-canonical-map-locally-has-a-generating-function]]).
4. **(time-dependent generating function)** Let $J\subseteq I_{0}$ be a
   nonempty open interval and let $S:J\times O_{q}\times O_{Q}\to\mathbb R$
   be of class $C^{3}$ with $\det S_{qQ}(t,q,Q)\neq0$ everywhere; for each
   $t$ let $C_{t}$ be the first-kind map generated by $S_{t}$. Assume the
   values $(q,p)$ used below lie in the domain of $H$ of
   [[def-cm13-hamiltonian-field]], and set
   $p:=S_{q}(t,q,Q)$, $P:=-S_{Q}(t,q,Q)$ and
   $K(t,q,Q):=H\bigl(t,q,S_{q}(t,q,Q)\bigr)+S_{t}(t,q,Q)$. Then:
   (a) each $C_{t}$ is a canonical $C^{2}$ local diffeomorphism of the
   presentation; (b) the Poincare-Cartan identity

$$p\cdot dq-H\,dt=P\cdot dQ-K\,dt+dS$$

   holds on $J\times O_{q}\times O_{Q}$
   ([[prop-cm-time-dependent-generating-function]]); and (c) writing $K$ as
   a function of $(t,Q,P)$ through the correspondence
   $(t,q,Q)\leftrightarrow(t,Q,P)$, a $C^{1}$ curve $t\mapsto(q(t),p(t))$
   satisfies $q'=H_{p}$, $p'=-H_{q}$ if and only if
   $t\mapsto(Q(t),P(t))=C_{t}(q(t),p(t))$ satisfies $Q'=K_{P}$,
   $P'=-K_{Q}$ on the interval where both descriptions are defined.

The statement is conditional on the adopted force branch, the declared
presentation and the cited mathematics; it asserts no global generating
function, no existence of a canonical map with prescribed data beyond the
local statements, and no empirical content.

## Facts & Assumptions

**Given:** The presentation with its Cartesian two-form and canonical charts,
the generating-function data $S$, the generated maps $C$ resp. $C_{t}$, and
the functions $p,P,K$ of the item.

[F1] The presentation's two-form ([[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]], [[def-cm13-canonical-form]], [[def-cm13-canonical-map]]): on the Cartesian chart the two-form is $\omega=\sum_{a}dq^{a}\wedge dp_{a}$ with standard matrix $J$; a $C^{1}$ map between phase domains is canonical exactly when it satisfies the matrix identity, and then it preserves $\omega$.

[F2] Generating functions and their maps ([[def-cm-generating-function-of-the-first-and-second-kind]], [[prop-cm-generating-functions-yield-canonical-maps]], [[prop-cm-canonical-map-locally-has-a-generating-function]], [[thm-euclidean-inverse-function-theorem]]): for a first-kind $S$ with $\det S_{qQ}\neq0$ the relation $p=S_{q}(q,Q)$ is solved locally for $Q=Q(q,p)$, the resulting $C=(Q,-S_{Q})$ is a $C^{2}$ local diffeomorphism, canonical, with $|\det DC|=1$ and $p\,dq-P\,dQ=dS$; the analogous statements hold for the second kind with $p\,dq+Q\,dP=dS$; and a canonical $C^{2}$ diffeomorphism with invertible $(q,Q)$-projection is locally generated in the first kind.

[F3] Time-dependent generating functions ([[prop-cm-time-dependent-generating-function]]): for a $C^{3}$ family $S(t,q,Q)$ with $\det S_{qQ}\neq0$ the maps $C_{t}$ are canonical local diffeomorphisms, and on $J\times O_{q}\times O_{Q}$ the identity $p\,dq-H\,dt=P\,dQ-K\,dt+dS$ holds with $K=H+S_{t}$.

[F4] Poincare-Cartan annihilation and transport ([[lem-cm13-poincare-cartan-annihilation-characterization]], [[def-pullback-of-a-differential-form]], [[thm-the-exterior-derivative-commutes-with-pullback]], [[def-smooth-differential-k-form]], [[thm-local-coordinate-formula-for-the-exterior-derivative]], [[def-cm13-hamiltonian-field]], [[pthm-cm13-dynamics-transport-under-canonical-maps]]): a $C^{1}$ curve solves the Hamiltonian system of a $C^{1}$ Hamiltonian $F$ exactly when its velocity annihilates the two-form $d(p\,dq-F\,dt)$; pullback commutes with the exterior derivative; and canonical maps conjugate Hamiltonian systems.

[F5] Chart calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-linear-map]], [[def-invertible-matrix-and-general-linear-group]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-interval]]): the maps displayed above are $C^{2}$ or $C^{1}$ according to their displayed formulae, the inverse-function theorem applies wherever the mixed Hessian determinant is nonzero, and matrix products, transposes and inverses obey the ordinary rules.

## Proof

**Proof technique:** direct. Instantiate the generating-function theorems on the presentation's Cartesian chart for clauses 1-3, then carry the time-dependent Poincare-Cartan identity to the two Hamilton systems by the annihilation characterization.

1.1 Clauses 1 and 2: with [F1] identifying the presentation's Cartesian chart with the standard phase domain of the generating-function items and with $n'=3N$, [F2] gives the existence of the local maps, their $C^{2}$ local-diffeomorphism property, the matrix identity, canonicity and the recorded one-form exponents; hence clauses 1 and 2 hold. [F1, F2]

1.2 Clause 3: under the stated hypothesis on the $(q,Q)$-projection, [F2] (the local converse) yields the neighbourhood and the $C^{3}$ first-kind generating function with $\det S_{qQ}\neq0$ whose generated map agrees with $C$; this is clause 3. [F2]

1.3 Clause 4(a) and (b): by [F3] each $C_{t}$ is a canonical $C^{2}$ local diffeomorphism and the identity $p\,dq-H\,dt=P\,dQ-K\,dt+dS$ holds with $K=H+S_{t}$; this is clause 4(a)-(b). [F1, F3]

2.1 Clause 4(c), setup: the maps $\Phi:(t,q,Q)\mapsto(t,q,p)$ and $\Lambda:(t,q,Q)\mapsto(t,Q,P)$ with $p=S_{q}$, $P=-S_{Q}$ are $C^{2}$ local diffeomorphisms by the inverse-function theorem [F2, F5]; taking $d$ of the identity of clause 4(b) and using that pullback commutes with $d$ gives $\Phi^{*}\sigma_{H}=\Lambda^{*}\sigma_{K}$ on $J\times O_{q}\times O_{Q}$, where $\sigma_{H}=dp\wedge dq-dH\wedge dt$ and $\sigma_{K}=dP\wedge dQ-dK\wedge dt$ with $K$ read through the correspondence. [step 1.3, F2, F4, F5]

3.1 Clause 4(c), forward direction: let $t\mapsto(q(t),p(t))$ solve the $H$-system on an interval and define $Q(t)$ by $p(t)=S_{q}(t,q(t),Q(t))$, $P(t):=-S_{Q}(t,q(t),Q(t))$; then $w:=(1,q',Q')$ is the velocity of the graph curve and $D\Phi\,w=(1,q',p')$, $D\Lambda\,w=(1,Q',P')$ by the chain rule, while $\iota_{(1,q',p')}\sigma_{H}=0$ by [F4]; for every tangent vector $u$ at the corresponding point, $\sigma_{H}(D\Phi\,w,D\Phi\,u)=(\Phi^{*}\sigma_{H})(w,u)=(\Lambda^{*}\sigma_{K})(w,u)=\sigma_{K}(D\Lambda\,w,D\Lambda\,u)$, and since $D\Lambda$ is invertible and $D\Lambda\,u$ ranges over all tangent vectors, $\iota_{(1,Q',P')}\sigma_{K}=0$; by [F4] the curve $(Q,P)$ solves the $K$-system. [step 2.1, F4, algebra]

3.2 Clause 4(c), converse: if $(Q(t),P(t))$ solves the $K$-system, solve $-S_{Q}(t,q,Q(t))=P(t)$ locally for $q(t)$ by [F2, F5], since its derivative in $q$ is $-S_{Qq}=-S_{qQ}^{\mathsf T}$ and is invertible; then set $p(t):=S_{q}(t,q(t),Q(t))$, so that the correspondence is inverted; the same computation with the roles of $\Phi$ and $\Lambda$ interchanged and the identity $\Lambda^{*}\sigma_{K}=\Phi^{*}\sigma_{H}$ gives $\iota_{(1,q',p')}\sigma_{H}=0$, hence by [F4] the curve $(q,p)$ solves the $H$-system. [step 2.1, F2, F4, F5, algebra]

4.1 Collection: clauses 1-2 are step 1.1, clause 3 is step 1.2, clause 4(a)-(b) is step 1.3 and clause 4(c) is steps 3.1-3.2; this proves the theorem. [step 1.1, step 1.2, step 1.3, step 3.1, step 3.2] ∎

## Remarks

- **The projection hypothesis is essential.** The first-kind representation
  requires the invertibility of $Q\mapsto S_{q}(q,Q)$, i.e. of the $(q,Q)$
  projection of the canonical map; without it only other kinds are available
  locally. The companion page carries a point transformation whose
  $(q,Q)$-projection is degenerate identically and which is nevertheless
  generated in the second kind.

- **No global generating function.** The theorem is local. A canonical map
  of the presentation need not admit a globally defined generating function
  even when it is symplectic; the obstruction is a cohomological one and is
  described in [[rem-cm13-locality-topology]].

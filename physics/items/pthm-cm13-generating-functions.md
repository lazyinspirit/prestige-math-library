---
id: pthm-cm13-generating-functions
kind: physics-theorem
title: 'Generating functions for a potential presentation: first- and
  second-kind data generate canonical maps locally, the local converse under an
  invertible projection, and the time-dependent Hamiltonian $K=H+\partial_tS$'
status: published
origin: session
domain: physics
dependency_level: 23
deps:
  [
    def-cm13-two-form,
    pthm-cm13-two-form-is-symplectic,
    def-cm13-canonical-form,
    def-cm13-hamiltonian-field,
    def-cm13-canonical-map,
    pthm-cm13-dynamics-transport-under-canonical-maps,
    lem-cm13-poincare-cartan-annihilation-characterization,
    def-cm12-hamiltonian,
    pthm-cm12-mechanical-hyperregularity,
    def-cm07-action-and-mechanical-lagrangian,
    def-cm07-generalized-coordinates-and-forces,
    def-cm03-potential-and-mechanical-energy,
    post-cm02-force-superposition,
    def-cm01-configuration,
    def-cm01-units,
    def-cm02-newtonian-flow,
    def-cm-generating-function-of-the-first-and-second-kind,
    prop-cm-generating-functions-yield-canonical-maps,
    prop-cm-canonical-map-locally-has-a-generating-function,
    prop-cm-time-dependent-generating-function,
    thm-euclidean-inverse-function-theorem,
    def-pullback-of-a-differential-form,
    def-smooth-differential-k-form,
    def-ck-euclidean-maps-and-diffeomorphisms,
    def-jacobian-matrix-and-gradient,
    def-directional-and-partial-derivatives,
    def-matrix-product-and-identity-matrix,
    def-linear-map,
    def-invertible-matrix-and-general-linear-group,
    cor-square-matrix-invertible-iff-determinant-is-a-unit,
    def-determinant-of-a-square-matrix,
    def-interval
  ]
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
  def-smooth-differential-k-form: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: 'Generating-function theory for the declared potential
  presentation: first- and second-kind generating functions of action dimension
  generate equal-dimensional canonical local diffeomorphisms with the recorded
  one-form identities and unit determinant; a canonical diffeomorphism with
  invertible $(q,Q)$-projection is locally generated in the first kind; and for
  a time-dependent generating function the time derivative has energy dimension
  and the transformed Hamiltonian is $K=H+\partial_tS$, with the Hamilton
  systems of $H$ and $K$ carried into one another by the generated
  time-dependent map. The statement is a conditional deduction from the adopted
  force branch, the declared presentation and the cited mathematics; it asserts
  no global generating function and no empirical content.'
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        printing), Section 4.4.3, printed pages 104-105 (PDF pages 110-111):
        first-kind relations $p=\\partial F/\\partial q$,
        $P=-\\partial F/\\partial Q$, and second-kind relations
        $p=\\partial F_2/\\partial q$, $Q=\\partial F_2/\\partial P$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical
        Mechanics, second edition (MIT Press, 2014/2015), Sections 5.4-5.4.1:
        $F_1$ generates canonical transformations and the relation between the
        old and new Hamiltonians"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9\
        579/sicm_edition_2.zip"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition,
        University of Rochester River Campus Libraries, open textbook, CC
        BY-NC-SA 4.0), Section 15.3, equations 15.77-15.82: time-dependent
        first-kind generating-function relations and the transformed
        Hamiltonian $\\mathcal H=H+\\partial_tF_1$"
      url: "https://phys.libretexts.org/Bookshelves/Classical_Mechanics/Variational_Principles_in_Classical_Mechanics_%28Cline%29/15%253A_Advanced_Hamiltonian_Mechanics/15.03%253A_Canonical_Transformations_in_Hamiltonian_Mechanics"
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
[[def-cm01-units]]). Write $n':=3N$. Let $O_q,O_Q\subseteq Q$ be nonempty open
Cartesian position-coordinate sets, and let $O_P\subseteq\mathbb R^{n'}$
be a nonempty open momentum-coordinate set. In clause 2 require
$S_P(q,P)\in O_Q$ for every $(q,P)\in O_q\times O_P$; only
local branches with source in $O_q\times\mathbb R^{n'}$ and target in
$O_Q\times\mathbb R^{n'}$ are called maps of the presentation. Then:

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
   $K(t,q,Q):=H\bigl(t,q,S_{q}(t,q,Q)\bigr)+\partial_tS(t,q,Q)$. The
   functions $S$ in clauses 1-4 have action dimension $\mu\ell^2\tau^{-1}$;
   in clause 4, $\partial_tS$ has energy dimension
   $\mu\ell^2\tau^{-2}$, so the sum defining $K$ is dimensionally
   consistent. Then:
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

**Given:** The presentation with its Cartesian two-form and canonical charts, the generating-function data $S$, the generated maps $C$ resp. $C_{t}$, and the functions $p,P,K$ of the item.

[F1] The presentation's two-form ([[def-cm13-two-form]], [[pthm-cm13-two-form-is-symplectic]], [[def-cm13-canonical-form]], [[def-cm13-canonical-map]]): on the Cartesian chart the two-form is $\omega=\sum_{a}dq^{a}\wedge dp_{a}$ with standard matrix $J$; a $C^{1}$ map between phase domains is canonical exactly when it satisfies the matrix identity, and then it preserves $\omega$.

[F2] Generating functions and their maps ([[def-cm-generating-function-of-the-first-and-second-kind]], [[prop-cm-generating-functions-yield-canonical-maps]], [[prop-cm-canonical-map-locally-has-a-generating-function]], [[thm-euclidean-inverse-function-theorem]]): when $S$ is $C^3$, each defining relation map, such as $\Psi(q,Q)=(q,S_q(q,Q))$, is $C^2$ and has invertible derivative under the mixed-Hessian hypothesis. The cited inverse-function theorem gives a $C^1$ local inverse $g$ and the derivative formula $Dg(y)=[D\Psi(g(y))]^{-1}$. Since $D\Psi$ and $g$ are $C^1$, this right side is $C^1$: matrix inversion is $C^1$ on invertible matrices by the cofactor-over-determinant formula. Hence $g$ is $C^2$, and composition in the generating-function definitions gives $C^2$ generated local maps; the same reasoning applies to second-kind and parameter-dependent relation maps. The generating-function propositions supply their canonical identities, determinants and one-form identities. A canonical $C^2$ diffeomorphism with invertible $(q,Q)$-projection is locally generated in the first kind.

[F3] Time-dependent generating functions ([[prop-cm-time-dependent-generating-function]]): for a $C^{3}$ family $S(t,q,Q)$ with $\det S_{qQ}\neq0$ the maps $C_t$ are canonical local diffeomorphisms, and on $J\times O_q\times O_Q$ the identity $p\,dq-H\,dt=P\,dQ-K\,dt+dS$ holds with $K=H+\partial_tS$.

[F4] Coordinate Poincare-Cartan forms and transport ([[lem-cm13-poincare-cartan-annihilation-characterization]], [[def-pullback-of-a-differential-form]], [[def-smooth-differential-k-form]], [[def-cm13-hamiltonian-field]], [[pthm-cm13-dynamics-transport-under-canonical-maps]]): for a $C^1$ Hamiltonian the lemma defines the continuous coordinate two-form from the first derivatives of $p\,dq-F\,dt$ and characterizes Hamilton solutions by annihilation. For a $C^2$ coordinate map $\Gamma$ and a $C^1$ one-form $\alpha=\sum_j a_jdu^j$, the coefficient formula for $\Gamma^*\alpha$ and equality of mixed second derivatives give $d(\Gamma^*\alpha)=\Gamma^*(d\alpha)$: the second-derivative terms in $\partial_i[(a_j\circ\Gamma)\partial_k\Gamma^j]-\partial_k[(a_j\circ\Gamma)\partial_i\Gamma^j]$ cancel, leaving the pointwise pullback of $d\alpha$. Equal-dimensional canonical local maps conjugate the Hamiltonian systems by the transport theorem.

[F5] Chart calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-linear-map]], [[def-invertible-matrix-and-general-linear-group]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-interval]]): the maps displayed above are $C^{2}$ or $C^{1}$ according to their displayed formulae, the inverse-function theorem applies wherever the mixed Hessian determinant is nonzero, and matrix products, transposes and inverses obey the ordinary rules.

## Proof

**Proof technique:** direct. Instantiate the generating-function theorems on the presentation's Cartesian chart for clauses 1-3, then carry the time-dependent Poincare-Cartan identity to the two Hamilton systems by the annihilation characterization.

1.1 Clauses 1 and 2: in the first-kind case the relation map $\Psi(q,Q)=(q,S_q(q,Q))$ is $C^2$ and has invertible derivative by $\det S_{qQ}\ne0$; in the second-kind case use $\Psi(q,P)=(q,S_q(q,P))$ and $\det S_{qP}\ne0$. For either map, the inverse theorem gives a local $C^1$ inverse $g$ and $Dg(y)=[D\Psi(g(y))]^{-1}$. Since $D\Psi$ and $g$ are $C^1$, this derivative is $C^1$, because the cofactor-over-determinant formula makes matrix inversion $C^1$ on the invertible matrices; thus $g$ is $C^2$. The maps in the generating-function definitions are then compositions of $C^2$ maps, so the generated maps are $C^2$ local diffeomorphisms. The stated position containment puts the source and target of each branch inside the presentation's open phase domain. With [F1] identifying the presentation's Cartesian chart with the standard phase domain and $n'=3N$, the canonical identity, matrix test, unit determinant and one-form identities follow from [F2]. [F1, F2, algebra]

1.2 Clause 3: let $F(z)=(q(z),Q(z))$ be the stated $(q,Q)$ projection. Since $C$ is $C^2$, $F$ is $C^2$, and its derivative is invertible at the base point by hypothesis. The inverse theorem gives a $C^1$ local inverse $G$; differentiating $F\circ G=\mathrm{id}$ gives $DG=(DF\circ G)^{-1}$. As $DF$ and $G$ are $C^1$, the right side is $C^1$ by the cofactor-over-determinant formula for matrix inversion, so $G$ is $C^2$. This supplies the $C^2$ inverse regularity needed in the proof of the local-converse proposition [F2]. Its remaining argument then yields a neighborhood and a $C^3$ first-kind generating function with $\det S_{qQ}\ne0$ whose generated map agrees with $C$, proving clause 3. [F2, algebra]

1.3 Clause 4(a) and (b): by [F3] each $C_t$ is a canonical $C^2$ local diffeomorphism and the identity $p\,dq-H\,dt=P\,dQ-K\,dt+dS$ holds with $K=H+\partial_tS$; this is clause 4(a)-(b). [F1, F3]

2.1 Clause 4(c), setup: the relation maps $\Phi:(t,q,Q)\mapsto(t,q,p)$ and $\Lambda:(t,q,Q)\mapsto(t,Q,P)$ with $p=S_q$, $P=-S_Q$ are $C^2$ local diffeomorphisms: their derivatives are invertible by $\det S_{qQ}\ne0$, the inverse theorem gives $C^1$ inverses, and the derivative formula in [F2] upgrades those inverses to $C^2$. Pull the two Poincare-Cartan one-forms back by the pointwise coordinate formula; their resulting $C^2$ one-forms on the parameter domain are the two sides $\alpha_H$ and $\alpha_K$ of the identity in clause 4(b), so $\alpha_H=\alpha_K+dS$. Applying the coordinate derivative to this identity gives $d\alpha_H=d\alpha_K$, since $d(dS)=0$ by equality of mixed partials of $S$. By the direct $C^2$ coordinate calculation in [F4], these derivatives equal $\Phi^*\sigma_H$ and $\Lambda^*\sigma_K$, respectively, where $\sigma_H=dp\wedge dq-dH\wedge dt$ and $\sigma_K=dP\wedge dQ-dK\wedge dt$ are the continuous coordinate two-forms of the lemma. Thus $\Phi^*\sigma_H=\Lambda^*\sigma_K$. [step 1.3, F2, F4, F5]

3.1 Clause 4(c), forward direction: let $t\mapsto(q(t),p(t))$ solve the $H$-system on an interval and define $Q(t)$ by $p(t)=S_{q}(t,q(t),Q(t))$, $P(t):=-S_{Q}(t,q(t),Q(t))$; then $w:=(1,q',Q')$ is the velocity of the graph curve and $D\Phi\,w=(1,q',p')$, $D\Lambda\,w=(1,Q',P')$ by the chain rule, while $\iota_{(1,q',p')}\sigma_{H}=0$ by [F4]; for every tangent vector $u$ at the corresponding point, $\sigma_{H}(D\Phi\,w,D\Phi\,u)=(\Phi^{*}\sigma_{H})(w,u)=(\Lambda^{*}\sigma_{K})(w,u)=\sigma_{K}(D\Lambda\,w,D\Lambda\,u)$, and since $D\Lambda$ is invertible and $D\Lambda\,u$ ranges over all tangent vectors, $\iota_{(1,Q',P')}\sigma_{K}=0$; by [F4] the curve $(Q,P)$ solves the $K$-system. [step 2.1, F4, algebra]

3.2 Clause 4(c), converse: if $(Q(t),P(t))$ solves the $K$-system, solve $-S_{Q}(t,q,Q(t))=P(t)$ locally for $q(t)$ by [F2, F5], since its derivative in $q$ is $-S_{Qq}=-S_{qQ}^{\mathsf T}$ and is invertible; then set $p(t):=S_{q}(t,q(t),Q(t))$, so that the correspondence is inverted; the same computation with the roles of $\Phi$ and $\Lambda$ interchanged and the identity $\Lambda^{*}\sigma_{K}=\Phi^{*}\sigma_{H}$ gives $\iota_{(1,q',p')}\sigma_{H}=0$, hence by [F4] the curve $(q,p)$ solves the $H$-system. [step 2.1, F2, F4, F5, algebra]

4.1 Collection: clauses 1-2 are step 1.1, clause 3 is step 1.2, clause 4(a)-(b) is step 1.3 and clause 4(c) is steps 3.1-3.2; this proves the theorem. [step 1.1, step 1.2, step 1.3, step 3.1, step 3.2] ∎

## Remarks

- **The projection hypothesis is essential.** The first-kind representation requires the invertibility of $Q\mapsto S_{q}(q,Q)$, i.e. of the $(q,Q)$ projection of the canonical map; without it only other kinds are available locally. The companion page carries a point transformation whose $(q,Q)$-projection is degenerate identically and which is nevertheless generated in the second kind.

- **No global generating function.** The theorem is local. A canonical map of the presentation need not admit a globally defined generating function even when it is symplectic; the obstruction is a cohomological one and is described in [[rem-cm13-locality-topology]].

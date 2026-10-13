---
id: pthm-cm13-dynamics-transport-under-canonical-maps
kind: physics-theorem
title: "Equal-dimensional canonical transformations of a potential presentation conjugate Hamiltonian fields and transport systems and brackets"
status: draft
origin: session
domain: physics
dependency_level: 22
deps: [def-cm13-two-form, pthm-cm13-two-form-is-symplectic, def-cm13-canonical-form, def-cm13-hamiltonian-field, def-cm13-canonical-map, def-cm13-poisson, pthm-cm13-flow-preservation, pthm-cm13-bracket-identities, def-cm12-hamiltonian, pthm-cm12-mechanical-hyperregularity, pthm-cm13-hamiltonian-field-integrates-the-model-equations, def-cm07-action-and-mechanical-lagrangian, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm02-newtonian-flow, prop-cm-canonical-map-tests-and-hamiltonian-transport, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-cm-phase-domain-and-standard-symplectic-two-form, def-first-order-ode-initial-value-problem-and-solution, def-interval, thm-chain-rule-for-total-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-determinant-of-a-square-matrix, def-linear-map, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-ck-euclidean-maps-and-diffeomorphisms, def-cm-generating-function-of-the-first-and-second-kind, prop-cm-generating-functions-yield-canonical-maps, thm-euclidean-inverse-function-theorem]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  def-cm13-canonical-form: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-canonical-map: formulation-prerequisite
  def-cm13-poisson: formulation-prerequisite
  pthm-cm13-flow-preservation: physical-result
  pthm-cm13-bracket-identities: physical-result
  def-cm12-hamiltonian: formulation-prerequisite
  pthm-cm12-mechanical-hyperregularity: physical-result
  pthm-cm13-hamiltonian-field-integrates-the-model-equations: physical-result
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  prop-cm-canonical-map-tests-and-hamiltonian-transport: mathematical-premise
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-cm-generating-function-of-the-first-and-second-kind: mathematical-premise
  prop-cm-generating-functions-yield-canonical-maps: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Transformation theory for equal-dimensional local canonical transformations of the declared potential presentation: a $C^{2}$ local diffeomorphism preserving the two-form conjugates the Hamiltonian field of a phase function to the field of the composed function, preserves the model's Poisson bracket under composition, and carries solutions of one Hamiltonian system to solutions of the other, also for time-dependent Hamiltonians. No such ambient field-transport result is asserted for a lower-dimensional symplectic immersion. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no empirical content or global existence."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.4, printed pages 100-102 (PDF pages 106-108): the theorem that the Poisson bracket is invariant under canonical transformations, and the equivalence of the canonical condition with the preservation of the bracket structure"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2-5.3: canonical transformations as maps between Hamiltonian systems preserving the dynamics, and the invariance of the Poisson bracket"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.3: canonical transformations and the transformation of the Hamiltonian under a generating-function change of variables"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with the
momentum charts and two-form datum of [[def-cm13-two-form]], the canonical
coordinates of [[def-cm13-canonical-form]], the Hamiltonian fields of
[[def-cm13-hamiltonian-field]], the bracket of [[def-cm13-poisson]] and the
canonical maps of [[def-cm13-canonical-map]]
([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]], [[def-cm01-configuration]],
[[def-cm01-units]]). Let $W_1,W_2$ be nonempty open subsets of phase domains
of the same dimension $2n$, and let $C:W_{1}\to W_{2}$ be a $C^{2}$ local
diffeomorphism with $C^*\omega_2=\omega_1$, hence an equal-dimensional local
canonical transformation in the sense of [[def-cm13-canonical-map]]. Let
$H:I_{0}\times W_{2}\to\mathbb R$ be of class $C^{2}$; write
$H\circ C$ for the function $(t,z)\mapsto H(t,C(z))$ on $I_{0}\times W_{1}$.
Then:

1. **(field transport)** For every $C^{2}$ function $f$ on $W_{2}$ and every
   $z\in W_{1}$,

$$DC(z)\,X_{f\circ C}(z)=X_{f}\bigl(C(z)\bigr),$$

   i.e. $C$ conjugates the Hamiltonian field of $f\circ C$ on $W_{1}$ to the
   field of $f$ on $W_{2}$.
2. **(bracket invariance)** For all $C^{2}$ functions $f,g$ on $W_{2}$,

$$\{f\circ C,\,g\circ C\}=\{f,g\}\circ C\qquad\text{on }W_{1},$$

   so the bracket of the presentation is invariant under canonical maps.
3. **(transport of solutions)** Let $J\subseteq I_{0}$ be a nonempty open
   interval and let $z:J\to W_{1}$ be a $C^{1}$ curve. Then $z$ solves
   $\dot z(t)=X_{(H\circ C)_{t}}(z(t))$ if and only if $t\mapsto C(z(t))$ solves
   $\dot w(t)=X_{H_{t}}(w(t))$ on $J$: the canonical map carries the
   Hamiltonian system of $H\circ C$ to that of $H$, with time dependence
   allowed.
4. **(instances)** Genuine transitions between full-dimensional ($r=3N$)
   charts of the presentation and the maps generated by first- and
   second-kind generating functions satisfy these transport conclusions.
   A fixed time-slice map $\Phi_{t_*}$ of
   [[pthm-cm13-flow-preservation]] is an additional instance for clauses 1-2
   when it has $C^2$ regularity, with $\Phi_{t_*}$ held fixed as the
   coordinate map. The flow-preservation theorem under its stated $C^2$
   Hamiltonian hypothesis guarantees only $C^1$ regularity; this item makes
   no field-transport claim for a slice known only to be $C^1$, and does not
   treat the moving family $t\mapsto\Phi_t$ as a single time-dependent
   coordinate transformation.

The statement is conditional on the adopted force branch, the declared
presentation and the cited mathematics; it asserts no empirical content and
no global existence of canonical maps.

## Facts & Assumptions

**Given:** The presentation with its two-form, canonical charts, fields and
bracket, a $C^{2}$ canonical map $C:W_{1}\to W_{2}$, a $C^{2}$ function $H$
on $I_{0}\times W_{2}$, and a $C^{1}$ curve $z$ in $W_{1}$.

[F1] Canonical maps, fields and brackets ([[def-cm13-canonical-map]], [[def-cm13-hamiltonian-field]], [[def-cm13-two-form]], [[def-cm13-canonical-form]], [[def-cm13-poisson]], [[prop-cm-canonical-map-tests-and-hamiltonian-transport]], [[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-cm-phase-domain-and-standard-symplectic-two-form]], [[pthm-cm13-bracket-identities]]): $C$ is $C^{2}$ between phase domains of the same dimension, is a local diffeomorphism and satisfies $C^*\omega_2=\omega_1$, equivalently $DC(z)^{\mathsf T}J_n\,DC(z)=J_n$ for every $z$, so $DC(z)$ is invertible and $DC(z)J_nDC(z)^{\mathsf T}=J_n$; the field of a $C^{2}$ function $f$ is $X_f=J_n\nabla f$ in a canonical chart and satisfies $DC\,X_{f\circ C}=X_f\circ C$; the bracket is $\{f,g\}=\nabla f^{\mathsf T}J_n\nabla g$.

[F2] Chain rule and matrix algebra ([[thm-chain-rule-for-total-derivatives]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-invertible-matrix-and-general-linear-group]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-determinant-of-a-square-matrix]], [[def-linear-map]], [[def-ck-euclidean-maps-and-diffeomorphisms]]): $\nabla(f\circ C)=DC^{\mathsf T}(\nabla f)\circ C$ and $(C\circ z)'(t)=DC(z(t))\,\dot z(t)$ on curves, by the chain rule; products, transposes and inverses of the displayed matrices obey the ordinary identities, and $J^{-1}=-J$.

[F3] Curves and equations ([[def-first-order-ode-initial-value-problem-and-solution]], [[def-interval]], [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]]): a $C^1$ curve solves the Hamiltonian system of the given $C^2$ function $H$ exactly when its velocity equals $X_{H_t}$ at its points. Identification with Cartesian model motions on $d\equiv0$ requires the mechanical branch Hamiltonian $H(t,x,p)=\tfrac12p\cdot\mathsf M^{-1}p+U(t,x)$; its first equation gives $p=\mathsf Mx'$ and hence $x\in C^2$. For the generalized-coordinate mechanical Hamiltonian, clause 2 of the cited theorem retains the residual generalized force $Q^{\mathrm{res}}$ in the momentum equation. Thus its integral curves coincide with the declared Lagrange equations only when $Q^{\mathrm{res}}$ vanishes along the curve, in particular on $d\equiv0$; otherwise those equations are the forced Hamilton system. No identification with model motions is asserted for an arbitrary $H$.

[F4] Generated and chart maps ([[def-cm-generating-function-of-the-first-and-second-kind]], [[prop-cm-generating-functions-yield-canonical-maps]], [[thm-euclidean-inverse-function-theorem]], [[pthm-cm13-two-form-is-symplectic]]): first- and second-kind data are $C^3$ functions $S$ on nonempty open product domains with invertible mixed Hessian $S_{qQ}$ or $S_{qP}$. They define $p=S_q$, $P=-S_Q$ or $p=S_q$, $Q=S_P$ by local inversion of the relation map $\Psi=(q,S_q)$. The mathematical proposition proves their standard-form pullback identity. Its $C^2$ inverse regularity follows directly: the $C^1$ local inverse $g$ satisfies $Dg=(D\Psi\circ g)^{-1}$, which is $C^1$ by the cofactor-over-determinant formula, since $D\Psi$ and $g$ are $C^1$. Hence the generated map is $C^2$. These maps are instances here on branches with source and target in the declared presentation domains, as required by the given $C:W_1\to W_2$; the mathematical proposition does not assert physical-domain containment. Genuine full-dimensional momentum-chart transitions are $C^2$ and preserve the source and target forms by clauses 2-3 of the two-form theorem.

## Proof

**Proof technique:** direct. Transport the matrix identity to $DC\,J\,DC^{\mathsf T}=J$, compute the bracket of composed functions, and carry the field equation along the map by the chain rule.

1.1 By [F1] the map $C$ satisfies $DC^{\mathsf T}J_n\,DC=J_n$ everywhere and $DC$ is invertible; taking inverses of the identity gives $DC^{-1}J_n^{-1}DC^{-\mathsf T}=J_n^{-1}$, that is $DC^{-1}J_n\,DC^{-\mathsf T}=J_n$ because $J_n^{-1}=-J_n$, and multiplying on the left by $DC$ and on the right by $DC^{\mathsf T}$ gives $DC\,J_n\,DC^{\mathsf T}=J_n$. [F1, F2, algebra]

1.2 By [F1] the fields satisfy $DC\,X_{f\circ C}=X_{f}\circ C$ for every $C^{2}$ function $f$ on $W_{2}$; this is clause 1. [F1]

2.1 Bracket invariance: for $C^{2}$ functions $f,g$ on $W_{2}$, the chain rule of [F2] gives $\nabla(f\circ C)(z)=DC(z)^{\mathsf T}\nabla f(C(z))$ and $\nabla(g\circ C)(z)=DC(z)^{\mathsf T}\nabla g(C(z))$, so $\{f\circ C,g\circ C\}(z)=\nabla f(C(z))^{\mathsf T}DC(z)J\,DC(z)^{\mathsf T}\nabla g(C(z))=\nabla f(C(z))^{\mathsf T}J\nabla g(C(z))=\{f,g\}(C(z))$ by step 1.1 and the bracket formula of [F1]; this is clause 2. [step 1.1, F1, F2, algebra]

2.2 Transport of solutions, forward direction: if $z$ solves $\dot z=X_{H_{t}\circ C}(z)$, then $w:=C\circ z$ has $\dot w=DC(z)\,\dot z=DC(z)\,X_{H_{t}\circ C}(z)=X_{H_{t}}(C(z))$ by the chain rule of [F2] and the field transport of step 1.2, so $w$ solves the $H$-system. [step 1.2, F2, F3, algebra]

3.1 Transport of solutions, converse: if $w=C\circ z$ solves the $H$-system, then $\dot w=X_{H_t}(w)$ and, $DC(z)$ being invertible by [F1], $\dot z=DC(z)^{-1}\dot w=DC(z)^{-1}X_{H_t}(C(z))=X_{H_t\circ C}(z)$ by step 1.2 applied to $DC\,X_{H_t\circ C}=X_{H_t}\circ C$; hence $z$ solves the system of $H\circ C$, proving clause 3 in both directions. For clause 4, [F4] supplies the $C^2$ regularity and canonicity of genuine full-dimensional chart transitions and first- and second-kind generated maps on their admissible presentation domains. Applying clauses 1-3 to each such fixed map gives the stated instances. A flow slice is included only as a fixed map when it has that same $C^2$ regularity; the moving time-dependent family is not covered by this fixed-map theorem. [step 1.2, step 2.2, F1, F2, F4]

4.1 Collection: clause 1 is steps 1.1-1.2, clause 2 is step 2.1, clause 3 is steps 2.2 and 3.1, and clause 4 applies to the stated full-dimensional transitions and generating-function maps, plus any flow slice that independently has the required $C^2$ regularity; this proves the theorem. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Why the bracket is invariant.** The proof uses the equivalent form
  $DC\,J\,DC^{\mathsf T}=J$ of the canonical matrix identity, which is *not*
  automatic from $\det DC=1$ in dimension $2m\ge4$; the companion page's
  volume-preserving shear is a counterexample to bracket invariance for a map
  satisfying only $|\det DC|=1$.

- **No global claims.** The transport is asserted on the domain of the
  canonical map; the existence of a canonical map with specified data is the
  subject of [[pthm-cm13-generating-functions]] and is local in general.

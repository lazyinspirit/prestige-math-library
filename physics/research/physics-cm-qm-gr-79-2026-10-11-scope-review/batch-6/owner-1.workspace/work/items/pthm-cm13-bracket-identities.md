---
id: pthm-cm13-bracket-identities
kind: physics-theorem
title: "The bracket of a potential presentation is bilinear, skew, a derivation in each slot, satisfies the Jacobi identity, and reproduces the fundamental brackets and the Hamiltonian field"
status: draft
origin: session
domain: physics
dependency_level: 21
deps: [def-cm13-poisson, def-cm13-hamiltonian-field, def-cm13-two-form, def-cm13-canonical-form, def-cm07-action-and-mechanical-lagrangian, pthm-cm13-two-form-is-symplectic, prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart, def-poisson-bracket-on-a-symplectic-manifold, cor-hessian-is-symmetric, def-hessian-and-euclidean-critical-point, thm-the-exterior-derivative-is-a-graded-derivation, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-linear-map, def-euclidean-inner-product, def-ck-euclidean-maps-and-diffeomorphisms, def-smooth-differential-k-form]
dependency_roles:
  def-cm13-poisson: formulation-prerequisite
  def-cm13-hamiltonian-field: formulation-prerequisite
  def-cm13-two-form: formulation-prerequisite
  def-cm13-canonical-form: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  pthm-cm13-two-form-is-symplectic: physical-result
  prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart: mathematical-premise
  def-poisson-bracket-on-a-symplectic-manifold: mathematical-premise
  cor-hessian-is-symmetric: mathematical-premise
  def-hessian-and-euclidean-critical-point: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The algebraic identities of the Poisson bracket of a declared potential presentation: bilinearity, skew-symmetry, the Leibniz rule in each slot, the Jacobi identity for $C^{3}$ phase functions, the identity $\\{f,g\\}=X_g(f)$ relating the bracket to the presentation's Hamiltonian fields, and the fundamental brackets of the model's canonical coordinates. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no equation of motion, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 4.3, printed pages 93-95 (PDF pages 99-101): the properties of the Poisson bracket — antisymmetry, linearity, the Leibniz rule, the Jacobi identity — and the fundamental brackets $\\{q_i,q_j\\}=0$, $\\{p_i,p_j\\}=0$, $\\{q_i,p_j\\}=\\delta_{ij}$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2.2-5.3: the canonical condition written as the fundamental Poisson brackets and the invariance of the bracket"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 15.2: the algebraic properties of the Poisson bracket representation"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]], with the
momentum charts and two-form datum of [[def-cm13-two-form]], the canonical
coordinates of [[def-cm13-canonical-form]], the Hamiltonian fields of
[[def-cm13-hamiltonian-field]] and the bracket of [[def-cm13-poisson]] on a
nonempty open subset $W_{0}$ of a phase domain of the presentation. Then:

1. **(bilinearity and skew-symmetry)** The bracket is real-bilinear:
   $\{\alpha f+\beta g,h\}=\alpha\{f,h\}+\beta\{g,h\}$ and
   $\{f,\alpha g+\beta h\}=\alpha\{f,g\}+\beta\{f,h\}$ for real $\alpha,\beta$
   and $C^{2}$ phase functions; it is skew-symmetric,
   $\{f,g\}=-\{g,f\}$, and in particular $\{f,f\}=0$.
2. **(Leibniz rule)** For $C^{2}$ functions $f,g,h$,

$$\{f,gh\}=\{f,g\}h+g\{f,h\},\qquad \{fg,h\}=f\{g,h\}+g\{f,h\}.$$

3. **(Jacobi identity)** For $C^{3}$ functions $f,g,h$,

$$\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}=0.$$

4. **(relation to the fields)** For $C^{2}$ functions $f,g$ one has
   $\{f,g\}=X_{g}(f)=-X_{f}(g)=d\!f(X_{g})=-d\!g(X_{f})$, and the bracket is
   $C^{1}$; in the Cartesian canonical coordinates
   $\{f,g\}=\sum_{a}(f_{x^{a}}g_{p_{a}}-f_{p_{a}}g_{x^{a}})=\nabla f^{\mathsf T}J\,\nabla g$,
   and in any canonical chart $(\theta^{1},\dots,\theta^{2m})$ the analogous
   formula of [[def-cm13-poisson]] clause (c) holds.
5. **(fundamental brackets)** In the Cartesian canonical coordinates the
   coordinate functions satisfy $\{x^{a},x^{b}\}=0$, $\{p_{a},p_{b}\}=0$ and
   $\{x^{a},p_{b}\}=\delta^{a}_{b}$; more generally, in any canonical chart
   $(\theta^{1},\dots,\theta^{2m})$ one has
   $\{\theta^{i},\theta^{j}\}=J^{ij}$, the entries of the standard symplectic
   matrix.

Consequently the $C^{2}$ phase functions of the presentation on $W_{0}$,
equipped with the bracket and the pointwise product, satisfy the axioms of a
Poisson algebra on the class of functions for which the bracket is defined.
The statement is conditional on the adopted force branch, the declared
presentation and the cited mathematics; it asserts no equation of motion, no
conservation law and no measured value.

## Facts & Assumptions

**Given:** The presentation with its two-form, canonical charts, Hamiltonian
fields and bracket on the open phase domain $W_{0}$.

[F1] Bracket and fields ([[def-cm13-poisson]], [[def-cm13-hamiltonian-field]], [[def-cm13-two-form]], [[def-cm13-canonical-form]], [[pthm-cm13-two-form-is-symplectic]]): $\{f,g\}=\omega(X_{f},X_{g})=df(X_{g})$ for $C^{2}$ functions, the fields are the unique $C^{1}$ fields with $\iota_{X_{f}}\omega=df$, and the canonical charts carry the canonical coordinate expression of $\omega$.

[F2] Coordinate calculus and the standard form ([[prop-cm-hamiltonian-field-and-poisson-bracket-in-a-phase-chart]], [[def-poisson-bracket-on-a-symplectic-manifold]], [[cor-hessian-is-symmetric]], [[def-hessian-and-euclidean-critical-point]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]]): in a phase chart the Hamiltonian field is $J\nabla f$, the bracket is $\{f,g\}=\nabla f^{\mathsf T}J\nabla g=\sum_{a}(f_{q^{a}}g_{p_{a}}-f_{p_{a}}g_{q^{a}})$ and is $C^{1}$; second partial derivatives of $C^{2}$ functions are symmetric at every point; scalar and matrix products and partial derivatives obey the ordinary product, sum and chain rules.

[F3] Algebra of forms and matrices ([[thm-the-exterior-derivative-is-a-graded-derivation]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-linear-map]], [[def-euclidean-inner-product]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-smooth-differential-k-form]]): the exterior derivative satisfies $d(gh)=g\,dh+h\,dg$; $J^{\mathsf T}=-J$, $J^{2}=-I$; transposes, products and Euclidean pairings obey the ordinary identities; $C^{2}$ and $C^{3}$ classes are closed under the displayed algebra.

## Proof

**Proof technique:** direct. Read the bracket from its coordinate formula, obtain the Leibniz rule from the derivation property of $d$, prove Jacobi by expanding into Hessian terms and cancelling cyclic groups by transposition, and evaluate the coordinate functions for the fundamental brackets.

1.1 By [F1] and [F2] the bracket satisfies $\{f,g\}=df(X_{g})=-dg(X_{f})$, and $\alpha X_{f}+\beta X_{g}=X_{\alpha f+\beta g}$ because $\iota_{X}\omega=d(\cdot)$ is linear and $\omega$ is bilinear; since $\omega$ is antisymmetric, $\{f,g\}=\omega(X_{f},X_{g})=-\omega(X_{g},X_{f})=-\{g,f\}$ and $\{f,f\}=0$; the coordinate formula of [F2] displays the same statements, proving clause 1 and the first identity of clause 4. [F1, F2, algebra]

1.2 Hessian lemma: for $C^{2}$ functions $u,v$, the gradient of $\{u,v\}$ is $\mathrm{Hess}(u)J\nabla v-\mathrm{Hess}(v)J\nabla u$; indeed the $i$-th partial derivative of $(\nabla u)^{\mathsf T}J\nabla v$ is $\sum_{k,l}(u_{z^{k}z^{i}}J^{kl}v_{z^{l}}+u_{z^{k}}J^{kl}v_{z^{l}z^{i}})$, and by symmetry of the Hessians [F2] and $J^{\mathsf T}=-J$ [F3] this equals the $i$-th component of $\mathrm{Hess}(u)J\nabla v-\mathrm{Hess}(v)J\nabla u$. [F2, F3, algebra]

1.3 Fundamental brackets: in a canonical chart the two-form is $\omega=\sum_{a}d\theta^{a}\wedge d\theta^{m+a}$ by [F1], and the coordinate formula of [F2] applied to the coordinate functions gives $\{\theta^{i},\theta^{j}\}=\sum_{a}(\delta^{i}_{a}\delta^{j}_{m+a}-\delta^{i}_{m+a}\delta^{j}_{a})=J^{ij}$; in the Cartesian chart $J$ is the standard matrix, so $\{x^{a},x^{b}\}=\{p_{a},p_{b}\}=0$ and $\{x^{a},p_{b}\}=\delta^{a}_{b}$; this is clause 5. [F1, F2, algebra]

2.1 Leibniz: by [F1] and the derivation property of $d$ of [F3], $\{f,gh\}=-d(gh)(X_{f})=-g\,dh(X_{f})-h\,dg(X_{f})=g\{f,h\}+h\{f,g\}$, and the second identity follows from skew-symmetry of step 1.1 applied to the first; this proves clause 2. [step 1.1, F1, F3, algebra]

2.2 Jacobi: substituting the Hessian lemma of step 1.2 into the cyclic sum and using $\{f,g\}=\nabla f^{\mathsf T}J\nabla g$ gives $\{f,\{g,h\}\}+\{g,\{h,f\}\}+\{h,\{f,g\}\}=(\nabla f)^{\mathsf T}J\,\mathrm{Hess}(g)J\nabla h-(\nabla f)^{\mathsf T}J\,\mathrm{Hess}(h)J\nabla g+(\nabla g)^{\mathsf T}J\,\mathrm{Hess}(h)J\nabla f-(\nabla g)^{\mathsf T}J\,\mathrm{Hess}(f)J\nabla h+(\nabla h)^{\mathsf T}J\,\mathrm{Hess}(f)J\nabla g-(\nabla h)^{\mathsf T}J\,\mathrm{Hess}(g)J\nabla f$; each scalar term is its own transpose, and transposing $(\nabla f)^{\mathsf T}J\,\mathrm{Hess}(g)J\nabla h$ gives $(\nabla h)^{\mathsf T}J^{\mathsf T}\mathrm{Hess}(g)^{\mathsf T}J^{\mathsf T}\nabla f=(\nabla h)^{\mathsf T}J\,\mathrm{Hess}(g)J\nabla f$ using the symmetry of the Hessian and $J^{\mathsf T}=-J$ [F2, F3]; hence the two $\mathrm{Hess}(g)$-terms differ by a sign and cancel, and the same cancellation applies to the $\mathrm{Hess}(h)$- and $\mathrm{Hess}(f)$-terms, so the cyclic sum vanishes; this is clause 3. [step 1.2, F2, F3, algebra]

3.1 Collection: clause 1 is step 1.1, clause 2 is step 2.1, clause 3 is step 2.2, clause 4 is the coordinate formula of [F2] together with step 1.1, and clause 5 is step 1.3; bilinearity, skew-symmetry, the Leibniz rule and the Jacobi identity are exactly the axioms of a Poisson algebra on the class of phase functions for which the bracket is defined. [step 1.1, step 2.1, step 2.2, step 1.3, F2] ∎

## Remarks

- **Regularity ledger.** Bilinearity, skew-symmetry, the Leibniz rule and the
  identity $\{f,g\}=X_{g}(f)$ use only $C^{2}$ data; the Jacobi identity as
  stated uses $C^{3}$ functions, because its proof differentiates the bracket
  once more. No higher regularity is claimed.

- **What is not asserted.** The bracket is an operation on phase functions of
  the declared presentation; no statement is made here about the evolution
  equation $df/dt=\{f,H\}+\partial_{t}f$, about first integrals, or about
  bracket invariance under canonical maps, which are
  [[pthm-cm13-observable-evolution]] and
  [[pthm-cm13-dynamics-transport-under-canonical-maps]].

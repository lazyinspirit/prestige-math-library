---
id: pthm-cm13-two-form-is-symplectic
kind: physics-theorem
title: "The two-form of a potential presentation is closed and nondegenerate, and each generalized-coordinate momentum chart carries the same symplectic structure: $\\Phi_X^*\\lambda=\\sum P_a\\,dq^a$ and $\\Phi_X^*\\omega=\\sum dq^a\\wedge dP_a$"
status: draft
origin: session
domain: physics
dependency_level: 17
deps: [def-cm13-two-form, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, def-symplectic-form-and-symplectic-manifold, def-symplectic-vector-space, def-pullback-of-a-differential-form, thm-the-exterior-derivative-commutes-with-pullback, prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges, def-smooth-differential-k-form, def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-linear-map, def-euclidean-inner-product]
dependency_roles:
  def-cm13-two-form: formulation-prerequisite
  def-cm07-action-and-mechanical-lagrangian: formulation-prerequisite
  def-cm07-generalized-coordinates-and-forces: formulation-prerequisite
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  post-cm02-force-superposition: physical-assumption
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm12-cotangent-momentum: formulation-prerequisite
  def-cm12-hyperregularity: formulation-prerequisite
  def-cm-phase-domain-and-standard-symplectic-two-form: mathematical-premise
  lem-cm-standard-symplectic-form-is-closed-and-nondegenerate: mathematical-premise
  def-symplectic-form-and-symplectic-manifold: mathematical-premise
  def-symplectic-vector-space: mathematical-premise
  def-pullback-of-a-differential-form: mathematical-premise
  thm-the-exterior-derivative-commutes-with-pullback: mathematical-premise
  prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges: mathematical-premise
  def-smooth-differential-k-form: mathematical-premise
  def-closed-and-exact-differential-forms: mathematical-premise
  thm-local-coordinate-formula-for-the-exterior-derivative: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-transpose-of-a-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The symplectic structure of a declared potential presentation of the force branch: on the Cartesian momentum phase chart the two-form $\\omega=\\sum dx^a\\wedge dp_a$ is closed and nondegenerate, and on each declared generalized-coordinate momentum chart the pullback of the presentation's two-form along the presentation's own chart map has the canonical coordinate expression. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no dynamics, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.2 and 4.4, printed pages 88-92 and 100-101 (PDF pages 94-98 and 106-107): the symplectic matrix $J$ and the symplectic Jacobian condition $\\mathcal J^{\\mathsf T}\\mathcal J\\mathcal J=\\mathcal J$ for canonical transformations"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Sections 15.1-15.2 and 15.7: the symplectic structure of phase space and the bilinear form associated with the symplectic matrix"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, second edition (MIT Press, 2014/2015), Sections 5.2 and 5.2.2: the canonical condition in matrix form and its Poisson-bracket reformulation"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
verification:
  precheck: pass
---
## Statement

Adopt the force model with potential presentation $(U,d)$ and mechanical
Lagrangian $L=K-U$ of [[def-cm07-action-and-mechanical-lagrangian]] with the
data, charts and forms of [[def-cm13-two-form]]: masses $m_{1},\dots,m_{N}>0$,
open configuration domain $Q\subseteq\mathbb R^{3N}$ and mass operator
$\mathsf M$ ([[def-cm01-configuration]]), time window $I_{0}$, $C^{2}$
potential $U$ and residual forces $d$ of the standing regularity
([[def-cm03-potential-and-mechanical-energy]],
[[post-cm02-force-superposition]], [[def-cm01-units]]), the Cartesian phase
domain $W=Q\times\mathbb R^{3N}$ with $n=3N$, its canonical one-form
$\lambda$ and two-form $\omega=-d\lambda$, and for each generalized-coordinate
map $X:\Omega\to Q$ with $r$ coordinates and kinetic metric $G$ the chart map
$\Phi_{X}(q,P)=(X(q),\mathsf M\,DX(q)G(q)^{-1}P)$ with pullbacks
$\lambda_{X}=\Phi_{X}^{*}\lambda$ and $\omega_{X}=\Phi_{X}^{*}\omega$
([[def-cm07-generalized-coordinates-and-forces]],
[[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]]). Then:

1. **(Cartesian chart)** $\omega$ is the standard two-form of the phase
   domain $W$ in the sense of
   [[def-cm-phase-domain-and-standard-symplectic-two-form]]: $d\omega=0$ and
   $\omega$ is nondegenerate at every point of $W$; hence $(W,\omega)$ is a
   symplectic manifold in the sense of
   [[def-symplectic-form-and-symplectic-manifold]].
2. **(generalized-coordinate chart)** On $\Omega\times\mathbb R^{r}$,

$$\lambda_{X}=\sum_{a=1}^{r}P_{a}\,dq^{a},\qquad \omega_{X}=\sum_{a=1}^{r}dq^{a}\wedge dP_{a};$$

   consequently $\omega_{X}$ is closed and nondegenerate at every point, so
   $\Phi_{X}^{*}\omega$ is the standard two-form of the phase domain
   $\Omega\times\mathbb R^{r}$ and $\Phi_{X}$ preserves the two-form.
3. **(chart independence)** Where two of the presentation's charts are
   defined and overlap, the transition between them preserves the two-form,
   and the difference of their canonical one-forms is closed: any two
   momentum charts of the presentation describe the same symplectic
   structure on the overlap, up to the closed one-form $\lambda$ gauge.

The statement is a conditional deduction from the adopted force branch, the
declared presentation and the cited mathematics. It asserts no equation of
motion, no conservation law, no completeness of any flow and no empirical
content.

## Facts & Assumptions

**Given:** The model with its potential presentation, the Cartesian phase
domain $W$ and the chart map $\Phi_{X}$ of a generalized-coordinate map $X$,
with the forms of [[def-cm13-two-form]].

[F1] Model, presentation and charts ([[def-cm07-action-and-mechanical-lagrangian]], [[def-cm07-generalized-coordinates-and-forces]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]], [[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]]): the force branch has the standing regularity, $Q$ and $\Omega$ are nonempty open sets, the mass operator $\mathsf M$ is symmetric positive definite, $U$ is of class $C^{2}$ and $d$ is a force field of the standing regularity; $X$ is a $C^{3}$ immersion with $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ symmetric positive definite, and the momentum datum in the coordinates $X$ is $P=G(q)v$, so that the chart map $\Phi_{X}$ of [[def-cm13-two-form]] is well defined.

[F2] The forms and the chart map ([[def-cm13-two-form]]): $\lambda=\sum_{a}p_{a}dx^{a}$ and $\omega=\sum_{a}dx^{a}\wedge dp_{a}$ on $W$, with $\omega=-d\lambda$; $\lambda_{X}=\Phi_{X}^{*}\lambda$, $\omega_{X}=\Phi_{X}^{*}\omega$; and $\Phi_{X}(q,P)=(X(q),\mathsf M\,DX(q)G(q)^{-1}P)$.

[F3] The standard form of a phase domain ([[def-cm-phase-domain-and-standard-symplectic-two-form]], [[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]], [[def-symplectic-form-and-symplectic-manifold]], [[def-symplectic-vector-space]]): on a phase domain $U\subseteq\mathbb R^{2n}$ the two-form $\sum_{i}dq^{i}\wedge dp_{i}$ is closed, is nondegenerate at every point, has $J^{\mathsf T}=-J$, $J^{2}=-I$ and $J^{-1}=J^{\mathsf T}$, and makes $U$ a symplectic manifold.

[F4] Pullback calculus ([[def-pullback-of-a-differential-form]], [[thm-the-exterior-derivative-commutes-with-pullback]], [[prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges]], [[def-smooth-differential-k-form]], [[def-closed-and-exact-differential-forms]]): pullback of forms is linear, functorial under composition, compatible with wedges and with the exterior derivative, and a form is closed when its exterior derivative vanishes; the exterior derivative is computed in coordinates by [[thm-local-coordinate-formula-for-the-exterior-derivative]].

[F5] Chart algebra and calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-invertible-matrix-and-general-linear-group]], [[def-linear-map]], [[def-euclidean-inner-product]]): the derivative of a $C^{1}$ map is computed by the chain rule and acts by matrix products on the displayed Jacobians; transposes, products and inverses of the displayed matrices obey the ordinary identities; the Euclidean product writes $p\cdot\delta x=\sum_{a}p_{a}\delta x^{a}$ and pairs the momentum covector with the velocity/displacement slots.

## Proof

**Proof technique:** direct. Identify $\omega$ with the standard form of the phase domain $W$, then compute the two pullbacks along the chart map $\Phi_{X}$ by the chain rule and the definition of $P=G(q)v$.

1.1 The set $W=Q\times\mathbb R^{3N}$ is a nonempty open subset of $\mathbb R^{2n}$ with $n=3N\ge1$, hence a phase domain, and by [F2] its two-form is $\omega=\sum_{a}dx^{a}\wedge dp_{a}$, exactly the standard two-form of $W$ in the sense of [F3]; therefore [F3] gives $d\omega=0$, nondegeneracy of $\omega$ at every point of $W$, and the symplectic-manifold property of $(W,\omega)$: clause 1 holds. [F2, F3, given]

1.2 For $(q,P)\in\Omega\times\mathbb R^{r}$ and a tangent vector $(\delta q,\delta P)\in\mathbb R^{r}\times\mathbb R^{r}$, the derivative of $\Phi_{X}$ computed by the chain rule [F5] is $\bigl(DX(q)\delta q,\ \partial_{q}(\mathsf M\,DX\,G^{-1})(q)P\,\delta q+\mathsf M\,DX(q)G(q)^{-1}\delta P\bigr)$, so the $\delta x$-component of the image is $DX(q)\delta q$; since $\lambda$ acts on tangent vectors of $W$ by $\lambda_{(x,p)}(\delta x,\delta p)=p\cdot\delta x$, the pullback [F4] gives $(\Phi_{X}^{*}\lambda)_{(q,P)}(\delta q,\delta P)=(\mathsf M\,DX(q)G(q)^{-1}P)\cdot(DX(q)\delta q)=P^{\mathsf T}G(q)^{-1}DX(q)^{\mathsf T}\mathsf M\,DX(q)\delta q=P^{\mathsf T}\delta q$, where the last equality substitutes $G=DX^{\mathsf T}\mathsf M\,DX$; since $(\delta q,\delta P)$ is arbitrary this is the one-form $\sum_{a}P_{a}dq^{a}$, the first identity of clause 2. [F1, F2, F4, F5, algebra]

2.1 Pullback commutes with the exterior derivative by [F4], so $\omega_{X}=\Phi_{X}^{*}\omega=-\Phi_{X}^{*}(d\lambda)=-d(\Phi_{X}^{*}\lambda)$, and by the coordinate formula for $d$ of [F4] applied to the result of step 1.2 one has $d(\sum_{a}P_{a}dq^{a})=\sum_{a}dP_{a}\wedge dq^{a}=-\sum_{a}dq^{a}\wedge dP_{a}$; hence $\omega_{X}=\sum_{a}dq^{a}\wedge dP_{a}$, the second identity of clause 2. [step 1.2, F4, algebra]

3.1 The image $\Omega\times\mathbb R^{r}$ of the coordinates $(q,P)$ is a phase domain: $\Omega$ is nonempty and open by [F1] and $r\ge1$, so $\Omega\times\mathbb R^{r}$ is a nonempty open subset of $\mathbb R^{2r}$. By step 2.1 the form $\omega_{X}$ equals the standard two-form of that phase domain, which by [F3] is closed and nondegenerate; therefore $\Phi_{X}^{*}\omega=\omega_{X}$ is closed and nondegenerate, and $\Phi_{X}$ preserves the two-form wherever it is defined, which proves clause 2. When $r=3N$ the derivative of $\Phi_{X}$ is invertible by [F1] and [F5], and the identities describe a change of canonical coordinates on the overlap of two open charts. [step 2.1, F1, F3, F5]

4.1 For two generalized-coordinate charts $X_{1},X_{2}$ whose chart maps $\Phi_{X_{1}},\Phi_{X_{2}}$ are local diffeomorphisms (the case $r=3N$) and whose images overlap, the transition $\Theta:=\Phi_{X_{2}}^{-1}\circ\Phi_{X_{1}}$ is defined on a nonempty open set and, by functoriality of pullback [F4] and the identities of steps 1.2 and 2.1 applied to each chart, $\Theta^{*}\omega_{X_{2}}=\omega_{X_{1}}$: the transition preserves the standard two-form. Consequently the difference $\lambda_{X_{1}}-\Theta^{*}\lambda_{X_{2}}$ has exterior derivative $\omega_{X_{1}}-\Theta^{*}\omega_{X_{2}}=0$ and is closed, so the one-form datum is determined up to the closed gauge $\lambda\mapsto\lambda+dF$; this proves clause 3. [step 2.1, step 3.1, F4] ∎

## Remarks

- **What is and is not proved here.** Clauses 1-3 are chart calculus on the
  declared presentation. No statement is made about the existence of a global
  diffeomorphism between the charts ($\Phi_{X}$ need not be injective for a
  constraint parametrization), about dynamics, or about the completeness of
  any flow; the field-theoretic consequences are the subject of
  [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] and the
  subsequent items of this page.

- **The gauge term is genuine.** The closed one-form
  $\lambda_{X_{1}}-\Theta^{*}\lambda_{X_{2}}$ need not be exact on a phase
  domain with nontrivial first cohomology; the same phenomenon is what
  obstructs globally defined generating functions in
  [[rem-cm13-locality-topology]].

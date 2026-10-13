---
id: pthm-cm13-two-form-is-symplectic
kind: physics-theorem
title: "The two-form of a potential presentation is closed and nondegenerate, and each generalized-coordinate momentum chart carries the same symplectic structure: $\\Phi_X^*\\lambda=\\sum P_a\\,dq^a$ and $\\Phi_X^*\\omega=\\sum dq^a\\wedge dP_a$"
status: published
origin: session
domain: physics
dependency_level: 17
deps: [def-cm13-two-form, def-cm07-action-and-mechanical-lagrangian, def-cm07-generalized-coordinates-and-forces, def-cm03-potential-and-mechanical-energy, post-cm02-force-superposition, def-cm01-configuration, def-cm01-units, def-cm12-cotangent-momentum, def-cm12-hyperregularity, def-cm-phase-domain-and-standard-symplectic-two-form, lem-cm-standard-symplectic-form-is-closed-and-nondegenerate, def-symplectic-form-and-symplectic-manifold, def-symplectic-vector-space, def-pullback-of-a-differential-form, def-smooth-differential-k-form, def-closed-and-exact-differential-forms, thm-local-coordinate-formula-for-the-exterior-derivative, def-ck-euclidean-maps-and-diffeomorphisms, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, thm-chain-rule-for-total-derivatives, def-matrix-product-and-identity-matrix, def-transpose-of-a-matrix, def-invertible-matrix-and-general-linear-group, def-determinant-of-a-square-matrix, def-linear-map, def-euclidean-inner-product, thm-euclidean-inverse-function-theorem]
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
  def-determinant-of-a-square-matrix: mathematical-premise
  def-linear-map: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The symplectic structure of a declared potential presentation of the force branch: on the Cartesian momentum phase chart the two-form $\\omega=\\sum dx^a\\wedge dp_a$ is closed and nondegenerate, and on each declared generalized-coordinate momentum chart the pullback of the presentation's two-form along the presentation's own chart map has the canonical coordinate expression. The statement is a conditional deduction from the adopted force branch, the declared presentation and the cited mathematics; it asserts no dynamics, no conservation law and no measured value."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Sections 4.2 and 4.4, printed pages 88-92 and 100-101 (PDF pages 94-98 and 106-107): the symplectic matrix $J$ and the symplectic Jacobian condition $\\mathcal J J\\mathcal J^{\\mathsf T}=J$ for canonical transformations"
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
3. **(full-dimensional chart transitions)** Let $X_1,X_2$ be generalized-coordinate
   charts with $r=3N$, and restrict their momentum chart maps to neighborhoods
   on which each $\Phi_{X_j}$ is a diffeomorphism onto an open subset of the
   Cartesian phase domain. On every overlap of those image neighborhoods,
   the genuine phase-chart transition
   $\Theta=\Phi_{X_2}^{-1}\circ\Phi_{X_1}$ preserves the two-form. The
   difference $\lambda_{X_1}-\Theta^*\lambda_{X_2}$ is a closed one-form
   there; no exactness is asserted. Lower-dimensional generalized-coordinate
   immersions have the symplectic pullback form of clause 2, but are not
   transitions between open full-dimensional phase charts.

The statement is a conditional deduction from the adopted force branch, the
declared presentation and the cited mathematics. It asserts no equation of
motion, no conservation law, no completeness of any flow and no empirical
content.

## Facts & Assumptions

**Given:** The model with its potential presentation, the Cartesian phase domain $W$ and the chart map $\Phi_{X}$ of a generalized-coordinate map $X$, with the forms of [[def-cm13-two-form]].

[F1] Model, presentation and charts ([[def-cm13-two-form]], [[def-cm07-action-and-mechanical-lagrangian]], [[def-cm07-generalized-coordinates-and-forces]], [[def-cm03-potential-and-mechanical-energy]], [[post-cm02-force-superposition]], [[def-cm01-configuration]], [[def-cm01-units]], [[def-cm12-cotangent-momentum]], [[def-cm12-hyperregularity]]): the force branch has the standing regularity, $Q$ and $\Omega$ are nonempty open sets, the mass operator $\mathsf M$ is symmetric positive definite, $U$ is of class $C^{2}$ and $d$ is a force field of the standing regularity; $X$ is a $C^{3}$ immersion with $G(q)=DX(q)^{\mathsf T}\mathsf M\,DX(q)$ symmetric positive definite, and the momentum datum in the coordinates $X$ is $P=G(q)v$. In particular $DX$ and $G$ are $C^{2}$, $G^{-1}$ is $C^{2}$ on the positive-definite matrices, and the coefficient map $q\mapsto\mathsf M DX(q)G(q)^{-1}$ is $C^{2}$; hence the chart map $\Phi_X(q,P)=(X(q),\mathsf M DX(q)G(q)^{-1}P)$ is $C^{2}$, even though [[def-cm13-two-form]] only needs its $C^{1}$ regularity to define pullbacks.

[F2] The forms and the chart map ([[def-cm13-two-form]]): $\lambda=\sum_{a}p_{a}dx^{a}$ and $\omega=\sum_{a}dx^{a}\wedge dp_{a}$ on $W$, with $\omega=-d\lambda$; $\lambda_{X}=\Phi_{X}^{*}\lambda$, $\omega_{X}=\Phi_{X}^{*}\omega$; and $\Phi_{X}(q,P)=(X(q),\mathsf M\,DX(q)G(q)^{-1}P)$.

[F3] The standard form of a phase domain ([[def-cm-phase-domain-and-standard-symplectic-two-form]], [[lem-cm-standard-symplectic-form-is-closed-and-nondegenerate]], [[def-symplectic-form-and-symplectic-manifold]], [[def-symplectic-vector-space]]): on a phase domain $U\subseteq\mathbb R^{2n}$ the two-form $\sum_{i}dq^{i}\wedge dp_{i}$ is closed, is nondegenerate at every point, has $J^{\mathsf T}=-J$, $J^{2}=-I$ and $J^{-1}=J^{\mathsf T}$, and makes $U$ a symplectic manifold.

[F4] Pointwise pullback and coordinate calculus ([[def-pullback-of-a-differential-form]], [[def-smooth-differential-k-form]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-closed-and-exact-differential-forms]]): pullback is evaluated by applying the derivative to each tangent slot, is compatible with composition by the chain rule and with wedges by multilinearity, and a coordinate one-form with $C^{1}$ coefficients has an exterior derivative given by antisymmetrizing its first partial derivatives. We use the coordinate computation in step 2.1 for the $C^{2}$ maps here; the theorem for smooth-map pullback and exterior derivative is not applied.

[F5] Chart algebra and calculus ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]], [[def-directional-and-partial-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[def-matrix-product-and-identity-matrix]], [[def-transpose-of-a-matrix]], [[def-invertible-matrix-and-general-linear-group]], [[def-linear-map]], [[def-euclidean-inner-product]]): the derivative of a $C^{1}$ map is computed by the chain rule and acts by matrix products on the displayed Jacobians; transposes, products and inverses of the displayed matrices obey the ordinary identities; the Euclidean product writes $p\cdot\delta x=\sum_{a}p_{a}\delta x^{a}$ and pairs the momentum covector with the velocity/displacement slots.

## Proof

**Proof technique:** direct. Identify $\omega$ with the standard form of the phase domain $W$, then compute the two pullbacks along the chart map $\Phi_{X}$ by the chain rule and the definition of $P=G(q)v$.

1.1 The set $W=Q\times\mathbb R^{3N}$ is a nonempty open subset of $\mathbb R^{2n}$ with $n=3N\ge1$, hence a phase domain, and by [F2] its two-form is $\omega=\sum_{a}dx^{a}\wedge dp_{a}$, exactly the standard two-form of $W$ in the sense of [F3]; therefore [F3] gives $d\omega=0$, nondegeneracy of $\omega$ at every point of $W$, and the symplectic-manifold property of $(W,\omega)$: clause 1 holds. [F2, F3, given]

1.2 For $(q,P)\in\Omega\times\mathbb R^{r}$ and a tangent vector $(\delta q,\delta P)\in\mathbb R^{r}\times\mathbb R^{r}$, the derivative of $\Phi_{X}$ computed by the chain rule [F5] is $\bigl(DX(q)\delta q,\ \partial_{q}(\mathsf M\,DX\,G^{-1})(q)P\,\delta q+\mathsf M\,DX(q)G(q)^{-1}\delta P\bigr)$, so the $\delta x$-component of the image is $DX(q)\delta q$; since $\lambda$ acts on tangent vectors of $W$ by $\lambda_{(x,p)}(\delta x,\delta p)=p\cdot\delta x$, the pullback [F4] gives $(\Phi_{X}^{*}\lambda)_{(q,P)}(\delta q,\delta P)=(\mathsf M\,DX(q)G(q)^{-1}P)\cdot(DX(q)\delta q)=P^{\mathsf T}G(q)^{-1}DX(q)^{\mathsf T}\mathsf M\,DX(q)\delta q=P^{\mathsf T}\delta q$, where the last equality substitutes $G=DX^{\mathsf T}\mathsf M\,DX$; since $(\delta q,\delta P)$ is arbitrary this is the one-form $\sum_{a}P_{a}dq^{a}$, the first identity of clause 2. [F1, F2, F4, F5, algebra]

2.1 The map $\Phi_X$ is $C^{2}$ by [F1]. To justify the derivative of a pullback at this regularity, write a smooth one-form on the Cartesian chart as $\lambda=\sum_\alpha a_\alpha(y)\,dy^\alpha$, with $y=(x,p)$. For any $C^{2}$ map $\Phi$ with components $\Phi^\alpha$, the coefficients of $\Phi^*\lambda$ are $b_i=(a_\alpha\circ\Phi)\,\partial_i\Phi^\alpha$. In $\partial_jb_i-\partial_ib_j$, the terms $(a_\alpha\circ\Phi)(\partial_{ji}\Phi^\alpha-\partial_{ij}\Phi^\alpha)$ cancel by equality of mixed second derivatives of $\Phi$; the remaining terms are exactly the coordinate coefficients of $\Phi^*(d\lambda)$. Thus $d(\Phi^*\lambda)=\Phi^*(d\lambda)$ for this $C^2$ map by a direct coordinate calculation. Applying this calculation to $\Phi_X$ and using step 1.2 gives $\omega_X=\Phi_X^*\omega=-d(\Phi_X^*\lambda)=-d(\sum_aP_a dq^a)=\sum_a dq^a\wedge dP_a$, proving the second identity of clause 2. [step 1.2, F1, F4, algebra]

3.1 The image $\Omega\times\mathbb R^{r}$ of the coordinates $(q,P)$ is a phase domain: $\Omega$ is nonempty and open by [F1] and $r\ge1$, so $\Omega\times\mathbb R^{r}$ is a nonempty open subset of $\mathbb R^{2r}$. By step 2.1 the form $\omega_X$ equals its standard two-form, which by [F3] is closed and nondegenerate; therefore $\Phi_X^*\omega=\omega_X$ is closed and nondegenerate, proving clause 2. If $r=3N$ and $DX$ is invertible, then $D\Phi_X$ is invertible: its block-triangular derivative has diagonal blocks $DX$ and $\mathsf M DX G^{-1}=DX^{-\mathsf T}$. The inverse function theorem [[thm-euclidean-inverse-function-theorem]] supplies a $C^1$ local inverse $g$; differentiating $\Phi_X\circ g=\mathrm{id}$ gives $Dg=(D\Phi_X\circ g)^{-1}$. Since $D\Phi_X$ and $g$ are $C^1$, the right side is $C^1$ (matrix inversion is smooth on invertible matrices by the cofactor-over-determinant formula), hence $g$ is $C^2$. Thus these restrictions are genuine $C^2$ phase charts. [step 2.1, F1, F3, algebra]

4.1 Let $X_1,X_2$ and their full-dimensional chart neighborhoods be as in clause 3. By step 3.1 each chart map and its local inverse are $C^2$, so $\Theta=\Phi_{X_2}^{-1}\circ\Phi_{X_1}$ is $C^2$. Pointwise functoriality of pullback [F4] and step 1.2 give $\Theta^*\omega_{X_2}=\omega_{X_1}$. Applying the same coordinate calculation as in step 2.1 to the smooth one-form $\lambda_{X_2}$ and the $C^2$ map $\Theta$ yields $d(\Theta^*\lambda_{X_2})=\Theta^*(d\lambda_{X_2})$. Since $\omega_{X_j}=-d\lambda_{X_j}$, it follows that $d(\lambda_{X_1}-\Theta^*\lambda_{X_2})=0$. This proves the stated closed-one-form conclusion. For these particular cotangent chart maps, pointwise functoriality also gives $\Theta^*\lambda_{X_2}=(\Phi_{X_2}\circ\Theta)^*\lambda=\Phi_{X_1}^*\lambda=\lambda_{X_1}$, so the difference is actually zero. This stronger conclusion uses their common Cartesian one-form, rather than inferring exactness from closedness. [step 2.1, step 3.1, F4] ∎

## Remarks

- **What is and is not proved here.** Clauses 1-3 are chart calculus on the declared presentation. No statement is made about the existence of a global diffeomorphism between the charts ($\Phi_{X}$ need not be injective for a constraint parametrization), about dynamics, or about the completeness of any flow; the field-theoretic consequences are the subject of [[pthm-cm13-hamiltonian-field-integrates-the-model-equations]] and the subsequent items of this page.

- **Cotangent chart transitions and general gauge differences.** For the specific transitions of clause 3, both one-forms are pullbacks of the same Cartesian $\lambda$, so step 4.1 gives $\lambda_{X_1}-\Theta^*\lambda_{X_2}=0$. For a general canonical transformation preserving only $\omega$, the corresponding difference of canonical one-forms is closed and can be nonexact on a multiply connected domain; the cylinder obstruction in [[rem-cm13-locality-topology]] concerns this more general situation.

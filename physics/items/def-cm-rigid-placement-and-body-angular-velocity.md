---
id: def-cm-rigid-placement-and-body-angular-velocity
kind: definition
title: "Rigid placements, body and spatial angular velocity, and material velocities"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-mass-distribution-and-inertia-matrix, lem-cm-matrix-curve-derivative-rules, lem-cm-skew-matrix-cross-product-correspondence, def-cm-special-orthogonal-group, def-derivative, def-vector-valued-derivative-and-integral, def-interval, def-euclidean-inner-product]
dependency_roles:
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-matrix-curve-derivative-rules: mathematical-premise
  lem-cm-skew-matrix-cross-product-correspondence: mathematical-premise
  def-cm-special-orthogonal-group: mathematical-premise
  def-derivative: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §§3.1-3.2, Eqs. (3.3)-(3.10) and (3.29)-(3.30), printed pp. 47-54: rigid placement $r(t)=\\tilde R(t)+\\Delta r(t)$, body angular velocity and centre-of-mass splitting"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §§4.1-4.2, Eqs. (4.1)-(4.10): rigid body as six degrees of freedom, moving frame and angular velocity"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.2 (Kinematics of Rotation): orientation path $M(q(t))$, velocity $\\dot M M^{\\mathsf T}$ and body components $M^{\\mathsf T}\\omega$"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Definition

Let $I\subseteq\mathbb R$ be an interval with at least two points ([[def-interval]]), let $\nu$ be a mass distribution on $\mathbb R^3$ with total mass $m$ ([[def-cm-mass-distribution-and-inertia-matrix]]), let $c:I\to\mathbb R^3$ be differentiable and let $R:I\to SO(3)$ be differentiable ([[def-cm-special-orthogonal-group]]), differentiability meaning entrywise differentiability of $R$ in the sense of [[def-derivative]] with derivative $R'$; write $c'$ for the derivative of $c$.

The **rigid placement with reference shape $\nu$, translation $c$ and rotation $R$** is the map
$$x:I\times\mathbb R^3\longrightarrow\mathbb R^3,\qquad x(t,\rho):=c(t)+R(t)\rho,$$
so that the material point labelled by $\rho$ (a point of the reference shape) is carried to $x(t,\rho)$ at time $t$; the map $x(t,\cdot)$ is the **placement at time $t$**, and the pair $(c(t),R(t))$ is its **configuration**. The **material velocity** of the label $\rho$ at time $t$ is the derivative
$$\partial_tx(t,\rho):=c'(t)+R'(t)\rho,$$
which exists by differentiability of $c$ and of the entries of $R$.

**Body and spatial angular velocity.** By [[lem-cm-matrix-curve-derivative-rules]] the matrix $R(t)^{\mathsf T}R'(t)$ is skew-symmetric at every $t\in I$. By [[lem-cm-skew-matrix-cross-product-correspondence]] there is therefore a unique vector $\omega(t)\in\mathbb R^3$ with
$$R(t)^{\mathsf T}R'(t)=[\omega(t)]_\times,$$
and the map $\omega:I\to\mathbb R^3$ is the **body angular velocity** of the placement; the **spatial angular velocity** is $\omega_{\mathrm{s}}(t):=R(t)\omega(t)$. Explicitly $\omega(t)=\bigl((R^{\mathsf T}R')_{32},(R^{\mathsf T}R')_{13},(R^{\mathsf T}R')_{21}\bigr)(t)$, a finite sum of products of entries of $R$ and $R'$; consequently, if $R$ is twice differentiable, then $\omega$ is differentiable and its derivative is the **body angular acceleration**.

Equivalently, by the conjugation clause of [[lem-cm-skew-matrix-cross-product-correspondence]], $R'(t)R(t)^{\mathsf T}=[\omega_{\mathrm{s}}(t)]_\times$.

## Remarks

- **The reference shape is a label space.** $\rho$ is not the position of the material point at time $t$; the position is $x(t,\rho)$. The mass distribution $\nu$ is a measure on the label space, and no invariance of $\nu$ under translations or rotations is assumed.

- **Existence and uniqueness of $\omega$ are discharged, not assumed.** Skew-symmetry of $R^{\mathsf T}R'$ is the differentiated orthogonality relation of the curve $R$; the vector whose cross-product matrix it is exists and is unique by the explicit bijection of the two cited lemmas. No smoothness beyond differentiability of the entries of $R$ is used to define $\omega$.

- **This is mathematics.** No physical law is asserted: not that a physical body is rigid, not that its configuration is described by a curve in $SO(3)$, and not that $\omega$ is measured by any apparatus. The physical reading is supplied by the consuming classical-mechanics items.

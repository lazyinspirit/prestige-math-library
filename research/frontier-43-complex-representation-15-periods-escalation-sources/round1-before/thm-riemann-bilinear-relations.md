---
id: thm-riemann-bilinear-relations
kind: theorem
title: The Riemann bilinear relations and the period lattice
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 19
deps:
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-dimension
  - def-full-rank-lattice-covolume-and-dual-lattice
  - def-linear-map
  - def-meromorphic-differential-on-a-riemann-surface
  - def-period-pairing-and-period-lattice
  - def-vector-space
  - lem-cut-surface-and-boundary-jumps-of-primitives
  - lem-holomorphic-differentials-form-a-g-dimensional-space
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - prop-positive-compactly-supported-top-forms-have-positive-integral
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-invertible-matrix-theorem
  - thm-symplectic-homology-basis-compact-riemann-surface
  - thm-symplectic-period-formula-for-wedge-integrals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)"
      url: "https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf"
      locator: "Ch. 15, Theorem 15.13, printed pp. 134–135, for the wedge-period formula; Theorems 15.18–15.19 and their proofs, printed pp. 140–141, for normalized holomorphic differentials, symmetry, and positivity. The period-matrix index convention is transposed relative to the one used here; symmetry identifies the two matrices."
    - title: "Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)"
      url: "https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf"
      locator: "Ch. 7 §1, Proposition-Definition 7.1 and proof, printed pp. 59–60: the period homomorphism maps H_1(S) onto a full lattice in Ω(S)^*, with real-linear independence proved through conjugation and the Hodge splitting. This is an alternative argument, not a supplier used in the local proof."
    - title: "Otto Forster, Lectures on Riemann Surfaces, GTM 81, 4th corrected printing"
      url: "https://ebooks.karbust.me/Mathematics/Otto%20Forster%20-%20Lectures%20on%20Riemann%20Surfaces%20%281981%29%20%5B978-1-4612-5961-9%5D.pdf"
      locator: "Ch. 2, Theorem 21.4 and full proof (a)–(c), printed pp. 168–170: an alternative proof that the period subgroup is a lattice, using a local Jacobi map, Abel's theorem, the residue theorem, and a real-linear spanning argument."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), as required by the
symplectic-basis, holomorphic-dimension, and wedge-period suppliers. Let $X$ be a
compact connected Riemann surface of genus $g$, with its complex orientation,
the fixed one-polygon symplectic basis $a_1,b_1,\ldots,a_g,b_g$ of
$H_1(X;\mathbb Z)$, and the fixed continuous side-loop representatives
$A_i,B_i$ supplied by
[[thm-symplectic-homology-basis-compact-riemann-surface]]. Let
$\Omega(X)=\Omega^1(X)$ be the $g$-dimensional complex vector space of
holomorphic differentials ([[lem-holomorphic-differentials-form-a-g-dimensional-space]]),
and let $P$ be the period pairing on this basis from
[[def-period-pairing-and-period-lattice]]. For closed smooth complex $1$-forms
when $g\ge1$, write $\Pi_\alpha$ and
$$S(\alpha,\beta):=\sum_{i=1}^g\bigl(\Pi_\alpha(a_i)\Pi_\beta(b_i)-\Pi_\alpha(b_i)\Pi_\beta(a_i)\bigr)$$
as in [[lem-cut-surface-and-boundary-jumps-of-primitives]] and
[[thm-symplectic-period-formula-for-wedge-integrals]]. For $g=0$ this sum is
empty. For a holomorphic $\omega$, the period lemma identifies
$\Pi_\omega(\gamma)=P(\gamma,\omega)$.

1. **Normalized basis.** The $\mathbb C$-linear map
   $$\mathcal A: \Omega(X)\longrightarrow\mathbb C^g, \qquad \omega\longmapsto(P(a_1,\omega),\ldots,P(a_g,\omega))$$
   is an isomorphism. Thus there is a unique basis
   $\omega_1,\ldots,\omega_g$ with $P(a_i,\omega_j)=\delta_{ij}$. The
   **period matrix** in this normalization is the $g\times g$ matrix
   $\Pi_{ij}:=P(b_i,\omega_j)$.
2. **First bilinear relation.** $\Pi$ is symmetric if and only if
   $S(\omega,\eta)=0$ for every pair of holomorphic differentials
   $\omega,\eta\in\Omega(X)$.
3. **Second bilinear relation.** $\operatorname{Im}\Pi$ is positive definite
   if and only if
   $$iS(\omega,\bar\omega)=i\int_X\omega\wedge\bar\omega>0$$
   for every nonzero holomorphic differential $\omega$. Here $\bar\omega$ is
   its conjugate smooth $(0,1)$-form.
4. **Period lattice.** The homomorphism
   $$e:H_1(X;\mathbb Z)\longrightarrow\Omega(X)^*, \qquad e(\gamma)(\omega):=P(\gamma,\omega),$$
   is injective. Its image $\Lambda$ is the full lattice generated over
   $\mathbb Z$ by the $2g$ real-linearly independent vectors
   $e(a_1),e(b_1),\ldots,e(a_g),e(b_g)$. In the coordinates on $\Omega(X)^*$
   dual to the normalized basis,
   $$\Lambda=\mathbb Z^g+\Pi\mathbb Z^g\subseteq\mathbb C^g,$$
   and $\Omega(X)^*/\Lambda$ is a compact real $2g$-torus. For $g=0$, all
bases and matrices here are empty, $\Omega(X)=H_1(X;\mathbb Z)=0$, and we
use the rank-zero lattice convention $\Lambda=\{0\}$ in the zero vector
space; the quotient is a point. Positive definiteness of the empty matrix is
understood by the usual quadratic-form condition on nonzero vectors, which is
vacuous in dimension zero.

## Facts & Assumptions

**Given:** Full AC, the compact connected genus-$g$ Riemann surface $X$, its
fixed symplectic side-loop basis, the period pairing $P$, and the space
$\Omega(X)$.

[F1] The one-polygon side-loop classes form a symplectic basis of
$H_1(X;\mathbb Z)$, which is free of rank $2g$; for $g=0$ the basis is empty
and $H_1(X;\mathbb Z)=0$
([[thm-symplectic-homology-basis-compact-riemann-surface]]).

[F2] $\Omega(X)$ is a complex vector space of dimension $g$, and every
holomorphic differential is a closed smooth complex $1$-form
([[lem-holomorphic-differentials-form-a-g-dimensional-space]],
[[def-meromorphic-differential-on-a-riemann-surface]]).

[F3] $P$ is additive in its homology argument and complex-linear in its
holomorphic-differential argument. Its values agree with integration along
any continuous singular cycle representing the given class
([[def-period-pairing-and-period-lattice]],
[[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F4] Every closed smooth complex $1$-form has the local-primitive periods
$\Pi_\alpha$ used by $S$; for a holomorphic differential these equal $P$.
Conjugation of a local primitive gives
$\Pi_{\bar\omega}(\gamma)=\overline{P(\gamma,\omega)}$
([[lem-cut-surface-and-boundary-jumps-of-primitives]],
[[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F5] For all closed smooth complex $1$-forms $\alpha,\beta$,
$$\int_X\alpha\wedge\beta=S(\alpha,\beta),$$
with $S$ complex-bilinear and alternating
([[thm-symplectic-period-formula-for-wedge-integrals]]).

[F6] Locally a holomorphic differential is $f(z)\,dz$; hence two holomorphic
$1$-forms wedge to zero, and for $\omega=f(z)\,dz$ the complex orientation
satisfies $i\omega\wedge\bar\omega=2|f(z)|^2dx\wedge dy$
([[def-meromorphic-differential-on-a-riemann-surface]],
[[def-bigraded-complex-differential-forms]]).

[F7] A compactly supported top form nonnegative on the positive orientation
ray has nonnegative integral, and its integral is strictly positive when the
form is nonzero ([[prop-positive-compactly-supported-top-forms-have-positive-integral]]).

[F8] A linear map between two $g$-dimensional vector spaces is represented by
a square matrix after choosing a basis; a square matrix with zero kernel is
invertible, including the empty $0\times0$ case
([[def-vector-space]], [[def-dimension]], [[def-linear-map]],
[[thm-invertible-matrix-theorem]]).

[F9] A full-rank lattice in $\mathbb R^n$ is the integer span of a real basis;
$\mathbb C^g$ is $\mathbb R^{2g}$ as a real vector space
([[def-full-rank-lattice-covolume-and-dual-lattice]],
[[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F10] Full AC supplies the symplectic basis and is assumed by the
holomorphic-dimension and wedge-period interfaces. No additional arbitrary
selection is needed in the finite-dimensional matrix, positivity, or lattice
calculations ([[def-axiom-of-choice]] and the cited suppliers).

## Proof

**Proof technique:** the wedge-period formula, positive local area density,
and finite-dimensional linear algebra.

1.1 If $g=0$, [F1] gives $H_1(X;\mathbb Z)=0$, [F2] gives $\Omega(X)=0$, and [F3] gives the zero period pairing; the normalized basis, symmetry, and strict-positivity statements are empty, while $e$ is the unique map $0\to0$ and the rank-zero lattice convention in the Statement gives the point quotient. Thus all claims hold in this case, with positive definiteness vacuous on the zero vector space. For the rest of the proof assume $g\ge1$. [F1, F2, F3, F10, given]

2.1 Define $\mathcal A(\omega)=(P(a_i,\omega))_{i=1}^g$. It is complex-linear by [F3]. If $\mathcal A(\omega)=0$, then [F4] gives $\Pi_\omega(a_i)=\Pi_{\bar\omega}(a_i)=0$ for every $i$, so every summand of $S(\omega,\bar\omega)$ vanishes. By [F5], $\int_X\omega\wedge\bar\omega=0$. But [F6] makes $i\omega\wedge\bar\omega$ a nonnegative top form, and if $\omega\ne0$ it is nonzero at a point; since $X$ is compact it is compactly supported, so [F7] gives $i\int_X\omega\wedge\bar\omega>0$, a contradiction. Thus $\mathcal A$ is injective. [F3, F4, F5, F6, F7, step 1.1]

3.1 By [F2], both domain and codomain of $\mathcal A$ have dimension $g$. Choose a basis $\eta_1,\ldots,\eta_g$ of $\Omega(X)$; the matrix $M_{ij}=P(a_i,\eta_j)$ represents $\mathcal A$ and has zero kernel by step 2.1, so [F8] makes it invertible and $\mathcal A$ an isomorphism. Define $\omega_j=\mathcal A^{-1}(e_j)$, where $e_j$ is the $j$th standard basis vector of $\mathbb C^g$. Then $P(a_i,\omega_j)=\delta_{ij}$, and the isomorphism makes this normalized basis unique. [F2, F8, F10, step 2.1, construct]

4.1 For holomorphic $\omega,\eta$, [F6] gives $\omega\wedge\eta=0$, hence $S(\omega,\eta)=0$ by [F5]. Write $\omega=\sum_jc_j\omega_j$ and $\eta=\sum_jd_j\omega_j$. Their $a$-period vectors are $c,d$ and their $b$-period vectors are $\Pi c,\Pi d$, so [F3] gives $S(\omega,\eta)=c^{\mathsf T}(\Pi-\Pi^{\mathsf T})d$. This proves $S$ vanishes for all such pairs exactly when $\Pi=\Pi^{\mathsf T}$: one direction follows from the displayed identity, and the reverse follows by setting $c=e_j,d=e_k$. [F3, F5, F6, step 3.1, algebra]

5.1 Put $Y=\operatorname{Im}\Pi$, which is real symmetric by step 4.1. For $\omega=\sum_jc_j\omega_j$ with $c=x+iy$ and real $x,y$, [F4] and the definition of $\Pi$ give $S(\omega,\bar\omega)=c^{\mathsf T}\bar\Pi\bar c-(\Pi c)^{\mathsf T}\bar c=c^{\mathsf T}(\bar\Pi-\Pi)\bar c=-2i\,c^{\mathsf T}Y\bar c$, where symmetry of $\Pi$ is used in the second equality. Since $Y$ is real symmetric, $c^{\mathsf T}Y\bar c=x^{\mathsf T}Yx+y^{\mathsf T}Yy$, and therefore $iS(\omega,\bar\omega)=2\bigl(x^{\mathsf T}Yx+y^{\mathsf T}Yy\bigr)$. By [F5]–[F7], the left side is strictly positive whenever $\omega\ne0$. As $\omega\mapsto c$ is an isomorphism, this identity proves both directions of the equivalence: $Y$ is positive definite exactly when $iS(\omega,\bar\omega)>0$ for every nonzero $\omega$. [F4, F5, F6, F7, step 3.1, step 4.1, algebra]

6.1 Write $\gamma=\sum_i(m_i a_i+n_i b_i)$ with $m,n\in\mathbb Z^g$, and identify a functional $\xi\in\Omega(X)^*$ with $(\xi(\omega_1),\ldots,\xi(\omega_g))\in\mathbb C^g$. Its period vector is $\bigl(P(\gamma,\omega_j)\bigr)_{j=1}^g=m+\Pi^{\mathsf T}n=m+\Pi n$, by [F3] and symmetry. If $e(\gamma)=0$, taking imaginary parts gives $Yn=0$, hence $n=0$ and then $m=0$ by positivity of $Y$ from step 5.1; so $e$ is injective. For real $x,y\in\mathbb R^g$, a relation among the period vectors of the basis cycles has coordinates $x+\Pi^{\mathsf T}y=0$; its imaginary part $Yy=0$ gives $y=0$ and then $x=0$. Thus those $2g$ vectors are real-linearly independent in $\mathbb C^g\cong\mathbb R^{2g}$, form a real basis, and by [F9] generate a full lattice. The displayed coordinate formula gives $\Lambda=\mathbb Z^g+\Pi\mathbb Z^g$. The real-linear map $(x,y)\mapsto x+\Pi y$ identifies $\mathbb R^{2g}/\mathbb Z^{2g}$ with $\mathbb C^g/\Lambda$; the image of the compact cube $[0,1]^{2g}$ covers this quotient, so it is compact. [F1, F3, F9, step 1.1, step 4.1, step 5.1, algebra] ∎

## Source notes

McMullen's Theorems 15.18–15.19 use the opposite row/column convention for
the period matrix, with $\tau_{ij}=P(b_j,\omega_i)$; their symmetry proof
identifies it with $\Pi$ as defined here. The square-torus check is
$X=\mathbb C/(\mathbb Z+i\mathbb Z)$, $a$ horizontal, $b$ vertical, and
$\omega=dz$: $P(a,dz)=1$, the normalized period matrix is $(i)$, and
$\operatorname{Im}(i)=1>0$.

The period definition, period-identification lemma, cut-surface lemma, and
wedge-period theorem remain open/escalated suppliers. In this proof their
uses are: the definition supplies $P$ and $e$; the period lemma identifies
$P$ with continuous path integrals; the cut lemma supplies $\Pi$ for closed
forms and its conjugation rule; and the wedge-period theorem gives
$\int\alpha\wedge\beta=S(\alpha,\beta)$. The holomorphic-dimension lemma
is also escalated on its Riemann–Roch and divisor-line-bundle inputs; this
theorem uses its dimension claim in step 1.2. Keep this item escalated until
those supplier decisions and these actual uses are reconciled.

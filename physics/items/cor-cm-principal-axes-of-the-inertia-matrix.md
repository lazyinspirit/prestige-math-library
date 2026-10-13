---
id: cor-cm-principal-axes-of-the-inertia-matrix
kind: corollary
title: "Principal axes and principal moments of the inertia matrix, and positivity in the nondegenerate case"
status: published
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-countable-choice, def-cm-mass-distribution-and-inertia-matrix, lem-cm-inertia-matrix-properties, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-self-adjoint-and-normal-endomorphism, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases, def-orthogonal-vectors-sets-and-orthonormal-bases, def-euclidean-inner-product, def-inner-product-space, def-invertible-matrix-and-general-linear-group, thm-invertible-matrix-theorem, def-matrix-product-and-identity-matrix, thm-unique-coordinates-with-respect-to-an-ordered-basis]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-inertia-matrix-properties: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  def-self-adjoint-and-normal-endomorphism: mathematical-premise
  prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases: mathematical-premise
  def-orthogonal-vectors-sets-and-orthonormal-bases: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  thm-invertible-matrix-theorem: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-unique-coordinates-with-respect-to-an-ordered-basis: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2, the diagonalization discussion after Eq. (3.20), printed pp. 50-52: principal axes and principal moments via orthogonal diagonalization of the symmetric inertia tensor"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §2.5 (Principal Moments of Inertia): the eigensystem of the inertia tensor and the diagonal form"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.3: principal axes of the inertia tensor and their positivity"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used through [[lem-cm-inertia-matrix-properties]] to ensure finiteness of the inertia integrals. Let $\nu$ be a mass distribution on $\mathbb R^3$ with inertia matrix $I=I(\nu)$ ([[def-cm-mass-distribution-and-inertia-matrix]]), and write $I\omega$ for the matrix-vector product and $\langle\cdot,\cdot\rangle$ for the Euclidean inner product on $\mathbb R^3$ ([[def-matrix-product-and-identity-matrix]], [[def-euclidean-inner-product]]). Then:

1. there is an orthonormal basis $(e_1,e_2,e_3)$ of $\mathbb R^3$ ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]) and real numbers $I_1,I_2,I_3$ with $Ie_j=I_je_j$ for $j=1,2,3$;
2. for any such basis and any $\omega=\sum_j\omega_je_j$ one has $I\omega=\sum_jI_j\omega_je_j$, $I_j=e_j^{\mathsf T}Ie_j$, and $\omega^{\mathsf T}I\omega=\sum_jI_j\omega_j^2=\int\lVert\omega\times\rho\rVert_2^2\,d\nu(\rho)\ \ge0$;
3. each $I_j$ vanishes exactly when $\nu(\mathbb R^3\setminus\mathbb Re_j)=0$, that is, the whole mass lies on the line $\mathbb Re_j$; if the inertia form is positive definite then every $I_j>0$ and $I$ is invertible with $I^{-1}e_j=I_j^{-1}e_j$; and if $\nu$ is not supported on any line through the origin, meaning that $\nu(\mathbb R^3\setminus\mathbb R\omega)>0$ for every $\omega\ne0$, then every $I_j>0$.

## Facts & Assumptions

**Given:** A mass distribution $\nu$ with inertia matrix $I$, an orthonormal basis $(e_1,e_2,e_3)$ of eigenvectors of $I$ with eigenvalues $I_1,I_2,I_3$, and a vector $\omega=\sum_j\omega_je_j$.

[L1] $I$ is symmetric and $\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu\ge0$; for each $\omega\ne0$, its quadratic form vanishes exactly when $\nu(\mathbb R^3\setminus\mathbb R\omega)=0$, and the associated bilinear form is positive definite exactly when $\nu(\mathbb R^3\setminus\mathbb R\omega)>0$ for every $\omega\ne0$, and then $I\omega\ne0$ for $\omega\ne0$ [[lem-cm-inertia-matrix-properties]].

[L2] The map $\omega\mapsto I\omega$ is self-adjoint with respect to the Euclidean inner product, because $\langle I\omega,z\rangle=(I\omega)^{\mathsf T}z=\omega^{\mathsf T}I^{\mathsf T}z=\omega^{\mathsf T}Iz=\langle\omega,Iz\rangle$ by symmetry of $I$ and the product and transpose rules [[lem-cm-inertia-matrix-properties]], [[def-euclidean-inner-product]].

[L3] Every self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]; in an orthonormal basis, self-adjointness is symmetry of the matrix [[prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases]].

[L4] A linear map is determined by its values on a basis, and $Ie_j=I_je_j$ for the eigenbasis [[thm-unique-coordinates-with-respect-to-an-ordered-basis]].

[L5] A square matrix is invertible exactly when its nullspace is $\{0\}$, and the inverse is unique [[thm-invertible-matrix-theorem]], [[def-invertible-matrix-and-general-linear-group]], [[def-matrix-product-and-identity-matrix]].

## Proof

**Proof technique:** direct.

1.1 The map $T\omega:=I\omega$ is linear and, by [L1] and [L2], self-adjoint on the Euclidean space $\mathbb R^3$. [given, L1, L2]

2.1 Applying [L3] to $T$ produces an orthonormal basis $(e_1,e_2,e_3)$ and reals $I_j$ with $Ie_j=I_je_j$; this is clause 1. [step 1.1, L3]

3.1 For $\omega=\sum_j\omega_je_j$, linearity of $T$ [L4] gives $I\omega=\sum_jI_j\omega_je_j$ and hence $\omega^{\mathsf T}I\omega=\sum_{j,k}\omega_j\omega_kI_j\langle e_j,e_k\rangle=\sum_jI_j\omega_j^2$ by orthonormality; setting $\omega=e_j$ gives $I_j=e_j^{\mathsf T}Ie_j=\int\lVert e_j\times\rho\rVert_2^2\,d\nu$ by [L1], and the displayed chain of equalities of clause 2 follows. [step 2.1, given, L1, L4, algebra]

4.1 Each $I_j=\int\lVert e_j\times\rho\rVert_2^2\,d\nu$ is nonnegative, and it is zero exactly when $\nu(\mathbb R^3\setminus\mathbb Re_j)=0$, by [L1]; this is the vanishing criterion of clause 3. [step 3.1, L1, algebra]

4.2 If the inertia form is positive definite, then $I_j=e_j^{\mathsf T}Ie_j>0$ for every $j$; moreover $I\omega\ne0$ for every $\omega\ne0$ by [L1], so the nullspace of $T$ is $\{0\}$ and $I$ is invertible with unique inverse by [L5]. Define $S$ on the basis by $Se_j:=I_j^{-1}e_j$ and extend linearly; then $SIe_j=Se_jI_j=I_j\cdot I_j^{-1}e_j=e_j$ and $ISe_j=I(I_j^{-1}e_j)=I_j^{-1}Ie_j=e_j$ for every $j$, so $SI=IS=\mathrm{Id}$ by [L4], whence $S=I^{-1}$ by uniqueness and $I^{-1}e_j=I_j^{-1}e_j$. [step 3.1, 4.1, given, L4, L5, algebra]

5.1 If $\nu$ is not supported on any line through the origin, then for $e_j\ne0$ $\nu(\mathbb R^3\setminus\mathbb Re_j)>0$, so $I_j=\int\lVert e_j\times\rho\rVert_2^2\,d\nu>0$ by step 4.1. This completes clause 3. [step 4.1, given, algebra] ∎

---
id: lem-cm-inertia-matrix-properties
kind: lemma
title: "Symmetry, the quadratic identity $\\omega^{\\mathsf T}I\\omega=\\int\\lVert\\omega\\times\\rho\\rVert_2^2\\,d\\nu$, and the positive-definiteness criterion for the inertia matrix"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps: [def-cm-mass-distribution-and-inertia-matrix, lem-cm-mass-moments-are-finite, def-countable-choice, def-cross-product-in-r3, thm-cross-product-norm-is-the-two-vector-gram-determinant, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-nonnegative-integral-zero-iff-zero-almost-everywhere, def-measure-null-set-and-almost-everywhere, prop-order-and-scalar-rules-for-the-nonnegative-integral, def-definiteness-inertia-and-signature-data-over-the-reals, def-inner-product-space, def-euclidean-inner-product, thm-invertible-matrix-theorem]
dependency_roles:
  def-cm-mass-distribution-and-inertia-matrix: mathematical-premise
  lem-cm-mass-moments-are-finite: mathematical-premise
  def-countable-choice: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  thm-cross-product-norm-is-the-two-vector-gram-determinant: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-nonnegative-integral-zero-iff-zero-almost-everywhere: mathematical-premise
  def-measure-null-set-and-almost-everywhere: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-definiteness-inertia-and-signature-data-over-the-reals: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-invertible-matrix-theorem: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), §3.2, Eqs. (3.18)-(3.22), printed pp. 50-52: symmetry of the inertia tensor, positivity and the equality case (all mass on a line)"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. Likharev, Essential Graduate Physics: Classical Mechanics, Ch. 4 §4.2, Eqs. (4.16)-(4.18): symmetry and the quadratic form of the inertia tensor"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. J. Sussman and J. Wisdom, Structure and Interpretation of Classical Mechanics, 2nd ed. (MIT Press, 2014), §§2.3-2.5: moments of inertia, inertia tensor and principal moments as a symmetric matrix diagonalized by a rotation"
      url: "https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/9579/sicm_edition_2.zip"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), used only in [L1], through [[lem-cm-mass-moments-are-finite]], to make the entries of $I$ finite real numbers. Let $\nu$ be a mass distribution on $\mathbb R^3$ with total mass $m=\nu(\mathbb R^3)$ and inertia matrix $I=I(\nu)$ ([[def-cm-mass-distribution-and-inertia-matrix]]). Write $\omega^{\mathsf T}I\omega:=\sum_{j,k=1}^{3}\omega_jI_{jk}\omega_k$ for the quadratic form of $I$ on $\mathbb R^3$ and $\lVert\cdot\rVert_2$ for the Euclidean norm ([[def-euclidean-inner-product]]). Then:

1. $I$ is symmetric: $I_{jk}=I_{kj}$ for all $j,k$.
2. For every $\omega\in\mathbb R^3$, $$\omega^{\mathsf T}I\omega=\int\lVert\omega\times\rho\rVert_2^2\,d\nu(\rho)\ \ge 0,$$ the cross product being that of [[def-cross-product-in-r3]].
3. The symmetric bilinear form $(u,v)\mapsto u^{\mathsf T}Iv$ on $\mathbb R^3$ is therefore positive semidefinite ([[def-definiteness-inertia-and-signature-data-over-the-reals]]); for each $\omega\ne0$, writing $\mathbb R\omega=\{t\omega:t\in\mathbb R\}$, one has $\omega^{\mathsf T}I\omega=0$ if and only if $\nu(\mathbb R^3\setminus\mathbb R\omega)=0$. Thus it is positive definite if and only if $\nu(\mathbb R^3\setminus\mathbb R\omega)>0$ for every $\omega\ne0$, that is, no line through the origin carries the entire mass ([[def-measure-null-set-and-almost-everywhere]]).
4. If the form is positive definite, then $I$ is invertible.

## Facts & Assumptions

**Given:** A mass distribution $\nu$ with inertia matrix $I$ and a vector $\omega\in\mathbb R^3$.

[L1] $I_{jk}=\int(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k)\,d\nu$ is a finite real number for every $j,k$, by the finiteness lemma for bounded finite measures [[def-cm-mass-distribution-and-inertia-matrix]], [[lem-cm-mass-moments-are-finite]].

[L2] The integral is linear on $L^1(\nu)$: $\int(\alpha f+\beta g)\,d\nu=\alpha\int f\,d\nu+\beta\int g\,d\nu$ for real $\alpha,\beta$ and integrable $f,g$ [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[L3] For a measurable $h\ge0$ with $\int h\,d\nu=0$ one has $h=0$ $\nu$-almost everywhere; and $\int h\,d\nu\ge0$ for $h\ge0$ [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]], [[prop-order-and-scalar-rules-for-the-nonnegative-integral]].

[L4] For all $u,v\in\mathbb R^3$, $\lVert u\times v\rVert_2^2=\lVert u\rVert_2^2\lVert v\rVert_2^2-\langle u,v\rangle^2$, and $u\times v=0$ if and only if $u$ and $v$ are linearly dependent [[thm-cross-product-norm-is-the-two-vector-gram-determinant]].

[L5] A vector is orthogonal to every vector of $\mathbb R^3$ only if it is $0$, and the Euclidean inner product is bilinear [[def-inner-product-space]], [[def-euclidean-inner-product]].

[L6] The matrix $I$ satisfies $N(I)=\{u:Iu=0\}$; if $N(I)=\{0\}$ then $I$ is invertible [[thm-invertible-matrix-theorem]].

## Proof

**Proof technique:** direct.

1.1 Interchanging $j$ and $k$ leaves the integrand $\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k$ unchanged, because $\delta_{jk}=\delta_{kj}$ and $\rho_j\rho_k=\rho_k\rho_j$; the two integrals defining $I_{jk}$ and $I_{kj}$ therefore coincide, so $I$ is symmetric. [given, L1, algebra]

1.2 Expressing the quadratic form through the entries of [L1] and applying linearity [L2] to the finite sum of integrable functions $\omega_j\omega_k(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k)$, $$\omega^{\mathsf T}I\omega=\sum_{j,k}\omega_j\omega_k\int\Bigl(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k\Bigr)d\nu=\int\Bigl(\sum_{j,k}\omega_j\omega_k\bigl(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k\bigr)\Bigr)d\nu.$$ [given, L1, L2, algebra]

2.1 For each $\rho$, evaluating the $\delta$ sum gives $\sum_{j,k}\omega_j\omega_k\bigl(\lVert\rho\rVert_2^2\delta_{jk}-\rho_j\rho_k\bigr)=\lVert\omega\rVert_2^2\lVert\rho\rVert_2^2-\langle\omega,\rho\rangle^2=\lVert\omega\times\rho\rVert_2^2$ by [L4] and bilinearity of the inner product. [step 1.2, given, L4, L5, algebra]

3.1 Substituting step 2.1 into step 1.2 gives the identity of clause 2, and the integrand $\lVert\omega\times\rho\rVert_2^2$ is nonnegative, so its integral is $\ge0$ by [L3]: the form $u^{\mathsf T}Iv$ is positive semidefinite by definition. [step 1.2, 2.1, given, L3]

4.1 Let $\omega\ne0$ and put $h(\rho):=\lVert\omega\times\rho\rVert_2^2$. This is a measurable nonnegative integrable polynomial by [L1], [L2] and step 2.1. Its zero set is the closed line $\mathbb R\omega$, by [L4], so its exceptional set $\{h\ne0\}=\mathbb R^3\setminus\mathbb R\omega$ is Borel measurable. By step 3.1 and both implications of [L3], $\omega^{\mathsf T}I\omega=0$ exactly when $h=0$ $\nu$-almost everywhere, meaning that its measurable exceptional set has measure zero, or equivalently $\nu(\mathbb R^3\setminus\mathbb R\omega)=0$. Since the quadratic form is nonnegative and finite, it is strictly positive for this $\omega$ exactly when that complement has positive measure. Quantifying over all $\omega\ne0$ gives the positive-definiteness criterion in clause 3. [step 3.1, given, L1, L2, L3, L4]

5.1 Assume the form is positive definite. If $I\omega=0$ for some $\omega$, then $\omega^{\mathsf T}I\omega=\omega^{\mathsf T}0=0$, which for $\omega\ne0$ is excluded; hence $N(I)=\{0\}$ and $I$ is invertible by [L6]. This is clause 4. [step 4.1, given, L6, algebra] ∎

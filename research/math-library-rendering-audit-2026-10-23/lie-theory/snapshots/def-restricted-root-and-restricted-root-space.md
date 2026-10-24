---
id: def-restricted-root-and-restricted-root-space
kind: definition
title: Restricted root and restricted root space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-maximal-split-abelian-subspace-and-real-rank]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, construction of the restricted-root spaces and definition of a restricted root, printed p. 370"
landmark: false
verification:
  audited: 2026-09-22
---

## Definition

Let $\mathfrak g_0$ be a finite-dimensional real semisimple Lie algebra, let
$\mathfrak a$ be a maximal split abelian subspace of the Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-maximal-split-abelian-subspace-and-real-rank]]), and let
$$\mathfrak a^*=\operatorname{Hom}_{\mathbb R}(\mathfrak a,\mathbb R)$$
be its dual space. For $\lambda\in\mathfrak a^*$ put
$$\mathfrak g_0^\lambda=\{X\in\mathfrak g_0:[H,X]=\lambda(H)X\text{ for every }H\in\mathfrak a\}.$$
Each $\mathfrak g_0^\lambda$ is a real linear subspace of $\mathfrak g_0$,
because the bracket is bilinear and the condition is linear in $X$, and
$\mathfrak g_0^\lambda$ depends only on the functional $\lambda$; the
assignment $\lambda\mapsto\mathfrak g_0^\lambda$ is compatible with the
bracket,
$$[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}\qquad(\lambda,\mu\in\mathfrak a^*),$$
by the Jacobi identity, as proved in
[[thm-restricted-root-space-decomposition]].

A **restricted root** of $\mathfrak g_0$ with respect to $\mathfrak a$ is a
nonzero functional $\lambda\in\mathfrak a^*$ with
$\mathfrak g_0^\lambda\ne0$; the set of restricted roots is denoted
$$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)=\{\lambda\in\mathfrak a^*:\lambda\ne0,\ \mathfrak g_0^\lambda\ne0\}.$$
For $\lambda\in\Sigma$ the subspace $\mathfrak g_0^\lambda$ is the
**restricted-root space** of $\lambda$, and its real dimension
$$m_\lambda=\dim_{\mathbb R}\mathfrak g_0^\lambda$$
is the **multiplicity** of $\lambda$; it is a positive integer.

The case $\lambda=0$ is not a restricted root but is part of the notation:
$$\mathfrak g_0^0=\{X\in\mathfrak g_0:[H,X]=0\text{ for every }H\in\mathfrak a\}=Z_{\mathfrak g_0}(\mathfrak a)$$
is the centralizer of $\mathfrak a$ in $\mathfrak g_0$, and
$\mathfrak a\subseteq\mathfrak g_0^0$ because $\mathfrak a$ is abelian.
For $H\in\mathfrak a$ the space $\mathfrak g_0^\lambda$ is contained in the
eigenspace of the endomorphism $\operatorname{ad}H$ for the eigenvalue
$\lambda(H)$.

The restricted roots of $\mathfrak g_0$ relative to $\mathfrak a$ are the
real-algebra analogue of the roots of a complex semisimple Lie algebra
relative to a Cartan subalgebra: the role of the Cartan subalgebra is played
by the maximal abelian subspace $\mathfrak a$ of $\mathfrak p_0$, which
diagonalizes the commuting family
$\{\operatorname{ad}H:H\in\mathfrak a\}$ of self-adjoint endomorphisms of
$\mathfrak g_0$. The resulting restricted-root space decomposition, the
finiteness of $\Sigma$, the identity
$\mathfrak g_0^0=\mathfrak a\oplus Z_{\mathfrak k_0}(\mathfrak a)$, and the
sign and bracket properties of the spaces $\mathfrak g_0^\lambda$ are proved
in [[thm-restricted-root-space-decomposition]].

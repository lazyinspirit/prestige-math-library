---
id: thm-restricted-root-space-decomposition
kind: theorem
title: Restricted root space decomposition
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-restricted-root-and-restricted-root-space, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, def-killing-form-of-a-finite-dimensional-lie-algebra, prop-trace-forms-are-symmetric-and-invariant, thm-cartans-semisimplicity-criterion, def-cartan-involution-of-a-real-semisimple-lie-algebra, cor-trace-is-invariant-under-similarity, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Proposition 6.40 and its proof, printed pp. 370-371"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g_0$ be a finite-dimensional real
semisimple Lie algebra with Cartan involution $\theta$, Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$ and inner
product $B_\theta(X,Y)=-B(X,\theta Y)$
([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]). Let
$\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace, and let
$\Sigma=\Sigma(\mathfrak g_0,\mathfrak a)$ and the spaces
$\mathfrak g_0^\lambda$ be as in
[[def-restricted-root-and-restricted-root-space]]. Then:

1. $\mathfrak g_0$ is the direct sum
$$\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda ,$$
the summands are pairwise orthogonal for $B_\theta$, and
$\mathfrak g_0^0=Z_{\mathfrak g_0}(\mathfrak a)$; the index set $\Sigma$ is
finite and every multiplicity $m_\lambda=\dim_{\mathbb R}\mathfrak g_0^\lambda$
is a finite positive integer;
2. $\mathfrak g_0^0=\mathfrak a\oplus\mathfrak m$ with
$\mathfrak m=Z_{\mathfrak k_0}(\mathfrak a)=\mathfrak k_0\cap\mathfrak g_0^0$,
an orthogonal direct sum, and $\mathfrak a=\mathfrak p_0\cap\mathfrak g_0^0$;
3. $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$
for all $\lambda,\mu\in\mathfrak a^*$, where $\mathfrak g_0^\nu$ is understood
as in [[def-restricted-root-and-restricted-root-space]] (so that
$[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]=0$ whenever
$\lambda+\mu\notin\{0\}\cup\Sigma$);
4. $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$ for every
$\lambda\in\mathfrak a^*$; in particular $\lambda\in\Sigma$ if and only if
$-\lambda\in\Sigma$;
5. if $H\in\mathfrak a$ satisfies $\lambda(H)\ne0$ for every
$\lambda\in\Sigma$, then $Z_{\mathfrak g_0}(H)=\mathfrak g_0^0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a real semisimple $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, Killing form $B$, inner product $B_\theta(X,Y)=-B(X,\theta Y)$, and a maximal abelian subspace $\mathfrak a\subseteq\mathfrak p_0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]. It is declared here as part of the ZFC interface of the restricted-root chain, which every consumer of this decomposition propagates; the argument below performs no selection beyond the cited finite-dimensional linear algebra of [L2] and [L3].

[L1] The Killing form $B(X,Y)=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$ is invariant and nondegenerate, and an automorphism preserves it because it conjugates every adjoint operator and trace is similarity-invariant. Thus $B(\theta X,\theta Y)=B(X,Y)$. The summands $\mathfrak k_0,\mathfrak p_0$ are $B$-orthogonal, $B$ is negative definite on $\mathfrak k_0$ and positive definite on $\mathfrak p_0$, and $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-trace-forms-are-symmetric-and-invariant]], [[thm-cartans-semisimplicity-criterion]], [[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[cor-trace-is-invariant-under-similarity]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L2] A finite family of pairwise commuting diagonalisable endomorphisms of a finite-dimensional real vector space is simultaneously diagonalisable: there is a basis consisting of common eigenvectors ([[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors, hence is diagonalisable with real eigenvalues, and its eigenspaces for distinct eigenvalues are orthogonal for the inner product ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 For $H\in\mathfrak p_0$ the endomorphism $\operatorname{ad}H$ of $\mathfrak g_0$ is self-adjoint for $B_\theta$: for all $X,Y\in\mathfrak g_0$, using $\theta H=-H$ and [L1], $B_\theta([H,X],Y)=-B([H,X],\theta Y)=-B(X,[\theta Y,H])=B(X,[H,\theta Y])=B_\theta(X,[H,Y])$; moreover $\operatorname{ad}[H,H']=[\operatorname{ad}H,\operatorname{ad}H']$, so for $H,H'\in\mathfrak a$ the endomorphisms $\operatorname{ad}H$ and $\operatorname{ad}H'$ commute because $[H,H']=0$, and hence $\{\operatorname{ad}H:H\in\mathfrak a\}$ is a commuting family of self-adjoint, therefore diagonalisable, endomorphisms of $\mathfrak g_0$. [L1, L3, algebra]

1.2 If $0\ne X\in\mathfrak g_0$ is a common eigenvector of the family $\{\operatorname{ad}H:H\in\mathfrak a\}$, define $\lambda_X:\mathfrak a\to\mathbb R$ by $\operatorname{ad}H(X)=\lambda_X(H)X$ for $H\in\mathfrak a$; then $\lambda_X$ is linear, because for $H,H'\in\mathfrak a$ and $c\in\mathbb R$ one has $\lambda_X(H+cH')X=\operatorname{ad}(H+cH')X=(\lambda_X(H)+c\lambda_X(H'))X$ and $X\ne0$ permits cancellation of $X$. [algebra]

1.3 Bracket relation: for $X\in\mathfrak g_0^\lambda$, $Y\in\mathfrak g_0^\mu$ and $H\in\mathfrak a$, the Jacobi identity gives $\operatorname{ad}_H([X,Y])=[\operatorname{ad}_HX,Y]+[X,\operatorname{ad}_HY]=(\lambda(H)+\mu(H))[X,Y]=(\lambda+\mu)(H)[X,Y]$, so $[X,Y]\in\mathfrak g_0^{\lambda+\mu}$; in particular $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$. [algebra]

1.4 $\theta$-stability: for $X\in\mathfrak g_0^\lambda$ and $H\in\mathfrak a$ one has $\theta H=-H$ and $\theta$ is an automorphism, so $[H,\theta X]=\theta[\theta H,X]=\theta[-H,X]=-\theta[H,X]=-\lambda(H)\theta X$, that is $\theta X\in\mathfrak g_0^{-\lambda}$; since $\theta$ is an involution, $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$, and $\mathfrak g_0^\lambda\ne0$ exactly when $\mathfrak g_0^{-\lambda}\ne0$. [L1, algebra]

1.5 $\mathfrak a=\mathfrak p_0\cap\mathfrak g_0^0$: the inclusion $\mathfrak a\subseteq\mathfrak p_0\cap\mathfrak g_0^0$ holds because $\mathfrak a\subseteq\mathfrak p_0$ and $\mathfrak a$ is abelian; conversely, if $X\in\mathfrak p_0\cap\mathfrak g_0^0$, then $[X,\mathfrak a]=0$ and $[X,X]=0$, so $\mathfrak a+\mathbb RX$ is an abelian subspace of $\mathfrak p_0$ containing $\mathfrak a$, and maximality of $\mathfrak a$ forces $X\in\mathfrak a$. [algebra]

2.1 By [L2] there is a basis $\{X_1,\dots,X_N\}$ of $\mathfrak g_0$ consisting of common eigenvectors of the family of step 1.1; each $X_i$ lies in $\mathfrak g_0^{\lambda_{X_i}}$ by definition of $\lambda_{X_i}$, so the subspaces $\mathfrak g_0^\lambda$ span $\mathfrak g_0$ and only finitely many functionals $\lambda\in\mathfrak a^*$ occur with $\mathfrak g_0^\lambda\ne0$. [L2, step 1.2]

2.2 Orthogonality: if $\lambda\ne\mu$ are occurring functionals, there is $H\in\mathfrak a$ with $\lambda(H)\ne\mu(H)$; the spaces $\mathfrak g_0^\lambda$ and $\mathfrak g_0^\mu$ are eigenspaces of the self-adjoint endomorphism $\operatorname{ad}H$ for the distinct real eigenvalues $\lambda(H)$ and $\mu(H)$, hence are orthogonal for $B_\theta$ by [L3]. [L3, step 1.1, algebra]

2.3 $\mathfrak g_0^0=\mathfrak a\oplus\mathfrak m$: by step 1.4 with $\lambda=0$ the involution $\theta$ preserves $\mathfrak g_0^0$, so every $X\in\mathfrak g_0^0$ decomposes as $X=\tfrac12(X+\theta X)+\tfrac12(X-\theta X)$ with the first summand in $\mathfrak k_0\cap\mathfrak g_0^0$ and the second in $\mathfrak p_0\cap\mathfrak g_0^0=\mathfrak a$ by step 1.5; also $\mathfrak k_0\cap\mathfrak g_0^0=\mathfrak k_0\cap Z_{\mathfrak g_0}(\mathfrak a)=Z_{\mathfrak k_0}(\mathfrak a)=\mathfrak m$, so $\mathfrak g_0^0=\mathfrak m\oplus\mathfrak a$, the sum is direct because $\mathfrak k_0\cap\mathfrak p_0=0$, and it is orthogonal by [L1]. [L1, step 1.4, step 1.5, algebra]

3.1 Conversely, if an occurring functional $\lambda$ is given, that is $\mathfrak g_0^\lambda\ne0$, pick $0\ne X\in\mathfrak g_0^\lambda$; then $X$ is a common eigenvector with $\lambda_X=\lambda$, so the set of functionals $\lambda\in\mathfrak a^*$ with $\mathfrak g_0^\lambda\ne0$ is exactly the finite set of functionals $\lambda_{X_i}$ of step 2.1, and $\Sigma$ is the set of its nonzero members: $\Sigma$ is finite and each multiplicity $m_\lambda=\dim_{\mathbb R}\mathfrak g_0^\lambda$ is a finite positive integer. [step 1.2, step 2.1]

4.1 The occurring spaces $\mathfrak g_0^\lambda$ are linearly independent and span $\mathfrak g_0$: if $\sum_\lambda X_\lambda=0$ with $X_\lambda\in\mathfrak g_0^\lambda$ and some $X_{\lambda_0}\ne0$, expand in the common eigenbasis of step 2.1; a basis vector with functional $\lambda_{X_i}$ can appear with nonzero coefficient in $X_{\lambda_0}$ only when $\lambda_{X_i}=\lambda_0$, and distinct occurring functionals involve disjoint groups of basis vectors, so $\sum_\lambda X_\lambda\ne0$, a contradiction; hence $\mathfrak g_0=\bigoplus_{\lambda\in\mathfrak a^*}\mathfrak g_0^\lambda$, the sum extending over the finitely many occurring functionals, and discarding $\lambda=0$ while using that the occurring nonzero functionals are exactly the elements of $\Sigma$ and that $\mathfrak g_0^0=Z_{\mathfrak g_0}(\mathfrak a)$ by [[def-restricted-root-and-restricted-root-space]] gives the direct sum of statement 1. [step 2.1, step 3.1, algebra]

5.1 If $H\in\mathfrak a$ satisfies $\lambda(H)\ne0$ for every $\lambda\in\Sigma$, then $Z_{\mathfrak g_0}(H)=\bigoplus_{\lambda:\lambda(H)=0}\mathfrak g_0^\lambda=\mathfrak g_0^0$, because $\mathfrak g_0^\lambda$ lies in the kernel of $\operatorname{ad}H$ exactly when $\lambda(H)=0$. [step 4.1, algebra]

6.1 Statements 1–5 are now established: the direct-sum decomposition in step 4.1; the finiteness of $\Sigma$ and of the multiplicities in step 3.1; the orthogonality in step 2.2; the description of $\mathfrak g_0^0$ in steps 1.5 and 2.3; the bracket relation in step 1.3; the $\theta$-stability in step 1.4; and the regular-element centralizer in step 5.1. The Axiom of Choice was declared in [A1], and no selection was made in the argument. [A1, step 2.2, step 2.3, step 3.1, step 4.1, step 5.1, step 1.3, step 1.4, step 1.5] ∎

---
id: thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k
kind: theorem
title: Maximal abelian subspaces of p are conjugate by K
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-maximal-split-abelian-subspace-and-real-rank, thm-conjugacy-of-maximal-tori, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Lemma 6.50 and Theorem 6.51 with their proofs, printed pp. 378-379"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $(G,K)$ be a Riemannian symmetric pair of
noncompact type with Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, and let
$\mathfrak a,\mathfrak a'$ be maximal abelian subspaces of $\mathfrak p_0$
([[def-maximal-split-abelian-subspace-and-real-rank]]). Then there is
$k\in K$ with $\operatorname{Ad}_k\mathfrak a'=\mathfrak a$. Consequently
$\mathfrak p_0=\bigcup_{k\in K}\operatorname{Ad}_k\mathfrak a$ and the real
rank of $\mathfrak g_0$ is well defined.

## Facts & Assumptions

**Given:** The Axiom of Choice; a real semisimple Lie algebra $\mathfrak g_0$ with Cartan involution $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, inner product $B_\theta$, and maximal abelian subspaces $\mathfrak a,\mathfrak a'$ of $\mathfrak p_0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the existence of the global decomposition and the compactness of $K$ recorded in [L2].

[L1] $B$ is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, the summands are $B$-orthogonal, and $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L2] $(k,X)\mapsto k\exp X$ is a diffeomorphism $K\times\mathfrak p_0\to G$, $K$ is compact, and $\operatorname{Ad}_K$ preserves $\mathfrak p_0$ and $B_\theta$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).

[L3] For $X\in\mathfrak p_0$ the operator $\operatorname{ad}_X$ is self-adjoint for $B_\theta$, hence diagonalizable with real eigenvalues; a family of pairwise commuting diagonalizable endomorphisms is simultaneously diagonalizable ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L4] A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces; any two maximal tori of a compact connected Lie group are conjugate ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]], [[thm-conjugacy-of-maximal-tori]]).

## Proof

**Proof technique:** direct.

1.1 The family $\{\operatorname{ad}_H:H\in\mathfrak a\}$ consists of pairwise commuting diagonalizable endomorphisms of $\mathfrak g_0$ by [L3], hence is simultaneously diagonalizable: $\mathfrak g_0=\bigoplus_{\lambda}\mathfrak g_0^\lambda$, where $\lambda$ runs over the real-linear functionals on $\mathfrak a$ and $\mathfrak g_0^\lambda=\{X:[H,X]=\lambda(H)X\text{ for all }H\in\mathfrak a\}$. Only finitely many functionals with $\mathfrak g_0^\lambda\ne0$ occur, because each such $\lambda$ is determined by its values on a basis of $\mathfrak a$, and each of those values is an eigenvalue of some $\operatorname{ad}_{H_i}$. [L3]

2.1 There exists $H\in\mathfrak a$ with $\lambda(H)\ne0$ for every $\lambda\ne0$ occurring in step 1.1: the kernels of the finitely many nonzero $\lambda$ are proper subspaces of the real vector space $\mathfrak a$, and a finite union of proper subspaces cannot exhaust $\mathfrak a$. For such an $H$ one has $Z_{\mathfrak g_0}(H)=\mathfrak g_0^0$, because the eigenvalues of $\operatorname{ad}_H$ on $\mathfrak g_0^\lambda$ are the nonzero numbers $\lambda(H)$. [L4, step 1.1]

3.1 For such a regular $H$ one has $Z_{\mathfrak p_0}(H)=\mathfrak a$: the inclusion $\mathfrak a\subseteq Z_{\mathfrak p_0}(H)$ is clear, and if $X\in Z_{\mathfrak p_0}(H)$ then $[H,X]=0$, so $X\in\mathfrak g_0^0$; the subspace $\mathfrak a+\mathbb RX$ of $\mathfrak p_0$ is abelian and contains the maximal $\mathfrak a$, hence equals $\mathfrak a$ and $X\in\mathfrak a$. The same argument with $\mathfrak a'$ in place of $\mathfrak a$ produces $H'\in\mathfrak a'$ with $Z_{\mathfrak p_0}(H')=\mathfrak a'$. [step 2.1]

4.1 By compactness of $K$ and continuity of $\operatorname{Ad}$ the function $f(k):=B(\operatorname{Ad}_kH',H)$ attains a minimum at some $k_0\in K$. [L1, L2, step 3.1]

5.1 For every $Z\in\mathfrak k_0$ the smooth function $r\mapsto B(\operatorname{Ad}_{\exp(rZ)}\operatorname{Ad}_{k_0}H',H)$ is minimized at $r=0$, so its derivative vanishes there: with $Y:=\operatorname{Ad}_{k_0}H'\in\mathfrak p_0$ one has $0=B([Z,Y],H)=-B(Y,[Z,H])$ for all $Z\in\mathfrak k_0$, since $B$ is invariant. As $[Y,H]\in[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ and $B$ is nondegenerate on $\mathfrak k_0$, it follows that $[Y,H]=0$. [L1, step 4.1]

6.1 Hence $Y\in Z_{\mathfrak p_0}(H)=\mathfrak a$ by step 3.1, so $\mathfrak a\subseteq Z_{\mathfrak p_0}(Y)$. Since $Z_{\mathfrak p_0}(Y)=\operatorname{Ad}_{k_0}Z_{\mathfrak p_0}(H')=\operatorname{Ad}_{k_0}\mathfrak a'$ by step 3.1 and equivariance of the centralizer, and the right-hand side is abelian, the maximal abelian subspace $\mathfrak a$ equals $\operatorname{Ad}_{k_0}\mathfrak a'$. [step 3.1, step 5.1]

7.1 Finally, if $X\in\mathfrak p_0$, then $\mathbb RX$ lies in a maximal abelian subspace $\mathfrak a''$ of $\mathfrak p_0$ (existence by finite-dimensionality and the ascending chain condition on subspaces), and step 6.1 gives $\mathfrak a''=\operatorname{Ad}_k\mathfrak a$ for some $k\in K$; hence $X\in\bigcup_{k\in K}\operatorname{Ad}_k\mathfrak a$ and $\mathfrak p_0=\bigcup_{k\in K}\operatorname{Ad}_k\mathfrak a$. In particular $\dim\mathfrak a=\dim\mathfrak a'$ for any two maximal abelian subspaces, so the real rank is well defined. [step 6.1, A1, algebra] ∎

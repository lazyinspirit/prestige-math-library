---
id: thm-maximal-abelian-subspaces-of-p-are-conjugate-by-k
kind: theorem
title: Maximal abelian subspaces of p are conjugate by K
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-riemannian-symmetric-pair-of-noncompact-type, def-maximal-split-abelian-subspace-and-real-rank, thm-conjugacy-of-maximal-tori, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, prop-trace-forms-are-symmetric-and-invariant, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms, lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces, def-axiom-of-choice]
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
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
---

## Statement

Assume the Axiom of Choice. Let $(G,K)$ be a Riemannian symmetric pair of
noncompact type with Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-riemannian-symmetric-pair-of-noncompact-type]]), and let
$\mathfrak a,\mathfrak a'$ be maximal abelian subspaces of $\mathfrak p_0$
([[def-maximal-split-abelian-subspace-and-real-rank]]). Then there is
$k\in K$ with $\operatorname{Ad}_k\mathfrak a'=\mathfrak a$. Consequently
$\mathfrak p_0=\bigcup_{k\in K}\operatorname{Ad}_k\mathfrak a$ and the real
rank of $\mathfrak g_0$ is well defined.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Riemannian symmetric pair $(G,K)$ of noncompact type with global Cartan involution $\Theta$, differential $\theta$, Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, inner product $B_\theta$, and maximal abelian subspaces $\mathfrak a,\mathfrak a'$ of $\mathfrak p_0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the existence of the global decomposition and the compactness of $K$ recorded in [L2].

[L1] $B$ is negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, the summands are $B$-orthogonal, and $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L2] By the symmetric-pair definition, $K=G^\Theta$, and the global Cartan
decomposition makes $K$ compact and $(k,X)\mapsto k\exp X$ a diffeomorphism
$K\times\mathfrak p_0\to G$
([[def-riemannian-symmetric-pair-of-noncompact-type]],
[[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
For $k\in K$, the identity $\Theta\circ C_k=C_k\circ\Theta$ differentiates
to $\theta\operatorname{Ad}_k=\operatorname{Ad}_k\theta$, so
$\operatorname{Ad}_k$ preserves the $-1$-eigenspace $\mathfrak p_0$.
Moreover every Lie-algebra automorphism $A$ preserves the Killing form because
$\operatorname{ad}_{AX}=A\operatorname{ad}_XA^{-1}$ and trace is invariant
under conjugation. Hence
$$
B_\theta(\operatorname{Ad}_kX,\operatorname{Ad}_kY)=-B(\operatorname{Ad}_kX,\theta\operatorname{Ad}_kY)=-B(\operatorname{Ad}_kX,\operatorname{Ad}_k\theta Y)=B_\theta(X,Y).
$$

[L3] The Killing form is invariant.  Hence, for $X\in\mathfrak p_0$ and $Y,Z\in\mathfrak g_0$, invariance and $\theta X=-X$ give
$$B_\theta([X,Y],Z)=-B([X,Y],\theta Z)=-B(Y,[\theta Z,X])=B_\theta(Y,[X,Z]).$$
Thus $\operatorname{ad}_X$ is self-adjoint for $B_\theta$ and consequently is diagonalizable with real eigenvalues; a family of pairwise commuting diagonalizable endomorphisms is simultaneously diagonalizable ([[prop-trace-forms-are-symmetric-and-invariant]], [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[thm-simultaneous-diagonalisation-of-commuting-diagonalisable-endomorphisms]]).

[L4] A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces; any two maximal tori of a compact connected Lie group are conjugate ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]], [[thm-conjugacy-of-maximal-tori]]).

## Proof

**Proof technique:** direct.

1.1 The family $\{\operatorname{ad}_H:H\in\mathfrak a\}$ consists of pairwise commuting diagonalizable endomorphisms of $\mathfrak g_0$ by [L3], hence is simultaneously diagonalizable: $\mathfrak g_0=\bigoplus_{\lambda}\mathfrak g_0^\lambda$, where $\lambda$ runs over the real-linear functionals on $\mathfrak a$ and $\mathfrak g_0^\lambda=\{X:[H,X]=\lambda(H)X\text{ for all }H\in\mathfrak a\}$. Only finitely many functionals with $\mathfrak g_0^\lambda\ne0$ occur, because each such $\lambda$ is determined by its values on a basis of $\mathfrak a$, and each of those values is an eigenvalue of some $\operatorname{ad}_{H_i}$. [L3]

2.1 There exists $H\in\mathfrak a$ with $\lambda(H)\ne0$ for every $\lambda\ne0$ occurring in step 1.1: the kernels of the finitely many nonzero $\lambda$ are proper subspaces of the real vector space $\mathfrak a$, and a finite union of proper subspaces cannot exhaust $\mathfrak a$. For such an $H$ one has $Z_{\mathfrak g_0}(H)=\mathfrak g_0^0$, because the eigenvalues of $\operatorname{ad}_H$ on $\mathfrak g_0^\lambda$ are the nonzero numbers $\lambda(H)$. [L4, step 1.1]

3.1 For such a regular $H$ one has $Z_{\mathfrak p_0}(H)=\mathfrak a$: the inclusion $\mathfrak a\subseteq Z_{\mathfrak p_0}(H)$ is clear. If $X\in Z_{\mathfrak p_0}(H)$, step 2.1 puts $X$ in the common zero-weight space $\mathfrak g_0^0$. By the definition of that space in step 1.1, $[A,X]=0$ for every $A\in\mathfrak a$. Thus $\mathfrak a+\mathbb RX$ is an abelian subspace of $\mathfrak p_0$ containing the maximal $\mathfrak a$, hence equals $\mathfrak a$ and $X\in\mathfrak a$. The same argument with $\mathfrak a'$ in place of $\mathfrak a$ produces $H'\in\mathfrak a'$ with $Z_{\mathfrak p_0}(H')=\mathfrak a'$. [step 1.1, step 2.1]

4.1 By compactness of $K$ and continuity of $\operatorname{Ad}$ the function $f(k):=B(\operatorname{Ad}_kH',H)$ attains a minimum at some $k_0\in K$. [L1, L2, step 3.1]

5.1 For every $Z\in\mathfrak k_0$ the smooth function $r\mapsto B(\operatorname{Ad}_{\exp(rZ)}\operatorname{Ad}_{k_0}H',H)$ is minimized at $r=0$, so its derivative vanishes there: with $Y:=\operatorname{Ad}_{k_0}H'\in\mathfrak p_0$ one has $0=B([Z,Y],H)=-B(Y,[Z,H])$ for all $Z\in\mathfrak k_0$, since $B$ is invariant. As $[Y,H]\in[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ and $B$ is nondegenerate on $\mathfrak k_0$, it follows that $[Y,H]=0$. [L1, step 4.1]

6.1 Hence $Y\in Z_{\mathfrak p_0}(H)=\mathfrak a$ by step 3.1, so $\mathfrak a\subseteq Z_{\mathfrak p_0}(Y)$. Since $Z_{\mathfrak p_0}(Y)=\operatorname{Ad}_{k_0}Z_{\mathfrak p_0}(H')=\operatorname{Ad}_{k_0}\mathfrak a'$ by step 3.1 and equivariance of the centralizer, and the right-hand side is abelian, the maximal abelian subspace $\mathfrak a$ equals $\operatorname{Ad}_{k_0}\mathfrak a'$. [step 3.1, step 5.1]

7.1 Finally, if $X\in\mathfrak p_0$, then $\mathbb RX$ lies in a maximal abelian subspace $\mathfrak a''$ of $\mathfrak p_0$ (existence by finite-dimensionality and the ascending chain condition on subspaces), and step 6.1 gives $\mathfrak a''=\operatorname{Ad}_k\mathfrak a$ for some $k\in K$; hence $X\in\bigcup_{k\in K}\operatorname{Ad}_k\mathfrak a$ and $\mathfrak p_0=\bigcup_{k\in K}\operatorname{Ad}_k\mathfrak a$. In particular $\dim\mathfrak a=\dim\mathfrak a'$ for any two maximal abelian subspaces, so the real rank is well defined. [step 6.1, A1, algebra] ∎

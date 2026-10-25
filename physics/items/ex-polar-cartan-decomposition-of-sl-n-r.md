---
id: ex-polar-cartan-decomposition-of-sl-n-r
kind: example
title: Polar cartan decomposition of sl n r
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-axiom-of-choice, ex-general-and-special-linear-lie-groups, ex-orthogonal-and-special-orthogonal-lie-groups, ex-cartan-involution-and-k-plus-p-for-sl-n-r, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, thm-polar-decomposition, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, ex-matrix-exponential-as-the-lie-group-exponential, def-determinant-of-a-square-matrix, cor-determinant-of-an-inverse, cor-determinant-multiplicativity-from-the-top-exterior-power]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31(c) and Remark 1 (polar decomposition of matrices), printed pp. 361-363"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1 and the polar-decomposition example, printed pp. 217-218"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice. Let $n\ge2$ and let
$\mathfrak g_0=\mathfrak{sl}_n(\mathbb R)=\mathfrak k_0\oplus\mathfrak p_0$
be the Cartan decomposition $\theta(X)=-X^{\mathsf T}$ of
[[ex-cartan-involution-and-k-plus-p-for-sl-n-r]], so that
$\mathfrak k_0=\mathfrak{so}(n)$ and
$\mathfrak p_0=\{X\in\mathfrak{sl}_n(\mathbb R):X^{\mathsf T}=X\}$
([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).
Then every $g\in\operatorname{SL}_n(\mathbb R)$ has a unique factorization

$$g=k\exp X,\qquad k\in\operatorname{SO}(n),\qquad X\in\mathfrak p_0,$$

with $\exp$ the matrix exponential; equivalently, the global Cartan
decomposition of $\operatorname{SL}_n(\mathbb R)$ is its polar factorization,
and the multiplication map $\operatorname{SO}(n)\times\mathfrak p_0\to
\operatorname{SL}_n(\mathbb R)$ is a diffeomorphism
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge2$; the Lie group $\operatorname{SL}_n(\mathbb R)$ with Lie algebra $\mathfrak{sl}_n(\mathbb R)$; the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ with $\mathfrak k_0=\mathfrak{so}(n)$ and $\mathfrak p_0$ the symmetric traceless matrices of [[ex-cartan-involution-and-k-plus-p-for-sl-n-r]]; and an element $g\in\operatorname{SL}_n(\mathbb R)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters only through the global Cartan decomposition of [L5] and the smooth structure of $\operatorname{SL}_n(\mathbb R)$.

[L1] $\operatorname{SL}_n(\mathbb R)=\{A:\det A=1\}$ is an embedded Lie subgroup of $\operatorname{GL}_n(\mathbb R)$ with Lie algebra $\mathfrak{sl}_n(\mathbb R)$, and $\operatorname{SO}(n)$ is the determinant-one subgroup of $O(n)$ with Lie algebra $\mathfrak{so}(n)$ ([[ex-general-and-special-linear-lie-groups]], [[ex-orthogonal-and-special-orthogonal-lie-groups]]).

[L2] Every endomorphism $T$ of a finite-dimensional real inner product space has a polar decomposition $T=SU$ with $U=\sqrt{T^{*}T}$ non-negative and $S$ an isometry on the orthogonal complement of $\ker T$; the factor $U$ is unique and $S$ is unique when $T$ is invertible ([[thm-polar-decomposition]]).

[L3] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis with real eigenvalues ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]).

[L4] For a matrix Lie group the Lie-group exponential is the matrix exponential $e^X=\sum_{k\ge0}X^k/k!$ ([[ex-matrix-exponential-as-the-lie-group-exponential]]).

[L5] If $G$ is a connected real semisimple Lie group with finite center and $K=G^{\Theta}$ for a global Cartan involution with differential $\theta$ that fixes $Z(G)$ pointwise, then $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

[L6] Determinant is multiplicative, $\det(A^{-1})=(\det A)^{-1}$, and $\det A\ne0$ exactly when $A$ is invertible ([[cor-determinant-multiplicativity-from-the-top-exterior-power]], [[cor-determinant-of-an-inverse]], [[def-determinant-of-a-square-matrix]]).

[L7] The real algebra $\mathfrak{sl}_n(\mathbb R)$ is semisimple and $\theta(X)=-X^{\mathsf T}$ is its Cartan involution with symmetric traceless anti-fixed space ([[ex-cartan-involution-and-k-plus-p-for-sl-n-r]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).

## Verification

**Proof technique:** direct matrix computation.

1.1 Put $P:=\sqrt{g^{\mathsf T}g}$, the non-negative square root of the self-adjoint positive definite matrix $g^{\mathsf T}g$. By [L3] the matrix $P$ is self-adjoint with an orthonormal eigenbasis and positive eigenvalues $\lambda_1,\dots,\lambda_n>0$, because $g$ is invertible and $\langle g^{\mathsf T}gv,v\rangle=\lVert gv\rVert^2>0$ for $v\ne0$. [given, L2, L3, algebra]

1.2 The group $\operatorname{SO}(n)$ is path connected. For a unit vector $v$, a rotation of the plane spanned by $v,e_1$ sends $v$ to $e_1$ and is joined to the identity by varying its angle. If $v=-e_1$, use a rotation through $\pi$ in the $(e_1,e_2)$ plane; if $v=e_1$, use the identity. For $R\in\operatorname{SO}(n)$ apply this to its first column; after this rotation the matrix is $\operatorname{diag}(1,R')$ with $R'\in\operatorname{SO}(n-1)$. Induction, ending with $\operatorname{SO}(1)=\{1\}$, expresses every $R$ as a product of rotations, each with a path to the identity. [L1, algebra]

2.1 The determinant of $P$ is $1$: $\det(P)^2=\det(P^2)=\det(g^{\mathsf T}g)=\det(g^{\mathsf T})\det(g)=(\det g)^2=1$ by [L6] and $\det g=1$, while $\det P=\lambda_1\cdots\lambda_n>0$ by step 1.1, so $\det P=1$. [step 1.1, L6, algebra]

2.2 Define $X:=\log P$ by the spectral decomposition $P=Q\operatorname{diag}(\lambda_1,\dots,\lambda_n)Q^{\mathsf T}$ with $Q$ orthogonal and $X:=Q\operatorname{diag}(\log\lambda_1,\dots,\log\lambda_n)Q^{\mathsf T}$. Then $X$ is self-adjoint, and $X^k=Q\operatorname{diag}((\log\lambda_1)^k,\dots,(\log\lambda_n)^k)Q^{\mathsf T}$ for every $k\ge0$, so the matrix exponential of [L4] gives $\exp X=Q\operatorname{diag}(\lambda_1,\dots,\lambda_n)Q^{\mathsf T}=P$. [step 1.1, L3, L4, algebra]

3.1 Define $k:=gP^{-1}$, which is well defined because $P$ is invertible with positive eigenvalues. Then $k^{\mathsf T}k=P^{-1}g^{\mathsf T}gP^{-1}=P^{-1}P^2P^{-1}=I$ and $\det k=\det g\det P^{-1}=1$ by [L6], so $k\in\operatorname{SO}(n)$ by [L1]. [step 1.1, step 2.1, L1, L6, algebra]

3.2 The trace of $X$ vanishes: $\operatorname{tr}X=\sum_{i=1}^n\log\lambda_i=\log(\lambda_1\cdots\lambda_n)=\log\det P=0$ by step 2.1, so $X\in\mathfrak p_0$ by [L7]. [L7, step 2.1, step 2.2, algebra]

4.1 Existence: steps 3.1, 2.2 and 3.2 give $g=kP=k\exp X$ with $k\in\operatorname{SO}(n)$ and $X\in\mathfrak p_0$. [step 3.1, step 2.2, step 3.2]

5.1 Define $\Theta(g)=(g^{\mathsf T})^{-1}$ on $G=\operatorname{SL}_n(\mathbb R)$. It is a smooth involutive automorphism, differentiates to $-X^{\mathsf T}$, and has fixed group $\operatorname{SO}(n)$. To compute the center, a central matrix commutes with $I+tE_{ij}\in G$ for every $i\ne j$ and real $t$, hence with every $E_{ij}$. Comparing entries of $zE_{ij}=E_{ij}z$ forces all off-diagonal entries of $z$ to vanish and its diagonal entries to be equal. Thus $z=\lambda I$ with real $\lambda^n=1$, so the center consists of $I$ and, only when $n$ is even, $-I$. It is finite and fixed pointwise by $\Theta$. Semisimplicity and the Cartan differential are [L7]. Finally, $G$ is path connected without assuming the global theorem: by step 4.1, $g=k\exp X$, and $t\mapsto k\exp(tX)$ joins $k$ to $g$ inside $G$, since diagonalization gives $\det\exp(tX)=\exp(t\operatorname{tr}X)=1$. Step 1.2 joins $I$ to $k$. Every hypothesis of [L5] is therefore established. [L1, L3, L4, L5, L7, step 1.2, step 4.1, algebra]

5.2 Uniqueness: suppose $g=k\exp X=k'\exp X'$ with $k,k'\in\operatorname{SO}(n)$ and $X,X'\in\mathfrak p_0$. Both $\exp X$ and $\exp X'$ are self-adjoint positive definite, since the eigenvalues of $X$ and $X'$ are real by self-adjointness and exponentiate to positive numbers, and both $k,k'$ are orthogonal. By the uniqueness clause of [L2] for the invertible element $g$ the non-negative factor is unique, so $\exp X=\exp X'=P$ and $k=k'$; then $X=X'$ because the self-adjoint logarithm is unique: both $X$ and $X'$ commute with $P=\exp X=\exp X'$, hence preserve each eigenspace of $P$, and on the eigenspace for the eigenvalue $\lambda>0$ the equality $e^{X}=e^{X'}=\lambda I$ forces every eigenvalue of the self-adjoint operator $X|_{E_\lambda}$ to lie in $\log\lambda+2\pi i\mathbb Z$, hence to equal the real number $\log\lambda$. [step 3.1, step 2.2, step 4.1, L2, L3, algebra]

6.1 Consequently the map $\operatorname{SO}(n)\times\mathfrak p_0\to\operatorname{SL}_n(\mathbb R)$, $(k,X)\mapsto k\exp X$, is a bijection by steps 4.1 and 5.2 and a diffeomorphism by [L5] applied as in step 5.1; its inverse is $g\mapsto(gP^{-1},\log P)$ with $P=\sqrt{g^{\mathsf T}g}$. [step 4.1, step 5.2, step 5.1, L5, L2]

7.1 The argument includes repeated eigenvalues, since the logarithm is scalar on each positive eigenspace. The zero logarithm gives the orthogonal elements of $G$. Although $n\ge2$ is the stated scope, at $n=1$ both factors and the group are singletons. More generally the orthogonal polar factor is special orthogonal whenever $\det g>0$, since $\det P=|\det g|$; the stronger condition $\det g=1$ additionally makes $\operatorname{tr}\log P=0$. AC covers the cited Lie-group and global Cartan interfaces; no arbitrary eigenbasis selection over an indexed family is needed in the finite matrix calculations. [A1, L6, step 6.1, algebra] ∎

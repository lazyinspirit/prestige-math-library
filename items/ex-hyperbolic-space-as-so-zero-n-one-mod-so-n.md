---
id: ex-hyperbolic-space-as-so-zero-n-one-mod-so-n
kind: example
title: Hyperbolic space as so zero n one mod so n
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group, def-riemannian-symmetric-pair-of-noncompact-type, prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k, thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space, def-axiom-of-choice, def-sectional-curvature, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra, thm-cartans-semisimplicity-criterion, ex-orthogonal-and-special-orthogonal-lie-groups, ex-general-and-special-linear-lie-groups, thm-cartans-closed-subgroup-theorem, thm-heine-borel-rn, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, def-homogeneous-space-of-a-lie-group, thm-quotient-manifold-by-a-closed-lie-subgroup, ex-matrix-exponential-as-the-lie-group-exponential, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31 and the description of G/K with its invariant metric and curvature, printed pp. 361-368; Chapter VI, §4, Example 3 for so(p,q), printed p. 373"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §§43.1-43.6, printed pp. 217-222"
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice and let $n\ge2$. Write
$\langle v,w\rangle=\sum_{i=1}^nv_iw_i-v_{n+1}w_{n+1}$ for the Lorentz form on
$\mathbb R^{n+1}$, let

$$H^n=\{v\in\mathbb R^{n+1}:\langle v,v\rangle=-1,\ v_{n+1}>0\}$$

be the upper sheet of the hyperboloid, and let
$G=\operatorname{SO}_0(n,1)$ be the identity component of the group of
$J$-preserving matrices, $J=\operatorname{diag}(I_n,-1)$. Then
$K=\operatorname{SO}(n)$ is a maximal compact subgroup of $G$ and the orbit
map induces a diffeomorphism $G/K\to H^n$; under it the Cartan metric of
[[def-riemannian-symmetric-pair-of-noncompact-type]] is a $G$-invariant
Riemannian metric on real hyperbolic $n$-space of constant sectional
curvature $-1/(2(n-1))$; equivalently the Cartan metric is $2(n-1)$ times the
standard normalization of curvature $-1$, namely the metric
$(2(n-1))^{-1}B_\theta$
([[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]],
[[thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge2$; the Lorentz form $\langle\cdot,\cdot\rangle$ with matrix $J$; the groups $O(n,1)=\{A\in\operatorname{GL}_{n+1}(\mathbb R):A^{\mathsf T}JA=J\}$, $\operatorname{SO}(n,1)=O(n,1)\cap\operatorname{SL}_{n+1}(\mathbb R)$ and its identity component $G=\operatorname{SO}_0(n,1)$; the hyperboloid $H^n$ and its point $e_0=(0,\dots,0,1)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the closed-subgroup theorem, the quotient-manifold structure and the global Cartan decomposition used below.

[L1] Every closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup; $\operatorname{GL}_{n+1}(\mathbb R)$ is a Lie group with Lie algebra $M_{n+1}(\mathbb R)$; and $\operatorname{SO}(n)=\{R:R^{\mathsf T}R=I,\ \det R=1\}$ is a closed subgroup with Lie algebra $\mathfrak{so}(n)=\{X:X^{\mathsf T}+X=0\}$ ([[thm-cartans-closed-subgroup-theorem]], [[ex-general-and-special-linear-lie-groups]], [[ex-orthogonal-and-special-orthogonal-lie-groups]]). Closed and bounded subsets of a finite-dimensional real matrix space are compact by [[thm-heine-borel-rn]].

[L2] A regular level set of a smooth map is an embedded submanifold whose tangent space at a point is the kernel of the differential ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[L3] The Killing form is $B(X,Y)=\operatorname{tr}(\operatorname{ad}_X\operatorname{ad}_Y)$, and a finite-dimensional characteristic-zero Lie algebra is semisimple exactly when its Killing form is nondegenerate ([[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[thm-cartans-semisimplicity-criterion]]).

[L4] For a Riemannian symmetric pair $(G,K)$ of noncompact type with Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, the form $B_\theta$ defines a $G$-invariant Riemannian metric on $G/K$ with value $B_\theta$ at the origin, the curvature at the origin is $R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack$ for $X,Y,Z\in\mathfrak p_0$, and the sectional curvature of a plane with basis $X,Y\in\mathfrak p_0$ is $\operatorname{Rm}(X,Y,Y,X)/(B_\theta(X,X)B_\theta(Y,Y)-B_\theta(X,Y)^2)$; moreover $G/K$ is diffeomorphic to $\mathfrak p_0$ by $X\mapsto\exp(X)K$ ([[def-riemannian-symmetric-pair-of-noncompact-type]], [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]], [[thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space]], [[def-sectional-curvature]]).

[L5] $G/K$ carries the unique smooth structure making the quotient map a submersion and the left $G$-action smooth, and the orbit map $G/K\to H^n$, $gK\mapsto g\cdot e_0$, is smooth and $G$-equivariant ([[def-homogeneous-space-of-a-lie-group]], [[thm-quotient-manifold-by-a-closed-lie-subgroup]]).

[L6] The matrix exponential is the Lie-group exponential of a matrix group, and the exponential map carries a neighborhood of $0$ diffeomorphically onto a neighborhood of the identity ([[ex-matrix-exponential-as-the-lie-group-exponential]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]). Consequently the subgroup $H$ generated by $\exp(\mathfrak g)$ is the identity component: $H$ contains an open identity neighborhood and is therefore an open subgroup, while every path $t\mapsto\exp(tX)$ lies in the identity component, so $H\subseteq G^0$; the cosets of $H$ make both $H$ and its complement open in the connected group $G^0$, forcing $H=G^0$.


[L7] For a connected real semisimple Lie group with finite center and a global Cartan involution, its fixed subgroup is maximal compact ([[cor-maximal-compact-subgroups-exist-and-are-conjugate-in-a-connected-finite-center-semisimple-lie-group]]).

## Verification

**Proof technique:** direct matrix computation.

1.1 The group $O(n,1)$ is closed in $\operatorname{GL}_{n+1}(\mathbb R)$, so [L1] makes it an embedded Lie subgroup. Differentiating $A^{\mathsf T}JA=J$ gives $X^{\mathsf T}J+JX=0$; conversely this condition implies $\exp(tX)^{\mathsf T}J\exp(tX)=J$ by differentiation in $t$, so it characterizes the Lie algebra. It consists of $\begin{pmatrix}A&b\\b^{\mathsf T}&0\end{pmatrix}$ with $A^{\mathsf T}=-A$. Determinant has values $\pm1$ on $O(n,1)$, hence equals $1$ on its identity component $G$. This component has the same Lie algebra. Write $X_b=\begin{pmatrix}0&b\\b^{\mathsf T}&0\end{pmatrix}$ and $K_{ij}=E_{ij}-E_{ji}$ for $i<j\le n$. [L1, L6, algebra]

1.2 The level function $F(v)=\langle v,v\rangle$ has differential $dF_v(w)=2\langle v,w\rangle$, nonzero at every $F(v)=-1$. Thus [L2] gives tangent space $v^\perp$ and dimension $n$. The upper sheet is the graph $v=(u,\sqrt{1+|u|^2})$, hence connected. Its Lorentz tangent metric is positive: if $w=(a,b)\in v^\perp$, then $b=u\cdot a/\sqrt{1+|u|^2}$ and $\langle w,w\rangle\ge |a|^2/(1+|u|^2)>0$ for $w\ne0$. Every $g\in G$ preserves this sheet, since the sign of the last coordinate of $gv$ cannot change continuously on connected $G$. [L2, algebra]

1.3 The group $\operatorname{SO}(n)$ is compact, being closed and bounded in matrix space and hence compact by Heine--Borel in [L1], and is path connected: plane rotations can carry any unit first column to the first coordinate vector; after doing so the remaining block is in $\operatorname{SO}(n-1)$, and induction ends with $\operatorname{SO}(1)=\{1\}$. Each plane rotation has a path to the identity through its angle. Therefore $K=\{\operatorname{diag}(R,1):R\in\operatorname{SO}(n)\}$ lies in $G$. [L1, algebra]

2.1 The basis $K_{ij},X_i:=X_{e_i}$ satisfies $[K_{ij},X_l]=\delta_{jl}X_i-\delta_{il}X_j$ and $[X_i,X_j]=K_{ij}$ for $i<j$. For fixed $K_{ij}$, its adjoint square is $-I$ on each two-dimensional span of the rotations joining $i,j$ to a third spatial index, and on $\operatorname{span}(X_i,X_j)$; it vanishes on the remaining basis vectors. Its trace is $-2(n-2)-2=-2(n-1)$. For fixed $X_i$, its adjoint square is $+I$ on each span of $X_j$ and the rotation joining $i,j$ ($j\ne i$), and zero on the rest, giving trace $2(n-1)$. Mixed Killing pairings of different basis vectors vanish: conjugation by $\operatorname{diag}(\epsilon_1,\ldots,\epsilon_n,1)$, $\epsilon_i=\pm1$, is a Lie-algebra automorphism, preserves the adjoint trace, and acts with distinct sign characters $\epsilon_i\epsilon_j$ on $K_{ij}$ and $\epsilon_i$ on $X_i$. A sign choice therefore negates any mixed pairing while preserving it. This proves on the whole basis, hence bilinearly, $B(X,Y)=(n-1)\operatorname{tr}(XY)$. It is nondegenerate for every $n\ge2$, including $n=3$, so [L3] proves semisimplicity. The involution $\theta X=-X^{\mathsf T}$ has eigenspaces $\mathfrak k=\operatorname{span}(K_{ij})$ and $\mathfrak p=\{X_b\}$, with $B_\theta(X,X)=(n-1)\operatorname{tr}(XX^{\mathsf T})>0$ for $X\ne0$. Since $[\mathfrak p,\mathfrak p]=\mathfrak k$, no proper ideal contains $\mathfrak p$, so the noncompact-type criterion of [L4] is satisfied. [L3, L4, step 1.1, algebra]

2.2 The action is transitive: for $v=(u,\sqrt{1+|u|^2})$ with $u\ne0$, put $a=u/|u|$ and $t\ge0$ with $\sinh t=|u|$. The matrix exponential gives $\exp(tX_a)e_0=(\sinh t\,a,\cosh t)=v$ and belongs to $G$; $v=e_0$ uses the identity. The stabilizer of $e_0$ consists exactly of $\operatorname{diag}(R,1)$ with $R\in\operatorname{SO}(n)$, since it preserves $e_0^\perp$ and determinant one; these matrices are in $G$ by step 1.3. Thus it is $K$. [L6, step 1.1, step 1.2, step 1.3, algebra]

3.1 The smooth orbit map factors through the quotient submersion to a smooth bijection $\Phi:G/K\to H^n$ by [L5] and step 2.2. Its derivative at $eK$, using $\mathfrak g/\mathfrak k\cong\mathfrak p$, is $X_b\mapsto(b,0)$, an isomorphism. Equivariance makes the derivative an isomorphism everywhere, so the inverse function theorem gives a local diffeomorphism everywhere; a bijective local diffeomorphism has a smooth inverse. [L5, step 2.1, step 2.2, algebra]

3.2 The center of $G$ is trivial. If $z$ is central, $ze_0$ is fixed by $K$; the only spatial vector fixed by all spatial rotations for $n\ge2$ is zero. Since $ze_0\in H^n$, it equals $e_0$, so $z=\operatorname{diag}(R,1)\in K$. Commuting with every $\exp(tX_b)$ and differentiating forces $Rb=b$ for every $b$, hence $z=I$. The group automorphism $\Theta(g)=(g^{\mathsf T})^{-1}=JgJ$ preserves $G$, is involutive and differentiates to $\theta$. Its fixed elements lie in both $O(n+1)$ and $O(n,1)$, hence commute with $J$ and have block form $\operatorname{diag}(R,c)$; the upper-sheet condition gives $c=1$ and determinant one gives $R\in\operatorname{SO}(n)$. Thus $G^\Theta=K$. Together with step 2.1 this verifies all hypotheses of the symmetric-pair interface [L4]. [L4, step 2.1, step 2.2, algebra]

4.1 Step 3.2 proves that $G$ is connected semisimple with finite center, that $\Theta$ is a global Cartan involution, and that $G^\Theta=K$. Therefore [L7] applies directly and makes $K$ maximal compact. [L7, step 3.2]

4.2 The metric of [L4] is now applicable by step 3.2. At the origin $B_\theta(X_a,X_b)=B(X_a,X_b)=2(n-1)a\cdot b$ by step 2.1. Under $d\Phi$, the Lorentz metric is $a\cdot b$. Both metrics are $G$-invariant, so the Cartan metric is $2(n-1)$ times the Lorentz metric everywhere. For independent $a,b$ let $D=|a|^2|b|^2-(a\cdot b)^2>0$. The bracket is $[X_a,X_b]=\operatorname{diag}(ab^{\mathsf T}-ba^{\mathsf T},0)$, whose squared $B_\theta$-norm is $2(n-1)D$, while the Gram determinant of $X_a,X_b$ is $4(n-1)^2D$. The sectional formula in [L4] therefore gives $-1/(2(n-1))$ at the origin and, by transitivity, everywhere. [L4, step 2.1, step 3.1, step 3.2, algebra]

5.1 Scaling a metric by a constant $c>0$ preserves its Levi-Civita connection and its curvature operator of type $(1,3)$: the same connection remains torsion free and metric compatible. The sectional numerator scales by $c$ and its Gram denominator by $c^2$. Thus $(2(n-1))^{-1}B_\theta$, the Lorentz metric from step 4.2, has curvature $-1$. At $n=2$ the Cartan curvature is $-1/2$; at $n=3$ the direct trace proof remains valid. Rank $n=1$ is excluded because the algebra is abelian with zero Killing form and there are no tangent two-planes. AC covers the Lie-group, quotient, maximal-compact and symmetric-space interfaces; the finite matrix computations require no further choice. [A1, L4, step 4.2, algebra] ∎

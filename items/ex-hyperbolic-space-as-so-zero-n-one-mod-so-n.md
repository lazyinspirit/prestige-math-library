---
id: ex-hyperbolic-space-as-so-zero-n-one-mod-so-n
kind: example
title: Hyperbolic space as so zero n one mod so n
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-riemannian-symmetric-pair-of-noncompact-type, prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k, thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space, def-axiom-of-choice, def-sectional-curvature, def-cartan-involution-of-a-real-semisimple-lie-algebra, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-killing-form-of-a-finite-dimensional-lie-algebra, ex-classical-simple-lie-algebras-and-their-killing-forms, prop-complexification-preserves-semisimplicity, ex-orthogonal-and-special-orthogonal-lie-groups, ex-general-and-special-linear-lie-groups, thm-cartans-closed-subgroup-theorem, thm-a-regular-level-set-is-an-embedded-submanifold, prop-tangent-space-of-a-regular-level-set-is-the-kernel, def-homogeneous-space-of-a-lie-group, thm-quotient-manifold-by-a-closed-lie-subgroup, ex-matrix-exponential-as-the-lie-group-exponential, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]
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

[L1] Every closed subgroup of a finite-dimensional real Lie group is an embedded Lie subgroup with Lie algebra $\{X:\exp(tX)\in H\text{ for all }t\}$, $\operatorname{GL}_{n+1}(\mathbb R)$ is a Lie group with Lie algebra $M_{n+1}(\mathbb R)$, and $\operatorname{SO}(n)=\{R:R^{\mathsf T}R=I,\ \det R=1\}$ is a closed connected subgroup with Lie algebra $\mathfrak{so}(n)=\{X:X^{\mathsf T}+X=0\}$ ([[thm-cartans-closed-subgroup-theorem]], [[ex-general-and-special-linear-lie-groups]], [[ex-orthogonal-and-special-orthogonal-lie-groups]]).

[L2] A regular level set of a smooth map is an embedded submanifold whose tangent space at a point is the kernel of the differential ([[thm-a-regular-level-set-is-an-embedded-submanifold]], [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]]).

[L3] The Killing form of $\mathfrak{so}_m$ is $(m-2)\operatorname{tr}(XY)$ for $m=3$ or $m\ge5$, and also for $m=4$; it is nondegenerate in these ranges, so $\mathfrak{so}_m(\mathbb C)$ is semisimple, and complexification preserves semisimplicity ([[ex-classical-simple-lie-algebras-and-their-killing-forms]], [[def-killing-form-of-a-finite-dimensional-lie-algebra]], [[prop-complexification-preserves-semisimplicity]]).

[L4] For a Riemannian symmetric pair $(G,K)$ of noncompact type with Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, the form $B_\theta$ defines a $G$-invariant Riemannian metric on $G/K$ with value $B_\theta$ at the origin, the curvature at the origin is $R(X,Y)Z=-\lbrack\lbrack X,Y\rbrack,Z\rbrack$ for $X,Y,Z\in\mathfrak p_0$, and the sectional curvature of a plane with basis $X,Y\in\mathfrak p_0$ is $\operatorname{Rm}(X,Y,Y,X)/(B_\theta(X,X)B_\theta(Y,Y)-B_\theta(X,Y)^2)$; moreover $G/K$ is diffeomorphic to $\mathfrak p_0$ by $X\mapsto\exp(X)K$ ([[def-riemannian-symmetric-pair-of-noncompact-type]], [[prop-cartan-decomposition-gives-the-invariant-metric-and-curvature-of-g-mod-k]], [[thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space]], [[def-sectional-curvature]]).

[L5] $G/K$ carries the unique smooth structure making the quotient map a submersion and the left $G$-action smooth, and the orbit map $G/K\to H^n$, $gK\mapsto g\cdot e_0$, is smooth and $G$-equivariant ([[def-homogeneous-space-of-a-lie-group]], [[thm-quotient-manifold-by-a-closed-lie-subgroup]]).

[L6] The matrix exponential is the Lie-group exponential of a matrix group, and the subgroup generated by the image of the exponential map is the identity component of the group ([[ex-matrix-exponential-as-the-lie-group-exponential]], [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]]).





**Proof technique:** direct matrix computation.

1.1 The group $O(n,1)$ is closed in $\operatorname{GL}_{n+1}(\mathbb R)$, because $A\mapsto A^{\mathsf T}JA-J$ is continuous and $\{0\}$ is closed, so by [L1] it is an embedded Lie subgroup of $\operatorname{GL}_{n+1}(\mathbb R)$; differentiating the identity $A(t)^{\mathsf T}JA(t)=J$ along a curve with $A(0)=I$ shows that its Lie algebra is $\mathfrak{so}(n,1)=\{X\in M_{n+1}(\mathbb R):X^{\mathsf T}J+JX=0\}$. Writing $X=\begin{pmatrix}A&b\\ c^{\mathsf T}&d\end{pmatrix}$ with $A$ an $n\times n$ block, $b,c\in\mathbb R^n$ and $d\in\mathbb R$, the condition $X^{\mathsf T}J+JX=0$ is equivalent to $A^{\mathsf T}+A=0$, $b=c$ and $d=0$; hence $\mathfrak{so}(n,1)=\left\{\begin{pmatrix}A&b\\ b^{\mathsf T}&0\end{pmatrix}:A\in\mathfrak{so}(n),\ b\in\mathbb R^n\right\}$. [given, L1, algebra]

1.2 The hyperboloid is a submanifold tangent to $e_0^\perp$: the map $F(v)=\langle v,v\rangle$ is smooth with differential $dF_v(w)=2\langle v,w\rangle$, which is nonzero at every point of $F^{-1}(-1)$; hence $F^{-1}(-1)$ is an embedded submanifold of dimension $n$ by [L2], with tangent space $v^{\perp}$ at $v$. On the level set one has $v_{n+1}^2=1+\sum_{i\le n}v_i^2\ge1$, so the two sheets $v_{n+1}\ge1$ and $v_{n+1}\le-1$ are separated, and $H^n$ is the component with $v_{n+1}\ge1$. In particular $T_{e_0}H^n=e_0^{\perp}=\mathbb R^n\times\{0\}$ and $\langle\cdot,\cdot\rangle$ is positive definite there, so it restricts to a Riemannian metric on $H^n$. [given, L2, algebra]

2.1 The map $\theta(X)=-X^{\mathsf T}$ is a Cartan involution of $\mathfrak{so}(n,1)$ with $\mathfrak k_0=\mathfrak{so}(n)$ and $\mathfrak p_0=\left\{X_b=\begin{pmatrix}0&b\\ b^{\mathsf T}&0\end{pmatrix}:b\in\mathbb R^n\right\}$: for $X$ as in step 1.1, $-X^{\mathsf T}=\begin{pmatrix}A&-b\\ -b^{\mathsf T}&0\end{pmatrix}$ lies in $\mathfrak{so}(n,1)$, and $\theta^2=\mathrm{id}$; the Killing form is $B(X,Y)=(n-1)\operatorname{tr}(XY)$ by [L3] (with $m=n+1$ and the identification of $\mathfrak{so}(n,1)_{\mathbb C}$ with $\mathfrak{so}_{n+1}(\mathbb C)$), so $B_\theta(X,X)=-B(X,\theta X)=B(X,X^{\mathsf T})=(n-1)\operatorname{tr}(XX^{\mathsf T})>0$ for $X\ne0$; the fixed and anti-fixed subspaces are the block diagonal matrices, that is $\mathfrak{so}(n)$, and the matrices $X_b$. [step 1.1, L3, algebra]

2.2 The group $G$ preserves $H^n$, and the image of the exponential generates $G$: for any $X\in\mathfrak{so}(n,1)$ the element $\exp(tX)$ lies in $O(n,1)$ and therefore preserves the form, so the curve $t\mapsto\exp(tX)e_0$ lies in the level set $F^{-1}(-1)$; it is connected with value $e_0$ at $t=0$, hence lies in the upper sheet by step 1.2, so $\exp(X)H^n\subseteq H^n$ for the generating elements. By [L6] the image of the exponential map contains an open neighbourhood of the identity, so the subgroup it generates is open in $G$ and, an open subgroup being also closed, equals the identity component $G$; hence $G$ preserves $H^n$. [step 1.1, step 1.2, L6, algebra]

3.1 The action of $G$ on $H^n$ is transitive: every $v\in H^n$ has $v_{n+1}=\cosh t\ge1$ for a unique $t\ge0$ and spatial part $\sinh t\cdot u$ with $u\in S^{n-1}$, and for $X_u=\begin{pmatrix}0&u\\ u^{\mathsf T}&0\end{pmatrix}\in\mathfrak p_0$ the exponential series gives $X_u^2=\begin{pmatrix}uu^{\mathsf T}&0\\ 0&\lVert u\rVert^2\end{pmatrix}$ and $\exp(tX_u)e_0=\cosh t\,e_0+\sinh t\,(u,0)=v$, where the last vector lies in $H^n$; the element $\exp(tX_u)$ lies in $G$ by [L6]. For $t=0$, $v=e_0$. [step 2.1, step 2.2, L6, algebra]

3.2 The stabilizer of $e_0$ in $G$ is $K=\operatorname{SO}(n)$: an element $A\in G$ with $Ae_0=e_0$ preserves the orthogonal complement $e_0^{\perp}$ and the form, so $A=\begin{pmatrix}R&0\\ 0&1\end{pmatrix}$ with $R\in O(n)$, and $\det A=\det R=1$ gives $R\in\operatorname{SO}(n)$; conversely each such matrix lies in $G$ and fixes $e_0$. [step 2.2, L1, algebra]

4.1 The orbit map induces a diffeomorphism: by steps 3.1 and 3.2 the map $\Phi:G/K\to H^n$, $gK\mapsto ge_0$, is a well-defined smooth $G$-equivariant bijection by [L5]; its differential at the origin is the isomorphism $\mathfrak p_0\to T_{e_0}H^n$, $X_b\mapsto X_be_0=(b,0)$, which is onto $e_0^{\perp}$ by step 1.2, so $\Phi$ is a local diffeomorphism at the origin and, by equivariance and transitivity of each action, at every point; a bijective local diffeomorphism is a diffeomorphism. [step 1.2, step 3.1, step 3.2, L5, algebra]

4.2 The center of $G$ is trivial, hence finite: if $z\in G$ is central, then commuting with the block-diagonal elements $R\oplus1$, $R\in\operatorname{SO}(n)$, forces $z=\begin{pmatrix}A&0\\ 0&c\end{pmatrix}$ with $A$ commuting with all of $\operatorname{SO}(n)$ and the mixed blocks zero; for $n\ge3$ this gives $A=\lambda I$ and for $n=2$ it gives $A=\alpha I+\beta J_2$, and in both cases $z^{\mathsf T}Jz=J$ together with commutation with the boosts $X_u$ forces $A$ to be a scalar multiple of the identity, say $A=cI$, with $c^2=1$. Thus $z=\pm I$, and $-I\notin G$ because $-Ie_0=-e_0$ lies in the lower sheet, so the center is $\{I\}$. [step 2.1, step 3.2, algebra]

5.1 Under this identification the Cartan metric is $2(n-1)$ times the Lorentz metric: by [L4] the metric at the origin on $\mathfrak p_0$ is $B_\theta$, and for $a,b\in\mathbb R^n$ one computes $B_\theta(X_a,X_b)=-B(X_a,\theta X_b)=B(X_a,X_b)=(n-1)\operatorname{tr}(X_aX_b)=2(n-1)(a\cdot b)=2(n-1)\langle(a,0),(b,0)\rangle$, using $X_aX_b=\begin{pmatrix}ab^{\mathsf T}&0\\ 0&a^{\mathsf T}b\end{pmatrix}$ and step 2.1. Both metrics are $G$-invariant, the Lorentz metric because every element of $O(n,1)$ preserves the form by definition, and a $G$-invariant metric on a homogeneous $G$-space is determined by its value at a single point through the differential of the action; hence the equality of the two values at $e_0$ extends to all of $H^n$. [step 2.1, step 4.1, L4, L5, algebra]

6.1 The Cartan metric has constant negative curvature: for independent $a,b\in\mathbb R^n$ the commutator is $\lbrack X_a,X_b\rbrack=T$ with $T=\begin{pmatrix}ab^{\mathsf T}-ba^{\mathsf T}&0\\ 0&0\end{pmatrix}\in\mathfrak k_0$, and $B_\theta(T,T)=-B(T,T)=-(n-1)\operatorname{tr}(T^2)=2(n-1)(\lVert a\rVert^2\lVert b\rVert^2-(a\cdot b)^2)$, while $B_\theta(X_a,X_a)B_\theta(X_b,X_b)-B_\theta(X_a,X_b)^2=4(n-1)^2(\lVert a\rVert^2\lVert b\rVert^2-(a\cdot b)^2)$ by step 5.1; substituting into the curvature formula of [L4] with the identity $B_\theta(\lbrack X,Y\rbrack,Y\rbrack,X)=B_\theta([X,Y],[X,Y])$ for $X,Y\in\mathfrak p_0$ gives sectional curvature $-2(n-1)(\lVert a\rVert^2\lVert b\rVert^2-(a\cdot b)^2)$ divided by $4(n-1)^2(\lVert a\rVert^2\lVert b\rVert^2-(a\cdot b)^2)$, that is $-1/(2(n-1))$ for every two-plane. [step 5.1, L4, algebra]

7.1 The value is independent of the point by $G$-invariance of the metric and transitivity of the action, so the Cartan metric on $G/K\cong H^n$ has constant sectional curvature $-1/(2(n-1))$. Replacing the metric by the positive multiple $\lambda B_\theta$ leaves the connection and the curvature tensor unchanged and multiplies the Gram determinant in the curvature formula by $\lambda^2$ while the pairing of the curvature tensor with the metric is multiplied by $\lambda$, so the sectional curvature of $\lambda B_\theta$ is $-1/(2(n-1)\lambda)$; for $\lambda=1/(2(n-1))$ this is $-1$. Hence $B_\theta$ is $2(n-1)$ times the standard metric of constant curvature $-1$ on real hyperbolic $n$-space, as computed at the base point in step 5.1. [step 5.1, step 6.1, L4, L5, algebra]

8.1 Endpoints and scope: for $n=1$ the algebra $\mathfrak{so}(1,1)$ is one-dimensional abelian and not semisimple, so it is excluded, while for $n\ge2$ the algebra $\mathfrak{so}(n,1)$ is semisimple by steps 1.1 and 2.1 and [L3], and by step 4.2 the group $G$ has finite center; for $n=2$ one has $\mathfrak{so}(2,1)\cong\mathfrak{sl}_2(\mathbb R)$ and the space $H^2$ is the hyperbolic plane, with Cartan curvature $-1/2$ and standard curvature $-1$. The axiom of choice is inherited through [L4] and [L5] and the closed-subgroup theorem, and no further choice is made in the finite matrix computations. [given, step 1.1, step 4.2, step 7.1, A1, algebra] ∎

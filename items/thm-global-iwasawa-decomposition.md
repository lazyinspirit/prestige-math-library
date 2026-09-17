---
id: thm-global-iwasawa-decomposition
kind: theorem
title: Global iwasawa decomposition
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, thm-iwasawa-decomposition-on-the-lie-algebra-level, def-positive-restricted-roots-and-nilpotent-n-algebra, thm-restricted-root-space-decomposition, thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism, thm-lie-subgroup-lie-subalgebra-correspondence, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §4, Lemmas 6.44 and 6.45 and Theorem 6.46 with its proof, printed pp. 373-376"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center, let $\Theta$ be a global Cartan involution of $G$ with
fixed group $K=G^{\Theta}$, and let $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
be the Cartan decomposition attached to $\theta_*=d\Theta_e$, so that
$K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism and
$K$ is compact
([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).
Let $\mathfrak a\subseteq\mathfrak p_0$ be a maximal abelian subspace, let
$\Sigma^+$ be a positive system of the restricted-root system $\Sigma$, and let
$\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$ be the
associated nilpotent subalgebra
([[def-positive-restricted-roots-and-nilpotent-n-algebra]]). Put
$$A=\exp(\mathfrak a),\qquad N=\text{the connected subgroup of }G\text{ with Lie algebra }\mathfrak n .$$
Then the multiplication map
$$K\times A\times N\longrightarrow G,\qquad (k,a,n)\longmapsto kan ,$$
is a diffeomorphism onto $G$. Moreover $A$ and $N$ are simply connected closed
subgroups of $G$ with Lie algebras $\mathfrak a$ and $\mathfrak n$, and
$N$ is the exponential image $\exp(\mathfrak n)$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected semisimple Lie group $G$ with finite center $Z=Z(G)$, global Cartan involution $\Theta$, $K=G^{\Theta}$, the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ with $\theta_*=d\Theta_e$, a maximal abelian $\mathfrak a\subseteq\mathfrak p_0$, a positive system $\Sigma^+$, the nilpotent subalgebra $\mathfrak n=\bigoplus_{\lambda\in\Sigma^+}\mathfrak g_0^\lambda$, and $A=\exp(\mathfrak a)$, $N=\exp(\mathfrak n)$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the global Cartan decomposition of [L1] and through the Lie-algebra decomposition of [L2].

[L1] $K$ is a closed compact subgroup of $G$ with Lie algebra $\mathfrak k_0$, $\Theta$ fixes $Z$ pointwise so $Z\subseteq K$, and $(k,X)\mapsto k\exp X$ is a diffeomorphism $K\times\mathfrak p_0\to G$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).

[L2] $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak a\oplus\mathfrak n$ is a vector-space direct sum, $\mathfrak a$ is abelian, $\mathfrak n$ is nilpotent, $\mathfrak a\oplus\mathfrak n$ is a solvable subalgebra with $[\mathfrak a\oplus\mathfrak n,\mathfrak a\oplus\mathfrak n]=\mathfrak n$, and $[\mathfrak a,\mathfrak n]=\mathfrak n$ ([[thm-iwasawa-decomposition-on-the-lie-algebra-level]], [[def-positive-restricted-roots-and-nilpotent-n-algebra]]).

[L3] $\mathfrak g_0=\mathfrak g_0^0\oplus\bigoplus_{\lambda\in\Sigma}\mathfrak g_0^\lambda$ with $\mathfrak g_0^0=\mathfrak a\oplus\mathfrak m$, $[\mathfrak g_0^\lambda,\mathfrak g_0^\mu]\subseteq\mathfrak g_0^{\lambda+\mu}$, $\theta\mathfrak g_0^\lambda=\mathfrak g_0^{-\lambda}$, and $B_\theta$ is a positive definite inner product on $\mathfrak g_0$ for which $\operatorname{ad}X$ is skew for $X\in\mathfrak k_0$ ([[thm-restricted-root-space-decomposition]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L4] For a connected simply connected nilpotent Lie group the exponential map is a diffeomorphism ([[thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism]]); closed subgroups of $G$ are embedded Lie subgroups whose Lie algebra is $\{X:\exp(tX)\in H$ for all $t\}$, and connected subgroups with equal Lie algebras coincide ([[thm-lie-subgroup-lie-subalgebra-correspondence]]).

[L5] For a semisimple Lie algebra every derivation is inner, $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}(\mathfrak g_0)$, and $\operatorname{Aut}(\mathfrak g_0)$ is a closed Lie subgroup of $\operatorname{GL}(\mathfrak g_0)$ with Lie algebra $\operatorname{Der}(\mathfrak g_0)$ ([[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]], [[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 Consequences of the global Cartan decomposition of [L1]: $\exp|_{\mathfrak p_0}$ is injective with inverse the second coordinate of the diffeomorphism, $Z\subseteq K$, and $K\cap\exp(\mathfrak p_0)=\{1\}$, because $k=\exp X$ forces $k\exp 0=\exp X$ and uniqueness of the factorization gives $k=1$ and $X=0$; moreover the adjoint group $\operatorname{Ad}(G)$ is a connected subgroup of $\operatorname{GL}(\mathfrak g_0)$ with Lie algebra $\operatorname{ad}(\mathfrak g_0)$, so by [L5] it equals the identity component $\operatorname{Aut}(\mathfrak g_0)^0$ and is closed in $\operatorname{GL}(\mathfrak g_0)$. [L1, L4, L5, algebra]

1.2 Adapted basis: fix a regular $H_0\in\mathfrak a$ with $\lambda(H_0)>0$ for all $\lambda\in\Sigma^+$, and choose an orthonormal basis of $\mathfrak g_0$ for $B_\theta$ consisting of joint eigenvectors of the commuting family $\{\operatorname{ad}H:H\in\mathfrak a\}$, listed in non-increasing order of the value $\lambda(H_0)$, that is, with the root vectors of $\Sigma^+$ first, then the vectors of $\mathfrak g_0^0$, then the root vectors of $\Sigma^-$, each block ordered so that $\lambda(H_0)$ decreases; then the matrices of $\operatorname{ad}\mathfrak k_0$ are skew, those of $\operatorname{ad}\mathfrak a$ are diagonal with real entries, and those of $\operatorname{ad}\mathfrak n$ are strictly upper triangular: indeed $\operatorname{ad}\mathfrak n$ is upper triangular because a nonzero matrix entry from $\mathfrak g_0^{\lambda_j}$ to $\mathfrak g_0^{\lambda_i}$ requires $\lambda_i=\lambda_j+\lambda$ with $\lambda\in\Sigma^+$, hence $\lambda_i(H_0)>\lambda_j(H_0)$ and $i<j$, and the diagonal entry vanishes since no positive restricted root is $0$. [L3, algebra]

1.3 Regularity of products: let $H$ be a Lie group with Lie algebra $\mathfrak h$, and let $\mathfrak h=\mathfrak s\oplus\mathfrak t$ be a vector-space direct sum of Lie subalgebras with associated connected subgroups $S,T$; then the multiplication map $\Phi:S\times T\to H$, $\Phi(s,t)=st$, is everywhere regular: identifying the tangent space of $S\times T$ at $(s_0,t_0)$ with $\mathfrak s\oplus\mathfrak t$ by left translations within $S$ and $T$, and the tangent space of $H$ at $s_0t_0$ with $\mathfrak h$ by left translation, one computes $d\Phi_{(s_0,t_0)}(X)=\operatorname{Ad}(t_0^{-1})X$ for $X\in\mathfrak s$ and $d\Phi_{(s_0,t_0)}(Y)=Y$ for $Y\in\mathfrak t$, which in the decomposition $\mathfrak h=\mathfrak s\oplus\mathfrak t$ is block triangular with invertible diagonal blocks $\operatorname{Ad}_{\mathfrak h/\mathfrak t}(t_0^{-1})$ and the identity on $\mathfrak t$, hence is invertible. [algebra]

2.1 Matrix types and closedness: with the basis of step 1.2 the matrices of $\operatorname{Ad}(K)$ are orthogonal, those of $A_1=\operatorname{Ad}(A)=\exp(\operatorname{ad}\mathfrak a)$ are diagonal with positive diagonal entries, and those of $N_1=\operatorname{Ad}(N)=\exp(\operatorname{ad}\mathfrak n)$ are unipotent upper triangular; moreover $A_1$ is closed in the group $D$ of diagonal matrices with positive entries, because the exponential map $\mathfrak d\to D$ of the abelian Lie algebra $\mathfrak d$ of all diagonal matrices is a diffeomorphism and $\operatorname{ad}\mathfrak a\subseteq\mathfrak d$ is a linear subspace, and $N_1$ is closed in the group $U$ of unipotent upper triangular matrices, because the exponential map $\mathfrak u\to U$ of the nilpotent algebra of strictly upper triangular matrices is a diffeomorphism by [L4] and $\operatorname{ad}\mathfrak n\subseteq\mathfrak u$ is a linear subspace; finally $A_1\cap N_1=\{1\}$ and $A_1,N_1$ are simply connected, since $\operatorname{Ad}|_A:A\to A_1$ and $\operatorname{Ad}|_N:N\to N_1$ are injective: $\ker\operatorname{Ad}|_A=A\cap Z\subseteq K\cap\exp(\mathfrak p_0)=\{1\}$ by step 1.1, and for $n=\exp X\in N\cap Z$ with $X\in\mathfrak n$ the identity $\operatorname{Ad}(n)=e^{\operatorname{ad}X}=1$ forces $\operatorname{ad}X=0$ because $\operatorname{ad}X$ is nilpotent, hence $X\in Z(\mathfrak g_0)=0$ and $n=1$. [L2, L4, step 1.1, step 1.2, algebra]

3.1 The subgroups $A$, $N$: by [L2] the subalgebra $\mathfrak a\oplus\mathfrak n$ is a Lie subalgebra, and $A$ and $N$ are the connected subgroups with Lie algebras $\mathfrak a$ and $\mathfrak n$; $A$ is abelian and isomorphic to $\mathfrak a$ through $\exp$ by step 1.1, and $N=\exp(\mathfrak n)$ with $\exp\colon\mathfrak n\to N$ a diffeomorphism by [L4], because $N$ is connected by definition, nilpotent since its Lie algebra $\mathfrak n$ is, and simply connected because $\operatorname{Ad}|_N\colon N\to N_1$ is an injective Lie-group homomorphism onto the simply connected group $N_1$ of step 2.1; by step 1.3 applied to $\mathfrak h=\mathfrak a\oplus\mathfrak n$, $\mathfrak s=\mathfrak a$, $\mathfrak t=\mathfrak n$, the multiplication $A\times N\to AN$ is everywhere regular; it is also injective, since $a_1n_1=a_2n_2$ gives $a_2^{-1}a_1=n_2n_1^{-1}\in A\cap N$, and $A\cap N=\{1\}$ because $\operatorname{Ad}(A\cap N)\subseteq A_1\cap N_1=\{1\}$ by step 2.1 and $\ker\operatorname{Ad}\cap A=A\cap Z=\{1\}$; hence $A\times N\to AN$ is a diffeomorphism, $AN$ is the analytic subgroup with Lie algebra $\mathfrak a\oplus\mathfrak n$, and the map $A\times N\to G$ is injective. [L1, L2, L4, step 2.1, step 1.3, algebra]

4.1 $K\times AN\to G$ is everywhere regular: by [L2] one has the vector-space direct sum $\mathfrak g_0=\mathfrak k_0\oplus(\mathfrak a\oplus\mathfrak n)$ in which both summands are Lie subalgebras, so by step 1.3 applied to $\mathfrak h=\mathfrak g_0$, $\mathfrak s=\mathfrak k_0$, $\mathfrak t=\mathfrak a\oplus\mathfrak n$ and the connected subgroups $K$ and $AN$ of step 3.1, the multiplication map $K\times AN\to G$ has invertible differential at every point. [L2, step 1.3, step 3.1, algebra]

5.1 The adjoint-group decomposition: put $G_1=\operatorname{Ad}(G)$, $K_1=\operatorname{Ad}(K)$, $A_1=\operatorname{Ad}(A)$, $N_1=\operatorname{Ad}(N)$; then the multiplication map $K_1\times A_1\times N_1\to G_1$ is bijective: it is injective because $k_1a_1n_1=k_1'a_1'n_1'$ with $k_1,k_1'\in K_1$ orthogonal, $a_1,a_1'$ diagonal with positive entries and $n_1,n_1'$ unipotent upper triangular forces $k:=k_1'^{-1}k_1=a_1'n_1'n_1^{-1}a_1^{-1}=(a_1'a_1^{-1})\cdot\bigl(a_1(n_1'n_1^{-1})a_1^{-1}\bigr)$, and both factors on the right are upper triangular with positive diagonal entries because $A_1$ is diagonal with positive entries and normalizes the unipotent group $N_1$; so the eigenvalues of $k$ are these positive diagonal entries, while $k$ is orthogonal and therefore has all eigenvalues of modulus $1$; hence every diagonal entry of $k$ is a positive real number of modulus $1$, so $k=1$ and $k_1=k_1'$; then $a_1n_1=a_1'n_1'$, and since $A_1\cap N_1=\{1\}$ the parameterization $A_1\times N_1\to A_1N_1$ is injective, giving $a_1'=a_1$ and $n_1'=n_1$; and it is surjective because its image is open (it is everywhere regular by steps 3.1 and 4.1 transported through the local diffeomorphism $\operatorname{Ad}$) and closed (the image is the product $K_1\cdot A_1N_1$ of the compact set $K_1$ and the closed set $A_1N_1$, the latter being closed because if $a_mn_m\to x$ then the diagonal parts converge, so $a_m\to a\in A_1$ and then $n_m=a_m^{-1}(a_mn_m)\to a^{-1}x\in N_1$), and $G_1$ is connected. [step 2.1, step 3.1, step 4.1, algebra]

6.1 Lifting to $G$: let $g\in G$; by step 5.1 write $\operatorname{Ad}(g)=k_1a_1n_1$ with $k_1\in K_1$, $a_1\in A_1$, $n_1\in N_1$; choose $k\in K$ with $\operatorname{Ad}(k)=k_1$, and let $a\in A$ and $n\in N$ be the unique elements with $\operatorname{Ad}(a)=a_1$ and $\operatorname{Ad}(n)=n_1$ (step 2.1); then $\operatorname{Ad}(g(kan)^{-1})=k_1a_1n_1(k_1a_1n_1)^{-1}=1$, so $z:=g(kan)^{-1}\in\ker\operatorname{Ad}=Z\subseteq K$ by [L1], and $g=(zk)an$ exhibits $g$ in $K\cdot A\cdot N$; hence $K\times A\times N\to G$ is surjective. [L1, step 2.1, step 5.1, algebra]

6.2 Injectivity on $G$: if $k_1a_1n_1=k_2a_2n_2$ with $k_i\in K$, $a_i\in A$, $n_i\in N$, then applying $\operatorname{Ad}$ and using the injectivity part of step 5.1 gives $\operatorname{Ad}(k_1)=\operatorname{Ad}(k_2)$, $\operatorname{Ad}(a_1)=\operatorname{Ad}(a_2)$ and $\operatorname{Ad}(n_1)=\operatorname{Ad}(n_2)$; by step 2.1 the maps $\operatorname{Ad}|_A$ and $\operatorname{Ad}|_N$ are injective, so $a_1=a_2$ and $n_1=n_2$, and cancelling $a_1n_1$ on the right gives $k_1=k_2$. [step 2.1, step 5.1, algebra]

7.1 Completion: $K\times A\times N\to G$ is smooth, bijective by steps 6.1 and 6.2, and has invertible differential at every point, because it is the composite of $(\mathrm{id},\mu):K\times A\times N\to K\times AN$, whose second component $A\times N\to AN$ is a diffeomorphism by step 3.1, with the multiplication map $K\times AN\to G$, which is everywhere regular by step 4.1; a bijective local diffeomorphism is a diffeomorphism, and its inverse is smooth by the inverse function theorem; moreover $A\cong\mathfrak a$ and $N\cong\mathfrak n$ are diffeomorphic to vector spaces by steps 1.1 and 3.1, hence simply connected, and $N=\exp(\mathfrak n)$; finally, a diffeomorphism is a homeomorphism onto $G$, so the images of the closed subsets $\{1\}\times A\times\{1\}$ and $\{1\}\times\{1\}\times N$ of $K\times A\times N$ under the multiplication map are closed in $G$, that is, $A$ and $N$ are closed subgroups of $G$; this proves all the assertions. [A1, L1, L2, step 1.1, step 3.1, step 4.1, step 6.1, step 6.2] ∎

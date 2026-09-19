---
id: thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group
kind: theorem
title: Global Cartan decomposition for a connected finite center semisimple Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-existence-of-a-cartan-involution, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, def-cartan-involution-of-a-real-semisimple-lie-algebra, thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero, prop-exponential-map-is-natural-for-lie-group-homomorphisms, thm-one-parameter-subgroups-are-exactly-exponentials, thm-cartans-closed-subgroup-theorem, thm-lie-subgroup-lie-subalgebra-correspondence, cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra, def-conjugation-and-the-adjoint-representation-of-a-lie-group, prop-adjoint-is-a-smooth-lie-group-representation, thm-the-differential-of-adjoint-is-ad, prop-adjoint-exponential-identity, prop-adjoint-intertwines-the-exponential-map, thm-every-derivation-of-a-semisimple-lie-algebra-is-inner, cor-semisimple-lie-algebras-are-centerless-and-perfect, prop-trace-forms-are-symmetric-and-invariant, def-self-adjoint-and-normal-endomorphism, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31 and its proof (including Lemma 6.15, Lemma 6.27 and the differential computation), printed pp. 356-368"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, §43.1, printed pp. 217-218"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group
with finite center and Lie algebra $\mathfrak g_0$, and let $\Theta$ be a
**global Cartan involution** of $G$: an involutive Lie-group automorphism of
$G$ whose differential $\theta_*:=d\Theta_e$ is a Cartan involution of
$\mathfrak g_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]],
[[thm-existence-of-a-cartan-involution]]) and which fixes the center $Z(G)$
pointwise. Let $K=G^\Theta=\{g:\Theta(g)=g\}$ and let
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the Cartan decomposition
attached to $\theta_*$ ([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]]).
Then:

1. $K$ is a closed subgroup of $G$ with Lie algebra $\mathfrak k_0$, and $K$ is
   compact;
2. the map $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a
   diffeomorphism.

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected real semisimple Lie group $G$ with finite center $Z:=Z(G)$, Lie algebra $\mathfrak g_0$, Killing form $B$, a global Cartan involution $\Theta$ with differential $\theta_*$, the subgroup $K=G^\Theta$, and the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited through the closed-subgroup, exponential and adjoint interfaces of [L2] and [L3].

[L1] $\theta_*$ is an involutive automorphism of $\mathfrak g_0$ and $B_{\theta_*}(X,Y)=-B(X,\theta_*Y)$ is a positive definite inner product; $B$ is invariant under every automorphism of $\mathfrak g_0$, negative definite on $\mathfrak k_0$, positive definite on $\mathfrak p_0$, and $\mathfrak k_0,\mathfrak p_0$ are $B$-orthogonal, with $[\mathfrak k_0,\mathfrak k_0]\subseteq\mathfrak k_0$, $[\mathfrak k_0,\mathfrak p_0]\subseteq\mathfrak p_0$, $[\mathfrak p_0,\mathfrak p_0]\subseteq\mathfrak k_0$ ([[def-cartan-involution-of-a-real-semisimple-lie-algebra]], [[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]], [[prop-trace-forms-are-symmetric-and-invariant]]).

[L2] The exponential map $\exp\colon\mathfrak g_0\to G$ is smooth with invertible differential at $0$, is natural for Lie-group homomorphisms, $F(\exp X)=\exp(dF_eX)$, and every one-parameter subgroup is uniquely of the form $t\mapsto\exp(tX)$ ([[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]], [[prop-exponential-map-is-natural-for-lie-group-homomorphisms]], [[thm-one-parameter-subgroups-are-exactly-exponentials]]).

[L3] Every closed subgroup $H$ of $G$ is an embedded Lie subgroup whose Lie algebra is $\{X:\exp(tX)\in H\text{ for all }t\}$, and connected subgroups with equal Lie algebras coincide; the adjoint map $\operatorname{Ad}\colon G\to\operatorname{GL}(\mathfrak g_0)$, $\operatorname{Ad}_g=d(C_g)_e$, is a smooth homomorphism with $d\operatorname{Ad}_e=\operatorname{ad}$, with $\operatorname{Ad}_{\exp X}=e^{\operatorname{ad}_X}$ and $g\exp(X)g^{-1}=\exp(\operatorname{Ad}_gX)$, and $\ker\operatorname{Ad}=Z$ for connected $G$; the automorphism group $\operatorname{Aut}(\mathfrak g_0)$ is a closed Lie subgroup of $\operatorname{GL}(\mathfrak g_0)$ with Lie algebra $\operatorname{Der}(\mathfrak g_0)$ ([[thm-cartans-closed-subgroup-theorem]], [[thm-lie-subgroup-lie-subalgebra-correspondence]], [[cor-the-lie-algebra-of-the-automorphism-group-of-a-semisimple-lie-algebra]], [[def-conjugation-and-the-adjoint-representation-of-a-lie-group]], [[prop-adjoint-is-a-smooth-lie-group-representation]], [[thm-the-differential-of-adjoint-is-ad]], [[prop-adjoint-exponential-identity]], [[prop-adjoint-intertwines-the-exponential-map]]).

[L4] Since $\mathfrak g_0$ is semisimple, $Z(\mathfrak g_0)=0$ and every derivation of $\mathfrak g_0$ is inner: $\operatorname{Der}(\mathfrak g_0)=\operatorname{ad}(\mathfrak g_0)$ with $\operatorname{ad}$ injective ([[cor-semisimple-lie-algebras-are-centerless-and-perfect]], [[thm-every-derivation-of-a-semisimple-lie-algebra-is-inner]]).

[L5] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal basis of eigenvectors with real eigenvalues, and self-adjointness is being self-adjoint for the inner product at hand ([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]], [[def-self-adjoint-and-normal-endomorphism]]).

## Proof

**Proof technique:** direct.

1.1 $K$ is the preimage of $e$ under the continuous map $G\to G$, $g\mapsto\Theta(g)g^{-1}$, hence closed; it is a subgroup because $\Theta$ is an involutive automorphism. By [L3] $K$ is an embedded Lie subgroup with Lie algebra $\{X:\exp(tX)\in K\text{ for all }t\}$. [L3]

1.2 The Lie algebra of $K$ is $\mathfrak k_0$: for $X\in\mathfrak g_0$ one has $\exp(tX)\in K$ for all $t$ if and only if $\exp(t\theta_*X)=\Theta(\exp tX)=\exp(tX)$ for all $t$, by [L2], which holds if and only if $\theta_*X=X$, by differentiating at $t=0$; this is exactly the condition $X\in\mathfrak k_0$. Also $Z\subseteq K$, because $\Theta$ fixes $Z$ pointwise by definition of a global Cartan involution. [L2, L3, algebra]

1.3 For $A\in\operatorname{Aut}(\mathfrak g_0)$ let $A^*$ denote its adjoint for $B_{\theta_*}$. Then $(A^*)^{-1}=\theta_*A\theta_*$, and consequently $A^*=\theta_*A^{-1}\theta_*\in\operatorname{Aut}(\mathfrak g_0)$. Indeed, for $Z,W$ one computes, using that $B$ is invariant under both automorphisms $\theta_*$ and $A$, so that $B(\theta_*U,\theta_*V)=B(U,V)$ and $B(AU,AV)=B(U,V)$, and using $B(AU,V)=B(U,A^{-1}V)$: $B_{\theta_*}(\theta_*A\theta_*Z,W)=-B(\theta_*A\theta_*Z,\theta_*W)=-B(A\theta_*Z,W)=-B(\theta_*Z,A^{-1}W)=B_{\theta_*}(Z,A^{-1}W),$ so $(\theta_*A\theta_*)^*=A^{-1}$, equivalently $A^*=\theta_*A^{-1}\theta_*$. In particular $\operatorname{Ad}(G)$ is closed under taking adjoints. [L1, algebra]

1.4 For $W\in\mathfrak g_0$ one has $(\operatorname{ad}W)^*=-\operatorname{ad}(\theta_*W)$, where the adjoint is taken for $B_{\theta_*}$: for $Y,Z$ one has $B_{\theta_*}((\operatorname{ad}\theta_*W)Y,Z)=-B([\theta_*W,Y],\theta_*Z)=B(Y,[\theta_*W,\theta_*Z])=B(Y,\theta_*[W,Z])=-B_{\theta_*}(Y,(\operatorname{ad}W)Z)$. Hence $\operatorname{ad}W$ is self-adjoint for $B_{\theta_*}$ if and only if $W\in\mathfrak p_0$. [L1, L4, algebra]

2.1 Define $T:=\{v\in G:\Theta(v)v^{-1}\in Z\}$. This is a subgroup containing $K$: it is the preimage of the finite set $Z$ under the continuous map $v\mapsto\Theta(v)v^{-1}$, hence closed, and for $u,v\in T$ one has $\Theta(uv)(uv)^{-1}=\Theta(u)\Theta(v)v^{-1}u^{-1}=\Theta(u)u^{-1}\Theta(v)v^{-1}\in Z$ because $\Theta(v)v^{-1}$ is central and $\Theta(u)u^{-1}\in Z$; inverses are handled by reversing the order of the same computation. Its Lie algebra is $\{X:\exp(tX)\in T\text{ for all }t\}=\{X:\operatorname{ad}(\theta_*X)=\operatorname{ad}X\}=\mathfrak k_0$, since $\exp(tX)\in T$ is equivalent to $\operatorname{Ad}(\Theta(\exp tX))=\operatorname{Ad}(\exp tX)$, that is, to $e^{t\operatorname{ad}\theta_*X}=e^{t\operatorname{ad}X}$ for all $t$, and differentiating at $t=0$ gives $\operatorname{ad}\theta_*X=\operatorname{ad}X$, which by injectivity of $\operatorname{ad}$ is $\theta_*X=X$. [L3, L4, step 1.2, algebra]

2.2 For $g\in G$ put $A:=\operatorname{Ad}(g)^*\operatorname{Ad}(g)$. By step 1.3, $A\in\operatorname{Aut}(\mathfrak g_0)$, and $A$ is self-adjoint and positive definite for $B_{\theta_*}$: $B_{\theta_*}(AZ,Z)=B_{\theta_*}(\operatorname{Ad}(g)Z,\operatorname{Ad}(g)Z)\ge0$, with equality only for $Z=0$. Define the endomorphism $D:=\log A$ by requiring $D$ to act as $\log\lambda$ on the eigenspace of $A$ with eigenvalue $\lambda>0$; by [L5] these eigenspaces span $\mathfrak g_0$, and $e^D=A$. If $X,Y$ are eigenvectors of $A$ with eigenvalues $\lambda,\mu$, then $A[X,Y]=[AX,AY]=\lambda\mu[X,Y]$, so $[X,Y]$ lies in the eigenspace for $\lambda\mu$, and $D[X,Y]=(\log\lambda+\log\mu)[X,Y]=[DX,Y]+[X,DY]$; by bilinearity $D$ is a derivation of $\mathfrak g_0$. By [L4] there is a unique $X\in\mathfrak g_0$ with $D=\operatorname{ad}X$, and $X\in\mathfrak p_0$ because $D$ is self-adjoint and step 1.4 applies. Then $A=e^{\operatorname{ad}X}=\operatorname{Ad}(\exp X)$ by [L3], and $\operatorname{ad}X=D$ is determined by $A$, hence so is $X$ by injectivity of $\operatorname{ad}$. [L3, L4, L5, step 1.3, step 1.4, algebra]

3.1 Let $g\in G$ and let $X\in\mathfrak p_0$ be as in step 2.2, and put $u:=g\exp(-X/2)\in G$. Then $\operatorname{Ad}(u)$ is orthogonal for $B_{\theta_*}$: $\operatorname{Ad}(u)^*\operatorname{Ad}(u)=e^{-\operatorname{ad}X/2}Ae^{-\operatorname{ad}X/2}=e^{-\operatorname{ad}X/2}e^{\operatorname{ad}X}e^{-\operatorname{ad}X/2}=1$, since all factors are functions of the self-adjoint endomorphism $\operatorname{ad}X$ and therefore commute. Consequently $\theta_*\operatorname{Ad}(u)\theta_*=(\operatorname{Ad}(u)^*)^{-1}=\operatorname{Ad}(u)$ by step 1.3. [L3, step 1.3, step 2.2, algebra]

3.2 The map $\psi\colon T\times\mathfrak p_0\to G$, $\psi(v,X)=v\exp X$, is smooth and, by steps 4.1 and 4.2, a bijection. Its differential is invertible at every point: since $\psi(v_0v,X)=v_0\psi(v,X)$, left translation in the first variable reduces the computation to the points $(e,X_0)$, where directions $(U,S)\in\mathfrak k_0\times\mathfrak p_0$ give the left-trivialized derivative $d\psi_{(e,X_0)}(U,S)=e^{-\operatorname{ad}X_0}U+\frac{1-e^{-\operatorname{ad}X_0}}{\operatorname{ad}X_0}S,$ the second term being the absolutely convergent series $\sum_{n\ge0}(-\operatorname{ad}X_0)^nS/(n+1)!$ obtained by differentiating the exponential series termwise. [L1, L2, L3, step 2.1, algebra]

4.1 For every $g\in G$ one has $\operatorname{Ad}(\Theta(u))=\theta_*\operatorname{Ad}(u)\theta_*$, because $\Theta\circ C_g=C_{\Theta(g)}\circ\Theta$ for the conjugations, and differentiating at $e$ gives this identity. Hence step 3.1 yields $\operatorname{Ad}(\Theta(u))=\operatorname{Ad}(u)$, that is, $\Theta(u)u^{-1}\in\ker\operatorname{Ad}=Z$, so $u\in T$ by step 2.1. Therefore $g=u\exp(X/2)$ with $u\in T$ and $X/2\in\mathfrak p_0$: every element of $G$ lies in $T\cdot\exp(\mathfrak p_0)$. [L3, step 2.1, step 3.1, algebra]

4.2 The factorization is unique: suppose $u\exp X=u'\exp X'$ with $u,u'\in T$ and $X,X'\in\mathfrak p_0$. Applying $\operatorname{Ad}$ gives $\operatorname{Ad}(u)e^{\operatorname{ad}X}=\operatorname{Ad}(u')e^{\operatorname{ad}X'}$; multiplying on the left by $\operatorname{Ad}(u)^{-1}$ and on the right by $e^{-\operatorname{ad}X'}$ gives $Q:=\operatorname{Ad}(u)^{-1}\operatorname{Ad}(u')=e^{\operatorname{ad}X}e^{-\operatorname{ad}X'}.$ Here $Q$ is orthogonal, because $\operatorname{Ad}(u)$ and $\operatorname{Ad}(u')$ are orthogonal by step 3.1; computing $Q^*Q=1$ with $Q^*=e^{-\operatorname{ad}X'}e^{\operatorname{ad}X}$ gives $e^{-\operatorname{ad}X'}e^{2\operatorname{ad}X}e^{-\operatorname{ad}X'}=1$, hence $e^{2\operatorname{ad}X}=e^{2\operatorname{ad}X'}$. Both exponents are self-adjoint, and the logarithm of a positive definite self-adjoint operator is unique because the eigenvalue $2\lambda$ is recovered as the logarithm of $e^{2\lambda}$; hence $\operatorname{ad}X=\operatorname{ad}X'$ and, by injectivity of $\operatorname{ad}$, $X=X'$. Then $Q=e^{\operatorname{ad}X}e^{-\operatorname{ad}X}=1$, so $\operatorname{Ad}(u)=\operatorname{Ad}(u')$ and $u'u^{-1}\in Z$; writing $u'=zu$ with central $z\in Z$ and substituting into $u\exp X=u'\exp X=uz\exp X$ gives $z=e$ and $u=u'$. [L3, L5, step 1.4, step 3.1, algebra]

4.3 The differential of step 3.2 is injective, hence an isomorphism. Suppose $e^{-A}U+f(A)S=0$ with $A:=\operatorname{ad}X_0$, $f(A)=(1-e^{-A})A^{-1}$, $U\in\mathfrak k_0$, $S\in\mathfrak p_0$. Applying $\theta_*$, which satisfies $\theta_*A\theta_*=-A$, $\theta_*U=U$ and $\theta_*S=-S$, and using $\theta_*e^{-A}\theta_*=e^{A}$ and $\theta_*f(A)\theta_*=f(-A)$ gives $e^{A}U-f(-A)S=0$. Multiplying the original equation by $e^{A}$ gives $U=-g(A)S$ with $g(A)=(e^{A}-1)A^{-1}=f(-A)$, and substituting into the transformed equation gives $-(e^{A}+1)g(A)S=0$. Since $A$ is self-adjoint and $e^{\lambda}+1\ne0$ for real $\lambda$, the factor $e^{A}+1$ is invertible, so $g(A)S=0$. The eigenvalues of $g(A)$ are $(e^{\lambda}-1)/\lambda\ne0$ for the eigenvalues $\lambda\ne0$ of $A$ and $1$ on the kernel of $A$, so $g(A)$ is invertible and $\ker g(A)=0$; hence $S=0$ and then $U=-g(A)S=0$. [L1, L4, L5, step 1.4, step 3.2, algebra]

5.1 By the inverse function theorem, the bijection $\psi$ of step 3.2 is a diffeomorphism: it is a local diffeomorphism because its differential is everywhere invertible by step 4.3, and a bijective local diffeomorphism has smooth inverse. [L2, step 3.2, step 4.3, algebra]

6.1 The diffeomorphism $\psi$ exhibits $G$ as diffeomorphic to $T\times\mathfrak p_0$, and $\mathfrak p_0$ is a real vector space; since $G$ is connected, $T$ is connected. Since $K\subseteq T$ by step 2.1, $\operatorname{Lie}(K)=\mathfrak k_0=\operatorname{Lie}(T)$ by steps 1.2 and 2.1, and $T$ is connected, [L3] gives $T=K$. [L2, L3, step 1.2, step 2.1, step 5.1, algebra]

7.1 $T$ is compact. Let $F:=\operatorname{Ad}(T)=\{A\in\operatorname{Ad}(G):\theta_*A\theta_*=A\}$ by step 2.1. Every element of $\operatorname{Ad}(G)$ is an automorphism of $\mathfrak g_0$, the group $\operatorname{Aut}(\mathfrak g_0)$ is closed in $\operatorname{GL}(\mathfrak g_0)$ with Lie algebra $\operatorname{ad}(\mathfrak g_0)$, and $\operatorname{Ad}(G)$ is a connected Lie subgroup with the same Lie algebra; hence $\operatorname{Ad}(G)$ is an open subgroup of the connected group $\operatorname{Aut}(\mathfrak g_0)^0$ and therefore equals it, so $\operatorname{Ad}(G)$ is closed in $\operatorname{GL}(\mathfrak g_0)$. The condition $\theta_*A\theta_*=A$ is closed, so $F$ is closed in the compact orthogonal group of $B_{\theta_*}$ and hence compact. The adjoint map $T\to F$ is a covering with finite fibre $T\cap Z=Z$, so $T$ is a finite union of compact sets and is compact. Hence $K=T$ is compact, closing statement 1, and the map of statement 2 is the diffeomorphism $\psi$ of step 5.1 with $T=K$. [L1, L3, step 2.1, step 5.1, step 6.1, A1, algebra] ∎

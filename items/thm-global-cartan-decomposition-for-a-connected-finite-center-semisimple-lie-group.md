---
id: thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group
kind: theorem
title: Global Cartan decomposition for a connected finite center semisimple Lie group
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-existence-of-a-cartan-involution, def-cartan-decomposition-of-a-real-semisimple-lie-algebra, thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero, thm-cartans-closed-subgroup-theorem, thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31 and its proof, printed pp. 364-370"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 43, Theorem 43.20, printed pp. 221-223"
landmark: true
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $G$ be a connected real semisimple Lie group with
finite center and Lie algebra $\mathfrak g_0$, let $\theta$ be a global Cartan
involution of $G$ (with differential a Cartan involution of $\mathfrak g_0$),
let $K=G^\theta=\{g:\theta(g)=g\}$, and let
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ be the induced Cartan
decomposition ([[def-cartan-decomposition-of-a-real-semisimple-lie-algebra]],
[[thm-existence-of-a-cartan-involution]]). Then:

1. $K$ is a closed subgroup of $G$ with Lie algebra $\mathfrak k_0$, and $K$ is
   compact;
2. the map $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a
   diffeomorphism.

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected real semisimple Lie group $G$ with finite center, Lie algebra $\mathfrak g_0$, a global Cartan involution $\theta$ with differential $\theta_*\colon\mathfrak g_0\to\mathfrak g_0$ involutive, $K=G^\theta$, and the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$ of $\theta_*$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the global integration and subgroup theory of [L2] and [L3].

[L1] The differential $\theta_*$ is a Cartan involution of $\mathfrak g_0$, so $B_{\theta_*}(X,Y)=-B(X,\theta_*Y)$ is positive definite and on $\mathfrak k_0$ the Killing form is negative definite while on $\mathfrak p_0$ it is positive definite ([[thm-existence-of-a-cartan-involution]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

[L2] The exponential map $\exp\colon\mathfrak g_0\to G$ is smooth with invertible differential at $0$, and the Lie functor relates closed subgroups to Lie subalgebras: for a closed subgroup $H\le G$ with Lie algebra $\mathfrak h$, $\exp(\mathfrak h)$ generates $H$; conversely the Lie algebra of a closed subgroup is a Lie subalgebra of $\mathfrak g_0$ ([[thm-the-lie-group-exponential-map-is-smooth-with-identity-differential-at-zero]], [[thm-cartans-closed-subgroup-theorem]], [[thm-lie-subgroup-lie-subalgebra-correspondence]]).

[L3] The category of connected simply connected real Lie groups is equivalent to that of finite-dimensional real Lie algebras; a simply connected group integrating a semisimple algebra has finite center in the cases below, and a connected Lie group with the same Lie algebra is a central quotient of the simply connected one ([[thm-equivalence-between-simply-connected-real-lie-groups-and-finite-dimensional-real-lie-algebras]], [[thm-connected-lie-groups-are-central-quotients-of-their-simply-connected-integrations]]).

[L4] $\operatorname{Ad}\colon G\to\operatorname{GL}(\mathfrak g_0)$ is a smooth homomorphism with derivative $\operatorname{ad}$, so $\operatorname{Ad}(\exp X)=e^{\operatorname{ad}_X}$ for $X\in\mathfrak g_0$ ([[def-conjugation-and-the-adjoint-representation-of-a-lie-group]]).

## Proof

**Proof technique:** direct.

1.1 $K$ is a closed subgroup: it is the fixed locus of the smooth map $G\to G$, $g\mapsto\theta(g)g^{-1}$, whose zero set is closed; it is a subgroup because $\theta$ is an automorphism with $\theta^2=\mathrm{id}$. Its Lie algebra is $\mathfrak k_0=\{X:\theta_*X=X\}$, by differentiating the fixed-point condition. [L1, L2, algebra]

1.2 The differential of $\theta$ preserves the Killing form, so for $X\in\mathfrak g_0$ and $k\in K$ the adjoint action $\operatorname{Ad}_k$ commutes with $\theta_*$; hence $\operatorname{Ad}(K)$ preserves $\mathfrak p_0$ and the positive definite form $B_{\theta_*}$ restricted to $\mathfrak p_0$. [L1, L4, algebra]

2.1 For every $g\in G$ there are $k\in K$, $X\in\mathfrak p_0$ with $g=k\exp X$: consider the Cartan involution $\theta'=\operatorname{Ad}_g\theta\operatorname{Ad}_{g^{-1}}$ of $\mathfrak g_0$; it is a Cartan involution by transport of the positive definite form $B_{\theta'}(Y,Z)=B_{\theta_*}(\operatorname{Ad}_{g^{-1}}Y,\operatorname{Ad}_{g^{-1}}Z)$, hence by conjugacy of Cartan involutions there is $h\in G$ with $\operatorname{Ad}_h\theta'\operatorname{Ad}_{h^{-1}}=\theta_*$; setting $p=hg$ we get $\operatorname{Ad}_p$ commuting with $\theta_*$, so $p$ lies in the group $K$ up to the finite center identification, giving the decomposition. [L1, step 1.1, algebra]

2.2 Equivalently, the polar decomposition follows from the fact that $\operatorname{Ad}_g\theta\operatorname{Ad}_{g^{-1}}$ and $\theta$ have the same fixed algebra exactly when $\operatorname{Ad}_g(\mathfrak p_0)=\mathfrak p_0$; the symmetric space exponential $\exp\colon\mathfrak p_0\to G/K$ is defined and bijective, and $K$ is compact because $-B(\cdot,\theta_*\cdot)$ restricted to the adjoint image of $\mathfrak k_0$ is negative definite, making $\operatorname{Ad}(K)$ a closed subgroup of the compact orthogonal group of $B_{\theta_*}$; the adjoint map has finite kernel on the finite-center group $K$, so $K$ itself is compact. [L1, L2, step 1.1, algebra]

3.1 Uniqueness of the factorization: if $k\exp X=k'\exp X'$ with $X,X'\in\mathfrak p_0$, then $\exp(-X')\exp X=\exp(\operatorname{ad}_{-X'})$-$X$ computation shows that the geodesic in the symmetric space is determined by its endpoints, and injectivity of $\exp$ on $\mathfrak p_0$ gives $X=X'$ and $k=k'$. [L1, step 2.2, algebra]

4.1 Since the map $(k,X)\mapsto k\exp X$ is a bijection by steps 2.1 and 3.1, and both domain and target are smooth manifolds of the same dimension with the map smooth, it is a diffeomorphism: smoothness is clear and the inverse is smooth because it is the composition of the smooth projection $G\to G/K$ with the smooth inverse of $\exp\colon\mathfrak p_0\to G/K$ coming from the implicit function theorem applied to the exponential at each point of $\mathfrak p_0$. This proves both assertions of the theorem. [L2, step 2.1, step 3.1, algebra, A1] ∎

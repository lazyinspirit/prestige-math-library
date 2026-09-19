---
id: thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space
kind: theorem
title: Cartan decomposition identifies p with the noncompact symmetric space
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-riemannian-symmetric-pair-of-noncompact-type, thm-quotient-manifold-by-a-closed-lie-subgroup, def-homogeneous-space-of-a-lie-group, def-axiom-of-choice, prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter VI"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter VI, §3, Theorem 6.31(b),(c) and the quotient description of G/K, printed pp. 361-368"
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $(G,K)$ be a Riemannian symmetric pair of
noncompact type with Cartan decomposition
$\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$
([[def-riemannian-symmetric-pair-of-noncompact-type]]). Then the map
$$\Phi:\mathfrak p_0\longrightarrow G/K,\qquad X\longmapsto\exp(X)K,$$ is a
diffeomorphism; here $G/K$ carries the manifold structure of the quotient by
the closed subgroup $K$
([[thm-quotient-manifold-by-a-closed-lie-subgroup]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a connected real semisimple Lie group $G$ with finite center, a global Cartan involution $\Theta$, $K=G^\Theta$, the Cartan decomposition $\mathfrak g_0=\mathfrak k_0\oplus\mathfrak p_0$, and the quotient map $q:G\to G/K$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it is inherited from [L1] and [L2].

[L1] The map $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism; $K$ is closed with Lie algebra $\mathfrak k_0$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).

[L2] $G/K$ has a unique smooth structure for which $q$ is a surjective submersion and the left $G$-action is smooth, with $\dim(G/K)=\dim G-\dim K$; the differential of $q$ at the identity identifies $T_{eK}(G/K)$ with $\mathfrak g_0/\mathfrak k_0$, and the projection $\mathfrak g_0\to\mathfrak g_0/\mathfrak k_0$ restricts to an isomorphism $\mathfrak p_0\to\mathfrak g_0/\mathfrak k_0$ ([[thm-quotient-manifold-by-a-closed-lie-subgroup]], [[def-homogeneous-space-of-a-lie-group]], [[prop-bracket-relations-and-killing-signs-in-a-cartan-decomposition]]).

## Proof

**Proof technique:** direct.

1.1 $\Phi$ is smooth: it is the composition of the smooth exponential map $\mathfrak p_0\to G$, $X\mapsto\exp X$, with the quotient map $q$, both smooth by [L1] and [L2]. [L1, L2]

1.2 $\Phi$ is surjective: given $gK$, write $g=k\exp X$ with $k\in K$, $X\in\mathfrak p_0$ by [L1]; then $gK=k\exp(X)K=k\exp(X)k^{-1}K=\exp(\operatorname{Ad}_kX)K$, and $\operatorname{Ad}_kX\in\mathfrak p_0$ because $K$ preserves $\mathfrak p_0$, so $gK=\Phi(\operatorname{Ad}_kX)$ lies in the image. [L1]

1.3 $\Phi$ is injective: if $\exp(X)K=\exp(X')K$, then $\exp(X)=\exp(X')k$ for some $k\in K$. Since $\exp(X')k=k\exp(\operatorname{Ad}_{k^{-1}}X')$, uniqueness in the global Cartan decomposition [L1], applied to $e\exp X=k\exp(\operatorname{Ad}_{k^{-1}}X')$, gives $k=e$ and $X=X'$. [L1]

1.4 Let $g=k\exp X$ be its unique global Cartan decomposition and define $F(g):=\operatorname{Ad}_kX\in\mathfrak p_0$. The map $F:G\to\mathfrak p_0$ is smooth by [L1]. It is constant on the right $K$-cosets: for $h\in K$, one has $gh=k\exp Xh=kh\exp(\operatorname{Ad}_{h^{-1}}X)$, so uniqueness in [L1] gives $F(gh)=\operatorname{Ad}_{kh}\operatorname{Ad}_{h^{-1}}X=\operatorname{Ad}_kX=F(g)$. Since $q:G\to G/K$ is a quotient submersion, its local smooth sections show that $F$ descends uniquely to a smooth map $\overline F:G/K\to\mathfrak p_0$. [L1, L2]

2.1 The descended map is inverse to $\Phi$. For $Y\in\mathfrak p_0$, the Cartan decomposition of $\exp Y$ is $e\exp Y$, so $\overline F(\Phi(Y))=F(\exp Y)=Y$. Conversely, if $g=k\exp X$, then $\Phi(\overline F(gK))=\exp(\operatorname{Ad}_kX)K=k\exp Xk^{-1}K=k\exp XK=gK$. Thus $\Phi$ is a smooth bijection with smooth inverse $\overline F$. [L1, step 1.1, step 1.4]

3.1 By steps 1.1 and 2.1, $\Phi$ and $\overline F$ are mutually inverse smooth maps. Hence $\Phi$ is a diffeomorphism, as claimed. [L2, step 1.1, step 2.1, A1] ∎

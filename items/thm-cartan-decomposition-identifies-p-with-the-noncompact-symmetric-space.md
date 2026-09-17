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

1.3 $\Phi$ is injective: if $\exp(X)K=\exp(X')K$ then $\exp(X)=k\exp(X')$ for some $k\in K$, and the uniqueness part of the diffeomorphism [L1] gives $X=X'$ and $k=e$. [L1]

2.1 The differential of $\Phi$ at $0$ is the isomorphism $\mathfrak p_0\to T_{eK}(G/K)$ of [L2], so $\Phi$ is a local diffeomorphism at $0$. For $k\in K$ one has $\Phi(\operatorname{Ad}_kX)=\exp(\operatorname{Ad}_kX)K=k\exp(X)k^{-1}K=k\cdot\Phi(X)$, the left translate of $\Phi(X)$ by the diffeomorphism $k$ of $G/K$; since $\operatorname{Ad}(K)$ preserves $\mathfrak p_0$ and acts linearly, the local behaviour of $\Phi$ at $\operatorname{Ad}_kX$ is the transport of its behaviour at $X$ by the diffeomorphism $k^{-1}$, hence $\Phi$ is a local diffeomorphism at every point of $\mathfrak p_0$. [L1, L2, step 1.1]

2.2 The inverse of $\Phi$ is smooth: the map $G\to\mathfrak p_0$ sending $g=k\exp X$ to $X$ is smooth, being the composition of the inverse of the diffeomorphism $K\times\mathfrak p_0\to G$ with the projection to the second factor, and it is constant on each left coset $gK$ of $K$, because left multiplication by $k_0\in K$ sends the normal form $k\exp X$ to the normal form $(k_0k)\exp X$ with the same $\mathfrak p_0$-component. Hence it descends to a smooth map $G/K\to\mathfrak p_0$, which is inverse to $\Phi$ by steps 1.2 and 1.3. [L1, step 1.3]

3.1 A bijective local diffeomorphism is a diffeomorphism: by step 2.1, $\Phi$ is a local diffeomorphism everywhere and by steps 1.2 and 1.3 it is bijective; the inverse is smooth because locally it is the smooth inverse provided by the inverse function theorem, and the descended map of step 2.2 exhibits one global smooth inverse. Hence $\Phi$ is a diffeomorphism, as claimed. [L2, step 2.1, step 2.2, A1, algebra] ∎

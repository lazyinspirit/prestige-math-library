---
id: thm-cartan-decomposition-identifies-p-with-the-noncompact-symmetric-space
kind: theorem
title: Cartan decomposition identifies p with the noncompact symmetric space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group, def-riemannian-symmetric-pair-of-noncompact-type, thm-quotient-manifold-by-a-closed-lie-subgroup, def-axiom-of-choice, cor-local-normal-form-for-submersions, prop-exponential-scales-one-parameter-subgroups]
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
verification:
  audited: 2026-09-22
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

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]), supplying L1 and the countable-choice assumptions of L2 and L3.

[L1] The map $K\times\mathfrak p_0\to G$, $(k,X)\mapsto k\exp X$, is a diffeomorphism; $K$ is closed with Lie algebra $\mathfrak k_0$ ([[thm-global-cartan-decomposition-for-a-connected-finite-center-semisimple-lie-group]]).

[L2] The quotient map $q:G\to G/K$ is a surjective smooth submersion ([[thm-quotient-manifold-by-a-closed-lie-subgroup]]). Local submersion coordinates have the form $(u,v)\mapsto u$ ([[cor-local-normal-form-for-submersions]]).

[L3] For real $s,t$, $\exp((s+t)X)=\exp(sX)\exp(tX)$, so $\exp(-X)=\exp(X)^{-1}$ ([[prop-exponential-scales-one-parameter-subgroups]]).

## Proof

**Proof technique:** direct.

1.1 Let $D:K\times\mathfrak p_0\to G$ be $D(k,X)=k\exp X$. Define $D_R:\mathfrak p_0\times K\to G$ by $D_R(X,k)=\exp X\,k$. It is a diffeomorphism: explicitly $D_R(X,k)=D(k^{-1},-X)^{-1}$ by [L3], a composition of $D$ with the product diffeomorphism $(X,k)\mapsto(k^{-1},-X)$ and the smooth inversion diffeomorphism of $G$. Thus every $g$ is uniquely $\exp X\,k$, and its first coordinate $F(g)=X$ is smooth. [L1, L3, algebra]

2.1 For $h\in K$, $gh=\exp X\,(kh)$, so uniqueness gives $F(gh)=F(g)$. Hence $F$ factors as $\overline F\circ q$ for a unique set map $\overline F:G/K\to\mathfrak p_0$. It is smooth: near any quotient point, fix the $v$-coordinate in a local submersion chart of [L2] to obtain a smooth section $s$ of $q$; on that neighborhood $\overline F=F\circ s$. Smoothness is local, so no global section choice is needed. [L2, step 1.1, algebra]

3.1 The map $\Phi(X)=q(\exp X)$ is smooth by [L1] and [L2]. Uniqueness in step 1.1 gives $F(\exp X)=X$, hence $\overline F\circ\Phi=\operatorname{id}$. Conversely, if $g=\exp X\,k$, then $\Phi(\overline F(gK))=\exp X K=gK$. These smooth maps are mutually inverse, proving the assertion. The zero-dimensional case is included: if $\mathfrak p_0=0$, [L1] gives $G=K$ and both sides are singletons. [L1, L2, step 1.1, step 2.1, algebra, A1] ∎

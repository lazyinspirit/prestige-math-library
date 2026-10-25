---
id: cor-embedding-obstructions-include-all-immersion-normal-class-obstructions
kind: corollary
title: "Embedding obstructions include all immersion normal-class obstructions"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions", "cor-high-normal-pontryagin-classes-obstruct-oriented-immersions", "def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity", "def-smooth-embedding", "def-immersion-submersion-and-constant-rank-map", "thm-choice-implies-dependent-implies-countable-choice", "def-axiom-of-choice", "cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings"]
justified_by: []
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## Statement

Assume AC. Every smooth embedding is a smooth immersion ([[def-smooth-embedding]], [[def-immersion-submersion-and-constant-rank-map]]). Hence, for $k\ge1$, the normal-class tests of this page also obstruct embeddings: if $M$ is a closed smooth $m$-manifold and $\bar w_i(M)\neq0$ for some $i>k$, then $M$ admits neither an immersion nor an embedding into $\mathbb R^{m+k}$ ([[cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions]]); if $M$ is connected and $\bar p_i(M)\neq0$ for some $i$ with $2i>k$, then $M$ admits neither an immersion nor an embedding into $\mathbb R^{m+k}$ ([[cor-high-normal-pontryagin-classes-obstruct-oriented-immersions]]). Moreover, for $n\ge m$, the normal bundle of an embedding into $\mathbb R^n$ is a genuine rank-$(n-m)$ stable normal inverse (for $n>m$ by [[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]]; for $n=m$, the differential is a fibrewise isomorphism and the normal quotient is the zero bundle), so the rank-vanishing that drives the tests applies to the embedded normal bundle as well. In addition, for $m\ge1$ and $k\ge1$ embedding imposes the stronger condition $\bar w_k(TM)=0$, and an oriented embedded normal bundle must have $e(\nu)=0$ ([[cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings]]). Thus $\bar w_i(TM)\ne0$ for any $i\ge k$ obstructs embedding in $\mathbb R^{m+k}$; only $i>k$ is the rank obstruction for immersion. No converse is asserted: these tests are necessary conditions only.

## Facts & Assumptions

**Given:** A closed smooth $m$-manifold $M$ with $m\ge1$, an integer $k\ge1$, and AC ([[def-axiom-of-choice]]).

[F1] Every smooth embedding is a smooth immersion ([[def-smooth-embedding]], [[def-immersion-submersion-and-constant-rank-map]]).

[F2] For a closed smooth $M$: if $\bar w_i(M)\ne0$ for some $i>k$, then $M$ does not immerse in $\mathbb R^{m+k}$ ([[cor-high-normal-stiefel-whitney-classes-obstruct-low-codimension-immersions]]); if $M$ is connected and $\bar p_i(M)\ne0$ for some $i$ with $2i>k$, then $M$ does not immerse in $\mathbb R^{m+k}$ ([[cor-high-normal-pontryagin-classes-obstruct-oriented-immersions]]). These assertions inherit AC from the characteristic-class suppliers; AC also supplies the countable choice required for the normal-bundle splitting ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F3] For $n\ge m$, the normal bundle of an embedding $M\hookrightarrow\mathbb R^n$ is a rank-$(n-m)$ stable normal inverse (by the embedding lemma for $n>m$, and directly from the fibrewise-isomorphic differential for $n=m$) and realizes the normal classes $\bar w(M)$, $\bar p(M)$ ([[lem-an-embedding-into-r-n-gives-the-same-normal-bundle-identity]], [[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]).

[F4] If a closed $M^m$ with $m\ge1$ embeds in $\mathbb R^{m+k}$ with $k\ge1$, then $\bar w_k(TM)=0$, and if the embedded normal bundle is integrally oriented then its Euler class vanishes ([[cor-top-normal-stiefel-whitney-and-euler-classes-vanish-for-euclidean-embeddings]]).

## Proof

1.1 Let $g:M\hookrightarrow\mathbb R^{m+k}$ be a smooth embedding. By [F1] the map $g$ is a smooth immersion, so every non-immersion statement applies to it: in particular, if $\bar w_i(M)\ne0$ for some $i>k$, then $M$ has no immersion, hence no embedding, into $\mathbb R^{m+k}$; and if $M$ is connected and $\bar p_i(M)\ne0$ for some $i$ with $2i>k$, then again no immersion and no embedding exists. [F1, F2]

1.2 The embedding case is in fact stronger in top degree. Let $g:M^m\hookrightarrow\mathbb R^{m+k}$ with $m\ge1$, $k\ge1$. Its normal bundle $\nu$ has rank $k$ and, by [F4], satisfies $\bar w_k(TM)=w_k(\nu)=0$, while an integrally oriented embedded normal bundle has $e(\nu)=0$. Hence if $\bar w_i(TM)\ne0$ for some $i\ge k$, then in particular no embedding into $\mathbb R^{m+k}$ exists, whereas for immersion the rank-vanishing argument only excludes the degrees $i>k$: the top degree $i=k$ is the embedding-specific condition. [F4]

2.1 The rank-vanishing that drives these tests is realized concretely by the embedding normal bundle: for $n\ge m$, by [F3] the bundle $\nu$ of an embedding $M\hookrightarrow\mathbb R^n$ is a genuine rank-$(n-m)$ stable normal inverse, so $w_i(\nu)=\bar w_i(M)$ and $p_i(\nu)=\bar p_i(M)$ for every $i$, and the classes of degree above the rank vanish by the rank convention. Thus the same normal classes carry both the transferred immersion tests and the top-degree embedding test. [F3, step 1.1]

3.1 Summarizing, the necessary conditions for an embedding of a closed smooth $M^m$ into $\mathbb R^{m+k}$ with $m\ge1$, $k\ge1$ are: $\bar w_i(M)=0$ for all $i\ge k$; $\bar p_i(M)=0$ for $2i>k$ when the normal bundle is rationally considered; and $e(\nu)=0$ for an oriented embedded normal bundle. The first of these contains all the rank obstructions to immersion (degrees $i>k$) and adds the embedding-specific top class $\bar w_k$. No converse is asserted: vanishing of all these classes is far from sufficient for embeddability, as the following boundary remark explains; the companion page separately shows that identical stable normal data do not classify isotopy. AC is inherited from the class suppliers; no additional choice is used. [F2, F3, F4, step 1.2, step 2.1] ∎

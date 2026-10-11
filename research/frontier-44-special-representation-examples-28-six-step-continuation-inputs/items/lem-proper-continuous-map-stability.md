---
id: lem-proper-continuous-map-stability
kind: lemma
title: Basic stability of proper continuous maps
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-compact-space, def-continuous-map-top, def-hausdorff-space, def-initial-and-final-topology, def-locally-compact-space, def-product-topology, def-proper-continuous-map, def-subspace-topology-top, def-the-diagonal-of-a-space, def-topological-space, lem-compactness-of-a-subspace-is-ambient, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-compactness-under-continuous-maps, thm-finite-products-of-compact-spaces, thm-hausdorff-iff-the-diagonal-is-closed, thm-locally-compact-hausdorff-basics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Louis Verdier, Dualité dans la cohomologie des espaces localement compacts, Séminaire N. Bourbaki 1964–1966, exposé 300, pp. 337–349 (Novembre 1965)"
      url: "https://www.numdam.org/item/SB_1964-1966__9__337_0.pdf"
    - title: "The Stacks Project, Cohomology of Sheaves (chapter 20): §16 cohomology on Hausdorff quasi-compact spaces and §18 proper base change in topology"
      url: "https://stacks.math.columbia.edu/download/cohomology.pdf"
---

## Statement

Let $X$, $Y$ and $Z$ be topological spaces ([[def-topological-space]]), with
properness as in [[def-proper-continuous-map]].

1. If $i:Z\hookrightarrow X$ is the inclusion of a closed subset, then $i$ is
   proper.
2. If $f:X\to Y$ and $g:Y\to Z$ are proper continuous maps, then the composite
   $gf:X\to Z$ is proper.
3. If $f:X\to Y$ is proper, $Y$ is Hausdorff ([[def-hausdorff-space]]) and
   $u:Y'\to Y$ is continuous, then the pullback
   $$f':X\times_YY'\longrightarrow Y',\qquad X\times_YY'=\{(x,y')\in X\times Y': f(x)=u(y')\},$$
   the subset carrying the subspace topology of the product
   ([[def-product-topology]], [[def-subspace-topology-top]]), is proper.
4. If $f:X\to Y$ is proper, then every fibre $f^{-1}(y)$ is a compact subset of
   $X$.
5. If $f:X\to Y$ is proper and $S\subseteq X$ is closed, then the restriction
   $f|_S:S\to Y$ is proper.
6. If $f:X\to Y$ is proper and $Y$ is locally compact Hausdorff
   ([[def-locally-compact-space]]), then $f$ is a closed map: the image of
   every closed subset of $X$ is closed in $Y$.

These are the stability properties consumed by the closed-support functor
$f_!$ on this page; no choice principle is used in any of them.

## Facts & Assumptions

**Given:** Topological spaces $X$, $Y$, $Z$ and $Y'$, continuous maps as in the Statement, and the intrinsic convention for compactness of subsets.

[F1] A continuous $f:X\to Y$ is proper exactly when $f^{-1}(K)$ is a compact subset of $X$ for every compact subset $K\subseteq Y$ ([[def-proper-continuous-map]]).

[F2] A continuous map carries compact subsets to compact subsets: if $g$ is continuous and $K$ compact, then $g[K]$ is compact ([[thm-compactness-under-continuous-maps]]).

[F3] A closed subset of a compact space is a compact subset of it, and finitely many compact subsets have compact union ([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F4] A finite product of compact spaces is compact; in particular the binary product of two compact spaces is compact, and a one-point space is compact ([[thm-finite-products-of-compact-spaces]]).

[F5] A space is Hausdorff exactly when its diagonal is closed in the product; here $\Delta_Y\subseteq Y\times Y$ is the diagonal of $Y$ ([[thm-hausdorff-iff-the-diagonal-is-closed]], [[def-the-diagonal-of-a-space]]).

[F6] Compactness of subsets is intrinsic: a subset of a subspace carries the same subspace topology whether it is viewed inside the subspace or inside the ambient space, and this intrinsic reading agrees with the ambient reading by covers ([[lem-compactness-of-a-subspace-is-ambient]], [[def-subspace-topology-top]], [[def-compact-space]]).

[F7] The product topology is the initial topology for the projections, so a map into a product is continuous exactly when all its components are, and composites of continuous maps are continuous ([[def-product-topology]], [[def-initial-and-final-topology]], [[def-continuous-map-top]]).

[F8] In a locally compact Hausdorff space every point has an open neighbourhood whose closure is compact, and every compact subset of a Hausdorff space is closed ([[thm-locally-compact-hausdorff-basics]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 Closed inclusions are proper. Let $i:Z\hookrightarrow X$ be the inclusion of a closed subset and let $K\subseteq X$ be compact. Then $i^{-1}(K)=K\cap Z=K$ as a set; the subspace topology that $K$ inherits from $Z$ is the topology it inherits from $X$, because the subspace topology is transitive, so $K$ is a compact subset of $Z$ by [F6]. Hence $i$ is proper by [F1]. [given, F1, F6]

1.2 Composites of proper maps are proper. For $K\subseteq Z$ compact, $(gf)^{-1}(K)=f^{-1}(g^{-1}(K))$; the set $g^{-1}(K)$ is compact by [F1] applied to $g$, and then its $f$-preimage is compact by [F1] applied to $f$. Hence $gf$ is proper. [given, F1, algebra]

1.3 Fibres of a proper map are compact. A one-point space is compact by [F4], so for each $y\in Y$ the preimage $f^{-1}(\{y\})$ is compact by [F1]. [given, F1, F4]

1.4 Restrictions to closed subspaces are proper. Let $S\subseteq X$ be closed, and give $S$ its subspace topology. For a compact $K\subseteq Y$ one has $(f|_S)^{-1}(K)=f^{-1}(K)\cap S$. The set $f^{-1}(K)$ is compact by [F1], and $f^{-1}(K)\cap S$ is closed in the compact space $f^{-1}(K)$ because $S$ is closed in $X$; hence $f^{-1}(K)\cap S$ is a compact subset of $f^{-1}(K)$ by [F3]. Its topology as a subset of $S$ agrees with its topology as a subset of $X$ by [F6], so $(f|_S)^{-1}(K)$ is a compact subset of $S$ and $f|_S$ is proper by [F1]. [given, F1, F3, F6]

1.5 Properness is preserved by base change along a map into a Hausdorff space. Let $K\subseteq Y'$ be compact and put $K_0=u[K]$, a compact subset of $Y$ by [F2]. Then $f^{-1}(K_0)$ is compact by [F1], so the product $f^{-1}(K_0)\times K$ is a compact subspace of $X\times Y'$ by [F4]. The pairing $(f,u):X\times Y'\to Y\times Y'$ is continuous by [F7], and $\Delta_Y$ is closed in $Y\times Y$ by [F5]; hence $X\times_YY'=(f,u)^{-1}(\Delta_Y)$ is closed in $X\times Y'$, and its intersection with the subspace $f^{-1}(K_0)\times K$ is closed in that compact space. Moreover this intersection is exactly $(f')^{-1}(K)$: a pair $(x,y')$ lies in $X\times_YY'$ with $y'\in K$ precisely when $f(x)=u(y')$ and $y'\in K$, and then $u(y')\in K_0$ forces $x\in f^{-1}(K_0)$, so $(f')^{-1}(K)=X\times_YY'\cap(f^{-1}(K_0)\times K)$. By [F3] this is a compact subset of the product $X\times Y'$, and by [F6] its topology as a subset of $X\times_YY'$ agrees with that as a subset of $X\times Y'$; hence $f'$ is proper by [F1]. [given, F1, F2, F3, F4, F5, F6, F7]

1.6 Proper maps into locally compact Hausdorff spaces are closed. Let $f:X\to Y$ be proper with $Y$ locally compact Hausdorff, let $F\subseteq X$ be closed and let $y\in Y\setminus f[F]$. By [F8] there is an open neighbourhood $V$ of $y$ whose closure $\overline V$ is compact. Then $f^{-1}(\overline V)$ is compact by [F1] and $F\cap f^{-1}(\overline V)$ is closed in it, hence compact by [F3]; its image under the continuous map $f$ is $f[F]\cap\overline V$, which is compact by [F2] and closed in $Y$ by [F8]. Therefore $V\setminus(f[F]\cap\overline V)$ is open in $Y$, contains $y$ because $y\in V$ and $y\notin f[F]$, and is disjoint from $f[F]$: a point of it lies in $V$, hence cannot lie in $f[F]\setminus\overline V$, and it is disjoint from $f[F]\cap\overline V$ by construction. Hence $f[F]$ is closed. [given, F1, F2, F3, F8]

2.1 The six stability properties are established: claim 1 by step 1.1, claim 2 by step 1.2, claim 4 by step 1.3, claim 5 by step 1.4, claim 3 by step 1.5 and claim 6 by step 1.6. Every argument uses only the preimage form of properness [F1], the preservation of compactness under continuous maps [F2], closed-in-compact compactness [F3], finite products of compact spaces [F4], the closed-diagonal criterion [F5], the intrinsic subspace conventions [F6], the initial product topology [F7] and the locally compact Hausdorff basis of compact neighbourhoods [F8]; none of these selects points or open sets from an infinite family, so no choice principle is used. [given, step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6] ∎

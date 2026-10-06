---
id: lem-the-immersion-condition-is-open-in-the-weak-topology-for-compact-sources
kind: lemma
title: "For compact sources the immersion condition is open in the weak smooth topology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-weak-compact-open-smooth-topology-on-mapping-spaces, def-immersion-submersion-and-constant-rank-map, def-formal-immersion-between-smooth-manifolds, def-vector-bundle-map-over-a-smooth-base-map, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices, thm-extreme-value-metric, def-compact-space, def-smooth-manifold, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, lem-compactness-of-a-subspace-is-ambient, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Morris W. Hirsch, Differential Topology, Ch. 2 §1, pp. 34–36 (the strong C^r and C^infinity topologies; openness of the immersion condition) and Ch. 2 §3"
      url: https://people.dm.unipi.it/benedett/HIRSCH.pdf
    - title: "John Francis, The h-Principle, Lecture 3: Immersion theory (notes by O. Gwilliam), PDF pp. 1–4: Proposition 2.2 and the flexible-sheaf discussion"
      url: https://sites.math.northwestern.edu/jnf960/classes/hprin/3immersions.pdf
dependency_level: 1
---

## Statement

Let $M$ be a compact smooth $m$-manifold and $N$ a smooth $n$-manifold. Then:

(i) $\operatorname{Imm}(M,N)$ is open in $C^\infty(M,N)$ for the weak compact-open $C^\infty$ topology;

(ii) under $\mathrm{AC}_\omega$ for the canonical smooth tangent bundles and their total-space mapping topology, for every smooth $f:M\to N$ the set of smooth bundle maps $F:TM\to TN$ over $f$ with $F_x$ injective for every $x$ is open in the space of smooth bundle maps over $f$ with the subspace topology inherited from $C^\infty(TM,TN)$; equivalently $\operatorname{FImm}(M,N)$ is open in the subspace of $C^\infty(M,N)\times C^\infty(TM,TN)$ consisting of pairs with a bundle-map second component over the first.

The compactness of $M$ is essential: the condition is imposed at every point, and only a compact source lets one control all of $M$ by finitely many compact chart pieces.

## Facts & Assumptions

**Given:** A compact smooth $m$-manifold $M$, a smooth $n$-manifold $N$, and $\mathrm{AC}_\omega$ for the tangent-bundle topology ([[def-countable-choice]]). The genuine and formal loci are examined at separate arbitrary points.

[F1] Basic open sets of the weak compact-open $C^\infty$ topology on $C^\infty(M,N)$ are determined by finitely many charts $(U_i,\varphi_i)$ of $M$, $(V_i,\psi_i)$ of $N$, compact sets $K_i\subseteq U_i$, integers $r_i\ge0$ and tolerances $\varepsilon_i>0$; the same construction applies to $C^\infty(TM,TN)$ ([[def-weak-compact-open-smooth-topology-on-mapping-spaces]]).

[L1] A smooth map $g$ is an immersion exactly when $\operatorname{rank}dg_x=m$ at every $x$, i.e. some $m\times m$ minor of the Jacobian in any chart pair is nonzero ([[def-immersion-submersion-and-constant-rank-map]]).

[L2] In local trivializations of $TM$ and $TN$ a bundle map over $f$ is given by a smooth matrix function on the source chart, and smoothness of the bundle map is equivalent to smoothness of these local matrices ([[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]], [[def-vector-bundle-map-over-a-smooth-base-map]]).

[L3] A continuous real-valued function on a nonempty compact metric space attains a minimum, so a continuous strictly positive function has a positive minimum ([[thm-extreme-value-metric]], [[def-compact-space]]); a compact manifold is covered by finitely many small compact chart pieces lying inside prescribed chart domains ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]], [[lem-compactness-of-a-subspace-is-ambient]]).

## Proof

**Proof technique:** direct.

1.1 Empty $M$ and $m=0$ have automatic injectivity; if $M$ is nonempty and $m>n$, both loci are empty and open. For (i) in the remaining case, fix an arbitrary immersion $f:M\to N$. Around each source point take a source chart mapped by $f$ into a target chart, and a smaller compact coordinate ball whose interior contains that point. Compactness selects finitely many such pieces $K_i\subset U_i$ covering $M$, with $f(U_i)\subset V_i$. Write $J_i(x)=D(\psi_i\circ f\circ\varphi_i^{-1})(\varphi_i(x))$; its entries are continuous and bounded on $K_i$. [F1, L1, L3, given, construct]

2.1 For each $i$ and $x\in K_i$ some $m\times m$ minor of $J_i(x)$ is nonzero by [L1], so the maximum $\delta_i(x)$ of the absolute determinants of the finitely many minors is a continuous strictly positive function on $K_i$; by [L3] it has a positive minimum $c_i$. Let $B_i\ge1$ bound the absolute values of all entries of $J_i$ on $K_i$. The determinant of an $m\times m$ matrix is a polynomial in the entries, so there is $\eta_i>0$, depending only on $m$, $B_i$, $c_i$, such that any matrix $J'$ with $|J'-J_i(x)|<\eta_i$ entrywise satisfies $|\det J'-\det J_i(x)|<c_i/2$ for the maximizing minor, hence has a nonzero $m\times m$ minor. Choosing the finitely many $\eta_i$ uses no choice, and may be taken in the form $2^{-k}$ with the least suitable $k$. [L1, L3, step 1.1, algebra, choose]

3.1 Let $\mathcal U$ be the basic weak open set of maps $g:M\to N$ determined by the data $(U_i,\varphi_i)$, $(V_i,\psi_i)$, $K_i$, $r_i=1$, $\varepsilon_i=\eta_i$. Its definition constrains the partial derivatives of first order of $\psi_i\circ g\circ\varphi_i^{-1}$ on $\varphi_i(K_i)$ to differ from those of $f$ by less than $\eta_i$; in particular every entry of the Jacobian of $g$ differs from the corresponding entry of $J_i$ by less than $\eta_i$ at every point of $K_i$. By step 2.1 every such $g$ has rank $m$ at every point of $M$, so by [L1] every $g\in\mathcal U$ is an immersion. Hence $\operatorname{Imm}(M,N)$ contains the basic neighbourhood $\mathcal U$ of $f$ and is open. [F1, L1, step 2.1, algebra]

4.1 For (ii), independently fix an arbitrary fibrewise injective pair $(f,F)$, whose base map need not be an immersion. Choose compact pieces $K_i$ and induced bundle charts over source and target chart domains. In such charts a bundle map has the form $(x,v)\mapsto(g(x),A_i(x)v)$. The compact set of vectors $(x,e_j)$ with $x\in K_i$, $1\le j\le m$, is a valid compact test set in $TM$; zeroth-order control of the images of these vectors controls every column of $A_i$. Zeroth-order control of $g$ keeps these images in the same target bundle chart. Each matrix $A_i$ has rank $m$ by the injectivity of $F$, so its own maximum of absolute $m$-minors has a positive minimum on $K_i$. Apply the polynomial determinant estimate of step 2.1 to these matrices, independently of $df$. This gives a neighbourhood of the pair $(f,F)$, among all bundle-map pairs, on which all fibre maps remain injective. Restricting that neighbourhood to the fixed-base fibre proves its openness as well. [F1, L2, step 2.1, construct] ∎

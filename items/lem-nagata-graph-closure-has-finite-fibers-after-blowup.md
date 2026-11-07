---
id: lem-nagata-graph-closure-has-finite-fibers-after-blowup
kind: lemma
title: A blowup makes the graph closure locally an immersion over the base
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-nagata-quasi-affine-quasi-domination-preserving-an-open
  - lem-nagata-product-blowup-dominates-factor-blowups
  - lem-nagata-finite-affine-blowup-chart-gluing
  - lem-nagata-admissible-blowup-universal-property-and-properness
  - cor-localisation-commutes-with-kernels-images-and-cokernels
  - thm-separatedness-gluing-overlap-criterion
proof_strategy: direct
axiom_use: No choice principle is assumed. Only a finite affine cover, finite products of coherent ideals, and explicit fraction-chart strict transforms are used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Brian Conrad, Deligne's notes on Nagata compactifications, August 10, 2007 preprint
      url: https://math.stanford.edu/~conrad/papers/nagatafinal.pdf
      locator: Section 1 strict-transform calculation and Lemma 1.1, internal pp. 5–6; Theorem 2.4 general case through the finite-fiber assertion, internal pp. 17–19; all read in full.
    - title: Pierre Deligne, Le théorème de plongement de Nagata, Kyoto Journal of Mathematics 50 (2010)
      url: https://publications.ias.edu/sites/default/files/Le%20th%C3%A9or%C3%A8me%20de%20plongement%20de%20Nagata.pdf
      locator: Theorem 1.2 general case before the Zariski Main application, printed p. 666, read in full.
---

## Statement

Let $p:Y\to X$ be a separated finite-type morphism of Noetherian schemes. Let $U\subseteq V\subseteq X$ be opens with $U$ dense in $X$, and let $f:U\to Y$ be an $X$-morphism whose graph is closed in $V\times_XY$. There is a coherent ideal $\mathcal J$ on $X$, unit on $V$, such that for $\beta:X'=\operatorname{Bl}_{\mathcal J}(X)\to X$ the scheme-theoretic closure $C$ of the unchanged graph of $f$ in $X'\times_XY$ has the following properties. The map $C\to X'$ is separated and of finite type, and it has a finite open cover $C_1,\ldots,C_r$ such that each $C_i\to X'$ is a locally closed immersion. In particular every fiber has at most $r$ points. One can take $r$ to be the size of a finite affine cover of $Y$ subordinate to affine opens of $X$.

The morphism $\beta$ is proper and is the identity over all of $V$, and $C|_V$ is the original graph over $U$. No reducedness or schematic-density hypothesis on the original $U$ is imposed. Empty schemes are included. This assertion supplies the finite-fiber reduction itself; it does not assert a quasi-affine factorization of $C\to X'$.

## Statement references

[Conrad, Theorem 2.4 general case, internal pp. 17–19](https://math.stanford.edu/~conrad/papers/nagatafinal.pdf)

## Facts & Assumptions

**Given:** The Noetherian schemes, separated finite-type morphism, dense open inclusions and section with closed graph over $V$.

[F1] For a finite-type quasi-affine target and a section on a dense open $U_i\subseteq V_i$, whose graph is closed over $V_i$, a single coherent-ideal blowup unit on $V_i$ supplies an extending map on an open of the blowup, with closed graph in the full product. [[lem-nagata-quasi-affine-quasi-domination-preserving-an-open]]

[F2] A finite product ideal blowup maps to every factor blowup, by an iterated blowup of the remaining image ideals. [[lem-nagata-product-blowup-dominates-factor-blowups]]

[F3] Blowup charts are $A[I/a]\subseteq A_a$, compatible with localization. Noetherian coherent-ideal blowups are Noetherian, proper, separated and the identity off the center. [[lem-nagata-finite-affine-blowup-chart-gluing]] [[lem-nagata-admissible-blowup-universal-property-and-properness]]

[F4] Exact localization commutes with finite equalizers, and affine opens over a separated affine base have affine intersections. [[cor-localisation-commutes-with-kernels-images-and-cokernels]] [[thm-separatedness-gluing-overlap-criterion]]

## Proof

1.1 We recall two kernel computations needed below. The scheme-theoretic image of a separated morphism between Noetherian schemes has coherent ideal $\ker(\mathcal O_S\to r_*\mathcal O_D)$: over an affine base, a finite affine cover of the inverse image and its affine pairwise intersections express sections by a finite equalizer; restriction to a principal base open localizes that equalizer by [F4]. Its kernel ideal therefore localizes, and Noetherianity makes the ideal and its finite relation kernels finite. This constructs in particular the scheme-theoretic closures below, and shows that these closures commute with open restriction. Second, for a closed subscheme $Z=V(K)\subseteq\operatorname{Spec}A$, its blowup along the image of $I$ embeds closed in $\operatorname{Bl}_I(\operatorname{Spec}A)$. On the $a$-chart the map is the surjection $A[I/a]\to(A/K)[\overline I/\bar a]$, with kernel $KA_a\cap A[I/a]$. It is surjective because every target fraction generator lifts; the kernel follows by mapping into $(A/K)_a$. These chart maps agree on overlaps by [F3]. They also show that this closed blowup is the scheme-theoretic closure of $Z$ off the center: the inverse image of the $a$-chart in that open is $\operatorname{Spec}(A/K)_a$, whose kernel is exactly the displayed one. These calculations localize, giving the global assertions. [F3, F4, given, construct, algebra]

2.1 Choose a finite affine cover $Y_1,\ldots,Y_r$ of $Y$ such that each maps into an affine open of $X$. Each $Y_i\to X$ is quasi-affine. Indeed, over any affine open $W\subseteq X$ its inverse image $E=Y_i\times_XW$ is an open of the affine $Y_i$. Its graph in $E\times W$ is closed since the affine scheme $W$ is separated over $\operatorname{Spec}\mathbb Z$. Thus $E$ is a closed subscheme of the open $E\times W$ in the affine scheme $Y_i\times W$, hence an open subscheme of an affine closed subscheme of $Y_i\times W$: take its scheme-theoretic closure there by step 1.1. This is precisely quasi-affineness over $W$. Put $U_i=f^{-1}(Y_i)$ and let $Z_i\subseteq X$ be its scheme-theoretic closure, constructed by step 1.1. Then $U_i$ is open and schematically dense in $Z_i$. Set $V_i=Z_i\cap V$. The section $U_i\to Y_i\times_XZ_i$ has graph closed over $V_i$, by restricting the given closed graph to the open target $Y_i$ and the closed base $Z_i$. Apply [F1] over $Z_i$, obtaining a coherent ideal $I_i$ unit on $V_i$, a blowup $P_i\to Z_i$, an open $T_i\subseteq P_i$ containing $U_i$, and a closed graph $T_i\hookrightarrow P_i\times_XY_i$ extending the given one. [F1, F4, step 1.1, construct]

3.1 Lift $I_i$ to the preimage ideal $J_i$ under $\mathcal O_X\to\mathcal O_{Z_i}$. It is coherent by Noetherianity and the local ideal description; its restriction to $V$ is unit since the corresponding quotient is zero on $V_i$. Its image on $Z_i$ is exactly $I_i$. Form $\mathcal J=\prod_iJ_i$ and $X'=\operatorname{Bl}_{\mathcal J}X$. By [F2] there are canonical maps $X'\to B_i=\operatorname{Bl}_{J_i}X$. By step 1.1 the scheme $P_i$ is closed in $B_i$. Let $Z_i'=X'\times_{B_i}P_i$, a closed subscheme of $X'$. Pulling back the graph from step 2.1 gives an open $T_i'\subseteq Z_i'$ and a closed immersion $T_i'\hookrightarrow Z_i'\times_XY_i$, whose composite with $Z_i'\to X'$ is its structure map. All blowups are unchanged over $V$ by [F3]. Over $U_i$ these maps are the identity, and the pulled-back graph is the original one. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Let $C$ be the scheme-theoretic closure of the graph over $U$ in $X'\times_XY$, using step 1.1. Its restriction $C_i$ to the open $X'\times_XY_i$ is the closure there of the graph over $U_i$. The graph in step 3.1 is closed not only in $Z_i'\times_XY_i$ but in $X'\times_XY_i$, since $Z_i'$ is closed in $X'$. It contains that original graph, so its defining ideal vanishes on it; by the kernel characterization of closure, $C_i$ is a closed subscheme of this pulled-back graph. Consequently $C_i\to X'$ factors as a closed immersion into $T_i'$, followed by the open immersion $T_i'\to Z_i'$ and the closed immersion $Z_i'\to X'$. This is a locally closed immersion: extend the open of $Z_i'$ to an open of $X'$, in which $T_i'$ is closed, and use the composite closed immersion there. The finitely many $C_i$ cover $C$. Each contributes at most one point to any fiber, so every fiber has at most $r$ points. [F3, step 1.1, step 3.1, construct, algebra]

5.1 The product $X'\times_XY$ is separated and finite type over $X'$ by the given properties of $p$, so its closed subscheme $C$ has the same properties; its defining ideal is coherent by step 1.1. Properness of $\beta$ and its identity over $V$ follow from [F3], since $\mathcal J$ is unit there. Over $V$ the original graph is already closed by hypothesis, and closure commutes with open restriction by step 1.1, so $C|_V$ is precisely that graph. Empty $U_i$ gives the empty $Z_i$ and the lifted unit ideal, which causes no restriction. If $Y$ is empty, the given section and density force $X$ empty. Empty bases and empty fibers are covered by the same chart and kernel calculations. No quasi-affine factorization of $C\to X'$ has been used. [F3, step 1.1, step 2.1, step 3.1, step 4.1, algebra] ∎

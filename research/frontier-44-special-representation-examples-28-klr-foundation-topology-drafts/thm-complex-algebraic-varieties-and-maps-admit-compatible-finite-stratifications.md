---
id: thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications
kind: theorem
title: Complex algebraic varieties and maps admit compatible finite stratifications
status: draft
origin: session
deps: [def-finite-complex-algebraic-whitney-stratification-and-control-data, lem-generic-complex-algebraic-whitney-regularity, lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications, thm-generic-smoothness-characteristic-zero, lem-classical-variety-noetherian-components, lem-dimension-nonempty-open-subset, thm-nonempty-regular-locus-reduced-variety-perfect-field, thm-regular-equals-smooth-over-perfect-field, thm-holomorphic-implicit-function-theorem, thm-heine-borel-rn, thm-compactness-under-continuous-maps, thm-finite-products-of-compact-spaces, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Mark Goresky, Lecture notes on sheaves and perverse sheaves, Section 8
      url: https://www.math.ias.edu/~goresky/pdf/all2.pdf
---

## Statement

Assume AC. Let $f:X\to Y$ be one morphism of reduced quasi-projective complex algebraic varieties, and prescribe finitely many closed or locally closed algebraic subsets in source and target. There exist finite smooth complex algebraic Whitney (a),(b) stratifications with frontier on $X$ and $Y$ respecting all prescribed subsets, such that each source stratum maps surjectively and smoothly onto one target stratum. A further finite algebraic stratification may be prescribed and refined. The analytic strata are smooth complex manifolds and the restrictions are smooth submersions. If $f$ is proper in the analytic topology, in particular if it is a projective algebraic morphism, the whole restriction $f^{-1}(T)\to T$ over any target stratum is proper; no restriction of $f$ to a nonclosed individual source stratum is asserted proper.

## Facts & Assumptions

**Given:** AC, reduced quasi-projective $X,Y$, one algebraic morphism $f$, and the finite prescribed families.

[F1] Smooth frontier strata, Whitney conditions and tube-independent terminology are those of [[def-finite-complex-algebraic-whitney-stratification-and-control-data]].

[F2] A finite smooth frontier partition respecting closed sets exists by the dimension-decreasing construction of [[lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications]], whose source-partition proof uses [[lem-classical-variety-noetherian-components]], [[lem-dimension-nonempty-open-subset]], [[thm-nonempty-regular-locus-reduced-variety-perfect-field]] and [[thm-regular-equals-smooth-over-perfect-field]].

[F3] Given a smooth irreducible algebraic lower stratum and finitely many incident smooth upper strata, a dense lower-stratum open satisfies both Whitney conditions with all of them ([[lem-generic-complex-algebraic-whitney-regularity]]).

[F4] A smooth irreducible source morphism is smooth over a dense target open; if dominant, that open may be chosen in the image ([[thm-generic-smoothness-characteristic-zero]]).

[F5] Smooth complex algebraic strata have holomorphic analytic charts, as in the analytic paragraph of [[lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications]], using [[thm-holomorphic-implicit-function-theorem]].

[F6] Closed bounded Euclidean sets are compact, continuous images of compact spaces are compact, and finite compact products are compact ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]], [[thm-finite-products-of-compact-spaces]]).

[A1] AC is inherited from these suppliers ([[def-axiom-of-choice]]).

## Proof

1.1 Replace every prescribed locally closed subset $A$ by the two prescribed closed subsets $\overline A$ and $\overline A\setminus A$; their difference recovers $A$. Do this also for every stratum of a prescribed finite algebraic partition. It suffices to respect the resulting finite lists of closed subsets. First refine the smooth-partition construction [F2] to construct a Whitney partition of any closed residual variety $R$, compatible with a finite list of closed sets and with any previously fixed smooth strata outside $R$ whose closures are to be respected. At each step take its irreducible components $R_i$, remove their nonsmooth loci and intersections with other components, and remove each prescribed closed subset not containing $R_i$. This gives dense smooth opens $L_i$. For every previously emitted or fixed upper stratum $S$, remove $R_i\cap\overline S$ if $R_i$ is not contained in $\overline S$. If it is contained, it lies in the proper boundary of $S$, so it has smaller dimension and [F3] gives a dense open of $L_i$ Whitney-regular with $S$. Remove the closure in $R_i$ of the exceptional subset; it is still proper because its dimension is smaller than $\dim R_i$. Finitely many upper strata leave nonempty dense smooth opens $U_i$. [F1, F2, F3, A1, construct]

2.1 Emit the $U_i$, add their closures $R_i$ to the closed-set list, and recurse on the closed complement $R\setminus\bigcup_iU_i$. Its dimension drops because every component lost a dense open. The complement therefore has a finite Whitney partition by induction on dimension. Pairs of strata in the same round have no frontier relation, since the opens miss all other components. Every later lower stratum was chosen Whitney-regular with every incident earlier upper stratum by step 1.1. Prescribed closures ensure frontier relations, and boundaries have smaller dimension by [F2]. Thus this construction supplies finite Whitney partitions, including compatibility with the fixed external upper strata. In a quasi-projective ambient space the finite affine-chart version of [F3] applies. [F1, F2, F3, step 1.1, construct]

3.1 Now construct the compatible map partitions by decreasing target residual dimension. Start with $R=Y$ and source residual $f^{-1}(R)=X$. At a later round maintain the original closed-set lists and all closures of previously emitted source and target strata. Partition $f^{-1}(R)$ by step 2.1, including its Whitney compatibility with all previously emitted source strata. For each irreducible component $R_i$ of $R$, choose a dense smooth open $L_i$ respecting target prescriptions and Whitney-compatible with all previously emitted target strata, by the construction in step 1.1. For each new source stratum $Z_\alpha$, if its image closure is not $R_i$, remove that image closure's proper intersection with $R_i$. If its image closure is $R_i$, use [F4] to select a dense target open on which $Z_\alpha\to R_i$ is smooth and onto. Intersect these finitely many opens with $L_i$ to obtain a nonempty dense open $V_i$ in each component. [F2, F3, F4, step 1.1, step 2.1, construct]

4.1 Emit the $V_i$ as target strata and the nonempty $Z_\alpha\cap f^{-1}(V_i)$ as source strata. These are open subsets of the smooth irreducible $Z_\alpha$, hence smooth irreducible and Whitney-regular with one another and with previously fixed upper source strata wherever incident: their tangent spaces equal those of $Z_\alpha$, and the Whitney sequence conditions are inherited by restriction. Each maps smoothly and onto $V_i$ by its selection in step 3.1. Source frontier relations within the open $f^{-1}(\bigcup_iV_i)$ are inherited from the source partition; a stratum closure over $R_i$ misses every $V_j$ for $j\ne i$. Target strata remain Whitney-regular with earlier target strata by restriction from $L_i$. [F1, F2, F3, F4, step 3.1, algebra]

5.1 Remove $\bigcup_iV_i$ from $R$, restrict to the new closed source residual, add all newly emitted stratum closures to the respective lists, and repeat. The target dimension strictly decreases each round, so the process terminates after finitely many rounds. Every source point lies over one emitted target stratum and is therefore included. Future source partitions are chosen Whitney-compatible with every earlier source stratum by step 2.1, and future target dense opens are chosen Whitney-compatible with earlier target strata by step 1.1. Closed-set compatibility at each round makes all earlier closures unions of current or future strata. This gives the full finite source/target Whitney frontier stratifications and the morphism compatibility simultaneously. [F1, F2, F3, step 2.1, step 3.1, step 4.1, construct]

6.1 The analytic smoothness and submersion claims follow from [F5] and the same polynomial Jacobian charts for the smooth restrictions. If the original analytic map is proper, its restriction over $T\subseteq Y$ is proper: for compact $C\subseteq T$, the inclusion into $Y$ is continuous, so $C$ is compact in $Y$, and $f^{-1}(C)$ is compact and contained in $f^{-1}(T)$. This uses properness only on the whole inverse image, even though its individual source strata may not be closed. Empty spaces and empty prescribed subsets add no strata. No tube-control, isotopy or triangulation existence is claimed by this theorem. [F5, A1, step 5.1, given]

7.1 For the projective example, factor $f$ as a closed algebraic embedding into $Y\times\mathbb P^N(\mathbb C)$ followed by projection. Complex projective space is the continuous image of the unit sphere in $\mathbb C^{N+1}$ under $z\mapsto[z]$, so it is compact by [F6]. An algebraic closed embedding is analytically closed: in each chart its homogeneous polynomial equations have continuous coefficients and their common zero set is closed. For compact $C\subseteq Y$, the inverse image of $C$ is therefore a closed subset of the compact product $C\times\mathbb P^N(\mathbb C)$, and is compact. This proves actual analytic properness for the projective maps needed by the consumers. [F6, step 6.1, algebra] ∎

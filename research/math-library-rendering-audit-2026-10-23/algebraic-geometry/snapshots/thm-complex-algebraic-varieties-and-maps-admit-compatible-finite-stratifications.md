---
id: thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications
kind: theorem
title: "Complex algebraic varieties and maps admit compatible finite stratifications"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 3
deps: [def-axiom-of-choice,
       def-finite-complex-algebraic-whitney-stratification-and-control-data,
       lem-classical-variety-noetherian-components,
       lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications,
       lem-dimension-nonempty-open-subset,
       lem-generic-complex-algebraic-whitney-regularity,
       lem-irreducible-complex-varieties-are-analytically-connected,
       thm-compactness-under-continuous-maps,
       thm-finite-products-of-compact-spaces,
       thm-generic-smoothness-characteristic-zero,
       thm-heine-borel-rn,
       thm-holomorphic-implicit-function-theorem,
       thm-nonempty-regular-locus-reduced-variety-perfect-field,
       thm-regular-equals-smooth-over-perfect-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "Theorem 8.10 (algebraic Whitney stratifications and stratified maps)"
---

## Statement

Assume AC. Let $f:X\to Y$ be one morphism of reduced quasi-projective complex
algebraic varieties, and prescribe finitely many closed or locally closed
algebraic subsets in source and target. There exist finite smooth complex
algebraic Whitney (a),(b) stratifications with frontier on $X$ and $Y$
respecting all prescribed subsets, such that each source stratum maps
surjectively and smoothly onto one target stratum. A further finite algebraic
stratification may be prescribed and refined. The analytic strata are smooth
complex manifolds and the restrictions are smooth submersions. If $f$ is proper
in the analytic topology, in particular if it is a projective algebraic
morphism, the whole restriction $f^{-1}(T)\to T$ over any target stratum is
proper; no restriction of $f$ to a nonclosed individual source stratum is
asserted proper.

## Facts & Assumptions

**Given:** AC, reduced quasi-projective complex algebraic varieties $X,Y$, one morphism $f:X\to Y$, and finite prescribed families of closed or locally closed algebraic subsets of $X$ and of $Y$.

[F1] Smooth frontier strata and the Whitney (a),(b) conditions for an incident pair are those of [[def-finite-complex-algebraic-whitney-stratification-and-control-data]].

[F2] Finite smooth frontier partitions respecting finite families of closed subsets exist by the dimension-decreasing construction of [[lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications]], whose source-partition proof uses the finite component decomposition, the strict dimension drop of proper closed subvarieties and the density of the regular locus ([[lem-classical-variety-noetherian-components]], [[lem-dimension-nonempty-open-subset]], [[thm-nonempty-regular-locus-reduced-variety-perfect-field]], [[thm-regular-equals-smooth-over-perfect-field]]).

[F3] Given a smooth irreducible lower stratum and finitely many incident smooth upper strata inside an algebraic variety, a dense open subset of the lower stratum satisfies both Whitney conditions with every one of them ([[lem-generic-complex-algebraic-whitney-regularity]]).

[F4] A morphism from a smooth irreducible variety to an irreducible target over $\mathbb C$ is smooth over a dense open subset of the target; if it is dominant, that open may be shrunk to lie in the image ([[thm-generic-smoothness-characteristic-zero]]).

[F5] Smooth complex algebraic strata carry holomorphic analytic charts, by the locally standard smooth presentation and the holomorphic implicit function theorem, exactly as in the analytic paragraph of [[lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications]] ([[thm-holomorphic-implicit-function-theorem]]).

[F6] Closed bounded Euclidean sets are compact, continuous images of compact spaces are compact, and finite products of compact spaces are compact ([[thm-heine-borel-rn]], [[thm-compactness-under-continuous-maps]], [[thm-finite-products-of-compact-spaces]]).

[F7] Every smooth irreducible finite-type complex algebraic piece is analytically connected, and its analytic closure agrees with its Zariski closure ([[lem-irreducible-complex-varieties-are-analytically-connected]]); this is the connectedness and frontier comparison needed by [F1].

[A1] AC is inherited from the fiber-dimension, Whitney-regularity, connectedness and chart suppliers above and is used only through them ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Replace every prescribed locally closed subset $A$ by the two prescribed closed subsets $\overline A$ and $\overline A\setminus A$; their difference recovers $A$, and it suffices to respect the resulting finite list of closed subsets. Refine the smooth-partition construction of [F2] to construct, for a closed residual variety $R$ together with a finite list of prescribed closed subsets and finitely many previously fixed smooth strata outside $R$ whose closures must be respected, a Whitney partition of $R$ compatible with all of them: take the irreducible components $R_i$ of $R$, remove their nonsmooth loci and their intersections with the other components, and remove every prescribed closed subset not containing $R_i$, obtaining dense smooth opens $L_i$; then for every previously fixed upper stratum $S$, remove $R_i\cap\overline S$ when $R_i\not\subseteq\overline S$, and when $R_i\subseteq\overline S$ use [F3] to remove the closure in $R_i$ of the exceptional subset of [F3], which is proper because it has dimension smaller than $\dim R_i$. Finitely many upper strata leave nonempty dense smooth opens $U_i\subseteq R_i$, and [F3] makes each $U_i$ Whitney-regular with every incident previously fixed upper stratum. [F1, F2, F3, A1, construct]

2.1 Emit the $U_i$ as strata, add their closures $R_i$ to the list of closed subsets to be respected, and recurse on the closed complement $R\setminus\bigcup_iU_i$, whose dimension drops because every component lost a dense open subset. The recursion terminates by induction on dimension, producing a finite partition of $R$ into smooth irreducible locally closed strata. Strata of the same round have no frontier relation, since each $U_i$ misses all other components $R_j$. Every pair of incident strata has its upper stratum emitted earlier, and when the lower stratum was emitted step 1.1 imposed Whitney (a) and (b) with that upper stratum; boundaries have strictly smaller dimension by [F2]. The respected closures make every stratum closure a union of strata. In a quasi-projective ambient space, cover it by finitely many affine coordinate charts and apply the affine-chart version of [F3]; a sequence in $R$ converging to a point meets only finitely many components of the chart intersections, so passing to a subsequence in one component reduces the conditions to the chart version. Thus Whitney partitions compatible with a finite list of closed sets and with fixed external upper strata exist. [F1, F2, F3, step 1.1, construct]

3.1 Construct the map-compatible partitions by decreasing target residual dimension. Start with target residual $R=Y$ and source residual $f^{-1}(R)=X$, and at each later round maintain the original closed-set lists together with the closures of all previously emitted source and target strata. Partition the source residual $f^{-1}(R)$ by step 2.1, so that it is Whitney-compatible with all previously emitted source strata. For each irreducible component $R_i$ of $R$, choose a dense smooth open $L_i\subseteq R_i$ as in step 1.1, respecting the target prescriptions and Whitney-regular with all previously emitted target strata. For every new source stratum $Z_\alpha$ compute the closure of its image in $R$; if that closure is not $R_i$, remove its intersection with $R_i$, a proper closed subset; if the closure is $R_i$, then $Z_\alpha\to R_i$ is dominant and [F4] supplies a dense open subset of $R_i$ on which the restriction is smooth and onto. Intersecting the finitely many resulting dense opens with $L_i$ gives a nonempty dense open $V_i\subseteq R_i$. [F2, F3, F4, step 1.1, step 2.1, construct]

4.1 Emit the $V_i$ as target strata and the nonempty pieces $Z_\alpha\cap f^{-1}(V_i)$ as source strata. Each such piece is open in the smooth irreducible stratum $Z_\alpha$, hence smooth irreducible and locally closed, and it is Whitney-regular with every incident previously fixed upper source stratum, because Whitney conditions are local and were imposed on all of $Z_\alpha$ in step 2.1; with the pieces of the same round it has no frontier relation except through closures, which the later rounds make unions of strata because every closure is added to the respected list. Each piece maps smoothly and onto $V_i$ by its selection in step 3.1, and target strata are Whitney-regular with earlier target strata since $V_i\subseteq L_i$. Source frontier relations inside $f^{-1}(\bigcup_iV_i)$ are inherited from the source partition, and a stratum closure over $R_i$ misses every $V_j$ with $j\ne i$. [F1, F2, F3, F4, step 3.1, algebra]

5.1 Remove $\bigcup_iV_i$ from $R$, restrict both residuals and both lists, add all newly emitted stratum closures to the respective lists, and repeat. The target dimension strictly decreases each round, so after finitely many rounds every target point and every source point has been placed: a source point lies over one emitted target stratum and is contained in one emitted piece. Future source partitions are chosen Whitney-compatible with every earlier source stratum by step 2.1, and future target opens are chosen Whitney-compatible with earlier target strata in step 3.1, so every incident pair is covered; the closure-bookkeeping makes all stratum closures unions of strata. Each emitted piece is irreducible and nonempty, so [F7] makes it analytically connected and identifies its analytic closure with the algebraic closure tracked by the construction. This yields finite smooth Whitney frontier stratifications of $X$ and $Y$, respecting all prescribed subsets (including the strata of any prescribed finite algebraic stratification, which were treated as prescribed sets in step 1.1), with each source stratum mapping smoothly and surjectively onto one target stratum. [F1, F2, F3, F7, step 2.1, step 3.1, step 4.1, construct]

6.1 The analytic clauses follow from [F5] and the same locally standard smooth Jacobian charts: the strata are smooth complex manifolds, and each smooth restriction is, in those charts, a holomorphic map whose differential is onto and whose rank is locally constant, hence a submersion. If $f$ is proper in the analytic topology and $T$ is a target stratum, then for every compact subset $C\subseteq T$ the inclusion $T\hookrightarrow Y$ is continuous, so $C$ is compact in $Y$, and $f^{-1}(C)\subseteq f^{-1}(T)$ is compact by properness of $f$; hence the restriction $f^{-1}(T)\to T$ is proper, although individual source strata inside $f^{-1}(T)$ may fail to be closed. Empty spaces and empty prescribed families add no strata, and no tube control, isotopy or triangulation existence is claimed. [F5, A1, step 5.1, given]

7.1 For the projective case factor $f$ as a closed algebraic embedding $i:X\hookrightarrow Y\times\mathbb P^N(\mathbb C)$ followed by the projection $\pi:Y\times\mathbb P^N(\mathbb C)\to Y$. Complex projective space is the continuous image of the unit sphere in $\mathbb C^{N+1}$ under $z\mapsto[z]$, hence compact by [F6]. A closed algebraic embedding is analytically closed, because in each chart its defining polynomial equations have continuous coefficients and their common zero set is closed. For a compact $C\subseteq Y$ the set $\pi^{-1}(C)=C\times\mathbb P^N(\mathbb C)$ is compact by [F6], and $f^{-1}(C)=i^{-1}(C\times\mathbb P^N(\mathbb C))$ is a closed subset of it, hence compact. Therefore $f$ is analytically proper, and step 6.1 applies; this is the analytic properness used by the consumers. [F6, step 6.1, algebra] ∎

## Remarks

- The theorem produces Whitney stratifications and map compatibility only. Tube control data, conical neighbourhoods, radial collars and triangulations are separate constructions, and the theorem asserts nothing about them. The restriction of $f$ to a single nonclosed source stratum need not be proper even when $f$ is proper.

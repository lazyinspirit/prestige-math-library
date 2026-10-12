---
id: lem-complex-algebraic-stratifications-have-finite-conical-cochain-models
kind: lemma
title: "Complex algebraic constructible complexes have finite conical cochain models"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-axiom-of-choice,
       lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model,
       lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent,
       thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods,
       thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications,
       thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology,
       def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces,
       lem-analytic-six-operation-support-and-trace-calculus,
       lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Beilinson-Bernstein-Deligne, Faisceaux pervers (Asterisque 100), 1.4 and 2.1 (constructibility and local cohomology); Bernstein-Lunts, Equivariant Sheaves and Functors, Part I (finite resolution construction)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC ([[def-axiom-of-choice]]). For quasi-projective complex varieties and
finitely many algebraic operations/support collections, the geometric suppliers
give individually chosen compatible smooth Whitney strata, conical local
products and finite deleted-boundary triangulation models for each operation.
No simultaneous stratification of an arbitrary cyclic diagram respecting all
marked supports is asserted. On any separated finite-type complex variety,
bounded algebraically constructible objects have bounded finite ordinary and
compact-support cohomology, ordinary derived Hom and bounded constructible
internal Hom, with coefficient-extension compatibility, by these models locally
and finite affine-open descent globally. A noncompact variety is not asserted
to be a finite compact realization.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology]] is used with its explicit hypotheses.

[F4] The actual stated local construction of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with its explicit hypotheses.

[F5] The actual stated local construction of [[lem-locally-split-cech-nerves-give-derived-cartesian-sheaf-descent]] is used with its explicit hypotheses.

[F6] The operations are [[def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces]], and actual proper-support fibre/base-change/composition maps are [[lem-analytic-six-operation-support-and-trace-calculus]]. The all-sheaf compact-support bound on every open in a finite deleted-boundary fibre model is [[lem-finite-polyhedral-covering-dimension-bounds-all-sheaf-cohomology]].

[A1] AC is inherited exactly for the geometric and analytic supplier constructions ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For each individual quasi-projective map and support collection, apply the actual compatible-stratification and control suppliers, followed by their fixed-space triangulation supplier. This is the precise geometric scope actually authored upstream. On each supplied finite deleted-boundary model the incidence theorem proves the finite local/global cochains, internal-Hom constructibility and field-extension comparison. Choices for different operations need not form one jointly stratified cyclic diagram. [given, F1, F2, F3, F4, F5, A1]

1.2 A separated finite-type variety has a finite affine-open cover, whose finite intersections are affine: its closed diagonal identifies each two-chart intersection with a closed subscheme of the affine chart product, and iterate. Each intersection is quasi-projective. Apply the local geometric/incidence construction there. The actual finite open-cover Cech derived augmentation assembles their cochains. Only finitely many intersection degrees occur, and the finitely many local cohomology bounds give a uniform finite total bound. Hence ordinary/global derived Hom and cohomology are bounded and finite, and their finite complexes commute with field extension. Compact-support models are assembled by the ordinary open/closed support resolution and the same finite local models. Internal Hom is locally computed on the finite affine cover and its bounds are uniform; its algebraic constructibility is local and a finite refinement of the locally closed support pieces globalizes it. [given, F1, F2, F3, F4, F5, A1]

2.1 For one morphism between quasi-projective varieties, choose a locally closed embedding of its source into $\mathbb P^N$ and take the reduced closure of its graph in $\mathbb P^N\times Y$. The graph is locally closed, hence open in that closure; thus the map factors as an open inclusion $j:X\hookrightarrow\overline X$ followed by the projective projection $p:\overline X\to Y$. The closure is quasi-projective and $p$ is analytically proper by [F1]. Each algebraic fibre has a deleted-boundary model of dimension at most twice the source dimension by [F3]; [F6] therefore bounds compact-support cohomology of every sheaf on every fibre open by that same integer. Thus the support operations satisfy their required all-fibre-open hypothesis, rather than merely a bound for constructible coefficients. Choose [F1]'s one-map Whitney strata for $p$, respecting the boundary $\overline X\setminus X$ and the finite input supports. Extension by zero $j_!$ is exact; $Rj_*$ is locally computed by the ordinary sections on the open part of [F2]'s controlled link-cone chart, and [F3] and [F4] give the bounded finite, locally constant complex-stratum model and its actual restriction maps. The proper whole-fibre local trivializations of [F2] give, over a small ball in each target stratum, a product with a compact stratified fibre. The same derived product reconstruction used in [F3] identifies the constructible input there with a fibre object constant in the ball direction, so its pushforward is its finite fibre cochain complex constant along that ball. Finitely many target strata give a uniform amplitude bound; ordinary direct-image composition (inverse image is exact, so direct image preserves injectives) and the proper-support composition of [F6] show $Rp_*Rj_*$ and $Rp_*j_!$ compute $Rf_*$ and $Rf_!$ respectively. All models and comparisons commute with field extension by [F3] and [F4]. For a general separated finite-type map, work over an affine target chart, take a finite affine cover of its source preimage and finite intersections, and apply this construction to their finite disjoint union mapping to the target. Prescribe the needed supports in that one-map construction, obtaining one target stratification for the finitely many terms. The actual finite open-cover derived augmentation of [F5] then assembles ordinary pushforward; its extension-by-zero support resolution assembles proper-support pushforward. Thus the outputs are bounded algebraically constructible locally on the target and hence globally by a finite affine cover. This proof uses a constructed projective factorization on each quasi-projective piece and proper whole-fibre triviality, rather than inferring whole-fibre control from local source charts. No joint stratification of an arbitrary cyclic diagram is required. [given, F1, F2, F3, F4, F5, F6, A1, step 1.1, step 1.2] ∎

## Remarks

- Steps 1.1–2.1 use the actual derived-incidence and simplicial-descent suppliers for the stated finite cochain and open-cover comparisons.
- **Scope.** The global finiteness conclusion is obtained by finite
  affine-open descent on separated finite-type varieties; it is not obtained
  from a compactification of a general separated variety, and no noncompact
  variety is asserted to be a finite compact realization.

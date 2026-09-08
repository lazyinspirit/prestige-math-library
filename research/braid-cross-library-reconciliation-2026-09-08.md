# Braid cross-library reconciliation — 2026-09-08

Supervisor integration: all listed canonical page deltas are now applied.
The combined counts below were a working snapshot while QG/KL were still
being enriched; current counts and the quantum proof gates are in
`research/four-track-dependency-reconciliation.json` and
`research/four-track-proof-gates.json`. The braid-specific counts are unchanged.

## Verdict

The braid scaffold is now synchronized with
`research/braid-groups-planning/pages.json` and
`research/braid-groups-planning/proposed-items.json` at 19 A/B pairs and 347
proposed items (269 A, 78 B).  The largest A inventory is 24, below the
repository ceiling of 60.  Declared-item checking finds zero missing braid
dependencies, zero same-page forward dependencies, zero forward page
dependencies, zero B targets, zero dependency cycles, zero recorded-supplier
paths, and zero draft paths.

The current combined audit contains 42 future-track A/B pairs (7 HA, 19
braid, 8 QG, and 8 KL) and 985 proposed items, of which 728 are in those four
target tracks.  Its transitive page closure contains 51 unbuilt prerequisite
pairs outside Phase 2.  These are different counts: the latter includes shared
prerequisite tracks such as RG-8--RG-13 and is not an eligibility verdict.  The
combined checker is clean for drift, duplicates, forward edges, missing IDs,
outside-closure item edges, cycles, recorded paths, and draft paths.  Its two
remaining B-target reports are the separately deferred published legacy HA
repairs; neither is in the braid inventory or its proposed item graph.

There are **zero additional Phase-2 roots** caused by this reconciliation.
AT-11, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, and the
existing `spectral-sequences` pair are already in the provisional 142-pair
Phase-2 manifest.  The six RG-8--RG-13 pairs listed below are shared future
prerequisite closure for planned braid/KL/SYMR consumers; they are not a
Phase-2 addition merely because those consumers are planned.  The CFSG stub
exemption is irrelevant to the braid dependency cone.

## Exact page-plan deltas

| braid page | reconciled delta | reason |
|---|---|---|
| BG-2, `ordered-and-unordered-configuration-spaces` | add `classification-of-covering-spaces`; add `partitions-of-unity-and-paracompactness` | covering classification/lifting and the numerability step are now visible |
| BG-4, `punctured-disks-mapping-classes-and-point-pushing` | remove `isotopy-extension-and-embedding-theory-beyond-whitney` and `manifolds-with-boundary-collars-and-orientations`; add `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `partitions-of-unity-and-paracompactness`, and `vector-fields-flows-and-lie-derivatives` | evaluation uses the exact fibration interfaces; smooth representatives and smooth arc extension use already-published flow machinery, not an unproved topological taming claim |
| BG-7, `garside-structure-normal-forms-and-the-center` | remove `decision-problems-for-finitely-presented-groups` | no proposed proof consumes it |
| BG-8, `the-artin-action-on-a-free-group` | remove `subgroups-of-free-groups-and-schreier-rewriting` | the page uses its locally proved punctured-disk free basis, not Schreier rewriting |
| BG-16, `type-a-soergel-bimodules-and-hecke-categorification` | add `braided-and-symmetric-monoidal-categories` | `thm-the-symmetric-group-has-the-coxeter-presentation` is actually published there |
| BG-18, `matrix-factorizations-and-khovanov-rozansky-link-homology` | replace `chain-complexes-and-homology` by `graded-bimodules-and-tensor-functors` | a matrix-factorization differential has square equal to its potential, not generally zero |

The canonical plan and central ledgers remain owned by the main reconciler;
the BG-4 vector-field edge and the other page deltas above must be copied there
from the synchronized braid manifest.

## Item-level proof seams closed

1. BG-1 now defines a geometric braid as a level-preserving parametrized
   point motion and braid isotopy as the corresponding two-parameter family.
   This prevents an arbitrary link isotopy from entering the braid quotient.
2. `thm-fadell-neuwirth-forgetful-fibration` now consumes the exact local
   trivialization, locally-trivial-bundle definition, metric numerability, and
   numerable-bundle-to-Hurewicz theorem.  It does not infer a fibration from a
   displayed projection alone.
3. BG-4 adds
   `lem-boundary-fixed-disk-evaluation-has-continuous-local-point-motion-sections`.
   Its disjoint supported bi-Lipschitz motions give actual local sections of
   disk evaluation.  The renamed
   `lem-evaluation-on-an-unordered-marked-set-is-a-numerable-bundle-and-fibration`
   then states the bundle charts, numerability, and inherited Hurewicz step.
4. `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
   now includes the exact smooth-representative refinement.  A configuration
   loop is lifted to ordered point paths, approximated rel endpoints inside a
   uniform collision/boundary separation, and followed by disjoint smooth
   bump fields.  The global evolution gives a boundary-fixed diffeomorphism
   representing the original topological mapping class.
5. The new
   `lem-a-smooth-finite-disk-arc-system-isotopy-extends-relative-boundary-and-marked-points`
   has deliberately smooth hypotheses.  It differentiates the supplied smooth
   arc isotopy, extends the velocity field with relative cutoffs, and invokes
   the published compactly-supported time-dependent-flow theorem.  BG-8 and
   BG-10 explicitly choose the smooth representative from item 4 before using
   it.  Consequently no step assumes that the image of a smooth arc under an
   arbitrary homeomorphism is smooth, and no boundary-chart, regular-neighbourhood,
   Schoenflies, or general topological isotopy-extension theorem is hidden.
6. Point-pushing injectivity was moved from BG-4 to BG-5, after
   `lem-planar-configuration-spaces-have-vanishing-pi-two-by-simultaneous-induction`
   and `thm-pure-braid-forgetting-a-strand-short-exact-sequence`.  The proof now
   exposes the long exact sequence and cannot use the Birman short exact
   sequence to prove the vanishing needed for its own left exactness.
7. The punctured-disk wedge proof now exposes its free fundamental group,
   covering-lifting, homotopy-lifting, and simply-connected-sphere inputs.
   Ordered asphericity cites the fibration LES; unordered asphericity proves
   the higher-homotopy covering invariance by lifting spheres and
   nullhomotopies.
8. `def-standard-pure-braid-generators` now uses
   `prop-the-artin-presentation-surjects-onto-geometric-braids`; it no longer
   bootstraps from an abstract symmetric-group quotient before Artin
   presentation completeness.
9. BG-8 stem straightening and the BG-10 adjacent-edge argument now consume
   the smooth local extension seam above.  The stale pluralized LKB dependency
   ID was corrected to
   `lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy`.
10. The HOMFLYPT definition now first localizes so that the two Markov
    parameters being divided by are units.  It no longer performs implicit
    division in $\mathbb Z[q^{\pm1},z]$.
11. `def-bigraded-matrix-factorization-with-potential` now consumes
    `def-graded-ring-module-bimodule-and-internal-shift` and explicitly warns
    that it is not an ordinary chain complex unless the potential vanishes.

## Exact external supplier contracts

### Planned, prose-only boundaries

AT-11 owns these three exact interfaces:

- `def-locally-trivial-fiber-bundle`, directly consumed by the BG-2
  Fadell--Neuwirth theorem and the BG-4 evaluation-bundle lemma;
- `thm-numerable-fiber-bundles-are-hurewicz-fibrations`, directly consumed by
  those same two items;
- `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`, directly
  consumed by the BG-4 evaluation-boundary isomorphism and the BG-5
  pi-two, point-pushing, and ordered-asphericity items.

RG-13 owns these three exact Hecke interfaces:

- `def-generic-type-a-hecke-algebra`, directly consumed by the BG-12 Markov
  trace definition and the BG-16 diagrammatic-character theorem;
- `thm-type-a-iwahori-hecke-presentation`, directly consumed by the BG-12
  Markov trace and Temperley--Lieb/Jones definitions;
- `thm-standard-basis-of-the-generic-type-a-hecke-algebra`, directly consumed
  by BG-12 Ocneanu trace existence/uniqueness and the BG-16
  diagrammatic-character theorem.

The BG-19 path also inherits, through the HA termwise-Hochschild seam, the
planned `spectral-sequences` interface
`thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`.
That is a transitive HA-owned boundary and its pair is already in Phase 2; it
is not a new braid root.

### Published exact suppliers added or corrected

- BG-4 uses `def-time-dependent-vector-field-and-evolution-operator`,
  `lem-a-vector-field-along-an-embedded-submanifold-extends-to-a-neighbourhood-and-globally-when-closed`,
  and
  `thm-compactly-supported-time-dependent-vector-fields-have-global-evolution-on-a-compact-time-interval`
  from `vector-fields-flows-and-lie-derivatives`.
- BG-16 uses `thm-the-symmetric-group-has-the-coxeter-presentation` from
  `braided-and-symmetric-monoidal-categories`.
- BG-18 uses `def-graded-ring-module-bimodule-and-internal-shift` from the
  planned HA-18 page rather than the inapplicable ordinary-complex definition.

## Shared future RG closure, not Phase-2 additions

The Hecke suppliers in RG-13 have the following six-pair unbuilt prerequisite
closure:

1. `young-diagrams-tableaux-and-permutation-modules` (RG-8),
2. `specht-modules-and-the-irreducibles-of-the-symmetric-group` (RG-9),
3. `the-branching-rule-and-the-young-graph` (RG-10),
4. `the-hook-length-formula-and-rsk-correspondence` (RG-11),
5. `bruhat-decomposition-and-flags-over-finite-fields` (RG-12), and
6. `principal-series-representations-of-gl-n-over-a-finite-field` (RG-13).

These pairs serve planned BG-12/BG-16, KL, and symmetric-group consumers.  No
published consumer or recorded retirement route found in this pass makes any
of the six eligible as a new Phase-2 root.

## Consumer impact

### Published consumers

The item-level audit reports **zero direct published consumers** and **zero
transitive published consumers** for every braid A/B pair.  The page graph
likewise has no published page requiring a braid page.  Thus this reconciliation
creates no published-file repair obligation.

### Planned consumers outside braid

The only direct outside page consumer is KL-2,
`soergel-intersection-forms-and-hodge-theory`, which requires BG-16 and BG-17.
Its nine declared direct item edges are:

- BG-16 `def-type-a-reflection-realization-and-polynomial-ring` and
  `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts`
  to KL-2 `def-real-type-a-soergel-category-and-scalar-extension`;
- BG-16 `lem-type-a-soergel-generators-are-finite-free-on-both-sides` and
  `thm-the-type-a-soergel-hom-formula` to KL-2
  `lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree`;
- BG-16
  `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts`
  to KL-2 `def-minimal-complexes-and-perverse-truncations-in-the-type-a-soergel-category`;
- BG-17 `def-rouquier-complex-of-a-braid-word`, BG-16
  `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations`, and
  BG-16 `lem-type-a-soergel-generators-are-finite-free-on-both-sides` to KL-2
  `thm-positive-rouquier-complexes-are-delta-split`; and
- BG-16 `thm-the-type-a-soergel-hom-formula` to KL-2
  `thm-minimal-positive-rouquier-complexes-are-linear-under-the-lower-soergel-induction`.

The planned transitive page chain then runs through
`projective-functors-and-the-soergel-functor-in-category-o`,
`the-kazhdan-lusztig-character-and-multiplicity-theorem`,
`singular-and-parabolic-kazhdan-lusztig-theory`,
`parabolic-category-o-and-fock-space-bases`,
`arakawa-suzuki-functors-and-higher-level-schur-weyl-duality`, and
`the-degenerate-ariki-categorification-theorem`, including their B companions
where the page graph records them.  All are unbuilt planned consumers.

## Source check and residual boundary

The local full-text cache was checked directly against Farb--Margalit
§§1.2.5--1.2.7 (printed pp. 35--38), including Proposition 1.11 and its stated
arc variants; Farb--Margalit §9.1.4 for disk evaluation; and Hatcher §4.2
(printed pp. 379--380) for the fibration interface.  The source manifest now
records the added Farb--Margalit ranges.  The smooth-representative detour is
what makes Proposition 1.11 applicable: the scaffold does not apply a smooth
theorem to an arbitrary homeomorphic arc.

After the canonical page-manifest synchronization, the exact residual result
is therefore: **zero missing dependency IDs and zero additional Phase-2
roots**.  The only declared unproved boundaries in the braid cone are the
already-identified AT-11 and RG-13 contracts, plus the inherited HA
spectral-sequence contract described above; the RG-8--RG-13 page closure stays
future-only pending Phase 3.

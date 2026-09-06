# frontier-31a — group Alpha `g`, Step 3 scaffold review

This review covers batches `7`, `12`, and `20`: the category-theory,
algebraic-topology, and differential-topology A/B pairs.  For each pair I read
the current manifest, coverage, notes, governing design section, and
`research/plan-spec.json`, then checked the current Step-0 drift decision and
the exact cited source sections.  The live `.autopilot/` directory belongs to
the separate `frontier-23` run; no workflow state was changed.

## Verdicts

| Batch | A page | B page | Verdict |
| ---: | --- | --- | --- |
| 7 | `tensor-and-fusion-categories` | `tensor-and-fusion-categories-examples` | `sufficient` |
| 12 | `relative-homology-excision-and-mayer-vietoris` | `relative-homology-excision-and-mayer-vietoris-examples` | `sufficient` |
| 20 | `gradient-like-vector-fields-and-morse-trajectories` | `gradient-like-vector-fields-and-morse-trajectories-examples` | `sufficient` |

No owned A page exceeds the 60-item split threshold.  There are no missing
results, source gaps, backward prerequisites, or pair-scope defects requiring
a scaffold repair.

## Batch 7 — tensor and fusion categories

The 29-item A page and four-example B page implement MA-18
(`research/plan-category-theory-track.md:2992-3240`).  The direct plan edge is
`enriched-categories-examples`; the current Step-0 record confirms that its
closure reaches the required rigidity, abelian, exactness, and monoidal
interfaces.  The manifest explicitly distinguishes locally finite, finite,
tensor/multitensor, and fusion/multifusion hypotheses, and contains the
load-bearing biexactness, unit, Grothendieck-ring, and duality routes before
using them.

The source route is sufficient: EGNO's complete 362-page author-final
*Tensor Categories* PDF supplies §§1.2, 1.8, 4.1--4.5, and 4.8; the complete
215-page Meusburger lecture notes independently check the finite and fusion
conventions.  Direct review confirms that EGNO Theorem 4.3.8 supplies the
semisimple-unit conclusion for the multi case, so the notes' correction of the
older mistaken Thm. 4.3.1/Cor. 4.3.2 attribution is sound.  The 50-row
coverage harvest leaves nine source results out of scope; none is a premise of
the manifest.  In particular, reconstruction/fiber-functor, Frobenius--Perron,
3-cocycle, and representation contingencies remain fenced rather than becoming
unstated dependencies.

## Batch 12 — relative homology, excision, and Mayer--Vietoris

The 30-item A page and nine-example B page follow AT-3
(`research/plan-algebraic-topology-track.md:503-590`): relative chain
complexes and the pair LES; signed subdivision and mesh; cover-small chains;
excision; the two-open short exact sequence and Mayer--Vietoris; then the
comparison, sphere, suspension, and bounded counterexample routes.  The
manifest preserves the `G`-coefficient, finite-chain, degree-zero,
closure-inside-interior, and based/well-pointed qualifications.

The design names three prerequisites while the current plan declares
`singular-chains-and-singular-homology-examples`.  This is not an open drift:
the current Step-0 decision establishes that the declared closure already
reaches singular homology, the homological-algebra LES, and metric compactness;
the manifest also names their exact item-level carriers.  Hatcher's complete
88-page Chapter 2 PDF and May's complete 251-page text supply independent
source routes.  Direct review confirms Hatcher Theorem 2.20 retains the
closure/interior hypothesis and Proposition 2.21 supplies the chain-homotopy
small-chain comparison.  The 74-row coverage harvest has eight out-of-scope
rows and seven exact deferrals, none used by the present ordinary two-open
construction.

## Batch 20 — gradient-like vector fields and Morse trajectories

The 20-item A page and five-example B page implement DT-3
(`research/plan-differential-topology-track.md:397-447`) with the declared
`morse-functions-critical-values-and-genericity-examples` predecessor.  The
manifest keeps the negative-gradient sign fixed, separates compactness roles,
states the local theorem before its immersed global consequence, and limits the
noncompact result to trajectories trapped in a compact slab.  Its incomplete
flow witness is explicitly not a Morse-function example.

The source route is sufficient.  Nicolaescu's complete 291-page *Invitation
to Morse Theory* and Cohen's complete 568-page *Bundles, Manifolds, and
Homotopy* cover the recorded §2.4 and §§13.1--13.2 ranges.  Direct review of
Cohen Theorem 13.2 verifies the closed-manifold full-flow and critical-endpoint
route, while the local coordinate solution supports the stable/unstable
dimension convention.  The 44-row coverage harvest has four genuine
out-of-scope rows and thirteen deferrals.  The latter all route to existing,
strictly later DT-4, handle, or sublevel-deformation pages; no Morse--Smale,
rearrangement, or handle-theory claim is smuggled into DT-3.

## Scope-decision record

After `scope-decisions refresh`, the group had 41 current pending rows.  All
are now recorded as `stands` in
`research/frontier-31a-alpha-g-scope-decisions.json`, with current manifest,
coverage, design, and plan evidence bound to each row.  The disposition counts
are nine out-of-scope rows for batch 7; eight out-of-scope and seven deferred
rows for batch 12; and four out-of-scope and thirteen deferred rows for batch
20.  Every deferred destination exists in the current plan and has a strictly
later order than its source page.  No `owner-decision` is required.

## Checks

- `node tools/manifest-deps.mjs` on batches 7, 12, and 20: `33`, `39`, and
  `25` items respectively; `0` errors in each run.
- `node tools/coverage-checklist.mjs --require-destination` on those coverage
  files: `50`, `74`, and `44` harvested results respectively; `0` errors and
  `0` warnings in each run.
- `node tools/source-fetch-check.mjs --coverage` on those coverage files:
  `2/2` source records fetch-verified in each run.
- `node tools/content-policy.mjs --manifest-only` over all three manifests:
  `97` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`: declared order is
  acyclic and consistent, with no item-level cycles, forward references,
  B-page dependencies, or unresolved IDs among itemized pages.
- `node tools/scope-decisions.mjs check --run frontier-31a --group g`:
  `41` current declines, `0` errors.

No in-scope scaffold claim, item, prerequisite, or source disposition was
changed.  The next action is ordinary Step-3 closure handling for these three
already-sufficient pairs.

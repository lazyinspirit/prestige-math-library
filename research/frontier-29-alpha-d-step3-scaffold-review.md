# frontier-29 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `11`, `12`, and `17`: `derived-functors`,
`simplicial-complexes-and-simplicial-homology`, and
`morse-critical-points-hessians-and-indices`. I read the current
`research/frontier-29-batch-{11,12,17}.pages.json`,
`research/frontier-29-batch-{11,12,17}.coverage.json`, and
`research/frontier-29-batch-{11,12,17}.notes.md` artifacts against the
controlling design sections in
`research/plan-homological-algebra-track.md`,
`research/plan-combinatorics-and-categories.md`,
`research/plan-algebraic-topology-track.md`,
`research/plan-differential-topology-track.md`, and the live
`research/plan-spec.json`. I also verified the live controller from disk via
`.autopilot/` and `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo .`
rather than using any `research/*RESUME.md` file.

On the current bytes, batches `11` and `12` are sufficient for authoring.
Batch `17` is not: its DT-1 A page still advertises
`lem-critical-hessian-agrees-with-the-levi-civita-hessian` without any current
authored or in-run Levi-Civita / covariant-Hessian interface to support that
term. I refreshed `research/frontier-29-alpha-d-scope-decisions.json` and
resolved all `29` current decline rows as `stands`; none required an
`owner-decision`.

| A page | batch | A items | declines | verdict | notes |
|---|---|---:|---:|---|---|
| `derived-functors` | 11 | 44 | 11 | **sufficient** | all delta-functor and balance rows land on exact later pages |
| `simplicial-complexes-and-simplicial-homology` | 12 | 30 | 12 | **sufficient** | source form and scope boundaries are current and explicit |
| `morse-critical-points-hessians-and-indices` | 17 | 16 | 6 | **insufficient** | one missing DG predecessor interface blocks item 4 |

## Findings

| id | page | severity | disposition |
|---|---|---|---|
| D17-1 | `morse-critical-points-hessians-and-indices` | **blocking** | insufficient: missing Levi-Civita / covariant-Hessian interface |

### D17-1 — `morse-critical-points-hessians-and-indices` is not author-ready on current bytes

The controlling DT-1 design in `research/plan-differential-topology-track.md`
explicitly includes
`lem-critical-hessian-agrees-with-the-levi-civita-hessian` as item `4`, and it
states the page requires the DG smooth-map, tangent/cotangent, and DG Hessian
interfaces. The current batch-17 manifest keeps that lemma in the A-page item
list, and the coverage file honestly cites Ralph Cohen's Chapter `3` section
`3.6` as the source seam for the comparison.

The problem is not a broken `deps` id. A focused dependency-id audit across all
three reviewed manifests found `0` unresolved `deps`. The defect is narrower
and more structural: the current published differential-geometry corpus stops at
`smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, and
`whitney-embedding-tubular-neighbourhoods-and-approximation`, while neither the
published library nor any frontier-29 batch currently authors
`connections-levi-civita-and-parallel-transport` or an equivalent current item
defining the Levi-Civita connection / covariant Hessian interface that item `4`
names.

Batch `17`'s own notes already acknowledge this seam, but the present scaffold
still leaves it as a promise rather than a supplied authored result. That is
too strong for Step 3: a page cannot be called author-ready when one of its
advertised A-page lemmas presupposes terminology that the current corpus and
the current run do not yet supply.

I did not repair this locally. This is not a one-line backward-prerequisite
edit like the earlier Step-3 manifest repairs in other runs. On current disk it
would require either:

- importing a non-run DG predecessor interface into frontier-29, or
- materially changing the DT-1 A-page item inventory to define the
  Levi-Civita / covariant-Hessian vocabulary locally before item `4`.

That is beyond a small confidence-preserving scaffold touch, so the correct
Step-3 action is to mark the page insufficient and name the exact missing
result/source.

## Page review

### `derived-functors`

This pair is sufficient. The A page matches the current HA-6 route in
`research/plan-homological-algebra-track.md`: supplied projective and injective
resolution data, derived objects, comparison-lift existence and independence,
functoriality, change-of-data isomorphisms, degree-zero recovery, vanishing on
projectives/injectives, acyclic resolutions, variance through the opposite
category, and the two-variable bridge up to the balance definition. The B page
is also substantial and stays within the page budget.

The source set is strong and current: Weibel, Rotman, Sharifi, and the Stacks
Project give multiple independent treatments, and every deferred row lands on
an exact later page already present in the live plan. I also checked the
published comparison-law items on disk; the comparison-identity,
comparison-composition, and injective homotopy-equivalence machinery all exist
and match the route the batch manifest cites.

The design/spec direct-`requires` drift recorded in the beta notes is not a
current blocker. After tracing the live `research/plan-spec.json` closure, both
design-named prerequisites
`projective-and-injective-resolutions` and
`preadditive-and-additive-categories-and-biproducts`
are already in the current page closure, and the corresponding authored pages
exist on disk.

**Verdict:** sufficient.

### `simplicial-complexes-and-simplicial-homology`

This pair is sufficient. The A page follows the AT-1 route as designed:
abstract simplicial complexes, intrinsic realization, simplicial maps,
orientations, the simplicial boundary and homology, contiguity, the simplex
contraction, `H_0`, disjoint unions, and Euler-Poincare. The B page stays
concrete without violating leaf rules.

The source form is sufficient on current disk: Hatcher plus Nanda's lecture
sequence give two independent full treatments, and the declines are honest.
The delta-complex material is explicitly constrained to the torus example, the
carrier machinery is consciously declined rather than silently relied upon, and
the singular-homology and simplicial-approximation theorems are deferred to
their exact later homes.

The beta notes' design/spec direct-`requires` drift is also nonblocking here.
Although the manifest's page-level `requires` field is much narrower than the
AT-1 design summary, the current plan closure still contains
`subspaces-products-and-quotients`,
`free-modules-and-exact-sequences`, and
`chain-complexes-and-homology`, and the relevant authored predecessor pages are
already present on disk.

**Verdict:** sufficient.

### `morse-critical-points-hessians-and-indices`

This pair is insufficient on exactly D17-1. Apart from the missing DG
interface, the route is coherent and well sourced: the A page keeps the
critical-point vocabulary, intrinsic Hessian, coordinate congruence, inertia,
Morse lemma splitting, endpoint cases, and zero-dimensional convention
explicit, while the B page uses the right witnesses for the sphere, torus,
quadratic normal form, and the two degeneracy failures.

The source set is also adequate in form. Nicolaescu, Audin-Damian, and Cohen
are enough for DT-1's mathematical route, and the coverage deferrals to
`morse-functions-critical-values-and-genericity` are exact and current. The
blocking defect is narrower than source form or scope routing: one advertised
A-page bridge still lacks its required DG predecessor interface.

**Verdict:** insufficient.

## Scope and checks

The refreshed scope receipt is current on disk:

- `stands`: `29`
- `owner-decision`: `0`

Checks run on the exact reviewed artifacts:

- `node tools/scope-decisions.mjs refresh --run frontier-29 --group d`
  Result: `scope-decisions: d: 29 decline(s), 29 pending`.
- `node tools/scope-decisions.mjs check --run frontier-29 --group d`
  Result after resolution: `scope-decisions: 29 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-11.coverage.json research/frontier-29-batch-12.coverage.json research/frontier-29-batch-17.coverage.json`
  Result: `coverage-checklist: 3 page(s), 137 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-11.pages.json research/frontier-29-batch-12.pages.json research/frontier-29-batch-17.pages.json`
  Result: `content-policy: 112 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-11.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-12.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-17.coverage.json`
  Result: `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`
- `git diff --check -- research/frontier-29-alpha-d-scope-decisions.json research/frontier-29-alpha-d-step3-scaffold-review.md research/frontier-29-alpha-d-step3-verdicts.json`
  Result: clean.

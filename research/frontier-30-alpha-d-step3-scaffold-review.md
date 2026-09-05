# frontier-30 — Alpha group `d` — Step 3 scaffold review

Group `d` covers batches `4`, `7`, and `15`: `the-analytic-hahn-banach-theorem`,
`partial-differential-equations-and-characteristics`, and
`distributions-integral-manifolds-and-the-frobenius-theorem`. I read each
batch's current manifest, coverage, and notes against the controlling design
sections in `research/plan-functional-analysis-track.md` (FA-4),
`research/plan-pde-track.md` (PDE-1), `research/plan-differential-geometry-track.md`
(DG-10), and the live `research/plan-spec.json`.

On current bytes, all three assigned A pages are sufficient for authoring. The
page-level `requires` lists are sparse in batches `4` and `7`, but every
external dependency page used by the manifest items is already reachable in the
current transitive closure of `research/plan-spec.json`, so there is no missing
backward prerequisite and no owner decision is required. I refreshed
`research/frontier-30-alpha-d-scope-decisions.json` and resolved all `15`
decline rows as `stands`.

Two in-scope scaffold defects were small enough to repair directly during this
review:

- `research/frontier-30-batch-4.notes.md` overstated the recorded source set.
  It now matches the actual four coverage rows and states explicitly that the
  BPI/HB/AC ledger is carried by the existing dependency remarks rather than by
  unrecorded batch-local harvest rows.
- `research/frontier-30-batch-7.coverage.json` had treated two Teschl landing-page
  table-of-contents headings as `included` theorem backing. Those rows now read
  as `inline` route provenance, which matches the notes' statement that the
  recovered author page is not full-text theorem support.

| A page | batch | A items | declines | verdict | notes |
|---|---|---:|---:|---|---|
| `the-analytic-hahn-banach-theorem` | 4 | 13 | 7 | **sufficient** | direct source stack and later-home deferments are now internally consistent |
| `partial-differential-equations-and-characteristics` | 7 | 21 | 7 | **sufficient** | local `C^1`-dependence seam plus repaired source provenance leave the page author-ready |
| `distributions-integral-manifolds-and-the-frobenius-theorem` | 15 | 38 | 1 | **sufficient** | Frobenius route, leaf/topology traps, and out-of-scope PDE branch are all explicit |

## Page review

### `the-analytic-hahn-banach-theorem`

This pair is sufficient. The FA-4 route remains intact: real sublinear
vocabulary, the one-step interval lemma, the chain-union lemma, real and
complex extension theorems, norming functionals, point separation, norm
recovery, the explicit nonclosed-subspace guard, and the B-page Banach-limit /
nonuniqueness examples. Every deferred source row lands on an exact later page
already present in the live plan: FA-5 for seminorms, separation, and finite
dimensional complementation; FA-7 for concrete sequence-space duality; FA-11
for Schauder-basis applications.

The sparse page-level `requires` list is not a blocker on current disk. Every
external dependency page used by the manifest items is already in the transitive
closure of `finite-dimensional-normed-spaces-and-riesz-lemma-examples`, so the
manifest does not rely on an undeclared backward page. After the notes repair,
the source story is also coherent: Daners and Teschl cover the analytic theorem
chain, while the choice-strength remark explicitly leans on existing dependency
remarks plus the recorded Foreman-Wehrung and Pawlikowski consequences.

**Verdict:** sufficient.

### `partial-differential-equations-and-characteristics`

This pair is sufficient. The PDE-1 manifest keeps the intended four-layer route:
PDE vocabulary and principal symbols, pointwise second-order classification,
linear transport, and local noncharacteristic Cauchy data. The batch-local seam
`lem-transport-characteristics-depend-c-one-on-initial-position` is a legitimate
repair of the design/spec mismatch rather than a scope expansion: it supplies
the exact `C^1` regularity needed for the inverse-function step in
`thm-local-linear-transport-cauchy-problem` without importing undeclared smooth-flow
pages.

The source routing is also sufficient after the coverage repair. Teschl's
recovered author page now functions only as route provenance, while Ivrii and
Andersson remain the readable mathematical backing and the manifest's published
ODE / spectral / inverse-function dependencies close the remaining proof steps.
Every deferred row lands on PDE-2
`quasilinear-characteristics-and-cauchy-kovalevskaya`, which sits immediately
later in the live plan at order `288.143`.

**Verdict:** sufficient.

### `distributions-integral-manifolds-and-the-frobenius-theorem`

This pair is sufficient. The DG-10 scaffold follows the design closely:
regular distributions as smooth subbundles, integral manifolds with intrinsic
topology kept explicit, involutivity separated from integrability, a decomposed
local Frobenius proof, flat charts and plaques for the global theorem, and the
regular-foliation correspondence. The four local plaque/leaf seam items are
legitimate intermediate suppliers for the global theorem rather than padding.

The source and scope boundaries are also current. Lee, Merry, and Conrad are an
adequate three-source stack for the local/global Frobenius route, and the only
declined Lee branch, `Applications to Partial Differential Equations`, is an
intentional out-of-scope denial already owned by DG-12 plus the PDE track. The
page-level `requires` list reaches every external dependency page used by the
manifest through the current plan closure, so no backward prerequisite repair is
needed.

**Verdict:** sufficient.

## Scope and checks

Scope-decision resolution on current disk:

- `stands`: `15`
- `owner-decision`: `0`

Checks run on the reviewed artifacts:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group d`
  Result: `scope-decisions: d: 15 decline(s), 15 pending`.
- `node tools/scope-decisions.mjs check --run frontier-30 --group d`
  Result after resolution: `scope-decisions: 15 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-4.coverage.json research/frontier-30-batch-7.coverage.json research/frontier-30-batch-15.coverage.json`
  Result: `coverage-checklist: 3 page(s), 118 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-4.pages.json research/frontier-30-batch-7.pages.json research/frontier-30-batch-15.pages.json`
  Result: `content-policy: 96 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-4.coverage.json`
  Result: `source-fetch-check: 4/4 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-7.coverage.json`
  Result: `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-15.coverage.json`
  Result: `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  Result: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 698 page(s) with item lists.` The remaining output is the repository's standing `redundant-prereq` advisory set, not a blocker in batches `4`, `7`, or `15`.

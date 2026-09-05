# frontier-30 — group Alpha `g`, Step 3 scaffold review

Batches `14` and `18`, covering three A/B pairs across `combinatorics` and
`differential-topology`. For each owned pair I read the manifest, coverage,
notes, governing design section, `research/plan-spec.json`, and the relevant
Step-0 drift entry. The live `.autopilot` state dir still belongs to
`frontier-23`, so this review uses the task file and the on-disk
`frontier-30` artifacts as the authoritative inputs.

## Verdict summary

| A page | batch | verdict | note |
|---|---:|---|---|
| `from-generalized-niceness-to-erdos-hajnal` | 14 | `sufficient` | route, source set, and page closure all match Section 16 |
| `property-star-and-comb-outcomes` | 14 | `sufficient` | route, source set, and page closure all match Section 16 |
| `morse-functions-critical-values-and-genericity` | 18 | `sufficient` | sufficient after one licensed Step-3 dependency repair on the B page |

No owned A page exceeds the 60-item split threshold.

## Batch 14

The combinatorics design still assigns orders `429/430` and `431/432` to these
two pairs, with the exact Section 3 and Section 4 reduction routes now
canonicalized on pages `429` and `431`
(`research/plan-combinatorics-and-categories.md:3914-3915,3955-3959`). Step 0
already recorded `no-drift` for both A pages, confirming that
`generalized-niceness-and-reduction-outcomes` remains the full backward page
closure they need on the current bytes
(`research/frontier-30-alpha-step0-drift.md:41-43,73-75`).

The current scaffold is authorable as written.

- `from-generalized-niceness-to-erdos-hajnal` keeps the intended three-step A
  route: Rödl initialization, the explicit Claim `3.5.1` blockade lemma, and
  the final Erdős-Hajnal theorem. Its coverage gives three verified sources,
  including a lecture-note carrier, and no deferred or out-of-scope rows.
- `property-star-and-comb-outcomes` keeps the intended eight-item A route
  through property `(*)`, the five-outcome and blockade-upgrade lemmas, the two
  load-bearing claims `4.3.1` and `4.5.1`, the Rödl initialization step, and
  the final generalized-niceness theorem. Its coverage also gives three
  verified sources, including a lecture-note carrier, and no deferred or
  out-of-scope rows.
- The current manifest closure is clean for all four batch-14 pages: `0`
  unresolved deps, `0` deps outside the transitive page closure, and `0`
  B-page dependencies.

## Batch 18

The DT-2 design still requires the Morse-genericity route and its hard-proof
split between persistence, no-new-critical-points, value separation, and the
noncompact properness warning
(`research/plan-differential-topology-track.md:358-395`). Step 0 already
adjudicated the design/spec prerequisite wording mismatch as `no-drift`,
because the current closure from the live spec still reaches the DG supplier
pages (`research/frontier-30-alpha-step0-drift.md:61-63`).

The source set is sufficient for authoring on the current bytes: four verified
sources, three long-form note carriers, and current coverage for the DT-2 route
plus its two out-of-scope rows and one deferred row in
`research/frontier-30-batch-18.coverage.json`.

### G18-1 — repaired

`research/frontier-30-batch-18.pages.json:188-224` had three B-page items
depending on the previously published B-only item
`ex-height-on-a-torus-with-four-critical-points`. That violates the page
contract: an item homed only on an examples page cannot be a dependency of
another page (`SCHEMA.md:157`). I repaired the manifest by rerouting those
three items to local A-page carriers instead, and recorded the current route in
`research/frontier-30-batch-18.notes.md:160-164`.

After that repair, the current manifest closure is clean for both batch-18
pages: `0` unresolved deps, `0` deps outside the transitive page closure, and
`0` B-page dependencies.

## Scope decisions

`research/frontier-30-alpha-g-scope-decisions.json` is current after refresh
and review. The three current rows resolve as follows.

- `Corollary 3.51.` -> `stands`. DT-2 uses the part-11 embedding and
  squared-distance carriers named in
  `research/plan-differential-topology-track.md:376-395`; the immersion-dimension
  sharpening is not needed for page `519`.
- `3.5 Intersection theory` -> `stands`. DT-2 still stops at genericity and
  existence on the current design, and the heading appears only because the
  harvested PDF range extends through the end of `Theorem 3.29`
  (`research/frontier-30-batch-18.coverage.json:34,68`).
- `Corollary 3.30.` -> `owner-decision`. Later DT intersection and cobordism
  pages exist in the current track, but this source row still does not have one
  exact canonical destination fixed by the present scaffold, so the routing
  decision remains owner-level (`research/frontier-30-batch-18.coverage.json:62`).

## Checks

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group g`
  -> `scope-decisions: g: 3 decline(s), 3 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group g`
  -> `scope-decisions: 3 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-14.coverage.json research/frontier-30-batch-18.coverage.json`
  -> `coverage-checklist: 3 page(s), 72 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-14.coverage.json research/frontier-30-batch-18.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-14.pages.json research/frontier-30-batch-18.pages.json`
  -> `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`; only the repository's standing out-of-batch `redundant-prereq`
  advisories were printed
- focused closure audit on the current manifests
  -> batch `14`: `0` unresolved deps, `0` deps outside closure, `0` B-page deps;
     batch `18`: `0` unresolved deps, `0` deps outside closure, `0` B-page deps
- `git diff --check -- research/frontier-30-batch-18.pages.json research/frontier-30-batch-18.notes.md research/frontier-30-alpha-g-scope-decisions.json`
  -> clean

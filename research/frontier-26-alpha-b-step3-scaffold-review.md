# frontier-26 — Alpha group `b` Step 3 scaffold review

Scope: batches `6`, `7`, and `9`, covering
`strictification-and-mac-lanes-coherence-theorem`,
`mapping-cones-cylinders-and-chain-triangles`, and
`smooth-vector-bundles-and-sections`.

I read each owned batch manifest, coverage file, notes file, the controlling
design blocks (`MA-13`, `HA-3`, and `DG-5`), the current
`research/plan-spec.json`, and the refreshed
`research/frontier-26-alpha-b-scope-decisions.json`. I also ran a current-byte
closure audit on a spliced plan and a manifest-to-coverage audit over every
owned A/B item.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `strictification-and-mac-lanes-coherence-theorem` | 6 | sufficient | After repairing the under-harvested coverage ledger, the MA-13 route, source stack, and braided-page deferrals are sufficient for authoring on current bytes. |
| `mapping-cones-cylinders-and-chain-triangles` | 7 | sufficient | After restoring the missing carrier for the mapping-cylinder well-definedness lemma, the HA-3 route, source stack, and long-exact/triangulated/double-complex boundaries are sufficient for authoring. |
| `smooth-vector-bundles-and-sections` | 9 | sufficient | After repairing the under-harvested coverage ledger, the DG-5 route, source stack, and DG-3/DG-19 deferrals are sufficient for authoring on current bytes. |

## Direct repairs applied

### Batch 6 — `strictification-and-mac-lanes-coherence-theorem`

`research/frontier-26-batch-6.coverage.json` was under-harvested against the
current manifest. I added canonical carriers for the uncovered A-page items
`def-canonical-morphism-between-parenthesised-words`,
`thm-the-category-of-binary-words-is-monoidal`,
`rem-the-exact-scope-of-the-coherence-statement`,
`thm-the-monoid-object-axioms-may-be-written-without-associators`,
`cor-coherence-follows-from-freeness`,
`fs-every-diagram-in-a-monoidal-category-commutes`,
`fs-every-monoidal-category-is-isomorphic-to-a-strict-one`,
`fs-every-monoidal-category-is-monoidally-equivalent-to-a-skeletal-strict-one`,
`fs-coherence-says-that-any-two-parallel-morphisms-in-a-monoidal-category-are-equal`,
and `fs-strictification-requires-the-axiom-of-choice`, plus the uncovered
B-page items
`ex-the-canonical-map-between-two-bracketings-of-a-five-fold-product`,
`ex-the-word-category-on-words-of-length-three`,
`ex-strictification-of-a-cartesian-monoidal-category-computed`,
`cex-two-formally-distinct-words-that-become-the-same-object`, and
`ex-a-monoid-object-written-with-and-without-associators`.

### Batch 7 — `mapping-cones-cylinders-and-chain-triangles`

`research/frontier-26-batch-7.coverage.json` was missing the canonical carrier
for the current A-page lemma
`lem-the-mapping-cylinder-differential-squares-to-zero`. I added that row so
the mapping-cylinder definition's `justified_by` witness is represented in the
coverage ledger.

### Batch 9 — `smooth-vector-bundles-and-sections`

`research/frontier-26-batch-9.coverage.json` was under-harvested against the
current manifest. I added canonical carriers for the uncovered A-page items
`def-vector-bundle-chart-and-transition-function`,
`lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities`,
`def-restriction-of-a-vector-bundle`,
`def-local-frame-and-global-frame-of-a-vector-bundle`,
`prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices`,
`def-pullback-vector-bundle-as-a-fibre-product`,
`prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism`,
`def-whitney-sum-of-vector-bundles`,
`thm-whitney-sums-are-smooth-vector-bundles`,
`def-quotient-vector-bundle-by-a-subbundle`,
`prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map`,
`def-smooth-bundle-metric`,
`prop-orthogonal-complements-of-subbundles-are-smooth-subbundles`,
`cor-every-vector-subbundle-has-a-smooth-complement`,
`def-normal-and-conormal-bundles-of-an-embedded-submanifold`,
`fs-every-vector-bundle-is-globally-trivial`,
`fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth`,
`fs-the-fibrewise-quotient-of-a-vector-bundle-by-arbitrary-varying-subspaces-is-a-vector-bundle`,
`fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting`,
`fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric`,
and
`fs-the-pullback-bundle-is-the-set-theoretic-inverse-image-of-the-total-space`,
plus the uncovered B-page items
`ex-the-mobius-line-bundle-from-a-transition-function`,
`ex-the-tautological-line-bundle-over-real-projective-space`,
`ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial`,
`ex-the-tangent-bundle-of-the-circle-is-trivial`,
`rem-the-hairy-ball-theorem-for-even-dimensional-spheres`,
`ex-pullback-of-the-tautological-line-bundle-along-the-antipodal-cover`,
`ex-the-graph-of-a-bundle-map-as-a-subbundle-of-a-whitney-sum`, and
`cex-a-rank-jumping-kernel-is-not-a-vector-subbundle`.

After these edits, every current A/B manifest item in batches `6`, `7`, and
`9` is represented in coverage.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-26 --group b` now
reports `21` current decline rows and `0` pending. All `21` rows resolve as
`stands` with current evidence.

The resulting boundaries are still correct on current bytes:

- Batch `6`: all three Mac Lane `1963` deferrals still belong to
  `braided-and-symmetric-monoidal-categories`; MA-13 still stops at
  nonsymmetric monoidal coherence.
- Batch `7`: the two long-exact-sequence rows still belong to
  `long-exact-sequences-in-homology`; the four Stacks split-triangle rows still
  belong to `triangulated-categories`; the three Sharifi totalization rows
  still belong to `double-complexes-exact-couples-and-convergence`; and the
  five remaining topological or auxiliary rows remain honestly out of scope for
  HA-3's chain-level route.
- Batch `9`: Lee `Pullbacks` and Merry `Example 17.10` still belong to
  `tangent-cotangent-and-the-differential`, while Merry `Lecture 28
  Connections` still belongs to
  `connections-levi-civita-and-parallel-transport`.

## Closure findings

The current manifests still match the controlling design item-for-item:

- batch `6`: `28/28` design items present in the current A/B manifest
- batch `7`: `42/42`
- batch `9`: `61/61`

The current-byte closure audit is also clean:

- every dependency cited by the three owned A/B manifests resolves either
  locally or through the live transitive `requires` closure
- no foreign examples-page leaf dependency remains
- the spliced `validate-plan` run ends with `OK`; only the standing repo-wide
  `redundant-prereq` advisories remain

The design-vs-spec direct-prerequisite drift recorded in the batch notes for
all three pages remains real, but it is not a Step-3 blocker on current bytes
because the live plan closure still supplies the design's actual prerequisite
pages transitively. No new page, forward edge, or reading-order change is
required for these three pairs.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-26 --group b`
  Result: `scope-decisions: b: 21 decline(s), 0 pending`.
- `node tools/scope-decisions.mjs check --run frontier-26 --group b`
  Result: `scope-decisions: 21 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-6.coverage.json research/frontier-26-batch-7.coverage.json research/frontier-26-batch-9.coverage.json`
  Result: `coverage-checklist: 3 page(s), 199 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-6.pages.json research/frontier-26-batch-7.pages.json research/frontier-26-batch-9.pages.json`
  Result: `content-policy: 131 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-6.coverage.json`
  Result: `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-7.coverage.json`
  Result: `source-fetch-check: 3/3 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-9.coverage.json`
  Result: `source-fetch-check: 2/2 source(s) fetch-verified`.
- Manifest-to-coverage alignment audit over all owned A/B pages
  Result: `0` uncovered manifest items remain.
- Spliced-plan closure audit using `/tmp/frontier-26-alpha-b-spliced-plan.json`
  plus `node tools/validate-plan.mjs /tmp/frontier-26-alpha-b-spliced-plan.json`
  Result: exit `0`, trailing `OK`, and only the standing repo-wide
  `redundant-prereq` advisories remain.
- `git diff --check -- research/frontier-26-batch-6.coverage.json research/frontier-26-batch-7.coverage.json research/frontier-26-batch-9.coverage.json research/frontier-26-alpha-b-scope-decisions.json`
  Result: clean.

# Batch 30 — rejection sampling

## Plan comparison

The controlling BCS-27 design, assigned task, and current `plan-spec.json` agree on page IDs, order 2100/2101, category, titles, the B-page-to-A-page requirement, and the required A-page prerequisite `iid-monte-carlo-integration-and-error`. The plan-spec's `items: []` is its pre-authoring inventory, not a conflicting mathematical claim. The three planned A-page items and three B examples are retained. A fourth A-page item, `thm-counting-measure-integral-is-nonnegative-series`, was added as the required local intermediate result for the tail example; it preserves the approved examples and proof route.

The design's accepted-subdensity route is retained. The normalized case keeps the common reference measure, finite envelope, zero-proposal-density convention, independent ideal uniform input, acceptance probability $1/c$, and mean proposal count $c$. The local theorem also proves the unnormalized formula, including expected count $cZ_g/Z_f$.

## Inventory and item dependency levels

The manifest inventory and logical dependencies are settled before carrier construction. The final item levels recompute as follows:

| Item | Page | Level | In-run supplier |
|---|---|---:|---|
| `alg-rejection-sampling` | A | 0 | none |
| `thm-counting-measure-integral-is-nonnegative-series` | A | 0 | none |
| `thm-rejection-sampling-has-target-acceptance-law` | A | 1 | `alg-rejection-sampling` |
| `thm-rejection-sampling-expected-proposal-count-under-finite-envelope` | A | 2 | `thm-rejection-sampling-has-target-acceptance-law` |
| `ex-rejection-sampling-tail-mismatch-no-finite-envelope` | B | 1 | `alg-rejection-sampling`, `thm-counting-measure-integral-is-nonnegative-series` |
| `ex-rejection-sampling-bounded-likelihood-ratio` | B | 3 | proposal-count theorem |
| `ex-rejection-sampling-unnormalized-finite-measures` | B | 3 | proposal-count theorem |

The focused `dependencyLevels` calculation over the final batch-30 manifest reports all seven labels as listed and no cycles. The A page remains at four items and the B page at three, below the 100-item cap.

## Cross-batch prerequisite

The declared page prerequisite is verified at the Step-1 authoring-interface level. Batch 28's current A page and five item bodies are present. I inspected the page and each item statement/proof; all five current Step-1 records return `closed: true` against their current hashes with `owner: false`. This is authored readiness only, not publication or independent mathematical acceptance. Rejection sampling directly uses the published IID-family definition for its ideal proposal/uniform stream and imports no BCS-25 moment, consistency, variance, or CLT conclusion. The page edge remains in the plan and manifest.

## Local intermediate result

The first focused dependency audit found that the tail example depended on `ex-counting-measure-integral-is-a-series`, which lives only on a different B page. That cross-page B dependency is disallowed. The new A-page theorem proves the counting-integral/series identity locally, using finite-valued truncations and monotone convergence; its proof covers functions that take the value $+\infty$. The tail example now depends on the local A result, and the focused dependency audit passes.

## Source reading and mathematical route

Three full-text sources support the A page:

- Art Owen, *Monte Carlo Theory, Methods and Examples*, Chapter 4 §4.7, printed pp. 21–26. The full author-hosted 47-page PDF was fetched and the complete relevant section, including Algorithms 4.5–4.6, Theorems 4.2–4.5, and Examples 4.25–4.27, was read. The accepted-subdensity proof is used; the geometric uniform-under-the-curve construction, squeeze algorithm, and normal-polar example are out of scope.
- *Computational Statistics with R*, Chapter 6 §6.1, HTML lines 30–119. The complete general algorithm, Theorem 6.1 proof, survival probabilities, and unnormalized-normalizer discussion were read. Its normalized $c$-mean caveat is retained; the local theorem proves the unnormalized count formula.
- Princeton University MAT425, *Measure Theory Lecture Notes*, Sections 2.5–2.6, PDF pp. 16–22. The definitions of simple/nonnegative integral, counting-measure Example 2.42, monotone convergence theorem, and Claim 2.50 with its full proof were read. The new item uses finite-valued caps to match this library's simple-function definition and to include extended-valued inputs.

`source-fetch-check --coverage research/bayesian-computational-statistics-62-batch-30.coverage.json --stamp` reports 3/3 full-text stamps. The inspected source hashes match the stamps.

## Scoped checks

- Precheck: 7 items, 6 proof-bearing items passed; algorithm is not applicable.
- Proof layout: 7 items, 22 numbered steps, 0 defects.
- Renderer: 9 assigned item/page files checked, 0 errors and 0 warnings.
- Content policy: 7 manifest items checked, 0 errors and 0 warnings.
- Focused dependency check: all seven items and both pages checked; 390-item/120-page dependency closure; 0 errors and 0 warnings.
- Strict proof-contract validation: all seven assigned contracts passed, including exact supplier excerpts, step inputs, and boundary dispositions.
- Focused item dependency levels: all seven items pass with no cycles.
- Source fetch: 3/3 sources fetch-verified.

## Run-level reconciliation and Step-1 records

The full-run `item-dependency-levels.mjs check` reports empty scaffold inventories in other batches; the batch-30 focused recomputation passes. The full `batch-dependency-levels.mjs check` reports that the run-level scheduling artifact is stale against current manifests. The stored row still says batch 30 is level 1 with prerequisite batch 28; its input hash differs from the dispatch task's scheduling hash. That shared run artifact is left for the owner/engine to recompute.

Seven `step1-decisions record` calls created non-owner `escalated` records. I used an earlier full-run diagnostic that batch 33's manifest was malformed without rechecking it at record time. The batch-33 file now parses and its modification time predates those records, so their reason strings are stale. I later made focused proof-text clarifications in `thm-counting-measure-integral-is-nonnegative-series` and `thm-rejection-sampling-has-target-acceptance-law`; because the other records transitively depend on those items, all seven recorded hashes no longer match the final dependency closure. The scoped batch-30 mathematics, prerequisites, placement, and contracts pass, but the user instruction forbids overwriting an escalation or using `--owner`; these records are left untouched for owner disposition. No item is represented as independently approved.

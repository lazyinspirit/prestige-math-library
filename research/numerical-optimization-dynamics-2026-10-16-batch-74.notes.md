# Batch 74 — Rosenbrock and linearly implicit methods

Run: `numerical-optimization-dynamics-2026-10-16` · role: beta · batch dependency level: 4 · prerequisite batches: 1, 3, 65.

## Controlling plan and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch assignment, the complete owner-authoring direction, the full T02 design section and its incorporated contract, and the `plan-spec.json` entries for orders 2432–2433. The plan and `plan-spec.json` agree on page IDs, pair placement, page-level prerequisites, and the core Rosenbrock scope. The batch-level scheduling input recorded by the dispatch is `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`.

The prose body names the Rosenbrock–Euler formula with implicit parameter one, while the incorporated T02 contract generalizes the one-stage formula to `gamma>0`. I preserved both: the definition and stability theorem cover every `gamma>0`, and the name Rosenbrock–Euler denotes `gamma=1`. Only this case equals backward Euler and is L-stable; the general scalar method is A-stable exactly for `gamma>=1/2` and is L-stable only at `gamma=1`.

For the required two-stage method, the checked WIAS ode23s formula has `alpha=1/(2+sqrt(2))=1-1/sqrt(2)`, one shared shifted matrix, a midpoint field evaluation, and the second-stage correction. The local algorithm also states the time-derivative term needed by the nonautonomous contract and proves its order locally for bounded W-data. The authoring proof does not rely on the failed MathWorks fetch or use an unverified source excerpt.

## Inventory, placement, and item levels

The assigned A page contains 17 items and its B page contains 4, all below the 100-item cap. The page carriers, assigned manifest, and item frontmatter inventories agree. The manifest is supplier-first by computed item level. A-page levels are 0, 0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5. B-page levels are 4, 4, 5, 5. The full current run graph was used when computing these labels; out-of-run published dependencies do not raise the level.

`research/numerical-optimization-dynamics-2026-10-16-batch-74.cross-batch-dependencies.json` records all three required page edges and every direct item dependency supplied by batches 1, 3, or 65. For batch 1, the operation model and scaled Householder procedure have current ready Step 1 records. For batch 3, the Newton correction item has a current ready Step 1 record. The three batch-65 suppliers used here are definitions whose actual bodies were inspected; no Step 1 readiness receipt was present for those definitions at this handoff, so the record claims body-level interface verification only and no provider acceptance. The local results use only their displayed residual, backward-Euler, and scalar-stability definitions.

## Actual supplier checks and defects

I inspected the actual Statements/Definitions and relevant complete proofs of the declared item suppliers: the operationwise real floating-point model; scaled Householder formation/application; the batch-3 vector Newton correction; the T01 backward-Euler equation, implicit residual units, and scalar RK A/L-stability definition; and the published induced Euclidean norm, finite Cauchy–Schwarz, Euclidean triangle, absolute-value, rank-nullity, complex-modulus, vector-valued FTC, chain-rule, and exponential inequalities used by the local arguments. Their exact hypotheses and uses are stated in item Facts blocks and contracts.

One batch-1 draft supplier defect is deliberately not imported. `items/lem-rounded-linear-and-normal-residual-certificates.md` uses Cauchy–Schwarz in proof steps 1.2 and 2.1, but its declared dependencies omit the Cauchy–Schwarz supplier. The shifted-stage certificate here is proved locally and directly declares both the finite-sum and Euclidean Cauchy–Schwarz inputs. No edit was made to the foreign supplier. `thm-computed-full-rank-least-squares-backward-stability` currently has `verification.precheck: pending`; this batch does not depend on it and makes no least-squares or solver backward-stability claim.

## Sources and dispositions

The A-page coverage file records 25 harvested source headings, six locally owned proof-route results, and three canonical companion examples. Two independent full ODE treatments were read: the complete 22-page WIAS Chapter 2.4 Rosenbrock section (printed pp. 42–48) and the complete 97-page EPFL §3.5 lecture-note section (printed pp. 42–44). I also read the full 11-page Rang–Angermann article, §2 (printed pp. 386–387), for general W-method stage conventions and the exact-J/arbitrary-W order distinction. For the finite-precision residual proof, I read the complete FNC Chapter 1.1 page and the complete Cornell CS 6210 Lecture 4 page, including its dot-product and residual-bound sections. URLs, exact locators, supported items, harvested headings, and dispositions are in `research/numerical-optimization-dynamics-2026-10-16-batch-74.coverage.json`.

The primary Shampine–Reichelt PDF was visible in the browser PDF reader and §3 was inspected, but the source-fetch check could not retrieve the original MathWorks URL: six attempts (the initial attempt plus five retries) returned a 198-character HTML error body. Searches found a BYU mirror that timed out and a CiteSeerX mirror returning HTTP 403. The source is marked as a documented drop in the source-coverage evidence, with its original history preserved and complete alternative arguments recorded. The active mathematical treatment is supported by fetch-verified WIAS, EPFL, and Rang–Angermann sources plus the local proofs; no claim is waived. `source-fetch-check --stamp` verified the five successful URLs and recorded the one documented drop; the dropped URL has no fetch stamp.

## Scope and mathematical boundaries

The exact-J one-stage defect is bounded by a Taylor remainder and the shifted inverse norm. A separate resolvent identity quantifies the Jacobian approximation, and a residual `rho` contributes `kappa*h*rho`; the global first-order result therefore requires `rho=O(h)`, a common compact convex tube, uniform inverse bounds, and a state-Lipschitz Jacobian approximation. The autonomous Newton proposition proves one correction only, not a backward-Euler root.

The two-stage local proof expands the first stage, uses Taylor's formula along the midpoint segment, derives the actual second-order coefficient cancellation, and bounds the two solve residuals separately. The first residual must be `O(h)` and the second `O(h^2)` to preserve the cubic local defect. The global theorem proves a one-step Lipschitz factor and iterates its recurrence under the common-tube hypotheses. Exact-J scalar L-stability is proved directly; arbitrary bounded approximate Jacobians retain the order theorem but do not inherit that damping property.

The QR solver certifies the equation residual against the original shifted matrix and returns explicit failure statuses. The proofs do not turn that residual into a forward-error guarantee without an inverse estimate. The algorithm specifications model field evaluations, outer stage combinations, and the state update as exact real operations; before QR, each exact matrix and right-hand side must pass the partial exact-storage check or the method returns a representation failure. The QR factorization, triangular solves, and residual check use the stated floating-point model. A full hardware-rounding convergence theorem for those outer operations would need certified evaluation and update-error terms and is not claimed here.

## Active-run and scheduling evidence

The final read-only `autopilot status` check on 2026-10-16 04:05 UTC reported this run as active, with `1-scaffold` at 77/107 and batch 74 still listed among the missing dispatches while artifact completion is deferred until writers drain. It also reported an owner-repair blocker for rejected items. The latest `git log` entry was `ab182edfd1` ("Bind adopted completion stamps to the current native dispatch"). No autopilot state, shared plan, or verdict was changed.

The dispatch records scheduling input hash `6dfd0c45f2a8223c7d6f772198513d38987ad90fa865c52f24f2241dd5c6d510`, while the current `numerical-optimization-dynamics-2026-10-16-batch-dependency-levels.json` records `input_sha256` `0d5348a9c60bb403f5b5cc31ab92b836e83dc9f5b6f2f1af77b6da8bf16a274a`. The read-only `batch-dependency-levels.mjs check` could not recompute the shared artifact: YAML parsing stops at the unquoted source title in batch 87 item `alg-finite-sectional-forward-euler-positivity-cfl` (line 20, column 14). This foreign item was not edited. The scoped batch-74 item graph was independently recomputed from all current run manifests: all 21 manifest labels and item-frontmatter labels match their computed levels. The whole-run item-level check reports 22 unrelated empty scaffold inventories and one unrelated stale label: `ex-additive-eigensolve-tolerance-residual-certificate` is labelled level 3 but computes to level 4. The assigned items are not among these defects.

## Scoped check results and author readiness

Final scoped checks after the last carrier and contract edits:

- `manifest-deps`: 21 items, 0 normalized, 0 errors; `content-policy`: 21 scoped items, 0 errors or warnings.
- `precheck`: 21 assigned files, 17 proof-bearing items checked, 0 failures; `proof-layout`: 21 items, 72 steps, 0 defects.
- Strict proof contracts: 21/21 items, 81 exact supplier citations, all 72 numbered proof steps mapped, 0 errors or warnings. The contracts retain applicable finite checks, boundary dispositions, and axiom notes.
- `rendercheck`: all 21 items and both pages (23 files) pass; the six multiline display blocks found on the first pass were flattened before this final pass.
- Focused `depcheck`: 21 selected items, 0 errors or warnings; its prerequisite closure covers 643 items and 175 pages. Focused `fwdcheck`: 21 selected items, 0 errors or warnings. Focused `extcheck`: 21 items, 0 errors or warnings. `citecheck`: 21 items, 0 warnings.
- Scoped dependency-level recomputation: 21 assigned items, no mismatches among computed, manifest, and item-frontmatter levels. The 22 whole-run empty-inventory errors are outside this pair.
- `coverage-checklist --require-destination`: one page, 34 harvested results, 0 errors or warnings. `source-fetch-check --stamp`: 5/6 sources fetch-verified, 6/6 resolved, 0 newly stamped; the remaining source is the fully documented MathWorks drop with its six failed attempts and alternative proof records.
- Cross-batch input comparison: 3 page edges and all 18 direct item edges to batches 1, 3, or 65 match the assigned manifest. No direct supplier is missing. The batch-65 definitions' actual bodies were inspected, but their Step 1 receipts were absent, so no provider acceptance is claimed.
- Step 1 author-readiness records were written for all 21 assigned items without `--owner`. A scoped hash check confirms all 21 records are current and closed. They record author readiness only and do not constitute independent proof approval or publication.

These results cover the assigned pair. The shared batch-scheduling artifact remains unrecomputed because of the unrelated batch-87 YAML defect and is left for its owner.

# Batch 21 authoring notes — Linear numerical boundary-value problems

## Scope and controlling design

The controlling page row is the current `plan-spec.json` entry for `numerical-boundary-value-problems`: it assigns NA-20 to `research/plan-numerical-dynamics-track.md` and requires no other page. The binding mathematical contract is dynamics plan NA-20 and its amended appendix at the end of that plan. The owner direction maps dynamics pages to `dynamics-audit.md`; its NA-20 disposition confirms a local BVP proof and records removal of the NA-19 edge.

The stale `plan-numerical-analysis-track.md` NA-20 summary agrees on the 1D zero-Dirichlet problem, uniform centered stencil, (C^4) regularity, residual-to-error route, and three examples, but still says `Requires: NA-19`. That conflicts with the current dynamics contract and `dependency-overrides.json`, which remove `NA-19 -> NA-20` because the time-evolution Lax equivalence theorem does not prove the stationary BVP inverse estimate. The dynamics appendix controls under the owner direction and current plan. This batch therefore has no NA-19 page requirement or item dependency; its maximum principle and inverse bound are proved locally. The current plan-spec row has `requires: []` and no published context items.

The complete retained scope is: (h=1/(N+1)), (N\ge1); (A_h=h^{-2}\operatorname{tridiag}(-1,2,-1)) with exact zero endpoint data; a fourth-derivative residual bound (Mh^2/12); the barrier (q(x)=x(1-x)/2) giving (|A_h^{-1}|_\infty\le1/8); and the global error (Mh^2/96). The theorem also carries the approved independent solve-residual term (\|\rho_h\|_\infty/8). No generic collocation theorem or energy-norm extension is asserted. The three retained examples are the exact quadratic, an order-losing first-order Neumann boundary closure, and a uniformly bounded inverse matrix norm.

## Inventory and levels fixed before carriers

The authored inventory is four A-page items and three B-page examples. The dependency-level calculation uses only in-run `deps` edges; `justified_by` is the schema's forward well-definedness discharge and is excluded from scheduling levels to avoid the prescribed definition-to-lemma cycle. External published Taylor and triangle suppliers do not raise levels.

| Item | Direct logical dependencies | `dependency_level` |
|---|---|---:|
| `alg-centered-difference-dirichlet-bvp` | none; `justified_by` the inverse lemma | 0 |
| `lem-centered-difference-dirichlet-inverse-maxnorm` | `alg-centered-difference-dirichlet-bvp` | 1 |
| `lem-centered-difference-dirichlet-truncation-residual` | algorithm; published `cor-taylor-remainder-bound`; published `lem-of-triangle-inequality` | 1 |
| `thm-centered-difference-dirichlet-second-order-error` | algorithm; both local lemmas | 2 |
| `ex-centered-difference-dirichlet-quadratic-exact` | algorithm; inverse lemma | 2 |
| `ex-first-order-neumann-closure-causes-first-order-bvp-error` | algorithm's grid/interior stencil | 1 |
| `ex-dirichlet-inverse-infinity-norm-tight-at-n3` | algorithm; inverse lemma | 2 |

The pre-carrier scoped calculation used `dependencyLevels` on this batch manifest and returned seven items, levels `0,1,1,2,2,1,2`, no errors. Run batch 21 is level 0 with no prerequisite batches, as recorded in the supplied dependency-level input SHA-256 `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`.

## Source reading and disposition

Three complete full-text treatments were read: the complete FNC Chapter 10 `linear.md` file from commit `a280ed1a013393ee0a184dcbaa866522f35a3516`; all seven pages of MIT 18.336 Lecture 5; and all five pages of Lecture 6. Exact locators, cache paths, hashes, per-item content, source limits, and the fetch-check stamp are in `numerical-optimization-dynamics-2026-10-16-batch-21.source-coverage.json` and `.source-evidence.json`.

FNC gives the linear collocation system with exact endpoint rows and the sampled-solution residual identity; it explicitly says that the mesh-uniform inverse-norm proof is omitted. MIT Lecture 5 derives the centered stencil and shows that a first-order backward Neumann boundary closure can lower accuracy. MIT Lecture 6 derives the centered Poisson residual/error identity and states the uniform inverse stability condition; its spectral 2-norm discussion is not the local max-norm discrete maximum-principle proof. Those source limits are preserved. The exact (1/8), (1/12), and (1/96) bounds and the closure witness are proved in the local carriers.

The only outside logical suppliers are published `cor-taylor-remainder-bound` (applied with order three on each closed neighbor interval) and `lem-of-triangle-inequality` (to add the two Taylor remainders). Their actual Statements and complete Proof sections were inspected, as was the intermediate Lagrange-form remainder result used by the Taylor supplier; exact supplier excerpts and their uses are in the proof contracts. The supplier items retain their own published prerequisite chains; no new external or unproved fallback is introduced. No choice principle is used. No registered finite-smoke check applies; the N=3 matrix calculation is exact and is included in the local example proof, not represented as a general proof check.

## Reconciliation and readiness

There are no in-run cross-pair suppliers for this batch and no missing supplier bodies. All seven items have actual A/B placement and local proof contracts; readiness records are created only after final scoped checks and actual supplier-body verification. Those Step-1 decisions record authoring readiness only and confer no independent approval.

The batch input `numerical-optimization-dynamics-2026-10-16-batch-21.cross-batch-dependencies.json` is empty because both A/B pages and all in-run logical suppliers are in batch 21; the Taylor remainder and triangle-inequality suppliers are published context, not cross-batch edges. The shared frontier dependency ledger and runtime were left to the owner.

## Final scoped checks

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 21`: pass; precheck, rendercheck, authored-item content policy, and strict proof-contract checks all exited 0. Result: `numerical-optimization-dynamics-2026-10-16-author-check-21.json`.
- Scoped `dependencyLevels` on the batch-21 manifest: seven items, no errors; labels are `0,1,1,2,2,1,2` in manifest order. `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-21.pages.json`: 7 items, 0 missing arrays, 0 errors.
- `node tools/depcheck.mjs --items-file research/numerical-optimization-dynamics-2026-10-16-batch-21.item-scope.json --pages-file research/numerical-optimization-dynamics-2026-10-16-batch-21.page-scope.json --json`: 7 item subjects and 2 page subjects, dependency closure of 199 items and 33 pages, 0 errors/warnings. `node tools/fwdcheck.mjs --items-file research/numerical-optimization-dynamics-2026-10-16-batch-21.item-scope.json --json`: 0 forward references and 0 errors/warnings. `node tools/extcheck.mjs --items-file research/numerical-optimization-dynamics-2026-10-16-batch-21.item-scope.json --json`: 7 items, 0 unproved, 0 open-problem, 0 errors/warnings.
- `node tools/proof-layout.mjs` on all seven changed item paths: 7 items, 27 steps, 0 defects.
- `source-fetch-check --stamp` fetched and verified all 3 full-text sources; the final no-network check also passed 3/3. There were no retrieval failures or retries.
- All seven `step1-decisions.mjs record` entries are `ready`, `owner:false`; a focused read confirmed all seven readiness hashes are current against their item and suppliers. No `--owner` override was used. No registered finite-smoke case applies to these BVP claims; the N=3 calculation is proved exactly in its example.

The full run is still incomplete outside this pair. `node tools/step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16` remains open with 421 other items lacking readiness decisions and 158 empty page inventories. Current `.autopilot` status is still `1-scaffold`, `0/107` native author results, with no workers in flight. This pair's carriers and readiness are complete, but they do not create a native author-result receipt or advance the owner-controlled run. No tests were run; only the requested scoped authoring and formatting checks were used.

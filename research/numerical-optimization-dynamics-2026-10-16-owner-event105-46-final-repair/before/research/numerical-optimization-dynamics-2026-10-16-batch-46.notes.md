# Batch 46 authoring notes — Nonsmooth contact time stepping and projections

## Controlling scope and recorded conflicts

The controlling owner direction is `research/numerical-optimization-dynamics-2026-10-16-owner-authoring-direction.md`; it releases the current run and supersedes the old “engines stopped” prose in the historical dynamics audit. It does not waive any source, proof, prerequisite, or review requirement. The T11 design is `research/plan-numerical-dynamics-track.md` §T11 (starting at L582) and its repaired contract; the inventory record and its retained collision addendum were also read.

The T11 A/B page IDs, order (2376/2377), category, companion relation, and three A-page requirements agree between the design and the current T11 `plan-spec.json` rows: `convex-and-semicontinuous-functions-on-rn`, `inequality-kkt-duality-and-optimality-certificates`, and `proximal-gradient-and-accelerated-composite-optimization`. No page-placement conflict was found. The inventory's `cycle2_collision_addendum` is additional binding scope that the abbreviated plan-spec row does not repeat; it is retained here as an isolated frictionless sphere law and a conditional event-driven procedure. It does not assert simultaneous/frictional contact, grazing, Zeno behavior, or a penalty-to-rigid limit.

The T11 plan asks for finite-horizon convergence and an $O(\sqrt h)$ estimate with the normal-reaction regularity needed by its proof route. The local proof derives a uniform bound on the normal reaction from the tangency identity and proves the estimate directly by normal-cone monotonicity and Grönwall; it does not assume BV regularity of that reaction. The proof states the compactness, joint Lipschitz, finite-horizon, and choice hypotheses explicitly. The scalar root solver adds a feasibility certificate and returns `unresolved` when root completeness or nonpenetration cannot be certified; this only makes its success conditions explicit and does not weaken the planned resolved-step claim.

## Inventory, dependency levels, and placement

The assigned pair contains 14 A items and 5 B items, below the 100-item page cap. Exact direct dependencies, item metadata, and computed labels are mirrored in `numerical-optimization-dynamics-2026-10-16-batch-46.pages.json`. Dependency levels follow the current batch scheduling input `6a3d96e658afa4d7b5dc85a7719275b5ffcf5cee7374f9a389199dfa5f4d2d63`; each level is zero without an in-run supplier, otherwise one plus the greatest in-run supplier level.

| Level | A-page items | B-page items |
|---:|---|---|
| 0 | `lem-equi-lipschitz-curves-in-compact-euclidean-set-have-uniformly-convergent-subsequence`; `lem-projection-onto-closed-convex-set-is-nonexpansive`; `alg-one-dimensional-first-impact-with-restitution`; `thm-frictionless-sphere-binary-impact-impulse-laws`; `lem-projected-euler-projection-residual-certificate` | `cex-nonconvex-set-can-have-nonunique-nearest-points` |
| 1 | `thm-first-impact-step-complementarity-momentum-and-energy`; `alg-event-driven-frictionless-sphere-contact-with-certified-events` | `ex-frictionless-sphere-binary-impact-calculation` |
| 2 | `def-projected-contact-dynamics-and-euler-step`; `lem-naive-all-pairs-collision-search-has-quadratic-work` | `ex-one-dimensional-impact-restitution-boundaries` |
| 3 | `lem-normal-cone-maximal-monotone-and-projection-resolvent`; `alg-certified-projected-euler-method` | `ex-penalty-stiffness-requires-time-step-control` |
| 4 | `lem-projected-contact-solutions-are-unique` | — |
| 5 | `thm-projected-euler-existence-uniqueness-and-convergence` | — |
| 6 | `thm-projected-euler-square-root-global-error` | — |
| 7 | — | `ex-projected-overdamped-particle-euler-trajectory` |

Suppliers are authored in ascending in-pair level. The definition and resolvent lemma use the inspected batch-6 outward KKT-normal interface and batch-27 indicator/proximal interfaces. Their body checks are recorded in `numerical-optimization-dynamics-2026-10-16-batch-46.cross-batch-dependencies.json`; `verified` means current interface consistency, not independent proof approval.

## Mathematical closure and unresolved dependency

The projected inclusion uses the outward convention $N_C(x)=\{n:\langle n,z-x\rangle\le0\ \forall z\in C\}$ and the projection step uses $y-p\in N_C(p)$. The local proof derives nonexpansiveness, residual-to-projection error, normal-cone maximal monotonicity/resolvent, uniqueness, existence, uniform convergence, and the stated inexact Euler bound. The all-$z$ almost-everywhere passage uses a countable dense set of projected rational points and a countable union of null sets.

The assumptions are carried through their actual suppliers: Countable Choice is required for the BV differentiability, Lebesgue differentiation, and null-set-union results; Dependent Choice as well as Countable Choice is required by the absolutely-continuous FTC used for endpoint identities and the uniqueness estimate. Both axioms appear in the existence theorem, its uniqueness lemma, the rate theorem, and the projected B example. The rate estimate uses the derived bound $\|f-\dot x\|\le2M$ and does not claim that a bare solver tolerance is certified.

The retained hard-sphere procedure depends on T10 event location. Its current exact planned supplier page is `event-location-and-hybrid-trajectory-error`, but batch 105 currently has `items: []`. The algorithm takes certified event records as inputs and does not invent a provider proof. Readiness remains escalated pending exact T10 item IDs and complete bodies establishing transverse isolated roots, dense-output/guard error, missed-event exclusion, event separation and finite event count, reset/restart error propagation, and budget failure semantics. These are listed in the cross-batch record. The local pair continues independently, as instructed.

## Full-text sources and source history

Two independent full-text treatments were read for the A page:

- David E. Stewart, *Dynamics with Inequalities: Impacts and Hard Constraints*, complete searchable full-text copy of the published book (22,668 extracted lines); the relevant complete printed sections inspected were §1.1.1 (pp. 2–3), §4.3 (pp. 122–124), §6.1.8 (pp. 221–222), and §6.1.10 (pp. 231–232). The text was opened from Scribd after the old nzdr.ru mirror failed. The inspected passages support the impact convention, projected normal-cone context, penalty timestep cautions, and penalty-limit warning. The local existence, convergence, collision-extension, and complexity proofs are not attributed to the book.
- Dimitri P. Bertsekas, MIT 6.253 *Convex Analysis and Optimization*, complete 340-page course-notes PDF; Lecture 12 slides 158–161 and Lecture 23 slides 301–303 were inspected in full for indicator normal cones and projection variational inequalities. The dynamic error theorem and hard-sphere results are proved locally.

Exact locators, supported item IDs, dispositions, retrieval histories, and fetch stamps are kept in `numerical-optimization-dynamics-2026-10-16-batch-46.coverage.json`. `source-fetch-check --stamp` recorded six initial nzdr mirror failures across the two page entries (404s/timeouts), then the full Scribd text and both MIT source entries verified; final result: 4/6 fetch-verified, 2/6 resolved as documented URL drops, zero source-resolution failures. Each dead-mirror record preserves all six actual attempts, the exact searches used, and a local per-item argument plus the item's declared direct dependencies. The book itself is not dropped: the replacement full text is active and supports the same sections. During initial research, optional Bauschke–Combettes and Stewart–Trinkle candidate PDFs could not be extracted; neither is a selected source, neither contributes a harvested result, and all retained claims are supported by the two complete selected treatments plus local proofs. No mathematical coverage is waived.

## Scoped validation and readiness

The authored items and carriers remain drafts. Definitions and algorithms are not given proof contracts; each lemma, theorem, counterexample, and worked example has a step-mapped proof contract. Item readiness will be recorded `ready` only after its actual suppliers, placement, proofs, and contracts pass the scoped checks. The event-driven algorithm remains `escalated` because the T10 body is absent. Decisions do not constitute independent approval. No shared plan, engine state, verdict, published item, or other pair's carrier was edited.

## Final scoped checks and Step-1 records

- `manifest-deps`: 19 items, 0 normalizations, 0 errors. Direct dependency comparison between all 19 item frontmatters and the batch manifest found 0 differences.
- `precheck`: 19 files, 15 proof-bearing items, 0 failures after adopting the required dependency-layer step numbering. `proof-layout`: 19 items, 45 numbered steps, 0 defects. Strict proof contracts: 15/15 checked, 0 errors or warnings. `rendercheck`: 21 files, 0 errors or warnings. `content-policy`: 19 items, 0 errors or warnings.
- Focused `depcheck`: 0 errors/warnings; dependency closure 860 items and 312 pages. Focused `fwdcheck`: 0 errors/warnings. Focused `extcheck`: 19 items, 0 unproved records, open problems, errors, or warnings.
- `coverage-checklist`: 2 pages, 23 harvested results, 0 errors/warnings. `source-fetch-check` check mode: 4/6 source entries fetch-stamped and 2/6 failed-mirror URLs resolved as documented drops; all 6/6 entries are resolved.
- Scoped `author-check` passed with fingerprint `97e10cdb4d152a84bf321d451d1110b3301f8e4404ce531699a97156e3de320b`; its precheck, rendercheck, content-policy, and proof-contract gates all passed. The durable result is `numerical-optimization-dynamics-2026-10-16-author-check-46.json`.
- Run-wide `item-dependency-levels.mjs check` exits nonzero because 86 other run pages still have empty scaffold inventories. It reported no batch-46 item-level errors and no other item-level mismatches; all labels in this assigned manifest match their in-run suppliers.
- `node tools/step1-decisions.mjs record` recorded 18 items `ready` and `alg-event-driven-frictionless-sphere-contact-with-certified-events` `escalated`, with exact direct dependency lists. Targeted hash verification found all 18 ready records current. The run-wide `step1-decisions check` cannot load the full frontier because unrelated items have malformed YAML source titles with an unquoted colon: `items/alg-certified-adaptive-simpson.md:24` and `items/thm-certified-adaptive-simpson-enclosure.md:28`. The parser reports “Nested mappings are not allowed in compact mappings”; those files belong to another pair and were not edited. The T10 supplier gap remains the sole batch-46 escalation.

No test suite was run. No owner override was used. These records establish authoring readiness only and do not constitute independent proof approval.

# Batch 2 authoring notes — Euler–Maruyama Scheme and Coefficient Conditions

Run: `bayesian-computational-statistics-62`  
Role: beta, batch 2  
Scheduling input: `4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d`

## Controlling design and plan comparison

The run-local direction in `research/bayesian-computational-statistics-62-owner-authoring-direction.md` controls the pair: it explicitly includes the three independent SDE/Euler–Maruyama prerequisite pairs in the 62-pair run and requires distinct finite-L2, autonomous Higham–Mao–Stuart all-moment, and conditional weak-order-one contracts. Within that scope, `research/plan-bayesian-computational-statistics-prerequisites.md` §P-NUM-SDE-01 controls the local scheme page. `research/plan-machine-learning-track.md` §P-NUM-SDE-01 is the original, broader provider design; it confirms the scheme, shared coefficient assumptions, time modulus, and separation of the later convergence page. The prerequisite plan adds the finite-p numerical moments needed by the later weak contract. This page proves pointwise numerical moments only; it claims neither an exact-solution path-supremum moment bound nor a strong or weak rate.

The plan-spec rows 2044–2045 (`P-NUM-SDE-01` and its B page) have empty `items` arrays, while the dispatched batch-2 manifest supplies the concrete item inventory. This is an inventory omission in `research/plan-spec.json`; the run-local direction and prerequisite plan determine the scope, and the assigned batch manifest determines the authored item IDs. The plan-spec and batch manifest agree that the A page requires `forward-ito-sde-well-posedness`.

The controlling design defines the grid for any finite `N >= 1`, while its uniform moment/increment claims are restricted to `0 < h <= 1`. The algorithm now accepts the full finite grid; the proved estimates state their `h <= 1` range explicitly.

## Inventory and dependencies

The A page inventory is `alg-euler-maruyama` (level 0), `lem-square-integrable-predictable-step-ito-integral-is-finite-sum` (level 0), `def-euler-maruyama-step-process-and-continuous-interpolation` (level 1), `lem-euler-maruyama-one-step-moment-and-increment-estimates` (level 2), and `thm-euler-maruyama-uniform-moment-and-increment-bounds` (level 3). The B page examples are `ex-euler-maruyama-additive-noise-constant-coefficients` and `ex-euler-maruyama-superlinear-drift-outside-global-lipschitz-contract`, both level 4. Level 0 denotes no in-run item supplier; external published definitions remain explicit dependencies.

The new A-page lemma closes a well-definedness gap in the earlier interpolation proof: the repository's elementary Itô class requires bounded coefficients, whereas Euler coefficients are only shown square-integrable. It truncates each of the finitely many coefficients, passes the elementary sums to the general Itô integral in L2, proves convergence of the random-coefficient sums, and promotes fixed-time equality to indistinguishability by continuity. The interpolation definition now calls the coefficients predictable finite-step processes, records its theorem as `justified_by`, and no longer calls unbounded coefficients elementary integrands. The uniform-moment proof explicitly checks finite coefficient energy before invoking the local lemma.

The superlinear example now reports only that its coefficient hypotheses fail; it makes no claim that the theorem's algorithm applies to this inadmissible coefficient pair. The additive-noise example states the complete usual-filtration assumptions required by its direct SDE-definition dependency.

## Source reading and dispositions

The complete relevant source text was inspected. The A page has four fetched source records in `research/bayesian-computational-statistics-62-batch-2.coverage.json`:

- Higham, Mao, and Stuart, [§2, equations (2.1)–(2.3), Assumption 2.1, and Theorem 2.2 with proof](https://www.maths.ed.ac.uk/~dhigham/Publications/P44.pdf): the recursion/interpolation convention is included; the moment-supremum premise and strong-convergence conclusion are deferred to the convergence page. No rate is imported here.
- Särkkä and Solin, [Chapter 8, Algorithm 8.1 and equation (8.28)](https://users.aalto.fi/~asolin/sde-book/sde-book.pdf): the first-order recursion is included. The weak-error schemes in §8.3 are deferred, and the higher-order methods are out of scope.
- Tiejun Li, [Lecture 16, §1 equation (1.7) and §2](https://www.math.pku.edu.cn/teachers/litj/notes/appl_stoch/lect15.pdf): the recursion is included; exact-solution moment estimates are deferred to the SDE page, and Proposition 2.2's strong rate is deferred to the convergence page. The exposition's rate discussion is not used as a proof supplier.
- A.W. van der Vaart, [§5.3, Definitions 5.20 and 5.25, and Lemmas 5.21–5.23](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf): extension from bounded elementary predictable integrands provides context for the new local lemma. The finite-partition truncation and identity used here are proved locally; the notes are preliminary and are not the sole proof source.

`node tools/source-fetch-check.mjs --coverage research/bayesian-computational-statistics-62-batch-2.coverage.json --stamp` verified all 4/4 URLs as fetchable full-text sources (one new stamp, zero dropped sources). There were no retrieval failures or source-resolution retries.

## Unresolved page-level supplier

`forward-ito-sde-well-posedness` remains the explicit, unresolved page prerequisite. I read its current page and supplier bodies. The direct definition `def-ito-sde-and-strong-solution` fixes a complete usual filtered space, filtration-relative Brownian increments, an F0-measurable L2 initial value independent of future increments, jointly Borel uniformly globally Lipschitz and linear-growth coefficients, finite-coordinate integrals, and indistinguishable strong solutions. The additive-noise example states these exact filtration conditions and uses the definition only.

The required P-SDE page is not ready for reconciliation: `lem-lipschitz-sde-map-is-well-defined` currently returns `bad-tag(steps 1.1)`; `lem-lipschitz-sde-local-solution-has-finite-path-moment` returns `untagged-steps`; `thm-global-strong-well-posedness-for-lipschitz-ito-sdes` returns `repair` (not a clean pass); and `thm-finite-horizon-moments-for-lipschitz-ito-sdes` returns `untagged-steps`. The batch-1 pages/coverage artifacts exist, but its proof-contract file is absent. These precheck outcomes are formatting/contract blockers, not mathematical rejection or acceptance. The exact finding and required hypotheses are preserved in `research/bayesian-computational-statistics-62-batch-2.cross-batch-dependencies.json`; batch 1 and downstream consumers were not edited.

The affected run-level prerequisite is the A-page requirement `forward-ito-sde-well-posedness`; P-NUM-SDE-02 and BCS-55 retain their separate declared uses of the P-SDE-01 strong-solution and exact-moment interface. The numerical recursion, one-step estimates, uniform numerical-moment proof, and examples in this pair are complete independently of those unready P-SDE proof carriers.

## Scoped checks and readiness

Final checks on the assigned carriers:

- `node tools/tsx-run.mjs tools/precheck.mts` on the five proof-bearing items: 5 checked, 0 failing.
- `node tools/proof-layout.mjs` on the six changed item files: 6 items, 16 steps, 0 defects.
- `node tools/rendercheck.mjs` on the seven items and two assigned pages: 9 checked, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file /tmp/bayesian-computational-statistics-62-batch-2-items.json --json`: focused item scope, 0 errors, 0 warnings; its prerequisite closure contains 1,651 items and 187 pages.
- `node tools/content-policy.mjs research/bayesian-computational-statistics-62-batch-2.pages.json --json`: 7 scoped items, 0 errors, 0 warnings.
- The scoped `dependencyLevels` calculation on batch 2's manifest: 7 items, 0 errors; levels are 0, 0, 1, 2, 3, 4, 4 as listed above.
- A final manifest/source/coverage/contract consistency check found 7 authored items, 5 proof-bearing items, 5 matching contracts, 5 result coverage rows, all 4 source fetch stamps present, and 0 mismatches.
- `source-fetch-check --coverage research/bayesian-computational-statistics-62-batch-2.coverage.json --stamp`: 4/4 full-text sources fetch-verified, 0 drops.

Two run-wide derived checks remain open and were not repaired from this batch. `node tools/item-dependency-levels.mjs check --run bayesian-computational-statistics-62` reports empty scaffold inventories in other batches; the explicit batch-2 calculation above has no item-level errors. `node tools/batch-dependency-levels.mjs check --run bayesian-computational-statistics-62` reports the shared artifact stale after this manifest changed. Its read-only recomputation gives batch 2 level 1 with prerequisite batch `1` and current input hash `e747532d82eb1c4b500bfcc334ea20eadef2566fe8de3c5586610586a1998a6a`; the stored run artifact was left for the owner to regenerate.

The seven batch-2 `step1-decisions` records are `escalated`, `owner: false`, and their recorded hashes match the current carriers. Each names the exact page-level `forward-ito-sde-well-posedness` blocker; the cross-batch evidence identifies its four unclean proof carriers and missing proof-contract file. `node tools/step1-decisions.mjs check --run bayesian-computational-statistics-62` remains open for the full run (356 items; 69 ready), including unassigned items with missing decisions or empty inventories. These escalations are preserved for owner reconciliation and are not independent approval.

An initial attempt to put the page slug in the Step-1 `dependencies` array failed during alias resolution because `items/thm-hh-affine-type-a-bernstein-pbw.md` has an invalid YAML `\lambda` escape in its frontmatter locator. I left that unrelated source untouched and recorded each assigned item's actual item dependencies; the page-level prerequisite and its supplier IDs are stated in the decision reasons and the cross-batch evidence.

While checking validator usage, I mistakenly invoked `depcheck` with unsupported `--help`, which caused a read-only whole-corpus scan. I discarded that output and used the explicit batch-2 `--items-file` scope above for the actual dependency check; no files were changed by the unscoped scan.

## Owner final supplier-boundary reconciliation

Both supplier1 and consumer2 native authors completed successfully. Final focused cycle2 research/bayesian-computational-statistics-62-owner-em-final-resolution.json supersedes the earlier absent-contract/precheck page hold: contracts exist and the genuine supplier result reports scoped checks. The actual import is only the compatible SDE definition used by the additive-noise example; the other numerical claims are locally proved. All existing page/item edges, claims, Lp hypotheses and pointwise-in-time moment limits remain. The exact earlier notes/cross-batch rows/readiness are archived at research/bayesian-computational-statistics-62-owner-em-readiness-before/. Root readiness binds current inputs and grants no independent proof audit, publication or native gate waiver.

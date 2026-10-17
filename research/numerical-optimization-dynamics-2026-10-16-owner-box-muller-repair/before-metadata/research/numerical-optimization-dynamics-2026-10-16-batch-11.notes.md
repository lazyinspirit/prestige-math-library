# Batch 11 authoring notes — finite bit random streams and variate generation

Run: `numerical-optimization-dynamics-2026-10-16` · role `beta` · batch `11`  
Pair: `finite-bit-random-streams-and-variate-generation` / `finite-bit-random-streams-and-variate-generation-examples`

## Controlling plan and conflicts

- Read `CLAUDE.md`, `SCHEMA.md`, the complete `WORKFLOW.md` set, the owner direction, the complete T21 design section, `plan-spec.json`, the batch-11 scaffold, dependency-level input, drift report, inventory and current task. Owner direction is binding; `plan-spec.json` controls page/prerequisite conflicts.
- Current T21 A/B order is 2306/2307 in `numerical-differential-equations-and-stochastic-dynamics`. Current A-page prerequisites are `conditional-and-finite-group-exact-inference` and `probability-spaces-random-variables-and-expectation`; B requires A. The task design and current plan agree on these values.
- Historical `research/proposed-canonical-rows.json` has stale T21 order/category values (2310 / numerical-analysis). They conflict with the current `plan-spec.json` and owner direction and were not followed. No shared plan was edited.
- The starting batch dependency input had batch 11 at level 0 with no prerequisite batches. It remains batch level 0. The authored manifest now has 22 items; per-item levels are recorded in the scaffold and were recomputed from the authored `deps` before final checks.
- T21 item inventory: 18 A items and 4 B examples. The manifest is the authoritative inventory, dependency list and level record for this batch.

## Supplier audit and axiom branches

- Read the current bodies, not only their interfaces, for the product-space theorem, coordinate-independence corollary, independence definition, CDF correspondence theorem, generalized-inverse context, Tonelli, continuity of measure, sigma-finite pi-system uniqueness, measurable-limit closure, probability/real-variable definitions, finite-uniform definition, complete ordered field, change of variables, coordinate-hyperplane nullity, exponential/log/square-root calculus, compact uniform continuity, total variation, Cauchy–Schwarz and standard-normal law definition.
- `thm-countable-product-of-probability-spaces` explicitly assumes Countable Choice and Dependent Choice and gives all finite product marginals. The coordinate corollary supplies independence. The randomized PIT item randomizes across CDF jumps and is a reverse transform; it is not used as a bit-stream generator.
- `thm-probability-law-and-distribution-function-correspondence` explicitly assumes Countable Choice and supplies CDF monotonicity, right continuity and tail limits. The generalized-inverse proof additionally cites completeness of the real order and uses the infimum property directly.
- The complete published proof of `thm-fundamental-theorem-of-arithmetic` was read before citing its uniqueness clause in the LCG period proof. Its existence clause factors the positive integers used there; the uniqueness clause shows every prime in a factorization of a divisor of $2^w$ must equal 2. The separate prime definition verifies 2 is prime. This published input adds no choice axiom.
- The Borel change-of-variables supplier explicitly assumes Countable Choice (`AC_omega`); the Box–Muller lemma preserves this branch and uses the actual slit-plane diffeomorphism. The standard-normal definition explicitly assumes full AC, so the density theorem is proved under Countable Choice and only the separate naming corollary adds full AC. No stronger axiom was silently used to prove the density.
- LCG claims concern a deterministic recurrence and a separate uniform-seed model. Full period is not used to infer independence; the dependent-pair proof counts graph support.

## Source harvest and retrieval history

- Coverage is recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-11.coverage.json`. It harvests Devroye Chapters II, III, V and XV; Raz's full probability notes; Jung's full Monte Carlo handout; the Random123 full paper; and the L’Ecuyer 2007 article history. Locators, section results, dispositions, supported item IDs, and item-level alternatives are recorded there.
- The Box–Muller article candidate was not usable as a fetched full-text source: the DOI open returned an internal error and the Project Euclid PDF endpoint returned a 1,162-byte HTML bot wall. Search alternatives (Devroye V §4.4 and Raz §5.8 / Exercise 5.2) were retrieved and read in full over the relevant sections; the complete local Box–Muller proof is authored in `lem-box-muller-product-density-and-radius-moment`. This candidate is not cited as read or included in coverage.
- L’Ecuyer’s author URL was downloaded and read locally earlier, but the current `source-fetch-check --stamp` run returned 1,451-character HTML on the initial request and five retries. Search found a ResearchGate author-uploaded complete-text page, which the browser exposed through the full paper, but the checker returned HTTP 403 on its initial request and five retries. The failed URL, all attempts, searches and complete alternative arguments/dependencies are preserved under `source_resolution` in the coverage file. The source is marked dropped from the fetch-verified active set with certainty; local proofs and the checked Devroye, Jung and Random123 sources still cover every affected item. It is not counted as a fetch stamp.
- `source-fetch-check --stamp` verified 7/8 sources and recorded 1 justified dropped source. No external source excerpt, proof completion or approval was invented.

## Open supplier interface

- The T21 design names VAL-INTERVAL as precision owner. The reserved candidates are `alg-na-outward-rounded-interval-and-ball-arithmetic` and `thm-na-outward-rounded-interval-and-ball-arithmetic-contract`; both remain absent from the current batch-14 manifest, so there is no supplier body or proof to quote.
- Required interface: deterministic outward-rounded enclosures for `log`, `sqrt`, `sin`, `cos` and the `2π` reduction; sound range reduction and Taylor-tail/error bounds; finite precision/work budget; and a returned success only when each enclosure is certified, otherwise `inconclusive`.
- Affected claims: `alg-box-muller-finite-bit-transform` evaluator contracts and `thm-box-muller-finite-bit-coupling-error` evaluator-error terms. The evaluator assumptions are written conditionally and no certificate existence is asserted. Because T21 is order 2306 and VAL-INTERVAL is order 2312, the finding is kept open in the batch cross-batch input; no formal plan/deps edge was added. These two items require owner reconciliation before `ready`.

## Final scoped checks and item disposition

- `node tools/proof-layout.mjs` on the 22 changed carriers: 22 items, 51 steps, 0 defects.
- Scoped `precheck.mts`: 22 files; 16 proof-bearing items passed and the 6 definition-only algorithms were not applicable; 0 failures or repair suggestions. `verification.precheck` records that result in each carrier.
- Strict proof contracts: all 22 items checked, 0 errors or warnings. The contracts map 78 exact supplier excerpts and all 51 numbered proof steps; finite checks are recorded where relevant.
- Coverage checklist: 1 A page and 34 harvested results, 0 errors or warnings.
- `source-fetch-check --stamp`: 7/8 sources fetch-verified; the eighth is the documented L’Ecuyer drop with complete alternative arguments. Check mode resolves 8/8 including that drop.
- Scoped item dependency computation: 22 items, no cycles or label mismatches, maximum level 3. Batch 11 remains dependency level 0. Item levels are: level 0 (7) — LCG definition, counter definition, finite-state theorem, fair-bit uniform theorem, generalized-inverse lemma, Box–Muller density lemma, certified bisection algorithm; level 1 (5) — midpoint theorem, LCG period theorem, counter no-reuse lemma, Bernoulli algorithm, Box–Muller standard-normal corollary; level 2 (7) — finite categorical algorithm, Bernoulli law/cost theorem, certified inverse-error theorem, finite-bit Box–Muller algorithm, LCG example, midpoint-tail example, zero-endpoint example; level 3 (3) — categorical count theorem, finite-bit Box–Muller error theorem, vanishing-density inverse example.
- Focused `depcheck`: 0 errors and 0 warnings across all 22 selected items and the two selected pages plus their prerequisite closure.

`step1-decisions.mjs record` produced 20 `ready` records and 2 `escalated` records, without `--owner`; a current-hash check confirms the records remain valid. The escalations are `alg-box-muller-finite-bit-transform` and `thm-box-muller-finite-bit-coupling-error`, both for the open VAL-INTERVAL interface above. Each record contains the examined direct dependency IDs; the escalation reasons name both unresolved candidate supplier IDs and the missing evaluator properties. Readiness records are authoring handoffs, not independent approval.

No published content, shared plan, shared dependency-level input, engine state, or verdict was edited.

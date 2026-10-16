# Batch 33 — Shor’s Factoring Algorithm

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: beta  
Batch dependency level: 13; declared prerequisite batches: 14 and 32  
Scheduling input SHA256: `18e74e2f302792bf59915862859e447cb46018c36ea7712d592c03b3b262e434`

## Scope, plan and design reconciliation

No pair-specific design section was found. The controlling owner-authoring direction, plan and QA09 plan section were followed. `plan-spec.json` has the order-2230 A/B pair and its prerequisites but empty item inventories; the audited QA09 proposal supplies ten A items and two B examples. This batch keeps that scope and adds three local A items needed to make the stated randomized choices and cost coordinates explicit: `def-qa-shor-cost-accounting`, `alg-qa-shor-uniform-residue-sampler`, and `thm-qa-shor-residue-sampler-correct-and-cost`. The A page has 13 items, below its 100-item cap; the companion B page has two examples.

The plan and source treatments agree on the even/perfect-power prechecks, random-residue gcd branch, modular order finding, half-power gcd reduction and bounded-error repetitions. The local carriers make the rejection-sampling implementation, verified output rule, internal confidence parameter, exact retry cap, and separate gate/query/bit-cost branches explicit. No claim is weakened to fit the plan inventory. The bibliography locator in older QA09 notes that assigns Shor’s prime-factorization argument to §4 is stale: Shor’s PDF labels §5 “Prime factorization”; §4 is the order-finding treatment. The source coverage uses the corrected §5 locator.

## Source reading and resolution

The two independent A-page treatments are Ronald de Wolf’s lecture notes, Chapter 5 §§5.1–5.2, PDF pp. 49–56, and Peter Shor’s complete 28-page preprint, §4 and §5, PDF pp. 16–19. The full relevant source reasoning had already been read in the run source archive; the source-fetch history is preserved in `batch-33.source-coverage.json` and detailed page/item dispositions are in `batch-33.coverage.json`.

De Wolf samples from `2,…,N−1`, while this algorithm samples from `1,…,N−1`. The local gcd/uniformity proof handles the included unit `a=1`. Shor’s paper and de Wolf give the factoring route as a sketch; the local CRT sign, prime-power two-adic distribution, exact gcd-factor and success-composition proofs supply the missing detail. In particular, the 3/8 per-attempt bound sums the fixed-unit 3/4 order-finder guarantee over the set of units where true-order reduction works; it does not assume the two events are independent.

The coverage contains both sources for all 13 A items and records each result as `included` or `inline`, with local proofs identified as such. Both example computations are marked `inline`. There were no retrieval failures or drops, so no `source_resolution` record was needed. `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-33.coverage.json --stamp` passed: 4/4 source entries fetch-verified, 0 newly stamped.

## Inventory and item levels

The manifest order and carrier labels were recomputed from the current in-run dependency graph. Page level remains 13.

| Item level | Items |
| ---: | --- |
| 0 | `alg-qa-shor-uniform-residue-sampler`; `lem-qa-crt-sign-vector-factorization`; `lem-qa-even-order-square-root`; `lem-qa-prime-power-order-two-adic-law`; `lem-qa-shor-residue-gcd-branch` |
| 1 | `thm-qa-order-to-factor-success` |
| 18 | `alg-qa-shor-factoring`; `def-qa-shor-cost-accounting` |
| 19 | `lem-qa-shor-perfect-power-precheck`; `thm-qa-shor-residue-sampler-correct-and-cost` |
| 20 | `thm-qa-order-to-factor-correctness`; `thm-qa-shor-factoring-cost` |
| 21 | `thm-qa-shor-factoring-success`; `ex-qa-shor-factorization-of-fifteen`; `ex-qa-shor-factorization-retry-branches` |

All 15 labels match the local dependency calculation. The cost convention depends directly on `def-qa-classical-bit-cost` in batch 25; the sampler cost theorem and Shor cost theorem also use it. This creates an actual batch-25 item edge in addition to the dispatch’s declared page prerequisites 14 and 32. Batch 25 is already an ancestor of batch 32 in the recorded schedule, so the page level remains 13, but the current batch-level schedule input does not list that direct edge. The shared schedule is stale after the batch-33 manifest edits and needs owner recomputation; it was not rewritten here.

## Mathematical route and axiom use

- The perfect-power search checks exponents in ascending order and returns the first verified proper root factor. Thus for 81 it returns 9 from 9² before reaching the alternate representation 3⁴; the B example records the actual control flow.
- The fair-bit rejection sampler uses blocks of `h=bit_length(N−2)` bits, accepts values below `N−1`, and maps each accepted value `b` to `b+1`. It is exact, halts almost surely, and has expected O(h) total bit transitions. Countable choice and dependent choice are used only for the countable fair-bit product model.
- The random-residue lemma proves the nonunit gcd is a proper factor and the unit branch is uniform conditional on gcd one.
- For each odd prime-power unit group, the possible two-adic valuations of a uniform order each have probability at most 1/2. The CRT product law makes the local orders independent. When their valuations differ, the true half-order has mixed local signs and both gcds are proper. The resulting true-order reduction success probability is at least `1−2^{-(k−1)}≥1/2` for `k≥2` distinct prime factors.
- Output correctness needs only the candidate’s explicit checks `2≤q≤N`, `q` even and `a^q≡1 mod N`; minimality is not assumed. The final probability proof uses a pointwise 3/4 order-finder bound for every fixed unit and preserves separate countable-choice and finite-probability branches.
- The cost report keeps explicit arithmetic gates, ideal exact-angle QFT gates, controlled multiplier calls, bare controlled-unitary queries and classical bit operations separate. It makes no finite gate-alphabet, circuit-description generation-time or uniform-family claim.

## Cross-batch suppliers and unresolved cost branch

Current batch-32 carriers and proof contracts for the modular order-finding algorithm, its success theorem, modular-arithmetic cost and multiplier circuit were present and inspected. Their stated unit hypotheses, fixed `b=2` substitution, `m=2n+3`, sample count, exact candidate check and separate cost branches match this batch’s uses. This is authoring verification, not independent supplier acceptance. Batch 25’s classical bit-cost definition and the batch-14 uniform-circuit prerequisite page were also inspected. The cross-batch input records 12 current edges; the single open edge is `thm-qa-shor-factoring-cost → def-qc-circuit-cost-model`.

The existing `research/quantum-computing-algorithms-60-2026-10-15-step1-def-qc-circuit-cost-model.json` remains `escalated` and was not overwritten. Its recorded reason says the QC09 syntax, denotation and resource carriers are absent and requests reconciliation of gate count, depth, width, ancillas, queries and classical costs. Those carrier bodies now exist and were inspected, but the owner escalation remains unresolved. The dependent Shor cost theorem is therefore recorded `escalated`; the remaining batch-33 items have complete local proofs, placement, source coverage and contracts and are recorded `ready`.

## Scoped checks and run blockers

- Scoped normative precheck: 12 proof-bearing items checked, 0 failures; the three definition/algorithm items are not applicable.
- Scoped `node tools/proof-layout.mjs` on all 15 changed items: 15 items, 50 proof steps, 0 defects.
- Batch-33 page manifest, inventory and proof-contract scopes agree on all 15 IDs; dependency lists and labels match the current carriers, and the contract excerpt/step audit found no mismatches.
- Exact finite computations checked for the displayed examples: modulo-15 powers of 2 are 2, 4, 8, 1 and gcds are 3 and 5; modulo-35 powers of 11 are 11, 16, 1; modulo-15, 14 has order 2 and yields gcds 1 and 15; the first perfect-power hit for 81 is 9²; among the eight units modulo 15, six true-order reductions produce mixed signs.
- Scoped batch-33 dependency calculation: all 15 item labels match the graph; no batch-33 cycles were found. The final repository-wide `item-dependency-levels.mjs check` still fails on two unrelated empty manifests (`block-encoding-linear-systems-and-variable-time-amplification` and its examples page) and six existing batch-34 labels (`lem-qa-34-exponential-gram-concentration`, `lem-qa-34-two-sketch-threshold-band-bound`, `thm-qa-34-modfkv-low-rank-approximation`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, `cex-qa-34-tang-without-sampling-access`). `batch-dependency-levels.mjs check` reports the shared run schedule stale after this authorized manifest change; no shared schedule file was written.
- A read-only full dependency-ledger collection is blocked by the pre-existing batch-11 input `cross-batch-dependencies.json` (“invalid review or consumer ownership”); the batch-33 input itself records each current cross-batch edge.
- A repository-wide `step1-decisions check` did not return within its first 10-second execution window. The 15 batch-33 readiness records were then checked directly against the current transitive item hashes: 15/15 current.
- The required autopilot status command was retried after authoring but remained silent for 50 seconds and was interrupted. The earlier disk-recomputed status reported the run `running`, stage `1-scaffold` held for owner repair, and prior blockers: invalid pair identity in batch planning; an invalid construction prerequisite ID `def-qc-effective-unitary-matrix-input` in batch 12; a YAML nested-mapping parse failure; and a Step 1 hold. The blocker file identifies the current stalemate as units 29 and 2 covered but artifact-incomplete and no longer running. These are outside batch 33. No autopilot state or verdict was edited.

## Step 1 handoff

The proof contracts list exact supplier excerpts, derivations and step inputs, boundary cases, and the checked finite computations. All 15 Step 1 records are current by hash: 14 `ready`, one `escalated` (`thm-qa-shor-factoring-cost`). Each record includes the examined direct dependencies. The cost theorem remains escalated on the existing owner record; no escalation was overwritten and no record uses `--owner`. These records establish authoring readiness only, not independent approval.

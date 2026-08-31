# frontier-27 alpha-a Step 6b report

Date: Monday, August 31, 2026.
Run: `frontier-27`.
Group: `a` (batches `2`, `3`, `4`).

## Summary

- Decisions written: 50.
- `accepted_repair`: 4.
- `amended_repair`: 27.
- `confirmed_fatal`: 7.
- `confirmed_nonfatal`: 12.
- Defect rows appended: 50.
- Owned-batch checks re-run and passing on the final bytes: changed-item and full-batch precheck, proof-contract `--strict`, citation-fidelity, content-policy, rendercheck, and `risk-report --require-reviewed` for batches `2`, `3`, and `4`.

## Decisions

### Batch 2

- `touched:2:cex-a-preconditioner-can-worsen-the-preconditioned-condition-number` — `amended_repair` — frontier-27-a-6b-001 — Reader-2's consequential contract refresh for this counterexample remains mathematically sound, but the live carrier is amended because the batch-2 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:2:ex-clustered-eigenvalues-give-a-better-cg-bound-than-spread-eigenvalues` — `accepted_repair` — frontier-27-a-6b-002 — Reader-2's downstream contract refresh for the clustered-eigenvalue example still matches the exact post-reader carrier on the current bytes.
- `touched:2:ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number` — `amended_repair` — frontier-27-a-6b-003 — Reader-2's consequential contract refresh for the diagonal-preconditioning example remains mathematically sound, but the live carrier is amended because the batch-2 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:2:prop-galerkin-orthogonality-for-a-krylov-galerkin-iterate` — `amended_repair` — frontier-27-a-6b-004 — Reader-2's undefined-notation repair stands on the current bytes, but the live carrier is amended because the batch-2 proof-contract entry now also carries the required Step-6 risk review.
- `touched:2:thm-conjugate-gradient-chebyshev-bound-in-the-a-norm` — `amended_repair` — frontier-27-a-6b-005 — Reader-2's citation repair is mathematically correct on the current bytes, but the live carrier is amended because the batch-2 manifest and contract row changed later during Step 6b.
- `touched:2:thm-conjugate-gradient-is-the-krylov-galerkin-method-and-minimizes-the-energy-error` — `amended_repair` — frontier-27-a-6b-006 — Reader-2's statement repair stands on the current bytes, but the live carrier is amended because the batch-2 proof-contract entry now also carries the required Step-6 risk review.
- `touched:2:thm-conjugate-gradient-terminates-by-the-relative-grade-in-exact-arithmetic` — `amended_repair` — frontier-27-a-6b-007 — Reader-2's downstream contract refresh remains correct, but the live carrier is an amended repair because Step 6b also added the missing early-termination case and then re-synced the batch-2 contract.
- `touched:2:thm-stationary-splitting-converges-iff-the-iteration-matrix-has-spectral-radius-below-one` — `amended_repair` — frontier-27-a-6b-008 — Reader-2's convergence-proof repair stands, but the live carrier is an amended repair because Step 6b also added the missing complex-field hypothesis and then re-synced the batch-2 contract and manifest row.
- `touched:2:thm-symmetric-positive-definite-preconditioning-preserves-the-hermitian-positive-definite-cg-problem` — `amended_repair` — frontier-27-a-6b-009 — Reader-2's preconditioning repair is correct on the current bytes, but the live carrier is amended because the batch-2 proof-contract entry and manifest row changed later during Step 6b.
- `refuter:2:1` — `confirmed_fatal` — frontier-27-a-6b-010 — Refuter:2:1 is correct on the current-disk evidence: the original theorem omitted the scalar-field hypothesis, and the live item now narrows the statement to complex matrices.
- `refuter:2:2` — `confirmed_nonfatal` — frontier-27-a-6b-011 — Refuter:2:2 is correct: the old proof left the early-termination case implicit, and the current item now closes that gap with an explicit separate case.

### Batch 3

- `touched:3:cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity` — `amended_repair` — frontier-27-a-6b-012 — Reader-3's hypothesis repair stands on the current bytes, but the live carrier is amended because the batch-3 contract and manifest row changed later during Step 6b after the support-theorem and risk-review sync.
- `touched:3:ex-mollifying-the-unit-interval-indicator-at-two-scales` — `amended_repair` — frontier-27-a-6b-013 — Reader-3's downstream contract refresh for the two-scale mollifier example remains correct, but the live carrier is amended because the batch-3 proof-contract entry changed again during Step 6b.
- `touched:3:ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval` — `accepted_repair` — frontier-27-a-6b-014 — Reader-3's Countable Choice hypothesis repair for this dependent example still matches the exact post-reader carrier on the current bytes.
- `touched:3:fs-l-one-convolution-is-defined-at-every-point` — `accepted_repair` — frontier-27-a-6b-015 — Reader-3's explicit x = 0 divergence repair still matches the exact post-reader carrier on the current bytes.
- `touched:3:fs-translation-is-continuous-in-l-infinity` — `amended_repair` — frontier-27-a-6b-016 — Reader-3's downstream contract refresh remains mathematically sound, but the live carrier is amended because the batch-3 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:3:lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff` — `amended_repair` — frontier-27-a-6b-017 — Reader-3's cutoff-witness repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry now also carries the required Step-6 risk review.
- `touched:3:lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p` — `accepted_repair` — frontier-27-a-6b-018 — Reader-3's Countable Choice hypothesis repair for the compact-support translation lemma still matches the exact post-reader carrier on the current bytes.
- `touched:3:lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` — `amended_repair` — frontier-27-a-6b-019 — Reader-3's narrowing of the finite-measure sandwich lemma stands, but the live carrier is amended because Step 6b also repaired the missing bounded-open construction in step 2.1 and then re-synced the contract.
- `touched:3:lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes` — `amended_repair` — frontier-27-a-6b-020 — Reader-3's Countable Choice hypothesis repair for the finite-union-of-boxes lemma remains mathematically sound, but the live carrier is amended because the batch-3 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:3:prop-mollifier-families-are-l-one-approximate-identities` — `amended_repair` — frontier-27-a-6b-021 — Reader-3's hypothesis repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry now also carries the required Step-6 risk review.
- `touched:3:thm-box-step-functions-are-dense-in-l-p-of-rn` — `amended_repair` — frontier-27-a-6b-022 — Reader-3's Countable Choice hypothesis repair for the box-step density theorem remains mathematically sound, but the live carrier is amended because the batch-3 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:3:thm-c-c-infinity-rn-is-dense-in-l-p-of-rn` — `amended_repair` — frontier-27-a-6b-023 — Reader-3's hypothesis repair stands, but the live carrier is amended because the support theorem and multiple risk-review-bearing dependencies changed the batch-3 carrier later during Step 6b.
- `touched:3:thm-c-c-rn-is-dense-in-l-p-of-rn` — `amended_repair` — frontier-27-a-6b-024 — Reader-3's density-proof repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry and manifest row changed later during Step 6b.
- `touched:3:thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn` — `amended_repair` — frontier-27-a-6b-025 — Reader-3's closure-proof repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry now also carries the required Step-6 risk review.
- `touched:3:thm-l-one-approximate-identities-converge-in-l-p` — `amended_repair` — frontier-27-a-6b-026 — Reader-3's hypothesis repair stands, but the live carrier is amended because Step 6b also repaired the tolerance-versus-scale proof gap and then re-synced the batch-3 contract.
- `touched:3:thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn` — `amended_repair` — frontier-27-a-6b-027 — Reader-3's box-approximation repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry and manifest row changed later during Step 6b.
- `touched:3:thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity` — `amended_repair` — frontier-27-a-6b-028 — Reader-3's hypothesis repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry now also carries the required Step-6 risk review.
- `touched:3:thm-young-convolution-inequality` — `amended_repair` — frontier-27-a-6b-029 — Reader-3's endpoint-case repair stands on the current bytes, but the live carrier is amended because the batch-3 proof-contract entry and manifest row changed later during Step 6b.
- `refuter:3:1` — `confirmed_fatal` — frontier-27-a-6b-030 — Refuter:3:1 is correct on the current-disk evidence: the old false statement overclaimed against the actual convolution maps, and the live item now narrows the claim to the genuinely false blanket justification.
- `refuter:3:2` — `confirmed_fatal` — frontier-27-a-6b-031 — Refuter:3:2 is correct: the old lemma omitted the Countable Choice hypothesis required by its countable-union dependency, and the live item now adds that hypothesis explicitly.
- `refuter:3:3` — `confirmed_nonfatal` — frontier-27-a-6b-032 — Refuter:3:3 is correct: the old proof skipped the empty-generator case, and the live item now handles that branch before enumerating G.
- `refuter:3:4` — `confirmed_nonfatal` — frontier-27-a-6b-033 — Refuter:3:4 is correct: the old step 2.1 asked outer regularity for boundedness it did not grant, and the live proof now inserts the missing bounded-intersection construction.
- `refuter:3:5` — `confirmed_nonfatal` — frontier-27-a-6b-034 — Refuter:3:5 is correct: the old proof lacked an integrable majorant for the derivative integrand, and the live item now supplies the needed compact-support bound.
- `refuter:3:6` — `confirmed_nonfatal` — frontier-27-a-6b-035 — Refuter:3:6 is correct: the old argument conflated the tolerance with the scale parameter, and the live proof now separates them cleanly.
- `refuter:3:7` — `confirmed_fatal` — frontier-27-a-6b-036 — Refuter:3:7 is correct on the current bytes: the old proof-defined dense set was not contained in L^p, and the live theorem now restricts the algebra terms to finite-measure sets.
- `refuter:3:8` — `confirmed_fatal` — frontier-27-a-6b-037 — Refuter:3:8 is correct: the old proof applied duality circularly to H, and the live item now routes the argument through L^p truncations H_m and monotone convergence.
- `refuter:3:9` — `confirmed_fatal` — frontier-27-a-6b-038 — Refuter:3:9 is correct on the current-disk evidence: the old statement was ill-formed at the level of representatives, and the live theorem now states the support inclusion for the explicit zero-extended representative h.

### Batch 4

- `touched:4:ex-c-of-a-compact-space-is-banach` — `amended_repair` — frontier-27-a-6b-039 — Reader-4's nonempty-compact-space hypothesis repair remains mathematically sound, but the live carrier is amended because the batch-4 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:4:ex-cb-of-a-space-is-banach` — `amended_repair` — frontier-27-a-6b-040 — Reader-4's nonempty-space hypothesis repair remains mathematically sound, but the live carrier is amended because the batch-4 proof-contract entry and item-manifest row no longer match the exact post-reader snapshot.
- `touched:4:ex-polynomials-are-not-complete-in-the-supremum-norm` — `amended_repair` — frontier-27-a-6b-041 — Reader-4's consequential contract refresh for the polynomial example remains correct, but the live carrier is amended because the batch-4 proof-contract entry changed again during Step 6b.
- `touched:4:thm-completion-universal-property-for-bounded-linear-maps` — `amended_repair` — frontier-27-a-6b-042 — Reader-4's universal-property repair stands on the current bytes, but the live carrier is amended because the batch-4 proof-contract entry now also carries the required Step-6 risk review.
- `refuter:4:1` — `confirmed_fatal` — frontier-27-a-6b-043 — Refuter:4:1 is correct on the current-disk evidence: the old uniqueness statement was overstrong, and the live theorem now narrows it to compatible Banach-space structures whose norm metric is the published completion metric.

## Gate repair - `step6-routing-adjudicate` (Monday, August 31, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed seven stale touched decisions in batches `2`, `3`, and `4`: `cex-a-preconditioner-can-worsen-the-preconditioned-condition-number`, `ex-diagonal-spd-preconditioning-improves-the-preconditioned-condition-number`, `fs-translation-is-continuous-in-l-infinity`, `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes`, `thm-box-step-functions-are-dense-in-l-p-of-rn`, `ex-c-of-a-compact-space-is-banach`, and `ex-cb-of-a-space-is-banach`.
- Reread the current items against `research/frontier-27-reader-{2,3,4}.md` and found no new mathematical defect. I retagged the seven touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-27-S6-a-gate-2-1`, `frontier-27-S6-a-gate-2-2`, `frontier-27-S6-a-gate-3-1`, `frontier-27-S6-a-gate-3-2`, `frontier-27-S6-a-gate-3-3`, `frontier-27-S6-a-gate-4-1`, and `frontier-27-S6-a-gate-4-2` via `research/frontier-27-alpha-a-6b-gate-ledger-rows.json`.
- Focused reruns:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate --batch 2` -> `30 item(s) routed, 11 adjudication obligation(s), 0 error(s)`;
  `--batch 3` -> `47 item(s) routed, 27 adjudication obligation(s), 0 error(s)`;
  `--batch 4` -> `29 item(s) routed, 5 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-27 --phase adjudicate`
  -> `449 item(s) routed, 139 adjudication obligation(s), 0 error(s)`.

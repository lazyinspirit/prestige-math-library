# Frontier-21 Alpha-b 6b Adjudication

Run: `frontier-21`  
Group: `b`  
Dispatch: `6b-b`  
Date: Thursday, August 27, 2026

## Scope

Owned batches: `2`, `3`.

Read and checked against current disk for each owned batch:

- `research/frontier-21-step6-scope-2.json`, `research/frontier-21-step6-scope-3.json`
- reader reports and findings: `research/frontier-21-reader-2.md`, `research/frontier-21-reader-findings-2.json`, `research/frontier-21-reader-3.md`, `research/frontier-21-reader-findings-3.json`
- refuter reports: `research/frontier-21-refute-2.json`, `research/frontier-21-refute-3.json`
- current carriers: the routed item files, `research/frontier-21-batch-2.proof-contracts.json`, `research/frontier-21-batch-3.proof-contracts.json`, and the owned batch manifests
- cited dependencies needed to verify the continued-fraction/Pell and Artinian/localization arguments

## Batch 2

- `touched:2:thm-all-positive-pell-solutions-are-fundamental-powers`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-2-thm-all-positive-pell-solutions-are-fundamental-powers`
  Evidence: the reader's maximal-index repair still closes the theorem, and the live carrier now also includes the completed risk review on the terminal interval `1 <= alpha epsilon_D^{-k} < epsilon_D`.

- `touched:2:cor-all-integral-pell-solutions`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-2-cor-all-integral-pell-solutions`
  Evidence: the signed-classification repair remains sound on current disk, and the carrier now also includes the completed risk review covering the `alpha = +-1` and exponent-`0` boundaries.

- `touched:2:thm-negative-pell-period-parity-criterion`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-2-thm-negative-pell-period-parity-criterion`
  Evidence: the reader's least-solution repair was further amended in 6b so the proof now derives the `Q_{n+1} = 1` index test from complete quotients and the state formula instead of overquoting least-period language from the period theorem.

- `refuter:2:1` on `thm-generalized-pell-solutions-have-finitely-many-orbits`
  Verdict: `confirmed_fatal`
  Ledger: `frontier-21-S6-b-refuter-2-1`
  Evidence: step `1.1` no longer claims the reciprocals of `epsilon_D^m` are unbounded below; it now states the correct endpoint behavior toward `0` and `+infty`, which is exactly what the annulus partition requires.

- `refuter:2:2` on `thm-negative-pell-period-parity-criterion`
  Verdict: `confirmed_fatal`
  Ledger: `frontier-21-S6-b-refuter-2-2`
  Evidence: the facts block no longer attributes least-period state repetition to the cited theorem statement; the repaired proof derives the needed divisibility of `n + 1` by `ell` from `alpha_{n+2} = alpha_1`.

- `refuter:2:3` on `ex-generalized-pell-bounded-representatives`
  Verdict: `confirmed_fatal`
  Ledger: `frontier-21-S6-b-refuter-2-3`
  Evidence: the false inverse-unit orbit identifications are gone, and the current proof shows the eight boxed solutions are pairwise orbit-distinct by ratio-size bounds relative to `epsilon_7`.

## Batch 3

- `touched:3:thm-artinian-ring-has-finitely-many-maximal-ideals`
  Verdict: `accepted_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-artinian-ring-has-finitely-many-maximal-ideals`
  Evidence: the repaired minimal finite-intersection proof and dependent-choice note remain correct on current disk; no further carrier change was needed in 6b.

- `touched:3:thm-nilradical-of-artinian-ring-is-nilpotent`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-nilradical-of-artinian-ring-is-nilpotent`
  Evidence: the reader's minimal-family repair stands, and the live carrier now also includes the completed risk review on the stabilized-power contradiction.

- `touched:3:thm-artinian-ring-is-noetherian`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-artinian-ring-is-noetherian`
  Evidence: the reader's Choice-scope narrowing stands, and the live carrier now also includes the completed risk review for the finite-generation argument on `N^j/N^{j+1}`.

- `touched:3:thm-artinian-ring-has-finite-length`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-artinian-ring-has-finite-length`
  Evidence: the rebuilt reverse direction and added Choice hypothesis remain correct, and the live carrier now also includes the completed risk review for the choice-sensitive equivalence.

- `touched:3:thm-artinian-local-ring-has-nilpotent-maximal-ideal`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-artinian-local-ring-has-nilpotent-maximal-ideal`
  Evidence: the reader's Choice-scope repair stands, and the live carrier now also includes the completed risk review for the residue-field filtration of finite modules.

- `touched:3:thm-structure-theorem-for-artinian-rings`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-structure-theorem-for-artinian-rings`
  Evidence: the reader's Choice-scope narrowing stands, and the live carrier now also includes the completed risk review for the quotient/localization identification.

- `touched:3:thm-artinian-ring-characterisation-by-primes`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-thm-artinian-ring-characterisation-by-primes`
  Evidence: the reader's Choice-scope narrowing stands, and the live carrier now also includes the completed risk review for the finite-length converse built from `R/N` and the nilpotent filtration.

- `touched:3:cor-artinian-quotients-and-localisations`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-cor-artinian-quotients-and-localisations`
  Evidence: the reader's Choice-scope repair stands, and the live carrier now also includes the completed risk review for the two localization cases on each local factor.

- `touched:3:ex-artinian-product-of-local-rings`
  Verdict: `accepted_repair`
  Ledger: `frontier-21-S6-b-touched-3-ex-artinian-product-of-local-rings`
  Evidence: the unnecessary stronger dependency is gone and the direct CRT example remains correct with no further carrier change.

- `touched:3:ex-field-is-artinian`
  Verdict: `accepted_repair`
  Ledger: `frontier-21-S6-b-touched-3-ex-field-is-artinian`
  Evidence: the unnecessary later theorem dependency is gone and the example still closes directly from the one-step composition series `0 < K`.

- `touched:3:ex-length-of-a-truncated-local-module`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-ex-length-of-a-truncated-local-module`
  Evidence: the projection-kernel repair remains sound, and the live carrier now also includes the completed risk review on the exact sequence induction.

- `touched:3:ex-zero-dimensional-nonnoetherian-ring`
  Verdict: `amended_repair`
  Ledger: `frontier-21-S6-b-touched-3-ex-zero-dimensional-nonnoetherian-ring`
  Evidence: the reader's zero-dimensional repair stands; 6b additionally removed the stray field-maximal theorem citation from step `1.1` and added the completed risk review.

- `refuter:3:1` on `ex-zero-dimensional-nonnoetherian-ring`
  Verdict: `confirmed_nonfatal`
  Ledger: `frontier-21-S6-b-refuter-3-1`
  Evidence: the live defect was nonfatal frontmatter/proof citation drift rather than a false example, and the current proof now closes maximality directly from the two-element field quotient.

## Risk Review Coverage

Completed `risk_review: {status: complete, reviewer: alpha-6b-b, notes: ...}` rows for every batch-owned `HIGH` or `CRITICAL` item reported by:

- `node tools/risk-report.mjs research/frontier-21-batch-2.proof-contracts.json --json`
- `node tools/risk-report.mjs research/frontier-21-batch-3.proof-contracts.json --json`

Re-run with `--require-reviewed` after the repairs and contract updates:

- `node tools/risk-report.mjs research/frontier-21-batch-2.proof-contracts.json --require-reviewed --json` -> `ok: true`
- `node tools/risk-report.mjs research/frontier-21-batch-3.proof-contracts.json --require-reviewed --json` -> `ok: true`

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-negative-pell-period-parity-criterion.md items/thm-generalized-pell-solutions-have-finitely-many-orbits.md items/ex-generalized-pell-bounded-representatives.md items/ex-zero-dimensional-nonnoetherian-ring.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-negative-pell-period-parity-criterion.md items/thm-generalized-pell-solutions-have-finitely-many-orbits.md items/ex-generalized-pell-bounded-representatives.md items/ex-zero-dimensional-nonnoetherian-ring.md`
- `node tools/proof-contract.mjs research/frontier-21-batch-2.proof-contracts.json --strict`
- `node tools/proof-contract.mjs research/frontier-21-batch-3.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-21-batch-2.proof-contracts.json --fail-on-missing-quote`
- `node tools/citation-fidelity.mjs research/frontier-21-batch-3.proof-contracts.json --fail-on-missing-quote`
- `node tools/boundary-audit.mjs research/frontier-21-batch-2.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/boundary-audit.mjs research/frontier-21-batch-3.proof-contracts.json --fail-on-contradicted --fail-on-template`
- `node tools/defect-ledger.mjs append --file research/frontier-21-alpha-b-6b-ledger-rows.json`

No blocker remains inside the owned 6b scope.

# frontier-18 Alpha group c — step 6b adjudication

Scope: batches 1, 3, 4 (`lagrange-four-square-theorem`, `finite-fields-and-cyclotomic-extensions`, `noetherian-rings-and-hilbert-basis`).

Reader coverage was complete on all three assigned batches: `research/frontier-18-reader-1.md`, `research/frontier-18-reader-3.md`, and `research/frontier-18-reader-4.md`. I verified every reader finding from disk before accepting or rejecting it, repaired the confirmed defects in place, and wrote the matching ledger rows in `research/defect-ledger.jsonl`.

## Reader findings

### Batch 1

- `R1-1` — `thm-lagrange-four-square-theorem` — `confirmed_fatal`.
  The repaired proof now imports `def-prime`, states `[F3]` locally, and licenses the `q >= 2` step explicitly in proof step `5.1`. I confirmed the current text from disk and accepted the repair.

- `R1-2` — `cor-integers-requiring-four-squares` — `confirmed_fatal`.
  The original positivity route for `4^a m` was under-supported. The current proof now carries the natural-order/discreteness inputs explicitly and passes item-scoped `precheck`; I accepted the rewrite.

- `R1-3` — `prop-three-square-congruence-obstruction`, `cor-integers-requiring-four-squares`, and the A-page summary in [lagrange-four-square-theorem.md](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/lagrange-four-square-theorem.md).
  `confirmed_fatal`. The positive-`m` hypothesis had been omitted from two titles and from the synopsis. All three surfaces are now narrowed to the proved range.

- `R1-4` — `research/frontier-18-batch-1.proof-contracts.json` — `confirmed_nonfatal`.
  The clipped quote strings were a contract defect, not a mathematical one. I repaired the stale quotes and the later contract-use drift that remained after the reader pass; `proof-contract --strict` is now clean on batch 1.

### Batch 3

- `R3-1` — `thm-infinitely-many-primes-congruent-to-one-modulo-n` — `confirmed_fatal`.
  The current proof strengthens step `3.1` to `p\nmid kM`, which is what step `4.1` needs to make `[kM]_p` nonzero. I confirmed the repair and retagged `provenance.proof` to `ai-altered`.

- `R3-2` — `lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible` — `confirmed_nonfatal`.
  The stray `[L6]` on step `1.2` was genuinely inaccurate but not mathematically load-bearing. I accepted the citation removal and synced the contract row. The remaining `shotgun-bracket` warning on step `3.1` is heuristic only; after rereading the proof and the cited items I did not confirm a defect there.

### Batch 4

- `R4-1` — `ex-artin-tate-finite-intermediate-algebra` — `confirmed_fatal`.
  The reader was right that the proof needed a module sum, not a union. Step `4.1` now proves `B=A'·1+A'·t^3` explicitly. I confirmed the repair from disk.

- `R4-2` — `cor-product-of-two-noetherian-rings-is-noetherian` — `confirmed_nonfatal`.
  The first remark's "empty product = zero ring" claim was incorrect, but the proof on the page did not depend on it. The remark is now rewritten as the one-factor induction base case.

- `R4-3` — `research/frontier-18-batch-4.proof-contracts.json` — `confirmed_nonfatal`.
  The boundary row cited a nonexistent step `3.2`. I accepted the contract-only repair; the item text itself needed no further change.

## Refuter findings

I dispatched three read-only proof refuters before final adjudication:

- `Russell` on batch 1: no concrete defects found in the routed high/critical items. Its bounded arithmetic checks on the descent chain and the three-square obstruction witnesses matched the current text.
- `Kepler` on batch 4: no concrete defects found in the routed high/critical items. Its checks on the repaired Artin-Tate example and the Noetherian examples were clean.
- `Rawls` on batch 3: two findings, both confirmed below.

### Batch-3 refuter findings

- `REF3-F1` — `thm-intersections-of-rational-cyclotomic-fields` — `confirmed_fatal`.
  Fact `[L1]` had been overstated: it attributed a divisor-uniform splitting/cyclotomic statement to `thm-composita-of-cyclotomic-extensions`, which only proves the specific `(m,n, \ell)` compositum claim. I repaired this by narrowing `[L1]` to the exact splitting-field/cyclotomic inputs and moving the divisibility argument into proof step `1.1`. I retagged `provenance.proof` to `ai-altered`.

- `REF3-F2` — `thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals` — `confirmed_nonfatal`.
  Step `3.1` cited the Chinese remainder theorem while proving only that distinct primes are pairwise coprime. The step's inference is still correct from the chosen primes, so I removed the unsupported citation and retagged `provenance.proof` to `ai-altered`.

No other refuter-reported defect was confirmed.

## Additional Alpha repairs and checks

- I repaired the batch-1 contract drift left after the accepted reader fixes: exact quote mismatches for `lem-four-square-congruence-for-primes`, `thm-lagrange-four-square-theorem`, `cor-integers-requiring-four-squares`, and `ex-four-square-congruence-for-an-odd-prime`, plus the stale `uses` mapping and the missing `def-natural-numbers` contract entry in the corollary.
- I repaired the remaining batch-3 contract drift after `R3-2`: the stale `L6` use map in `lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible`.
- I repaired the batch-3 `finite_smoke` assertion excerpts whose strings had drifted away from the current item text; these were gate-facing metadata defects only.
- I completed `risk_review` entries for every routed `high`/`critical` item in all three batches, using the read-only refuter results as the additional adversarial read required by `risk-report --require-reviewed`.

## Faithfulness and source checks

I spot-checked the main harvested locators against their actual source texts:

- Conrad `descent.pdf` §6 / Appendix C for batch 1.
- Milne `FT.pdf` finite-field, cyclotomic, and normal-basis sections for batch 3.
- Altman–Kleiman §16 for batch 4.

Those spot checks matched the recorded locators and the harvested headings/dispositions in the three `coverage.json` files. I did not confirm a harvest-faithfulness defect or a missing standard result in batches 1, 3, or 4 from the source sections I opened.

## Gate state on the current text

- `node tools/proof-contract.mjs research/frontier-18-batch-1.proof-contracts.json --strict` — clean.
- `node tools/proof-contract.mjs research/frontier-18-batch-3.proof-contracts.json --strict` — clean except one `shotgun-bracket` warning on `lem-a-family-is-a-basis-exactly-when-its-conjugate-matrix-is-invertible`; I reviewed it and did not confirm a defect.
- `node tools/proof-contract.mjs research/frontier-18-batch-4.proof-contracts.json --strict` — clean except one `shotgun-bracket` warning on `lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite`; I reviewed it and did not confirm a defect.
- `node tools/risk-report.mjs ... --require-reviewed` — passes on batches 1, 3, and 4.
- `node tools/finite-smoke.mjs research/frontier-18-batch-3.proof-contracts.json` — passes after syncing the assertion excerpts.
- `node tools/finite-smoke.mjs research/frontier-18-batch-4.proof-contracts.json` — passes.
- `node tools/citation-fidelity.mjs ... --json` — zero `quote_not_found`; four batch-3 widening heuristics remain. I reviewed them and did not confirm a live defect:
  - `thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n` and `cor-cyclotomic-extensions-are-abelian` already carry `n>=1` in the local `Given`.
  - `prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate` and `ex-roots-of-unity-in-characteristic-three` cite the first clause of `prop-p-power-roots-of-unity-in-characteristic-p`, whose authored use already restricts to `k>=1`.

## Gate adjudication — `content-policy-items`

- `cor-integers-requiring-four-squares` — `repaired`. This was a real batch-1 content defect: [CLAUDE.md](/home/lazyinspirit/Projects/prestige-math-library/CLAUDE.md:526) bans applied canonical-embedding notation around natural numbers, and the item's fact line / step `1.1` had `\iota(1)`, `\iota(0)`, and `\iota(t)`. I rewrote those passages to speak of the embedding and its image without applied `\iota`, then regenerated the batch-1 contract entry from current disk text.

Re-running `node tools/content-policy.mjs research/frontier-18-batch-*.pages.json` removes the batch-1 hit. The gate still fails only on the three batch-2 false positives recorded in the group-d report.

## Changed files

- Items:
  [thm-intersections-of-rational-cyclotomic-fields.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-intersections-of-rational-cyclotomic-fields.md),
  [thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-every-finite-abelian-group-is-a-galois-group-over-the-rationals.md),
  [thm-infinitely-many-primes-congruent-to-one-modulo-n.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-infinitely-many-primes-congruent-to-one-modulo-n.md)
- Pages:
  [lagrange-four-square-theorem.md](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/lagrange-four-square-theorem.md)
- Contracts:
  [frontier-18-batch-1.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-1.proof-contracts.json),
  [frontier-18-batch-3.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-3.proof-contracts.json),
  [frontier-18-batch-4.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-batch-4.proof-contracts.json)
- Ledger/reporting:
  [frontier-18-alpha-c-6b-findings.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-alpha-c-6b-findings.json),
  [frontier-18-alpha-c-6b-ledger-rows.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-18-alpha-c-6b-ledger-rows.json),
  [defect-ledger.jsonl](/home/lazyinspirit/Projects/prestige-math-library/research/defect-ledger.jsonl),
  [DEFECT-LEDGER.md](/home/lazyinspirit/Projects/prestige-math-library/research/DEFECT-LEDGER.md)

## Nothing left unchecked

I have no unresolved mathematical blocker inside batches 1, 3, or 4 for step 6b. The remaining output from this group is step 6c/8+ work, which belongs to the lead Alpha rather than group c.

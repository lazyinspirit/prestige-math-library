# frontier-30 alpha group f step 6b adjudication

Date: Friday, September 4, 2026
Run: `frontier-30`
Group: `f`
Scope: batches `8`, `19`, and `20`

## Batch 8

- Touched obligations: `11` total.
  `accepted_repair`: `cex-rational-isotropy-is-not-integral-representation`, `cor-ternary-isotropy-via-hilbert-symbol`, `thm-dirichlet-l-nonvanishing-line-one`.
  `amended_repair`: `cex-local-global-fails-for-a-cubic-curve`, `def-natural-and-dirichlet-density`, `ex-dirichlet-characters-modulo-three-four-and-five`, `lem-equivalent-definitions-of-the-hilbert-symbol`, `lem-nonreal-dirichlet-l-nonzero-at-one`, `lem-real-dirichlet-l-nonzero-at-one`, `thm-natural-density-implies-dirichlet-density`, `thm-product-dirichlet-l-nonvanishing-line-one`.
- Refuter obligations: `9` total.
  `confirmed_fatal`: `ex-the-character-chi-four-and-leibniz-series`, `lem-global-square-class-approximation`, `thm-hasse-minkowski-for-ternary-forms-over-q`, `thm-hasse-minkowski-over-the-rationals`, `thm-local-isotropy-at-almost-all-primes`, `thm-mertens-primes-arithmetic-progressions`, `thm-odd-p-hilbert-symbol-formula`, `thm-two-adic-hilbert-symbol-formula`.
  `confirmed_nonfatal`: `thm-hilbert-reciprocity-over-the-rationals`.
- Mathematical disposition: Reader 8's eleven routed touched carriers still stand on reread. The nine refuter findings were all genuine on their observed carriers; eight were fatal proof or witness defects and one was a nonfatal omitted generator-case check in Hilbert reciprocity.
- Risk review: every required HIGH/CRITICAL batch-8 item now carries a complete `alpha-6b-f` `risk_review` note in [frontier-30-batch-8.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-8.proof-contracts.json). I reread all 27 required items, including the Dirichlet-character orthogonality/L-function chain and the Hilbert-symbol/Hasse-Minkowski chain, and repaired the nine refuter-backed defects above before sealing those notes.

## Batch 19

- Touched obligations: `10` total.
  `accepted_repair`: `def-parameter-specialization-function`, `def-universal-and-acceptable-numbering`, `ex-acceptable-numberings-are-computably-intertranslatable`, `fs-program-indices-are-unique`.
  `amended_repair`: `ex-proper-inclusions-in-the-chomsky-hierarchy`, `prop-fixed-machine-coding-is-acceptable`, `thm-myhill-isomorphism-theorem-for-creative-sets`, `thm-nonhalting-is-productive-and-halting-is-creative`, `thm-recursion-theorem-with-parameters`, `thm-smn-parameter-theorem`.
- Refuter obligations: `1` total.
  `confirmed_fatal`: `lem-modified-pcp-reduces-to-pcp`.
- Mathematical disposition: Reader 19's ten routed repairs stand on the current carriers. The refuter was correct that the old `(*,*)` copier tile broke the modified-PCP reduction; the live lemma now uses only the special start tile, the shifted dominoes, and the end tile.
- Risk review: every required HIGH/CRITICAL batch-19 item now carries a complete `alpha-6b-f` `risk_review` note in [frontier-30-batch-19.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-19.proof-contracts.json). I reread all 13 required items across the computation-history, CFG-undecidability, acceptability, `s`-`m`-`n`, recursion-theorem, productive-set, and Myhill chains.

## Batch 20

- Touched obligations: `2` total, both `amended_repair`.
  `cor-hamiltonian-path-and-cycle-are-np-complete`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`.
- Refuter obligations: `3` total, all `confirmed_fatal`.
  `cor-hamiltonian-path-and-cycle-are-np-complete`, `thm-three-sat-reduces-to-directed-hamiltonian-cycle`, `thm-three-sat-reduces-to-subset-sum`.
- Mathematical disposition: Reader 20 improved both Hamiltonian items, but the refuter was still correct that the ordinary-path corollary had not yet separated endpoint-labelled path variants and that the Hamiltonian-cycle gadget still lacked a fully specified crossbar construction. I repaired both of those remaining defects and also repaired the `k=0` totality bug in the subset-sum reduction.
- Risk review: every required HIGH/CRITICAL batch-20 item now carries a complete `alpha-6b-f` `risk_review` note in [frontier-30-batch-20.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-20.proof-contracts.json). I reread all 13 required items across the classical CLIQUE/INDEPENDENT SET/VERTEX COVER, Hamiltonian, SUBSET SUM/PARTITION, SET COVER, and 3-COLORABILITY reductions.

## Repairs

- [items/ex-the-character-chi-four-and-leibniz-series.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-the-character-chi-four-and-leibniz-series.md), [items/lem-global-square-class-approximation.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-global-square-class-approximation.md), [items/thm-local-isotropy-at-almost-all-primes.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-local-isotropy-at-almost-all-primes.md), [items/thm-odd-p-hilbert-symbol-formula.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-odd-p-hilbert-symbol-formula.md), [items/thm-two-adic-hilbert-symbol-formula.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-two-adic-hilbert-symbol-formula.md), [items/thm-hilbert-reciprocity-over-the-rationals.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-hilbert-reciprocity-over-the-rationals.md), [items/thm-mertens-primes-arithmetic-progressions.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-mertens-primes-arithmetic-progressions.md), [items/thm-hasse-minkowski-for-ternary-forms-over-q.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-hasse-minkowski-for-ternary-forms-over-q.md), and [items/thm-hasse-minkowski-over-the-rationals.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-hasse-minkowski-over-the-rationals.md)
  repaired the nine live batch-8 refuter-backed mathematical defects.
- [items/lem-modified-pcp-reduces-to-pcp.md](/home/lazyinspirit/Projects/prestige-math-library/items/lem-modified-pcp-reduces-to-pcp.md)
  removed the self-matching copier tile and replaced it with the correct start/shift/end reduction.
- [items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-three-sat-reduces-to-directed-hamiltonian-cycle.md), [items/cor-hamiltonian-path-and-cycle-are-np-complete.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-hamiltonian-path-and-cycle-are-np-complete.md), and [items/thm-three-sat-reduces-to-subset-sum.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-three-sat-reduces-to-subset-sum.md)
  repaired the three live batch-20 refuter-backed defects.
- [research/frontier-30-batch-8.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-8.proof-contracts.json), [research/frontier-30-batch-19.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-19.proof-contracts.json), and [research/frontier-30-batch-20.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-20.proof-contracts.json)
  were regenerated for the edited items, updated with all required `risk_review` records, and in batch `20` received the manual boundary-evidence sync for the Hamiltonian corollary's endpoint case.
- [research/frontier-30-batch-8.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-8.pages.json), [research/frontier-30-batch-19.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-19.pages.json), and [research/frontier-30-batch-20.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-batch-20.pages.json)
  were synchronized where my repairs changed the routed item metadata.
- [research/frontier-30-alpha-f-6b-ledger-rows.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-alpha-f-6b-ledger-rows.json) and [research/frontier-30-alpha-f-6b-decisions.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-30-alpha-f-6b-decisions.json)
  record the exact Step-6 durable rows and all 36 routed decisions for group `f`.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts` on the 13 edited item files
  Result: reflow completed; the final current files are render-clean.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 13 edited item files
  Result: pass, `13 checked, 0 failing`.
- `node tools/rendercheck.mjs` on the 13 edited item files
  Result: pass, `OK — 13 file(s)`.
- `node tools/regen-contract-entries.mjs` on the affected batch-8, batch-19, and batch-20 contract entries
  Result: regenerated the repaired carriers and the one downstream batch-8 consumer `thm-dirichlet-primes-arithmetic-progressions`.
- `node tools/proof-contract.mjs research/frontier-30-batch-{8,19,20}.proof-contracts.json --strict`
  Result: pass for all three owned batches.
- `node tools/citation-fidelity.mjs research/frontier-30-batch-{8,19,20}.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass for all three owned batches after regenerating the one downstream batch-8 consumer quote that changed when the Mertens statement was normalized.
- `node tools/content-policy.mjs research/frontier-30-batch-{8,19,20}.pages.json`
  Result: pass, `58/37/22 scoped item(s)` with `0 error(s), 0 warning(s)`.
- `node tools/risk-report.mjs research/frontier-30-batch-{8,19,20}.proof-contracts.json --require-reviewed --json`
  Result: pass for all three owned batches; every required HIGH/CRITICAL item now has a complete `alpha-6b-f` `risk_review`.
- `node tools/step6-scope.mjs check --run frontier-30 --phase split --batch 8`
  Result: pass, `58 item(s) routed, 20 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-30 --phase split --batch 19`
  Result: pass, `37 item(s) routed, 11 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-30 --phase split --batch 20`
  Result: pass, `22 item(s) routed, 5 adjudication obligation(s), 0 error(s)`.
- `node tools/boundary-audit.mjs research/frontier-30-batch-19.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted dispositions.
- `node tools/boundary-audit.mjs research/frontier-30-batch-20.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted dispositions.
- `node tools/boundary-audit.mjs research/frontier-30-batch-8.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
  Result: the detector still surfaced 15 empty/zero candidates. I reread those rows while doing the batch-8 risk review and did not confirm any new mathematical defect; they remain heuristic false positives on current bytes.
- `node tools/defect-ledger.mjs append --file research/frontier-30-alpha-f-6b-ledger-rows.json`
  Result: pass; appended `36` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-30`
  Result: pass, `222 defect row(s) checked, 0 error(s)`.
- `git diff --check -- ...owned Step-6 files...`
  Result: clean.

## Stage-owned follow-up

- I did not run `node tools/step6-scope.mjs stamp --run frontier-30 --group f` or any `--phase adjudicate` check. The live Step-6 routing rules reserve `subject_sha256` stamping to the stage rather than to the Alpha writeup.

## Blockers

- None in the live batch-`8` / `19` / `20` scope.

## Gate repair - `step6-routing-adjudicate`

- Reproduced the live stale-touched queue on the current tree and confirmed two batch-8 touched-decision drifts: `def-natural-and-dirichlet-density` and `lem-equivalent-definitions-of-the-hilbert-symbol`.
- Re-read the current definition and lemma against `research/frontier-30-reader-8.md` and found no new mathematical defect. I retagged both touched decisions from `accepted_repair` to `amended_repair` and appended the supplemental gate rows `frontier-30-S6-f-gate-8-1` and `frontier-30-S6-f-gate-8-2` via `research/frontier-30-alpha-f-6b-gate-ledger-rows.json`.
- Focused rerun: batch `8` -> `58 item(s) routed, 20 adjudication obligation(s), 0 error(s)`.

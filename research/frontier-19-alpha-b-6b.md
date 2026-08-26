# frontier-19 — group Alpha `b`, step 6b adjudication

Run: `frontier-19` · role: alpha · label: `6b-b` · covers batches **2, 3, 4**.

## 60%-context checkpoint — 2026-08-26

Completed checks:

- Read the normative instructions in `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md`, plus the routed Step-6 scope and task files for batches `2`, `3`, and `4`.
- Verified the active run state from `.autopilot/status.md`.
- Opened and cross-checked the current reader reports `research/frontier-19-reader-{2,3,4}.md`, refuter reports `research/frontier-19-refute-{2,3,4}.json`, the routed carriers, and the cited dependency items needed for the live findings.
- Re-derived the batch-2 touched repairs. `lem-reduced-forms-with-the-same-leading-coefficient-are-equal` is mathematically sound as repaired, and the A-page summary edit on `positive-definite-binary-quadratic-forms-and-reduction` is scope-correct.
- Confirmed both batch-2 refuter findings as fatal and repaired them on current disk:
  - `lem-gauss-reduction-step-improves-a-positive-definite-form`: the strict decrease claim in the `|b|>a` branch was false; the proof now branches on the post-shear value of `c'` and uses a second swap when needed.
  - `ex-primes-represented-by-x-squared-plus-two-y-squared`: the old proof dropped the hypothesis that the discriminant `-8` form be primitive; it now constructs the form `(p,2t,(t^2+2)/p)` directly and proves it is primitive and positive definite before reducing to `x^2+2y^2`.
- Synced the batch-2 proof-contract entries for those two items to the repaired proofs.
- Ran the focused batch-2 gates successfully on Wednesday, August 26, 2026:
  - `reflow` and `precheck` pass on both changed items.
  - `node tools/proof-contract.mjs research/frontier-19-batch-2.proof-contracts.json --strict` passes with one pre-existing `shotgun-bracket` warning on `ex-primes-represented-by-x-squared-plus-two-y-squared`.
  - `node tools/citation-fidelity.mjs research/frontier-19-batch-2.proof-contracts.json --json` reports `0` quote misses and `0` widening candidates.
  - `node tools/citecheck.mjs ...` is clean on the changed/touched batch-2 items.
- Confirmed the batch-3 touched repairs are materially sound on first read except where the refuter found remaining endpoint defects.
- Confirmed both batch-3 refuter findings as fatal and repaired the current disk text for the live items:
  - `lem-normal-closure-of-a-radical-extension-is-radical`: now separates the trivial `alpha=0` radical step before using the nonzero-root splitting proposition.
  - `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer`: now isolates the `alpha=0` case, forcing `n=1`, before invoking the same nonzero-root proposition.
- Ran `reflow` and `precheck` successfully on those two repaired batch-3 items.

Changed artifacts so far:

- `items/lem-gauss-reduction-step-improves-a-positive-definite-form.md`
- `items/ex-primes-represented-by-x-squared-plus-two-y-squared.md`
- `research/frontier-19-batch-2.proof-contracts.json`
- `items/lem-normal-closure-of-a-radical-extension-is-radical.md`
- `items/thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer.md`
- this report file

Open constraints:

- `research/frontier-19-batch-3.proof-contracts.json` has large pre-existing contract drift outside the two live repaired items, so whole-batch `proof-contract --strict` is not a meaningful adjudication gate here. The focused `--items` runs are the correct evidence path for the Step-6 repairs.
- Batches `3` and `4` still need final touched-item verdicts, focused contract updates, defect-ledger rows, and the machine decisions file.
- Batch `4` has two live refuter findings still to verify against current disk: undefined module notation in `cor-finite-module-locally-zero-near-a-prime` and the missing “`k` is a field” hypothesis in `ex-minimal-generators-local-ring`.

Exact next action:

- Repair the two affected batch-3 proof-contract entries, run the focused batch-3 gates in `--items` mode, then move to the batch-4 touched items and refuter findings before writing the final decisions/ledger rows.

## Final dispositions

Summary:

- Routed obligations closed: `32` total = `26` touched/page carriers + `6` refuter findings.
- Refuter findings confirmed: `6/6`, all fatal, all repaired on current disk.
- Touched/page verdicts: `24` accepted repairs and `2` amended repairs; no reverts.
- Published-dependency repairs: none.
- Structural edits, deletions, or id changes: none.

### Batch 2

| obligation | verdict | defect id | disposition note |
|---|---|---|---|
| `touched:2:lem-reduced-forms-with-the-same-leading-coefficient-are-equal` | `accepted_repair` | `frontier-19-S6-b-touched-2-lem-reduced-forms-with-the-same-leading-coefficient-are-equal` | Reader repair is sound: step `3.2` now derives the full transformed triple for first column `(0,±1)` and closes both `s=0` and `s≠0` cases. |
| `page:2:positive-definite-binary-quadratic-forms-and-reduction` | `accepted_repair` | `frontier-19-S6-b-page-2-positive-definite-binary-quadratic-forms-and-reduction` | The A-page summary now stays inside this page’s actual scope and no longer points the reader at companion-page reciprocity material. |
| `refuter:2:1` | `confirmed_fatal` | `frontier-19-S6-b-refuter-2-1` | The old `|b|>a` branch did not force a strict drop in `μ`; `f=(2,3,3)` was a real counterexample. The proof now splits on `c'` relative to `a` and uses a second swap when needed. |
| `refuter:2:2` | `confirmed_fatal` | `frontier-19-S6-b-refuter-2-2` | The old proof dropped the “primitive form” hypothesis. It now constructs `(p,2t,(t^2+2)/p)` directly, proves it primitive and positive definite, then reduces to `x^2+2y^2`. |

### Batch 3

| obligation | verdict | defect id | disposition note |
|---|---|---|---|
| `touched:3:cor-abel-ruffini-for-the-general-polynomial` | `accepted_repair` | `frontier-19-S6-b-touched-3-cor-abel-ruffini-for-the-general-polynomial` | The title and Statement now preserve the characteristic-`0` hypothesis actually required by the cited solvability theorem. |
| `touched:3:lem-normal-closure-of-a-radical-extension-is-radical` | `amended_repair` | `frontier-19-S6-b-touched-3-lem-normal-closure-of-a-radical-extension-is-radical` | The reader’s rewrite closed the ill-formed induction, and my amendment adds the explicit `alpha=0` branch so the nonzero-root splitting proposition is used with its exact hypothesis. |
| `touched:3:thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p` | `accepted_repair` | `frontier-19-S6-b-touched-3-thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p` | The repaired proof now respects the repo’s `S_p` convention on `{0,…,p-1}` and uses the `d`-step linear ordering correctly, without the false wraparound claim. |
| `touched:3:thm-additive-hilberts-theorem-90` | `accepted_repair` | `frontier-19-S6-b-touched-3-thm-additive-hilberts-theorem-90` | Step `2.1` now applies `σ` to the coefficients in the telescoping sum, so the displayed computation is actually valid. |
| `touched:3:thm-artin-schreier-characterization-of-cyclic-degree-p-extensions` | `accepted_repair` | `frontier-19-S6-b-touched-3-thm-artin-schreier-characterization-of-cyclic-degree-p-extensions` | The forward implication no longer treats “no root in `F`” as enough for irreducibility; it now uses the prime-degree field tower argument. |
| `touched:3:thm-kummer-correspondence` | `accepted_repair` | `frontier-19-S6-b-touched-3-thm-kummer-correspondence` | The current proof no longer cites perfect pairing outside its hypotheses and now closes both inverse directions through the finite character-comparison argument on `B(K)`. |
| `touched:3:thm-kummer-pairing-is-perfect` | `accepted_repair` | `frontier-19-S6-b-touched-3-thm-kummer-pairing-is-perfect` | The right-kernel argument is now the direct fixed-field argument: a nontrivial class gives a non-fixed root and hence a nontrivial pairing value. |
| `touched:3:thm-solvable-by-radicals-implies-a-solvable-galois-group` | `accepted_repair` | `frontier-19-S6-b-touched-3-thm-solvable-by-radicals-implies-a-solvable-galois-group` | The inaccurate Kummer citation is gone; the proof now argues directly that each radical step becomes a cyclic Galois step after adjoining the relevant roots of unity. |
| `refuter:3:1` | `confirmed_fatal` | `frontier-19-S6-b-refuter-3-1` | The refuter was right: the rewritten lemma still invoked the nonzero-root proposition without isolating the trivial zero step. The current proof now splits that case first. |
| `refuter:3:2` | `confirmed_fatal` | `frontier-19-S6-b-refuter-3-2` | The refuter was right again: the converse Kummer theorem needed the `alpha=0` / `n=1` endpoint split before using the nonzero-root proposition. The current proof now does that explicitly. |

### Batch 4

| obligation | verdict | defect id | disposition note |
|---|---|---|---|
| `touched:4:cor-localisation-commutes-with-finite-intersections-of-submodules` | `accepted_repair` | `frontier-19-S6-b-touched-4-cor-localisation-commutes-with-finite-intersections-of-submodules` | The touched change is a real nonfatal contract repair: the empty-family boundary is now recorded as checked instead of the false `not_applicable` row the reader flagged. |
| `touched:4:cor-minimal-generators-over-a-local-ring` | `accepted_repair` | `frontier-19-S6-b-touched-4-cor-minimal-generators-over-a-local-ring` | The title and Statement now carry the Axiom-of-Choice scope inherited from the repaired Nakayama route. |
| `touched:4:cor-nakayama-generators-modulo-an-ideal` | `accepted_repair` | `frontier-19-S6-b-touched-4-cor-nakayama-generators-modulo-an-ideal` | The title and Statement now preserve the same Choice hypothesis required by the repaired Nakayama theorem. |
| `touched:4:ex-local-test-for-an-isomorphism` | `accepted_repair` | `frontier-19-S6-b-touched-4-ex-local-test-for-an-isomorphism` | The example now advertises the Choice scope of the local criterion it cites, instead of presenting the criterion as unconditional. |
| `touched:4:ex-minimal-generators-local-ring` | `amended_repair` | `frontier-19-S6-b-touched-4-ex-minimal-generators-local-ring` | The reader’s direct-witness rewrite was sound, and my amendment adds the missing standing hypothesis that `k` is a field, so `(x,y)` is actually a prime/maximal ideal and the residue-field claim is true. |
| `touched:4:ex-nakayama-finite-generation-is-essential` | `accepted_repair` | `frontier-19-S6-b-touched-4-ex-nakayama-finite-generation-is-essential` | The closing inference is now a direct witness rather than a stale unconditional citation of Nakayama. |
| `touched:4:ex-nakayama-jacobson-hypothesis-is-essential` | `accepted_repair` | `frontier-19-S6-b-touched-4-ex-nakayama-jacobson-hypothesis-is-essential` | The example now stands as a direct counterexample witness and no longer misquotes the theorem-level Jacobson-radical hypothesis. |
| `touched:4:lem-localised-module-scalar-action-independent-of-representatives` | `accepted_repair` | `frontier-19-S6-b-touched-4-lem-localised-module-scalar-action-independent-of-representatives` | The repaired witness calculation restores the missing factor of `u`, so the scalar-action proof is now algebraically valid. |
| `touched:4:lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` | `accepted_repair` | `frontier-19-S6-b-touched-4-lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports` | The zero-generator case is now explicit, so the written proof matches the statement’s allowance of the zero module. |
| `touched:4:thm-jacobson-radical-unit-characterisation` | `accepted_repair` | `frontier-19-S6-b-touched-4-thm-jacobson-radical-unit-characterisation` | The title and Statement now keep the Choice-dependent maximal-ideal existence hypothesis the proof actually uses. |
| `touched:4:thm-local-criterion-for-exactness-of-modules` | `accepted_repair` | `frontier-19-S6-b-touched-4-thm-local-criterion-for-exactness-of-modules` | The exactness criterion now preserves the Choice scope inherited from the repaired zero/map criterion. |
| `touched:4:thm-local-criterion-for-zero-modules-and-maps` | `accepted_repair` | `frontier-19-S6-b-touched-4-thm-local-criterion-for-zero-modules-and-maps` | The title and Statement now preserve the Axiom-of-Choice dependence coming from maximal-ideal existence. The only residual signal is the pre-existing scoped `shotgun-bracket` warning at step `2.1`. |
| `touched:4:thm-localisation-of-modules-commutes-with-quotients-and-sums` | `accepted_repair` | `frontier-19-S6-b-touched-4-thm-localisation-of-modules-commutes-with-quotients-and-sums` | The touched change is again a nonfatal contract repair: the empty direct-sum boundary is now recorded truthfully instead of as `not_applicable`. |
| `touched:4:thm-nakayama-lemma` | `accepted_repair` | `frontier-19-S6-b-touched-4-thm-nakayama-lemma` | The title and Statement now preserve the same Choice scope as the Jacobson-radical unit criterion used in the proof. |
| `touched:4:thm-support-of-arbitrary-direct-sums` | `accepted_repair` | `frontier-19-S6-b-touched-4-thm-support-of-arbitrary-direct-sums` | The touched change is the third nonfatal contract repair from reader finding `R4-N2`: the empty-family boundary is now checked rather than wrongly dismissed. |
| `page:4:localisation-of-modules-and-support` | `accepted_repair` | `frontier-19-S6-b-page-4-localisation-of-modules-and-support` | The summary paragraphs now state the local criteria and Nakayama consequences with their repaired Choice scope. |
| `refuter:4:1` | `confirmed_fatal` | `frontier-19-S6-b-refuter-4-1` | The refuter correctly identified undefined notation: the item now names the multiplicative set `S_s={1,s,s^2,…}` and states/proves vanishing as `S_s^{-1}M=0`. |
| `refuter:4:2` | `confirmed_fatal` | `frontier-19-S6-b-refuter-4-2` | The refuter correctly identified the missing standing hypothesis on `k`; the example and Given block now require `k` to be a field. |

## Gate evidence

- Batch `2`:
  - `reflow` + `precheck` passed on `lem-gauss-reduction-step-improves-a-positive-definite-form` and `ex-primes-represented-by-x-squared-plus-two-y-squared`.
  - `node tools/proof-contract.mjs research/frontier-19-batch-2.proof-contracts.json --strict` passed on Wednesday, August 26, 2026, with one pre-existing `shotgun-bracket` warning on `ex-primes-represented-by-x-squared-plus-two-y-squared`.
  - `citation-fidelity` reported `0` quote misses and `0` widening candidates.
  - `citecheck` was clean on the changed/touched batch-2 items.
- Batch `3`:
  - `reflow` + `precheck` passed on `lem-normal-closure-of-a-radical-extension-is-radical` and `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer`.
  - `node tools/proof-contract.mjs research/frontier-19-batch-3.proof-contracts.json --strict --items ...` passed with `0` errors and `0` warnings on all eight touched items after the two refuter-driven amendments.
  - `citecheck` was clean on the eight touched items plus `thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer`.
  - Whole-batch `proof-contract --strict` remains unusable evidence because the file still carries unrelated scaffold-era drift outside this routed Step-6 scope.
- Batch `4`:
  - `reflow` + `precheck` passed on `cor-finite-module-locally-zero-near-a-prime` and `ex-minimal-generators-local-ring`.
  - `node tools/proof-contract.mjs research/frontier-19-batch-4.proof-contracts.json --strict --items ...` passed with one pre-existing `shotgun-bracket` warning on `thm-local-criterion-for-zero-modules-and-maps`.
  - `citecheck` was clean on the touched set plus `cor-finite-module-locally-zero-near-a-prime`.

## Residual constraints

- The batch-3 whole-file proof contract still contains unrelated placeholder drift outside this routed scope; the item-scoped checks above are the truthful Step-6 evidence for the items I was authorized to adjudicate.
- Two nonfatal scoped warnings remain after all repairs and do not name new defects:
  - `ex-primes-represented-by-x-squared-plus-two-y-squared` (`batch 2`) still has a `shotgun-bracket` warning in step `1.2`.
  - `thm-local-criterion-for-zero-modules-and-maps` (`batch 4`) still has a `shotgun-bracket` warning in step `2.1`.
- Post-write machine state on Wednesday, August 26, 2026:
  - `node tools/defect-ledger.mjs append --file research/frontier-19-alpha-b-6b-ledger-rows.json` appended all `32` group-`b` rows and refreshed `research/DEFECT-LEDGER.md`.
  - Direct ledger inspection confirms all `32` `frontier-19-S6-b-*` rows are present on disk.
  - `node tools/step6-scope.mjs stamp --run frontier-19` stamped group `b` successfully, then stopped on an external blocker: `research/frontier-19-alpha-c-6b-decisions.json` is still missing, so the whole-run adjudication check cannot finish from this dispatch.
  - A local obligation sanity check against `research/frontier-19-step6-scope-{2,3,4}.json` finds `32` expected obligations and `32` group-`b` decisions, with no missing or extra keys.

## Gate adjudication — `rendercheck` (2026-08-26)

- `gate:rendercheck:multiline-display:def-principal-binary-quadratic-form` — `repaired`. Reproduced `node tools/rendercheck.mjs`; the piecewise principal-form display was written across several source lines between `$$`, which the renderer treats as a mis-rendered display. I collapsed the cases expression to one source line with no mathematical change.
- `gate:rendercheck:multiline-display:ex-localising-an-abelian-group-at-a-prime` — `repaired`. Reproduced the same display-format defect on the localized-module cases formula. I rewrote the displayed isomorphism as a single-line `$$...$$` block, preserving the example's content.

Group-`b` gate findings are cleared on current disk. The final rerun was:
`OK — 7812 file(s): no wikilink inside math, no nested or unbalanced delimiters, no multiline display block, every math span parses under the real KaTeX, and every frontmatter block parses under the renderer's YAML parser.`

## Gate adjudication — `proof-contract` (2026-08-26)

- `gate:proof-contract:batch-3-citation-derivation-drift` — `repaired`. Reproduced the merged `node tools/proof-contract.mjs research/frontier-19-proof-contracts.json --strict` failure on current disk. Batch `3` still carried scaffold-era citation and derivation rows outside the routed Step-6 touch set, so the whole-batch gate failed even though the live repaired items had passed scoped `--items` checks. I regenerated all `34` batch-3 contract entries from current item text, which collapsed the gate from `309` errors to a narrow residual set without weakening the detector.
- `gate:proof-contract:thm-field-norm-and-trace-by-embeddings` — `repaired`. After regeneration, one real content defect remained: `[L5]` cited `thm-finite-galois-extension-characterizations`, but no proof step used that fact and the dependency existed only through that dead line. I removed the unused fact and dependency from the item, updated `research/frontier-19-batch-3.pages.json` to match, regenerated the contract entry, and anchored the remaining live boundary rows to steps `1.2`, `5.1`, and `6.1`.
- `gate:proof-contract:thm-solvable-galois-group-implies-solvable-by-radicals` — `repaired`. The same live defect remained here: `[L3]` cited `lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel`, but no proof step used it. I removed the unused fact and dependency, rewired the remaining Kummer citation in the proof to the surviving local fact label, updated the batch manifest, and regenerated the contract entry from current disk.
- `gate:proof-contract:batch-3-boundary-anchors` — `repaired`. The final failures were unanchored `checked` boundary rows inherited from scaffold placeholder prose across the norm/trace, Kummer/radicals, and example/false-statement cluster. I re-read each affected item and replaced every failing placeholder with an exact step or Statement anchor, or with a specific `not_applicable` reason where the boundary genuinely did not arise.

## Gate adjudication — `step6-routing-adjudicate` (2026-08-26)

- Batch `3`: the final carriers for `cor-abel-ruffini-for-the-general-polynomial`, `thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p`, `thm-additive-hilberts-theorem-90`, `thm-artin-schreier-characterization-of-cyclic-degree-p-extensions`, `thm-kummer-correspondence`, `thm-kummer-pairing-is-perfect`, and `thm-solvable-by-radicals-implies-a-solvable-galois-group` no longer match the post-reader carrier exactly because Alpha later regenerated the batch-3 contract entries and synchronized the manifest rows. Their Step-6 decisions are therefore retagged from `accepted_repair` to `amended_repair`; the repaired mathematics already recorded above is unchanged on current disk.
- Batch `4`: the same final-carrier issue applies to `cor-localisation-commutes-with-finite-intersections-of-submodules`, `cor-minimal-generators-over-a-local-ring`, `cor-nakayama-generators-modulo-an-ideal`, `ex-local-test-for-an-isomorphism`, `ex-nakayama-finite-generation-is-essential`, `ex-nakayama-jacobson-hypothesis-is-essential`, `lem-localised-module-scalar-action-independent-of-representatives`, `lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports`, `thm-jacobson-radical-unit-characterisation`, `thm-local-criterion-for-exactness-of-modules`, `thm-local-criterion-for-zero-modules-and-maps`, `thm-localisation-of-modules-commutes-with-quotients-and-sums`, `thm-nakayama-lemma`, and `thm-support-of-arbitrary-direct-sums`. Those decisions are likewise retagged to `amended_repair` because the final carrier now includes the post-reader contract regeneration and manifest synchronization, not because a new mathematical defect was found.

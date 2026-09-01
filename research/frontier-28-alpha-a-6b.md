# frontier-28 alpha group a step 6b adjudication

Date: Tuesday, September 1, 2026
Run: `frontier-28`
Group: `a`
Scope: batches `2`, `3`, and `8`

## Batch 2

- Touched obligations: `8` total: `1` `accepted_repair` and `7` `amended_repair`.
  `thm-flat-going-down` now again matches the exact post-reader snapshot. The other seven reader repairs still stand, but their live carriers differ from the exact post-reader snapshot because the current manifest row and/or proof-contract entry changed later; `lem-rees-module-finiteness-and-stable-filtrations` and `thm-existence-of-hilbert-samuel-polynomial` also carry Alpha's later mathematical repairs on the live bytes.
- Refuter obligations: `6` total, all `confirmed_fatal` and repaired.
  Alpha confirmed the zero-module defect in `def-hilbert-samuel-multiplicity`, the non-Noetherian overreach in `lem-rees-module-finiteness-and-stable-filtrations`, the false Artinian-base claim in `thm-existence-of-hilbert-samuel-polynomial`, the bad localization step in `thm-faithfully-flat-ring-map-characterisations`, the false ideal-power comparison in `thm-hilbert-samuel-dimension-theorem`, and the invalid kernel-sharpening step in `thm-local-criterion-for-flatness-ideal-form`.
- Mathematical disposition: the current Hilbert-Samuel chain is coherent after the zero-module convention, the Artinian `R/mathfrak m^c` graded-base rewrite, and the module-level filtration comparison in the dimension theorem. On the flatness side, the faithfully-flat spectrum theorem now uses going-down, and the local criterion is explicitly narrowed to the `R`-finite case the repaired proof actually establishes.
- Risk review: ran `tools/risk-report.mjs` without `--require-reviewed`, reread every current batch-2 HIGH/CRITICAL item against the current proof plus reader/refuter evidence, and wrote complete `alpha-6b-a` `risk_review` rows for:
  `thm-hilbert-serre-theorem`, `lem-rees-module-finiteness-and-stable-filtrations`, `thm-existence-of-hilbert-samuel-polynomial`, `thm-hilbert-samuel-dimension-theorem`, `thm-dimension-and-parameters-for-modules`, `thm-multiplicity-under-reduction-by-a-parameter`, `cor-parameter-ideal-multiplicity-positive`, `ex-hilbert-samuel-polynomial-of-a-dvr`, `ex-hilbert-samuel-finite-length-case`, `thm-localisations-are-flat`, `thm-flatness-is-local`, `thm-equational-criterion-for-flatness`, `cor-flat-quotients-and-idempotent-ideals`, `thm-faithful-flatness-detected-by-nonzero-modules-and-fibres`, `thm-faithfully-flat-ring-map-characterisations`, `thm-faithfully-flat-descent-of-flatness`, and `thm-local-criterion-for-flatness-ideal-form`.

## Batch 3

- Touched obligations: `6` total, all `amended_repair`.
  Reader 3's item repairs still stand, but every touched carrier now differs from the exact post-reader snapshot because the current manifest row and/or proof-contract entry changed later; `ex-iterated-adic-completions` and the completion theorems also carry the Alpha high-risk review rows.
- Reader obligations: `1` total, `confirmed_nonfatal`.
  The B-page prose had remained too strong after the example was narrowed; it now says only that passing from `I` to `I^r` leaves the one-step completion unchanged.
- Refuter obligations: `3` total.
  `ex-completion-not-exact-without-finiteness` is `confirmed_nonfatal` and repaired, while `thm-faithful-flatness-of-jacobson-adic-completion` and the page prose on `inverse-limits-and-noetherian-completion-examples` are both `confirmed_fatal` and repaired.
- Mathematical disposition: the completion page now stays inside the proved scope. The finite-module exactness and extension-of-scalars theorems keep the reader's repaired proofs, the faithful-flatness theorem now works only with the finite quotient `R/mathfrak m`, and the examples page prose matches the narrowed one-step cofinality example.
- Risk review: ran `tools/risk-report.mjs` without `--require-reviewed`, reread every current batch-3 HIGH/CRITICAL item against the current proof and routed evidence, and wrote complete `alpha-6b-a` `risk_review` rows for:
  `thm-exactness-of-inverse-limits-under-mittag-leffler`, `thm-kernel-and-universal-property-of-adic-completion`, `prop-units-in-an-adically-complete-ring`, `thm-completion-is-exact-on-finite-modules`, `thm-completion-as-extension-of-scalars`, `cor-completion-commutes-with-finite-quotients-and-submodules`, `thm-flatness-of-noetherian-completion`, `thm-faithful-flatness-of-jacobson-adic-completion`, `thm-noetherianity-of-adic-completion`, `thm-completion-of-a-noetherian-local-ring`, `thm-finite-modules-over-complete-noetherian-rings-are-complete`, `thm-complete-nakayama-lemma`, `thm-completion-preserves-dimension-and-hilbert-samuel-data`, `ex-adic-completion-of-the-integers`, `ex-equivalent-adic-filtrations`, `ex-completion-not-exact-without-finiteness`, and `ex-completion-of-a-domain-not-a-domain`.

## Batch 8

- Touched obligations: `8` total, all `amended_repair`.
  Reader 8's touched repairs still stand, and every touched carrier now differs from the exact post-reader snapshot because the current manifest row and/or proof-contract entry changed later; `cor-every-module-admits-an-injective-resolution` and `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution` also carry Alpha's later statement-scope repairs.
- Refuter obligations: `11` total.
  `refuter:8:7` on `lem-extend-a-partial-comparison-map-by-one-degree` is `confirmed_nonfatal` and repaired. The remaining ten are `confirmed_fatal` and repaired: the torsion-category counterexample now states the needed Choice scope and constructs its nonzero map to `mathbb Z/p`, the split-sequence corollary now names the chosen end resolutions, the divisible-envelope example now names its Choice scope, the generator-extension lemma is narrowed to the locally small Grothendieck/Choice setting and rewritten through the standard maximality argument, the projective comparison and horseshoe theorems now name Dependent Choice, and the horseshoe-compatibility proposition is narrowed to the uniqueness-only claim the current proof actually establishes.
- Gate supplements: `4` additional `route:"gate"` decisions record defects found during the required high-risk review on Tuesday, September 1, 2026.
  Alpha added the missing inherited Choice or local-smallness scope to `thm-horseshoe-lemma-for-injective-resolutions`, `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`, `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution`, and `cor-every-module-admits-an-injective-resolution`.
- Mathematical disposition: the projective-resolution chain now isolates exactly where dependent choice is spent, and the Grothendieck injective-embedding block now carries the same local-smallness and Choice scope as the repaired detecting lemma it uses.
- Risk review: ran `tools/risk-report.mjs` without `--require-reviewed`, reread every current batch-8 HIGH/CRITICAL item against the current proof and routed evidence, and wrote complete `alpha-6b-a` `risk_review` rows for the full required set, including the choice-sensitive comparison, horseshoe, Grothendieck, and torsion-category items.

## Repairs

- `items/def-hilbert-samuel-multiplicity.md`
  Added the zero-module convention `e_I(0)=0` and kept the factorial-scaled leading-coefficient definition only for nonzero modules.

- `items/lem-rees-module-finiteness-and-stable-filtrations.md`, `items/thm-existence-of-hilbert-samuel-polynomial.md`, `items/thm-hilbert-samuel-dimension-theorem.md`, `items/thm-faithfully-flat-ring-map-characterisations.md`, `items/thm-local-criterion-for-flatness-ideal-form.md`, and `items/thm-local-criterion-for-flatness-closed-fibre-form.md`
  Repaired the live batch-2 commutative-algebra defects: the Rees finiteness lemma is now correctly Noetherian, the Hilbert-Samuel existence proof works over `R/mathfrak m^c`, the dimension theorem compares filtrations on `M` instead of false ideal containments in `R`, the faithfully-flat spectrum criterion now uses going-down, and the local flatness criterion now states and proves only the `R`-finite version actually carried on disk.

- `items/ex-completion-not-exact-without-finiteness.md`, `items/thm-faithful-flatness-of-jacobson-adic-completion.md`, and `library/commutative-algebra/inverse-limits-and-noetherian-completion-examples.md`
  Repaired the live batch-3 example and faithful-flatness defects and narrowed the B-page prose to the one-step cofinality comparison actually proved on disk.

- `items/cex-a-category-with-enough-injectives-but-not-enough-projectives.md`, `items/cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution.md`, `items/ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope.md`, `items/lem-extend-a-partial-comparison-map-by-one-degree.md`, `items/thm-projective-comparison-map-exists.md`, `items/thm-projective-comparison-maps-are-unique-up-to-chain-homotopy.md`, `items/thm-horseshoe-lemma-for-projective-resolutions.md`, `items/thm-horseshoe-lemma-for-injective-resolutions.md`, `items/lem-extension-from-subobjects-of-a-generator-detects-injectivity.md`, `items/prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy.md`, `items/thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings.md`, `items/cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution.md`, and `items/cor-every-module-admits-an-injective-resolution.md`
  Repaired the live batch-8 choice-scope, missing-hypothesis, and compatibility defects, including the four gate-only high-risk fixes found during Alpha review.

- `research/frontier-28-batch-2.pages.json`, `research/frontier-28-batch-3.pages.json`, `research/frontier-28-batch-8.pages.json`
  Resynced every in-scope manifest row to the current item title and `deps` frontmatter so the live touched carriers no longer drift from disk.

- `research/frontier-28-batch-2.proof-contracts.json`, `research/frontier-28-batch-3.proof-contracts.json`, and `research/frontier-28-batch-8.proof-contracts.json`
  Regenerated every affected proof-contract entry, converted the batch-2 and batch-3 detector false-positive boundary rows to explicit checked evidence, and wrote all required `alpha-6b-a` `risk_review` records.

- `research/frontier-28-alpha-a-6b-ledger-rows.json`, `research/frontier-28-alpha-a-6b-decisions.json`, `research/frontier-28-alpha-a-6b-gate-ledger-rows.json`, and this report
  Now record the exact Step 6 durable outputs for all `43` routed obligations plus `5` gate supplement decisions, including the routing reclassification for `thm-flat-going-down`.

## Checks

- `node tools/tsx-run.mjs tools/precheck.mts ...changed item list...`
  Result: pass, `21 checked, 0 failing`.

- `node tools/rendercheck.mjs ...changed item/page list...`
  Result: pass, `OK — 23 file(s)`.

- `node tools/proof-contract.mjs research/frontier-28-batch-2.proof-contracts.json --strict`
  Result: pass, `40/40 item(s) checked`.

- `node tools/proof-contract.mjs research/frontier-28-batch-3.proof-contracts.json --strict`
  Result: pass, `22/22 item(s) checked`.

- `node tools/proof-contract.mjs research/frontier-28-batch-8.proof-contracts.json --strict`
  Result: pass, `51/51 item(s) checked`.

- `node tools/citation-fidelity.mjs research/frontier-28-batch-2.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass; `94` citations, no quote misses, no widening candidates.

- `node tools/citation-fidelity.mjs research/frontier-28-batch-3.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass; `54` citations, no quote misses, no widening candidates.

- `node tools/citation-fidelity.mjs research/frontier-28-batch-8.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: pass; `129` citations, no quote misses, no widening candidates.

- `node tools/boundary-audit.mjs research/frontier-28-batch-2.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions remain after the explicit checked-row updates.

- `node tools/boundary-audit.mjs research/frontier-28-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions remain after the explicit checked-row updates.

- `node tools/boundary-audit.mjs research/frontier-28-batch-8.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: pass; no contradicted boundary dispositions.

- `node tools/content-policy.mjs research/frontier-28-batch-2.pages.json`
  Result: pass, `46 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-28-batch-3.pages.json`
  Result: pass, `28 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/content-policy.mjs research/frontier-28-batch-8.pages.json`
  Result: pass, `60 scoped item(s), 0 error(s), 0 warning(s)`.

- `node tools/risk-report.mjs research/frontier-28-batch-2.proof-contracts.json --require-reviewed --json`
  Result: pass; every required batch-2 HIGH/CRITICAL item now carries a complete `alpha-6b-a` `risk_review`.

- `node tools/risk-report.mjs research/frontier-28-batch-3.proof-contracts.json --require-reviewed --json`
  Result: pass; every required batch-3 HIGH/CRITICAL item now carries a complete `alpha-6b-a` `risk_review`.

- `node tools/risk-report.mjs research/frontier-28-batch-8.proof-contracts.json --require-reviewed --json`
  Result: pass; every required batch-8 HIGH/CRITICAL item now carries a complete `alpha-6b-a` `risk_review`.

- `node tools/step6-scope.mjs check --run frontier-28 --phase split --batch 2`
  Result: pass, `14 adjudication obligation(s)`.

- `node tools/step6-scope.mjs check --run frontier-28 --phase split --batch 3`
  Result: pass, `10 adjudication obligation(s)`.

- `node tools/step6-scope.mjs check --run frontier-28 --phase split --batch 8`
  Result: pass, `19 adjudication obligation(s)`.

- `git diff --check -- ...scoped files...`
  Result: clean.

## Stage-owned follow-up

- I did not run `node tools/step6-scope.mjs stamp --run frontier-28 --group a` or any adjudication/final phase that would seal `subject_sha256`. The live Step 6 brief assigns stamping to the stage, not to the Alpha writeup.

## Gate repair - `step6-routing-adjudicate` (Tuesday, September 1, 2026)

- Reproduced the live `decision-not-applied` queue on the current tree and confirmed one misclassified batch-2 touched decision: `thm-flat-going-down` had been tagged `amended_repair` even though its live carrier still equals `research/frontier-28-step6-hash-2-post.json`.
- Reread the current theorem against `research/frontier-28-reader-2.md` and found no new mathematical defect. Retagged the touched decision back to `accepted_repair` and appended the supplemental gate row `frontier-28-S6-a-gate-2-1` via `research/frontier-28-alpha-a-6b-gate-ledger-rows.json`.
- Focused rerun:
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate --batch 2`
  -> `46 item(s) routed, 14 adjudication obligation(s), 0 error(s)`.
- Full rerun:
  `node tools/step6-scope.mjs check --run frontier-28 --phase adjudicate`
  -> `424 item(s) routed, 166 adjudication obligation(s), 0 error(s)`.
- `node tools/defect-ledger.mjs validate --run frontier-28`
  -> `181 defect row(s) checked, 0 error(s)`.

## Blockers

- None in the live batch-`2` / batch-`3` / batch-`8` scope.

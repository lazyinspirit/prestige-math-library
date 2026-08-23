# Frontier 17 — independent reader 3 report

Run: `frontier-17`  
Role: Step 6a independent reader  
Batch: `3`

## Fatal findings

### R3-1 — nonmonic discriminants were outside the cited local definition

- **Items:** `thm-discriminant-square-criterion-for-an-alternating-galois-group`; `thm-galois-group-of-an-irreducible-cubic-by-discriminant`; downstream citation text in `ex-cubic-x-cubed-minus-three-x-plus-one-has-galois-group-a-three` and `ex-cubic-x-cubed-minus-two-has-galois-group-s-three`; A-page summary.
- **Exact location:** the two theorem titles and Statements; the first theorem's Facts input `def-discriminant-of-a-monic-polynomial`; the cubic theorem's `[L2]`; the examples' `[L1]` rows.
- **Defect:** both theorem Statements quantified over arbitrary separable polynomials, but the on-disk definition and root formula they use define `Disc(f)` only for a **monic** polynomial. Thus the displayed Statements used a term outside the cited dependency's domain, and the cubic theorem widened `[L2]` in turn. Their old titles also omitted the separability hypothesis (and the cubic title omitted characteristic not two), so the titles asserted more than the proofs established.
- **Evidence:** `def-discriminant-of-a-monic-polynomial` begins “For a monic polynomial … its discriminant is …”, and `thm-discriminant-root-formula-and-repeated-root-criterion` likewise assumes a monic polynomial. The proof of the criterion invokes exactly `Disc(f)=delta^2` from those inputs.
- **Repair:** narrowed both Statements to monic polynomials; made both titles preserve monicity, separability, and the characteristic hypothesis; made `[L2]` and the two example citations faithful; narrowed the A-page summary; updated the two manifest titles; and retagged the materially narrowed theorem Statements from `literature-derived` to `ai-altered`. No downstream mathematical result is lost: both examples and the quartic theorem use monic separable polynomials in characteristic zero.
- **Severity:** fatal.

### R3-2 — the simultaneous-basis proof used an omitted cited clause and an undefined rank-one tail

- **Item:** `thm-simultaneous-basis-theorem-for-pid-submodules`.
- **Exact location:** `[L1]` and proof step `2.1`.
- **Defect:** step `2.1` invokes maximality of the pivot value ideal, but `[L1]` restated only that a primitive pivot and splittings exist; the load-bearing maximality clause of `lem-maximal-divisor-pivot-for-pid-submodules` was absent from the proof's explicit inputs. The same step also introduced `e_2^*` and `a_2` without separating the case `N_1=0` (in particular ambient rank one), where neither object exists.
- **Evidence:** the cited lemma's Statement explicitly says `psi(N)=(a)` is maximal among the relevant functional value ideals. Before repair, step `2.1` nevertheless said “maximality … from [L1]”. For `rank(M)=1`, step `1.3` gives `M_1=N_1=0`, so the old next sentence's `e_2^*` was undefined.
- **Repair:** expanded `[L1]` to the exact splitting and maximality clauses and split `N_1=0` before introducing `e_2^*` or `a_2`. The contract citation, derivation, and actual rank-zero/rank-one boundary dispositions were regenerated and rewritten.
- **Severity:** fatal for the unlicensed citation use; the omitted `N_1=0` branch alone was a nonfatal 30-second boundary gap.

### R3-3 — the Chinese-remainder surjectivity witness had its residues swapped

- **Item:** `lem-coprime-cyclic-pid-quotients-split`.
- **Exact location:** proof step `2.1`.
- **Defect:** with `ra+sb=1`, the old proposed preimage `vsb+ura` maps to `(v mod (a), u mod (b))`, not to the requested `(u mod (a), v mod (b))`. It was therefore an invalid explicit witness for surjectivity.
- **Evidence:** modulo `(a)`, `sb=1` and `ra=0`; modulo `(b)`, `ra=1` and `sb=0`.
- **Repair:** replaced the witness by `usb+vra`, which has residues `u` modulo `(a)` and `v` modulo `(b)`. Regenerated the derivation and rewrote the empty, zero, unit, singleton, and choice boundary rows around the corrected witness.
- **Severity:** fatal.

### R3-8 — the polynomial-module title omitted finite-dimensionality

- **Item:** `prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator`.
- **Exact location:** frontmatter `title` and the matching batch-manifest title.
- **Defect:** the old title asserted that `$V_T$ is finitely generated and torsion` without restricting `V`, while the Statement and proof require `V` to be finite-dimensional. For an infinite-dimensional vector space with `T=0`, the module `V_T` need not be finitely generated over `F[x]`, so the title was concretely false beyond the proved domain.
- **Repair:** changed the item and manifest titles to begin “For finite-dimensional `V`”. The Statement, proof, citations, and provenance already had the correct domain and needed no change.
- **Severity:** fatal title overclaim.

## Nonfatal findings

### R3-4 — the Jordan-form construction omitted the fact that elementary-divisor factors divide the split characteristic polynomial

- **Item:** `thm-jordan-canonical-form-from-pid-module-structure`.
- **Exact location:** proof step `1.1` and `deps`.
- **Defect:** the old step inferred directly from “`chi_T` splits” that every irreducible in every elementary divisor is linear, without an explicit input connecting the invariant/elementary divisors to `chi_T`.
- **Evidence:** the needed earlier result is `cor-product-of-invariant-factors-is-the-characteristic-polynomial`; it was not in the old dependency list or Facts block.
- **Repair:** added that corollary to the item and batch-manifest dependencies as `[L3]`, and made step `1.1` cite it explicitly before applying the primary decomposition.
- **Severity:** nonfatal under the 30-second rule.

### R3-5 — the free-rank counterexample named `Z` as a PID without making that fact an input

- **Item:** `fs-elementary-divisors-determine-free-rank`.
- **Exact location:** refutation step `1.1`.
- **Defect:** the step began “Over the PID `Z`” although no input in that item established that `Z` is a PID. The conclusion is true, but the proof step relied on an unstated fact.
- **Repair:** strengthened and simplified the witness to `R^0`, `R`, and `R^2` over an arbitrary PID `R`, which is already the ambient hypothesis. These modules have identical empty elementary-divisor data and ranks `0,1,2` by `[L1]`.
- **Severity:** nonfatal under the 30-second rule.

### R3-6 — the Smith-form basis order did not match the displayed diagonal order

- **Item:** `thm-smith-normal-form-existence-over-a-pid`.
- **Exact location:** proof steps `2.2`–`3.1`.
- **Defect:** step `2.2` said to concatenate the kernel basis before the lifted image basis, which places zero columns before the nonzero diagonal columns, while step `3.1` called the resulting matrix the displayed Smith diagonal with nonzero entries first. A final column permutation closes the gap, but it was unstated.
- **Repair:** ordered the lifted image basis first and the kernel basis afterward, so step `3.1` now produces the displayed diagonal directly.
- **Severity:** polish (a competent reader closes it within 30 seconds).

### R3-7 — several proof-contract citation quotes were clause fragments rather than the facts used

- **Items:** contract rows across the 80 proof-bearing items; concrete examples included `cor-relative-automorphism-order-divides-extension-degree` `[L2]`, `thm-finite-galois-extension-characterizations` `[L2]`, `thm-galois-closures-exist-and-are-minimal` `[L1]`, `prop-fraction-field-dimension-recovers-pid-module-rank` `[L3]`/`[L4]`, and `prop-abelian-groups-are-z-modules` `[F6]`/`[F7]`/`[F9]`/`[F10]`.
- **Exact location:** `research/frontier-17-batch-3.proof-contracts.json`, `citations[].quote`.
- **Defect:** representative stored quotes were only “If … finite, then … finite”, “Let …”, “is a submodule when”, or “the subgroup generated by S”, while the corresponding proof steps used the omitted degree formula, splitting-field conclusion, tensor isomorphism, or full definition. Quote presence passed the detector, but an opening fragment is not the exact load-bearing clause required by the contract.
- **Repair:** ran the repository's Step-6 `regen-contract-entries.mjs` for all 80 proof-bearing batch items. It reread each Facts block and cited source section from disk, stored the full exact source section for every citation, and synchronized all derivation claims and inputs. Manual boundary dispositions were retained except where the repairs above changed the relevant case.
- **Severity:** nonfatal contract defect; the reader-facing Facts restatements themselves were faithful.

## Changes

- Changed eight mathematical items: `thm-discriminant-square-criterion-for-an-alternating-galois-group`, `thm-galois-group-of-an-irreducible-cubic-by-discriminant`, `thm-simultaneous-basis-theorem-for-pid-submodules`, `lem-coprime-cyclic-pid-quotients-split`, `thm-jordan-canonical-form-from-pid-module-structure`, `fs-elementary-divisors-determine-free-rank`, `thm-smith-normal-form-existence-over-a-pid`, and the title of `prop-polynomial-module-is-finitely-generated-torsion-with-minimal-annihilator`.
- Changed citation text only in the two cubic examples named in R3-1.
- Changed the Galois A-page summary, three affected manifest titles, the cubic strategy, and the corresponding final provenance/source rationale in the batch notes; added one manifest dependency for the Jordan theorem.
- Regenerated citations and derivations for all 80 proof contracts, then manually replaced the affected boundary dispositions for R3-1 through R3-3 and R3-5.
- Added no item, deleted no item, and did not touch `research/plan-spec.json`.
- No changed item carried `verification.judge`, so there was no stale judge block to delete.

## Coverage

All 94 assigned item files were opened and read in full. Every numbered proof step and reader-facing `[F#]`/`[A#]`/`[L#]` restatement was checked against the cited on-disk clause. The four page files and their titles/summaries were read. The dependency catalog contains 174 unique targets: 66 are among the assigned items and all 108 external targets were opened at their reader-facing clause. Every external target is published and carries component provenance.

Component provenance exists on all 94 assigned items. No assigned item and no dependency target has `provenance.statement: ai-generated`, so no AI-generated Statement or construction is load-bearing in this batch. The seven distinct reference URLs used by the assigned items all resolved; the exact conventions needed for the repairs were checked in the cited Milne, Conrad, Brussel, and Apisa texts.

## Validation

- `reflow` on the ten changed item files: all unchanged.
- Scoped `precheck` after reflow: 10 checked, 0 failing.
- `proof-contract --strict`: 80/80 items, 0 errors, 0 warnings.
- `citation-fidelity --fail-on-missing-quote`: all 125 citation rows quote text present in the cited source. Its one widening candidate is a confirmed detector false positive: `thm-sign-is-a-homomorphism` states homomorphism for every natural `n`; only the separate surjectivity clause has `n >= 2`.
- `boundary-audit --fail-on-contradicted`: 640 rows, 228 `not_applicable`, no template cluster and no contradicted disposition.
- `coverage-checklist`: 2 A pages, 206 harvested results, 0 errors, 0 warnings.
- `content-policy`: 94 scoped items, 0 errors, 0 warnings.
- `validate-plan`: pass on the current spliced plan. `research/plan-spec.json` was not edited.
- `rendercheck`: 98 scoped item/page files clean. `prosecheck --warnings`: 98 files, 0 errors, 0 warnings.
- `finite-smoke`: 0 registered checks apply to this batch; this is not evidence for any theorem.
- `risk-report`: all 80 proof-bearing items scored. High/critical risk reviews remain the Step-6 Alpha's role and were not fabricated by this reader.
- `fwdcheck` and `extcheck`: pass.
- Repo-wide `depcheck`: one pre-existing out-of-scope error remains on published `rem-sine-period-arc-length-integrand-is-nonelementary` (`proved_here: false` without `verification.sources_checked`). Batch-local filtering of the JSON result found no error or warning for any of the 94 assigned ids. This reader did not edit that unrelated published item.

No judging, publishing, commit, push, item addition, item deletion, or id change was performed.

## Per-page verdicts

- `the-galois-correspondence` — **pass after repair**. R3-1 was repaired in the two affected theorem Statements/citations and page summary. No other title, Statement, proof-step, citation, boundary, or provenance defect remained among its 30 items.
- `the-galois-correspondence-examples` — **pass after propagated citation repair**. The two cubic `[L1]` rows were narrowed with R3-1. No additional defect was found among its 15 items.
- `modules-over-a-pid-and-canonical-forms` — **pass after repair**. R3-2, R3-3, R3-4, R3-6, and R3-8 were repaired. No other defect remained among its 37 items.
- `modules-over-a-pid-and-canonical-forms-examples` — **pass after repair**. R3-5 was repaired. No additional defect was found among its 12 items.

**Count actually opened:** 94/94 assigned items, plus 108 distinct external dependency items, for 202 unique item files; four page files were also opened. Every one of the 80 proof-bearing assigned items and all 125 recorded citation edges were checked.

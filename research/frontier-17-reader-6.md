# Frontier 17 — independent reader 6 report

Run `frontier-17`, Step 6a, batch 6. Scope: `outer-measure-and-the-caratheodory-extension-theorem` and `outer-measure-and-the-caratheodory-extension-theorem-examples` from `research/frontier-17-batch-6.pages.json`.

## Fatal findings

### R6-1 — `prop-caratheodory-extension-compares-with-other-extensions` — fixed — fatal

**Location.** Facts & Assumptions `[L1]`, proof step 1.1, and the corresponding citation/input rows in `research/frontier-17-batch-6.proof-contracts.json`.

**Defect.** The item cited `thm-caratheodory-extension-theorem` for the assertion that the induced outer measure restricts to the Carathéodory extension. That dependency's Statement begins with the hypothesis “Assume the Axiom of Countable Choice,” but this proposition neither assumes countable choice nor supplies it in its Given paragraph. The inference was therefore unlicensed even though the needed equality was already included in the proposition's own hypothesis `mu = mu*|sigma(A_0)`.

**Repair.** Removed the unlicensed `[L1]`, renumbered the remaining facts, and made step 1.1 use the given restriction identity directly. Updated the contract citation and step-input maps, including the previously opening-only quote for countable subadditivity. No Statement, title, dependency list, page list, or manifest entry changed. The item had no `verification.judge` block to delete. Reflow was unchanged and targeted precheck passes.

**Severity.** `fatal` — an inference cited a theorem without its load-bearing countable-choice hypothesis.

## Nonfatal and polish findings

### R6-2 — `thm-countable-disjoint-caratheodory-splitting` — polish

**Location.** Proof step 2.1 and contract boundary row `degenerate`.

**Defect.** From
`mu*(A) >= sum_k mu*(A cap E_k) + mu*(A setminus E)` and the two subadditive upper bounds, the text says that equality holds in both comparisons “even when the series is +infinity.” That conclusion does not follow when the complementary remainder has infinite outer measure: equality after adding an infinite remainder cannot identify the union term.

**Evidence and disposition.** Apply step 1.1 again with test set `A cap E`; its complementary remainder relative to `E` is empty, so taking the supremum gives the missing lower bound `mu*(A cap E) >= sum_k mu*(A cap E_k)` without cancellation. Countable subadditivity gives the reverse bound. This is a competent-reader sub-30-second bridge, so the proof text was not put through a repair cycle. The false contract assertion that no cancellation issue occurred was replaced by this actual boundary disposition.

**Severity.** `polish` under the 30-second rule.

### R6-3 — `fs-premeasure-extensions-are-always-unique` — polish

**Location.** Refutation step 1.1.

**Defect.** The cited Borel-generator theorem says that finite half-open intervals generate the Borel sigma-algebra. From the fact that the extended-endpoint interval algebra contains those intervals, only `B(R) subseteq sigma(A_0)` follows. The reverse inclusion also needs the elementary observation that every extended-endpoint half-open interval is Borel and finite unions remain Borel.

**Evidence and disposition.** The missing inclusion is immediate from rays being open or closed and finite unions of Borel sets being Borel. This is a sub-30-second bridge; no repair cycle was opened.

**Severity.** `polish`.

### R6-4 — `cex-nonsigma-finite-premeasure-has-distinct-extensions` — polish

**Location.** Counterexample step 1.1.

**Defect.** The same Borel-generation sentence as R6-3 proves only one inclusion from the cited generator theorem. The proof also needs that every extended-endpoint interval, and hence every finite union of them, is Borel.

**Evidence and disposition.** This is the same immediate ray/finite-union argument and is a sub-30-second bridge. No repair cycle was opened.

**Severity.** `polish`.

### R6-5 — `lem-metric-outer-measure-boundary-layer-continuity` — polish

**Location.** Proof step 3.1 and its contract input map.

**Defect.** Step 3.1 uses the fact that a bounded nonnegative real series has tails tending to zero, but its listed inputs are only steps 1.1, 2.1, and `algebra`; no explicit fact states the tail result.

**Evidence and disposition.** Step 2.1 bounds both parity partial-sum sequences by the finite number `mu*(A)`. Their suprema are finite, and the definition of a nonnegative series then gives vanishing tails by the standard supremum argument. This is a sub-30-second bridge, so it is polish rather than fatal and the proof text was left unchanged.

**Severity.** `polish`.

### R6-6 — proof-contract citation clauses — fixed — nonfatal

**Item ids and exact locations.** Contract citation entries for `thm-caratheodory-outer-measure-theorem` `[L2]`; `thm-regular-outer-measures-are-continuous-from-below` `[L2]`; `thm-covering-cost-construction-produces-an-outer-measure` `[L2]`; `thm-caratheodory-extension-theorem` `[L1]` and `[L2]`; `thm-premeasure-induced-outer-measure-is-regular` `[L1]`; `lem-sigma-finite-caratheodory-sets-have-generated-measurable-hulls` `[L1]` and `[L2]`; `thm-caratheodory-domain-is-the-completion-under-sigma-finiteness` `[L1]`, `[L2]`, and `[L3]`; and `thm-borel-sets-are-caratheodory-measurable-for-metric-outer-measures` `[L2]`.

**Defect.** The item Facts on disk were faithful, but these durable `quote` fields recorded only opening fragments or omitted a source hypothesis, domain, or conclusion. The clearest examples were “If A and B are at most countable” without the product conclusion, and Carathéodory/extension clauses without their outer-measure or countable-choice hypotheses.

**Repair.** Replaced each contract fragment by the smallest on-disk source clause preserving the domain, hypotheses, direction, and conclusion. The citation-fidelity gate confirms every replacement occurs in its cited item.

**Severity.** `nonfatal` — the rendered Facts were accurate, but the durable citation receipt was not.

### R6-7 — proof-contract boundary dispositions — fixed — nonfatal

**Item ids and exact locations.** `thm-countable-disjoint-caratheodory-splitting` boundary `degenerate`; `thm-premeasure-induced-outer-measure-is-regular` boundary `empty`; `thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation` boundary `zero`.

**Defect.** The first claimed the proof never faced infinite cancellation; the second claimed step 1.1 necessarily produced the empty hull; the third claimed step 2.1 permitted zero approximation error although all error parameters are strictly positive.

**Repair.** Replaced them with the actual dispositions: apply the finite split to `A cap E` before taking the supremum; use the explicit all-empty covers (or any constructed zero hull) at the empty set; and keep positive errors while allowing the set itself to have zero outer measure.

**Severity.** `nonfatal` — inaccurate audit evidence, with the underlying mathematical claims true.

## Changes made

- Repaired `items/prop-caratheodory-extension-compares-with-other-extensions.md` as described in R6-1.
- Updated `research/frontier-17-batch-6.proof-contracts.json` for R6-1, R6-2, R6-6, and R6-7.
- Added no item and deleted no item. The batch manifest and `research/plan-spec.json` were not changed. No published item was edited.
- No stale `verification.judge` block existed on the rewritten item.

## Provenance and boundary result

Every one of the 43 scoped mathematical-content items carries both component provenance fields. The batch notes give a statement/proof rationale per item, and the coverage ledger records two independent textbook treatments with exact section/result headings and fetch hashes. The three `ai-generated` constructions (`ex-zero-one-outer-measure-on-a-two-point-set`, `cex-three-point-outer-measure-has-only-trivial-caratheodory-sets`, and `cex-two-point-outer-measure-need-not-be-regular`) were checked by exhausting their finite power sets; each witness is valid. No `ai-generated` Statement or construction is a dependency target.

All 288 boundary rows were read. Apart from the rows identified above, the empty/zero/one/degenerate/endpoint/nonempty-choice and both iff-direction dispositions agree with the item text. The finite-smoke gate reports zero registered checks for this batch; that is not treated as positive evidence.

## Gates run

- `node tools/tsx-run.mjs tools/reflow.mts items/prop-caratheodory-extension-compares-with-other-extensions.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-caratheodory-extension-compares-with-other-extensions.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/frontier-17-batch-6.proof-contracts.json --strict` — 0 errors, 0 warnings, 36/36 checked.
- `node tools/citation-fidelity.mjs research/frontier-17-batch-6.proof-contracts.json --fail-on-missing-quote` — 95 citations, no missing quote or widening candidate.
- `node tools/boundary-audit.mjs research/frontier-17-batch-6.proof-contracts.json --fail-on-contradicted --fail-on-template` — 288 rows, no template cluster or contradicted disposition detected.
- `node tools/finite-smoke.mjs research/frontier-17-batch-6.proof-contracts.json` — 0 errors, 0 registered checks.
- `node tools/content-policy.mjs research/frontier-17-batch-6.pages.json` — 43 scoped items, 0 errors, 0 warnings.

## Per-page verdict and coverage

- `outer-measure-and-the-caratheodory-extension-theorem`: **pass after repair**. R6-1 was fixed; R6-2, R6-3, and R6-5 are recorded polish; contract-only findings R6-6 and R6-7 were fixed. The title and every item title/Statement agree with the proof after repair.
- `outer-measure-and-the-caratheodory-extension-theorem-examples`: **pass with polish**. R6-4 is the only page-specific proof gap; every example/counterexample witness is valid. The B page has no authored body, as required.

I opened all **43 scoped items** and all **30 distinct external dependency items**, for **73 unique item files**, plus both page composition files, the batch notes, coverage ledger, manifest, and all 36 proof contracts. Every numbered proof step and every `[F#]`/`[A#]`/`[L#]` citation in the batch was read; there were no coverage exceptions.

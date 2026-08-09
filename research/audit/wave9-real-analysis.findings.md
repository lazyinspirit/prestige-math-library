# Wave 9 Real Analysis — Audit-Beta A1/A2 Findings

## Disposition and coverage

This record began as the proposal-stage audit for batch `wave9-real-analysis` at baseline `6fb3b6c` and now includes the authorized A4 application. The scoped pair is `monotone-functions-and-discontinuities` / `monotone-functions-and-discontinuities-examples`: 2 pages, 43 items, and 34 proof-bearing items. The A0 baseline had 485 declared relationships (395 published-backward and 90 same-batch); the approved Baire citation/dependency removal leaves 484 final relationships (394 published-backward and 90 same-batch).

I read both pages, every scoped item, every one of the 286 numbered proof steps, all 389 distinct Fact-to-source citation mappings, the exact cited Statement/Definition/Example clauses, the non-proof dependency citations needed for semantic verification, all Remarks, and the A-page summary. All 34 proof-bearing items have contracts; all 272 standard boundary dispositions are present. No mathematical or citation exception was left unread.

The baseline proof-contract gate checked 34/34 contracts with zero warnings and exactly two errors. Both were honest unused-Fact failures, subsequently authorized and removed; no use was fabricated:

- `thm-baire-one-continuity-points`: `L3 -> thm-continuity-iff-oscillation-zero` has no proof-step use.
- `fs-additive-implies-linear`: `L5 -> thm-cauchy-functional-equation-regularity` has no proof-step use.

The structural risk report routes all 34 proof-bearing items to the later Alpha/refuter pass: 31 critical and 3 high. The three high-tier ids are `cor-cantor-function-is-continuous`, `cor-no-function-is-continuous-exactly-on-q`, and `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`; the other 31 are critical. This is routing, not an adverse mathematical verdict.

## A1 provenance determinations

The durable ledger contains 43 unique rows, each following a real reputable literature/web search and each carrying at least one working source URL. After the three A3 overrides, statement classification is 17 `literature-derived` / `exact-source` and 26 `ai-altered` / `semantic-source`; there are no `ai-generated` statements, no URL-free `established-knowledge` rows, and no classification uncertainties requiring Alpha concurrence.

The 17 exact-source statements are:

- `thm-froda`
- `thm-continuous-injection-on-an-interval-is-strictly-monotone`
- `thm-continuous-inverse`
- `cor-cantor-function-is-continuous`
- `thm-continuity-iff-oscillation-zero`
- `def-dirichlet-and-thomae-functions`
- `thm-dirichlet-and-thomae-continuity-sets`
- `thm-semicontinuous-evt`
- `def-baire-class-one`
- `def-additive-function`
- `lem-additive-is-q-linear`
- `lem-additive-bounded-above-on-an-interval-is-linear`
- `fs-intermediate-value-property-implies-continuity`
- `fs-additive-implies-linear`
- `ex-monotone-function-discontinuous-exactly-at-the-rationals`
- `ex-indicator-of-q-is-baire-class-two-not-one`
- `cex-continuous-injection-on-a-non-interval-need-not-be-monotone`

The 26 semantic-source statements are:

- `def-monotone-function`
- `thm-monotone-one-sided-limits-exist`
- `def-classification-of-discontinuities`
- `thm-monotone-discontinuities-are-jumps`
- `thm-monotone-with-prescribed-discontinuity-set`
- `rem-cantor-function-increases-only-on-a-null-set`
- `def-oscillation`
- `lem-oscillation-superlevel-sets-are-closed`
- `thm-discontinuity-set-is-f-sigma`
- `thm-continuity-set-realisation`
- `cor-no-function-is-continuous-exactly-on-q`
- `def-intermediate-value-property`
- `def-semicontinuity`
- `thm-semicontinuity-level-set-characterisation`
- `lem-baire-category-in-a-closed-interval`
- `thm-baire-one-continuity-points`
- `thm-cauchy-functional-equation-regularity`
- `lem-hamel-basis-exists`
- `ex-thomae-values-and-oscillation-computed`
- `ex-froda-is-sharp`
- `ex-continuous-inverse-gives-the-nth-root`
- `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `ex-locally-unbounded-finite-everywhere`
- `ex-hamel-basis-additive-function`
- `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous`
- `cex-upper-semicontinuous-need-not-attain-its-infimum`

Proof classification is 22 `ai-altered`, 12 `ai-generated`, and 9 `not-applicable`. The 12 locally generated proofs are `cor-cantor-function-is-continuous`, `lem-oscillation-superlevel-sets-are-closed`, `thm-continuity-set-realisation`, `cor-no-function-is-continuous-exactly-on-q`, `lem-hamel-basis-exists`, `ex-froda-is-sharp`, `ex-continuous-inverse-gives-the-nth-root`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`, `ex-locally-unbounded-finite-everywhere`, `ex-hamel-basis-additive-function`, `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous`, and `cex-upper-semicontinuous-need-not-attain-its-infimum`. The 9 non-proof items are `def-monotone-function`, `def-classification-of-discontinuities`, `rem-cantor-function-increases-only-on-a-null-set`, `def-oscillation`, `def-dirichlet-and-thomae-functions`, `def-intermediate-value-property`, `def-semicontinuity`, `def-baire-class-one`, and `def-additive-function`; the remaining 22 proofs are source-adapted.

Class (c) application: all 43 ledger determinations were applied as component provenance and reader-visible source-reference updates. Every legacy `origin: session` field was preserved. No scoped item had a legacy one-axis `authorship` field. Five items also received approved material repairs, leaving 38 pure-retag items.

## A2 repairs approved and applied at A4

### 1. `def-oscillation` — class (a), unambiguous falsehood

Current text first declares `omega_f(emptyset) = -infinity`, then says both values are nonnegative, every value for bounded `f` is a real in `[0,2M]`, and extended values occur only for unbounded `f`. The empty-set value refutes all three unrestricted formulations.

Applied heading:

> Both values are well posed; point oscillation and nonempty-set oscillation are nonnegative

Applied replacement for the final bounded-value prose:

> Thus `omega_f(S) <= 2M` for every `S subseteq A`. If `S` is nonempty, `omega_f(S)` is a real number in `[0,2M]`, and every point oscillation is also a real number in `[0,2M]`. The convention `omega_f(emptyset) = -infinity` remains the single empty-set exception. Apart from that exception, an infinite extended value can occur only when `f` is unbounded.

The displayed definition and convention remain unchanged.

### 2. `thm-baire-one-continuity-points` Remark — class (a), unambiguous falsehood

Current text says the Baire-one hypothesis is used “Only in steps 1.3 and 2.2” and that everything after step 4.1 is independent of it. Step 1.3 is the generic continuity-set `G_delta` claim from `L9`, while the approximating sequence is fixed in step 1.1, its continuity is used in steps 2.1 and 4.2, and its pointwise convergence is used in steps 2.2 and 4.1. Step 4.2 is after step 4.1 and still uses continuity of `f_N`.

Applied replacement Remark:

> **Where the hypothesis of Baire class one is used.** The hypothesis enters through the approximating sequence fixed in step 1.1. Pointwise convergence is used in steps 2.2 and 4.1, and continuity of the approximants is used in steps 2.1 and 4.2. These facts establish the refinement claim in step 6.1. From step 7.1 onward the proof uses only that claim, oscillation, and category.

### 3. A-page summary — class (a), unambiguous falsehood

`library/real-analysis/monotone-functions-and-discontinuities.md` says without qualification that for a monotone function “the left limit [is] a supremum and the right limit an infimum.” Those formulas are for the nondecreasing case; for a nonincreasing function the roles reverse, as the cited theorem states.

Applied replacement sentence:

> A monotone function on an interval has every well-posed one-sided limit. For a nondecreasing function the left limit is a supremum and the right limit an infimum; for a nonincreasing function the roles reverse.

### 4. `thm-continuity-set-realisation` Remark — class (a), unambiguous falsehood

Current text says “The theorem does not produce a monotone or a bounded example” and immediately says the constructed function takes values in `[-1,1]`. The construction therefore does produce a bounded example.

Applied A3 replacement:

> **The construction does not guarantee monotonicity, and the theorem does not claim it.** The function built above always takes values in `[-1,1]`, so it is bounded; no further behaviour beyond its continuity set is asserted.

The subsequent monotone-continuity-set discussion can remain unchanged.

### 5. `thm-baire-one-continuity-points` Fact `L3` — class (b), citation precision

`L3` cites `thm-continuity-iff-oscillation-zero`, but no proof step cites `L3`. Claim 4 and the discontinuity-set exhaustion are already licensed by `L9`; the proof does not need `L3`. The strict contract correctly refuses an empty `uses` list.

Applied repair: remove `L3` and remove `thm-continuity-iff-oscillation-zero` from `deps`, since that target occurs nowhere else in the item. A3 expressly delegated this Fact-inventory cleanup for A4; no decorative proof citation was added.

### 6. `fs-additive-implies-linear` Fact `L5` — class (b), citation precision

`L5` cites `thm-cauchy-functional-equation-regularity`, but no refutation step cites `L5`; the witness refutes the false statement without the regularity theorem. The theorem is independently cited in the Statement and Remarks, so its dependency remains legitimate.

Applied repair: remove Fact `L5` only and keep `thm-cauchy-functional-equation-regularity` in `deps`. A3 expressly delegated this cleanup for A4; no refutation-step use was fabricated.

### 7. `thm-semicontinuous-evt` step 9.1 — class (b), citation precision

Step 9.1 derives the lower-semicontinuous half by applying claim 1 to `-f` and cites `L1`. But `L1` states only the strict-sublevel representation for the given upper-semicontinuous function; it does not state the negation duality used by this step. `def-semicontinuity`, under “Negation exchanges the two,” does supply that duality.

Applied repair: add the faithful symmetric Fact

> `[L7]` For any `h : K -> R`, `h` is upper semicontinuous if and only if `-h` is lower semicontinuous; hence a lower semicontinuous `f` makes `-f` upper semicontinuous (`def-semicontinuity`, “Negation exchanges the two”).

and change the step 9.1 citation to `[step 8.1, L7]`. No dependency change is needed.

The affected contract entries were regenerated from final text, including three downstream contracts whose exact `def-oscillation` quote changed. Strict validation now checks 34/34 contracts with zero errors and zero warnings.

## Recorded but not chased under triage

- The A-page summary has 11 nonempty prose paragraphs and substantially exceeds the `SCHEMA.md` requirement of exactly two prose paragraphs under 150 words each. It also contains page/companion/reading-order survey prose. This is recorded as prose-shape debt; only the specifically approved false one-sided-limit sentence was repaired.
- In `thm-monotone-with-prescribed-discontinuity-set`, step 4.3 leaves the `N <= k0` extension implicit. A competent reader closes it immediately by passing to a later partial sum and using monotonicity, so no repair is proposed.
- In `thm-froda`, Fact `L3` repeats the link to `lem-rat-embeds-dense` for two clauses. The single distinct Fact-to-source contract is sufficient; this is a minor citational quirk.
- The “exactly one way” wording in `lem-hamel-basis-exists` is consistent with the standard Hamel-basis convention once the item’s fixed injective finite support and coefficient uniqueness are read. The located literature uses the same convention, so no repair or escalation remains.

## Wave 8 final-text reconciliation barrier

Exactly 65 declared relationships run from 29 scoped Wave 9 sources into 17 targets owned by `wave8-real-analysis-cantor-continuity`. None was edited. A6 must reopen every edge below against final Wave 8 text:

- `cor-continuous-image-of-an-interval-is-an-interval` (3) <- `thm-continuous-inverse`, `def-intermediate-value-property`, `fs-intermediate-value-property-implies-continuity`
- `cor-q-is-meager-and-not-g-delta` (1) <- `cor-no-function-is-continuous-exactly-on-q`
- `def-cantor-function` (3) <- `cor-cantor-function-is-continuous`, `rem-cantor-function-increases-only-on-a-null-set`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `def-cantor-set` (3) <- `cor-cantor-function-is-continuous`, `rem-cantor-function-increases-only-on-a-null-set`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `def-continuity-real` (26) <- `def-classification-of-discontinuities`, `thm-monotone-discontinuities-are-jumps`, `thm-froda`, `thm-monotone-with-prescribed-discontinuity-set`, `thm-continuous-injection-on-an-interval-is-strictly-monotone`, `thm-continuous-inverse`, `cor-cantor-function-is-continuous`, `thm-continuity-iff-oscillation-zero`, `thm-discontinuity-set-is-f-sigma`, `thm-dirichlet-and-thomae-continuity-sets`, `thm-continuity-set-realisation`, `cor-no-function-is-continuous-exactly-on-q`, `def-intermediate-value-property`, `def-semicontinuity`, `thm-semicontinuity-level-set-characterisation`, `def-baire-class-one`, `thm-baire-one-continuity-points`, `thm-cauchy-functional-equation-regularity`, `fs-intermediate-value-property-implies-continuity`, `ex-continuous-inverse-gives-the-nth-root`, `ex-locally-unbounded-finite-everywhere`, `ex-indicator-of-q-is-baire-class-two-not-one`, `ex-hamel-basis-additive-function`, `ex-bounded-with-no-local-extremum-and-nowhere-semicontinuous`, `cex-upper-semicontinuous-need-not-attain-its-infimum`, `cex-continuous-injection-on-a-non-interval-need-not-be-monotone`
- `def-f-sigma-g-delta` (4) <- `thm-discontinuity-set-is-f-sigma`, `thm-continuity-set-realisation`, `cor-no-function-is-continuous-exactly-on-q`, `thm-baire-one-continuity-points`
- `def-measure-zero-and-content-zero` (2) <- `rem-cantor-function-increases-only-on-a-null-set`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `def-nowhere-dense-meager` (1) <- `thm-baire-one-continuity-points`
- `lem-monotone-with-interval-image-is-continuous` (3) <- `thm-continuous-inverse`, `cor-cantor-function-is-continuous`, `def-intermediate-value-property`
- `lem-nondegenerate-interval-is-not-null` (1) <- `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `thm-algebra-of-continuous-functions` (7) <- `thm-continuous-inverse`, `thm-baire-one-continuity-points`, `fs-intermediate-value-property-implies-continuity`, `ex-continuous-inverse-gives-the-nth-root`, `ex-indicator-of-q-is-baire-class-two-not-one`, `cex-upper-semicontinuous-need-not-attain-its-infimum`, `cex-continuous-injection-on-a-non-interval-need-not-be-monotone`
- `thm-baire-category-r` (1) <- `lem-baire-category-in-a-closed-interval`
- `thm-cantor-function-properties` (3) <- `cor-cantor-function-is-continuous`, `rem-cantor-function-increases-only-on-a-null-set`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `thm-cantor-set-properties` (2) <- `rem-cantor-function-increases-only-on-a-null-set`, `ex-cantor-function-maps-a-null-set-onto-the-unit-interval`
- `thm-composition-of-continuous-functions` (2) <- `thm-continuous-inverse`, `fs-intermediate-value-property-implies-continuity`
- `thm-continuity-preimage-characterisation` (1) <- `thm-baire-one-continuity-points`
- `thm-intermediate-value` (2) <- `thm-continuous-injection-on-an-interval-is-strictly-monotone`, `fs-intermediate-value-property-implies-continuity`

The counts above sum to 65 and the union of source ids has cardinality 29.

## A4 application record and exact handoff counts

- Material item ids: 5 — `def-oscillation`, `thm-baire-one-continuity-points`, `thm-continuity-set-realisation`, `fs-additive-implies-linear`, `thm-semicontinuous-evt`.
- Approved page repair: 1 narrow sentence in `library/real-analysis/monotone-functions-and-discontinuities.md`; the overlong summary was not otherwise rewritten.
- Pure-retag items: 38. Component provenance/source updates: 43/43; every `origin` preserved.
- Provenance rows: 43/43; exact-source 17, semantic-source 26; URL-free 0; unresolved provenance 0.
- Proof dispositions: `ai-altered` 22, `ai-generated` 12, `not-applicable` 9.
- Proof contracts: 34/34; numbered steps 286/286; distinct citation mappings 388/388; boundary cases 272/272.
- Applied repair records: class (a) 4, class (b) 3, class (c) 43.
- Strict final result: 34/34 checked, 0 errors, 0 warnings. The two baseline unused-Fact errors are closed without fabricated uses.
- Material verification cleanup: stale `verification.audited` and `verification.judge` removed from all 5 materially changed items; `verification.precheck` retained.
- A3 ledger overrides applied: `def-intermediate-value-property` is semantic-source; `thm-continuity-set-realisation` now describes its decreasing-open-set/opposite-sign construction; `fs-intermediate-value-property-implies-continuity` now records the `sin(1/x)` to `psi(1/x)` adaptation.
- Escalations: 34 Alpha/refuter risk routes; 2 owner-only Fact-deletion decisions; 0 provenance-classification escalations.
- Dependency reconciliation: 65 edges, 29 Wave 9 source ids, 17 Wave 8 target ids, all listed above.
- Namespaced paths updated: `research/audit/wave9-real-analysis.provenance.jsonl`, `research/audit/wave9-real-analysis.findings.md`, `research/audit/wave9-real-analysis.proof-contracts.json`.

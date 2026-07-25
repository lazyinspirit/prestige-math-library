# Verification benchmark: 150 items, 50 classified defects

FROZEN 2026-07-25, before any remediation. This is a **labelled dataset**, and it is the only one
this project has. Every claim about whether a pipeline change helped must be measured against it,
not asserted. Do not edit a verdict without re-running the verification that produced it.

## How it was produced

Nine read-only Opus verifiers, one per page-batch, each instructed to read every item in full
**and every item cited in its Statement and Facts & Assumptions in full**, and to rule CERTIFY
(no reservation whatsoever) or WITHHOLD (anything they would hedge about), biasing hard toward
WITHHOLD. They were told not to defer to any earlier adjudication.

**Result: 100 CERTIFY, 50 WITHHOLD (33%).** The rate is uniform across every page and both
authoring rounds. **Nothing in 150 items was a false theorem.**

## What this measures that nothing else does

`precheck` checks proof shape. `depcheck` checks that declared deps resolve and stay acyclic.
The judge is told to treat cited items as assumed-correct and is not shown them. So **no gate in
the pipeline reads the item that a fact cites**, and the dominant defect class below is invisible
to all three. That is the finding this benchmark exists to hold onto.

## Judge performance against this ground truth

| configuration | rejects | real caught | recall | precision |
|---|---|---|---|---|
| refuter, no context | 29 | 6/6 | 100% | 21% |
| refuter + full cited context | 21 | 5/6 | 83% | 24% |
| certify-framing + context | 14 | 2/6 | 33% | 14% |

Measured on the 24 twice-rejected items only, so precision here is *given a rejection*, not
population behaviour. Conclusion: **do not tune the judge.** High recall, ~20-25% precision is a
property of adversarial refutation. Use it as a screen; never as a work queue.

## Defect classes

| class | n | description |
|---|---|---|
| **A. Mis-attribution** | 14 | a fact cites an item for a claim that item does not make |
| **B. False claim in Remarks** | 8 | Remarks are live prose and were held to Statement standard |
| **C. Statement exceeds proof** | 8 | a dual, converse or "in particular" asserted but never proved |
| **D. Independence without Con(ZF)** | 5 | metamathematical result stated unconditionally |
| **E. Well-definedness undischarged** | 2 | violates WORKFLOW.md's own hard rule |
| **F. Structural gap** | 5 | needs new mathematical content, not re-citation |
| **G. ‡ wiring** | 2 | external result inlined, so the marker cannot fire |
| **H. Cascade** | 3 | no intrinsic defect; blocked on a withheld dependency |
| **I. Real logical gap** | 3 | the proof as written does not close |

Class A is the dominant one and the cheapest to prevent: it is what the new `[L#]` discipline in
the author brief, and `tools/citecheck.mjs`, are aimed at.

## The 50, by page

### order-zorn-and-the-axiom-of-choice (7 of 35)
- `def-upper-bound` **B** — Remarks claim antisymmetry is "the only place really needed"; refuted by `thm-bourbaki-witt` step 5.1, which uses it essentially.
- `def-axiom-of-choice` **D** — Gödel 1938 / Cohen 1963 stated without the consistency hypothesis.
- `lem-finite-choice` **F** — "a family of exactly `n` nonempty sets" is undefined at this point; step 2.1's cardinality subtraction is uncited.
- `lem-extremal-cut-closed-under-f` **A** — reflexivity/transitivity/strict order used with no fact and `def-partial-order` absent from `deps`. Same defect in `lem-extremal-cut-closed-under-sups` and `lem-admissible-is-chain`.
- `cor-ac-iff-zorn` **B** — "every theorem proved with Zorn costs exactly AC, no more and no less"; refuted by `thm-ultrafilter-lemma` and by its own next sentence.
- `fs-zorn-provable-in-zf` **G** — Cohen inlined as bare `[A1]`. *(fixed)*
- `fs-maximal-is-greatest` **B** — "any poset with two incomparable elements refutes it" is false (`a < c`, `b < c`).

### suprema-and-infima (5 of 17)
- `lem-reflection` **A** — `[L1]`/`[L3]` attribute ordered-field facts to `lem-of-sign-rules`, which states none of them; the only substantive `deps` entry is the wrong one. Load-bearing hinge for three later items.
- `lem-max-is-sup` **C** — inf/min dual asserted in the Statement, never proved.
- `lem-finite-set-has-max` **C** — Statement claims it licenses `max` over **rationals** in `lem-cauchy-bounded`, a published item on an earlier page; the displayed statement is about ℝ.
- `lem-sup-scale` **A** — `[L2]` cites `prop-of-multiply-inequalities` while explicitly disclaiming its use; spurious `deps` entry.
- `rem-sup-conventions` **B** — monotonicity plus `sup ℝ = +∞` does not force `sup ∅ = −∞`; it needs `sup{x} = x`.

### suprema-and-infima-examples (1 of 8)
- `ex-inf-of-reciprocals` **C** — "and `H` has no minimum" asserted; no cited fact supports it.

### order-zorn-and-the-axiom-of-choice-examples (2 of 12)
- `ex-russells-socks` **A** — `[A1]` calls Fraenkel-Mostowski permutation models models of **ZF**; they are models of ZFA, and the transfer needs Jech-Sochor.
- `cex-zorn-hypothesis-fails` **A** — `[L6]` states Zorn with no AC hypothesis while `thm-zorn` opens "Assume the Axiom of Choice"; `def-axiom-of-choice` absent from `deps`.

### filters-and-ultrafilters (4 of 12)
- `def-ultrafilter` **B** — "no greatest filter, **so** ultrafilters are plentiful" is a non sequitur; and "nothing above asserts that any ultrafilter exists" contradicts the item's own bullets. *(fixed)*
- `lem-union-of-chain-of-filters` **A** — `[L2]` attributes "upper bound" to `def-partial-order`, which does not define it; `def-upper-bound` absent from `deps`.
- `thm-ultrafilter-lemma` **C** — "there are **many** ultrafilters extending the filter of tails" asserted with no proof, citation or choice flag.
- `rem-choice-strengths` **G** — asserts Feferman 1965 and Halpern-Lévy 1971 in its own voice with the ‡ machinery bypassed. *(fixed)*

### ordinals-and-transfinite-recursion (7 of 23)
- `lem-omega-least-limit-ordinal` **C+A** — "least limit ordinal" proves only ∈-minimality; comparability uncited. `[L3]`'s stated derivation of `n < σ(n)` is wrong.
- `rem-choice-ledger` **B** — three defects, including the same "costs exactly AC" falsehood as `cor-ac-iff-zorn`, plus **a session process note in live prose** ("which is being written alongside this one").
- `def-cardinal` **E** — `|X|` built from an instantiated well-order with no independence argument; `justified_by` empty.
- `lem-ordinal-trichotomy` **A** — `[L2]` attributes inclusion's order axioms to `def-well-order`. *(fixed)*
- `cor-ac-iff-well-ordering` **B+D** — "an equivalence of ZF-theorems" reads as asserting all three are ZF theorems; "each strictly weaker than AC" stated bare.
- `fs-transfinite-induction-needs-choice` **D** — DC "strictly weaker than AC and strictly stronger than ZF" asserted uncited.
- `def-well-order` **D** — converse "not provable in ZF" with no consistency hypothesis.

### roots-and-rational-powers (8 of 22)
- `lem-power-laws` **I** — step 2.1's iterated-power successor uses the natural addition law at an exponent pair the IH does not supply; the full law is discharged only later at 3.1.
- `lem-rational-power-laws` **I** — step 4.1's "some base is 0" branch is wrong for `(a>0, b=0)` on the `a^{r+s}` identity.
- `fs-rational-power-of-negative-base` **A** — `[A2]`/`[A3]` assert `−8 < 0` and `2³ = 8` **in ℝ** citing `def-rat-order`, which orders ℚ.
- `def-integer-power` **E** — `a^{-n} := (a^n)^{-1}` asserts `a^n ≠ 0` in bare prose; `lem-of-no-zero-divisors` absent, `justified_by` empty.
- `def-finite-sum` **C** — `π₁(g(n)) = n` asserted; needs an induction and `thm-induction-principle` is not in `deps`.
- `def-rational-power` **A** — positivity for negative `r` cites `lem-power-monotone`, which is stated for naturals only.
- `thm-am-gm` **F** — uses `2^j` as a **natural number**; the library has no ℕ-exponentiation (`def-integer-power` recurses in ℝ).
- `fs-negative-has-square-root` **C** — step 1.2's odd-power bijection claim does not cover injectivity on the negatives; parity of a natural is nowhere defined.

### sequences-and-limits (12 of 18)
- `lem-limit-unique` **A**, `lem-convergent-implies-cauchy` **A**, `lem-convergent-implies-bounded` **A** — all three use adding inequalities / translation invariance / mixed `≤`,`<` transitivity with `lem-of-add-order` absent from `deps` entirely.
- `lem-null-times-bounded` **A** — Remark cites `lem-limit-of-tail` for a boundedness claim it does not make.
- `lem-reciprocal-of-null-diverges` **A** — same misattribution, plus three uncited `deps`.
- `lem-limit-abs` **C** — universal converse "for `x ≠ 0` the converse fails" never proved.
- `lem-limit-preserves-order` **C** — two "in particular" claims argued only in a Remark.
- `fs-limit-preserves-strict-inequality` **B** — Remark refutes its own first clause.
- `rem-sequence-conventions` **B** — restates "frequently" as "for infinitely many"; `def-sequence` defines it cofinally, and "infinite" is out of scope on that page.
- `def-divergence-to-infinity` **H**, `lem-subsequence-inherits-limit` **H**, `fs-subsequence-convergence-implies-convergence` **H** — no intrinsic defect; blocked on withheld dependencies.

### countability-and-uncountability (4 of 19)
- `lem-subset-of-countable` **F**, `lem-countable-iff-surjection-from-n` **F**, `def-countable` **F** — all three use `m < n ⟺ m ∈ n` on ℕ, which is proved nowhere before this page (`def-nat-order` is additive and records it only as an unproved Remark; the proof is on the ordinals page, plan index 99 vs 17).
- `rem-continuum-hypothesis` **D** — "every uncountable subset of `𝒫(ℕ)` is equinumerous with `𝒫(ℕ)`" is a **ZFC** equivalence asserted unqualified. Refuted over ZF by this page's own `fs-infinite-has-countable-subset-in-zf`.

## Cross-page defects: only visible with whole-library context

These are the ones a per-page verifier structurally cannot catch, and they are the justification
for a cross-page pass:

1. `lem-finite-set-has-max` claiming to license notation in `lem-cauchy-bounded` on an **earlier published page**.
2. The ℕ order/membership fact used on the countability page but proved only on a **later** page.
3. The identical false "costs exactly AC" sentence in **both** `cor-ac-iff-zorn` and `rem-choice-ledger`, the item the library treats as the authoritative ledger.
4. `rem-suslin-hypothesis-independent` and `rem-suslin-line-non-ccc-square-unverified` taking **opposite positions** on the same claim.
5. The `rem-riesz-markov-kakutani` **id collision** between two parallel authors, which silently overwrote a whole item body while every checker stayed green.

## Verdict counts by page

| page | verified | certify | withhold |
|---|---|---|---|
| order-zorn-and-the-axiom-of-choice | 23 | 16 | 7 |
| ordinals-and-transfinite-recursion | 23 | 16 | 7 |
| roots-and-rational-powers | 22 | 14 | 8 |
| countability-and-uncountability | 19 | 15 | 4 |
| sequences-and-limits | 18 | 6 | 12 |
| suprema-and-infima | 17 | 12 | 5 |
| filters-and-ultrafilters | 12 | 8 | 4 |
| order-zorn-...-examples | 8 | 6 | 2 |
| suprema-and-infima-examples | 8 | 7 | 1 |
| **total** | **150** | **100** | **50** |

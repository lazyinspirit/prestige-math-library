# Read-only contract-fidelity VERIFIER — run `frontier-11` (common half)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11)
> — binding on you.** The owner's words: *"Do not ask and do not let any agents
> ask for shell command permissions, edit permissions, web search permissions,
> git permissions, or any permissions whatsoever."* It binds a compound command
> as a whole, so **no segment of an `&&` chain may raise a prompt either** — one
> command per invocation, absolute paths over `cd`. Never ask the owner to
> approve anything. If an indispensable operation has no escalation-free form,
> record it as a **blocker** in your report; that is the escape hatch.

You are a **read-only verifier** dispatched by Alpha on run `frontier-11`. The
checkout is `/Users/ianx/Projects/prestige-math-library`.

**YOU NEVER WRITE.** No file edits, no `apply_patch`, no fixes, no gate repairs,
no new files. Your sandbox is `read-only` and that is deliberate. You return
**evidence**; Alpha alone adjudicates.

## What you are checking, and why it is not the usual job

The item text of this run is **FROZEN** and is not your target. Your target is
the evidence artifact: `research/frontier-11-batch-<i>.proof-contracts.json`.

Alpha's step-6 audit found that `proof-contract.mjs --strict` passes 206/206 with
0 errors over an evidence record that was substantially false of the text it
claims to certify. The gate checks that a quoted substring **exists** in the
cited section and that facts and steps map onto each other. It cannot check that
the quote **supports** the fact, or that a boundary row's named step **does the
work**. That is the blind spot you are covering.

The five Betas have now run a repair round on these artifacts. **They wrote the
original rows and they wrote the repairs**, so their reports are claims, not
evidence. You are the independent check.

## The failure mode to hunt

A row rewritten from

> "Step 1.1 **must** isolate the zero polynomial…"    (an instruction)

to

> "Step 1.1 isolates the zero polynomial…"            (a record)

**without anyone checking that step 1.1 actually isolates the zero polynomial**
satisfies the letter of the repair and changes nothing. It is worse than the
original, because it now reads as audited.

So for **every row you are assigned**: open the item on disk, find the named
step, and decide whether the step does what the row says. Three verdicts:

- `real` — the named step genuinely does what the row claims.
- `cosmetic` — the row's language was fixed but the named step does not do the
  work, or does not exist, or the row is still an instruction rather than a
  record.
- `false` — the row asserts something contradicted by the text.

A row marked `not_applicable` also gets checked: its **reason must be true**. "No
empty object occurs in this proof" is false if the proof quantifies over a
possibly-empty set. Flipping an awkward row to `not_applicable` with a
plausible-sounding reason is the other way to satisfy the letter and change
nothing — treat it with exactly the same suspicion as a rewritten `checked` row.

## Citation quotes

For each citation row you are assigned: open the cited `source` item, find its
named `source_section`, and check that

1. the `quote` is genuinely present there (the gate does this; you are looking
   for the rest), and
2. **the quote reaches the clause the fact actually uses.** A quote that stops at
   "…then" or "…define" or "For every row $i$ and every column $j$," is truncated
   before its own content. Check every `uses` step: if step 3.1 uses the cofactor
   formula, the quote must contain the cofactor formula.
3. **the extension was made by quotation, not by paraphrase.** The `quote` field
   must be verbatim source text. If a Beta "extended" a quote by writing its own
   summary of the missing clause, that is a **fabricated quote** and it is the
   most serious thing you can find here. Compare character-for-character against
   the source item.

## Boundary semantics

The eight cases are `empty`, `zero`, `one`, `degenerate`, `endpoints`,
`nonempty-choice`, `iff-forward`, `iff-reverse`.

`iff-forward` / `iff-reverse` are `not_applicable` **only if the Statement is not
a biconditional.** If the Statement says "if and only if", is an equivalence of
conditions, or asserts a characterisation, both directions must be `checked` and
anchored to the steps that prove each direction. Read the Statement yourself;
do not trust the row.

## Reporting

Return a report with:

1. **A table of every row you checked**: item id, case or fact label, verdict
   (`real` / `cosmetic` / `false`), and for anything not `real`, the exact step
   text or source text that shows it.
2. **Any NEW mathematical finding** — a place where the contract cannot be made
   true because the *proof* is wrong. Alpha needs these urgently: the text is
   frozen and only Alpha may unfreeze an item. Give the id, the step, and the
   defect.
3. **Coverage**: how many of your assigned rows you actually checked. If you
   could not finish, say which rows you did not reach. **Do not extrapolate from
   a sample to a verdict on rows you did not open.** Alpha needs to know exactly
   what is covered and what is not.

Be exact. "Several quotes look short" is not a finding; "`thm-x` `[L1]` quote
ends at 'then', while step 2.1 uses the conclusion after 'then'" is.


---

# This dispatch

## Your cluster — `vfy-batch-4`: batch 4 — the determinant of a linear operator (order 84) and the integral logarithm (order 178.1)

Your artifact is **`research/frontier-11-batch-4.proof-contracts.json`**.
The items are under `items/<id>.md` and are **frozen** — read them, never edit.

**The truncated-quote rot was thickest in this batch**: roughly fifteen quotes
in the determinant pair and six in the logarithm pair stopped before the clause
their fact uses — `[L1]` ending at "then", `[F1]` at "define", several stopping
after "For every row $i$ and every column $j$,". 63 quotes were rewritten.
Check them character-for-character against the cited source: an "extension"
written as the Beta's own paraphrase rather than as verbatim source text is a
fabricated quote and the most serious defect available here.

Named boundary rows to rule on explicitly — each named a step that did not do
the work:

- `thm-laplace-cofactor-expansion`, `zero` and `degenerate` — cited a step that
  only collates.
- `lem-determinant-rank-one-update-over-a-commutative-ring`, `one` — cited a step
  that never mentions $n=1$.
- `ex-log-two-from-four-characterisations`, `endpoints` — denied that any
  endpoint occurs, when the item uses closed-interval endpoints.
- `ex-unit-hyperbolic-area-brackets-e`, `endpoints` — same.

### Priority items — rule on each of these explicitly

- `thm-laplace-cofactor-expansion`
- `lem-determinant-rank-one-update-over-a-commutative-ring`
- `ex-log-two-from-four-characterisations`
- `ex-unit-hyperbolic-area-brackets-e`
- `thm-operator-determinant-is-basis-independent`
- `cor-operator-determinant-by-row-reduction`

### Every row changed in the repair round, by item

These are the rows the Beta changed. Each is a claim that the row is now true of
the frozen item text. Work down the list; report coverage honestly and do not
extrapolate to rows you did not open.

- `cex-discontinuous-logarithmic-functional-equation`
    - quotes changed: L2<-thm-cauchy-functional-equation-regularity (uses 3.2)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[checked]
- `cex-mercator-series-does-not-define-logarithm-globally`
    - quotes changed: L2<-lem-nth-term-test (uses 2.2)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[checked], nonempty-choice[checked]
- `cor-continuous-logarithmic-functions-form-a-one-parameter-family`
    - quotes changed: F1<-def-integral-exponential (uses 1.1,1.3,3.1); F1<-cor-integral-exponential-addition-law (uses 1.1,1.3,3.1); L1<-thm-integral-exponential-solves-the-normalised-ivp (uses 1.1); L3<-thm-cauchy-functional-equation-regularity (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[checked]
- `cor-cramers-rule-over-a-field`
    - quotes changed: L1<-thm-cramers-rule-over-a-commutative-ring (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `cor-e-is-the-unique-unit-hyperbolic-area`
    - quotes changed: F2<-def-integral-exponential (uses 1.1)
    - boundary rows changed: one[checked], endpoints[checked], nonempty-choice[checked]
- `cor-integral-exponential-addition-law`
    - quotes changed: F1<-def-integral-exponential (uses 1.1,2.1); L1<-thm-integral-logarithm-product-law (uses 1.1)
    - boundary rows changed: zero[checked]
- `cor-integral-logarithm-agrees-with-natural-logarithm`
    - quotes changed: F1<-def-integral-exponential (uses 1.1); L1<-thm-integral-exponential-agrees-with-exponential (uses 1.1)
    - boundary rows changed: endpoints[not_applicable], nonempty-choice[checked]
- `cor-integral-logarithm-is-strictly-increasing`
    - quotes changed: L1<-thm-integral-logarithm-derivative-and-normalisation (uses 1.1,1.2); L3<-cor-mean-value-theorem (uses 1.2)
    - boundary rows changed: endpoints[checked], nonempty-choice[checked]
- `cor-integral-logarithm-reciprocals-and-integer-powers`
    - quotes changed: L1<-thm-integral-logarithm-product-law (uses 1.1,2.1); F1<-def-integer-power (uses 2.1,4.1)
    - boundary rows changed: zero[checked], one[checked], endpoints[not_applicable]
- `cor-inverse-matrix-by-adjugate`
    - boundary rows changed: zero[checked], one[checked], nonempty-choice[checked]
- `cor-operator-determinant-by-row-reduction`
    - quotes changed: L1<-thm-operator-determinant-is-basis-independent (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], nonempty-choice[checked]
- `cor-operator-determinant-on-the-general-linear-group`
    - quotes changed: F1<-def-linear-isomorphism-and-invertible-linear-map (uses 2.2); L3<-lem-ring-units-form-a-group (uses 1.1,2.2)
    - boundary rows changed: empty[checked], zero[checked], one[checked], nonempty-choice[checked]
- `cor-square-matrix-invertible-iff-determinant-is-a-unit`
    - quotes changed: F1<-def-invertible-matrix-and-similarity-over-a-commutative-ring (uses 3.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `ex-columnwise-additivity-versus-whole-matrix-nonadditivity`
    - boundary rows changed: zero[checked], degenerate[checked]
- `ex-cramers-rule-two-by-two-system`
    - quotes changed: L1<-cor-cramers-rule-over-a-field (uses 2.1)
    - boundary rows changed: zero[checked], degenerate[checked]
- `ex-determinant-in-two-ordered-bases`
    - quotes changed: L1<-thm-two-sided-change-of-basis-formula (uses 2.1)
- `ex-doubling-integers-has-nonunit-determinant`
    - quotes changed: F1<-lem-units-of-z (uses 1.1,2.1); L3<-cor-inverse-matrix-by-adjugate (uses 2.2)
    - boundary rows changed: empty[checked], one[checked], degenerate[checked], nonempty-choice[not_applicable]
- `ex-four-by-four-determinant-by-cofactors-and-row-reduction`
    - quotes changed: L1<-thm-laplace-cofactor-expansion (uses 1.1,2.1)
    - boundary rows changed: zero[checked], nonempty-choice[not_applicable]
- `ex-log-two-from-four-characterisations`
    - boundary rows changed: one[checked], endpoints[checked], nonempty-choice[checked]
- `ex-logarithmic-functions-without-normalisation`
    - quotes changed: L1<-cor-continuous-logarithmic-functions-form-a-one-parameter-family (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked]
- `ex-singular-projection-has-zero-determinant`
    - quotes changed: F2<-def-determinant-of-a-linear-operator (uses 1.1)
    - boundary rows changed: zero[checked], degenerate[checked]
- `ex-three-by-three-inverse-by-adjugate`
    - quotes changed: F2<-def-matrix-minors-cofactors-and-adjugate (uses 1.1); L2<-cor-inverse-matrix-by-adjugate (uses 3.1)
    - boundary rows changed: zero[checked]
- `ex-unit-hyperbolic-area-brackets-e`
    - quotes changed: L1<-cor-e-is-the-unique-unit-hyperbolic-area (uses 4.1); L2<-thm-integral-logarithm-product-law (uses 3.1)
    - boundary rows changed: one[checked], endpoints[checked]
- `fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero`
    - quotes changed: F2<-lem-units-of-z (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], iff-forward[checked], iff-reverse[checked]
- `lem-alternating-top-forms-are-determined-by-one-ordered-basis`
    - boundary rows changed: one[checked], nonempty-choice[checked]
- `lem-determinant-rank-one-update-over-a-commutative-ring`
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked]
- `lem-log-series-extends-by-the-product-law`
    - quotes changed: F1<-def-integer-power (uses 1.2,1.3)
    - boundary rows changed: zero[checked], one[checked], endpoints[checked], nonempty-choice[checked]
- `thm-adjugate-identity-over-a-commutative-ring`
    - quotes changed: L1<-thm-laplace-cofactor-expansion (uses 1.1,1.2,1.3)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked]
- `thm-adjugate-is-equivariant-under-similarity`
    - quotes changed: F1<-def-invertible-matrix-and-similarity-over-a-commutative-ring (uses 1.1,4.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], nonempty-choice[checked]
- `thm-cramers-rule-over-a-commutative-ring`
    - quotes changed: L2<-thm-laplace-cofactor-expansion (uses 2.2); L3<-cor-inverse-matrix-by-adjugate (uses 1.2)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], nonempty-choice[checked]
- `thm-integral-exponential-agrees-with-exponential`
    - quotes changed: L1<-thm-integral-exponential-solves-the-normalised-ivp (uses 1.1)
    - boundary rows changed: zero[checked], one[checked], nonempty-choice[checked]
- `thm-integral-exponential-solves-the-normalised-ivp`
    - quotes changed: F1<-def-integral-exponential (uses 1.1,1.2,2.1); L1<-thm-integral-logarithm-derivative-and-normalisation (uses 1.1,1.2,2.1); L2<-thm-derivative-of-an-inverse (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], endpoints[checked]
- `thm-integral-logarithm-derivative-and-normalisation`
    - quotes changed: F1<-def-integral-logarithm (uses 1.1,1.2); L1<-thm-ftc-first-part (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], endpoints[checked], nonempty-choice[checked]
- `thm-integral-logarithm-is-a-bijection`
    - quotes changed: L2<-thm-integral-logarithm-is-unbounded (uses 1.2)
    - boundary rows changed: zero[checked], endpoints[checked], nonempty-choice[checked]
- `thm-integral-logarithm-is-unbounded`
    - quotes changed: L1<-cor-integral-logarithm-reciprocals-and-integer-powers (uses 1.1,1.2,2.1)
    - boundary rows changed: zero[checked], one[checked], nonempty-choice[checked]
- `thm-integral-logarithm-product-law`
    - quotes changed: L1<-thm-integral-logarithm-derivative-and-normalisation (uses 1.1,3.1); L2<-thm-chain-rule (uses 1.1); L3<-cor-zero-derivative-implies-constant (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], endpoints[not_applicable]
- `thm-laplace-cofactor-expansion`
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], nonempty-choice[not_applicable]
- `thm-logarithm-continuous-functional-equation-characterisation`
    - quotes changed: L1<-cor-integral-exponential-addition-law (uses 1.1); L2<-thm-integral-exponential-solves-the-normalised-ivp (uses 1.2); L4<-thm-cauchy-functional-equation-regularity (uses 2.1)
    - boundary rows changed: one[checked], degenerate[checked], endpoints[not_applicable], nonempty-choice[checked]
- `thm-logarithm-definition-equivalence`
    - quotes changed: L5<-thm-logarithm-continuous-functional-equation-characterisation (uses 1.5)
    - boundary rows changed: one[checked], endpoints[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]
- `thm-logarithm-differentiable-functional-equation-characterisation`
    - quotes changed: F1<-def-derivative (uses 3.1); L1<-thm-integral-logarithm-derivative-and-normalisation (uses 1.2,4.1,5.1); L2<-thm-integral-logarithm-product-law (uses 1.2)
    - boundary rows changed: zero[checked], one[checked], endpoints[checked], nonempty-choice[checked]
- `thm-operator-adjugate-identity`
    - quotes changed: F1<-def-adjugate-of-a-linear-operator (uses 1.1); L2<-thm-matrix-of-a-composite-is-the-product (uses 1.1); L3<-thm-operator-determinant-is-basis-independent (uses 2.1)
    - boundary rows changed: zero[checked], one[checked], degenerate[checked], nonempty-choice[checked]
- `thm-operator-determinant-is-basis-independent`
    - boundary rows changed: empty[checked], zero[checked], one[checked], nonempty-choice[not_applicable]
- `thm-operator-determinant-is-multiplicative`
    - quotes changed: L2<-thm-operator-determinant-is-basis-independent (uses 2.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], nonempty-choice[checked]
- `thm-operator-determinant-scales-every-alternating-top-form`
    - quotes changed: L1<-lem-alternating-top-forms-are-determined-by-one-ordered-basis (uses 2.1,3.1); F1<-def-determinant-of-a-linear-operator (uses 3.1,4.1)
    - boundary rows changed: one[checked], nonempty-choice[checked]
- `thm-operator-invertible-iff-determinant-nonzero`
    - quotes changed: L1<-thm-invertible-matrices-correspond-to-linear-isomorphisms (uses 1.1); L3<-thm-operator-determinant-is-basis-independent (uses 2.1)
    - boundary rows changed: empty[checked], zero[checked], one[checked], degenerate[checked], nonempty-choice[checked], iff-forward[checked], iff-reverse[checked]

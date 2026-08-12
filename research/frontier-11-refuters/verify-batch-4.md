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

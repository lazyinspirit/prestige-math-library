# Wave 14 A3 orchestrator decision receipt

Decision completed: 2026-08-09

Status: **A3 complete; A4 authorized with three amendments.** I recovered the
active audit record from disk and independently read the two-page, 25-item
scope; all 25 provenance rows; all 23 proof contracts; the complete findings
register; every item and dependency needed to decide the five repairs; and the
source material behind every provenance proposal. This receipt is the only
file written at A3. No item, page, ledger, contract, shared artifact, or
earlier-wave file was edited.

The live baseline is
`442f831c94882899c1dc5559b36599b0f78a99c8`, matching Wave 14 A0. The shared
tree contains concurrent audit work and was preserved. Scope integrity is
exact: two pages in one A/B pair, 25 items, 23 proof-bearing items, 25 unique
provenance rows, and 165 relationships. The 23 contracts account for all 71
numbered steps, 121 direct Fact/source occurrences, and 184 boundary
dispositions. The proposal-stage strict result is 23/23 checked with zero
errors and zero warnings; that structural pass does not override the five
substantive citation defects below.

## Class (c): provenance decisions

**Approve all 25 classifications: 24 as recorded and one with a source-evidence
amendment. Decline none.** I independently resolved and checked all 17 distinct
submitted URLs; all were live and topic-correct for the role assigned in the
ledger. A4 may apply the approved component classifications while preserving
every legacy `origin` field. There is no `established-knowledge` waiver or
provisional Alpha concurrence.

1. `def-real-exponential-function-and-e` — **APPROVE as recorded:**
   `ai-altered` / `not-applicable` / `semantic-source`. MIT gives the globally
   convergent factorial series and Lebl gives `e=exp(1)`; combining them with
   the library's explicit canonical embedding is a non-verbatim packaging.
2. `lem-exponential-series-has-infinite-radius` — **APPROVE as recorded:**
   `literature-derived` / `ai-altered` / `exact-source`. MIT states infinite
   radius and convergence for every real input; the local geometric-tail proof
   is an adaptation.
3. `thm-exponential-addition-formula` — **APPROVE as recorded:**
   `literature-derived` / `literature-derived` / `exact-source`. Hunter states
   and proves the same formula by the Cauchy product and binomial theorem; MIT
   corroborates it.
4. `cor-exponential-reciprocal-and-positivity` — **APPROVE as recorded:**
   `literature-derived` / `ai-altered` / `exact-source`. Hunter states both
   reciprocal and positivity, while Johnson derives them from the
   multiplicative equation; the local square proof is adapted.
5. `thm-derivative-of-exponential` — **APPROVE as recorded:** `ai-altered` /
   `ai-altered` / `semantic-source`. Hunter supplies `E'=E`; Lebl supplies
   termwise differentiation and smoothness. The all-orders formulation is a
   faithful strengthened package.
6. `thm-exponential-is-strictly-increasing` — **APPROVE as recorded:**
   `literature-derived` / `ai-altered` / `exact-source`. Lebl states strict
   increase and positive derivative; the local mean-value proof differs.
7. `thm-exponential-limits-and-range` — **APPROVE as recorded:** `ai-altered` /
   `ai-generated` / `semantic-source`. Lebl and TAMU give the two end limits
   and range; the elementary bound and reciprocal derivation are local.
8. `cor-exponential-is-a-bijection-onto-positive-reals` — **APPROVE as
   recorded:** `literature-derived` / `ai-altered` / `exact-source`. Lebl gives
   the exact bijection; the proof is a local composition of continuity,
   monotonicity, endpoint limits, and IVT.
9. `thm-exponential-beats-every-polynomial` — **APPROVE as recorded:**
   `ai-altered` / `ai-altered` / `semantic-source`. MIT proves exponential
   domination from a retained factorial-series term; the scaled and reciprocal
   two-limit version is a routine adaptation.
10. `thm-exponential-ivp-uniqueness` — **APPROVE as recorded:**
    `literature-derived` / `ai-altered` / `exact-source`. Hunter and Penn give
    the exact normalized ODE characterization; the integrating-factor proof is
    adapted.
11. `thm-normalized-exponential-functional-equation` — **APPROVE as recorded:**
    `ai-altered` / `ai-altered` / `semantic-source`. TAMU gives the normalized
    continuous positive multiplicative characterization and Johnson gives the
    continuous multiplicative exponential form; the item's two-part
    differentiability normalization is a combined package.
12. `lem-scaled-binomial-coefficients-converge` — **APPROVE WITH SOURCE
    AMENDMENT:** retain `ai-altered` / `ai-generated` / `semantic-source`, but
    add `https://aofa.cs.princeton.edu/40asymptotic/` to the ledger/reference
    evidence and revise the rationale. The submitted rationale itself admits
    that neither submitted source states the extracted fixed-`k` coefficient
    lemma. Princeton states, for fixed `k`,
    `binom(N,k)=N^k/k!(1+O(1/N))`, which is semantically the exact asserted
    limit. The displayed finite-product proof locally supplies the additional
    `[0,1/k!]` bound. This is source strengthening, not a classification change.
13. `thm-exponential-product-limit` — **APPROVE as recorded:**
    `literature-derived` / `ai-altered` / `exact-source`. Lebl states the
    all-real product limit exactly; the library substitutes a binomial
    head-tail proof.
14. `thm-picard-iterates-for-exponential` — **APPROVE as recorded:**
    `ai-altered` / `ai-altered` / `semantic-source`. Lebl gives the exact Picard
    iterates and exponential limit; compact-uniform convergence and the
    limiting integral equation are faithful additions.
15. `thm-exponential-definition-equivalence` — **APPROVE as recorded:**
    `ai-altered` / `ai-generated` / `semantic-source`. Penn and Lebl collectively
    give the ODE, series, product, functional-equation, and Picard descriptions;
    their five-way consolidation and proof composition are library-specific.
16. `lem-exponential-factorial-tail-bound` — **APPROVE as recorded:**
    `ai-altered` / `ai-generated` / `semantic-source`. MIT and LSU use the same
    factorial-tail domination in the irrationality proof; the uniform
    `|x|<=1`, arbitrary-cutoff statement and its derivation are local.
17. `cor-two-less-than-e-less-than-three` — **APPROVE as recorded:**
    `literature-derived` / `ai-altered` / `exact-source`. LSU and Michigan state
    and derive the same strict bounds; the local proof routes through the
    preceding tail lemma.
18. `thm-e-is-irrational` — **APPROVE as recorded:** `literature-derived` /
    `literature-derived` / `exact-source`. MIT and LSU use the same
    factorial-scaled positive integer-tail contradiction. The present citation
    defect does not change the proof's literary provenance.
19. `rem-exponential-roadmap-and-circularity` — **APPROVE as recorded:**
    `ai-generated` / `not-applicable` / `none`. Its repository-specific theorem
    graph is positively identifiable as bespoke and a remark has no proof.
20. `ex-exponential-product-limit-at-negative-input` — **APPROVE as recorded:**
    `ai-generated` / `ai-generated` / `trivial`. Direct substitution at `x=-2`
    and the addition, reciprocal, and integer-power laws completely verify the
    local specialization.
21. `cex-exponential-product-limit-not-uniform-on-r` — **APPROVE as recorded:**
    `ai-generated` / `ai-generated` / `trivial`. The moving point `x=n` gives
    error `e^n-2^n`, a direct local witness.
22. `ex-flat-exponential-function` — **APPROVE as recorded:**
    `literature-derived` / `ai-altered` / `exact-source`. Lebl and MIT give the
    same piecewise function, smoothness, and vanishing derivatives; the local
    polynomial-times-exponential induction is adapted.
23. `ex-smooth-compactly-supported-bump` — **APPROVE as recorded:**
    `literature-derived` / `ai-altered` / `exact-source`. Dyatlov gives exactly
    this bump in one dimension and MIT corroborates the construction; the proof
    is recast through the prior flat-function item.
24. `cex-discontinuous-multiplicative-cauchy-solution` — **APPROVE as
    recorded:** `ai-altered` / `ai-altered` / `semantic-source`. Johnson and
    Gselmann license the Hamel-basis additive construction and exponentiation;
    the selected basis values are a concrete adaptation.
25. `cex-exponential-not-uniformly-continuous-on-r` — **APPROVE as recorded:**
    `literature-derived` / `ai-altered` / `exact-source`. Wisconsin and UTSA
    state the exact failure of uniform continuity; the close-pairs/MVT witness
    is a local proof.

The approved statement distribution remains 12 `literature-derived`, 10
`ai-altered`, and three `ai-generated`. The proof distribution remains two
`literature-derived`, 15 `ai-altered`, six `ai-generated`, and two
`not-applicable`. After the Princeton addition, the applied ledger will carry
18 distinct literature URLs.

## Class (b): repair decisions

### 1. `lem-exponential-series-has-infinite-radius` — APPROVE as proposed

`def-factorial-and-falling-factorial` proves nonzeroness in the naturals, while
`def-canonical-natural` only defines the embedding and expressly leaves its
ordered-field positivity/injectivity to `lem-of-naturals-positive`. The ratio
in step 1.1 needs the embedded factorial to be nonzero. Add
`lem-of-naturals-positive` to `deps` and [L3], using the proposed exact wording.
No numbered proof step changes.

### 2. `cor-exponential-reciprocal-and-positivity` — APPROVE as proposed

Neither `lem-of-sign-rules` nor `def-complete-ordered-field` states square
nonnegativity. Step 1.1 has already established `exp(x/2) != 0`, and
`lem-of-square-positive` states exactly that a nonzero square is positive.
Replace those two dependencies with `lem-of-square-positive` and replace [L2]
with the proposed exact statement. No numbered proof step changes.

### 3. `thm-normalized-exponential-functional-equation` — APPROVE as proposed

The current [L1] does not license step 2.1's existence assertions
`exp(0)=1`, `exp(1)=e`, and `exp'=exp`; IVP uniqueness is not an existence
theorem. Add `def-real-exponential-function-and-e` and
`thm-derivative-of-exponential`, retain the positivity corollary, and use the
proposed expanded [L1]. The two uniqueness arguments remain unchanged.

### 4. `thm-e-is-irrational` — APPROVE WITH DEPENDENCY AMENDMENT

Approve Beta's step-order and tail-bound repair. The present step 1.2 uses `A`
before defining it and attributes a different geometric comparison to [L2].
Define `A` in step 1.2 and apply the actual tail lemma:

> Put
> `A := iota(n!)(e - sum_{k=0}^n 1/iota(k!))`. Every tail term is positive,
> so `A>0`. Applying [L2] with `x=1` and `N=n`, then using the factorial
> recurrence, gives
> `A <= 2iota(n!)/iota((n+1)!) = 2/iota(n+1) <= 2/3 < 1`
> because `n>=2`. `[step 1.1, L1, L2, algebra]`

Open step 2.1 with “The number `A` from step 1.2 is an integer.” In addition,
add `lem-of-naturals-positive` to `deps` and to [L1], and expand [L1] to say
that every positive natural has a positive, hence nonzero, canonical real
image. The proof divides by canonical images of positive factorials and uses
positivity of the tail terms; `def-canonical-natural` explicitly does not
license those claims by itself. This amendment is mandatory, parallel to
repair 1.

### 5. `ex-exponential-product-limit-at-negative-input` — APPROVE WITH
DEPENDENCY AMENDMENT

Approve adding `def-real-exponential-function-and-e` and
`thm-exponential-addition-formula`, but also add `def-integer-power` to `deps`
and [L2]. The proposed sources establish
`exp(-2)=1/exp(2)=1/(exp(1)exp(1))` and `e=exp(1)`; only
`def-integer-power` licenses the notation/equality with `e^{-2}`. Use:

> [L2] Since `e=exp(1)`, the addition and reciprocal formulas and the
> definition of negative integer powers give
> `exp(-2)=1/exp(2)=1/(exp(1)exp(1))=1/e^2=e^{-2}>0`
> (`def-real-exponential-function-and-e`,
> `thm-exponential-addition-formula`,
> `cor-exponential-reciprocal-and-positivity`, `def-integer-power`).

No Verification step changes.

Thus all five repair proposals are approved, three as proposed and two with
mandatory dependency/citation amendments; none is declined. Together with the
one provenance source amendment, A4 has three A3 amendments to apply. Items
receiving these five repairs are material edits; the other 20 provenance
applications are pure retags.

## Nonfatal observations

The three Beta observations remain nonfatal under the binding triage rule: the
standard support definition in the bump example, unique linear extension from
a Hamel basis, and the induction `exp(n)=e^n` are each correct and recoverable
within 30 seconds. They do not authorize additional A4 work. Both page texts
and the roadmap Remark are accurate. No class (a) falsehood, class (d)
convention dispute, deletion, id change, reading-order change, or page repair
is approved.

## Mandatory A6 Waves 11–13 final-text barrier

A6 must reopen all 16 exact edges below against the **final** earlier-wave text
and refresh any affected proof-contract quotation. This receipt does not treat
the concurrent Wave 11–13 text observed at A3 as frozen.

Wave 11 — four edges:

- `thm-picard-iterates-for-exponential` -> `def-oriented-integral`
- `thm-picard-iterates-for-exponential` -> `thm-linearity-of-the-integral`
- `thm-picard-iterates-for-exponential` -> `thm-ftc-first-part`
- `thm-picard-iterates-for-exponential` -> `thm-ftc-second-part`

Wave 12 — three edges:

- `thm-picard-iterates-for-exponential` ->
  `thm-uniform-limit-interchanges-riemann-integration`
- `thm-picard-iterates-for-exponential` ->
  `thm-uniform-limit-continuous-real-functions`
- `cex-exponential-product-limit-not-uniform-on-r` ->
  `def-pointwise-uniform-and-uniformly-cauchy-convergence`

Wave 13 — nine edges:

- `def-real-exponential-function-and-e` ->
  `def-real-power-series-and-radius-of-convergence`
- `thm-exponential-addition-formula` ->
  `lem-cauchy-product-of-real-power-series`
- `thm-derivative-of-exponential` ->
  `thm-termwise-differentiation-of-a-real-power-series`
- `thm-derivative-of-exponential` ->
  `cor-power-series-sums-are-smooth-with-coefficient-formula`
- `thm-exponential-is-strictly-increasing` ->
  `cor-power-series-sums-are-continuous`
- `cor-exponential-is-a-bijection-onto-positive-reals` ->
  `cor-power-series-sums-are-continuous`
- `thm-picard-iterates-for-exponential` ->
  `thm-power-series-uniform-on-compact-subintervals`
- `ex-flat-exponential-function` ->
  `cor-power-series-sums-are-smooth-with-coefficient-formula`
- `ex-smooth-compactly-supported-bump` ->
  `cor-power-series-sums-are-smooth-with-coefficient-formula`

## Exact handoff

- Class (c): 25 approved, zero declined; 24 as recorded, one source-evidence
  amendment.
- Class (b): five approved, zero declined; three as proposed, two with
  mandatory dependency/citation amendments.
- Total proposals adjudicated: 30 approved, zero declined.
- A4 amendments: add the Princeton semantic source for
  `lem-scaled-binomial-coefficients-converge`; add
  `lem-of-naturals-positive` to repair 4; add `def-integer-power` to repair 5.
- A6 final-text barrier: 16/16 edges preserved (4 Wave 11, 3 Wave 12, 9 Wave
  13).
- Blockers: none.

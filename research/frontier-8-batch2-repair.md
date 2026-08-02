# Frontier-8 Batch 2 — post-judge repair record

Scope: only the two Batch-2 A/B pairs, **Fundamental Trigonometric Identities**
and **The Complex Exponential and Euler's Formula**. This repair follows the
confirmed-fatal dispositions in `research/frontier-8-judge-adjudications.jsonl`
and Alpha's frozen-text audit in `research/frontier-8-alpha-audit.md`. No judge
was run by the repair author.

## Repaired items

- `thm-cofunction-supplementary-and-reflection-identities`: expanded the
  Statement to all claimed six-function cofunction and supplementary identities,
  on explicit common natural domains; replaced the undeclared-addition-formula
  argument with precise quarter-turn, addition, parity, and quotient facts.
- `thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant`:
  replaced reciprocal tautologies with the actual secant and cosecant
  addition/subtraction formulas and their exact nonvanishing hypotheses.
- `thm-half-angle-identities-with-sign-conditions`: corrected the sign codomain
  from `{-1,1}` to `{-1,0,1}`, including the zero-radicand case.
- `def-real-polynomial-degree-leading-coefficient-and-monic` and
  `def-complex-polynomial-degree-and-monic`: made the objects formal finite
  coefficient lists and separately defined evaluation. This removes the false,
  unproved coefficient-uniqueness claim for polynomial functions.
- `lem-chebyshev-degree-leading-coefficients-and-extreme-values`: narrowed the
  title to its proved degree/leading-coefficient content and made the recurrence
  induction explicit.
- `thm-real-de-moivre-binomial-multiple-angle-formulas`: removed the premature
  complex-number argument; the real induction now names Pascal's rule.
- `thm-chebyshev-minimax-monic-polynomial`: supplied the missing
  `|T_n|\le1` argument, increasing alternation points, continuity/maximality,
  sign alternation, IVT roots, and root-count contradiction.
- `ex-morries-law`: corrected the false intermediate identity. Repeated
  doubling gives `sin(8x)=8 sin(x) cos(x) cos(2x) cos(4x)`, followed by the
  supplementary identity and the licensed nonzero cancellation.
- `ex-exact-trigonometric-values-at-eighteen-thirty-six-and-seventy-two-degrees`:
  repaired the fifth-angle polynomial factorisation and selected the correct
  first-quadrant root before deriving the displayed values.
- `thm-cauchy-hadamard-for-complex-power-series`: replaced the undefined
  `|c_0|^(1/0)` convention with the shifted root family
  `|c_{k+1}|^(1/(k+1))`; stated all three radius cases and the centre case.
- `thm-complex-exponential-addition-and-real-extension`: added the exact
  Cauchy-product, factorial/binomial closed-form, and complex-binomial bridges
  for the coefficient identity.
- `def-complex-logarithms-principal-logarithm-and-complex-powers`: defined the
  multivalued logarithm and multivalued power as sets and distinguished them
  from the principal values.
- `thm-no-continuous-logarithm-on-the-punctured-complex-plane`: replaced the
  unlicensed complex/integer quotient argument by the continuous real-valued
  function `Im(h)/(2π)` and IVT.
- `lem-complex-polynomial-growth-and-minimum-modulus`: supplied a quantified
  dominant-term lower bound, a compact square, continuity route, and the global
  minimum argument.
- `lem-dalembert-minimum-modulus-descent`: corrected the phase to
  `u^m=-p(a) overline(c_m)/(|p(a)||c_m|)` and supplied a finite quantitative
  remainder estimate. `thm-fundamental-theorem-of-algebra-minimum-modulus-proof`
  now cites the repaired minimum and descent facts explicitly.
- `cex-complex-continuous-multiplicative-map-not-the-standard-exponential`:
  added the missing real-exponential/trigonometric/coordinate continuity route
  and the precise `f(iπ)` comparison.
- `ex-complex-geometric-power-series`: separated the real modulus geometric
  series from the complex convergence argument, used absolute convergence, and
  passed the finite partial-sum identity to the limit with the null-sequence
  fact.

## Contract and render repair

`research/frontier-8-batch-2.proof-contracts.json` now contains exact source
clauses, all fact uses, updated numbered-step input maps, and boundary
dispositions for each repaired proof-bearing item. The changed titles are kept
in both `research/frontier-8-batch-2.pages.json` and `research/plan-spec.json`.

Mechanical checks after the repair:

- precheck: all 16 repaired proof-bearing items pass;
- targeted strict proof-contract check: 14 fact-bearing repaired proofs pass;
- targeted rendercheck: 23 changed items/pages pass with no errors.
- Batch-2 content policy passes for all 65 scoped items, and the updated
  whole-plan dependency validation has no Batch-2 undeclared-prerequisite error.

## Residual concerns for Alpha rejudge

- Rejudge every repaired item, not merely the direct-fatal roots: the
  polynomial-definition correction changes the vocabulary used by the
  Chebyshev/root chain, and the d'Alembert correction changes the FTA spine.
- The continuity reductions in the minimum-modulus and multiplicative-map
  proofs are deliberately explicit, but Alpha should verify that the existing
  componentwise-continuity conventions cover the displayed coordinate maps.
- The repaired Cauchy--Hadamard theorem deliberately makes no boundary-circle
  assertion; Alpha should keep that absence of a claim when judging the final
  text.

## Current-context confirmed-fatal repair — 2026-08-02

Scope was restricted to the nine Batch-2 ids assigned in
`research/frontier-8-alpha-current-adjudication.md`. The current paired verdicts
were not rerun, reinterpreted, or altered by this repair author.

### Item repairs

- `def-chebyshev-polynomials-first-and-second-kind`: the old definition used
  polynomial addition and multiplication without defining those operations, and
  cited a first-order recursion theorem directly for two second-order
  recurrences. The repair defines coefficientwise addition, convolution
  multiplication, scalar multiplication, subtraction, and canonical trimming of
  trailing zeros on the formal coefficient lists. It then applies
  `thm-recursion` to the pair state
  `Phi(P,Q)=(Q,2XQ-P)`, separately from `(1,X)` and `(1,2X)`, and obtains the
  displayed three-term recurrences from the coordinates of the two unique pair
  sequences.
- `def-complex-integer-powers`: the old negative-power clause wrote `z^m` with
  `m` still typed as an integer although only natural powers had been defined.
  The repair first constructs natural powers by recursion, then uses the exact
  image/uniqueness clause of `lem-nat-embeds-int` to choose the unique natural
  representative of a nonnegative integer or of the negative of a negative
  integer. Negative powers remain defined only for nonzero bases.
- `def-complex-metric-convergence-and-continuity`: the old text called
  `d(z,w)=|z-w|` a metric without a dependency establishing the metric axioms.
  The repair identifies this expression coordinate-for-coordinate with the
  published Euclidean `d_2` on `R^2` and cites the published theorem that the
  Euclidean norm induces that metric.
- `def-complex-series-power-series-and-absolute-convergence`: the old text did
  not define finite complex partial sums and referred ambiguously to “the real
  nonnegative coefficient-modulus series.” The repair defines initial-segment
  complex sums from the additive commutative monoid of the complex field,
  defines convergence, absolute convergence, and rearrangement from those sums,
  and names the exact real comparison power series
  `Q(x)=sum |c_n| x^n` centered at zero whose published real radius is used.
- `def-complex-polynomial-degree-and-monic`: the old evaluation used the
  real-only finite-sum definition and omitted evaluation of the zero polynomial.
  The repair sets `0(z)=0` and evaluates a nonzero coefficient list with the
  typed initial-segment complex sum introduced by the repaired complex-series
  definition.
- `def-complex-exponential`: the old coefficient `z^n/n!` divided a complex
  number by an unembedded natural. The repair names the canonical-natural map
  into `R`, the real embedding into `C`, proves the embedded factorial is
  nonzero from the exact available factorial/positivity clauses, and defines the
  coefficient with denominator `j(iota_R(n!))`. The familiar `n!` notation in a
  complex expression is explicitly declared to abbreviate that embedded value.
- `ex-trigonometric-identities-worked-at-pi-over-twelve`: the old verification
  assumed the values at `pi/3` and `pi/4`, used the subtraction and tangent
  formulas without fact citations, and did not use the half-angle identity named
  by its title. The repair derives the positive quarter-angle values from the
  quarter-turn and signed half-angle clauses; derives `cos(pi/3)=1/2` from the
  supplementary and double-angle identities and positivity; derives
  `sin(pi/3)=sqrt(3)/2` by the signed half-angle formula; then cites the exact
  subtraction and tangent-definition clauses and verifies the nonzero tangent
  denominator.
- `thm-cauchy-hadamard-for-complex-power-series`: the old exterior argument
  inferred divergence of the complex series from divergence of its real modulus
  series. The repair instead uses the finite and infinite limsup cases to obtain
  complex terms of modulus greater than one arbitrarily late. Consecutive
  partial sums are therefore more than one apart arbitrarily late, contradicting
  the Cauchy property of any convergent complex partial-sum sequence. The
  interior argument still uses the real root test only for convergence of the
  modulus series, followed by the exact absolute-complex-convergence theorem.
- `thm-eulers-formula`: the old proof treated the real consecutive-block
  grouping theorem as permission to split one complex series into independent
  even and odd subseries. The repair forms explicit parity masks, proves both
  masks absolutely convergent by direct comparison with the exponential modulus
  series, splits their sums coordinatewise by real series linearity, and applies
  the real grouping theorem only to the already-convergent real coordinate
  series in consecutive two-term blocks. Those grouped coordinates are exactly
  the cosine and sine series.

The six materially repaired definitions above changed
`provenance.statement` from `literature-derived` to `ai-altered`; their source
URLs and `proof: not-applicable` labels remain accurate. The generated
`pi/12` construction and both source-backed theorem statements/proofs retain
their existing component labels. Every item remains `status: draft`, and no
stale item-level paired-pass block was present.

### Proof contract and frozen-manifest deltas

`research/frontier-8-batch-2.proof-contracts.json` now records all fact-source
clauses, every use of each fact, exact numbered-step input maps, and anchored
boundary dispositions for the three repaired proof-bearing items. The obsolete
pre-repair `risk_review` on Cauchy--Hadamard was removed; a current Alpha risk
review, if required by the merged risk gate, must be supplied independently.
The exact source-clause quotes used by the existing Chebyshev degree lemma and
punctured-plane logarithm theorem were also synchronized to the repaired
definitions; their item text was not changed.

No manifest, plan spec, library page, or page prose was edited. The frozen
Batch-2 manifest therefore still carries pre-repair dependency lists. Its
eventual Alpha/orchestrator reconciliation must record these authored deltas:

- Chebyshev definition: add `def-finite-sum`.
- Complex metric definition: add `def-p-norms-on-rn` and
  `lem-p-norms-are-norms-and-induce-the-published-metrics`.
- Complex-series definition: add `thm-complex-numbers-form-a-field` and
  `def-monoid-finite-product`.
- Complex-polynomial definition: replace `def-finite-sum` by
  `def-complex-series-power-series-and-absolute-convergence`.
- Complex-exponential definition: add `def-complex-numbers-and-arithmetic`,
  `thm-complex-numbers-form-a-field`, and `lem-of-naturals-positive`.
- The `pi/12` example: replace
  `thm-addition-and-subtraction-formulas-for-tangent-cotangent-secant-and-cosecant`
  by `thm-double-angle-and-power-reduction-identities`,
  `thm-cofunction-supplementary-and-reflection-identities`,
  `cor-pi-is-the-first-positive-sine-zero`, and
  `def-tangent-cotangent-secant-cosecant`.
- Cauchy--Hadamard: add `lem-metric-convergent-implies-cauchy`.
- Euler's formula: add `def-complex-integer-powers`,
  `thm-absolute-convergence-of-complex-series`,
  `thm-direct-comparison-test`,
  `thm-componentwise-convergence-and-completeness`, and
  `lem-series-linearity`.

The integer-power dependency list is unchanged.

### Mechanical checks

- Scoped precheck: pass, 3/3 proof-bearing repaired items, 0 failures.
- Targeted strict Batch-2 proof contract: pass, 3/3 repaired proof-bearing
  items, 0 errors and 0 warnings. Full Batch-2 strict proof contract: pass,
  54/54 proof-bearing items, 0 errors and 0 warnings.
- Scoped rendercheck: pass, all 9 changed items; all math parsed under KaTeX and
  no delimiter, multiline-display, or wikilink-in-math defect remained.
- Batch-2 content policy: pass, all 65 scoped items, 0 errors and 0 warnings.
- JSON parse of the Batch-2 proof contract: pass.

No judge, rejudge, audit, adjudication, commit, push, publish, plan-spec change,
or page edit was performed.

# frontier-10 independent step-6 reader — batch 3

**Role:** independent step-6a reader (`frontier-10`, batch 3)

**Scope:** `polynomial-rings-and-roots` (44 items) and `polynomial-rings-and-roots-examples` (14 items)

**Contract:** `briefs/beta-step8-audit.md`; dispatch and disk scope cross-checked against `research/frontier-10-batch-3.{pages,coverage,proof-contracts}.json` and `research/frontier-10-batch-3.notes.md`

## Result and disposition

- I read all 58 titles and Statements/Definitions/Examples, every numbered proof/verification/counterexample step, every declared dependency citation, and the actual on-disk Statement or Definition of every cited item.
- I found **no fatal mathematical defect**: no false title or Statement, missing theorem hypothesis, failed direction of a biconditional, or boundary counterexample.
- I recorded **21 nonfatal findings across 14 items**. They were inaccurate dependency paraphrases, missing explicit licenses, or proof bridges that a competent reader could close within Alpha's 30-second rule. I repaired each on disk and synchronized the batch manifest and proof contracts.
- I added or deleted **no result**, changed no title or Statement, and changed no provenance tag. These repairs are not self-certified; Alpha must adjudicate them from disk.
- The A-page's two prose paragraphs accurately summarize the prerequisite and result spine. The B-page intentionally has frontmatter only. I found no page-level mathematical or title/summary defect.

## Concrete findings and repairs

### A page

**F01 — `thm-polynomial-quotient-is-a-field-iff-irreducible` — nonfatal, repaired.** Fact L2 said that the cited generated-ideal definition states that `(p)` consists of multiples of `p`. The dependency actually defines `(p)` as the intersection/smallest ideal containing `p`; it does not state the multiples characterization. I made L2 exact and proved inline that the multiples form precisely that smallest ideal.

**F02 — `thm-polynomial-quotient-is-a-field-iff-irreducible` — nonfatal, repaired.** Step 1.1 moved from `p` irreducible and `p` not dividing `f` to “every common divisor is a unit” without the associate argument. I inserted the contradiction: a nonunit common divisor of irreducible `p` would be associate to `p` and hence force `p` to divide `f`. The new dependency on step 1.1 also required canonical phase renumbering from `1.2/2.1` to `2.1/3.1`.

**F03 — `cor-finite-subgroups-of-units-in-a-domain-are-cyclic` — nonfatal, repaired.** The proof chose an invariant-factor list, but its cited order/exponent and cyclicity corollaries are conditional on such a list and do not assert existence. I added the actual finite-abelian-group classification theorem as L12 and used it at step 3.1.

**F04 — `thm-polynomial-is-separable-iff-coprime-to-its-derivative` — nonfatal, repaired.** Step 1.1 attributed a Bézout identity in every extension field to `lem-polynomial-gcd-is-stable-under-field-extension`. That Statement says only that the monic gcd is stable. I added `thm-bezout-identity-for-polynomials` and now use stability to identify the gcd as `1` and Bézout to obtain the identity.

**F05 — `thm-irreducible-polynomials-over-a-field-are-prime` — nonfatal, repaired.** Step 1.1 said any common divisor of irreducible `p` and `f` is a unit merely because it divides `p`. A nonunit divisor could instead be associate to `p`. I inserted the associate argument and the contradiction with the case assumption `p` not dividing `f`.

**F06 — `thm-gauss-lemma-for-integer-polynomials` — nonfatal, repaired.** L2 claimed that `thm-rat-field` says every finite rational coefficient set has a common nonzero integer denominator. Its Statement only says that the rationals form a field. I added `def-rationals` for numerator/denominator representatives and `lem-int-embeds-rat`, then explicitly formed a common denominator as a finite product and used integer nonzero-product cancellation.

**F07 — `thm-gauss-lemma-for-integer-polynomials` — nonfatal, repaired.** Step 2.1 invoked coprimality together with integer cancellation to conclude `a/b=±1`, but the cited cancellation theorem does not supply that inference and the preceding content equality already gives `b=|a|`. I removed the inaccurate use and concluded the sign directly from `b=|a|` and `b>0`.

**F08 — `thm-gauss-lemma-for-integer-polynomials` — nonfatal, repaired.** The final irreducibility equivalence treated every integer reducibility witness as a positive-degree factorization without addressing a nonunit constant factor. I added the content-multiplicativity argument showing that such a factor would make the primitive product have content greater than `1`.

**F09 — `thm-rational-root-theorem` — nonfatal, repaired.** Step 1.1 moved integer coefficients into the rational root equation without an explicit coefficient embedding. I added `lem-int-embeds-rat` as L6, shifted induction to L7, and cited the embedding in the cleared-denominator equation.

### B page

**F10 — `ex-polynomial-arithmetic-by-convolution` — nonfatal, repaired.** The polynomial-ring definition assumes a commutative coefficient ring, but the example supplied no citation that the integers satisfy that hypothesis. I added `thm-int-comm-ring` and cited it in both computations.

**F11 — `cex-distinct-polynomials-can-induce-the-same-finite-field-function` — nonfatal, repaired.** `prop-integers-modulo-n-as-a-quotient-ring` says only that `Z/p` is a quotient ring, not that it is a field. I added `thm-z-mod-p-is-a-field` before calling the coefficient object `F_p`.

**F12 — `cex-distinct-polynomials-can-induce-the-same-finite-field-function` — nonfatal, repaired.** Step 2.1 used `p≥2` to keep the degree-`p` and degree-`1` coefficients distinct but cited nothing giving the defining inequality for a prime. I added `def-prime` and now use its `p>1` clause explicitly. Fermat's theorem then checks every residue, including zero.

**F13 — `ex-x-squared-minus-two-is-irreducible-over-q` — nonfatal, repaired.** L3 paraphrased `def-prime` as the already-instantiated fact “2 is prime.” The dependency only defines primality. I made the Fact exact and made the existing divisor-bound/discrete-order argument explicitly establish the relevant divisor lists.

**F14 — `ex-x-squared-minus-two-is-irreducible-over-q` — nonfatal, repaired.** The quadratic irreducibility theorem requires a field, but no cited fact said that `Q` is a field. I added `thm-rat-field` and used it at step 2.1.

**F15 — `ex-reduction-mod-two-proves-a-cubic-irreducible` — nonfatal, repaired.** L4 likewise inflated `def-prime` into “2 is prime.” I made the Fact exact and explicitly used L4–L10 to verify primality.

**F16 — `ex-reduction-mod-two-proves-a-cubic-irreducible` — nonfatal, repaired.** The cubic no-root test requires a field, while the cited quotient-ring proposition did not establish that `Z/2` is one. I added `thm-z-mod-p-is-a-field` and applied it after establishing that `2` is prime.

**F17 — `ex-eisenstein-proves-a-family-irreducible` — nonfatal, repaired.** L2 said that `def-prime` establishes “2 is prime.” I changed it to the actual definition. Step 1.1 already contains the elementary divisor verification using L2–L8, so no proof conclusion changed.

**F18 — `ex-translation-makes-x-four-plus-one-eisenstein` — nonfatal, repaired.** The title and Statement say Eisenstein does not apply directly to `x^4+1`, but the verification previously established only the translated application. I added the one-line obstruction: a direct Eisenstein prime would have to divide the constant coefficient `1`.

**F19 — `ex-translation-makes-x-four-plus-one-eisenstein` — nonfatal, repaired.** The proof applied Eisenstein at `2` and the polynomial universal property over `Q` without explicitly licensing that `2` is prime or that `Q` is a field. I added `def-prime` with the elementary divisor check and `thm-rat-field` for the substitution automorphism.

**F20 — `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two` — nonfatal, repaired.** The Given called `Z/2` a field and applied the field-extension repeated-root theorem, but the only residue-ring dependency established a quotient ring. I added `def-prime`, checked `2` directly, added `thm-z-mod-p-is-a-field`, and also wrote the repeated factor as `(x-1)^2=(x+1)^2` using `-1=1`.

**F21 — `cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal` — nonfatal, repaired.** L3 claimed that the generated-ideal definition says a principal ideal consists of multiples. As in F01, the dependency only gives the smallest-ideal definition. I made L3 exact and proved the multiples characterization inline before using divisibility by the alleged generator.

## Per-item coverage ledger

“Clean” below means that after reading the title, Statement/Definition/Example, every proof step, and the actual Statements/Definitions of all cited dependencies, I found no concrete mathematical or semantic-citation defect. A “finding” row refers to the evidence and repair above; it is not a certification of the repair.

### `polynomial-rings-and-roots` (44/44)

| Item | Reader result |
|---|---|
| `def-polynomial-ring-over-a-commutative-ring` | Clean; finite-support, empty-support, and convolution domains checked. |
| `lem-polynomial-operations-preserve-finite-support` | Clean; both support bounds and convolution endpoint checked. |
| `thm-polynomial-ring-is-a-commutative-ring` | Clean; all coefficientwise and reindexing steps checked. |
| `def-polynomial-degree-leading-coefficient-and-monic` | Clean; zero polynomial exclusion checked. |
| `prop-polynomial-coefficient-sequences-and-trimmed-lists-agree` | Clean; zero/list trimming and both inverse directions checked. |
| `prop-polynomial-degree-laws-over-a-commutative-ring` | Clean; zero-product and leading-coefficient caveats checked. |
| `thm-polynomial-degree-of-a-product-over-a-domain` | Clean; nonzero and domain hypotheses license the top coefficient. |
| `cor-polynomial-ring-over-a-domain-is-a-domain` | Clean; zero-factor directions checked. |
| `cor-units-in-a-polynomial-ring-over-a-domain` | Clean; both directions and constant-unit boundary checked. |
| `def-polynomial-evaluation-and-root` | Clean; coefficient homomorphism, finite support, and root domain checked. |
| `thm-universal-property-of-a-polynomial-ring` | Clean; existence, multiplication reindexing, uniqueness, and evaluation dictionary checked. |
| `def-multivariate-polynomial-ring-by-iteration` | Clean; zero-indeterminate base and commuting-variable convention checked. |
| `cor-multivariate-polynomial-ring-over-a-domain-is-a-domain` | Clean; induction base `n=0` and step checked. |
| `thm-monic-polynomial-division` | Clean; zero dividend, constant divisor, termination, and uniqueness hypotheses checked. |
| `cor-factor-theorem-over-a-commutative-ring` | Clean; both directions and unique quotient checked. |
| `thm-polynomial-division-algorithm-over-a-field` | Clean; normalization, zero dividend, constant divisor, and uniqueness checked. |
| `cor-polynomial-ring-over-a-field-is-euclidean` | Clean; Euclidean-function domain and remainder inequality checked. |
| `cor-polynomial-ring-over-a-field-is-a-pid` | Clean; exact Euclidean-to-PID Statement checked. |
| `def-monic-greatest-common-divisor-of-polynomials` | Clean; `(0,0)` exclusion and monic generator normalization checked. |
| `thm-bezout-identity-for-polynomials` | Clean; termination, last nonzero remainder, back-substitution, and divisibility checked. |
| `thm-irreducible-polynomials-over-a-field-are-prime` | Findings F05 repaired. |
| `lem-polynomial-factorisation-into-irreducibles` | Clean; degree induction and constant/unit endpoints checked. |
| `thm-polynomial-ring-over-a-field-is-a-ufd` | Clean; existence, prime divisibility, induction, associates, and units checked. |
| `thm-polynomial-quotient-is-a-field-iff-irreducible` | Findings F01–F02 repaired; all three equivalences re-read. |
| `thm-root-bound-for-polynomials-over-a-domain` | Clean; degree-zero base, distinct-root induction, and quotient degree checked. |
| `cor-finite-subgroups-of-units-in-a-domain-are-cyclic` | Finding F03 repaired; trivial group and exponent/root-count boundaries checked. |
| `cor-polynomials-over-an-infinite-domain-are-determined-by-values` | Clean after adversarial counterexample attempt; generated Statement reduces to the root bound for `f-g`, including `n=0`. |
| `thm-quadratic-and-cubic-irreducibility-test` | Clean; both directions and degree `2/3` factor-degree cases checked. |
| `def-formal-derivative-of-a-polynomial` | Clean; constants and positive-characteristic coefficients checked. |
| `prop-formal-derivative-laws` | Clean; linearity, powers, Leibniz, and degree-drop qualifications checked. |
| `def-repeated-root-and-separable-polynomial` | Clean; extension-field quantifiers and nonzero-polynomial restriction checked. |
| `thm-repeated-root-derivative-criterion` | Clean; both directions and factor theorem use checked. |
| `lem-polynomial-gcd-is-stable-under-field-extension` | Clean; divisibility and Bézout-based reverse common-divisor step checked. |
| `thm-polynomial-is-separable-iff-coprime-to-its-derivative` | Finding F04 repaired; both directions and constant-polynomial boundary checked. |
| `cor-irreducible-polynomial-is-separable-iff-derivative-nonzero` | Clean; both directions and irreducibility/gcd alternatives checked. |
| `def-content-and-primitive-integer-polynomial` | Clean; zero, sign, trimmed-list, and positive-content conventions checked. |
| `lem-content-divisibility-characterisation` | Clean; recursive gcd, signs, zero coefficients, and both directions checked. |
| `lem-gauss-content-lemma` | Clean; prime-divisibility contradiction and zero-polynomial scope checked. |
| `thm-gauss-lemma-for-integer-polynomials` | Findings F06–F08 repaired; both irreducibility directions re-read. |
| `thm-rational-root-theorem` | Finding F09 repaired; zero numerator, positive denominator, and both divisibility conclusions checked. |
| `thm-reduction-mod-prime-irreducibility-test` | Clean; primitive factorization, leading-coefficient survival, and positive-degree reductions checked. |
| `thm-eisenstein-irreducibility-criterion` | Clean; primitive/nonmonic hypotheses, prime-square condition, and reduction argument checked. |
| `cor-xn-minus-p-is-irreducible-over-q` | Clean; `n>0`, degree-one case, primitivity, and Eisenstein hypotheses checked. |
| `rem-polynomials-are-not-polynomial-functions` | Clean; formal/function distinction matches the finite-field example. |

### `polynomial-rings-and-roots-examples` (14/14)

| Item | Reader result |
|---|---|
| `ex-polynomial-arithmetic-by-convolution` | Finding F10 repaired; all displayed coefficients recomputed. |
| `ex-polynomial-long-division-and-gcd` | Clean; both division identities, monic associate, and Bézout identity recomputed. |
| `cex-nonconstant-units-and-degree-drop-with-zero-divisors` | Clean after generated-witness check: `(1+2x)^2=1` in `(Z/4)[x]`, with degree drop `2` to `0`. |
| `cex-polynomial-division-fails-for-a-nonunit-leading-coefficient` | Clean; leading-degree obstruction and equation `1=2q` checked. |
| `cex-quadratics-can-have-four-roots-over-composite-residue-rings` | Clean; all four residues in `Z/6` and all four odd residues in `Z/8` checked and distinct. |
| `cex-distinct-polynomials-can-induce-the-same-finite-field-function` | Findings F11–F12 repaired; Fermat and formal nonzero-polynomial arguments checked. |
| `ex-x-squared-minus-two-is-irreducible-over-q` | Findings F13–F14 repaired; candidate roots and values recomputed. |
| `ex-x-squared-plus-one-is-irreducible-over-r` | Clean; ordered-field positivity and quadratic test checked. |
| `ex-reduction-mod-two-proves-a-cubic-irreducible` | Findings F15–F16 repaired; both residue values and reduction hypotheses checked. |
| `ex-eisenstein-proves-a-family-irreducible` | Finding F17 repaired; `n=1` and primality check included. |
| `ex-translation-makes-x-four-plus-one-eisenstein` | Findings F18–F19 repaired; binomial expansion, divisibility, inverse substitution, and title claim checked. |
| `cex-no-roots-does-not-imply-irreducible-in-degree-four` | Clean; displayed quadratic factorization and positivity/no-root claim checked. |
| `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two` | Finding F20 repaired; generated witness, factorization, and zero derivative recomputed. |
| `cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal` | Finding F21 repaired; degree-in-`y`, leading coefficient, evaluation kernel, and properness checked. |

## Provenance, generated-claim, and source-harvest review

- Every item has the required statement/construction and proof/verification provenance components. I changed none.
- I specifically attempted to refute all three `provenance.statement: ai-generated` claims: `cor-polynomials-over-an-infinite-domain-are-determined-by-values`, `cex-nonconstant-units-and-degree-drop-with-zero-divisors`, and `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two`. Their root-bound reduction and finite witnesses check out; no counterexample was found.
- I read the batch notes' five-source harvest, convention decisions, declines, and component-provenance rationale against the on-disk scaffold and coverage receipt. The mathematical placements and declines are coherent with the built scope.
- I did **not** independently re-download the five external source documents or re-audit their live licensing/availability. I checked the local source ledger and every library dependency Statement on disk. No other part of the assigned mathematical audit was left unchecked.

## Risk routing for Alpha

`tools/risk-report.mjs` routes the following 34 proof-contract items as high or critical risk and therefore requests Alpha's additional proof-refuter read. I read them in this pass, but I did not add `risk_review` dispositions because that adjudication belongs to Alpha:

`thm-polynomial-ring-is-a-commutative-ring`, `thm-polynomial-degree-of-a-product-over-a-domain`, `cor-polynomial-ring-over-a-domain-is-a-domain`, `cor-units-in-a-polynomial-ring-over-a-domain`, `thm-universal-property-of-a-polynomial-ring`, `cor-multivariate-polynomial-ring-over-a-domain-is-a-domain`, `thm-monic-polynomial-division`, `cor-factor-theorem-over-a-commutative-ring`, `thm-polynomial-division-algorithm-over-a-field`, `cor-polynomial-ring-over-a-field-is-euclidean`, `cor-polynomial-ring-over-a-field-is-a-pid`, `lem-polynomial-factorisation-into-irreducibles`, `thm-polynomial-ring-over-a-field-is-a-ufd`, `thm-polynomial-quotient-is-a-field-iff-irreducible`, `thm-root-bound-for-polynomials-over-a-domain`, `cor-finite-subgroups-of-units-in-a-domain-are-cyclic`, `thm-quadratic-and-cubic-irreducibility-test`, `lem-polynomial-gcd-is-stable-under-field-extension`, `thm-polynomial-is-separable-iff-coprime-to-its-derivative`, `lem-content-divisibility-characterisation`, `lem-gauss-content-lemma`, `thm-gauss-lemma-for-integer-polynomials`, `thm-rational-root-theorem`, `thm-reduction-mod-prime-irreducibility-test`, `thm-eisenstein-irreducibility-criterion`, `cor-xn-minus-p-is-irreducible-over-q`, `cex-quadratics-can-have-four-roots-over-composite-residue-rings`, `cex-distinct-polynomials-can-induce-the-same-finite-field-function`, `ex-x-squared-minus-two-is-irreducible-over-q`, `ex-reduction-mod-two-proves-a-cubic-irreducible`, `ex-eisenstein-proves-a-family-irreducible`, `ex-translation-makes-x-four-plus-one-eisenstein`, `ex-formal-derivative-detects-a-repeated-root-in-characteristic-two`, and `cex-the-ideal-x-y-in-a-bivariate-polynomial-ring-is-not-principal`.

## Gate evidence after repair

- Manifest/disk comparison: 58 unique IDs; page counts 44 and 14; every manifest dependency list exactly matches its item's frontmatter.
- Reflow: all 14 changed item files unchanged by canonical reflow.
- Precheck: all 14 changed proof-bearing files pass.
- Strict proof contract: 49/49 checked, 0 errors, 0 warnings.
- Rendercheck: both pages plus all changed items pass real KaTeX and strict frontmatter parsing.
- Prosecheck with warnings: both pages plus all changed items, 0 errors and 0 warnings.
- Content policy: 58 scoped items, 0 errors, 0 warnings.
- Coverage checklist: 118 harvested rows, 0 errors, 0 warnings.
- Finite smoke: 0 configured checks; therefore no bounded-model evidence was available from this gate.
- Repository dependency check: exit 0, no cycles or unresolved references; it reported 151 existing warning-class messages outside this batch disposition.
- `git diff --check` on the batch-3 repair files: clean.

## Fatal-error ledger for step 10

**None found.** No batch-3 item or page has a publish-blocking mathematical error in its title/Statement, proof/counterexample, Facts/dependencies, Remark, or page prose on this read. The 21 findings above are nonfatal 30-second-rule citation/bridge defects and remain subject to Alpha's disk adjudication.

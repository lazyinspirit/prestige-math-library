# Frontier 28 — Step 8 group c adjudication

## Scope and outcome

Group `c` owns batches `4`, `5`, and `6`, six pages, and 80 items. All 40
exact rejection tuples were adjudicated against the current items and opened
dependencies.

- `confirmed_fatal`: 11
- `confirmed_nonfatal`: 22
- `false_positive`: 7
- incoming alerts: 0
- cross-group findings: 0
- repaired and targeted for rejudge: 11

Only the 11 confirmed-fatal items were edited. No published item, nonfatal
item, false-positive item, page, or reading-order artifact changed.

## Source verification

The exact constant in Mertens' third theorem required web verification.

- [MIT 18.785 Problem Set 9](https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/resources/mit18_785f21_pset9/),
  Problem 2(c)--(f), supports the prime-power weighted asymptotic
  `sum Lambda(n)/(n log n) = log log x + gamma + O(1/log x)` and its conversion
  to the Euler-product form.
- [Tao, 254A Notes 1](https://terrytao.wordpress.com/2014/11/23/254a-notes-1-elementary-multiplicative-number-theory/),
  equations (25) and (34) and the calculation before Theorem 26, independently
  supplies the same constant, tail estimate, and product asymptotic.
- [Tao, Mertens' theorems](https://terrytao.wordpress.com/2013/12/11/mertens-theorems/)
  confirms the logarithmic and exponentiated third theorem through a different
  zeta/smoothing route.

## Confirmed fatal repairs

| item | defect and repair |
|---|---|
| `cex-a-closed-subspace-need-not-have-a-best-approximation` | Step 1.1 rebound the fixed witness `x=2e_0` to an arbitrary Cauchy limit. That limit is now `z`, preserving the stated witness. |
| `ex-bertrand-finite-range-verification` | The claimed 466-case scan had only sample witnesses. Ten explicit primes now give overlapping ranges covering every integer from 2 through 467. |
| `ex-coordinate-projections-and-inclusions-on-product-banach-spaces` | The product and linear maps were ill-formed for different scalar fields. The Example and Given block now require one common field. |
| `ex-evaluation-functional-on-c-of-k` | The scalar field was unbound. It is now fixed as real or complex and the domain is written `C(K,mathbb K)`. |
| `ex-first-and-second-mertens-numerics` | The qualitative comparison contradicted every table row. The prose now states the observed reverse comparison and makes no asymptotic inference from three points. |
| `lem-chebyshev-functions-prime-power-comparison` | The proof used the divergent series `sum_{k>=3}x^(1/k)`. Both estimates now stop at `floor(log_2 x)`, after which the theta terms vanish. |
| `lem-weighted-von-mangoldt-harmonic-estimate` | Fact L1 dropped the cited positive-divisor restriction and made `Lambda(d)` ill-typed on negative divisors. The restriction `d>0` is restored. |
| `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm` | Fact L3 was false for the zero class on a zero-measure space. The zero class is handled first and the level-set argument is restricted to `M>0` and `0<epsilon<M`. |
| `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p` | Fact L2 changed Hölder's representative domains into quotient spaces. The calligraphic finite-exponent domains and endpoint representative form are restored. |
| `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` | Countably many near-maximizing sets were chosen without Choice. The theorem, dependencies, Given block, and selection step now carry Countable Choice. |
| `thm-third-mertens-theorem-for-primes` | The exact constant was attributed to a fact that did not state it. The proof now records the exact source-checked prime-power asymptotic and locally derives the Euler-product estimate with an explicit `O(1/log x)` tail. |

## Confirmed nonfatal decisions

These claims are correct; each objection is closed by an immediate local
derivation or an exact dependency already present. Their files were not edited.

| item | disposition |
|---|---|
| `def-quotient-seminorm` | Homogeneity is immediate by rescaling `M`; the justified and following lemmas supply representative independence and the triangle inequality. |
| `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm` | A bounded operator has closed kernel by the one-line norm-bound limit argument. |
| `lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures` | The defining norm bound immediately implies continuity. |
| `lem-central-binomial-coefficient-bounds` | The canonical order-preserving natural-to-real embedding closes the omitted coercion notation. |
| `lem-central-binomial-coefficient-prime-valuation` | Logarithm positivity and monotonicity immediately give the displayed bound. |
| `lem-chebyshev-psi-prime-power-expansion` | The opened theta definition covers `1<=y<2` and makes those sums empty. |
| `lem-composition-operator-norm-inequality` | Composition is linear and step 1.1 itself proves boundedness. |
| `lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities` | The norm bound gives the continuity used in the limit. |
| `lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu` | The proof establishes exactly `mu(E)=0 => nu(E)=0`. |
| `lem-prime-counting-chebyshev-partial-summation` | Theta's defining prime sum makes it constant on `[n,n+1)`. |
| `lem-quotient-seminorm-triangle-inequality` | Adding `m_1+m_2 in M` leaves a coset unchanged directly. |
| `lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q` | Dominated convergence applies under the displayed integrable majorant. |
| `thm-bertrands-postulate` | The exact cited valuation lemma contains the layer formula omitted from the local summary. |
| `thm-bounded-below-iff-injective-with-closed-range` | Absolute convergence makes partial sums Cauchy; completeness supplies their limit. |
| `thm-bounded-operator-space-is-banach` | The immediately preceding lemma proves the operator norm is a norm. |
| `thm-chebyshev-theta-linear-bounds` | The exact cited valuation lemma and integer prime factorization supply the omitted bridge. |
| `thm-complemented-subspace-iff-range-of-a-bounded-projection` | `ran(P)=ker(I-P)` and the proof's bounded-kernel argument makes the range closed. |
| `thm-extension-of-a-bounded-map-from-a-dense-subspace` | For bound zero, `T` and its extension are identically zero. |
| `thm-first-mertens-theorem-for-primes` | The logarithm derivative is already a dependency and the square-root derivative is elementary. |
| `thm-quotient-of-banach-by-closed-subspace-is-banach` | `q` is the canonical linear coset map underlying the cited quotient definition. |
| `thm-sigma-finite-duality-for-bounded-functionals-on-l-p` | Both explicit norm bounds immediately imply continuity. |
| `thm-universal-property-of-the-normed-quotient` | The operator norm and least-bound property were defined earlier on the same page. |

## False positives

| item | reason |
|---|---|
| `cex-shoups-product-bound-does-not-determine-mertens-constant` | L1 is an accurate non-load-bearing interpretation; the explicit functions independently refute the claim. |
| `cor-ell-p-duality-by-counting-measure` | Finite initial segments have finite counting measure by definition, and the proof exhibits the exhaustion. |
| `def-bounded-bilinear-map` | The opened complex-convention dependency explicitly supplies the convention and scalar field. |
| `def-bounded-linear-operator` | The same opened dependency supplies exactly the complex convention the rejection says is absent. |
| `def-operator-norm` | The unit-ball value set contains zero, boundedness bounds it above, and the ambient real field is complete. |
| `ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm` | The displayed norm ratios are the unbounded positive integers. |
| `thm-chebyshev-prime-counting-bounds` | Theta and the integral denominator have the required signs by elementary consequences of their definitions. |

## Rejudge targets

1. `cex-a-closed-subspace-need-not-have-a-best-approximation`
2. `ex-bertrand-finite-range-verification`
3. `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`
4. `ex-evaluation-functional-on-c-of-k`
5. `ex-first-and-second-mertens-numerics`
6. `lem-chebyshev-functions-prime-power-comparison`
7. `lem-weighted-von-mangoldt-harmonic-estimate`
8. `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`
9. `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p`
10. `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`
11. `thm-third-mertens-theorem-for-primes`

No alert, cross-group, or published-repair row was needed.

## Validation and blockers

- Focused precheck and rendercheck passed all 11 repaired items.
- Content policy passed batches 4, 5, and 6 with 0 errors and 0 warnings.
- Strict proof contracts passed: 17/17, 24/24, and 21/21.
- Citation fidelity checked 215 citations: no missing quote or widening candidate.
- Boundary audit checked 496 rows with no contradicted disposition.
- Risk review passed all three owned contract files with 0 errors.
- `depcheck --quiet` exited 0; its 336 warnings are standing advisories.
- The exact join contains 40 unique group-c adjudications: 11 fatal, 22 nonfatal, and 7 false positives.
- Defect-ledger validation passed for all 303 current `frontier-28` rows.
- Step-8 guard passed: all 110 current Step-8 item changes are licensed.
- Step-8 scope check passed: 424 items partitioned, 0 open rejections, and 0 cross-group alerts.

There is no group-c mathematical blocker. The whole-run fatal-to-defect linkage
check was run while other groups were still appending their rows; all 11
group-c fatal tuples have exact matching rows in
`research/frontier-28-alpha-c-step8-ledger-rows.json`.

## Step 8 preflight round 1

The authoritative envelope named three failed whole-level gates:
`proof-contract`, `risk-report`, and `citation-fidelity`. It assigned the exact
union of the `scope` arrays in the batch 4, 5, and 6 proof-contract files:
62 owned proof-bearing items. It contained zero `live_tuples`, so no new
content repair or licensing row was permitted.

Two additional envelope IDs had unknown scope and no owner:
`thm-projective-module-characterizations` and
`def-normal-and-conormal-bundles-of-an-embedded-submanifold`. They are outside
group-c ownership and were not touched.

Focused results:

- strict proof contracts: 17/17, 24/24, and 21/21; zero errors;
- reviewed risk reports: 17, 24, and 21 routed items; zero errors;
- citation fidelity: 215 citations over 62 items, no missing quote and no
  widening candidate;
- boundary audit: 496 rows, no contradicted disposition;
- Step-8 guard: 112/112 current changes licensed;
- Step-8 scope: 424 items partitioned, zero open rejection and zero alert.

Preflight changed no item, proof contract, manifest, adjudication, defect row,
impact record, or verification record. This report section is the only
group-c file changed by the preflight dispatch. Licensing rows: none. Blocker:
none for group c; the remaining whole-level failures belong to other groups.

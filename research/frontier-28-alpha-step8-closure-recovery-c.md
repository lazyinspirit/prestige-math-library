# Frontier 28 — Step 8 group c rejudge closure recovery, round 1

## Exact envelope

The authoritative `8-rejudge` envelope assigned 11 current unadjudicated
tuples, all run items owned by group `c`. I handled exactly those tuples and
did not use or modify another group's rows.

- `confirmed_fatal`: 7
- `confirmed_nonfatal`: 4
- `false_positive`: 0
- cross-group alerts: 0
- blockers: 0

## Exact outcomes

| item | context_sha256 | outcome |
|---|---|---|
| `cex-a-closed-subspace-need-not-have-a-best-approximation` | `64b43e2f5beaf62c7e2b990e85f03ea4fbc7dec9e6687115a3ee5aa5afc49e75` | `confirmed_fatal` |
| `ex-bertrand-finite-range-verification` | `43d1ec9eb8464dab31d1a10be1d1f19b69f0e6d90ade40e79372556903ba2d0d` | `confirmed_fatal` |
| `ex-coordinate-projections-and-inclusions-on-product-banach-spaces` | `81ae81ad3e0e0fc315470564239d80e9f6570932731a3f70e33b6136e628ade1` | `confirmed_nonfatal` |
| `ex-evaluation-functional-on-c-of-k` | `89ba0cae799fa8a73abbb07fdc3d7b97600043d025737fdc7c7675414058b7c4` | `confirmed_fatal` |
| `ex-first-and-second-mertens-numerics` | `a9d14cb36453d20082851c09104b80d1ebe73faa87bfbff3cd625daab7c0514f` | `confirmed_nonfatal` |
| `lem-chebyshev-functions-prime-power-comparison` | `5d876f95b5d75b6f0a88c4efcd92f862d3ca63b193a909de6462890b36a9075f` | `confirmed_nonfatal` |
| `lem-weighted-von-mangoldt-harmonic-estimate` | `9e70072ce19cccb7c2e35176265850921ff5699420346ef8df7f287d37fcc1eb` | `confirmed_fatal` |
| `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm` | `b6ce31362ee948b3faecd416a3845e17beb2c65eb42bf2a87ea681fece8c16f5` | `confirmed_fatal` |
| `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p` | `4851ff35769ae232cb1ab673c45eaf9719cc48e1961568f2877046b9b53c4e4f` | `confirmed_nonfatal` |
| `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` | `cebdf5468d780fef7649a4c8fba5fd7f0abaac5237828a76d586bc07751296b4` | `confirmed_fatal` |
| `thm-third-mertens-theorem-for-primes` | `b2f0c75472179dc4ad10d3a8b48875126a27e32ce1cc82ad94d4ac9b40fb7b23` | `confirmed_fatal` |

The exact append is in `research/frontier-28-judge-adjudications.jsonl`. The
seven matching second-cycle defect rows were appended through the locked
interface from
`research/frontier-28-alpha-c-step8-rejudge-round1-ledger-rows.json`.

## Licensed repairs

| item | repair |
|---|---|
| `cex-a-closed-subspace-need-not-have-a-best-approximation` | Fixed `c_0` as the real sequence space, licensing coordinatewise limits and the later order argument. |
| `ex-bertrand-finite-range-verification` | Corrected the false claim that every consecutive certificate range overlaps: the ranges overlap or meet consecutively. |
| `ex-evaluation-functional-on-c-of-k` | Replaced the undefined proof-domain abbreviation `C(K)` by the stated `C(K,mathbb K)`. |
| `lem-weighted-von-mangoldt-harmonic-estimate` | Restricted every outer sum in steps 1.1–2.1 to positive integers `1<=m<=x` or `1<=d<=x`. |
| `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm` | Restated the essential-bound and level-set fact for a measurable representative `u` of the `L^infinity` class. |
| `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity` | Defined the zero extension `g` of `g_Z` on all of `X`, proved `g in L^q(mu)`, and used that global class in representation and uniqueness. |
| `thm-third-mertens-theorem-for-primes` | Began the weighted von Mangoldt sum at `n=2`, excluding the undefined `n=1` quotient. |

## Confirmed nonfatal dispositions

- `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`:
  coordinatewise linearity is an immediate omitted line; all norm calculations
  and claims are correct.
- `ex-first-and-second-mertens-numerics`: the two facts are accurate
  qualitative summaries and carry no formula-sensitive inference in the
  repaired comparison.
- `lem-chebyshev-functions-prime-power-comparison`: monotonicity follows
  immediately from the nonnegative prime-sum definition in `[L3]`; only the
  local tag is omitted.
- `thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p`: the listed
  bounded-functional dependency explicitly defines the unit-ball operator
  norm; step 4.1 omits only a direct fact/tag.

These four item files were not edited.

## Rejudge targets

1. `cex-a-closed-subspace-need-not-have-a-best-approximation`
2. `ex-bertrand-finite-range-verification`
3. `ex-evaluation-functional-on-c-of-k`
4. `lem-weighted-von-mangoldt-harmonic-estimate`
5. `prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm`
6. `thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity`
7. `thm-third-mertens-theorem-for-primes`

## Validation

- focused precheck: 7/7 repaired items passed;
- focused rendercheck: 7/7 repaired files passed;
- content policy: batches 4, 5, and 6 passed with zero errors and warnings;
- strict proof contracts: 17/17, 24/24, and 21/21 passed;
- citation fidelity: 215 citations, no missing quote or widening candidate;
- boundary audit: 496 rows, no contradicted disposition;
- dependency check: exited successfully with standing advisories only;
- defect-ledger validation: 370 current run rows, zero errors;
- exact envelope join: 11 tuples, 11 unique outcomes, 7 fatal and 4 nonfatal;
- exact fatal-to-defect linkage: seven rows, zero missing links;
- repair integrity: all seven fatal items changed and all four nonfatal items
  remained unchanged;
- Step-8 guard: 112/112 current changes licensed;
- Step-8 scope: 424 items partitioned, zero open rejection and zero alert.

No item is owned by no group in this envelope. No cross-group or published
repair was needed. Group-c blocker: none.

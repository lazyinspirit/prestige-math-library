# Frontier 32 — reader report, batch 7

## Scope opened

I read the batch manifest, its proof contracts, coverage record, notes, all
four assigned page files, and all 53 assigned item files.

- **Perron A:** `def-starred-summatory-function`, `lem-perron-kernel`,
  `lem-truncated-perron-kernel`, `thm-perron-formula`,
  `thm-truncated-perron-formula`, `def-half-weighted-chebyshev-psi`,
  `def-riemann-zeta-zero-counting`, `thm-riemann-von-mangoldt-zero-counting`,
  `cor-zeta-zero-count-unit-interval`,
  `lem-local-logarithmic-derivative-zeta`,
  `lem-logarithmic-derivative-zeta-left-half-plane`,
  `lem-von-mangoldt-explicit-formula-residues`,
  `thm-von-mangoldt-explicit-formula-smoothed`, and
  `thm-von-mangoldt-explicit-formula-truncated`.
- **Perron B:** `ex-perron-kernel-at-and-away-from-the-jump`,
  `ex-perron-formula-for-a-finite-dirichlet-polynomial`,
  `ex-von-mangoldt-residue-table`,
  `ex-smoothed-versus-sharp-explicit-formula`,
  `ex-selecting-an-admissible-contour-height`,
  `cex-an-unordered-infinite-zero-sum-is-not-a-formula`, and
  `cex-right-continuous-psi-has-the-wrong-perron-endpoint`.
- **Prime-ideal A:** `def-absolute-norm-of-an-ideal`,
  `lem-nonzero-number-field-ideal-has-finite-quotient`,
  `thm-number-field-integral-ideal-factorisation-in-zf`,
  `thm-principal-ideal-norm-is-absolute-field-norm`,
  `thm-ideal-norm-is-multiplicative`, `cor-norm-of-a-prime-ideal`,
  `def-prime-above-and-residue-degree`, `def-ramification-index`,
  `thm-fundamental-identity-for-primes-in-number-fields`,
  `def-split-inert-ramified-and-unramified-prime`,
  `thm-ramification-and-residue-degrees-in-towers`,
  `thm-dedekind-kummer-prime-factorisation`,
  `cor-eisenstein-prime-is-totally-ramified`,
  `thm-ramified-primes-and-the-number-field-discriminant`,
  `cor-only-finitely-many-primes-ramify`,
  `def-trace-dual-and-codifferent-of-a-number-field`,
  `lem-codifferent-is-a-fractional-ideal`, `def-different-of-a-number-field`,
  `thm-different-of-a-monogenic-number-field`,
  `thm-discriminant-is-the-norm-of-the-different`,
  `thm-prime-support-of-the-different-is-ramification`,
  `def-tame-and-wild-ramification`,
  `thm-different-exponent-in-tame-and-wild-ramification`, and
  `cor-discriminant-valuation-from-different-exponents`.
- **Prime-ideal B:** `ex-prime-factorization-in-quadratic-fields`,
  `ex-dedekind-kummer-in-a-cubic-field`,
  `cex-dedekind-kummer-without-the-index-hypothesis`,
  `ex-eisenstein-total-ramification`, `ex-quadratic-field-codifferent`,
  `ex-cyclotomic-different-preview`, `ex-tame-different-exponent`, and
  `ex-wild-different-exponent`.

I also opened every direct dependency needed by these claims, including the
published zeta, contour, Gamma, number-field, trace, fractional-ideal, and
cyclotomic targets. I independently checked the primary passages: Kedlaya
§10.2--10.3 (including Lemmas 10.3--10.4), Milne Proposition 3.53 and its
valuation proof, and Conrad Examples 4.2--4.5 and Corollary 4.15.

## Repairs made

1. `cor-zeta-zero-count-unit-interval`: the old subtraction
   `N(T+1)-N(T)` did not control a zero at the lower closed endpoint. The
   proof now uses the buffered count `N(T+2)-N(T-1)` for `T >= 3`, and handles
   the compact range separately.
2. `thm-von-mangoldt-explicit-formula-smoothed`: the Mellin integral was used
   at `-2k` without defining the required continuation. The statement and
   proof now define the continuation and derive
   `\widetilde\phi(s)=(y^{s+1}-x^{s+1})/((y-x)s(s+1))`, including its
   residue at zero, which accounts for `-log(2 pi)`.
3. `thm-number-field-integral-ideal-factorisation-in-zf`,
   `thm-ideal-norm-is-multiplicative`, and
   `thm-fundamental-identity-for-primes-in-number-fields`: replaced the
   unsupported claim that localising a finite ideal lattice itself produces a
   chain of powers. The proofs now state the noetherian/integrally-closed/
   dimension-one reduction to local DVRs, the finite-prime and least-exponent
   construction, and the needed residue-layer/free-module calculations.
4. `cor-eisenstein-prime-is-totally-ramified`: replaced the invalid appeal to
   Dedekind--Kummer (which would have required its global monogeneity
   hypothesis) with the valuation argument of Milne Proposition 3.53. The
   original general Eisenstein statement is retained.

The six material repairs above have matching updates in
`frontier-32-batch-7.proof-contracts.json`. None had a stale
`verification.judge` record to remove.

## Verdicts

| Page | Verdict |
| --- | --- |
| `perron-inversion-and-the-explicit-formula` (A) | Pass after repairs 1--2. Symmetric limits, half weighting, residue signs, finite sharp zero sum, and smoothing convention agree. |
| `perron-inversion-and-the-explicit-formula-examples` (B) | Pass. Endpoint, finite-polynomial, residue, contour-height, and zero-ordering examples agree with the A-page results. |
| `prime-ideal-decomposition-ramification-and-the-different` (A) | Pass after repairs 3--4. The finite/ZF route, index condition, residue-degree identities, and tame/wild distinction are retained. |
| `prime-ideal-decomposition-ramification-and-the-different-examples` (B) | Pass. The quadratic, bad-index, Eisenstein, cyclotomic, tame, and wild computations have the stated hypotheses and conclusions. |

No uneditable defect remains; the findings artifact therefore has an empty
array.

## Validation and blockers

- Reflow and focused precheck passed for every changed item.
- `proof-contract --strict`: 43/43, no errors or warnings.
- `content-policy`: 53 scoped items, no errors or warnings.
- `manifest-deps`: 53 items, no normalisations or errors.
- `coverage-checklist --require-destination`: 2 pages and 118 harvested
  results, no errors or warnings.
- `validate-plan research/plan-spec.json`: completed with no cycles, forward
  references, B-page dependencies, or unresolved IDs.

No mathematical or source blocker remains. The only environmental observation
is that the live `.autopilot` status is `frontier-23`, not `frontier-32`; the
named frontier-32 batch artifacts were present and auditable, so this did not
block the assigned reader work.

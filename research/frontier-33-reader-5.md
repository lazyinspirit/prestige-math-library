# frontier-33 reader report — batch 5

## Scope opened

I read the current batch manifest, proof-contract entries, and all four current
pages:

- A: `classical-zero-free-region-and-the-prime-number-theorem` (20 items)
- B: `classical-zero-free-region-and-the-prime-number-theorem-examples` (8 items)
- A: `decomposition-inertia-and-frobenius` (29 items)
- B: `decomposition-inertia-and-frobenius-examples` (7 items)

The item inventory was fully opened. The analytic-number-theory pair contains
`lem-zeta-logarithmic-derivative-zero-bound`,
`lem-zeta-three-four-one-logarithmic-derivative-inequality`,
`thm-riemann-zeta-classical-zero-free-region`,
`lem-zeta-horizontal-logarithmic-derivative-comparison`,
`thm-zeta-bounds-in-classical-zero-free-region`,
`cor-zeta-zero-count-near-the-one-line`,
`lem-zeta-reciprocal-zero-sum-bound`,
`lem-zeta-explicit-formula-zero-free-error-balance`,
`thm-chebyshev-psi-prime-number-theorem-error`,
`cor-chebyshev-theta-prime-number-theorem-error`, `def-logarithmic-integral`,
`lem-logarithmic-integral-asymptotic-expansion`,
`thm-prime-number-theorem-logarithmic-integral`, `cor-prime-number-theorem`,
`cor-nth-prime-asymptotic`, `lem-newman-damped-contour-estimates`,
`thm-newman-zagier-tauberian-theorem`,
`lem-monotone-chebyshev-tauberian-desmoothing`,
`lem-dirichlet-character-chebyshev-laplace-transform`,
`thm-prime-number-theorem-arithmetic-progressions`,
`ex-the-three-four-one-trigonometric-inequality`,
`ex-zero-free-region-parameter-balance`,
`ex-optimizing-the-prime-number-theorem-contour-height`,
`ex-from-psi-to-the-logarithmic-integral`,
`ex-newman-tauberian-prime-number-theorem`,
`ex-prime-number-theorem-in-a-small-progression`,
`cex-dirichlet-density-alone-does-not-give-a-counting-asymptotic`, and
`rem-the-classical-zeta-region-is-not-a-uniform-dirichlet-l-region`.

The algebraic-number-theory pair contains
`thm-completion-of-an-absolutely-valued-field`,
`def-normed-vector-space-over-an-absolutely-valued-field`,
`thm-finite-dimensional-norm-equivalence-over-a-complete-valued-field`,
`lem-uniqueness-of-an-extended-complete-field-absolute-value`,
`lem-hensel-factor-lifting-over-a-complete-valued-field`,
`lem-irreducible-polynomial-coefficients-in-a-complete-valuation-ring`,
`thm-unique-extension-of-a-nonarchimedean-absolute-value`,
`thm-number-field-places-classification`,
`def-completion-of-a-number-field-at-a-prime`,
`lem-number-field-completions-as-local-polynomial-factors`,
`thm-galois-action-on-primes-above-a-prime-is-transitive`,
`cor-galois-prime-decomposition-efg`, `def-decomposition-group-of-a-prime`,
`thm-decomposition-group-and-completion`, `def-inertia-group-of-a-prime`,
`lem-lifting-residue-frobenius-by-galois-conjugates`,
`thm-decomposition-inertia-exact-sequence`,
`cor-orders-of-decomposition-and-inertia-groups`,
`thm-conjugacy-of-decomposition-and-inertia-groups`,
`thm-decomposition-and-inertia-in-towers`,
`thm-decomposition-and-inertia-fixed-fields`, `def-arithmetic-frobenius-coset`,
`thm-unramified-frobenius-element-exists-uniquely`,
`thm-frobenius-elements-above-a-prime-are-conjugate`,
`thm-frobenius-order-is-residue-degree`,
`cor-complete-splitting-and-trivial-frobenius`,
`cor-frobenius-compatibility-in-finite-towers`,
`lem-good-polynomial-reduction-kills-inertia`,
`thm-frobenius-cycle-type-and-prime-splitting`,
`ex-decomposition-inertia-in-a-quadratic-field`,
`ex-gaussian-and-eisenstein-frobenius`,
`ex-frobenius-in-a-small-cyclotomic-field`,
`ex-nonabelian-frobenius-conjugacy-class`,
`ex-decomposition-groups-in-a-tower`,
`cex-ramified-frobenius-has-no-canonical-lift`, and
`cex-frobenius-cycle-type-needs-good-reduction`.

I also opened the current statements/definitions of all 58 external direct
dependencies needed by these arguments: the zeta/Hadamard, explicit-formula,
Chebyshev, contour, Dirichlet-L, completion/norm, local-field, ideal,
finite-field, Galois, ramification, discriminant, and quadratic-field carriers
listed in the manifest dependency lists. No missing direct target was found.

## Review result

The analytic A page's zero-free-region, finite explicit-formula, Tauberian, and
fixed-modulus progression arguments preserve their stated height, pole,
zero-free, and fixed-modulus qualifications. The algebraic A page correctly
keeps the normalized valuation convention distinct from literal extensions,
and its decomposition/inertia, Frobenius, tower, and good-reduction claims
preserve their choices of primes and ramification hypotheses. The remaining
B examples and counterexamples were also checked against their current direct
dependencies and elementary computations.

One fatal unlicensed inference remains in the analytic B page:

- `items/ex-from-psi-to-the-logarithmic-integral.md`, Verification 1.1, cites
  only `thm-prime-number-theorem-logarithmic-integral`. Its F1 statement is the
  quantitative `pi`--`Li` conclusion, but the verification assumes the stronger
  quantitative `psi` estimate and the prime-power comparison. Those facts do
  not follow from F1 and are not cited in the item or its proof contract.
  `thm-chebyshev-psi-prime-number-theorem-error` and
  `lem-chebyshev-functions-prime-power-comparison` are the relevant missing
  support.

This item belongs to a B-page body, which the dispatch expressly excludes from
reader edits. It is therefore reported in
`frontier-33-reader-findings-5.json`, not repaired here.

## Edits and validation

No mathematical item, page body, proof contract, plan, or published carrier was
edited. The writes are this report, the required findings artifact, and the
current `research/frontier-33-author-check-5.json` validator receipt produced
by the focused author-check command.

Focused current checks:

- `node tools/tsx-run.mjs tools/precheck.mts <all 64 batch-5 items>` — 57
  proof-bearing items checked, 0 failures (the seven definitions/remarks are
  not proof-bearing).
- `node tools/tsx-run.mjs tools/author-check.mts frontier-33 5` — completed
  successfully; its current artifact records passing precheck, rendercheck,
  content-policy, and proof-contract checks.

## Page verdicts and blocker

| Page | Verdict |
| --- | --- |
| `classical-zero-free-region-and-the-prime-number-theorem` | pass |
| `classical-zero-free-region-and-the-prime-number-theorem-examples` | fatal uneditable defect reported |
| `decomposition-inertia-and-frobenius` | pass |
| `decomposition-inertia-and-frobenius-examples` | pass |

Blocker: the sole repair requires altering a B-page item (and its proof contract),
outside this reader's edit authority. No pre/post hash artifact for batch 5 was
available beyond `research/frontier-33-step6-hash-5-pre.json`, so no finding was
removed as already touched.

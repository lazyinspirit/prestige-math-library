# Frontier 8 current-context paired-judge adjudication

**Frozen input:** `research/frontier-8-current-rejection-candidates.json`, generated
`2026-08-01T21:59:30.947Z`.

## Coverage

Alpha independently reviewed all **201** current rejection candidates, in the
input order and against the current hash-attested item text.  A current-context
row, including a `notes` field, was appended to
`research/frontier-8-judge-adjudications.jsonl` for every candidate.  The last
201 ledger rows exactly match the candidate file on `(id, model,
context_sha256)`; 24 unchanged items happen to share an older hash, but their
current verdicts were adjudicated anew rather than inherited.

No library item, proof contract, prompt, or render source was changed during
this adjudication.

| Judge | Candidates | Fatal | Nonfatal | False positive |
| --- | ---: | ---: | ---: | ---: |
| DeepSeek v4 Pro | 72 | 13 | 56 | 3 |
| GPT-5.6 Terra | 129 | 17 | 109 | 3 |
| **Total** | **201** | **30** | **165** | **6** |

Fatal classifications are split into 6 logic defects, 8 dependency-citation
defects, and 16 other semantic/definition defects.  The global adoption of AC,
Countable Choice, and Dependent Choice was applied; rejections based only on
their omission from an individual statement were false positives.

## Fatal clusters by affected batch owner

### Batch 2 owner — trigonometry, Chebyshev, and complex analysis

- `def-chebyshev-polynomials-first-and-second-kind`: supply a valid
  second-order recurrence construction and polynomial-operation basis.
- `def-complex-exponential`, `def-complex-integer-powers`,
  `def-complex-metric-convergence-and-continuity`,
  `def-complex-polynomial-degree-and-monic`, and
  `def-complex-series-power-series-and-absolute-convergence`: repair the
  formal field embeddings, finite-complex-sum basis, metric licensing, and
  power-series radius definition as one coherent foundational patch.
- `ex-trigonometric-identities-worked-at-pi-over-twelve`: cite or derive the
  actual quarter- and sixth-angle values and the subtraction formula used.
- `thm-cauchy-hadamard-for-complex-power-series`: replace the invalid inference
  from divergence of the modulus series with a valid term/radius argument.
- `thm-eulers-formula`: establish a valid complex absolute-convergence
  splitting/rearrangement result before separating even and odd terms.

### Batch 3 owner — multivariable analysis and approximation

- `def-ck-and-multi-index-notation-in-several-variables` and
  `def-multivariable-taylor-polynomial`: repair the real finite-product and
  canonical-natural typing basis.
- `thm-symmetry-of-higher-mixed-partials` and
  `thm-young-mixed-partial-theorem`: rebuild the adjacent-swap argument and
  make the two-variable remainder argument explicit; these are a shared
  mixed-partial spine.
- `def-bernstein-polynomial`: change the universal exact-degree assertion to
  the correct degree-at-most assertion (with the zero polynomial case).
- `def-tent-function-and-takagi-series`: define the ceiling operation or use an
  equivalent already-defined formula.
- `cex-noncompact-domain-breaks-arzela-ascoli` and
  `cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence`:
  make the compact-domain scope exact before using the library's
  equicontinuity convention.

### Batch 4 owner — matchings, flows, and connectivity

- `def-integral-network-flow-cut-and-residual-network` and
  `def-local-path-packings-and-separators`: make terminals/tail/head typed and
  define paths/disjointness using labelled arc occurrences, so the framework
  handles parallel arcs consistently.

### Batch 5 owner — Samuel compactification

- `def-samuel-compactification`: make the defining equivalence biconditional,
  rather than stating only a necessary condition.

Batch 1 has no newly confirmed-fatal current-context candidate.  Its remaining
current rejections are localized citation or proof-clarity repairs.

## Triage rule applied

Any real gap that a competent human can close in under 30 seconds was retained
as `confirmed_nonfatal`; `false_positive` is reserved for a substantively
incorrect model objection.  No repair or rejudge has begun.

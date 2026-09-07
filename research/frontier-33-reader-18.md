# Frontier 33 — reader report, batch 18

## Scope opened

- Assigned A page: `library/computability-theory/arithmetization-and-the-sum-check-protocol.md`.
- Assigned B page: `library/computability-theory/arithmetization-and-the-sum-check-protocol-examples.md`.
- Assigned A items: `def-arithmetization-of-a-boolean-formula`, `lem-arithmetization-agrees-on-boolean-inputs`, `lem-formula-arithmetization-degree-and-evaluation-cost`, `def-multilinear-extension`, `thm-existence-and-uniqueness-of-multilinear-extension`, `lem-multilinear-extension-streaming-evaluation`, `lem-multilinear-extension-table-evaluation`, `lem-degree-under-arithmetized-quantifiers`, `rem-polynomial-identity-bounds-for-sum-check`, `def-sum-check-instance-and-protocol`, `lem-sum-check-perfect-completeness`, `lem-first-false-round-is-caught-by-root-bound`, `thm-sum-check-soundness`, `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`, `cor-sum-check-field-size-error-budget`, `prop-arithmetized-formula-counting-sum`, `def-linearity-test`, `def-boolean-cube-fourier-coefficients`, `lem-boolean-cube-fourier-inversion-and-parseval`, `lem-blr-acceptance-fourier-identity`, `thm-blr-linearity-test-soundness`, `def-self-correction-of-a-noisy-linear-function`, `thm-linear-self-correction`, and `fs-sum-check-computes-all-exponential-summands`.
- Assigned B items: `ex-existence-and-uniqueness-of-multilinear-extension`, `ex-sum-check-three-variable-transcript`, `ex-linear-self-correction`, and `cex-sum-check-computes-all-exponential-summands`.
- Opened direct item dependencies needed by these claims: Boolean-formula syntax, fields, iterated polynomial rings, the root bound, Schwartz--Zippel, finite-field order, and interactive-protocol completeness/soundness. Opened the three declared prerequisite pages: interactive proofs/public coins, finite fields, and Cook--Levin.
- Read the batch manifest, proof contracts, coverage and author-check artifacts, current A/B page summaries, and the live cited source sections: Thaler §§3.4--3.5 and §4.1, and Arora--Barak §§8.5.1--8.5.3, 18.4.1, and 19.3.1--19.3.2.

## Mathematics review

The arithmetization gate identities preserve Boolean values in every field, and the occurrence-count degree and formula-tree evaluation bounds are correctly separated from expanded-polynomial size. The Boolean-cube interpolation formula, its characteristic-two and zero-dimensional cases, and both full-table evaluation algorithms check out.

For sum-check, the coefficient-message timing makes each fresh challenge independent of the fixed message; the one-round root-bound argument and first-false-to-true union bound therefore cover adaptive randomized provers without asserting independence between rounds. The concrete transcript has the stated messages, consistency values, terminal value, and degree sum. The resource statements preserve the distinction between field operations, bit operations, trusted evaluation, and prover work.

The Fourier section uses normalized real characters consistently. Orthogonality, inversion and Parseval give the cubic BLR identity; taking the signed maximum Fourier coefficient gives agreement with a linear (not merely affine) function. The self-corrector correctly uses marginal uniformity and a union bound rather than independence of its two query locations. The examples and the product-polynomial counterexample have the stated boundary cases and computations.

## Repair made

`items/def-sum-check-instance-and-protocol.md` used the phrase “individual degree bounds” without formally requiring the essential condition $\deg_{X_i}g\le d_i$. Perfect completeness and the root-bound soundness lemma both rely on it. The definition now states this condition explicitly for every $i$.

Regenerated the proof-contract citations for every proof-bearing batch item that cites this definition:

- `lem-sum-check-perfect-completeness`
- `lem-first-false-round-is-caught-by-root-bound`
- `lem-sum-check-verifier-is-polynomial-time-given-point-evaluation`
- `fs-sum-check-computes-all-exponential-summands`
- `ex-sum-check-three-variable-transcript`
- `cex-sum-check-computes-all-exponential-summands`

The repaired definition has no `verification.judge` record, so none was stale or removed.

## Checks

- Reflow: `def-sum-check-instance-and-protocol` unchanged after reflow.
- Focused precheck: definition correctly has no proof-bearing strategy, so the focused invocation checked 0 items and reported no failures.
- Scoped precheck: all 21 proof-bearing assigned items passed.
- Assigned A/B pages and all 28 assigned items: rendercheck passed (30 files).
- Content policy: 28 scoped items, 0 errors, 0 warnings.
- Strict proof contracts: 21/21 checked, 0 errors, 0 warnings.
- Citation fidelity: 31 citations over 21 proof-bearing items; every quote found and no widening candidate.
- `depcheck --quiet` was also run and fails only on six existing out-of-scope repository files (three YAML escapes and three unresolved math-looking wikilinks); none is in this batch or its dependency closure.

## Page verdicts

| Page | Verdict |
| --- | --- |
| `arithmetization-and-the-sum-check-protocol` | Pass after the explicit-degree-bound repair. |
| `arithmetization-and-the-sum-check-protocol-examples` | Pass. |

## Uneditable defects and blockers

No uneditable defect remains in the assigned pages, items, or dependency closure. The unrelated repository-wide `depcheck` residue above is not a blocker for this batch.

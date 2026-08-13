## Reader 5 — audit batch 6 (41 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 303 | A | `complex-differentiability-and-cauchy-riemann` | 28 |
| 304 | B | `complex-differentiability-and-cauchy-riemann-examples` | 13 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-6.notes.md` and
`research/frontier-12-batch-6.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-5.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 41 items is
a lot; a shallow pass over all of them is worth less than a real pass over the
proof-bearing ones plus a check of every citation.

Specific things known to be live in this run:

- **Hypotheses.** `char != 2` for polarisation and orthogonal diagonalisation;
  ordered fields for Sylvester's inertia; star-shaped rather than merely
  connected for the converse of closedness; smallness conditions in the
  category-theory limits; pairwise versus mutual independence in probability;
  nonnegativity for Markov; the split-characteristic-polynomial hypothesis where
  the source assumed an algebraically closed field.
- **Citation fidelity.** A `[F#]`/`[A#]`/`[L#]` fact must state the cited
  proposition itself. This run already caught one at scaffold stage — a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`. Open the
  cited item on disk and compare; do not trust the restatement.
- **Green's theorem** (if batch 4) is deliberately scoped to elementary regions
  and finite unions. Complaining it does not cover arbitrary Jordan domains is
  NOT a finding. A proof step that quietly assumes a Jordan domain IS one.
- **Titles.** A title or Statement claiming more than the proof delivers is
  fatal, and the step-7 judges cannot see a false title.

Item ids, for your checklist:

- `rem-complex-plane-euclidean-dictionary`
- `def-complex-domain`
- `def-complex-differentiability-holomorphic-and-entire`
- `lem-uniqueness-of-the-complex-derivative`
- `def-wirtinger-derivatives`
- `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`
- `cor-complex-differentiability-implies-continuity`
- `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic`
- `cor-cartesian-and-polar-cauchy-riemann-equations`
- `thm-algebra-of-complex-derivatives`
- `thm-chain-rule-for-complex-derivatives`
- `thm-wirtinger-chain-rule-for-real-differentiable-maps`
- `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps`
- `cor-continuous-complex-derivative-gives-c1-components`
- `thm-derivative-of-a-continuous-complex-local-inverse`
- `thm-complex-polynomials-and-rational-functions-are-holomorphic`
- `thm-complex-exponential-is-entire-with-derivative-itself`
- `thm-zero-complex-derivative-on-a-domain-implies-constant`
- `cor-real-valued-holomorphic-function-is-constant`
- `cor-constant-modulus-holomorphic-function-is-constant`
- `cor-holomorphic-function-with-holomorphic-conjugate-is-constant`
- `def-oriented-conformal-map-at-a-point`
- `lem-oriented-similarities-are-nonzero-complex-multiplications`
- `thm-nonzero-complex-derivative-iff-oriented-conformal`
- `cor-jacobian-determinant-of-a-holomorphic-map`
- `thm-c2-holomorphic-components-are-harmonic`
- `thm-c2-holomorphic-function-has-holomorphic-derivative`
- `cor-c2-holomorphic-components-have-nonpositive-hessian-determinant`
- `ex-square-function-from-the-complex-difference-quotient`
- `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form`
- `ex-reciprocal-function-from-the-complex-difference-quotient`
- `ex-mobius-map-is-conformal-off-its-pole`
- `ex-square-map-sends-a-grid-to-orthogonal-parabolas`
- `fs-real-differentiability-implies-complex-differentiability`
- `cex-modulus-squared-is-complex-differentiable-only-at-zero`
- `cex-real-part-is-nowhere-complex-differentiable`
- `cex-modulus-is-nowhere-complex-differentiable`
- `ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere`
- `fs-cauchy-riemann-at-a-point-implies-complex-differentiability`
- `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy`
- `fs-zero-complex-derivative-on-an-open-set-implies-constant`

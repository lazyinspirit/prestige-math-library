## refuter-5 — complex differentiability and the Cauchy–Riemann equations

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 303 | A | `complex-differentiability-and-cauchy-riemann` | 28 |
| 304 | B | `complex-differentiability-and-cauchy-riemann-examples` | 13 |

**41 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

This page **founds a new category** (`complex-analysis`) and 53 later pages
inherit the conventions it fixes. Convention errors here are expensive.

The single most important check: this library constructs the complex numbers as
`R[x]/(x^2+1)` in `field-extensions-and-the-complex-numbers`
(`def-complex-numbers-and-arithmetic`,
`thm-complex-numbers-are-the-real-coordinate-plane`). **Open those items on disk**
and confirm every claim this page makes about C agrees with the construction that
is actually there — not with a remembered construction. `rem-complex-plane-euclidean-dictionary`
is the item that pins this; check it states the identification correctly and that
what it claims is preserved really is preserved.

Then concentrate on:

- `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` —
  the theorem the whole page turns on. Check the equivalence is proved in **both
  directions**, and in particular that the direction "CR equations plus real
  differentiability implies complex differentiability" carries the real
  differentiability hypothesis. **CR equations alone do not imply complex
  differentiability** — the standard counterexample is a function satisfying CR
  at the origin without being differentiable there. If the page states the
  converse without the differentiability hypothesis, that is fatal; if it states
  it correctly, check the B page marks the boundary with that counterexample.
- The Wirtinger derivative conventions — factors of `1/2` and the sign on the
  `d/dz-bar` operator are easy to get wrong and 53 pages inherit them.
- The conformality block: check the hypothesis `f'(z) != 0` is present wherever
  angle preservation is claimed.
- The harmonicity block: check what regularity is assumed. Harmonicity of the
  real and imaginary parts needs **twice** real-differentiability, and at this
  order in the library the analyticity of holomorphic functions is almost
  certainly not available — so if `C^2` is assumed it must be a stated hypothesis
  and not smuggled in. Check the harmonic-conjugate construction's domain
  hypothesis.
- `thm-zero-complex-derivative-on-a-domain-implies-constant` — check
  connectedness is a hypothesis and is used.

### Item ids


**`complex-differentiability-and-cauchy-riemann`**

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

**`complex-differentiability-and-cauchy-riemann-examples`**

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

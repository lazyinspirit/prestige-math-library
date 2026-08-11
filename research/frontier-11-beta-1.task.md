# frontier-11, batch 1

You are **Beta-frontier-11-1**. Your writable artifacts are the four
`research/frontier-11-batch-1.*` files named in the brief above.

## Your pages

- **A** `field-extensions-and-the-complex-numbers` (order 54, abstract-algebra) — "Simple Field Extensions and the Construction of the Complex Numbers"
  - **B** `field-extensions-and-the-complex-numbers-examples` (order 55)
  - requires: `polynomial-rings-and-roots`
- **A** `conjugacy-and-simplicity-in-the-symmetric-groups` (order 64, abstract-algebra) — "Conjugacy in $S_n$, Generation, and the Simplicity of $A_n$"
  - **B** `conjugacy-and-simplicity-in-the-symmetric-groups-examples` (order 65)
  - requires: `symmetric-groups-and-the-sign-homomorphism`

## Prose scaffold sections to read

- `research/plan-algebra-track.md`
- `research/plan-algebra-track-expansion.md`

## Batch note

Both pairs are high-leverage unblockers and must be scaffolded so the pages that
cite them can do so directly.

**Order 54** is the sole blocker of `splitting-fields` (56) and a joint blocker of
`inner-product-spaces-and-orthogonality` (94) and
`complex-differentiability-and-cauchy-riemann` (303). Build the quotient
construction properly: `F[x]/(p)` for irreducible `p` as a field, the evaluation
homomorphism and its kernel, the degree and basis `1, a, ..., a^{n-1}` of a simple
algebraic extension, the universal property of adjoining a root, minimal
polynomials, and then `C := R[x]/(x^2+1)` as the worked instance with conjugation,
modulus and the field axioms verified rather than asserted. `R` is not
algebraically closed here and the fundamental theorem of algebra is order 139 —
do not reach for it; if you need it anywhere, that is a forward reference and is
declared, not assumed.

**Order 64** is the sole blocker of `composition-series-and-solvable-groups` (66)
and thence the whole solvable/Sylow chain. `symmetric-groups-and-the-sign-homomorphism`
(44) already owns cycle decomposition, cycle type, parity and the sign
homomorphism — **cite it, do not restate it**. What this page owes: conjugation
in `S_n` computed on cycles, conjugacy classes indexed by cycle type, the class
equation instance for `S_n`, generation results (transpositions, adjacent
transpositions, a transposition plus an n-cycle), conjugacy in `A_n` and where a
class splits, and the simplicity of `A_n` for `n >= 5` with `A_4` as the
explicit counterexample on the B page. The 3-cycle generation lemma for `A_n` is
load-bearing for simplicity — scaffold it as its own item.

# frontier-11, batch 4

You are **Beta-frontier-11-4**. Your writable artifacts are the four
`research/frontier-11-batch-4.*` files named in the brief above.

## Your pages

- **A** `the-determinant-of-a-linear-operator` (order 84, linear-algebra) — "The Determinant of a Linear Operator, Cofactors and Cramer's Rule"
  - **B** `the-determinant-of-a-linear-operator-examples` (order 85)
  - requires: `determinants-of-matrices-over-a-commutative-ring`, `gaussian-elimination-and-row-reduction`
- **A** `the-integral-logarithm-and-its-characterisations` (order 178.1, real-analysis) — "The Integral Logarithm and the Equivalence of Its Characterisations"
  - **B** `the-integral-logarithm-and-its-characterisations-examples` (order 178.2)
  - requires: `the-logarithm-and-general-powers`

## Prose scaffold sections to read

- `research/plan-algebra-track.md` and `research/plan-algebra-track-expansion.md` (order 84)
- `research/plan-realanalysis-pages.md` **§RA-27b** (order 178.1) — this section is
  prescriptive and is the design you are implementing, not a suggestion.

## Batch note

**Order 84** is the highest-leverage unblocker in the run: it alone blocks
`eigenvalues-eigenvectors-and-the-characteristic-polynomial` (86),
`dual-spaces-bilinear-forms-and-inertia` (92) and `free-modules-and-exact-sequences`
(104). `determinants-of-matrices-over-a-commutative-ring` (82) already owns the
matrix determinant, multiplicativity, expansion and the adjugate — **cite it, do
not rebuild it.** What this page owes is the *basis-free* object: `det(T)` defined
via the matrix of `T` in any basis with **well-definedness proved** (the change-of-
basis conjugation argument is the whole point and must be its own item),
`det(T) != 0` iff `T` is invertible, `det(ST) = det(S)det(T)` transported to
operators, the determinant as the induced map on the top exterior power stated
only if you build enough to state it honestly, cofactors and the adjugate for
operators, and Cramer's rule with its exact hypotheses over a commutative ring
versus a field. The B page wants a non-invertible operator with zero determinant,
the change-of-basis invariance shown on a concrete pair of bases, and a
commutative-ring example where `det(T)` is a non-unit so `T` is injective but not
surjective.

**Order 178.1 is an owner-directed standing scope obligation** (`LEVELS.md`
§Step 0.5). It closes **three** gaps and the page is not done with two of them:

1. **The integral as a definition, not an identity.** Define
   `L(x) := \int_1^x dt/t` for `x > 0`, notated `L` and **not** `log`, and derive
   every property from the integral with **no reference to `exp` in any proof**:
   `L' = 1/x` by the first FTC, `L(1) = 0`, strict monotonicity,
   `L(xy) = L(x) + L(y)` by fixing `y` and differentiating `x |-> L(xy) - L(x)`
   to zero (**not** by a change of variables the page would have to import),
   hence `L(2^n) = n L(2)` and unboundedness both ways, hence a bijection
   `(0,inf) -> R` by the IVT; then `E := L^{-1}` with `E' = E`, `E(0) = 1`.
   Only then identify: `E = exp` is a **single** citation of
   `thm-exponential-ivp-uniqueness`, and `L = log` follows by inverting. That one
   citation is the entire bridge and it is the point of the page.
2. **The functional-equation characterisation** — uniqueness of `log` from
   multiplicative-to-additive plus a regularity hypothesis, stated with the
   hypothesis that actually makes it true.
3. **The equivalence theorem** presenting the characterisations as competing
   definitions, the logarithm's analogue of `thm-exponential-definition-equivalence`,
   plus a roadmap remark in the shape of `rem-exponential-roadmap-and-circularity`
   arguing the identification is not circular.

RA-27b also lists what orders 175 and 177 **already own** — `def-natural-logarithm`,
`thm-logarithm-derivative-and-integral`, `thm-natural-logarithm-laws`,
`thm-log-one-plus-x-power-series`, `thm-landau-logarithm-limit`, `def-real-power`,
`def-real-power-by-rational-supremum`, `thm-rational-supremum-power-agrees-with-exp`,
`cor-two-less-than-e-less-than-three`. **Cite these; restate none of them.**
State the corollary that `e` is the unique `x > 0` with `\int_1^x dt/t = 1`.

Note `the-fundamental-theorems-of-calculus` (239) is being scaffolded in batch 2
of this run and is **not** available to you as a dependency — the FTC you cite is
the published one. If you find you need something only order 239 will have, that
is a blocker to record in your notes, not a citation to invent.

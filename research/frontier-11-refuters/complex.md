## Your cluster — `complex`: the four rewritten PUBLISHED items and the field-extension pair

Pages: `field-extensions-and-the-complex-numbers` (A, 21 items, order 54) and
`field-extensions-and-the-complex-numbers-examples` (B, 7 items, order 55).

### Why this cluster is the most dangerous in the run

Four of these items are **`status: published`** and were **materially rewritten**
in this build under owner decision D12:

- `def-complex-numbers-and-arithmetic`
- `thm-complex-numbers-form-a-field`
- `def-complex-conjugate-real-imaginary-part-and-modulus`
- `lem-complex-conjugation-and-modulus-laws`

They previously lived on `the-complex-exponential-and-eulers-formula` (order
189), where ℂ was constructed as the plane ℝ² with coordinate arithmetic. They
now live at order 54 and construct ℂ as the **stem field** ℝ[x]/(x²+1). Their ids
did not change, so **20 published items across the library still cite them** and
must still be served by the new text. Their `verification.audited` was deleted;
they carry no `verification.judge`.

**Attack the rewrite, not just the proofs.** For each of the four:

1. Does the new Statement still say everything the old one said that a consumer
   might have used? A rewritten definition that is *correct* but *weaker* silently
   breaks a consumer 130 pages away. Name any clause the old text had and the new
   text lost, if you can find one in the file's git-visible neighbourhood or infer
   it from what consumers cite it for.
2. **The forward-reference trap.** From order 54 nothing may reach
   `def-p-norms-on-rn` or anything on `rn-as-a-normed-space` (order 167), or the
   order-189 page. The old published `lem-complex-conjugation-and-modulus-laws`
   derived the triangle inequality from the Euclidean norm at order 167. The
   rewrite is supposed to dissolve that via Lagrange's identity
   `(a²+b²)(u²+v²) − (au+bv)² = (av−bu)² ≥ 0`. **Verify the identity by direct
   expansion yourself**, verify the sign case analysis (the step from
   `(au+bv) ≤ |z||w|` to `|z+w| ≤ |z|+|w|` needs `au+bv` possibly negative
   handled), and verify that squaring/unsquaring is licensed by a cited square
   monotonicity fact on **nonnegative** quantities rather than assumed. Then grep
   the four items for any norm, metric, or order-167 reach.
3. `thm-complex-numbers-are-the-real-coordinate-plane` is a **new bridge item**
   added so that published `def-complex-metric-convergence-and-continuity` keeps
   the warrant for its sentence "Under the identification ℂ = ℝ²". Read that
   published consumer, then read the bridge. **Does the bridge actually carry it?**
   The bridge is supposed to state the coordinate bijection and coordinate
   arithmetic *only*, and NOT that the modulus is the Euclidean norm `d_2` — that
   identification needs order 167 and stays at 189. So there are two opposite
   failure modes and you should test for both: (a) the bridge is too weak and the
   published consumers `def-complex-metric-convergence-and-continuity`,
   `thm-complex-plane-is-complete` and
   `lem-complex-polynomial-growth-and-minimum-modulus` need something it does not
   give; (b) the bridge overreaches into the norm identification and is a
   forward reference. Say which, with the consumer's exact sentence quoted.
4. Is ℂ's construction as ℝ[x]/(x²+1) actually **complete** at order 54 — does
   `lem-x-squared-plus-one-is-irreducible-over-the-reals` prove irreducibility
   over ℝ from what is available, and does `thm-irreducible-quotient-adjoins-a-root`
   apply to it with every hypothesis discharged?

### The reader's own repairs in this cluster, which you are re-checking

The independent reader (reader-5) repaired these, mostly by adding a real
completeness dependency that had been assumed. In each case the concern is
whether the *added* citation is now accurate and whether the hypothesis is truly
discharged rather than merely named:

- `thm-every-complex-number-has-a-square-root` — added `cor-cauchy-reals-lub-complete`
  to `[F2]` for the conditional `thm-of-square-roots`, and added `[F5]` for
  coordinate multiplication. Check that the square-root theorem's hypothesis is
  *exactly* what the completeness corollary supplies, and check the explicit
  square-root formula for both signs of the imaginary part and for `b = 0`,
  `a < 0`.
- `ex-rational-square-root-two-as-a-simple-extension` — the reader says the old
  text "promoted an irreducible annihilator to the minimal polynomial without the
  algebraic-element/evaluation-kernel results". Check the repaired chain:
  existence → algebraicity → divisibility → monic irreducible minimal polynomial.
  Is monicity actually established, or assumed?
- `ex-minimal-polynomial-of-nested-radical-two-plus-root-three` — nested radicals,
  degree-4 minimal polynomial. **Verify the polynomial by direct computation** and
  verify the degree claim is proved, not asserted.
- `ex-square-roots-of-the-imaginary-unit` and
  `cex-an-annihilating-polynomial-need-not-be-minimal` — same completeness repair.
- `cor-complex-numbers-are-a-quadratic-real-extension` — the reader added the
  algebraicity/evaluation-kernel bridge as `[F4]`.
- `def-field-extension-generated-subfields-and-simple-extension` — the reader
  appended a kernel argument for injectivity of a field homomorphism. Check the
  argument handles the zero ring / the case `φ(1) = 0`, i.e. whether the
  convention in force makes a field homomorphism unital.

### Also read in full

`cor-composite-of-two-subfields`, `def-algebraic-and-transcendental-elements`,
`thm-evaluation-kernel-and-minimal-polynomial`,
`thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`,
`thm-simple-transcendental-extensions-are-uniquely-f-isomorphic`,
`thm-irreducible-quotient-adjoins-a-root`,
`cor-every-nonconstant-polynomial-has-a-root-in-an-extension`,
`thm-universal-property-of-adjoining-an-irreducible-root`,
`thm-simple-algebraic-extension-quotient-power-basis-and-degree`,
`cor-stem-fields-are-uniquely-f-isomorphic`,
`cor-universal-property-of-the-complex-numbers`,
`thm-real-automorphisms-of-the-complex-numbers`,
`ex-the-four-element-field-from-an-irreducible-quadratic`,
`cex-reducible-polynomial-quotient-is-not-a-field`,
`fs-complex-numbers-form-an-ordered-field`.

Two specific traps in that list. **`thm-simple-transcendental-extension-is-rational-expressions-in-the-generator`**:
this run has **no field-of-fractions or localisation construction anywhere in the
library** — Alpha verified that from disk at step 3. If this theorem's Statement
or proof forms `F(x)` as a fraction field, or quietly assumes fractions of
polynomials exist, that is fatal. Check what it actually constructs and from what.
**`thm-real-automorphisms-of-the-complex-numbers`**: the claim is presumably that
the only ℝ-automorphisms are the identity and conjugation — check whether the
Statement says ℝ-automorphisms (true) or automorphisms (false without continuity
or a choice-flavoured hypothesis), and whether the title matches.

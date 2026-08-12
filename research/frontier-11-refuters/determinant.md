## Your cluster — `determinant`: the determinant of a linear operator

Pages: `the-determinant-of-a-linear-operator` (A, 20 items, order 84) and its
`-examples` (B, 8 items).

The independent reader (reader-3) found **fatal defects in 12 items** across
batch 4 and repaired them. Most were of one kind: a `[F#]` attributing a matrix
**entry formula** to `thm-ring-matrix-arithmetic-laws`, whose Statement gives
associativity/distributivity-style laws and does **not** state
`(AB)_{ij} = Σ_k A_{ik}B_{kj}`. The reader added
`def-ring-matrix-product-identity-and-transpose` in each place. Check that this
definition really does state the entry formula, and that each retagged step uses
exactly it.

### Priority 1 — the two changed claims

1. **`thm-operator-determinant-is-basis-independent` — Statement narrowed.**
   The original asserted `det([T]_B)` unqualified; the published
   `def-determinant-of-a-square-matrix` is defined only for `n ≥ 1`, so at
   `dim V = 0` the matrix determinant does not exist. The Statement now restricts
   the matrix equality to positive dimension and states the zero-dimensional
   operator determinant as the separately defined value `1`.

   Attack both halves. (a) Is the restriction *complete* — does any later item on
   this page, or any consumer, use the matrix equality at `dim V = 0`? Check
   `thm-operator-determinant-is-multiplicative`,
   `cor-operator-determinant-on-the-general-linear-group`,
   `thm-operator-invertible-iff-determinant-nonzero`,
   `def-adjugate-of-a-linear-operator` and `thm-operator-adjugate-identity` for a
   step that silently needs `n = 0`. (b) Is `det(T) = 1` for the unique operator
   on the zero space actually what `def-determinant-of-a-linear-operator` says,
   and is it consistent with the alternating-top-form characterisation the page
   builds (the space of alternating `0`-forms on the zero space — is it
   one-dimensional, and is the scaling scalar well defined there)? A convention
   that is stated but not *coherent* with the page's own definition is a defect.

2. **`ex-doubling-integers-has-nonunit-determinant` — title corrected.** The old
   title said the inverse "exists only over `Q`", which is false: `[2]` is
   invertible over `ℝ` and over `ℤ/3ℤ`. The new title says the inverse exists
   *after extending scalars to `Q`*. Judge whether the new title is now true and
   whether it still says something the Example actually proves — "after extending
   scalars to `Q`" asserts existence there, which needs the Example to exhibit it.
   Also check the Example does not elsewhere repeat the false uniqueness claim in
   its prose.

### Priority 2 — the D7 route, which exists because the library has no fraction field

`thm-adjugate-is-equivariant-under-similarity` proves its identity by a rank-one
update comparison rather than the usual rational-function-field density argument,
**because no field-of-fractions or localisation construction exists anywhere in
this library.** Verify:

- the identity `C + uv^T = P^{-1}(A + (Pu)(v^T P^{-1}))P` by direct algebra;
- that `lem-determinant-rank-one-update-over-a-commutative-ring` is proved for an
  arbitrary commutative ring including **singular** `A` and the zero ring, and
  that its proof uses column multilinearity legitimately;
- that the final entry-identification step — testing the bilinear identity on
  standard coordinate columns and computing `v^T B u = B_{ij}` — actually
  identifies every entry, over an arbitrary commutative ring where one cannot
  divide or take limits;
- that **nothing** in this cluster smuggles in a fraction field, a rational
  function field, a density/Zariski argument, or a "reduce to the generic matrix"
  step. Grep for it and say what you found.

### Priority 3 — the remaining repaired items

- `thm-operator-determinant-is-multiplicative` — `[F1]` split so the
  zero-dimensional value `1` is cited to `def-determinant-of-a-linear-operator`.
  (A separate strict `citation-uses` fix by the batch's Beta also landed on this
  item; read the current text, not any description of it.)
- `cor-operator-determinant-by-row-reduction` — the reader says the proof had the
  **wrong reverse scaling factor**: reversing a forward scaling by `c` contributes
  `c^{-1}`, not `c`. **Re-derive the whole rule yourself** for all three
  elementary operations (swap, scale, add-multiple), in the forward and reverse
  directions, and check the item's final formula against a worked `3×3` example
  you compute. This is the kind of repair that fixes one direction and leaves the
  other inverted.
- `thm-adjugate-identity-over-a-commutative-ring` and
  `thm-cramers-rule-over-a-commutative-ring` — entry-formula citations added, and
  an "unchanged cofactor" step made explicit (`C_ij(A_j(b)) = C_ij(A)` because
  deletion removes the replaced column). Verify that identity holds for **every**
  `i`, not only for `i` in the replaced column's row range, and check the `n = 1`
  case of the adjugate identity where `adj(A)` is the `1×1` identity by the empty
  minor convention.
- `thm-operator-invertible-iff-determinant-nonzero` — the reader found the cited
  `thm-invertible-matrices-correspond-to-linear-isomorphisms` supplies the
  converse only for the coordinate map `L_A`, and **wrote a new converse proof**
  representing `A^{-1}` as an operator and using injectivity of matrix
  representation. Read that new proof adversarially: is the field/ring hypothesis
  right (over a general commutative ring "determinant nonzero" is not
  invertibility — `cor-square-matrix-invertible-iff-determinant-is-a-unit` is the
  correct form), and does the Statement say **field** where the proof needs one?
- `ex-four-by-four-determinant-by-cofactors-and-row-reduction` — the reader
  changed `row 3 ← row 3 − 4·row 1` to `row 2 ← row 2 − 4·row 0` on the grounds
  that the item uses zero-based indices. **Recompute the entire determinant
  yourself** by both routes claimed and check the final number, the intermediate
  triangular matrix, and that zero-based indexing is used consistently in every
  other step of that item.
- `thm-operator-adjugate-identity` and `ex-determinant-in-two-ordered-bases` —
  nonfatal repairs (an injectivity citation; a reordering so the matrix is derived
  before its determinant is computed). Confirm the reordering did not break a step
  reference.

### Also read in full

`lem-alternating-top-forms-are-determined-by-one-ordered-basis`,
`def-determinant-of-a-linear-operator`,
`thm-operator-determinant-scales-every-alternating-top-form`,
`def-matrix-minors-cofactors-and-adjugate`, `thm-laplace-cofactor-expansion`,
`cor-square-matrix-invertible-iff-determinant-is-a-unit`,
`cor-inverse-matrix-by-adjugate`,
`def-coordinate-endomorphism-over-a-commutative-ring`,
`cor-cramers-rule-over-a-field`,
`cor-operator-determinant-on-the-general-linear-group`,
`def-adjugate-of-a-linear-operator`,
`ex-singular-projection-has-zero-determinant`,
`fs-a-square-matrix-over-a-commutative-ring-is-invertible-iff-its-determinant-is-nonzero`,
`ex-three-by-three-inverse-by-adjugate`, `ex-cramers-rule-two-by-two-system`,
`ex-columnwise-additivity-versus-whole-matrix-nonadditivity`.

`thm-laplace-cofactor-expansion` is the load-bearing result for four later items:
check it is proved for expansion along **both** a row and a column, for `n = 1`,
and over an arbitrary commutative ring. `fs-…-is-invertible-iff-its-determinant-is-nonzero`
is a false-statement item — check the refutation refutes the statement **as
written**, and that the zero-ring convention it leans on is the library's.

# Published simple-integral foundation repair — Phase 2 next 21

## `lem-well-definedness-of-the-simple-integral`

The published proof's former step 1.1 asserted that an arbitrary first
representation cell was the union of its intersections with the second
representation's cells. A second representation can omit a zero-valued region,
so that assertion was false. The repair adjoins the measurable complements of
both represented unions with coefficient zero, then refines the resulting two
finite partitions of the whole space. Equality of coefficients on every
nonempty intersection and finite additivity prove equality of the two
nonnegative extended-real sums. The local convention `0·∞ = 0` is applied
explicitly; no subtraction of infinities or choice is used.

Before SHA-256: `afb616754a9ec7d0386377db2e86efbc089ffe9c522ebb9779115800229e1c17`.
After SHA-256: `d6512c1c188f58098af3d4fdfdab1bab3a7675f990bca494052844f33937fa29`.
The target and its two declared suppliers were read. Focused local checks:
`precheck` passed for the target; `rendercheck` passed including KaTeX and
frontmatter parsing; `depcheck --quiet` exited 0 with pre-existing warnings.
This is an owner/operator defect-focused repair, not an independent judge or
a whole-closure certification. Published downstream items with separate
defects remain open in the canonical ledger.

## `prop-basic-properties-of-the-nonnegative-simple-integral`

The old statement wrote `c·∫s` for every `c≥0`; for `c=0` and an infinite
simple integral this is undefined under the library's global extended-real
convention. The repaired statement gives homogeneity for `c>0` and a separate
`∫0s=0` clause. Its proof uses the repaired finite common refinement, checks
monotonicity and additivity on each cell, and treats positive and zero scalars
separately. The local `0·∞=0` convention is used only inside the defining
simple coefficient sums. The three mathematical properties are preserved.

Before SHA-256: `cbc50497991e453fe8fc4f72508b3b6f2b422a8e42449ee402dd375223448c96`.
After SHA-256: `0a8f6e5150d438c4ad2e738b37b9fdd65144d157272dc80003bec5d798dbbb35`.
The proposition and its two declared suppliers were read. Focused precheck
and rendercheck pass. This is a local owner/operator repair without a new
judge or a claim of whole-closure certification.

## `prop-order-and-scalar-rules-for-the-nonnegative-integral`

The old zero-scalar equation formed both the pointwise expression `0f` when
`f=+∞` and the integral-value expression `0·(+∞)` without a local definition.
The repaired statement gives the zero function's integral separately and
states homogeneity for positive scalars. The proof identifies the zero
function's sole nonnegative simple minorant, uses a positive-scalar bijection
on minorants, and commutes a positive finite scalar with their supremum.
It declares the already-published simple-integral homogeneity proposition as
the exact missing supplier for that scaling step. Monotonicity is unchanged.

Before SHA-256: `13b5ed13fde117d6802c6d1b7fdea17b2877102248def037aae58dbd87cdf2da`.
After SHA-256: `90a246d2d900e26f4bc8d5556c8460353c30f4134e90c3c352ec8423137f175f`.
The target and its declared suppliers were read. Focused precheck and
rendercheck pass; depcheck exits 0 with unrelated pre-existing warnings.
This is a local owner/operator repair without an independent judge.

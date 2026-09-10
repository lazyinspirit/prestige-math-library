# Fourier Step-5A published functional-interface audit

Date: 2026-09-11.

Scope: three published branches actually used by the Fourier independent-review
drafts: extension of a bounded map from a dense subspace, complex
Stone--Weierstrass for periodic Fourier uniqueness, and support of convolution
for simultaneous smooth approximation. Complete current targets and the direct
proof spine listed below were read. This is a bounded used-clause audit, not a
certification of unused clauses or complete transitive closures. No published
item was edited.

Before recording dispositions, the full canonical ledger was searched by all
eleven exact IDs, their aliases, the dense-extension/Stone--Weierstrass/
convolution-support mechanisms, and their named supplier IDs. None had an index
row. The already-A-P general `L^1` convolution existence theorem is kept
separate: it is listed by the support theorem but is unnecessary to the
pointwise-zero argument audited here.

## Dense-subspace extension

`thm-extension-of-a-bounded-map-from-a-dense-subspace`, SHA-256
`635d45e0e6ba26ae827e74af279a438136ed5e0cdcac6403cadbd379711baeba`,
is sound in the used clause. It explicitly assumes countable choice, which
selects one approximating sequence for each fixed point. Completeness of the
target gives the image limit, the Lipschitz estimate proves independence of
the approximating sequence, and uniqueness of limits plus continuity of vector
operations proves linearity and uniqueness. The same bound passes to the
extension; the published operator-norm definition supplies that the operator
norm itself is the least bound and obeys `||Tx|| <= ||T|| ||x||`. This last
interface is used implicitly but is adequate, so its missing direct edge is not
repair debt under the canonical rule. The zero-bound case follows directly
because every image is zero. The theorem receives a new bounded-clear receipt.

The live Plancherel construction states countable choice and applies the theorem
to the dense Schwartz subspace and complete complex `L^2`, so the exact
hypotheses are met.

## Complex Stone--Weierstrass branch

The following complete items were read and receive bounded-clear receipts:

- `thm-complex-stone-weierstrass-self-adjoint`, SHA-256
  `d1d9430743f0a9e6c88f57430ac50aa374d12fa7d7b76eb58434cea44ee4f29e`;
- `lem-real-part-of-a-self-adjoint-complex-function-algebra`, SHA-256
  `31bbd401d3857ef203629d69cce4992e0006790a8dfab47209ed2266ce084c31`;
- `thm-real-stone-weierstrass-dichotomy-for-separating-algebras`, SHA-256
  `caacd3d39ddbed535f6efc543a8d5759fe6df0dcd8762e2380c8e7425370c12d`;
- `lem-nowhere-vanishing-algebras-approximate-the-constant-one`, SHA-256
  `cd5609d1c34701ae7f8d73e145a8baa4c63ee090e4e5fb989b4eb0ac86b14158`;
- `thm-real-stone-weierstrass-general`, SHA-256
  `711444e98ba332ce1f34efcdcd99cf95eb7c60782b1678b8facb7d72f788cd62`;
- `lem-uniform-closure-of-a-general-real-function-algebra-is-a-lattice`,
  SHA-256
  `25a89310417ee7125c5436f8f6d40358d90c0d290f5fc7863c00e8ccdd4085de`;
- `thm-lattice-stone-weierstrass`, SHA-256
  `50f0e2df2e81cbc65a08b78dcdb3697b80baa1221c9062f3b1b3b22660adbaad`;
- `lem-two-point-interpolation-for-a-separating-real-function-lattice`,
  SHA-256
  `26641be91de4d22145b7671093925e0be6fbcdc497da7397b8da9176fad641cc`;
  and
- `lem-two-compact-cover-sweeps-for-function-lattices`, complete current proof
  read, SHA-256
  `c251502caaa1c3d68c9e801b204f048cb9ae34bee57740fee24f922054591c6a`.

Self-adjointness places the real and imaginary parts of every algebra member
back in the algebra. One of those two parts separates any pair separated by the
original complex function, and the common-zero sets agree exactly. The real
dichotomy is sound: adjoining constants gives a unital separating algebra; in
the nowhere-vanishing case compactness produces finitely many functions whose
sum of squares is strictly positive, and polynomial approximation to its
reciprocal approximates one. In the one-common-zero case, evaluation controls
the constant term of an approximant from the unitization.

The real theorem's lattice spine is also coherent. Polynomial approximation to
absolute value, with its constant removed, puts absolute values and hence
maxima/minima in the uniform closure. Two-point affine interpolation is exact.
The two compact-cover sweeps avoid point-indexed choice by forming the sets of
all admissible functions before taking finite subcovers, then use a finite
maximum and a finite minimum. Empty `X` is handled separately throughout.
Finally, approximating the real and imaginary parts within half the desired
error proves the complex result. In the live periodic-uniqueness use the
character algebra is unital, self-adjoint and point-separating, so the full-
density alternative applies.

## Convolution support

`thm-support-of-a-convolution-lies-in-the-closure-of-the-support-sumset`,
SHA-256
`38c408c3917a3966c9535d2d88b60f87c255cbc4ee4f42ac160743cf8b905518`,
is sound for its explicitly supplied Borel representatives and actual-function
zero-on-failure convention. Outside the closed support sumset, an open
neighbourhood `U` has, for every `z in U` and every `y`, at least one of
`f(z-y)` and `g(y)` equal to zero. The integrand is therefore identically zero,
so its integral exists and the chosen convolution representative vanishes
throughout `U`. This proves the support inclusion directly.

The theorem lists the separately A-P general `L^1` convolution-existence
theorem, but no affected representative-selection or almost-everywhere branch
is used in this proof: pointwise zero gives existence on the relevant
neighbourhood. An unused defective dependency does not infect this clause.
The theorem receives a new bounded-clear receipt. The live simultaneous smooth-
approximation item uses this exact support inclusion after its concrete
convolution has already been established under countable choice.

## Index effect

All eleven IDs are new bounded-clear census entries. Starting from 2,434 unique
indexed published items, the target state is U-P 1,406, U-C 15, A-R 187, A-P
173 and 664 bounded clears, for 2,445 unique IDs. Against the 15,930-item
publication census, 13,485 published IDs remain outside the index. Mechanical
recount, cross-class deduplication and published-status resolution are required
after the ledger edit.

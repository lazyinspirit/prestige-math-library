# B30 four repaired items: independent mathematical review

Date: 2026-10-01. Run: `frontier-37-owner-30`. I independently read the four
current proof bodies and checked the actual load-bearing library proofs listed
below. The analytic-hypersurfaces pair has a current sufficient scope receipt.
These are ordinary confidence-1 mathematical dispositions; direct dependency
arrays are the exact current item frontmatter arrays.

## Dispositions

| Item | Current SHA-256 | Disposition |
|---|---|---|
| `lem-dimension-of-holomorphic-germ-ring` | `4e2abcc7fdc180197958bd7fd9122e051618a562ab39103d36d970729b76bb54` | Accept, confidence 1 |
| `lem-vanishing-ideal-of-a-reduced-hypersurface-germ` | `ae5b6576605129d6602705f349418058656c8d2becb89ffa73a875debfb14cb2` | Accept, confidence 1 |
| `lem-reduced-prepared-hypersurface-remains-reduced-near-germ` | `e63a9846646930b0b53a859e6ebcc379ddaaac7fb9835223b208c1239622a099` | Accept, confidence 1 |
| `thm-singular-locus-reduced-hypersurface` | `169fc7b1abe3d00c9a9e54670e798ea426eb21abce663bdd23dc785f8861d14d` | Accept, confidence 1 |

## Proof routes and dependency review

- **Germ-ring dimension.** The power-series grouping proves the coordinate
  generators of the maximal ideal; restriction to coordinate subspaces gives
  the prime chain of length `n`. The Noetherian `n`-generator height bound
  gives the reverse inequality, and localization at the maximal ideal
  identifies all primes in the local ring with those in its localization.
  The `n=0` field case and translation to an arbitrary center are explicit.
  I checked the actual proofs of `thm-holomorphic-germ-ring-is-a-ufd`,
  `thm-holomorphic-germ-ring-is-noetherian`, `thm-krull-height-theorem`, and
  `thm-prime-spectrum-of-a-localisation-bijection`.
- **Vanishing ideal.** In generic prepared coordinates, Weierstrass division
  leaves a remainder of degree below `d`. Off the nonzero discriminant it
  vanishes at all `d` distinct roots, so each coefficient vanishes on a
  nonempty open base set and the identity theorem makes the remainder zero.
  The zero-dimensional base case is handled separately. The actual
  preparation, division, finite-projection, reduced-discriminant, root-bound,
  and identity-theorem proofs support these steps.
- **Nearby reducedness.** A hypothetical local square factor `g^2` has a
  positive-order vertical zero at the point; otherwise its vertical slice
  would force the monic slice of `W` to vanish identically. Choose a smaller
  zero-free boundary inside the factorization neighborhood. The actual
  slice-stability proof applies Rouché on that same boundary, preserving a
  positive zero count for every base point in an open neighborhood. Each
  such zero is then repeated for `W`, forcing its discriminant to vanish on
  that open set, contrary to the nonzero-discriminant lemma and the identity
  theorem. The germ UFD and prepared-factorization proofs justify extracting
  the square factor.
- **Singular locus.** Nearby reducedness plus the vanishing-ideal result makes
  the fixed prepared equation a local reduced equation at every point of its
  zero set; hence the gradient criterion is valid for this fixed `W`.
  Repeated-root/discriminant implications are used in both directions only
  where the proof establishes them. At a point, preparation gives `W_q=vP`;
  Bezout after passing to the base fraction field yields nonzero
  `c in (P,P')`. Weierstrass division makes `O/(P,c)` a free rank-`k`
  module over `A/(c)` with the base map injective. Since `J_q` is proper,
  `c` is a nonunit; the AC-qualified integral-dimension supplier and the
  base-domain prime-chain argument give dimension at most `n-2`, which
  passes to the quotient by `J_q`. The `n=1` field base makes `c` a unit and
  gives an empty singular locus. The density argument uses zero stability on
  a sufficiently small disc and nonvanishing points of the nonzero global
  discriminant. `thm-hypersurface-germs-have-pure-codimension-one` supplies
  the stated pure dimension, so the ambient codimension conclusion is at
  least two.

Load-bearing supplier proofs examined include
`lem-reduced-prepared-polynomial-has-nonzero-discriminant`,
`lem-stability-of-slice-zero-count-under-holomorphic-parameters`,
`lem-prepared-factorizations-and-irreducibility`,
`lem-weierstrass-quotient-is-a-finite-module`,
`cor-dimension-preserved-by-integral-extensions`,
`thm-integrality-and-finite-module-equivalences`, and
`thm-hypersurface-germs-have-pure-codimension-one`, along with the direct
Weierstrass and algebraic suppliers named above. The AC assumptions are
explicit wherever the dimension and height results need them. No remaining
mathematical defect or unsupported theorem-as-axiom bridge was found.

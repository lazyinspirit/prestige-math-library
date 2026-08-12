## Your cluster — `symgroups`: conjugacy and simplicity in the symmetric groups

Pages: `conjugacy-and-simplicity-in-the-symmetric-groups` (A, 18 items, order 64)
and its `-examples` (B, 8 items).

The independent reader (reader-5) found defects in 20 items across batch 1, **15
of them with at least one fatal defect**, and repaired all of them. Most repairs
were citation-fidelity: a `[F#]` fact attributing to a source something the
source's Statement does not say. Your job is to check that each replacement
citation is now **exactly** right and that no repair introduced a new gap.

### The two repairs to attack first — these changed proof mathematics, not citations

1. **`lem-conjugacy-class-splitting-over-an-index-two-normal-subgroup`, step 3.3.**
   The original wrote an element of the outside coset as `c = th` and concluded
   `t x t^{-1} = h^{-1} x h`, which does not follow. The reader rewrote the same
   coset element as `c = h^{-1} t` and concluded `t x t^{-1} = h x h^{-1}`.
   **Verify this algebra from scratch.** Every coset element of `H` in `G` with
   `[G:H] = 2` can be written both ways, so the rewrite is legitimate only if the
   quantifier structure of the surrounding argument still binds `h` correctly —
   check whether `h` is chosen before or after `c`, and whether the conclusion the
   later steps need is the one now proved. Then check the criterion in the
   **Statement** is unchanged and still true: a conjugacy class of `G` contained
   in `H` splits into two `H`-classes exactly when the centralizer `C_G(x)` is
   contained in `H`, and does not split otherwise. Test it on a concrete case you
   compute yourself — the 5-cycles in `A_5` (split, two classes of 12) and the
   3-cycles in `A_5` (not split, one class of 20) — and on `A_4` with the double
   transpositions.

2. **`lem-nontrivial-normal-subgroup-of-a-n-contains-a-three-cycle`.** The reader
   says the original exhaustion "never explicitly disposed of the case in which
   the extremal `σ` itself is already a 3-cycle", and added an immediate-success
   case to step 1.3 and to step 3.1's exhaustion. This is the standard proof by
   choosing `σ ≠ e` in `N` moving the fewest points. **Check the case analysis is
   genuinely exhaustive** over the cycle type of the minimal `σ`: `σ` has a cycle
   of length ≥ 3, versus `σ` is a product of ≥ 2 disjoint transpositions, versus
   `σ` is a single transposition (impossible in `A_n`), versus `σ` is a 3-cycle.
   In the "cycle of length ≥ 3" branch the standard argument needs `n ≥ 5` to find
   two further moved points — check the hypothesis is present and used, and check
   what the item claims for `n = 4` where the result is **false** (`V_4` is normal
   in `A_4` and contains no 3-cycle).

### The citation repairs to verify, each against the cited item's own words

- `thm-centralizer-cardinality-from-cycle-type` — `[F3]` moved from
  `def-factorial-and-falling-factorial` to `thm-number-of-bijections-of-a-finite-set`,
  `[F4]` from `def-monoid-finite-product` to `thm-product-rule`. Then **verify the
  centralizer formula `∏_k k^{c_k} c_k!` independently**, including `c_k = 0`
  factors and fixed points (`k = 1`).
- `cor-symmetric-group-class-equation-by-cycle-type` — `[F4]` now quotes
  `thm-class-equation`'s actual formula `|G| = |Z(G)| + Σ_i [G:C_G(x_i)]`, and
  step 3.1 explains `|Z(G)|` counts singleton classes. For `S_n` with `n ≥ 3` the
  centre is trivial, so check the item does not silently assume that for `n ≤ 2`
  as well, and check the sum ranges over class representatives with
  non-singleton classes only.
- `thm-alternating-conjugacy-class-splitting-criterion` — `[F2]` gained
  `thm-sign-is-a-homomorphism` for multiplicativity of sign, retaining
  `cor-sign-from-disjoint-cycle-structure` for `(−1)^{k−1}`. Check step 2.2 really
  needs multiplicativity for *products of cycle powers* and that the added fact
  covers that.
- `thm-alternating-group-is-generated-by-three-cycles` — `[F3]` restricted to the
  corollary's actual cycle-sign statement. Check the generation argument itself:
  a product of two transpositions is a 3-cycle or a product of two 3-cycles, both
  cases (disjoint / sharing a point), and the `n = 3, 4` boundary.
- `cor-only-proper-nontrivial-normal-subgroup-of-s-n` — split `[F3]` into
  `thm-sign-is-a-homomorphism` plus `def-alternating-group` for the kernel. The
  Statement is presumably restricted to `n ≥ 5`; **check the restriction is
  present**, since for `n = 4` it is false (`V_4`) and for `n = 3` it is false
  (`A_3`).
- `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types` — `[F1]` now quotes
  `def-permutation-support-disjoint-cycles-and-cycle-type` exactly, and `Σ k c_k = n`
  moved into step 2.1 as a counting consequence. Check that derivation counts
  fixed points correctly.
- `ex-s-four-conjugacy-classes-and-class-equation`,
  `ex-klein-four-is-normal-in-a-four`, `fs-same-cycle-type-implies-conjugate-in-a-n`,
  `fs-a-n-is-simple-for-all-n-at-least-four`,
  `thm-alternating-group-is-simple-for-n-at-least-five` — all gained explicit
  parity computations `(−1)^{n−c(σ)}`. **Recompute every one of them yourself**
  and check each class-size table sums to the group order.

### Two false-statement items where the refutation itself must be right

`fs-same-cycle-type-implies-conjugate-in-a-n` and
`fs-a-n-is-simple-for-all-n-at-least-four` are `fs-` items: they assert a
statement is **false** and must exhibit a genuine counterexample. Check the
counterexample refutes the statement **as written** — an `fs-` item whose stated
false claim is subtly different from the one refuted is fatal. `A_4` and its
`V_4`, and the two `A_5` classes of 5-cycles, are the expected witnesses; verify
both are computed correctly.

### Also read in full

`lem-conjugating-a-cycle-relabels-its-entries`,
`thm-symmetric-permutations-are-conjugate-iff-same-cycle-type`,
`cor-center-of-symmetric-group-is-trivial`,
`thm-adjacent-transpositions-generate-the-symmetric-group`,
`thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group`,
`cor-three-cycles-form-one-conjugacy-class-in-a-n`, `def-simple-group`,
`lem-normal-subgroup-containing-a-three-cycle-is-a-n`,
`cor-derived-subgroups-of-symmetric-and-alternating-groups`,
`ex-conjugating-permutations-by-relabeling`,
`ex-s-five-conjugacy-classes-and-class-equation`,
`ex-a-five-conjugacy-classes-and-split-five-cycles`,
`fs-arbitrary-transposition-and-n-cycle-generate-s-n`.

`cor-three-cycles-form-one-conjugacy-class-in-a-n` and
`cor-derived-subgroups-of-symmetric-and-alternating-groups` both have small-`n`
boundaries where the general claim fails; check each Statement's hypothesis
against the smallest `n` it admits.

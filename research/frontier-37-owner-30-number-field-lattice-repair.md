# Choice-free repair: the ring of integers is a full lattice

**Date:** 2026-09-30  
**Target:** `thm-ring-of-integers-free-of-rank-degree`  
**Scope:** one published theorem proof and this repair report. The theorem's title and Statement are unchanged. No supplier, page, plan, receipt, run state, ledger, or commit was changed here.

## Finding and repair

The old proof established finite generation using `thm-finite-integral-closure-in-a-finite-separable-extension`, then invoked `cor-submodules-of-finite-free-pid-modules-are-free` to conclude freeness. The latter's used proof route goes through `thm-simultaneous-basis-theorem-for-pid-submodules`, `lem-maximal-divisor-pivot-for-pid-submodules`, and `thm-principal-ideal-domains-are-unique-factorisation-domains`. The last theorem explicitly assumes AC and its used maximal-principal-ideal argument spends DC. The old theorem's unqualified Statement therefore had an AC-costly proof route.

The repaired proof bypasses both finite-integral-closure and generic PID-submodule freeness. It chooses a finite rational basis of `K`, scales its elements into `O_K`, and calls their integer span `M`. Nondegeneracy of the trace pairing gives a finite trace-dual basis. Clearing its finitely many rational coordinates gives a positive integer `c` with `M ⊆ O_K ⊆ c⁻¹M`.

The proof then establishes inline, by induction on `m`, that every additive subgroup of `Z^m` has a finite basis. Projecting to the first coordinate gives either zero or `dZ` by `lem-subgroups-of-z-are-cyclic`. In the nonzero case it takes one lift of `d`; the kernel is a subgroup of `Z^(m−1)`, so induction gives its finite basis. The lift and kernel basis span and are independent. The base case `m=0` uses the empty basis. This is an object-by-object finite induction with one lift per nonzero-image case; it constructs no choice function over an arbitrary family.

Applying that induction to `O_K ≤ c⁻¹M ≅ Z^n` gives a finite integer basis. Since `M ⊆ O_K` spans `K` over `Q`, that basis rationalizes to a `Q`-basis of `K`, so its size is `n=[K:Q]`. The original theorem Statement is preserved exactly; no Choice assumption was added and no new supplier ID was introduced.

## Published suppliers used

Every direct supplier below is already published. The page column gives its current home page ID (read-only scan, 2026-09-30).

| Supplier ID | Home page ID | Used clause |
|---|---|---|
| `def-number-field` | `number-fields-rings-of-integers-and-discriminants` | `K/Q` is finite of degree `n`. |
| `def-ring-of-integers-of-a-number-field` | `number-fields-rings-of-integers-and-discriminants` | Identifies `O_K` as the integral closure of `Z` in `K`. |
| `thm-clearing-denominators-for-an-algebraic-number` | `number-fields-rings-of-integers-and-discriminants` | Each of the finitely many basis elements has one positive integralizing multiplier. |
| `cor-integral-elements-form-a-subring` | `chain-conditions-and-semisimple-modules` | Makes the integer span of the scaled basis integral and the product `x c u_j*` integral. Its used finite-module argument uses finite generators. |
| `cor-trace-and-norm-of-an-algebraic-integer` | `number-fields-rings-of-integers-and-discriminants` | The trace of `x c u_j*` is an integer. Its used argument is a finite characteristic-polynomial calculation. |
| `cor-fields-of-characteristic-zero-and-finite-fields-are-perfect` | `algebraic-closure-embeddings-and-separability` | Uses only the characteristic-zero implication to make `Q` perfect. |
| `cor-algebraic-extensions-of-perfect-fields-are-separable` | `algebraic-closure-embeddings-and-separability` | Makes the algebraic extension `K/Q` separable. Its proof is pointwise over elements. |
| `lem-trace-pairing-for-a-finite-separable-extension` | `dedekind-domains-and-ideal-classes` | Supplies nondegeneracy of the finite trace pairing. Its used trace-form route uses a finite list of embeddings and finite linear algebra. |
| `thm-invertible-matrix-theorem` | `gaussian-elimination-and-row-reduction` | Gives invertibility and unique solutions for the finite Gram matrix, constructing the trace-dual basis. |
| `lem-subgroups-of-z-are-cyclic` | `divisibility-gcd-and-bezout` | Gives the least-positive generator of each nonzero first-coordinate image. |

The direct dependency on `cor-submodules-of-finite-free-pid-modules-are-free` and the unused finite-integral-closure dependency were removed. The new proof uses only finite basis, denominator, matrix, and trace operations, the least-positive-element argument, and one local lift for a fixed subgroup at a time. The existing route audit records full-text review of Milne, *Algebraic Number Theory*, Proposition 2.29, which gives the trace-dual sandwich but uses generic PID freeness for its conclusion, and Stacks Project Lemmas 15.22.7/15.22.11, whose rank-induction proof is not labelled as a ZF result. Those sources corroborate ingredients; the explicit finite induction here supplies the choice audit.

## Direct-consumer scan

A current read-only `rg` scan of `items/` and `library/` found these twelve item consumers:

- `lem-finitely-many-number-field-ideals-of-bounded-norm`
- `thm-orders-have-integral-bases-and-finite-index`
- `thm-ring-of-integers-and-ideals-are-full-lattices`
- `lem-coprime-discriminant-compositum-integral-basis`
- `lem-nonzero-number-field-ideal-has-finite-quotient`
- `thm-number-field-integral-ideal-factorisation-in-zf`
- `def-ramification-index`
- `def-discriminant-of-a-number-field-basis-and-order`
- `thm-number-field-discriminant-is-well-defined-and-nonzero`
- `cor-no-nontrivial-number-field-is-unramified-over-q`
- `lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one`
- `lem-prime-power-cyclotomic-integral-structure`

The theorem's current home is page `number-fields-rings-of-integers-and-discriminants`. This list is an inventory, not consumer certification; the Statement did not change and root owns stable consumer evidence. In particular, `thm-number-field-integral-ideal-factorisation-in-zf` still directly lists and uses the generic PID-submodule corollary in its own Step 1.1. This one-item supplier repair does not close that consumer's separate choice-cost route; root will handle it separately.

## Checks and verification history

- Scoped `precheck`: pass (`1 checked, 0 failing`). The first run proposed a canonical step ordering; that repair was adopted before the passing run.
- Scoped `rendercheck`: pass (`0 errors, 0 warnings`, one item checked).
- Full-repository `depcheck`: non-green (`22,482` items, `1,348` pages, `136` errors and `300` warnings at the recorded final run). Filtering findings for this target leaves only `published-unaudited`, which is intentional until root completes the current item-local audit. No unresolved supplier, link, or citation finding was reported for the new dependency set.
- No independent judge reviewed the repaired proof. The prior `audited: 2026-09-06` and `gpt-5.6-terra / pass / 2026-09-06` stamps applied to the old proof and have been removed from the item. They are retained here only as historical evidence for the old proof hash. The item records `provenance.proof: ai-altered` and the scoped precheck result only; root owns any current audit stamp.

## Hashes

| Carrier | Before repair | After repair |
|---|---|---|
| `items/thm-ring-of-integers-free-of-rank-degree.md` | `bafdee612dade11ed8c7bc9b0d5dfd394cc596f37b5630c251ded4859c32f5e2` | `74095241bf45c877c1170e9c39deb3a27e7ecb13110622923411e4d40ef7da30` |
| `research/frontier-37-owner-30-number-field-lattice-repair.md` | absent | created by this repair |

The recorded theorem hashes bind the old and repaired proof bytes respectively. The current theorem hash was captured after adopting precheck's canonical repair and recording the local precheck pass.

## Root integration (2026-09-30)

Writer drained before integration. Root independently read the revised proof and actual trace-pairing, invertible-matrix, integral-trace and cyclic-Z-subgroup suppliers; the finite induction and trace sandwich establish the unchanged Statement with only finite witnesses. Root recorded current owner audit, synchronized only this plan item's direct dependencies/strategy, and checked that all ten supplier homes are in the existing page prerequisite closure. No home change was needed. Scoped precheck/rendercheck and plan validation passed. These are local owner checks, not an independent judgment or whole-closure certification. Final integrated item hash: 2a1c85533502c2e1430ea4a8bbf533dda535fec943a6e00bce4271dccdfec7b3. The separate ZF ideal-factorisation consumer remains unrepaired.

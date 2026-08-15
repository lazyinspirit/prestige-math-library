## Batch 5 of run `frontier-13` — tensor products of modules (SINGLETON)

One A/B pair, and it is a singleton deliberately: **35 unbuilt A pages sit
downstream of this one**, and the universal property you write here is what every
one of them will cite. Read more, not less.

> **Orders in the prose scaffold are STALE.** `research/plan-algebra-track-expansion.md`
> quotes order 102 for this page and 100 for its prerequisite; the live orders are
> 106 and 104. `research/plan-spec.json` is the only live source of `order`.
> Identify everything by **page id**.

| | |
|---|---|
| A page | `tensor-products-of-modules` · "Tensor Products of Modules" · category `abstract-algebra` · order **106** |
| B page | `tensor-products-of-modules-examples` · order **107** |
| requires | `free-modules-and-exact-sequences` (order 104, published) |
| prose scaffold | `research/plan-algebra-track-expansion.md` §II.4, block **MOD-3** (design body at line ~1160) |

### What the design block asks for

Read MOD-3 in full; it is unusually specific. In summary:

**Definitions.** `R`-balanced maps (right module × left module → abelian group)
and, for commutative `R`, `R`-bilinear maps; `M ⊗_R N` **by the construction**;
elementary tensors; the `R`-module structure **for commutative `R`**; flat
module; extension of scalars `S ⊗_R M` along `R → S`.

**Theorems.** The universal property; uniqueness up to a unique isomorphism (the
item that licenses saying "*the*" tensor product); `R ⊗_R M ≅ M`; commutativity
and associativity for commutative `R`; `(⨁_i M_i) ⊗ N ≅ ⨁_i (M_i ⊗ N)` for
**arbitrary** families; `R^m ⊗ R^n ≅ R^{mn}` with the product basis and
`dim(V ⊗ W) = dim V · dim W` over a field; `M ⊗_R R/I ≅ M/IM`; **right
exactness** (landmark); the failure of left exactness with the `ℤ/2`
counterexample as a numbered item; free ⟹ projective ⟹ flat; **the Hom–tensor
adjunction** (landmark); **enough injectives** by the character-module argument
`M ↪ Hom_ℤ(R, D)` with `D` divisible; extension of scalars is left adjoint to
restriction.

**The guard item.** MOD-3 §Traps (i) names the single defect this page exists to
prevent: *a well-defined map out of `M ⊗_R N` is produced only by the universal
property*, and the item must include an explicit demonstration that a formula
written on elementary tensors can fail to be well defined. Scaffold it as its own
numbered item. Every later page that builds a map out of a tensor product cites
it.

**`fs-` items.** `m ⊗ n = 0 ⟹ m = 0 or n = 0` (refuted by `2 ⊗ 1̄ = 0` in
`ℤ ⊗_ℤ ℤ/2`); every element of `M ⊗ N` is an elementary tensor (refuted by a
rank-2 tensor in `F² ⊗ F²`); `ℤ/m ⊗_ℤ ℤ/n ≠ 0` always (it is `ℤ/gcd(m,n)`);
tensoring preserves injections.

### Two things the design flags for you to decide at step 1

1. **Keep the general construction and the module structure apart.** The
   construction is over an arbitrary `R` with a right and a left module; the
   `R`-module structure on the result needs commutativity. MOD-3 §Traps (ii) is
   explicit that conflating them is the error to avoid. Two statements, not one.
2. **`ℂ ⊗_ℝ ℂ` as an ℝ-algebra** is a planned B-page item, and MOD-3 says to
   *check at step 1 whether ℂ's ℝ-algebra structure is available* — the page that
   gives ℂ does not obviously give its ℝ-vector-space structure, which an earlier
   linear-algebra block deferred. Check it on disk. If it is not there, either
   build what you need on the A page or drop the B item with a recorded reason.
   Say which in your notes.

### Size

MOD-3 estimates A 21 / B 12, but that estimate predates the "build the
machinery" rule and the canonical-coverage harvest. **Enough injectives** is
called "the hardest item in the MOD block". If your harvest pushes the A page
past **60 items**, propose a split in your notes at step 2 — the natural cut is
the construction and its calculus on one page, exactness/flatness/injectives on
another. Propose it early; after authoring it is a rewrite.

### One in-run interaction, and how it is handled

`adjunctions-units-and-counits` (batch 6, order 365.001) has a planned item
*"restriction of scalars has a left and a right adjoint"* which its own design
marks **CONTINGENT** on this page. That edge is **not** being added: it would
serialise batch 6 behind batch 5, and the MA-1 design already specifies the
Hom-side fallback. So nothing you write here is on batch 6's critical path, and
you must not write anything that assumes it. Build the Hom–tensor adjunction
properly on **your** page; that is where it belongs.

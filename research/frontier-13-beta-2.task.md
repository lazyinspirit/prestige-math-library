## Batch 2 of run `frontier-13` — unit groups and split extensions

Two A/B pairs. You own all four pages, and you author them at step 5.

> **Orders in the prose scaffolds are STALE.** `research/plan-algebra-track-expansion.md`
> quotes pre-splice orders (64/65, …). `research/plan-spec.json` is the only live
> source of `order`. Identify everything by **page id**.

### Pair A — primitive roots and unit groups mod n

| | |
|---|---|
| A page | `primitive-roots-and-unit-groups-modulo-n` · "Primitive Roots and Unit Groups Modulo N" · category `number-theory` · order **57.001** |
| B page | `primitive-roots-and-unit-groups-modulo-n-examples` · order **57.002** |
| requires | `splitting-fields-examples` (order 57) |
| prose scaffold | `research/plan-number-theory-track.md`, the block beginning at the `primitive-roots-and-unit-groups-modulo-n` heading (line ~190) |

**A `requires` edge onto a B page — read this carefully.** Declaring
`splitting-fields-examples` puts its companion **A** page `splitting-fields`
(and everything below it) in your closure, so items on `splitting-fields` are
citable. It does **not** make the examples items citable: nothing anywhere may
depend on an item homed on an `-examples` page (`validate-plan` error `b-leaf`,
`depcheck` error `b-leaf-content`). Cite the A page.

The structure of `(ℤ/nℤ)^×`: Euler's totient and its multiplicativity, the
Chinese remainder decomposition of the unit group, **existence of primitive roots
mod p** (the cyclicity of `𝔽_p^×`), lifting to `p^k` for odd `p`, the exceptional
structure at `2^k` (`(ℤ/2^kℤ)^× ≅ ℤ/2 × ℤ/2^{k-2}` for `k ≥ 3`), the general
`n` classification of which moduli admit a primitive root, and the order of an
element / index (discrete logarithm) calculus. Carmichael's `λ` if you can close
it in scope.

Cyclicity of `𝔽_p^×` is the load-bearing theorem. Prove it — do not cite it as
folklore. `the-structure-of-finite-abelian-groups` is published and is one honest
route; the "at most `d` roots of `x^d − 1` in a field" route is another. Say in
your notes which you used.

### Pair B — semidirect products and automorphism groups

| | |
|---|---|
| A page | `semidirect-products-and-automorphism-groups` · "Semidirect Products, Automorphism Groups and Split Extensions" · category `abstract-algebra` · order **68** |
| B page | `semidirect-products-and-automorphism-groups-examples` · order **69** |
| requires | `composition-series-and-solvable-groups`, `congruences-and-the-chinese-remainder-theorem`, `free-groups-and-presentations` (all published) |
| prose scaffold | `research/plan-algebra-track-expansion.md` §II.2, block `AG-3` (the design body begins at line ~884) |

Internal and external semidirect products and their equivalence, the recognition
criterion (`N ⊴ G`, `H ≤ G`, `N ∩ H = 1`, `NH = G`), **split extensions** and the
splitting lemma for groups, `Aut(G)` and `Inn(G) ⊴ Aut(G)`, the outer
automorphism group, characteristic subgroups, the holomorph, and the standard
computations: `Aut(ℤ/n) ≅ (ℤ/n)^×`, `Aut(ℤ^n) ≅ GL_n(ℤ)`, dihedral and
generalised dihedral groups as semidirect products, and the classification of
groups of order `pq`.

### The hard constraint between your two pairs

These two pairs are batched together because `Aut(ℤ/n) ≅ (ℤ/n)^×` is the shared
spine: the unit-group structure Pair A builds is exactly what Pair B's
automorphism computations want.

**But `semidirect-products-and-automorphism-groups` does not declare
`primitive-roots-and-unit-groups-modulo-n` in its `requires`, and it is not in
its closure.** So **no item on order 68 may depend on any item on order
57.001** — `validate-plan` fails it as `undeclared-prereq`. Pair B must build
whatever unit-group facts its own proofs need, from its own published
prerequisites (`congruences-and-the-chinese-remainder-theorem` is one of them),
or state them as hypotheses.

This is the single most likely place in this run for a Beta to write an illegal
edge. If you conclude Pair B genuinely needs Pair A, **record it in your notes as
a recommendation** naming the exact result, and the orchestrator decides at step 3
whether to add the `requires` edge. Do not work around it, and do not edit
`plan-spec.json`.

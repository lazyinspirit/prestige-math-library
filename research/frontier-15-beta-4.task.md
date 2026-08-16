# Batch 4 of run `frontier-15` — σ-algebras, π-systems and Borel sets

One A/B pair — MT-1, the base of the 23-pair measure-theory track. 22 pairs
sit transitively above this one; a missing definition here is worked around
by every page above it, never repaired.

| | |
|---|---|
| A page | `sigma-algebras-and-borel-sets` · order **288.001** · `measure-theory` (empty category directory exists — you mint its first pages) |
| B page | `sigma-algebras-and-borel-sets-examples` · order **288.002** |
| requires | `stone-weierstrass-general-examples` (anchor), `cardinal-arithmetic-and-cofinality`, `the-topology-of-euclidean-space` — all published. The last two were added at step 0 per the design's own list (L1628–1631); the design also names `relations-functions-and-quotients`, `countability-and-uncountability`, `topological-spaces-and-continuity`, `ordinals-and-transfinite-recursion`, `cantor-set-baire-and-measure-zero`, all already in closure |
| design | `research/plan-measure-theory-track.md` §MT-1, line ~1626; conventions and seams §§0–1; NO ABSOLUTE ORDERS — the file says recompute from the spec, so do |
| estimate | A 18–40 band per §MT sizing; the THMS list is long — decompose, don't compress |

## What the design fixes, item by item

DEFS at L1633: algebra, σ-algebra, measurable space, σ(E) (well-definedness
#1), π-system, λ-system/Dynkin system, monotone class, Borel σ-algebra
(well-definedness #2), trace σ-algebra, limsup/liminf of sets. THMS at
L1646+: the generated-σ-algebra landmark, closure properties, the
**comparison criterion** (the workhorse — used a dozen times downstream),
Dynkin's π–λ theorem, the monotone class theorem, the seven-generator
characterisation of B(R), the transfinite description to ω₁, |B(Rⁿ)| = 𝔠,
no σ-algebra is countably infinite.

## Traps the design states — each one is a known defect class

1. **π–λ is decomposed into three lemmas** (a), (b), (c) as printed, and
   **the second good-sets application is the classic skipped step** — it is
   why (b) is a separate item. Scaffold all three.
2. **The seven-generator theorem is ONE item with seven conditions**, not
   seven items — splitting invites a citation for a claim the cited item
   does not make.
3. **The choice cost is explicit**: |B(R)| = 𝔠 rests on the regularity of ω₁
   (`thm-regularity-of-the-alephs`, published at order 247) which is
   AC_ω-dependent — **the Statement carries AC_ω**, and `DEFERRED.md` §3a's
   Feferman–Levy record is the reason it is not optional.
4. The transfinite description is stated with **ω₁ stages**; it needs
   `thm-transfinite-recursion` (published).
5. `def-f-sigma-g-delta` is **published for R** — open it at step 1 and check
   its generality before citing it in any wider setting; do not re-mint.
6. The non-Borel set on the B page is **by cardinality alone**, with the
   explicit remark that no witness is exhibited. Vitali belongs to MT-5, not
   here.
7. "The smallest σ-algebra containing E" is a phrase only AFTER
   well-definedness #1 — the definite article is earned.

## Sources

The measure-theory source ledger from the subjects-01 scaffold run is on
disk: `research/subjects-01-mt-src-textbooks.md`, `-src-notes.md`,
`-src-proof-routes.md`, and the library inventory at
`-mt-library-inventory.md`. Start from those, verify liveness, and record
the exact ranges you read — the harvest is yours regardless.

**No permission prompts of any kind**, including inside an `&&` chain.

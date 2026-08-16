## Your assignment — batch 4, group 4: the cardinality cluster, read as fresh text

Run `frontier-15`, batch 4. The pair is
`library/measure-theory/sigma-algebras-and-borel-sets.md` (A page, 44 items) and
`library/measure-theory/sigma-algebras-and-borel-sets-examples.md` (B page, 16 items).
All items are at `items/<id>.md`, `status: draft`. The batch proof contract is
`research/frontier-15-batch-4.proof-contracts.json`.

Read these items in full, every numbered step against every cited item on disk:

- thm-transfinite-description-of-generated-sigma-algebras
- thm-cardinality-bound-for-generated-sigma-algebras
- thm-cardinality-of-the-borel-sigma-algebra-on-rn
- lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence
- thm-infinite-sigma-algebra-has-continuum-many-members
- cor-no-sigma-algebra-is-countably-infinite
- thm-sigma-algebra-generated-by-a-countable-partition

**Focus for this group. These seven items were rewritten hours ago after an independent
reader found four fatal defects among them, so read the current text as fresh text and
give the repairs no credit.** The repairs changed a recursion seed, a cited existence
theorem, a cardinal-exponent hypothesis and a choice citation; a repair that closes the
reported defect while opening a new one is exactly what you are here to catch.

1. **`thm-transfinite-description-of-generated-sigma-algebras`.** The recursion builds
   `\mathcal E_\alpha` for `\alpha<\omega_1` and claims the union is `\sigma(\mathcal
   E)`. Check the **seed**: with the seed now on disk, is `\varnothing` (and `X`) in
   stage 0? Check the **successor** clause admits complements and countable unions of
   sequences drawn from the previous stage, and the **limit** clause. Then check the
   claim that the union is closed under countable unions — this is where **cofinality**
   `\mathrm{cf}(\omega_1) = \omega_1` is used, so a countable sequence of stages is
   bounded below `\omega_1`. If the proof does not invoke that, it has a hole. Verify
   `\omega_1` regularity is actually cited to an item on disk, and that the citation
   states regularity/cofinality and not merely that `\omega_1` is uncountable.
   Instantiate `\mathcal E = \varnothing` and `X = \varnothing` explicitly and say what
   the displayed union evaluates to.
2. **`thm-cardinality-bound-for-generated-sigma-algebras`.** The bound is
   `|\sigma(\mathcal E)| \le |\mathcal E|^{\aleph_0}` for infinite `\mathcal E` (or
   `\le 2^{\aleph_0}` for countable). Check the exact form on disk against what the
   stagewise counting proves, and check **every** cardinal-arithmetic fact cited:
   monotonicity of exponentiation needs a **nonzero base**; `\kappa^{\aleph_0}\cdot
   \kappa^{\aleph_0} = \kappa^{\aleph_0}` needs infiniteness; a product over `\omega_1`
   stages needs `(\kappa^{\aleph_0})^{\aleph_1}` not `(\kappa^{\aleph_0})^{\aleph_0}`
   unless the sup is taken correctly. Open each cited cardinal-arithmetic item and
   compare its exact hypotheses. Check where **choice** is used (choosing an injection
   at each stage) and whether the cited choice item licenses a class-length or
   `\omega_1`-length sequence of choices.
3. **`thm-cardinality-of-the-borel-sigma-algebra-on-rn`.** The claim is
   `|\mathcal B(\mathbb R^n)| = 2^{\aleph_0}`. Both inequalities are needed: `\le` from
   the bound above with a countable generating family, `\ge` from an injection of a
   continuum-sized family of Borel sets (singletons or intervals). Check the `\ge`
   direction is actually proved and not assumed.
4. **`thm-infinite-sigma-algebra-has-continuum-many-members` and
   `lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence`.** The disjoint-sequence
   lemma is the crux: an infinite σ-algebra contains an infinite sequence of pairwise
   disjoint **nonempty** sets. Check the construction produces **nonempty** sets at
   every stage and that the recursion is well-founded — the standard proof needs the
   atoms argument or a careful splitting, and "pick a set not yet used" does not by
   itself give disjointness. Check the injection from `\mathcal P(\mathbb N)` into the
   σ-algebra is **injective**, which needs the disjoint sets nonempty. Check the choice
   principle used (countable/dependent choice) is cited.
5. **`thm-sigma-algebra-generated-by-a-countable-partition`.** The claim is that the
   generated σ-algebra is exactly the family of unions of subfamilies of the partition.
   Check both inclusions, check whether the partition's blocks are required nonempty,
   and check the count `2^{|I|}` (or `\le 2^{\aleph_0}`) against a partition with
   **finitely many** blocks and with a **single** block — the `n = 1` and finite cases
   are where an overstated cardinality claim shows.
6. **`cor-no-sigma-algebra-is-countably-infinite`** follows from item 4; check the
   corollary's Statement does not silently claim more (e.g. about arbitrary Boolean
   algebras, which is false — there are countably infinite Boolean algebras).

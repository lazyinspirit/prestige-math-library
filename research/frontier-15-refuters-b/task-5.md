## Your assignment — batch 4, group 5: the whole B page (examples, counterexamples, false statements)

Run `frontier-15`, batch 4. The pair is
`library/measure-theory/sigma-algebras-and-borel-sets.md` (A page, 44 items) and
`library/measure-theory/sigma-algebras-and-borel-sets-examples.md` (B page, 16 items).
All items are at `items/<id>.md`, `status: draft`. The batch proof contract is
`research/frontier-15-batch-4.proof-contracts.json`.

Read these items in full, every numbered step against every cited item on disk:

- ex-trivial-and-discrete-sigma-algebras
- ex-countable-cocountable-sigma-algebra
- ex-finite-partition-sigma-algebra
- ex-f-sigma-and-g-delta-sets-are-borel
- ex-rationals-are-borel-but-not-g-delta
- ex-closed-rays-form-a-borel-generating-pi-system
- ex-borel-trace-on-the-cantor-set
- fs-lambda-systems-are-closed-under-finite-intersections
- fs-increasing-unions-of-monotone-classes-are-monotone-classes
- fs-increasing-unions-of-sigma-algebras-are-sigma-algebras
- fs-unions-of-two-sigma-algebras-are-sigma-algebras
- fs-every-monotone-class-is-an-algebra
- fs-every-subset-of-r-is-borel
- fs-countably-infinite-sigma-algebras-exist
- rem-the-borel-hierarchy-never-stabilizes
- fs-the-borel-hierarchy-closes-after-two-steps

**Focus for this group. A B page lives or dies on whether its witnesses are real.** For
every example and every false-statement refutation, **instantiate the witness and check
it by hand.** A refutation that exhibits a counterexample which does not actually
falsify the stated claim is fatal.

1. **`ex-rationals-are-borel-but-not-g-delta`** is the delicate one. `\mathbb Q` is
   `F_\sigma`; that it is not `G_\delta` needs the **Baire category theorem** applied to
   `\mathbb R` (complete metric), plus the fact that `\mathbb Q` is dense and countable
   with empty interior. Check the Baire citation on disk states completeness and check
   the argument really derives a contradiction — the standard proof intersects the
   `G_\delta` sets for `\mathbb Q` with the complements of singletons of rationals to
   get an empty `G_\delta` dense set. Verify no step assumes what it proves.
2. **`ex-countable-cocountable-sigma-algebra`.** Check the three σ-algebra axioms
   directly, and check the claim about when it equals the power set (it does iff `X` is
   countable) and about what it generates. Instantiate `X` countable and `X =
   \varnothing`.
3. **The false statements.** Each must state a plausible claim and refute it with a
   concrete witness. Check each witness:
   - λ-systems closed under finite intersections: needs an explicit λ-system with two
     members whose intersection is absent. The standard witness on a four-point set is
     `\{\varnothing, X, \{1,2\}, \{3,4\}, \{1,3\}, \{2,4\}, \{1,4\}, \{2,3\}\}` — check
     the on-disk witness is genuinely a λ-system (verify **every** axiom) and that the
     alleged missing intersection really is missing.
   - increasing unions of σ-algebras / monotone classes: the witness needs an actual
     increasing chain whose union fails an axiom. Check the union genuinely fails, and
     that the chain is genuinely increasing.
   - union of two σ-algebras: needs two σ-algebras on the same set whose union omits a
     union or intersection. Check.
   - `fs-every-subset-of-r-is-borel`: this refutation is a **cardinality** argument
     (`|\mathcal B| = 2^{\aleph_0} < 2^{2^{\aleph_0}} = |\mathcal P(\mathbb R)|`).
     Check it cites the cardinality theorem correctly and that Cantor's theorem is
     invoked. A refutation by "Vitali set" instead would need choice and would not by
     itself show non-Borel-ness — flag it if that is what is written.
   - `fs-countably-infinite-sigma-algebras-exist`: refuted by the A-page corollary.
     Check the citation is to the σ-algebra result and not to a Boolean-algebra claim.
4. **`rem-the-borel-hierarchy-never-stabilizes` and
   `fs-the-borel-hierarchy-closes-after-two-steps`.** The Remark is a `proved_here:
   false` external-source item; **read its prose with a numbered step's suspicion.**
   Check the `external_dependency` block: does its `exact_statement` match the cited
   source's actual theorem, including the **range of `\alpha`** (the Borel hierarchy is
   conventionally indexed from `\alpha\ge1`, and `\Sigma^0_0` is undefined in the usual
   convention), and does the URL in the block match `sources.references`? Then check
   `fs-the-borel-hierarchy-closes-after-two-steps` restates the Remark faithfully in its
   `[L#]` — an overbroad restatement here is an inaccurate citation of an external
   result, which is the worst place for one.
5. **Provenance.** Report any `deps` edge in these sixteen items whose target has
   `provenance.statement: ai-generated`.

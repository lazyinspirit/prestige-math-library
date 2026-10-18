# Step 3a reader report — batch 52

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Disposition: reviewed; three assigned items repaired; no uneditable findings; no blocker.

## Opened inventory

Assigned pages:

- `derived-hall-algebras` — `library/hall-algebras-and-tensor-categories/derived-hall-algebras.md`
- `derived-hall-algebras-examples` — `library/hall-algebras-and-tensor-categories/derived-hall-algebras-examples.md`

Assigned A-page items, read in dependency order:

- `def-locally-finite-homotopy-type`
- `lem-homotopy-cardinality-base-change`
- `lem-homotopy-fiber-component-weight-ratio`
- `def-toen-locally-finite-dg-category`
- `lem-homotopy-cardinality-pushforward-is-functorial`
- `def-toen-derived-hall-algebra`
- `lem-perfect-dg-modules-have-finite-total-ext`
- `lem-derived-hall-moduli-spaces-and-convolution-are-finite`
- `lem-derived-hall-stabilizer-homotopy-sequence`
- `lem-derived-hall-associativity-squares`
- `thm-toen-derived-hall-number-formula`
- `thm-toen-derived-hall-algebra-is-associative-and-unital`
- `thm-hereditary-heart-embeds-in-derived-hall-algebra`
- `rem-toen-kapranov-and-triangle-counts-are-distinct`

Assigned B-page items:

- `cex-naive-triangle-orbit-count-omits-derived-homotopy-weight`
- `ex-hereditary-a2-heart-product-in-derived-hall`

Dependency items opened for the assigned arguments:

- Homotopy fibers and fibrations: `def-homotopy-fiber-of-a-map`, `def-mapping-path-space-replacement-of-a-map`, `def-fiber-and-fiber-homotopy-equivalence`, `thm-mapping-path-factorization`, and `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`.
- Dg and category conventions: `def-finite-field-and-its-order`, `lem-field-is-a-commutative-ring`, `def-cochain-complex-in-an-abelian-category`, `def-chain-complex-in-an-abelian-category`, `def-abelian-category`, `def-differential-graded-algebra`, `def-differential-graded-module`, `def-algebra-over-a-commutative-ring`, `def-bimodule`, `def-left-and-right-modules`, `def-model-category-and-quillen-adjunction`, and `def-triangulated-category`.
- Heart and ordinary Hall suppliers: `def-hall-finitary-abelian-category`, `def-untwisted-hall-algebra`, `lem-untwisted-hall-product-finiteness`, `thm-untwisted-hall-algebra-is-associative-and-unital`, `def-canonical-t-structure-on-a-derived-category`, and `def-truncation-functors-and-cohomology-of-a-t-structure`.
- A2 example suppliers: `def-projective-object` and `prop-morphisms-from-a-homotopically-projective-complex-need-no-roof`.
- I also checked the current-run batch-54 consumer `rem-derived-and-cohomological-hall-are-distinct` after clarifying the unbased homotopy-fiber convention. Its use of the finite higher-homotopy weights remains compatible.

The direct supplier statements and relevant proofs were checked where used. I did not recursively re-audit every prerequisite of every older supplier beyond the portions needed for these claims.

## Repairs and evidence

1. `def-locally-finite-homotopy-type`, `Remarks`: clarified that the fibers used for arbitrary maps are unbased mapping-path fibers, gave the path-space formula, and explained invariance under changing the target point within its component. The former dependency `def-homotopy-fiber-of-a-map` only explicitly named based maps, while this definition applies to arbitrary maps and target components. Toën’s §2 defines the pushforward for an arbitrary morphism and a target component, and Lemma 2.3 uses its unbased homotopy fiber; this supports the clarified convention. See [Toën, *Derived Hall algebras*, §2, Definitions 2.1–2.2 and Lemma 2.3, PDF pp. 4–5](https://arxiv.org/pdf/math/0501343v4). Updated the local nonempty-choice contract evidence.

2. `lem-derived-hall-stabilizer-homotopy-sequence`, step 1.1: replaced the full mapping space `Map(x,x)` with its equivalence subspace `Map(x,x)^≃`. A fiber of the full mapping space includes noninvertible endomorphisms, so its component tail does not yield the stated automorphism stabilizer. The revised exact sequence uses only equivalences and identifies the image in `Aut(x)` with `Aut(f/z)`. Toën’s proof of Proposition 5.1 uses the homotopy fiber in the category over the fixed target and obtains the same stabilizer tail. See [Toën, *Derived Hall algebras*, §5, Proposition 5.1 proof, PDF pp. 16–17](https://arxiv.org/pdf/math/0501343v4). Updated the step 1.1 proof contract. No stale `verification.judge` record was present.

3. `lem-derived-hall-associativity-squares`, step 1.1: made the homotopy-pullback comparison explicit. The source/target pullback records two arrows and an equivalence of their middle objects; transport gives a composable pair. The extra cofiber coordinate is an object equipped with an equivalence to the second arrow’s cofiber, a contractible space over that arrow. The mapping-cone coordinate change supplies the comparison with `Cone(k)`. This completes the homotopy-type argument beyond the object-level cone calculation. Toën states both correspondence squares and notes the first is the easier case in [§4, PDF p. 10](https://arxiv.org/pdf/math/0501343v4). Updated the step 1.1 proof contract. No stale `verification.judge` record was present.

No page prose or other batch item was edited. No defect remained that this reader was not licensed to repair.

## Validation

- Reflow: `def-locally-finite-homotopy-type` unchanged; `lem-derived-hall-stabilizer-homotopy-sequence` unchanged; `lem-derived-hall-associativity-squares` unchanged.
- Precheck: definition item, 0 checked / 0 failing; stabilizer lemma, 1 checked / 0 failing; associativity-squares lemma, 1 checked / 0 failing.
- Final proof layout: `node tools/proof-layout.mjs items/def-locally-finite-homotopy-type.md items/lem-derived-hall-stabilizer-homotopy-sequence.md items/lem-derived-hall-associativity-squares.md` — 3 items, 5 steps, 0 defects.

## Page verdicts

- `derived-hall-algebras` (A): pass after the unbased-fiber clarification and proof repairs. The finite-weight formulas, homotopy-cardinality operations, Toën coefficient formula, associativity/unit argument, and hereditary-heart order convention are supported by the listed hypotheses and suppliers.
- `derived-hall-algebras-examples` (B): pass. The shifted one-dimensional example gives the factor `q^{-1}` omitted by the unweighted count; the A2 computation has two middle isomorphism classes and coefficient one for each in the opposite-heart product order.

## Unrepaired findings and blocker

None. There is no blocker. The findings JSON therefore has an empty `findings` array.

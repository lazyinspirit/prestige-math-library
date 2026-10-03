# Reader 23 — batch 23, frontier-38-owner-30

Reviewed the current authored mathematics independently. The engine status command confirmed the active run at Step 5a. Both assigned pages and all ten assigned items were opened. No item, page, contract, plan, or published carrier was edited; no judgment or certification was issued.

## Opened inventory

Assigned pages, including their frontmatter and complete summaries:

- `library/algebraic-geometry/classical-complex-algebraic-actions-and-affine-embeddings.md` (A).
- `library/algebraic-geometry/classical-complex-algebraic-actions-and-affine-embeddings-examples.md` (B; read only).

Assigned item bodies were read with local suppliers preceding their consumers:

1. `items/lem-classical-affine-algebraic-set-product-coordinate-ring.md`.
2. `items/def-rational-action-on-affine-variety.md`.
3. `items/prop-affine-algebraic-actions-coordinate-ring-coaction.md`.
4. `items/lem-complex-affine-group-comodule-local-finiteness.md`.
5. `items/thm-coordinate-ring-of-affine-action-is-locally-finite.md`.
6. `items/lem-torus-rational-modules-and-gradings.md`.
7. `items/thm-affine-algebraic-action-embeds-equivariantly-in-finite-dimensional-module.md`.
8. `items/cex-abstract-group-action-is-not-algebraic-action.md`.
9. `items/ex-torus-weights-and-affine-action.md`.
10. `items/ex-additive-translation-equivariant-parabola-embedding.md`.

Published suppliers and supporting interfaces opened in full:

- `items/def-classical-affine-coordinate-ring.md`.
- `items/thm-classical-polynomial-functions-equal-coordinate-ring.md`.
- `items/def-classical-affine-variety-morphism.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-classical-regular-function-on-open-set.md`.
- `items/lem-classical-regular-functions-locality-and-gluing.md`.
- `items/thm-classical-affine-nullstellensatz-correspondence.md`.
- `items/thm-classical-principal-open-coordinate-ring-localization.md`.
- `items/thm-classical-affine-global-regular-functions-coordinate-ring.md`.
- `items/lem-classical-morphism-inverse-image-of-closed-is-closed.md`.
- `items/thm-classical-affine-morphisms-coordinate-ring-antiequivalence.md`.
- `items/def-finite-type-and-module-finite-algebras.md`.
- `items/thm-quotient-ring-universal-property.md`.
- `items/thm-universal-property-of-a-polynomial-ring.md`.

Other evidence read: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the relevant Step-5 clauses of `WORKFLOW.md`, `research/frontier-38-owner-30-batch-23.pages.json`, and every contract entry in `research/frontier-38-owner-30-batch-23.proof-contracts.json`. The initial manifest output cut off part of the A-page entry; the subsequent structured inventory recovered all IDs and dependencies, and the current items supplied the complete mathematics. Earlier author decisions and historical reader reports were not used as verdicts.

## Mathematical checks and source evidence

The product lemma's surjectivity follows by separating polynomial variables. Its injectivity correctly tests the independent second coefficients as functions; empty factors yield zero rings. The definition's Hopf identities follow from the group identities and equality of polynomial functions. In the action dictionary, direct pullback evaluates to `f(gx)`, whereas the right comodule evaluates to `f(g^{-1}x)`; the inversion and tensor switch give the claimed coassociativity and equivariant-map identities, including empty sets.

For the comodule lemma, the counit places each vector in its finite coefficient space, and coassociativity makes that space stable. Coefficient extraction here can also be justified without an infinite basis: finitely many independent coordinate functions admit finitely many evaluations with invertible evaluation matrix, since otherwise their evaluation vectors would span a proper subspace and a nonzero linear combination would vanish everywhere. Those evaluations extract the tensor coefficients. This also verifies the quotient-kernel step without adding AC. Finite sums give the finite-subset and directed-union assertions. Inversion supplies regular inverse matrix entries and hence a regular inverse determinant.

The coordinate-ring theorem correctly applies these two suppliers and preserves multiplication and the unit. The torus lemma compares Laurent coefficients to obtain orthogonal projectors with finite support, proves the grading converse, glues the finite-dimensional coactions of a rational module, and realizes reduced finite-type algebras through the radical presentation and Nullstellensatz. The trivial torus, zero module, and zero algebra are covered. Its function-weight formula has the correct inverse sign. The embedding theorem's surjective coordinate map has radical kernel, so the stated published correspondence identifies its closed image; evaluation is equivariant for the transpose-inverse dual action. The choice hypotheses required by the local supplier statements are carried explicitly.

The conjugation witness is an abstract action by individual polynomial translations. Restriction to `(g,0)` rules out joint regularity, and any stable finite-dimensional subspace containing `z` contains `1`; its restriction to `span(1,z)` cannot have regular matrix coefficients. For the plane example, inverse pullback gives weights `(-1,1)`, the zero-degree monomials are precisely powers of `xy`, and the dual weights are `(1,-1)`. For translation, dualizing the displayed inverse-pullback matrix gives `(a,b,c) -> (a,b+ga,c+2gb+g^2a)`; direct substitution verifies both the group law and invariance of the closed parabola with inverse coordinate `b`.

Authoritative source sections independently retrieved and read:

- [Brion, Introduction to actions of algebraic groups](https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf), printed pp. 3–4, PDF pages 4–5: Definitions 1.4, 1.6, 1.8; complete Lemma 1.5 argument; Example 1.7; complete Proposition 1.9 argument. These establish the inverse-pullback convention, rationality, torus gradings, and evaluation embedding. The authored product and empty/reducible extensions have explicit local arguments and were checked independently of Brion's wording.
- [Gille, Introduction to reductive group schemes over rings](https://www.math.ens.psl.eu/~gille/prenotes/reductive.pdf), pp. 25–27: complete Proposition 6.0.5, including the converse and proof; pp. 30–31: complete Proposition 6.2.1 and projector argument; p. 32: complete Theorem 6.3.1 proof. These confirm the comodule convention, grading equivalence, and finite-subrepresentation theorem. Its use of a whole coordinate-algebra basis was not assumed to establish the local choice-free claim.
- [Milne, Algebraic Groups (2022)](https://www.jmilne.org/math/Books/iAG2022.pdf), printed pp. 83–84: Remark 4.1 and its matrix argument; p. 86: complete Proposition 4.7 and Corollary 4.8 proofs; printed pp. 234–235: complete Theorem 12.12 proof and Remark 12.13. These independently support the comodule/module and character-grading interfaces.

The web tool could not open Brion or Gille, but direct downloads succeeded; PyMuPDF supplied the complete relevant pages after the unavailable `pdftotext` utility failed. This was resolved and is not an outstanding source blocker.

## Uneditable defects

The two false assertions below occur in contract evidence, not in the current item statements or proofs. Standalone contract changes are outside this dispatch's item/A-page repair scope, so they remain for the lead. Their severity is fatal for those asserted contract facts: neither erroneous assertion should be accepted as mathematical evidence. This does not assert that either theorem is false.

- Subject `lem-complex-affine-group-comodule-local-finiteness`; `research/frontier-38-owner-30-batch-23.proof-contracts.json:181`, `contracts["lem-complex-affine-group-comodule-local-finiteness"].boundaries[case="empty"].evidence`; **false-claim, fatal**. The evidence says that for the zero comodule every finite subset is empty. The zero vector space has underlying set `{0}`, whose finite subset `{0}` is nonempty. Correct evidence should check both the empty subset and `{0}` using the zero subcomodule. The item's step 1.1 already handles `v=0`; no theorem repair is necessary.
- Subject `thm-coordinate-ring-of-affine-action-is-locally-finite`; `research/frontier-38-owner-30-batch-23.proof-contracts.json:504`, `contracts["thm-coordinate-ring-of-affine-action-is-locally-finite"].boundaries[case="empty"].evidence`; **false-claim, fatal**. For empty `X`, its coordinate ring is the zero algebra, whose underlying vector space is `{0}`, not the empty set. Thus its only finite subset is not the empty subset: `{0}` must also be covered. The zero stable subspace covers both subsets, so the authored proof remains valid. Replace the vacuity argument with this explicit verification.

No defective published supplier was established. No additional item or page defect was established.

## Page verdicts, edits, and validation

- **A page:** no defect established in its titles, definitions, statements, proofs, or summary. Its two contract boundary assertions listed above require correction by the lead before accepting that evidence.
- **B page:** no defect established in any of its three witnesses/computations or in the summary; prose remained read only.

Edits: none. No withdrawal proposed. No verification stamps removed or added. Reflow, item precheck, and changed-item proof-layout commands were not applicable because no item changed. A read-only comparison found all 21 numbered steps mapped exactly once by the contracts. Citation quotes agree with the opened supplier text; the AC quote differs only in source line wrapping.

## Coverage limits and next action

This is a review of the ten current items, both page summaries, their complete contracts, the fourteen opened published suppliers/interfaces, and the source sections listed above. It is not a recursive audit of the hundreds of foundational dependencies reachable through elementary algebra or set theory, nor an audit of all sections of the three source works. No mathematical uncertainty remains in the assigned arguments. The lead should correct the two zero-object boundary assertions; no reader item repair or downstream interface change is pending.

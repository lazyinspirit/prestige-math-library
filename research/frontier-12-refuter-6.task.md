## refuter-6 — limits and colimits — size conditions and the commutation theorems

You are **read-only**. You cannot write files, and you never propose an edit
directly into content — you report evidence and Alpha adjudicates it from disk.

### Your assignment

| order | kind | page | items |
|---|---|---|---|
| 363 | A | `limits-and-colimits` | 46 |
| 364 | B | `limits-and-colimits-examples` | 17 |

**63 items.** Every id below is a file at `items/<id>.md`.

The batch's own record — what the author promised — is the matching
`research/frontier-12-batch-<i>.notes.md` and
`research/frontier-12-batch-<i>.proof-contracts.json`. The merged contract is
`research/frontier-12-proof-contracts.json`.

### Where the exposure is

46 + 17 items. `risk-report` scored nearly every item on this page HIGH or
CRITICAL, but that is largely an artefact — the scorer flags "analytic
limiting/completeness language" and a page about *limits* trips it on almost
every item. Do not let the tiers steer you. **Steer by where category theory
actually goes wrong: size, and the direction of universal properties.**

Concentrate on:

- **Smallness conditions.** Every completeness claim needs its diagram category
  to be small, and every "has all limits" claim needs to say all *small* limits.
  `thm-cardinality-sized-products-or-coproducts-force-a-preorder` (the Freyd
  argument) and `ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets`
  are precisely about size — check they state the size hypothesis exactly and
  that no other item on the page drops it.
- `cex-a-category-with-products-and-a-diagram-without-a-limit` and
  `fs-preserving-binary-products-and-equalizers-does-not-imply-continuity`. Check
  the witnesses are real: actually verify the category, the diagram, and the
  claimed absence of a limit. These are `counterexample` and `false-statement`
  items, so the **witness** is the content — a wrong witness is fatal.
- Filtered colimits commuting with finite limits in Set, and
  `cex-filtered-colimits-need-not-commute-with-infinite-products-in-set`. Check
  the filteredness hypothesis is used and the counterexample computes correctly.
- The representable-functor characterisation of limits — check the direction of
  the natural isomorphism and that naturality is actually verified or cited.
- Preservation / reflection / creation of limits: these three are routinely
  confused. Check each definition is used consistently with its own statement
  everywhere it appears, and that `cex-a-full-subcategory-limit-can-differ-from-ambient-limit`
  and `cex-a-functor-preserving-monomorphisms-but-not-pullbacks` are correct
  witnesses (both have registered finite countermodel smoke checks that pass, so
  the poset arithmetic is verified — check the *categorical framing* around them).
- Limits in Set as subsets of the product, and the equaliser/pullback
  constructions — check the universal property is verified in both existence and
  uniqueness.

### Item ids


**`limits-and-colimits`**

- `def-constant-diagram-cone-cocone-and-cone-morphism`
- `def-limit-and-colimit-of-a-diagram`
- `thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism`
- `prop-limit-colimit-duality`
- `prop-empty-limits-and-colimits-are-terminal-and-initial-objects`
- `def-products-and-coproducts`
- `def-equalizers-and-coequalizers`
- `def-pullbacks-and-pushouts`
- `def-kernels-and-cokernels-as-equalizers-and-coequalizers`
- `lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic`
- `cor-equalizers-are-monic-and-coequalizers-are-epic`
- `lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`
- `thm-pullback-and-pushout-pasting`
- `def-cardinality-of-a-small-category-and-kappa-small-diagram`
- `def-small-finite-and-large-limits-completeness-and-cocompleteness`
- `lem-identity-diagram-large-limit-and-initial-objects`
- `thm-set-has-all-small-limits`
- `thm-set-has-all-small-colimits`
- `thm-small-limits-from-products-and-equalizers`
- `thm-small-colimits-from-coproducts-and-coequalizers`
- `cor-completeness-and-cocompleteness-criteria`
- `thm-finite-limit-and-colimit-criteria`
- `def-preservation-reflection-creation-continuity-and-cocontinuity`
- `lem-canonical-comparison-characterises-limit-preservation`
- `prop-fully-faithful-functors-reflect-limits-and-colimits`
- `prop-equivalences-preserve-reflect-and-create-limits-and-colimits`
- `prop-created-limits-exist-and-are-preserved`
- `thm-chosen-limits-and-colimits-assemble-into-functors`
- `rem-choice-behind-limit-and-colimit-functors`
- `thm-representable-functors-preserve-small-limits`
- `cor-hom-functors-are-continuous-and-send-colimits-to-limits`
- `thm-limits-and-colimits-in-functor-categories-are-computed-pointwise`
- `cor-functor-categories-inherit-completeness-and-cocompleteness`
- `cor-yoneda-preserves-and-reflects-small-limits`
- `thm-small-limits-commute-with-small-limits`
- `def-filtered-category-and-filtered-colimit`
- `lem-equality-in-a-filtered-colimit-of-sets-is-eventual`
- `thm-filtered-colimits-commute-with-finite-limits-in-set`
- `def-final-and-initial-functors`
- `thm-final-functors-do-not-change-colimits-and-initial-functors-do-not-change-limits`
- `thm-grp-is-complete-and-cocomplete`
- `thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`
- `thm-rmod-is-complete-and-cocomplete`
- `prop-completeness-and-cocompleteness-in-poset-categories`
- `thm-cardinality-sized-products-or-coproducts-force-a-preorder`
- `cor-small-complete-or-cocomplete-categories-are-preorders`

**`limits-and-colimits-examples`**

- `ex-products-and-coproducts-in-set`
- `ex-equalizers-and-coequalizers-in-set`
- `ex-pullbacks-and-pushouts-in-set`
- `ex-pullback-in-top`
- `ex-equalizer-of-group-homomorphisms`
- `ex-colimit-of-an-increasing-chain-of-sets`
- `ex-products-in-a-poset-are-infima`
- `ex-empty-diagrams-select-terminal-and-initial-objects`
- `cex-a-category-with-products-and-a-diagram-without-a-limit`
- `cex-a-functor-preserving-monomorphisms-but-not-pullbacks`
- `cex-a-full-subcategory-limit-can-differ-from-ambient-limit`
- `cex-filtered-colimits-need-not-commute-with-infinite-products-in-set`
- `fs-not-every-category-has-all-small-limits`
- `fs-preserving-binary-products-and-equalizers-does-not-imply-continuity`
- `fs-the-underlying-set-functor-on-top-does-not-preserve-limits`
- `fs-colimits-in-grp-are-computed-on-underlying-sets`
- `ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets`

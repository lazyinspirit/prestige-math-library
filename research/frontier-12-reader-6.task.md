## Reader 6 — audit batch 7 (63 items)

You did **not** author this batch. That separation is the point of your role.

| order | kind | page | items |
|---|---|---|---|
| 363 | A | `limits-and-colimits` | 46 |
| 364 | B | `limits-and-colimits-examples` | 17 |

Every item id is listed in `research/plan-spec.json` under these pages, and each
one is a file at `items/<id>.md`. The batch's own record — what its author
promised — is `research/frontier-12-batch-7.notes.md` and
`research/frontier-12-batch-7.proof-contracts.json`.

### Write your findings to

`research/frontier-12-reader-6.findings.md`

### You are READ-ONLY on content

Do not edit any file under `items/` or `library/`. Alpha adjudicates every
finding from disk and applies any repair. Your job is evidence, not a verdict.

### Priorities for this batch

Read every item, but spend your attention where the exposure is. 63 items is
a lot; a shallow pass over all of them is worth less than a real pass over the
proof-bearing ones plus a check of every citation.

Specific things known to be live in this run:

- **Hypotheses.** `char != 2` for polarisation and orthogonal diagonalisation;
  ordered fields for Sylvester's inertia; star-shaped rather than merely
  connected for the converse of closedness; smallness conditions in the
  category-theory limits; pairwise versus mutual independence in probability;
  nonnegativity for Markov; the split-characteristic-polynomial hypothesis where
  the source assumed an algebraically closed field.
- **Citation fidelity.** A `[F#]`/`[A#]`/`[L#]` fact must state the cited
  proposition itself. This run already caught one at scaffold stage — a quoted
  `|sin x| <= |x|` where the source states `sin(x) <= x` for `x >= 0`. Open the
  cited item on disk and compare; do not trust the restatement.
- **Green's theorem** (if batch 4) is deliberately scoped to elementary regions
  and finite unions. Complaining it does not cover arbitrary Jordan domains is
  NOT a finding. A proof step that quietly assumes a Jordan domain IS one.
- **Titles.** A title or Statement claiming more than the proof delivers is
  fatal, and the step-7 judges cannot see a false title.

Item ids, for your checklist:

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

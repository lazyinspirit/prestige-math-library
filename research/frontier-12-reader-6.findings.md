# Frontier-12 independent reader 6 findings

Run: `frontier-12`  
Step: 6  
Batch: 7 (`limits-and-colimits`, `limits-and-colimits-examples`)

## Fatal findings

None remain on the current disk state. In particular, I re-read the live
step-6 repairs to the R-Mod free-module construction, the pullback-in-Top
citation, and the poset coequalizer sentence before making this call.

## Nonfatal findings

### `cor-equalizers-are-monic-and-coequalizers-are-epic`

- **Location:** Fact [F1], and consequently the justification of proof steps
  1.1 and 2.1.
- **Defect:** [F1] says an equalizer is “the single nonidentity leg” of its
  limiting cone, and dually for a coequalizer. That is false for the actual
  parallel-pair diagram: its equalizer cone has a leg $e:E\to A$ and also the
  leg $fe=ge:E\to B$; neither is forced to be an identity. The cited
  `def-equalizers-and-coequalizers` says only that $e$ is the equalizer
  morphism and that the whole parallel-pair cone is limiting. The proof can be
  repaired immediately: from $er=es$ one also gets $(fe)r=(fe)s$, after which
  joint monicity applies (or use the equalizer universal property directly).
- **Severity:** **nonfatal** — the Statement is true and the missing correction
  is well inside the owner's 30-second rule, but the cited Fact is not a
  faithful restatement.

### `thm-set-has-all-small-limits`

- **Location:** Fact [F1], proof step 1.1, and the [F1] citation-contract row.
- **Defect:** [F1] claims that a small category has sets of objects and
  morphisms, but its sole citation is
  `def-small-finite-and-large-limits-completeness-and-cocompleteness`. That item
  says only that a small diagram has a *small indexing category* and links out
  to `def-small-locally-small-and-large-category`; it does not itself state the
  object/morphism-set definition used to form the displayed product and
  subset. The contract quote faithfully exposes this mismatch rather than
  curing it. The direct published dependency is
  `def-small-locally-small-and-large-category`.
- **Severity:** **nonfatal** — the construction is correct once the exact size
  definition is cited.

### `thm-set-has-all-small-colimits`

- **Location:** Fact [F1], proof step 1.1, and the [F1] citation-contract row.
- **Defect:** The same direct-citation mismatch occurs here. The cited
  completeness definition does not state that the object and morphism
  collections are sets, although step 1.1 uses precisely that assertion to
  make the tagged union and generating relation sets. The exact source is
  `def-small-locally-small-and-large-category`.
- **Severity:** **nonfatal** — no change to the Statement or construction is
  needed.

### `thm-small-limits-from-products-and-equalizers`

- **Location:** Fact [F3], proof step 1.1, and the [F3] citation-contract row.
- **Defect:** [F3] says a small diagram has sets of objects and arrows, while
  the cited `def-small-finite-and-large-limits-completeness-and-cocompleteness`
  only says its indexing category is small. Step 1.1 needs the definition of
  small category from `def-small-locally-small-and-large-category` to conclude
  that both products are set-indexed.
- **Severity:** **nonfatal** — this is an exact-source defect, not a gap in the
  product/equalizer argument.

### `thm-chosen-limits-and-colimits-assemble-into-functors`

- **Location:** Fact [F3] and proof step 4.1.
- **Defect:** [F3] restates smallness as “cardinality of the indexing
  category” and cites
  `def-cardinality-of-a-small-category-and-kappa-small-diagram`. The cited item
  begins by assuming the Axiom of Choice; this theorem does not assume Choice
  and does not need category cardinality. What step 4.1 needs is only that the
  small source permits formation of the functor category, already stated in
  `def-functor-category`. As written, [F3] both changes the definition of
  smallness and silently imports a hypothesis from its source.
- **Severity:** **nonfatal** — [F3] is redundant and removing it leaves the
  functoriality proof intact.

### `thm-limits-and-colimits-in-functor-categories-are-computed-pointwise`

- **Location:** Fact [L1], proof steps 1.1 and 3.1, and the proof-contract
  `nonempty-choice` boundary row.
- **Defect 1:** [L1] cites
  `thm-chosen-limits-and-colimits-assemble-into-functors`, whose hypothesis is
  a chosen limit for **every** $\mathcal J$-diagram in $\mathcal C$. The present
  Statement chooses limits only for the pointwise diagrams
  $j\mapsto D(j)(a)$. Step 1.1 applies [L1] without its global-choice
  hypothesis. The required map $L(h)$ nevertheless follows directly in a few
  lines from the target pointwise limit's universal property, so the theorem
  itself survives.
- **Defect 2:** Step 3.1 explicitly adds the claim that if only existence is
  assumed, Choice selects the pointwise cones. Yet the contract marks
  `nonempty-choice` as `not_applicable` and says that no simultaneous selection
  occurs. That record is the opposite of the text it contracts. (The Statement
  itself assumes chosen cones, so step 3.1 is an optional strengthening.)
- **Severity:** **nonfatal** — both are local citation/contract corrections;
  the chosen-pointwise Statement is proved.

### `thm-small-limits-commute-with-small-limits`

- **Location:** Fact [F3] and proof step 4.1.
- **Defect:** [F3] imports the Choice-dependent category-cardinality
  definition, while neither the Statement nor the proof assumes Choice. It
  also does not state the conclusion used in step 4.1, namely that
  $\mathcal J\times\mathcal K$ is small. That conclusion follows in ZF from
  the actual definition of small category plus the displayed subset/product
  construction, so the current citation is both stronger in hypothesis and
  weaker in conclusion than the proof needs.
- **Severity:** **nonfatal** — replacing [F3] by the ordinary small-category
  definition closes the issue immediately.

### `thm-filtered-colimits-commute-with-finite-limits-in-set`

- **Location:** Proof step 1.5.
- **Defect:** The step infers that the colimit of the constant singleton
  diagram is a singleton from the fact that the filtered category is
  nonempty. Nonemptiness alone is insufficient: over a discrete category with
  two objects that colimit has two elements. The conclusion is true here, but
  it also needs the common-target/connectedness part of filteredness in [F1]
  to identify all tagged singleton representatives.
- **Severity:** **nonfatal** — this is a one-sentence omitted use of an already
  cited hypothesis.

### `thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`

- **Location:** Fact [F3], proof steps 1.2 and 2.1, and the [F3]
  citation-contract row.
- **Defect:** [F3] says “Continuity means inverse images of open sets are open”
  but cites only `def-continuous-map-top`. That item defines global continuity
  pointwise through neighbourhoods and explicitly leaves the inverse-open-set
  equivalence to `thm-continuity-characterisations-top`. The contract quote
  stops without the claimed global equivalence. The repaired [F2] already
  supplies all continuity tests actually needed by steps 1.2 and 2.1, so [F3]
  can be removed there or cited to the exact theorem.
- **Severity:** **nonfatal** — the Top limit/colimit construction remains
  correct through [F2].

### `thm-rmod-is-complete-and-cocomplete`

- **Location:** Proof steps 1.3 and 2.1, Fact [F3], and their citation-use rows.
- **Defect:** Both steps quotient by “the submodule generated by” a displayed
  set. Existence and the least-submodule property are not supplied by [F2]
  (`def-submodule`) or [F4] (quotients). They are supplied by the already
  declared dependency `def-generated-cyclic-finitely-generated-and-free-modules`,
  but current [F3] deliberately restates only its basis/free-module clause and
  the two steps do not cite [F3]. Thus the repaired proof still uses a
  dependency proposition that no Fact or contract use licenses.
- **Severity:** **nonfatal** — adding the generated-submodule clause to [F3]
  and citing it in steps 1.3 and 2.1 is a short local repair; the explicit free
  module construction now proves the substantive part.

## Additional inaccurate proof-contract boundary records

The following rows are concrete false evidence claims in
`research/frontier-12-batch-7.proof-contracts.json`. They do not invalidate the
mathematics, because the relevant cases are either handled elsewhere or are
not applicable, but the named step does not do the work asserted by the row.
Each is **nonfatal**.

### `thm-set-has-all-small-limits`

- `one` cites step 1.2, but step 1.2 treats the **empty** object index and the
  resulting singleton product, not a one-object indexing category.

### `thm-set-has-all-small-colimits`

- `one` cites step 2.3, but step 2.3 treats an empty index and obtains the empty
  colimit; it checks no one-object/one-index specialization.

### `thm-finite-limit-and-colimit-criteria`

- `empty` cites step 1.2, whose first words assume the finite index category is
  **nonempty**. The empty boundary is handled by steps 2.1 and 4.1.
- Both `iff-forward` and `iff-reverse` cite only step 1.1. That step covers the
  finite-products/equalizers formulation of clause 1, not the terminal/pullback
  equivalence, either equivalence in clauses 2 and 3, or the three dual colimit
  equivalences.

### `thm-filtered-colimits-commute-with-finite-limits-in-set`

- `one` cites step 1.5, which is the **zero-coordinate/empty-product** case.
  The one-coordinate product is covered uniformly by steps 1.1 and 1.2, not by
  the named step.

### `thm-grp-is-complete-and-cocomplete`

- `empty` cites only step 1.1, which handles the empty product. The empty
  coproduct is handled in step 2.1.

### `thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`

- `degenerate` says step 3.1 handles coincident-arrow, identity, posetal, or
  collapsed cases. Step 3.1 only observes that the underlying Set comparison
  maps are identities; it contains none of the named degenerate cases.

### `thm-rmod-is-complete-and-cocomplete`

- `empty` cites only step 1.1, which handles the empty product. The empty
  coproduct is handled in step 3.1.

### `prop-completeness-and-cocompleteness-in-poset-categories`

- `empty` cites only step 1.1, which handles the empty infimum/product; the
  empty supremum/coproduct is in step 1.2.
- Both `iff-forward` and `iff-reverse` cite only step 2.1, which treats the
  completeness/infimum equivalence. It does not prove the cocompleteness or
  complete-lattice equivalences.

### `ex-products-and-coproducts-in-set`

- `empty` cites only step 1.2, which checks the empty product; the empty
  coproduct is in step 2.1.
- `one` also cites step 1.2, but that step has an empty index, not a one-element
  index.

### `ex-empty-diagrams-select-terminal-and-initial-objects`

- `empty` cites only step 1.1, which checks Set. The Grp empty-diagram cases
  require step 1.2, and the conversion to empty limits/colimits is step 2.1.

### `cex-a-category-with-products-and-a-diagram-without-a-limit`

- `degenerate` cites step 1.2, but that step deliberately uses two **distinct**
  constant maps. It does not handle a coincident-arrow or collapsed case.

### `cex-filtered-colimits-need-not-commute-with-infinite-products-in-set`

- `empty` cites step 1.1, but the construction uses positive indices and a
  countably infinite nonempty product. No empty boundary occurs there.

### `fs-not-every-category-has-all-small-limits`

- `empty` cites step 1.1, but that step explicitly quantifies over nonempty
  apex sets and a nonempty parallel-pair diagram; there is no empty case to
  discharge.

### `fs-preserving-binary-products-and-equalizers-does-not-imply-continuity`

- `empty` cites step 1.1, which checks a binary product. The missing nullary
  product is the counterexample and is checked in step 1.3.

The strict contract tool currently reports `0 error(s), 0 warning(s), 51/51
item(s) checked`; the rows above are semantic failures that substring and
step-mapping validation cannot detect. The affected contracts also currently
carry `risk_review` dispositions saying that no unrepaired defect remains; if
Alpha confirms any finding above, those dispositions need corresponding
adjudication updates.

## Coverage

I read all 63 assigned items fully; none was sampled. The 46 A-page items read
in full were: `def-constant-diagram-cone-cocone-and-cone-morphism`,
`def-limit-and-colimit-of-a-diagram`,
`thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism`,
`prop-limit-colimit-duality`,
`prop-empty-limits-and-colimits-are-terminal-and-initial-objects`,
`def-products-and-coproducts`, `def-equalizers-and-coequalizers`,
`def-pullbacks-and-pushouts`,
`def-kernels-and-cokernels-as-equalizers-and-coequalizers`,
`lem-limit-legs-are-jointly-monic-and-colimit-legs-jointly-epic`,
`cor-equalizers-are-monic-and-coequalizers-are-epic`,
`lem-pullbacks-of-monomorphisms-are-monomorphisms-and-pushouts-of-epimorphisms-are-epimorphisms`,
`thm-pullback-and-pushout-pasting`,
`def-cardinality-of-a-small-category-and-kappa-small-diagram`,
`def-small-finite-and-large-limits-completeness-and-cocompleteness`,
`lem-identity-diagram-large-limit-and-initial-objects`,
`thm-set-has-all-small-limits`, `thm-set-has-all-small-colimits`,
`thm-small-limits-from-products-and-equalizers`,
`thm-small-colimits-from-coproducts-and-coequalizers`,
`cor-completeness-and-cocompleteness-criteria`,
`thm-finite-limit-and-colimit-criteria`,
`def-preservation-reflection-creation-continuity-and-cocontinuity`,
`lem-canonical-comparison-characterises-limit-preservation`,
`prop-fully-faithful-functors-reflect-limits-and-colimits`,
`prop-equivalences-preserve-reflect-and-create-limits-and-colimits`,
`prop-created-limits-exist-and-are-preserved`,
`thm-chosen-limits-and-colimits-assemble-into-functors`,
`rem-choice-behind-limit-and-colimit-functors`,
`thm-representable-functors-preserve-small-limits`,
`cor-hom-functors-are-continuous-and-send-colimits-to-limits`,
`thm-limits-and-colimits-in-functor-categories-are-computed-pointwise`,
`cor-functor-categories-inherit-completeness-and-cocompleteness`,
`cor-yoneda-preserves-and-reflects-small-limits`,
`thm-small-limits-commute-with-small-limits`,
`def-filtered-category-and-filtered-colimit`,
`lem-equality-in-a-filtered-colimit-of-sets-is-eventual`,
`thm-filtered-colimits-commute-with-finite-limits-in-set`,
`def-final-and-initial-functors`,
`thm-final-functors-do-not-change-colimits-and-initial-functors-do-not-change-limits`,
`thm-grp-is-complete-and-cocomplete`,
`thm-top-is-complete-and-cocomplete-and-its-underlying-set-functor-preserves-both`,
`thm-rmod-is-complete-and-cocomplete`,
`prop-completeness-and-cocompleteness-in-poset-categories`,
`thm-cardinality-sized-products-or-coproducts-force-a-preorder`, and
`cor-small-complete-or-cocomplete-categories-are-preorders`.

The 17 B-page items read in full were: `ex-products-and-coproducts-in-set`,
`ex-equalizers-and-coequalizers-in-set`,
`ex-pullbacks-and-pushouts-in-set`, `ex-pullback-in-top`,
`ex-equalizer-of-group-homomorphisms`,
`ex-colimit-of-an-increasing-chain-of-sets`,
`ex-products-in-a-poset-are-infima`,
`ex-empty-diagrams-select-terminal-and-initial-objects`,
`cex-a-category-with-products-and-a-diagram-without-a-limit`,
`cex-a-functor-preserving-monomorphisms-but-not-pullbacks`,
`cex-a-full-subcategory-limit-can-differ-from-ambient-limit`,
`cex-filtered-colimits-need-not-commute-with-infinite-products-in-set`,
`fs-not-every-category-has-all-small-limits`,
`fs-preserving-binary-products-and-equalizers-does-not-imply-continuity`,
`fs-the-underlying-set-functor-on-top-does-not-preserve-limits`,
`fs-colimits-in-grp-are-computed-on-underlying-sets`, and
`ex-the-empty-set-is-the-product-of-the-large-family-of-all-sets`.

I also read every numbered proof/verification step, all 52 external dependency
items at the cited section on disk, all 51 proof contracts (including every
citation, derivation, boundary, and finite-smoke row), both page files, the
batch notes, and the required normative/scaffold/decision files. Nothing in the
assigned disk scope was left unchecked.

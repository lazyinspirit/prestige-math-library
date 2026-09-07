# Frontier 33 — Step-6 reader report, batch 6

## Checkpoint — derived tensor definition

- Opened the current batch manifest, both assigned draft pages, and all 69
  assigned item files: the 60-item A page `derived-categories` and the 9-item
  B page `derived-categories-examples`.
- Repaired `def-derived-tensor-product-in-the-bounded-above-setting`: its
  first sentence previously allowed an arbitrary left complex $M$, while the
  displayed total-complex models and the cited flat-tensor lemma require both
  inputs to be bounded above. It now says that $N$ and $M$ are bounded-above
  right and left complexes. The matching manifest summary and the two
  dependent exact-quote entries in the proof-contract artifact were updated.
- Validation after the repair: reflow unchanged; focused precheck passed
  (`0 checked`, as this is a definition); manifest dependencies and scoped
  content policy passed. The first strict-contract run exposed the two stale
  exact quotes caused by the repair; they have been synchronized and will be
  rerun with the final focused checks.
- The source and dependency review is continuing. No uneditable finding has
  yet been recorded.

## Opened scope

- A page: `library/homological-algebra/derived-categories.md` (current page
  summary and all 60 listed items).
- B page: `library/homological-algebra/derived-categories-examples.md`
  (current page summary and all 9 listed examples/counterexample).
- A-item inventory: `def-multiplicative-system-in-a-category`,
  `def-localization-of-a-category-at-a-class-of-morphisms`,
  `def-left-roof-representing-a-localized-morphism`,
  `def-common-refinement-equivalence-of-roofs`,
  `lem-roof-equivalence-is-an-equivalence-relation`,
  `lem-composition-of-roofs-is-well-defined`,
  `thm-the-calculus-of-fractions-constructs-the-localization`,
  `prop-quasi-isomorphisms-contain-identities-and-are-closed-under-composition`,
  `thm-two-out-of-three-for-quasi-isomorphisms`,
  `lem-quasi-isomorphisms-admit-the-roof-calculus-in-the-homotopy-category`,
  `def-derived-category-of-an-abelian-category`,
  `prop-the-localization-functor-sends-quasi-isomorphisms-to-isomorphisms`,
  `prop-cohomology-factors-through-the-derived-category`,
  `prop-a-complex-is-zero-in-the-derived-category-exactly-when-it-is-acyclic`,
  `lem-addition-of-roofs-makes-an-additive-localization`,
  `lem-finite-roof-squares-and-composable-pairs-can-be-cleared`,
  `lem-localized-cone-triangles-satisfy-tr-one-through-tr-three`,
  `lem-localized-cone-triangles-satisfy-the-octahedral-axiom`,
  `thm-the-derived-category-inherits-a-triangulated-structure`,
  `thm-the-derived-category-is-the-verdier-quotient-by-acyclic-complexes`,
  `def-homotopically-projective-bounded-above-complex`,
  `def-homotopically-injective-bounded-below-complex`,
  `thm-a-bounded-above-complex-of-projectives-is-homotopically-projective`,
  `thm-a-bounded-below-complex-of-injectives-is-homotopically-injective`,
  `prop-morphisms-from-a-homotopically-projective-complex-need-no-roof`,
  `prop-morphisms-into-a-homotopically-injective-complex-need-no-roof`,
  `def-brutal-truncation-of-a-complex`, `def-canonical-truncation-of-a-complex`,
  `lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology`,
  `thm-canonical-truncations-fit-a-distinguished-triangle`,
  `prop-bounded-derived-localizations-embed-fully-faithfully`,
  `lem-bounded-above-complexes-admit-projective-replacements`,
  `lem-bounded-below-complexes-admit-injective-replacements`,
  `thm-projective-complexes-model-the-bounded-above-derived-category`,
  `thm-injective-complexes-model-the-bounded-below-derived-category`,
  `thm-ext-is-hom-in-the-derived-category`,
  `prop-yoneda-product-is-composition-in-the-derived-category`,
  `def-canonical-t-structure-on-a-derived-category`,
  `thm-the-canonical-pair-is-a-t-structure`,
  `thm-the-heart-of-the-canonical-t-structure-is-equivalent-to-the-original-abelian-category`,
  `def-left-total-derived-functor-on-the-bounded-above-derived-category`,
  `lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism`,
  `thm-existence-of-the-bounded-above-left-total-derived-functor`,
  `def-right-total-derived-functor-on-the-bounded-below-derived-category`,
  `thm-existence-of-the-bounded-below-right-total-derived-functor`,
  `prop-total-derived-functors-send-distinguished-triangles-to-distinguished-triangles`,
  `prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor`,
  `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`,
  `def-derived-tensor-product-in-the-bounded-above-setting`,
  `prop-homology-of-the-derived-tensor-product-is-tor`,
  `def-derived-hom-in-the-bounded-setting`,
  `prop-cohomology-of-derived-hom-is-ext`,
  `prop-bounded-derived-complexes-split-when-higher-ext-between-cohomologies-vanishes`,
  and the seven scoped false-statement boundary checks.
- B-item inventory: `ex-a-roof-representing-an-ext-one-class`,
  `ex-an-acyclic-complex-that-becomes-zero-in-d-but-not-in-k`,
  `ex-inverting-a-quasi-isomorphism-by-a-reversed-roof`,
  `ex-ext-one-as-a-derived-category-morphism`,
  `ex-brutal-versus-canonical-truncation`,
  `ex-a-canonical-truncation-triangle`,
  `ex-derived-tensor-of-two-cyclic-abelian-groups`,
  `ex-derived-hom-of-cyclic-abelian-groups`, and
  `cex-an-unbounded-complex-of-projectives-that-is-not-k-projective`.
- Opened the statements/definitions of all 49 direct published dependencies.
  For the central localization and derived-category claims, also opened Stacks
  sections 13.11 (tag `05RR`, especially its construction/local-smallness and
  bounded-localization paragraphs) and 13.5 (tag `05R1`, its localization of
  triangulated categories); opened tags `0643` and `0118` for the cited
  projective-resolution and truncation sections.

## Results

- Repaired in-flight item: `def-derived-tensor-product-in-the-bounded-above-setting`.
  Both tensor inputs are now explicitly bounded above. This prevents an
  arbitrary unbounded second input from making the displayed total model leave
  $D^-(\mathbf{Ab})$, while the finite-diagonal flat-tensor argument only covers
  the bounded-above case. The batch manifest summary and the exact quotes in
  contracts for `prop-homology-of-the-derived-tensor-product-is-tor` and
  `ex-derived-tensor-of-two-cyclic-abelian-groups` were synchronized.
- Uneditable published-dependency defect: the definition in
  `items/def-tensor-product-total-complex-of-chain-complexes.md` calls its
  diagonal sum finite for arbitrary chain complexes. A fixed diagonal is
  generally infinite without bounds. Batch 6's bounded-above application is
  safe, but the published universal definition is false as written. It is the
  sole JSON finding, routed through
  `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`.

## Page verdicts and validation

- `derived-categories` (A): mathematically coherent after the in-flight scope
  repair; one published dependency is escalated rather than edited.
- `derived-categories-examples` (B): pass; all nine current computations and
  boundary examples agree with their stated conventions.
- Reflow on the changed definition: unchanged. Focused precheck: pass (the
  definition has no phase-formatted proof). `manifest-deps`: 69 items, 0
  errors. Scoped `content-policy`: 69 items, 0 errors/warnings. Strict
  `proof-contract`: 55/55 items, 0 errors; it retains one existing non-failing
  `shotgun-bracket` warning on
  `prop-classical-derived-functors-are-the-cohomology-objects-of-the-total-derived-functor`.
- No stale `verification.judge` record was present. No blockers prevent routing
  the single published dependency finding.

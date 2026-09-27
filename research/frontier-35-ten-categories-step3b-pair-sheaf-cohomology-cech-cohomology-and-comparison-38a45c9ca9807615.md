# Step 3b — pair `sheaf-cohomology-cech-cohomology-and-comparison`

Run: `frontier-35-ten-categories`. Role: alpha-high. Batch 7.
A page: `sheaf-cohomology-cech-cohomology-and-comparison` (47 items).
B page: `sheaf-cohomology-cech-cohomology-and-comparison-examples` (11 items).
Output manifest: `research/frontier-35-ten-categories-batch-7.pages.json`.

This file is the assigned checkpoint/notes file; it is also the dispatch report
(final section completed at handoff). Sections below are updated after every
item, in dependency order.

## Conventions

- Item authoring pipeline: `/tmp/author/g*.py` -> `run.py` -> `items/<id>.md`;
  contract rows merged into
  `research/frontier-35-ten-categories-batch-7.proof-contracts.json`.
  Never hand-edit generated item files.
- Per-item loop: `run.py` (precheck) -> `rendercheck.mjs` -> `proof-contract.mjs
  --strict --items <id>` -> `sync_manifest.py` -> `step3-decisions.mjs record-item`.
- Choice: every item whose proof uses injective resolutions / DC declares
  `def-axiom-of-choice` in `deps` and cites
  `thm-choice-implies-dependent-implies-countable-choice` (AC => DC) where the
  supplier assumes DC.
- B page is a leaf: B items cite only A items and earlier B items.

## Status

### A page

Authored, checked (precheck + rendercheck + strict proof-contract) and recorded:

1 `def-global-sections-functor-sheaves` .. 24 (earlier sessions; recorded accept,
#4 recorded repaired).
25 `lem-acyclic-rows-and-columns-of-cech-double-complex` (new local supplier)
26 `thm-cech-to-sheaf-cohomology-comparison`
27 `thm-leray-acyclic-cover-theorem`
28 `lem-two-open-cover-cech-complex`
29 `thm-mayer-vietoris-sheaf-cohomology`
30 `thm-cohomology-disjoint-union`
31 `thm-cohomology-one-point-space`
32 `def-cohomological-dimension-space`
33 `lem-cech-vanishing-on-a-cofinal-basis-implies-acyclicity` — recorded accept.
  Facts checked verbatim against published sources; AC (F3) and AC => DC (F11)
  both cited inside step @SES; boundary `iff-reverse` evidence names step @Ind.

Next: 34 `lem-filtered-colimits-commute-with-sheaf-cohomology-on-noetherian-spaces`.

### B page

Not started (1..11).

## Open obligations

- A 34–47 and B 1–11 to author.
- Possible local supplier needed for 34: "open subsets of a Noetherian space are
  quasi-compact" (currently only inside a published proof text of
  `lem-classical-variety-noetherian-components`); if needed it must be added on
  an assigned A page before its consumers and registered.
- Batch closing: coverage/matrix refresh, cross-batch dependency rows,
  `frontier-dependency-ledger.mjs refresh`, page files for both A and B,
  content-policy, validate-plan, depcheck, final step3-decisions check.

## Published-prerequisite concerns (for the owner; not ours to edit)

- Five published items on `projective-and-injective-resolutions` carry an
  explicit AC premise without a direct `def-axiom-of-choice` edge:
  `lem-extension-from-subobjects-of-a-generator-detects-injectivity`,
  `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps`,
  `lem-a-sufficiently-long-generator-extension-iteration-is-injective`,
  `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`,
  `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution`.
  Confidence: high (statements name AC; no direct edge). These reach AC
  transitively; our local items declare AC directly. Metadata debt owned by the
  serial reconciler.

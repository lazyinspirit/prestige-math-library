# Frontier-31a Step 6a reader report — batch 4

## Scope opened

- Manifest and contracts: `research/frontier-31a-batch-4.pages.json`,
  `research/frontier-31a-batch-4.proof-contracts.json`, and the batch notes and
  coverage ledger.
- A page: `library/probability/infinite-product-measures-and-kolmogorov-extension.md`.
  All 21 listed items were opened: `def-coordinate-maps-and-cylinder-sigma-algebra`,
  `lem-finite-coordinate-cylinders-form-a-pi-system`,
  `lem-finite-coordinate-cylinder-sets-form-an-algebra`,
  `def-consistent-family-of-finite-dimensional-distributions`,
  `lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined`,
  `lem-countable-product-cylinder-premeasure-is-countably-additive`,
  `thm-countable-product-of-probability-spaces`,
  `cor-coordinate-random-elements-on-a-countable-product-are-independent`,
  `cor-countable-independent-copies-exist`,
  `def-stochastic-process-and-finite-dimensional-distributions`,
  `def-law-modification-and-indistinguishability-of-processes`,
  `def-standard-borel-space`,
  `lem-finite-products-of-standard-borel-spaces-are-standard-borel`,
  `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`,
  `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`,
  `cor-arbitrary-product-measure-for-standard-borel-probability-spaces`,
  `cor-canonical-process-realizes-consistent-finite-dimensional-laws`,
  `thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions`,
  `lem-cylinder-sigma-events-depend-on-countably-many-coordinates`,
  `rem-cylinder-sigma-algebra-versus-full-product-power-set`, and
  `rem-kolmogorov-extension-state-space-boundary`.
- B page: `library/probability/infinite-product-measures-and-kolmogorov-extension-examples.md`.
  All eight listed items were opened: `ex-infinite-coin-toss-space`,
  `ex-iid-sequence-with-a-prescribed-law`,
  `ex-independent-but-not-identically-distributed-coordinate-sequence`,
  `ex-canonical-random-walk-from-product-increments`,
  `ex-uncountable-bernoulli-coordinate-process`,
  `cex-modification-need-not-be-indistinguishable`,
  `cex-consistent-marginals-alone-do-not-specify-joint-laws`, and
  `cex-a-noncylinder-path-functional-may-fail-measurability`.
- Opened direct published dependencies needed for the claims, including the
  algebra, generated-sigma, product-sigma, probability, random-element,
  independence, countable-choice, AC, Polish/compact/metric, premeasure,
  Carathéodory, continuity, product-measure, Dynkin, and Tychonoff items.
  The additional section-measure theorem was also opened while checking the
  countable-product route.
- Source passages opened: Kajino, *Probability Theory*, Definition 3.64 and
  Theorem 3.65 / proof, PDF pp. 100–104; Biskup, *MATH 275D*, Theorem 2.4,
  Lemmas 2.7–2.8, and Proposition 2.9 / proof, PDF pp. 1–5; and Shalizi,
  *Building Processes*, Theorem 29, PDF pp. 4–5. These establish the relevant
  finite-cylinder, compact-inner-approximation, and arbitrary-index extension
  routes; they were read as evidence alongside the current item proofs.

## Repairs

1. `lem-countable-product-cylinder-premeasure-is-countably-additive`
   omitted the countable-choice hypothesis even though the product space and
   compatible coordinate selection require it. The statement and Given now
   explicitly assume countable choice; the proof records the finite-stage
   section argument, its continuity-from-above input, and the exact
   countable-product choice step. The manifest and proof contract now carry
   `def-countable-choice` and the four canonical proof stages.

2. `thm-borel-probability-measures-on-polish-spaces-are-inner-regular`
   previously jumped from global tightness to all Borel sets without establishing
   the regularity class, and treated ambient finite ball covers as internal nets.
   The repaired proof obtains compact tight sets with centres in the compact set,
   proves compact approximation of open sets (including $G=P$), and proves that
   the two-sided regularity class is a lambda-system. `thm-dynkin-pi-lambda` was
   added as an explicit dependency and contract citation; the corresponding
   manifest dependency list was updated.

3. `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`
   previously invoked Tychonoff on cylinder sets whose unconstrained factors are
   not compact. The repair replaces that invalid move with the countable active-
   coordinate compact-cylinder diagonal argument: compact finite-dimensional
   replacements have positive finite intersections, diagonal extraction gives a
   point on the active coordinates, and AC fills inactive coordinates. The
   unused Tychonoff dependency was removed from the item and manifest; the
   proof contract now reflects the AC and countable-choice citations and the
   four proof stages.

No B-page prose or published content was modified. No `verification.judge`
record was present in the repaired draft items.

## Verdicts

- A page: pass after the three repairs. Its countable route remains scoped to
  countable choice; its arbitrary-index route remains scoped to AC and standard
  Borel coordinates; both conclude only on the cylinder sigma-algebra.
- B page: pass. The coin, i.i.d., non-i.i.d., random-walk, uncountable Bernoulli,
  modification, finite-marginal, and noncylinder-functional examples preserve
  their relevant domains and boundary conventions.

## Validation

- PASS reflow on each repaired item.
- PASS focused `precheck.mts` on all three repaired items.
- PASS `proof-contract.mjs research/frontier-31a-batch-4.proof-contracts.json --strict`
  (22/22, no errors or warnings).
- PASS `manifest-deps.mjs research/frontier-31a-batch-4.pages.json` (29 items,
  no errors).
- PASS `content-policy.mjs research/frontier-31a-batch-4.pages.json` (29 scoped
  items, no errors or warnings).

## Blockers and uneditable findings

None. The structured findings artifact contains an empty array: every confirmed
defect in the assigned scope was repaired.

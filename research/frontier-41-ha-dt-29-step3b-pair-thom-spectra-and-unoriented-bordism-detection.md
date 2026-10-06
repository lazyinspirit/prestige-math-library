# Step 3b authoring — thom-spectra-and-unoriented-bordism-detection

- Run: `frontier-41-ha-dt-29` (batch 30), role alpha-high, label
  `step3b-pair-thom-spectra-and-unoriented-bordism-detection-615db28d8ce23b26`.
- A page: `thom-spectra-and-unoriented-bordism-detection` (order 548.5,
  `algebraic-topology`; 55 manifest items: 54 new local items + the moved
  combined MO/MSO prespectrum definition).
- B page: `thom-spectra-and-unoriented-bordism-detection-examples`
  (order 548.6; 4 examples).
- Owned IDs: all 55 A items and 4 B examples listed in
  `research/frontier-41-ha-dt-29-step3b-pair-thom-spectra-and-unoriented-bordism-detection-615db28d8ce23b26.task.md`
  (59 items total). Page files
  `library/algebraic-topology/thom-spectra-and-unoriented-bordism-detection.md`
  and `...-examples.md`, the batch-30 manifest/coverage/contract records, and
  this report.

## Open obligations at entry

1. Author all 59 `items/<id>.md` files completely (statement + facts + numbered
   proof steps in canonical layer labels with valid trailing tags, QED on the
   final step), reusing the Step-1 proof carriers in the seven
   `research/frontier-41-ha-dt-29-at-support-*` drafts and checking every
   supplier use against the current published statements.
2. Repair the Step-3a observation-3 AC asymmetry:
   `ex-rational-hurewicz-range-for-the-four-sphere` must state AC and depend on
   `def-axiom-of-choice`, or record a choice-free route. Chosen route: state AC
   and add the dependency (its two A-page suppliers both state AC), then update
   the batch-30 manifest row and coverage record accordingly.
3. Create the two page files (A with its 55 items in dependency order; B with
   its 4 examples) with page prose, preserving the plan `requires` arrays.
4. Build `research/frontier-41-ha-dt-29-batch-30.proof-contracts.json`
   (version 1, scope = the 59 item ids) with per-step derivations, per-(fact,
   source) citations (exact quotes from the source Statement/Definition
   sections), and all eight standard boundary dispositions; run
   `tools/proof-contract.mjs ... --strict`.
5. Run, for the batch: explicit-path `tools/precheck.mts`, `tools/rendercheck.mjs`,
   `tools/content-policy.mjs` (run scope), `tools/item-dependency-levels.mjs
   check --run frontier-41-ha-dt-29`, `tools/manifest-deps.mjs`,
   `tools/depcheck.mjs` (as applicable), `tools/fwdcheck.mjs`, `tools/extcheck.mjs`,
   `tools/validate-plan.mjs research/plan-spec.json`, `tools/pathcheck.mjs` (only
   when pages are placed), `node tools/proof-layout.mjs items/<id>.md ...` once
   over all changed item paths, and `node tools/step3-decisions.mjs record-item`
   with `accept`/`repaired` only after a clean pass; escalate otherwise.
6. Record checks actually run, added suppliers, published concerns and open
   obligations at handoff. No sibling/published edits.

## Dependency-ordered checklist (dispatch order)

Level 0: def-mod-two-square-algebra-admissible-sequences-and-excess;
def-weak-join-classifying-model-for-a-discrete-group;
lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism;
lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants;
lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space;
lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs;
lem-oriented-grassmannian-has-two-lifted-schubert-cells;
lem-rationalization-is-exact-and-commutes-with-singular-homology;
lem-steenrod-squares-commute-with-relative-cohomology-connectors;
thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free;
thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison.
Level 1: cor-finite-range-comparison-for-arbitrary-target;
def-thom-prespectrum-of-the-universal-real-and-oriented-bundles;
lem-adem-reduction-spans-by-admissible-composites;
lem-admissible-square-action-has-a-distinct-leading-monomial;
lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q;
lem-fundamental-path-fibration-class-has-the-normalized-relative-lift;
lem-rational-k-z-n-calculation-through-weak-cw-fiber-comparison;
lem-relative-lifts-produce-cohomological-transgressions;
lem-weak-join-classifying-model-is-a-cw-k-g-one;
thm-bo-bso-cohomology-away-from-two;
thm-integral-finite-generation-of-mo-and-mso-homology.
Level 2: def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum;
lem-eilenberg-maclane-spaces-of-torsion-abelian-groups-are-rationally-acyclic;
lem-finite-products-and-comparison-cones-have-finite-type;
lem-universal-real-thom-spaces-are-r-minus-one-connected;
thm-admissible-composites-present-the-mod-two-square-algebra;
thm-borel-polynomial-base-from-a-transgressive-simple-fiber-system;
thm-unoriented-thom-cohomology-away-from-two-below-2r.
Level 3: lem-external-evaluation-detects-tensor-square-operations;
lem-rational-first-hurewicz-after-killing-lower-torsion-homotopy;
lem-stable-thom-cohomology-is-degreewise-eventually-constant;
lem-universal-mod-two-class-detects-admissible-composites-in-the-strict-range;
prop-serre-polynomial-cohomology-of-mod-two-eilenberg-maclane-spaces;
thm-finite-generation-cohomological-uct-gives-integral-cone-comparison;
ex-low-degree-admissible-steenrod-monomials (B).
Level 4: cor-rational-homology-vanishing-implies-rational-homotopy-vanishing-in-a-finite-range;
def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology;
lem-metastable-cohomology-of-eilenberg-maclane-spaces;
lem-rational-homotopy-isomorphisms-and-an-endpoint-surjection-give-homology-isomorphisms;
lem-stable-squares-on-universal-thom-classes;
thm-admissible-square-algebra-is-a-connected-bialgebra.
Level 5: lem-rational-homotopy-of-a-sphere-below-its-first-unstable-degree;
lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology;
lem-zero-section-proves-injectivity-of-the-thom-unit-orbit;
ex-strict-metastable-eilenberg-maclane-range (B);
ex-universal-thom-class-steenrod-operation (B).
Level 6: lem-rational-hurewicz-for-arbitrary-wedges-of-high-dimensional-spheres;
lem-stable-thom-cohomology-is-a-square-module-coalgebra.
Level 7: thm-rational-hurewicz-for-highly-connected-cw-complexes;
thm-stable-unoriented-thom-cohomology-is-free-over-the-square-algebra.
Level 8: def-finite-thom-classifying-detector-map;
ex-rational-hurewicz-range-for-the-four-sphere (B, AC repair).
Level 9: lem-finite-thom-classifying-detector-map-exists-and-is-continuous.
Level 10: thm-finite-thom-detector-is-a-mod-two-cohomology-isomorphism-below-2r.
Level 11: thm-finite-thom-detector-is-an-integral-homology-isomorphism-below-2r-minus-1.
Level 12: thm-finite-thom-detector-is-a-homotopy-isomorphism-through-2r-minus-2.
Level 13: lem-stable-thom-detector-coordinates-commute-with-suspension.
Level 14: thm-stable-unoriented-thom-homotopy-is-injectively-detected.

## Checkpoints

(Level 0-1 checkpoints recorded below; the final handoff section follows.)

### Checkpoint — level 0 complete (11 items)

- Authored: `def-mod-two-square-algebra-admissible-sequences-and-excess`
  (definition; steenrod draft §1; deps Hatcher/Weston locators in row);
  `def-weak-join-classifying-model-for-a-discrete-group` (definition; rational
  draft row 2; local quotient/action prose);
  `lem-fiber-and-limit-isomorphisms-force-the-base-axis-isomorphism`
  (steenrod §7d proof, 4 steps 1.1/2.1/3.1/4.1);
  `lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants`
  (odd item 1 proof, 3 steps);
  `lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space`
  (steenrod §6a, 3 steps);
  `lem-mod-two-eilenberg-maclane-base-and-path-loop-inputs` (steenrod §6,
  proof + caveat, 2 steps);
  `lem-oriented-grassmannian-has-two-lifted-schubert-cells` (integration
  shared-prespectrum prerequisite proof paras 3–5, 3 steps);
  `lem-rationalization-is-exact-and-commutes-with-singular-homology`
  (rational row 1, 2 steps);
  `lem-steenrod-squares-commute-with-relative-cohomology-connectors`
  (steenrod §7a, 3 steps);
  `thm-connected-graded-module-coalgebra-with-injective-unit-orbit-is-free`
  (hopf complete local proof, 8 steps labelled 1.1,1.2,1.3,2.1,2.2,3.1,4.1,5.1;
  the draft's `[ih]` tag was replaced by explicit step citations so the declared
  strategy stays `direct`; the in-text reference "steps 2.1 and 3.3" was
  rewritten to the canonical "steps 2.1 and 4.1");
  `thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison`
  (finite-range draft paras 3–10 including the endpoint justification, 4 steps).
- Checks run: `tools/precheck.mts` on the 11 files (all pass; definitions
  n/a); `tools/rendercheck.mjs` on the first two files (clean) and the whole
  set is re-run before handoff; `node tools/proof-layout.mjs` on the 11 files —
  11 items, 32 steps, 0 defects.
- Open: contracts not yet generated; batch manifest AC repair (B example) not
  yet applied; pages not yet created; item decisions not yet recorded.

### Checkpoint — levels 2–14 complete (48 further items)

Authored in dependency order from the Step-1 carriers: the four prespectrum
items (`def-degreewise-mod-two-cohomology-of-the-universal-thom-prespectrum`,
`lem-stable-thom-cohomology-is-degreewise-eventually-constant`,
`lem-stable-squares-on-universal-thom-classes`, plus the already-listed moved
definition); the remaining Steenrod/EM items (`thm-admissible-composites-present-the-mod-two-square-algebra`
through `lem-metastable-cohomology-of-eilenberg-maclane-spaces`); the
odd-primary/integral branch (`lem-finite-type-and-odd-primary-acyclicity-of-k-f2-q`,
`thm-bo-bso-cohomology-away-from-two`,
`thm-unoriented-thom-cohomology-away-from-two-below-2r`,
`thm-integral-finite-generation-of-mo-and-mso-homology`,
`lem-finite-products-and-comparison-cones-have-finite-type`,
`thm-finite-generation-cohomological-uct-gives-integral-cone-comparison`);
the finite-range branch (`thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison`,
`cor-finite-range-comparison-for-arbitrary-target`); the rational branch
(`def-weak-join-classifying-model-for-a-discrete-group` through
`thm-rational-hurewicz-for-highly-connected-cw-complexes`); and the fourteen
integration-core items through
`thm-stable-unoriented-thom-homotopy-is-injectively-detected`, plus the four
B examples. Conventions held throughout: AC stated and `def-axiom-of-choice`
declared exactly where the scaffold declared it (37 items); the strict
endpoints `k<2r`, `i<2r-1` with surjection at `2r-1`, homotopy through
`2r-2`, tail `r>=n+2`, rational range `c<=i<=2c-2` preserved verbatim; the
moved definition carries the MO and MSO fixed-coordinate maps and the
CW/well-pointedness construction in its own Definition prose.

Local repairs made during authoring (all recorded in the batch-30 manifest):
1. `def-mod-two-square-algebra-admissible-sequences-and-excess`: the
   scaffold-internal phrase "Item 4 proves it is an isomorphism" was replaced
   by "The admissible-composites theorem proves it is an isomorphism".
2. `ex-rational-hurewicz-range-for-the-four-sphere`: Step-3a observation 3
   resolved by stating AC in the claim and adding `def-axiom-of-choice` to
   `deps` (its two A-page suppliers state AC); the batch manifest row was
   updated in both fields.
3. `lem-zero-section-proves-injectivity-of-the-thom-unit-orbit`: the
   rank-index typo `e_2(E)` in the Euler-class computation was corrected to
   `e_r(E)` (the bundle has rank r).
4. Three facts that linked sources outside `deps` were narrowed to the
   declared suppliers; three AC facts were attached to the step that uses
   them; 21 facts that carried undeclared wikilinks were reworded to name the
   declared suppliers only.
5. A final editing pass (28 items) replaced every draft-internal reference
   ("Item 7b", "row 6a", "the odd-primary draft", "the prespectrum setup
   draft §3", ...) with the named local result or the definition itself,
   and restored into their steps six display formulas that had been left as
   the dangling object of a preceding sentence. No statement, endpoint or
   dependency set of the audited scaffold changed except the two recorded
   items.

### Final checks (single pass, actual outputs)

| Check | Command | Result |
|---|---|---|
| Explicit-path precheck | `node tools/tsx-run.mjs tools/precheck.mts items/<59 files>` | 53 checked (6 definitions n/a), 0 failing |
| Rendering | `node tools/rendercheck.mjs items/<59 files>` | OK — 59 files, no math/delimiter/YAML defects |
| Proof layout (blue chips) | `node tools/proof-layout.mjs items/<59 files>` | 59 items, 166 steps, 0 defects |
| Content policy (batch scope) | `node tools/content-policy.mjs research/frontier-41-ha-dt-29-batch-30.pages.json` | 59 scoped items, 0 errors, 0 warnings |
| Strict proof contracts | `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-30.proof-contracts.json --strict` | 59/59 checked, 0 errors, 0 warnings |
| Dependency levels | `node tools/item-dependency-levels.mjs check --run frontier-41-ha-dt-29` | my 59 items: no error; two unrelated sibling items reported (see concerns) |
| Manifest dependencies | `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-30.pages.json` | 59 items, 0 errors |
| Plan validation | `node tools/validate-plan.mjs research/plan-spec.json --manifests research/frontier-41-ha-dt-29-batch-30.pages.json` | OK — acyclic, no item-level cycles/forward refs/unresolved ids |
| Manifest integrity | `node tools/manifest-integrity.mjs --run frontier-41-ha-dt-29` | 60 pages owed, 60 present, no scope drift |
| Coverage | `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-30.coverage.json --require-destination` | 1 page, 89 harvested, 0 errors, 0 warnings |
| Source backing | `node tools/source-backing.mjs --coverage ...batch-30.coverage.json --liveness ...batch-30-url-liveness.json` | 59 authored results, every one backed |
| URL liveness | `research/frontier-41-ha-dt-29-batch-30-url-liveness.json` | 14/14 live (unchanged inputs) |
| Dependency checker | `node tools/depcheck.mjs` | 0 findings naming any of my 59 items |
| Forward references | `node tools/fwdcheck.mjs` | 0 error rows naming my items (174 errors elsewhere are sibling in-flight items) |
| External references | `node tools/extcheck.mjs` | OK |
| Pathways/overviews | `node tools/pathcheck.mjs` | 11 pathway files, 0 errors (28 pre-existing warnings elsewhere) |
| Step-3 decisions | `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase final` | 59/59 items accepted (my pair: 0 open rows) |
| Post-cleanup rerun | precheck / proof-layout / contract / content-policy after the final editing pass | precheck 0 failing; proof-layout 59 items, 166 steps, 0 defects; contract 59/59, 0/0; content-policy 59 items, 0/0 |
| Frontier ledger | `node tools/frontier-dependency-ledger.mjs refresh --run frontier-41-ha-dt-29` | refreshed and deduplicated |

### Pages and registration

- `library/algebraic-topology/thom-spectra-and-unoriented-bordism-detection.md`
  (draft; 55 items in manifest placement order) and
  `library/algebraic-topology/thom-spectra-and-unoriented-bordism-detection-examples.md`
  (draft; 4 examples) were created with page summaries; `requires` stays in
  the plan/manifests (`["thom-spaces-normal-data-and-collapse-maps"]` and
  `["thom-spectra-and-unoriented-bordism-detection"]`).
- Batch-30 manifest and coverage rows preserved; the two repaired rows
  updated; no sibling row touched. The 59 `items/<id>.md` files are drafts.
- `research/frontier-41-ha-dt-29-batch-30.proof-contracts.json` (version 1,
  scope = 59 ids) carries per-step derivations/inputs, per-(fact, source)
  citation excerpts from the supplier Statement/Definition sections, and all
  eight standard boundary dispositions per item.
- 59 Step-3b item receipts written under
  `research/frontier-41-ha-dt-29-step3b-review-<id>.json` (47 accept, 12
  repaired: the three material repairs above plus nine items whose steps were
  cleaned of draft-internal `Item N`/`row N`/`draft` references and whose
  dropped display formulas were restored into their steps) plus a refreshed
  non-owner scope decision, since the two manifest repairs invalidated the
  Step-3a scope hash. Receipts were re-recorded after the final editing pass.

### Published concerns (no new confirmed defect)

1. Unrelated sibling dependency-level drift: `item-dependency-levels` reports
   `thm-natural-transformations-of-tensor-functors-are-bimodule-maps`
   (declared 2, computed 0) and `ex-natural-transformations-between-tensor-composites`
   (declared 3, computed 1). Suspicion, not my scope; the owning batch should
   refresh its manifest levels. Unrelated published debt does not block this
   pair.
2. The run-wide `fwdcheck`/`depcheck` failures name only in-flight sibling
   items (for example `thm-mod-two-morse-differential-squares-to-zero` and
   `thm-integral-morse-differential-squares-to-zero` linking
   `def-ab-1-abelian-category`), none of my 59 items.
3. Step-3a observation 3 (AC asymmetry) is resolved by the recorded repair;
   observations 1, 2, 6, 7 are scope/housekeeping notes for the owner or
   Step 4, unchanged by this work. Observation 4's independence caution is
   honored: the odd-primary and rational carriers were used as written,
   including the reviewer receipt in the odd-primary draft; their independent
   Step-5 review is still owed.

### Open obligations at handoff

1. Batch-11 (DT-19) consumer verification: the page edge
   `characteristic-numbers-and-cobordism-obstructions <- thom-spectra-and-unoriented-bordism-detection`
   is still `open` in `research/frontier-41-ha-dt-29-batch-11.cross-batch-dependencies.json`,
   and the item-level consumer edges from the Step-3a report (the four
   consumers of the moved definition plus the rational-branch, lifted-CW,
   degreewise-constancy, detector-definition and stable-detection edges) are
   not all present as rows there. The batch-11 owner must record and verify
   them against the now-authored suppliers; I did not edit that consumer file.
2. The rational branch keeps the Step-3a review flag: its rows state AC and
   cite the declared suppliers, but independent mathematical review is a
   Step-5 obligation, not something this authoring pass certifies.
3. Step 4 should note that plan-spec.json already contains batch 30's two
   pages with their 59 items (a `tools/splice-plan.mjs --run ... --batch 30`
   dry run transcribed them; the tool writes by default). The engine's
   `splice-verify --update` is idempotent for this batch.
4. No new item ID was minted, no pair added, no Recorded result consumed, and
   no prerequisite outside the authorized scope was needed: all 165
   out-of-batch suppliers remain published within page 547's closure.

# Step 5a reader report — batch 13

Run: `frontier-35-ten-categories`  
Reader: `reader-13`  
Manifest: `research/frontier-35-ten-categories-batch-13.pages.json`

## Opened inventory

Opened both manifest pages and all 45 listed items.

- A-page 715, `library/foundations/eastons-theorem-and-cardinal-invariants-of-the-continuum.md` (41 items):
  `thm-regular-continuum-function-constraints`, `def-easton-function`,
  `def-easton-support-product`, `def-easton-support-iteration`,
  `lem-easton-head-cc-and-tail-closure`,
  `lem-easton-head-tail-no-new-short-sequences`,
  `thm-set-easton-product-preserves-cardinals-and-cofinalities`,
  `lem-easton-head-cardinality-and-name-count`,
  `thm-set-easton-product-realizes-regular-pattern`,
  `def-gbc-global-choice-ground-for-easton`,
  `lem-easton-class-forcing-truth-and-set-names`,
  `lem-easton-class-tail-head-decision`,
  `lem-easton-class-separation-and-power-set`,
  `lem-easton-class-replacement`,
  `lem-easton-class-generic-model-satisfies-zfc`,
  `thm-eastons-theorem-for-regular-cardinals`,
  `rem-easton-singular-cardinal-caveat`,
  `def-almost-inclusion-pseudointersection-and-tower`,
  `lem-small-tower-exists`, `def-pseudointersection-and-tower-numbers`,
  `lem-basic-pseudointersection-and-tower-bounds`,
  `def-eventual-domination-bounding-and-dominating-numbers`,
  `lem-basic-bounding-and-dominating-relations`,
  `def-splitting-and-reaping-numbers`,
  `lem-splitting-reaping-comparison-with-b-and-d`,
  `def-null-and-meagre-cardinal-invariants`,
  `lem-basic-ideal-cardinal-inequalities`,
  `lem-cantor-coin-measure-from-binary-expansion`,
  `def-null-meagre-borel-master-codes`,
  `lem-borel-null-sections-have-uniform-open-hulls`,
  `lem-borel-meagre-sections-have-uniform-closed-covers`,
  `lem-null-meagre-master-codes-are-cofinal`,
  `lem-null-meagre-ideal-transfer-cantor-real`,
  `lem-ideal-tukey-morphism-controls-add-and-cof`,
  `lem-null-master-codes-and-summable-slaloms-are-tukey-equivalent`,
  `lem-good-clopen-family-for-summable-slaloms`,
  `lem-meagre-master-codes-below-summable-slaloms`,
  `lem-null-meagre-tukey-inequalities`,
  `lem-cichon-cross-and-bounding-inequalities`,
  `thm-cichons-diagram-inequalities`,
  `fs-zfc-determines-the-continuum-function`.
- B-page 716, `library/foundations/eastons-theorem-and-cardinal-invariants-of-the-continuum-examples.md` (4 items):
  `ex-countable-decreasing-family-has-a-pseudointersection`,
  `ex-ch-collapses-classical-cardinal-invariants`,
  `ex-easton-two-regular-cardinal-pattern`,
  `ex-ma-model-null-meagre-additivity-equals-continuum`.

For load-bearing points I also opened the fair-coin construction and its
induced-outer-measure definition, the continuity-from-above theorem, the
Cantor-space no-isolated-points statement, the real-line ideal definition, the
meagreness and sigma-ideal clauses, and the two uniform section-hull lemmas.
For the forcing claims I checked Jech, *Set Theory*, Chapter 15, including
Theorem 15.18, Lemma 15.19, and the class-forcing truth and ZFC arguments
([source PDF](https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/15-applications_of_forcing.pdf)).
For the null/meagre coding and invariant comparisons I checked Section 3,
including Lemmas 3.8–3.9 and the Tukey arguments in Tomek Bartoszyński,
*Invariants of Measure and Category*, printed pp. 4–7
([source PDF](https://arxiv.org/pdf/math/9910015)).

## Edits and evidence

Three in-flight A-items were repaired; their corresponding entries in
`research/frontier-35-ten-categories-batch-13.proof-contracts.json` were
updated. No page prose was changed.

1. `items/def-null-meagre-borel-master-codes.md`: defined the Cantor-space
   ideals explicitly as
   `N_C = {A ⊆ C : A is contained in a Borel fair-coin null set}` and
   `M_C = {A ⊆ C : A is meagre in C}`. This fixes the former type mismatch:
   the text called a subset of Cantor space a member of `N` from the separate
   real-line definition. The distinction follows the two underlying spaces;
   the fair-coin measure is defined on the Borel sigma-algebra. I also stated
   the ZFC sigma-ideal closure used by later arguments and changed the master
   code conclusions and remarks to use `N_C` and `M_C`.
2. `items/lem-null-meagre-ideal-transfer-cantor-real.md`: made the four
   invariant comparisons apply to the explicitly named pairs
   `(C,N_C)/(C,M_C)` and `(R,N_R)/(R,M_R)`. Added the Cantor singleton-null
   derivation from nested cylinder measures and continuity from above, and
   the meagreness argument from the absence of isolated points. The proof
   contract now records these sources and the Cantor ideals' definition.
3. `items/lem-null-meagre-master-codes-are-cofinal.md`: replaced the appeal to
   “null outer measure” for an arbitrary Cantor null set by the actual
   definition: first take a Borel null hull, then use the uniform open-hull
   result on a constant Borel family. This supplies the needed codes for the
   corrected `N_C` convention. Its proof contract and choice-boundary note
   were updated.

No `verification.judge` record was present on the changed items.

## Page verdicts

- **Page 715 (A):** the Easton forcing and cardinal-invariant claims reviewed
  are coherent under their stated hypotheses. The Cantor/real null-ideal
  notation and the cofinality argument required the repairs above. No other
  confirmed defect was found in the current page or assigned items.
- **Page 716 (B):** no confirmed defect found in the four examples. Their
  countable diagonalization, CH bounds, two-coordinate Easton pattern, and MA
  additivity claims match the assigned dependencies and hypotheses.

## Uneditable defects and blocker

No uneditable defect found. No blocker.

## Validation and coverage limitation

- `def-null-meagre-borel-master-codes`: reflow reported unchanged; precheck
  reported 0 checked, 0 failing (the definition has no direct precheck case).
- `lem-null-meagre-master-codes-are-cofinal`: reflow completed; precheck
  passed, 1 checked, 0 failing.
- `lem-null-meagre-ideal-transfer-cantor-real`: reflow completed; precheck
  passed, 1 checked, 0 failing.

All 45 manifest-assigned items and both pages were opened. I did not open every
file in the transitive dependency closure; I inspected the cited passages
needed for the checks above and the targeted primary-source arguments listed
in the inventory. No claim of exhaustive review of the remaining dependency
closure is made.

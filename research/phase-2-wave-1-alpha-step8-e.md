# Step 8 adjudication — group e

Run: `phase-2-wave-1`  
Role: `alpha-adjudicate`  
Batches: 4, 5

## Scope and evidence read

- Read all four owned pages and all 26 owned items in full.
- Opened the exact Statement or Definition interface of every direct published dependency used by the group (69 external dependency occurrences checked), and read the complete local suppliers needed to decide the two rejections.
- The Step-7 context contains no concerns, there are no Step-7 reader warnings or incoming alerts, and no declared dependency seam crosses the group boundary.
- No external web source was needed: both citation questions are settled by the exact local canonical interfaces.

### Local source resolutions

- `thm-complex-holder-minkowski-and-the-quotient-norm`, Statement: supplies `||[f]||_p=N_p(f)` and the norm axioms; it does not state lattice monotonicity.
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`, Statement: supplies monotonicity and positive homogeneity of the nonnegative integral.
- `def-integral-of-a-nonnegative-simple-function`, Definition: evaluates a nonnegative simple function by the value-weighted measures of its disjoint fibers, hence evaluates `2^p 1_U`.
- `def-countable-choice`, Definition: supplies only a choice function for a natural-number-indexed family of nonempty sets.
- `thm-completion-measurable-functions-have-base-measurable-representatives`, Statement: under countable choice, supplies a base-measurable representative equal almost everywhere; for completed Lebesgue measure the base sigma-algebra is Borel.

## Rejections

### `ex-complex-mollification-by-components`

- Tuple: `gpt-5.6-terra` / `09273583ca2fc73c9b3a6529abc5aa620e238f75ad47fe5d56849c8362e24e13`
- Pre-edit `itemHashGuard`: `cdff842e0cab3c0f5c06ddc0a78aa285e64f67870224e5c475c74fc478967677`
- Outcome: `confirmed_fatal`
- Defect type: `dependency_citation`
- Evidence: F2 attributed pointwise domination to `thm-complex-holder-minkowski-and-the-quotient-norm`, but that theorem's exact Statement supplies the quotient norm and norm axioms, not lattice monotonicity. Step 2.1 load-bearingly passes from the pointwise support bound to the displayed finite-p norm estimate.
- Repair: retained F2 only for the exact `N_p` norm interface; added `prop-order-and-scalar-rules-for-the-nonnegative-integral` for monotonicity and homogeneity and `def-integral-of-a-nonnegative-simple-function` for the indicator integral; rewrote step 2.1 to display the resulting inequality. Synchronized the batch-4 manifest and proof contract.
- Post-edit `itemHashGuard`: `1a56b3ea7821f9e27d4cca2e1808d3930f85661978dfb60fe678f4afd2aafe66`
- Rejudge target: yes.

### `lem-complex-translation-and-approximate-identity-interfaces`

- Tuple: `gpt-5.6-terra` / `6236fb115aafc498952af350bf3e4ad7c7a177ddb5f270002808614939a1861d`
- Pre-edit `itemHashGuard`: `8065aba28afa504aea94e49056f581a6af221e68dd81e147cb49d1d2d48e80ac`
- Outcome: `confirmed_fatal`
- Defect type: `dependency_citation`
- Evidence: F14 attributed representative and Euclidean-measure interfaces to `def-countable-choice`, whose exact Definition states only the countable-choice axiom. Step 1.2 explicitly invoked that inaccurate supplier. The existing F6 is the actual representative theorem and already assumes countable choice.
- Repair: restated F14 as the exact countable-choice principle and rewrote step 1.2 so the Given hypothesis discharges F6's assumption while F6 supplies the representatives. Synchronized the proof contract; no dependency or statement changed.
- Post-edit `itemHashGuard`: `e0d899bf3c29d2e90427dd6182bb76268e8d27af6d462162640ebbc21ff4ba9a`
- Rejudge target: yes.

## Alerts and scope changes

- Step-7 reader-warning decisions: none required.
- Cross-group alerts: none.
- Published-item repairs: none.
- New lemmas: none.
- Frontier inputs: `research/phase-2-wave-1-batch-4.cross-batch-dependencies.json` and batch 5's corresponding input are empty, and the unified frontier ledger has no edge involving these batches. They remain unchanged; the completed repair adds only published dependencies.

## Validation

- `node tools/tsx-run.mjs tools/precheck.mts <two repaired items>`: PASS, 2/2 clean.
- `node tools/rendercheck.mjs <two repaired items>`: PASS, 2/2 files; YAML and every math span render.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-4.proof-contracts.json --strict --items <two repaired ids>`: PASS, 0 errors and 0 warnings for 2/2 items.
- `node tools/depcheck.mjs --quiet`: PASS with 473 existing warnings; no cycles, all references resolve, and no draft item is on a published page.
- `node tools/defect-ledger.mjs validate --run phase-2-wave-1`: PASS, 64 rows and 0 errors.
- `node tools/defect-ledger.mjs check --run phase-2-wave-1 ...`: group-e exact-hash ownership is accepted, but the run-wide check exits 1 because eight confirmed-fatals owned elsewhere do not yet have defect-ledger rows: `def-free-presentation-lyndon-bar-bicomplex-and-edge-maps`, `ex-transfer-annihilation-for-a-cyclic-group`, `lem-corestriction-after-bar-transfer-is-index-multiplication-on-homology`, `lem-finite-lower-central-coordinate-systems-exist`, `lem-free-group-augmentation-ideal-has-the-generator-difference-basis`, `lem-minimal-power-diagram-has-a-periodic-boundary-shell`, `thm-free-presentation-homology-five-term-sequence`, and `thm-greendlinger-shell-existence-from-the-curvature-count`.
- Prescribed Step-8 guard: PASS; all 26 changed items are licensed by an exact confirmed-fatal adjudication, owner-prerequisite repair, or terminal resolution.
- `node tools/step8-scope.mjs check --run phase-2-wave-1`: PASS; seven groups and 402 items are partitioned, no rejection remains open, and both reader warning/alert obligations are dispositioned.
- Frontier refresh was not invoked: no group-e cross-batch dependency input changed; the new item dependencies are already-published suppliers.

## Blockers

- No blocker remains in group e. The run-wide defect-ledger bijection still awaits eight rows owned elsewhere; this dispatch has no authority to supply them.

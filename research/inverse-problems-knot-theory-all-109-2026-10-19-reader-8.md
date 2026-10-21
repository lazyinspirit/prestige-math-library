# Step 3a Reader Report — Batch 8

## Inventory opened

- Pages: `library/inverse-problems/gaussian-sequence-models-and-risk-decomposition.md` (A) and `library/inverse-problems/gaussian-sequence-models-and-risk-decomposition-examples.md` (B).
- Assigned items, read in supplier order: `def-ip-gaussian-sequence-inverse-model`, `def-ip-statistical-ellipsoid-class`, `alg-ip-svd-truncated-estimator`, `thm-ip-truncated-estimator-exact-risk`, `ex-ip-polynomial-spectrum-risk-profile`, `ex-ip-severely-ill-posed-risk-profile`, and `ex-ip-zero-noise-truncated-risk-limit`.
- Direct suppliers opened for verification: `def-countable-choice`, `def-square-summable-family-on-an-arbitrary-index-set`, `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`, `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`, `thm-singular-value-decomposition-for-compact-operators`, `def-ip-compact-linear-inverse-model`, `def-ip-isonormal-white-noise-experiment`, and `thm-ip-white-noise-spectral-sequence-representation`.
- The batch-8 page manifest and proof-contract file were consulted as evidence, not as verdicts.

## Mathematical review

The sequence model correctly restricts truths to `N(K)^perp`, uses the compact SVD singular system, identifies the coefficient space with `ell^2`, and treats zero noise as a separate point-mass experiment. The normalized coordinate map is measurable coordinatewise; the finite-coordinate noise law and mean are supplied by the opened white-noise definition and spectral-sequence theorem. The kernel-component caveat is correct.

The ellipsoid definition admits `Q=0` and positive nondecreasing weights without asserting compactness. The cutoff algorithm is a well-defined finite-support map for every `D in N_0`, including `D=0`. In the exact-risk proof, retained-coordinate variance is the finite sum `epsilon^2 sum_{j<=D} s_j^{-2}` and omitted-coordinate loss is the squared tail. Monotonicity bounds that tail by `Q^2/a_{D+1}^2`, and the one-coordinate witness at `D+1` attains the bound, including `Q=0`. The proof also handles `epsilon=0` and the empty sum at `D=0`.

The polynomial and exponential examples substitute correctly into the risk formula. In the zero-noise example, the polynomial-weight risk tends to zero, while the unit-weight class has worst-case risk `Q^2` for each finite cutoff, attained at coordinate `D+1`. The caveat limiting the discussion to the sequence experiment is accurate.

The assigned Gaussian-model coordinate diagram commutes: `D_s` is bounded because `s_j <= s_1`, and the compact SVD gives the displayed coefficient identity. No diagram repair or addition was needed. The opened white-noise supplier diagram also matches its finite-coordinate maps.

## Edits and evidence

- `items/ex-ip-polynomial-spectrum-risk-profile.md`: added Ding–Mathé Definition 3 (PDF p. 6) to `sources.references` and `Example references`. Definition 3 calls power-type singular-value decay moderately ill-posed; this supports the terminology in the Example description.
- `items/ex-ip-severely-ill-posed-risk-profile.md`: added the same exact reference. Definition 3 calls exponential singular-value decay severely ill-posed.
- `items/def-ip-gaussian-sequence-inverse-model.md`: corrected the Johnstone locator to equations (3.63)–(3.67), printed p. 78, and noted that §3.8 begins on p. 79. The linked PDF places the observation and sequence equations on p. 78.
- `items/def-ip-statistical-ellipsoid-class.md`: corrected the Johnstone locator to the Chapter 3 ellipsoid definition (3.4), printed p. 58, and noted that §3.1 begins on p. 59. The linked PDF places equation (3.4) on p. 58.
- `items/alg-ip-svd-truncated-estimator.md`: corrected the Johnstone locator for equation (3.12) from printed p. 60 to p. 61, where the linked PDF places the truncation rule.
- The Ding–Mathé source ([arXiv PDF](https://arxiv.org/pdf/1707.01706)) was checked at §1, equations (1)–(4), PDF pp. 1–2; Lemma 1 and its proof, PDF pp. 2–3; and Definition 3, PDF p. 6. Johnstone’s linked PDF ([source](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)) was checked at the cited printed pages 58, 61, and 78–79.
- These edits changed source references only; no mathematical proof derivation or proof-contract clause changed. The edited items had no `verification.judge` records to remove.
- Reflow returned unchanged for all five edited items. Precheck passed for both examples; the three definition/algorithm items had zero proof phases to check and zero failures. The final combined proof-layout command reported 5 items, 4 steps, and 0 defects.

## Uneditable defects

The following published suppliers directly support `def-ip-gaussian-sequence-inverse-model`. Their complete statements or definitions contain inline item hyperlinks; the uninterrupted-statement rule requires plain mathematical wording in those sections and the links in the immediately following references section. They are outside this reader’s write scope.

- `def-square-summable-family-on-an-arbitrary-index-set`: `## Definition`, lines 29–32, 61, 70, 73–74, and 142. The links interrupt the complete definition, including the opening sum conventions and the later `ell^2` definition.
- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`: `## Definition`, lines 28, 32, 37, and 47. The links interrupt the complete definitions of orthonormal families, orthonormal sets, and closed span.
- `thm-hilbert-space-with-a-given-orthonormal-basis-is-ell-two-of-the-index-set`: `## Statement`, lines 25, 28, 31, and 34. The statement embeds links to the Countable Choice, Hilbert basis, and `ell^2` suppliers.
- `thm-singular-value-decomposition-for-compact-operators`: `## Statement`, lines 29–37. The statement embeds links to the Countable Choice, Hilbert space, compact operator, singular-value, and dimension definitions.

All four findings are reported as `ill-formed` formatting defects with `def-ip-gaussian-sequence-inverse-model` as the assigned consumer. Their mathematical statements remain interpretable; no missing mathematical hypothesis or false conclusion was found in the clauses used here.

## Page verdicts

- A page `gaussian-sequence-models-and-risk-decomposition`: inventory and prerequisite metadata match the batch manifest; the body is empty and `page_layout: compact-v1` is preserved. Verdict: pass for page presentation and assigned content, with the published-supplier formatting findings above.
- B page `gaussian-sequence-models-and-risk-decomposition-examples`: inventory matches the manifest; the body is empty and `page_layout: compact-v1` is preserved. Verdict: pass for page presentation and the three assigned examples.

## Blocker and coverage note

There is no mathematical blocker. The live autopilot status at `2026-10-21T06:48:39Z` still lists batch 8 as uncovered and reports no reader-8 dispatch in flight; the report and findings artifacts are present, but the engine has no successful reader-8 dispatch record to count. All assigned items and pages, plus the direct suppliers needed for the reviewed claims, were inspected. The full transitive proof closures behind the published SVD and Hilbert coefficient theorems were not re-audited; only their relevant statements and proofs were read.

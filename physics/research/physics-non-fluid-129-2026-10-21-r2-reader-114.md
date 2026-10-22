# Step 3a reader report — batch 114

## Inventory opened

- Dispatch inputs: `research/physics-non-fluid-129-2026-10-21-r2-batch-114.pages.json`, `briefs/reader.md`, and the batch proof-contract rows in `research/physics-non-fluid-129-2026-10-21-r2-batch-114.proof-contracts.json`.
- Assigned pages: `library/thermodynamics-and-general-relativity/tgr-phs05.md` and `library/thermodynamics-and-general-relativity/tgr-phs05-examples.md`.
- Page prerequisites read: `library/thermodynamics-and-general-relativity/tgr-i01.md`, `library/thermodynamics-and-general-relativity/tgr-phs03.md`, `library/thermodynamics-and-general-relativity/tgr-phs01.md`, and `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs05.md`. I also opened `tgr-phs01-examples.md` as page context.
- Assigned items: `items/def-tgr-regulated-generalized-entropy.md` and `items/rem-tgr-generalized-entropy-no-automatic-second-law.md`.
- Current-run batch-113 suppliers: `items/def-tgr-finite-cutoff-outside-entropy.md` and `items/lem-tgr-renormalization-finite-part-ambiguity.md`.
- Other direct suppliers read: `items/pthm-tgr-area-entropy-calibration.md`, `items/def-tgr-framework-units.md`, `items/def-tgr-horizon-screen-family.md`, `items/def-countable-choice.md`, `items/pthm-tgr-restricted-classical-area.md`, `items/def-qc-density-operator.md`, `items/def-non-negative-and-positive-operator.md`, `items/def-natural-logarithm.md`, `items/def-real-exponential-function-and-e.md`, `items/thm-exponential-is-strictly-increasing.md`, and `items/cor-exponential-reciprocal-and-positivity.md`.
- Mathematical support inspected for the finite-matrix construction and calculation: `items/def-it-von-neumann-entropy.md`, `items/def-qc-tensor-register-and-permutation.md`, `items/def-qc-register-and-computational-basis.md`, `items/def-real-and-complex-inner-product-space.md`, `items/def-dimension.md`, `items/def-self-adjoint-and-normal-endomorphism.md`, `items/def-trace-of-an-endomorphism.md`, `items/def-linear-map.md`, `items/def-coordinate-column-and-matrix-of-a-linear-map.md`, `items/thm-unique-coordinates-with-respect-to-an-ordered-basis.md`, and `items/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases.md`.
- Source notes read: `research/physics-non-fluid-129-2026-10-21-r2-batch-114-sources/source-reading.md`.

## Review findings and evidence

No confirmed defect was found in the assigned carriers or in the two current-run suppliers used by them. The finite-cutoff supplier defines the outside entropy as the dimensionless spectral sum multiplied by its fixed positive scalar `k_B`; the assigned physics definition assigns that same `k_B` the physical units `J K^-1`. Thus the outside and geometric terms have consistent entropy units. The optional area term also has units `J K^-1` under the stated units for `c`, `A_Σ`, `G_{Λ_n}`, and `ħ`.

For the remark's explicit matrices, the one-dimensional input partial trace returns each displayed outside matrix. Their spectra are `(1/2, 1/2)` and `(1, 0)`, so the finite entropies are `k_B log 2` and `0`; the shared finite geometric term cancels. Both regulator sequences are constant, so their limits exist and their difference is `-k_B log 2 < 0`. The proof distinguishes the regulator index from the comparison label and explicitly supplies no physical time evolution or ordered cut family. The two cited area suppliers state only their restricted area/calibration conclusions and provide no inequality for the outside-state entropy.

The current draft finite-cutoff definition's partial-trace construction, positivity, trace-one property, basis independence, and finite spectral sum were checked against its stated mathematical suppliers. The finite-part ambiguity lemma's epsilon argument supports the requirement that the subtraction and normalization data be fixed. No silent hypothesis gap affecting the assigned claims was found.

I checked the cited source passages directly. Reall, *Part III Black Holes* (2024), §§10.8–10.9, printed pp. 146–147, equations (10.110)–(10.114), gives the stationary area coefficient with SI units, the generalized-entropy sum, and a separate backreaction qualification. Wall, “A proof of the generalized second law for rapidly changing fields and arbitrary horizon slices,” arXiv:1105.3445v6, §1, equations (1)–(3), and §2.8, describes the outside-entropy divergence and treats the renormalized relation used in the proof as an assumption. These sources support the items' context; neither source is used here to assert an unrestricted physical second law.

## Edits

None. No assigned item or page prose changed. Therefore no contract update, judge-record removal, reflow, precheck, or proof-layout run was required.

## Page verdicts

- `tgr-phs05`: no confirmed defect. The draft A-page placement and prerequisite list match the batch manifest; its frontmatter-only body is consistent with this run's compact page layout. It has no diagram.
- `tgr-phs05-examples`: no confirmed defect. The draft B-page placement and prerequisite list match the batch manifest; its frontmatter-only body is consistent with this run's compact page layout. It has no diagram.

## Uneditable defects and blockers

None found. The batch-113 draft suppliers were read as current-run dependencies; neither produced a finding to route. No blocker remains.

## Coverage limitation

I independently checked the relevant cited passages in the browser, not every page of either PDF. The source-reading note records a fuller retrieval by its author; I do not claim that as my own full-text reading.

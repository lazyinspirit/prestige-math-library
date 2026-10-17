# Step 3a reader report — batch 15

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `15`

## Opened inventory

Assigned pages:

- `emg-mm01` — [library/einstein-maxwell-models-mathematics/emg-mm01.md](../library/einstein-maxwell-models-mathematics/emg-mm01.md)
- `emg-mm01-examples` — [library/einstein-maxwell-models-mathematics/emg-mm01-examples.md](../library/einstein-maxwell-models-mathematics/emg-mm01-examples.md)

Assigned item files reviewed in dependency order:

1. `def-emg-matter-formal-systems`
2. `thm-emg-charged-dust-projection`
3. `thm-emg-charged-fluid-projections`
4. `def-emg-pointwise-energy-conditions`
5. `thm-emg-selected-matter-energy-conditions`
6. `def-emg-c2-curve-covariant-acceleration`
7. `lem-emg-c2-curve-covariant-acceleration-well-defined`
8. `thm-emg-charged-symmetry-current`
9. `ex-emgmath-ml-b01`
10. `ex-emgmath-ml-b02`
11. `ex-emgmath-ml-b03`
12. `ex-emgmath-ml-b04`

The task manifest and batch-15 proof contracts were inspected as navigation and evidence. The required page prerequisites `emg-mg04` and the imported mathematical page `countability-and-uncountability` were opened. Relevant supplier items opened for the arguments include `def-emg-lorentzian-forms`, `lem-emg-observer-field-decomposition`, `def-gr-smooth-lorentzian-objects`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-product-connection-on-tensor-and-hom-bundles`, the interval and curve-regularity suppliers, the connection-form transformation law, the Lie-derivative suppliers, the Killing-current and finite-chain flux theorems, and the current batch-3 Maxwell action/current-form drafts. The current draft `lem-emg-maxwell-stress-divergence` was read at its exact statement and complete proof because the charged-symmetry theorem assumes its identity.

## Edits and evidence

- `def-emg-matter-formal-systems`: added a Remarks clarification that the spatial projection of the observer energy-current has SI units of energy density in length coordinates, while physical power-per-area flux is `c` times that projection.
- `def-emg-pointwise-energy-conditions`: added the same unit distinction for its pointwise observer convention.
- `thm-emg-selected-matter-energy-conditions`: clarified that `E×B/(μ0 c)` is the spatial energy-current component; the SI energy-flux vector is `E×B/μ0`.
- `ex-emgmath-ml-b03`: renamed the title to identify the null object as the observer energy-current vector and clarified that the crossed-field physical SI energy flux is a nonzero spatial vector of magnitude `c u`.

The distinction follows from the declared length-coordinate convention `x⁰=ct`: the spatial part of `-Tᵃ_b nᵇ` has the same units as `T`, namely `J m⁻³`; multiplying by `c` gives `W m⁻²`. In the crossed-field example, `u=E₀²/(μ₀c²)`, so the physical flux has magnitude `E₀²/(μ₀c)=c u`. No proof calculation or dependency changed. The existing contracts quote the unchanged Definition/Statement sections and derivation steps, so no contract rows changed; no stale `verification.judge` record was present on the edited items.

Validation after the edits:

- Reflow: all four changed item files were unchanged by reflow.
- Precheck: both definition items were clean; the theorem and example passed.
- Proof layout, run once on all changed paths: 4 items, 11 steps, 0 defects.

## Defects not edited

- `emg-mm01-examples`, `## Scope`: “anisotropic magnetic stress and null energy-flux equality” still describes the crossed-field example as a null flux. The example establishes that the four-dimensional observer energy-current is future null; its physical SI energy flux is a nonzero spatial vector. This B-page prose is outside the permitted edit scope. It is recorded in the findings JSON.

## Page verdicts

- `emg-mm01`: the mathematical definitions and deductions reviewed are sound as stated. The charged-symmetry current deduction explicitly assumes the exact smoothness and source-sign interface of the current draft Maxwell-stress supplier; the page does not represent this as accepted or unconditional. No empirical conclusion is asserted.
- `emg-mm01-examples`: the displayed field calculations and conditional test-particle example are sound. Its Scope summary retains the overstrong “null energy-flux equality” wording noted above.

## Blocker and coverage limits

No blocker prevented review of the assigned items. The current Maxwell-stress supplier remains a draft conditional dependency, not an independent proof acceptance. I checked the relevant supplier interfaces and arguments but did not audit the entire transitive mathematical library closure or every draft item listed transitively by the stress supplier. No experiment, measurement, or statistical claim occurs in this batch.

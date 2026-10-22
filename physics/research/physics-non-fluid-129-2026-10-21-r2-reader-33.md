# Step 3a reader report — batch 33

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: read-only reader  
Scope: batch 33, pages `gr-fx05-bondi-news-and-memory` and `gr-fx05-bondi-news-and-memory-examples`

## Review basis

I read the required workspace instructions (`../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `../PHYSICS-CONTENT-MODEL.md`), the reader brief, and the batch-33 manifest. I treated the batch notes, proof contracts, and cross-batch records as navigation and evidence, not as verdicts. The review below is based on the current item and page bytes.

## Opened inventory

Assigned pages opened:

- `library/general-relativity/gr-fx05-bondi-news-and-memory.md`
- `library/general-relativity/gr-fx05-bondi-news-and-memory-examples.md`

All seven assigned items opened, in supplier order:

- `def-gr-fx-bondi-expansion`
- `def-gr-fx-bms-supertranslation`
- `lem-gr-fx-bondi-mass-coefficient`
- `prop-gr-fx-memory-integral`
- `prop-gr-fx-bondi-mass-loss`
- `ex-gr-fx05-1`
- `ex-gr-fx05-2`

Direct dependency items opened for the claims reviewed:

- `def-gr-fx-null-screen-geometry` (batch 29)
- `def-gr-wave-screen-and-tt-projection`
- `def-gr-curvature-tensor-and-derived-tensors`
- `def-countable-choice`
- `thm-gr-curvature-tensoriality-and-coordinate-formula`
- `thm-gr-tt-plane-wave-curvature`
- `thm-gr-jacobi-equation-and-geodesic-deviation`
- `thm-ftc-second-part`
- `def-gr-flat-linearized-perturbation`
- `thm-smooth-dependence-of-ode-solutions-on-parameters`
- `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`

The page prerequisites `gr-fx01-hypersurface-and-null-geometry`, `gr-linearized-waves`, and `gr-curvature-and-tides` were opened. The latter two are published pages; the first is the current draft page. I also inspected the batch-33 proof-contract entries and cross-batch dependency rows relevant to this inventory.

## Mathematical and source review

- The Bondi expansion states a smooth Lorentzian Bondi-Sachs end, its determinant gauge, differentiated remainder bounds, units, and formal-boundary scope. The cylinder diagram matches that formal-boundary description. Its mass-aspect sentence is contradictory to its own displayed expansion; see the fatal finding below.
- The BMS definition distinguishes a fixed Bondi chart from an observer frame, specifies the overlap domain for finite shifts, and uses an active convention consistently. The finite map and inverse are correct on the stated domains. The static-shear example correctly obtains nonzero time-independent shear with zero news and zero shear difference; it does not claim a full transformed bulk metric.
- The mass-coefficient lemma’s current proof was checked independently. Its determinant traces, inverse-metric expansion, Ricci-coordinate contraction, radial (U^A_{(2)}) coefficient, and (r^{-2}) supplementary coefficient are consistent with the stated curvature convention and differentiated remainder hypotheses. In particular, the calculation retains the trace-free (P_{AB}) terms rather than setting them to zero. Mädler–Winicour’s news convention is (N^{MW}_{AB}=\tfrac12\partial_u C_{AB}); after conversion to this item’s (N_{AB}=\partial_u C_{AB}), their Eq. (58) agrees with the item’s coefficients.
- The integrated mass-loss proof correctly removes the sphere divergence and uses positivity of the round metric. Its zero-news conclusion uses the stated continuity hypothesis. It is a conditional model deduction, not an empirical claim.
- The memory proposition’s integral identity follows from the stated smoothness and FTC supplier. The detector calculation has the stated fixed-screen, planar, first-order and endpoint assumptions; integration of the Jacobi equation gives the displacement coefficient and the velocity estimate. Its local metric-family clause supplies a compact-interval continuation argument and a uniform (O(\lambda^2|s_0|)) Taylor remainder for each fixed family. It does not extend that bound uniformly as (r\to\infty), and the statement expressly disclaims such uniformity. I record a possible unit omission for the separation quantities below.
- The compact-pulse example’s bump is smooth with the stated support and normalization. Its constructed angular metric is positive, has the determinant gauge, and has the stated expansion. The imposed mass-aspect constraint is distinguished from Ricci-flatness. The mass change and first-order detector response follow from the supplied formulas. The pulse/primitive diagram is explicitly schematic and agrees qualitatively with the definitions.
- The page files are frontmatter-only, as required by the compact page layout. Their inventories and page prerequisites match the manifest. The B page’s diagram content is carried by its assigned examples; no missing page diagram is required by the prose.

Source passages inspected:

- Thomas Mädler and Jeffrey Winicour, [*Bondi-Sachs Formalism*](https://arxiv.org/pdf/1609.01731), §2 Eqs. (3)–(5); §3 Eqs. (34)–(58), especially mass aspect Eqs. (38), (57), news Eq. (42), and supplementary Eq. (58); §3 Eqs. (60)–(61); §4 Eqs. (78)–(80). The local source copy is `research/physics-non-fluid-129-2026-10-21-r2-batch-33-sources/raw/madler-winicour-bondi-sachs.txt`.
- Andrew Strominger, [*Lectures on the Infrared Structure of Gravity and Gauge Theory*](https://arxiv.org/pdf/1703.05448), §5.1 Eqs. (5.1.1)–(5.1.6), §5.2.1 Eqs. (5.2.1)–(5.2.9), including the absence of a preferred Poincaré subgroup, and §6 Eqs. (6.0.1)–(6.0.3). The local source copy is `research/physics-non-fluid-129-2026-10-21-r2-batch-33-sources/raw/strominger-infrared-gravity-notes.txt`.

The cited treatments support the asymptotic mass and shear-memory formulas and the convention conversion recorded above. They do not supply the local line-by-line coefficient calculation or the quantitative normalized-family estimate; those are checked from the current local proofs.

## Edits and uneditable defects

Edits: none. This dispatch is read-only.

Uneditable findings are in `research/physics-non-fluid-129-2026-10-21-r2-reader-findings-33.json`:

1. Fatal: `def-gr-fx-bondi-expansion`, line 47, says that (m) is the (r^{-1}) coefficient in (V), while line 45 gives (V=r-2m+V_{(1)}r^{-1}+O(r^{-2})). Thus (V_{(1)}), not (m), is that coefficient; the source’s Eq. (38) and Eq. (57) define (M=-\tfrac12\lim(V-r)) and (V=r-2M+O(r^{-1})). This is a defective definition statement used by the assigned downstream items.
2. Nonfatal suspected omission: `prop-gr-fx-memory-integral`, lines 63–79, assigns units to (u,r,C_{AB},H_{AB},K_j,\lambda), but not to (s_0^A), (\delta s^A), (s_\lambda^A), or the endpoint derivatives. The formulas are dimensionally consistent if the separations are length-valued and their (u)-derivatives are dimensionless; the statement should make that convention explicit.

No other confirmed or suspected defect was found in the assigned items or pages. No item or page was edited, and no formatter or validator was run.

## Page verdicts

- `gr-fx05-bondi-news-and-memory`: page layout, inventory and prerequisites are consistent. **Held** because its assigned Bondi definition contains the fatal mass-aspect coefficient contradiction.
- `gr-fx05-bondi-news-and-memory-examples`: page layout and example placement are consistent. **Held** because its assigned examples consume the same defective mass-aspect definition through the coefficient lemma; the examples themselves otherwise state their formal assumptions and exclusions accurately.

## Coverage note and blocker

The assigned pages, all assigned items, and the direct supplier statements and proofs needed for the reviewed deductions were opened. I did not re-audit every deeper dependency of every published supplier, and I did not run validators. No finding is asserted about those deeper supplier chains. The fatal in-flight definition defect remains outside this read-only role’s edit authority; the possible unit omission is also unedited.

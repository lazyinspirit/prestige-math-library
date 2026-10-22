# Step 3a reader report — batch 26

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `26`

## Opened inventory

Assigned pages opened:

- `emg-fx11`
- `emg-fx11-examples`

Assigned items opened:

- `def-emg-fx-continuous-compact-top-form-integral`
- `def-emg-fx-nonlinear-lagrangian`
- `prop-emg-fx-nonlinear-maxwell-variation`
- `def-emg-fx-semiclassical-source-contract`
- `prop-emg-fx-semiclassical-consistency`
- `cex-emg-fx-eft-order-does-not-control-derivatives`

The 22 unique external direct item suppliers opened were `def-countable-choice`, `def-oriented-smooth-manifold-and-oriented-chart`, `thm-heine-borel-rn`, `lem-euclidean-bump-for-a-compact-set-inside-an-open-set`, `def-multidimensional-darboux-integral`, `def-multidimensional-darboux-sums`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `lem-compactly-supported-riemann-integral-is-well-defined`, `cor-change-of-variables-for-compactly-supported-functions`, `thm-multidimensional-integral-properties`, `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold`, `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement`, `thm-the-standard-flat-function-is-smooth-and-flat-at-zero`, `def-emg-lorentzian-forms`, `def-emg-local-potentials-and-circle-data`, `lem-emg-circle-connection-gluing`, `lem-emg-lorentz-hodge-calculus`, `thm-riemann-fubini-on-product-rectangles`, `thm-ftc-second-part`, `lem-emg-maxwell-stress-divergence`, `lem-emg-maxwell-current-forms`, and `thm-gr-second-bianchi-and-divergence-free-einstein`.

Page prerequisites opened for context: `emg-mg01`, `emg-mg03`, `emg-mg04`, and `emg-fx05`. The listed math suppliers were checked against the actual current item statements and relevant proof steps, including the finite-cover integration argument, Lorentzian Hodge sign, current and stress divergence identities, and contracted Bianchi identity. Existing source entries were retained; no new external full-text retrieval is claimed.

Additional transitive foundations opened for the Countable Choice edge: `def-axiom-of-choice` and `thm-well-ordering-principle`. The latter is the natural-number least-element theorem and is not a full-Choice supplier.

## Review and edits

- `def-emg-fx-continuous-compact-top-form-integral`: the finite cutoff construction, zero extension, change-of-variables comparison, independence, locality, and compatibility with the smooth integral are supported by the cited current suppliers. Its proof assumes Countable Choice only through the stated smooth-integral convention. The separate full-Choice dependency issue is reported below.
- `def-emg-fx-nonlinear-lagrangian`: the fixed-bundle variation, $F_\epsilon=F+\epsilon da$, regularity, relative action, and formal units are explicit. I changed the title to say $C^2$, matching the stated regularity of $L$.
- `prop-emg-fx-nonlinear-maxwell-variation`: the variation signs and Hodge-pairing symmetry give the displayed Euler–Lagrange equation. The finite-chart divergence argument applies to the stated $C^1$ field, and the local test-form argument establishes the converse from stationarity.
- `def-emg-fx-semiclassical-source-contract`: I made the manifold, metric, orientation, time orientation, connection, coordinate scale, section notation, and symmetric-tensor bundle explicit. I added `def-emg-lorentzian-forms` as a mathematical prerequisite and updated the proof contract’s definition interface, citations, supplier record, and boundary excerpts.
- `prop-emg-fx-semiclassical-consistency`: the sourced-current lemma, stress-divergence lemma, and contracted Bianchi identity yield both stated identities with the displayed sign. Its only direct consumer of the source-contract Definition was checked after that clarification; its existing hypotheses already match the clarified geometry, so no consumer edit was needed.
- `cex-emg-fx-eft-order-does-not-control-derivatives`: the exact one-form differentiates to the stated smooth exact curvature; $X_\epsilon=F_0^2\epsilon^2\sin^2(x/(L_0\epsilon^2))/2$, $Y_\epsilon=0$, and the derivative supremum is $F_0/(L_0\epsilon)$. I made the refuted implication’s family domain, limit, and local uniform-bound conclusion precise. I synchronized the proof contract’s statement excerpts and removed its stale current supplier entry for the already-removed variation-proposition dependency. The example remains explicitly non-empirical and does not claim a field-equation solution.
- `emg-fx11`: I added an A-page summary based on its listed mathematical items. The summary keeps the results conditional and does not claim a quantum source construction or empirical conclusion.

No changed item had a `verification.judge` record. Reflow reported all three changed item files unchanged; precheck passed all three. The final proof-layout run covered the three changed items: 8 numbered steps, 0 defects. No TikZ or tikzcd diagrams occur in the assigned files.

## Uneditable findings

- `def-countable-choice` is a published imported supplier. Its `deps` include `def-axiom-of-choice` because a Remark proves AC implies countable choice. The assigned integration definition directly uses only Countable Choice; its finite construction and proof comparison do not use full Choice. The inherited dependency closure therefore overstates the logical premise. This is reported read-only.
- `emg-mg04` is a published prerequisite page. Its Scope says the current M02 and M03 supplier carriers, including seven M01 replacement carriers on M02, are drafts with review pending. The current pages list those carriers as published. Assigned consumer `prop-emg-fx-semiclassical-consistency` reaches the published `lem-emg-maxwell-stress-divergence` on `emg-mg04`; the stale page claim is reported read-only.
- `emg-fx11-examples` is an assigned B page with no body after its frontmatter, so it has no page summary. B-page prose is outside this reader’s edit scope; the missing summary is reported.

The draft batch-20 page `emg-fx05` was opened as a page-level prerequisite. Its body is also empty, but it supplies no item premise in this batch and no assigned item’s `deps`/`justified_by` closure reaches its contents. I did not adjudicate that page-only observation as an assigned-content finding.

## Page verdicts and blocker

- `emg-fx11`: item claims reviewed; the empty summary is repaired. The page is locally acceptable with the two outside dependency findings above retained for owner disposition.
- `emg-fx11-examples`: the counterexample is mathematically sound after the statement clarification; the empty B-page summary remains an uneditable nonfatal defect.
- Required context page `emg-mg01`: relevant geometric and unit conventions match the opened item interfaces.
- Required context page `emg-mg03`: the current listed items are published and the relevant summary accurately describes the sourced Maxwell sign and current-conservation results.
- Required context page `emg-mg04`: the mathematical supplier statement used by this batch is explicit, but its published summary contains the stale status claim reported above.
- Required context page `emg-fx05`: opened as page-level draft context; no item-level claim from it was used in this batch’s proofs.

No unresolved local mathematical blocker remains. The full transitive graph reported by repository metadata contains many more published prerequisites than were needed to verify the displayed arguments; this report records the assigned inventory and the direct supplier interfaces actually used, not a full-corpus or full-closure audit.

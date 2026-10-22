# Step 3a Reader Report — Batch 32

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `32`

## Opened inventory

The assigned manifest lists pages `gr-fx04-asymptotic-ends-and-adm` (A) and `gr-fx04-asymptotic-ends-and-adm-examples` (B), with six items. Both page carriers were opened. The A page lists the four mathematical items and the B page lists the two examples, matching the manifest. Their summaries are empty, consistent with the current frontmatter-only page policy. The A page's four `requires` carriers were also opened to check the referenced page identities; the B page requires the assigned A page.

Items were read supplier-first:

1. `thm-gr-constraint-equations-in-normal-frame` — published direct dependency of the definition and conformal-curvature lemma; its statement, Facts & Assumptions, and proof were opened for the induced metric, second fundamental form, and curvature conventions.
2. `def-gr-fx-adm-end` — assigned definition; depends on the published theorem above.
3. `lem-gr-fx04-conformal-scalar-curvature` — assigned lemma; depends on the published theorem above.
4. `prop-gr-fx-conformal-adm-value` and `prop-gr-fx-compact-change-adm` — assigned propositions; each depends on the ADM-end definition.
5. `ex-gr-fx04-1` — assigned example; depends on the ADM-end definition and conformal ADM proposition.
6. `ex-gr-fx04-2` — assigned example; depends on the ADM-end definition, both propositions, and the conformal scalar-curvature lemma.

The six current proof-contract entries in `research/physics-non-fluid-129-2026-10-21-r2-batch-32.proof-contracts.json` were checked against the authored items. The only issue found is described below. No assigned item has a TikZ or tikzcd diagram except the end sketch in `def-gr-fx-adm-end`; that sketch correctly depicts the excluded radius-`R0` disk, an outer coordinate sphere `S_R`, and the outward Euclidean normal. No proof relies on it.

## Mathematical and source review

The definition fixes the Cartesian chart, regularity, derivative decay, surface measure, normalization, and SI conversion. The conformal ADM proposition's binomial expansion, uniform derivative bounds, sphere area calculation, and limit are valid. The compact-change proposition correctly uses equality off a compact subset to compare sufficiently large spheres, with existence of both limits included in its hypotheses. The conformal scalar-curvature calculation uses the stated three-dimensional curvature convention and the chain rule correctly. The isotropic Schwarzschild example has the stated data and conversion `m = G_N M/c^2`.

I checked the cited mathematical statements in the source PDFs:

- Gourgoulhon, [*3+1 Formalism and Bases of Numerical Relativity*](https://arxiv.org/pdf/gr-qc/0703035), §7.3.1, equations (7.14)–(7.15), PDF pp. 105–106, gives the ADM surface formula and its Cartesian-coordinate form in geometric units. Section 7.3.2, equations (7.46)–(7.48), PDF pp. 109–110, evaluates the isotropic Schwarzschild conformal factor `1 + m/(2r)` and obtains ADM mass `m`. Section 8.2.5, equations (8.63)–(8.64), PDF p. 134, identifies the data `h = (1 + m/(2r))^4 δ`, `K = 0` as a Schwarzschild slice in isotropic coordinates.
- Bernuzzi, [*Lecture Notes on 3+1 Numerical Relativity*](https://www.ias.edu/sites/default/files/NR_notes.pdf), §6.3, equation (6.17), PDF p. 26, states `R = Ψ^{-4} R̃ - 8 Ψ^{-5} D̃_i D̃^i Ψ`; for a flat conformal metric this agrees with the lemma. Section 7.2, equation (7.6c), PDF p. 33, gives the Cartesian ADM mass integral, and Example 7.2.2, equations (7.9)–(7.10), PDF p. 34, evaluates the isotropic Schwarzschild mass.
- Jaramillo, Valiente Kroon, and Gourgoulhon, [*From Geometry to Numerics*](https://arxiv.org/pdf/0712.2332), §2.1, equation (2), PDF p. 8, states an asymptotically Euclidean initial-data falloff with `γ_ij = (1 + 2m/|x|)δ_ij + O(|x|^{-2})` and `K_ij = O(|x|^{-2})`. The assigned definition specifies its own fixed-chart class; it does not claim that this source's more specific leading coefficient is necessary for every end it defines.

The cited formulas use geometric units where indicated. The assigned definition explicitly restores the SI energy factor `c^4/G_N`; the examples' dimensional conversions are consistent. These items make mathematical/model calculations only and assert no observations or empirical conclusions.

## Uneditable finding

In `items/ex-gr-fx04-2.md`, Proof step 2.1 invokes `[F4]` from `prop-gr-fx-compact-change-adm`, whose statement assumes both fixed-chart ADM limits exist. The step establishes existence for `h_0` using `[F3]`, but has not established existence for `h_ε` before applying `[F4]`. Step 1.1 does establish that the metrics agree off the compact support of `φ`; add the short argument that all sufficiently large coordinate spheres are disjoint from this support, so their surface integrals for `h_ε` equal those for `h_0`. This transfers existence of the limit and licenses the use of `[F4]`. A competent reader closes this omission immediately, so it is nonfatal. The item is in the read-only reader scope and was not edited.

## Page verdicts

- `gr-fx04-asymptotic-ends-and-adm`: acceptable A-page inventory and prerequisite metadata; no prose summary is expected in this run layout.
- `gr-fx04-asymptotic-ends-and-adm-examples`: acceptable B-page inventory and prerequisite metadata; no prose summary is expected in this run layout.

## Edits, validation, and blocker

No content edits were authorized for this read-only reader assignment. Accordingly, no item proof contract or `verification.judge` field was changed, and reflow, precheck, and proof-layout commands were not run. The complete findings record is in `research/physics-non-fluid-129-2026-10-21-r2-reader-findings-32.json`. No access or source-retrieval blocker remains for the reviewed scope.

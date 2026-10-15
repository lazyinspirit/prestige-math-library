# Step 3a reader report — batch 22

- **Run:** `physics-td-qft-rpm-62-2026-10-14`
- **Role:** reader `reader-22`
- **Scope:** batch `22`

## Opened inventory

Reviewed both assigned pages and all 17 assigned items.

- **A page:** `rpm-geometry-actions` — `library/relativistic-particle-mechanics/rpm-geometry-actions.md`
- **B page:** `rpm-geometry-actions-examples` — `library/relativistic-particle-mechanics/rpm-geometry-actions-examples.md`

The A-page items were read in dependency order: `def-rpm-spacetime-observer-and-worldline`, `lem-rpm-shell-tangent-force-ivp`, `thm-rpm-proper-time-parametrization`, `post-rpm-test-clock-and-background`, `lem-rpm-length-action-first-variation`, `post-rpm-massive-test-particle-action`, `lem-rpm-einbein-variation-and-equivalence`, `post-rpm-null-test-particle-action`, `def-rpm-mechanical-momentum-and-observer-energy`, `pthm-rpm-free-massive-and-null-geodesics`, `post-rpm-prescribed-force-law`, `pthm-rpm-killing-particle-charge`, and `pthm-rpm-mass-shell-and-force-work`.

The B-page items were then read in dependency order: `ex-rpm-incomplete`, `ex-rpm-clock-reunion`, `ex-rpm-null-scale`, and `ex-rpm-straight`.

For the assigned items, I inspected the directly declared published suppliers and their exact definitions/statements, including:

- Geometry and observers: `def-sr-affine-minkowski-model`, `def-gr-smooth-lorentzian-objects`, `def-gr-timelike-worldline-and-proper-time`, `def-gr-observer-and-rest-space`, `def-gr-observer-congruence-and-adapted-charts`, `def-gr-local-frame-and-tetrad-fields`, `def-sr-chart-tetrad-and-congruence-distinction`, `def-inertial-frame-and-inertial-chart`, `def-gr-inverse-metric-and-musical-isomorphisms`, and `def-gr-killing-field`.
- Connections and causal geometry: `def-covariant-derivative-along-a-curve`, `def-christoffel-symbols-of-an-affine-connection`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-gr-connection-conditions-in-chart-components`, `lem-gr-parallel-transport-and-geodesic-speed`, `lem-gr-future-causal-classification-by-a-timelike-field`, `lem-gr-observer-projection-decomposition`, `lem-gr-observer-pairing-with-future-causal-vectors`, and `thm-gr-local-geodesics-and-exponential-map`.
- Analysis and ODEs: `cor-mean-value-theorem`, `cor-zero-derivative-implies-constant`, `thm-chain-rule-for-total-derivatives`, `thm-clairaut-schwarz-mixed-partials`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-euclidean-inverse-function-theorem`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `thm-ftc-first-part`, `thm-integration-by-parts`, `thm-monotone-change-of-variable-for-riemann-integrals`, `thm-monotonicity-of-the-integral`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, and `lem-smooth-bump-between-concentric-euclidean-balls`.
- Relativistic energy and physical assumptions: `lem-sr-four-force-and-work-energy-identities` and `post-sr-ideal-clocks-and-light`.
- Additional published suppliers used in the repairs: `def-geodesic-of-an-affine-connection`, `lem-gr-constant-component-chart-flatness`, and `lem-tangent-space-of-affine-minkowski-space-is-v`.

I also opened the page-level prerequisites declared by the A page: `euclidean-ordinary-differential-equations-with-smooth-dependence`, `gr-causal-and-initial-value-boundaries`, `picard-lindelof-and-first-order-odes`, and `sr-energy-momentum`. The B page requires the assigned A page.

I inspected the assigned batch notes, source-coverage map, cross-batch dependency record (`[]`), and all 17 proof-contract entries. The published direct suppliers used here are marked published; the batch has no direct draft supplier from another current-run batch.

## Page assessments

- **`rpm-geometry-actions`:** The summary matches the reviewed items. It distinguishes adopted clock/action/force assumptions from conditional mathematical consequences and makes no empirical or completeness claim. Five assigned items received the focused repairs below; no uneditable defect remains in this page's reviewed claims.
- **`rpm-geometry-actions-examples`:** The examples are model constructions/calculations, not reported measurements. The page summary is supported by the reviewed examples and the required geometry context. Three assigned examples received focused repairs below; no uneditable defect remains in this page's reviewed claims.

## Repairs and evidence

1. **`lem-rpm-shell-tangent-force-ivp`, Proof 2.1.** The cited maximal-ODE theorem is formulated for Euclidean IVPs, while the claim is on a Lorentzian manifold. I added the chartwise gluing argument: local uniqueness makes the position-velocity pairs agree on connected overlaps, so the union of local solutions is a maximal solution on an open interval. This establishes the manifold claim from the local ODE suppliers without asserting completeness. Updated its derivation contract. Reflow and precheck pass.

2. **`ex-rpm-incomplete`, Statement, Facts & Assumptions, and Verification 1.1–2.1.** The original proof used “geodesic” without an item dependency defining it or a supplier establishing the constant-metric coordinate-line fact. I added `def-geodesic-of-an-affine-connection` and `lem-gr-constant-component-chart-flatness` as mathematical prerequisites, with roles, and stated the relevant definitions in `[F2]`. The verification now invokes that supplier directly and the slab curve is named `\beta` to avoid overloading `\eta`. I replaced the final chronology/completeness shorthand with the precise closed-timelike-curve and finite-parameter nonextension conclusion. Updated its derivation/citation contract. Reflow and precheck pass.

3. **`ex-rpm-null-scale`, Facts & Assumptions and Verification 2.1.** Observer energy requires the observer and momentum to belong to the same tangent space. I tied the observer to `x(\lambda_0)` and compared `P_a(\lambda_0/a)` with `P(\lambda_0)` at their common event. Updated its derivation contract. Reflow and precheck pass.

4. **`ex-rpm-straight`, dependencies, Facts & Assumptions, and Verification 2.1.** The speed and energy computation used an inertial chart and fixed inertial observer without naming their supplier or relating the flat background metric to `\eta`. I added the inertial-frame definition, the affine tangent-space identification, and the RPM flat-background definition to `deps`, with dependency roles. The facts now set `g=\eta`, identify `n=e_0`, and identify the chart; the proof computes the coordinate velocity and observer energy in that frame. Updated its derivation/citation contract. Reflow and precheck pass.

5. **`pthm-rpm-killing-particle-charge`, Statement.** The Killing field was defined only on a “region,” but the trajectory's image was not required to lie in its domain. I now state an open set `\Omega`, require each trajectory image to lie in `\Omega`, and specify the nonempty open parameter intervals. No item consumer of this theorem was found in the current item tree. This statement-only clarification did not alter the proof derivations. Reflow and precheck pass.

The five edited items have no stale `verification.judge` record. The batched proof-layout check passed: 5 items, 12 proof steps, 0 defects. It used the existing temporary renderer path `/tmp/prestige-physics-render`; the shared app checkout was not changed.

## Source checks

The active source map records Tong's *General Relativity* Chapter 1 excerpt for proper time, particle actions, and free motion ( §§1.1.1–1.2.3 and §1.2.6, printed pp. 8–28; [author-hosted PDF](https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf)); Chapter 3 for Lorentzian geometry and the metric-compatible connection (§§3.1.2–3.2.3, printed pp. 93–111; [author-hosted PDF](https://www.davidtong.org/pdfs/teaching/general-relativity/gr3.pdf)); and Chapter 4 for Killing fields and conserved particle scalars (§§4.3.1–4.3.2, printed pp. 160–166; [author-hosted PDF](https://www.davidtong.org/pdfs/teaching/general-relativity/gr4.pdf)). The map also records Carroll's complete *Lecture Notes on General Relativity* (Ch. 1 proper time/four-momentum, Ch. 3 geodesics and the proper-time action, Ch. 5 Killing particle scalars; [complete PDF](https://arxiv.org/pdf/gr-qc/9712019)) and Tong's *String Theory* §1.1.2 on the einbein and reparametrization (printed pp. 10–13; [complete notes](https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf)). I independently opened Carroll's PDF, Tong's author-hosted HTML chapters on [geodesics and proper time](https://davidtong.org/teaching/general-relativity/grhtml/S1), [the Levi-Civita connection](https://davidtong.org/teaching/general-relativity/grhtml/S3), and [Killing charges](https://davidtong.org/teaching/general-relativity/grhtml/S4), and Tong's String PDF. The active PDFs' recorded full-text locators remain the source-map evidence for the three separate General Relativity chapter excerpts.

## Unedited defects and limits

No confirmed mathematical or physics defect remains unedited in the assigned pages or items. The assigned items contain no experiment report or empirical premise; the postulates are presented as adopted model assumptions, and the theorem/example conclusions remain conditional model deductions.

This review checked the direct declared suppliers' exact relevant statements and hypotheses but did not independently re-prove every transitive proof in the already published mathematical dependency closure. The assigned coverage file's active-source mapping was consulted, but its complete historical recovery log was not audited. I independently opened Carroll's complete notes for the relevant geodesic/Killing sections, Tong's author-hosted HTML chapters on particle proper time, the Levi-Civita connection, and Killing charges, and Tong's String notes §1.1.2. Direct web opens of Tong's `gr1.pdf`, `gr3.pdf`, and `gr4.pdf` were inaccessible; the local coverage record reports successful full-text retrieval for the active chapter excerpts.

## Handoff note

The prepared `research/physics-td-qft-rpm-62-2026-10-14-batch-22.pages.json` still records the pre-reader direct-dependency arrays for `ex-rpm-incomplete` and `ex-rpm-straight`, while the repaired item carriers now declare the added published prerequisites. I left the prepared manifest unchanged under this reader's carrier-edit scope. The downstream run metadata reconciliation must incorporate those current item dependencies before a strict current-manifest check.

The recomputed run status remains at `3a-read`, counts this batch artifact, and reports no in-flight worker or controller blocker.

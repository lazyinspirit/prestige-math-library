# Step 3a reader report — batch 48

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `48`

## Opened inventory

Reviewed assigned pages `qft-mx04` and `qft-mx04-examples` and all three assigned items. Read in dependency order: `def-qft-example-data` (direct draft supplier, no dependencies), `lem-qft-example-deterministic-ratio-error` (no dependencies), `lem-qft-example-penning-frequency-invariant` (uses the mass-energy convention from `def-qft-example-data`), then `ex-qftmath-x08` (uses the ratio lemma). Also opened prerequisite page `qft-mx01`; its relevant listed item is the inspected definition supplier. The run manifest's page prerequisite and item dependency agree with the page and item text.

For the local Statement clarification described below, checked the direct downstream item `exp-qft-fan-electron-moment-2022` and its transitive item consumer `pthm-qft-reported-electron-anomaly-shift` in batch 55. The experiment uses the invariant as an ideal-model operational prerequisite; the changed sentence is not used. The physics theorem uses the experiment's reported estimate and qualifications, and is unchanged by the clarification.

## Mathematical and source review

- `def-qft-example-data`: the actual draft Definition states `M=mc^2` with `c>0`; its dependencies are empty. The Penning lemma uses only this convention to write `q/m=qc^2/M`; it takes no dynamics or spectral result from the supplier. Its draft and unaccepted status are stated accurately in the consuming lemma and page.
- `lem-qft-example-penning-frequency-invariant`: all matrix data, the quadratic potential, SI units, and the six-mode spectral hypothesis are explicit. The block-square trace, trace from the diagonal spectrum, cross-product matrix trace, and ordinary-frequency conversion are correct. The conclusion is a conditional identity for the specified linear model; it makes no empirical claim and does not establish that an actual trap satisfies the model or spectral assumptions.
- `lem-qft-example-deterministic-ratio-error`: the positive-denominator conditions, exact quotient difference, candidate derivative, quadratic remainder, rectangle bounds, and total-derivative limit are established locally. The arithmetic and deterministic scope are correct; no probability model or statistical interpretation is used.
- `ex-qftmath-x08`: applying the supplier bound gives numerator `11 Hz^2`, denominator `9900 Hz^2`, and bound `11/9900`; the nominal ratio is `1.01`. The text labels the inputs as stipulated, not measured, and explicitly excludes error bars and confidence-interval interpretations.
- Brown and Gabrielse, *Geonium Theory*, §II.D, Eqs. (2.70)–(2.79), was retrieved. It treats a symmetric traceless quadratic-potential matrix and a misaligned magnetic field, derives the characteristic cubic, and states the squared-frequency sum at Eq. (2.79). The item supplies its own trace proof. Fan et al., arXiv:2209.13084v2, Eq. (4) and surrounding discussion, identifies the Brown–Gabrielse relation and its stated invariance to field-axis misalignment and elliptic trap distortion. Tong, §0.1, confirms the cited natural-unit convention and the `E=mc^2` relation used in the conventions context. Vogel's 2018 book metadata and chapter §5.1, Eq. (5.1), were checked; the NDL-hosted full chapter timed out, so the full cited §5.1–§5.3.2 range was not inspected. No proof step depends on Vogel, and Brown–Gabrielse plus the local argument cover the invariant claim.

## Edit and evidence

- In `items/lem-qft-example-penning-frequency-invariant.md`, clarified the state-solution clause: it now specifies a `C^1` map from an open interval into `R^3 x R^3` that satisfies the displayed equations at every time. The previous wording specified regularity but left satisfaction of the system implicit. The matrix claim and proof are unchanged.
- Updated the matching empty-boundary evidence in `research/physics-td-qft-rpm-62-2026-10-14-batch-48.proof-contracts.json` to record the explicit state-solution domain and equation. The existing derivation records remain accurate. No `verification.judge` record was present to remove.
- Downstream disposition: the experiment and its transitive affine-subtraction consumer use only the unchanged invariant result and reported empirical premise, respectively. No downstream repair is needed.

## Page verdicts

- `qft-mx04`: no remaining page defect. Its title, item placement, and summary accurately describe the conditional trace identity, deterministic ratio estimate, draft convention supplier, and scope limitations.
- `qft-mx04-examples`: no page defect. Its sole example and summary correctly distinguish stipulated interval inputs from observations and statistical uncertainty.

## Validation and unresolved items

Reflow reported the edited lemma unchanged. Precheck passed (1 checked, 0 failing). Proof-layout passed for the edited item (1 item, 5 steps, 0 defects); the ordinary invocation first failed because this checkout lacks the app's `tsx` loader and the renderer's `@/` path resolution. A temporary resolver in `/private/tmp` allowed the same proof-layout renderer and application components to run successfully. Temporary source-download and resolver files were removed.

No defect remains that I was not licensed to repair. No blocker remains. Coverage limitation: the full Vogel chapter range could not be retrieved from its mirror; that source was not needed to establish or check the local proof.

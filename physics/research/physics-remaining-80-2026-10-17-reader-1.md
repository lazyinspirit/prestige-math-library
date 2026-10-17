# Step 3a reader report — batch 1

Run: `physics-remaining-80-2026-10-17`  
Batch: `1`  
Role: independent reader

## Opened inventory

Assigned pages:

- `library/einstein-maxwell-models/emg-g01.md` (`emg-g01`, A page)
- `library/einstein-maxwell-models/emg-g01-examples.md` (`emg-g01-examples`, B page)

Assigned items, read in dependency order:

- `def-emg-geometry-units`
- `post-emg-covariant-maxwell`
- `pthm-emg-flat-electromagnetic-compatibility`
- `ex-emg-observer-static-field`

Page prerequisites opened:

- `library/einstein-maxwell-models-mathematics/emg-mg01.md` (`emg-mg01`)
- `library/classical-electromagnetism/em-primitives-and-postulates.md` (`em-primitives-and-postulates`)
- `library/classical-electromagnetism/em-lorentz-covariant-formulation.md` (`em-lorentz-covariant-formulation`)

Direct item dependencies opened:

- Geometry and Hodge suppliers: `def-emg-lorentzian-forms`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-observer-field-decomposition`.
- Classical electromagnetism suppliers: `def-em-electromagnetic-tensor`, `def-em-fields`, `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-sources`, `def-em-relativistic-worldlines-frames`, `lem-em-antisymmetric-tensor-contraction`, `post-em-minkowski-physical-model`, `post-em-vacuum-maxwell`, `post-em-lorentz-coupling`, `pthm-em-tensor-maxwell-equivalence`.
- Special-relativity suppliers: `def-sr-affine-minkowski-model`, `post-sr-inertial-covariance`, `thm-sr-tensor-and-current-transformation`.
- Imported mathematical suppliers: `def-em-minkowski-affine-space`, `def-directional-and-partial-derivatives`, `def-divergence-and-curl-of-a-c1-vector-field`, `def-cross-product-in-r3`.

I also opened `research/math-imports.json`, the batch manifest, `briefs/reader.md`, and `research/physics-remaining-80-2026-10-17-batch-1.proof-contracts.json`. Direct assigned-item dependencies were published suppliers except for the three other assigned in-flight items listed above.

Source passages checked for the assigned claims include the BIPM 9th-edition SI Brochure version 4.01, §§2.2 and 2.3.1; Tong's *General Relativity*, §2.4.2 eq. (2.87), §3.1.3 eqs. (3.97)–(3.98), and §3.2.5; Reall's 12 October 2022 *General Relativity* notes, §6.2 eqs. (6.7)–(6.8) and §8.5 eqs. (8.55)–(8.59); and Tong's *Electromagnetism*, §1.2.1 eqs. (1.4)–(1.7), §5.3.2, and §5.4. The sources use differing signatures, units, and index conventions; the assigned items state their local conventions and prove the flat component identities directly.

## Review and edit

`def-emg-geometry-units` correctly defines the smooth Lorentzian geometry, observer congruence and tetrad distinctions, two-form field, observer-derived electric and magnetic covectors, current decomposition, units, and the stated constructions for $\varepsilon_0$ and $\kappa_E$. The formal Definition already distinguishes the model quantities and derived constructions. I added a `Remarks` paragraph making explicit that $c$ and $\mu_0$ are primitive inputs of this formulation, a numerical $\mu_0$ remains a qualified empirical input, $e$ is only an SI defining constant rather than a field-equation parameter, and optional $\kappa_0$ is a chosen primitive normalization convention. The paragraph preserves the unit/model distinction and does not identify $q$ with integer multiples of $e$. The original `## Definition` text, equations, dependencies, and physical scope were left unchanged.

The following current-run direct consumers were checked against that clarification; all retain the same field equations, units, and parameter constructions, so no consumer repair was needed:

- Batch 1: `post-emg-covariant-maxwell`, `pthm-emg-flat-electromagnetic-compatibility`, `ex-emg-observer-static-field`.
- Batch 5: `def-emg-charged-dust-model`, `post-emg-einstein-maxwell-equations`, `def-emg-classical-charged-scalar-model`, `post-emg-selected-matter-action`, `post-emg-einstein-maxwell-action`, `pthm-emg-total-matter-field-exchange`.
- Batch 9: `post-emg-strict-charged-fluid-model`, `pthm-emg-local-charged-fluid-model`, `ex-emg-adopted-linear-eos-model`.
- Batch 10: `pthm-emg-local-electrovacuum-model`, `pthm-emg-on-shell-electromagnetic-conservation`, `pthm-emg-smooth-electrovacuum-maximal-model`, `ex-emg-adopted-parallel-field-model`.
- Batch 12: `post-emg-trivial-classical-charged-scalar-model`, `pthm-emg-classical-charged-scalar-model-evolution`.
- Batch 13: `def-emg-topological-sector`.
- Batch 18: `def-emg-matter-observables`.
- Batch 24: `def-emg-xs-si-parameters`, `pthm-emg-xs-static-redshift`.
- Batch 25: `pthm-emg-xs-geometric-to-si-model`.

No proof contract or `verification.judge` record exists for this non-proof-bearing definition. The assigned proof contract rows for the postulate, theorem, and example remain aligned with their unchanged proof-bearing content.

Validation after the final item edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-emg-geometry-units.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-emg-geometry-units.md` — 0 checked, 0 failing.
- `node tools/physics-support/proof-layout.mjs items/def-emg-geometry-units.md` — 1 item, 0 steps, 0 defects.

No other item or page prose was edited.

## Item verdicts

- `def-emg-geometry-units` — pass after the role-clarification remark. The observer-field reconstruction, component dictionary, and units are consistent with the opened mathematical and electromagnetic suppliers.
- `post-emg-covariant-maxwell` — pass. It is clearly an adopted smooth physical postulate, states the domain and regularity, distinguishes the new curved continuation from the inherited flat equations, and makes no empirical-validity claim.
- `pthm-emg-flat-electromagnetic-compatibility` — pass. The component signs, factors of $c$, Maxwell equations, force/power density components, units, and count of independent equations follow from the stated smooth hypotheses and definitions.
- `ex-emg-observer-static-field` — pass. The observer fields and Hodge signs are correct, and the example verifies only the source-free Maxwell subsystem on a prescribed flat background.

## Page verdicts

- `emg-g01` — pass. Its summary accurately separates the adopted curved law from the conditional flat component check and makes no empirical or coupled-solution claim.
- `emg-g01-examples` — pass. Its summary matches the prescribed constant-field example and explicitly excludes a coupled Einstein-equation claim or observation.

The three prerequisite page summaries are consistent with their classifications and the uses made in this batch. No defect remains unedited and no blocker was encountered.

## Coverage limits

The cited Hlevkin Griffiths PDF was too large for direct browser retrieval. The SI equations were independently checked in Tong and Reall; an accessible 1999 third-edition text copy also exposed the relevant Maxwell-equation section, but I did not retrieve the cited Hlevkin file's §12.3 pages directly. I did not re-audit the complete transitive proofs of the published mathematical suppliers; I checked their exact statements and the hypotheses used by these assigned claims.

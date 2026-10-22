# Step 3a reader report — batch 4

Run: `physics-non-fluid-129-2026-10-21-r2`

## Opened inventory

Assigned pages:

- `library/classical-electromagnetism/emx-weak-boundary-energy.md`
- `library/classical-electromagnetism/emx-weak-boundary-energy-examples.md`

Assigned items, read in dependency order:

- `def-emx-finite-energy-boundary-model`
- `def-emx-surface-divergence`
- `pthm-emx-weak-poynting-uniqueness`
- `lem-emx-surface-divergence-c1-representation`
- `pthm-emx-sheet-charge-continuity`
- `cex-emx-rough-field-energy-limit`
- `ex-emx-impedance-sign-check`

Dependency context opened to check the definitions and proof steps included the model's countable-choice, SI, laboratory-geometry, cross-product, Lebesgue and product-measure, `H(curl)`, and closure-defined `H_0(curl)` suppliers; the symmetric `L^2` estimate; the surface-distribution, surface-measure, chart-independence and surface-localization suppliers; the distribution, test-function, interface-derivative, null-image, Fubini, integration-by-parts, dominated-convergence and regular-distribution suppliers; the distributional-vacuum postulate and weak-source definition; `pthm-em-material-stationary-jumps` and its `lem-em-interface-derivatives` supplier; and the Coulomb-field and point-self-energy results. I also opened the A-page prerequisite pages `discrete-de-rham-complexes-and-edge-elements`, `em-energy-momentum-and-angular-balance`, `em-material-response`, and `em-maxwell-integral-and-constraints`, and the B-page prerequisite `em-electrostatics-in-vacuum`.

For source context, I read the cited ETH notes at §5.3 (PDF p. 65) and §8.2 (PDF pp. 86–87), and Long Chen's UCI notes, §§1–3.2 (PDF pp. 1–5). The latter's H(curl) trace is a quotient-dual trace; it does not supply an ordinary L2 trace for every H(curl) field. The authored model correctly requires an explicit Green-compatible L2 boundary pair instead. The source passages support conventions and context; the assigned weak energy and surface-divergence arguments are proved locally.

## Repair

In `items/ex-emx-impedance-sign-check.md`, the `## Diagram` caption previously showed both tangential vectors along the positive coordinate axes without qualifying the drawing, although the Example allows any real `E_0` and `Y = 0`. For `E_0 < 0`, both nonzero vectors reverse; for `E_0 = 0`, both vanish; for `Y = 0`, the magnetic boundary vector vanishes. I qualified the drawing as the `E_0 > 0`, `Y > 0` case and stated the reversed and zero cases. The right-handed cross-product sign and the outward-power calculation are unchanged.

I updated the `ex-emx-impedance-sign-check` proof contract's finite check to record the diagram's representative sign case and degenerate cases. The item had no `verification.judge` record to remove. Reflow reported the item unchanged; precheck passed; the required final proof-layout check reported 1 item, 3 steps, 0 defects.

## Defects not repaired

None. The time-dependent sheet-charge continuity proof's four spatial jumps use the spatial part of `pthm-em-material-stationary-jumps`; its proof does not differentiate the sheet densities in time. The assigned proof states this scope distinction and separately derives the time-dependent surface continuity equation from distributional charge compatibility. I found no remaining gap in that extension under the stronger joint one-sided spacetime regularity stated here.

## Page verdicts

- `emx-weak-boundary-energy`: **Pass.** Its five assigned A-items and draft placement match the batch manifest. The definitions state their domains, regularity and boundary conventions; the energy theorem proves the conditional identity and forward uniqueness without claiming existence or empirical validity.
- `emx-weak-boundary-energy-examples`: **Pass after repair.** Its counterexample and impedance-sign example match the manifest. The Coulomb shell calculation is conditional on the ideal point-charge model, and the impedance example makes no solution-existence claim. Its diagram now matches its signed parameter range.

## Blocker and coverage limits

No blocker. The batch has no experiment item or statistical inference to review. I checked the exact direct supplier statements and proof-critical arguments used in this batch, not a corpus-wide re-audit of the transitive proofs behind published mathematical suppliers. No empirical observation or statistical certainty is claimed.

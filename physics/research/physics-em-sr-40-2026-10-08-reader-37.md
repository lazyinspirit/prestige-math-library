# Reader 37 — physics-em-sr-40-2026-10-08

Scope: batch 37; independent Step 5a review. Content remains draft. No judgment, publication, import edit, other-batch edit, or B-page edit was performed.

## Opened inventory and method

Opened both assigned pages in `library/classical-electromagnetism/`: `em-lorentz-covariant-formulation.md` (A) and `em-lorentz-covariant-formulation-examples.md` (B), and the exact batch manifest, proof contracts, notes, pre-reader fingerprint, workspace instructions, reader brief and content model. No rendered evidence bundle was located. Manifest statements and author reports were navigation/evidence only.

All seven assigned item bodies, including definitions, facts, numbered deductions, scope, source notes and metadata, were read. Supplier interfaces were opened before the dependent owned proofs. Owned dependency order was tensor equivalence → field transformation → observer theorem / boosted example; force theorem → trajectory example; tensor equivalence / field transformation → stress-energy theorem.

Owned items:
- `items/pthm-em-tensor-maxwell-equivalence.md`
- `items/pthm-em-lorentz-field-transform.md`
- `items/pthm-em-observer-field-and-doppler.md`
- `items/pthm-em-relativistic-lorentz-force.md`
- `items/pthm-em-covariant-stress-energy.md`
- `items/ex-em-boosted-fields-example.md`
- `items/ex-em-constant-field-trajectory.md`

Opened direct suppliers (all IDs below denote `items/<id>.md`):

- `cor-differentiable-implies-continuous`
- `cor-mean-value-theorem`
- `def-abs-value`
- `def-ck-tensor-field-on-minkowski-space`
- `def-cross-product-in-r3`
- `def-determinant-of-a-linear-operator`
- `def-determinant-of-a-square-matrix`
- `def-directional-and-partial-derivatives`
- `def-divergence-and-curl-of-a-c1-vector-field`
- `def-em-electromagnetic-tensor`
- `def-em-fields`
- `def-em-lab-geometry`
- `def-em-plane-wave-definition`
- `def-em-relativistic-worldlines-frames`
- `def-em-si-conventions`
- `def-em-sources`
- `def-em-vacuum-energy-flux`
- `def-em-vacuum-stress-momentum`
- `def-euclidean-inner-product`
- `def-lorentz-boost`
- `def-rational-power`
- `def-spatial-rotation-of-an-inertial-frame`
- `def-vector-valued-derivative-and-integral`
- `lem-cross-product-is-bilinear-alternating-and-orthogonal`
- `lem-em-antisymmetric-tensor-contraction`
- `lem-em-boost-preserves-metric`
- `lem-of-abs-value`
- `lem-of-inverse-positive`
- `lem-of-square-monotone`
- `lem-rational-power-laws`
- `lem-rational-power-monotone`
- `post-em-lorentz-coupling`
- `post-em-minkowski-physical-model`
- `post-em-vacuum-maxwell`
- `post-sr-ideal-clocks-and-light`
- `post-sr-ideal-plane-wave-model`
- `post-sr-inertial-covariance`
- `post-sr-massive-particle-dynamics`
- `pthm-em-momentum-balance`
- `pthm-em-plane-wave-maxwell`
- `pthm-em-poynting-balance`
- `pthm-sr-momentum-and-four-force`
- `pthm-sr-null-wave-doppler-and-aberration`
- `thm-algebra-of-derivatives`
- `thm-cauchy-mean-value`
- `thm-chain-rule`
- `thm-cross-product-norm-is-the-two-vector-gram-determinant`
- `thm-determinant-of-transpose`
- `thm-intermediate-value`
- `thm-of-square-roots`
- `thm-real-power-agrees-with-rational-exponent`
- `thm-real-power-continuity-and-derivatives`
- `thm-real-square-matrix-invertible-iff-determinant-nonzero`
- `thm-sr-antisymmetric-observer-decomposition`
- `thm-sr-proper-orthochronous-lorentz-algebra`
- `thm-sr-proper-time-and-observer-decomposition`
- `thm-sr-stress-balance-and-finite-flux`
- `thm-sr-tensor-and-current-transformation`

Additional opened prerequisite interfaces: `def-ck-euclidean-maps-and-diffeomorphisms`, `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `def-spatial-euclidean-structure-of-an-inertial-frame`, `def-em-minkowski-affine-space`, `def-oriented-minkowski-volume-form`, `lem-boost-rotation-factorization`, `lem-boost-is-proper-orthochronous-with-inverse`, `lem-sr-null-covector-boost-transformation`, `def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`, `def-sr-four-velocity-and-four-acceleration`, `def-sr-null-wave-covector-and-observer-frequency`, `def-sr-affine-phase-and-wave-covector`, `def-sr-stress-energy-tensor-and-force-density`, `lem-em-quadratic-stress-identity`, `lem-the-divergence-and-curl-of-a-cross-product`. Imported mathematics was identified through `research/math-imports.json` and kept read-only.

## Repairs and evidence

1. `pthm-em-tensor-maxwell-equivalence`, Proof 2.2: replaced the incorrectly transposed multiplier `(Lambda^-1)^b_g` by `(Lambda^-1)^g_b`. Only the latter contracts `Lambda^b_f` to `delta^g_f`, using Facts F6 and the opened tensor-transformation supplier. Statement and scope unchanged. Also added Tong §5.4, printed pp. 113–115, equations (5.26)–(5.27), to the locator, and corrected the Fitzpatrick node-121 range to (1467)–(1490), which actually includes the field dictionary and sourced equations.
2. `pthm-em-observer-field-and-doppler`, Proof 3.1 (now 2.3 after canonical precheck numbering): the old proof quantified over general proper orthochronous matrices but treated each as a pure boost. Added F9 and used `Lambda_j=B(-alpha_j) diag(1,R_j)`: rotate the incoming direction to `R_j s_(j-1)`, then apply the Doppler/aberration law with boost parameter `-alpha_j`. Frequency ratios remain positive and telescope. The exact factorization is Statement (iii) of the opened SR algebra theorem; the covector transformation and rotation identities are the opened suppliers. Statement and scope unchanged.
3. `pthm-em-relativistic-lorentz-force`, Proof 1.3: the norm-conservation supplier's equation uses its differentiation parameter; the old application passed directly from a proper-time equation to the original parameter s. Wrote `U'=(q/m) tau' Phi(U)` and differentiated the norm explicitly. Pointwise skew orthogonality kills the expression including `tau'`; MVT and continuity cover the whole interval and included endpoints. Replaced the unsupported initial parameter 0 by arbitrary `s_0 in J`. No derivative of the field, solution-existence assertion or additional physical premise was introduced.
4. `pthm-em-lorentz-field-transform`, Fitzpatrick locator: node 122's dual-tensor and Maxwell formulas are (1491)–(1510), not the old (1476)–(1482). Source-only correction; proof and public interface unchanged.
5. `pthm-em-covariant-stress-energy`, Beisert locator: the stress components, quadratic formula and divergence are on printed p. 9.10, equations (9.51)–(9.53), not pp. 9.11–9.12. Source-only correction; proof and public interface unchanged.
6. `ex-em-constant-field-trajectory`, Example: made the intended whole-space field domains `E,B:R^3 x R -> R^3` and trajectory domain `r:R -> R^3` explicit before the formulas. The arbitrary-charge and separate zero-charge branches remain. Removed the misplaced derivative citation to `def-rational-power` from Fact F3 and its contract: the opened `def-vector-valued-derivative-and-integral` supplies derivatives, whereas rational power supplies powers. Its B-page consumer was reviewed; the independent defect below remains outside editing authority.

Affected proof-contract derivations and inputs were updated, including the new F9 exact supplier clause and the trajectory domain boundary record. Changed carriers had no `verification.judge` record to remove. No acceptance stamp was added.

## Source checks

Retrieved and read relevant portions of [Tong's notes](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf): §5.3.2–§5.4.2 (printed pp. 106–118), §5.6.1–§5.6.3 (pp. 128–133). Their component dictionary is the negative of the EM covariant dictionary; the signature and stress convention also require conversion. The local proofs perform these conversions. The source's trajectory assumes rest at t=0; the example's arbitrary sign and zero charge are verified locally.

Opened Fitzpatrick [node 121](https://farside.ph.utexas.edu/teaching/em/lectures/node121.html), [122](https://farside.ph.utexas.edu/teaching/em/lectures/node122.html), [123](https://farside.ph.utexas.edu/teaching/em/lectures/node123.html), [127](https://farside.ph.utexas.edu/teaching/em/lectures/node127.html), [128](https://farside.ph.utexas.edu/teaching/em/lectures/node128.html), and the chapter index at node 106. Read the relevant displayed equations and arguments. Several HTML equation alt texts themselves contain ellipses; the complete local arguments and Tong PDF were used for those calculations, without claiming to have read hidden formula content.

Retrieved [Beisert's 176-page script](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf) and read §9.3–§9.4, printed pp. 9.8–9.13 (PDF pp. 102–107), including (9.42)–(9.53), (9.67)–(9.71). Its signs/index placement differ and are converted locally. This is a section-level source check, not a full-book reading attestation. `pdftotext` was unavailable; PyMuPDF supplied the PDF text.

## Uneditable defects and history

- B-page `em-lorentz-covariant-formulation-examples`, second-example summary, lines 26–39: the prose states the limiting speed `|v(t)| -> c` without `h != 0`, while explicitly retaining `h=0,q=0`. At q=0 the velocity is identically zero and its limiting speed is zero. The displayed trajectory divides by h, and the displacement bound by |h|, likewise without the nearby nonzero qualification. The opened example correctly separates these branches. Add `h != 0` to the divided formulas and limiting-speed/error-bound claims, retaining the static branch. Fatal missing hypothesis in page prose; B-page editing is prohibited.
- Historical out-of-batch citation defect: `thm-sr-proper-orthochronous-lorentz-algebra` (producer batch 2), Facts L9, had the single malformed target `[[def-determinant-of-a-square-matrix, thm-cauchy-schwarz-and-the-euclidean-norm]]`. The intended definition was opened and the joined target was invalid. Assigned consumer: `pthm-em-lorentz-field-transform`, via its direct dependency. Initial observed raw SHA-256 was `ae6b5b18a83273f492462f9a0023d66976d3b8502ba445b4d747baca9ef98a74`. Another writer corrected this citation during review: later current SHA was `a3a679d18231a4aea3b556fcb88098d9fa4e24132cca4b3a0a480c2437b21d0f` and the malformed target was absent. The producer's immutable pre fingerprint differs (`5f216c8ebabf29bd385e5b95add4f6a6f6dd1cd5030ad5f32dc02e0a1fdfcb15`), so neither pre nor corrected current binds the old observed bytes. `observed_source` must be null. Retain this as resolved historical evidence; it is no present mathematical blocker.

## Page verdicts

- A `em-lorentz-covariant-formulation`: the repaired arguments preserve the claimed component equivalence, arbitrary boosts, invariants, observer split, conditional readings, force/power bounds and C1 stress balance. No remaining substantive defect was identified in the reviewed owned content. This reader assessment is not an acceptance stamp.
- B `em-lorentz-covariant-formulation-examples`: the computations preserve the boost and both trajectory branches; page prose requires the nonzero-h qualification above. Hold that prose for Step 5b repair.

## Validation and limitations

Executed `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/<id>.md` for each of the six changed items, followed by `precheck.mts` on each. The first observer precheck requested canonical phase numbering; adopted 3.1→2.3 and 4.1→3.1, updated every affected contract step/use/input, and reran. Final results: each changed item PASS, zero failing. Reflow joined existing soft-wrapped fact/prose paragraphs; it did not alter their mathematical content.

After the final carrier edits and reflow, executed one final batch:

```sh
node tools/physics-support/proof-layout.mjs items/pthm-em-tensor-maxwell-equivalence.md items/pthm-em-lorentz-field-transform.md items/pthm-em-observer-field-and-doppler.md items/pthm-em-relativistic-lorentz-force.md items/pthm-em-covariant-stress-energy.md items/ex-em-constant-field-trajectory.md
```

Result: `proof-layout: 6 items, 53 steps, 0 defects` (exit 0). A focused Python check confirmed that all seven contracts enumerate exactly the current numbered steps, every citation use names a current step, all carriers remain draft, and no carrier has a judge record. These are mechanical checks, not independent mathematical certification. No whole-run gate was attempted.

The review checks owned deductions and the supplier interfaces/arguments needed for them, not every ancestral foundational proof in the full dependency graph. Imported one-variable calculus was read at its exact public statements; no whole-library audit or new source-fetch certification is claimed. Pure local balance clauses were used without their unrelated Countable-Choice-dependent integration branches. All physical conclusions remain conditional on the explicitly adopted models, with no empirical measurements or statistical claims. The B-page issue remains the substantive handoff obligation.

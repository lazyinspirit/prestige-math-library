# Step 3a reader report — batch 49

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Batch: `49`

## Inventory opened

Pages:

- `qm-interference-and-local-detection` — `library/non-relativistic-quantum-mechanics/qm-interference-and-local-detection.md`
- `qm-interference-and-local-detection-examples` — `library/non-relativistic-quantum-mechanics/qm-interference-and-local-detection-examples.md`

All twelve assigned items, read in dependency order:

- `lem-nrqm-interference-component-cross-term-and-recorded-bin-laws`
- `def-nrqm-interference-two-path-preparation-and-detection-model`
- `pthm-nrqm-interference-continuity-and-local-probability-balance`
- `exp-nrqm-interference-bach-electron-double-slit`
- `def-nrqm-interference-recorded-detector-and-sampling-model`
- `pthm-nrqm-interference-coherent-and-mixture-detection-laws`
- `pthm-nrqm-interference-recorded-bin-laws-loss-and-conditioning`
- `ex-nrqm-interference-ideal-flat-two-path-screen-distribution`
- `ex-nrqm-interference-uniform-phase-averaging`
- `texp-nrqm-interference-finite-sample-fringe-failure`
- `rem-nrqm-interference-scope-and-deferred-content`
- `rem-nrqm-interference-examples-scope-limits`

The relevant physical suppliers were opened: P1 `post-nrqm-framework-state-and-composition`, P2 `post-nrqm-framework-observable-and-probability`, P4 `post-nrqm-framework-autonomous-dynamics`, P5 `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`, P6 `post-nrqm-framework-identical-particles-and-spin`, P7 `post-nrqm-framework-preparation-and-apparatus`, and the QM vocabulary suppliers `def-nrqm-framework-quantities-and-units`, `def-nrqm-kinematics-framework-massive-spin-s-model`, `def-nrqm-autonomous-dynamics-framework-evolution`, and `def-nrqm-observables-framework-observable-and-outcome-law`.

Relevant mathematical statements and definitions were opened for: `def-l-p-space-as-a-quotient-by-null-functions`, `def-complex-lp-and-euclidean-test-function-conventions`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, both L2 and inner-product Cauchy–Schwarz suppliers, `def-hilbert-space`, `def-real-and-complex-inner-product-space`, trace-class/trace definitions and trace theorems, `lem-nrqm-composites-rank-one-operator-calculus`, bounded and unbounded adjoints, `def-projection-valued-measure`, `lem-scalar-and-complex-measures-from-a-pvm`, `def-unbounded-integral-against-a-pvm`, bounded Borel and unbounded spectral theorems, `lem-nrqm-composites-density-and-scalar-spectral-probability`, and `thm-positive-square-root`. Measure and integration suppliers included `def-measure`, `def-probability-measure`, monotone and dominated convergence, the indefinite-integral measure theorem, integral order rules, Borel regularity, `thm-borel-products-of-euclidean-spaces-are-euclidean-borel`, product-measure existence, rational-box generation, sigma-finite measure uniqueness, Lebesgue completion and box volumes, simple-function integration and integral additivity. Calculus suppliers included the Laplacian, gradient/divergence definitions and rules, differentiation under the integral, the divergence theorem, mean value, differentiability-to-continuity and Heine–Borel. Probability suppliers included finite-variable and event independence, Bernoulli variables, expectation, variance and Chebyshev; phase averaging used the complex-exponential and roots-of-unity suppliers. I read the full proof of the assigned cross-term lemma and the full proof of the draft density/PVM probability lemma used by P2.

I also opened `def-lebesgue-measure-and-the-lebesgue-sigma-algebra` while checking the flat example's product-measure step. `pthm-em-classical-interference` was read as a contextual check of the experiment's classical-wave caveat; it was not added as a prerequisite or used to support a finding.

For the reported experiment, I opened the full eight-page primary preprint, Bach, Pope, Liou and Batelaan, arXiv:1210.6243v1: Sections 1–4 and figures 1–3. The setup and image processing are on PDF pages 2–3, slit-control and build-up results on pages 3–4, the conclusion on page 4, and figure captions on pages 6–8. Source: <https://arxiv.org/pdf/1210.6243v1>.

## Repairs made

- In `def-nrqm-interference-two-path-preparation-and-detection-model`, I defined the indicator multiplication operators on the stated L2 classes. The old text read a mathematical joint position PVM through P2's scalar spectral clause. The repair separates the mathematical PVM from the detector assignment: finite bins are assigned as P2(iv) effects, and a single Borel bin is the corresponding two-channel effect family. The general trace/PVM calculation supplies the set-function probability measure; P7(iii) still qualifies identification with an actual apparatus. This matches P2(ii)'s scalar scope, P2(iv)'s finite-effect rule, and the assigned density/PVM lemma.

- In `def-nrqm-interference-recorded-detector-and-sampling-model`, I made the boundedness and quadratic-form bounds explicit on the infinite-dimensional state space. The finite-dimensional nonnegative-operator definition is now used only for the pointwise fiber operator (w_a(x)I_{mathbb C^r}); integration gives the bounds for (M_{w_a}) on (H_s). I also replaced the no-record weight on the exceptional null set by a measurable representative in ([0,1]), preserving the same multiplication operator, and defined trials as measurable maps from a stated probability space to the finite discrete outcome space.

- In `pthm-nrqm-interference-continuity-and-local-probability-balance`, I qualified the local squared-amplitude density and current: they are probability density and current when the full-space state is normalized. The theorem now says explicitly that the local PDE is a hypothesis, not an assertion that every such function is a global P4 domain vector. Under the domination hypothesis, the global integral is finite; normalization at one time is then preserved. I updated its proof contract, the assigned scope remark, and the A-page summary so the qualification reaches consumers.

- In `ex-nrqm-interference-ideal-flat-two-path-screen-distribution`, I supplied the missing measure identification needed to apply Tonelli to the R3 state-space integral. New fact L4 proves equality of the Borel Lebesgue measure and the product measure from the box formula, rational-box generation, and sigma-finite uniqueness; it also records the Borel representative and null-cylinder steps for arbitrary L2 input. I added the corresponding mathematical suppliers to this item's `deps` and updated its proof contract. The finite profile computations and their claims are unchanged.

- `research/physics-cm-qm-gr-79-2026-10-11-batch-49.proof-contracts.json` was updated for the changed derivations and new L4 citations. The changed carriers had no `verification.judge` records to remove. The batch manifest was not edited; it remains the dispatch snapshot, while the flat-example carrier now records five additional direct mathematical dependencies.

## Checks

- Reflow and precheck were run for each changed item: both definitions and the remark had no proof-like steps to check; the continuity theorem and flat-amplitude example passed direct precheck.
- `node tools/physics-support/proof-layout.mjs` was run once on all five changed item paths: 5 items, 9 steps, 0 defects.
- No tests or broad repository validators were run.

## Page verdicts

- `qm-interference-and-local-detection`: **Pass after repair.** Its summary now describes continuity as a squared-amplitude balance and carries the normalized-state probability qualification. The remaining claims match the assigned items and their hypotheses.
- `qm-interference-and-local-detection-examples`: **Pass.** The two computations remain conditional model calculations. The experiment summary matches the primary-source report and preserves the source's limitations. No B-page prose was edited.

## Unedited defects and blockers

No confirmed defect remains unedited in the assigned carriers or their inspected dependencies. I found no blocker to the mathematical and source review. The batch manifest remains the dispatch snapshot as noted above; direct-dependency reconciliation belongs to the later routing/metadata stage.

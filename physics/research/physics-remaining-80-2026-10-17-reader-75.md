# Step 3a Reader Report — batch 75

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `75`

## Inventory reviewed

Assigned pages:

- `tgr-mhs03` — `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs03.md`
- `tgr-mhs03-examples` — `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs03-examples.md`

Assigned items:

- `lem-tgr-timelike-scalar-acceleration`
- `lem-tgr-spectral-thermometer`
- `ex-tgr-finite-switch-inertial-rate`

Read-only context pages:

- `qft-mf02` — `library/quantum-field-theory-mathematics/qft-mf02.md`
- `tgr-mhs02` — `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs02.md`
- `tempered-distributions-and-the-fourier-transform` — `library/functional-analysis/tempered-distributions-and-the-fourier-transform.md`

The three current batch-74 draft suppliers were opened with their proofs:
`lem-tgr-positive-damping-boundary`, `lem-tgr-exponential-current`, and
`lem-tgr-thermal-contour-spectrum`. Their accelerated-spectrum conclusions
remain draft inputs, not accepted proof results.

The relevant published mathematical dependency statements/definitions were
opened for the assigned proofs and draft-supplier arguments: `def-countable-choice`,
`def-test-function-space-d-of-an-open-set`, `def-test-function-topology`,
`lem-test-function-lf-topology-universal-property`, `def-tempered-distribution`,
`def-fourier-transform-of-a-tempered-distribution`,
`lem-fourier-transform-on-tempered-distributions-is-well-defined-and-continuous`,
`thm-fourier-inversion-on-schwartz-space`, `def-qft-scalar-mass-shell`,
`def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`,
`lem-qft-smeared-free-scalar`, `lem-qft-segal-weyl-domain`,
`lem-qft-mass-shell-test-range-dense`, `thm-dominated-convergence`,
`thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`,
`thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
`thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms`,
`thm-plancherel`, and
`thm-fourier-transform-is-a-topological-automorphism-of-tempered-distributions`.

For the draft supplier proofs, the additional relevant published statements were
checked in `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`,
`prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`,
`thm-integration-by-parts`, `thm-ftc-second-part`,
`thm-complex-exponential-is-entire-with-derivative-itself`,
`thm-chain-rule-for-total-derivatives`,
`cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`,
`cor-exponential-reciprocal-and-positivity`,
`thm-exponential-beats-every-polynomial`,
`lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
`thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`,
`cor-c-one-change-of-variables-for-l-one-functions`,
`def-real-exponential-function-and-e`, `thm-derivative-of-exponential`,
`cor-exponential-is-a-bijection-onto-positive-reals`, `def-natural-logarithm`,
`thm-logarithm-derivative-and-integral`,
`def-schwartz-space-and-its-seminorms`,
`def-schwartz-topology-and-convergence`,
`thm-fourier-transform-maps-schwartz-space-continuously-to-itself`,
`def-complex-exponential`,
`thm-complex-exponential-addition-and-real-extension`,
`thm-kernel-and-fibres-of-complex-exponential`,
`thm-sine-cosine-zero-sets-and-fundamental-period`,
`def-complex-differentiability-holomorphic-and-entire`,
`thm-termwise-differentiation-of-complex-power-series`,
`cor-cauchy-theorem-for-null-homotopic-loops`,
`def-complex-line-integral-over-a-rectifiable-path`,
`thm-existence-of-complex-line-integrals-on-rectifiable-paths`, and
`thm-fundamental-theorem-for-complex-line-integrals`.

Affected current-run consumers of the clarified first lemma were also checked:
`post-tgr-exponential-current-and-spectral-thermometer` and
`pthm-tgr-free-vacuum-acceleration-temperature`. Their curve and acceleration
uses agree with the clarification; the mathematical formulas and conditional
qualifications are unchanged. The assigned consumer
`lem-tgr-spectral-thermometer` and the example were checked as well.

## Repairs and evidence

- In `lem-tgr-timelike-scalar-acceleration`, stated the hyperbolic-function
  conventions before their first use, identified their derivative identities,
  defined the four-acceleration and its proper-acceleration magnitude, and
  defined “uniformly accelerated” and “stationary in proper time” by their
  exact mathematical properties. The local calculation in proof step 1.2 gives
  `alpha_a(tau)=a`; step 4.1 gives a covariance depending only on
  `s=tau-tau'`.
- In the same item’s proof step 4.1, defined `coth`, the point-mass
  distribution `delta_0`, and distributional differentiation before use.
  Explicitly connected convergence of `q_epsilon` on compact tests to
  convergence of its distributional derivatives. The existing principal-value,
  finite-part, and Schwartz-seminorm estimates then give the claimed tempered
  extension.
- In `lem-tgr-spectral-thermometer`, specified that the time parameter in the
  two-state rate model is measured in seconds, matching the rates’ units
  `seconds^{-1}`; reflected this unit in proof step 4.1.
- Updated the batch-75 proof-contract derivations for steps 1.2 and 4.1 of
  `lem-tgr-timelike-scalar-acceleration`, and step 4.1 of
  `lem-tgr-spectral-thermometer`. Neither edited item had a
  `verification.judge` record.

The covariance and inertial-spectrum calculations are supported by the local
proofs and the exact published definitions/results listed above. The accelerated
spectrum, detailed-balance relation, and dependent accelerated estimates remain
conditional on the actual statements of the two batch-74 draft suppliers;
their Step-1 readiness records were not treated as proof acceptance. The items
make no measured-spectrum or exact detector-probability claim.

## Page verdicts

- `tgr-mhs03`: **Pass after the listed local clarifications.** The constructed
  curve-smearing field, covariance, inertial spectrum, and conditional
  accelerated spectrum are stated with their domains, conventions, and proof
  status. No point-field restriction or empirical observation is asserted.
- `tgr-mhs03-examples`: **Pass.** The example follows from the proved switched
  coefficient estimate, keeps the accelerated result conditional, and does
  not claim a finite-time detector probability or an observed outcome.

## Validation and disposition

For both changed items, reflow completed and precheck passed. The final batched
proof-layout check reported `2 items, 12 steps, 0 defects`. No uneditable defect
or task blocker remains.

Review-order limitation: the assigned carriers were initially opened before
their dependency suppliers. The suppliers and their relevant exact statements
were then reviewed before repairs and verdicts were made.

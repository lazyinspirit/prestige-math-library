# Step 3a reader report — batch 52

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Scope: batch `52` only

## Opened inventory

Assigned pages:

- `library/quantum-field-theory/qft-g01.md`
- `library/quantum-field-theory/qft-g01-examples.md`

Assigned items, read independently:

- `def-qft-qed-physical-gauge-quantities`
- `post-qft-free-photon-model`
- `post-qft-qed-local-coupling`
- `pthm-qft-photon-physical-properties`
- `pthm-qft-photon-local-observables`
- `pthm-qft-qed-classical-coupling`
- `pthm-qft-qed-coulomb-constraints`
- `texp-qft-photon-auxiliary-comparison`
- `texp-qft-qed-neutral-cell`

Required page context opened:

- `library/quantum-field-theory/qft-f01.md`
- `library/quantum-field-theory-mathematics/qft-mg01.md`
- `library/classical-electromagnetism/em-primitives-and-postulates.md`
- `library/classical-electromagnetism/em-potentials-and-gauge.md`

The task manifest listed 28 unique direct item dependencies of the assigned
items. I opened those carriers and the additional mathematical suppliers needed
to check the free-field, locality, gauge-variation, Fourier, and torus claims.
The opened dependency inventory was:

- Spacetime, units, and EM conventions: `def-sr-affine-minkowski-model`,
  `def-inertial-frame-and-inertial-chart`,
  `def-sr-si-units-and-coordinate-conventions`, `def-em-lab-geometry`,
  `def-em-si-conventions`, `def-em-electromagnetic-tensor`,
  `def-em-gauge-transformation`, `post-em-vacuum-maxwell`, and
  `def-lorentz-map-and-lorentz-group`.
- QFT data and operator conventions: `def-qft-framework-units`,
  `def-qft-scalar-mass-shell`, `def-qft-fock-and-test-spaces`,
  `def-qft-dirac-projections`, `lem-qft-dirac-projection-matrices`,
  `def-qft-qed-gauge-data`, `def-qft-photon-transverse-space`,
  `def-qft-finite-bounded-kraus-instrument`,
  `def-projection-valued-measure`,
  `def-symmetric-self-adjoint-and-essentially-self-adjoint`,
  `def-countable-choice`, `def-sine-and-cosine-by-power-series`,
  `def-test-function-space-d-of-an-open-set`,
  `def-test-function-topology`, `def-distribution`,
  `def-real-and-complex-inner-product-space`, `def-hilbert-space`,
  `def-unbounded-linear-operator-domain-and-graph`,
  `def-schwartz-space-and-its-seminorms`, `def-tempered-distribution`,
  `def-separable-space`, and `thm-product-of-countable`.
- Photon and Fock constructions: `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`,
  `lem-nrqm-composites-hilbert-tensor-construction`,
  `lem-nrqm-composites-bounded-tensor-maps`,
  `lem-nrqm-composites-permutation-sector-projections`,
  `lem-qft-l2-product-tensor-identification`, `lem-qft-fock-ccr-car`,
  `lem-qft-second-quantized-spectrum`,
  `lem-qft-photon-null-quotient`,
  `lem-qft-lorentz-boost-rotation-factorization`,
  `lem-qft-photon-covariance-spectrum`,
  `lem-qft-photon-smeared-potential`,
  `lem-qft-photon-local-field-strength`,
  `lem-qft-photon-local-weyl-observables`,
  `lem-qft-fock-one-mode-splitting`,
  `lem-qft-hermite-graph-core-for-position`,
  `thm-nrqm-oscillator-hermite-recurrence`,
  `thm-nrqm-oscillator-hermite-completeness`,
  `lem-qft-segal-weyl-domain`,
  `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`,
  `thm-polar-coordinates-formula-for-lebesgue-measure`,
  `thm-lebesgue-measure-of-a-box-of-every-kind`,
  `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`,
  and `lem-qft-scalar-causal-commutator`.
- Free scalar/Dirac and measurement suppliers: `lem-qft-free-action-equations`,
  `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`,
  `lem-qft-smeared-free-scalar`, `lem-qft-free-dirac-car-locality`,
  `lem-qft-scalar-poincare-action`,
  `post-qft-free-field-model`,
  `post-qft-constructed-model-and-measurement`, and
  `lem-qft-finite-instrument-normalization`.
- Charged-field and torus suppliers: `lem-qft-qed-dirac-gauge-current`,
  `lem-qft-qed-coulomb-constraint`,
  `lem-qft-qed-dirac-first-order-constraints`, and
  `thm-fourier-basis-and-parseval-on-the-n-torus`.

I inspected the batch-52 proof-contract scope and structure and read the
current batch-52 cross-batch dependency record for navigation and status
evidence, not as verdicts.

## Mathematical and physics review

The assigned SI/natural conversions are dimensionally consistent with the
stated $(-,+,+,+)$ metric, length coordinates $x^0=ct$, covariant potential
$A_{{\rm SI},a}=(-\varphi/c,\mathbf A)$, and the QFT gauge-data supplier. The
charge and mass remain model inputs. The current-SI status of $\mu_0$ is
consistent with the official BIPM *SI Brochure*, 9th edition, version 4.01,
§2.3.1: the former ampere definition fixed $\mu_0$ exactly, while the revised
definition fixes $e$ and leaves $\mu_0$ experimentally determined. The exact
defining values of $c$, $h$, and $e$ are also correctly distinguished from
empirical model claims.

The QED gauge signs agree with the declared electron charge convention
$q_{\rm SI}=-e_{\rm SI}$ and with the $(-,+,+,+)$ tensor convention. The
classical Dirac-current and Maxwell variations are local on the stated smooth
domain, use compactly supported variations, and do not imply global PDE
existence or a quantum current operator. The periodic Coulomb argument keeps
the neutral branch separate from the finite-mode commuting-spinor calculation;
the thought experiment correctly rules out a smooth periodic nonzero total
charge under its explicit boundary hypotheses.

The free-photon items use a positive transverse Hilbert space and distinguish
it from the indefinite auxiliary four-vector space. Their state and measurement
language is conditional on the adopted model and supplied instrument. No
assigned item reports an experiment or measured input, so there are no
empirical premises, statistical estimates, or observations to validate in
this batch. The two thought experiments are explicitly hypothetical and do
not claim measurement outcomes.

David Tong's author-hosted QFT Chapter 6 was opened for source context:
§6.1, equations 6.493–6.500, states the source-free Maxwell action, field
strength, and field equations; §6.2.1, equations 6.511–6.518, presents the
transverse Coulomb-gauge modes and projected canonical commutator; and
§6.3.1, equations 6.557–6.560, gives the local Dirac coupling and gauge
transformation. The lecture notes use different metric and unit conventions;
the reviewed items explicitly state their conversion. The source supports the
model formulation and does not replace the local mathematical proofs.

## Findings that remain outside batch 52

1. `lem-qft-photon-covariance-spectrum` is a batch-44 draft supplier directly
   required by `post-qft-free-photon-model` and used downstream by the photon
   theorems. Its current Statement claims a strongly continuous Lorentz
   representation, but neither this item nor its listed Lorentz-group
   definition specifies a topology on $SO^+(1,3)$. The proof's
   $\Lambda\to I$ argument needs one. The exact `def-lorentz-map-and-lorentz-group`
   supplier defines the Lorentz group algebraically. The statement is not
   fully formed until the group topology (for example, the matrix subspace
   topology) is declared and continuity is proved in it. This is reported as
   a fatal `ill-formed` dependency finding.

2. A version of the same batch-44 item observed earlier in this review used
   minus signs for the cone coordinates of $B_{\mathbf n}(\chi)$ in proof
   step 2.1. The exact factorization supplier defines the active boost with
   plus signs. The formulas would be correct for $B_{\mathbf n}(\chi)^{-1}$,
   which should have been stated, or the signs should have been changed. The
   later current carrier uses the plus signs, so this historical issue is not
   attributed to the current bytes. The immediate raw hash after observing
   the earlier text was `f7139245812e07fb16a5c52c68c9e02127ee99970133e16c35c40910f9d9f0d3`;
   it does not match the producer's immutable pre-reader snapshot hash
   `b06c83e95cda870859fcdeeddba7bc0e5facaf8b46fa9a2cad14f18090e73e34`,
   and the current carrier changed again. I therefore cannot bind that
   historical finding to the allowed `pre` or `current` observed-source
   snapshots. The finding is retained with `observed_source: null` and this
   byte limitation. It is a nonfatal `unlicensed-inference` finding.

The covariance item changed several times during this review. Its last
inspected hash was
`0db8fef5867e9e130b2961a2d96004ddc9acdaeb53d6313edec9b5297b70205c`, and
that version still lacked a Lorentz-group topology. I do not submit this as a
`current` observed-source binding because the live carrier changed repeatedly
and no split-time snapshot confirms that these bytes remain current. The
historical sign finding remains distinct from the later carriers.

## Page verdicts

- `qft-g01`: No independent defect found in the page summary. It distinguishes
  adopted physical assumptions from mathematical deductions, carries the
  unresolved suppliers as conditional, and disclaims an interacting continuum
  theory and empirical outcomes. Its covariance-supplier issue is reported
  above.
- `qft-g01-examples`: No defect found. Both entries are explicitly hypothetical;
  the neutral-cell argument is restricted to the smooth periodic Gauss branch
  and is not presented as an observed experiment.

The four required pages listed above were opened as dependency context; they
are not assigned to batch 52, so I issue no owner verdict on those pages.

## Edits and blocker

No assigned item or page prose was edited. No reader-originated item diff,
proof-contract update, reflow, precheck, or proof-layout run was therefore
needed. The batch-44 source update was made by another writer and is not this
reader's repair. There is no process blocker to reporting.

Coverage limitation: the nine assigned items have a declared dependency closure
of 2,037 item IDs including the assigned items. I opened all assigned pages
and items, all 28 unique direct item dependencies, the required page context,
and the additional mathematical suppliers listed above. I did not read every
lower-level item in the full transitive closure, especially the inherited
foundational mathematics chains. This report does not claim independent audit
of those uninspected transitive suppliers.

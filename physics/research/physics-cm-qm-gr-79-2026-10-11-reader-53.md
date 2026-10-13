# Step 3a reader report — batch 53

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch `53`

## Opened inventory

Pages:

- `library/non-relativistic-quantum-mechanics/qm-symmetries-and-conservation.md` (A)
- `library/non-relativistic-quantum-mechanics/qm-symmetries-and-conservation-examples.md` (B)

Assigned items, in the batch's supplier-before-consumer order:

- `lem-nrqm-symmetries-unitary-conjugation-and-commutation-calculus`
- `lem-nrqm-symmetries-spatial-rotation-action`
- `lem-nrqm-symmetries-parity-action`
- `lem-nrqm-symmetries-rotation-generators-on-schwartz-classes`
- `lem-nrqm-symmetries-free-flow-multiplier-form`
- `def-nrqm-symmetries-framework-symmetry-groups-and-conservation`
- `post-nrqm-symmetries-prescribed-external-coupling`
- `pthm-nrqm-symmetries-generator-conservation`
- `pthm-nrqm-symmetries-translation-invariance-and-momentum-conservation`
- `pthm-nrqm-symmetries-rotational-and-parity-invariance`
- `pthm-nrqm-symmetries-gauge-covariance`
- `rem-nrqm-symmetries-scope-and-empirical-status`
- `ex-nrqm-symmetries-parity-selection-rule`
- `ex-nrqm-symmetries-free-translation-and-momentum`
- `cex-nrqm-symmetries-nonconstant-potential-breaks-translation`
- `ex-nrqm-symmetries-central-potential-rotation-invariance`
- `rem-nrqm-symmetries-examples-scope-limits`

I checked the current batch proof-contract records against the current proof
steps and statements. I also inspected the load-bearing framework and supplier
items for the state, observable, autonomous-dynamics, massive-particle and
frame readings; the componentwise kinematics and Fourier representation; the
free bounded-potential operator; the spectral-law conservation result; the
translation-covariance and Lebesgue-point arguments; and the current
magnetic-operator, gauge-domain and transported-propagator supplier chain.
These include:

- `def-nrqm-autonomous-dynamics-framework-evolution`
- `def-nrqm-framework-quantities-and-units`
- `def-nrqm-kinematics-framework-massive-spin-s-model`
- `post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle`
- `def-nrqm-framework-inertial-frames`
- `def-nrqm-framework-newtonian-spacetime`
- `def-nrqm-framework-galilei-transformations`
- `post-nrqm-framework-autonomous-dynamics`
- `post-nrqm-framework-identical-particles-and-spin`
- `def-nrqm-state-geometry-framework-state-space`
- `def-nrqm-observables-framework-observable-and-outcome-law`
- `post-nrqm-framework-state-and-composition`
- `post-nrqm-framework-observable-and-probability`
- `lem-nrqm-kinematics-componentwise-position-and-momentum`
- `lem-nrqm-kinematics-momentum-representation`
- `lem-nrqm-kinematics-component-valued-wavefunction-identifications`
- `lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators`
- `lem-nrqm-framework-ccr-on-the-schwartz-core`
- `thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators`
- `thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws`
- `pthm-nrqm-kinematics-translation-covariance`
- `lem-radial-majorized-kernels-recover-lebesgue-point-values`
- `thm-almost-every-point-is-a-lebesgue-point`
- `def-nrqm-magnetic-and-detection-magnetic-schrodinger-operator`
- `thm-nrqm-magnetic-and-detection-bounded-coefficient-magnetic-operator`
- `thm-nrqm-magnetic-and-detection-gauge-h2-domain-preservation`
- `thm-nrqm-magnetic-and-detection-gauge-transported-propagator`

## Review and edits

The current mathematical lemmas define their spaces and operators, preserve
domains in the conjugation statements, and prove the asserted flow, spectral,
translation, rotation, parity and free-multiplier identities. The translation
theorem's radial-mollifier argument gives the almost-everywhere constant
conclusion under its bounded-measurable hypothesis. The physics theorems state
their postulates and model classes and preserve the distinction between a
conditional model deduction and an empirical identification. The examples
prove only their stated bounded-potential consequences and report no
measurement.

I repaired `rem-nrqm-symmetries-scope-and-empirical-status` in the assigned A
page. Its previous prose incorrectly made every mathematical lemma conditional
on physical postulates and described earlier batch-42 citation locators as if
they were still present. The revised prose distinguishes mathematical
hypotheses from the postulates used by each physical result and records the
historical supplier reports separately from the current source files. The
current magnetic supplier files declare their mathematical dependencies as
`mathematical-premise`; their current locators are Teschl §§6.1/7.2, §7.2
(equations (7.22)-(7.24), Theorem 7.8), and §5.1 (Theorem 5.1), and Binney
and Skinner §§3.3/3.3.1 (equations (3.40)-(3.45)). I checked these locators
against the hosted Teschl and Binney texts. Teschl §6.1 Theorem 6.4 states the
Kato-Rellich result; §7.2 has the free-operator Fourier/domain display; §5.1
Theorem 5.1 gives the unitary group and its domain-qualified generator. Binney
§3.3.1 gives the static gauge phase and covariant-momentum intertwining. The
bounded-coefficient and time-dependent conclusions remain proved locally in
the magnetic suppliers.

No proof contract or verification stamp applies to the repaired remark.
Reflow reported the item unchanged; precheck reported `0 checked, 0 failing`
because the remark has no proof section; the final required layout check
reported `proof-layout: 1 items, 0 steps, 0 defects` for that changed item.

## Defect not edited

`research/physics-cm-qm-gr-79-2026-10-11-batch-53.proof-contracts.json`,
`contracts.lem-nrqm-symmetries-rotation-generators-on-schwartz-classes.boundaries[7]`
(`case: iff-reverse`) says that the item does not assert graph-norm density or
a core property for the rotation generators. The current item Statement (d)
explicitly asserts that the Schwartz class is a graph-norm core for each
generator, and Proof step 2.2 proves that assertion. Its derivation is also
present in the contract, so the contract's boundary note contradicts the
current carrier. I left the contract unchanged because this reader may repair
only assigned item or A-page prose; the owner should update the contract record.

## Page verdicts

- `qm-symmetries-and-conservation` (A): the current item claims and page summary
  are supported by the reviewed arguments, with the proof-contract
  inconsistency above still requiring owner disposition. The stale status
  paragraph was repaired.
- `qm-symmetries-and-conservation-examples` (B): the summaries accurately
  reflect the four worked items, state their bounded-potential and
  nondegeneracy conditions, and make no unsupported empirical claim. No defect
  was found.

Blocker: none to review completion. One uneditable proof-contract inconsistency
remains for routing.

## Coverage limitation

I opened both assigned pages, all 17 assigned items, the batch contracts and
the load-bearing current suppliers listed above. I did not independently read
every foundational item in the full transitive mathematical dependency
closure. The cited mathematical facts are stated explicitly in the assigned
items, and I checked the local arguments against those statements. The
Scholarpedia gauge page could not be opened in full by the source tool (the
request timed out); its locator was not needed to establish the gauge claims,
which are proved in the local operator suppliers and also supported by the
checked Binney text. No conclusion here relies on unreported measurements.

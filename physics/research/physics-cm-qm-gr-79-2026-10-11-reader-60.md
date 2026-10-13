# Reader report — batch 60

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: read-only reader  
Scope: batch `60`

## Opened inventory

Pages opened:

- `library/non-relativistic-quantum-mechanics/qm-driven-dynamics-and-adiabatic-limits.md` (A page, draft)
- `library/non-relativistic-quantum-mechanics/qm-driven-dynamics-and-adiabatic-limits-examples.md` (B page, draft)

All 18 assigned items were opened and read:

- A page: `def-nrqm-driven-dynamics-framework-driven-model`, `def-nrqm-driven-dynamics-framework-interaction-picture`, `lem-nrqm-driven-dynamics-two-level-rotating-frame`, `pthm-nrqm-driven-dynamics-bounded-norm-propagator`, `pthm-nrqm-driven-dynamics-mild-propagator-and-pictures`, `pthm-nrqm-driven-dynamics-first-order-transition-amplitude`, `pthm-nrqm-driven-dynamics-common-domain-propagator`, `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi`, `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error`, `def-nrqm-driven-dynamics-framework-adiabatic-protocol`, `pthm-nrqm-driven-dynamics-finite-adiabatic-leakage`, `pthm-nrqm-driven-dynamics-coulomb-adiabatic-leakage`, `rem-nrqm-driven-dynamics-scope-and-empirical-status`.
- B page: `ex-nrqm-driven-dynamics-circular-drive-exact-populations`, `ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget`, `ex-nrqm-driven-dynamics-ammonia-two-level-resonance`, `ex-nrqm-driven-dynamics-driven-oscillator-coherent-response`, `rem-nrqm-driven-dynamics-examples-scope-limits`.

The batch manifest, both page carriers, the reader brief, and all 13 proof contracts in the batch contract scope were opened. Direct suppliers needed for the claims were inspected, including the P1/P2/P4/P7 postulates; state, observable, unit, and autonomous-evolution definitions; the Pauli-matrix proposition; the density/spectral-probability lemma; the Dyson, bounded-control, common-domain, Rabi, rotating-wave, and adiabatic mathematical results; the Coulomb model, spectrum and kinetic-bound results; and the oscillator model, coherent-state, fluctuation, and explicit driven-propagator results. The relevant published Hilbert-space, operator, inner-product, projection-valued-measure, Sobolev, spectral, calculus, and choice definitions were also opened.

## Review and edits

The model computations and proof arguments I checked are conditional on their declared postulates and mathematical hypotheses. The items distinguish predictions from measurements; this batch reports no experimental observations, empirical premises, or statistical inferences. The algebraic Rabi, Dyson, rotating-wave, oscillator-response, and leakage calculations checked against the opened suppliers are consistent with their displayed hypotheses and bounds.

No content edits were made because this is a read-only assignment. No proof-layout, reflow, or precheck command was run; those commands are only required after an authorized edit.

## Findings not repaired

- `def-nrqm-driven-dynamics-framework-driven-model`, Definition (f), line 131: the frequency parameters are called “dimensionless numbers” and also assigned angular-frequency units `s^-1`. The parameter type needs to distinguish a dimensioned frequency from its numerical value in a specified unit.
- `pthm-nrqm-driven-dynamics-circular-drive-exact-rabi`, Statement (b), line 83: `p_{\downarrow}^{R}(\tau)` is used without a prior definition of this notation. The rotating-frame vector and equality of populations are stated, but the symbol itself is not assigned a precise function before use.
- `pthm-nrqm-driven-dynamics-linear-drive-rotating-wave-error`, Remarks, line 131: the text says the approximation is “controlled only while” `\tau` stays below `|\omega|/\Omega_1^2`. The theorem's explicit bound also depends on `|\Delta|`, and it permits `\Omega_1=0`, when the comparison is exact for all times and this scale is undefined. This scaling needs its assumptions and status as an order-of-magnitude guide stated.
- `ex-nrqm-driven-dynamics-circular-drive-exact-populations`, Example (a)–(b), lines 71–73: after using frequencies in `s^-1`, the formulas are written as `sin^2(t-s)` and the displayed elapsed times have no explicit units or declaration that they are numerical time values in seconds. The dimensionless phase convention should be made explicit at the substitution.
- `ex-nrqm-driven-dynamics-circular-drive-exact-populations`, Example (c), line 75: `\sigma_{\pm}` is used in the statement before it is defined; its definition appears later in Verification, line 95. State the definition before the first use.
- `ex-nrqm-driven-dynamics-linear-drive-rotating-wave-budget`, Example opening, line 63: the phrase “dimensionless ratios `\omega>0`, `\Delta=0`, and `\Omega_1=\omega/50`” labels dimensional frequency parameters as ratios. The dimensionless quantities are frequency ratios such as `\Omega_1/|\omega|` and the elapsed-time products `\omega\tau`.

## Page verdicts

- `qm-driven-dynamics-and-adiabatic-limits` (A page): the conditional mathematical scope and summary match the reviewed claims, but the page has unresolved definition/type notation and the overstrong rotating-wave scale remark listed above. Owner disposition is needed before acceptance.
- `qm-driven-dynamics-and-adiabatic-limits-examples` (B page): the worked numerical substitutions are consistent with their model formulas, but the frequency-ratio wording, dimensional phase presentation, and undefined `\sigma_{\pm}` notation need disposition. Owner disposition is needed before acceptance.

## Blocker and coverage limit

There is no operational blocker. I did not independently re-audit every transitive prerequisite beneath the direct mathematical supplier theorems; the review checked the assigned items against the direct supplier statements and proofs opened above. No claim of empirical verification or full transitive-library certification is made.

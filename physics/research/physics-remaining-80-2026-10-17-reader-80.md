# Step 3a reader report — batch 80

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `80`

## Opened inventory

Dispatch inputs read: `research/physics-remaining-80-2026-10-17-batch-80.pages.json` and `briefs/reader.md`.

Assigned pages:

- `tgr-phs04` — [library/thermodynamics-and-general-relativity/tgr-phs04.md](../library/thermodynamics-and-general-relativity/tgr-phs04.md)
- `tgr-phs04-examples` — [library/thermodynamics-and-general-relativity/tgr-phs04-examples.md](../library/thermodynamics-and-general-relativity/tgr-phs04-examples.md)

Assigned items, read in dependency order:

- `def-tgr-emitter-quasistatic-diagnostic`
- `lem-tgr-emitter-quasistatic-bounds`
- `post-tgr-photon-emitter-and-quasistatic-balance`
- `pthm-tgr-ideal-photon-emission`
- `texp-tgr-half-mass-emitter`

The assigned page prerequisites `tgr-mhs04`, `tgr-phs03`, `tgr-phs01`, and `tgr-phs02` were opened. Direct item suppliers of the assigned carriers were opened: `def-countable-choice`, `prop-tgr-ideal-evaporation-accounting`, `cor-mean-value-theorem`, `def-tgr-framework-units`, `pthm-tgr-kn-family-mechanics`, `post-tgr-thermodynamic-horizon-identification`, `thm-tgr-photon-planck-flux`, `pthm-tgr-area-entropy-calibration`, `prop-tgr-kn-first-law-smarr`, `pthm-tgr-reduced-horizon-temperature`, `lem-tgr-first-law-calibration-freedom`, and `thm-chain-rule-for-total-derivatives`.

For the load-bearing Kerr–Newman and photon-flux interfaces, I also opened `def-emg-xs-si-parameters`, `pthm-emg-xs-kn-horizons`, `lem-tgr-schwarzschild-horizon-data`, `pthm-emg-xs-kn-model`, `thm-emg-xs-kn-extension`, `lem-qsm-fock-occupation-basis-and-car-relations`, `lem-qsm-models-diagonal-occupation-trace`, `lem-tgr-photon-box-shell-summability`, `lem-tgr-planck-integrals`, `lem-tgr-photon-box-riemann-limits`, `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, and `thm-polar-coordinates-formula-for-lebesgue-measure`. I inspected the relevant entries in `research/physics-remaining-80-2026-10-17-batch-80.proof-contracts.json`; those records were treated as context, not as verdicts.

## Review and repair

The definitions, unit assignments, and conditional calculations are consistent with the stated positive-mass Schwarzschild family and fixed asymptotic reference. The postulate is clearly adopted as an ideal reservoir/ray and effective-area mass-balance model. The items distinguish this model from an observed flux, a Hawking-collapse derivation, a time-dependent Einstein solution, an error bound for backreaction, and a universal generalized second law. The Planck and entropy flux uses are conditional on the stated two-polarization Gibbs and isotropic-ray model; no measured result or statistical precision is asserted.

I verified the arithmetic in the ODE solution, entropy differences, diagnostic formula, finite-interval estimate, reference-rescaling comparison, and half-mass substitutions. In particular, the half-mass example gives `tau = 7 t_*/8`, exported energy `c^2 M_0/2`, the stated entropy changes, and `epsilon_qs,max = hbar c/(1920 pi G_N M_0^2)` under its explicit assumptions.

**Repair:** `def-tgr-emitter-quasistatic-diagnostic`, Definition, now defines the diagnostic on the closed interval `[0,tau]`, including `M(tau)=M_min>0`. The prior wording “before the positive-mass cutoff” left the endpoint outside the literal domain, although `lem-tgr-emitter-quasistatic-bounds` and `pthm-tgr-ideal-photon-emission` use the closed interval and attain the bound at the cutoff. I reviewed those consumers and the indirect thought-experiment consumer. In `texp-tgr-half-mass-emitter`, Statement, I replaced “before the cutoff” with an explicit closed-interval statement including the endpoint. I updated the corresponding endpoint evidence and exact definition quotations in the batch proof contract. Neither changed item had a `verification.judge` record.

Validation after the edits:

- `reflow.mts` on both changed items: unchanged, exit 0.
- `precheck.mts` on `def-tgr-emitter-quasistatic-diagnostic`: 0 checked, 0 failing.
- `precheck.mts` on `texp-tgr-half-mass-emitter`: 1 checked, 0 failing.
- `proof-layout.mjs` on both changed items: 2 items, 4 steps, 0 defects.
- The updated batch proof-contract JSON parses successfully.

## Source check

The sources are used as context for the adopted model and its scope, not as proof of the model or evidence of an observation. Wald, §§2–3, distinguishes classical black-hole mechanics from the additional quantum-field assumptions in Hawking radiation ([full review](https://arxiv.org/pdf/gr-qc/9912119), PDF pp. 6–16). Benetti Genolini, §§1.3 and 2.1, treats the mechanical first law and the separate thermodynamic identification ([lecture notes](https://arxiv.org/pdf/2512.24929v1), PDF pp. 14–20). MIT OCW Lecture 20, equations VI.49–VI.61, gives two photon polarizations, the Planck energy density, and the one-sided angular `c/4` flux ([lecture PDF](https://ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/368b2180e6efa1417ab336d79b2df6db_MIT8_333F13_Lec20.pdf), PDF pp. 12–14). The University of Mississippi photon-gas notes state that wall interactions are central to equilibrium and give the photon entropy and energy-density formulas ([two-page note](https://www.phy.olemiss.edu/~luca/phys727/Topics/L18_photons.pdf), pp. 1–2). The batch does not claim those notes establish a physical photon preparation or horizon emission.

## Unedited defects

None confirmed. No proposed withdrawal was present. No published dependency defect was confirmed.

## Page verdicts

- `tgr-phs04`: **pass after the endpoint clarification**. The summary accurately describes a conditional fixed-reference model and explicitly limits its physical interpretation.
- `tgr-phs04-examples`: **pass after the endpoint clarification**. The summary accurately describes the half-mass calculation as a conditional thought experiment, not an observation, and preserves the positive cutoff.

## Blocker and coverage limit

No blocker. I opened the assigned carriers, their direct item suppliers, and the additional supplier interfaces listed above. I did not re-audit every transitive prerequisite proof beneath those supplier items; conclusions that use draft suppliers remain conditional on their exact current statements and proof status.

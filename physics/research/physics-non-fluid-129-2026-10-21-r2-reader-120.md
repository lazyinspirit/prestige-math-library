# Step 3a reader report — batch 120

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: independent reader  
Scope: batch `120`

## Opened inventory

Assigned pages:

- `tgrx-hawking-approximation` (A, draft): opened the complete frontmatter and both listed items.
- `tgrx-hawking-approximation-examples` (B, draft): opened the complete frontmatter and its listed remark.

The A-page prerequisites were opened: `tgrx-collapse-scattering` (draft mathematics page), `tgr-phs02` (published physics page), and `qftx-microlocal-products` (draft mathematics page). The first lists `def-tgrx-exponential-ray-channel` and `prop-tgrx-collapse-channel-spectrum`; the latter two pages identify the published spectral-current postulate and the Hadamard definition used here.

Assigned items, reviewed in supplier-before-consumer order:

1. `lem-tgr-exponential-current` and `lem-tgr-thermal-contour-spectrum` (published mathematical suppliers); `def-qft-fock-and-test-spaces` and `lem-qft-fock-ccr-car` (published mathematical Fock suppliers).
2. `def-tgrx-exponential-ray-channel` and `prop-tgrx-collapse-channel-spectrum` (draft mathematical suppliers in batch 119); `def-qftx-wavefront-hadamard` (draft mathematical supplier in batch 58); and the published postulate `post-tgr-exponential-current-and-spectral-thermometer`.
3. Assigned `post-tgrx-free-collapse-scattering` (postulate), followed by `pthm-tgrx-conditional-hawking-occupation` (physics theorem) and `rem-tgrx-three-black-hole-states` (remark).

For the mathematical proposition I also checked the cited exponential addition, derivative and positivity results, the mean-value theorem, and the nonnegative square-root result. I inspected `post-qft-free-field-model` to check its scope; it specifies an affine Minkowski model and was not used as the curved-background supplier. Selected Green-interface statements were consulted while checking formulation options, but no Green-map result is used in the final repair.

After changing the postulate formulation, I reviewed its current-run dependency-consumer closure: `def-tgrx-hadamard-stress-contract`, `post-tgrx-semiclassical-equation`, `pthm-tgrx-state-difference-stress`, and `ex-tgrx-quasistatic-is-not-backreaction` in batch 121; `post-tgrx-linearized-horizon-model`, `pthm-tgrx-linearized-area-modular-moment`, and `rem-tgrx-qnec-qfc-status` in batch 124; and `op-tgrx-continuum-generalized-entropy` and `rem-tgrx-research-logical-firewall` in batch 129. These items either retain the unchanged field/state interface or explicitly exclude the fixed-background collapse assumptions. No additional consumer repair was needed.

No TikZ or tikzcd appears on either assigned page or in its assigned items. The channel diagram in `prop-tgrx-collapse-channel-spectrum` was checked: its two input modes, passive matrix, and two output modes match the proposition.

## Source review

- Hollands and Wald, [*Quantum fields in curved spacetime*](https://arxiv.org/pdf/1401.2026), §2.3(c), PDF pp. 26–29, equations (51)–(56): the text distinguishes the eternal-Schwarzschild state discussion from the separate collapse result. It defines the Boulware and Unruh state domains and conditions, and states the late-time collapse packet occupation as `|D_l(ν)|^2/(e^(2πν/κ)-1)` for a normalized sharply peaked mode under Hadamard and asymptotic-ground-state hypotheses. This supports the corrected state distinction and the physical context; it does not assert the batch model's operator-norm convergence for every packet in a compact band.
- Jacobson, [*Introduction to Quantum Fields in Curved Spacetime and the Hawking Effect*](https://arxiv.org/pdf/gr-qc/0308048), §§6.2.1–6.2.2, printed pp. 32–38, equations (6.1)–(6.26): the collapse argument uses normalized outgoing packets, an incoming-vacuum condition, the near-horizon exponential relation, and a thermal factor multiplied by the greybody transmission probability. The assigned model makes its stronger packet convergence and channel identification explicit assumptions rather than deductions from this calculation.
- Wald, [*The Thermodynamics of Black Holes*](https://arxiv.org/pdf/gr-qc/9912119), §3, PDF pp. 11–12: the cited discussion records the high-frequency limitation of the fixed-background derivation. It does not establish trans-Planckian robustness.

I retrieved the cited complete PDFs but inspected only the locators relevant to these claims; this was not a full-text audit of each source.

## Repairs and evidence

### `post-tgrx-free-collapse-scattering`

- Added the explicit globally hyperbolic hypothesis. The exact Hadamard supplier `def-qftx-wavefront-hadamard` defines its Lorentzian input as globally hyperbolic, so the previous formulation did not explicitly meet that hypothesis. The manifold, causal-curve convention, and compact-diamond condition remain stated in the postulate.
- Replaced the merely named curved-background Fock setup with explicit model data: a complex one-particle Hilbert space, symmetric Fock sectors and vacuum, creation and annihilation maps, a continuous real test-function map `K` satisfying `K(Pf)=0`, the induced Fock commutator, the test-function topology, and the state functional on the generated field algebra. The choices remain adopted assumptions; no existence or empirical claim was added.
- Defined the asymptotic null boundaries by a smooth conformal completion, fixed the incoming affine parameter and its units, and specified positive frequency by the Fourier factor `e^{-iωv}`. The incoming vacuum condition is written as zero number expectation for each incoming packet.
- Clarified the packet-form domain and made the limit used in the theorem explicit. On each compact positive-frequency band, the adopted input form is `q((f1,f2),(g1,g2)) = ∫ conjugate(f1) g1 n_theta dω`, the passive packet map is `J f = (sqrt(Gamma_l)f, sqrt(1-Gamma_l)f)`, and `B_l,∞(f,g) = ∫ conjugate(f)g Gamma_l n_theta dω`. The operator-norm convergence to this form remains an adopted model premise. `prop-tgrx-collapse-channel-spectrum` gives `S_k(ω)=ω/[2(e^(2πω/k)-1)]`, so the adopted normalization `2S_k(ω)/ω` yields the stated `n_theta`; this does not derive the four-dimensional scattering assumption.
- Updated the batch-120 proof contract's formulation evidence and the theorem's exact supplier excerpts to match the current postulate. The old batch-121 contract excerpt for `def-tgrx-hadamard-stress-contract` remains an exact substring of the repaired postulate. No stale `verification.judge` record existed on the edited item.

### `rem-tgrx-three-black-hole-states`

- Replaced “Unruh or collapse state” with a distinction between the Unruh state on the eternal Schwarzschild extension and the collapse in-state on the dynamical model. The remark now states the relevant domains, mode-vacuum conditions, Hadamard extensions, and the Hartle–Hawking thermal parameter. This follows Hollands–Wald §2.3(c), which explicitly treats the eternal and collapse results as distinct. The unsupported Kerr aside was removed.

## Validation

- Reflow: both edited item paths unchanged.
- Precheck: `post-tgrx-free-collapse-scattering` passed as a nonproof item; `rem-tgrx-three-black-hole-states` reported 0 checked, 0 failing.
- Proof layout: 2 edited items, 0 numbered steps, 0 defects.
- The updated batch-120 proof-contract JSON parses, and the edited dependency excerpts match the current postulate text.

## Page verdicts and remaining defects

- `tgrx-hawking-approximation`: **pass after repair**. The theorem is conditional on the postulate's explicit fixed-background packet model and the draft mathematical spectrum proposition; no four-dimensional scattering theorem or observed temperature is claimed.
- `tgrx-hawking-approximation-examples`: **pass after repair**. The remark now distinguishes the eternal Unruh state from the collapse in-state and remains source-scoped.
- Uneditable confirmed defects: none. No empirical observation or statistical inference is asserted in this batch.
- Blocker: none.

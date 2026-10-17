# Step 3a reader report — batch 61

Run: physics-remaining-80-2026-10-17  
Reader: reader-61

## Opened inventory

Assigned pages:

- library/thermodynamics-and-general-relativity/tgr-c04.md (A)
- library/thermodynamics-and-general-relativity/tgr-c04-examples.md (B)

Assigned items, reviewed in supplier-to-consumer order:

- post-tgr-cattaneo-thermal-model
- post-tgr-radiation-fluid-model
- pthm-tgr-cattaneo-thermal-properties
- pthm-tgr-radiation-local-properties
- ex-tgr-thermal-damped-model

Relevant supplier pages and items opened:

- library/thermodynamics-and-general-relativity/tgr-i01.md and def-tgr-framework-units (draft, batch 54)
- library/thermodynamics-and-general-relativity-mathematics/tgr-mc04.md
- def-tgr-entropy-only-radiation-state (draft, batch 57)
- lem-tgr-cattaneo-stability-causality and lem-tgr-radiation-state-balance (draft, batch 57)
- lem-tgr-constant-linear-energy-causality (draft, batch 56)
- def-countable-choice and def-schwartz-space-and-its-seminorms (published mathematical suppliers)
- Exact mathematical interfaces used by those arguments: thm-gr-nondegenerate-levi-civita-and-tensor-derivative, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-fourier-inversion-on-schwartz-space, thm-fourier-transform-agrees-with-l-one-and-plancherel-transforms, thm-fourier-transform-maps-schwartz-space-continuously-to-itself, and thm-plancherel.

The current batch manifest, current proof contracts, cross-batch dependency records, and dependency inputs were used as navigation and evidence, not as verdicts. Both current assigned pages and the two required supplier pages were opened.

## Review, repair, and evidence

The Cattaneo postulate gives the spacetime, rest observer, spatial domains, field types and regularity, SI units, positive constant parameters, open positive-temperature state neighborhood, model equations, and adopted effective entropy current. Its sources support the restricted Cattaneo context; the item correctly identifies the entropy current and coefficients as adopted model inputs and reports no measurement or microscopic derivation.

The radiation postulate gives the smooth Lorentzian background, positive smooth temperature, unit observer field, state maps, stress tensor and source-free balance. Its no-number branch and free positive coefficient are stated as model choices. It reports no measurement, quantum calibration, or Einstein equation. The radiation balance lemma's hypotheses and proof match the postulate after the explicit conversion U=cu; its frozen linearization and principal spectrum match the consuming theorem.

The Cattaneo identities, symmetrizer, characteristic speeds, global solution interface, finite-propagation argument, and torus temperature estimate were checked in the complete current draft mathematical lemma and its generic constant-coefficient solver. The radiation theorem's entropy identity and frozen sound system were checked against its complete current draft mathematical supplier. The Fourier, divergence, and connection supplier statements used by those proofs have the stated hypotheses and match the local uses. Source passages were also checked at the cited locators:

- Andersson and Comer, [arXiv:0908.1707](https://arxiv.org/pdf/0908.1707), §4, especially equations (4.2)–(4.11), PDF pp. 5–7. The rigid-solid and near-equilibrium reductions yield the constant-parameter Cattaneo form; the footnote on PDF p. 7 says constancy of α/(sT) is only a comparison assumption.
- Lander and Andersson, [arXiv:1804.01520](https://arxiv.org/pdf/1804.01520), §2.1, equations (1)–(3), PDF pp. 1–2. The relaxation term is described phenomenologically and gives the telegrapher equation.
- MIT OCW, [Lecture 21 notes](https://ocw.mit.edu/courses/2-57-nano-to-macro-transport-processes-spring-2012/2e4ecaa5cf55f03bcefbc8ccce79aed6_MIT2_57S12_lec_notes_2004.pdf), PDF pp. 153–154. The notes derive the hyperbolic temperature equation from the Cattaneo law and energy balance and state an experimental-applicability limitation.
- Gourgoulhon, [An Introduction to Relativistic Hydrodynamics](https://arxiv.org/pdf/gr-qc/0603009), §§4.2–4.3 and 5.2–5.3, PDF pp. 14–18. The perfect-fluid stress and its energy projection are relevant context; its thermodynamic discussion includes particle-number variables, a limitation identified in the item.
- Borghini, [Elements of Hydrodynamics](https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf), §§X.3.1–X.3.2 and XI.2, PDF pp. 157–160 and 177–178. The notes give perfect-fluid entropy context and p=ε/3 for an ideal ultrarelativistic gas without conserved charge, with ε∝T^4 and s∝T^3; they do not fix a_R.

One confirmed hypothesis gap was repaired in items/pthm-tgr-cattaneo-thermal-properties.md. The postulate allowed an arbitrary open time interval I, while the theorem defined U0 using θ(0,·) and q(0,·). The theorem now explicitly assumes 0∈I for its global-evolution and forward-time clauses, while retaining the local identities and telegrapher equation for solutions on any open interval. Proof step 2.1 now records that the initial data are defined under this hypothesis.

The matching derivation, endpoint evidence, and risk note were updated in research/physics-remaining-80-2026-10-17-batch-61.proof-contracts.json. The item had no verification.judge record to remove; no audit or judge stamp was added.

The direct consumer ex-tgr-thermal-damped-model was checked after the clarification. It supplies fields on R×T_L^3, so its initial data at zero are defined; its proof uses the unchanged equations, telegrapher equation, and state-domain qualification. No consumer edit was needed. The A-page summary and B-page summary remain accurate.

Required repair checks on the changed item:

- Reflow: unchanged.
- Precheck: PASS (1 checked, 0 failing).
- Proof layout: 1 item, 3 steps, 0 defects.

## Defects not repaired

None identified in the assigned items or page prose.

## Page verdicts

- tgr-c04: pass. Its summary distinguishes the supported-rest Cattaneo branch from the entropy-only radiation branch and preserves their conditional, non-empirical scope. The display title follows the page's lead Cattaneo item; the summary explicitly identifies both branches.
- tgr-c04-examples: pass. Its title and summary match the constructed periodic Cattaneo mode and do not present it as an observation.

## Blocker and coverage limit

No blocker. The published mathematical suppliers were checked at the exact statements and hypotheses used here; their complete transitive proof trees were not re-audited. No assigned experiment or empirical premise required statistical inference review.

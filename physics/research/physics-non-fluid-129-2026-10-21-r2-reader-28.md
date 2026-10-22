# Step 3a reader report — batch 28

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Scope: batch `28`

## Opened inventory

Assigned pages opened: [emg-fx13](../library/einstein-maxwell-models/emg-fx13.md) and [emg-fx13-examples](../library/einstein-maxwell-models/emg-fx13-examples.md). Both have frontmatter-only bodies, as required by the run's compact statement-first layout. I also opened all listed page prerequisites: `emg-g04`, `emg-pcp01`, `emg-mp03`, `emg-fx07`, `emg-fx08`, `emg-fx11`, and `emg-c01`.

All six assigned item carriers were opened: `def-emg-fx-charged-scalar-stress-tensor`, `post-emg-fx-classical-constitutive-adoption`, `post-emg-fx-test-field-regime`, `lem-emg-fx-asymptotic-scalar-energy-flux`, `pthm-emg-fx-conditional-model-flux`, and `texp-emg-fx-test-to-coupled-error`.

The direct mathematical and physical suppliers and the proof-critical draft chain were inspected, including `def-emg-lorentzian-forms`, `post-emg-background-maxwell-test`, `def-emg-xs-rn-data`, `def-emg-xs-ingoing-rn`, `prop-emg-xs-rn-horizon-data`, `def-emg-causal-solution-and-horizon-vocabulary`, `def-emg-explicit-power-regimes`, `def-gr-killing-field`, `def-gr-curvature-tensor-and-derived-tensors`, `def-emg-geometric-scaling`, `thm-emg-field-normalization-equivalence`, `prop-emg-test-field-residual-order`, `lem-emg-lorentz-hodge-calculus`, `lem-gr-metric-divergence-and-density-formula`, `cor-primitives-of-a-continuous-function`, `lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space`, `def-countable-choice`, `def-emg-fx-nonlinear-lagrangian`, `def-emg-fx-continuous-compact-top-form-integral`, `def-emg-fx-wave-currents`, `lem-emg-fx-rn-scalar-wave-potential`, `thm-emg-fx-coupled-potential-energy`, `def-emg-fx-charged-radial-scattering`, `lem-emg-fx-charged-radial-equation`, and `prop-emg-fx-superradiant-wronskian`. I read the batch proof-contract carrier and the batch source-reading record as evidence, then checked their claims against the current carriers and source sections.

## Review, repairs, and evidence

- `def-emg-fx-charged-scalar-stress-tensor`: the supplied smooth one-form, scalar, Lorentzian metric, derivative, tensor type, units, and global-trivialization limitation are explicit. The formula is a mathematical tensor assignment; its physical stress-energy interpretation is kept separate.
- `post-emg-fx-classical-constitutive-adoption`: the text after the displayed invariant pair contained a dangling phrase (“and fixed-bundle convention…”). I removed that fragment; the preceding sentence already gives the bundle context and cites the exact nonlinear-Lagrangian definition. The chosen polynomial, arbitrary parameters, dimensionless domain, and exclusions are unchanged. I refreshed its contract with the complete current supplier Definition and current formulation evidence.
- `post-emg-fx-classical-constitutive-adoption`: I also corrected the Dunne locator. The source's §1.2.4 describes the low-energy operator expansion and derivative operators, while §2.3 contains the derivative expansion and its corrections. The item now lists §§1.1, 1.2.4, 1.3, and 2.3, and still uses these sections only to mark the model's scope. The current source explicitly distinguishes the one-loop QED effective action and its low-energy/weak-field expansions from a phenomenological postulate.
- `post-emg-fx-test-field-regime`: the earlier horizon sentence named a “Killing horizon” but omitted its generator and the conditions used by the exact local definition; its scope also said “no global extension” without distinguishing the auxiliary ingoing geometry from the scalar domain. I now state the ingoing metric used only for horizon terminology, define $H_+:=\{r=r_+\}$ and $\xi=\partial_v$, and give the null, Killing, nonzero, tangent, and normal properties. The physical scope now explicitly says that neither the scalar field nor its equation is continued into that auxiliary model. Its open exterior, source-free Maxwell branch, scalar equation, stress bookkeeping, and no-measurement limits remain unchanged. I refreshed its contract and the exact supplier quote in its direct consumer contract.
- `lem-emg-fx-asymptotic-scalar-energy-flux`: the asymptotic tensor calculation follows from the supplied Coulomb-phase and differentiated asymptotics. The signs of the incoming and reflected fluxes, cancellation of cross terms, factor $2\omega^2|A_{\mathrm{in}}|^2$, and ratio $|R|^2$ are correct. The lemma asserts neither a mode's existence nor an observation.
- `pthm-emg-fx-conditional-model-flux`: the strict band and nonzero transmission give \(|R|^2>1\) from the Wronskian identity, and the flux lemma transfers this to the declared asymptotic stress-flux ratio. The direct consumer uses the fixed exterior gauge and potential difference; it does not depend on the clarified horizon characterization. Its assumption excerpt was refreshed in the proof contract.
- `texp-emg-fx-test-to-coupled-error`: the residual identity is applied only under the stated vacuum and source-free Maxwell premises. The finite-time estimate follows from the separate assumed stability inequality and the uniform residual bound on the compact cylinder. It does not infer a nearby solution, a stability inequality, an infinite-time bound, or empirical backreaction.

The page lists preserve dependency order. The A-page items state no measurements or statistical inference; the B thought experiment clearly separates an adopted Maxwell model, mathematical residual identity, and hypothetical solution-error premise. No TikZ or tikzcd diagram was present in the assigned items or page prose.

## Source review

- Brito, Cardoso, and Pani, [*Superradiance — the 2020 Edition*](https://arxiv.org/html/1501.06570v8), §4.4, equations (4.50)–(4.53), and §4.6.1, equations (4.54)–(4.56): fixed-background scalar separation, real-potential Wronskian relation, and charged RN threshold. The local definition supplies its own gauge and Coulomb phase; the source's simpler infinity phase and numerical amplification figures are not imported.
- Balakumar, [*Aspects of quantum charged scalar field theory in curved spacetime*](https://etheses.whiterose.ac.uk/id/eprint/31282/), Chapter 3, equations (3.1)–(3.11), (3.36)–(3.56), and (3.72)–(3.84): RN gauge, the massless minimally coupled charged-scalar equation, radial reduction, Wronskians, and conditional amplification band. The thesis' quantum-state claims and sign/unit conventions are not imported.
- Sorokin, [*Introductory Notes on Non-linear Electrodynamics and its Applications*](https://arxiv.org/html/2112.12118v3), §3.1 and §3.2, equations (3.4)–(3.7): generic invariant-based Lagrangians and the distinct QED origin of Heisenberg–Euler coefficients. No coefficient or consistency condition is adopted.
- Dunne, [*Heisenberg-Euler Effective Lagrangians: Basics and Extensions*](https://arxiv.org/html/hep-th/0406216v1), §§1.1, 1.2.4, 1.3, and 2.3: constant-background QED effective action, low-energy derivative operators, weak-field expansions, and derivative expansion. These support the scope boundary only; they do not derive the selected polynomial.

No experiment or empirical premise is used in this batch, and I found no fabricated measurement or statistical claim.

## Page verdicts and closeout

- `emg-fx13`: pass after the two repairs to its assigned postulates. The page has the expected frontmatter-only body; its A-items are in dependency order and the listed page prerequisites are consistent with their current page carriers.
- `emg-fx13-examples`: pass. Its thought experiment depends on the Maxwell test-field model and its own explicit residual and stability premises, not on the charged-scalar model or empirical evidence. Its page body is correctly frontmatter-only.

No uneditable defect or blocker remains. Neither repaired postulate had a `verification.judge` record. Reflow reported both files unchanged; precheck passed both as nonproof items; the final proof-layout check reported 2 items, 0 numbered steps, and 0 defects.

## Coverage note

I opened both assigned pages, all six assigned items, every listed page prerequisite, the direct item dependencies, and the additional draft suppliers needed to check the flux and constitutive uses. I inspected the complete relevant source sections listed above. Published mathematical suppliers were checked at their exact relevant statements and hypotheses; I did not re-audit every transitive proof in the broader mathematical prerequisite graph.

# Step 3a reader report — batch 101

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: reader  
Batch: `101`

## Opened inventory

Read the required workspace instructions (`../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, and `../PHYSICS-CONTENT-MODEL.md`), `briefs/reader.md`, and the assigned batch manifest.

Assigned pages:

- `qsmx-entropy-entanglement` — `library/quantum-statistical-mechanics/qsmx-entropy-entanglement.md`
- `qsmx-entropy-entanglement-examples` — `library/quantum-statistical-mechanics/qsmx-entropy-entanglement-examples.md`

Assigned items, reviewed with their direct dependencies:

- `def-qsmx-information-conventions`
- `thm-qsmx-cmi-and-channel-dpi`
- `thm-qsmx-thermal-mutual-information-bound`
- `ex-qsmx-bell-and-classical-information`

Opened mathematical suppliers used by these items:

- `def-qc-density-operator`, `def-it-von-neumann-entropy`, `def-it-finite-dimensional-quantum-relative-entropy`, `def-qc-partial-trace`, `def-qc-first-factor-partial-trace`, and `lem-it-partial-traces-of-a-state-are-states`.
- `def-qsm-dt-channel-definition`, `lem-qsm-matrix-state-calculus`, `lem-qsm-dt-finite-trace-pairing-cyclicity`, and `thm-qsm-dt-choi-kraus`.
- `thm-it-finite-strong-subadditivity`, `thm-it-quantum-relative-entropy-partial-trace-data-processing`, `thm-it-quantum-relative-entropy-joint-convexity`, `lem-it-operator-jensen-negative-log`, `lem-it-relative-modular-representation`, `lem-it-quantum-relative-entropy-support-regularization`, and `lem-it-quantum-relative-entropy-isometric-invariance`.
- `def-axiom-of-choice`, `def-qsm-relative-entropy-domain`, `thm-qsm-finite-entropy-composition`, `thm-qsm-trace-cross-log-inequality`, `thm-nrqm-composites-finite-partial-trace-and-schmidt`, and `thm-qsm-finite-gibbs-variational`.
- `thm-qc-partial-trace-positive-and-trace-preserving` for the state-marginal supplier proof.

Opened prerequisite pages `qsm-states-ensembles`, `qsm-dt-channels`, `quantum-information-measures`, and `quantum-relative-entropy-data-processing-and-strong-subadditivity`. Also read the current-run, off-batch consumer uses in `thm-qsmx-quasifree-entropy` and `thm-qsmx-schmidt-mps-error`; no supplier interface was changed, and these uses require no repair.

## Mathematical and source review

All four assigned items are mathematical-domain claims, not physical observations. The entropy definitions use finite-dimensional density operators, natural logarithms, zero-eigenvalue convention, and ordered partial traces. The Bell and dephased-state computation gives the stated marginals and mutual informations. The conditional-mutual-information inequality is exactly the finite strong-subadditivity inequality for the same ordered triple. The channel claim applies finite CPTP maps to arbitrary positive semidefinite inputs, retaining the support-sensitive extended-real convention; the finite Kraus dilation and partial-trace data-processing proof supply the stated one-sided inequality.

The thermal proof applies the finite Gibbs variational theorem to the product of the two marginals, cancels the two local energy terms using the partial-trace pairing identity, and bounds the remaining boundary expectation by the operator norm. The optional family statement now defines the finite site spaces, interaction supports, crossing-label set, and boundary count before using them. Its additional conclusion is conditional on the specified uniform norm-count bound; no finite-range or further geometric scaling hypothesis is asserted.

Authoritative source checks:

- Watrous, *The Theory of Quantum Information*, Chapter 5, Theorem 5.35 and proof (channel monotonicity for positive semidefinite inputs) and Theorem 5.36 and proof (strong subadditivity), PDF pp. 280–282: [author-hosted chapter PDF](https://cs.uwaterloo.ca/~watrous/TQI/TQI.double.5.pdf). The hypotheses and conclusions match the two parts of `thm-qsmx-cmi-and-channel-dpi`.
- Wilde, *From Classical to Quantum Shannon Theory*, second-edition prepublication v8, Chapter 11, Theorem 11.7.1, Theorem 11.8.1, and Corollary 11.9.1: [arXiv PDF](https://arxiv.org/pdf/1106.1445v8). The chapter supplies matching statements; it says the first two proofs are deferred to Chapter 12, so the source check here is statement/locator confirmation, not a claim to have read those deferred proofs.
- Wolf, Verstraete, Hastings, and Cirac, “Area laws in quantum systems: mutual information and correlations,” arXiv:0704.3906v2, “Area laws for classical and quantum systems,” Eq. (3), PDF p. 1: [arXiv PDF](https://arxiv.org/pdf/0704.3906v2). The passage gives the finite Gibbs variational comparison and boundary expectation inequality; the operator-norm estimate in the local proof is derived directly.
- Naaijkens, *Quantum Spin Systems on Infinite Lattices*, §3.4, “Free energy,” Eq. (3.4.3), PDF p. 78: [arXiv PDF](https://arxiv.org/pdf/1311.2717v2). Its relative-entropy argument and free-energy minimum support the finite Gibbs variational supplier. The local Gibbs theorem supplies the full finite-dimensional proof used here.

## Repairs

- `items/ex-qsmx-bell-and-classical-information.md`: added `def-qc-first-factor-partial-trace` as a mathematical prerequisite and cited its first-factor coordinate formula as `[F4]`. Step 1.1 had cited the second-factor `def-qc-partial-trace` for both `Tr_B` and `Tr_A`; it now cites `[F2]` for the second factor and `[F4]` for the first. The two marginal computations and entropy values are unchanged. Updated the batch proof contract with the new citation, derivation input, and current Step 1.1 text.
- `items/thm-qsmx-cmi-and-channel-dpi.md`: corrected the Stinespring-diagram note from step 2.1 to step 1.2. Step 1.2 constructs the isometry and computes `Tr_E(VXV*) = Phi(X)`; step 2.1 establishes isometric invariance of relative entropy. The diagram itself is mathematically correct and the proof remains independent of it.
- `items/thm-qsmx-thermal-mutual-information-bound.md`: corrected the Wolf et al. source locator to “Area laws for classical and quantum systems,” Eq. (3); the previous locator named the later “Mutual information and correlations” section. Replaced the undefined phrase “number of crossing interaction terms” with an explicit finite-site interaction definition, crossing-label set, and count. The norm-count hypothesis and resulting conditional bound are unchanged. Updated the batch contract’s empty-boundary evidence to use the explicit crossing-label definition.

No stale `verification.judge` record was present on the edited items. Reflow and precheck passed for all three edited items. The final proof-layout check reported 3 items, 11 steps, and 0 defects.

## Page verdicts

- `qsmx-entropy-entanglement`: **pass**. The current page ID, title, category, assigned-item list, and four prerequisite pages match the manifest. Its frontmatter-only body is consistent with the selected compact statement-first run policy.
- `qsmx-entropy-entanglement-examples`: **pass**. The page ID, title, companion relationship, example placement, and prerequisite on the A page match the manifest. Its frontmatter-only body is consistent with the selected run policy.

## Unedited defects and blockers

None identified in the assigned pages, assigned items, or the reviewed direct supplier uses. No blocker remains.

## Coverage note

The assigned pages, all assigned items, their direct logical suppliers, their prerequisite pages, and the cited source passages listed above were opened. I did not independently re-audit the complete transitive prerequisite closure beneath every published mathematical supplier. No experiment or other empirical item is assigned in this batch, so experimental sampling and uncertainty review is not applicable.

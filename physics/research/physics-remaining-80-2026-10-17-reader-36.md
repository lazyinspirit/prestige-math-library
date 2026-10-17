# Reader report — batch 36

Run: `physics-remaining-80-2026-10-17`  
Role: independent reader  
Scope: batch `36`

## Opened inventory

Assigned pages opened:

- `qsm-states-ensembles` — `library/quantum-statistical-mechanics/qsm-states-ensembles.md` (A page)
- `qsm-states-ensembles-examples` — `library/quantum-statistical-mechanics/qsm-states-ensembles-examples.md` (B page)

All 24 assigned items were opened. The A-page items were reviewed before their consumers, followed by the B-page examples.

**A page (21 items):** `def-qsm-density-trace-state`, `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-matrix-cstar-and-state-duality`, `def-qsm-finite-gibbs-purification`, `lem-qsm-matrix-exponential-response`, `lem-qsm-trace-state-calculus`, `post-qsm-normal-measurement-state`, `alg-qsm-finite-gibbs-state-preparation`, `def-qsm-relative-entropy-domain`, `lem-qsm-finite-gibbs-kms`, `thm-qsm-finite-gibbs-variational`, `thm-qsm-finite-gibbs-circuit-marginal-error`, `thm-qsm-trace-cross-log-inequality`, `thm-qsm-finite-entropy-composition`, `thm-qsm-trace-gibbs-variational`, `post-qsm-band-and-grand-preparation`, `post-qsm-thermal-gibbs-preparation`, `pthm-qsm-commuting-grand-response`, `pthm-qsm-equilibrium-unitary-entropy`, `pthm-qsm-gibbs-energy-entropy`, and `pthm-qsm-static-quantum-response`.

**B page (3 items):** `ex-qsm-entanglement-mixture`, `ex-qsm-oscillator-trace-gibbs`, and `ex-qsm-two-level-noncommuting`.

The 44 external item suppliers declared by the batch manifest and the two additional suppliers introduced by repairs were opened: `alg-qa-30-sdp-gibbs-purification`, `cor-bolzano-weierstrass-in-rn`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `cor-finite-dimensional-normed-spaces-are-banach`, `cor-operator-norm-submultiplicative-and-t-star-t-identity`, `def-axiom-of-choice`, `def-c-star-algebra`, `def-countable-choice`, `def-kullback-leibler-divergence`, `def-matrix-units`, `def-nrqm-composites-separable-and-entangled-states`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-qc-density-operator`, `def-qc-partial-trace`, `def-qc-trace-distance`, `def-real-and-complex-inner-product-space`, `def-state-on-a-c-star-algebra`, `def-trace-class-operator`, `def-trace-of-a-trace-class-operator`, `def-unbounded-integral-against-a-pvm`, `lem-countable-iff-surjection-from-n`, `lem-finite-powers-of-countable-sets-are-countable`, `lem-nrqm-composites-density-and-scalar-spectral-probability`, `lem-nrqm-composites-nuclear-bounded-cyclicity`, `lem-nrqm-composites-pure-state-separability-criterion`, `lem-rat-embeds-dense`, `thm-bounded-borel-pvm-integral`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `thm-kullback-leibler-is-nonnegative`, `thm-nrqm-composites-finite-partial-trace-and-schmidt`, `thm-nrqm-fock-and-equilibrium-finite-gibbs-free-energy-minimum`, `thm-orthogonal-decomposition-by-a-closed-subspace`, `thm-pvm-integral-is-a-star-homomorphism`, `thm-qa-30-sdp-gibbs-state-error-cost`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-partial-trace-positive-and-trace-preserving`, `thm-qc-trace-norm-spectral-formula`, `thm-rationals-countable`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-spectral-theorem-for-unbounded-self-adjoint-operators`, `thm-tdmath-general-trace-gibbs-model`, `thm-tdmath-grand-response-covariance`, `thm-tdmath-summable-canonical-differentiation`, `thm-trace-class-is-a-two-sided-banach-operator-ideal`, `thm-trace-is-absolutely-convergent-and-basis-independent`, and `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`.

Additional source checks used Watrous, *The Theory of Quantum Information*, Chapters 2 and 5; Jiang, *Quantum Fisher information for states in exponential form*, arXiv:1310.2687v3, §II Eq. (2.1); and Connes–Marcolli, *Noncommutative Geometry, Quantum Fields and Motives*, Chapter 3 §2.2, Definition 3.6. These were corroboration; the local proofs establish the claims that go beyond those passages.

## Repairs and evidence

1. **`def-qsm-density-trace-state`** — The proof no longer applies a Hilbert-basis trace formula to the positive-eigenvector family, which need not span the kernel. It uses the positive trace-class eigenvalue-sum theorem for normalization and trace-norm tails, then the nuclear bounded-cyclicity supplier for the bounded trace pairing. Added the two exact suppliers to `deps` and roles. The local argument is now in proof steps 1.1–3.1.

2. **`lem-qsm-trace-state-calculus`** — Defined the scalar mean on the finite first-absolute-moment domain and variance on the finite second-moment domain for a nonnegative countably additive Borel probability measure. The second moment implies the first by `|λ| ≤ (1+λ²)/2`; step 1.2 expands the centered square. The state expectation and unbounded observable laws remain scalar spectral integrals, with no unbounded product or cyclic permutation. The added local clauses match `lem-nrqm-composites-density-and-scalar-spectral-probability`.

3. **`def-qsm-relative-entropy-domain`** — Defined support as `(ker ρ)⊥` in both finite and infinite dimensions, named its orthogonal projection, and added `thm-orthogonal-decomposition-by-a-closed-subspace` as the supplier. The finite formula still assigns `+∞` for failed support inclusion; the trace-class clause remains partial and does not interpret `+∞−+∞`. Steps 1.1–2.1 preserve the summability/domain restrictions.

4. **`lem-qsm-matrix-exponential-response`** — Made the finite path domain explicit (`I` open, `H:I→Herm(D)` continuously differentiable, finite control tuple, real parameter), and defined expectation, ordinary variance, and Kubo–Mori covariance. Added the exact equality condition. Steps 4.1–5.1 now establish the logarithmic-mean inequality and show equality exactly when the observable commutes with the Gibbs state. Jiang §II Eq. (2.1) supplies the Duhamel derivative identity; the Hessian and equality arguments are proved locally.

5. **`thm-qsm-finite-entropy-composition`** — Made the finite mixing and product additivity formulas explicit in the statement. The finite-dimensional eigenvalue calculation in the existing proof supplies them; the subadditivity hypothesis excludes zero-dimensional factors.

6. **`post-qsm-band-and-grand-preparation`** — Specified diagonal domains and actions for `H`, `N`, and `K_μ=H−μN`, and required a lower bound plus a finite nonzero grand partition sum before defining the density. Replaced the misleading `K_{β,μ}` notation with the β-independent `K_μ`. Added a local adjoint-domain calculation proving that each real diagonal sequence on its maximal square-summability domain is self-adjoint. The postulate expressly remains an adopted model preparation assumption, not a claim about actual nature. The current nonproof review records the domains, self-adjointness calculation, scope, source status, and non-derivation distinction.

7. **`alg-qsm-finite-gibbs-state-preparation`** — Completed the input contract with a rational shift-confidence target, finite call cap, compatible sampler precision, implementation-error budgets, and access/cost certificates. The procedure passes the shift-confidence target, exposes the explicit `FAIL` branch, and conditions its approximation guarantee on the certified shift event. It composes the declared earlier Gibbs purification procedure; no separate correctness or termination theorem is asserted in its instructions.

8. **`pthm-qsm-commuting-grand-response`** — Defined particle-number variance by the countable probability sum and connected the theorem to the exact diagonal domains in the preparation postulate. The response differentiation remains conditional on the joint-moment envelopes in `thm-tdmath-grand-response-covariance`.

9. **`pthm-qsm-static-quantum-response`** — Defined ordinary variance and stated the equality condition precisely. Step 2.1 uses positivity of the Kubo–Mori eigenbasis terms and injectivity of `E↦e^(−βE)/Z` to transfer the response lemma’s commutation criterion to `[H(h),B]=0`.

10. **`ex-qsm-entanglement-mixture`** — Replaced “witness” with “observable” for the displayed operator, matching its role in the expectation calculation.

11. **`ex-qsm-two-level-noncommuting`** — Defined the ordinary variance and state expectation used in the example, supplied `Z(h)` and `ρ_h`, and stated that `h` has units J. Steps 1.1–2.1 derive the finite partition, response, variance, strict inequality, and zero-gap limit. This remains a model calculation, not an experimental observation.

12. **A-page prose** — Updated the page summary to state the scalar mean/variance domains and formulas, the finite entropy-composition clauses, and the grand-preparation operator domains. Expanded its item-supplier inventory for the added trace and support results. No B-page prose was changed.

The batch proof-contract file was refreshed for affected claims and derivations, including the circuit-marginal consumer of the revised algorithm interface. Four boundary records were anchored to the relevant statement clauses. The strict proof-contract check passes on all 24 assigned items. Its sole warning is the heuristic `shotgun-bracket` on the unchanged `lem-qsm-matrix-state-calculus`: step 1.1 legitimately uses each of its four declared facts for the dense-sphere eigenvalue argument; later steps use that result and the explicitly cited step 2.1 result. No mathematical gap was identified there. No changed item had a `verification.judge` record.

## Page verdicts

- **`qsm-states-ensembles` (A): pass after the prose repair.** The page summary now preserves the actual moment domains, finite entropy formulas, and grand-operator domains. No remaining page-level defect was found.
- **`qsm-states-ensembles-examples` (B): pass.** The three examples were checked against their definitions and suppliers. The entanglement mixture and two-level example repairs are item-level; no B-page prose defect remains.

## Unedited observations and limitations

No uneditable defect was found in the assigned items or in the item dependency closure of batch 36. During the requested downstream consumer review, the selected contract checks for batch 47 (`ex-qsm-dt-qubit-isolated-response`, F2) and batch 64 (`thm-tgr-finite-response-redshift`, F3) reported quote mismatches against `thm-qsm-dt-spectral-fdt`'s current Statement. The current supplier includes intervening time and unit qualifications absent from those stored quotes. That supplier is not in batch 36's dependency closure and was not changed here; these downstream contracts are outside this reader's edit and findings scope. The selected batch 37, 40, 48, and 49 consumer contracts passed. All selected downstream quotes that do cite changed batch-36 interfaces remained valid.

The direct browser retrieval of the cited MIT OpenCourseWare Lecture 21 and 23 PDF URLs returned an internal retrieval error. No experimental result or empirical measurement is used by this batch; the mathematical claims were checked from the local statements and proofs, with the accessible sources above used only where relevant. The page manifest declares additional page-level `requires` relations; this review checked the item-level suppliers needed for the claims and did not independently re-audit every required page's prose.

## Validation and blocker

- Reflow: all 11 changed items were unchanged by reflow.
- Precheck: all 9 proof-bearing changed items passed; the postulate passed nonproof-structure precheck. The algorithm has no Proof section, so precheck reported `0 checked, 0 failing` for it, consistent with the instruction that procedure text is not a proof.
- Required final layout pass: `proof-layout.mjs` processed 11 items and 30 steps with 0 defects.
- Proof contracts: strict check passed for all 24 assigned items; one nonfatal heuristic warning is explained above.
- Citation fidelity: 108 citations checked, 0 missing quotes, 0 widening candidates.
- Blocker: none for the assigned batch.

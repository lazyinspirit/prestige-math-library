# Step 3a reader report — batch 45

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Role: reader  
Batch: `45`

## Verdict

The two assigned pages pass their presentation and inventory review. I repaired the assigned action definition's notation collision and missing dimensional/interface specifications. The three current-run consumers were checked against the repaired definition and require no source changes. The two theorem proofs and the example verification are sound under their stated formal hypotheses. No defect remains unedited and there is no blocker.

## Opened inventory

### Assigned pages and items

- `library/advanced-qft-and-supersymmetry/aqft-susy-effective-theories.md` — draft physics A page; inventory matches the manifest: `def-aqft-susy-wilsonian-action`, `pthm-aqft-wilsonian-superpotential-nonrenormalization`, and `pthm-aqft-supersymmetric-threshold-matching`. The body is empty and `page_layout: compact-v1` is preserved.
- `library/advanced-qft-and-supersymmetry/aqft-susy-effective-theories-examples.md` — draft physics B page; inventory matches the manifest: example `ex-aqft-soft-breaking-effective-operator`. The body is empty and `page_layout: compact-v1` is preserved.
- `items/def-aqft-susy-wilsonian-action.md`
- `items/pthm-aqft-wilsonian-superpotential-nonrenormalization.md`
- `items/pthm-aqft-supersymmetric-threshold-matching.md`
- `items/ex-aqft-soft-breaking-effective-operator.md`

### Direct prerequisite pages

Opened the direct page prerequisites listed by the assigned manifests: `qftx-susy-ward-and-nonrenormalization`, `qftx-susy-extended-actions`, `aqft-eft-matching-running`, `qftx-susy-n1-superspace-and-actions`, `aqft-eft-operators`, `qftx-eft-operator-quotients`, `relations-functions-and-quotients`, and `aqft-susy-math-foundations`. Their page identities, library classifications, statuses, inventories, and direct page ordering context were checked. The mathematical page `relations-functions-and-quotients` was read from its pinned imported carrier at `library/set-theory/relations-functions-and-quotients.md`.

### Claim-relevant item suppliers

Read the suppliers in dependency order, using exact current statements and relevant arguments:

- Superspace and algebra: `def-complex-numbers-and-arithmetic`, `thm-complex-numbers-form-a-field`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `def-qftx-superspace-grassmann-algebra`, `lem-qftx-grassmann-coefficient-calculus`, `def-qftx-super-poincare-algebra-4d`, `lem-qftx-super-poincare-graded-jacobi`, `def-qftx-n1-chiral-superfield`, `lem-qftx-n1-chiral-superspace-identities`, `def-qftx-physical-superspace-normalization`, and `def-axiom-of-choice`.
- Gauge and action data: `def-qftx-nonabelian-gauge-data`, `def-qftx-principal-connection-form`, `def-qftx-associated-covariant-derivative`, `def-qftx-lie-algebra-valued-form-bracket`, `lem-qftx-principal-curvature-cartan-bianchi`, `lem-qftx-su2-compact-nonabelian-invariant-form`, `post-qftx-nonabelian-yang-mills-model`, `def-qftx-n1-vector-superfield`, `def-qftx-nonabelian-brst-complex`, `lem-qftx-nonabelian-brst-nilpotence`, `def-qftx-wilsonian-n1-action-data`, and `pthm-qftx-n1-wilsonian-f-term-nonrenormalization`.
- EFT and amplitude data: `def-reductive-and-linearly-reductive-over-c`, `def-aqft-local-operator-and-dimension`, `lem-aqft-finite-order-local-operator-space-finite-dimensional`, `def-aqft-operator-basis-quotient`, `def-aqft-model-and-scale-data`, `def-aqft-scheme-and-wilson-coefficients`, `def-aqft-threshold-matching-map`, `def-aqft-operator-basis-physical-data`, `def-aqft-lsz-amplitude-data`, and `thm-aqft-field-redefinition-observable-equivalence-at-fixed-order`.
- Additional mathematical context opened for the stated compact-matrix-group interface: `def-countable-choice`, `ex-unitary-and-special-unitary-lie-groups`, `thm-cartans-closed-subgroup-theorem`, `thm-the-tangent-space-at-the-identity-is-a-lie-algebra`, and `thm-differential-of-a-lie-group-homomorphism-is-a-lie-algebra-homomorphism`.

The batch manifest, proof-contract rows, cross-batch dependency data, and batch notes were treated as navigation and evidence, not as scientific verdicts.

## Independent review and repairs

### `def-aqft-susy-wilsonian-action`

The original Definition assigned `M` to spacetime (\mathbb R^{1,3}\) and later reused `M` for the positive heavy threshold mass. The same Definition also gave no mass dimensions for (G_\lambda\), (F_\lambda\), or (\mathcal L_\lambda\), despite fixing the superspace measure and field dimensions. The supplied action-data definition specifies a real local D-term integrand of dimension two, a derivative-free holomorphic F-term integrand of dimension three, and a dimension-four action density. The original wording that (G_\lambda\) itself is gauge invariant was narrower than the supplier's condition that its integrated D-term be gauge invariant under declared boundary conditions.

I repaired the Definition in this batch: the spacetime manifold is now (\mathcal M\), distinct from the threshold mass (M\); the spacetime/superspace measure dimensions, (G_\lambda), (F_\lambda), cutoff scales, loop bookkeeping parameter, and action-density dimensions are explicit; the D-term gauge condition matches the supplied boundary-qualified interface; and the representation-valued prepotential, chiral curvature, trace normalization, finite multi-index jet, quotient spaces, and 1PI graph criterion are stated explicitly.

Evidence: `items/def-qftx-physical-superspace-normalization.md` fixes the raw/physical action brackets and component conversion; `items/def-qftx-wilsonian-n1-action-data.md` gives the local D/F action class, trace normalization, and dimensions; `items/def-aqft-operator-basis-physical-data.md` defines the invariant operator quotient and relation subspace; `items/def-aqft-local-operator-and-dimension.md` defines finite jets; and `items/def-qftx-n1-vector-superfield.md` fixes the represented curvature convention. Martin, §§4.7 and 4.10, gives the chiral action/Euler equations and the dimensions of the superpotential and real D-term data. Manohar, §4, equations (4.2)–(4.4), fixes the dimension-four Lagrangian convention. Burgess, §2.1, defines 1PI graphs as connected graphs not disconnectible by cutting one internal line.

I checked every current-run consumer whose dependency closure reaches this definition: `pthm-aqft-wilsonian-superpotential-nonrenormalization`, `pthm-aqft-supersymmetric-threshold-matching`, and `ex-aqft-soft-breaking-effective-operator`. Their use of (M\) is the threshold mass, their D-term and scale hypotheses remain compatible, and no consumer statement or proof required repair. No other current-run consumer was found. The affected proof-contract citations were refreshed to the exact current Definition; the definition contract's disposition was updated. The item had no `verification.judge` record to remove.

Validation after the final edit:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/def-aqft-susy-wilsonian-action.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-aqft-susy-wilsonian-action.md` — 0 checked, 0 failing; this definition has no numbered proof.
- `node tools/physics-support/proof-layout.mjs items/def-aqft-susy-wilsonian-action.md` — 1 item, 0 steps, 0 defects.

### `pthm-aqft-wilsonian-superpotential-nonrenormalization`

The proof is the exact restriction of the supplied coefficientwise holomorphic-integrand identity to (W=0\), followed by the same fixed finite coordinate projection at both scales. The conclusion is conditional on the stated formal perturbative, spurion, Ward-identity, locality, 1PI, anomaly, and fixed-basis hypotheses; it does not assert an empirical result or continuum theory. The proof is valid.

I checked Weinberg, *Non-Renormalization Theorems in Non-Renormalizable Theories*, equations (1)–(12), printed pp. 2–7, including the full symmetry/spurion and graph-counting argument. Equation (12) implies one (C_2\) vertex in the τ-independent one-loop case, while the following case enumeration appears to print (C_2=2\); the current batch-32 supplier derives the (C_2\) case directly from equation (12), counting one matter vertex and one internal matter line. I found no defect in the assigned theorem's use of that corrected supplier.

### `pthm-aqft-supersymmetric-threshold-matching`

The proof varies the chiral heavy field, transfers the real D-term variation with the fixed physical superspace bracket, and projects the full local Euler equation to derivative degree zero. Every term from the local D-term contains at least one supercovariant derivative and is removed by the declared (\Pi_0\) prescription. The remaining algebraic equation (MX+J=0\) has the unique solution (X=-J/M\); substitution gives (W_L-J^2/(2M)\). This proves only the specified tree-level coefficient, not a complete amplitude match or remainder estimate. The deduction is valid under its formal projection, locality, positivity, boundary, and low-energy premises.

Martin, §4.7, equations (4.7.7)–(4.7.13), supplies the chiral superfield Euler equation; the local proof accounts for the convention change using `def-qftx-physical-superspace-normalization.md`. Manohar, §§5.5–5.7 and §7.2, and Burgess, §4.1.4, support only the general finite-order threshold/matching context; they do not supply the supersymmetric coefficient calculation, which is proved locally here.

### `ex-aqft-soft-breaking-effective-operator`

The threshold substitution (J=g\Phi^2/2\) gives the stated quartic coefficient. With the fixed raw spurion top component (2F_{\mathcal X}\), the physical F bracket contributes one-half of the ordered coefficient, yielding (\kappa F_{\mathcal X}\phi^3/(6\Lambda_{\mathrm{op}})\). The coefficient has mass dimension one, and the fixed nonzero auxiliary background violates the rigid-supersymmetry premise of the nonrenormalization theorem. The example makes no empirical, smallness, or post-breaking protection claim; its verification is valid.

Martin, §5.1, equation (5.1), defines soft scalar cubic terms, and §7.6, equations (7.6.4)–(7.6.5), gives the chiral-spurion substitution. The coefficient extraction and dimension count are local and exact.

## Page verdicts

- `aqft-susy-effective-theories`: pass. Draft physics A-page metadata and item inventory match the batch manifest; no Markdown body/summary is present.
- `aqft-susy-effective-theories-examples`: pass. Draft physics B-page metadata, companion relation, and single example inventory match the batch manifest; no Markdown body/summary is present.

No TikZ/tikzcd diagrams occur in the assigned pages or items, and no diagram is needed for these algebraic deductions. No proof depends on a diagram.

## Unedited defects and blockers

None. All confirmed defects in the assigned in-flight item were repaired. No published or other-batch source required an unresolved repair for the reviewed claims.

## Source locators and coverage limits

- [Weinberg, *Non-Renormalization Theorems in Non-Renormalizable Theories*](https://arxiv.org/pdf/hep-th/9803099v1), equations (1)–(12), printed pp. 2–7.
- [Martin, *A Supersymmetry Primer*, version 7](https://arxiv.org/pdf/hep-ph/9709356v7), §§4.7, 4.10, 5.1, and 7.6; equations (4.7.7)–(4.7.13), (5.1), and (7.6.4)–(7.6.5).
- [Manohar, *Introduction to Effective Field Theories*](https://arxiv.org/pdf/1804.05863), §4, equations (4.2)–(4.4); Chapter 5, §§5.5–5.7; Chapter 7, §7.2.
- [Burgess, *Introduction to Effective Field Theory*](https://arxiv.org/pdf/hep-th/0701053), §2.1 and §4.1.4.
- [Criado and Pérez-Victoria, *Field redefinitions in effective theories at higher orders*](https://arxiv.org/pdf/1811.09413), §2, equations (2.2)–(2.8).

I read the cited passages needed to evaluate the assigned claims, not the unrelated remainder of each source. I checked the exact current statements and arguments of the claim-relevant suppliers but did not independently re-prove every lower-level mathematical theorem beneath them. No empirical or statistical claim is made by this batch.

# Step 3a reader report — batch 64

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: independent reader  
Scope: batch `64` only

## Verdicts

- `qft-pir01` (A page): **Pass after repair.** Its summary now points to the exact finite-coordinate postulate, the state assignment, and the results that support each page-level claim. The physical claims remain fixed-regulator, conditional predictions.
- `qft-pir01-examples` (B page): **Pass.** The page text is unchanged. Its “bosonic” title is supported by the exact finite-coordinate commutation convention on its required A page; its summary makes no observation or continuum claim.

No blocker remains. No uneditable defect was identified.

## Opened inventory

### Assigned pages

- `library/quantum-field-theory/qft-pir01.md`
- `library/quantum-field-theory/qft-pir01-examples.md`

### Assigned items

- `post-qft-regulated-polynomial-model`
- `def-qft-regulated-thermal-parameter`
- `pthm-qft-regulated-interacting-model-evolution`
- `post-qft-regulated-equilibrium-state`
- `pthm-qft-regulated-equilibrium-predictions`
- `pthm-qft-quartic-model-energy-bound`
- `ex-qft-one-mode-interacting-model`
- `rem-qft-formal-renormalization-physical-status`

### Page and item dependencies inspected

Read the prerequisite pages `qft-c01`, `qft-ir01`, and `qft-ir04`, plus the following supplier items before relying on their claims:

- Current-run batch 36: `def-qft-finite-bounded-kraus-instrument`; `lem-qft-finite-instrument-normalization`.
- Current-run batch 40: `def-qft-framework-units`; `post-qft-constructed-model-and-measurement`.
- Current-run batch 59: `def-qft-regulated-polynomial-hamiltonian`; `lem-qft-coercive-polynomial-form-domain`; `lem-qft-cube-poincare-compact-form-inclusion`; `lem-qft-hermite-oscillator-research-supplier`; `lem-qft-polynomial-positive-compact-resolvent`; `thm-qft-self-adjoint-regulated-interaction`; `thm-qft-regulated-global-unitary-evolution`; `thm-qft-regulated-gibbs-trace`; `lem-qft-regulated-ground-variational-bound`.
- Current-run batch 62: `prop-qft-four-dimensional-log-scale-anomaly`.
- Other mathematical suppliers opened at their exact definitions/statements: `def-axiom-of-choice`, `def-countable-choice`, `def-qft-distribution-scaling-degree`, `def-dirac-delta-and-its-derivatives`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`, `thm-cauchy-schwarz-in-an-inner-product-space`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-riesz-representation-for-hilbert-space`, `def-bounded-linear-operator`, `def-compact-linear-operator`, `def-self-adjoint-positive-unitary-and-normal-operator`, `thm-double-orthogonal-complement-is-closure`, `thm-spectral-theorem-for-compact-self-adjoint-operators`, `thm-hilbert-space-fourier-expansion`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `def-unbounded-linear-operator-domain-and-graph`, `def-adjoint-of-a-densely-defined-unbounded-operator`, `def-symmetric-self-adjoint-and-essentially-self-adjoint`, `lem-finite-rank-operators-are-compact`, `thm-norm-limit-of-compact-operators-is-compact`, `lem-nuclear-series-characterizes-trace-norm`, `thm-trace-of-a-positive-operator-is-the-sum-of-its-eigenvalues`, and `thm-trace-is-absolutely-convergent-and-basis-independent`.
- Published oscillator suppliers opened: `thm-nrqm-oscillator-hermite-recurrence`, `thm-nrqm-oscillator-oscillator-scaling-and-exact-realization`, and `thm-nrqm-oscillator-multidimensional-oscillator-completeness`.
- `research/math-imports.json` was consulted to distinguish imported mathematical suppliers from local physics-run items. The root mathematics sources and supplier snapshots were not edited.

The local finite-form, compactness, oscillator, spectral, unitary, Gibbs-trace, variational, instrument-normalization, and distribution-extension arguments were checked against the statements and hypotheses actually used by batch 64.

### Source passages checked

- David Tong, *Quantum Field Theory*, Chapter 3, real-scalar polynomial interaction discussion, equations (3.202)–(3.207): [author-hosted notes](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html). This supports interaction terminology for scalar polynomial models; it does not assert the finite-coordinate construction used here.
- David Tong, *Statistical Physics*, Chapter 1, §1.3.1, equations (1.20)–(1.24): [author-hosted notes](https://www.damtp.cam.ac.uk/user/tong/statphys/statmechhtml/S1.html). These give the canonical inverse-temperature convention, partition function, and density-matrix assignment.
- BIPM, *The International System of Units*, 9th edition, version 4.01, §§2.2 and 2.3.1, printed pp. 15–18: [official SI brochure](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf). It fixes $k_B=1.380649\times10^{-23}\,\mathrm{J\,K^{-1}}$ exactly and confirms that the magnetic constant $\mu_0$ is experimentally determined.

## Repairs and evidence

1. **Finite bosonic model definition** — `items/post-qft-regulated-polynomial-model.md`, `## Postulate`. The title no longer names an undefined bosonic object. The postulate defines $Q_j u=q_j u$ and $P_j u=-i\partial_j u$ on $D_0=C_c^\infty(\mathbb R^N;\mathbb C)$, states their dimensions and exact commutators, and defines “bosonic mode” by those relations. It defines a polynomial interaction term as a monomial of total degree at least three in $V$, and explicitly limits that terminology to this finite-coordinate model. It no longer suggests lattice geometry or a site interpretation that is not supplied. `provenance.statement` was corrected to `ai-altered` because this reader added the local formalization; the source URLs remain.

2. **Boltzmann constant** — `items/def-qft-regulated-thermal-parameter.md`, `## Definition`. The earlier statement treated $k_B$ as a selectable model input. The definition now uses the exact SI value from BIPM and identifies only $T>0$ as a declared model input. The downstream state postulate and Gibbs-prediction theorem were rechecked: their arguments use positivity and the units of $k_BT$, so they remain valid with the exact SI constant. `provenance.statement` was corrected to `ai-altered` for this edit, and the BIPM reference was added.

3. **Interaction titles and scope** — `items/pthm-qft-regulated-interacting-model-evolution.md` and `items/pthm-qft-regulated-equilibrium-predictions.md`. Their hypotheses allow purely quadratic (V), so the former “interacting” titles overstated the claims. The titles now describe the general polynomial-model evolution and finite-regulator Gibbs predictions. Their statements and proofs are otherwise unchanged.

4. **Quartic theorem terminology** — `items/pthm-qft-quartic-model-energy-bound.md`, `## Statement`, `## Facts & Assumptions`, and proof step 1.1. For λ>0 the statement identifies the quartic term as an interaction only in the explicitly defined finite-coordinate sense and disclaims a field-scattering or continuum-field conclusion. Step 1.1 now verifies that classification from the nonzero coefficient and cites the postulate definition. The proof contract’s A2 quote, step 1.1 derivation and inputs, and boundary records were updated.

5. **One-coordinate example** — `items/ex-qft-one-mode-interacting-model.md`, `title`, `physical_scope`, `## Example`, and Verification steps 1.1 and 3.1. The title and scope now describe a one-coordinate positive-quartic model on the full (L^2(\mathbb R,dq;\mathbb C)) space. The malformed sentence that placed a real coordinate “in” (L^2) now distinguishes the variable (q\in\mathbb R) from vectors, which are square-integrable functions modulo almost-everywhere equality. It asserts no field-scattering or continuum conclusion. The proof contract’s F2 quote, step derivations, and boundary records were synchronized.

6. **Distribution-extension remark** — `items/rem-qft-formal-renormalization-physical-status.md`, `title`, `physical_scope`, and `## Physical status`. The title now names the Euclidean extension identity the item actually discusses. The text states directly that the identity neither reports an experimentally measured scale dependence nor chooses an extension for a physical model.

7. **A-page summary** — `library/quantum-field-theory/qft-pir01.md`. The summary now states the finite-coordinate commutation convention and links the exact postulate, state assignment, evolution result, Gibbs-prediction result, and quartic-bound item. The B page was not edited.

The model postulate’s formulation, scope, source, and non-derivation contract records were updated. The equilibrium-state contract was updated for the exact $k_B$ value. Contract A2/A3 citations for the model, measurement, and quartic suppliers were refreshed; the equilibrium-prediction F2 citation was updated; and current derivations and boundary records were synchronized for the evolution theorem, equilibrium theorem, quartic bound, and example. The final contract consistency check found zero derivation or citation mismatches. None of the changed items had a `verification.judge` record to remove. No item or page was self-judged or self-certified.

## Consumer review

- For the finite-coordinate postulate update, checked direct consumers `def-qft-regulated-thermal-parameter`, `pthm-qft-regulated-interacting-model-evolution`, `post-qft-regulated-equilibrium-state`, and `pthm-qft-quartic-model-energy-bound`, plus their assigned downstream consumers `pthm-qft-regulated-equilibrium-predictions` and `ex-qft-one-mode-interacting-model`. Their conclusions use the same $H_N$, coercive polynomial, scale, and form realization; the new terminology does not change their mathematical hypotheses.
- For the exact $k_B$ definition, checked `post-qft-regulated-equilibrium-state` and `pthm-qft-regulated-equilibrium-predictions`. Both require only $k_B>0$, its unit, and $\widehat\beta>0$; no measured temperature or empirical premise is introduced.
- For the quartic theorem clarification, checked its assigned example consumer `ex-qft-one-mode-interacting-model`. The selected λ=1 example satisfies the stated positive-quartic condition.
- The B page remains consistent with its required A-page definition and the revised example wording.

## Validation and status

- Reflow completed with exit code 0 for all seven edited items.
- Final prechecks: `post-qft-regulated-polynomial-model` passed nonproof structure; the three proof items and the example passed direct precheck; the definition and remark had zero proof steps to check and no failures.
- The successful proof-layout result was `7 items, 16 steps, 0 defects`. The first invocation exposed that the environment’s minimal TypeScript fallback cannot resolve the web app’s `@/components` alias. I reran the same scanner with a temporary alias-resolution hook; the items were read-only during the scan, and the temporary file was removed immediately afterward.
- Uneditable defects: none identified.
- Blocker: none.

## Coverage limitation

The exact local mathematical supplier arguments and the published mathematical statements directly used in the reviewed proofs were checked. I did not reread the full Teschl or Laugesen books; I did not rely on those full external texts to close any local proof gap. The external passages actually checked are listed above. The reader review is not a judge stamp or production acceptance.

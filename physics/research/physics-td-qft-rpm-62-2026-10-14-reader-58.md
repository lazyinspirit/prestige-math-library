# Step 3a reader report — batch 58

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: reader  
Date: 2026-10-15

## Opened inventory

Assigned pages:

- `qft-f04` — `library/quantum-field-theory/qft-f04.md`
- `qft-f04-examples` — `library/quantum-field-theory/qft-f04-examples.md`

Assigned items, reviewed independently:

- `pthm-qft-free-observable-domain-limits`
- `pthm-qft-classical-quantum-free-correspondence`
- `cex-qft-point-operator-assumption`

Direct prerequisite items opened for the claims under review:

- `def-qft-framework-units`, `def-countable-choice`
- `post-qft-free-field-model`, `post-qft-constructed-model-and-measurement`
- `def-qft-free-field-observables`
- `lem-qft-free-domain-observables`, `lem-qft-scalar-local-weyl-algebra`, `lem-qft-free-dirac-car-locality`
- `lem-qft-free-action-equations`, `lem-qft-mass-shell-test-restriction-continuity`, `lem-qft-smeared-free-scalar`
- `thm-dominated-convergence`

The assigned statements remain conditional on their named draft suppliers. I checked the direct proof arguments relevant to the assigned conclusions and the exact current supplier interfaces; I did not independently re-prove every transitive mathematical prerequisite behind the QFT-MF01/MF02/MF03 drafts.

## Review and edits

### `pthm-qft-free-observable-domain-limits`

The domain, moment, product-domain, scalar Weyl locality, even Dirac locality, and model-probability claims follow from the cited conditional suppliers and are scoped to the selected representations. The item does not report empirical data or claim that the postulates describe nature.

I repaired the point-smearing proof. The prior step cited `lem-qft-free-domain-observables` as proving Gaussian-profile divergence, but that supplier's current proof constructs specific normalized smooth bump profiles. The repaired steps 1.4–1.6 establish the assigned claim directly for every nonnegative normalized Schwartz scalar/spatial profile: dominated convergence gives the point-evaluation limits; finite shell annuli and the radial shell measure give scalar vacuum-vector norm divergence; spatial (L^2) scaling and the equal-time CAR give Dirac operator-norm divergence. I added length units for the widths and test profiles, and updated the affected proof-contract derivations and supplier note. No `verification.judge` record was present.

### `pthm-qft-classical-quantum-free-correspondence`

No edit. The compact-variation scalar and commuting-spinor equations use the exact hypotheses of `lem-qft-free-action-equations`; the weak scalar and Dirac test equations follow from `lem-qft-mass-shell-test-restriction-continuity`, `lem-qft-smeared-free-scalar`, and the tested Dirac equation in `lem-qft-free-dirac-car-locality`. The conclusion explicitly treats the Fock representations and statistics assignments as adopted model assumptions. No empirical outcome is asserted.

### `cex-qft-point-operator-assumption`

I repaired the title from **“A sharp pointfield is not a Fock-vacuum-domain operator”** to **“The specified Gaussian family has no finite vacuum-vector norm limit.”** The former generalized from failure of one norm-limit construction to a claim about all possible point-field operator meanings. The statement and proof remain restricted to the specified scalar Gaussian family and Fock-vector norm. I defined the normalized Gaussian profile and stated the width in metres. The dependent proof-contract excerpt now matches the revised theorem statement. No `verification.judge` record was present.

The cited source scope supports this narrowing: Tong, *Quantum Field Theory*, Chapter 2 §§2.2–2.3, presents the formal free-scalar modes and vacuum; Fewster and Rejzner, *Algebraic Quantum Field Theory—an introduction*, arXiv:1904.04051v2 §4.2, formulates the free scalar field through test functions and treats sharp-position notation as an operator-valued distribution. These sources do not establish that no distributional or renormalized construction exists.

The current run manifests show `cex-qft-point-operator-assumption` as the only item consumer of the repaired theorem. Its Gaussian case remains a subcase of the theorem's updated nonnegative-Schwartz profile claim; the B-page summary is also limited to that Gaussian case.

### Proof contracts and validation

Updated `research/physics-td-qft-rpm-62-2026-10-14-batch-58.proof-contracts.json` for the repaired point-smearing derivations and the current `pthm` statement excerpt used by the counterexample. Reflow reported both changed items unchanged. Scoped prechecks passed:

- `items/pthm-qft-free-observable-domain-limits.md` — pass
- `items/cex-qft-point-operator-assumption.md` — pass

The prescribed plain `proof-layout` invocation initially failed before checking steps because the fallback TypeScript loader could not resolve the web renderer's `@/components` alias. With a temporary Node resolver implementing the app's `@/*` mapping from `web/tsconfig.json`, the same actual renderer checked both items: **2 items, 10 steps, 0 defects**. The temporary resolver was removed; no application or workflow code was changed.

## Uneditable finding

`lem-qft-free-domain-observables` is the current-run batch-43 mathematical supplier of `pthm-qft-free-observable-domain-limits`. Its Statement says that smooth tests approximating a point mass yield diverging scalar vacuum-vector and spatial Dirac operator norms, without specifying the approximation-family quantifier or exact profiles. Its Proof steps 2.3 and 4.1 construct normalized bump profiles and prove divergence for those profiles. The assigned consumer's Gaussian/nonnegative-Schwartz cases are now proved locally, but the supplier's broader statement remains under-justified and is outside batch-58 edit authority. A precise statement of the constructed profiles or a proof covering the stated class is needed.

## Page verdicts

- `qft-f04`: pass. Its summary accurately describes the selected domains, locality, point-smearing limits, and limits of the selected model; it claims no apparatus or observed outcome.
- `qft-f04-examples`: pass. Its summary limits the counterexample to the normalized Gaussian spacetime-smearing family and excludes broader distributional or renormalized constructions.

## Blocker

No blocker prevented completing batch 58. The fatal uneditable batch-43 dependency finding is reported for routing. The direct renderer failure and successful actual-renderer workaround are recorded above.

# Step 3a reader report — batch 46

- Run: `physics-td-qft-rpm-62-2026-10-14`
- Role: independent reader
- Scope: batch 46 only

## Opened inventory

Assigned pages:

- `library/quantum-field-theory-mathematics/qft-mx02.md`
- `library/quantum-field-theory-mathematics/qft-mx02-examples.md`

Assigned items, reviewed in supplier-to-consumer order:

- `def-qft-example-two-body-phase-space-data`
- `lem-qft-example-spin-trace-completeness`
- `lem-qft-example-two-body-phase-space`
- `thm-qft-example-massive-tree-annihilation`
- `cor-qft-example-scalar-tree-coefficients`
- `lem-qft-example-dirac-pauli-square`
- `ex-qftmath-x04`
- `ex-qftmath-x05`
- `ex-qftmath-x09`

Direct mathematical suppliers opened to verify the claims included `def-countable-choice`, `def-qft-example-data`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `def-qft-dirac-projections`, `lem-qft-dirac-projection-matrices`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `cor-change-of-variables-for-compactly-supported-functions`, `lem-qft-qed-formal-matrix-ward`, `def-qft-qed-formal-ring`, `def-qft-qed-finite-graph-gauge-data`, and `def-qft-qed-gauge-data`. The prerequisite pages `qft-mx01` and `qft-mg03` were opened. I also inspected the direct downstream consumers `pthm-qft-example-dirac-magnetic-benchmark`, `post-qft-example-formal-observable-map`, `pthm-qft-example-formal-scattering-decay`, and `ex-qft-x05` when checking the affected interfaces.

The batch-46 proof-contract inventory was parsed. The contracts for repaired carriers were synchronized to their current statements and proof steps. None of the changed items had a `verification.judge` record.

## Repairs

1. `def-qft-example-two-body-phase-space-data`: defined the positive shell as a Borel subset of energy four-space and defined its shell measure as a pushforward from the spatial energy coordinates. Distinguished the angular measure `Phi_2` on `S^2` from its pushforward under `Psi_2` to the product of two shells. The incoming flux is now defined for vectors lying on the shells corresponding to the declared rest energies. This resolves the earlier use of `dPhi_2` both as a sphere measure and as a shell-pair measure.

2. `lem-qft-example-two-body-phase-space`: stated that `Phi_{2,P}` is a measure on the shell-pair space and, in the center-of-momentum frame, equals `(Psi_2)_# Phi_2`. The total-mass formulas now compare `Phi_{2,P}` of the shell-pair space with `Phi_2(S^2)`. The radial delta evaluation remains explicitly the pushforward under the stated one-dimensional diffeomorphism.

3. `thm-qft-example-massive-tree-annihilation`: explicitly defined lowering of gamma and momentum indices by the algebraic metric `h`, stated the final muon and antimuon labels are distinguishable, and carried the spinor normalization through to the dimensionless-amplitude requirement. Added a finite Borel-frame construction for the angle-dependent rank-two spin projections: select the first independent pair of projection columns on a finite Borel partition and apply Gram–Schmidt. This establishes the measurability required by the coefficient map without changing the finite spin-sum calculation.

4. `lem-qft-example-dirac-pauli-square`: defined the spatial derivative and alternating-symbol conventions, the operators `boldsymbol(pi)^2` and `boldsymbol(Sigma) dot B`, the common invariant test domain, and the units of `B`, `pi`, `H_D`, and `K`. The formal first-order coefficient is now defined by a polynomial identity through degree one, with no operator square-root claim. The direct proof steps were reordered into the canonical phase layout requested by precheck.

5. `ex-qftmath-x09`: corrected the frequency calculation. Dividing the energy gap by `hbar` gives angular frequency `omega_s = e B_0/m`; dividing by `2 pi` gives cyclic frequency `nu_s = e B_0/(2 pi m)`. Both agree with their corresponding comparison coefficients.

The affected definitions and dependent assigned claims were checked together. The outside-batch consumers inspected above remain compatible with these typed clarifications; none required a content repair within this assignment.

## Source and mathematical evidence

The measure change-of-variables argument was checked against the local proof of `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness` and its compact-support Riemann substitution supplier. The sphere-measure identification was checked against the complete local argument in `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`. The finite QED matrix supplier states only coefficientwise formal inversion and covariance under its explicit finite-graph hypotheses; `thm-qft-example-massive-tree-annihilation` uses only that interface and proves its separate current cancellations locally.

I opened David Tong's author-hosted Chapter 3 §§3.6.2–3.6.3 for the standard decay and cross-section normalizations (https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html, especially the decay-rate and differential cross-section sections) and Chapter 6's “Adding Muons” section for the stated electron–positron to muon–antimuon channel (https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html, lines 551–554 in the retrieved page). These sources provide context for the conventional formulas; the full-mass coefficient and its bounds are justified by the local finite-matrix trace and phase-space calculations. I also opened the cited Srednicki draft; section 59 is a spinor-QED tree calculation for electron–positron annihilation to photons, so it supports spinor-QED calculation context rather than the exact muon-pair formula.

## Page verdicts

- `qft-mx02` (A page): accepted after the listed local repairs. Its summary and scope correctly describe the finite formal coefficient calculations and their exclusions.
- `qft-mx02-examples` (B page): accepted. The three specializations are correctly conditional on their suppliers and introduce no empirical claim; the assigned frequency example was corrected as above.

## Validation and blocker

- Reflow completed with no additional formatting changes for the five repaired items.
- Precheck passed for `lem-qft-example-two-body-phase-space`, `thm-qft-example-massive-tree-annihilation`, `lem-qft-example-dirac-pauli-square`, and `ex-qftmath-x09`. The definition `def-qft-example-two-body-phase-space-data` reported `0 checked, 0 failing`.
- The required batched `proof-layout.mjs` command ran once but could not complete: its renderer failed to resolve `@/components` from the sibling `prestige-intelligence/web` checkout (`ERR_MODULE_NOT_FOUND`). The workspace has only the TypeScript fallback loader, which does not resolve that app alias. No proof-layout pass is claimed.
- No mathematical defect remained uneditable within the reviewed assignment. No blocker remains for the content review; the proof-layout renderer configuration remains an environment limitation.

## Coverage note

All assigned pages and items and the direct supplier statements and arguments needed for these claims were inspected. I did not re-audit the complete transitive foundational proof closures of the published mathematical suppliers. The proof-layout renderer could not supply a successful layout result for the reason above.

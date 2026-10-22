# Batch 9 Step-3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`. Group: `batch-9`. Assigned batch: 9. Current drafts remain drafts; this report records independent local review, not judgment, certification or publication.

## Decisions and repairs

Exactly three routed obligations are decided in `research/physics-non-fluid-129-2026-10-21-r2-alpha-batch-9-3a-decisions.json`.

| Obligation | Verdict | Result |
|---|---|---|
| `touched:9:cex-emx-plane-wave-spin-integral-failure` | `amended_repair` | Retain the reader's precise title and synchronize the stale manifest title. |
| `reader:9:1` | `confirmed_nonfatal` | Add the manifest-prescribed A-page prerequisite to the draft examples page. |
| `refuter:9:1` | `confirmed_nonfatal` | Same defect and same repair as `reader:9:1`; explicit same-defect alias. |

The counterexample proves exclusion from the defined finite-energy angular-momentum domain. Its old title claimed nonexistence of a total integral without specifying that domain, exceeding the established conclusion. The current title matches the unchanged Statement refuted, physical scope and proof. The manifest still contained the old title; this adjudication synchronizes that field. The additional manifest change makes the combined disposition `amended_repair`, although the reader's item text is retained exactly. No material proof rewrite or judge-record invalidation occurred.

The examples page omitted `requires`, whereas its batch manifest prescribes `emx-classical-helicity-angular-momentum`. Adding that exact prerequisite repairs reading-order metadata. Both examples already declare and use the actual A-page item suppliers, so no mathematical premise was missing. Inventory, empty page body and draft status are preserved.

Closed canonical ledger rows, both owned at `caught_at_stage: 3a-adjudicate` with repair confidence 1:

- `physics-non-fluid-129-2026-10-21-r2-3a-batch-9-plane-wave-title`.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-9-examples-requires`.

The latter row is referenced once by each identical reader/refuter finding, with `same_defect_as` and concrete shared-evidence explanation on the refuter decision. The immutable scope records identical subject, location, ill-formed classification, nonfatal severity and observed fingerprint `1e5c62491fcb703340314d01f7da368d6ed8d5e2477a38e2c7cb9e826ce18d7b`.

## Historical comparison

The genuine archived counterexample at `research/physics-non-fluid-129-2026-10-21-r2-owner-step2-em9-completeness/context/cex-emx-plane-wave-spin-integral-failure.md` has raw SHA256 `0e632fb667a964cf4957b11e9f6db6fc7cd26d3ce7642219d6aba1a55395a71e`, exactly the native pre-reader snapshot. Its diff against current content contains only the title change and paragraph reflow. The current raw SHA256 is `f96c47ffe841540cc5d2eb8fd6ade83cc34fb4d054b0373bcd720a7ac45eb7cc`, exactly the post-reader snapshot. There is no missing historical preimage or unresolved historical disposition.

Every other assigned item also matches its post-reader raw hash. The page's pre-repair raw SHA256 `c94c259e354005730b0efb519973aa7744eddf3544d8d252abdcbaef1c0b2d4a` matches both native page snapshots; repaired raw SHA256 is `f782596e615f738a7db93d46e2335bf9fe5fe2f55584bcdb29f2858492fa61ee`. Historical snapshots and reader/refuter artifacts were not rewritten.

## Mathematical review, in generated dependency order

All current carriers, their exact direct supplier statements, reader report/findings, refuter findings, manifest, contracts and native pre/post snapshots were opened. The following review was recorded item by item in the task report and in specific complete `risk_review` entries in the owning contract. No substantial missing prerequisite was found.

1. `def-emx-transverse-fourier-field`: smooth amplitudes have compact support away from zero, bilinear transversality and a smooth zero extension. Uniform compact-support difference quotients justify joint differentiation; repeated coordinate integration by parts transfers spatial monomials to spectral derivatives and proves every Schwartz bound, locally uniformly in time. Empty support and zero amplitude give zero fields. The product energy majorant integrates to at most a constant times `(2/3)^3`; nonnegative cube integrals are monotone and have a finite real supremum. Absolute tails imply signed component limits without choice. All four displayed modewise Maxwell residuals and assigned SI units check. The smooth source-free branch is an adopted model, not an empirical conclusion.

2. `def-emx-angular-momentum-split`: two order-four Schwartz bounds with at most one coordinate factor give the product majorant with exponent minus seven in each coordinate, whose cube integral is at most `1/27`. Monotonicity and real completeness yield absolute integrals; the preceding definition's proved tail argument yields signed limits. Fixed origin, orientation and particular Coulomb potential are essential, and all three units are J s. Zero fields are admitted. There is no general gauge-invariance or plane-wave-domain assertion.

3. `pthm-emx-helicity-projection`: direct coordinate algebra verifies that `C=i(n cross)` is Hermitian, `C^2=P_T`, and `P_TC=CP_T=C`; the stated complementary orthogonal projections follow. For each fixed nonzero k, a finite coordinate choice constructs orthonormal u,v and the correctly signed eigenvectors `(u +/- iv)/sqrt(2)`, proving rank one on the two-dimensional complex transverse fibre. No simultaneous choice or global polarization basis is needed. Smoothness off zero, support preservation, scalar-evolution commutation and proper-rotation covariance all follow from the displayed maps. Zero amplitude is preserved; zero frequency and reflections are excluded as stated.

4. `pthm-emx-canonical-kinetic-integral`: independently checked the Levi-Civita contraction, including repeated-index zero cases. Coordinate FTC and Fubini give positive spin and divergence corrections and a negative outward boundary correction. C1 restrictions from a cube neighborhood suffice for the product derivative and face integrals. For packets, the surface bound is `24 R^2 C(1+R)^(-2N+1)`, tending to zero for `N>=3`; divergence vanishes separately. The general sourced identity retains its divergence correction. Positive cube radius excludes degenerate faces; zero fields satisfy both identities. Absolute convergence justifies the conditional whole-space limit.

5. `cex-emx-plane-wave-spin-integral-failure`: positive kappa and E0 give the exact transverse Maxwell amplitudes and dispersion relation used by `pthm-em-plane-wave-maxwell`(b), Proof 3.2. The positive temporal mean alone would not establish infinite instantaneous total energy. Crucially, `pthm-em-wave-energy-average`(e), Proof 3.3 separately integrates full spatial periods and then uses nonnegative cube monotonicity, proving infinite energy at each fixed time. This excludes the explicit wave from the finite-energy packet domain and justifies the repaired title. Zero amplitude and zero frequency are outside this witness's hypotheses.

6. `ex-emx-gauge-boundary-term`: the explicit nonnegative cutoff supplier constructs a smooth function equal to one on the unit ball and zero outside radius two. Thus g is one on the support of f, and a positive-volume cube proves the integral of f is positive. Differentiating the potential gives all four smooth sourced Maxwell equations and source continuity. At time zero, compact support removes the face term; coordinate FTC gives the zero first component and the negative nonzero third component of the charge correction. Three one-dimensional rescalings give the stated factor L cubed. All scales are positive. If the first derivative of f vanished identically, linewise constancy and compact support would contradict f=1 near zero. The calculation uses the general finite-cube identity, preserving the A-page functionals' source-free domain. It supplies no measurements or statistical inference.

Supplier fidelity checks included the exact componentwise Darboux convention; continuous-integrand hypotheses of `thm-continuous-on-a-rectangle-is-riemann-integrable`; nondegenerate rectangles and integrable sections in `thm-riemann-fubini-on-product-rectangles`; differentiability and integrable derivative in `thm-ftc-second-part`; linearity, absolute bound and strictly interior coordinate cuts in `thm-multidimensional-integral-properties`; real Cauchy completeness and LUB conclusion in `thm-reals-cauchy-complete`; and the precise LUB statement/proof of `cor-cauchy-reals-lub-complete`. The remaining algebraic, geometric, SI, Maxwell, potential, plane-wave, source and cutoff supplier IDs and exact excerpts remain in each unchanged `deps` list and contract citations. All 22 direct imported mathematical snapshots matched their receipt hashes. No imported or published supplier was edited or certified. The source definition's optional Lebesgue/Countable-Choice branch is not used by these smooth componentwise Riemann calculations.

## Sources and reading limits

Retrieved and read the relevant contextual passages independently:

- Bliokh et al., [Spin-orbit interactions of light](https://arxiv.org/pdf/1505.02864), section on angular momenta and geometric phases, Box 1 on PDF p.3 and Box 2/discussion on PDF pp.4–5. These distinguish spatial and polarization contributions and discuss transverse polarization. The local proofs establish the exact packet/projector claims; no photon-state or empirical content is imported.
- Beisert, [Elektrodynamik](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), §8.2 equations (8.3), (8.15), (8.18), §8.3 equations (8.19)–(8.20), and §11.1 Fourier-Raum equations (11.5)–(11.10), with their surrounding paragraphs. These supply contextual energy, momentum, angular-momentum and Fourier-mode conventions. In §8.3, “Drehimpuls, Schwerpunkt” is a listed topic under “Symmetrien”; the equation locator is exact. The potential-dependent boundary identity is proved locally.

No complete-book reading is asserted. Published local supplier uses were checked at their exact stated clauses; their bibliography and unrelated conclusions were not independently audited.

## Consumers, diagrams and ownership

Neither the reader title correction nor this adjudication changes an item's Statement/Definition, physical scope or empirical qualification. Item/reference search for the counterexample finds only itself and its frontmatter-only home page, whose placement remains accurate. The page repair restores an already declared manifest prerequisite and changes no inference. No outside consumer requires repair, and the owning cross-batch dependency input remains an empty array. The frontier dependency ledger has the batch-9 review record; stable IDs and inventories are retained, with no proposed withdrawal.

No TikZ/tikzcd diagram occurs in the six assigned items or either page. No diagram is needed to make the component proofs complete. No defective published supplier was found in this scope, so no published-maintenance ledger entry was created. There are no unresolved mathematical, physical or ownership blockers.

## Local checks and handoff

- Initial `node tools/physics-support/risk-report.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-9.proof-contracts.json`: exit 0; six HIGH/CRITICAL items routed. After specific risk reviews, the same command with `--require-reviewed`: exit 0, zero errors, six items.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts` with the six assigned item paths in generated order: exit 0; six checked, zero failing.
- `node tools/physics-support/rendercheck.mjs items/cex-emx-plane-wave-spin-integral-failure.md library/classical-electromagnetism/emx-classical-helicity-angular-momentum-examples.md`: exit 0; both files parse with the real renderer's YAML and KaTeX checks.
- Final `node tools/physics-support/proof-layout.mjs items/cex-emx-plane-wave-spin-integral-failure.md`: exit 0; one item, two steps, zero defects. Reader reflow is preserved; this adjudication makes no additional item edits.
- Focused bookkeeping assertions: exact three owed obligations; six complete risks; all manifest titles match current carriers; all six item raw hashes still match the native post-reader snapshot; all 22 directly used imported mathematical snapshots match import receipt pins.

Changed artifacts: the examples-page frontmatter, counterexample title field in the batch manifest, six contract risk reviews, two appended defect-ledger rows, the frontier-ledger batch record, and this report and decisions file. Reader item repair is retained. No engine gate battery, decision hash stamping, judgment, dispatch, publication or transition was initiated; those remain engine/owner work after this handoff.

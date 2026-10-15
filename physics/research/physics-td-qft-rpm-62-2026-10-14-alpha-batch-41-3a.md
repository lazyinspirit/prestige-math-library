# Batch 41 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`; group: `batch-41`; scope: batch 41 only.

## Definition checkpoint

Reader/refuter findings 1–3 are independently confirmed fatal formulation defects. The original pre/post snapshots are identical: no reader edits were made. Current original units used permeability without giving its unit; natural-field dimensions omitted typed fields and the dimensionless kinetic normalization; gauge derivatives omitted domains and regularity. Repairs retain all numerical formulas and supply these missing data locally. Scalar and Dirac test fields are distinct from operator-valued quantum fields. No empirical value for permeability is asserted.

Sources inspected: Tong §0.1 lines 64–83 and §1.1.1 equation (1.9), https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S0.html and S1.html; BIPM SI Brochure v4.01 §2.3.4, PDF page 129, and permeability derived-unit row, PDF page 136, https://www.bipm.org/utils/common/pdf/si-brochure/SI-Brochure-9.pdf. Field dimensions follow locally from dimensionless four-dimensional kinetic actions; Tong §0.1 alone does not establish them.

Consumer scan: all 26 current item references and the A page were located. Their actual cited uses concern preserved metric, energy/mass units, SI/natural conversions, coupling, finite norm, or pairing; the smooth spatial Dirac consumer independently supplies its spatial domain/core. No outside consumer needs a repair from these clarifications and no consumer interface changes propagate. Exact consumer IDs will be retained below.

Next: finish lower-level risk review, then oscillator repair and its consumers. No imported or published supplier edited.

## Golden-kernel checkpoint

All five steps and every direct supplier statement checked. Fourier normalization, total mass, tail and split estimates, energy Jacobian and bounded-continuous-at-one-point hypotheses are valid, including zero weight/coupling and zero frequency. The CRITICAL risk review is complete in the owning contract. No carrier edit or routed decision owed. Next: oscillator.

## Oscillator checkpoint

Reader/refuter findings 4–5 confirmed fatal. For the original complex test phi=i exp(-x²), the scalar integral is positive real, while the original claimed imaginary part is imaginary and nonzero. Repair uses R_epsilon−iJ_epsilon; bounds prove PV and delta limits for complex tests. Local seminorm topology, continuous complex-linear dual, derivative action, weak convergence and Fourier dual action close the missing definitions without importing new prerequisites. Continuity bounds and integration by parts justify all operations. The ordinary Fourier evaluation is moved from 1.3 to 2.3 after the correlator evaluation, with contract references updated. CRITICAL risk review complete.

Consumers `ex-qftmath-x03` and outside `ex-qft-x03` use only the preserved pointwise C_F and G_R formulas under positive omega and AC_omega; their actual computations remain valid. A page uses the preserved model scope. No consumer repair or further interface propagation needed. Next: finite Dyson and example risk reviews, page disposition and checks.

## Finite-Dyson checkpoint

All eight steps and exact controlled-dynamics statement checked. Supplier hypotheses match finite dimension and bounded norm-continuous self-adjoint generator on [0,T] with AC_omega. Factorial tails, real-parameter coefficient comparison (operator imaginary part), two-state exponential and finite trace obstruction hold, including zero coupling/bound and N=0. No routed finding or carrier edit owed. CRITICAL risk review complete.

## Example checkpoint

All three ex-qftmath-x03 steps checked against repaired oscillator: chosen negative time gives −i/(2 omega) and indicator zero, with seconds units and no spatial/empirical conclusion. HIGH risk review complete. The other owned example ex-qftmath-x01 remains a sound numerical consumer of the preserved finite-model formula; its three steps use positive times and positive rates.

## Final decisions and consumer record

Twelve decisions: reader/refuter findings 1–5 confirmed fatal, findings 6 confirmed nonfatal. Paired observations share one closed defect row per underlying defect (`tdqftrpm62-b41-3a-1` through `-6`). Every completed repair has confidence 1. Scope has no touched/page obligations; none were invented. Pre/post snapshots show identical reader carriers and manifests, so no reader repair was accepted/amended/reverted. No historical preimage disposition or unbound observation is needed.

Definition consumers checked (26): `cor-qft-example-scalar-tree-coefficients`, `def-qft-example-observable-types`, `def-qft-example-two-body-phase-space-data`, `ex-qft-x01`, `ex-qft-x03`, `ex-qft-x04`, `ex-qft-x05`, `ex-qft-x06`, `ex-qft-x09`, `ex-qftmath-x01`, `ex-qftmath-x03`, `ex-qftmath-x06`, `lem-qft-example-cutoff-integrals-and-series`, `lem-qft-example-dirac-pauli-square`, `lem-qft-example-golden-kernel`, `lem-qft-example-oscillator-feynman-prescription`, `lem-qft-example-penning-frequency-invariant`, `lem-qft-example-spin-trace-completeness`, `lem-qft-example-two-body-phase-space`, `pthm-qft-example-dirac-magnetic-benchmark`, `pthm-qft-example-formal-scattering-decay`, `pthm-qft-example-regulated-probability-control`, `pthm-qft-example-soft-coherent-counts`, `thm-qft-example-finite-dyson-unitarity`, `thm-qft-example-massive-tree-annihilation`, `thm-qft-example-soft-current-angular-coherent`. The cited interfaces and actual uses are preserved; none requires a surgical repair. Oscillator consumers are `ex-qftmath-x03`, `ex-qft-x03`, and page `qft-mx01`; they use preserved pointwise formulas/model qualifications. No outside affected consumer, proposed withdrawal, open prerequisite, or published defect was found. Published/imported suppliers stayed read-only. Their exact direct Statements/Definitions were inspected; their transitive proofs were not independently audited.

Source locators additionally checked: Tong [§4.2, equation (4.357)](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S4.html) supplies the first-order kinetic action; [§2.1.1 and §§2.7.1–2.7.2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html) give oscillator, opposite pole prescription and Green-function context; [§3.1.1 and §3.6.1](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html) give ordering and perturbative coefficient context. Srednicki [author-hosted draft](https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), Problem 9.5(b)–(g), printed pp. 84–85/PDF 83–84, was checked as an exercise formulation, not a completed norm-convergence proof. Fitzpatrick [Chapter 13](https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf), §§13.2–13.3 and 13.5, printed pp. 175–181, supplies perturbation context; PDF screenshots failed, but parsed source text was available and read. Other referenced Srednicki chapters were not independently reread; the local mathematical deductions rely on explicit local arguments and declared mathematical suppliers.

## Local validation

Reflow on both changed items: unchanged, exit 0. Initial precheck requested canonical numbering after moving the Fourier calculation; adopted final 3.1/3.2/3.3 numbering and synchronized all derivation/citation references. Final precheck: 2 checked, 0 failing. Initial contract check caught two stale exact convention quotes; refreshed them from the actual Definition. Final strict proof-contract check: 0 errors, 0 warnings, 6/6 checked. Rendercheck on both changed items and A page: exit 0, all mathematics and YAML parsed. Risk report before review routed three CRITICAL and one HIGH item; all four have complete specific risk reviews, and require-reviewed returned 0 errors for 6 items. Mechanical failures were not entered as defects. An attempted --help invocation was unsupported; its render scan was interrupted and is not validation evidence. Final proof-layout result follows below.

No judge, stamp, certification, dispatch or engine gate was initiated. The engine owns hash stamping and final gate acceptance.

Final proof-layout: **2 items, 11 steps, 0 defects**, exit 0. Default invocation and TSX_TSCONFIG_PATH retry failed on renderer module resolution. The successful exact checker invocation used `NODE_OPTIONS=--import=/private/tmp/physics-b41-alias-register.mjs node tools/physics-support/proof-layout.mjs items/def-qft-example-data.md items/lem-qft-example-oscillator-feynman-prescription.md`; the temporary resolver maps the renderer’s existing @/ alias and extensionless relative imports to actual source files. It supplies no component stubs and alters no repository/renderer code. The actual renderer checked every numbered row. Final canonical numbering is Fourier evaluation 3.1, Feynman derivative 3.2 and retarded derivative 3.3. No substantive or local-validation blocker remains; engine acceptance is pending.

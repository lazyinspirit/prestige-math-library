# Batch 110 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-110`.

## Definition (level 0)

`reader:110:2` and `refuter:110:1`: confirmed nonfatal, same inaccurate MIT locator. Independently read MIT Lecture 3 pp. 1–3, equations (3.1)–(3.8): these concern a fluid particle velocity autocorrelation, stationarity and displacement, not a lattice charge-current. Corrected only the source locator. The Definition, its dimensions and all interfaces remain unchanged; no consumer interface propagation. Finite nonzero Hilbert dimension ensures the Gibbs denominator is positive; self-adjoint currents and the real symmetrized trace formula follow by adjoints and trace cyclicity. Open endpoints and periodic bonds are explicit; zero charges and one-dimensional Hilbert spaces give zero currents. No choice axiom or existence of an infinite limit is asserted. Direct supplier `thm-qsm-dt-finite-kubo` was read completely; its finite Gibbs/unitary conventions suffice. Pre/post snapshots agree for all items: the reader made no carrier repairs.

Sources: https://ocw.mit.edu/courses/22-103-microscopic-theory-of-transport-fall-2003/42a7a0ddcb94eb23f6c096ae04da0162_lec3.pdf pp. 1–3; https://arxiv.org/pdf/1910.12155 §2 (local continuity/current context). No claim of reading all source books.

Next: conditional variance theorem and its exact integration suppliers; then finite Mazur and the three-site witness.

## Conditional theorem (level 1)

`reader:110:3`: false positive. Facts [F6] already states linearity, and its supplier `lem-cm-integral-and-ftc-for-continuous-normed-space-curves`, Statement part 3 / Proof 4.2, proves it. Step 3.1's arithmetic is exactly integral(F)=T integral(C)-integral(uC)=integral((T-u)C); omitting a repeated [F6] tag is not an unlicensed inference. No edit is warranted. The current item has the observed argument, not a later repair of that objection.

Read all five proof steps and exact direct suppliers: `def-qsmx-lattice-current-and-limits`, `thm-qsm-dt-variance-green-kubo`, `thm-riemann-fubini-on-product-rectangles`, `thm-substitution`, `thm-ftc-second-part`, `thm-ftc-first-part`, and the norm-Riemann lemma. Their continuity, nondegenerate interval, oriented-endpoint and complete-space hypotheses hold. For T>0 the triangular-cutoff integrability is proved in 2.1, not assumed from mere continuity on each open triangle. The tail estimate tends to zero by choosing R before T. Zero process is allowed; no time-zero division is taken. Quantum premises preserve Countable Choice and exact finite-range/state assumptions. No measured inputs occur. Complete CRITICAL risk review recorded in the owning contract before proceeding to level 2.

## Published covariance finding (separate read-only obligation)

`reader:110:1`, consumer `thm-qsmx-conditional-diffusive-green-kubo` via `thm-qsm-dt-variance-green-kubo`: confirmed nonfatal, disposition nonfatal-recorded. The published `lem-qsm-dt-stationary-variance-integral-identity` Proof 2.1 invokes triangle slicing without a product-region prerequisite. Its declared `def-c-star-algebra` and norm-Riemann lemma do not state Fubini. The current proof and both dependency statements were checked. No published bytes are changed.

Here is a direct closure using those Riemann sums, without a two-dimensional theorem. Fix a,b and T>0, set f(u)=phi(V_a alpha_u(V_b)), a continuous complex function on [-T,T], and h=T/n. The left endpoint sums for X_a and X_b converge in norm; bounded multiplication and phi imply that their product expectation converges to phi(X_a X_b). Stationarity identifies this finite scalar sum as

$$h^2\sum_{i,j=0}^{n-1}f((j-i)h)=hT f(0)+h\sum_{k=1}^{n-1}(T-kh)(f(kh)+f(-kh)).$$

For each difference k there are n-|k| pairs, which proves the finite equality. The right side converges to the sum of the two claimed weighted one-variable integrals: hT f(0) tends to zero, and adding the missing k=0 term to the remaining Riemann sum changes it by only 2hT f(0), also tending to zero. Apply the real norm-Riemann lemma to real and imaginary parts. This proves precisely the published 2.1 identity. Its 3.1 then uses invariance and Hermiticity to give G_ab; 4.1 is positivity of phi((sum c_a X_a)^*(sum c_a X_a)). The consumer only uses a=b and the integrable majorant |G| for dominated convergence, hence the same closure validates its exact use. This is a short omitted argument, not a substantial missing prerequisite or a false identity. Published-owner maintenance remains OPEN to insert this grid argument (or exact Fubini prerequisites); the run-local finding is closed nonfatal-recorded. This report does not certify the supplier's publication/audit status or its full transitive source library.

Next: finite-dimensional Gram projection bound, then charge-scaled witness.

## Finite Mazur theorem (level 2; risk only)

All six numbered steps, spectral dephasing supplier and matrix-state supplier checked. The weighted inner product is second-linear; rho>0 and stationarity are essential. The finite energy-block map is orthogonal even for degenerate energies because rho is block diagonal. Its finite oscillatory estimate proves the observable version directly. The conserved Q_a need not be self-adjoint: Gram positivity and Gc=v still give v*G^{-1}v. J=0 and dimension one are harmless; an independent family cannot exceed the conserved-space dimension. The current Statement explicitly distinguishes arbitrary H from the specialization H=H_L. No edit or extra decision is owed. The projection sketch correctly shows S contained in N and two orthogonal residuals; proof is independent. Complete CRITICAL risk review recorded before proceeding higher. Sirker §2.1 equations (2.9)–(2.14) were inspected as contextual finite spectral/Mazur statements; no thermodynamic interchange is imported.

Next: repair the three-site charge units and synchronize its proof contract.

## Three-site counterexample (level 3)

`reader:110:4` and `refuter:110:2`: confirmed fatal, same defective witness. The original q_j were dimensionless projections and failed the supplier's charge-unit requirement. Repair sets q_j=q_*|j><j| for fixed q_*>0 with charge unit Q, giving J_3=i q_*g(S-S*)/hbar and current eigenvalues 0,+sqrt(3)q_*g/hbar,-sqrt(3)q_*g/hbar. At finite beta>0 the common excited-state Gibbs weight is 1/(exp(3 beta g)+2), so c=6q_*^2 g^2/(hbar^2(exp(3 beta g)+2))>0 has unit Q^2/s^2. Every occurrence in the proof and current contract was synchronized. Repair confidence 1. No prior judge record exists on this item to invalidate. Statement refuted, dependency graph, provenance categories, page inventory and mathematical contract are unchanged. Source/reference consumer search found only the owning B page and this item: no outside consumer requires repair. Prior source-bound boundary worksheets remain explicitly historical rather than being silently rebound to new bytes.

All four steps and the positive ring orientation were checked. The three bonds on L=3 are distinct; site-projection locality holds. S*S=I implies commutation, the two excited eigenstates have opposite current, and c>0 gives C_3(t)=c/3 for every t. Q_1=J_3 is nonzero, hence independent, and yields G=v=c; the per-site factor is 1/3. No zero-temperature or infinite-volume claim is made. Complete HIGH risk review recorded. The diagram requires no edit.

Next: scoped precheck/render/layout, final risk check and decision/ledger closure.

## Checks and handoff

- `node tools/tsx-run.mjs tools/physics-support/precheck.mts items/def-qsmx-lattice-current-and-limits.md items/cex-qsmx-dc-order-of-limits.md`: exit 0; counterexample direct proof passed, 1 checked / 0 failing; definition has no proof and precheck n/a.
- `node tools/physics-support/rendercheck.mjs items/def-qsmx-lattice-current-and-limits.md items/cex-qsmx-dc-order-of-limits.md`: exit 0, both files parse with real YAML/KaTeX.
- `node tools/physics-support/proof-layout.mjs items/def-qsmx-lattice-current-and-limits.md items/cex-qsmx-dc-order-of-limits.md`: run once after final item edits; exit 0, 2 items / 4 steps / 0 defects.
- `node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-110.proof-contracts.json --strict`: exit 0, 5/5 checked, 0 errors / 0 warnings.
- Risk report run first without `--require-reviewed`, then after each ordered review with final `--require-reviewed`: exit 0, all 5 routed, 0 errors, three required reviews complete.
- Finite check executed using Python standard-library matrices at q_*=2, g=3, hbar=1: exact integer-complex [H,J] and all three continuity residuals were zero. Fourier modes numerically gave energies -6,3,3 and currents 0,+10.392304845,-10.392304845, agreeing with the analytically proved spectrum. This spot check is not a substitute for the arbitrary-parameter proof.
- JSON obligation comparison confirms exactly the four reader and two refuter obligations, no touched/page obligations, and all required risk reviews. No historical preimage was reconstructed: immutable reader pre/post fingerprints coincide, and no reader carrier edits occurred. Both same-defect aliases retain their exact observed fingerprints.

The two frontmatter-only pages retain their exact inventories; they add no diagrams or claims. Continuity, Mazur projection and ring diagrams were mathematically checked; no repair/addition is needed. No Statement/Definition, physical public interface, item ID, page placement, manifest dependency, or cross-batch edge changed. Thus the owning pages manifest needs no changed statement mirror. Proof provenance remains ai-generated for the repaired counterexample, with no preexisting judge record. Published/imported content and mathematical originals remain unchanged.

No local substantial prerequisite blocker remains. The published covariance proof omission remains OPEN owner maintenance, with exact current consumer use justified by the complete short grid calculation above. The engine owns decision stamping, independent acceptance and the gate battery; none was initiated here. No claim of full foundational re-audit, unseen source reading, empirical certainty or production acceptance is made.

Current raw item SHA-256 values at handoff (source evidence, not decision stamps):

- `def-qsmx-lattice-current-and-limits`: `b6ff5fe3a4231ae7c1461d32a42cb961c07a9cda315fd692cb0bfe957e5de901`.
- `lem-qsmx-lattice-current-continuity`: `a34e487796124167b18c68eccd8751efd4a3d39a7beb2b98d1a66f523ed1f175`.
- `thm-qsmx-conditional-diffusive-green-kubo`: `45391c2c733c0e656f9bef430ef12c5032707b6b98277f7c6df89567f8c29e2a`.
- `thm-qsmx-finite-mazur-bound`: `cf011a25174c863a4a88bf11c33c63d2da618fce559e1601968fe8a6beeee617`.
- `cex-qsmx-dc-order-of-limits`: `4f14ffd3125c9e312f5d9c7bca14cd04ffbde8f3b54caedb8bdcea306f8c71eb`.

### Ledger validation boundary

Focused validation of the four batch-110 rows using a temporary explicit ledger selection passed: 4 rows checked, 0 errors. Run-wide `node tools/physics-support/defect-ledger.mjs validate --run physics-non-fluid-129-2026-10-21-r2` returned exit 1 with ten taxonomy diagnostics outside this dispatch: batch 14 degree-zero false-positive (`location: proof`), projector-title (`subclass: claim-mismatch`), curvature-radial-sign (`subclass: incorrect-computation`, `location: proof`); batch 28 unsupported-gauge-title and constitutive-fragment (`claim-mismatch`); batch 26 choice-context-edge (`location: deps`); batch 46 marginal-locator, commutator-locator and egorov-page-locator (`subclass: incorrect-citation`). These are mechanical owner/owning-batch routing alerts, not batch-110 scientific defects, and their rows were not edited. No defect row was created for these mechanical failures. This report does not claim a passing run-wide ledger or gate battery.

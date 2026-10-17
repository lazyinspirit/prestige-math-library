# Batch 74 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-74`.

Scope and order follow the current scope JSON and generated order task. Eight findings are routed, with no touched or page obligations. Pre/post reader hashes agree for all four carriers, contracts and manifests; no reader repair was made.

## Level 0 completed

`lem-tgr-positive-damping-boundary`: independently reviewed the current definitions, statement, entire proof and all twelve direct supplier statements. The local Taylor/Laplace proof establishes the compact-test boundary under exactly the positive lower bound and two uniform derivative bounds stated. Checked the Fourier sign, upper pole, fixed-epsilon absolute integrability for Fubini, integrable Fourier majorant, O(epsilon log(1/epsilon)) error, zero test and singleton m=0 case. Countable Choice remains explicit for Lebesgue/product measure. No defect found; no decision owed. The contract records the detailed completed risk review after the initial risk-report (three CRITICAL items, zero errors). Distribution notes are contextual rather than a substitute for this proof.

Next: level 1 current carrier and actual prerequisites, with the paired reader/refuter findings kept together.

## Level 1 completed

`lem-tgr-exponential-current`: reader:74:1 and refuter:74:1 confirmed nonfatal. The supplier states real rational coefficients; i times the indicator of (0,1) cannot be approximated by real steps. Repaired Facts F5 and Proof 1.1 with countable D+iD, separate real/imaginary approximations of error <delta/2, squared-norm error <delta²/2, and norm-decreasing restriction. Reader:74:2 and refuter:74:2 confirmed nonfatal: beta was undefined in Proof 4.1. Replaced its range by 0<epsilon<pi/(2b), proving cosine and tangent positive before the damping application. All nineteen direct prerequisite statements and the Fock definitions were inspected, including h=0, second-linear pairing, sector bounds, support/zero extension and transformed test Jacobians. The Statement, dependency list and manifest interface remain unchanged; proof and fact clarification require no downstream interface propagation. Contract derivations and complete risk review now match the proof. Repair confidence: 1 for each repair. Ledger/decision records will pair each duplicate finding with its single closed defect row.

Next: level 2 contour spectrum and its risk review.

## Level 2 completed

`lem-tgr-thermal-contour-spectrum`: reviewed all proof steps and all 25 exact prerequisite statements/definitions (reusing earlier inspected shared suppliers). Checked the unique interior double pole, absence of a simple-pole term, clockwise -2pi argument sum, positive contour coefficient, vanishing vertical sides and bottom factor -exp(-beta omega). The regularized transform is exp(epsilon omega) times the stated spectrum, continuous at zero with value 2A/b. The p00+p30 seminorm bound and epsilon<=beta/2 domination establish the tempered boundary and Fourier identity, with the correct bilinear pairing and 2pi normalization. Period/reflection and chiral substitution are valid. No separate defect found; no decision owed. Detailed completed risk review recorded before proceeding to level 3.

Next: phase equivalence and stale contract reference in the rescaling example.

## Level 3 completed

`ex-tgr-chiral-generator-rescaling`: reader:74:3 and refuter:74:3 confirmed nonfatal. Defined the arbitrary primed positive energy parameter and omega prime=E prime/sigma; phase preservation now explicitly quantifies over every real u. Verification 2.1 compares coefficients to prove necessity E prime/b=E, and computes sufficiency separately. The covariance/current Jacobians, positive lower-boundary orientation, spectrum factor b and invariant detailed-balance exponent agree with the exact two preceding suppliers. Reader:74:4 and refuter:74:4 confirmed nonfatal: the finite-check reference named nonexistent step 1.2; corrected to steps 1.1 and 2.1. Contract derivations and manifest example text are synchronized. Repair confidence: 1 for each repair.

Consumer check: an exact-ID search across items/ and library/ finds only the example itself and its owning draft B page, `library/thermodynamics-and-general-relativity-mathematics/tgr-mhs02-examples.md`. Read the complete page: its positive-b covariance, energy/frequency and exponent formulas are unchanged and sound. No consumer repair or outside escalation is needed.

## Decisions and ledger

All eight routed findings are `confirmed_nonfatal`, with repair confidence 1. Duplicate reader/refuter findings share exactly one closed `fixed` ledger row per issue, each owned at `3a-adjudicate`:

- `physics-remaining-80-2026-10-17-3a-74-complex-density`: `reader:74:1`, `refuter:74:1`.
- `physics-remaining-80-2026-10-17-3a-74-positive-damping-range`: `reader:74:2`, `refuter:74:2`.
- `physics-remaining-80-2026-10-17-3a-74-phase-equivalence`: `reader:74:3`, `refuter:74:3`.
- `physics-remaining-80-2026-10-17-3a-74-finite-check-step-reference`: `reader:74:4`, `refuter:74:4`.

No touched/page decision is owed; none was added. Neither carrier has a judge record to invalidate. Provenance already records ai-altered statements/proofs and remains accurate. Only the example manifest text needed synchronization; all prerequisite lists, page inventory and identifiers remain unchanged. The frontier dependency ledger records the owned-consumer disposition.

## Sources and limits

Exact local supplier Statements/Definitions were read from `items/<supplier-id>.md`, matching the citation quotes in the batch proof contract. In particular, the rational-box supplier Statement and full Proof establish the real rational-step use; `lem-l-two-with-the-integral-pairing-is-a-hilbert-space` supplies complex completeness; `def-qft-fock-and-test-spaces` gives sector formulas and the second-linear convention; `lem-qft-segal-weyl-domain` includes the zero-field case. Fourier inversion/map, Cauchy contour and complex-line-integral suppliers were checked at their exact Statements/Definitions. Local damping, current and contour arguments were read in full.

The reader report records contextual locators: Grubb sections 3.1–3.2, Kristensen Lecture 3 section 3.2 and Lecture 14 Corollary 14.2, Wald section 3, Crispino–Higuchi–Matsas section III.A.1–2, and Jacobson sections 6.2.1–3. I did not independently retrieve those external context texts in this dispatch and do not claim their full-text review. None supplies a missing proof step: the mathematical estimates and contour identity are proved locally. No new published-supplier defect was confirmed, no published/imported content was edited, and no empirical or statistical assertion is introduced. This review covers the direct supplier interfaces needed here, not a full re-audit of all transitive mathematics.

## Local validation

All commands below exited 0 after final item edits:

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/lem-tgr-exponential-current.md items/ex-tgr-chiral-generator-rescaling.md`: 2 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/lem-tgr-exponential-current.md items/ex-tgr-chiral-generator-rescaling.md`: 2 files, YAML and KaTeX clean.
- `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-74.proof-contracts.json --strict`: 4/4 items checked, 0 errors and 0 warnings.
- Initial `risk-report.mjs` on that contract: three CRITICAL items and one MODERATE item, 0 errors. All three required Alpha risk reviews were completed in dependency order; final invocation with `--require-reviewed`: 4 items, 0 errors.
- `node tools/physics-support/proof-layout.mjs items/lem-tgr-exponential-current.md items/ex-tgr-chiral-generator-rescaling.md`: 2 items, 8 steps, 0 defects. This was run once after final item edits.

No unresolved mathematical blockers, outside consumer repairs, proposed withdrawals or published findings remain in this dispatch. No judge, stamp, certification, scheduling, agent dispatch or engine gate battery was initiated; current decision hashing and gates remain engine-owned.

Final consistency check: the decisions array contains exactly the eight scope obligations, each with exactly one matching fixed ledger row and reciprocal adjudication reference. Both edited carriers are locally authored rather than imported. Raw current item hashes were compared with the immutable pre/post reader snapshots: the two unedited lemmas match exactly; the two repaired carriers differ as expected. Current raw SHA-256 values (recorded as evidence only, without stamping decisions):

- `lem-tgr-positive-damping-boundary`: `ed949a7d51f1b481069e2184bc436219ffa5c6211a66cbc042df143fb2d36f3e`.
- `lem-tgr-exponential-current`: `4a0bc99a85b14fe3d522d0547359578f3d96ebdfde11b74ac200b03d93696e08`.
- `lem-tgr-thermal-contour-spectrum`: `4dbf4c42e8d536057461f1e763c5bd255d33c920c0a04722143c9b5afecdae59`.
- `ex-tgr-chiral-generator-rescaling`: `535cec2f0524adbe4b2329e208f9085e937d58d7e2604c43d66227fd9e43a044`.

# Step 3a adjudication — batch 39

Run: `physics-td-qft-rpm-62-2026-10-14`. Role: alpha. Group: `batch-39`. Scope assignment group `g` remains unchanged.

## Scope and disposition

Read the task, order, scope, reader report/findings, refuter JSON, pre/post snapshots, owning manifest and contracts, both pages and items, and the exact relevant interfaces of all 15 direct theorem dependencies. The sole decision obligation is `page:39:qft-mc04`; no touched-item, reader or refuter obligations exist. The theorem receives the separately required risk review before page disposition. No additional decision was invented for the unchanged theorem or example.

`page:39:qft-mc04`: **accepted_repair**, confidence 1. The reader corrected the summary's draft-supplier count from three to five. The exact draft IDs are `def-qft-fock-and-test-spaces`, `def-qft-scalar-mass-shell`, `lem-qft-smeared-free-scalar`, `lem-qft-scalar-causal-commutator`, and `thm-emg-conformal-einstein-transformation`; the other ten direct suppliers are published. The summary's list of conclusions and limitations agrees with the current theorem. This closes the nonfatal factual-count defect recorded as `physics-td-qft-rpm-62-2026-10-14-3a-batch-39-draft-supplier-count`. No further page edit was necessary.

The current A-page raw hash `f2e377355697a5adb28115aa500ab8fb5ace72debe0c76da5b041ecd5ec63b7b` matches post; pre is `9921e494209308922d2dd18c88d2cd48d7a332229e1d13f04207314d7610ea90`. Both item hashes match pre and post: theorem `f389a96abbbb670e1319f1e5290cdae8deb87dd83332c96e242e3258b1b25589`; example `756e268ee9889f811d4c878c90fb5ac71fb97e245a087128e2d1b60e017e13e9`. Page inventory and order are unchanged. Historical wording is documented by the reader; this review did not recover or claim to reconstruct original raw page bytes.

## Current theorem risk review

`thm-qft-conformal-external-scalar` is CRITICAL (score 12) in the actual risk report. The complete review is recorded in its owning contract. The theorem is mathematical: R4 with prescribed smooth positive dimensionless Omega, signature (-+++), compact smooth complex tests with LF topology, massless shell measure, second-variable-linear Hilbert pairing, and the common invariant finite-particle domain. All prerequisites have mathematical-premise roles. No observations or empirical premises enter the deductions.

Steps 1.1 and 2.1 give the correct scalar-curvature sign and intertwining identity by direct expansion. Step 1.2 controls each fixed-support multiplier seminorm, the continuous Fourier transform, the massless shell norm and finite-sector operators. The radial integral is finite at the omitted apex and at infinity. An arbitrary smooth Omega need not have bounded derivatives at infinity: only bounds on each fixed compact support are used. Annihilation is conjugate-linear in its vector, so its conjugated test makes the field complex-linear. Step 1.3 uses the common invariant domain to reverse polynomial products, obtaining omega(B*B)=norm(B vacuum)^2 and omega(1)=1.

Step 1.4 proves causal reachability in both directions, using the tangent inequality and straight segments, including coincident endpoints. Step 2.2 preserves supports and extends real-test locality to complex tests by bilinearity. Step 2.3 defines the eight-dimensional bidistribution through an injective Fourier frequency restriction and the integrable massless shell bound; each curved-volume factor Omega^4 combined with scalar weight Omega^-1 yields the required test multiplier Omega^3. Step 2.4 has vanishing boundary terms and a real potential, giving formal symmetry. Step 3.1 has Omega^3 P_g f=Box_eta(Omega f); integration by parts gives the zero massless-shell multiplier for both test and conjugate test.

Checked empty-support/zero tests, the vacuum sector N=0, Omega=1, every constant b>0, the excluded Omega=0 case, apex integrability, both causal-reachability directions, and strict spacelike versus null separation. No full Choice or uniqueness of curved states is inferred. The constant-factor example correctly gives b^-2 for P_g and the relative kernel, b^3 for the field test, b^4 for each volume, and b^6 for the double covariance. The B-page remains sound.

## Suppliers and sources

Opened every cited direct dependency's actual Definition or Statement: the countable-choice, fixed-support, curvature, Fock/test, shell, Schwartz and LF definitions; bounded tensor-map and permutation-projection lemmas; the LF universal-property lemma; the free-scalar and causal-commutator lemmas; and the conformal-curvature, Levi-Civita and Fourier-continuity theorems. The exact uses are F1-F20 in the theorem and its contract; F13 correctly has two supplier entries. Checked the current EMG conformal proof (connection difference, derivative/quadratic contractions, scalar contraction), and the relevant current free-field and causal-commutator proofs. This is a consumer review of actual prerequisites, not an audit of every transitive supplier closure.

Retrieved [Fewster's lectures](https://inspirehep.net/files/a02ec079ff7063d1254ba3df86641d86), sections 2.6 and 3.1, printed pp.10-12 (PDF indices 11-13): checked conventions, conformal coupling/field weight, wave operator and compact-support formal symmetry. Retrieved [Ford's lectures](https://arxiv.org/html/gr-qc/9707062v1), section 1.1 eq.(1.2) and section 1.2 eqs.(1.20)-(1.23): checked coupling and conformal rescaling context. Both sources use (+---); the item uses its explicit (-+++) geometry and derives its signs locally. Neither source supplies an empirical premise, nor replaces the local continuity/domain arguments.

## Dependency dispositions and limits

Preserved the existing open supplier-readiness records in batch 39's frontier input and their historical evidence. Added current consumer-use evidence with exact fact/step locations. Those historical holds concern supplier readiness/acceptance, not a newly established failure of this conditional argument; this dispatch does not clear another owner's escalation. No published supplier defect or outside consumer repair was identified. No Statement, Definition, physical interface, item, page, or manifest was edited. Only the risk review, stale F5 contract quote and owned dependency evidence were updated, besides the report, decision and closed defect row. No judge, stamp, agent dispatch or gate battery was initiated.

## Local checks

Initial risk-report: exit 0; CRITICAL 12 theorem and ORDINARY 2 example. Final focused check results will be recorded below. No item edit means the mandatory post-edit proof-layout command has no changed-item paths.

Focused check outcomes:

- `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-39.proof-contracts.json --require-reviewed`: exit 0, zero errors, both items routed.
- `node tools/physics-support/rendercheck.mjs library/quantum-field-theory-mathematics/qft-mc04.md library/quantum-field-theory-mathematics/qft-mc04-examples.md`: exit 0, both page frontmatters and all math spans parse.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-td-qft-rpm-62-2026-10-14`: exit 0, refreshed and deduplicated the generated unified ledger from owner inputs.
- Initial strict proof-contract check: exit 1, one stale citation-quote diagnostic for F5. The current causal-commutator supplier expands “spacelike-separated supports” to the exact quantified inequality `|x_space-y_space| > |x0-y0|`. This is equivalent to the consumer's strictly positive eta-squared separation. Updated the F5 quote to the current exact Statement and recorded this in the risk review. This is mechanical contract synchronization, not a mathematical defect, and has no defect-ledger row or additional decision obligation.

The only carrier repair accepted is the reader's page count correction. No item edits were made; no post-edit proof-layout or item precheck was needed. Existing supplier-readiness holds remain owner obligations; no new local blocker or published defect was identified.

Final strict proof-contract rerun: exit 0, zero errors/warnings, 2/2 items checked. Final risk-report with `--require-reviewed`: exit 0, zero errors, CRITICAL theorem review complete. Output JSON parses and contains exactly `page:39:qft-mc04`; no item hash changed. Engine decision stamping and gates remain pending under engine ownership.

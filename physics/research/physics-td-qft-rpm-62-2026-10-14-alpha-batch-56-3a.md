# Batch 56 Step 3a adjudication

Run: `physics-td-qft-rpm-62-2026-10-14`. Group: `batch-56`. Scope: batch 56 only.

The routed scope contains no touched carriers, page obligations, reader findings or refuter findings. The decisions file therefore has an empty decisions array. Pre/post item, contract, manifest and page fingerprints agree in the supplied snapshots. No reader repair is owed adjudication.

## Completed review: level 7

`def-qft-free-scalar-model`: read its full Definition and all seven direct dependencies. Checked the fixed (-+++) length-coordinate/Fourier conventions, mu=0 apex omission, Countable Choice, second-variable-linear Fock pairing, complex-linear smeared field, real-test Segal normalization, exact Hamiltonian multiplier domain and vacuum sector, and SI mass/energy/test dimensions. The spectrum supplier proves self-adjointness on the maximal domain; the smeared supplier and Segal construction provide the domain-qualified field. No defect identified. Its specific risk review is complete in the owning proof contract. No public interface changed.

External convention evidence read: [Tong Chapter 2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html), sections 2.2-2.4.1, particularly equations 2.102 and 2.134-2.141. The formal source conventions agree with the local mathematical construction; the source is not used to certify operator domains.

Initial risk-report command completed with zero errors and routed all four items (scores 7, 12, 8, 10). Reader reports no defects or edits; refuter has no flagged findings. Reviews below were completed in the generated dependency order.

## Completed review: level 8, free properties

`pthm-qft-scalar-free-properties`: checked all six steps and all eight direct suppliers, including the full causal-support and local-Weyl proofs. Integration by parts gives the correct Klein–Gordon sign. Real-test self-adjointness uses the Segal construction. Bounded-algebra locality uses the Weyl phase relation and norm continuity, rather than assuming unbounded commutation alone implies strong commutation. The multiplier proof establishes the vacuum eigenspace, massive lower bound with one-particle ball witnesses, and massless no-gap annulus witnesses. Countable Choice and conditional physical adoption remain explicit. No defect identified; its risk review is complete. Next: vacuum moments.

## Completed review: level 8, vacuum moments

`pthm-qft-scalar-vacuum-moments`: checked all four steps and six direct suppliers. The finite-particle domain is invariant under every field in each finite product. The annihilator recursion preserves original pair order and has bases n=0 (one) and n=1 (zero); n=2 is the stated covariance and n=4 has exactly three pairings. The Weyl expectation uses the correct sqrt(2) scaling. Independently checked the time-kernel supplier: absolute Schwartz pairing including the massless apex, fixed equal-time extension, derivative jump -i, and therefore Green equation `(Box-mu^2)H_mu=i delta_0` in the adopted signature. No defect identified; risk review complete.

Further external context read: [Tong Chapter 2](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html), sections 2.6.1-2.7.2, equations 2.163-2.175, and [Chapter 3](https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S3.html), sections 3.3.1-3.3.2, equations 3.232-3.245. The four-momentum numerator i in Tong must not be mistaken for an extra factor multiplying the shell time-ordering formula. Next: level-9 spacelike-correlation example.

## Completed review: level 9

`ex-qft-scalar-vacuum-correlation`: checked all six verification steps and eleven direct supplier interfaces. The strict separation L>4 epsilon gives a compact support-difference set bounded away from the causal cone. Independently recomputed shell-ball measure kappa²/(8 pi²), angular factor 4 pi sin(kr)/(kr), damped mass 1/(4 pi² delta²), and regulated kernel 1/[4 pi²(r²+(delta+i z0)²)]. Absolute integrability justifies the regulated Fubini step. The shell limit has the L² Cauchy–Schwarz majorant; the spacetime limit is uniform on the compact spacelike set. Nonnegative bumps with positive-volume inner balls give strict positivity. Dimensions give a dimensionless correlation. No defect identified; risk review complete.

Additional source check: [Srednicki author draft](https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf), section 3, printed pp. 36–43, equations 3.7–3.33, and section 8, printed pp. 67–69, equations 8.11–8.17. Its shell/action/Hamiltonian conventions are compatible with the selected model; its named propagator Delta equals i times the shell time-ordered two-point carrier (8.13–8.15). This convention difference does not change the local Green equation. Formal path-integral notation is not used as a rigorous supplier.

## Scope, sources and consumer dispositions

Both assigned page summaries were checked against the current item claims and retain their explicit conditional-model scope. No empirical premise is used by any of the four items. No item/page, Statement/Definition, physical scope or uncertainty interface changed. No downstream repair or withdrawal is required. All direct cited dependency interfaces were opened; local operator, causal, covariance and time-kernel proofs used by the claims were read. Published mathematical suppliers were checked at the exact statements used, without claiming an audit of unrelated transitive proofs. No defective published supplier was identified; no defect-ledger row is warranted.

The owning cross-batch dependency input was updated with exact current uses and independent interface checks, preserving historical evidence. Such verification concerns the named consumer use, not publication, judgment, or acceptance of the producer batch.

## Final checks and handoff

- `node tools/physics-support/risk-report.mjs research/physics-td-qft-rpm-62-2026-10-14-batch-56.proof-contracts.json`: exit 0; all four items routed.
- The same command with `--require-reviewed`: exit 0; zero errors, all four specific reviews complete.
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run physics-td-qft-rpm-62-2026-10-14`: exit 0, refreshed and deduplicated. All 18 owning input rows retain their history and record the exact current consumer uses.
- Python checks: empty owed-obligation selection agrees with empty decisions array; pre/post item/contract/manifest and page snapshots agree; all four current item raw hashes and both current page raw hashes match post-reader snapshots; routed reader-findings JSON and refuter JSON fingerprints match; all 18 consumer-use keys are unique.

An initial ad hoc check incorrectly compared `reader_report_sha256` with the narrative reader Markdown. Inspection of `step3-scope.mjs` showed that this field binds `reader-findings-56.json`; checking the correct artifact passed. This was a local check selection error, not a source defect or historical-byte discrepancy. A first optional HTML extraction attempt lacked the bs4 package; the relevant Tong sections were instead read through the web tool. Neither failure changed source content.

Changed artifacts: this report, the task-named decisions JSON, owning proof-contract risk reviews, owning cross-batch input, and the authorized frontier-ledger note/refresh. All item and page bytes remain unchanged. No item reflow, precheck or proof-layout was needed because no item was edited. No mathematical repair, defect row, judgment, stamp, certification or engine transition was performed. No unresolved defect or blocker was identified within the assigned consumer uses; wider supplier review/acceptance remains with its owners and the engine.

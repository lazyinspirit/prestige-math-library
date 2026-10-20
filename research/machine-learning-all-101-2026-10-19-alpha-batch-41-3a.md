# Batch 41 Step 3a adjudication

Run: `machine-learning-all-101-2026-10-19`. Group: `batch-41` (scope assignment group `n` preserved).

The dispatch routes three risk reviews and no touched, page, reader or refuter decision obligations. Reader findings and refuter flags are empty. Pre/post snapshots agree for all six item/contract/manifest records and both page records. No mathematical repair is currently needed. This report records independent local review, not judgment or certification.

## Completed level 1: theorem

`thm-heavy-ball-rate-on-strongly-convex-quadratics`: reviewed the current complete Statement, all thirteen proof steps, all ten dependency statements/definitions, contract derivations and boundaries, and reader/refuter evidence. The real orthonormal spectral reduction and positive square-root factorization meet the cited hypotheses. The gradient and unique minimizer follow from the quadratic-form supplier. The tuned roots have modulus q throughout the interval, with repeated endpoint roots; the c=L polynomial is r². The lower-bound proof correctly separates R=0, 0<R<1 and R≥1, uses β≤R² and positive endpoint bounds, and obtains κ≤((1+R)/(1−R))². The claim is interval minimax, including scalar values outside the matrix spectrum. Repeated roots allow a linear prefactor and do not assert a one-step contraction. Zero error, d=1, repeated eigenvalues, c=L and the no-update horizon T=1 are consistent. Finite eigenbasis selection uses no arbitrary-index choice. Complete specific risk review saved to the owning proof contract; no item edits.

Sources freshly consulted: [Bottou–Curtis–Nocedal](https://arxiv.org/pdf/1606.04838), §7.1 printed pp.68–69, eqs.(7.1)–(7.2); [Chen](https://pages.cs.wisc.edu/~yudongchen/cs726_sp23/Lecture_9_10_accelerated_GD.pdf), §1 p.1; [Vu](https://trungvietvu.github.io/notes/2018/Momentum), §2, modal polynomial and eqs.(5)–(6). These confirm the update and tuned constants; the exact lower bound and endpoint qualification were independently checked from the local proof.

## Completed level 1: unstable scalar example

`ex-unstable-heavy-ball-parameters`: reviewed the entire Example and Verification, all four supplier sections, and the exact contract quotations/derivations/boundaries. The coefficient −17/8 and factorization (r+2)(r+1/8) are correct. Both initial values equal 1. Substitution and induction justify the explicit solution. For t≥1 the factored bracket is ≤−1/2, so |w_t|≥2^(t−1)≥t; the Archimedean property supplies an index beyond any given tail start and real bound. Every tail is unbounded, contradicting the bounded-tail consequence of convergence. The infinite sequence consistently extends all finite-horizon executions. No choice or additional prerequisite is required. Complete risk review saved; no repair.

## Completed level 2: explicit spectrum example

`ex-heavy-ball-optimized-quadratic-spectrum`: read the complete Example and three Verification steps after finishing both lower-level reviews. Its four supplier sections meet the actual uses. The positive diagonal spectrum is 1,4,9, with center zero; the theorem applies with κ=9, α=β=1/4 and q=1/2. Directly checked C=diag(1,2,3), gradient Aw, polynomials (r−1/2)², r²−r/4+1/4 and (r+1/2)². The middle conjugate roots have squared modulus 1/4. The GD multipliers are 4/5,1/5,−4/5. Repeated roots retain the theorem’s prefactor caveat. Complete risk review saved; no repair.

## Scope, suppliers and presentation

Reviewed the three routed carriers and their direct cited dependencies, plus the complete heavy-ball algorithm Definition and its coordinate-gradient/differentiability suppliers. This is not a new whole-batch review of the unrouted Nesterov algorithm, empirical example or pages, nor a transitive re-audit of published prerequisite proofs. Reader and refuter independently report no findings. All eighteen contract citation entries match their complete current source sections exactly. The manifest’s relevant dependency lists and levels agree with the reviewed carriers. No HIGH/CRITICAL review remains open.

The three routed statements/descriptions are uninterrupted by hyperlinks and have immediately following reference sections with one reference per paragraph. Proof steps are separated and tagged, with final QEDs. No TikZ/tikzcd diagram occurs in these carriers and none is needed to establish these scalar and spectral claims. No item or page changed; there is no repair confidence field to supply, no invalidated judge record and no changed-item proof-layout/precheck obligation.

The existing cross-batch record has three page-context edges and published item suppliers. None of the routed item proofs imports the draft stationarity theorem. This review preserves existing routing/status evidence and makes no new page-readiness claim. No Statement/Definition changed, so no consumer repair propagation is triggered. No defective published supplier, missing prerequisite, withdrawal or owner blocker was established. No defect-ledger or published-ledger row is warranted. Stable IDs and all prior proposed dispositions remain present. Added the bounded consumer-review note to `briefs/tasks/frontier-dependency-ledger.md`.

## Local checks and handoff

Initial risk-report succeeded and routed precisely CRITICAL 15 (theorem), CRITICAL 8 (unstable example), and HIGH 6 (spectrum example). The complete per-item risk reviews were written in generated dependency order. Final reviewed-risk and strict-contract results are recorded below. Only risk-review metadata, this report, its empty decisions file and the frontier dependency note are authored by this dispatch. No judgment, stamps, self-certification or workflow transitions were performed; the engine owns subsequent hashes and gates.

- `node tools/risk-report.mjs research/machine-learning-all-101-2026-10-19-batch-41.proof-contracts.json --require-reviewed`: exit 0; all three required reviews complete, 0 errors.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-41.proof-contracts.json --strict`: exit 0; 0 errors, 0 warnings, 3/3 items checked.
- Independently compared the snapshots and current raw SHA-256 values: all six current items and both current pages match reader-post; all pre/post item, contract, manifest and page records agree. Risk-review metadata intentionally enriches the current contracts after those snapshots.

Decisions: exactly `[]`, matching the empty routed obligation set. Blockers and unresolved mathematical defects: none found in the assigned risk-review scope. Ready for engine collection.

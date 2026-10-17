# Batch 49 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-49`.

Reader report and findings and refuter report read; no reader edits or findings, three refuter obligations. No page obligations.

Level 0 completed: adjugate inverse and determinant separation lemmas reviewed without defect; exact evidence is recorded in their independent risk reviews in the owning proof contract. Current cited supplier Statement/Definition sections were read. No item edits at this level.

Next: level 1 exponential decay and its prerequisites.

Level 1 completed: exponential-decay bound checked by finite Duhamel expansion, including n=1 and t=0. Current exponential-series, Schur, algebraic-closure, completeness and operator-norm supplier statements checked. Risk review completed without changes. Next: level 2 ADI definition and Lyapunov/Sylvester equivalences.

Level 2 completed: Lyapunov integral/positivity (including both kernel-criterion directions) and spectral Sylvester equivalences reviewed without defect; risk reviews complete. Refuter:49:2 confirmed nonfatal: the ADI algorithm lacked the required reverse well-definedness link. Added justified_by to the existing finite-status theorem after checking its complete proof and shifted-invertibility supplier. No Definition or dependency edge changed; no consumer repair required. repair_confidence: 1. Next: level 3 risk reviews.

Level 3 completed: finite ADI status, residual-to-error and covariance example risk reviews are complete. Independently expanded the covariance quadratic form and residual identity; no defect. Next: conditional ADI convergence.

Level 4 completed: conditional ADI convergence checked, including rational multiplier sign, adjoint spectrum, positive separation and squared Frobenius residual bound. Its operator estimate is an explicit hypothesis, not an unproved conclusion. No defect; risk review complete. Next: Bartels–Stewart procedure and current batch-33 prerequisites.

Level 5 completed: actual Bartels–Stewart Definition and current Schur interfaces reviewed; exact-candidate acceptance, local adjugate solve, pivot threshold and finite-status reasoning are sound. Refuter:49:3 confirmed nonfatal; added justified_by to its existing finite-status/local-uniqueness theorem. No Definition change; repair_confidence: 1. Risk review complete. The operation-count claim requires a separate supplier-first escalation, detailed below.

Level 6: exact-correctness risk review completed without defect. Refuter:49:1 is escalated: its title objection is valid, and independent review found that the stronger current Statement also lacks a valid cost proof because the outside Schur supplier repeats a full-matrix invariant scan per block. A title-only edit would leave a known defective cost carrier. No narrowing or complete repair is claimed. See owner blocker below. Next: finite status/local uniqueness risk review, which is independent of this cost bound.

Level 7 completed: finite Bartels–Stewart termination and successful-pivot uniqueness reviewed independently. Homogeneous block induction proves uniqueness on success without an added spectral assumption. All twelve required HIGH/CRITICAL risk reviews are complete. Separate moderate-risk cost carrier remains open. Refreshed its F1/F2 full Definition quotes after the current batch-33 change; this audit enrichment does not repair the cost defect.


## Owner blocker: cubic work needs supplier-first closure

`refuter:49:1` is escalated, with original title defect `nod-b49-3a-cost-title` open. The title's unqualified cubic assertion lacks its fixed-K restriction. A second independently detected defect, `nod-b49-3a-cost-invariant-scans`, is open in Proof 1.2/Statement. Neither defect is mechanically normalized or falsely closed.

Current source: `items/alg-finite-budget-francis-schur-reduction.md`, Definition step 4 (line 54), says to check the **full stored matrix** for the exact upper-Hessenberg zero pattern after the block chase. The preceding scheduling prose visits every active snapshotted interval separately. Identity stages explicitly continue invariant checks. The assigned operation-count theorem, Proof 1.2 (line 44), charges only quadratic matrix/scan work per sweep. A full dense Hessenberg pattern check has `(n-1)(n-2)/2` below-subdiagonal entries, and there may be n/2 active two-by-two blocks in each of n allowed sweeps. These instructions allow `n²(n-1)(n-2)/4` zero-pattern comparisons, of order n⁴, outside the stated fixed-K cubic bound. Restricting to early failures does not repair a bound that explicitly includes failure branches.

Concrete persistent-block model: take even n, block diagonal copies of H=[[0,1],[1,0]], zero deflation tolerance, sweep cap N=n, stagnation period h=n+1, and default fixed-cost exact sign controls. Each discriminant is 4, so blocks remain active. The ordinary real double-shift descriptor is s=0,t=-1, and H²-I=0, so its starting polynomial vector is zero. The current exact Francis Definition's zero-vector branch is identity; the delegated computed algorithm also explicitly skips zero targets. Exact-representable coordinate sign changes in Hessenberg initialization only conjugate these blocks by diagonal signs and preserve the same square/trace/determinant properties. Thus the n/2 intervals can persist to budget-exhausted at n sweeps. There is no supplied incremental pattern-maintenance algorithm or proved scan reduction that the local cost proof can use. The illustrative count check for n=4,8,16,32 gave 24,672,13440,238080 pattern comparisons respectively; it checks this counting formula, not a general convergence theorem or an implementation benchmark.

Attempted local closure: count all constant-size chase updates, ordered partition passes, materialized factors, certificate accumulation and sign calls separately. Those familiar terms do fit the claimed bounds; the repeated global pattern scans do not. Qualifying only the title would retain the known unsupported Statement. Quietly changing the outer caller cannot change its delegated supplier's instructions, and weakening the approved cubic theorem without owner disposition would drop content. No such repair was made.

Required owner decision: route to batch 33 a supplier procedure with a justified quadratic-per-sweep invariant-check schedule (for example one full scan after a whole pass plus explicitly justified local checks, or specified incremental tracking), then review this consumer's actual revised count and its fixed-K title. The owner may instead explicitly disposition a changed cost contract. Current supplier contract/manifest and complete finite termination/status proof were independently inspected; their existing reviews establish no missing scan bound. No outside carrier was edited. The owned cross-batch cost edge is now `open`, with its previous owner-review receipt retained as history. Other exactness/termination edges remain valid.

## Evidence, provenance and scope

The exact dispatch scope and generated item order were followed. The reader report has no repairs and its findings array is empty. Every one of the 22 pre/post item/contract/manifest fingerprints is identical, so there is no historical reader repair to accept or revert. Current raw item comparisons against reader-post differ only for the two algorithms edited here. The title and cost proof remain unchanged for the owner. No observation was unbound and no historical-current-content exception was used.

All twelve required risk reviews are individually recorded in `research/numerical-optimization-dynamics-2026-10-16-batch-49.proof-contracts.json`, with exact proof reasoning, domains and boundary checks. The separate moderate-risk operation-count review is explicitly open. Local source evidence consists of the complete current assigned proofs/Definitions and their actual supplier Statement/Definition sections: cofactor/Laplace/determinant laws, square SVD and unitary/Frobenius/operator norm formulas, finite-dimensional completeness and differentiable operator exponential, Schur triangularization and complex algebraic closure, nonnegative square root, rank-nullity, adjoint/conjugation laws, current batch-33 real/complex Schur forms, discriminant predicate and rational sign proof, and full finite Francis procedure/status proof. No new external full-text reading or source certification is claimed; local arguments suffice for the reviewed algebra/analysis, and the blocker is a discrepancy in the written local algorithm instructions.

Both completed repairs have repair_confidence 1, one exact closed nonfatal ledger row apiece, contract audit evidence and manifest `justified_by` mirrors. No Statement, Definition, logical dependency, provenance classification, page inventory or mathematical proof was changed. Therefore no direct-consumer interface repair, further-hop traversal or judge invalidation is needed. Cost theorem F1/F2 full supplier quotes were refreshed to the current Definitions as audit evidence; this does not close its defect. Published items were read only and no defective published item was established, so no published ledger lock/update was needed. Stable IDs and all existing withdrawal proposals are preserved.

## Local checks and handoff

- Initial `node tools/risk-report.mjs research/numerical-optimization-dynamics-2026-10-16-batch-49.proof-contracts.json`: exit 0, twelve HIGH/CRITICAL routes.
- Final same command with `--require-reviewed`: exit 0, 22 items routed, zero errors. This checks review presence; it does not close the separate open cost defect.
- `node tools/tsx-run.mjs tools/reflow.mts` on the two edited algorithm paths: exit 0, both unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts --json` on those paths: exit 0, two not-applicable algorithms, zero proof bodies checked, zero failures.
- `node tools/rendercheck.mjs` on those paths: exit 0, both frontmatters and all math parse under the actual renderer.
- Final `node tools/proof-layout.mjs items/alg-low-rank-alternating-direction-implicit-lyapunov.md items/alg-bartels-stewart-sylvester-equation.md`: exit 0, two items, zero phase steps, zero defects.
- Native locked defect-ledger append: exit 0, two closed nonfatal repair rows and two open fatal escalation rows; generated view refreshed by the tool.

No judge, stamp, certification, dispatch, transition, full gate battery, publication or commit was initiated. The two metadata obligations are repaired; the cost obligation remains escalated for an owner decision. The engine owns subsequent routing, decision sealing and gates.

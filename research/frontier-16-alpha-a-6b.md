# Frontier 16 — Alpha-a Step-6b adjudication

Group `a` covers batches 1 and 6. Step 7 has not frozen the text. Reader 1 and reader 6 both exited cleanly and were independent of the Betas that authored their assigned batches. I audited their final disk changes, every reported finding, all eight page files, both batch manifests, both proof contracts, component provenance, and stale-verdict state. No owned item has a `verification.judge` block.

## Reader coverage

- Reader 1 opened all 70 batch-1 items, all 140 proof steps, 147 contract citations, and every boundary row. Both A summaries satisfy the two-paragraph contract and both B bodies are empty. Its report is `research/frontier-16-reader-1.md`.
- Reader 6 opened all 39 batch-6 items, all 35 proof-bearing items, 193 contract citations, and every boundary row. Both A summaries satisfy the contract and both B bodies are empty. Its report is `research/frontier-16-reader-6.md`.
- No reader added or deleted an item, changed an id, edited a published dependency, judged content, or changed `research/plan-spec.json`.

## Reader finding adjudications

Every reader finding is confirmed. `confirmed_nonfatal` below includes polish and gaps inside the 30-second threshold. Alpha extended R1-6 to cite monotonicity and root existence for cube-map bijectivity, extended R1-18 to bind the formerly free codomain dimension, and completed R6-4 rather than leaving the recorded gap open.

| finding | verdict | audited disposition |
|---|---|---|
| R1-1 | confirmed_fatal | `thm-parametrized-implicit-function-theorem-with-higher-regularity`: allowed `p=0` and proved the zero parameter block. |
| R1-2 | confirmed_fatal | Narrowed the proper-local-diffeomorphism title to sheets near each target point. |
| R1-3 | confirmed_fatal | Expanded the cube-map witness clause before retaining the downstream open-map Fact. |
| R1-4 | confirmed_nonfatal | Constructed the block inverse and identified its zero slice explicitly. |
| R1-5 | confirmed_nonfatal | Added exact product, chain, and continuous-partial inputs to the $C^k$ induction. |
| R1-6 | confirmed_nonfatal | Proved smoothness, openness, strict monotonicity, and surjectivity of the cube map from exact Facts. |
| R1-7 | confirmed_nonfatal | Repaired the malformed `\qquad`. |
| R1-8 | confirmed_fatal | Added `n\ge1` to the sup-norm cube lemma. |
| R1-9 | confirmed_fatal | Replaced the too-strong global differentiability citation by a direct secant-limit proof at `a`. |
| R1-10 | confirmed_fatal | Propagated `n\ge1` through the Euclidean semicontinuity family. |
| R1-11 | confirmed_fatal | Quantified the affine slopes, offsets, ambient dimension, and evaluation point. |
| R1-12 | confirmed_fatal | Restricted the singular-Hessian witness and its downstream Fact to `n\ge1`. |
| R1-13 | confirmed_nonfatal | Dispatched `n=0` before any sup-norm cube argument. |
| R1-14 | confirmed_nonfatal | Handled the zero direction subspace before positive-dimensional norm equivalence. |
| R1-15 | confirmed_nonfatal | Added the two mean-value comparisons yielding the strict chord inequality. |
| R1-16 | confirmed_nonfatal | Removed the duplicated finite-maximum clause. |
| R1-17 | confirmed_nonfatal | Corrected epigraph reverse-direction and sequence anchors. |
| R1-18 | confirmed_fatal | Bound positive source, codomain, and square dimensions in the $C^k$/diffeomorphism definition and dependents. |
| R1-19 | confirmed_fatal | Propagated `n\ge1` through projection and separation, and corrected the cited compactness scopes. |
| R1-20 | confirmed_fatal | Replaced polynomial derivative attribution by exact scalar power/product/chain inputs. |
| R1-21 | confirmed_fatal | Replaced the false strict-convexity citation by an explicit mean-value proof. |
| R1-22 | confirmed_fatal | Added the product-rule route for the complex-squaring Jacobian. |
| R1-23 | confirmed_nonfatal | Proved the total derivative of `(x,xy)` by its quadratic remainder. |
| R1-24 | confirmed_nonfatal | Added the scalar product-rule Fact for polar coordinates. |
| R1-25 | confirmed_nonfatal | Added exact derivative Facts for the squared norm. |
| R1-26 | confirmed_nonfatal | Added exact derivative Facts for the semidefinite-Hessian witness. |
| R1-27 | confirmed_nonfatal | Reused the existing convex-closure lemma instead of choosing decomposition sequences. |
| R1-28 | confirmed_nonfatal | Repaired incomplete contract quotes and nonexistent step anchors. |
| R6-1 | confirmed_fatal | Added the naturality square for the product fundamental-group isomorphism. |
| R6-2 | confirmed_fatal | Replaced “surjective local homeomorphism, therefore covering” by a full sheet construction. |
| R6-3 | confirmed_nonfatal | Added induced-map functoriality as an exact Fact. |
| R6-4 | confirmed_nonfatal | Alpha added one-point determination as Fact F7 and synchronized the contract. |
| R6-5 | confirmed_nonfatal | Repaired malformed `\qquad` in the punctured-sphere example. |
| R6-6 | confirmed_nonfatal | Repaired malformed `\qquad` in the real-line covering Statement. |
| R6-7 | confirmed_nonfatal | Corrected the conjugation product notation. |
| R6-8 | confirmed_nonfatal | Expanded incomplete citation-contract evidence throughout batch 6. |
| R6-9 | confirmed_nonfatal | Replaced a false subdivision boundary row by the constant-factor identity case. |
| R6-10 | confirmed_nonfatal | Replaced a false constant-loop boundary anchor by the actual one-factor route. |
| R6-11 | confirmed_nonfatal | Pointed the one-puncture row only to the one-puncture computation. |
| R6-12 | confirmed_nonfatal | Narrowed the `H={1}` and `H=G` rows to the subgroup-identification step. |

## Read-only refuters

The refuters had no write authority and requested no permissions.

- `RB1I` read all proof-bearing items on the inverse-function pair. RB1I-1 is confirmed fatal: `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant` admitted zero source/target dimensions outside its cited derivative conventions. The Statement now has `m,q\ge1`, and the boundary row records that scope. All other inverse-pair proofs were accepted.
- `RB1C` read all proof-bearing items on the convexity pair. RB1C-1, RB1C-2, and RB1C-3 are confirmed fatal choice-scope omissions: AC and/or $\mathrm{AC}_\omega$ were concealed in basis extraction, closure sequences, exterior sequences, and the bad-sublevel sequence. Statements, Facts, proofs, dependency lists, and contracts now expose the exact principles and propagate them through separation and subgradient existence. RB1C-4 is confirmed fatal: the monotonicity Fact dropped continuity and interval hypotheses and was false; it now states the source clause faithfully. RB1C-5 is confirmed nonfatal and was repaired by a direct secant-limit proof. RB1C-6 is confirmed nonfatal and its false empty-sum boundary row is corrected.
- `RB6` read all 35 proof-bearing batch-6 items and accepted them. It independently verified the right-monodromy/normalizer multiplication and both generated finite witnesses. No `RB6-*` finding exists.

The machine half, `research/frontier-16-alpha-a-6b-findings.json`, contains one row for each of the 47 reader/refuter findings: 20 confirmed fatal and 27 confirmed nonfatal. There are no reader/refuter false positives.

## Risk reviews

Current post-repair routing requires 40 batch-1 and 28 batch-6 dispositions. Every required contract now has `risk_review.status: complete`, an item-specific score/signal note, the responsible refuter lane, and Alpha's final disk disposition.

- Inverse pair, `RB1I`: `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `lem-matrix-inversion-preserves-ck-regularity`, `thm-injective-regular-c-one-map-is-a-diffeomorphism-onto-its-image`, `thm-parametrized-implicit-function-theorem-with-higher-regularity`, `thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets`, `thm-jacobian-sign-is-constant-on-a-connected-regular-domain`, `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`, `ex-polar-coordinates-as-a-local-diffeomorphism`, `ex-two-equation-implicit-system`, `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism`, `fs-invertible-derivative-at-a-point-gives-a-local-inverse`, `fs-invertible-derivative-everywhere-gives-a-global-inverse`, and `fs-zero-derivative-on-an-open-set-forces-constancy`.
- Convexity pair, `RB1C`: every currently routed high/critical item in `research/frontier-16-batch-1.proof-contracts.json` outside the preceding list; the contract contains the complete item-by-item set and current score.
- Topology pairs, `RB6`: every currently routed high/critical item in `research/frontier-16-batch-6.proof-contracts.json`; the refuter's complete list is recorded in its returned evidence and each contract row.

Both `risk-report --require-reviewed` runs pass. Finite smoke executes no applicable registered check for either batch, so its `0 check(s)` result is recorded as no evidence.

## Harvest faithfulness

I reopened the full text at every stated locator, not merely the URLs: Lebl §8.5, Toronto §3.3, Lee Proposition 2.19, Boyd §§2.5/3.1/3.2, Bertsekas Lectures 2–7 and 12, Hatcher §§1.1–1.3, and May Chapters 2–3. The source-fetch gate verifies all nine source entries.

The Lebl, Toronto, Lee, Bertsekas, Hatcher, and May harvests match their ranges. Their declines are genuine subject boundaries: constant-rank/regular-level-set results, extended-real and matrix convex optimization, CW/surface applications, and groupoid/category equivalences. Both topology low-yield warnings reflect those explicit ranges, not silent pruning. The inverse-function low-yield warning reflects published reuse plus explicitly destined differential-geometry exercises. All B pages are substantive.

Boyd was under-enumerated: named Examples 3.1–3.9 and Remark 3.1 were absent despite lying in the declared sections. I added a disposition for every one. The finite quadratic/max/supremum specializations are carried by the corresponding general items, extended-real/matrix/least-squares examples are explicitly outside this pair's finite scalar development, and the domain-convexity boundary of Remark 3.1 is now stated in `thm-hessian-characterises-convexity`. This is defect-ledger row `f16-a-A6B-001`.

## Files, provenance, and touch history

Reader changes are exhaustively listed in their reports and were audited from disk. Alpha materially changed these owned items: `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`, `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism`, `lem-convex-set-and-closure-have-same-interior-and-boundary`, `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`, `thm-separating-hyperplane-theorem-for-disjoint-convex-sets`, `thm-convex-functions-have-subgradients-at-interior-points`, `thm-euclidean-semicontinuity-epigraph-characterisations`, `cor-positive-definite-hessian-implies-strict-convexity`, `thm-differentiable-convex-functions-and-gradient-inequality`, `thm-hessian-characterises-convexity`, and `lem-subgroup-quotient-of-universal-cover`, plus the convexity A-page summary, batch-1 coverage/manifest/contract, and batch-6 contract.

No item or page was added or deleted. Alpha authored no new result. No published dependency was edited. Existing provenance values remain accurate after review: source-backed Statements remain `literature-derived` or `ai-altered`, repaired proofs remain `ai-altered`, and the expanded cube witness remains `ai-altered`. Every literature-derived/ai-altered owned item has a reader-visible reference URL. Batch 6's two AI-generated examples were independently tested and remain non-load-bearing B leaves.

Items touched by both the reader and Alpha are: `def-ck-euclidean-maps-and-diffeomorphisms`, `thm-zero-derivative-on-connected-open-euclidean-set-iff-constant`, `cex-a-c-one-bijection-of-the-line-that-is-not-a-diffeomorphism`, `lem-convex-set-and-closure-have-same-interior-and-boundary`, `thm-supporting-hyperplane-at-a-boundary-point-of-a-convex-set`, `thm-separating-hyperplane-theorem-for-disjoint-convex-sets`, `thm-euclidean-semicontinuity-epigraph-characterisations`, and `cor-positive-definite-hessian-implies-strict-convexity`. Their neighbouring dependencies and final contracts were included in the refuter/Alpha reread. `lem-subgroup-quotient-of-universal-cover` had its reader-edited contract touched again when Alpha closed R6-4.

## Gates and remaining gaps

- Full precheck: 4540 checked, zero failures.
- Strict proof contracts: 61/61 and 35/35 clean; citation fidelity and boundary audit clean.
- Content policy: 109 scoped items, zero errors/warnings. Coverage checklist: four A pages, zero errors; the three low-yield warnings were adjudicated above.
- `depcheck`, `fwdcheck`, `extcheck`, `validate-plan`, `depsource`, real YAML/KaTeX rendercheck, and positional prosecheck pass.
- Source full-text stamps: 9/9. Audit manifest: 559 relationships over 109 items, zero defects (`published-backward` 404, same-batch 153, forward 2). Lead Alpha owns the semantic 6c audit of non-same-batch edges.
- The announcement detector's sole owned candidate, `cor-fundamental-group-of-two-circle-wedge` step 1.1, states the actual outcome obtained from the cited rank-two theorem; it is a detector false positive and was not edited.
- All A summaries have exactly two nonempty prose paragraphs under 150 words; all B pages have no authored body.

The 48 Alpha-a ledger rows were appended through `tools/defect-ledger.mjs`; the extra row beyond the machine finding file is the Alpha-detected Boyd harvest defect. No owned mathematical defect remains open. Judging, cross-batch/cross-level audit, impact closure, plan-dependency reconciliation, and the whole-level receipts belong to later engine stages and the lead Alpha.

## Consolidated fatal-error ledger

- False, overstrong, or ill-typed title/Statement/witness: R1-1, R1-2, R1-11, R1-12, and R6-1. Dispositions were scope correction, title narrowing, full typing, witness restriction, and proof extension.
- Missing domain or choice scope: R1-8, R1-10, R1-18, R1-19, RB1I-1, RB1C-1, RB1C-2, and RB1C-3. Dispositions were explicit positive dimensions and reader-visible AC/$\mathrm{AC}_\omega$ propagation through Facts, proof steps, dependencies, and contracts.
- Invalid inference or inaccurate/missing dependency citation: R1-3, R1-9, R1-20, R1-21, R1-22, R6-2, and RB1C-4. Dispositions were faithful witness clauses, direct proof replacement, exact calculus inputs, a full covering-sheet construction, and restoration of the omitted source hypotheses.

All are fixed. The evidence rows are `f16-a-R1-001` through `f16-a-R1-028`, `f16-a-R6-001` through `f16-a-R6-012`, `f16-a-RB1I-001`, and `f16-a-RB1C-001` through `f16-a-RB1C-006` in `research/defect-ledger.jsonl`.

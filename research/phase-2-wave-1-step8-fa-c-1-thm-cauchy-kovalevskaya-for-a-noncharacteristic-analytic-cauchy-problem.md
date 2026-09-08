# Final adjudicator evidence — group c, queue position 1

Run: `phase-2-wave-1`. Queue: `research/phase-2-wave-1-step8-fa-c-round-1.json`.
Item: `thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem`.
Decision: **repaired**. Source verification: **verified**.

## Independent decision and exact history

I read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md; the current item and all five direct dependency statements and proofs; the normal-form formal-recursion proof; the surrounding published principal-symbol and characteristic-data interfaces; the A/B pages; batch-10 manifest, relevant coverage entries and author notes; the batch and merged proof contracts including the high-risk record; group-c conventions; the Alpha Step-8 evidence; and both exact Terra rejection rows.

The initial rejection, context `c1a35797197bf50d4dce12936b96f7d8f67645b32964a7e93a0478f140cd4dec`, objected to using F3 for uniqueness. Sol correctly added direct uniqueness citations F4 and F5, including the zero-spatial-dimensional ODE case. The final rejection, context `d4b615c62826b18a2d42c8e0ab8bf6dbdf3b38bfd2d7a33c3e8df20f7ededf7e`, item judge hash `15b7867a2f50c11e85d1c2728be6900bb619cb7bcd2523dc00ff4b8733279082`, objects to the existence assertion in step 2.1.

There is a real interface ambiguity: F3's statement introduces a system whose analytic solution has the required compatibility, without a separate explicit existential assertion for that solution. Its complete proof actually obtains existence in step 2.1 from its own PDE/ODE suppliers. Thus the final rejection does not expose a false CK theorem or a missing mathematical prerequisite. Nevertheless, the consumer should not require the reader to strengthen the quoted interface from the supplier's proof. I resolve the citation defect directly: F3 now supplies reduction and compatibility, and step 2.1 explicitly obtains existence from F4 for spatial dimension at least one and F5 for spatial dimension zero. This also explicitly checks analyticity at the zero initial value and spatial jet. Sol's repaired uniqueness argument is retained.

Pre-repair `itemHashGuard`: `4d2fb6569ec31af926d50321d86e12db2e60536f6973359171cbc539101a1a83`.
Final `itemHashGuard`: `d32d775910793be9d8bfb5a41a7290789b7edaf870d9998dc39a6e328d8c5565`.
These are guard hashes, not the judge hashes above.

## Mathematical verification

The unchanged claim is local real-analytic existence and uniqueness for a scalar total-order-m equation, m at least one, on a noncharacteristic analytic hypersurface. The solved right side uses precisely derivatives with total order at most m and time order below m. For an implicit equation the compatible centre m-jet selects one local implicit branch; uniqueness is restricted to this branch. Euclidean normal data are symmetric derivatives evaluated repeatedly on the surface unit normal, not arbitrary iterations of an extended vector field. The A-page and the examples distinguish this claim from smooth well-posedness and characteristic problems.

F1 is `lem-analytic-noncharacteristic-hypersurfaces-flatten-to-a-coordinate-hyperplane`. Its chain-rule calculation gives the derivative of the transformed nonlinear equation in the pure time m-jet as the linearized principal symbol at the conormal. This nonzero scalar permits the analytic implicit function theorem. The normal-line chart X(x)+t nu(x) has invertible differential at the surface and is affine in t, so its t-jets are exactly the symmetric Euclidean normal data. Homogeneity preserves nonvanishing when the conormal is rescaled. These arguments apply locally and require no branch-independent inverse.

F2 is `lem-analytic-cauchy-data-reduce-to-zero-data-in-normal-form`. For P equal to the finite normal Taylor polynomial, its m-th time derivative vanishes and its lower time traces are the prescribed data. Every allowed jet of u-P has zero trace after taking the corresponding tangential derivatives. Translation by the analytic jets of P preserves the allowed orders and gives analyticity near the zero-data centre.

F3 is `lem-higher-order-analytic-normal-form-reduces-to-a-first-order-system`. Its finite vector contains all derivatives through order m-1. Every allowed order-m derivative has a spatial component and becomes a first spatial derivative of a vector component. The other vector equations shift a time index or exchange one spatial index for time. This yields an analytic first-order right side at the zero initial vector and gradient, without assuming the vector components already are derivatives. F4, `thm-cauchy-kovalevskaya-for-first-order-analytic-systems-in-normal-form`, therefore applies for d at least one and a positive finite number of components. When d=0 the construction is just the finite higher-order ODE chain, so F5, `lem-analytic-ordinary-differential-systems-by-coefficient-majorants`, applies instead.

Compatibility is not assumed: the auxiliary `lem-normal-form-pde-determines-a-unique-formal-taylor-series` constructs the scalar formal solution recursively by time degree. Each next coefficient depends only on earlier time coefficients since every right-hand jet has time order below m. Its formal derivative vector satisfies F3's vector system. Formal vector uniqueness identifies it with the Taylor series of the analytic vector just obtained. The convergent zero component consequently has all other components as its derivatives. This justifies recovery of both the scalar equation and every datum.

The pure m-th centre derivative of the recovered solution is the selected solved value, while all remaining centre jets agree with the compatible data. Continuity then keeps the finite solution jet in the branch neighborhood after shrinking. Adding P and composing with the inverse chart restores the original equation and normal data. For uniqueness the two scalar solutions give vector solutions with identical analytic data; F4 or F5 identifies those vectors. The cases m=1, d=0 and zero data are included. Only finitely many coordinate choices and neighborhood restrictions are used; no new choice assumption is needed.

## Authoritative source verification

- https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf — Gantumur's official McGill Math 580 notes. Read Theorem 18 and its proof, printed pp. 9–10, Corollary 20 and its complete reduction argument (53)–(57), p. 11, and the coordinate/symbol argument (61)–(68), pp. 12–13. These support general analytic first-order normal systems, higher-order reduction, analytic Cauchy data, and the transformed normal coefficient. The scalar implicit-branch extension and derivative compatibility are checked in the local proofs, rather than inferred from the semilinear presentation of Section 5.
- https://giacomoageno.github.io/LectureNotesAPDE.pdf — Ageno's author-hosted scholarly notes. Read Theorem 2.22 and its preceding transformed-coefficient calculation, PDF p. 24, and the complete Step 1 reduction (2.11)–(2.13), PDF p. 25. This independently supports local analytic noncharacteristic solvability, Taylor-data subtraction and the three cases in the finite jet reduction. Its displayed reduction is quasilinear; the general nonlinear derivative dependence here is supplied by the local first-order theorem and Gantumur. The local normal-line convention is checked by differentiation, not by copying Ageno's normal-derivative formula.

The browser recovered the underlying PDFs' relevant text, not search snippets. Shell downloads failed DNS resolution; Ageno screenshot requests returned cache misses, but the complete relevant text sections above were available through browser open. No failed fetch is treated as verification.

## Scope, metadata and dependency record

Only the queued item's F3 and step 2.1 change mathematically. Its statement, dependency list and all dependency items remain unchanged. No new lemma or prerequisite-repair licence is needed. The batch-10 manifest strategy now describes the actual normal-line convention and both direct existence suppliers. The batch and merged contracts synchronize the F4/F5 uses and step-2.1 derivation. Prior Alpha risk evidence and all independent judgments/adjudications are preserved.

Under `briefs/tasks/frontier-dependency-ledger.md`, the owning input is `research/phase-2-wave-1-batch-10.cross-batch-dependencies.json`. All five suppliers belong to this same batch; the repaired use adds no cross-batch edge. I atomically reconciled the owning input to its correct empty array and ran the prescribed unified refresh successfully. No invented review row or expansion of repair scope was introduced.

## Validation and remaining obligations

- Focused precheck: 1 item checked, 0 failures.
- Focused rendercheck: passed YAML, KaTeX, delimiter and wikilink-in-math checks.
- Strict batch-10 contract and strict merged contract: each checked this item with 0 errors and 0 warnings.
- Step-8 guard against pre-step8: passed, 26/26 current edits licensed, no new or deleted items.
- Frontier dependency ledger refresh: passed.
- Repository-wide depcheck: exit 1, with one unrelated unresolved wikilink in `items/lem-free-group-augmentation-ideal-has-the-generator-difference-basis.md`, namely the combined target `def-projective-object, def-dependent-choice`. This is outside the queue and was not edited. The check reports no error for the queued item. Existing warnings likewise do not certify or invalidate this local proof review.

There is no unresolved mathematical or local contract obligation for this queue item. No third judgment, Sol adjudication or judge pass stamp is authorized or created by this decision.

## Completed terminal checkpoint

The prescribed recorder accepted exactly one `repaired` row for this item at `2026-09-08T17:05:07.933Z`. It binds context SHA-256 `d8c2ccb1348d72bece0b5c891000909e145f03d8898cf19a7eb838c1c532ad0c` and item judge SHA-256 `1b50cb957d9e8423bf0717cb98469c20ba5138f42fdf89a9a36b8cf6a86240ee`. A subsequent read confirmed the final guard hash above and exactly one item receipt.

The terminal checker found 4 current resolutions. Its only two errors were missing engine-written dispatch result files for group g and this still-running group-c dispatch. It reported no item/context hash mismatch or mathematical evidence error. The engine must write `research/phase-2-wave-1-dispatch/final-adjudicator-step8-fa-c-round-1.result.json` after this dispatch returns; I did not fabricate that result. Next action belongs to the engine: collect the dispatch completion and rerun its normal closure gates. The one-item queue is finished.

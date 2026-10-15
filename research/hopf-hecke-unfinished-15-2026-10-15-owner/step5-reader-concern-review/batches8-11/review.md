# Focused Step-4 reader-concern review, cycle 1

Run: `hopf-hecke-unfinished-15-2026-10-15`. Delegated reviewer: `/root/hh_step5_reader_concerns_8_11`. Root retains owner confirmation, admission, source integration and recertification. This report supplies no new native worker/judge coverage and changes no live carrier or frozen history.

Each finding is confirmed from the authentic batch digest's `concerns[0]`, not from a generated downstream alert. `proposals.json` preserves the exact concern object, digest path, successful native `alpha-batch-read-B.attempt-1.result.json` reference/hash, original completion time, current itemHashGuard, exact unique source excerpts and replacements. All three original Luna verdicts have `keep:true`; their `item_sha256` equals current itemHashJudge. Distinguish those judge hashes from the separately recorded guard hashes.

## Batch 8: confirmed canonical-double identification defect

Read the entire example and verification, `def-hh-finite-double-cross-relations`, `thm-hh-finite-double-hopf-structure-and-canonical-r`, and `ex-drinfeld-double-of-a-finite-group`. The actual definition fixes D(H)=H*op tensor H, and the theorem fixes R=sum (f_i tensor 1) tensor (epsilon tensor h_i). Substituting H=kG, h_i=u_i and f_i=p_i gives precisely the example's functions-first product, coproduct, unit and displayed R. Its elementary proof correctly checks the Hopf axioms, invertibility, intertwining and both hexagons. No division by 2 occurs, so its scope remains every field, including characteristic two.

Substituting H=k^G instead uses evaluation functionals u_i first and functions p_i second. Under the natural factor flip its canonical tensor becomes sum q_i tensor (p_i#u_e), namely the example's R21. The coefficient at (p_e#u_s) tensor (p_s#u_e) is 0 for R: the first group index of every summand of R is e. It is 1 for R21: take i=s and the p_e component of q_s. This distinction remains valid in every field. There is no specified alternate identification or self-duality in the example; none is needed or invented for repair.

The smallest repair changes D(k^G) to D(kG) in the Example and Verification 3.1/3.2. It preserves the richest sound claim: a four-dimensional canonical quasitriangular group-algebra double over every field, with all explicit maps and calculations intact. The Example interface changes, so consumer ownership was discharged: repository-wide exact-ID and old-D(k^G) searches in `items/` and `library/` find no mathematical item consumers, aliases are empty, and no old-name use outside the supplier. The only page placement is `library/hopf-hecke-algebras/quasitriangular-hopf-algebras-and-braided-module-categories-examples.md`; its full prose says "four-dimensional double for the group of order two", with no k^G assertion, and remains accurate. No consumer Statement changes and no further hop are required. The later theorem is an outgoing forward reference, not a consumer. Manifest identity/dependencies are unchanged.

Candidate: `ex-hh-canonical-r-matrix-for-the-double-of-cyclic-two-group.candidate.md`. Exact proof-contract derivation-claim mirror repairs (3.1 and 3.2) are in `batch-8.contract-patch.json`. Historical template-review/acceptance notes are preserved; no manifest patch is needed.

## Batch 10: confirmed reversed-containment sentence

Read Statement, F1/F3, and complete proof. Each T_u is a J-word, so every basis element of K_J lies in the generated R-subalgebra; R-linearity gives K_J contained in that subalgebra. Conversely stability under the generators and 1 in K_J gives all J-words, and hence their R-span, in K_J. The original equality and subsequent module decompositions, injectivity, tensor basis and adjunction do not change. Only the first containment sentence needs correction. Statement unchanged, so no new consumer maintenance is triggered.

Candidate: `thm-hh-parabolic-hecke-freeness-and-induced-bases.candidate.md`; exact 1.1 claim mirror patch: `batch-10.contract-patch.json`; no manifest patch.

Continuity note resolved by tracing code: `RUN-step3-owner-required-page-routes.json` includes this item's current guard a0fd78a083a901c71c4c60f0744fa1d6dd1a85eeb42c36b4e5015cc3e427cb45 in dependency_path[0]. A live revalidation of that historical routing registration after repair would see changed source. However `tools/step3-close.mjs` verify calls `requiredPageClosureEvidence`, which explicitly freezes authenticated historical inputs only; `tools/step3-owner-required-page-routes.mjs:112` checks the original registry and referenced archives, not current consumer source guards. `verify-post-3a` is in the original close path, not closure verify. Thus no continuity extension or registry refresh is proposed for ordinary later Step-5 source repair. Root must preserve the registry and all archives exactly and apply current Step-5 currency rules.

## Batch 11: confirmed ambient-ring notation defect

Read the full example and verification and the actual generated/principal-ideal interface. For p=X^2-S^2 in R[X], the generated ideal consists of polynomial multiples R[X]p, while Rp with the already fixed R=Q[[h]] includes only constant-polynomial multiples. The preceding monic reduction and degree argument already uses arbitrary polynomial multiples and is sound. Correct F5 to specify the ambient ring and correct Verification 1.1 to R[X]p. The rank-two basis, idempotents, split fibers and simple labels are unchanged. Example unchanged, so no consumer maintenance is triggered.

Candidate: `ex-hh-two-dimensional-formal-split-deformation.candidate.md`; exact 1.1 claim mirror patch: `batch-11.contract-patch.json`; no manifest patch. Supplier citation quotations remain literal supplier text; the local F5 clarification does not alter a supplier quote.

## Focused final check

Inspected candidate edits against their before excerpts; every source excerpt occurs exactly once. Reviewed all corrected claims and unchanged arguments above. Ran `node tools/proof-layout.mjs` on the three explicit candidate item paths after the final candidate edit: **3 items, 17 steps, 0 defects** (exit 0). No gates, stamps, state edits, frozen-pack edits or live mathematical source edits were performed. Root/native 5.2 owns integration and corresponding live-file proof layout, contract currency and later rejudgment.

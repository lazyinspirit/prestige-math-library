# Batch52 final-review endpoint trace repair

Disposition: the confirmed s=1 affine pullback norm omission is repaired in proof4.1 only. Statement, Facts, dependencies, constants, scalar/vector scope, polynomial degrees and the full fractional range are unchanged. The same owner checked every actual scoped consumer use; no consumer repair is necessary. All writes are drained.

## Actual reading and preimage

Read CLAUDE.md fully, the current run-local owner direction's prerequisite policy, the full actual `scope-review/batch-52/review-1.json`, the full current scaled fractional trace proof, the actual published shape-regular affine scaling proof and its complete affine weak-derivative/pullback supplier proof. Then read the complete current six consumers listed in the final review, including Statements, facts and every proof step. Read the seventh declared consumer, the global fractional boundary-flux trace lemma, as well. This is a focused supplier/consumer check of the reported endpoint issue, not a wholesale new audit of the completed fractional construction or an external-publication reading claim.

Root granted sole source ownership for this surgical batch52 repair. Before the first edit, copied the complete exact carrier to `scope52-before/items/lem-nitsche-scaled-fractional-simplex-trace.md`. No other canonical item/page was edited, and no outside source was written. No metadata, level, status, verification, manifest, contract, readiness, native report or control was changed.

## Confirmed defect and correct calculation

The old proof asserted that the L2 norm of the reference weak gradient was at most C h_K times its physical L2 norm. That drops the volume Jacobian. The actual affine supplier states

D_hat(w compose F_K)=A_K^T (Dw) compose F_K,

and its L2 pullback contributes |det A_K|^(-1/2). Thus, with w_hat=w compose F_K,

||grad_hat w_hat||L2(hat K) <= ||A_K|| |det A_K|^(-1/2) ||grad w||L2(K) <= C h_K^(1-d/2)||grad w||L2(K).

The order-zero norm similarly satisfies ||w_hat||²=|det A_K|^(-1)||w||². The actual shape-regularity supplier already declares and uses this affine pullback premise; its singular-value, volume and facet estimates give ||A_K||<=C h_K, |det A_K| comparable to h_K^d, and J_F<=C h_K^(d-1). Both actual supplier proofs were read. The repaired step now retains these exact factors before applying the reference weak-H1 trace:

||T_Fw||² <= C J_F |det A_K|^(-1) [||w||²+||A_K||²||grad w||²]
             <= C [h_K^(-1)||w||²+h_K||grad w||²].

The gradient term has h_K^(d-1) h_K^(-d) h_K²=h_K, not a dimension-dependent loss. The scalar calculation applies componentwise to vector fields and the squared component norms add. This proves exactly the existing endpoint estimate. The 1/2<s<1 pair-integral argument, mean-zero estimate, restriction/intrinsic distinction and trace identification are untouched. No hidden h<=1 condition, degree restriction, constant inflation or additional hypothesis is introduced.

## Actual consumer dispositions, supplier before consumers

The source-derived actual descendant closure contains the repaired supplier plus seven items. It has no outside textual reference to the supplier. `scope52-consumer-dispositions.json` records the exact current item IDs/deps and direct text equality of the original Statement and entire front matter. The old/current graph is unchanged because no dependency or interface was changed.

- `lem-nitsche-fractional-weak-green-and-flux-cancellation`: F2/5.1 uses continuous weak-H1-to-L2 facet trace to pass smooth test approximants to an arbitrary H1 test. The corrected endpoint has precisely the original fixed-cell continuity and uniform shape-regular scaling required. Its proof6.1 likewise passes interior value traces through H1 convergence. No edit needed.
- `thm-nitsche-zero-boundary-fractional-comparison-interpolation`: at2.1, the repaired endpoint applied to zeta-p_K gives h_K^(-1)·h_K^(2+2s) A_K²+h_K·h_K^(2s) A_K²=O(h_K^(1+2s))A_K², yielding the stated h_K^(s+1/2) value-trace error. The gradient application at s=1 gives h_K^(-1)·h_K² A_K²+h_K A_K²=O(h_K)A_K², exactly the weighted h_K^s bound after multiplication by h_K. Step4.1 has the same cancellation for the final affine comparison, including its cellwise Hessian endpoint and h_F comparable to h_K. The earlier trace-matching construction is preserved. No edit needed.
- `thm-nitsche-consistency-and-energy-quasioptimality`: F4/1.2 uses the now-supported weak Green identity on the stated H1 discrete tests. Orthogonality, coercivity and the original C_theta and higher-order/local conditional primal approximation branch remain unchanged. No edit needed.
- `thm-nonsymmetric-nitsche-l2-error-with-boundary-defect`: F6/F7 and1.1–2.1 use the same Green and comparison interpolation suppliers. Their endpoint regularity and facet pairings are now justified with exactly the original h^s dual comparison factor; the genuine dual PDE hypothesis and surviving h^(1/2) boundary defect remain intact. No edit needed.
- `thm-symmetric-nitsche-l2-error-under-dual-regularity`: F6/F7 and1.1–2.1 use the same Green identity and zero-boundary comparison. Their cancellation and all-comparison form bound retain the original M1 and h^s factor, and the separate higher-order primal branch is unchanged. No edit needed.
- `ex-nitsche-symmetric-and-nonsymmetric-l2-defects`: F3 and verification2.1 invoke those same Green/duality conclusions under the actual two theorem hypotheses. Its triangle calculation and distinction between symmetric cancellation and nonsymmetric boundary pairing are unaffected. No edit needed.
- `lem-nitsche-global-fractional-boundary-flux-trace`: the actual dependency list includes the scaled trace, so it is included in this ownership check although absent from the review's six-use list. Its proof instead groups facets by finitely many fixed supporting planes and directly applies the existing whole-space Fourier hyperplane trace. It does not use the erroneous reference-gradient norm assertion. Its h^(1/2) estimate and fixed-domain constants remain valid without any edit.

All actual uses retain Countable Choice, arbitrary fixed d>=2, the complete 1/2<s<=1 branch, graded shape-regular affine meshes, and the original degree/general-primal caveats. No outside writer or new supplier is needed for this correction.

## Required layout and handoff

After the final edit ran exactly:

`node tools/proof-layout.mjs items/lem-nitsche-scaled-fractional-simplex-trace.md`

Exit0: `proof-layout: 1 items, 7 steps, 0 defects`.

No tests, full validators, gates, hashes, native-report/control edits or commits were run. Root retains current source/metadata binding, contracts, levels, readiness and all ordinary native acceptance/gates. This report provides owner repair and consumer evidence only.

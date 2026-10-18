# Batch 46 final diagnostics owner resolution

Run: numerical-analysis-remaining-71-2026-10-17. Completed 2026-10-18 after rereading CLAUDE.md, the full batch-46 review-1.json, both full current FAS algorithms, and the actual old/current consumer claims and proofs listed below. This is a focused owner repair of the single final native finding, not a new native whole-batch review.

## Actual before-image and minimal correction

Exact pre-owner source bytes are archived at scope46-before/alg-fas-two-grid-cycle.md. No initial/native history was reconstructed. The only changed source is items/alg-fas-two-grid-cycle.md, and its sole difference from that archive is:

```diff
  4. Form the trial correction
  $$\widetilde u:=u+P(z-Iu).$$
  If $\widetilde u\notin U_h$, return the current valid fine iterate $u$ with
- status `domain-failure`; otherwise set $u:=\widetilde u$.
+ status `domain-failure` and $\Delta$; otherwise set $u:=\widetilde u$.
```

The defect is confirmed: all successful coarse calls in Step 3 have already appended their status/residual and nested diagnostic data to Delta. If the trial correction then leaves the fine domain, the previous Step-4 return discarded that completed diagnostic list. The correction now returns it alongside the unchanged current valid fine iterate and domain-failure status. All native prior trial-iterate safeguards in pre-smoothing, correction and post-smoothing are preserved. There is no change to an iterate, transfer, coarse right side, residual, successful branch, or solver budget.

## Same-owner affected consumer dispositions

The changed algorithm has no aliases. The pre-owner and current interface change is confined to returning the existing list in one failure branch; no logical edge or name changes. Actual source references and transitive consumer uses in items/ and library/ were inspected. Each listed item was read in full, including its proof where present; each disposition concerns the actual affected use, not an unrelated corpus audit.

| Consumer | Disposition |
| --- | --- |
| alg-fas-vw-cycle | Accept unchanged after focused check. Its recursive output contract returns the two-grid output and finite coarse-call residual list, propagating a failure with the last valid fine iterate. Step 4 now supplies exactly that missing list; no recursive interface rewrite is necessary. |
| lem-fas-vw-cycle-work-and-status | Accept unchanged. Finite status and nested-diagnostic bookkeeping are already included in C_j. Returning the accumulated finite list on early domain failure is consistent with its induction and recurrence. |
| lem-fas-coarse-branch-derivative | Accept unchanged. Uses the same successful exact coarse-root correction map and smoother composition. Failure-return diagnostics do not enter its implicit-function or chain-rule calculation. |
| lem-fas-fine-root-fixed-point | Accept unchanged. The selected zero-defect exact branches keep the root fixed; its proof has no correction-domain-failure branch or diagnostic assumption affected by the repair. |
| thm-fas-local-contraction-under-derivative-bound | Accept unchanged. Assumes an actual successful smooth exact-branch map on its invariant region; its derivative/Taylor estimate is unaffected by adding diagnostics to a failure return. |
| lem-fas-inexact-coarse-solve-residual-defect | Accept unchanged. Compares valid exact/inexact corrected states under an explicit residual-to-solution estimate and post-smoother Lipschitz hypothesis. No dropped diagnostic list is used in the estimate. |
| thm-fas-linear-cycle-reduces-to-galerkin-correction | Accept unchanged. Its recursive exact successful updates, translated coarse iterates and matching smoothers are identical before and after this correction. |
| ex-fas-linear-cycle-equivalence | Accept unchanged. Explicit successful 2-by-2 coarse correction remains the same; no domain-failure diagnostics enter its verification. |
| ex-fas-reaction-poisson-tau-cancellation | Accept unchanged. The manufactured exact root selects its restriction as the coarse root and gives zero correction, with unchanged tau and fixed-point calculations. |
| cex-fas-zero-tau-breaks-fine-root | Accept unchanged. Its counterexample computes a successful wrong coarse correction when tau is omitted, and contrasts it with the correct zero correction; no failure-list premise is involved. |
| ex-fas-bifurcation-shrinks-contraction-ball | Accept unchanged. Its explicit exact-branch map, derivative and shrinking invariant-ball estimate are unchanged. |
| ex-fas-semilinear-reaction-diffusion-local-convergence | Accept unchanged. Its valid exact root branch and C² cycle-map estimates use the unchanged successful procedure. |
| nonlinear-full-approximation-multigrid | Accept unchanged. Its bounded status/diagnostic scope and rich exact/local/inexact claims now match the repaired failure output; no page sentence or inventory change is needed. |
| nonlinear-full-approximation-multigrid-examples | Accept unchanged. Its example summary uses the unchanged exact successful branches and has no conflicting failure diagnostic claim. |

The local second-derivative composition lemma was also read in full as context; it does not consume either FAS procedure, so its calculus statement is unchanged. The linear translation lemma is an unchanged supplier of the linear reduction result, not a consumer of this two-grid Definition change. No additional outside consumer repair is needed. No outside source writes were performed.

## Explicit check and handoff

After the final edit ran:

`node tools/proof-layout.mjs items/alg-fas-two-grid-cycle.md`

Actual result: exit 0; `proof-layout: 1 items, 0 steps, 0 defects`.

No tests, full validators, gates, native report/control/state edits, contracts, metadata levels, readiness records, or hash generation were performed. Root owns actual source/before-image binding and the native resolution. The single final native diagnostics finding is substantively resolved without narrowing the approved scope.

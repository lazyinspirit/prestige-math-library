# Batch 73 Step 3a adjudication

Run: `numerical-optimization-dynamics-2026-10-16`; group: `batch-73`.
Scope: five touched obligations and `refuter:73:1`; no page or reader findings. Review follows the generated item order. No judge or gate certification is performed.

## Level 0 checkpoint

`alg-amsgrad-update`: the finite recurrence is defined also at beta=0 and zero gradients: positive bias denominators, nonnegative second moments, epsilon>0. The corrected literature caveat is accepted: Reddi–Kale–Kumar, https://arxiv.org/pdf/1904.09237, PDF page 5, Algorithm 2 lines 289–302, uses max of uncorrected v and no second-moment bias correction. The original caveat implied subsequent correction and was inaccurate; the actual local update never changed. Confirmed nonfatal source-description defect, repaired by the reader.

`lem-finite-sum-gradient-is-average`: reviewed all three steps and suppliers. Induction starts with the zero map, closes finite derivative addition, then scalar multiplication and coordinate evaluation. n>=1 has positive real image by `lem-of-naturals-positive`; d=0 has vacuous coordinate equality and zero derivative. The old inverse justification was immediate from the already cited `def-finite-sum` real-field conventions; adding an explicit supplier is audit enrichment, not a newly confirmed logical defect. Verdict `reviewed_no_defect`, change_kind `audit_enrichment`.

`lem-positive-diagonal-map-preserves-closed-convexity`: reviewed all three steps and suppliers. Nonempty C and d>=1 ensure a point and positive M. Negative integer powers mean inverse of the positive square; the inverse norm estimate follows termwise and yields an exterior ball of radius r/M. This handles singleton C and C=R^d (vacuous complement). The old square-of-inverse identification is elementary field algebra, so the rewrite is audit enrichment, not a logical defect. Verdict `reviewed_no_defect`, change_kind `audit_enrichment`.

Historical evidence: recovered complete preimages matching the immutable pre-reader raw SHA256, and compared their full diffs with current reader-post bytes. All five touched current raw hashes equal the post snapshot. Preimage paths are recorded with final decisions. No historical-byte uncertainty for these comparisons.

Next: level 1 risk reviews, then the SAGA finding at level 2; no blockers so far.

## Level 1 checkpoint

Completed current proof and exact supplier review for periodic Adam drift, component cocoercivity, and both minibatch variance formulas. Specific derivations and boundary checks are in their contract risk_review notes. All are sound; no edits or additional decision obligations. Descent supplier proof was read, including its finite mean-value partition and Archimedean limit argument. Conditional products satisfy integrability for the extended take-out rule; AC is declared. Next: level 2.

## Level 2 checkpoint

`refuter:73:1`: confirmed fatal undefined notation in `cex-saga-linear-factor-fails-under-standard-initialization`. The original proof defines L only at its last step and never defines V or S. Added local definitions before the refuted claim, exactly matching the later theorem's convention; no cyclic theorem dependency is introduced. Recomputed the deterministic witness and its strict ratio. No proof step, dependency, manifest entry, or provenance category needed changing. The theorem's Remarks and the A page are the only actual content references found by an items/library search; both remain correct. The native scope records observed_sha256 e8869b0d96a379b2a588015792a3489b7aeac8a46501023bb40db2043a353d72; the pre-edit raw carrier equals immutable pre/post raw c023e2a71bcd141c54dd26b57934ceb7fcf033a0072c4fd337be5954d3b94ca6. These digests are retained as distinct representations, not claimed equal. The current pre-edit text independently exhibits the reported defect.

SAGA estimator/table recurrence, SVRG estimator bound, and the Adam example passed full local argument/supplier review. Complete risk notes recorded before proceeding upward. No published defect or outside consumer repair identified. Next: positive diagonal subproblem, both SAGA rate branches, and SVRG epochs.

## Level 3 checkpoint

Reviewed diagonal subproblem, constant-step memory-capped SAGA, memory-scaled SAGA, and SVRG epoch in order; each risk review is complete with coefficient computations and boundary checks in its contract. The subproblem reader clarification of positive roots is sound elementary enrichment (`reviewed_no_defect`, `audit_enrichment`); no changed Statement. Proximal supplier proof was read in full; its compact sublevel/strict midpoint argument gives existence/uniqueness and the coordinate completion of squares transfers that result. At dimension zero the nonempty feasible set has its sole point, so the same claim is immediate. No blocked supplier or consumer repair. Next: one-step AdaGrad and logistic example, then final regret theorem.

## Level 4 checkpoint

Completed the one-step AdaGrad variational argument and weighted-square estimate, and all logistic computations and SVRG hypotheses. The logistic reader edit spells out the ordinary convexity already implied by the same displayed strong Jensen argument; record `reviewed_no_defect` / `audit_enrichment`, no defect row. Taylor applies on all real segments with positive log arguments, and q=181/224 is correct. All risk notes completed before final level-5 review. Next: final regret telescope and local checks.

## Level 5 checkpoint and metadata reconciliation

Completed the regret theorem: positive regularized accumulators justify dual divisions, variable-metric telescoping gives coordinate D_j^2 s_T,j, and g_t,j^2/s_t,j<=2(s_t,j-s_(t-1),j) gives the remaining eta term. Checked T=1, zero gradients and singleton/zero-diameter sets. No defect found.

The manifest still mirrored the old AMSGrad caveat and omitted the reader-added finite-sum positivity dependency. Reconciled those exact fields and added the SAGA counterexample's local definitions to its statement mirror. No other manifest fields or contracts' mathematical derivations changed. AMSGrad is therefore `amended_repair` for source/manifest consistency, with the reader's corrected mathematics retained. All 16 HIGH/CRITICAL reviews are complete. No publication edits, proposed withdrawals, or open supplier obligations.

## Final decisions and sources

Exactly six decisions are in the named decisions JSON: AMSGrad `amended_repair` (reader correction retained, manifest mirror amended); four touched lemmas/example `reviewed_no_defect` with `change_kind: audit_enrichment` and empty defect IDs; SAGA refuter finding `confirmed_fatal`, completely repaired with confidence 1. The two confirmed defects have distinct closed `3a-adjudicate` rows `nod-b73-3a-amsgrad-source-convention` and `nod-b73-3a-saga-undefined-potential`. No manufactured rows were added for sound elementary proof expansions.

The refuter's e8869b... hash was independently reproduced as SHA256 of sorted-key compact JSON of the frozen post item/contract/manifest triple, resolving its apparent difference from raw c023e2... . No missing historical preimage or owner resolution is needed. The decisions also name each complete touched preimage used for the comparison.

Primary source passages actually opened: [Reddi–Kale–Kumar](https://arxiv.org/pdf/1904.09237), Algorithm 2 (PDF p.5), verifying the uncorrected second-moment maximum and denominator; [Defazio–Bach–Lacoste-Julien](https://proceedings.neurips.cc/paper_files/paper/2014/file/937964195d6fb3a55cd7cc578165f058-Paper.pdf), §2 (PDF p.2), checking initialized table and pre-update-point replacement; [Johnson–Zhang](https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf), Figure 1 option II and full Theorem 1 proof (PDF pp.3–5), checking independent random inner output, variance and epoch telescope; [Duchi–Hazan–Singer](https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf), §1.1 update (4), Theorem 5 and Appendix C full scalar-gradient inequality proof (PDF pp.3,12,29). Local epsilon-regularized accumulators use the authored factorization, rather than the source's zero-over-zero convention. These source passages establish relevant conventions; local constants and claims were reviewed from authored proofs and their actual supplier statements, not adopted from reports or literature by authority. Other bibliography entries were not externally audited.

Exact dependency statements were opened for every reviewed carrier; substantive draft descent, strong-convexity, indicator/proximal supplier proofs were also read. Specific hypotheses, zero/endpoint cases, independence and integrability, and exact AC inheritance are recorded per item in the owning contract's risk_review. No published defect identified, so the published ledger stays untouched. The frontier ledger records owned consumer dispositions. No agents, judge calls, stamps, gate battery, publication or commit initiated.

## Local checks

- Precheck on the five reader-touched carriers plus repaired counterexample: 5 proof-bearing files checked, 0 failing; algorithm has no proof body.
- Rendercheck on the repaired counterexample: 1 file, successful YAML and real KaTeX parsing.
- Risk report without require-reviewed at intake: 17 routed entries, including 16 HIGH/CRITICAL. After review, --require-reviewed: 0 errors, 17 entries; all required reviews complete.
- Final batched proof-layout: 6 items, 15 steps, 0 defects (exit 0).
- Focused metadata checks: exactly six owed decisions, matching closed ledger subjects, all 16 required risk reviews complete, touched manifest dependencies and revised statement mirrors agree. Initial literal whitespace comparison flagged only display-delimiter spacing in the pre-existing AMSGrad manifest; removing whitespace confirmed identical mathematical/prose content. No content change was needed.

Blockers: none. Engine owns current decision-hash stamping and subsequent gate battery.

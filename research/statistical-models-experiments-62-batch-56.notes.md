# Batch 56 authoring notes — Polyhedral selective inference

## Plan reconciliation

The assigned design at SME-56 and the two page rows in plan-spec.json agree on
the page IDs, category, titles, orders 2028/2029, and all five page-level
requires. No plan/design conflict was found. The listed central-limit and
weak-convergence pages remain page-level requirements as planned; the claims
authored here are exact finite-sample claims and have no logical CLT or
weak-convergence premise.

The October 12 SME-56 audit record labels its MSF-08/10 interfaces
planned/not-published at that checkpoint. The current published
mathematical-statistics pages and their actual items now supply those
interfaces. I read the current item bodies and proofs before using them.

## Inventory and dependency levels

Batch-level scheduling input is
be0b7aca66787065a1de6e365a80730a6752b56b03a5c15b6c6abcb95603d30d. Batch 56
is dependency level zero with no prerequisite batches. No item depends on a
different in-run batch. Item dependency levels count only in-run suppliers:

| Item | Level | In-run suppliers |
| --- | ---: | --- |
| def-polyhedral-selection-event-and-contrast-interval | 0 | none |
| lem-standard-normal-cdf-is-continuous-and-strictly-increasing | 0 | none |
| def-exact-selective-confidence-set-for-a-functional | 0 | none |
| def-polyhedral-selective-normal-pivot | 1 | def-polyhedral-selection-event-and-contrast-interval |
| lem-polyhedral-event-restricts-contrast-to-interval | 1 | def-polyhedral-selection-event-and-contrast-interval |
| thm-gaussian-contrast-independent-of-orthogonal-residual | 1 | def-polyhedral-selection-event-and-contrast-interval |
| thm-truncated-normal-selective-pivot-is-conditionally-uniform | 2 | def-polyhedral-selection-event-and-contrast-interval; def-polyhedral-selective-normal-pivot; lem-standard-normal-cdf-is-continuous-and-strictly-increasing; lem-polyhedral-event-restricts-contrast-to-interval; thm-gaussian-contrast-independent-of-orthogonal-residual |
| cor-exact-polyhedral-selective-tests-and-confidence-sets | 3 | def-polyhedral-selective-normal-pivot; thm-truncated-normal-selective-pivot-is-conditionally-uniform; def-exact-selective-confidence-set-for-a-functional |
| ex-selective-inference-after-choosing-the-larger-of-two-means | 4 | def-polyhedral-selection-event-and-contrast-interval; def-polyhedral-selective-normal-pivot; lem-standard-normal-cdf-is-continuous-and-strictly-increasing; thm-truncated-normal-selective-pivot-is-conditionally-uniform; cor-exact-polyhedral-selective-tests-and-confidence-sets |

Item-level external suppliers used in the proofs are the current published
items named in the manifest dependencies. These include the normal law and
Gaussian projection results, the conditional-density formula and product-law
theorem, and the current p-value and confidence-set interfaces. Their actual
carriers are read-only context.

## Scope and source notes

The A page uses a fixed finite-dimensional Gaussian model, known positive
variance, a fixed nonzero contrast, and one fixed polyhedral selection event
with positive probability. It proves the interval reduction, conditional
truncated-normal law, uniform pivot, and single-contrast selective tests and
confidence sets. It makes no lasso construction, unknown-variance result,
nonpolyhedral selection claim, selected-family simultaneous guarantee, or
asymptotic claim. The B page works the two-normal-means selection example.

The Lee–Sun–Sun–Taylor article was read in full (PDF pp. 1–22), including
Lemma 5.1, Theorem 5.2, Theorem 6.1 and Appendix A. Fithian–Sun–Taylor was
read at the assigned PDF ranges 1–10 and 15–16. The independent LTCC selective
inference lecture deck was inspected throughout (48 slides), including the
polyhedral lemma and truncated-normal CDF section.

The LTCC deck's displayed general-covariance coefficient on its polyhedral
lemma slide is inconsistent with its own decomposition. It prints
c=(eta^T Sigma^{-1} eta)^{-1} Sigma eta, while z=(I-c eta^T)y requires
eta^T c=1. For Sigma=sigma^2 I this printed coefficient gives
eta^T c=sigma^4, not 1 in general. I do not use that formula. The A-page
interval argument is proved locally from the row inequalities with
c=eta/||eta||^2, and the Gaussian independence uses the current published
orthogonal-projection supplier. The lecture deck's separate univariate
truncated-normal CDF and central interval discussion are recorded as
cross-check context; they do not replace the local proof.

## Final authoring and check record

The exact selective-pivot proof uses the feasible-fiber indicator
H(z)=G(z) and L(z)<=U(z) when computing the conditional normalizer. This
keeps infeasible fibers from contributing a negative CDF difference; singleton
fibers have zero normal mass. The B example states the concrete joint Gaussian
construction and proves P_mu(S)>0 for every mean by a positive-probability
rectangle. The example's direct dependencies and the batch manifest match.

The batch cross-batch input is `[]`: every in-run item dependency stays within
this A/B pair, and the page-level requirements point to already-published pages.
All three declared source documents were read at the stated locators, the
coverage file records the per-result dispositions and first successful fetch
attempts, and `source-fetch-check` confirms 3/3 stamped sources. No retrieval
failed, so no source-resolution recovery/drop record was applicable. The proof
contracts cover the six proof-bearing items, quote exact current supplier
sections, map every numbered step and fact use, and record the required AC uses.
No registered finite-smoke check applies to these polyhedral claims, so each
contract's `finite_checks` is empty.

Final scoped results:

| Check | Result |
| --- | --- |
| Manifest dependency arrays and item/frontmatter synchronization | 9 items; 0 errors or mismatches |
| In-batch item dependency levels | 9 items; levels 0–4; 0 errors |
| Focused `depcheck` | 9 selected items and their dependency closure; 0 errors or warnings |
| `content-policy` | 9 items; 0 errors or warnings |
| Coverage checklist | 22 harvested results; 0 errors or warnings |
| Source fetch check | 3/3 sources verified and resolved |
| Strict proof contracts | 6/6 checked; 0 errors or warnings |
| Scoped precheck | 6 proof items; 0 failures |
| Scoped rendercheck | 11 files (9 items and 2 pages); 0 errors or warnings |
| `proof-layout` after final edits | 6 items, 20 steps; 0 defects |
| Step 1 readiness records | 9/9 current and ready |

The required unified cross-batch-ledger refresh was attempted after writing
this batch input but stopped before updating the unified file. The exact
blocker is `research/statistical-models-experiments-62-batch-21.cross-batch-dependencies.json`:
its ten rows (page `standardization-and-ipw-identification`; items
`thm-standardization-identifies-a-causal-mean`,
`thm-inverse-probability-weighting-identifies-a-causal-mean`,
`ex-standardization-and-ipw-two-strata-calculation`,
`ex-extreme-ipw-weights-under-poor-overlap`,
`ex-weight-truncation-changes-the-ipw-target`, and
`ex-positivity-failure-prevents-standardization-and-ipw-identification`)
all use `status: "unresolved"`, which is not an allowed ledger status. Current
manifest ownership for all those consumers is batch 21. That file was not
edited because it belongs to another batch; the owner must reconcile the rows
before the unified refresh can succeed. Batch 56 has no cross-batch edge.

For validation scope, an earlier accidental unscoped `depcheck` exited nonzero
on unrelated whole-corpus findings and wrote no files; it is not batch evidence.
The final focused `depcheck` above is the applicable result. A previous
run-wide Step 1 check likewise reported missing records outside this batch;
the nine current batch-56 records were verified individually and are not a
claim about overall run readiness.

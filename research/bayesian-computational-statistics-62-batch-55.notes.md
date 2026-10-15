# Batch 55 authoring notes — studentized permutation tests under weak parameter nulls

Run: bayesian-computational-statistics-62 · batch 55 · pair:
asymptotically-robust-permutation-tests / its examples page.

## Inventory and dependency order

The manifest contains 17 A-page items and 6 B-page items. The in-run item
levels recomputed over the batch-54/55 closure are:

- Level 0: def-two-sample-u-statistic-parameter,
  lem-finite-population-permutation-clt,
  lem-hypergeometric-binomial-contiguity-for-permutation-samples,
  lem-general-measurable-finite-group-randomization-validity.
- Level 1: def-two-sample-order-r-u-statistic-and-first-projections,
  lem-permutation-consistency-from-iid-mixture.
- Level 2: lem-permutation-mixture-coupling-for-two-sample-u-statistics,
  lem-two-sample-u-statistic-projections-well-defined.
- Level 3: lem-pooled-mixture-projection-and-variance,
  lem-two-sample-u-statistic-hoeffding-decomposition.
- Level 4: lem-two-sample-u-statistic-degenerate-remainder-order,
  def-studentized-two-sample-u-statistic.
- Level 5: thm-two-sample-u-statistic-projection-clt,
  cor-two-sample-permutation-exact-under-equal-distributions,
  thm-two-sample-u-statistic-permutation-clt-under-mixed-centering.
- Level 6: thm-studentized-permutation-validity-under-mixed-assignment-centering,
  thm-studentized-two-sample-u-statistic-permutation-validity.
- Level 3 on B: cex-weak-null-does-not-imply-mixed-assignment-centering.
- Level 5 on B: cex-positive-kernel-second-moment-does-not-imply-nondegenerate-projections.
- Level 7 on B: ex-same-mean-unequal-variance-studentized-permutation-test,
  ex-exact-versus-weak-two-sample-null,
  ex-studentized-rank-u-statistic-under-weak-null,
  cex-extra-sqrt-m-after-standard-error-studentization-diverges.

All manifest deps match the carriers. The dependency graph over batches 54
and 55 has 31 items and no cycles. The batch schedule is level 1 with batch 54
as its prerequisite; the supplied scheduling input hash is
4353922e2bc21330b8d06b628923b2b91b410a0bed9abbcf2167572e3af83d9d.

## Plan and design reconciliation

plan-spec.json and the complete BCS-52 design agree on the two page IDs,
titles, order, category, companion relationship and
finite-group-permutation-inference requirement. The plan-spec item arrays are
empty planning placeholders; the generated batch-55 manifest supplies the 23
assigned item IDs. The design label BCS-52 is a page label, while this run
schedules the pair in batch 55 after its actual batch-54 prerequisite; this is
not a scope conflict.

Two mathematical conflicts prevent the broad weak-null theorem from being
marked ready:

1. The plan states only the weak parameter null theta(P,Q;h)=0, block
   antisymmetry, mixed second-moment bounds, positive first projections and
   consistent studentizers. The 2011 report's Theorem 3.1 / Appendix A
   Lemma A.1 coupling proof also assumes E h=0 for every assignment of P/Q
   laws to the kernel positions and condition (9),
   p-m/N=O(N^(-1/2)). The weak null does not imply the assignment-wise
   means vanish. cex-weak-null-does-not-imply-mixed-assignment-centering
   gives the explicit order-2 kernel h=x_1x_2-y_1y_2, with weak-null value
   zero but mixed assignment mean 1/2. This defeats the cited proof route,
   not the broad asymptotic conclusion itself.
2. The 2011-05 report's Lemma 3.3 transfers from a fixed mixture only with a
   sample-fraction rate. The local lem-permutation-consistency-from-iid-mixture
   instead uses the exact triangular mixture p_N P+(1-p_N)Q, and its local
   hypergeometric/binomial contiguity proof handles unrestricted p_N -> p.
   The 2011-09 fixed-mixture coupling rate is likewise not silently imported:
   the local mixture coupling constructs the exact p_N mixture row and proves
   its own mismatch bound.

The smallest proposed missing supplier is
thm-two-sample-u-statistic-permutation-clt-under-weak-null, placed on the A
page before the broad studentized theorem. It must prove the conditional
permutation limit for sqrt(m) U_{m,n} under the planned weak-null and mixed
second-moment hypotheses, without assignment-wise centering or a
sample-fraction rate, and handle the triangular mixture. Its argument is not
available in the read sources or local suppliers. The broad theorem is retained
with its planned scope and exact affected claim, but has no proof and is
recorded as escalated. The 2013 main paper says all proofs are in the separate
supplement DOI 10.1214/13-AOS1090SUPP; that supplement was unavailable,
unread and not used.

There is also a scale conflict in the plan. The local definition and design
specify the standard error
V_SE = r sqrt(sigmahat_m^2/m + sigmahat_n^2/n) and S=U/V_SE. The source's
scale is V_CR = r sqrt(sigmahat_m^2+(m/n)sigmahat_n^2)=sqrt(m)V_SE, and its
Theorem 3.2 concludes for sqrt(m)(U/V_CR), which is S itself. Therefore
the design's additional sqrt(m) S conclusion is false under its own
standard-error definition. cex-extra-sqrt-m-after-standard-error-studentization-diverges
proves that the extra factor makes the pivot diverge in probability. The
standard-error pivot result is retained in the proved stronger
assignment-wise branch; the plan inconsistency is escalated for owner
reconciliation.

The discrete rank example's pooled projection variance was checked from its
finite masses and is 81/256 at p=1/2; the corresponding triangular-mixture
variance converges to the same value. The unstudentized Wilcoxon result under
an exact P=Q null is not used to infer validity under a weak mean or median
null. The A page states this distinction explicitly.

## Supplier inspection and cross-batch evidence

The actual batch-54 thm-finite-group-permutation-validity Statement and full
proof were inspected, as was its hash-bound Step 1 ready record. Its
finite-group invariance hypotheses and inclusive/tie-randomized rank
conclusions match the exactness corollary. The actual
finite-group-permutation-inference page was also inspected. Other used
supplier statements and proofs were checked for probability-product
well-definedness, Fubini/conditional sections, first-projection moments,
Hoeffding decomposition and degenerate remainder bounds, IID and
finite-population CLTs, conditional Hoeffding bounds, hypergeometric/binomial
contiguity, characteristic-function limits, Slutsky, Chebyshev, finite
randomized ranks and the stated axiom-of-choice dependencies. The finite
randomization and bounded finite-support example arguments remain choice-free;
AC is declared only where the CLT/contiguity suppliers require it.

The cross-batch evidence records the page prerequisite, A/B companion
relationship, and the exactness corollary's dependency on the ready batch-54
theorem. No supplier excerpt or acceptance is inferred from a title.

## Source reading and dispositions

The source URLs, precise locators, all 19 harvested result dispositions and
fetch stamps are in
research/bayesian-computational-statistics-62-batch-55.coverage.json.

- Chung–Romano (2011-09): full 47-page Stanford report read. Inspected
  Theorems 3.1–3.2 and Remark 3.1 (PDF pp. 16–22), Example 3.1, Appendix A
  Lemmas A.1–A.2 and proofs (pp. 32–37), and the complete theorem proofs
  (pp. 44–45). The report requires assignment-wise centering and its
  fixed-mixture coupling condition (9); neither is concealed.
- Chung–Romano (2011-05): full 46-page Stanford report read. Inspected
  §3.4 Lemma 3.2, Remark 3.2, Lemma 3.3 and Remarks 3.3–3.4 (PDF pp. 19–22),
  plus the complete Appendix proofs (pp. 30–34). Its fixed-mixture rate and
  exact-triangular-mixture alternative are recorded separately.
- Major, LNM 2079: full 278-page monograph read. Inspected Chapter 9, printed
  pp. 75–80 (PDF pp. 81–86), including the complete Theorem 9.1 proof,
  Theorem 9.2, Proposition 9.3 and the L2 contraction reasoning.
- Chung–Romano (2013): full 25-page main article read. Its relevant
  asymptotically-linear and randomization-limit results are recorded, but
  their deferred supplementary proofs are not used. The separate supplement
  is not a source record or fetch stamp.

The 2011 papers are source treatments from the same authors; the Major
monograph is the independent textbook/monograph treatment for the A page.
All four actual full-text URLs have live PDF fetch stamps; no retrieval failures
or source drops occurred.

## Scoped check results

All required final checks used the batch-55 item/page selectors:

- node tools/tsx-run.mjs tools/precheck.mts with the explicit assigned item
  files: all 19 proof-bearing items pass; definitions and the escalated
  no-proof theorem are not applicable.
- node tools/proof-layout.mjs with explicit batch-55 item files: 23 items,
  87 numbered steps, 0 defects.
- node tools/rendercheck.mjs with the 23 item files and 2 page files:
  all 25 files pass KaTeX and renderer frontmatter checks.
- node tools/depcheck.mjs --items-file /tmp/bcs55-items.json --quiet:
  selected item/page checks and prerequisite cycle checks pass.
- node tools/content-policy.mjs on the batch-55 pages manifest:
  23 items, 0 errors, 0 warnings.
- node tools/proof-contract.mjs in strict mode:
  23/23 contracts, 0 errors, 0 warnings.
- node tools/coverage-checklist.mjs with required destinations:
  1 A page, 19 harvested results, 0 errors, 0 warnings.
- node tools/source-fetch-check.mjs in check mode:
  4/4 full-text PDF stamps verify; no drops.
- The scoped dependency-level and manifest-sync check recomputed all 23
  batch-55 levels over the 31-item batch-54/55 closure: levels 0–7, no cycles
  or metadata mismatches. The cross-batch input has the three inspected edges.

The four full-text sources were newly stamped in source-fetch-check stamp mode
on 2026-10-15; byte counts and SHA-256 prefixes are in the coverage artifact.
No whole-corpus check is used for this batch. A prior exploratory depcheck
--help invocation had no help mode and fell through to whole-corpus
diagnostics; it made no edits and was discarded. The final depcheck uses the
explicit batch-55 item selector.

## Readiness

The hash-bound selected readiness audit confirms 22 items ready and 1 item
escalated, with no stale hashes. Each ready record includes its declared deps
and justified_by dependencies; the broad theorem record preserves the exact
missing permutation-CLT supplier and affected conditional permutation claim.
These are Step 1 authoring decisions, not independent mathematical approval.

## Owner focused escalation resolution

The historical escalation and source-recovery observations above are preserved unchanged and exact preimages are archived. Focused supplier-first resolution is documented in research/bayesian-computational-statistics-62-owner-u-permutation-intake.md and -proposals.json. New local transposition variance and weak-null permutation-CLT suppliers prove the broad claim without assignment-wise centering or a sample-fraction convergence rate. The studentizer is S=U/V_SE; general joint variance estimates require direct conditional permutation consistency, while a sufficient separate-group IID-mixture criterion remains. Same-agent consumer checks cover the rank example, same-mean and exact-versus-weak examples, exactness corollary and extra-sqrt-m counterexample. All local source/manifest/contract/provenance/level mirrors were integrated by root; final proof-layout12items49steps0defects and strict contracts12/12 passed. Root readiness is current authoring completeness only, with every independent native review and gate retained. Actual complete Chatterjee15-page reading is background only, with a genuine new full-text fetch stamp; no unavailable supplement is used as a proof.

# Erdős cycle 1 — publication-boundary amendment

This amendment is deliberately **not applied before owner audit and the
publication decision**. It changes a published item that is live today. Apply it
in the same change that publishes the Erdős-cycle pages; then clear its stale
audit metadata, rejudge that changed proved-here item in its page context, and
rerun the release gates. It is not part of the owner's limited Step-8 rejudge,
which covered only auditor-modified draft items.

## Stale global scope claim

1. `items/lem-sup-metric-is-a-metric.md`
   - Replace its final remark, which says that uniform convergence “is not
     defined in this library yet,” with an order-relative pointer to
     `def-pointwise-uniform-and-uniformly-cauchy-convergence`.
   - State that
     `rem-uniform-convergence-agrees-with-the-later-uniform-topology` records
     agreement between that quantified definition and convergence in
     `d_\infty`; preserve the distinction that the supremum-metric lemma itself
     proves only that `d_\infty` is a metric.
   - Add those two necessary later-item pointers to `forward_refs` rather than
     adding forward dependencies.

## Publication verification

- Remove `verification.audited` from the changed published item and obtain a
  fresh real verdict after the exact prose and `forward_refs` edit.
- Rerun precheck, prosecheck, citecheck, rendercheck, depcheck, fwdcheck,
  extcheck, depsource, validate-plan, and `git diff --check` before changing
  the draft pages or items to `published`.

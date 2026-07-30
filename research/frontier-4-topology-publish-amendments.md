# Frontier 4 topology — publication-boundary amendments

These amendments are deliberately **not applied before owner audit**. The files
are already published and served live; edit them in the same publication
change that flips the twelve Frontier 4 pages/items, clear stale owner-audit or
page-certification metadata, rejudge every changed `proved_here: true` session
item in its proper page context, and rerun all gates. Never judge the two
`proved_here: false` remarks.

## Stale global scope claims

1. `items/def-first-countable-top.md`
   - Replace the global denial of a Hausdorff non-first-countable example with
     an order-relative statement and point to
     `ex-uncountable-cantor-cube-uniformizable-not-first-countable`.
   - Replace “second countability has no item” with order-relative wording and a
     pointer to `def-second-countable-space`.
2. `items/def-dense-top.md`
   - Replace “no item defines separability” with order-relative wording and a
     pointer to `def-separable-space`.
3. `items/ex-sorgenfrey-line.md`
   - Replace the same global separability denial with order-relative wording and
     a pointer to `def-separable-space`.
4. `library/topology/topological-spaces-and-continuity-examples.md`
   - Make the Sorgenfrey-summary sentence order-relative and point to
     `def-separable-space`.
5. `items/def-separated-sets.md`
   - Replace “separable is not used in this library at all” with the accurate
     distinction and a pointer to `def-separable-space`.
6. `items/rem-suslin-line-non-ccc-square-unverified.md`
   - Say that separability is developed later, while Kunen's specialized
     \(\omega_1\)-recursion remains recorded rather than proved here.
7. `items/def-normal-and-t4-spaces.md`
   - Preserve the page-local open question but replace “the hereditary page
     remains unbuilt” with an order-relative pointer to
     `hereditary-and-productive-separation`.
8. `items/ex-sierpinski-space-is-t0-normal-and-not-regular.md`
   - Preserve that this example does not settle the converse; point later to
     `fs-every-regular-space-is-normal`, where the deleted plank refutes it.
9. `items/rem-stone-theorem-choice-strength.md`
   - State that its independence analysis is not proved here, while
     paracompactness and the sufficient choice-based Stone proof are developed
     later in `thm-stone-metric-spaces-are-paracompact`.
   - Point its cost ledger to
     `rem-paracompactness-choice-and-convention-ledger`; retain that exact
     choice strength remains open.

Any pointer to a later item must be declared in `forward_refs`; use only the
necessary direct pointers and allow inherited marking to propagate.

## Pre-existing false mathematical prose

1. `items/def-first-countable-top.md`
   - Replace “first countability is exactly the hypothesis under which
     sequences suffice” by the accurate sufficient-not-necessary statement
     (under countable choice), with the later hierarchy separating first
     countable, Fréchet--Urysohn, and sequential spaces.
2. `items/thm-first-countable-sequences-suffice.md`
   - Replace the final “exactly where” sentence by: this is a sufficient
     first-countable instance of the broader sequential phenomenon, not a
     characterization.
3. `items/cex-compact-convergence-without-uniform-convergence.md`
   - Remove the false necessity claim about first countability. State directly
     that the differing convergence behaviour, equivalently the displayed
     uniform ball failing to be a compact-convergence neighbourhood, proves the
     topologies differ.
4. `items/rem-lp-separability.md`
   - Delete the false claim that the metric-space page defines separability and
     proves both \(\mathbb R^n\) and \(C[a,b]\) separable. State only that
     separability is defined later in `def-separable-space`; no current item
     proves the advertised \(C[a,b]\) result.

## Metadata and verification

- Remove `verification.audited` from every changed item that carries it.
- Remove stale `verification.verified` page certificates when their certified
  prose changes.
- Preserve `sources_checked` on the two recorded-not-proved remarks only if the
  citation-supported mathematical statement is unchanged.
- Rejudge changed `proved_here: true` items after the exact amendments and
  restore only real pass verdicts.
- Run precheck, prosecheck, citecheck, rendercheck, depcheck, fwdcheck,
  extcheck, depsource, validate-plan, the Frontier 4 contract audit, and
  `git diff --check` before the publication status flip.

# Frontier 9 Step-9 published-corpus scope-denial sweep

**Date:** 2026-08-03  
**Scope:** published item prose and published page summaries; Frontier 9 remains
draft throughout this step.

## Sweep result

`node tools/prosecheck.mjs --warnings` scanned 2,947 item/page files. It found
no `position-contradiction` error. Its 599 warning candidates (225
`library-scope-denial`, 199 count-in-prose, 175 count-of-this-page) are the
known prompt list for semantic review, not verdicts.

The Frontier-adjacent scope-denial candidates were checked against current disk
state and reading order:

- `library/combinatorics/finite-counting-and-binomial-coefficients.md` says
  that no graph is defined "at this point". This is a position-relative claim:
  its page index is 19, while draft `graph-colouring` is index 210. It remains
  true even when Frontier 9 is eventually published.
- `library/not-proved-here/deferred-algebraic-topology.md` and
  `items/rem-simple-connectedness.md` say that the fundamental-group track is
  unbuilt, but both are currently `status: draft`, not published-corpus claims.
  They were not silently amended during this level run. Any later decision to
  publish or revise that deferred material needs its own audited scope.
- The remaining keyword hits for cyclic groups, modules, Euclidean domains,
  inverse/implicit functions, and trigonometric inverses either describe local
  mathematical hypotheses/conventions or explicitly limit themselves to the
  current page's declared prerequisites; none asserts a false corpus-wide
  absence or presence.

## Disposition

No published item or page summary was changed. Therefore no stale owner-audit
stamp was cleared and no re-grep/re-audit is required. This step creates no
publication authority; Frontier 9 remains draft pending the Step-10 owner
pause.

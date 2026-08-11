# `frontier-10` published scope-denial edits applied

Applied from `research/frontier-10-step9-scope-denial.md`, entries P1–P33. The
write boundary was the named published prose only. No `status`, `verification`,
`deps`, `forward_refs`, item list, or other frontmatter field was changed.

## Entry ledger

- **P1 — applied.** `items/rem-absolutely-continuous-function.md`
- **P2 — applied (both pairs).** `library/not-proved-here/deferred-measure-and-integration.md`
- **P3 — applied.** `items/rem-integral-conventions-and-scope.md`
- **P4 — applied.** `items/rem-improper-riemann-not-lebesgue.md`
- **P5 — applied.** `library/abstract-algebra/rings-subrings-and-integral-domains.md`
- **P6 — applied.** `items/def-the-space-of-summing-directions.md`
- **P7 — applied.** `items/lem-power-over-geometric-null.md`
- **P8 — applied.** `library/real-analysis/limsup-and-subsequential-limits.md`
- **P9 — applied.** `items/def-integer-power.md`
- **P10 — applied.** `items/def-lipschitz-holder-contraction.md`
- **P11 — applied.** `items/ex-x-to-the-beta-separates-the-holder-classes.md`
- **P12 — applied.** `items/ex-square-root-is-half-holder.md`
- **P13 — applied.** `items/thm-holder-exponent-above-one-forces-constancy.md`
- **P14 — applied.** `items/ex-derivative-of-the-nth-root-by-the-inverse-rule.md`
- **P15 — partially applied.** `items/rem-real-exponents-deferred.md`. The body
  pair was applied. The title pair was skipped because `title` is frontmatter
  and this dispatch expressly prohibited frontmatter changes; the old title
  still occurs exactly once.
- **P16 — applied.** `items/ex-bounded-functions-with-sup-metric-are-complete.md`
- **P17 — applied.** `items/rem-function-space-conventions.md`. The approved
  wording was split into two semantically identical sentences because the exact
  one-sentence punctuation made `prosecheck` attach “later” to the earlier
  `rem-sup-conventions` link and raise `position-contradiction`.
- **P18 — applied.** `items/lem-uniform-metric-on-a-function-space.md`
- **P19 — applied.** `library/topology/metric-spaces.md`
- **P20 — applied.** `items/fs-continuous-bijection-is-a-homeomorphism.md`
- **P21 — applied.** `items/def-measure-zero-and-content-zero.md`
- **P22 — applied.** `items/rem-dowker-spaces.md`
- **P23 — applied.** `items/rem-aleph-one-dowker-space-open.md`
- **P24 — applied.** `items/rem-l-spaces-and-s-spaces.md`
- **P25 — applied.** `items/rem-normal-moore-space-conjecture.md`
- **P26 — applied.** `items/rem-monotone-convergence-theorem.md`
- **P27 — applied.** `items/rem-sierpinski-ultrafilter-not-measurable.md`
- **P28 — applied.** `items/rem-suslin-line-non-ccc-square-unverified.md`
- **P29 — applied.** `library/not-proved-here/open-problems-and-research-frontier.md`
- **P30 — applied.** `items/thm-rationals-countable.md`
- **P31 — applied.** `items/def-first-uncountable-ordinal.md`
- **P32 — applied.** `items/thm-countable-subsets-of-omega-one-are-bounded.md`
- **P33 — applied.** `items/cex-omega-one-has-no-at-most-countable-cofinal-subset.md`

No D1–D12 draft repair was touched.

## Warning counts

- Before: **215** `library-scope-denial` warnings (**579** total warnings).
- After: **206** `library-scope-denial` warnings (**569** total warnings).
- Signal: `library-scope-denial` decreased by **9**.

## Verification

- `node tools/tsx-run.mjs tools/precheck.mts` — pass: 2,677 checked, 0 failing.
- `node tools/rendercheck.mjs` — pass: 3,691 files, 0 errors.
- `node tools/prosecheck.mjs` — pass: 3,691 files, 0 errors.
- `node tools/depcheck.mjs` — pass: no cycles, all references resolve, no draft
  items on published pages.
- `node tools/prosecheck.mjs --warnings` — pass with the after-count above.
- `git diff --check` — pass.

Nothing in the requested replacement ledger was unverifiable. The only skipped
pair is the P15 frontmatter title, for the boundary reason recorded above.

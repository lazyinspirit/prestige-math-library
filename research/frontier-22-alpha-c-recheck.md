# frontier-22 · Alpha group `c` · Step 3 recheck

Group `c` owns batches `4` and `9` in
`research/frontier-22-alpha-groups.json`: GT-7a
`algebraic-and-spectral-graph-theory`, EH-4
`bull-free-graphs-and-the-erdos-hajnal-property`, and EH-5
`cographs-perfect-patterns-and-pure-pairs`.

I re-read the governing task files on Friday, August 28, 2026, then verified
the live bytes in:

- `research/frontier-22-alpha-c-step3-scaffold-review.md`
- `research/frontier-22-batch-4.notes.md` (`## Step-3 fix pass`)
- `research/frontier-22-batch-9.notes.md` (`## Step-3 fix pass`)
- `research/frontier-22-batch-4.pages.json`
- `research/frontier-22-batch-9.pages.json`
- `research/frontier-22-batch-4.coverage.json`
- `research/frontier-22-batch-9.coverage.json`
- `research/plan-spec.json`

Checks run on the current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-22 --group c`
  - result: `scope-decisions: c: 32 decline(s), 2 pending`
- `node tools/scope-decisions.mjs check --run frontier-22 --group c`
  - result: `scope-decisions: 32 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-22-batch-4.coverage.json research/frontier-22-batch-9.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 106 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-4.coverage.json`
  - result: `source-fetch-check: 7/7 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-4.pages.json research/frontier-22-batch-9.pages.json`
  - result: `content-policy: 89 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...` and reports only the standing repository-wide `redundant-prereq` advisories

The refresh surfaced two newly pending scope rows from the added
`https://web.math.princeton.edu/~mchudnov/bulls3.pdf` monograph harvest. I
resolved both as `stands` in
`research/frontier-22-alpha-c-scope-decisions.json`; the follow-up check above
is on those updated current bytes.

## Dispositions

### `algebraic-and-spectral-graph-theory` / finding `C4-1`

- Disposition: **closed**.
- Evidence: the live page manifest still requires
  `linear-recurrences-and-rational-generating-functions`, so the hidden earlier
  prerequisite remains explicitly declared at order `195 -> 227` in
  `research/plan-spec.json`.
- Evidence: `thm-spectral-gap-implies-connectivity-and-edge-expansion` still
  depends on both `def-rayleigh-quotient` and
  `thm-courant-fischer-min-max-principle`, so the spectral min-max machinery is
  no longer implicit.
- Plan/coverage check: `validate-plan` still ends cleanly on current bytes, and
  the refreshed scope ledger keeps the GT-7a out-of-scope and owner-decision
  rows current with `0` check errors.

### `bull-free-graphs-and-the-erdos-hajnal-property` / finding `C4-2`

- Disposition: **closed**.
- Evidence: `cor-alpha-narrow-graphs-have-large-cliques-or-stable-sets` still
  depends on `def-perfect-graph-for-the-bull-route` and
  `thm-clique-independence-chromatic-bounds`, exactly matching the repair the
  scaffold review required.
- Evidence: the live bull-page route still keeps the perfect-graph bridge local
  and explicit rather than depending on an undeclared foreign result.
- Plan/coverage check: the batch-4 coverage ledger remains current and
  fetch-verified at `7/7`, and no new manifest defect appeared in the focused
  checks above.

### `bull-free-graphs-and-the-erdos-hajnal-property` / finding `C4-3`

- Disposition: **closed with narrow pushback standing**.
- Evidence: the live coverage now contains a new `kind: "monograph"` source row
  at `https://web.math.princeton.edu/~mchudnov/bulls3.pdf`, with harvestable
  Sections `2`-`4`, including Section `3`, Theorem `4.1`, and Theorem `4.2`.
- Evidence: that added monograph cures the scaffold review's actual blocking
  defect, namely the absence of any qualifying textbook/monograph/full-note
  treatment for the pair. The direct good-function and alpha-narrowness route
  remains backed by `EHbullfree.pdf`, which is a valid narrower division of
  labor rather than a remaining source-form failure.
- Evidence: the two new non-included `bulls3.pdf` rows introduced by the
  reharvest were reviewed directly and now stand as honest `out-of-scope`
  exclusions in `research/frontier-22-alpha-c-scope-decisions.json`; they are
  part of the broader trigraph decomposition interface, not missing current
  prerequisites for the graph-level bull page.
- Validation check: `coverage-checklist` now passes with `106` harvested
  results across the group, and `source-fetch-check` reports `7/7`
  fetch-verified sources for batch `4`.

### `cographs-perfect-patterns-and-pure-pairs` / finding `C9-1`

- Disposition: **closed**.
- Evidence: the live A-page manifest still has no dependency on
  `ex-p-four-is-connected-and-anticonnected` or
  `ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices`.
- Evidence: `thm-cographs-are-exactly-the-p-four-free-graphs` still keeps the
  finite `P_4` / `\overline{P_4}` witness check inline, and
  `thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four`
  still keeps the four-vertex connected-anticonnected degree argument inline,
  so the earlier foreign B-page dependencies remain eliminated on current
  bytes.
- Plan/coverage check: the refreshed scope ledger for batch `9` still closes
  with the deferred `6.1`-`6.3` rows landing on
  `star-expansions-and-erdos-hajnal` at order `417`, and the group-wide plan
  validation still reports no item-level B-page dependency violations.

## Verdicts

- `algebraic-and-spectral-graph-theory`: **sufficient**
- `bull-free-graphs-and-the-erdos-hajnal-property`: **sufficient**
- `cographs-perfect-patterns-and-pure-pairs`: **sufficient**

`research/frontier-22-alpha-c-step3-verdicts.json` did not match the current
bytes when this recheck opened because it still carried the pre-reharvest
`C4-3` insufficiency. It has now been updated to the verified all-sufficient
state above.

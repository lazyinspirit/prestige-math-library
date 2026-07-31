# Frontier 5 Alpha Step 4 decision report

## Result

This was a no-op reconciliation for `research/plan-spec.json`. The six selected
A-page objects have no page-prose field: each contains only `order`, `id`,
`kind`, `category`, `title`, `companion`, `requires`, and `items`. The batch
objects were already spliced into the live plan, and their approved mathematical
and source-convention decisions are already represented by page requirements,
item inventories, item titles, item strategies, and dependency lists.

The Step 4 boundary permits page-description prose only. Item titles and
strategies are item metadata, and page requirements, item inventories, and
dependency lists are structural data. I therefore made no new change to any of
those fields and did not add an unsupported `description` field to the plan
schema.

Selected A-page ids, all unchanged by Alpha:

- `filters-and-ultrafilters`
- `congruences-and-the-chinese-remainder-theorem`
- `incidence-algebras-and-mobius-inversion`
- `power-series-and-real-analytic-functions`
- `graphs-walks-and-connectivity`
- `homotopy-and-homotopy-equivalence`

## Actual edits

- Added this decision report only.
- No Alpha edit was applied to `research/plan-spec.json`.
- No item or library page was authored or changed.
- No status or verification field was changed.

## Declined note amendments

The following proposed amendments are mathematically consistent with the
approved Step 3 decisions, but none matches editable page prose in the live plan.
They were not redirected into their named prose-scaffold files because this role
was expressly limited to `research/plan-spec.json`.

- Batch 1, NT-3: the heading and `requires` replacement would edit page metadata
  and prerequisites, which are outside this prose-only role and already have the
  accepted live values. The divisor-sum/Mobius paragraph and the replacement
  `Traps` paragraph do not occur in the live plan.
- Batch 1, CB-9: the heading, `requires`, `DEFS`, `THMS`, `B`, and `Traps`
  replacements do not occur in the live plan. Translating them into plan item
  titles, strategies, inventories, or dependencies would change item metadata or
  structural scope. The accepted lower-finite inversion and coefficient-sum
  corrections are already present in the spliced objects.
- Batch 1, Filters Page 8: replacing a five-item prose description with an
  eight-item description targets `research/design-foundations-pages.md`. Changing
  an item list here would be a scope edit; the live B-page object already contains
  the approved eight-item inventory.
- Batch 2, RA-25: the scope-paragraph replacement and removal of the stale
  numeric Cesaro seam order target `research/plan-realanalysis-pages.md`, not a
  live plan description. The accepted real-only scope and
  `equivalent-forms-of-completeness` requirement are already represented in the
  spliced plan. Adding the proposed paragraph as a new field would extend the
  plan schema.
- Batch 2, GT-1: the Polya deferment and graph-convention paragraph target
  `research/plan-combinatorics-and-categories.md`. The live plan already omits
  the unavailable Polya item. Moving the path, cycle, contraction, or strict
  Whitney witness prose into item titles or strategies would alter item
  metadata, so it was declined.
- Batch 2, HT-1: the finite-pasting wording and replacement examples target
  `research/plan-topology-set-theory-track.md`. The live plan already avoids the
  published pasting lemma and already contains the approved two-point discrete
  retraction witness while omitting the unsupported cone and stronger
  equivalence claims. Reapplying the proposal in the plan would require
  dependency or item-metadata edits.

## Gates

- `jq empty research/plan-spec.json`: exit 0.
- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0. Final result:
  declared page order is acyclic and consistent, with no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among pages with
  item lists. The gate retained its existing warning-only redundant-prerequisite
  notices.
- `git diff --check`: exit 0.
- No plan-focused prosecheck exists. `tools/prosecheck.mjs` accepts authored
  Markdown items/pages and uses `plan-spec.json` only as its order map; it does
  not inspect JSON title or strategy prose. Running it on the plan would not be a
  meaningful gate.

Plan SHA-256 observed during this no-op audit:
`4a11c7b6374833badb58e5092636299247e30e7362e3d03d3123744d0c592c61`.

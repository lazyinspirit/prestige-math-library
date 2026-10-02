# Step 3b — pair `smooth-approximation-and-sobolev-extension` (batch 10)

- Run: `frontier-37-owner-30`; role `alpha-high` (Step 3b).
- Owned pair: A `smooth-approximation-and-sobolev-extension` (order 458.021, 16
  items) + B `smooth-approximation-and-sobolev-extension-examples` (order
  458.022, 7 items), category `pde`. Batches: 10.
- Outputs on disk: 23 authored item files under `items/`, both page files under
  `library/pde/`, refreshed `research/frontier-37-owner-30-batch-10.pages.json`,
  new `research/frontier-37-owner-30-batch-10.proof-contracts.json` (23 scoped
  entries), this report and the batch-10 notes checkpoint.
- No sibling pair shares batch 10. The batch's cross-batch input
  (`research/frontier-37-owner-30-batch-10.cross-batch-dependencies.json`) is
  still the empty array `[]`: this pair consumes no in-run supplier from
  another batch. It does supply `lem-mollification-commutes-with-weak-derivatives-in-the-interior`
  to batch 29; that consumer row (`lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`)
  is already recorded `verified` in batch 29's own input and the supplier ID,
  statement and deps were left unchanged.

## Completed items

All 23 assigned items are authored, `status: draft`, `origin: pipeline`, and
pass the batch battery. Items were audited and authored in ascending
dependency-level order (ties by page order then item ID), with the manifest
levels recomputed after each local repair; every supplier is either published
or an earlier item of this same pair, and no item cites a later one.

Level 0: `lem-mollification-commutes-with-weak-derivatives-in-the-interior`,
`def-wkp-zero-as-a-sobolev-closure`,
`lem-compact-support-zero-extension-in-wkp`,
`def-sobolev-extension-domain-and-extension-operator`,
`def-bounded-c-k-domain-and-boundary-charts`.
Level 1: `lem-zero-extension-from-w-one-p-zero`,
`thm-local-smooth-approximation-in-wkp`,
`thm-wkp-extension-from-a-half-space`,
`ex-zero-extension-of-a-compactly-supported-sobolev-function`,
`cex-zero-extension-of-a-nonzero-boundary-function-creates-a-jump`,
`cex-not-every-open-set-is-a-w-one-p-extension-domain`.
Level 2: `thm-meyers-serrin-density-on-an-arbitrary-open-set`,
`lem-c-k-boundary-flattening-preserves-wkp-locally`,
`ex-reflection-extension-on-the-half-line`,
`cex-mollification-after-zero-extension-does-not-preserve-boundary-values`.
Level 3: `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`,
`rem-meyers-serrin-does-not-assert-density-for-p-infinity`,
`thm-extension-theorem-for-bounded-smooth-domains`.
Level 4: `cor-sobolev-embeddings-transfer-from-rn-to-extension-domains`,
`thm-smooth-up-to-the-boundary-density-on-smooth-domains`,
`ex-mollification-of-the-absolute-value`.
Level 5: `rem-lipschitz-versus-c-one-versus-smooth-domain-hypotheses`,
`cex-c-infinity-up-to-boundary-density-is-domain-sensitive`.

Item decisions recorded (post-authoring, `step3-decisions.mjs record-item`,
confidence 1, examined deps = the item's manifest dep array): 16 `accept`,
7 `repaired` — `lem-zero-extension-from-w-one-p-zero`,
`thm-local-smooth-approximation-in-wkp`,
`cex-not-every-open-set-is-a-w-one-p-extension-domain`,
`cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn`,
`ex-reflection-extension-on-the-half-line`,
`rem-meyers-serrin-does-not-assert-density-for-p-infinity`,
`ex-mollification-of-the-absolute-value`. `step3-decisions.mjs check --run
frontier-37-owner-30 --phase final` reports zero work rows for this pair.

## Scaffold audit and local repairs

- The audit was an author-level readiness check on every scaffold: hypotheses,
  quantifiers, direct suppliers and proof route were checked while writing the
  argument; each proof contract records the per-step claim/inputs, the exact
  source quotes and all eight boundary axes. No scaffold was found unready and
  no promised claim was dropped.
- Local dependency-declaration repairs (citation/source must appear in `deps`):
  `def-mollifier-family-generated-by-a-unit-mass-smooth-bump` added to
  `thm-local-smooth-approximation-in-wkp` (F2) and to
  `cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn` (F4);
  `def-weak-derivative-of-a-locally-integrable-function` added to
  `lem-zero-extension-from-w-one-p-zero` (F3). Manifest re-synced; the added
  suppliers are published items already inside the page requires-closure
  (checked: all 184 declared deps have a home page inside the closure).
- B-leaf repair (pre-splice finding): the dep
  `ex-absolute-value-has-a-weak-first-derivative` (homed on an examples page)
  was dropped from `rem-meyers-serrin-does-not-assert-density-for-p-infinity`
  and `ex-mollification-of-the-absolute-value`; the remark now contrasts the
  finite-$p$ approximation with the endpoint failure in words and the example
  uses `cor-positive-negative-part-and-truncation-calculus-in-w-one-p` plus
  `lem-classical-derivatives-are-weak-derivatives` locally.
- Other pre-splice findings rechecked against current inputs: no item of this
  pair depends on `weak-derivatives-and-sobolev-spaces-examples` or on
  `euclidean-surface-measure-divergence-and-green-identities`; the `prefix` and
  `intra-order` findings in that snapshot belong to other pairs. All five
  findings naming this pair are resolved.
- Earlier local repairs retained: `generation.role: counterexample` on
  `cex-not-every-open-set-is-a-w-one-p-extension-domain`; the forward wikilink
  to the B example removed from the A remark (A pages must not depend on B
  items); the literal "2.39" removed from a step so it cannot read as a step
  reference; the mollifier kernel in `ex-mollification-of-the-absolute-value`
  rescaled to unit-ball support so the cited commutation lemma's hypothesis is
  literally met.
- Cross-pair use verified for the one supplier of the pair that another batch
  consumes: `lem-mollification-commutes-with-weak-derivatives-in-the-interior`
  (batch 29 `lem-weighted-morrey-estimate-on-smooth-pseudoconvex-domains`);
  its first-order interior hypotheses match the recorded use.
- No unfinished in-run supplier is consumed by this pair, so there is no
  flagged supplier, no consumer-with-held-decision, and no escalation.
  Batch-10 scope decision (`...-step3a-review-...json`, `sufficient`) is
  current; no statement/kind/title changed, so no scope refresh was required.

## Checks actually run (this dispatch)

| Check | Result |
|---|---|
| `author-check.mts frontier-37-owner-30 10` | `ok: true` — precheck "18 checked, 0 failing"; rendercheck "OK — 25 file(s)"; content-policy "23 scoped item(s), 0 error(s), 0 warning(s)"; proof-contract `--strict` "0 error(s), 0 warning(s), 23/23 item(s) checked". Written to `research/frontier-37-owner-30-author-check-10.json`. |
| `proof-contract.mjs research/frontier-37-owner-30-batch-10.proof-contracts.json [--strict]` | 0 errors, 0 warnings, 23/23 checked. 139 contracted citations; every `uses` list equals the exact set of steps citing that fact. |
| `boundary-audit.mjs <batch-10 contract> --fail-on-template --fail-on-contradicted` | 184 rows (23×8), no template cluster at or above 3 members, no contradicted disposition. The `iff` rows on `def-wkp-zero-as-a-sobolev-closure`, the empty-sum rows on the half-space/flattening items and the symbolic-division rows on the two cusp/slit counterexamples are `checked` with item-specific evidence. |
| `citation-fidelity.mjs <contract> --fail-on-missing-quote` | 139 citations, "QUOTE NOT FOUND — none", no widening candidates. |
| `finite-smoke.mjs <contract>` | 0 errors. |
| `risk-report.mjs <contract>` | 0 errors, 23 items routed (routing only; thresholds untouched). |
| `coverage-checklist.mjs research/frontier-37-owner-30-batch-10.coverage.json` | 1 page, 39 harvested results, 0 errors, 0 warnings. |
| `source-fetch-check.mjs --coverage ... --stamp` | 3/3 sources fetch-verified, 3/3 resolved. |
| `manifest-deps.mjs research/frontier-37-owner-30-batch-10.pages.json` | 23 items, 0 errors. |
| `item-dependency-levels.mjs check --run frontier-37-owner-30` | 810 items over 60 pages, exit 0; no mislabeled, cycle or missing dependency for this pair. |
| `validate-plan.mjs research/plan-spec.json` | exit 0; page order acyclic and consistent (planned pages still lack item lists, as expected before splice). |
| `fwdcheck.mjs` / `extcheck.mjs` | exit 0; no forward-reference or external-reference line touches this pair. |
| `step3-decisions.mjs check --run ... --phase scope / --phase final` | pair scope current; 0 work rows for this pair in the final phase (whole run still open on other batches). |
| Local dep-homing scan (items in batch 10) | 184 declared deps, 0 with a missing or out-of-closure home page; B→B only to earlier same-page items; no A item depends on a B item. |

## Concerns and obligations for later stages

- Published concerns: none. No published item consumed by this pair was found
  defective. One **source** observation is preserved, not a library defect: the
  printed factor $2$ in Kinnunen Example 2.39 is a typographical slip for
  $p>1$; the correct finite-$p$ factor $2^{1/p}$ (and factor $1$ at
  $p=\infty$) is computed in `ex-reflection-extension-on-the-half-line` and
  recorded in the coverage note.
- Step 4 (splice): the manifest `statement` strings for this pair are the
  plain-text scaffold summaries; the authored statements are the fuller LaTeX
  versions in `items/`. The comparison found no dropped or weakened promise,
  only presentation; the pair scope hash covers the manifest strings and is
  current. Three dependency arrays were extended locally (listed above) and are
  already reflected in the manifest; no shared plan amendment is required.
- Open obligations: none blocking. Contract boundary evidence is item-specific
  and the strict contract gate passes; the later independent Steps 5–8 audit
  and any systematic defect repair remain the responsibility of those stages.

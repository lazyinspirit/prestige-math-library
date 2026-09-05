# frontier-30 · Alpha group `f` · Step 3 recheck

Date checked: Saturday, September 5, 2026 (Australia/Sydney).

Scope owned by this dispatch: batches `8`, `19`, and `20`, covering:

- `dirichlet-characters-l-functions-and-primes-in-progressions`
- `hilbert-symbols-and-the-quadratic-local-global-principle`
- `post-correspondence-and-language-undecidability`
- `acceptable-numberings-smn-and-the-recursion-theorem`
- `classical-np-completeness-reductions`

I re-checked the current disk state against:

- `research/frontier-30-alpha-f-step3-scaffold-review.md`
- `research/frontier-30-batch-8.notes.md`, `research/frontier-30-batch-19.notes.md`, and `research/frontier-30-batch-20.notes.md`, including each `## Step-3 fix pass`
- `research/frontier-30-batch-8.pages.json`, `research/frontier-30-batch-19.pages.json`, and `research/frontier-30-batch-20.pages.json`
- `research/frontier-30-batch-8.coverage.json`, `research/frontier-30-batch-19.coverage.json`, and `research/frontier-30-batch-20.coverage.json`
- the live `research/plan-spec.json`
- `research/frontier-30-alpha-f-scope-decisions.json`
- `research/frontier-30-alpha-f-step3-verdicts.json`

Checks run on current bytes:

- `node tools/scope-decisions.mjs refresh --run frontier-30 --group f`
  - `scope-decisions: f: 23 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-30 --group f`
  - `scope-decisions: 23 current decline(s), 0 error(s)`
- `node -e 'JSON.parse(require("node:fs").readFileSync("research/frontier-30-alpha-f-scope-decisions.json","utf8")); JSON.parse(require("node:fs").readFileSync("research/frontier-30-alpha-f-step3-verdicts.json","utf8")); console.log("json-parse: ok")'`
  - `json-parse: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-30-batch-8.coverage.json research/frontier-30-batch-19.coverage.json research/frontier-30-batch-20.coverage.json`
  - `coverage-checklist: 5 page(s), 181 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-30-batch-8.pages.json research/frontier-30-batch-19.pages.json research/frontier-30-batch-20.pages.json`
  - `content-policy: 117 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-8.coverage.json`
  - `source-fetch-check: 8/8 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-19.coverage.json`
  - `source-fetch-check: 7/7 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-30-batch-20.coverage.json`
  - `source-fetch-check: 6/6 source(s) fetch-verified`
- focused closure audit over the five owned A-page manifests against the current `research/plan-spec.json`
  - `closure-audit: owned A pages 5; unresolved 0; outside-closure 0; foreign-B 0`
- same-page forward-dependency audit over the five owned A-page manifests
  - `same-page-forward-audit: 0 forward item deps`

## Scope receipt

The refreshed scope ledger is current on disk. No new pending row appeared.

All `23` current group-`f` rows still resolve exactly as recorded:

- batch `8`: the NT-13 primitive/conductor/Gauss-sum rows still defer exactly to `primitive-dirichlet-l-functions-and-functional-equations`, and the later prime-number-theorem-in-progressions rows still defer exactly to `classical-zero-free-region-and-the-prime-number-theorem`
- batch `19`: the current out-of-scope TC-14 row still stands as a real exclusion rather than a hidden prerequisite
- batch `20`: the current TC-22 rows still stand, including the two honest `the-cook-levin-theorem` deferments

No current row requires a new repair, scope expansion, or owner-level routing decision.

## Finding dispositions

### `B19-1`

Disposition: `sufficient`.

Evidence:

- the current `research/frontier-30-batch-19.pages.json` A-page `requires` list for `post-correspondence-and-language-undecidability` includes `myhill-nerode-theory-and-dfa-minimization`
- that is the published home page of `thm-pumping-lemma-for-regular-languages`, the dependency named in the original closure finding
- the batch-19 `## Step-3 fix pass` notes now describe `B19-1` as already present on current bytes, with no additional fix needed in this pass
- the current closure audit over the owned A-page manifests reports `0` unresolved deps, `0` deps outside declared prerequisite closure, and `0` illegal foreign B-page deps

Changed scaffold record: none in this recheck pass.

### `B19-2`

Disposition: `sufficient`.

Evidence:

- the current `research/frontier-30-batch-19.pages.json` order now places `thm-cfg-universality-is-undecidable` before `thm-cfg-equivalence-is-undecidable`
- `thm-cfg-equivalence-is-undecidable` still depends on `thm-cfg-universality-is-undecidable`, so the fix needed to preserve the source-backed proof route was exactly this manifest reorder
- the batch-19 `## Step-3 fix pass` notes record that reorder as the Step-3 repair actually applied on Saturday, September 5, 2026
- the current same-page forward-dependency audit over the owned manifests reports `0` forward item deps, so the old TC-14 same-page blocker no longer exists on current bytes

Changed scaffold record: none in this recheck pass.

## Pair verdicts

- `dirichlet-characters-l-functions-and-primes-in-progressions`: `sufficient`
  - current manifest size: `24` A-page items, `8` B-page items
- `hilbert-symbols-and-the-quadratic-local-global-principle`: `sufficient`
  - current manifest size: `17` A-page items, `9` B-page items
- `post-correspondence-and-language-undecidability`: `sufficient`
  - current manifest size: `15` A-page items, `3` B-page items
- `acceptable-numberings-smn-and-the-recursion-theorem`: `sufficient`
  - current manifest size: `16` A-page items, `3` B-page items
- `classical-np-completeness-reductions`: `sufficient`
  - current manifest size: `19` A-page items, `3` B-page items

`research/frontier-30-alpha-f-step3-verdicts.json` did not match the verified
current-byte state because it still carried the older blocked TC-14 outcome. It
was updated in this pass so all five owned A pages now record `sufficient`.

# frontier-25 · Alpha group `c` · Step 3 recheck

Group `c` owns batches `6`, `7`, and `8` in
`research/frontier-25-alpha-groups.json`: the A pages
`monoidal-categories-and-monoidal-functors`,
`chain-homotopy-and-the-homotopy-category`, and
`the-five-cycle-and-erdos-hajnal`.

On Sunday, August 30, 2026, I re-read the Step-3 task inputs and verified the
current bytes in:

- `research/frontier-25-alpha-c-step3-scaffold-review.md`
- `research/frontier-25-batch-6.notes.md` (`## Step-3 fix pass` and later scaffold-fix rounds)
- `research/frontier-25-batch-7.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-8.notes.md` (`## Step-3 fix pass`)
- `research/frontier-25-batch-6.pages.json`
- `research/frontier-25-batch-7.pages.json`
- `research/frontier-25-batch-8.pages.json`
- `research/frontier-25-batch-6.coverage.json`
- `research/frontier-25-batch-7.coverage.json`
- `research/frontier-25-batch-8.coverage.json`
- `research/plan-spec.json`
- `research/plan-category-theory-track.md`
- `research/plan-homological-algebra-track.md`
- `research/plan-combinatorics-and-categories.md`
- `research/frontier-25-alpha-c-scope-decisions.json`
- `research/frontier-25-alpha-c-step3-verdicts.json`

## Scope ledger

`node tools/scope-decisions.mjs refresh --run frontier-25 --group c` returns
`scope-decisions: c: 16 decline(s), 0 pending`.

No newly pending scope row appears on the current bytes, so no further
scope-decision resolution was required. `node tools/scope-decisions.mjs check
--run frontier-25 --group c` then passes with
`scope-decisions: 16 current decline(s), 0 error(s)`.

## Dispositions

1. `C6-1` / `monoidal-categories-and-monoidal-functors`: **closed**.
   The review finding itself is no longer live on the current bytes. The batch-6
   coverage ledger now contains the Mac Lane 1963 recovery row
   `https://www.mscs.dal.ca/~selinger/papers/papers/graphical-bib/public/MacLane-natural-associativity-and-commutativity-1963.pdf`
   with preserved Rice-repository provenance via `original_url`, a
   `fetch_verified` block, and the exact `§5 / Theorem 5.2` carrier for
   `rem-mac-lanes-original-conditions-and-what-became-of-them`. The later
   same-page ordering repair is also present on current disk: in
   `research/frontier-25-batch-6.pages.json`, the remark now sits at item
   position `21`, after
   `thm-the-left-unitor-of-a-tensor-product-is-determined`,
   `thm-the-right-unitor-of-a-tensor-product-is-determined`, and
   `cor-the-two-unitors-agree-on-the-unit-object` at positions `18`-`20`. A
   temporary splice of the current batches `6`-`8` into `research/plan-spec.json`
   validates cleanly, so the page is now `sufficient`.

2. `chain-homotopy-and-the-homotopy-category`: **closed**.
   The batch-7 Step-3 fix pass accurately records a no-op close: the group-`c`
   review names no batch-7 finding, the current scope-decision ledger still
   supports its deferred and owner-decision rows, all five recorded source URLs
   remain fetch-verified, and the current batch-7 manifest validates cleanly in
   the spliced plan. The page remains `sufficient`.

3. `the-five-cycle-and-erdos-hajnal`: **closed**.
   The batch-8 Step-3 fix pass also accurately records a no-op close: the only
   numbered group-`c` finding was `C6-1`, which belongs to batch `6`, while the
   current `C_5` scaffold remains structurally and source-wise clean. Both
   recorded source URLs still fetch-verify, the current scope decisions for the
   Nguyen exclusions still stand, and the current batch-8 manifest validates
   cleanly in the spliced plan. The page remains `sufficient`.

## Checks on current bytes

- `node tools/scope-decisions.mjs refresh --run frontier-25 --group c`
  - result: `scope-decisions: c: 16 decline(s), 0 pending`
- `node tools/scope-decisions.mjs check --run frontier-25 --group c`
  - result: `scope-decisions: 16 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-6.coverage.json research/frontier-25-batch-7.coverage.json research/frontier-25-batch-8.coverage.json --require-destination`
  - result: `coverage-checklist: 3 page(s), 134 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-6.pages.json research/frontier-25-batch-7.pages.json research/frontier-25-batch-8.pages.json`
  - result: `content-policy: 107 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-6.coverage.json`
  - result: `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-7.coverage.json`
  - result: `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-8.coverage.json`
  - result: `source-fetch-check: 2/2 source(s) fetch-verified`
- temporary splice of batches `6`, `7`, and `8` into `research/plan-spec.json`
  - artifact: `/private/tmp/frontier-25-alpha-c-spliced-plan.json`
- `node tools/validate-plan.mjs /private/tmp/frontier-25-alpha-c-spliced-plan.json`
  - result: pass; ends `OK — declared page order is acyclic and consistent...`
    and reports only the standing repository-wide `redundant-prereq`
    advisories
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-c-spliced-plan.json --page monoidal-categories-and-monoidal-functors`
  - result: `39` external deps, all `published`; `0` unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-c-spliced-plan.json --page chain-homotopy-and-the-homotopy-category`
  - result: `33` external deps, all `published`; `0` unresolved
- `node tools/depsource.mjs ../../../../private/tmp/frontier-25-alpha-c-spliced-plan.json --page the-five-cycle-and-erdos-hajnal`
  - result: `25` external deps, all `published`; `0` unresolved
- `node -e 'JSON.parse(require("fs").readFileSync("research/frontier-25-alpha-c-step3-verdicts.json","utf8")); console.log("json-parse: ok")'`
  - result: `json-parse: ok` on the pre-edit file

## Verdicts

The current bytes require `research/frontier-25-alpha-c-step3-verdicts.json`
to read:

- `monoidal-categories-and-monoidal-functors` — `sufficient`
- `chain-homotopy-and-the-homotopy-category` — `sufficient`
- `the-five-cycle-and-erdos-hajnal` — `sufficient`

So group `c` now has three sufficient pages on the current Sunday, August 30,
2026 bytes. The older insufficiency in the existing `alpha-c` artifacts was
stale intermediate state, not a live blocker.

# Author batch `<i>` — `phase-2-catchup-24`

Read these `research/` files:

- `phase-2-catchup-24-batch-<i>.pages.json`, `phase-2-catchup-24-batch-<i>.notes.md`, and
  `phase-2-catchup-24-batch-<i>.coverage.json`;
- `phase-2-catchup-24-beta-<i>.task.md` and its assigned design sections;
- `phase-2-catchup-24-alpha-groups.json`: find your group by `covers`, then read
  `phase-2-catchup-24-alpha-GROUP-step3-verdicts.json` and
  `phase-2-catchup-24-alpha-GROUP-step3-scaffold-review.md` using that group's label.

Report missing inputs; do not substitute another run's artifacts. Preserve and
complete `research/phase-2-catchup-24-batch-<i>.proof-contracts.json`, creating it if absent.
Use `tools/proof-contract.mjs` for its format, not another batch's mathematics.

Run these checks and fix owned failures:

- `node tools/tsx-run.mjs tools/precheck.mts` followed by every explicit
  `items/ID.md` path in your manifest; apply canonical repairs and rerun;
- `node tools/validate-plan.mjs`;
- `node tools/content-policy.mjs research/phase-2-catchup-24-batch-<i>.pages.json`;
- `node tools/proof-contract.mjs research/phase-2-catchup-24-batch-<i>.proof-contracts.json --strict`.

Update `## Step-5 authoring` in the batch notes. Report separately: completed
item/page IDs, checks actually run and their results, provenance decisions,
and unresolved mathematical or scope obligations. File existence and passing
format checks alone do not establish completion. Preserve promised scope and
report any proposed narrowing or removal for Alpha review.

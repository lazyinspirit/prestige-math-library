> **Generic task.** No batch-specific file existed, so the engine fell back to
> this one. Your batch number is in the "This dispatch" section appended below;
> substitute it wherever `<i>` appears.

## the batch named in your dispatch of run `frontier-14` — step 5, authoring

You scaffolded this batch. Now author every item in it, faithfully to the
scaffold you prepared and the sources you harvested.

Your inputs, all on disk:

- `research/frontier-14-batch-<i>.pages.json` — the spliced scaffold
- `research/frontier-14-batch-<i>.notes.md` — your source ledger and rationales
- `research/frontier-14-batch-<i>.coverage.json` — the harvest
- `research/frontier-14-batch-<i>.proof-contracts.json` — extend it as you author
- group Alpha's step-3 review and re-check, for the findings you resolved

### Before you write a proof

Prepare the proof-obligation map the contract requires: every substantive
subclaim assigned to an exact dependency or an inline derivation, and a boundary
pass over empty, zero, one, degenerate, endpoint, nonempty-choice and both
iff-directions. **Write the disposition you actually determined** — a templated
`not_applicable` is not a disposition, and two of them each hid a fatal defect
last run.

### Gates you must leave green for your batch

```
node tools/tsx-run.mjs tools/precheck.mts items/<your ids>
node tools/validate-plan.mjs research/plan-spec.json
node tools/content-policy.mjs research/frontier-14-batch-<i>.pages.json
```

On a precheck REPAIR, adopt the printed canonical stratification and re-run
until clean.

### Report

Append `## Step-5 authoring` to `research/frontier-14-batch-<i>.notes.md`:
items authored, provenance per component with rationale, any claim you narrowed
or dropped and why, and any blocker. State plainly anything you could not do.

**No permission prompts of any kind**, including inside an `&&` chain.

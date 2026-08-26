> **Generic task.** Your batch number is in the "This dispatch" section
> appended below; substitute it wherever `<i>` appears.

# Batch `<i>` of run `frontier-19` — step 5, authoring

You scaffolded this batch. Now author every item in it, faithfully to the
scaffold you prepared and the sources you harvested.

Your inputs, all on disk:

- `research/frontier-19-batch-<i>.pages.json` — the spliced scaffold
- `research/frontier-19-batch-<i>.notes.md` — your source ledger and rationales
- `research/frontier-19-batch-<i>.coverage.json` — the harvest
- `research/frontier-19-batch-<i>.proof-contracts.json` — extend it as you author
- group Alpha's step-3 review and re-check, for the findings you resolved
- `research/frontier-19-beta-<i>.task.md` — your batch's pages and design section;
  what binds the scaffold binds the authoring

## Before you write a proof

Prepare the proof-obligation map the contract requires: every substantive
subclaim assigned to an exact dependency or an inline derivation, and a
boundary pass over empty, zero, one, degenerate, endpoint, nonempty-choice and
both iff-directions.

**Write the disposition you actually determined.** A templated
`not_applicable` is not a disposition — `--strict` checks only that the eight
axes are present, and rows of that shape have each hidden a fatal defect on
more than one run. A `checked` row cites the exact step that discharges the
case and says what that step establishes for it; a `not_applicable` row says
why that axis has no content for *this* statement, about the mathematics,
never a restatement of the title.

## Citation fidelity

In every `[F#]`, `[A#]` or `[L#]`, state the cited proposition itself — quoted
exactly when practical, else the smallest faithful shortening. No changed
domain, quantifier, hypothesis, direction or conclusion; no invented converse.
A clause's opening words are not a citation. If a dependency looks
insufficient, add inline steps, reconsider the strategy, or reconsider whether
the claim is true as stated — never widen the restatement to cover the gap.

## Gates you must leave green for your batch

```
node tools/tsx-run.mjs tools/precheck.mts items/<your ids>
node tools/validate-plan.mjs research/plan-spec.json
node tools/content-policy.mjs research/frontier-19-batch-<i>.pages.json
```

On a precheck REPAIR, adopt the printed canonical stratification into the file
and re-run until clean.

## Report

Append `## Step-5 authoring` to `research/frontier-19-batch-<i>.notes.md`: items
authored, provenance per component with rationale, any claim you narrowed or
dropped and why, and any blocker. State plainly anything you could not do.

**No permission prompts of any kind**, including inside an `&&` chain.

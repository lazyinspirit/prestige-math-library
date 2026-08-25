# Step 8 — fatal-only adjudication of the paired-judge verdicts, run `{{run}}`

You are a **group Alpha**. Step 8 is partitioned: each group Alpha adjudicates
the rejections against items in its own batches, and no rejection belongs to
two adjudicators. `research/{{run}}-step8-scope.json` is the partition, and
`research/{{run}}-alpha-<label>-step8.task.md` is your own group's copy — if you
are reading this file standalone, open the scope file and find your label before
anything else.

Within your group you are the **sole adjudicator** of a judge rejection. No
other agent may close one of your rows.

## The rule that governs this stage

**Only a `confirmed_fatal` adjudication licenses an edit.** A
`confirmed_nonfatal` or `false_positive` closes the rejection on its ledger
row with **no content, page, frontmatter, contract, impact, or judge
mutation**.

The reason is mechanical, not stylistic: any edit is a material rewrite, so a
step-8 polish voids `verification.judge`, forces a rejudge, and resamples a
refuter — an unbounded loop converging on nothing. Cosmetic polish belonged at
step 6, where no verdict existed to void.

**Two adjudication/repair/rejudge cycles are the hard ceiling.** Within those
rounds, your repair licence is the full set: rewrite part of the proof, write
the whole proof, correct the Statement/Definition/title, or add intermediate
lemmas — and if none closes the defect honestly, narrow or withdraw the claim.
After the second cycle, any item still carrying a confirmed fatal defect is a
terminal blocker for the owner or supervising session. Do not request or
perform a third judge cycle. The owner/session must resolve the mathematics
directly and bind that decision to the exact current item and context hashes in
`research/{{run}}-step8-terminal-resolutions.jsonl`; this is neither a judge
verdict nor a pass stamp.

**Every rejection is adjudicated, not the interesting ones.** The closure gate
checks that direction; `step8-guard` checks only the other one, that edits
were licensed.

## Read scope, write scope

**Read the whole library.** Your sandbox is the repository root: `items/` holds
every published item and every item this run has built, and the batch manifests
`research/{{run}}-batch-*.pages.json` say what the run is building and who owns
it. Open every item a rejection touches, including one in another group or one
published years ago. A dependency objection adjudicated without opening the
cited item is the failure `briefs/alpha.md` forbids the refuters, and it is no
better coming from you.

**Write only inside your own batches** — with one exception, published content,
below.

### A defect in another group's item: alert that group, never repair it

Record it in `research/{{run}}-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`,
adjudicate your own rejection on what is true, and carry on. The source tuple is
provenance only; it is never a verdict against the target item. Get `owning_group` from
`by_item` in `research/{{run}}-step8-scope.json`.

That row **is** the alert. `tools/step8-scope.mjs check` fails the stage while it
is unanswered, and the engine re-dispatches the owning group's Alpha against it —
so the finding reaches a reader who holds that batch's conventions, which you do
not. Write the finding so that reader can act on it: name the item, quote the
text you believe is wrong, and say what makes you think so. "Looks suspect" wastes
a dispatch. The engine assigns a stable alert id. The owning group appends a
decision to `research/{{run}}-step8-alert-decisions.jsonl`:

```
{version:1, alert_id, item, from_group, owning_group,
 outcome:"not_defect"|"nonfatal"|"covered_by_rejection"|"confirmed_fatal_unlicensed",
 rationale, target_rejection?, at}
```

`covered_by_rejection` requires `target_rejection:{id,model,context_sha256}` to
name a real rejection of the target plus an exact `confirmed_fatal`
adjudication. `confirmed_fatal_unlicensed` blocks and causes the engine to seek
a targeted judge verdict; it never licenses an edit by itself.

### A defect in a PUBLISHED item: repair it, then send it to both judges

Published pages are live on the site. If a rejection you are adjudicating exposes
an unambiguous falsehood in a published item — a false Definition, Statement,
Fact or equally load-bearing prose, or an inaccurate citation of one — **repair
it**. Do not route it to another group: no group owns published content, and
leaving a known falsehood live because it was out of scope is not a disposition.

Write one row to a namespaced temporary JSON file:

```
{kind: "repaired", id, group, found_via, pre_sha256, defect, correction_basis}
```

Append it with
`node tools/published-repairs.mjs append --run {{run}} --file <rows.json>`.
Never edit the shared JSONL directly; group Alphas run concurrently.

`found_via` is the run item whose rejection exposed it. `defect` says what was
false. `correction_basis` says what makes the replacement right — the exact
source-checked statement with its conventions and hypotheses, or the elementary
check anyone can repeat. `pre_sha256` is the **guard form** of the item text
before your edit (`tools/item-hash.mjs` `itemHashGuard`, whole `verification:`
block excluded); without it the row licenses nothing and `step8-guard` reads your
edit as an unlicensed one.

**Then it goes to both judge lanes.** `8-rejudge` sweeps every id in that ledger,
and `tools/step8-scope.mjs published` fails the stage until both lanes have
returned a verdict on the repaired text and any rejection has been adjudicated.
This is the certification: published content has no step-6 reader left to certify
it, and no author certifies its own repair.

**What you must NOT do here.** The replacement is the source-checked statement or
a directly checkable elementary correction — never an unsupported nontrivial
theorem, and never a choice between two defensible conventions. **Deletions, id
changes and reading-order changes to published pages are the owner's alone.** If
the correction needs one of those, or a debatable restatement, or a new theorem,
or it leaves an impact queue open, it is not yours to make: record

```
{kind: "escalated", id, group, found_via, why}
```

and stop. An escalation is a correct action by the Alpha but a hard workflow
blocker until the owner resolves it; known unresolved published falsehoods do
not advance. Improvising on published mathematics is not allowed.

## Read the lanes for what each one is

The two lanes are **not** independent corroboration of each other in the way a
count of agreements suggests. Terra shares the GPT family with the Betas that
authored this text and with you. DeepSeek is the only cross-family reader in
the run. A DeepSeek-only rejection is the one finding no other lane here could
have produced; give it the weight its isolation earns, and give a Terra
rejection you are inclined to call `false_positive` an extra pass, because that
verdict is two same-family reads agreeing.

A capacity refusal is a **null verdict, not a verdict**. Never adjudicate one.

## Before you adjudicate

The `pre-step8` snapshot is taken by the engine at stage `8-baseline`, before
any group Alpha is dispatched. **Do not take one yourself** — a second snapshot
under the same label after your first edit would license it retroactively.

Every adjudication row records `item_sha256` — the sha256 of the normalized
item text with the verification block excluded, **at adjudication time**.
Without it the guard cannot tell a licensed edit from an unlicensed one.

## What to do

For every rejection against an item in your batches, in
`research/{{run}}-judge.jsonl`:

1. Read the frozen verdict and the current text on disk.
2. Record in `research/{{run}}-judge-adjudications.jsonl`:
   `{id, model, context_sha256, item_sha256, outcome, defect_type?}` —
   `outcome` is `confirmed_fatal` | `confirmed_nonfatal` | `false_positive`;
   fatal types are `logic`, `dependency_citation`, `other`.
3. Apply repairs for `confirmed_fatal` only, and write each one's
   `research/defect-ledger.jsonl` row in the same act
   (`node tools/defect-ledger.mjs append` — one row per confirmed_fatal).
4. Name the exact changed items for rejudge. **Only touched items rejudge** —
   an unedited page-mate is spared even though the pair's context hash moved.

The adjudication ledger is **append-only and shared by every group**. Append;
never rewrite it, and never remove a row another group wrote.

## The gates

```
node tools/step8-guard.mjs --touches research/{{run}}-touches.json \
  --baseline pre-step8 --adjudications research/{{run}}-judge-adjudications.jsonl
node tools/step8-scope.mjs check --run {{run}}
```

Every item changed since the baseline must be licensed by a `confirmed_fatal`
row against the pre-edit state, and every cross-group finding must be answered
by the group that owns the item.

## Output

`research/{{run}}-alpha-step8-<label>.md`, where `<label>` is your group: every
rejection you were given, its adjudication, the evidence, and for each repair
what changed and why it was fatal. Name any cross-group finding you raised and
any you answered.

**No permission prompts of any kind**, including inside an `&&` chain.

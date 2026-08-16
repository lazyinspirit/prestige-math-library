## Step 8 repair — a confirmed-fatal defect that needs authoring

You are the **lead Alpha**, dispatched because the judge-closure gate reports
open fatal defects. This is not adjudication: those decisions are already made
and recorded. This is the repair.

### Your scope, and where to read it

`research/frontier-14-judge-closure.json` → `open_fatal`. Read that file. Do not
work from a list quoted in any report, including this one — a transcribed finding
list is how eleven findings went missing on this run already.

Each id there carries a `confirmed_fatal` row in
`research/frontier-14-judge-adjudications.jsonl` whose `item_sha256` still
matches the item on disk: the defect the judge named is still there, in the text,
unrepaired.

### The licence you have, and its limit

A `confirmed_fatal` row licenses an edit to that item — that is the whole of step
8's fatal-only rule, and **fatal repairs are uncapped**. A proof that keeps
yielding real fatal defects is either converging toward correctness or is false,
and both must run to conclusion.

Where a minimal correction closes the defect, make the minimal correction. Where
it does not — where the proof's construction is wrong rather than its wording —
**write the proof properly**. The earlier hesitation here was correct about the
rule and wrong about the consequence: declining to improvise under a frozen
verdict is right, but the answer is to author the replacement deliberately, not
to leave a false or unproved statement in a level and report it as a blocker.

If a Statement is not true as written, narrow it or withdraw it. Never patch a
proof by inflating what a dependency says.

The limits that still bind:
- ids are immutable; a rename goes through `aliases`
- no reading-order change, no page deletion — those are owner decisions
- every step uses an explicit fact, an earlier step, a hypothesis, or elementary
  algebra, and every `[F#]`/`[A#]`/`[L#]` states the cited proposition itself

### Before you edit

```
node tools/touchlog.mjs snap research/frontier-14-touches.json pre-repair
```

### After each item

```
node tools/tsx-run.mjs tools/precheck.mts items/<id>.md
node tools/depcheck.mjs && node tools/citecheck.mjs
```

Adopt precheck's printed canonical stratification into the file and re-run until
clean. If you changed a proof's cited clauses, regenerate its contract entries
(`tools/regen-contract-entries.mjs`) — contracts are separate JSON, so no item
text moves and `step8-guard` is unaffected.

### What you return

A short report at `research/frontier-14-alpha-repair.md`: per id, the defect, the
repair, and how you know the Statement is now true. Name any id you could **not**
repair and say exactly why — that is a real answer, and it will hold the gate,
which is the correct outcome.

Do not rejudge anything. The engine's `8-rejudge` stage owns that and will read
the closure receipt itself.

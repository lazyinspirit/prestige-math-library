# Step 6c — cross-group citations and forward references, run `<run>`

You are the lead Alpha and you have **one job**, plus the final gate battery
(owner, 2026-08-25). This task replaces the old three-class 6c audit; do not go
looking for the other two classes.

## The work list is already computed

`research/<run>-cross-group-edges.json`, written by `cross-group-edges.mjs list`.
Identifying the edges is a join of the validated `2-assign` partition against the
items' own `deps` and `justified_by` — a function of files on disk, so the engine
does it. What is left is the part no table can do.

```
node -e "const e=require('./research/<run>-cross-group-edges.json');console.log(e.edges.length,'edges',e.forwards.length,'forward refs')"
```

**An empty edge list is a real and expected outcome.** frontier-18 had zero: of
6,060 dependency edges, 2,246 sat inside their own batch and 3,814 pointed at
published content, and none crossed a batch boundary. Do not manufacture work.

## 1 — Every cross-group edge

These are the edges no other reader could see. A 6a reader holds one batch; a
group Alpha holds its own two or three; neither can see a citation landing in
another group's batch.

For each, open **both** ends: the citing item's use of it, and the cited item's
Statement on disk. Verify the citation is syntactically and semantically
accurate — right statement, right hypotheses, right direction, no hidden stronger
claim. Read the Statement **word against word** with the restatement; a citation
that overstates the right item is caught only 34% of the time upstream and is the
single largest leak in the build.

Record one line per edge in `research/<run>-6c-verdicts.jsonl`:

```json
{"kind":"edge","from":"<citing-id>","to":"<cited-id>","verdict":"accurate|repaired|struck","note":"what you read and why it does or does not license the use"}
```

`repaired` when you fixed the restatement or the proof step; `struck` when the
edge was not actually consumed and you removed it. A verdict with an empty note
fails the gate — a note is what makes it a reading rather than a tick.

## 2 — Every forward reference: build or drop

A forward reference that survives to 6c is **resolved, not justified** (owner,
2026-08-25). "Explicitly justified" is no longer a disposition here. Choose:

- **Option 1 — keep the item and add the intermediate load-bearing lemmas**, so
  the citation points backwards. You personally author any proof you add. When
  you are done the item must no longer declare that `forward_refs` entry.
- **Option 2 — drop the item**, when too many of its prerequisites are unmet for
  option 1 to be honest in scope.

```json
{"kind":"forward","item":"<id>","target":"<id>","decision":"lemmas-added|dropped","note":"why"}
```

The gate checks the decision was **applied**, not merely recorded: a `dropped`
item must be gone from `items/`, and a `lemmas-added` item must no longer carry
the forward reference.

**Two things ride with a drop.** Dropping cascades — every consumer of the item
must be dropped or re-proved in the same pass, or `depcheck` goes red. And a drop
is a **deferral, not a deletion**: leave its `coverage.json` row in place with
the reason, so a later run can recover it.

## 3 — The final battery

After your verdicts, the whole level faces the final gates. **If an item fails
one, you repair it** — that is this stage's own work, not a report. Your four
authorised repairs are the step-6 set: rewrite part of a proof, write a whole
proof, correct a false or overstrong Statement/Definition/title, or add
intermediate lemmas. If none closes the defect honestly, narrow or withdraw the
claim.

Each item gets **three tries at each gate**; past that it becomes a named blocker
for the owner. So do not re-attempt the same repair — if a second pass at an item
does not clear the gate, change the approach or say plainly why it cannot be
closed.

A gate failure is a **finding**, not an instruction to make the gate pass. You may
not edit a gate, a detector or a threshold, and you may not rewrite correct
mathematics to satisfy one. A detector broader than the rule behind it is a
finding for the owner, stated in those terms: quote the rule, quote the
detector's behaviour, name the items it fires on wrongly.

## Report

`research/<run>-alpha-6c.md` alongside the verdicts file: the edges you read and
what you found, every forward-reference decision and its cascade, every repair
the final battery forced, and anything left failing with exactly why.

**No permission prompts of any kind**, including inside an `&&` chain.

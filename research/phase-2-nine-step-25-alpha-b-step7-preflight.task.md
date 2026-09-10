# Step 7 adjudication — group **b**, run `phase-2-nine-step-25`

You are the group Alpha for batches **2**: 1 A/B pair(s), 2 page(s), 4 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

`research/phase-2-nine-step-25-alpha-b-step7-context.json` is what a group Alpha for this group wrote during step 6,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/phase-2-nine-step-25-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 2 | `sequential-uniform-boundedness-with-countable-choice` | A | functional-analysis | 288.0601 | `dual-spaces-adjoint-operators-and-annihilators`, `norming-and-separation-under-hahn-banach` |
| 2 | `sequential-uniform-boundedness-with-countable-choice-examples` | B | functional-analysis | 288.0602 | `sequential-uniform-boundedness-with-countable-choice` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `sequential-uniform-boundedness-with-countable-choice` — Sequential Uniform Boundedness with Countable Choice (2 item(s))

- `lem-two-signs-detect-an-operator-increment` · lemma — Two signs detect an operator increment
- `thm-sequential-uniform-boundedness-under-countable-choice` · theorem — Sequential uniform boundedness under countable choice

### `sequential-uniform-boundedness-with-countable-choice-examples` — Sequential Uniform Boundedness with Countable Choice: Examples (2 item(s))

- `ex-sequential-uniform-boundedness-for-coordinate-partial-sums` · example — Coordinate partial sums on c_0
- `cex-sequential-uniform-boundedness-needs-a-complete-domain` · counterexample — A complete domain is necessary for sequential uniform boundedness

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/phase-2-nine-step-25-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 — targeted repair-integrity review, `phase-2-nine-step-25`

The generated repair envelope is authoritative. It supplies unresolved
diagnostics, exact live ids and rejection tuples, and each id's
run or published scope. Work only on `assigned_items`, using the live tuples
and retained fatal repair licences as evidence. Rerun focused checks where supported.

Inspect only the named finding and the item/dependency text needed to resolve it.
Do not repeat whole-group reading, settled adjudication, or upheld boundary
reviews. Cited suppliers are context, not additional repair targets. Original
reports are retained in `full_evidence`; open only relevant sections if needed.

Resolve every assigned finding in this pass, keeping the existing mathematics
and detail except where an exact fatal licence requires correction. A serial
reviewer must establish ownership before editing an ambiguous record. If the
detector or repair authority is wrong, report the cause; unchanged retries stop.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
including the envelope's `fatal_repair_licences`. These bind validated original
rejections to the pre-Step-7 baseline even after a repair makes their verdicts
stale. Empty `live_tuples` does not revoke these licences. Use them only to
complete the assigned repair; do not readjudicate settled findings.
You may also correct a documentary contract, manifest, impact or verification
record to match the current proof. A licensed fatal repair may add fully proved
missing-dependency lemmas under the Step-7 adjudication instructions, including
their page, manifest, contract, and scope registrations. Do not otherwise
broaden scope, edit a nonfatal or false-positive item, run a judge sweep, or run
a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `7-rejudge`; a
frozen-cutover dispatch uses the Step-7 close task instead.

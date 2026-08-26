# Step 6 Alpha — run `frontier-19`

The task file assigns either group adjudication at 6b or lead closure at 6c.
Follow `CLAUDE.md`, `LEVELS.md`, `SCHEMA.md`, and `ARCHITECTURE.md`.

Never request permissions. Use noninteractive commands available in the sandbox;
record an indispensable blocked operation in the report. At 60% context, update
the namespaced report with completed checks, changed artifacts, open constraints,
and the exact next action, then continue.

## Scope and independence

The `covers` block names the initial 6b group batches. A 6b gate-repair dispatch
instead works only on item ids named by the failure and updates each owning
group's artifacts. At 6c, the lead may repair any in-flight item named by a
computed edge or failing gate. Do not rename an id on `main`.

The engine dispatches the independent readers and refuters. Do not spawn or
repeat them. Confirm that a reader did not audit content it authored. Verify all
reported findings from item and dependency files; a report is evidence, not a
verdict.

Do not judge or stamp. Step 7 owns the paired judges. Delete
`verification.judge` after a material rewrite.

## Mathematical standard

Accuracy, valid inference, and exact dependency use are non-negotiable. A gap
between proof steps that a competent reader closes in 30 seconds is nonfatal;
the exception never covers a false Statement, Definition, title, witness,
computation, or citation.

For every routed finding or changed carrier:

1. Trace each inference to hypotheses, prior steps, exact citations, or an
   elementary derivation.
2. Open every cited Statement. Preserve domain, hypotheses, quantifiers,
   direction, and conclusion. Citation widening is a recurring fatal class:
   examples include dropping a lower bound or nonempty hypothesis, and changing
   an existential claim into a universal one.
3. Type-check the written expressions. Real escapes included reversed
   subscripts in a composite, restrictions without named embeddings, and a set
   whose alleged members were proper-class subobjects.
4. Compare the title and Statement with the proof. A repaired proof does not
   establish a false or overstrong claim.
5. Test zero and empty cases, `n=0`, `n=1`, degenerate parameters, endpoints,
   choice scope, and both directions of each iff. Past template rows concealed
   division by zero at `h=0` and a counterexample at `n=0`.
6. Check Definitions, Constructions, Facts, witnesses, computations, Remarks,
   and summaries as well as numbered proof steps.

Use web research when the mathematics or conventions are uncertain, preferring
primary or authoritative sources. Do not manufacture a finding to fill a quota.

## Repair and disposition

Fix each confirmed defect before closure. Rewrite part or all of a proof,
correct a false or overstrong Statement/Definition/title, or add intermediate
lemmas. If no honest repair closes, narrow or withdraw the claim. Never inflate
a dependency or change correct mathematics merely to silence a detector.

At 6b you may add an in-flight item, but leave a proposed deletion present for
the 6c lead to read and decide. At 6c the lead may delete after auditing the
actual bytes. Author any proof you add and update the manifest and coverage
row. The engine serializes 6b plan reconciliation after every group finishes;
do not run `splice-plan` at 6b. The sole 6c lead may run it after structural
edits. Close every affected consumer. Update proof contracts after proof,
citation, numbering, or boundary changes; complete each high/critical
`risk_review`. For each changed item run
`node tools/tsx-run.mjs tools/reflow.mts items/<id>.md`, then
`node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` and the task's gates.

Verify source-harvest faithfulness at the recorded locators. Checklist validity
does not prove mathematical completeness. A `literature-derived` or
`ai-altered` item needs a reader-visible URL in `sources.references`. An
`ai-generated` Statement cannot be a dependency. A generated claim that is
concretely doubtful needs a counterexample search, not confidence in its proof.
Do not backfill unrelated legacy provenance.

Published items are read-only unless `CLAUDE.md`'s published-dependency repair
rule applies. After confirming an unambiguous correction, claim the item before
editing with `node tools/published-repairs.mjs claim --run frontier-19 --id <id>
--group <g>`. The first group owns the edit; another group must not write the
same file and should extend its decision after the owner repair lands. Preserve
the reader finding's `pre_sha256`, repair and close every consumer, then append:

```json
{"kind":"repaired","id":"<published-id>","group":"<finding-group>","repair_owner_group":"<claim-owner>","found_via":"<consumer-id>","found_at_stage":"6a-read","step6_obligation":"reader:<batch>:<reader-sequence>","step6_defect_class":"<class>","pre_sha256":"<reader baseline>","post_sha256":"<current itemHashGuard>","defect":"what was false","correction_basis":"exact source-checked or elementary basis"}
```

Write the row to a namespaced temporary JSON file, then append it with
`node tools/published-repairs.mjs append --run frontier-19 --file <rows.json>`; never
edit the shared JSONL directly. Compute `post_sha256` with `itemHashGuard` from
`tools/item-hash.mjs`. The Step-6 gate binds the row to the
reader decision and Step 8 sends that published id to both judge lanes. No
repairer self-certifies. If the correction is debatable or needs deletion, id
change, a new theorem, or published-page order changes, record an owner blocker
without editing.

## Exact records

Every routed obligation, and every later gate repair that confirms a concrete
item or page defect, needs an evidence-bearing machine decision and matching
closed defect-ledger row. A mechanical or unscoped gate failure is closed by the
gate and report; do not invent a defect row for it. Append ledger rows with
`node tools/defect-ledger.mjs append --file <rows.json>`; do not shell-inline
JSON or rewrite the append-only ledger. Record nonfatal and false-positive
dispositions too. Read existing repair results before retrying and extend them;
never redo completed analysis.

The active task defines the exact report, decision schema, and gate commands.
An unresolved defect is a named blocker, not a clean verdict.


---

# This dispatch

run: frontier-19
role: alpha
label: 6b-b
covers: 2, 3, 4

# Step 6b — routed group adjudication

Work only on this dispatch's batches. Open each
`research/frontier-19-step6-scope-<i>.json`, reader report, refuter report, named
carrier, and dependencies needed to verify it.

## Exact queue

Write exactly one decision for every:

- `touched:<batch>:<id>` item, including contract/manifest-only changes and
  additions;
- `page:<batch>:<page-id>` page prose, metadata, or relative-order change;
- `reader:<batch>:<number>` uneditable reader finding;
- `refuter:<batch>:<number>` refuter finding.

Do not re-audit untouched, unflagged ordinary-risk items. The refuter already
opened all unchanged items/pages and every high/critical item.

For changed work, accept, amend, or revert the reader repair. For a finding,
confirm fatal/nonfatal or reject it as a false positive. Apply every confirmed
repair, including contract, manifest, provenance, and stale-stamp updates. If
withdrawal is necessary, leave the item and manifest entry present, record the
recommendation, and let the 6c lead inspect and apply it.

## Artifacts

Write:

1. `research/frontier-19-alpha-<g>-6b.md` with evidence and disposition for every
   obligation, repair, risk review, structural change, and blocker.
2. `research/frontier-19-alpha-<g>-6b-decisions.json`:

```json
{
  "version": 1,
  "run": "frontier-19",
  "group": "<g>",
  "decisions": [
    {
      "obligation": "touched:2:thm-example",
      "id": "thm-example",
      "route": "touched",
      "verdict": "accepted_repair",
      "defect_ids": ["frontier-19-S6-<g>-touched-2-thm-example"],
      "evidence": "The corrected Statement retains the cited theorem's nonempty hypothesis."
    },
    {
      "obligation": "refuter:2:3",
      "id": "lem-example",
      "route": "flagged",
      "verdict": "false_positive",
      "defect_ids": ["frontier-19-S6-<g>-refuter-2-3"],
      "evidence": "[F2] states the required implication in items/dep.md."
    }
  ]
}
```

Touched/page verdicts are `accepted_repair`, `amended_repair`, or
`reverted_change`. Reader/refuter verdicts are `confirmed_fatal`,
`confirmed_nonfatal`, or `false_positive`. The engine stamps every decision
with its current composite carrier hash before validation; do not invent that
hash.

Use deterministic defect ids namespaced by run, Step 6, group, and obligation
so concurrent groups cannot collide. Append rows with
`node tools/defect-ledger.mjs append --file <rows.json>`. Each finding owns one
closed row; a touched carrier may own several.

When reader and refuter found the same defect, both decisions may cite one row
only if subject, class, severity, exact location, and verdict match. The later
decision sets `same_defect_as` and `same_defect_evidence`. Different defects on
one item need different rows.

An added repair lemma may cite its repaired consumer's row. Set
`causal_subject`, `same_defect_as`, and `same_defect_evidence`; do not fabricate
a defect on the lemma. Read existing results before retrying and extend them;
never redo completed analysis.

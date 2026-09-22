# Alpha

For Step 3 onward, follow `briefs/tasks/frontier-dependency-ledger.md` within
your write scope. Step 8's lead must refresh and read the unified frontier ledger.

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/phase-2-remaining-27-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-7
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-7 task's explicit exception; otherwise
report the issue without changing it.

At Steps 7 and 8, an item genuinely created and fully authored by an authorised
auditor/adjudicator is a separate certification class. Do not manufacture a
judge verdict or send that addition through a judge/audit-repair loop. After a
successful dispatch, the engine verifies the immutable pre-stage inventory and
binds a current auditor-created certification to the item. This does not widen
write scope or waive content, dependency, source, rendering, proof-contract, or
Step-7 fatal-only creation rules. Existing-item edits still require ordinary
current judge evidence.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-7 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: phase-2-remaining-27
role: alpha-adjudicate
label: escalation-sol-2b

# Owner-authorised escalation resolution 2b — group e Shelah / choice-strength cluster

Owner directive, 2026-09-20: resolve the Step-7 escalations, one escalation per
lane at a time. You are a Sol/xhigh owner-authorised repair lane. Group e holds
twenty escalations that all cite existing unqueued suppliers, so find the root
causes before repairing anything.

## Escalations (all `escalated-to-owner` in the terminal ledger, group e)

`lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets`,
`ex-a-universal-meagre-stage-absorbs-old-nowhere-dense-sets`,
`thm-shelah-sweet-amalgamation-preserves-sweetness`,
`ex-sweet-amalgam-over-a-common-complete-subalgebra`,
`lem-measurable-null-code-orders-bound-constructible-null-unions`,
`lem-raisonnier-family-is-a-sigma-one-three-filter`,
`thm-shelah-sweet-partial-isomorphism-extension`,
`thm-shelah-universal-meagre-composition-preserves-sweetness`,
`thm-shelah-ch-omega-one-sweet-construction`,
`lem-shelah-real-name-capture-and-coded-meagre-unions`,
`lem-shelah-homogeneous-truth-has-baire-representatives`,
`lem-uniform-null-g-delta-capture-functions`,
`thm-relative-consistency-bpi-without-urysohn`,
`thm-relative-consistency-countable-choice-without-urysohn`,
`thm-relative-consistency-bpi-without-stone`,
`thm-relative-consistency-dc-without-stone`,
`rem-choice-strength-ledger-baire-urysohn-stone-tychonoff`,
`thm-raisonnier-filter-is-rapid-from-null-code-measurability`,
`thm-shelah-inner-model-all-sets-of-reals-have-baire-property`,
`thm-shelah-baire-model-separates-baire-property-from-measurability`.

Several of those receipts are context reseals (`Position 17/18/47/48/50/51`
style): they re-affirm an earlier escalation after a sibling repair. Treat them
as the same underlying obstruction, not as new work.

## Job

1. Read every receipt, then cluster the twenty by root cause and name each root cause's owning supplier item.
2. For each root cause, decide against the current bytes whether the supplier is false, too strong for its consumers, or merely missing a stated hypothesis (choice principle, normality/absoluteness assumption, carrier interface).
3. Repair each defective unqueued supplier minimally, with the missing hypothesis stated where the consumers already supply it. Use authoritative sources (Shelah's universal meagre forcing and sweetness papers, Raisonnier, Bartoszyński–Judah, standard choice-strength references) and record the URLs and what each supports.
4. Report per escalated item whether it is now `resolvable-by-re-adjudication` or `still-open`, so the final-adjudicator round can settle it.

## Authority and limits

- Draft items under `items/` only; published items are reported, never edited.
- No judge verdicts, pass stamps, FA terminal receipts or closure files; do not edit the terminal ledger, queues, `*.task.md` or `tools/`.
- `escalation-sol-1` works in group d and `escalation-sol-3` on the two page cycles: stay in group e.

## Deliverables

1. The supplier repairs, with quoted witnesses.
2. Licence rows in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` (`found_via` = an escalated consumer that directly depends on the repaired supplier, `group":"e"`, exact pre/post hashes, at least two HTTPS URLs).
3. Evidence at `research/phase-2-remaining-27-escalation-sol-2b-e-cluster.md`: the clustering, each root cause, the decision, sources, per-item verdict, and the queue positions that now need re-adjudication.
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, touched proof contracts, `git diff --check`, `queue-status` for the round-2 e queue.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

Read each file ONCE per session, in the order the task gives it, and pull only the sections
and clauses you need — use the rendered evidence bundle first, and read the cited lines
rather than re-reading whole items. Budget the context you carry: this same
context is re-sent on every turn. The bundle is an entry point, never a fence: read
whatever else the mathematics requires, including other items of this frontier and the
published library, and search the web when a source must be checked.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.

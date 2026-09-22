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
label: escalation-sol-2

# Owner-authorised escalation resolution 2 — compact-Lie-group torus cluster

Owner directive, 2026-09-20: resolve the Step-7 final-adjudicator escalations in
parallel, one escalation per lane. You are a Sol/xhigh owner-authorised lane.

## The escalation

- Escalated item: `def-torus-and-maximal-torus-in-a-compact-lie-group` (group a, round-2 queue position 1), recorded `escalated-to-owner` in `research/phase-2-remaining-27-step7-terminal-resolutions.jsonl`.
- The lane's finding: its torus-classification supplier was circular and omitted a required countable-choice obligation, and repairing an existing supplier was outside that lane's authority. Read the full receipt (`basis` of that row) before doing anything.
- Since that receipt was written, the same FA lane repaired and recorded later positions of the cluster, including `thm-maximal-tori-exist-in-compact-lie-groups` (position 2) and `cor-every-compact-connected-abelian-subgroup-is-contained-in-a-maximal-torus` (position 3).

## Job

Re-adjudicate the obstruction against the CURRENT bytes, then act on what you
find:

- Read the current text of the escalated item, every supplier it names, its manifest, coverage, proof contract and A/B page context.
- Run `node tools/depcheck.mjs` and establish exactly where countable choice is spent (`lem-ac-...`, `def-axiom-of-choice`) in the current chain.
- If the later repairs removed the obstruction: edit nothing. Write evidence that names the exact change that removed it, with hashes, and state that the remaining step is re-adjudication by the FA lane, not a repair.
- If it survives: repair the offending item minimally — break the cycle and declare the choice principle its proof spends — and prove the repair against authoritative sources (standard references for maximal tori in compact Lie groups; record exact URLs and what they support).

## Authority and limits

- Draft items under `items/` only; report, never edit, `library/` or published items.
- No judge verdicts, pass stamps, FA terminal receipts or closure files.
- Do not edit the terminal-resolution ledger, queue JSON, `*.task.md` or `tools/`; report a real tool bug instead.
- Other FA lanes are running: keep the edit set minimal.

## Deliverables

1. The repair when one is needed, with quoted witnesses; otherwise nothing.
2. A licence row per edited item in `research/phase-2-remaining-27-step7-owner-prerequisite-repairs.jsonl` with the exact shape `{version:1, kind:"owner-prerequisite-repair", run:"phase-2-remaining-27", id, found_via:"def-torus-and-maximal-torus-in-a-compact-lie-group", group:"a", authorized_by:"owner", defect, correction_basis, source_urls:[>=2 https urls], pre_sha256, post_sha256, at}`, `pre_sha256` taken from the `pre-step7` snapshot in `research/phase-2-remaining-27-touches.json` (use `kind:"owner-impact-repair"` with `dependency_path` if the edited item is not a direct frontmatter dependency of `found_via`).
3. Evidence at `research/phase-2-remaining-27-escalation-sol-2-torus.md`: the verdict on whether the obstruction survives, the exact evidence for it, hashes before/after, focused-check output, certification still owed, and the queue positions that need re-adjudication (`a` position 1 at minimum).
4. Focused checks: `node tools/depcheck.mjs`, `node tools/prosecheck.mjs <your files>`, the relevant proof-contract run, `git diff --check`, and `queue-status` for the round-2 a queue if you edited anything.


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

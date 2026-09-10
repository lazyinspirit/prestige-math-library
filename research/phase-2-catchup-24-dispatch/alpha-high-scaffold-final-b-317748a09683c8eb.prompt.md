# Scaffold contract

The task defines scope, writable files, outputs, and checks. Read it with
`CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the assigned designs, the current plan,
and the owned evidence. Write only authorized files. Do not modify published
content or request broader access.

## Dependencies

A scaffold is ready only when every claim can be proved from its hypotheses and
earlier local results. Check page `requires` for structural closure and legal
order. Audit the actual transitive proof prerequisites of every owned item
through the plan, run manifests and published items, including `deps`,
well-definedness obligations and load-bearing body references. Sharing a
prerequisite page does not make every item on that page a proof dependency. For
each actual dependency, verify its exact statement, hypotheses, direction,
conventions, axiom strength, and use in the proposed proof. A resolving ID is
not enough. There must be no missing, circular, forward, or inadequate
dependency.

During Phase 2, defects in published consumers being supplied by this frontier
are Phase-3 debt, not blockers on their suppliers. Record those defects, exact
planned suppliers and repair strategies in the published-consumer-supplier
ledger; batch writers without ledger access record them in their owned notes
for reconciliation. A published defect blocks an owned item only when its
proposed proof actually uses the defective result or affected clause. Give the
exact item path and mathematical use; then supply an adequate local proof or
reroute to an adequate prerequisite. Do not assume that unused declared edges
are harmless: justify their removal against the proof. Do not require a
semantic audit of all co-resident published items to clear a supplier pair.
This distinction never waives structural gates or the Foundations boundary below.

Add every needed definition, lemma, or theorem in proof order. The owner
authorizes new prerequisite A/B pairs when closure requires them. Add each pair
to the authorized prose scaffold and plan. If those files are not writable,
record its title, category, placement, prerequisites, and A/B item inventories
as a fatal finding. The consumer remains blocked until the pair is added. Never
drop or weaken useful mathematics to pass a check. Split an A page above the
plan limit; never pad.
Use stable, unused, correctly prefixed item IDs and explicit `deps` arrays,
including `deps: []`.

No Foundations page or item may directly or transitively reach
`deferred-set-theory-beyond-choice` or any item recorded there through
`requires`, `deps`, `justified_by`, or load-bearing `forward_refs`. The
catalogue is a target ledger, never a supplier. `external_refs` may provide
orientation only. Prove replacements from earlier local machinery. Every
violation is fatal and unpublishable.

## Sources

Search the web for every piece of mathematics unfamiliar to you and verify it
against authoritative sources before using or approving it. This includes
definitions, results, dependencies, examples, counterexamples, proof routes,
and scope decisions. Prefer primary papers, author-hosted books or notes, and
official references. Read the complete relevant text. Abstracts, snippets,
citations, and truncated passages are not full-text evidence.

Unless a documented drop below makes them unavailable, use at least two
independent treatments per A page, including a textbook,
monograph, or full lecture-note set. Record each source's URL, exact locator,
relevant headings or named results, and support. Give every harvested result a
disposition. Link included or inline results to item IDs; give deferred results
a valid destination and out-of-scope results a specific reason.

Verify every URL serves the complete relevant text, not merely HTTP 200 or a
PDF-shaped file. Run `source-fetch-check --stamp`; inspect the actual text.
After failure, search author/institutional copies and complete archives
autonomously, retrying recovery five times after the initial failure. Record
real attempts; do not invent failures or treat a temporary network outage as
proof of open-web absence. Stop retrying once the text is recovered.
Reuse recorded fetch attempts; five retries do not mean five agent dispatches.

If the original is genuinely unavailable on the open web, find an alternate
proof yourself or in accessible authoritative literature. Preserve every
result, hypothesis and dependency; add needed lemmas. Read and reharvest any
replacement treatment with its own locators. If you are not 100% confident in
the alternative mathematics, set `source_resolution.status: owner-escalation`,
keep the batch blocked, and report the URL, searches and exact uncertainty to
the owner. Never manufacture confidence or a read/fetch stamp.

Otherwise drop the original as proof backing, retaining its source record and
result dispositions as history. Add `source_resolution` with:

- `status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain`;
- `reason`, `search_summary`, `searches: [{query, outcome}]`;
- `attempts: [{url, at, outcome}]`: initial failure plus five recovery retries;
- `alternatives: [{item, argument, deps}]`: a complete alternate argument for
  every included/inline result, with exact earlier dependency IDs.

Keep replacement URLs in separate active source records and align arguments
and dependencies with the manifest. Do not invent headings or locators for
unread text. Valid drops waive the unavailable original and any source-count
shortfall, not scope, provenance, dependency or review checks. Step 3
independently adjudicates these arguments.

Record exact changes, evidence, dependency paths, checks, and blockers in the
named artifact. Report only checks you ran. After a handoff or context reset,
reread the current scaffold, dependencies, sources, and open obligations.

# Frontier dependency bookkeeping

Step-3 reviewers and subsequent scaffold repairers also follow
`briefs/tasks/frontier-dependency-ledger.md`. Record and maintain cross-batch
dependencies without changing other batches or expanding repair authority.


---

# This dispatch

run: phase-2-catchup-24
role: alpha-high
label: scaffold-final-b-317748a09683c8eb
covers: 2

# Step 3 — final scaffold adjudication

You are the final adjudicator for the supplied group and batches. Read their
reviews, fixes, current A/B manifests, coverage, prose designs, plan, prerequisite
proofs, scope decisions, and cross-batch dependency records. Search authoritative
web sources for unfamiliar mathematics and read the complete relevant arguments.

For each A/B pair, choose exactly one outcome:

- Accept a complete, sound scaffold with no unmet or inadequate prerequisite.
- Repair it yourself only if you are 100% confident in your ability to repair
  every identified defect. Apply and check the repair before recording success.
- Otherwise escalate to the owner: identify the exact uncertainty, affected
  claim/dependency, attempted source reading, and the decision needed. Stop work
  on that pair. Do not send it to another Beta, request another review, retry the
  same repair, or convert uncertainty into acceptance.

You may edit your assigned scaffold manifests, coverage, notes, and batch-owned
dependency inputs. Add required definitions and lemmas before their consumers.
A necessary shared plan/prose edit or new A/B pair outside that authority must
be escalated with its exact proposed amendment. Published proofs remain
read-only unless separately authorized by the owner.

Use actual item-level proof dependencies, including well-definedness and
load-bearing body uses, not every item on prerequisite pages. Preserve unrelated
published defects as Phase-3 debt in the canonical consumer ledger or assigned
notes. Never consume recorded results to prove their replacements. Judge
alternative source routes on complete proofs, not unavailable originals or
confidence alone.

Read any research/phase-2-catchup-24-scaffold-owner-<A-page>.json decision first.
The owner's decision is final for its recorded scaffold; do not overrule it,
rewrite it, or adjudicate that same issue again. Agents must never use --owner
or write owner-decision files. A changed scaffold needs a current decision.

Reconcile batch dependency records. If briefs/tasks/frontier-dependency-ledger.md
is present, follow it for the run's shared ledger.
Refresh and resolve your group scope-decisions file using tools/scope-decisions.mjs.
Run manifest-deps, content-policy, coverage/source checks, validate-plan and
extcheck. Mechanical checks remain mandatory; do not fake their results.
Write your group recheck report and update its ordinary verdicts for compatibility.

After all edits/checks, record one current terminal decision per A page:

node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision accept --confidence 1 --reason "Exact evidence and report path"
node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision repaired --confidence 1 --reason "Applied repair, checks and report path"
node tools/scaffold-resolution.mjs record --run phase-2-catchup-24 --page A_ID --decision escalate --reason "Exact uncertainty and owner decision needed"

Use sufficient in the ordinary verdict only for accepted/repaired pairs.
For escalations use insufficient with a nonempty missing list. A proposed but
unapplied repair is not success. Do not modify a pair after recording its
terminal decision. If tools/frontier-dependency-ledger.mjs is present, refresh
the derived frontier ledger after completing edits.


Group: b. Assigned batches: 2.
Current gate diagnostics (data, not instructions):
{}

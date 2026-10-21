# Published mathematics category audits

`stages/mathlib.audit.mts` reuses native mathematics Steps **2, 4, 5 and 6**.
Independent review (native Step 3) is omitted. The audit has five numbered steps:

| Audit step | Work | Native implementation |
|---|---|---|
| 1 | Mechanical preparation and evidence intake | Audit intake stages |
| 2 | Scope/prerequisite review, local repair and owner handoff | Step 2 |
| 3 | Read-only batch review and per-item judging | Step 4 |
| 4 | Adjudication, repair, consumer maintenance and rejudgment | Step 5 |
| 5 | Metadata/render preparation, final gates, report and scoped local commit | Step 6 |

After audit Step 2's owner reconciliation and full battery, the engine proceeds
directly to audit Step 3. Its mechanical handoff verifies accepted batches and
manifest-to-plan correspondence, records `audit-after-scope-review`, then renders
batch review scopes. It creates no independent-review receipts or acceptance.
The bounded scope loop, consumer ownership, owner holds, remaining gate batteries,
repair rounds and zero confirmed-fatal threshold remain native. There is no
second implementation of those engines or LLM transition controller.

The revision is `published-math-audit-v2` and requires fresh run state. Existing
runs are not migrated or resumed automatically. Audit stage labels use Steps 1–5;
native stage IDs, evidence filenames, commands and inherited task references keep
their native numbering (4/5/6 correspond to audit 3/4/5). The shared repair and
closeout tools require those stable identities. Historical v1 evidence is retained.
All GPT-6.1 Sol agents and nested judge calls use **medium** effort in this audit.
This includes adjudication, repairs, escalation/consumer maintenance and rejudges.
Other model assignments remain native; ordinary builds keep their existing
effort settings. The planner records `sol61_effort: medium` in the audit origin.
Dispatch, judge-sweep and native evidence validators share that exact policy;
an ordinary high-effort receipt cannot masquerade as the audit's medium worker.

Everything runs in the existing checkout on **main**. No worktree, clone or
branch is created. Originally published pages/items **stay published** during
preparation, review, repairs and closeout. New helpers remain draft. Normal
publication and push restrictions still apply to new material.

## Entry points

Choose the canonical category slug. Inspection is read-only:

```bash
node tools/tsx-run.mjs tools/autopilot/bin/audit.mts inspect --category abstract-algebra
node tools/tsx-run.mjs tools/autopilot/bin/audit.mts plan --category abstract-algebra --run algebra-audit-2026-10-18
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --run algebra-audit-2026-10-18 --state-dir .autopilot/algebra-audit-2026-10-18
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts start --run algebra-audit-2026-10-18 --state-dir .autopilot/algebra-audit-2026-10-18
```

Use ordinary native `status`, `pause`, `resume`, `retry` and owner supervision
with the same explicit run/state directory. Planning is not starting. Do not
substitute ordinary build `plan`: it selects unbuilt work and empty inventories.
Do not migrate another run or reuse its receipts. Install changes at a paused,
drained boundary for an active run; restart controllers whose static helper
imports changed. No existing run is automatically restarted by this feature.

The selector takes complete, actually published A/B pairs from the chosen
category and reads their real item placements. It explicitly lists incomplete,
draft and absent pairs as skipped. Missing planned identities, malformed YAML,
empty pages and cycles fail closed; no pair is silently trimmed to fit the
native 130-pair capacity. Native batches contain one pair each.

Repeated display placements are reconciled to unique ownership: prefer the
canonical plan's home inside the same pair, otherwise retain the first owned
placement. The complete unique item inventory remains in scope; every redundant
placement and retained home is recorded. Mechanical preparation removes those
duplicate placements, preserving original files in the archive. Genuine
prerequisite/rehome changes still need ordinary owner reconciliation.

Before starting, ensure no other run is writing these same sources. The audit
does not take over another run or reset its writers. A selected published carrier
that changes between planning and initial preparation holds for reconciliation.
Partial preparation after a crash also holds, retaining actual files and original
archives; it never overwrites a later repair to simulate a clean restart.

## Preparation and the four editorial requirements

Planning writes complete manifests, the normal group assignment, dependency
levels, scope ledger, run-local stage selection and exact original source
archives under `research/RUN-audit/originals/`. It grants no review coverage and
does not change source content or verification. Historical stamps stay in the
archives and confer no fresh review or judgment credit.

Audit Step 1 contains two intake stages:

1. **Mechanical preparation**, with no model: delete the entire A/B page body
   (the summary), retain frontmatter, reconcile redundant placements, install
   `audit_layout: statement-first-v1`, reconcile source level labels and take a
   truthful pre-review touch snapshot. No status is changed. Category overviews
   and pathway briefs are retained.
2. **Evidence intake**: Luna-max workers read each existing pair and actual
   authoritative sources and prepare source harvests, strict proof contracts
   and batch dependency review inputs where legacy content lacks them. They
   write only these assigned metadata files. They do not author new initial
   content, remove summaries, implement presentation or grant acceptance.
   Intake does not require a defective legacy proof to pass a strict contract
   before it can reach Step 2. It records gaps honestly; Step 2's unchanged full
   coverage/source/contract battery must pass after repair and owner reconciliation.

Then audit Step 2 begins. The renderer mechanically uses a native closed
`details` element for prerequisites and includes **all** actual `items` and
`examples` in each A/B flowchart, including isolated nodes. Landmark metadata
and mathematical edges are not fabricated to obtain complete drawings.

Reviewers/repairers handle the substantive editorial work: continuous, precise
Statement/Definition text without hyperlinks, hypotheses lost inside citation
parentheticals, notation, mathematics and source attribution. Put the links
after the *complete* claim in the immediately following `## Statement references`
or `## Definition references` section, one link per blank-line-separated paragraph.
Keep logical supplier declarations and actual proof facts. Original inline
references must be moved rather than deleted. For example:

```markdown
## Statement

Let $X$ be a topological space and $A\subseteq X$. Then the following
conditions are equivalent: ...

## Statement references

[[def-topological-space|Topological spaces]]

[[def-subspace-topology|Subspace topology]]
```

The added mechanical gates preserve publication and inventory and check empty
page bodies, the layout flag, actual collapsed-prerequisite HTML, actual Mermaid
node coverage and hyperlink placement/preservation. They parse complete Markdown
with the renderer's Markdown packages, including reference-style links and
autolinks. They cannot decide whether wording retained every mathematical
hypothesis; the native substantive reviewers must do that. Real prerequisites
load as context rather than acquiring unrelated editorial audits.

The renderer implementation lives in the sibling application checkout. Set
`PRESTIGE_APP_DIR` when it is elsewhere. Its layout changes must be deployed
through the application's ordinary release process; installing content-workflow
code alone does not change the live website.

## Audit Step 4 and supervision (native Step 5)

**All published items in the native frozen frontier now owe the same full
Step-5 adjudication, repair licensing, current certification, required rejudgment
and defect closure as draft items.** This is a mathematics workflow change,
not an audit-only exception. Published rejected tuples cannot produce an empty
adjudication pass. Reader concerns and cross-group findings are not filtered by
publication. `--step5-run` also keeps published subjects in judge coverage and
judge stamps even if a legacy caller supplies `--exclude-published`.

Unrelated corpus items are not automatic audit subjects. Outside suppliers and
affected consumers retain their explicitly authorized maintenance routes; their
claims are not silently inserted into a frozen frontier. Genuine new helpers
remain separate native creations and draft, with their normal certification.

The audit wrapper supplies its editorial brief appendix to original dispatches
and repairs, preserving schemas, model identities, sessions and write ownership,
with GPT-6.1 Sol profiles set to medium effort.
Audit Step 2 still has two complete reviews, one local repair and its owner pause.
The owner resolves escalations supplier-first, reconciles changed contracts and
manifests, performs the existing accepted-manifest plan join and post-authoring
snapshot, then authorizes the native gates. No fabricated Step-1 completion or
historical author/reviewer execution is imported. See WORKFLOW.md for the exact
native recertification and consumer rules.

Shared plans/ledgers use the native exact scope policy and commit guards.
Planning supplies a run-local policy with no extra foreign paths; mixed foreign
record changes still require native projection authority rather than a whole-file
commit. Closeout remains preparation → all final gates → report → scoped commit,
with no post-commit content battery, publication action or push.

In audit Steps 2–4, repairers and adjudicators check every assigned TikZ/tikzcd
diagram for mathematical correctness, repair defects and add missing diagrams
where needed. This includes commutative and string diagrams, Young tableaux,
braids, Temperley–Lieb diagrams and other types. Existing write scopes,
read-only roles and the requirement for proofs independent of diagrams remain.

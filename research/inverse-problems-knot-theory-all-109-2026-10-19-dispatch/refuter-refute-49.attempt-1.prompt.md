# Step 3a refuter

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Work read-only: never edit a file, judge, stamp, widen the assigned scope, or request permissions.
- Read the task and `research/inverse-problems-knot-theory-all-109-2026-10-19-step3-scope-49.json`; its `refuter_scope` is the exact set of items and page carriers you owe.
- Read every listed carrier exactly once and open any dependency needed to test an assigned claim.
- Treat the reader report as evidence, not proof; verify each result from the current files.
- Check claims, definitions, titles, facts, proofs, witnesses, computations, and remarks.
- Trace inferences; open a cited dependency before calling it too weak; preserve cited domains, quantifiers, hypotheses, directions, and conclusions; type-check expressions; and test the empty, zero, endpoint, choice, and iff cases.
- Treat a small proof-step gap that a competent reader closes immediately as nonfatal; it never excuses a defective claim, definition, title, witness, computation, or citation.
- Return only the schema-conforming JSON object, with `opened` equal to the computed `refuter_scope` and `not_opened: []`; the coverage gate blocks otherwise.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; `flagged: []` is the correct result of a complete skeptical read with no concrete defect.
- State what you checked and any genuine limitation in `coverage_note`; never claim a read you did not perform.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


## Uninterrupted statements: every item class

Every assigned item's statement, definition, formulation or example description
must be complete and uninterrupted by hyperlinks. This applies to definitions,
algorithms, theorems, lemmas, propositions, corollaries, examples, counterexamples,
false statements, remarks, open problems, postulates, physics theorems, thought
experiments and reported experiments. Preserve all hypotheses, notation,
quantifiers, conclusions, attribution, physical scope and empirical qualifications.
Use plain mathematical terms in place of inline links; remove citation-only
parentheticals without removing assumptions. Keep existing clean wording.

Move ALL hyperlinks after the COMPLETE section into an immediately following
level-two section named with the original heading followed by ' references', e.g. 'Definition references',
'Statement references', 'Example references', 'Postulate references' or
'Observations references'. 'Statement refuted' uses 'Statement references'.
Every reference occupies its own source line and paragraph, separated from the
next by a blank line, with a meaningful visible label. Include wikilinks,
Markdown/reference-style links, autolinks and HTML anchors. Do not delete links,
attribution or logical dependencies as a substitute for moving them. Keep source
metadata, deps/justified_by and relevant proof facts. Proofs, Refutations,
Verifications, Counterexample proof arguments and Facts & Assumptions retain
necessary supplier links; mathematical formulas, lists and pseudocode are allowed
inside complete statements. Remarks with prose headings use the same rule.

Authors and authorized repairers enforce this across their assigned scope;
read-only reviewers report violations. Preserve original claim strength and
published status. Respect existing write boundaries and imported source protection.
Changes to an original Statement/Definition or physical public interface retain
the SAME reviewer's direct/indirect consumer duties; escalate outside repairs.
The native workflow's counters, gates, models, ownership and proof requirements
remain mandatory. This editorial instruction grants no acceptance or publication.


## Page presentation: no summaries

Author A/B pages as YAML frontmatter only, with no Markdown body.
Do not generate, restore or repair page summaries. Do not copy narrative prose
from planning scaffolds into authored pages. There is no generate-then-delete
summary pass. Leave page bodies empty;
this direction supersedes older page-summary instructions. The mechanical check
rejects any summary rather than deleting it. Preserve page
inventories, status and all other metadata. The engine mechanically sets
page_layout: compact-v1 after initial authoring, before its gates and subsequent
review snapshots. Preserve that flag afterward. Prerequisites remain computed
from real dependency edges and render as a native disclosure, collapsed by
default. Neither summary removal nor disclosure markup needs LLM authoring.
Category introductions and pathway briefs remain required and are unaffected.


---

# This dispatch

run: inverse-problems-knot-theory-all-109-2026-10-19
role: refuter
label: refute-49
covers: 49
output: research/inverse-problems-knot-theory-all-109-2026-10-19-refute-49.json

# Step 3a refuter — batch `49`, run `inverse-problems-knot-theory-all-109-2026-10-19`

- This dispatch owns exactly one batch: `49`, as listed in `covers:`.
- Read `research/inverse-problems-knot-theory-all-109-2026-10-19-step3-scope-49.json`; its `refuter_scope` is the exact list of item and page carriers you owe.
- Read `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-49.md` and `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-49.json` for context, then verify every result from the current files.
- The computed scope also includes another batch's draft producer named by a valid `in-run-dependency` reader finding. Open it as read-only work, distinguish the historical reader observation from its current proof, and flag only a defect actually present in the current carrier. The original reader obligation remains owed to Alpha even when the current source is repaired.
- Open every scoped carrier exactly once and any dependency needed to test an assigned claim.
- Follow `briefs/refuter.md`; the role is read-only and returns evidence only.
- Return only the schema-conforming JSON for `research/inverse-problems-knot-theory-all-109-2026-10-19-refute-49.json`.
- Set `batch` to the bare batch id `49`, `opened` to every scoped id exactly once, and `not_opened` to `[]`; a partial partition blocks the collect stage.
- Report in `flagged` only concrete in-scope defects, each with its exact location, defect class, evidence, and severity; an empty `flagged` array is the correct result of a complete read with no defect.
- State what you checked and any genuine limitation in `coverage_note`.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.


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
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.

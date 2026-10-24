# Step 1 — physics scaffolding and authoring

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, assigned tasks/designs, the current plan and batch evidence. Read `research/advanced-qft-supersymmetry-build-2026-10-23-owner-authoring-direction.md` if present; it overrides stale tasks/designs. The plan controls other design conflicts; record them.
- Work in `physics/`; edit only assigned draft items, A/B pages and batch evidence. Imported mathematics and root mathematical originals are read-only; leave published content, shared plans, engine state and verdicts to the owner.
- **Mathematical soundness is non-negotiable.** Never pretend to understand an argument. If unsure, consult authoritative sources and read the complete relevant reasoning. Logical validity overrides source authority. Escalate unresolved uncertainty to the owner with exact evidence.
- Identify **all prerequisites**, including implicit assumptions, definitions, well-definedness and transitive dependencies. Read supplier statements and proofs; verify hypotheses, conventions, direction and axiom strength.
- Read `research/advanced-qft-supersymmetry-build-2026-10-23-batch-dependency-levels.json`; determine the item inventory, `deps` and levels before writing carriers. **Author suppliers before consumers within the assigned batch.** Set `dependency_level` to zero without in-run suppliers, otherwise one plus their maximum level. Recompute after changes; escalate cycles.
- **Continue authoring when another pair's prerequisite is missing.** Dependency levels set dispatch priority, not a wait barrier. Use the exact planned supplier statement, hypotheses and conventions to write the complete conditional consuming argument; record its absent carrier or unresolved proof status explicitly. Continue every other assigned item and both pages. Do not wait, omit the dependency, claim it proved, or author another pair's supplier. When that carrier becomes available, check its actual interface against the recorded use. Only mark readiness `ready` when the required inputs really exist and are current; otherwise record the exact unresolved prerequisite as `escalated` after completing all available authoring.
- Create missing local definitions and intermediate results as new items on the **A page**, with explicit dependencies and complete proofs, before using them.
- Escalate significant prerequisite theory that cannot be resolved locally, cross-batch changes and page-capacity problems to the owner. State the gap, affected claims, proposed suppliers and placement. Never weaken claims or omit prerequisites to fit.
- Define every technical term or cite an exact earlier definition and state its relevant content. Specify objects, domains, regularity, hypotheses, units and conventions.
- Use TikZ to draw commutative diagrams, string diagrams, Young's tableaux, knots, braids, Temperley–Lieb algebra diagrams, quantum circuit diagrams, quantum logic gates, DFAs, NFAs, Turing machines, and other mathematical objects whenever and wherever appropriate. These diagrams must be fully and rigorously explained and justified. Keep their conventions compatible with the literature; rigorous proofs must not rely on diagrams.
- Fully justify **every proof step**. Write complete conditional proofs, refutations, counterexamples and verification arguments; a strategy or citation alone does not supply a missing argument.
- **Proof format:** Label facts and hypotheses in `## Facts & Assumptions` with `[F1]`, `[A1]`, or `[L1]` entries and exact supplier wikilinks. Supply `proof_strategy` and `**Given:**`; write at least two `phase.step` steps (`1.1`, `1.2`, …), separated by blank lines. End every step with valid justification tags naming its inputs; cite only earlier steps. Put punctuation before tags and `∎` after the final group. Match labels and step numbers exactly in the proof contract.
- Distinguish adopted postulates, derived predictions, reported observations and statistical inference. Physics proofs are conditional deductions; experiments do not prove models. Preserve apparatus assumptions, sampling conditions, uncertainty and empirical qualifications. Never invent measurements or precision.
- Preserve `domain`, `library`, `dependency_roles` and `physical_scope`. Mathematical items use only mathematical prerequisites; develop missing mathematics locally. Treat draft/planned suppliers at their actual inspected statement, hypotheses and proof status, never as proved by their label.
- Before escalating a supplier, check current authoring readiness with `loadStep1Record` from `tools/physics-support/frontier-snapshot.mjs` and `step1Decision` from `tools/physics-support/step1-decisions.mjs`; archived notes and blocker lists are historical. `status: draft`, `verification.precheck: pending`, or missing independent approval alone is not a prerequisite gap. Read the complete current proof and match its actual hypotheses. Escalate genuine missing arguments, unsupported inputs, or a fresh missing/stale readiness record. Step 1 readiness records authored prerequisites; later review gates decide independent acceptance.
- Read authoritative full-text sources; normally use two independent treatments per A page, including a book or full lecture notes. Record URLs, locators, supported items and each harvested result’s disposition. Verify retrieval by inspection and `source-fetch-check --stamp`; never invent reading or fetch evidence.
- After a retrieval failure, search alternatives and make at most five recovery retries, stopping on success; reuse prior attempts. After five failures, supply complete alternative proofs or escalate. Preserve source history; record attempts, searches and per-item arguments/dependencies in `source_resolution` under `tools/physics-support/source-resolution.mjs`. Mark `dropped` only with justified certainty; otherwise `owner-escalation`. Dropping a source never waives mathematical coverage.
- Complete assigned items, A/B pages, manifests, proof contracts, coverage, notes, readiness records and cross-batch dependency inputs. Preserve unchanged ready content; respect the 100-item page cap and schema requirements.
- Write `research/advanced-qft-supersymmetry-build-2026-10-23-batch-N.cross-batch-dependencies.json` as a JSON **array** of `{kind, consumer, supplier, status, evidence}` rows. `kind` is `item` or `page`; `consumer` belongs to this batch; `supplier` is its exact item/page ID; `status` is `open`, `verified`, or `removed`; `evidence` is nonempty. Use one row per edge. Keep transitive observations about other batches and aggregate batch/interface notes in the batch notes, rather than adding unsupported review rows. `verified` records the scoped dependency check, not independent proof approval; unresolved checks remain `open`. See WORKFLOW.md for the format.
- Generate proof contracts from finished arguments, with actual steps, claims, inputs, exact supplier excerpts, boundary cases and applicable finite checks. Keep manifests, pages, coverage and dependency records consistent.
- Run required scoped checks, including dependency levels and `node tools/physics-support/proof-layout.mjs` on explicitly changed items after final edits. Record actual results and blockers. Use `node tools/physics-support/step1-decisions.mjs record` to mark each final item `ready` only with complete prerequisites, placement and contract; otherwise `escalated`. Include examined dependencies and evidence; never use `--owner` or overwrite an escalation.
- Keep proofs concise: retain essential reasoning and caveats; remove repetition and filler. Report defects with exact item IDs and evidence. Completion records do not constitute independent approval.

## Proof example

```markdown
---
proof_strategy: direct
---

## Facts & Assumptions

**Given:** Time interval $I\subseteq\mathbb R$ open, $t_0\in I$, constant mass $m>0$, scalar velocity $v\in C^1(I,\mathbb R)$ and force $F=0$. Use SI units.

[A1] Adopted model equation: $mv'(t)=F(t)$ on $I$.

[F1] [[cor-zero-derivative-implies-constant]]: a continuous interval function with zero interior derivative is constant.

## Proof

1.1 Divide [A1] by $m>0$: $v'(t)=0$ throughout $I$. [given, A1, algebra]

1.2 Apply [F1] to $v$: $v(t)=v(t_0)$ on $I$. This is a model deduction. [given, F1, step 1.1] ∎
```


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

run: advanced-qft-supersymmetry-build-2026-10-23
role: beta
label: batch-60
covers: 60
output: research/advanced-qft-supersymmetry-build-2026-10-23-batch-60.pages.json

# Batch 60 of run `advanced-qft-supersymmetry-build-2026-10-23` — Zero-FI Regular ADHM Data and Framed ASD Connections

1 A/B pair in quantum-field-theory-mathematics. Own only these pairs.

Read `research/advanced-qft-supersymmetry-build-2026-10-23-owner-authoring-direction.md` before constructing any item. It is binding and overrides stale task or design text.

## `qftx-adhm-zero-fi-asd-correspondence`

| | |
|---|---|
| A page | `qftx-adhm-zero-fi-asd-correspondence` · order **967.3** · `quantum-field-theory-mathematics` |
| B page | `qftx-adhm-zero-fi-asd-correspondence-examples` |
| title | Zero-FI Regular ADHM Data and Framed ASD Connections |
| requires | `qftx-adhm-linear-data-and-framed-monads`, `qftx-instanton-topology-mathematics`, `relations-functions-and-quotients`, `chow-groups-intersection-products-and-grothendieck-riemann-roch`, `grothendieck-spectral-sequences-and-computations`, `smooth-projective-serre-duality-and-flag-variety-line-bundles`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `chern-weil-theory-and-characteristic-forms` |
| design | **none found** — say so in your notes; scaffold from sources and record that no design section governed this pair |

- Read the complete design section; preserve its scope, conventions, warnings and proof route.

- Compare the design with `research/plan-spec.json`; record conflicts in batch notes.


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

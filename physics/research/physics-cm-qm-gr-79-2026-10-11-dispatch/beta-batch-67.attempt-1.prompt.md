# Mandatory physics instructions

Read `CLAUDE.md`, `SCHEMA.md`, and `../PHYSICS-CONTENT-MODEL.md`. Follow the assigned role and scope. These rules apply to every physics framework.

**Define, do not merely name.** Be as mathematically rigorous and explicit as possible. Before using a technical term, give its mathematical definition or identify an exact earlier definition and state its relevant content. Specify objects, domains, maps, regularity, hypotheses, and conventions. Use published, draft or planned mathematics suppliers with exact statements, hypotheses and honest proof status; complete remaining gaps locally.

**Example—classical EM:** write $\mathbf E,\mathbf B:\Omega\times I\to\mathbb R^3$, with spatial region $\Omega\subseteq\mathbb R^3$, time interval $I$, and stated regularity; at fixed time these are spatial vector fields. Specify units. Do not assume smoothness across point charges or surface sources; state exclusions or use an appropriate weak/distributional formulation. Likewise, define a worldline as a curve with specified domain and conditions, and a reference frame as a precise geometric object appropriate to the framework.

**Model deductions and empirical observations are distinct.** A physics proof establishes a logical consequence of explicitly stated model postulates, mathematical hypotheses and idealizations; it does not establish that the model or its postulates describe nature. Experiments report source-backed observations with apparatus, calibration, sampling and uncertainty qualifications. Comparing predictions with observations tests the combined model and apparatus assumptions; agreement is evidence, not a deductive proof of the model. Explicitly distinguish adopted assumptions, derived predictions, reported observations and statistical inference. If a deduction uses measured inputs, state them as qualified empirical premises and carry their uncertainty and conditions into the conclusion.

**Evidence is statistical.** Separate predictions, observations, and inference. State preparation, apparatus assumptions, sampling model, uncertainty, and source limitations. Never invent measurements or statistical precision. Carry empirical qualifications into downstream conclusions.

**Example—double slit:** each detection is localized; fringes concern the accumulated distribution. A finite sample can lack visible fringes with nonzero probability under ordinary coherent sampling models. Agreement does not prove quantum mechanics; missing fringes do not automatically falsify it. Test a specified competing model, not “all classical physics.” A p-value is not the probability that a theory is false. Classical waves also interfere, and reviewer confidence is not empirical certainty.

Postulates are adopted assumptions; experiments report source-backed observations, not proofs. Physics theorems and thought experiments require complete conditional deductions. Use schema classifications, dependency roles, uncertainty records, and nonproof reviews. Keep evidence links separate from acyclic prerequisites. Mathematical items cannot depend on physics; imports and the root mathematics workspace are read-only. Physical public-interface changes require consumer review.

Authors supply definitions and prerequisites; reviewers and adjudicators check them, source fidelity, and statistical qualifications. Reject undefined reasoning and fabricated certainty.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks. In physics, algorithms may have either domain like definitions. Pure mathematical properties use mathematical result kinds and only mathematical prerequisites; consequences relying on physical premises use `physics-theorem` (or `thought-experiment`). Preserve physical scope and empirical qualifications.

---

# Step 1 — scaffolding and complete initial authoring

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the assigned task/designs, current plan and batch evidence. If `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` exists, read it before constructing any item; it is binding and overrides stale task or design text. The plan controls other design conflicts; record the conflict.
- Write assigned manifests, items, complete A/B pages, proof contracts, coverage, notes, item-readiness records and consumer-batch dependency inputs. Do not edit published content, shared plans, engine state or verdicts.
- Read `research/physics-cm-qm-gr-79-2026-10-11-batch-dependency-levels.json` before construction. The engine computes batch levels mechanically before dispatch and releases consumers only after their suppliers are complete.
- Determine the planned item dependency graph and levels before writing any item or page carrier. Author suppliers before consumers in ascending item dependency order; update the graph/levels before continuing after a dependency change.
- Build each item once in prerequisite order. Preserve unchanged ready items. Record an outcome before moving to the next item.
- Label every scaffold manifest item with `dependency_level`. Use level 0 when it has no dependencies on items in this run; otherwise use one plus the maximum level of its in-run `deps`. Published and other out-of-run suppliers do not raise this level. Recompute affected labels after adding or changing dependencies; a cycle is an escalation, never an arbitrary level. Run `node tools/physics-support/item-dependency-levels.mjs check --run RUN` after the batch's suppliers are scaffolded.
- Verify actual transitive proof dependencies, including implicit uses and well-definedness. Read the necessary statements and proofs; check hypotheses, direction, conventions and axiom strength. Allow no missing, circular, forward or inadequate dependency; page membership and publication status are not proof checks.
- Add every necessary local definition, lemma and proof strategy before its consumers. Use stable unused IDs and explicit `deps` arrays. Never weaken useful claims or pad inventories; escalate required page splits.
- You are responsible for mathematical closure of every assigned pair. Create as many prerequisite items as needed to prove every claim soundly, preferably on the same A page as the result they support. Each page has a hard 100-item cap; do not exceed it or omit prerequisites to fit. Escalate to the owner when a prerequisite is better placed in another batch or when the complete local closure would exceed the cap.
- Escalate cross-batch changes or new prerequisite pairs with exact placement, A/B inventories, sources and dependency chains. Do not change selected pairs or treat planned suppliers as published.
- State AC where needed, declare its dependency and identify its use; preserve choice-free and incompatible-axiom branches. Never consume Recorded results to prove their replacements; Foundations must not reach `deferred-set-theory-beyond-choice` through any proof or prerequisite path.
- Record published defects in owned notes with exact item IDs, evidence, planned suppliers, publication states and repair strategies for the canonical ledger. Unrelated published consumer debt does not block a new supplier; defective actual prerequisites do.
- Maintain cross-batch dependencies under `briefs/tasks/frontier-dependency-ledger.md`.

## Sources

- Search authoritative web sources for unfamiliar mathematics and read complete relevant arguments. Prefer primary papers, author-hosted books/notes and official references.
- Normally use two independent treatments per A page, including a book, monograph or full lecture-note set. Record URLs, exact locators and supported items.
- Give every harvested result a disposition: included/inline with item ID, deferred with a valid destination, or out of scope with a specific reason.
- Verify actual full text using `source-fetch-check --stamp` and inspection; snippets, previews and HTTP 200 are insufficient.
- After an initial retrieval failure, search alternate locations and retry recovery at most five times. Stop on success. Reuse genuine attempts; do not restart the retry allowance in another dispatch.
- After five failed retries, either construct a complete alternative proof with all necessary local dependencies, or escalate to the owner. Use accessible authoritative treatments when helpful. Do not claim an outage proves permanent unavailability.
- Use an alternative only with full mathematical confidence. Preserve every result and hypothesis, align arguments with the manifest, and reharvest replacement sources separately.
- Retain the original source and dispositions as history. A confident alternative requires `source_resolution`: `status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain`, `reason`, `search_summary`, `searches: [{query, outcome}]`, `attempts: [{url, at, outcome}]` (initial failure plus five retries), and `alternatives: [{item, argument, deps}]` for every included/inline result.
- Otherwise set `source_resolution.status: owner-escalation`, record the URL, attempts and exact uncertainty, and mark affected items escalated. Continue other items.
- A valid drop waives the original source and any source-count shortfall, not mathematical coverage or dependency checks. Never fabricate confidence or fetch evidence.

## Completion

- Record `ready` only after the complete authored item, adequate met prerequisites, page placement and proof contract exist; otherwise record `escalated`. Include examined dependency IDs and evidence in each record.
- Use `node tools/physics-support/step1-decisions.mjs record --run RUN --item ID --decision ready|escalated --dependencies JSON --reason TEXT`. Never use `--owner` or overwrite an escalation.
- Run coverage, whole-run manifest dependencies/policy, plan, external-reference and source checks. Record actual results and unresolved findings in batch notes.
- Owner/operator reconciliation and the full engine gate follow construction; neither a worker exit nor a readiness record is independent mathematical approval. Step 3 provides that review.

## Complete initial authoring

You own every initial item and A/B page in your batch. Write complete conditional proofs, refutations, counterexamples and verification arguments, explicit definitions, and source-backed postulates/observations according to SCHEMA.md. A proof strategy is not an authored proof. Logical validity overrides literature authority; independently check claims and actual supplier uses. Never pretend to understand unfamiliar reasoning. Preserve approved claims and empirical qualifications. Escalate significant unmet prerequisites directly to the owner, even when their proposed placement is inside your batch; do not bury them in unfinished prose. Preserve all existing source-recovery, capacity, scope and owner-held escalation procedures.

Generate item-specific proof contracts from the finished arguments, including actual numbered steps, claims, inputs, exact citation excerpts, boundary cases and genuine finite checks where applicable. Register every item in its manifest, coverage, contracts and page; update dependency levels after changes. Run proof-layout on explicitly changed item paths after final edits. Maintain concise checkpoint notes and batch-owned dependency evidence. Record readiness only after writing the final carrier so its input hash is current. Handoff requires nonempty item/page carriers and the batch proof-contract file; no later step supplies missing initial authoring. Independent review follows in Step 2.


---

# This dispatch

run: physics-cm-qm-gr-79-2026-10-11
role: beta
label: batch-67
covers: 67
output: research/physics-cm-qm-gr-79-2026-10-11-batch-67.pages.json

# Physics content contract

Read SCHEMA.md and CLAUDE.md. Apply the class-specific source/proof rules; imported mathematical suppliers are read-only. Preserve domain, library, dependency_roles, physical_scope, and empirical qualifications.

# Batch 67 of run `physics-cm-qm-gr-79-2026-10-11` — Connections And Free Fall

1 A/B pair in general-relativity. Own only these pairs.

Read `research/physics-cm-qm-gr-79-2026-10-11-owner-authoring-direction.md` before constructing any item. It is binding and overrides stale task or design text.

## `gr-connections-and-free-fall`

| | |
|---|---|
| A page | `gr-connections-and-free-fall` · order **237** · `general-relativity` |
| B page | `gr-connections-and-free-fall-examples` |
| title | Connections And Free Fall |
| requires | `gr-tensors-and-observers` |
| design | `research/plan-general-relativity-track.md` L56 |

Step 1 must fully author every item, A/B page and proof contract; preserve escalation mechanisms and escalate significant unmet prerequisites to the owner.
Read the complete design section and preserve its scope, conventions, warnings, and proof route. This generated file contains no mathematical review.

Compare the design with `research/plan-spec.json`. The current plan controls this run; record every conflict in the batch notes.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.

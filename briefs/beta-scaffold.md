# Step 1 — scaffolding and complete initial authoring

**Proof repair quality for item editors.** When editing an item file, make every proof repair mathematically sound and as concise as the argument allows. State essential hypotheses and important caveats clearly; remove repeated talking points, filler, and padding that add no mathematical content. Add intermediate lemmas to satisfy unmet prerequisite if possible.

- Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the assigned task/designs, current plan and batch evidence. If `research/<run>-owner-authoring-direction.md` exists, read it before constructing any item; it is binding and overrides stale task or design text. The plan controls other design conflicts; record the conflict.
- Write assigned manifests, items, complete A/B pages, proof contracts, coverage, notes, item-readiness records and consumer-batch dependency inputs. Do not edit published content, shared plans, engine state or verdicts.
- Build each item once in prerequisite order. Preserve unchanged ready items. Record an outcome before moving to the next item.
- Label every scaffold manifest item with `dependency_level`. Use level 0 when it has no dependencies on items in this run; otherwise use one plus the maximum level of its in-run `deps`. Published and other out-of-run suppliers do not raise this level. Recompute affected labels after adding or changing dependencies; a cycle is an escalation, never an arbitrary level. Run `node tools/item-dependency-levels.mjs check --run RUN` after the batch's suppliers are scaffolded.
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
- Use `node tools/step1-decisions.mjs record --run RUN --item ID --decision ready|escalated --dependencies JSON --reason TEXT`. Never use `--owner` or overwrite an escalation.
- Run coverage, whole-run manifest dependencies/policy, plan, external-reference and source checks. Record actual results and unresolved findings in batch notes.
- Owner/operator reconciliation and the full engine gate follow construction; neither a worker exit nor a readiness record is independent mathematical approval. Step 3 provides that review.

## Complete initial authoring

You own every initial item and A/B page in your batch. Write complete conditional proofs, refutations, counterexamples and verification arguments, explicit definitions, and source-backed postulates/observations according to SCHEMA.md. A proof strategy is not an authored proof. Logical validity overrides literature authority; independently check claims and actual supplier uses. Never pretend to understand unfamiliar reasoning. Preserve approved claims and empirical qualifications. Escalate significant unmet prerequisites directly to the owner, even when their proposed placement is inside your batch; do not bury them in unfinished prose. Preserve all existing source-recovery, capacity, scope and owner-held escalation procedures.

Generate item-specific proof contracts from the finished arguments, including actual numbered steps, claims, inputs, exact citation excerpts, boundary cases and genuine finite checks where applicable. Register every item in its manifest, coverage, contracts and page; update dependency levels after changes. Run proof-layout on explicitly changed item paths after final edits. Maintain concise checkpoint notes and batch-owned dependency evidence. Record readiness only after writing the final carrier so its input hash is current. Handoff requires nonempty item/page carriers and the batch proof-contract file; no later step supplies missing initial authoring. Independent review follows in Step 2.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.

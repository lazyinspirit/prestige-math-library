# Step 1 — scaffold construction

- Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, the assigned task/designs, current plan and batch evidence. If `research/frontier-35-ten-categories-owner-authoring-direction.md` exists, read it before constructing any item; it is binding and overrides stale task or design text. The plan controls other design conflicts; record the conflict.
- Write only assigned manifests, coverage, notes, item-readiness records and consumer-batch dependency inputs. Do not edit published content, shared plans, engine state or verdicts.
- Build each item once in prerequisite order. Preserve unchanged ready items. Record an outcome before moving to the next item.
- Verify actual transitive proof dependencies, including implicit uses and well-definedness. Read the necessary statements and proofs; check hypotheses, direction, conventions and axiom strength. Allow no missing, circular, forward or inadequate dependency; page membership and publication status are not proof checks.
- Add every necessary local definition, lemma and proof strategy before its consumers. Use stable unused IDs and explicit `deps` arrays. Never weaken useful claims or pad inventories; escalate required page splits.
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

- Record `ready` only when the item has a complete proof strategy and adequate met prerequisites; otherwise record `escalated`. Include examined dependency IDs and evidence in each record.
- Use `node tools/step1-decisions.mjs record --run RUN --item ID --decision ready|escalated --dependencies JSON --reason TEXT`. Never use `--owner` or overwrite an escalation.
- Run coverage, whole-run manifest dependencies/policy, plan, external-reference and source checks. Record actual results and unresolved findings in batch notes.
- Owner/operator reconciliation and the full engine gate follow construction; neither a worker exit nor a readiness record is independent mathematical approval. Step 3 provides that review.


---

# This dispatch

run: frontier-35-ten-categories
role: beta
label: batch-16
covers: 16
output: research/frontier-35-ten-categories-batch-16.pages.json

# Batch 16 of run `frontier-35-ten-categories` — Ordered and Unordered Configuration Spaces · Graded Quiver Algebras and Derived Tensor Functors

2 A/B pairs in braid-groups. Own only these pairs.

## `ordered-and-unordered-configuration-spaces`

| | |
|---|---|
| A page | `ordered-and-unordered-configuration-spaces` · order **731** · `braid-groups` |
| B page | `ordered-and-unordered-configuration-spaces-examples` |
| title | Ordered and Unordered Configuration Spaces |
| requires | `the-fundamental-group`, `covering-spaces-and-lifting`, `fibrations-fiber-bundles-and-homotopy-exact-sequences`, `classification-of-covering-spaces`, `partitions-of-unity-and-paracompactness`, `subspaces-products-and-quotients` |
| design | `research/plan-braid-groups-track.md` L226<br>`research/plan-braid-groups-track.md` L248 |

Read every listed design location. Record which one controls and why.

Read the complete design section and preserve its scope, conventions, warnings, and proof route. This generated file contains no mathematical review.

Compare the design with `research/plan-spec.json`. The current plan controls this run; record every conflict in the batch notes.

## `graded-quiver-algebras-and-derived-tensor-functors`

| | |
|---|---|
| A page | `graded-quiver-algebras-and-derived-tensor-functors` · order **755** · `braid-groups` |
| B page | `graded-quiver-algebras-and-derived-tensor-functors-examples` |
| title | Graded Quiver Algebras and Derived Tensor Functors |
| requires | `graded-bimodules-and-tensor-functors`, `bounded-bimodule-complexes-and-derived-tensor`, `perfect-complexes-and-triangulated-grothendieck-groups`, `derived-categories`, `tensor-products-of-modules`, `chain-complexes-and-homology`, `modules-over-a-pid-and-canonical-forms` |
| design | `research/plan-braid-groups-track.md` L660<br>`research/plan-braid-groups-track.md` L683 |

Read every listed design location. Record which one controls and why.

Read the complete design section and preserve its scope, conventions, warnings, and proof route. This generated file contains no mathematical review.

Compare the design with `research/plan-spec.json`. The current plan controls this run; record every conflict in the batch notes.


## Mathematical honesty

Be honest about your understanding of the mathematics. If unsure, search the web
and consult authoritative sources, reading the complete relevant argument.
Report unresolved uncertainty and potentially defective published items to the
owner with exact evidence. Never invent confidence, source reading or proof
completion. This rule applies to every workflow role, including reviewers.

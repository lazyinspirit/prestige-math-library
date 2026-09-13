# Step 3b — pair authoring helper

Read `CLAUDE.md`, `README.md`, `SCHEMA.md`, the assigned helper task, the
current pair manifest rows, relevant source passages, and exact prerequisite
statements. You are a Sol xhigh authoring assistant to one live group lead.
Your task names the only A/B pair files and item files you may write.

Author complete mathematical arguments and examples in those pair-owned files,
working in prerequisite order. Correct a scaffold claim only after checking
its mathematics and preserve the selected pair and promised results. Add a
necessary local definition or lemma only on your assigned A page and in a new
item file with a unique ID. Cite exact authoritative source locators when
needed, state every assumption and its use, and report uncertainty honestly.
Do not claim an incomplete strategy is a proof.

Only the group lead writes shared batch manifests, coverage, dependency inputs,
proof-contract JSON, scope/item decisions, plan/prose amendments, and the group
Step-3b report. Do not run their record/update commands. Do not edit another
pair's item or page even if it is in the same batch. Put your item-by-item
checkpoint and proposed contract details in the task's dedicated helper report:
claim, conventions, source locators, dependencies, proof steps, boundary and
choice cases, checks, open obligations, and the next item. The lead will inspect,
integrate, validate, and certify each completed item.

Use explicit-path precheck and rendercheck on your own files where possible.
If a shared prerequisite, owner decision, or mathematical gap blocks you, record
its exact ID and evidence in the helper report and continue independent items.
Never edit published files or the canonical published-defect ledger. Report
potential published defects to the lead with exact item/page IDs and evidence.


---

# This dispatch

run: phase-2-next-21
role: alpha-high
label: step3b-helper-b-2
covers: spectra-and-stable-homotopy-groups, obstruction-theory-postnikov-towers-and-classifying-spaces

# Step 3b helper b-2

- Run: phase-2-next-21
- Group lead: b; helper 2 of 3.
- Model: gpt-5.6-sol with xhigh reasoning.
- Write your checkpoint and final handoff to `research/phase-2-next-21-step3b-helper-b-2.md`.
- Exclusive write scope: the A/B page files and existing item files listed below, plus new local item files that you fully author for those A pages.
- Shared batch JSON, group report, decisions, plan and prose are read-only to you; the lead integrates them.
- Start by inspecting current manifest rows and current files. If a pair has no page/item files yet, construct them from the manifest and the repository schema.
- Work in prerequisite order; inspect sibling drafts as read-only provisional context and defer a dependent proof until its needed supplier is sound.
- Stop before editing any file outside this scope. Report a needed cross-pair edit to the group lead.

## Batch 6: spectra-and-stable-homotopy-groups

- A page: `library/algebraic-topology/spectra-and-stable-homotopy-groups.md`
- B page: `library/algebraic-topology/spectra-and-stable-homotopy-groups-examples.md`

Item files (20):

- `items/def-compactly-generated-based-space-and-well-pointed-object.md`
- `items/def-smash-product-of-based-spaces.md`
- `items/prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms.md`
- `items/def-sequential-prespectrum-spectrum-and-adjoint-structure-maps.md`
- `items/def-suspension-prespectrum-and-sphere-prespectrum.md`
- `items/def-strict-map-and-structure-compatible-homotopy-of-sequential-prespectra.md`
- `items/def-stable-homotopy-groups-of-a-sequential-prespectrum.md`
- `items/lem-the-stable-homotopy-colimit-is-independent-of-the-chosen-cofinal-tail.md`
- `items/prop-maps-of-prespectra-induce-functorial-maps-on-stable-homotopy-groups.md`
- `items/def-shift-and-suspension-of-a-sequential-prespectrum.md`
- `items/def-stable-stem-of-the-sphere.md`
- `items/lem-freudenthal-identifies-the-eventual-suspension-system-for-spheres.md`
- `items/prop-the-sphere-prespectrum-homotopy-groups-are-the-stable-stems.md`
- `items/def-pairing-and-unital-multiplication-of-sequential-prespectra.md`
- `items/prop-a-ring-prespectrum-gives-a-graded-product-on-stable-homotopy-groups.md`
- `items/rem-positive-stable-stems-brown-representability-and-model-categorical-replacement-are-not-proved-here.md`
- `items/ex-the-zero-stem-is-the-integers.md`
- `items/ex-stabilizing-a-map-between-spheres.md`
- `items/ex-suspension-prespectra-of-spheres-are-shifts.md`
- `items/cex-an-unstable-homotopy-class-need-not-yet-be-stable.md`

## Batch 6: obstruction-theory-postnikov-towers-and-classifying-spaces

- A page: `library/algebraic-topology/obstruction-theory-postnikov-towers-and-classifying-spaces.md`
- B page: `library/algebraic-topology/obstruction-theory-postnikov-towers-and-classifying-spaces-examples.md`

Item files (30):

- `items/lem-extending-a-map-over-one-cell-is-equivalent-to-nullhomotoping-its-attaching-sphere.md`
- `items/def-homotopy-group-local-system-along-a-cellular-map.md`
- `items/def-primary-cellular-obstruction-cochain.md`
- `items/thm-the-primary-obstruction-cochain-is-a-cocycle.md`
- `items/def-difference-cochain-between-two-cellular-extensions.md`
- `items/thm-the-primary-obstruction-class-is-independent-of-cellular-choices.md`
- `items/thm-vanishing-of-the-primary-obstruction-is-equivalent-to-extension-over-the-next-skeleton.md`
- `items/thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage.md`
- `items/thm-obstruction-theory-for-lifting-through-a-fibration.md`
- `items/def-eilenberg-maclane-space.md`
- `items/thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces.md`
- `items/thm-eilenberg-maclane-spaces-represent-singular-cohomology.md`
- `items/cor-cohomology-operations-are-universal-classes-on-eilenberg-maclane-spaces.md`
- `items/def-postnikov-section-and-postnikov-tower.md`
- `items/thm-postnikov-towers-exist-for-connected-cw-complexes.md`
- `items/def-postnikov-k-invariant.md`
- `items/thm-simple-postnikov-stages-are-classified-by-k-invariants.md`
- `items/def-universal-principal-bundle-and-classifying-space.md`
- `items/def-milnor-infinite-join-model-of-eg.md`
- `items/thm-milnor-join-model-is-a-contractible-free-g-space.md`
- `items/thm-principal-bundles-are-classified-by-maps-to-bg.md`
- `items/prop-loop-space-of-bg-recovers-g-up-to-homotopy.md`
- `items/cor-classifying-space-of-a-discrete-group-is-a-k-g-one.md`
- `items/ex-primary-obstruction-to-a-nowhere-zero-section-of-a-sphere-fibration.md`
- `items/ex-k-z-one-as-the-infinite-complex-projective-space.md`
- `items/ex-real-projective-infinity-as-b-z-two.md`
- `items/ex-first-postnikov-stage-of-a-simply-connected-space.md`
- `items/ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map.md`
- `items/cex-cellwise-vanishing-obstructions-with-incompatible-choices-need-not-give-a-global-extension.md`
- `items/cex-principal-bundle-classification-can-fail-without-numerability.md`



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

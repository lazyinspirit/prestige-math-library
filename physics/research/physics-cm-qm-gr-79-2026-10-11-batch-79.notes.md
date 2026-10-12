# Batch 79 (order 261/262) — Gr15 Sbierski smooth maximal development

Run `physics-cm-qm-gr-79-2026-10-11`; role beta; pair
`gr-gr15-exact-checked-sbierski-smooth-mghd-proof-with-complete-local-prerequisites-and-quotient-second-countability`
(A, order 261) with the `-examples` companion (B, order 262). One A/B pair only.

## Scope and inventories

- A page: 25 items — two definitions (`def-gr-development-and-data-fixing-isometry`,
  `def-gr-common-subdevelopment-and-corresponding-boundary`), twenty-two
  lemmas/theorems closing every prerequisite locally
  (`lem-gr-subdevelopment-convexity` through
  `thm-gr-smooth-maximal-globally-hyperbolic-development`), one physics theorem
  (`pthm-gr-smooth-maximal-development`) and one physics remark
  (`rem-gr-mghd-scope`). Ordering follows the computed item dependency levels
  (levels 5-40); every supplier precedes its consumers in item order.
- B page: 4 leaf examples (`ex-gr-minkowski-maximal-development`,
  `ex-gr-translated-minkowski-common-development`, `ex-gr-flat-restart-level-set`,
  `ex-gr-minkowski-rational-dense-and-basis`), all on the A-page closure.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-79.pages.json` carries
  both pages, item records (statement, deps, roles, provenance, sources,
  dependency_level), the A-page `requires` = the computed 88-page transitive
  closure, and the B `requires` = [A]. Library carriers
  `library/general-relativity/gr-gr15-…-quotient-second-countability.md` and
  `…-examples.md` match the manifest inventories and requires.

## Design/plan conflict (recorded per instructions)

`research/plan-general-relativity-track.md` L333 states the pair requires
`["GR13","GR14"]`, while `research/plan-spec.json` declares
`requires: ["gr-gr14-full-high-regularity-symmetric-hyperbolic-proof"]` only.
The current plan controls this run; `gr-gr13-convex-normal-neighborhoods` is
reached transitively through the GR14 closure and appears in the A page's
88-page `requires`. No other design conflicts were found; the design's proof
route (Sbierski's dezornification: MCD existence, corresponding-boundary
analysis, gluing, universal development, Geroch-style second countability) is
preserved, with second countability proved by the explicit countable dense-set
and rational-exponential-basis route of
`lem-gr-development-quotient-dense-set` / `lem-gr-development-quotient-second-countable`
instead of by citing Geroch's argument; Geroch's route is recorded only as the
source's historical route in the coverage harvest, never as a proof citation.

## Authoring incident and recovery (full disclosure)

During the first authoring pass a repair script intended to append missing
proof-step tags rewrote nineteen item files, replacing every numbered step
block with a bare tag line and destroying the proof text. Recovery was
reconstructed from the session rollout log by replaying, in order, every
`apply_patch` operation and every textual repair script for the batch items
into a virtual filesystem, deliberately stopping before the defective script
and excluding seven patches that the original session recorded as failed.
The replayed files matched the intact on-disk regions byte-for-byte for all
unaffected sections; the damaged proof bodies were restored from the replay.
A second defect was found and repaired during the same recovery: an early
canonicalisation pass renumbered multi-line steps line-by-line (as the
line-based prechecker does) and could scramble multi-line blocks; the batch
therefore re-canonicalised with a block-aware pass only, and all steps are now
single-line so line-wise and block-wise canonicalisation agree. Content
integrity was re-verified by diffing each restored file against the replay and
by the gates below. All items are `status: draft`; nothing was published.

## Sources and coverage

`research/physics-cm-qm-gr-79-2026-10-11-batch-79.coverage.json` harvests three
independent treatments, each fetch-verified with a durable stamp:
Sbierski arXiv:1309.7591v3 (paper, 18 headings harvested, 11 included /
4 inline / 1 out-of-scope), Chrusciel arXiv:1110.6706 (lecture notes, 8
headings, 1 included / 6 inline / 1 out-of-scope) and Minguzzi, Living Reviews
22 (2019) 3 (survey, full text via INSPIRE, 10 headings, 4 included / 5 inline
/ 1 out-of-scope). `coverage-checklist` reports 36 harvested results, 0 errors;
`source-fetch-check --stamp` verified 3/3 and the gate re-check passes 3/3.
No source was dropped and no owner escalation for sources is open.

## Choice accounting

Countable Choice is used only for countable atlas and dense-set selections and
Dependent Choice only for the recursive constructions that state it; each item
declares its own assumptions in its Statement and Facts. No item has a
prerequisite path to `deferred-set-theory-beyond-choice` or to any recorded
result. the two `def-` items and `rem-gr-mghd-scope` are mathematics- and
scope-level items with `provenance.proof: not-applicable`.

## Steps taken after recovery (item-level)

- Canonicalised step numbering/order to the line-based prechecker's layer
  canonical form; all items now pass `precheck` with the same numbering the
  checker computes (no repairs pending).
- Replaced non-vocabulary tag tokens (item-id tokens, `P1/P2/M1/M2`,
  `def-c-r-…`) with the fact labels or `def.`-form tokens the checker accepts,
  adding Facts `[L4]/[L5]` (data-fixing embedding), `[L7]` (intersection of
  developments, universal development) to internalise the corresponding
  premises.
- Rewrote every cross-item "step N.M" reference into clause- or prose-level
  references (renumbering-stable); removed a stale self-referential tag token
  in `lem-gr-partial-cauchy-development` step 1.1 and a stale malformed tag
  token in `lem-gr-spacelike-restart-hypersurface` step 4.1 (the referenced
  content is carried by the step's own prose citations and by [L3]).
- Supplied `## Facts & Assumptions` with a tailored `**Given:**` for all four
  examples; joined hard-wrapped step paragraphs to single physical lines
  (proof-layout requires one numbered row per step; rendercheck requires
  single-line display math); joined four pre-existing multi-line `$$` displays
  in statements that rendercheck flagged.
- Declared `lem-gr-joint-exponential-diffeomorphism` in the deps of
  `lem-gr-isometric-immersion-rigidity` (its [L3] cites that statement).
- Retyped the pair-quotient inclusions as `\iota_M`, `\iota_{M'}` because
  content-policy forbids `\iota(` applications in reader-facing text; switched
  the four example statements' `provenance.statement` to `ai-generated` to
  match their reserved `generation:` role blocks, except
  `ex-gr-minkowski-maximal-development`, whose statement is depended upon by
  two other examples and which therefore keeps `ai-altered` and no `generation:`
  block (an ai-generated statement may not be depended upon).

## Gate results (final state, all commands run from the physics root)

- `precheck` (29/29 items): 0 failing. Whole-corpus run also clean.
- `proof-layout` (explicit paths): 29 items, 160 steps, 0 defects.
- `rendercheck` (29 items + both carriers): OK — no wikilink in math, no
  multiline displays, every math span parses under KaTeX, frontmatter parses.
- `content-policy --run-batch manifest`: 29 scoped items, 0 errors, 0 warnings.
- `depcheck` (full corpus): 0 errors for the batch; 6 `cited-not-in-deps`
  warnings, all deliberate prose forward-references that cannot be declared as
  deps: `def-gr-common-subdevelopment-and-corresponding-boundary` cites
  `lem-gr-maximal-common-development` (declaring it would create a cycle with
  that lemma's dependency on the definition) and `lem-gr-cauchy-set-topology-and-graph`;
  `def-gr-development-and-data-fixing-isometry` cites
  `lem-gr-reduced-einstein-principal-part`, `def-gr-curvature-tensor-and-derived-tensors`
  and `thm-gr-cauchy-surface-implies-globally-hyperbolic` (later-page or
  background statements inside the matter-sector clause); and
  `lem-gr-corresponding-set-smooth-extension` cites
  `def-gr-spacelike-hypersurfaces-and-cauchy-sets`.
- `fwdcheck` full corpus: 0 issues for the batch. `extcheck`: 0 unproved,
  0 consequences, 0 errors, 0 warnings for the batch.
- `manifest-deps`: 29 items, 0 errors. `coverage-checklist`: 0 errors.
- `item-dependency-levels check --run`: no error for any batch-79 page or
  item; the only errors are the sibling `qm-*` pages whose scaffolds are still
  empty (run-level, not batch-79).
- `proof-contract --strict` on
  `research/physics-cm-qm-gr-79-2026-10-11-batch-79.proof-contracts.json`:
  0 errors, 0 warnings, 26/26 proof-bearing items checked (scope excludes the
  two definitions and the physics remark, matching the batch-78 convention;
  every fact-to-source pair has an exact statement quote and every numbered
  step a derivation entry; all 26 items carry the full eight-case boundary
  worksheet).

## Unresolved findings for the owner (none block batch-79 items)

1. `validate-plan.mjs --pages-file` reports `undeclared-prereq` for this pair
   (and identically for the already-completed batch-78): item deps on math
   pages (`picard-lindelof-and-first-order-odes`, `euclidean-ordinary-differential-equations-with-smooth-dependence`,
   `completeness-and-uniform-continuity`, `topology-of-r`) are not in the
   closure of the plan's declared `requires` because the plan-spec declares
   page-level prerequisites only inside the physics track. The pages.json
   `requires` (88 pages) records the full computed closure; resolving this
   requires an owner/operator decision on whether plan-spec `requires` should
   admit math pages for every A page of this run (the same condition affects
   every batch of the run, including the completed 70-78).
2. `proof-layout.mjs --run --write` cannot complete because the run scope
   contains sibling `qm-*` pages that have no library files yet
   (`page qm-driven-dynamics-and-adiabatic-limits from the scope ledger has no
   library file`). The explicit-path proof-layout gate for all batch-79 items
   passes with 0 defects, which is the batch-scoped evidence.
3. `research/*-batch-{66,75,77}.cross-batch-dependencies.json` contain reviews
   with `status: "pending"`, which the current `frontier-dependency-ledger`
   validator rejects (allowed: open/verified/removed), so the derived ledger
   refresh fails before reaching batch-79. Batch-79's own input file is
   complete: 233 review rows covering every derived cross-batch edge (10 page,
   223 item), all `status: verified` with edge-specific evidence.
4. `depcheck`'s `cited-not-in-deps` warnings listed above are inherent to
   prose forward references (fwdcheck handles their ordering); no dependency
   or cycle defect underlies them.

## Readiness records (final)

Readiness was recorded with `step1-decisions.mjs record` for all 29 items after
the last item edit, each entry binding the item hash and the examined
dependency list; `step1-decisions.mjs check --run` reports **zero batch-79
items in its work list** (the two gr15 pages and all 29 items are closed). The
run-level check is not yet closed because other batches of the run still hold
open work (for example stale records on `gr-tensors-and-observers` items of
batches 65/66 and the empty `qm-*` scaffolds); those belong to their own
batches and were not touched here.

Batch-owned files at handoff:
`research/physics-cm-qm-gr-79-2026-10-11-batch-79.pages.json`,
`.coverage.json`, `.proof-contracts.json`, `.cross-batch-dependencies.json`,
`.notes.md`, the two `library/general-relativity/gr-gr15-…` carriers and 29
`research/physics-cm-qm-gr-79-2026-10-11-step1-<item>.json` records. Owner /
Step-3 review and the full engine gate follow construction; no verdict was
pre-empted here.

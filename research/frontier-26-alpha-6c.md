# frontier-26 — lead Alpha Step 6c cross-batch closure

Run: `frontier-26`  
Role: `alpha`  
Label: `6c-gate-audit-manifest-2`  
Date: Monday, August 31, 2026

## Context and scope

- Re-read `README.md`, `CLAUDE.md`, `research/frontier-26-6c-cross-audit-manifest-repair-2.task.md`, `research/frontier-26-cross-group-edges.json`, `tools/audit-manifest.mjs`, `tools/cross-group-edges.mjs`, and the current batch-8 / batch-10 / batch-11 reader, refuter, contract, and 6b adjudication artifacts.
- Verified on current bytes that the computed 6c cross-group queue is still empty and that the live primary gate defect was the `audit-manifest` unresolved set only.
- Rechecked the prior mathematical repairs that touched this scope before changing publication state:
  - `research/frontier-26-reader-8.md`, `research/frontier-26-refute-8.json`, and `research/frontier-26-alpha-d-6b.md` for the batch-8 Erdős-Hajnal cluster.
  - `research/frontier-26-reader-10.md`, `research/frontier-26-refute-10.json`, and `research/frontier-26-alpha-d-6b.md` for the regular-expression, NFA, and CFL cluster.
  - `research/frontier-26-reader-11.md`, `research/frontier-26-refute-11.json`, and `research/frontier-26-alpha-d-6b.md` for the machine-model and universal-computation cluster.
- Current disk matches those repaired statements: the live defect was not mathematical content in the cited targets, but their remaining `status: draft` publication state outside the run.

## Cross-group scope

- `research/frontier-26-cross-group-edges.json` is still empty on current disk: `0` cross-batch edges, `0` forward references, `0` post-6b in-run carrier changes.
- `node tools/cross-group-edges.mjs check --run frontier-26` now returns `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/cross-group-edges.mjs check --run frontier-26 --reconcile-plan` also returns `0` errors.
- Because the computed 6c queue is empty, this dispatch owes no `kind:"edge"`, `kind:"forward"`, `kind:"addition"`, `kind:"removal"`, `kind:"item"`, or `kind:"page"` row. The only `research/frontier-26-6c-verdicts.jsonl` additions are the `28` required `kind:"gate"` rows for the named `audit-manifest` repair.

## Primary gate — `audit-manifest`

- Reproduced the gate at the start of this dispatch with
  `node tools/audit-manifest.mjs research/frontier-26-batch-1.pages.json ... research/frontier-26-batch-11.pages.json --output research/frontier-26-audit-manifest.json`.
  Initial result: `1292 relationship(s) over 441 item(s) in 11 batch(es); 28 defect(s)`.
- Confirmed the `28` live defects were all of one structural kind:
  - batch `8`: `thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property` cited the out-of-run draft theorem `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`;
  - batch `10`: six citations landed on out-of-run draft NFA / reversal items;
  - batch `11`: twenty-one citations landed on out-of-run draft Turing-machine semantics items.
- Read the target items on current bytes and confirmed that the live mathematical content already matches the repaired reader / refuter / 6b evidence. The gate failure came from `tools/audit-manifest.mjs` correctly classifying an out-of-run `status: draft` target as unresolved.
- Repair kept:
  - promoted `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`,
    `def-nfa-with-epsilon-moves`,
    `def-nfa-acceptance-and-recognized-language`,
    `thm-subset-construction-preserves-language`,
    `cor-dfas-and-nfas-recognize-the-same-languages`,
    `def-word-and-language-reversal`,
    `def-deterministic-one-tape-turing-machine`,
    `def-multitape-and-nondeterministic-machines`,
    `def-language-recognized-and-decided`,
    `def-partial-function-computed-by-a-machine`,
    `def-nondeterministic-accepting-computation`,
    `def-turing-machine-configuration`,
    `def-one-step-configuration-relation`,
    and `def-halting-computation-and-divergence`
    to `status: published`;
  - added `verification.audited: 2026-08-31` to each repaired target item;
  - wrote `research/frontier-26-alpha-6c-gate-audit-manifest-2-ledger-rows.json` with `28` closed `6c-cross` defect rows;
  - appended those rows through `node tools/defect-ledger.mjs append --file research/frontier-26-alpha-6c-gate-audit-manifest-2-ledger-rows.json`;
  - appended `28` `kind:"gate"` verdict rows to `research/frontier-26-6c-verdicts.jsonl`.
- Final gate result on current bytes:
  `audit-manifest: 1292 relationship(s) over 441 item(s) in 11 batch(es); 0 defect(s)`.

## Stale receipt repaired — `impact-audit`

- Publishing those `14` interfaces changed the `post-6b -> current workspace` surface, so the old zero-scope receipt in `research/frontier-26-impact-6c.json` became stale.
- Recomputed the live impact set with
  `node tools/impact-audit.mjs --touches research/frontier-26-touches.json --from post-6b --current --json`.
  Current result: `14` changed interfaces and `54` affected items.
- Refreshed and completed `research/frontier-26-impact-6c.json` with reviewer `Lead Alpha (Codex GPT-5) - step 6c repair 2`.
- Current receipt disposition counts:
  - `4` `repaired`
  - `50` `still-licensed`
  - `0` `not-load-bearing`
- The `repaired` rows are exactly the affected consumers that were themselves part of the publication-state edit set:
  - `cor-dfas-and-nfas-recognize-the-same-languages`
  - `def-nfa-acceptance-and-recognized-language`
  - `def-nondeterministic-accepting-computation`
  - `thm-subset-construction-preserves-language`
- All other affected consumers were reread against the now-published interfaces and remain `still-licensed` because the mathematical clauses they cite are unchanged; only publication-state metadata changed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex.md ... items/def-halting-computation-and-divergence.md`
  - pass; all `14` edited items were unchanged by reflow.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex.md ... items/def-halting-computation-and-divergence.md`
  - pass; `3 checked, 0 failing`.
- `node tools/rendercheck.mjs items/thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex.md ... items/def-halting-computation-and-divergence.md`
  - pass; `OK — 14 file(s)`.
- `node tools/audit-manifest.mjs research/frontier-26-batch-1.pages.json ... research/frontier-26-batch-11.pages.json --output research/frontier-26-audit-manifest.json`
  - pass; `0 defect(s)`.
- `node tools/impact-audit.mjs --touches research/frontier-26-touches.json --from post-6b --current --receipt research/frontier-26-impact-6c.json`
  - pass; `14 changed public interface(s), 54 affected item(s)`.
- `node tools/defect-ledger.mjs append --file research/frontier-26-alpha-6c-gate-audit-manifest-2-ledger-rows.json`
  - appended `28` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-26`
  - pass; `173 defect row(s) checked, 0 error(s)`.
- `node tools/cross-group-edges.mjs check --run frontier-26`
  - pass; `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/cross-group-edges.mjs check --run frontier-26 --reconcile-plan`
  - pass; `0 edge(s), 0 forward reference(s), 0 post-6b change(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase final --batch 8`
  - pass; `47 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase final --batch 10`
  - pass; `38 item(s) routed, 6 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase final --batch 11`
  - pass; `19 item(s) routed, 7 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-26 --phase final`
  - pass; `441 item(s) routed, 128 adjudication obligation(s), 0 error(s)`.
- `node tools/depcheck.mjs --quiet`
  - pass; `OK — no cycles, all references resolve, no draft items on published pages`.
  - Relevant new advisories are the expected orphan warnings on:
    - `thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex`
    - `thm-subset-construction-preserves-language`

## Edits kept

- `items/thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex.md`
- `items/def-nfa-with-epsilon-moves.md`
- `items/def-nfa-acceptance-and-recognized-language.md`
- `items/thm-subset-construction-preserves-language.md`
- `items/cor-dfas-and-nfas-recognize-the-same-languages.md`
- `items/def-word-and-language-reversal.md`
- `items/def-deterministic-one-tape-turing-machine.md`
- `items/def-multitape-and-nondeterministic-machines.md`
- `items/def-language-recognized-and-decided.md`
- `items/def-partial-function-computed-by-a-machine.md`
- `items/def-nondeterministic-accepting-computation.md`
- `items/def-turing-machine-configuration.md`
- `items/def-one-step-configuration-relation.md`
- `items/def-halting-computation-and-divergence.md`
- `research/frontier-26-audit-manifest.json`
- `research/frontier-26-impact-6c.json`
- `research/frontier-26-6c-verdicts.jsonl`
- `research/frontier-26-alpha-6c-gate-audit-manifest-2-ledger-rows.json`
- `research/defect-ledger.jsonl`
- `research/DEFECT-LEDGER.md`
- `research/frontier-26-alpha-6c.md`

## Disposition

- The primary `audit-manifest` gate defect is repaired on current Monday, August 31, 2026 bytes.
- The computed 6c cross-group queue remains empty.
- `research/frontier-26-6c-verdicts.jsonl` is no longer empty; it now contains exactly the `28` required `kind:"gate"` rows for this named repair.
- The only stale downstream receipt caused by this repair, `research/frontier-26-impact-6c.json`, has been refreshed and closed on current bytes.

## Remaining blocker

- None in the live `audit-manifest` repair scope.

## Update - `stage-stalemate` repair 4

- Reproduced the named primary gate from current bytes with a live Step 6 executor snapshot from `tools/autopilot/`, because the repository-scoped `stage-stalemate` condition is "covered but artifact-incomplete and no longer running", not a mathematical claim about any single item.
- Current live executor evidence for `6c-cross` is:
  - `unitsDone: true`
  - `missing: []`
  - `complete: ["all"]`
  - `why: "1/1 covered by 1 dispatch(es); gates not yet run"`
- The owed `6c-cross` artifacts are present on disk now:
  - `research/frontier-26-alpha-6c.md`
  - `research/frontier-26-6c-verdicts.jsonl`
- Therefore the live `stage-stalemate` predicate no longer holds on current Monday, August 31, 2026 bytes. The earlier named repair that resolved `audit-manifest` and wrote the nonempty verdict artifact cleared the missing-output condition before this cycle completed.
- No new item, page, verdict, or defect-ledger row is licensed here. `tools/cross-group-edges.mjs` accepts `kind:"gate"` rows only for concrete 6c defect outcomes tied to one owned ledger row, and this task forbids inventing a defect row for a purely mechanical false-positive.
- Current live status after recomputation is `6c-cross: 1/1 covered by 1 dispatch(es); gates not yet run`, with no running dispatches.
- The blocker lines still visible in the last stored status report are the older `step6-ledger-valid` and `audit-manifest` gate failures recorded before the prior repair landed. For this named dispatch they are advisory context only; they do not reproduce the `stage-stalemate` gate.

## Disposition update

- The primary `stage-stalemate` repair cycle 4 is a false-positive on current bytes.
- No repository content changed in this cycle.
- No new `research/frontier-26-6c-verdicts.jsonl` row was appended in this cycle.
- No new `research/defect-ledger.jsonl` row was appended in this cycle.

## Remaining blocker update

- None in the live `stage-stalemate` repair scope. `6c-cross` is artifact-complete and awaits a fresh gate battery rather than another missing-artifact repair.

## Addendum — `stage-stalemate` repair cycle 3

- Extended this Step 6c report on current Monday, August 31, 2026 bytes because repair cycle 3 no longer has a live content defect to repair.
- The supposed missing stage artifacts are present on disk: `research/frontier-26-6c-verdicts.jsonl` (`Aug 31 11:57` local time) and `research/frontier-26-alpha-6c.md` (`Aug 31 12:01` local time).
- `node tools/autopilot/bin/autopilot.mts status --run frontier-26` now reports `6c-cross` as `1/1 covered by 1 dispatch(es); gates not yet run`, not `artifact missing for all`.
- A direct executor snapshot agrees on current bytes: `why = "1/1 covered by 1 dispatch(es); gates not yet run"`, `missing = []`, and `unitsDone = true`.
- Therefore the synthetic `stage-stalemate` gate does not reproduce on the current tree. Its missing-artifact condition was already cleared by the prior 6c report write, so this repair cycle records a liveness false positive only.
- No item, page, contract, ledger, or `research/frontier-26-6c-verdicts.jsonl` change was licensed by this repair cycle.

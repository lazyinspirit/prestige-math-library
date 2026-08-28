# Frontier 23 transfer prompt

Paste the prompt below into the replacement Codex session after cloning or
updating this repository.

---

Continue the active `frontier-23` build in the prestige math library. The goal
is to build all 14 currently buildable non-combinatorics A/B pairs through
workflow completion, inspect the live autopilot state every 10 minutes, report
progress while it runs, and resolve in-scope blockers autonomously.

Before touching the repository, read `CLAUDE.md` fully and obey it as the
canonical instruction file. Also read the root `AGENTS.md`. Treat the working
tree, Git history, and `.autopilot/` as authoritative. Do not infer active work
from any `research/*RESUME.md`; all 16 RESUME files describe concluded runs.
The deterministic engine in `tools/autopilot/` owns every transition. There is
no LLM orchestrator.

## Restore the interrupted controller state

Run these commands from the repository root on `main`:

```bash
git pull --ff-only origin main
git log --oneline -3
test -f research/frontier-23-handover-state.json
mkdir -p .autopilot
cp research/frontier-23-handover-state.json .autopilot/state.json
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo "$PWD" --run frontier-23
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts doctor --repo "$PWD" --run frontier-23
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts retry --repo "$PWD" --run frontier-23
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts start --repo "$PWD" --run frontier-23 --detach
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --repo "$PWD" --run frontier-23
```

The state snapshot SHA-256 at handover was
`43722558d832b0b353c40b97afdebd85a1e7773d4ec5fa36e0265daf412f4be1`.
The transfer commit containing this file and the snapshot must have
`a2083b3d feat(autopilot): add stage-scoped model profiles` in its ancestry.

Before starting, verify that no controller or dispatch process for this repo is
already alive. A new PC should have none. If one is alive, inspect it rather
than starting a duplicate. Do not run `autopilot plan --force`: it would
replace the established manifests and scaffold. Preserve the 89 partial item
files committed with this checkpoint.

The unscoped `retry` is deliberate. It re-arms dispatches whose
`lastExitOk` is false or null after the WSL termination, while retaining the
successful process receipts for batches 3 and 6. Once the other author lanes
settle, Step 5's artifact-driven recovery must fill every missing proof
contract, including batches 3 and 6. Do not equate an exit-zero process receipt
with a complete authoring artifact.

If detached execution is unreliable on the replacement machine, stop it
cleanly and run `start` in a durable foreground terminal instead. Do not alter
the workflow merely to work around the previous machine's WSL shutdowns; the
owner explicitly said the workflow does not need fixing.

## Authoritative handover status

The snapshot was captured with no controller or agents running and with the
run unpaused. Steps 1 through 4 are complete. The engine reports:

- `5-author`: 2/10 process receipts, batches 3 and 6 only.
- `5-author`: proof-contract artifacts missing for all batches 1 through 10.
- Steps 6 through 10 have not begun.
- There are no workflow blockers. The interruption was repeated WSL loss, not
  a model or content failure.

The two successful Step 5 receipts are:

- `research/frontier-23-dispatch/beta-author-batch-3.result.json`
- `research/frontier-23-dispatch/beta-author-batch-6.result.json`

Both attest `provider=deepseek`, `model=deepseek-v4-pro`, profile
`deepseek-v4-pro-xhigh-1m`, nominal context 1,048,576, provider effort `max`
(the provider mapping for requested `xhigh`), and observed usable context
996,147 after the official 5% reserve. Both agents stopped after research and
did not write their required proof contracts. The run-specific author prompt
now explicitly requires artifact completion before exit.

Model routing is already implemented, tested, and committed:

- Step 5 authoring agents: DeepSeek V4 Pro, requested xhigh, fail-closed 1M
  context attestation.
- Step 6 reader agents: DeepSeek V4 Pro with the same profile.
- Step 6 refuter agents: Terra xhigh (this is the owner's latest override).
- Step 7 reader/judge agents: GPT-5.4 xhigh.
- Every Step 9 and Step 10 agent dispatch: DeepSeek V4 Pro with the same
  profile; deterministic tool-only plans remain deterministic.

Do not weaken or silently bypass DeepSeek context attestation. Check each new
DeepSeek result JSON for `context_attestation.ok === true`. Targeted routing
tests were 22/22 green, type-checking passed, and `doctor` was clean before the
interrupted run. The earlier full repository suite had 495/507 passing; the 12
failures were pre-existing run-state fixture failures, so do not report the
whole suite as green without rerunning and resolving that evidence.

## Build scope

The 14 A/B pairs, packed into ten batches, are:

1. Group theory: `decision-problems-for-finitely-presented-groups` and its
   examples page; `graphs-of-groups-and-bass-serre-theory` and its examples.
2. Linear algebra: `complexification-realification-and-real-structures` and
   examples; `exterior-powers-orientation-and-hodge-duality` and examples.
3. Commutative algebra: `integral-extensions-and-going-up` and examples.
4. Abstract algebra: `characters-and-the-orthogonality-relations` and examples.
5. Linear algebra: `matrix-norms-condition-numbers-and-numerical-stability`
   and examples.
6. Measure theory: `product-measures-and-the-fubini-tonelli-theorems` and
   examples.
7. Complex analysis: `conformal-mapping-branches-and-the-schwarz-lemma` and
   examples; `infinite-products-and-weierstrass-factorisation` and examples.
8. Category theory: `exactness-and-the-member-calculus` and examples.
9. Differential geometry: `smooth-manifolds-and-smooth-maps` and examples;
   `euclidean-ordinary-differential-equations-with-smooth-dependence` and
   examples.
10. Computability theory: `formal-languages-encodings-and-decision-problems`
    and examples.

Step 4 required one legitimate dependency reroute for the characters batch:
the plan now uses earlier roots-of-unity cyclicity/separability, the fundamental
theorem of algebra, and Vieta instead of depending forward on an unbuilt
complex-exponential page. `validate-plan` passed after that change.

All source preflight checks passed before authoring: 47/47 source fetches and
43/43 URL liveness checks. Stale full-text URLs are an acceptable content
blocker per the owner: if one recurs, intervene by searching the web for a
stable full-text copy, record/update the evidence, then resume the engine.
Previously restored sources included Miller via Wayback/CiteSeerX, Hitchin via
Wayback, and the NTU Banach-calculus notes.

## Operating contract

Use the engine's status/report evidence, not assumptions. Inspect status at
least every 10 minutes while active and update the owner with stage coverage,
in-flight lanes, newly completed artifacts, and any intervention. The engine
also writes its own ten-minute status report. Continue through Steps 5–10;
resolve source/content blockers within scope, but do not manually skip gates or
declare completion based on partial receipts.

At the end, perform a requirement-by-requirement completion audit. Completion
requires all 28 pages in the scope ledger to be published, every required stage
and gate complete, no blockers or in-flight work, all proof contracts and
receipts present, and final repository validations clean. Only then commit and
push the completed run and mark the persistent goal complete.

---

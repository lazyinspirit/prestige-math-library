# Step-6 cutover

The rebuilt step 6 (owner, 2026-08-25) is **built and tested but not live**.
`mathlib.mts` hot-reloads on mtime, so editing it lands on a running engine's
next tick; `frontier-18` was at step 7 with its step-6 stages already done, and
new stage ids would have read as 0/N covered and re-dispatched finished work.

Everything below is ready. Cut over **after the current run closes**.

## What is already in place and safe

| file | state |
|---|---|
| `tools/autopilot/stages/mathlib.step6.mts` | the new stages, as a factory; imported by nothing |
| `tools/autopilot/src/executor.mts` | per-(gate, item) budget, **opt-in** via `Stage.perItemFixBudget` |
| `tools/autopilot/src/types.mts`, `src/state.mts` | `gateAttempts` container, `perItemFixBudget` field |
| `tools/step6-scope.mjs` | new — per-batch hash, split, collect, check |
| `tools/cross-group-edges.mjs` | new — 6c's work list and its gate |
| `briefs/reader.md` | rewritten for the new routing |
| `briefs/refuter.md` | rewritten — scope, blind spots and output contract; the finding taxonomy, "what is NOT a finding", titles, boundary and provenance sections are the originals |
| `briefs/schemas/refute-report.json` | new — the refuter's structured output, validated against the Codex endpoint's subset |
| `briefs/tasks/refuter-untouched.md`, `alpha-6b-routed.md`, `alpha-6c-edges.md` | new |
| `tools/autopilot/test/step6-routing.test.mts` | 11 tests, all passing |

The engine change is inert for a running process (modules load once, and there is
no watchdog), and it is opt-in besides: a stage that does not set
`perItemFixBudget` keeps the original stage-wide `maxFixRounds` behaviour
exactly. Every one of the 364 existing tests still passes.

## The cutover, in order

**1. Splice the stages into `mathlib.mts`.** Delete the current `6a-read`,
`6b-adjudicate`, `6b-baseline` and `6c-cross` definitions and put in their place:

```ts
import { step6Stages } from './mathlib.step6.mts';
// ...inside the `stages` array, where 6a-read used to begin:
...step6Stages({ gate, repoWide, contractGates, coverageGates, policyItemGate,
                 urlGate, impactGate, batches, alphaGroups, alphaCohort,
                 resultPattern, touchesPath, MECHANICAL_REPAIRS,
                 mechanicalRepair, isEdgeDecision, dispatchEdgeAdjudication }),
```

Nothing in `mathlib.mts` is exported for this yet — `gate`, `repoWide`,
`contractGates`, `coverageGates`, `policyItemGate`, `urlGate`, `impactGate`,
`alphaCohort`, `resultPattern` and `touchesPath` are all module-local. Exporting
them is the whole of the edit; do **not** copy any of them into the new file,
which is the defect class this repo keeps rediscovering.

**2. Add the `refuter` role's task-file template** to `autopilot plan`, beside
the reader's: `research/<run>-refuter-<i>.task.md`. Without it the preflight
blocks the stage before spending a dispatch, which is the designed behaviour but
not the one you want on the first run.

**2a. Confirm the result-artifact path.** `6a-refute` is the first stage in this
repo to use `outputSchema`/`resultArtifact` — `briefs/schemas/` was an empty
directory. The mechanism is real (`dispatch.mjs` takes `--output-schema` and
`--result-artifact`, and requires the artifact to sit below `research/`, which
this does) and `doctor` validates the schema, but it has never run live here. A
read-only refuter cannot write its own report; the dispatcher writes it from the
agent's final message. Watch the first dispatch.

**3. Delete what the rebuild made stale** — the point of a rewrite rather than a
patch:

- `briefs/alpha.md` §"Your read-only proof-refuter subagents" — refuters are a
  stage now, with `briefs/refuter.md` and a gated artifact. An Alpha spawning its
  own leaves an unverifiable second scope.
- `briefs/alpha.md`'s step-6 sections, superseded by
  `briefs/tasks/alpha-6b-routed.md` and `briefs/tasks/alpha-6c-edges.md`.
- `LEVELS.md` §Step 6 — 6a/6b/6c all changed; rewrite the section rather than
  amending it.
- `CLAUDE.md` §"Roles, decisions and gates in a build" — the step-5/6 ownership
  bullet and the Alpha-refuter bullet both describe the old shape. Normative docs
  are updated **in the same commit as the change they describe**.
- `AUDIT-WORKFLOW.md` if A6 mirrors the build's 6a/6b split.

**4. Run `autopilot doctor`** before the first dispatch. It resolves every brief
and task file named by every stage, which is what catches a missing template.

## What changed in behaviour, stated plainly

- **Routing.** Each item goes down exactly one path: reader-touched → Alpha;
  untouched-and-flagged → Alpha; untouched-and-clean → straight to the gates.
- **Refuters are a stage**, scoped to the untouched set, with a JSON artifact and
  a gate. Their coverage was previously unverifiable.
- **6c is narrowed** to cross-group edges plus the forward-reference decision
  (build the intermediate lemmas, or drop the item), then the final battery.
- **Repair budgets are per (gate, item), three tries**, replacing a stage-wide
  count that was consumed one gate per round.
- **No batch waits on a sibling** between step 5 and 6b.

## The one place coverage genuinely thins

6c no longer re-reads backward edges into published content. On frontier-18 that
was **3,814 of 6,060** dependency edges — the majority of the level's citations.
They are not unowned: the 6a reader's duty 5 covers every citation in its batch,
and `briefs/reader.md` now says so explicitly and names the number. But nobody
re-reads them with the whole level in view any more. That is a deliberate
reassignment, recorded here so it is not rediscovered as a surprise.

Measured on the same run: **zero** cross-group edges and 8 forward references, so
the narrowed 6c would have had eight decisions and nothing else to do.

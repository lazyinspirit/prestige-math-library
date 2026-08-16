# frontier-15 — step-0 record

Scoped 2026-08-16 by the session (owner-instructed: "build everything except
combinatorics"). First run driven by the `tools/autopilot/` engine — treat
early stages as a supervised shakedown; newly-live gates are louder by
design.

## Scope

8 A/B pairs, 16 pages, 7 batches, from the 13-pair buildable frontier:

| batch | pair | category | design |
|---|---|---|---|
| 1 | `quadratic-reciprocity-and-the-jacobi-symbol` | number-theory | `plan-number-theory-track.md` §NT-3 (~L424) |
| 2 | `sylow-theorems-and-nilpotent-groups` | abstract-algebra | `plan-algebra-track-expansion.md` §AG-4 (~L961) **+ §II.3 (~L2101, controlling)** |
| 2 | `chain-conditions-and-semisimple-modules` | abstract-algebra | `plan-algebra-track-expansion.md` §MOD-4 (~L1248) + §II.5, §II.1.d |
| 3 | `algebraic-closure-embeddings-and-separability` | abstract-algebra | `plan-algebra-track.md` §GA-1 (~L2520) |
| 4 | `sigma-algebras-and-borel-sets` | measure-theory | `plan-measure-theory-track.md` §MT-1 (~L1626) |
| 5 | `the-fundamental-group-of-the-circle` | topology | `plan-topology-set-theory-track.md` §HT-4 (~L931) |
| 6 | `goursat-and-cauchys-theorem-in-a-convex-domain` | complex-analysis | `plan-complex-analysis-track.md` §CA-4 (~L1020) |
| 7 | `monads-comonads-and-their-algebras` | category-theory | `plan-category-theory-track.md` §MA-3 (~L1290) |

## Deferred, with reasons

- **The 4 combinatorics pairs** (orders 197, 223, 397, 401): owner
  instruction; they share one design doc and defer as a coherent next run.
- **`the-fundamental-theorem-of-algebra` (139)**: design/spec route
  conflict found at step 0. `plan-algebra-track.md` §II.8 (2026-08-13)
  chose the Artin–Galois route requiring
  `solvability-by-radicals-and-kummer-theory` (101.6, unbuilt; its closure
  carries `the-galois-correspondence`, 100, unbuilt); the spec still
  declared Part I's symmetric-polynomials route. Building either way was
  wrong: the design route cannot be built this run, and overriding a
  design's explicit route decision is not the session's call. Spec
  corrected per §II.8 (three backward edges), pair re-enters the frontier
  once the Galois pages publish.

## Spec edits applied at step 0 (both backward-only, validate-plan clean)

1. `the-fundamental-theorem-of-algebra.requires` →
   `[solvability-by-radicals-and-kummer-theory, sylow-theorems-and-nilpotent-groups, continuity-ivt-evt-and-uniform-continuity]`
   per §II.8 (was: symmetric-polynomials + continuity).
2. `sigma-algebras-and-borel-sets.requires` += `cardinal-arithmetic-and-cofinality`,
   `the-topology-of-euclidean-space` per §MT-1 L1628–1631 (design lists
   seven prerequisites; these two were outside the closure; both published,
   orders 247/257 < 288.001).

The in-run drift review (stage 1, `drift` unit) re-verifies all 8 pairs
independently; these two edits are recorded so it can confirm rather than
rediscover them.

## Machinery defects found and fixed before start

1. **Never-dispatched drift review** — `plan` wrote the task, printed
   "dispatched as the first audit node", and no stage dispatched it, no
   gate read it. Now stage 1's `drift` unit + `drift-review-check.mjs`
   gate. `ARCHITECTURE.md` §3.11e-3.
2. **`plan --force` silent stale-ledger path** — `--force` was not
   forwarded to `manifest-integrity --write-ledger` and its stderr refusal
   was discarded; `plan` reported success over a ledger owing 18 pages
   while the manifests carried 16. Now forwarded, surfaced, and fatal to
   `plan`.

Both in commit `fix(autopilot): dispatch the step-0 drift review; fail plan
on a stale scope ledger`.

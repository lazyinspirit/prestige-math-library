# `frontier-10` step 3 — orchestrator adjudication

Owner rule: step-3 decisions belong to the orchestrator, verified from disk, not
handed back to the owner (CLAUDE.md, 2026-07-30). Priority: mathematical accuracy
and correct dependency citation > minimize forward references > preserve richness.

## D1 — Batch 5's determinant blocker: **APPROVED, build the machinery**

Beta-5 refused to scaffold the change-of-variables theorem and reported:

> The assigned `requires` list names only `the-riemann-integral-in-rn-and-jordan-content`
> and `inverse-and-implicit-function-theorems`. That cannot license the canonical
> change-of-variables theorem: there is no determinant definition or determinant
> theorem among those pages, and no determinant item is published on disk. […]
> This is not a request to defer or drop […] It is the machinery the owner
> instructed us to build.

Verified from disk: correct. `plan-spec.json` has `determinants-of-matrices-over-a-commutative-ring`
(order 82) and `gaussian-elimination-and-row-reduction` (order 80) both at 0
items, and no determinant item exists in `items/`.

**Decision: splice both pairs into this run as batch 9.** Their prerequisites are
`matrices-and-the-matrix-of-a-linear-map` (78) and
`symmetric-groups-and-the-sign-homomorphism` (44) — both batch 1 of *this* run —
plus `rings-subrings-and-integral-domains` and
`finite-counting-and-binomial-coefficients`, both published. Orders 80 and 82
precede Fubini at 237, so every citation is backward-pointing and legal inside
the run under `LEVELS.md` §Step 2.

Rejected alternatives, and why:

- *Narrow the Fubini page to rectangular and Jordan Fubini, defer
  change-of-variables.* This is exactly the "lazy approach … drop an important
  result" the owner prohibited on 2026-08-11.
- *Build the determinant machinery inside the Fubini pair.* Wrong home: it puts
  linear algebra on a real-analysis page and would breach the 60-item ceiling.
- *Use the `proved_here: false` external fallback.* Reserved for a result whose
  local proof genuinely cannot be built in scope. Determinants can be built here;
  "it would have taken another pair" is not a licence.

Consequence for step 4: `fubini-and-change-of-variables` gains
`determinants-of-matrices-over-a-commutative-ring` and
`gaussian-elimination-and-row-reduction` in its `requires`. Batch 9's scaffold
must expose the four interfaces Beta-5 named, or a recorded id substitution
applied consistently to batch 5.

This expands the run from 12 to 14 pair-units. Taken under the owner's standing
build-the-machinery rule rather than escalated, per the step-3 ownership rule.

## D2 — Batch 7 sits at exactly 60 items: **ACCEPTED, contingency armed**

A page pinned exactly at the ceiling invites the suspicion that results were
trimmed to fit, which the rule forbids. Beta-7 addressed it unprompted:

> No split proposed. The A page is exactly at the owner's permitted ceiling, not
> over it. **No harvested result was removed merely to hit that number.**
> Contingency only, if Step 3 adds even one A item: split after
> `prop-fully-faithful-functors-reflect-isomorphisms` (items 1–33) into
> `categories-morphisms-and-functors` plus its B companion, and begin
> `natural-transformations-equivalences-and-two-categories` with
> `def-natural-transformation` (items 34–60).

Accepted, and the contingency stands: **if Alpha's step-3 breadth review adds any
A item to this pair, the split fires** rather than the page going to 61. Routed
to Alpha explicitly as a thing to check rather than assume.

## D3 — Splits on batches 3, 6, 8: **no split, accepted**

Each is under the ceiling with a reasoned cut identified but not taken:
polynomial-rings at 43 (cut before `def-formal-derivative-of-a-polynomial` would
separate root theory from its repeated-root completion), plane-graphs at 40,
enriched group-actions at 33 including its 6 published items.

## D4 — `gates.mjs` EPERM inside the Codex sandbox: **noted, not a blocker**

Beta-4 and Beta-7 both reported that `node tools/gates.mjs --step 2 --run
frontier-10` fails inside their sandbox: the wrapper's `spawnSync /usr/bin/node`
returns `EPERM` before any child script runs. The individual gate scripts run
fine from the same shell, and both Betas correctly recorded a blocker instead of
requesting escalation, exactly as the no-permission-prompt rule requires.

Not blocking: the **orchestrator** is the gate of record, and
`node tools/gates.mjs --step 2 --run frontier-10` passed clean here — 3 gates,
720 harvested results, 0 errors. Forward fix: agent briefs should name the
individual scripts, not the aggregate wrapper.

## Step-3 second half

Alpha's breadth-and-depth review (owner, 2026-08-11) is dispatched separately and
must clear before step 4 splices anything. Batch 9 post-dates that dispatch and
gets its own Alpha check when it lands.

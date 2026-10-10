# Step-3b finite-smoke liveness repair, escalation round 1

Run: `physics-em-sr-40-2026-10-08`. This report records a code repair and a proposed obligation, not content acceptance or a native gate pass.

## Confirmed defect and scope

The native failure evidence is `physics/research/physics-em-sr-40-2026-10-08-step3b-failure-gate-liveness.txt`: finite-smoke performed zero checks. Inspection of all 40 run batch proof-contract files finds 452 distinct scoped IDs and **zero** `finite_smoke` entries. The diagnostic's suggestion of unknown names is not the actual defect: unknown names already fail closed in `runSmoke`. The run had no selected bounded check. The old registry's 18 checks concern graphs, groups, posets, digit cylinders, shifts, Gaussian polynomial derivatives, Brownian covariance, Lie algebra, algebra and DFAs. None directly tests the authored guided-ring assertion. No unrelated imported mathematics obligation was added to pad the selection.

Changed scope: `tools/physics-support/finite-smoke.mjs`, new `tools/physics-support/finite-smoke-sagnac.test.mjs`, and explanatory text in `physics/WORKFLOW.md`. Item carriers, per-item/shared proof contracts, mathematics tools, gates, schemas, controls and state were not changed. Root owns integration and any code/docs commit.

## Actual authored assertion and independent bounded computation

Item: `ex-sr-guided-ring-sagnac-worked`, batch 10. The authored Example clauses (a)–(c) explicitly assert at angular velocity ratio 3/5 the first return times `5 pi R/c` and `5 pi R/(4c)`, chart delay `15 pi R/(4c)`, proper delay `3 pi R/c`, chart holonomy `15 pi R/(8c)` and proper holonomy `3 pi R/(2c)`. Clause (c) asserts both return times `2 pi R/c` and zero differences at angular velocity zero. The proposal's assertion is an exact contiguous excerpt of these three clauses; the native matcher verifies it is present.

Check: `sr-guided-ring-sagnac-worked-reunions`.

Use `u=ct/(pi R)` and `u=k/4` for integer ticks 1–40. Measure angular phase in `pi/20` units: the two signals have rates `5k,-5k`, and the material point has rate `3k` (or zero). Enumerate coincidences by phase difference modulo 40. This searches 160 comparisons without using the theorem's closed-form reunion formulas. At ratio 3/5 the first positive hits are ticks 20 and 5; at zero both are tick 8. Every possible positive coincidence lies on the selected grid because the relative phases are rational linear functions of k: k/10 and -2k/5 multiples of pi at 3/5, and plus/minus k/4 at zero. Enumerated later hits are checked to be successive multiples of the first hit.

The detector tangent `(5,3)` has Minkowski norm squared -16, yielding the exact clock factor 4/5. For a unit material-angle increment the rest tangent is `(a,(3/5)a+1)`: orthogonality to `(5,3)` gives `(-25+9)a+15=0`, so `a=15/16`. Integrating that constant slope over 2 pi derives the chart holonomy independently of subtracting reunion times; clock conversion gives proper holonomy. Exact integer cross-products compare rational expected values and confirm both factor-two relations. This is conditional finite model arithmetic, not evidence for real apparatus, the full theorem, integrability assertions, trigonometric reception coordinates, or a whole-item audit.

## Frozen proposal and consumer ownership

`physics/research/physics-em-sr-40-2026-10-08-step3b-finite-smoke-proposal.json` is a runnable version-1 minimal contract document containing exactly this item's proposed `finite_smoke` array, including explicit expected values. The responsible content reviewer must reconcile the excerpt/assertion with this item and current suppliers, then integrate that array into `physics/research/physics-em-sr-40-2026-10-08-batch-10.proof-contracts.json`. This proposal does not replace the full contract. No original Statement/Definition/public physics interface changes are proposed; the example belongs to the forthcoming same-reviewer SR supplier/consumer lane. Actual native gate closure remains root-owned and requires fresh recertification and its full battery.

Direct deps consumers of this example found in item frontmatter: []. No consumer claims were changed. Bound hashes at report time:

- Item raw SHA-256: `d3551511aa096fd2b809674114b26090b98fecb4cf505d5c540e9925e1ea3885`.
- Proposal raw SHA-256: `11648dc845317994a98834fcd677f64974bdd3748d0dfd8b85b70b5302749739`.

## Commands and actual results

- `node tools/physics-support/finite-smoke.mjs physics/research/physics-em-sr-40-2026-10-08-batch-10.proof-contracts.json`: exit 0, **0 checks over 0/11 items carrying obligations**. This reproduces the missing selection on the relevant existing batch; it is not liveness success.
- `node tools/physics-support/finite-smoke.mjs physics/research/physics-em-sr-40-2026-10-08-step3b-finite-smoke-proposal.json`: exit 0, **1 check over 1/1 items carrying obligations**, 160 angular-phase comparisons, rotating first reunions 20/5, inertial 8/8, chart/proper delay and both factor-two holonomies pass.
- `node --test tools/physics-support/finite-smoke-sagnac.test.mjs`: exit 0, 1 focused test pass. It verifies successful explicit `--items` selection and fails on swapped reunion directions, chart-delay sign error, omitted proper-clock conversion, factor-two mistakes in either holonomy, malformed rational expectation, fabricated assertion excerpt, unknown check, and out-of-scope item selection. These negative cases modify temporary contracts only.
- `node tools/physics-support/finite-smoke.mjs --self-test`: exit 0, all **19** registry checks pass, including the new bounded check and all 18 existing checks.
- `git diff --check -- tools/physics-support/finite-smoke.mjs tools/physics-support/finite-smoke-sagnac.test.mjs physics/WORKFLOW.md`: exit 0, no whitespace findings.

No quotas or acceptance checks were weakened. The finite-smoke program continues honestly reporting an empty selection as zero; the native liveness gate remains responsible for rejecting vacuity. Minimal remaining prerequisite: the item reviewer integrates the concrete assertion-bound obligation, then root runs the fresh full native battery.

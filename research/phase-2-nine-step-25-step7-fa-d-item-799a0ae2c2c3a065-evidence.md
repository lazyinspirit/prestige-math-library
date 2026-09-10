# Final adjudicator evidence — def-piecewise-c-one-curve-on-a-manifold

Run: phase-2-nine-step-25. Group: d. Queue position: 1 of 1 in
research/phase-2-nine-step-25-step7-fa-d-item-799a0ae2c2c3a065.json.
Disposition: repaired. Source status: familiar.

## Independent review and exact mathematical basis

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md, the queued definition,
both complete direct dependency definitions
(items/def-piecewise-c1-path-operations-and-oriented-reparametrizations.md and
items/def-c-r-and-smooth-maps-between-smooth-manifolds.md), and the A/B pages
library/differential-geometry/riemannian-metrics-length-distance-and-volume.md
and its -examples.md companion. Inspected the owning manifest entry and
coverage entry in research/phase-2-nine-step-25-batch-9.pages.json and
research/phase-2-nine-step-25-batch-9.coverage.json, the complete item contract
including boundaries and Alpha risk review in the batch-9.proof-contracts.json,
and the reader concern/alert fields in the alpha-d-step7-context.json.
The reader contains no concern or alert for this item.

Read both item rows in research/phase-2-nine-step-25-judge.jsonl (initial
2026-09-10T06:45:43.801Z and rejudge 2026-09-10T08:15:07.505Z), the initial
confirmed_fatal row in research/phase-2-nine-step-25-judge-adjudications.jsonl,
and the step7-item-def-piecewise-c-one-curve-on-a-manifold-closure.json.
The rejudge reason ends mid-word in the stored ledger itself; its complete
available text nevertheless explicitly identifies the premature length claim.

The initial objection concerned derivatives at closed-piece endpoints. Sol's
current repair is correct: continuity of the coordinate curve on a closed
piece, C1 regularity in its interior, and continuous extension of its derivative
to the endpoints imply that the one-sided difference quotients converge to
those extension values. Indeed, apply the scalar mean value theorem to each
coordinate between the endpoint and a nearby interior point and take the
limit. Merely existing endpoint derivatives do not suffice: for t>0,
f(t)=t^2 sin(1/t^2), f(0)=0 has right derivative zero at 0 but interior derivative
2t sin(1/t^2)-2 cos(1/t^2)/t without a finite limit. Sol excludes this example.
The chain rule under a smooth chart transition preserves the continuous
endpoint derivative extension, since both its Jacobian along the curve and
the old coordinate derivative have limits. Finite refinements preserve this
condition. Corners between pieces, zero velocity, constant pieces and pauses
remain admissible. A map from a singleton is constant without imposing any
endpoint derivative condition on that degenerate interval.

Independently uphold the rejudge's typing objection. The curve definition is
on a smooth manifold M and supplies no metric or length functional. Its two
dependencies supply chart regularity and Euclidean path operations; Euclidean
length is not an intrinsic length definition on M. The A page introduces
Riemannian length in the immediately following item, not in this curve class.
Read items/def-riemannian-speed-and-length.md in full: it explicitly assigns
zero to the singleton's empty sum, and assigns zero to a constant curve via
zero speed. Thus deleting only “of length zero” here retains every intended
curve and leaves the zero-length convention fully established at its correct
location. No Riemannian metric dependency or forward/cyclic length dependency
is needed for the metric-independent curve definition.

## Repair and scope

Changed only the singleton sentence in the queued item, from “a constant
curve of length zero” to “a constant curve”. Updated only that item's
degenerate boundary evidence in the owning batch-9 proof contract to identify
the correct location of the length convention. Preserved Sol's endpoint repair
and independent risk record. The manifest already defines only the curve class
and requires no correction; the coverage row and A/B summaries remain accurate.
No proof is required for this definition (proof provenance not-applicable).
No existing dependency was edited, no missing lemma was needed, and no scope
addition or prerequisite-repair licence is applicable.

Read briefs/tasks/frontier-dependency-ledger.md and checked the owning input
research/phase-2-nine-step-25-batch-9.cross-batch-dependencies.json, which is [].
Both direct suppliers are published, not other consumer batches in this run.
No dependency edge or dependency item changed, so the empty consumer-batch
record remains accurate; there is no dependency repair requiring a ledger row.

## Source honesty

This is familiar elementary calculus and the distinction between a smooth
curve class and a metric-dependent length functional. The explicit mean-value
and chain-rule arguments above resolve the regularity issue; the length issue
is settled directly by the local definitions. No external verification was
needed or performed. Existing Lee source metadata and coverage locators were
inspected as metadata, not claimed as newly read external source passages.

## Focused validation and completion

- node tools/tsx-run.mjs tools/precheck.mts items/def-piecewise-c-one-curve-on-a-manifold.md: exit 0, 0 checked, 0 failing. This is a definition, so no proof-format validation is claimed.
- node tools/rendercheck.mjs items/def-piecewise-c-one-curve-on-a-manifold.md: exit 0, one file clean, real YAML and KaTeX parsing passed.
- node tools/proof-contract.mjs research/phase-2-nine-step-25-batch-9.proof-contracts.json --strict --items def-piecewise-c-one-curve-on-a-manifold: exit 0, 0 errors, 0 warnings, 1/1 item checked.
- Manifest inspection confirmed both unchanged dependencies and proof-not-applicable provenance; the owning cross-batch input remains [].
- Current itemHashGuard: bdf18cd0f23d646fcb4ed25f9368949831de996818c3d3a7b1912a5dfc9dc965.

No unresolved mathematical obligation remains for this queue item. Next action:
record disposition repaired through the prescribed terminal recorder. This
receipt is independent final adjudication, not a judge verdict or pass stamp;
no third consumer judgment was requested.

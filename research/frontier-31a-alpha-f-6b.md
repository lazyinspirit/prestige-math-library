# Frontier-31a Alpha f Step 6b

Run: `frontier-31a`
Group: `f`
Owned batches: `3`, `16`, `17`
Date: Saturday, September 5, 2026

## Scope and evidence

The live queues are `research/frontier-31a-step6-scope-{3,16,17}.json`.
The current reader reports and findings, refuter reports, item/page carriers,
proof contracts, and cited dependency statements were reread. There are 23
touched obligations, no `page:` obligations, one reader finding, and six
refuter findings. The reader-finding and `refuter:17:4` obligations describe
the same batch-17 examples-page sentence, but their routed location fields are
not identical (`file:line` versus `page prose, line 9`), so the exact Step-6
schema requires unique ledger references for the two obligations.

## Confirmed findings and repairs

- `refuter:3:1`, `ex-gauges-of-norm-balls-and-ellipsoids`: confirmed fatal.
  The claimed zero intersection of a norm ball or ellipsoid with every
  nontrivial line was false. The current example now justifies the two gauges
  as the given norm scaled by `1/r` and the norm induced by the positive-
  definite quadratic form. The formulas and dependencies
  `def-minkowski-functional` and `lem-balanced-gauge-is-a-seminorm` remain
  unchanged.
- `refuter:16:1`,
  `def-fully-nonlinear-first-order-pde-and-complete-integral`: confirmed fatal.
  The current definition now distinguishes a general equation
  `F(x,u,Du)=0` from a fully nonlinear one by requiring non-affine dependence
  on the top-order variable `p=Du` after `(x,u)` is fixed, matching
  `def-linear-semilinear-quasilinear-and-fully-nonlinear-pde`. The complete-
  integral and stationary-envelope conventions are unchanged.
- `refuter:17:1`, `ex-a-contact-form-on-three-space`: confirmed fatal. For
  `alpha=dz-x dy`, the current statement and verification now both give
  `alpha wedge d alpha=-dx wedge dy wedge dz`, retaining the valid
  nonvanishing and Frobenius conclusion through
  `cor-codimension-one-frobenius-criterion`.
- `refuter:17:2`,
  `fs-alpha-wedge-d-alpha-vanishes-for-every-one-form`: confirmed fatal. Its
  witness now carries the same negative sign; nonvanishing still refutes the
  universal assertion.
- `refuter:17:3`, page
  `the-exterior-derivative-and-cartan-calculus`: confirmed nonfatal. The page
  now says the examples record the direct angular-period obstruction, matching
  the unit-circle contradiction in
  `ex-the-angular-one-form-has-no-global-potential`.
- `reader:17:1` and `refuter:17:4`, page
  `the-exterior-derivative-and-cartan-calculus-examples`: confirmed nonfatal
  reports of one defect. The same stale `deliberately deferred` wording is now
  replaced by `direct`.
- HIGH-risk review found one additional fatal boundary defect in
  `ex-eikonal-cones-are-not-classical-at-the-vertex`: without `n>=1`, the
  written claim included `R^0`, where the norm is differentiable at its only
  point and no unit-vector witness exists. The item now assumes `n>=1`; its
  contract zero and degeneracy records, plus its `risk_review`, now identify
  and close that exact case. A supplemental `gate:` decision and its own
  closed ledger row record the repair.

No other reader/refuter finding is routed to this group. The remaining
reader-touched carriers retain their repaired claims and proof conventions on
current disk.

## Risk and boundary review

Specific completed `risk_review` records now cover all 19 HIGH/CRITICAL items:
9 in batch 3, 3 in batch 16, and 7 in batch 17. Re-running each owned contract
with `risk-report --require-reviewed` reports zero errors.

The boundary detector initially identified nine candidate stale dispositions.
Direct comparison with the written claims showed that the empty countable
family in `lem-quotient-by-c-zero-has-no-countable-separating-family` and both
directions of the local-invertibility equivalence in
`lem-characteristic-strip-jacobian-at-the-initial-surface` needed explicit
checked records. The other candidates were mathematically sound but carried
generic explanations; their owned contract rows now state the actual
nonempty-index or separately proved direction evidence. The contradicted-
boundary gate then reported no candidates. These are verification-record
repairs, not new mathematical defect rows.

## Decisions and ledger

`research/frontier-31a-alpha-f-6b-decisions.json` contains 31 uniquely keyed
decisions: 18 `accepted_repair`, 5 `amended_repair`, 5 `confirmed_fatal`, and
3 `confirmed_nonfatal`. The 30 routed obligations are covered exactly once;
the remaining decision is the supplemental eikonal gate repair. Every decision
has a nonempty evidence statement, a current `subject_sha256`, and one unique
defect id.

The 31 closed rows in
`research/frontier-31a-alpha-f-6b-ledger-rows.json` were appended through
`tools/defect-ledger.mjs append`. Run-level ledger validation checks the current
92 `frontier-31a` rows with zero errors.

## Validation and blocker

- Reflow made no further change to the five edited item carriers. Focused
  precheck passed all four proof-bearing edited items; the definition was
  correctly skipped.
- Strict proof-contract validation passed 23/23, 25/25, and 47/47 items for
  batches 3, 16, and 17. `manifest-deps` passed all 115 items, and
  `content-policy` reported no errors or warnings.
- Citation fidelity found all 86 recorded citations with no missing quote or
  widening candidate. Focused rendercheck passed the five items and two pages.
- `risk-report --require-reviewed`, contradicted-boundary audit, and
  `defect-ledger validate --run frontier-31a` all pass.

The three batch-local Step-6 adjudication commands each recognize the correct
owned obligation totals (6, 8, and 16) and name no group-f decision error. They
remain globally red because the shared published-content state currently has
two out-of-scope batch-14 entries: `published-claim-extra` for
`lem-sheaf-condition-check-on-basis` and `published-repair-extra` for
`reader:14:1`. Group f does not own either entry, so this report records them as
the sole external blocker rather than altering another group's artifacts.

## Gate repair cycle 1 — `step6-routing-adjudicate`

The live gate was reproduced on September 6, 2026. I reread the fourteen named
batch-3/16/17 carriers against `research/frontier-31a-reader-{3,16,17}.md`,
their declared separation, ODE, inverse-function, exterior-derivative, flow,
Cartan, and tensor dependencies, and the current contracts. Every item and
manifest hash exactly matches the frozen post-reader value; only later 6b
contract reconciliation changed the composite carriers. The empty convex-set
case, real-part separation, monotone Burgers endpoint, characteristic-strip
rank qualification, local ODE scope, angular-period obstruction, invariant
formula signs, pullback naturality, and tensor derivation remain correct.

All fourteen touched decisions are retagged from `accepted_repair` to
`amended_repair`; fourteen nonfatal `route:"gate"` decisions and matching rows
were added through `research/frontier-31a-alpha-f-6b-gate-ledger-rows.json`,
and current hashes were restamped. Batch-scoped commands name no group-f
decision defect (their only diagnostics are the pre-existing batch-14
published-content entries, which disappear under the full ownership scope).
The exact full primary gate reports `910 item(s) routed, 374 adjudication
obligation(s), 0 error(s)`. No group-f blocker remains.

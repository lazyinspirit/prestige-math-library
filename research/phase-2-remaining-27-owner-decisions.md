# Owner decisions owed — Step-7 terminal adjudication (phase-2-remaining-27)

Final adjudicators record an item as `escalated-to-owner` when the queued item
cannot be settled inside the lane's authority: the defect sits in an existing
supplier, the fix needs a new theorem or a filtration/convention change, or the
repair would create a judge obligation this stage cannot buy. The item keeps its
rejected bytes, its queue position stays open, and the closure gate refuses to
treat it as resolved.

## D1. Raw-filtration local-energy supplier (one root cause, six consumers)

Root cause: `def-locally-square-integrable-predictable-brownian-integrand`,
clause 2 asserts that `tau_n = inf{t : A_t >= n} \wedge n` is a stopping time
via `{tau_n <= t} = {A_t >= n}`. That step needs everywhere continuity of the
energy process while clause 1 and
`def-continuous-time-adapted-process-and-martingale` supply only almost-sure
continuity on a possibly noncomplete, non-right-continuous filtration.

Counterexample used by the lanes: product of a standard Brownian space with
`({0,1}, delta_0)`, `D = {1}` measurable and null, `F_t` blind to the second
coordinate until time 1; `H_s = 1_D/(s-1)` for `s > 1` and `0` otherwise is
predictable with a.s. finite energy at every finite time, yet `tau_2 = 1` on `D`
and `2` off it, so `{tau_2 <= 1} = D` is not `F_1`-measurable.

Consumers escalated: `thm-localized-ito-integral`,
`def-continuous-brownian-ito-process`, `thm-stopping-an-ito-integral`,
`thm-quadratic-variation-of-an-ito-integral`,
`thm-quadratic-covariation-of-brownian-ito-processes`,
`thm-ito-formula-one-dimensional`.

Decision owed: choose one convention for the whole localisation stack.

- **A. Keep raw filtrations.** Require adapted, pathwise-finite representatives
  of the coefficient and its energy, restrict the canonical `tau_n` claims to
  hypotheses that make the sublevel sets measurable, and state the null-set
  bookkeeping explicitly. Cheapest in library consistency; weakens several
  statements and needs a full re-proof of the affected interface.
- **B. Impose the usual conditions** (complete, right-continuous driving
  filtration) on the Itô page. Standard textbook setup, keeps the canonical
  localization; conflicts with the library's deliberate raw-filtration
  interface and forces every raw-filtration consumer to declare the extra
  hypothesis.

Either way the corrected supplier and its interface need one paid Terra verdict
after the owner-authorised repair, because Step 7's one-rejudge ceiling has been
spent. That is the single spend item in this file.

Assigned 2026-09-20 to `escalation-sol-1` (Sol/xhigh, owner-authorised repair
lane, task `research/phase-2-remaining-27-escalation-sol-1-raw-filtration-localisation.task.md`).

## D2. Circular draft supplier in the compact-Lie-group cluster

`def-torus-and-maximal-torus-in-a-compact-lie-group` depends on a draft
torus-classification supplier that is circular and omits a countable-choice
obligation. Repairing the supplier is outside the queue's authority.

Decision owed: authorise an owner repair of the supplier (breaking the cycle and
declaring where countable choice is spent), then re-adjudicate the consumer.

Assigned 2026-09-20 to `escalation-sol-2` (Sol/xhigh, task
`research/phase-2-remaining-27-escalation-sol-2-torus-classification.task.md`),
with instructions to first test whether the later group-a repairs already
removed the obstruction; if they did, the fix is a re-adjudication, not a repair.

## D3. Published defects (deferred, recorded in the defect ledger)

These are published items, so the run cannot repair them; each needs a separate
published-repair decision and its own judge verdict.

- `def-thom-euler-class-of-an-oriented-vector-bundle` — the rank-zero paragraph
  asserts `u = 1` and `e = 1` for an arbitrary supplied R-orientation; the
  defining formula gives `e = -1` for the reversed generator.
- `thm-thom-isomorphism-for-oriented-vector-bundles` — Proof 4.1 asserts `u = 1`
  and identity maps at rank zero for an arbitrary supplied R-orientation.
- `def-law-modification-and-indistinguishability-of-processes` — on an
  incomplete probability space the definition demands a measurable all-times
  equality event, which a rational-grid almost-sure-continuity argument cannot
  supply.

The two Thom items are assigned 2026-09-20 to `escalation-sol-3` (Sol/xhigh,
task `research/phase-2-remaining-27-escalation-sol-3-published-rank-zero-euler.task.md`).
The indistinguishability item shares the raw-filtration root cause of D1 and
goes to the next free lane once `escalation-sol-1` has decided the convention.

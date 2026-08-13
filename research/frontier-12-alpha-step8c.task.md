## Alpha — step 8c. `lem-green-type-ii-boundary-identity`, third touch, fourth objection.

Your 8b repair was rejudged. **Terra PASS, DeepSeek REJECT** at
`item_sha256` `852a1e5161dcd689…`. Terra's pass explicitly verified "the
coordinate-swapped Fubini justification", so your transpose repair did land.

DeepSeek's objection is **new** — not a restatement of the Fubini one:

> Fact [L4] overstates the cited Newton–Leibniz theorem: it asserts the endpoint
> increment for any interior derivative of a continuous function, but the theorem
> requires the derivative to have a Riemann-integrable extension agreeing with G'
> on the interior. Without that assumption the claim is false.

This is the same **shape** as the defect you confirmed at 8b — a `[F#]` fact
restating a cited theorem with a hypothesis dropped — on a different fact.

### The escalation is now live, and it is the question I need answered

`touchlog` records **3 touches** on this item: step-5 authoring, your step-8
endpoint repair, your step-8b transpose repair. This is the run's only
thrice-touched item.

Fatal repairs are deliberately uncapped, because *"a proof that keeps yielding
real fatal defects is either converging toward correctness or is actually false,
and both must run to conclusion."* **Say which it is.** Concretely:

- Adjudicate this objection on its merits first: open
  `thm-newton-leibniz-with-interior-derivative` on disk and read exactly what it
  requires. Is `[L4]` dropping a real hypothesis, or does the item already
  establish the integrable-extension condition somewhere DeepSeek did not read?
- Then answer the escalation question. Each successive defect has been smaller
  and more local — false endpoint identity, then wrong-orientation Fubini, now a
  possibly-missing integrability hypothesis. **Is that convergence, or is the
  Type II case being patched toward a statement the library cannot yet license?**
- If it is the latter, say so plainly and name the alternative: a different proof
  route, a narrowed Statement, or deferring the Type II lemma and scoping Green's
  theorem to what the Type I case plus a written transpose actually supports.
  Narrowing a claim that cannot be closed honestly is an available and correct
  outcome, not a failure.

I would rather ship a narrower Green's theorem that is true than a broader one on
its fourth patch.

### Constraints

- R1 binds: only `confirmed_fatal` licenses an edit. `step8-guard` re-runs
  against the `pre-step8` baseline.
- Record the row with `item_sha256` set to the **pre-edit** hash.
- Any repair rejudges again on both lanes.
- If you narrow or restructure the Statement, note every consumer:
  `thm-greens-theorem-for-finite-unions-of-elementary-regions` and
  `cor-area-as-a-line-integral-for-elementary-regions` both rest on this lemma,
  and `rem-greens-theorem-jordan-domain-limitation` documents the scope.
- If the Statement changes, the item's `plan_reconciliation` row (which you wrote)
  needs updating to match.

### Output

Append to `research/frontier-12-alpha-step8b.md` or write
`research/frontier-12-alpha-step8c.md`. State the adjudication, the repair or
narrowing if any, and an explicit convergence verdict.

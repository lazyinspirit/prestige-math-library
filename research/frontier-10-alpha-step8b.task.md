# This dispatch — step 8, round 2: adjudicate the rejudge rejections

Your 12 step-8 repairs were rejudged on both lanes. **10 of 24 verdicts came back
`keep`; 14 are fresh rejections.** `step8-guard` confirmed all 12 of your edits
were licensed, so the process is sound — this is simply the judges reading new
text.

**Rejected by BOTH lanes** — start here:

- `cor-planar-simple-graph-edge-bound`
- `lem-colour-focussing-for-arithmetic-progressions`
- `prop-maximal-plane-triangulation-characterisation`
- `thm-dirichlet-test-for-improper-integrals`

**Single-lane:** `cor-triangle-free-planar-edge-bound` (DeepSeek),
`lem-factor-elements-act-on-reduced-syllable-words` (DeepSeek),
`ex-cavalieri-shear-preserves-jordan-content` (Terra),
`ex-finite-step-integrator-weighted-jump-sum` (Terra),
`ex-row-echelon-form-is-not-unique-but-rref-is` (Terra),
`thm-plane-dual-exists-and-double-dual-recovers-primal` (Terra).

## R1 still binds, and it is what ends this

Only `confirmed_fatal` licenses another edit. `confirmed_nonfatal` and
`false_positive` close with **no mutation**, and therefore need no rejudge —
that is the loop's exit, and it is the only exit. **Fatal repairs remain
uncapped**: if a proof still has a real fatal defect, repair it again however
many rounds that takes.

The baseline for this round is `pre-step8b`. Every row still needs
`item_sha256` at pre-edit state. Append to
`research/frontier-10-judge-adjudications.jsonl`.

## Read these with the twice-touched rule in force

Every item above has now been touched at least twice, and four of them three
times. `WORKFLOW.md` §"Twice-touched proofs" makes that an escalation signal:
**a proof that keeps drawing real fatal findings may be false rather than badly
written.** For each, ask explicitly whether the Statement is true before
repairing the proof again. If a Statement cannot be honestly proved in scope,
narrowing or dropping it is the correct outcome and I will report it to the
owner as such — that is a better result than a third patch.

Be especially careful with the planar-graph cluster: five of the twelve repairs
were plane-graph items and four are rejected again. If the page's Euler-formula
machinery has a shared weakness, say so once rather than patching four
consequences.

Report the changed items for a further targeted rejudge, or state that none
changed.

## Alpha — step 6, the whole-level audit

454 items across 24 pages are authored and all twelve step-5 gates are clear.
This is the audit that has to hold before the text is frozen for the paired
judges at step 7.

### The seven independent readers are already running

Assigned on a rotation so **no reader audits a batch it authored**: reader *i*
audits batch *i*+1, reader 7 audits batch 1. They are read-only on content and
write `research/frontier-12-reader-<i>.findings.md`. Re-assign or add readers if
you judge the rotation wrong; that call is yours.

**You adjudicate every finding from disk** — confirm, refute with evidence, or
apply and gate the repair. A finding is evidence, never a verdict. The 30-second
rule holds: a gap a competent reader closes in 30 seconds is nonfatal. Record it,
do not open a fatal repair cycle on it. Cosmetic polish and 30-second tidying
belong **here**, at step 6, before the text is frozen — at step 8 the polish is
withdrawn and only `confirmed_fatal` licenses an edit.

### Proof-refuters

Dispatch read-only `refuter` subagents (GPT 5.6 Sol, cap 8) held to the judges'
skeptical standard: report only a concrete false claim, unlicensed inference,
missing hypothesis, or inaccurate citation, and inspect the supplied dependency
before alleging it is too weak. **A refuter never writes content.**

### risk_review — 235 dispositions, but read the tiers critically

`risk-report` routed all 370 proof-bearing items: **116 CRITICAL, 119 HIGH, 93
MODERATE**. Every high or critical item needs a recorded `risk_review`.

That 64% rate is not 235 suspicious proofs. The scorer is explicitly *not* a
defect detector — it says where to spend reading attention. Its signals here are
dominated by generic ones: cited-fact count, "analytic limiting/completeness
language", boundary-sensitive phrasing. A page about limits and colimits trips
"limiting language" on nearly every item, which is why category theory is
over-represented. **Prioritise by real mathematical exposure, and say so in the
record where a tier is an artefact of the scorer rather than a signal.**

### Specific obligations for this run

1. **Harvest faithfulness, second pass.** You checked the scaffolds at step 3 and
   found three truncated locators. Check the harvest is still true of what was
   actually authored — `coverage-checklist` only checks structural completeness.
2. **Provenance.** Every mathematical-content item needs `provenance.statement`
   and `provenance.proof`. Retag any component you materially alter, and probe an
   `ai-generated` claim, witness or refutation for counterexamples when its truth
   is in doubt. Repairing a proof does not establish the Statement.
3. **The D10 wiring must survive.** `def-field-of-fractions`,
   `thm-field-of-fractions-is-a-field-and-the-domain-embeds`,
   `thm-universal-property-of-the-field-of-fractions` and
   `cor-rational-function-field-as-a-fraction-field` must remain **A-page** items
   with those exact ids. Step 9 wires two published items to them: a load-bearing
   forward reference from `cex-ordered-field-not-archimedean` (order 9) and an
   ordinary `deps` edge from `ex-rational-function-field-order` (order 125). If a
   repair moves or renames any of them, the wiring fails.
4. **Green's theorem** is scoped to elementary regions and finite unions by
   decision D2. Confirm the hypothesis is stated exactly and that
   `rem-greens-theorem-jordan-domain-limitation` still names the boundary. A
   proof step quietly assuming a Jordan domain is a fatal defect.
5. **`complex-analysis` is a new category.** Confirm it agrees with the ℂ
   actually on disk (`ℝ[x]/(x²+1)`), and that nobody touched a renderer file or
   the app repo. Presentation is FROZEN.
6. **`finite-smoke` now runs.** Two poset checks were registered this run and
   both pass, verifying batch 7's two category-theory counterexamples
   independently. If you find another finite claim that a bounded check could
   falsify, say so — the registry is short and that is a known weakness.

### Gates after your repairs

Re-run and leave green: `precheck`, `depcheck`, `fwdcheck`, `extcheck`,
`rendercheck`, `prosecheck`, `citecheck`, `proof-contract --strict`,
`finite-smoke`, `risk-report --require-reviewed`, `impact-audit` from the
`after-authoring` snapshot in `research/frontier-12-touches.json`, and
`audit-manifest`. Record your whole-level receipt in
`research/frontier-12-audit-coverage.json`.

**Any item you create must be spliced into `plan-spec.json`** — tell the
orchestrator. On the previous run a reader created an item at step 6 that never
entered the spec, and because the judge sweep resolves items through the spec it
was judged by **neither** lane. Only `level-coverage --verify-current-context`
caught it, at the very end.

### Output

`research/frontier-12-alpha-step6.md` — findings adjudicated, repairs applied and
gated, risk reviews recorded, and an explicit statement of whether the level is
ready to freeze for step 7.

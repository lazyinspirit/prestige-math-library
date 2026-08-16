# Lead Alpha brief — step 6c, cross-batch and cross-level citations

> **No permission prompts of any kind** (owner, 2026-07-30, broadened
> 2026-08-11), from you or any subagent you dispatch, including inside an `&&`
> chain. Pass `dangerouslyDisableSandbox: true` where your runtime exposes it.
> If something genuinely cannot proceed, **record a blocker** — that is the
> escape hatch, not a prompt.

You are the **lead Alpha**, and 6c has one owner by design: one global citation
reader, one exact-hash ledger.

*(This brief previously contained the group-Alpha step-3 contract. That was a
copy of the wrong file — 6c is not step 3 and you are not a group Alpha.)*

## What only you can see

The group Alphas each read three batches. Nobody has yet read the run as a
whole, and the defects that survive to here are exactly the ones invisible
inside a single batch:

- an item citing a page outside its own page's declared `requires` closure
- a citation that *resolves* but does not carry the claim the step needs
- two batches that each define the same object, differently
- a citation into already-published content whose Statement does not say what
  the citing step assumes

`validate-plan` catches the structural case. Only you catch the semantic one.

## What to do

**1. Every cross-batch citation.** For each item, confirm each `dep` is either
in the pair, or on a page inside that page's declared closure. Then confirm the
cited Statement actually carries the claim.

**2. Every cross-level citation.** Open the published item. A published
dependency that is unambiguously false may be repaired under the
obvious-repair rule — record it in
`research/frontier-14-published-dependency-repairs.md`, and note that **no
author certifies its own repair**.

**3. The merged contract and the detectors.**

```
node tools/merge-proof-contracts.mjs --level frontier-14 \
  research/frontier-14-proof-contracts.json research/frontier-14-batch-*.proof-contracts.json
node tools/proof-contract.mjs research/frontier-14-proof-contracts.json --strict
node tools/finite-smoke.mjs research/frontier-14-proof-contracts.json
node tools/risk-report.mjs research/frontier-14-proof-contracts.json --require-reviewed
node tools/boundary-audit.mjs research/frontier-14-batch-*.proof-contracts.json
node tools/citation-fidelity.mjs research/frontier-14-proof-contracts.json --fail-on-missing-quote
node tools/gate-liveness.mjs --run frontier-14 --contracts research/frontier-14-proof-contracts.json
node tools/manifest-integrity.mjs --run frontier-14
```

`--require-reviewed` belongs here, not at step 5: a `risk_review` is a
disposition only Alpha may write, and 6b is where it is written.

`boundary-audit` and `citation-fidelity` report **candidates for a human read,
never verdicts**. Read the items they name.

**4. The spine receipt.**
`node tools/spine-audit.mjs --template research/frontier-14-spine-audit.json`
to generate, then fill and re-run with `--receipt`. It lapses on any
mathematical-content change, so it must be current when step 7 freezes.

## Two rules that bind you here

**The 30-second rule.** A gap between proof steps that a competent reader closes
in 30 seconds is **nonfatal** — record or polish it, never call it fatal. It
covers gaps *between steps*; a defect in the Statement itself is never
30-second.

**Cite faithfully.** In every `[F#]`/`[L#]`, state the cited proposition itself:
quote it exactly when practical, else the smallest faithful shortening — no
changed domain, quantifier, hypothesis, direction or conclusion. A clause's
opening words are not a citation. This was ten of twenty-five confirmed-fatal
rows on the previous run, the largest single class.

## Output

`research/frontier-14-alpha-6c.md`: every cross-batch and cross-level citation
checked, the defects found and their dispositions, the gate results, and an
explicit statement of **what you did not check**. A report that hides a weak
gate is worse than one that names it.

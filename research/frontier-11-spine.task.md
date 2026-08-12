# frontier-11 — spine audit: 60 high-fan-out proofs

You are an **independent spine reviewer on run `frontier-11`**. You did not author
any of this run's content.

## Why this exists

`level-coverage --verify-current-context` requires a **current** `spine-audit`
receipt for the proof-bearing items among the library's 100 largest transitive
dependency cones. The receipt lapses on any mathematical-content change. It is
what stops a level silently resting on an unreviewed high-fan-out proof — a
defect in one of these propagates to thousands of items.

The template is already generated at
`research/frontier-11-spine-audit.json`: **60 items in `scope`, 60 matching
`attestations`, each currently `"status": "pending"`.**

Scale to be blunt about: `thm-the-empty-set-exists-and-is-unique` has **3,482
transitive consumers**. Most of these are long-published spine items, not this
run's new content.

## What to do

For each of the 60 ids:

1. **Open the item on disk** and read its Statement and its proof.
2. Read the dependencies it cites — enough to judge whether each cited fact says
   what the proof uses it for.
3. Set that attestation's `status` and write a real `notes` line.

Use these `status` values:

- `reviewed` — you read it and found no defect. `notes` says what you checked,
  not "ok".
- `defect` — you found a concrete false claim, unlicensed inference, missing
  hypothesis, or inaccurate citation. `notes` states it precisely with the
  evidence. **Do not repair it** — these are high-fan-out published items and a
  repair there has a blast radius that Alpha and the owner must weigh. Report it.
- `not-assessed` — you genuinely could not judge it. `notes` says why. **This is
  permitted and is far better than a false `reviewed`.** A receipt whose
  attestations are optimistic is worse than one that admits a gap, because the
  whole point is to know what has actually been read.

Also set `"reviewer"` at the top of the receipt to a short identifier for
yourself, e.g. `sol-spine-frontier-11`.

## The standard

Same as a step-6 reader: report only a **concrete** defect — a false claim, an
unlicensed inference, a missing hypothesis, or an inaccurate citation. Inspect
the supplied dependency before alleging it is too weak. A stylistic preference is
not a defect. A gap a competent reader closes in 30 seconds is not a defect.

Be honest about depth. If you read 60 proofs carefully, say so. If you read some
closely and skimmed others, **say which** — the value of this receipt is that it
records what was actually read.

## Boundaries

- **Write only `research/frontier-11-spine-audit.json`** and your report.
- **Do not edit any `items/` or `library/` file**, even to fix something obvious.
  These are the library's most-depended-upon items; changes there are Alpha's and
  the owner's call.
- Do not touch `plan-spec.json`, any batch artifact, or any normative doc.
- Do not run `tools/gates.mjs` — its `spawnSync` of `node` is refused in this
  sandbox. Run individual scripts.

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11).**
> Shell, edit, web-search and git permissions alike, and no segment of an `&&`
> chain may prompt. Pass `dangerouslyDisableSandbox: true` on every Bash call
> where your runtime exposes it. Record a blocker rather than asking.

## Verify and report

```
node tools/spine-audit.mjs --receipt research/frontier-11-spine-audit.json
```

Write `research/frontier-11-spine-findings.md`: how many you read at what depth,
every `defect` with its evidence, every `not-assessed` with its reason, and any
blocker.

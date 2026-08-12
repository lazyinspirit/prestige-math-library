# Contract-fidelity brief — run `frontier-11` (step 6, ARTIFACT-ONLY)

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened 2026-08-11).**
> *"Do not ask and do not let any agents ask for shell command permissions, edit
> permissions, web search permissions, git permissions, or any permissions
> whatsoever."* It binds a compound command as a whole — **no segment of an `&&`
> chain may prompt**. One command per invocation, absolute paths over `cd`. Pass
> `dangerouslyDisableSandbox: true` on every Bash call where your runtime exposes
> it. If something has no escalation-free form, **record a blocker** — never a
> prompt.

You are the Beta that owns your batch on run `frontier-11`. The **item text is
frozen for this dispatch.** Alpha has adjudicated step 6 and ruled the
mathematics ready; what is not sound is the *evidence record* in your
`research/frontier-11-batch-2.proof-contracts.json`.

## THE HARD CONDITION

**No item file may be touched. Not one character.** If you find a contract row
that cannot be made true without changing an item, **stop and record it in your
notes as a new mathematical finding for Alpha.** Do not paper it over by editing
the proof to match the contract. That inversion — bending the mathematics to fit
the paperwork — is the one outcome this dispatch must not produce.

## Why this round exists

`proof-contract --strict` reports **0 errors, 206/206**, and it is wrong to trust
that. It verifies that a quoted substring exists in the named section and that
facts and steps map onto each other. **It cannot verify that the quote actually
supports the fact, or that a boundary row's named step does the work.** Six
read-only refuters and an independent reader found, in every batch:

- **Truncated quotes** — an `[L1]` ending at "then", an `[F1]` ending at
  "define", several stopping after "For every row `i` and every column `j`,".
  Roughly fifteen in the determinant pair alone, six in the logarithm pair,
  several in Yoneda.
- **Invented boundary evidence** — a row claiming "Step 3.1 applies the
  multiplication formula to the coordinate identity `(1,0)`" where step 3.1 never
  specialises to `(1,0)`.
- **Boundary rows naming a step that does not treat the boundary** — a
  `zero`/`degenerate` row citing a step that only collates; a `one` row citing a
  step that never mentions `n = 1`; a `zero` row claiming a step handles `n = 0`
  where `1/n` is undefined.
- **`iff` rows marked `not_applicable` on genuine biconditionals.**
- **Prospective boilerplate as evidence** — **167** rows in one batch whose
  evidence is an *instruction* ("Step 1.1 **must** isolate…"), not a record of
  what the step does. Another batch had 84 such rows, six of them outright false.

## What you must make true

For every entry in your batch contract:

1. **Extend every truncated `quote` to include the clause its fact actually
   uses.** Quote exactly from the source item as it is on disk now. No changed
   domain, quantifier, hypothesis, direction or conclusion; no invented converse.
2. **Every boundary row is either honest `not_applicable` with a true reason, or
   anchored to the step that does the work.** Prospective wording ("must",
   "should", "will") is never evidence. If no step treats that boundary, the row
   is `not_applicable` and you say why — or it is a finding for Alpha.
3. **Set `iff-forward`/`iff-reverse` correctly on every biconditional Statement.**
   Named instances to check first: `thm-turan-exact-and-unique`,
   `cor-chromatic-number-extremal-density`,
   `cor-representable-presheaves-detect-isomorphism-of-objects`,
   `thm-universal-arrows-are-initial-or-terminal-in-comma-categories`.
4. **Every step in the input map exists in the current text and is covered once.**

## Verify

```
node tools/proof-contract.mjs research/frontier-11-batch-2.proof-contracts.json --strict
```

A green run does **not** mean you are done — it is the gate that missed all of
this. You are done when each row would survive a skeptical reader who opens the
cited source and the cited step.

## Report

List every row you changed and the defect class it fell in; every row you set to
`not_applicable` and the true reason; **every row you could not make true without
editing an item, quoted, as a finding for Alpha**; and any blocker.
**Your report will be independently verified — it will not be accepted on your
own say-so, because you wrote these rows in the first place.**


---

# This dispatch

# frontier-11, batch 2 — contract fidelity, ARTIFACT-ONLY

You are **Beta-frontier-11-2**. Edit only
`research/frontier-11-batch-2.proof-contracts.json` and append to
`research/frontier-11-batch-2.notes.md`.

**No item file may be touched.** Alpha full ruling, including the specific
defect instances found in your batch, is `research/frontier-11-alpha-step6.md`
section 6 — read it before you start.

The eight read-only refuter reports that found these defects are in
`research/frontier-11-refuters/` — open the ones covering your pairs.

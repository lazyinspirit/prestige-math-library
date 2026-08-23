# Frontier-17 read-only refutation — risk-review corroboration, surfaces

You are corroborating (or refuting) two Alpha `risk_review` dispositions already
written to disk. Alpha has completed its own read; your job is an independent
adversarial read, not a summary of Alpha's.

## Items — both mandatory, read in full

1. `items/ex-orientation-reversal-preserves-area-and-negates-flux.md`
   **[high risk; `provenance.statement: ai-generated`]**
2. `items/fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas.md`
   **[high risk; a false-statement item]**

Both contract entries are in
`research/frontier-17-batch-4.proof-contracts.json`. Also read, in full, every
item named in each one's `deps` before alleging any cited fact is too weak.

Both were repaired at step 8 under a `confirmed_fatal` judge adjudication, so
the text you are reading is new. The `risk_review` block in each contract entry
records what Alpha checked — read it AFTER forming your own view.

## What to test

**`ex-orientation-reversal-preserves-area-and-negates-flux`** has an
**AI-generated Statement**, so test the Statement itself, not only the proof.
Recompute both cross products from the coordinate formula in
`def-cross-product-in-r3` — do not accept the item's values. Recompute both
areas and both fluxes for $F=(0,0,1)$. Then ask whether the two maps really are
admissible patches under
`def-admissible-regular-parametrized-surface-patch`: check the parameter region
condition, the $C^1$-on-a-neighbourhood condition, the nonvanishing cross
product and the injectivity condition, and say whether the `[L2]` line's partial
restatement leaves a condition unverified that actually fails. Check
$\det Dh=-1$ and that `[L1]`'s orientation-reversing case is the one invoked.

**`fs-surface-area-is-the-supremum-of-inscribed-polyhedral-areas`** is a
refutation, so the failure mode is refuting a strawman. Test:
- Are the two sides compared the *same* surface? `[L1]` is about a cylinder of
  radius $r$ and height $H$; `[L2]` is applied to a surface of revolution of a
  constant profile. Confirm or deny that these are the same lateral cylinder.
- Does `[L2]`'s inlined hypothesis list faithfully reproduce the hypotheses of
  the cited corollary (follow it through to
  `thm-scalar-surface-integrals-on-a-surface-of-revolution`), and does the
  constant profile on $[0,H]$ satisfy them?
- Does unboundedness above genuinely contradict the finite value $2\pi rH$, and
  does `[L1]` really supply unboundedness rather than merely non-convergence?
- Does the refuted Statement as quoted match what the argument refutes?

Check every `[F#]`/`[L#]` against the cited item's actual text on disk before
alleging it is too weak, and check each title against what its proof delivers.

## Output

Finding ids `RR-SURF-1`, `RR-SURF-2`, … Each: item id, exact location, what is
wrong, the quoted dependency text or an explicit counterexample, and `fatal` or
`nonfatal`. Fatal first. Accept items explicitly where no specific defect
exists — "no defect in these items, here is what I checked" is the expected
result and a valuable one. Do not manufacture findings. State explicitly
whether you corroborate or contradict each `risk_review`.

Finish with a coverage statement: read in full / sampled / could not check.

Read-only is absolute: do not edit, patch, create or delete any repository file,
and never apply a fix. Alpha is the sole adjudicator.

**NO PERMISSION PROMPTS OF ANY KIND**, including for any segment of a compound
command. If an indispensable read has no escalation-free form, report that exact
blocker instead of prompting.

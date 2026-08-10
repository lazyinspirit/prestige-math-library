# This dispatch — independent spine audit, run `freegroups-1`

Repo: `/root/Projects/prestige-math-library`. You are an **independent reader**.
You authored none of this content.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Pass
> `dangerouslyDisableSandbox: true` on every Bash call; never ask the owner to
> approve a command. Report a blocker instead of prompting.

## Why you exist

`level-coverage --verify-current-context` requires a current independent
`spine-audit` receipt for the proof-bearing items among the **100 largest
transitive dependency cones**. These are the highest-fan-out proofs in the
library: a defect in one of them is inherited by everything downstream, and no
other gate looks at them. The receipt lapses on a mathematical-content change.

The current scope is 59 items. I established two things from disk before
dispatching you, so your job is small and precise:

- **49 of the 59 already carry an attestation** from a prior receipt
  (`zfc`, `frontier-7/8/9`), and
- **zero of the 59 have changed** since those receipts — verified by diffing
  `items/` from the zfc receipt commit `84c52d13` to HEAD: 839 items changed
  repo-wide in that span, and **none of them is a spine item**.

So the 49 are carried on unchanged text. **Ten have never been attested by
anyone.** Those ten are your entire assignment.

## Your assignment


All are **published** ZFC-foundational results with very large consumer cones.
Read each one's full proof from disk, plus every item it cites.

For each: does every numbered step follow from an explicit Fact, an earlier
step, a stated hypothesis, or elementary logic? Does each `[F#]`/`[A#]`/`[L#]`
reproduce the cited Statement faithfully — same quantifiers, hypotheses,
direction, conclusion, no invented converse? **Open every cited item; do not
trust a restatement.** These are axiom-level results, so watch particularly for
a step that quietly assumes the axiom it is deriving, and for Separation or
Replacement used where the other is needed.

Apply the 30-second threshold: a gap a competent reader closes in 30 seconds is
nonfatal. Report it, do not escalate it.

## Write ONLY this

Fill `research/freegroups-1-spine-audit.json`. For each of your ten, set its
`attestations[]` entry `status` to `reviewed` (or `defect` if you find a real
one) and put your specific finding in `notes` — what you checked, not "looks
fine". **Leave the other 49 entries exactly as they are; I fill those myself
with their carry provenance.** Set `reviewer` to your model identity and role.

Do **not** edit any item, page, or other research file. If you find a fatal
defect in a published spine item, do **not** repair it — record it in `notes`,
state it plainly in your report, and stop. That is an owner decision, not yours.

## Report

Self-contained: what you read, what you verified, every defect with item and
step number and severity, and anything you could not check.

## YOUR ASSIGNMENT — spine reader A

Audit these 24 proofs in full. Another reader covers the rest; do not duplicate them.

lem-omega-smallest-inductive
thm-induction-principle
lem-nat-transitive-irreflexive
thm-recursion
thm-omega-is-peano-system
cor-nat-addition-well-defined
lem-nat-add-identity
lem-nat-add-successor-left
lem-nat-add-commutative
lem-nat-add-associative
lem-nat-add-cancellative
lem-nat-nonzero-is-successor
lem-nat-trichotomy
thm-nat-linear-order
lem-nat-discrete
lem-nat-order-add-compatible
cor-nat-multiplication-well-defined
lem-nat-mult-identity
lem-nat-mult-distributive
lem-nat-mult-commutative
lem-nat-mult-associative
lem-nat-no-zero-divisors
lem-nat-order-mult-compatible
lem-int-add-well-defined
lem-int-mul-well-defined
These are published, high-fan-out proofs. Ten others were read by a first
reader; you are covering the remainder so this receipt attests its whole
scope by a CURRENT reading rather than by carrying a prior one.

Fill ONLY your own entries in `research/freegroups-1-spine-audit.json`:
set `status` to `read` (or `repaired` if you repair, which for a published
spine item you must NOT do — record and report instead), and put your
specific finding in `notes`. Leave every other entry untouched.

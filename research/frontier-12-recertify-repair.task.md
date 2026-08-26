## Certify Alpha's published-dependency repair — independent, cross-family

You are a **GPT 5.6 Sol Step-6 reader**. `CLAUDE.md` says a Beta's repair is
certified by Alpha and **Alpha's repair is certified by a Step-6 reader** — that
is you. You did not author this repair and you are not the model that raised the
objection.

**Why you are being asked, and what went wrong before.** The orchestrator first
dispatched a `certifier` role using **GPT 5.6 Terra**. Terra is also one of the
two judge lanes, and it declined to certify
while citing **its own ledger row** as support. That is self-agreement, not
independent corroboration. The cross-family lane, DeepSeek V4 Pro, **passed** the
same text. Your read is the one that settles it.

### The item

`items/ex-rational-function-field-order.md` — `status: published`, live content.

Read, in order:

1. `research/frontier-12-published-dependency-repairs.md` §R1 — the repair record.
2. `research/frontier-12-alpha-step9.md` — the fatal adjudication.
3. `research/frontier-12-alpha-step9b.md` §§1–3 — Alpha's refutation of the
   follow-up objection.
4. The item itself, and every id in its `deps`.

### The two questions

**(a) Is the `[L2]` repair sound?** The published Fact asserted four propositions
and cited three items stating none of them, and one conjunct — *eventual sign =
sign of the leading coefficient* — existed nowhere in the library as a
proposition. Alpha re-cited every clause and converted the eventual-sign claim
from a Fact into a proved step with an explicit threshold. **Read that arithmetic
line by line.** It is new mathematics on a published page.

**(b) Is Terra's step-3.1 objection right or wrong?** Terra says the
leading-coefficient order test is undefined when the two rational functions are
equal, because their difference has zero numerator. Alpha rules this
`confirmed_nonfatal` on two grounds, both of which you must check yourself:

- **Step 3.1 is not new text.** Alpha says it is *byte-identical* to the
  published step 2.1 and the repair only renumbered it. Verify that with `git`.
- **The equality case is already excluded**, decisively by `def-ordered-field`
  clause **(O1)** — *"For each x ∈ F, exactly one of the following holds: x ∈ P,
  or x = 0, or −x ∈ P"* — which the item already cites through `[L1]` and `[L4]`.
  Alpha also names P's `f ≠ 0` clause, step 2.1's "For nonzero p, q", and `[L2]`'s
  definition of `lc` for nonzero `f` only. **Confirm no path reaches `lc(0)`.**

### One thing you must NOT treat as a defect

The repair cites `cor-rational-function-field-as-a-fraction-field`, which is
`status: draft`. **The entire level is draft** — 454 items awaiting the owner's
step-10 publish. `depsource` classifies 826 such `draft-page` targets. This
resolves when the owner publishes, and is not a reason to decline.

### If you certify

Write into the item's `verification` block:

```yaml
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-13
    scope: published-dependency-repair
    delegated_by: owner
```

### If you do not

Do not stamp. Say precisely which of (a) or (b) fails and why, with the text. If
Terra is right and Alpha is wrong, say so plainly — that is exactly what an
independent read is for.

Report your verdict and evidence.

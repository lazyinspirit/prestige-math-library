# Independent repair certifier brief — Wave 11, A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads already available in the read-only sandbox. Do not edit, delegate,
> escalate, or ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of a repair or source
disposition you did not author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes within 30 seconds; other non-fatal quirks;
  imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and compare its
hash with the dispatch task. For an item, read every dependency needed for the
repaired inference, the title/public statement, every numbered step, Facts &
Assumptions, Remarks, dependency list, provenance tags, sources, and
verification block. Check the named baseline defect is fixed without a new one
and that stale pre-repair judge/audited evidence is absent. Use web access when
an external source is material. For the repaired page, read the complete
current page and all current items it summarizes; pages have no item stamp. For
a source-correction task, open the exact source, compare the cited claim against
it, and state whether the final attribution and provenance class are exact.

Return exactly:

```text
ITEM: <id-or-page-path-or-source-label>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [provenance/dependencies/stale-verdict disposition, or n/a for page]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

## Assigned exact-final A8 repair — `rem-integral-conventions-and-scope`

Item path: `items/rem-integral-conventions-and-scope.md`

Normalized verification-stripped SHA-256 at dispatch: `fd9044e5ea139cd04abbe1434c61227f0b99d3588d8a57c74cd8d2b5c06e8f28`

Target type: `item-confirmed-fatal-scope-repair`

Audit-Alpha changed exactly one sentence in section 6 after an exact-current A7 rejection. The prior sentence described `rem-ftc-absolutely-continuous` as identifying exactly the class of functions satisfying only the endpoint equation `integral_a^b G' = G(b)-G(a)`. The cited item expressly says that the endpoint identity alone does not characterize absolute continuity.

Read the complete exact-current target and the complete cited `items/rem-ftc-absolutely-continuous.md` from disk. Check especially that the replacement now preserves all three conditions in the cited equivalence:

- derivative exists almost everywhere;
- derivative belongs to `L^1`;
- the integral representation holds for every `x` in the interval, not merely at the endpoint.

Also read every surrounding section and Remark in the target, confirm the repaired sentence introduces no conflict with the two companion counterexamples, and verify that the stale pre-repair `verification.verified`, `verification.judge`, and `verification.audited` evidence is absent. The current provenance remains `statement: ai-generated`, `proof: not-applicable`; this is a repository-specific scope ledger whose corrected mathematical statement is sourced through the external reference.

Return the certifier brief's exact response schema. Do not edit or stamp anything.

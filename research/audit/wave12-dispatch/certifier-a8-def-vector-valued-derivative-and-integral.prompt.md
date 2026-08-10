# Independent repair certifier brief — Wave 12, A8

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30).** Use only non-mutating
> reads available in the read-only sandbox. Do not edit, delegate, escalate, or
> ask for shell or edit permission.

You are **GPT 5.6 Terra** at `xhigh` effort with a 1,000,000-token context
window. You are an independent, read-only certifier of an A8 fatal repair you
did not author.

## Binding triage

- **Non-negotiable:** mathematical accuracy, logical validity, correct citation,
  and a well-typed public claim at every stated boundary.
- **Explicitly acceptable, spend no effort:** minor citation-inventory quirks;
  logical gaps a competent reader closes within 30 seconds; other nonfatal
  quirks; imperfection at the level of the letter.

Read the assigned target's exact current final text from disk and independently
compute its verification-stripped normalized hash with `tools/item-hash.mjs`.
Read the complete target and every dependency needed for the repaired
inference, including the public statement/definition, Facts & Assumptions,
every numbered step, Remarks, dependency list, provenance, sources, and
verification block. Check that the named defect is fixed by the smallest
correction, that no new fatal defect was introduced, that all current consumers
remain licensed where the task names them, and that stale pre-repair
`verified`, `judge`, and `audited` evidence is absent.

Return exactly:

```text
ITEM: <id>
VERDICT: CERTIFIED | REFUSED | BLOCKED
CURRENT-TEXT: READ
MATHEMATICS: [concise evidence]
CITATIONS: [concise evidence]
METADATA: [hash/provenance/dependencies/stale-verdict disposition]
FINDINGS: NONE | [fatal defect or concrete blocker]
```

Do not suggest optional polishing and do not write a verification stamp.


---

# This dispatch

# Wave 12 A8 exact-final certification

Target: `items/def-vector-valued-derivative-and-integral.md`

Verification-stripped normalized SHA-256: `41ce0e22244d94c3f826b55ab7a5da07eb104dd2132f7809633a4d59599bd908`

The A7 rejection correctly observed that the former restriction clause said an
integrable vector-valued function on `[a,b]`, with `a<b`, was integrable on
"every closed subinterval". The only published vector integrability notion and
the cited scalar restriction lemma require a nondegenerate interval. A8 changed
only that clause to `a <= c < d <= b` and called the interval nondegenerate.

Independently verify the full exact-current item, especially
`def-darboux-integral`, `lem-integrability-on-a-subinterval`,
`def-oriented-integral`, and the distinction between integrability on `c<d`
and merely assigning an oriented equal-limit integral value. Check that the
derivative half and all other integral clauses remain exact. The complete
current 62-item public consumer cone was read by Alpha; its uses either concern
the derivative half or already instantiate nondegenerate intervals, so no
consumer was edited.

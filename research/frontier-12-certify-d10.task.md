## Certify the D10 wiring of two PUBLISHED items

The orchestrator edited two **published** items. Under the standing rule that
**no author certifies its own repair**, you certify them. You did not write these
edits and you are the independent reader for them.

### What was done, and why

Decision **D10** of run `frontier-11` recorded that two published items assume a
construction the library had never built. Both open with "the field of fractions
of the polynomial ring ℝ[t]". Run `frontier-12` built that construction at order
53.2, `the-field-of-fractions-and-localisation`, and this edit connects them.

The two items are wired **asymmetrically**, and the asymmetry is forced by plan
order:

| item | homed on | order | wiring |
|---|---|---|---|
| `cex-ordered-field-not-archimedean` | `foundations-of-the-real-numbers` | 9 | **forward reference** — target 53.2 is later |
| `ex-rational-function-field-order` | `equivalent-forms-of-completeness-examples` | 126 | **ordinary `deps`** — target 53.2 is earlier |

Both cite `cor-rational-function-field-as-a-fraction-field`.

### What you must check, from disk

1. **The mathematics is unchanged.** These edits should add a citation and change
   nothing else. Diff the intent: does either item now assert something it did
   not assert before? The counterexample must still construct its own positive
   cone `P` and own its ordering — the new page supplies the *field*, not the
   order.
2. **The cited target actually says what the citing text needs.** Open
   `cor-rational-function-field-as-a-fraction-field` on disk. Does it establish
   `ℝ(t) = Frac(ℝ[t])`? If it does not, this wiring is wrong and you must say so.
3. **The forward reference is legal.** `fwdcheck` passes, but confirm the
   reasoning: the citation sits in `Given:`, which is load-bearing, and that is
   permitted only because the item is `kind: counterexample` — a consequence
   kind. On a definition or theorem it would be `forward-on-spine`.
4. **The dep edge is legal.** 53.2 precedes 126, and
   `equivalent-forms-of-completeness-examples` now declares
   `the-field-of-fractions-and-localisation` in its `requires`. Confirm that is
   the minimal correct change and introduces no cycle.
5. **The stale stamps were correctly removed.** Both items previously carried
   `verification.verified` from a published-audit that certified text which has
   now changed. Leaving those would have been a false attestation.

### If it is correct

Write, in each item's `verification` block:

```yaml
  verified:
    model: <your model id>
    verdict: certify
    date: 2026-08-13
    scope: published-dependency-repair
    delegated_by: owner
```

That is the delegated public gate `depcheck` recognises. `depcheck` currently
**fails** with `published-unaudited` on both items, which is correct and is the
condition you are resolving.

### If it is NOT correct

Do not stamp. Say exactly what is wrong. A wrong citation on a published page is
worse than an uncited assumption, because it looks discharged.

### Constraints

- Edit **only** the `verification` blocks of those two items, and only if you
  certify. Change no mathematics.
- Both items are being rejudged on both lanes in parallel; your certification is
  independent of that and concerns the citation's correctness.
- Report your verdict, the evidence, and anything you could not check.

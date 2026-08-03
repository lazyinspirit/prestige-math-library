# Wave 2 — A9 scope-denial re-grep

Run 2026-08-04 by the orchestrator after A8 closed: all three adjudication
rounds complete, the sole round-3 repair (`rem-choice-ledger`) passed both
targeted judge lanes on a matching frozen context, and the 19 paired-pass stamps
were applied. This is a prose-scope sweep only. It neither reopens A8 nor
changes mathematical content, and no A9 repair is applied.

## Scope

The repaired-file universe is the 266 current `items/` and `library/` paths
changed from the frozen wave-2 baseline `720c747`:

```sh
git diff --name-only 720c747 -- items library | xargs -r node tools/prosecheck.mjs
```

Result: **266 files checked, 0 positional-contradiction errors, 53 heuristic
warnings** (29 `count-of-this-page`, 14 `library-scope-denial`, 10
`count-in-prose`). The absence of errors confirms no repaired file makes a
page-order claim contradicted by the current plan specification.

## A10 queue from the re-grep

### Scope-denial candidates (14 across 11 files) — non-blocking

`cex-empty-set-has-no-sup`, `cex-unbounded-set-has-no-sup`, `def-ordinal`,
`def-ultrafilter`, `def-well-order`, `fs-every-set-has-sup`,
`fs-every-set-well-orderable-in-zf`, `fs-every-ultrafilter-principal`,
`rem-choice-ledger`, `rem-sup-conventions`, `thm-ultrafilter-lemma`.

These are corpus-scoped availability statements of the class the heuristic is
designed to surface, and several are load-bearing for reader honesty — they
explain why a proof takes the route it does, particularly around which choice
principle is available at that point in the reading order. They are flagged, not
defects.

**They are also exactly the class this wave proved dangerous.** `rem-choice-ledger`
reached **five** independent touches, each finding a *different* false claim
about the library's own contents, and `rem-constructions-this-page-stops-short-of`
reached three. A claim about what the library does or does not contain is true
when written and silently falsified by later work, and no mechanical gate reads
it. This is the `published-claim-decay` class; a future wave should re-check
these eleven rather than rediscover them.

### Count-prose candidates (29 + 10) — heuristic, non-blocking

Inspected hits are ordinary English of the form "one of them", "both of these",
"neither". None asserts a count of the page's own contents in the sense SCHEMA §6
forbids. No action proposed.

The A8 ledger, targeted paired passes, adjudications, and repair stamps remain
untouched by this step.

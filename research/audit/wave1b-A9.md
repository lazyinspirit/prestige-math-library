# Wave 1b — A9 scope-denial re-grep

Run 2026-08-03 by the orchestrator after A8 closed: both A8 rounds adjudicated,
the sole round-2 repair (`ex-hamel-basis-of-r-over-q`) passed both targeted
judge lanes, and the 15 paired-pass stamps were applied. This is a prose-scope
sweep only. It neither reopens A8 nor changes mathematical content, and no A9
repair is applied.

## Scope

The repaired-file universe is the 185 current `items/` and `library/` paths
changed from the frozen Wave-1b baseline
`8289fc0498ec98108dfc7e49dc85b3d4dee4adda`:

```sh
git diff --name-only 8289fc0498ec98108dfc7e49dc85b3d4dee4adda -- items library
```

The full three-class prose gate ran over that exact path list:

```sh
git diff --name-only 8289fc0498ec98108dfc7e49dc85b3d4dee4adda -- items library \
  | xargs -r node tools/prosecheck.mjs --warnings
```

Result: **185 files checked, 0 positional-contradiction errors, 50 heuristic
warnings** (21 `count-in-prose`, 21 `count-of-this-page`, 8
`library-scope-denial`). The absence of errors confirms no repaired file makes a
page-order claim contradicted by the current plan specification.

## A10 queue from the re-grep

### Scope-denial candidates (8) — non-blocking, for owner disposition

- `cor-every-vector-space-has-a-basis` — "this library does not prove it, does
  not use it, and nothing here rests on it".
- `def-metrizable-space` — "not a second notion alongside the order-native
  development built earlier in this library".
- `fs-continuous-bijection-is-a-homeomorphism` — "Neither compactness nor the
  Hausdorff property is defined in this library".
- `fs-every-fermat-number-is-prime` — "not available at this point in the
  library".
- `fs-union-of-two-independent-sets-is-independent` — "This library does not
  record the general statement as a separate item".
- `lem-sequential-closure-inside-closure` — "this library never writes … for a
  sequence in a general topological space".
- `rem-separation-axiom-conventions` — "This library does not define it".
- `thm-canonical-prime-factorisation` — "not available at this point in the
  library".

These are corpus-scoped availability statements of the class the heuristic is
designed to surface. Each is currently true and several are load-bearing for
reader honesty (they explain why a proof takes the route it does). They are
flagged, not defects, and they are exactly the class that **published-claim
decay** can falsify later: a claim that the library "does not define compactness"
becomes false the day a compactness page ships. Recorded here so a future wave
can re-check them rather than rediscover them.

### Count-prose candidates (21+21) — heuristic, non-blocking

Every inspected hit is ordinary English of the form "one of them", "all of
them", "none of them" — `cor-a-linear-subspace-has-a-complement`,
`def-archimedean-field`, `def-field`, `def-prime`, `ex-kuratowski-fourteen-sets`
(3), `ex-finite-choice-by-induction` (2), `thm-closure-characterisation-top`,
`thm-continuity-characterisations-top`, `thm-metric-regularity-hierarchy` and
the rest. None asserts a count of the page's own contents in the sense SCHEMA §6
forbids. No action proposed.

## Published-claim decay observed in passing

The workflow asks the reading actors to flag claims that were true when written
and that later levels falsify. Wave 1b's material instance is recorded in the
A10 owner queue rather than here, because it is a mathematical finding and not a
prose one: `thm-metric-sequential-closure` carries an unqualified title and
Statement while its proof spends Countable Choice, with **21 downstream
consumers**. Alpha found it at A8 while tracing a comparison, confirmed no Wave
1b repair rests on the unqualified direction, restored the earlier-wave page
after a local experiment, and queued it rather than opening a cascade outside an
83-item scope.

The A8 ledger, targeted paired passes, adjudications, and repair stamps remain
untouched by this step.

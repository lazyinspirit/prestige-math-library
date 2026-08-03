# Wave 1 — A9 scope-denial re-grep

Run 2026-08-03 by the orchestrator after A8's sole confirmed-fatal repair,
`fs-inclusion-and-exclusion-for-three-sets-without-the-triple-term`, was passed
by both current DeepSeek V4 Pro and GPT 5.6 Terra targeted rejudges. This is a
prose-scope sweep only: it neither reopens A8 nor changes mathematical content.

## Scope

The repaired-file universe is the 124 current `items/` and `library/` paths
changed from the frozen Wave-1 baseline `e1fdc9796394bc9418784f74555950d3c68ed712`:

```sh
git diff --name-only e1fdc9796394bc9418784f74555950d3c68ed712 -- items library
```

The full three-class prose gate ran over that exact path list:

```sh
git diff --name-only e1fdc9796394bc9418784f74555950d3c68ed712 -- items library | xargs -r node tools/prosecheck.mjs --warnings
```

Result: **124 files checked, 0 positional-contradiction errors, 16 heuristic
warnings** (5 `library-scope-denial`, 8 `count-of-this-page`, 3
`count-in-prose`). The absence of errors confirms no repaired file makes a
page-order claim contradicted by the current plan specification.

## A10 queue from the re-grep

No A9 repair is applied. The five scope candidates are retained for the single
owner A10 review:

- `ex-russells-socks` — two corpus-wide availability claims about finiteness
  vocabulary and a claimed absence of other examples.
- `fs-zorn-provable-in-zf` — two “not proved in this library” formulations.
- `lem-finite-choice` — one corpus-wide availability claim about finiteness.

The eleven count-prose heuristic candidates are likewise non-blocking and join
that queue:

- `cex-a-sieve-computation-that-omits-a-term`;
  `cex-zorn-hypothesis-fails`; `def-partial-order`;
  `ex-finite-choice-by-induction` (two hits);
  `ex-russells-socks`; `ex-the-hat-check-ratio-as-a-quotient-of-counts`;
  `lem-ring-elementary-consequences`;
  `lem-ring-homomorphism-of-fields-is-a-field-homomorphism` (two hits); and
  `thm-inclusion-exclusion`.

The A8 ledger, targeted paired passes, adjudications, and repair stamps remain
untouched. These candidates are for owner disposition at A10, not an excuse to
restart A8.

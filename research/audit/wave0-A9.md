# Wave 0 — A9 scope-denial re-grep

Run 2026-08-02 by the orchestrator after the owner confirmed that A8 is
complete and that A9 is next. This is a prose-scope sweep only: it neither
reopens A8 nor changes mathematical content.

## Scope

The repaired-file universe was the 279 current `items/` and `library/` paths
changed from the wave baseline `87c4025` through `e1fdc97`:

```sh
git diff --name-only 87c4025 HEAD -- items library
```

The full three-class prose gate was run over that exact path list:

```sh
xargs -r node tools/prosecheck.mjs --warnings < /tmp/wave0-a9-repaired-paths.txt
```

Result: **279 files checked, 0 positional-contradiction errors, 21 heuristic
warnings** (7 `library-scope-denial`, 8 `count-of-this-page`, 6
`count-in-prose`). The absence of errors confirms no repaired file makes a
page-order claim contradicted by the current plan specification.

## A10 queue from the re-grep

The seven scope warnings are all prose claims about the corpus rather than a
page's declared inputs. They are recorded, not silently rewritten, so their
wording and intent can be reviewed at the wave's single owner pause:

- `cex-subset-closed-under-scaling-but-not-addition` — dimension said to be
  unavailable "in the library".
- `cex-subset-closed-under-the-operation-not-a-subgroup` — finite-subset result
  said to be unproved "in the library".
- `ex-sum-and-intersection-in-f-three` — dimension said to be unavailable "in
  the library".
- `fs-closed-ball-is-the-closure-of-the-open-ball` — Euclidean segment argument
  said to be unproved "in this library".
- `lem-metric-nonnegativity` — quasimetric said to be untreated "by this
  library".
- `rem-metric-axiom-conventions` — semimetric said to be unused "by this
  library".
- `thm-metric-sequential-closure` — ZF-only question said to be unsettled "by
  this library".

The fourteen count warnings are also non-blocking heuristic candidates, in:
`def-equivalence-relation`, `def-group-homomorphism` (two hits),
`def-inductive-set`, `def-metric-space`, `def-order-in-a-group`,
`ex-bounded-remetrisation-of-r`, `ex-p-metrics-on-rn`,
`ex-symmetric-group-on-three-letters`, `lem-cut-archimedean`,
`rem-counting-conventions-and-scope`, `rem-metric-axiom-conventions`,
`thm-metric-equivalence-hierarchy`, and `thm-metric-sequential-closure`.

No repair is applied at A9. The complete A8 record remains untouched; these
prose candidates join the A10 rundown, where the owner can decide whether to
reword, retain with a scoped justification, or defer.

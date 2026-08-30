# frontier-25 — Alpha group `d` — Step 3 scaffold recheck

Group `d` covers batches `10` and `11`. I re-read
`research/frontier-25-alpha-d-step3-scaffold-review.md`, the `## Step-3 fix pass`
sections in `research/frontier-25-batch-10.notes.md` and
`research/frontier-25-batch-11.notes.md`, the live manifests
`research/frontier-25-batch-{10,11}.pages.json`, the restored
`research/frontier-25-batch-11.coverage.json`, and the controlling plan/design
material in `research/plan-spec.json` and
`research/plan-computability-theory-track.md` on Sunday, August 30, 2026.

## Scope ledger

`node tools/scope-decisions.mjs refresh --run frontier-25 --group d` surfaced
four new pending rows after batch `11` restored the Turing primary source to
coverage. They were all already justified by the current TC-9 route and are now
resolved as `stands` in `research/frontier-25-alpha-d-scope-decisions.json`.

`node tools/scope-decisions.mjs check --run frontier-25 --group d` now passes:
`scope-decisions: 17 current decline(s), 0 error(s)`.

## Dispositions

| finding | page | disposition |
|---|---|---|
| `D10-1` | `pushdown-automata-and-context-free-languages` | **closed** |
| `D11-1` | `turing-machines-configurations-and-computation` | **closed** |

### `D10-1` — closed

The fix-pass notes are accurate on the current bytes. The live
`research/plan-spec.json` and `research/frontier-25-batch-10.pages.json` both
list `deterministic-finite-automata-and-regular-languages` in page `593`'s
`requires`, so the Step-3 manifest alignment repair stands. The notes also now
correctly treat the omission of
`prop-cfls-are-closed-under-intersection-with-regular-languages` as a route
choice inside the repaired scaffold rather than as an unresolved closure defect.
No further manifest or coverage repair is owed for batch `10`.

### `D11-1` — closed

The manifest repair stands on the current bytes and the beta pushback is
correctly limited to one evidence sentence. In
`research/frontier-25-batch-11.pages.json`,
`lem-acceptance-is-configuration-reachability` still depends on
`def-directed-walk-trail-path-cycle-and-strong-connectivity`, whose home is the
earlier page `eulerian-and-hamiltonian-graphs`, so retaining that page in
page `597`'s manifest is still necessary for local dependency closure. The
notes are also right that this is not a pure spec-alignment repair, because the
current `research/plan-spec.json` still lists only
`formal-languages-encodings-and-decision-problems` and
`graphs-walks-and-connectivity` in page `597`'s direct `requires`.

The additional batch-`11` source repair also stands: the current
`research/frontier-25-batch-11.coverage.json` again includes Turing's 1936
paper with harvested rows and `fetch_verified` metadata marked
`verified_via: web-open`.

## Checks on current bytes

- `node tools/scope-decisions.mjs check --run frontier-25 --group d`
  -> `scope-decisions: 17 current decline(s), 0 error(s)`
- `node tools/coverage-checklist.mjs research/frontier-25-batch-10.coverage.json research/frontier-25-batch-11.coverage.json --require-destination`
  -> `coverage-checklist: 3 page(s), 144 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-25-batch-10.pages.json research/frontier-25-batch-11.pages.json`
  -> `content-policy: 57 scoped item(s), 0 error(s), 0 warning(s)`
- focused local closure audit over the current group-`d` manifests
  -> `0` missing prerequisite homes, `0` forward-order deps, `0` foreign examples-page deps
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; final lines report `OK` with only repository-wide
     `redundant-prereq` advisories

## Verdicts

The current bytes still support the existing machine verdict file
`research/frontier-25-alpha-d-step3-verdicts.json` unchanged:

- `nondeterministic-finite-automata-and-subset-construction` — `sufficient`
- `pushdown-automata-and-context-free-languages` — `sufficient`
- `turing-machines-configurations-and-computation` — `sufficient`

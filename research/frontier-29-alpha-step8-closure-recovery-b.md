# frontier-29 — Step 8 closure recovery, group b

## Summary

The two current group-b rejection tuples were adjudicated `confirmed_fatal`.
Both repairs are confined to group-b items. Two exact adjudication rows and two
matching defect-ledger rows were appended. No other group's item was changed,
no cross-group alert was raised, and there is no group-b blocker.

## Evidence consulted

- `def-principal-open-classical-variety`,
  `thm-coordinate-ring-principal-open`, and
  `cor-zariski-topology-cofinite-on-affine-line` all bind the classical affine
  discussion to an algebraically closed base field. Without that hypothesis,
  the punctured line is finite and closed when the field is finite.
- `lem-parameter-power-series-subring-makes-ring-finite` proves only that the
  target is finite over the image of the displayed map. The following item,
  `lem-parameter-power-series-map-injective-by-dimension`, separately proves
  injectivity and only then licenses identifying the source power-series ring
  with its image.

No external source lookup was needed: the exact objections are settled by the
current item texts and their opened dependencies.

## Exact rows handled

| item | context SHA-256 | pre-edit item SHA-256 | outcome | defect type |
|---|---|---|---|---|
| `ex-punctured-affine-line-not-affine-closed-subset` | `26c9f735fb868ee9f5b2c5ee76ac2ff7abc326d8ab70deece8d3fc2b88052d62` | `a9f3d0b5497f99f52e745e65c92f6b665b3b189a1e2e08ab5e81ec92944ca6cc` | `confirmed_fatal` | `dependency_citation` |
| `lem-parameter-power-series-subring-makes-ring-finite` | `f05f1d902932ec1f2d63886154716a448e21f0b7e9e4eb3868ecde423e8d91d2` | `e95b9e54971e7c072a30157a2720cae7d8ab5558c875281fe8c10cd4edf82efa` | `confirmed_fatal` | `logic` |

## Licensed repairs

1. `ex-punctured-affine-line-not-affine-closed-subset`: added the missing
   algebraically closed-field hypothesis before invoking the two qualified
   dependencies. Post-repair item SHA-256:
   `7b0c7302e7d72b5ea6d400ac5c33b04d1f8411fc03b1322cfc6d740e0636fedd`.
2. `lem-parameter-power-series-subring-makes-ring-finite`: narrowed the title,
   proof-technique line, and concluding step from an already identified
   power-series subring to the exact image of the parameter power-series map.
   The following lemma retains responsibility for injectivity. Post-repair
   item SHA-256:
   `9c5a138aa47eadcc9bf0804bbf6d4dc601cdebaff3f4230fe219c133ac6b6d31`.

The matching defect rows are `frontier-29-A8R1-b-001` and
`frontier-29-A8R1-b-002`.

## Rejudge and terminal targets

Both changed items require exact-current-context closure. The durable cycle
receipt already records the initial fatal context and the completed targeted
cycle for each item, reaching the two-context ceiling. This dispatch did not
initiate a third judge cycle; the engine owns the required final-adjudication
routing.

## Cross-group alerts and blockers

- Incoming alerts: none.
- Outgoing cross-group alerts: none.
- Blockers: none.

## Checks

- Focused precheck: the repaired proof-bearing lemma passed; the example has no
  proof-format section to precheck.
- Focused render check: both repaired files passed YAML, delimiter, KaTeX, and
  wikilink-in-math checks.
- Defect-ledger validation and exact fatal-to-row linkage: zero errors.
- Step-8 guard: all 126 whole-run changes were licensed; zero unlicensed
  changes.
- Step-8 scope check: seven groups and 755 items partitioned; 29 remaining
  open rejections were routed, with zero cross-group alerts requiring a
  disposition. Those other groups' rows were left untouched.

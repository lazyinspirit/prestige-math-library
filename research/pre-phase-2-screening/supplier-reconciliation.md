# Phase-2 supplier inventory reconciliation

Evidence date: 2026-09-23. The historical boundary is
`52bba95d9bd8ede09e96f4b024d634cca38b0100`; the current inventory is bound to
`b4e89d144da85dd4293511a4ac2cf56437a43a75`.

## Result

YAML-decoded item metadata gives 15,014 published and 402 draft items at the
boundary, and 20,042 published and 54 draft items currently. Every one of the
15,014 historically published IDs still exists and remains published. Thus
5,028 current items became published after the boundary: 4,680 were absent at
the boundary and 348 were then draft.

The 148-pair build manifest contributes 296 current published page carriers.
Their items, plus separately homed items whose `pipeline_run` starts with
`phase-2-`, initially produced 4,708 rows: 4,659 post-boundary publications and
49 historically published context items. This omitted 369 post-boundary
publications. The reconciled catalogue contains 5,077 rows: all 5,028
post-boundary publications plus the 49 explicitly labelled context items.

## The 369 off-manifest publications

- Commit `686727b07656c84ed0026af5128fd34088a20206`,
  `chore(phase-2-next-17): engine close-out — commit the run's working tree`,
  changed 345 boundary-draft items to published outside the 148-pair/page and
  `pipeline_run` selection. They are homed on computability-theory and
  algebraic-geometry pages; six have two homes.
- Commit `9bce1f7ba7226fa27e88ba2955a8de7d16b3e5f2`,
  `Publish audited phase-2-next-17 frontier`, published 21 newly added
  lie-theory items on `affine-lie-algebras-and-loop-central-extensions`, a
  run-scope page absent from the final 148-pair manifest.
- Commit `34c0c684f70b44da17483d3c4c6e4fe1cc91b8ef`,
  `Complete Step 5 for phase-2-remaining-27`, published three boundary-draft
  recorded remarks on `deferred-functional-analysis`:
  `rem-dugundji-extension-linear`, `rem-gerlits-nagy`, and
  `rem-nagata-theorem-cp`.

The last three have `proved_here: false`; they are publication-era catalogue
members but cannot serve as load-bearing proof prerequisites. Across the full
5,077-row catalogue, 16 items have `proved_here: false` and require the same
non-supplier flag.

## Extraction rules and pitfalls

Membership is the union of (a) current items carried by the manifest's 296
pages or attributed to a `phase-2-*` pipeline run and (b) every current
published item whose boundary status was not published. The second clause is
required to recover local additions, migrated scopes and status changes not
represented by the final manifest. The 49 boundary-published page items remain
labelled `preexisting_published_context`; they are not Phase-2-introduced
suppliers.

Status must be parsed as YAML. Current files use both `status: published`
(20,013 items) and `status: "published"` (29 items). A plain-line regex reports
4,999 post-boundary publications and silently loses the 29 quoted scalars; the
YAML-decoded count is 5,028.

Current `items/<id>.md` files are authoritative for title, kind, aliases,
dependency fields, publication state and mathematical text. Scope ledgers and
`research/<run>-batch-*.pages.json` preserve run/page identity and proposed
contracts, but they include reused items and superseded scopes and therefore
cannot establish supplier membership alone. Publication-readiness receipts
seal workflow state but do not enumerate suppliers.

For screening, retain the current file SHA-256 and the exact `## Statement` or
`## Definition` section hash. An empty Statement/Definition contract is normal
for examples, counterexamples, false statements and remarks and must not be
read as an empty mathematical interface. Also retain `proved_here`,
`forward_refs`, `external_refs`, aliases, and the complete `## Facts &
Assumptions` section. In particular, `deps` and `justified_by` alone do not
capture explicit choice assumptions or unlinked load-bearing facts.

The generated inventory is discovery evidence only. Search hits, page
co-location and dependency links do not establish a direct unmet prerequisite,
and an item absent from these signals is not cleared.

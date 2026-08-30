# Impact-receipt closure — `frontier-24`

Read `research/frontier-24-touches.json` and `research/frontier-24-impact.json`; use
the latest touch label as the `--to` endpoint for `impact-audit` from
`pre-author`. Review every `pending` consumer against the current changed
interface.

Set each pending receipt row to `still-licensed`, `repaired`, or
`not-load-bearing` with an item-specific note. A broken consumer is an in-scope
fatal repair with its ledger row and rejudge consequence; do not change already
resolved rows or create a touch snapshot.

Rerun the exact `impact-audit` command and report any unresolved consumer or
gate result in the dispatch result.

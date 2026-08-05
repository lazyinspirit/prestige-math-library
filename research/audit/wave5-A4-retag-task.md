# Wave 5, A4 — apply your batch's provenance retag to disk

You are the `wave5-real-analysis` Audit-Beta. Your A1/A2 determinations are
complete and correct in `research/audit/wave5-real-analysis.provenance.jsonl` —
all 31 scoped items have a ledger row with statement, proof, evidence and
rationale. **None of it reached the items.** Not one of the 31 carries a
`provenance:` block, so `content-policy --audit` reports 124 errors across your
batch and A4's gates are halted on it:

    31  provenance-statement-missing
    31  provenance-proof-missing
    31  audit-ledger-mismatch          (ledger says X, item carries nothing)
    31  audit-ledger-evidence-mismatch

The other three batches applied theirs — `apply-wave5-fs-retag.mjs`,
`apply-wave5-sep-retag.mjs`, `wave5-topology-countability.apply-retag.mjs` all
exist. No real-analysis equivalent was ever written. That is the whole defect:
the determination was done, the write was not.

## What to do

Write each item's `provenance.statement` and `provenance.proof` into its
frontmatter, taken from that item's ledger row — the ledger is the record of
record here, not something to re-derive. Match the existing batches' conventions;
read one of the three scripts above before writing yours.

**D5 applies: delete any legacy `authorship` key in the same edit.** Leaving both
is the `legacy-authorship-retained` error, and it is checked.

Do not re-open the determinations. If applying a row reveals that it is actually
wrong for the item on disk, that is a finding: report it, leave the row and the
item alone, and let Alpha adjudicate. Do not quietly change a determination to
make a gate pass.

## Scope

`items/` for your 31 scoped items only, plus your findings file. Not the ledger,
not another batch's items, not the contracts (a separate dispatch is already
handling those).

## Done means

Run and report verbatim:

    node -e '...'   # or however you verify, but SHOW the numbers
    node tools/tsx-run.mjs tools/precheck.mts        # clean
    node tools/depcheck.mjs                          # exit 0

and confirm `content-policy --audit` no longer reports any of the four codes
above for your batch. The orchestrator re-runs the full A4 gate table afterwards,
so a partial pass will surface there.

# Contract-detector adjudication, run `frontier-15`

A candidate detector failed the read-group join. Its output is, by its own
contract, "a candidate for a human read, not a verdict" — you are the read.

Reproduce the findings from the repo root:

```
node tools/boundary-audit.mjs research/frontier-15-batch-*.proof-contracts.json --fail-on-contradicted --fail-on-template
node tools/citation-fidelity.mjs research/frontier-15-proof-contracts.json --fail-on-missing-quote
node tools/gate-liveness.mjs --run frontier-15 --contracts research/frontier-15-proof-contracts.json --checklists research/frontier-15-batch-1.coverage.json,research/frontier-15-batch-2.coverage.json,research/frontier-15-batch-3.coverage.json,research/frontier-15-batch-4.coverage.json,research/frontier-15-batch-5.coverage.json,research/frontier-15-batch-6.coverage.json,research/frontier-15-batch-7.coverage.json --min-checks 1
```

## If gate-liveness reports finite-smoke VACUOUS (0 checks)

Zero smoke checks over a level with finite/combinatorial claims is
under-selection, not registry inapplicability, on THIS run: batch 2's Sylow
material fits `cyclic-subgroup-lagrange`, batch 1's unit groups likewise,
and batch 7's limit/product claims fit the poset-as-category checks
(QUALITY-CONTROLS §finite-smoke lists the registry). **Select the checks
that genuinely apply** — read the item, pick the registry check that probes
its claim, and add to that item's contract entry:

```json
"finite_smoke": [{ "check": "<registry name>", "asserts": "<exact excerpt
from the item connecting the test to its claim>", ... }]
```

per the schema in QUALITY-CONTROLS. Selective by design: an item with no
applicable bounded check gets none — never force a toy check onto an
analytic claim. A handful of well-chosen checks across the level is the
target, not coverage.

For EVERY candidate either tool prints, open the item and the contract row
and decide:

1. **The detector is right** — the row is a templated or false disposition,
   or the citation quote is genuinely missing/unfaithful. Fix it honestly:
   write the REAL disposition for that axis (what the item's text actually
   does with the case, citing the step that does it), or the faithful quote.
   If the ITEM's text itself is the defect, your step-6 repair licence is
   open — this is before the freeze.
2. **The detector is wrong** — a surface regex tripped on legitimate text
   (an fs- item whose Statement names a categorical predicate, say). Uphold
   the row ON THE RECORD: add to that contract row
   `"reviewed": {"upheld": true, "by": "<your lane label>", "reason": "…"}`
   — the reason at least 40 characters, about THAT row specifically, never a
   template. The detector reports upheld rows and stops failing on them.

## If risk-report reports risk-review-missing

Run it yourself:

```
node tools/risk-report.mjs research/frontier-15-proof-contracts.json --require-reviewed
```

Every named item is a high/critical-tier proof that risk-report routed to
Alpha review and no Alpha reviewed. Do the review NOW, per QUALITY-CONTROLS:
read the proof against its contract, probe the risk that earned the tier
(an AI-generated claim gets a counterexample search), and write the
`risk_review` disposition — `{status: "complete", reviewer, notes}` with
notes saying what you actually checked — into the owning batch's
`research/frontier-15-batch-<i>.proof-contracts.json` entry. Then re-merge
(the command below) and re-run risk-report until it exits 0.

**Write the disposition from your own verification, BEFORE dispatching or
waiting on any refuter.** The high-risk refuter rule is satisfied by a
refuter whose report corroborates a disposition already on disk; it is not
a precondition for writing one. Your session ends at your final message —
work you promise "once the refuter reports" never happens. The first lane
on this gate verified everything, wrote nothing, and exited saying it would
write later: exit 0, gate still red, a repair round spent for zero
artifacts. If your refuter has not returned by the time your own read is
complete, write the `risk_review` now, note the refuter as pending in your
report, and record its result file path so the next reader can check it.

Never batch-uphold; never weaken a rationale to pass a regex. Contract rows
live in the batch's `research/frontier-15-batch-<i>.proof-contracts.json` —
after edits, re-run the merge the join uses:

```
node tools/merge-proof-contracts.mjs --level frontier-15 \
  research/frontier-15-proof-contracts.json research/frontier-15-batch-*.proof-contracts.json
```

Exit when both commands at the top pass, or record exactly what you left and
why. Write `research/frontier-15-alpha-contract-audit.md`: per candidate,
the decision and the evidence. A confirmed real defect writes its
`research/defect-ledger.jsonl` row in the same act.

**No permission prompts of any kind**, including inside an `&&` chain.

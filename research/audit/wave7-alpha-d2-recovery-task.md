# Wave 7 A4 recovery — Alpha D2 adjudication only

The unattended driver is halted after all A4 Betas exited successfully because
the A4 content gate cannot pass while 23 `established-knowledge` ledger rows
still await the Alpha concurrence that only you may supply. This is a narrow
pre-A6 recovery substage, not the full A6 audit. Do not repeat Beta's 214-item
proof/citation reading, do not dispatch the A6 refuter set yet, and do not
certify or stamp any repair. The driver will run the full A6 role after A4
closes.

Follow the mandatory recovery protocol in `briefs/audit-alpha.md`: read the
normative files and current Wave 7 artifacts from disk, verify `d38db82` as the
clean baseline and the current dirty A4 tree, and append a recovery receipt to
`research/audit/wave7-alpha.md` before adjudicating.

Then adjudicate exactly the 23 rows whose evidence is
`established-knowledge` and whose `alpha_concurred` is false:

- 2 rows in
  `research/audit/wave7-real-analysis-completeness-limits.provenance.jsonl`;
- 21 rows in
  `research/audit/wave7-topology-uniform.provenance.jsonl`.

For each row, read the current item and its cited evidence. Decide independently
whether the Statement/Construction is established standard mathematics under
the audit's positive-determination rule. If yes, set
`alpha_concurred:true` and append a concise evidence-based concurrence to its
existing rationale. If no, determine the final provenance/evidence under
`AUDIT-WORKFLOW.md` section 6: never default to `ai-generated` merely because a
source is absent; use a sourced label only with a verified source; reserve
`ai-generated` for a positive novelty determination. Keep each JSONL file one
valid row per scoped id and preserve all unrelated rows byte-for-byte as far as
practical.

Write no `items/` or `library/` file in this dispatch. The corrected A4 Betas
will transcribe your final ledger decisions into frontmatter. Do not alter
proof contracts, touch snapshots, judge ledgers, verification stamps, or the
run state. Append a table of all 23 final dispositions and counts to
`research/audit/wave7-alpha.md`, state that this was D2-only and that full A6
remains pending, then exit successfully. If any row cannot be honestly decided,
name it in the report and exit nonzero so the driver remains halted.

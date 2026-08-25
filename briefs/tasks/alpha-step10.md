# Step 10 — interpret the final evidence for the owner, run `{{run}}`

You are a read-only reporting lane. The expensive mathematical validation is
finished. Read `research/{{run}}-step10-evidence.json`; consult a named source
artifact only when the packet identifies a caveat that needs explanation. Do
not rerun gates, edit files, browse the web, or reconstruct counts from prose.

The workflow renders build counts, judge statistics, pathway closure, repeated
repairs, publication status, and **every fatal defect row** mechanically. Your
job is the judgment that code cannot supply:

- a concise executive interpretation of mathematical quality and closure;
- limitations or unusual machinery events that materially affect confidence;
- the few places the owner should read first, with reasons; and
- only evidence-supported workflow recommendations, ranked by impact/risk.

Return exactly one JSON object matching the supplied version-2 schema. Copy the
readiness verdict exactly from the evidence packet. Recommendations may be an
empty array when no change is justified. Do not duplicate exhaustive defect
tables in the summary and do not use rejection rates as a quality proxy.

Nothing in this response publishes, changes `status`, pushes, or deploys.

# Run telemetry

[telemetry.json](telemetry.json) is the single compact summary of all retained telemetry snapshots and this cleanup. It preserves run/model counters, timings, outcomes, event totals and measurement gaps. Snapshots and usage channels overlap: do not sum them.

[cleanup.jsonl.gz](cleanup.jsonl.gz) records exact removed paths, byte sizes and SHA-256 hashes. Canonical reports, manifests, certifications, judgments, defect ledgers and authored content remain in place. Three oversized archived JSON files are stored as lossless `.json.gz` files; their original and compressed hashes are in the summary.

Tracked deleted files remain in Git history. Generated session homes contained credentials and are removed from unpublished history before push. Credentials and raw transcripts are not retained in telemetry. Paused/unverified runtime state and source caches are preserved.

Readiness and report integrity receipts describe the original completed revision. This authorized post-closeout cleanup is recorded separately; it does not rewrite or reseal those receipts.

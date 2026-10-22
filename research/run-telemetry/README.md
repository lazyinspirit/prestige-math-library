# Run telemetry

[telemetry.json](telemetry.json) is the single compact summary of all retained telemetry snapshots and this cleanup. It preserves run/model counters, timings, outcomes, event totals and measurement gaps. Snapshots and usage channels overlap: do not sum them.

[cleanup.jsonl.gz](cleanup.jsonl.gz) records exact removed paths and byte sizes, with SHA-256 hashes where payloads were read. The October 18 post-closeout runtime/log cleanup used filename/stat metadata only and records null payload hashes. Canonical reports, manifests, certifications, judgments, defect ledgers and authored content remain in place. Oversized archived JSON files are stored as lossless `.json.gz` files; their original and compressed hashes are in the summary.

Tracked deleted files remain in Git history. Generated session homes contained credentials and are removed from unpublished history before push. Credentials and raw transcripts are not retained in telemetry. Paused/unverified runtime state and source caches are preserved.

Readiness and report integrity receipts describe the original completed revision. This authorized post-closeout cleanup is recorded separately; it does not rewrite or reseal those receipts.

The `completed_frontiers` entry for `non-ml-math-remaining-81-2026-10-18` records the 81-pair frontier: 162 pages, 1,620 manifest items and one supporting item published after 25/25 final gates passed. Native dispatch and judge counters are separate overlapping measurements; manual agent usage remains unknown. `post_closeout_cleanups` records the subsequent cleanup, with all 45 recorded prose scaffold files verified byte-for-byte unchanged. Native completion and scaffold hashes are retained in [non-ml-math-remaining-81-2026-10-18-closeout.json](non-ml-math-remaining-81-2026-10-18-closeout.json).

Two older plan archives above GitHub’s blob limit were compressed losslessly throughout the unpublished suffix. The October 18 cleanup entry records the original-to-current commit mapping and unchanged published base. The final authored tree was identical before and after this history cleanup; historical native receipts retain their original Git identities. A local backup ref retains the original unpublished history.

The `completed_frontiers` entry for `inverse-problems-knot-theory-all-109-2026-10-19` records 1,472 published items and 109 page pairs, 27/27 final gates, 87.845 hours elapsed, 1,649 distinct retained dispatch attempts and 1,856 judge calls. Dispatch aliases are deduplicated; event totals and judge counters are separate overlapping observations. Manual-agent usage and billed cost are unknown. The associated cleanup removes concluded worker homes, generated prompts/tasks, operational helpers and raw logs after recording counters and exact path inventories. Canonical proof/source evidence, native state and the verified pending-push recovery packet remain. Push is still pending at the owner’s direction; shared history is preserved.

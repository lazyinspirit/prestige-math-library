# Exact historical in-run dependency routes

A genuine proof repair may remove redundant dependencies after native readers
and refuters recorded a real cross-batch finding. Current graph reachability
remains the default. The explicit owner registry supports only an existing
exact historical obligation whose full original source path can be recovered
and whose dependency removal has actually been reviewed by the owner.

```sh
node tools/step5-owner-historical-routes.mjs check --run RUN --evidence research/AUTHORIZATION.json
node tools/step5-owner-historical-routes.mjs record --run RUN --evidence research/AUTHORIZATION.json
```

Both commands validate the same evidence; `record` copies it to immutable
`research/RUN-step5-owner-historical-inrun-routes.json` with exclusive creation
and read-only permissions. A different existing registry cannot be replaced.
Neither command changes a native finding, report, scope, snapshot, decision,
ledger, certification or control. Recording alone closes no gate.

The owner authorization schema is:

```json
{
  "version": 1,
  "policy": "owner-step5-historical-inrun-route-v1",
  "run": "RUN",
  "step": 5,
  "owner": true,
  "owner_identity": "/root",
  "at": "ACTUAL_OWNER_OBSERVATION_TIME",
  "reason": "Actual reason the reviewed proof repair removed this dependency route",
  "routes": [
    {
      "batch": "CONSUMER_BATCH",
      "obligation": "reader:CONSUMER_BATCH:ACTUAL_INDEX",
      "finding_sha256": "CANONICAL_HASH_OF_COMPLETE_ORIGINAL_SCOPE_FINDING",
      "reader_report": { "path": "research/RUN-reader-findings-CONSUMER_BATCH.json", "sha256": "RAW_HASH" },
      "refuter_report": { "path": "research/RUN-refute-CONSUMER_BATCH.json", "sha256": "RAW_HASH" },
      "consumer_pre_snapshot": { "path": "research/RUN-step5-hash-CONSUMER_BATCH-pre.json", "sha256": "RAW_HASH" },
      "consumer_post_snapshot": { "path": "research/RUN-step5-hash-CONSUMER_BATCH-post.json", "sha256": "RAW_HASH" },
      "producer_pre_snapshot": { "path": "research/RUN-step5-hash-PRODUCER_BATCH-pre.json", "sha256": "ORIGINAL_RECORDED_RAW_HASH" },
      "sources": [
        { "id": "EXACT_FIRST_CONSUMER", "path": "research/ACTUAL_ARCHIVED_CONSUMER.md", "sha256": "RECORDED_PATH_NODE_HASH" },
        { "id": "EXACT_PRODUCER", "path": "research/ACTUAL_ARCHIVED_PRODUCER.md", "sha256": "RECORDED_PATH_NODE_HASH" }
      ],
      "current_proof_review": {
        "owner": true,
        "removed_edges_reviewed": true,
        "no_unresolved_scope_dependency": true,
        "consumer_guard_sha256": "CURRENT_ITEM_HASH_GUARD"
      },
      "review": { "path": "research/ACTUAL_CURRENT_OWNER_REVIEW.md", "sha256": "RAW_HASH" }
    }
  ]
}
```

Supply every intermediate path node in order; the two-node example does not
permit omitting intermediate suppliers. Use exported `historicalFindingHash`
for the complete stored finding: recursively sort object keys, preserve array
order, compact JSON, SHA256. The review report must contain the run, exact
obligation, producer ID, assigned consumer ID and current consumer guard hash.
It must describe the actual current proof review and legitimate dependency
removal; matching strings and a passing tool are not mathematical review.
A refuter finding requires its own exact `refuter:BATCH:INDEX` authorization,
even when it shares the reader's producer, consumer and path.

Validation requires both native report raw hashes to match the stored scope,
consumer assignment in the immutable pre/post manifests and original scope,
the original producer-pre raw hash and exact carrier, and unchanged unique
current producer and consumer batch homes. The producer must remain a genuine
current-run draft. Each recovered raw source must match its original frozen
`dependency_path` hash and item ID; every path leg must occur in that archived
node's actual YAML `deps` or `justified_by`. Never infer a leg from unavailable
bytes or reconstruct a convenient source text. Retain the actual provenance of
recovered bytes in research without storing transcripts.

Scope checking uses this authority only when that exact consumer-to-producer
route is absent from the current graph. Current reachable routes retain normal
validation. The frozen dependency path and original observation, including
`unbound` observations, remain historical. Current producer item, contract,
manifest and adjudication stamps remain governed by their normal current
fingerprints and recertification checks. Later mathematical consumer changes
invalidate the bound owner proof review; verification stamps alone are excluded
by `itemHashGuard`. Missing authority, changed reports/pre snapshots, altered
findings or source bytes, a missing archived path leg, wrong homes and stale
current proof review fail closed. This registry grants no scope expansion,
mathematical acceptance, author attribution, fabricated observation or gate
bypass.

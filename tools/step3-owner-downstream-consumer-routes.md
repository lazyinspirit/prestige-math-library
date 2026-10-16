# Step 3 owner routing for a downstream consumer finding

This route preserves a genuine native reader finding about another batch's
current-run draft consumer after an assigned supplier changed during reading.
It does not reverse a dependency path, reclassify the native finding, grant
editing permission, establish a reader observation, or accept mathematics.

Root registers `research/RUN-step3-owner-downstream-consumer-routes.json`:

```json
{
  "version": 1,
  "run": "RUN",
  "policy": "owner-step3-downstream-consumer-route-v1",
  "routes": []
}
```

Each entry has the following exact authority shape. Batch numbers are positive
decimal strings, and `index` is the original one-based findings-array position.
The IDs below identify the motivating route; `RUN` is the actual run identifier.

```json
{
  "version": 1,
  "policy": "owner-step3-downstream-consumer-route-v1",
  "run": "RUN",
  "batch": "29",
  "index": 2,
  "supplier_id": "thm-qa-finite-abelian-coset-fourier-transform",
  "consumer_batch": "34",
  "consumer_id": "thm-qa-finite-abelian-hidden-subgroup-sample-law",
  "owner_identity": "/root",
  "mathematical_acceptance": false,
  "historical_reader_observation_bound": false,
  "edit_permission": false,
  "routing_basis": "native-downstream-inflight-null-consumer-v1",
  "observation_basis": "unbound-native-reader; owner-registration capture only",
  "coverage": "original-reader-obligation-and-target-native-refuter-alpha",
  "reviewed": true,
  "reason": "At least eighty characters explaining the actual downstream edge, native finding, changed supplier, and separate independent adjudication.",
  "at": "ISO timestamp at or after native reader29 ended_at",
  "finding_sha256": "canonical hash of the complete original native finding"
}
```

Add all references below as `{ "path": "relative/path", "sha256": "raw SHA-256" }`.
Root supplies the actual hashes and registers the authority; this module has no
registration command and never rewrites native evidence.

| Field | Required evidence |
| --- | --- |
| `findings` | `research/RUN-reader-findings-29.json` |
| `report` | `research/RUN-reader-29.md` |
| `native_result` | `research/RUN-dispatch/reader-reader-29.attempt-N.result.json` |
| `prompt` | The same attempt's `.prompt.md`, also named by its result |
| `pre_snapshot` | `research/RUN-step3-hash-29-pre.json` |
| `post_snapshot` | `research/RUN-step3-hash-29-post.json` |
| `consumer_pre_snapshot` | `research/RUN-step3-hash-34-pre.json` |
| `manifest` | `research/RUN-batch-29.pages.json` |
| `consumer_manifest` | `research/RUN-batch-34.pages.json` |
| `supplier_before` | Immutable genuine supplier source matching its native29 pre raw source hash |
| `supplier_after` | Immutable genuine supplier source matching its native29 post raw source hash |
| `consumer_registration_source` | Immutable root registration source capture of the actual consumer with its direct supplier dependency |
| `review` | Focused root review binding the run, `reader:29:2`, both IDs, and the three source archive hashes |

All references must be regular relative repository paths under `research/`,
without symlink components. `finding_sha256` uses the exported
`downstreamConsumerHash` on the full original finding. The entire parsed native
result `tail` must equal the findings document under that canonical hash. Native
success, role, label, covers, exit codes, prompt and completion time are checked.
The Markdown report must actually name both items. The original finding must
remain `subject_type: in-flight-item`, explicitly null `consumer_id`, and without
a bound `observed_source`. Its location, defect, severity and evidence remain
subject to ordinary original-report reconciliation.

Version-2 native snapshots must contain the assigned supplier before and after
reading, exclude the foreign consumer from both origin snapshots, and contain
the consumer in its own pre-snapshot. The supplier source must really change
between the exact pre/post snapshots. Both manifests and the current unique
run-wide item ownership are checked, and both physical items must be actual
current-run drafts under the existing ownership matcher. The archived consumer
registration source and current consumer must each declare the **direct**
`consumer -> supplier` edge. This policy does not cover reversed or merely
asserted paths, rehomes, published subjects, or new edit authorization.

The normalized finding retains its original native label and null consumer.
Its additional route binding is `owner_downstream_consumer_route` containing
the registry path and canonical entry hash. It records `observed_sha256: null`,
`observation_basis: unbound`, and no `pre_sha256`. Neither the consumer's native
pre-snapshot nor the root registration capture is represented as reader29's
observed bytes.

The decision carrier comes from the consumer's actual owning batch using the
existing source/contract/manifest carrier helper, with the immutable authority
binding added. Later genuine source or contract repairs therefore invalidate
stale decisions; they do not require the current source to equal the historical
registration archive. Ownership and the direct dependency must still hold.
The ordinary ledger/verdict rules remain in force. Alpha29 must independently
adjudicate the original `reader:29:2` obligation, supply explicit unbound-history
owner resolution (`historical_delta_unknown: true`, `owner_resolution` of at
least forty characters), and seal that actual current carrier. Native34's empty
reader findings do not discharge this obligation or establish its disposition.

Refuter29's computed scope is unchanged. The actual consumer remains subject to
batch34's full native refuter and Alpha obligations, including ordinary coverage
and current-carrier checks; the route creates no foreign writer or replacement
review coverage. Root must verify the actual target batch's scope and current
carrier before gates. The route imposes no notation-only or proof-only repair
restriction: confirmed source defects require separately assigned owner work,
writer coordination, and applicable supplier/consumer closure.

Split, collection, original-report checking, decision stamping, adjudication,
final currency checking and post-3a verification all retain this route. Version-3
closure also freezes its registry and every referenced historical artifact.
Existing routes and native artifacts retain their original behavior.

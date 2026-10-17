# Second/final focused cycle: both historical verification callers

Research only. The first-cycle packet is preserved unchanged. No canonical
tool/document/source, manifest, native receipt/report, ledger, worker prompt,
runtime state or controller was edited. No hashes, tests, gates, native
verification, execution, reload or runtime control was performed.

Root's review correctly identified a second historical caller overlooked in
my first packet: `validateDownstreamConsumerRoute` passes only
`{preclosure:true}` to `historicalStep3Manifest`. Later defect-ledger checking
uses that route-validation path, so repairing only `step3-close verify` would
leave the same live-capture lifecycle failure there. This second and final
successor covers both actual call chains.

1. `step3-close verify` passes its actual original marked closed receipt's
   artifact map to `artifactHashes`, then
   `downstreamConsumerClosureEvidence`, then `historicalStep3Manifest`.
2. Later `validateDownstreamConsumerRoute` reads the actual on-disk closure
   itself. Only a same-run closed version-3 receipt with basis
   `dependency-ordered-step3a`, the original marked manifest policy and an
   artifact mapping supplies the frozen-map option to that shared helper.
3. Before closure or for unmarked legacy receipts, route validation supplies
   no frozen map and retains strict live-current preclosure behavior.
   `step3-close close` and default `artifactHashes` never auto-select it.

Both historical callers therefore use the same strict first-cycle mechanism:
the helper authenticates the supplied map against the actual original closed
receipt; continuity registry and every immutable reference must match the
same already sealed artifact slots; canonical manifest slots resolve to their
existing sealed closure-time captures, whose actual bytes must match both
declared/archive/canonical digests. Archived original/current-at-closure
identity and every existing native Alpha/reconciliation check remain. No
new archive fallback, artifact-set enlargement, current-review adoption or
claim that a historical digest describes later live bytes is introduced.

Actual live manifests remain separate returned carriers. Both callers retain
their actual target-membership checks. Route validation still executes its
existing `currentOwnership` checks after manifest evidence checks, including
unique current run ownership, draft/run identity and the actual current
direct consumer dependency. None of those current checks is replaced by an
archive. Root's observation that the five present routes retain direct edges
is not represented here as independent native verification or acceptance.

The original first-cycle pointer/file observations identify all ten sealed
route fields and their existing captures, with no missing archive. The second
successor does not regenerate or modify those evidence observations. It adds
only the omitted caller's guarded selection and forwarding of the same sealed
map, plus the corresponding precise existing-document explanation.

`guarded-successor.json` is a complete successor from the actual current
canonical preimages, containing all first-cycle edits plus the second caller
fix. Use this packet's full proposed carriers/exact guards instead of layering
both packets. The first packet remains immutable historical proposal evidence.
Root owns installation review, hashing, next-drained-boundary reload, actual
native verification and all later gates. Active native worker prompts and
current 5.2 work remain untouched.

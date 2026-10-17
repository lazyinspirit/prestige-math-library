# First-cycle later-stage Step-3 historical verifier repair

Research only, `/root/kept_barrier59`, 2026-10-17. No canonical edits, native
execution, hashes, gates, tests, runtime control or worker changes. Root reports
that genuine 5.1 passed and 5.2 workers are active; no independent stage
execution claim is made here. This review concerns evidence lifecycle only,
without mathematical rereview or published-claim acceptance.

The actual code chain confirms the failure mechanism:
`step3-close verify` → `artifactHashes` →
`downstreamConsumerClosureEvidence` → `historicalStep3Manifest` →
`preclosureArchive`. A marked historical closure is verified using a helper
which still requires its closure-time `current_archive` to equal the later
live manifest. The same helper reconstructs the artifact map, so simply
skipping its assertion would still misrepresent the canonical artifact slot.

The original closure declares 1401 sealed artifact slots. Its existing
preclosure continuity registry has ten route/field entries for seven unique
manifests (6,20,36,60,89,79,52). All 1401 artifact files are present. All 70
continuity evidence reference occurrences inspected are present, and their
declared digests match the original sealed artifact-map fields. Every
closure-time current archive exists and its declared digest matches both its
own sealed archive slot and canonical manifest slot. These are pointer/file
observations, **not recomputed digest verification**. `observations.json`
retains those precise observations. There is no missing archive identified.

Exact byte comparison shows batch89's current manifest differs from its
closure-time capture; it appears twice as consumer_manifest (route indices
1 and 2). The other six unique live carriers equal their captures at the read
time. This is sufficient to explain the observed `current manifest capture
differs` assertion without changing or resealing historical evidence.

The guarded proposal passes an optional frozen-artifact map only from the
actual `step3-close verify` branch for an original marked version-3 receipt.
The helper requires that map to equal the actual original on-disk closed
receipt's artifact map. The preclosure registry itself and every referenced
archive, original capture, route registry, Alpha result/report and root
reconciliation must still match their exact original slots in that same map.
All their existing raw-byte digest and semantic checks remain operative.

For a recorded preclosure manifest, verification reconstructs the original
canonical artifact slot from the existing sealed closure-time capture. Its
declared canonical digest, archive digest and actual archived-byte digest
must agree. This explicitly interprets the key as a historical binding,
without claiming that its old digest describes the later live manifest.
Historical/current-at-closure inventory identity is checked using the two
authenticated archives. The helper retains the actual live manifest in the
separate `current` return value, so actual target membership and current
unique ownership/draft/run/direct-dependency checks remain separate and
unchanged. No current review coverage is adopted from an old archive.

There is no new archive fallback for frozen verification. If a manifest lacks
a matching sealed preclosure capture, it must still equal its original sealed
reference byte for byte; no later owner or Step-5 certificate may enlarge the
frozen artifact set. Missing, changed or unsealed evidence fails closed.
The original exact artifact-set comparison, all other artifact digest checks
and immutable Step-3 ledger-row checks remain unchanged. The original 1401
slots are reconstructed, never resealed, rewritten or supplemented.

Close mode and default preclosure/routing callers receive no frozen-map option
and retain their actual live-current-byte equality and identity requirements.
The former single current assertion is factored into equivalent capture-digest
and live-byte-equality checks for that default path. Unmarked historical
receipts retain the original behavior. No native stage descriptor, prompt or
worker import is changed.

`guarded-successor.json` contains unique literal edits, exact current tool/doc
preimages, complete unapplied successors and unified diffs for the three
affected tools and the existing continuity document. Root owns hashes,
installation review, drained-boundary reload, native verification and all
ordinary later gates. The proposal does not itself establish that the Taylor
published no-op claim passes; that requires actual subsequent native checks.

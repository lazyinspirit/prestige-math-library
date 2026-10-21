# Native sibling contract history

`step5-sibling-contract-history.mjs` preserves an exact supporting snapshot when
successful native repair siblings share one batch proof-contract file. It
supports gate and impact repair waves, including numbered impact passes. It
never changes a report, dispatch, source, verdict or supporting hash.

Root supplies a version-1 `owner-native-sibling-contract-history` payload with
`run`, `phase`, `round`, `authorized_by: owner`, `owner_identity: /root`, dated
`recorded_at`, a substantive `reason`, `historical_only: true`,
`current_review_granted: false`, `native_execution_coverage_adopted: false`,
`origin_repo_root` (the actual original checkout root), `creation_state`, `bindings` (research-relative paths to raw SHA256), and
`carriers`. Each carrier names `path`, exact old `archive`/`original_sha256`,
exact successor `current_archive`/`current_sha256`, `origin_unit`,
`successor_unit`, `source_archives` (reviewed IDs to exact source copies), and
an ordered `metadata_deltas` list of `{id,field}`.

The original and successor native reports must bind those respective carrier
hashes, use the same actual wave pack, and have genuine completed Sol6.1/high
Codex executions. Stable and immutable attempt results must be identical;
exact prompt/log/report/pack bytes are bound. Prompt identities and frozen pack
digests must match. The original completion precedes the successor completion.
The archived recording state must be paused and drained at that phase's own
native repair stage and round.

Assignments must be disjoint. Original assigned contracts remain unchanged in
both archives and in the current file. Every changed contract belongs to the
successor assignment and has an actual definite metadata-only, unaffected
native review, with source guard equal to its frozen before guard. Both units'
relevant current source files must equal their bound archives. Only a missing
`risk_review` becoming a complete review attributed to that successor, and
existing boundary `evidence` strings, may change. Boundary inventories and all
other boundary fields stay fixed. Substituting only those enumerated changes
must reproduce the entire successor JSON object, including its envelope and
contract inventory. This rejects changes to citations, derivations, claims,
source identities and unrelated contracts.

`validateSiblingContractHistory(root, run, sealedRow)` validates the historical
receipt without writing. `recordSiblingContractHistory(root, run, payload)`
adds the payload hash and writes an immutable
`research/RUN-step5-v2/PHASE-ROUND-owner-sibling-contract-history.json` only at
the actual paused, drained matching stage, before collection. It additionally
requires the archived state to equal the actual current state and each current
contract to equal its successor archive. It rejects an existing receipt.
Root records the receipt; workers do not refresh evidence hashes.

The supporting-evidence resolver returns the exact old archive and receipt.
The existing collector freezes those old bytes in its content-addressed
supporting-metadata store. Later reads authenticate the historical transition;
whole-file equality with the successor is required at recording, rather than
turning unrelated later sibling metadata into a permanent currency obligation.
Original reviewed contracts and source guards remain protected. Current review
contexts, ordinary report validation, certification and the complete native
battery remain required. Historical support grants no additional source read,
mathematical acceptance or current review coverage. Unknown changes still fail
closed through the ordinary supporting-evidence check.

Registration, first collection and first certification always require the real
original log and prompt. Afterward, a sealed historical lookup may omit their
operational files only when the actual current `certification.json` has a valid
payload hash and exactly identical frozen phase/round certificate. That native
certificate must directly pin the exact original collection, receipt, old
content-addressed archive, and every retained nonoperational binding; the
original collection must pin those same retained inputs. Successful original
owner metadata is still checked from retained pack, reports and identical
stable/immutable results. Operational log/prompt hashes stay in the receipt;
transcript text is not copied. Original absolute result pointers must identify
the same recorded original repository root and exact relative attempt paths,
including after checkout relocation. There is no recursive certification call
or fabricated separate certification-dispatch receipt.

The workflow explicitly adds the bridge's nonoperational bindings to collected
evidence so source archives, both contract snapshots, recording state and
native metadata survive closeout. Only the genuine sealed historical path uses
those archived source and contract snapshots without asserting they remain the
current versions; ordinary current certification and gate checks retain their
roles. Missing operational proof before the first genuine seal still rejects.

## Exact recovered first-impact preimages (version 2)

The opt-in `exact-first-impact-six-recovered-preimages` mode is limited to
`inverse-problems-knot-theory-all-109-2026-10-19`, its first `impact-initial`
round, original unit 1 and sibling unit 3, and six proof-contract carriers:
batches 45, 48, 73, 75, 91 and 99. The original unit-1 report declares each old
raw SHA256. Exact recovered raw bytes can satisfy that declaration even when
recovery used finite contract-row reconstruction; this is not described as an
original physical snapshot. The six actual changes comprise fifteen fixed
leaves across nine unit-3-owned contracts: citation quotations, one citation's
source/section, and one proof-step claim. Whole-object substitution rejects
all other changes.

This mode preserves historical supporting bytes. It does not repair or accept
sources, metadata or proofs, issue reviews, or waive current review contexts,
proof-contract checks, certification or gates. The actual original unit-3
report has only two supporting pins; this mode expressly does not invent six
successor native supporting hashes. After snapshots are captured by the owner
at recording, with that attribution. Actual native write output, disjoint
assignments, original source review guards and exact current supplier sections
and proof-step claims establish the bounded metadata transition. Source and
supplier copies are immutable evidence of that event; later source changes
still owe ordinary current review and certification.

Root supplies only:

```js
{
  version: 2,
  mode: 'exact-first-impact-six-recovered-preimages',
  reason: 'Specific historical-only explanation of at least eighty characters.',
  carriers: [
    {path: 'research/RUN-batch-45.proof-contracts.json',
     archive: 'research/exact-before.json',
     current_archive: 'research/actual-after.json'},
    // Exactly the other five licensed carriers.
  ]
}
```

`previewRecoveredSiblingContractHistory(root, run, payload)` validates without
writing. `recordSiblingContractHistory(root, run, payload)` recognizes version
2 and records the existing immutable receipt path. It captures the actual
manually paused, drained `5.2-impact` state; it neither requires nor creates a
fictional `5.2` battery request. Recording must precede collection and the
second owner pass. Native pack, complete unit-1 assignment, retained incomplete
unit-3 assignment, unchanged detailed reports, stable/immutable attempt results,
actual prompt, final report reference, session ID/home and log write evidence
are bound. Original operational prompt/log files remain required by this exact
mode; it does not use version 1's sealed operational-file omission.

The existing historical resolver returns the six exact old archives and
receipt bindings. The ordinary collector freezes the real old bytes into its
content-addressed supporting-metadata store. Neither the original reports nor
their declared hashes are rewritten. The version-1 metadata-only risk/boundary
mode retains its existing restrictions.

# Research proposal: published-ledger fragment closeout

The current working published ledger needs owned-record reconciliation before an honest addition-only fragment can be sealed. HEAD and index currently contain 14 owned records. The working projection replaces the historical `thm-rat-field` table row and reorders two other historical records. Foreign records also differ, so committing the whole working ledger would include foreign changes. Native `validateFragment`/`composeFragment` cannot authorize this replacement or reordering.

Nothing here is applied, sealed, or mechanically certified. No helper hashes, native validators, checks, gates, index writes or commits were executed. The two proposed programs have not been executed, syntax-checked or tested. Root owns their later review, actual SHA-256 generation, native validation and integration.

## Present observations, not frozen authority

`current-ownership-and-projection-observation.json` records the live input observation and full owned projections. At that observation there were 107 manifests, 2,036 manifest items, 214 owed pages, 2,037 items on those current pages, and 55 published ownership claims. There were no additional selected item paths. The union used by the native fragment classifier contained 2,306 IDs. The one page-only item was `ex-orthogonal-design-lasso-is-soft-thresholding`.

These counts are temporary: native Step5 workers were actively updating pages, manifests and potentially claims. Do not treat a page/manifest difference as permanent authority or a new defect. Regenerate from actual stable inputs. Native `runScope` reads items on the owed current pages; `loadScope` adds claims and explicitly selected item paths. It does not add the transitive supplier closure. The fragment classifier owns a record only when its text contains the exact run string or its primary record subject is among those actual owned IDs. Incidental supplier mentions confer no ownership. Table rows are classified individually.

At the observation, HEAD and index were the same existing ordinary `100644` blob, stage zero/default flags (`git ls-files -v` showed `H`). Their projections had 14 owned and 14,911 foreign records. Working had 137 owned and 14,935 foreign records. The surviving baseline-owned record indices occurred as `[2,0,1,7,4,5,6,8,9,10,11,12,13]`; baseline record 3 was missing. There were no duplicate owned signatures. Both a missing record and an order change must be resolved; changing only the rat-field row is insufficient.

## Unapplied historical restoration

Keep `historical-record-restoration-proposal-v2.json` immutable. Its seven record-span operations are an observed candidate, not instructions to apply stale offsets:

1. Relocate historical baseline record 2, the Cholesky observation, unchanged to its original HEAD foreign-record anchor.
2. Relocate historical baseline record 7, the matrix-ODE observation, unchanged to its original HEAD foreign-record anchor.
3. Remove the current replacement rat-field table row from its present position, restore the original Frontier22 row before the next surviving baseline-owned record, and retain the replacement row verbatim as a dated historical append.

The candidate's in-memory record analysis retains all 14 original owned records in order, preserves every foreign record's exact text/order and all 367 observed repair-marker interiors byte for byte, and retains unique owned signatures. Byte-identical marker interiors preserve their digest values; no digest was computed here. The first candidate is retained as history and explicitly superseded because it had not yet restored the rat-field order.

Use `heading-successor.json` for the later append heading: `RUN historical record restoration and retained Step3a observation — DATE`. The verbatim row's old “repair pending” wording is historical Step3a evidence, not an assertion about the now-recorded repair. Current authentic repair receipts govern current status. Neither the row nor any repair-marker interior should be rewritten to update that historical wording.

`build-reconciliation-runtime.mjs` is a root-only future generator. It recomputes actual owned IDs, current HEAD/index, current foreign anchors, fresh span locations, and every current marker interior. It refuses changed or ambiguous historical identities/anchors, overlaps, any marker-interior edit, any foreign-record change, any lost/reordered baseline record, or concurrent input movement. Its output is a runtime ledger preview and an exact span-operation proposal with root-computed guard hashes. It never edits the working ledger. Root must review fresh operations and integrate only against the exact unchanged source through a guarded shared-carrier operation; an unchecked full-file copy can overwrite concurrent foreign work and is not an authorized shortcut. If current foreign movement prevents the exact anchors, stop for a focused reconciliation rather than inventing an anchor or moving foreign data.

## Stable prerequisites and later root sequence

Do not run either generator while Step5 repair writers remain active. First complete genuine repairs/new items, claim closure and actual ownership metadata. The unchanged published Taylor claim currently has a separate no-op/history-verifier issue owned by `barrier59`; this packet does not resolve it, change Step3 captures, or reseal Step3. Every published claim must pass the authentic ordinary repair/no-op closure policy before fragment sealing.

After root observes a paused/drained stable boundary, regenerate the reconciliation candidate, review its complete operations and marker/foreign invariants, then apply the approved owned-only changes with fresh exact guards. Re-read actual working bytes afterward. Do not promote the observed v2 offsets or old counts directly. If more claims or records appear, regenerate; if a newly owned historical record creates another conflict, fail closed for root review.

Then use `build-runtime-candidate.mjs` to construct the fragment from the actual reconciled stable ledger. This separate future generator runs the ordinary published-claim/policy preflight, derives the exact native owned ID set, requires ordinary HEAD/index modes and flags, and executes native `validateFragment` and `composeFragment` on HEAD and index separately. These are later root operations, not checks already run here. It writes only a runtime authority candidate, ownership-input candidate, scope candidate, and HEAD/index composition previews. It never changes the ledger, scope, index or HEAD.

Example future invocations, for root review only:

```bash
node research/numerical-optimization-dynamics-2026-10-16-ROOT-step6-ledger-fragment-proposal/build-reconciliation-runtime.mjs \
  --root-build-reconciliation-runtime --acknowledge-stable-repairs-and-claims \
  --repo /home/lazyinspirit/Projects/prestige-math-library \
  --run numerical-optimization-dynamics-2026-10-16 \
  --runtime-output /tmp/ROOT-numerical-ledger-reconciliation-STABLE
```

```bash
node research/numerical-optimization-dynamics-2026-10-16-ROOT-step6-ledger-fragment-proposal/build-runtime-candidate.mjs \
  --root-build-runtime-candidate --acknowledge-stable-repairs-and-claims \
  --repo /home/lazyinspirit/Projects/prestige-math-library \
  --run numerical-optimization-dynamics-2026-10-16 \
  --runtime-output /tmp/ROOT-numerical-ledger-fragment-STABLE \
  --authorization-file research/numerical-optimization-dynamics-2026-10-16-ROOT-ACTUAL-fragment-authority.txt \
  --evidence-list research/numerical-optimization-dynamics-2026-10-16-ROOT-ACTUAL-fragment-native-evidence-list.json
```

The authorization/evidence-list paths above are future root inputs, not files claimed to exist. The evidence list must name actual stable run-local native evidence. Include the genuine final repair/closure/claim evidence and any owner attribution used to justify the additions. The generator additionally binds current run manifests, the scope ledger, claims and an exact ownership-input snapshot. No evidence path may be outside `research/RUN-…`; in particular the shared ledger itself is not an admissible `spec.evidence` path. Binding a research snapshot does not create mathematical acceptance.

## Exact native descriptor and scope binding

The authority JSON has these native fields:

```json
{
  "version": 1,
  "kind": "published-ledger-addition-fragment",
  "run": "RUN",
  "path": "research/published-consumer-supplier-ledger.md",
  "authorized_by": "owner",
  "authorization": "Actual explicit root authority, at least 20 characters",
  "base_owned_records": ["exact complete HEAD-owned records, in order"],
  "target_owned_records": ["exact complete reconciled working-owned records, in order"],
  "evidence": [{"path": "research/RUN-actual-native-evidence.json", "sha256": "root-computed SHA-256"}]
}
```

Records use native `fragmentRecords` and `recordSignature`; only one terminal record line ending is normalized for signatures. Each authorized record must classify as exactly one owned record and all signatures must be unique. Target must retain the full ordered base subsequence and add at least one record. Working must equal the exact target projection. HEAD and index are independently acceptable only when their owned projection equals exact base or exact target; divergent owned staged records are a conflict, not permission to overwrite them. The fragment does not grant replacement, deletion, or reorder authority.

The existing closeout policy permits at most one binding:

```json
"shared_fragments": [{
  "path": "research/published-consumer-supplier-ledger.md",
  "authority": "research/RUN-step6-published-ledger-addition-fragment.json",
  "sha256": "root-computed raw authority SHA-256"
}]
```

The authority and every evidence path must be regular, nonsymlink run-local research files with actual root-computed hashes. They become required native owned inputs. They do not belong in `additional_paths`; that would be redundant. The policy's other paths, hashes and ownership evidence remain separately strict and must reflect actual final shared code/plan state. The helper does not refresh that unrelated authority.

Root reviews the runtime candidates, then promotes the ownership snapshot, exact authority and exact scope candidate only with fresh unchanged-input guards. The proposed programs do not perform this promotion. Seal all authority/evidence before the actual metadata/render pass and full Step6 battery. A change to relevant content, ownership, authority or evidence invalidates preparation. Retain the original fragment authority after integration/retry; do not reseal a new “base=target” authority.

## Foreign preservation at native closeout

`step6-owned-inputs` retains an explicit authorized fragment instead of treating the whole mixed shared carrier as owned. Without the fragment, mixed owned/foreign changes fail closed. Broader readiness context remains sealed independently.

The v3 transaction takes the standard Git index lock, re-reads current HEAD and index, and composes only exact owned additions into each separately. Its HEAD composition uses HEAD's foreign bytes; its index composition uses staged foreign bytes. It never copies foreign working bytes into either. Native composition reconstructs its exact base by deleting recorded insertion spans and checks foreign residuals; it refuses conflicting owned records. Current foreign HEAD/index additions can coexist only when owned projections remain exact base/target.

The proposed tree starts from actual HEAD; outside tree entries remain equal. The proposed integrated index starts from the exact actual index, preserving foreign staged blobs and flags. Ref compare-and-swap refuses concurrent HEAD changes. The full working ledger is left unchanged by commit. Native in-transaction assertions verify foreign residuals, owned blobs, scope authority and current validated working bytes; no checkout, filters or hooks write foreign files. The fragment remains selected for truthful retry handling. Legacy closeout rejects fragments. No helper transaction or alternate staging route is proposed here.

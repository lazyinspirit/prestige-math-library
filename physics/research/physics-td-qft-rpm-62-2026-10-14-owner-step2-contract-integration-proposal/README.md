# Root-only Step2 contract integration proposal

Run from `physics/`. This helper changes only the 37 explicitly guarded proof-contract JSON files when root supplies both `--apply` and `--writers-drained`. It never changes item/page sources, manifests, plan, coverage, readiness, native state, or gates.

1. Optional raw preimage verification (read-only; may precede root MF/page metadata integration):

   ```sh
   node research/physics-td-qft-rpm-62-2026-10-14-owner-step2-contract-integration-proposal/integrate-contracts.mjs --verify-guards --writers-drained
   ```

2. Root integrates approved current MF/plan/page metadata, including the new batch11 A lemma and its order. Released QED page guards are MG03 A/B, whereas root's page edits affect MG01/F04 and TD pages; no released raw guard is relaxed. All item sources must remain untouched.

3. Read-only contract normalization and current quote/step validation:

   ```sh
   node research/physics-td-qft-rpm-62-2026-10-14-owner-step2-contract-integration-proposal/integrate-contracts.mjs --dry-run
   ```

4. Root alone executes the integration:

   ```sh
   node research/physics-td-qft-rpm-62-2026-10-14-owner-step2-contract-integration-proposal/integrate-contracts.mjs --apply --writers-drained
   ```

5. Root numeric-label changes, source rehash, recertification, and native gates occur afterward, separately. Root may mechanically rebind boundary raw hashes only on numeric receipt paths with exact before→after SHA evidence and unchanged body/public sections/case flags/manual evidence. The helper performs no such automatic rebinding.

`--writers-drained` is an explicit root assertion, not a native controller or a process inspection claim. Default mode performs no shared writes; failed metadata validation archives its complete diagnostics under this research directory. A quote/step failure is actionable metadata currency evidence, not a new scientific review; the helper never rewrites quotes or invents proof evidence.

The frozen index orders TD90, RPM25 early11, RPM final29, Coulomb, RPM23/28, QFT38, QFT43, batch33, batch59, batch61, batch50, then final QED30. The owner-approved TD boundary/citation refresh and RPM eight-frame boundary refresh are appended in that order, followed LAST by the final TD14 quote-only supplement. There are 240 ordered proposed entries (including55 owner boundary/metadata refreshes and14 final quote-only citation-array replacements), 167 distinct items, and 37 target documents. It guards 497 released/current source and citation-provider preimages, all proposal/release/evidence bytes, and each target contract document's initial raw bytes. Provider guards record current context, not acceptance. Every routing decision uses the actual current MF. New11 additionally requires concrete current approved11A and canonical-plan placement after the diagonal-model Definition and before diagonal self-adjointness.

Absent fields preserve current values. Supplied ordinary fields use latest packet authority. Manual `finite_checks` and historical worksheets merge by stable identity and preserve unmatched records, including when an incoming array is empty. Current explicit `finite_smoke: []` remains empty even if an older proposal supplies rows; suppression is recorded. Valid existing registered GNS metadata is preserved. No finite check is executed here.

Validation permits only canonical public source sections and whitespace-normalized exact current quote substrings. It checks explicit use/step fields, literal `step N.N` references, canonical boundary cases/statuses, and bound boundary raw source hashes. Provider-specific `supplier_excerpts` are excluded from consumer-step interpretation; owners remain responsible for their truthful current evidence. It does not infer scientific validity from any successful metadata check. Stale provider quotes fail with consumer/fact/provider/section/expected-quote diagnostics.

Each immutable source/provider/proposal/evidence is hashed once per execution and its bytes are memoized. Before committing, immutable input stat identity (device/inode/size/mtime/ctime) must remain exact; any change refuses integration. The37 shared document raw hashes are rechecked. Apply archives every shared beforeimage before mutation, stages all outputs, rechecks currency, and atomically renames each file. There is no multi-file filesystem transaction: guarded rollback restores only files still matching this helper's staged bytes if commit fails; concurrent mutation is preserved and reported for manual recovery. Receipt/failure evidence is under `root-executions/`. The root assertion of drained writers is required to avoid partial visibility to consumers. Validation failures archive full evidence and print only a count grouped by subject/type; the original 475-observation root refusal remains archived separately.

Prepared by the QFT supplier owner as an implementation proposal. Only `node --check` syntax validation was performed by the author. No integration, scientific source edit, shared write, software test, native gate, or acceptance action was performed.

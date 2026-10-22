Cycle-1 research-only delivery. No production tools, sources, metadata, contracts, manifests, ledgers, state or native reports were edited. No live gate, collection, certification, new publication, scientific audit or external source reading was attempted.

Apply `published-content-metadata.patch` from the repository root. It changes only tools/physics-support/physics-content.mjs, adds its focused test file, and documents the existing publication-maintenance distinction in physics/SCHEMA.md. `git apply --check` passes against the current production physics-content SHA256 7b49582305a52a440eec9df2ab3bd9c06f387647d316dac5cd402f2f1a00bb43. The candidate full file is only a test carrier; the patch is the intended application artifact.

The authoritative existing shared helper is tools/physics-support/published-repair-policy.mjs:recordedPublishedRepair. It already validates prior published and audited preimages, unique ownership claims, current content hashes, canonical ledger blocks and actual focused-check receipts. The two actual TD records pass that helper. The physics-content publication predicate independently required audited/verified and ignored this established recorded-maintenance state. Reintroducing a stale audit would misdescribe the accepted repair.

The patch supplies filesystem provenance from loadPhysicsRepository to validatePhysicsContent through an opaque module-owned sourceContext. The context contains no waiver callback or acceptance result. For an otherwise unaudited published physical proof item, validation requires that context, excludes captured imported identities, requires the unchanged import-receipt bytes and canonical local source path, rereads the actual carrier, and requires exact current raw bytes and parsed metadata before calling the existing repair policy. Policy validation is fresh on every use. Missing/fabricated/wrong-root context, changed source or metadata, symlinked external sources, imported originals, generic flags, forged or stale receipts and initial-publication attempts fail closed.

All normative validation callers already spread the loader result: physics-check.mjs and run-commit.mjs receive the new context without changes. In-memory validators retain their existing audit/verified paths; an in-memory repair flag alone supplies no publication authority. Planned overlays cannot borrow another source carrier's publication history. All existing complete-proof, proof-provenance, source, physical-scope, dependency and empirical-qualification checks remain unchanged. The existing shared policy remains authoritative rather than being reimplemented or relaxed.

Actual reproduction is in reproduction.json: the current explicit frontier has 854 items and 258 pages. The production validator reports exactly the two original TD physical-publication errors. The candidate reports zero errors for that complete selection. Both actual TD receipts return ok:true from recordedPublishedRepair; both correctly fail publication validation when the filesystem context is removed. The diagnostic uses the original actual initial-1-collected.json hash and current TD source bytes. It grants no gate or scientific acceptance and does not alter native collection history.

Focused tests: tests.tap records 25/25 passes, covering the genuine local-repair state, missing/generic/forged/stale evidence, ownership and ledger failures, failed/stale checks, draft or never-audited prior carriers, missing/forged/wrong-root provenance, changed parsed metadata, changed source after loading, source identity/symlink errors, imported originals and import-receipt mutation. Separate tests keep complete proof, proof provenance and empirical qualifications blocking even when the underlying local-repair receipt validates, and preserve ordinary audited/verified publication paths.

Suggested Root commands after writers drain:

```bash
git apply --check physics/research/physics-non-fluid-129-2026-10-21-r2-owner-step5-published-content-metadata/published-content-metadata.patch
git apply physics/research/physics-non-fluid-129-2026-10-21-r2-owner-step5-published-content-metadata/published-content-metadata.patch
node --test tools/physics-support/physics-content-published-repair.test.mjs
```

The separate current contract-quote reconciliation remains outside this task.

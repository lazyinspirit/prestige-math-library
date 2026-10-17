# Selected physics-authored mathematical context

`physics-math-context-import.mjs` copies only an explicit missing-root closure
from `physics/items` into root `items`, preserving canonical IDs and exact raw
bytes. Physics remains read-only. This is immutable prerequisite context, not a
new publication, native authoring window, mathematical audit, or transfer of
physics execution/review coverage. Existing verification markers and their
absence remain unchanged, including source-run attribution.

The bulk mathematics-to-physics importer has a different purpose and must not
be reversed or used for this operation. No library pages, pathways, categories,
plans, ignore blocks or unrelated carriers are imported.

A selection is version 1 with nonempty unique `entry_ids` and `expected_ids`.
The tool follows `deps` and `justified_by` in the physics sources, stopping at
actual existing root canonical files. Its exact imported closure must equal
`expected_ids`; additional missing prerequisites block it. Imported sources must
be published ordinary mathematical classes with explicit `domain: mathematics`,
no physical scope/premise roles, no unproved fallback or forward references.
Root boundary suppliers must also be published mathematical carriers. Source
bytes must equal the latest authentic ancestor Git carrier at the exact source
path, whose identical metadata therefore also declares publication. This proves
historical byte/publication provenance only, never an audit.

Every destination must be absent at import. Canonical/alias collisions, symlinks,
physical suppliers, missing sources and cycles fail before writes. Exclusive
creates refuse races; failure rolls back only files created by this invocation.
Copied carriers are read-only (0444) and can never be silently refreshed. A source,
boundary, review or receipt change requires explicit owner handling, not an
unchecked reimport.

Inspection is read-only:

```sh
node tools/physics-math-context-import.mjs inspect --run RUN --selection research/RUN-owner-context/selection.json
```

The output records source raw hashes, ancestor publication commits, exact root
boundary hashes and a deterministic `context_sha256`. The reviewed closure is
small; this is not an unrelated whole-corpus proof or formatting audit.

Before import, a genuine delegated scientific review must identify version 1,
kind `focused-physics-mathematics-context-review`, run, `/root/AGENT` reviewer,
actual `reviewed_at`, scope `full-supplier-proof-and-dependency-review`,
`native_execution_coverage: false`, and the current context hash. `items` covers
exactly every imported ID with its `raw_sha256`, `verdict: pass`,
`dependency_review: pass`, applicable `proof_review: pass` or
`definition_review: pass`, and concrete scientific evidence. `evidence_files`
contains nonempty run-owned `{path, sha256}` bindings for the actual scientific
review and reading evidence. The owner reads and accepts this actual artifact
separately; neither typed verdicts nor publication provenance can invent reading.

Owner acceptance is version 1, kind
`owner-accepted-physics-mathematics-context-review`, same run,
`authorized_by: owner`, `reviewer: /root`, `verdict: accepted`, actual
`accepted_at` after review, `native_execution_coverage: false`, current
`context_sha256`, exact `review_file`/`review_sha256`, and a concrete `reason`.
It is import-context acceptance only; no mathematical publication or native
certification is supplied. Absent, failed, changed, unsigned or stale evidence
fails closed.

After the owner reviews the concrete proposal and evidence:

```sh
node tools/physics-math-context-import.mjs import --run RUN --selection research/RUN-owner-context/selection.json --review research/RUN-owner-context/review.json --acceptance research/RUN-owner-context/acceptance.json --receipt research/RUN-physics-math-context-import.json
node tools/physics-math-context-import.mjs verify --receipt research/RUN-physics-math-context-import.json
```

Use optional `--root DIR` only to select the mathematics repository; the source
is always its `physics/items` subtree. No command controls either engine.

`reachedPhysicsMathContext` validates only registries reached by selected item
IDs. Validator integration calls it on actual prerequisite context, passing all
current frontier IDs as `selectedIds`. Any imported ID selected as an authoring
or audit subject is rejected; it belongs in no frontier manifest and acquires no
execution coverage. Root depcheck's publication-audit loop remains unchanged.
Bare whole-corpus selections therefore receive no imported-audit exception.

Frontier hashing should append reached receipt bindings to the supplier's input
bytes and include the receipt, original source carriers, review/acceptance and
bound review evidence in `itemInputPaths`. Its cache is confined to the caller's
snapshot; a fresh current-input pass revalidates sources and context. Ordinary
supplier closure, owner recertification, native reviews and gates remain owed.

The receipt includes exact `{path, sha256}` `owned_paths` for copied carriers.
For closeout, the owner places those paths in the ordinary scope policy's
`additional_paths` with the receipt as `ownership_evidence`; run-owned research
receipt/review artifacts remain sealed evidence. Those are packaging rights,
not frontier subject ownership. Physics originals stay outside the mathematics
commit. Do not change receipt hashes or source bytes to simulate history.

Run focused tooling tests with:

```sh
node --test tools/physics-math-context-import.test.mjs
```

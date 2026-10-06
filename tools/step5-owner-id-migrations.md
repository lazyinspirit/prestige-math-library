# Owner Step5 source-only ID migration

`step5-owner-id-migrations.mjs` records the narrow owner exception for correcting
an existing, genuinely unproved source-only orientation proposition/theorem to
its schema-compliant Remark ID **after** readers finish. It grants no proof
withdrawal, scope expansion, reader deletion, mathematical acceptance or gate
waiver. Ordinary historical scope, findings and their old subject IDs remain
unchanged. A decision for that old ID binds the current registered Remark's
actual item/manifest/contract carrier.

Prepare a JSON document in `research/` with `version: 1`, policy
`owner-step5-unproved-orientation-id-migration-v1`, exact `run`, `step: 5`,
`owner: true`, `owner_identity: "/root"`, actual `authorized_at` and concrete
owner authorization `reason`. `baseline` is a `{path, sha256}` link to the raw
canonical Step5 auditor baseline. `migrations` contains the exact old/new IDs,
`batch`, `page`, `source_only: true`, `after_readers: true`, empty
`logical_consumers`, verbatim `exact_statement`, original archived source link,
`current_item_sha256`, exact canonical `pre_reader` and `post_reader` snapshot
links, and the immutable supported `owner_creation` origin link. All links are
raw SHA256 links to files inside `research/`. See the run's concrete owner
integration proposal for a complete example.

The validating loader requires the original archived bytes to match both the
immutable original baseline and pre/post-reader raw carriers, home, manifest
and contract bindings. Both reader manifests must still contain the old ID and
exclude the new ID. Thus a reader removal cannot qualify for this exception.
The original must have its correct proposition/theorem kind, URL-backed
literature-derived statement, explicitly not-supplied proof, n/a precheck and
no proof body or judge stamp. A proved theorem is ineligible.

The current Remark must preserve the **entire multiline Statement** verbatim
in its body, external dependency and current manifest. It must retain original
source URLs, old-ID alias, exact home, not-supplied proof, proved_here:false,
n/a precheck and complete external-dependency boundary. Its actual Step5 owner
creation origin is read by the shared validating origin loader, including
baseline exclusion, real author evidence and authorized exact-byte archive
provenance. The original canonical file must be absent.

Every load checks actual current items for dependencies, justified_by and
forward_refs to either old or new ID; any such logical consumer blocks migration.
Linked item mentions must declare external_refs. Competing aliases also fail.
The current item bytes, registry sources and immutable origin link remain
hash-bound; changed inputs require deliberate owner action, never implicit
reauthorization.

Check the concrete evidence without writing, then record it:

```sh
node tools/step5-owner-id-migrations.mjs check --run RUN --evidence research/EVIDENCE.json
node tools/step5-owner-id-migrations.mjs record --run RUN --evidence research/EVIDENCE.json
```

The registry lives at `research/RUN-step5-owner-id-migrations.json`; recording
refuses a different replacement. Ordinary `step5-scope` stamping resolves
historical subjects through only this validated registry. Historical reader
removal checks remain intact. The split current-inventory comparison projects
registered post-reader owner movements, while historical pre/post routing is
unchanged; final inventory reconciliation requires the mapped current carrier.
Separate creation certification, ordinary decision/ledger dispositions,
current stamps and every existing gate still apply.

Tests: `node --test tools/step5-owner-id-migrations.test.mjs` covers ordinary
historical-ID stamping and rejection of lost multiline claims, proved originals,
logical consumers, tampered archives, wrong-run origins, missing aliases,
actual reader deletions and missing owner authority. The ordinary Step5 routing
regression suite must also pass.

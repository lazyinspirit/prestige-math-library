# Construction scheduling identity

Native initial-author scheduling calls `loadStep3`, dependency-level derivation
and prerequisite routing with `constructionScheduling: true`. An in-flight
manifest row that omits `id` may use its explicit `page` value only when the
run's scope ledger uniquely assigns that exact ID, batch and A/B kind, and the
canonical plan uniquely agrees on ID, kind, category and companion. A present
`id` is never replaced. All pages and items remain in the scheduling snapshot.
The derived dependency hash binds actual manifest bytes plus the exact ledger
and plan bytes used for this projection.

A page that temporarily lists bare item IDs may obtain each full current item
contract from `research/RUN-batch-N.items.json`. The page must pass the same
ledger/plan ownership check. The adjacent document must name the exact run and
batch; each listed ID must match exactly one contract with the same assigned
page, a valid kind/prefix and an explicit valid dependency array. The complete
contract is retained and actual source dependencies are combined normally.
An absent adjacent document is bound as `null` in the scheduling inputs, with
absence recognized only for `ENOENT`. A present malformed document still fails.
If the document or its record is absent for an explicit listed ID, its actual item source
may supply the scheduling contract only with a complete frontmatter envelope
and complete parseable top-level `id`, `kind`, `pipeline_run`, optional `page`
and `deps` fields. Quoted keys are decoded before selection; duplicate selected
fields fail. Each selected field is parsed with its entire YAML value, including
block lists. These fields must name the exact ID and run, a valid kind/prefix
and an explicit dependency array. Any explicit source `page` must agree with
the assigned page. The actual selected metadata is retained and the dependency
hash additionally binds the entire exact source bytes. Unrelated live source
metadata is outside this scheduling projection and remains subject to ordinary
strict whole-frontmatter validation. An existing contradictory or duplicate adjacent record
cannot use this fallback. Missing or invalid source identity, frontmatter or
dependencies fail closed. The dependency hash also binds the exact adjacent
document bytes. This does not infer an absent dependency array or use empty
canonical plan item lists as a substitute for current contracts.

This projection changes no source file and grants no author acceptance, review
coverage or gate readiness. The ordinary loader, validators and post-drain
dependency-level calculation retain strict manifest identities. The author or
owner must repair incomplete metadata after the writer finishes. Scheduling
and ordinary snapshot caches remain separate.

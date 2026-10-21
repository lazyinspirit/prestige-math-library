# Step 3 owner routing for a published required page

`step3-owner-required-page-routes.mjs` binds a genuine native reader finding
about a published required page to its exact corrected page carrier. It grants
no frontier ownership, edit permission, reader observation, or mathematical
acceptance. The owner must separately authorize and review the focused repair.

The registry is `research/RUN-step3-owner-required-page-routes.json`:

```json
{
  "version": 1,
  "run": "RUN",
  "policy": "owner-step3-required-published-page-route-v1",
  "routes": []
}
```

Each route has the following authority fields. `batch` is a positive decimal
string; `index` is the one-based native findings-array position.

```json
{
  "version": 1,
  "policy": "owner-step3-required-published-page-route-v1",
  "run": "RUN",
  "batch": "10",
  "index": 3,
  "owner_identity": "/root",
  "mathematical_acceptance": false,
  "historical_page_observation_bound": false,
  "observation_basis": "unbound-native-reader; owner-current-before capture only",
  "reviewed": true,
  "reason": "A concrete focused owner-review explanation of at least eighty characters, distinguishing current repair evidence from an unbound historical reader observation.",
  "at": "ISO timestamp no earlier than the successful native result ended_at",
  "page": "boolean-circuits-and-nonuniform-complexity",
  "origin_page": "reversible-computation-ancillas-and-coherent-oracles",
  "consumer_id": "alg-qc-reversible-embedding",
  "routing_basis": "native-page-null-consumer-owner-bound-consumer-v1"
}
```

There are two supported original finding shapes:

- Existing routes retain the native `subject_type: published-dependency` and
  native `consumer_id` equal to the authority's `consumer_id`. They require no
  new field and retain their existing validation behavior.
- The opt-in `routing_basis` shown above permits only an original native
  `subject_type: page` with an explicitly null `consumer_id`. The authority's
  `consumer_id` supplies the separately verified routing witness. It does not
  replace the null consumer in the finding or attribute that consumer to the
  native observation.

For both shapes, the original finding must name `page`, have no bound
`observed_source`, and match `finding_sha256`, computed by the exported
`requiredPageHash` on the full original finding. The original structured
completion, reader Markdown, result, prompt and findings artifact remain
unchanged. The result must genuinely succeed, and its parsed `tail` must equal
the complete original findings document under `requiredPageHash`. The Markdown
must contain both the page and the separately bound assigned consumer.

The route also requires these exact references, each an object
`{ "path": "relative/path", "sha256": "raw SHA-256" }`:

| Field | Required carrier |
| --- | --- |
| `findings` | `research/RUN-reader-findings-BATCH.json` |
| `report` | `research/RUN-reader-BATCH.md` |
| `native_result` | `research/RUN-dispatch/reader-reader-BATCH.attempt-N.result.json` |
| `prompt` | The same attempt's `.prompt.md`, matching the native result |
| `pre_snapshot` | `research/RUN-step3-hash-BATCH-pre.json` |
| `post_snapshot` | `research/RUN-step3-hash-BATCH-post.json` |
| `manifest` | `research/RUN-batch-BATCH.pages.json` |
| `before` | Genuine owner-captured published page before the repair |
| `after` | Immutable exact corrected page archive |
| `review` | Focused owner review naming run, page, routing consumer and both raw page hashes |

The remaining fields are `current_path`, `edits` and `dependency_path`.
`current_path` is the unique physical `library/CATEGORY/PAGE.md` home. `edits`
contains one or two `{ "before": "unique prose", "after": "replacement" }`
objects that reconstruct `after` exactly from `before`; both literals must be
nonempty, and each edit must occur uniquely after the frontmatter. The current
page bytes must equal `after`. Frontmatter must be unchanged and published,
and every uniquely listed page item must remain correctly identified and
published. Paths must be relative, regular and free of symlink components.

`dependency_path` is an array of `{ "id": "ITEM", "guard_sha256": "GUARD" }`
nodes. It must contain at least two distinct IDs, begin at the authority's
assigned `consumer_id`, and end at a published item placed on the required page.
Each guard is the current source's `itemHashGuard`; each successive edge must
be present in the preceding item's actual `deps`. The bound batch manifest must
place the consumer on `origin_page`, and that origin must directly require the
foreign page. No run manifest may own the foreign page. Both exact version-2
native snapshots must exclude it from their page manifests.

`step3-scope.mjs` already gives authenticated required-page routes priority in
split, collection, decisions and later currency checks. Normalization retains
the original native subject and consumer, including `page` and null. Carrier
validation checks those values against the authenticated original finding,
while the authority retains the assigned routing consumer and dependency path.
It records `observed_sha256: null`, `observation_basis: unbound`, and no
`pre_sha256`; these do not become historical source observations. Decisions
still need their ordinary verdict/ledger evidence, explicit unbound-history
owner resolution, and current corrected page carrier binding. Closure retains
the registry and its exact historical references without adopting new review
coverage. The extension changes none of those guards.


## Unchanged external formatting context (explicit opt-in)

An original `published-dependency` / `ill-formed` finding may concern only an
unrelated formatting retrofit of a published required page. CLAUDE.md rule 9
retains dependency context without requiring that external formatting repair.
This case uses a separate explicit authority:

```json
{
  "routing_basis": "owner-unchanged-required-page-context-v1",
  "scope_policy": "claude9-external-formatting-only-v1",
  "edits": [],
  "page_item_guards": [{"id": "PUBLISHED-ITEM", "guard_sha256": "CURRENT-ITEM-GUARD"}]
}
```

All ordinary native finding/result/prompt/report, snapshot, regular-file,
manifest exclusion, unique published page home, actual required origin and
consumer dependency-path guards still apply. Both native snapshots must explicitly carry page-inventory arrays excluding
the external page and item-inventory arrays including the assigned consumer. Both before and after archives must be byte-identical to
the current page. Every inventoried published item
requires its current `itemHashGuard`, in page inventory order. The exact owner
review must name `CLAUDE.md#9`, `formatting`, `unchanged`, and
`no mathematical acceptance`, in addition to the ordinary run, consumer, page
and archive hashes. This authority does not assert what the historical reader
saw: the original finding and null/unbound observation remain unchanged.

The context-only carrier allows independent Alpha `false_positive`, `confirmed_nonfatal`, or
`escalated` only. Escalation remains a blocking owner decision. Repair,
acceptance, `context_accepted`, and `confirmed_fatal` verdicts are prohibited;
a confirmed-nonfatal disposition still owes its ordinary `nonfatal-recorded`
ledger record and evidence. False-positive adjudication retains the ordinary
independent decision, evidence, current carrier, owner resolution, and any
ledger disposition required by the existing native conditions.
Routing does not suppress any finding, alter the defect ledger or grant review
coverage. Existing edited-page routes still require one or two real prose
edits and retain all previous behavior.

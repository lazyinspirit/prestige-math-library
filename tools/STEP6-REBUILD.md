# Step 6

Both workflows use the same order:

1. Check metadata and rendering, and prepare current pathways, stamps and evidence.
2. Repair confirmed defects. Suspicious mathematical or physics defects may receive focused scientific repair, including affected consumers.
3. Run every distinct old mechanical/content gate. A failure blocks completion; repair, refresh changed inputs, then repeat the full battery.
4. Immediately generate the concise final report from the validated evidence.
5. Commit only the run's owned artifacts on main.

The native stages are `6-prepare-v3`, `6-pathway-author-v3`,
`6-final-validation-v3`, and `6-finalize-v3`. Only actual outstanding pathway
prose dispatches a model. Reporting is deterministic. There is one final gate
barrier, followed by one real report-and-commit transaction; no content battery
runs after commit. Earlier workflow stages are unchanged.

Every original applicable mechanical condition remains required. Identical
commands collapse once; distinct arguments, liveness bounds, required inputs,
context projections and repair routes remain. See
[the mechanical check map](STEP6-MECHANICAL-CHECKS.md). Checks that depend on a
report or commit move into those operations: the final battery validates the
planned response, then the transaction validates the actual report and committed
owned blobs. This never treats an absent report or unmade commit as a pass.

Readiness and report receipts select the current frontier, actual prerequisite
closure, owned evidence and workflow inputs. Physics includes the relevant pinned
imports and original mathematical sources. They do not hash unrelated library
bodies or discover the entire workspace. Identity/home inventories and Git tree
metadata remain available to detect scope changes. Shared workflow code remains
strict; unrelated shared-ledger records use their existing run projections.

Mathematics tooling context retains the mathematics/shared tools and briefs,
including their own regression-test bytes. The independent `tools/physics-autopilot/`
and `tools/physics-support/` namespaces are excluded from the default mathematics
walk. Actual shared physics helpers remain protected through a conservative
source-literal dependency closure rooted in production mathematics tools. The
closure follows exact relative source and JSON filenames, including static,
export-from and literal dynamic references, without evaluating modules. A missing
or non-file referenced physics helper blocks sealing. Conditional driver prefixes
select the mathematics `./` branch; they do not introduce the unexecuted physics
workflow. Computed imports outside this convention need an explicit selector
update when introduced; this source-literal collector is not a JavaScript runtime
resolver. A test that exercises both engines does not make the independent
physics workflow a mathematics input. Explicit owned paths and native evidence
remain protected regardless of namespace. Physics keeps its existing complete
tooling selection. This changes neither commit ownership nor any gate.


Metadata/render preparation is reused only for the exact unchanged inputs and
repair round. Changed inputs or repairs require fresh preparation and the full
battery. Quiet engine ticks neither launch renderers nor rehash the library.
Both engines also execute the scoped [rendering-quality checks](RENDERING-QUALITY.md)
in this actual preparation: source/context lint, application AST/KaTeX checks,
production TikZ compilation, SVG/layout smoke checks and their regression pack.
The final `rendering-quality` gate verifies the resulting nonempty current
receipt. It reuses unchanged source/renderer/toolchain caches and the existing
proof-render pass; it adds no corpus scan or substantive review acceptance.
The terminal helper requires the genuine immediately preceding native gate pass,
its complete event sequence, current prepared inputs and drained writers. A
failed preparation, gate or transaction remains a visible blocker. Outside OPEN
findings and documented deferrals remain explicit in the audit packet.

The scoped commit constructs a Git tree from HEAD and exact owned blobs, then
updates main with compare-and-swap. It does not checkout files, run filters or
commit hooks, or write foreign working files. It preserves outside staged blobs
and index flags and compares outside HEAD metadata. Owned current bytes and
committed/index blobs are checked inside the transaction. The native receipt stays unsuccessful until all transaction assertions pass.
A failure after a landed commit holds for recovery; it never resets another
session's work.

An explicit closeout policy still leaves a shared ledger or plan outside the
commit when both its current and staged native run projections equal HEAD and
only foreign raw content changed. Exact policy preflight remains required;
run-relevant shared changes retain their existing explicit ownership requirement.

Published-ledger commit ownership uses only the run marker or a primary record
subject among actual owned item/page IDs, including exact
selected item carriers. Incidental supplier mentions and reachable prerequisite IDs
remain readiness context and confer no commit ownership. Foreign-only ledger
changes stay outside the commit even when relevant as context. Mixed changes to
owned and foreign ledger records fail closed unless an exact owner-authorized
addition-only fragment is bound in `closeout-scope.shared_fragments`; table
records are classified individually. A fragment binds a run-local authority file
and its SHA-256, exact before/target owned records, and hashed native evidence.
It cannot remove, replace, or reorder existing records. Both the authority and
evidence are sealed before the actual metadata/render pass and full battery.
The v3 transaction composes additions separately into the current HEAD and index
under the normal index lock and ref compare-and-swap, retaining their separate
foreign bytes and staged content. It inserts no foreign working content, checks
exact base reconstruction and residuals, and leaves the full working file
unchanged. Terminal record line endings are normalized only for boundary
signatures; original bytes are retained. Unrelated foreign changes may continue
between gates; relevant semantic context remains sealed. Fragment authority
remains selected after integration for truthful retry handling. Legacy closeout
rejects fragments. Missing or changed authority, conflicting owned records,
unsupported index flags or modes, or residual changes fail closed. This ownership rule applies only to explicit
policies; default shared-input restrictions and readiness context seals remain.

The final report records status, frontier counts, material caveats, measured
elapsed time/retries/token usage when available, and an audit link. It omits
exhaustive bookkeeping; full evidence stays in JSON. Missing telemetry is not
estimated. Content remains draft; publication and push require owner action.

New stage identities cannot adopt historical v2 coverage. Existing frozen runs
require an explicit native guarded cutover; original state, reports and receipts
stay historical. Installing this rebuild does not resume or migrate a live run.
See [the native cutover](STEP6-CUTOVER.md) for the explicit owner-sealed
transition and archive requirements.

Legacy report v1 inspection requires explicit `--legacy-v1`; it reads only the
recorded historical entries and never recreates a whole-workspace baseline.

The owner prohibited tests and execution for this rebuild. No tests, syntax
checks, gates, renderers or rebuilt engine run were used to validate it.

Judge-stamp preparation preserves flow-style verification mappings. A first
judge field in an empty mapping has no leading comma; reapplication replaces
the existing flow judge instead of creating a duplicate top-level verification
key. The judge content hash strips that judge-only flow field back to the exact
original empty map, retaining genuine non-judge audit evidence. The stamper
parses proposed frontmatter before writing and refuses unsupported complex flow
updates rather than discarding audit fields or writing duplicate keys. These
formatting protections grant no verdict or currency beyond the native ledger.


### Replacement-only plan ownership

Mathematics and physics v3 closeout can bind one separate `plan_projection` object in its
run-local closeout scope policy: `{path: "research/plan-spec.json", authority:
"research/RUN-step6-plan-projection.json", sha256: "..."}`. This is page-record
commit authority. It does not grant ownership of the complete shared working
plan. The existing addition-only published-ledger fragment API is unchanged.
Mixed owned and foreign raw plan changes without this exact authority fail
closed. A foreign-only plan change still stays outside the commit when the
native run-relevant projection is unchanged.

The authority has version 1 and kind `plan-page-replacement-projection`. It
records `run`, the fixed plan `path`, `authorized_by: owner`, a concrete owner
`authorization`, immutable Git `original_head` and `original_index_blob`, ordered
`page_ids`, `base_head_owned_rows`, `base_index_owned_rows`, `target_owned_rows`,
and `evidence`. Each row is `{id, raw}`, where `raw` is the exact JSON page-object
token, including its internal whitespace. `evidence` contains exactly the scope
ledger and every current batch manifest, each with its actual raw SHA-256.
The three row inventories have exactly the same IDs and relative order; the
IDs must equal both the scope-ledger/physical-home inventory and the manifest
inventory. Target items/requires, page kind and category must agree with the
actual current manifests and homes. Transitive prerequisite/context pages
never implicitly enlarge this commit ownership set.

An optional `supporting_pages` array handles an accepted item-placement repair
on existing outside pages. Each entry has exactly these fields:

```json
{
  "id": "supporting-page-id",
  "path": "library/category/supporting-page-id.md",
  "sha256": "64 lowercase hexadecimal characters",
  "ownership_evidence": "research/RUN-owner-supporting-ownership.json",
  "ownership_evidence_sha256": "64 lowercase hexadecimal characters"
}
```

`page_ids` **still equals the exact selected scope**, for example all 162 pages
of an 81-pair run. The supplement cannot add IDs to that field, its ledger or
its manifests. Only with this optional supplement do the three raw-row arrays
cover the exact ordered union of selected and supporting IDs. Both subsequences
retain their declared order. Every supporting page must have a matching explicit
`additional_paths` policy row with the same path, current hash and ownership
evidence. The independently hash-bound regular JSON evidence must identify this
run, `authorized_by: owner`, a concrete `authorization` of at least 20 characters,
and a unique exact `{path, sha256}` claim in `owned_paths`. Missing, stale,
conflicting, foreign-run or non-owner evidence fails closed. Root may issue a
fresh current ownership receipt referencing retained historical acceptance;
historical receipts are never rewritten to pretend their old hashes are current.

The actual nonsymlink page must have that ID in renderer-parsed frontmatter;
its ordered `items` plus `examples` must equal the target plan membership.
Its physical category must match the target plan category. Supporting replacements
may change **only `items`**: all other plan values must equal both original HEAD
and original index rows. Thus this route grants no page creation, deletion,
category relocation, prerequisite change, or general outside-plan ownership.
The supporting page bytes and evidence are sealed through explicit additional
ownership before preparation. Composition, inverse reconstruction and foreign
residual checks use the exact union; HEAD and index still preserve their separate
foreign bytes. Opted-in transaction receipts retain selected `page_ids` and add
`supporting_page_ids`. Authorities and receipts without a supplement keep their
existing schema and behavior.

The version-1 route supports existing page replacements only. Missing, duplicate,
unknown or reordered owned IDs, duplicate JSON keys, malformed pages, scope
additions/deletions and unmatched original/target rows are rejected. A strict
JSON token scanner handles quoted strings/escapes, arrays, objects and
primitive values and locates exact page spans. It preserves every foreign row,
foreign relative order, array separator and top-level byte in each Git base.
Each composition must reconstruct its entire original base by reversing its
recorded replacements; the foreign raw residual and target row inventory are
also compared after parsing the result.

### Explicit new selected plan rows (version 2)

For selected pages genuinely absent from both original Git plans, use version 2
and kind `plan-page-replacement-and-insertion-projection`. All version-1 authority,
manifest, scope, support-page, Git ancestry, working-byte and transaction guards
remain. Add exactly these fields:

```json
{
  "added_page_ids": ["new-selected-page-id"],
  "insertions": [{
    "after_page_id": "existing-page-id",
    "page_ids": ["new-selected-page-id"],
    "raw": ",\n  {\"id\":\"new-selected-page-id\",\"items\":[] }"
  }]
}
```

`added_page_ids` is the exact ordered selected-only addition set; it never
contains supporting or outside pages. Every listed page must be absent from
**both** immutable original HEAD and original index plans. An insertion anchor may be an existing unowned page or an existing selected
page, but must occur uniquely in both original bases and the current target.
An added page or an owned supporting page cannot serve as an anchor. The
current raw insertion span must follow that exact anchor immediately. Selected
anchor row replacements remain authenticated by the same exact original/target
row inventories; composition reparses replaced rows before locating the anchor,
and inversion removes additions before undoing replacements. Foreign bytes
retain their separate HEAD/index residuals. The two base row
arrays contain only genuinely existing owned rows, without fabricated empty or
placeholder originals. Their ordered IDs must equal the target owned IDs with
the additions removed. The target still contains the complete exact selected
and explicitly owned support union. Existing supporting pages keep their
items-only, actual-frontmatter-order guard.

Each insertion names a unique existing unowned or selected page present in both original plans and
the current target. In the actual working document its added rows must immediately
and consecutively follow that anchor, in exact declared order. `raw` is the exact
substring from the anchor object's token end through the last added object's
token end: a leading comma, whitespace, every added object, and every internal
separator. The payload must start with a comma, parse as only those exact target
page objects, and match the current working substring byte for byte. There is
no fallback to append when an anchor is absent.

Composition first replaces existing owned objects, then inserts the authenticated
payload immediately after each surviving anchor token, **before** the base's
original separator or closing-array whitespace. Thus later foreign rows may
exist after an original tail anchor without being adopted or moved. Foreign
anchor bodies are preserved from each current Git base, never copied from the
working plan. The exact owned payload is removed to compute the foreign residual;
its whitespace is not normalized. Reversing insertions and replacements must
reconstruct the entire original base byte for byte.

Both original and current Git bases retain their own foreign content and order.
Partial additions, partial replacements, reordered blocks, changed separators,
unknown additions, asymmetric original presence, and anchor conflicts fail
closed. An exact complete target is idempotent only if its entire inserted span
also matches. V2 transaction receipts additionally record `added_page_ids`; the
selected `page_ids` and supporting `supporting_page_ids` remain separate. The
full working plan and every outside index entry remain untouched. This grants
plan-row commit ownership only; it creates no item, publication, review or gate
coverage and does not change legacy behavior.

The current working plan must contain the exact authorized target row bytes.
Root creates this authority only after real writers and native splice updates
have drained and a stable late read establishes the target. The original Git
objects bind the original HEAD and index owned rows separately. At preparation
and again under the normal index lock, each current base's owned rows must be
either its exact authorized original or the exact complete target; partial or
conflicting owned integrations fail. Foreign changes in the current HEAD and
index remain separate and are retained from each base, never copied from the
working plan. The commit uses two composed blobs and preserves the full working
file unchanged. Proposed/committed HEAD and index blobs, foreign residuals,
authority and original outside index/HEAD conditions are asserted within the
normal transaction and main-reference compare-and-swap. The receipt records the
projection authority and separate base/result/foreign-residual bindings only
when the policy explicitly opts into this feature. Without `plan_projection`,
the scope-context JSON has no `planProjections` member and receipts have no
`plan_projections` member; existing default mathematics, physics and legacy
scope-context serialization and historical receipt shape are retained.

The policy, authority, scope inputs and supporting code ownership must be
sealed before the real metadata/render preparation and full native battery.
Readiness keeps its existing broader scientific plan projection and additionally
seals the exact authority/evidence; no gate or current-context requirement is
waived. If installing this support changes an input bound by an existing
unconsumed published-ledger authority, archive that original authority and its
original evidence/policy before truthfully authorizing the current successor
against the same original HEAD/index ledger bases. Do not relabel it consumed,
rewrite historical receipts, or broaden ledger additions into replacements.
Physics uses the same exact authority and current scope-ledger/manifest checks
from its `physics/` workspace. Git `original_head` plan lookups include the
`physics/` prefix; authority and evidence paths remain workspace-relative.
Domain/root mismatches fail closed. Imported mathematical carriers remain
read-only and cannot become owned selected or supporting paths. Scientific
context, preparation, validation and transaction compare-and-swap guards remain
unchanged. Legacy closeout does not acquire this plan-replacement route.


An explicitly authorized `published-local-repair-marker-additions` shared-ledger
fragment uses version 2 only for a genuinely absent original marker projection.
Its `base_owned_records` must be empty. Its ordered `target_owned_records` are
complete, unique `local-published-repair:RUN-…` begin/end blocks; repeated
paragraphs inside a block remain exact bytes and are never deduplicated. Every
block has an ordered `record_receipts` reference (`marker`, `path`, `sha256`)
bound in authority evidence. The regular run-owned receipt must be an authentic
`recorded-local-published-repair` for an owned item, and its run, marker,
recorded time, source content guard and exact inner ledger hash must agree.
Historical receipt validation grants no current source, audit or review credit;
ordinary current published-repair and readiness checks still apply.

This opt-in parser owns only those local-repair blocks. Legacy overview rows,
native audit markers, unmarked sections and arbitrary run mentions remain
foreign, even when the broader working ledger supplies scientific context.
Malformed current-run local-repair namespace tokens, missing or crossed ends,
nesting, duplicate markers, unknown blocks, incomplete receipt inventories and
partial integration fail closed. Both original Git projections must really
contain no owned marker blocks. Composition appends the exact authorized blocks
to each base separately and preserves every original base byte, its ordering and
the unchanged working file. Preparation, cutover, scope validation and all
commit residual checks use the same explicit parser mode. V1/default paragraph
ownership and its unique-record retention rules are unchanged. V2 foreign table
records exclude the zero-width phantom row produced after a terminal LF; this
row contains no source bytes. EOF-to-interior composition therefore keeps the
same real foreign records. Nonempty rows, including whitespace and CR bytes,
remain exact, and inverse insertion still reconstructs every original base byte.


Publication readiness retains an already published selected page after an exact
category relocation when its current path is genuinely absent at the pinned
ancestor `baseline_commit`. The baseline must contain exactly one regular page
blob at `library/<category>/<same-page-id>.md`, with matching frontmatter page
identity and published status, and its entire bytes must equal the current page.
A baseline draft or existing current path, duplicate original basename, changed
body or metadata, nonancestor commit, or item path does not qualify. This narrow
historical identity check neither publishes nor adds audit/review credit; all
current scope, readiness, preparation and gate requirements still apply. Existing
same-path published reuse and draft-default behavior remain unchanged.


The existing version-1 `RUN-closeout-operational-contexts.json` authority may
opt an individual directory into `selection: "symlinks-only"`. Only exact
physical roots under this run's `research/RUN-*` namespace qualify. Each row
retains the full opaque tree `entries`/`sha256`, reason and hashed external
run evidence. Tree sealing records directory modes, regular bytes/modes and
link text/modes without following targets. Only actual link entries are omitted
from automatic commit selection; every regular proposal, check and evidence
carrier remains selected. Omitted links stay outside-preserved. Changing the
tree or evidence invalidates the authority. The absent selection retains the
legacy resolver-name restrictions and whole-directory behavior.

Typed selection never exempts required, explicit, recorded, frozen or published
repair inputs. It also protects exact structured path references transitively
from native Step1–6 top-level and direct-child JSON/JSONL records and required
JSON inputs, including current and historical certificate/collection evidence
map keys. Exact absolute paths prefixed by the current repository root are
normalized lexically to safe relative paths; foreign absolute paths and prefix
lookalikes are never followed. A link or referenced descendant fails closed. Context trees are opaque
discovery boundaries; ordinary report prose and command snippets do not supply
path authority. No link target becomes accepted source or mathematical evidence.
The existing shared selector supplies preflight, readiness/report ownership and
the native commit transaction; no independent exclusion list or gate exemption
is introduced. Seal the exact owner-authorized roots only after writers drain,
before fresh preparation and the complete ordinary battery.


Native Step-5 `frozenSupportingEvidence` archives mutable batch metadata and
shared ledger preimages as exact bytes at
`research/RUN-step5-v2/supporting-metadata/<SHA256>.json`. The suffix does not
assert JSON format: JSONL defect ledgers and Markdown ledgers use this same
store. In typed context selection, these exact native archive paths remain protected
regular carriers and their content must match the hash in the filename. A
transitively referenced foreign-run archive is context only and acquires no
current-run commit ownership. Their
payload is opaque historical evidence, so its old ledger rows and foreign-run
references do not discover additional current path selectors or ownership.
All other native JSON and transitive references retain strict structured parsing;
there is no parse-error fallback. Ordinary native evidence/certificate checks
remain responsible for genuine archive provenance and pinned evidence hashes.
This packaging classification grants no mathematical or historical acceptance.

Generated readiness and report-integrity seal inventories describe raw carrier
bytes and operational link text; they do not introduce semantic source selectors.
Only the exact native receipt names with matching run and current schema/scope
receive this typed traversal: readiness `protected_tree_paths` and
`protected_tree_projections`, and report-integrity `protected_tree` plus
`selectors.owned_paths`/`selectors.projections`, remain inventory metadata. The
receipts and all existing raw evidence remain sealed and owned as before. True
`input_sha256`, report source selectors and other nested structured references
still traverse strictly, even when the same path also occurs in an inventory.
Malformed receipts or genuine JSON sources still fail; no parse-error fallback
or operational symlink source acceptance is introduced.

Foreign historical schema-2 readiness receipts may instead contain only an
aggregate protected-tree count/digest, without the later scoped inventory
fields. Exact matching foreign-run receipts with valid aggregate/input hashes
receive ordinary complete structured traversal, including all real input and
nested references. They acquire no current readiness or commit authority.
Current-run receipts and malformed or partial scoped receipts retain the strict
current schema/scope checks; historical evidence bytes are never rewritten.

Exact native `RUN-dispatch/tool-step6-finalize-v3.result.json` receipts also
carry a commit inventory in `closeout_scope.owned_paths`. Matching run and native
producer identity, success, scope version and string-array inventory are required
before treating only that field as metadata. Every other field still traverses
strictly. A genuine input reference to the same raw capture or operational link
remains authoritative and receives no inventory exemption.

During the current run's isolated v3 commit, the same final path temporarily
contains the native provisional shape: matching run/role/label, `covers: [all]`,
`ok: false`, `transaction_pending: true`, and a valid `before_head` object ID.
It receives ordinary complete structured traversal, without any inventory
exemption or success authority. The transaction's second preflight must accept
that false pending carrier; only the fully checked transaction materializes the
separate successful receipt. Foreign or malformed pending receipts still fail.

Proof-layout receipt scope uses the mathematical item grammar from SCHEMA.md:
known lowercase kind prefixes and case-sensitive ASCII alphanumeric segments.
Existing mixed-case IDs remain exact filenames and manifest identities; no
normalization, alias inference, or scope widening occurs. All ownership,
manifest/page agreement, input/dependency fingerprints and coverage checks remain
required. The independent physics receipt helper is unchanged.

Level coverage applies the same `reviewedLocalLemmaAcceptance` helper as content
policy and proof contracts to AI-generated statement dependency targets. Only
the exact eight root-preserved local lemmas qualify, with unchanged run, role,
root decision, evidence existence and exact accepted body binding. Invalid
requested acceptance remains an error; ordinary generated statements retain
the dependency prohibition (and the existing legacy audit warning policy).
This adapter adds no source attribution, proof review, judgment or gate credit.

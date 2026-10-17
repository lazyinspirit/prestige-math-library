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

Metadata/render preparation is reused only for the exact unchanged inputs and
repair round. Changed inputs or repairs require fresh preparation and the full
battery. Quiet engine ticks neither launch renderers nor rehash the library.
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

Mathematics v3 closeout can bind one separate `plan_projection` object in its
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
never enlarge this commit ownership set.

This route supports existing page replacements only. Missing, duplicate,
unknown or reordered owned IDs, duplicate JSON keys, malformed pages, scope
additions/deletions and unmatched original/target rows are rejected. A strict
JSON token scanner handles quoted strings/escapes, arrays, objects and
primitive values and locates exact page spans. It preserves every foreign row,
foreign relative order, array separator and top-level byte in each Git base.
Each composition must reconstruct its entire original base by reversing its
recorded replacements; the foreign raw residual and target row inventory are
also compared after parsing the result.

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
Physics and legacy closeout do not acquire this plan-replacement route.

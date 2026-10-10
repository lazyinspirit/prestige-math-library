# Batch 11 manifest publication diagnostic

The Step-1 prerequisite blocker at `2026-10-08T16:39:57.182Z` was a correct
rejection of a temporarily malformed batch-11 manifest. No private workflow
repair is required, and no gate was weakened.

The worker's `/tmp/b11/gen_a.py` published its seven A-item records directly to
`research/physics-em-sr-40-2026-10-08-batch-11.pages.json`. The generator's final
comment says that the page skeleton will be filled later; the written array
contained item kinds rather than A/B page rows. This is valid JSON but an
invalid run manifest.

Observed timeline from the worker's command records and the native engine event:

- `16:39:25.540Z`: the worker created and ran `gen_a.py`, which writes the
  item-only array into the live manifest path.
- `16:39:48.320Z`: the worker reran that generator, read the live item-only
  array, and copied it to `/tmp/b11/items_a.json` before generating the B items.
- `16:39:57.182Z`: the native engine reported `Every page must belong to one
  A/B pair` while evaluating `1-scaffold` unit prerequisites.
- `16:40:04.427Z`: the worker ran `/tmp/b11/finalize.py`, which rebuilt the
  live manifest as two A/B page rows containing seven A items and three B items.

`batchDependencies` calls the private `loadStep3` loader, whose strict pairing
check applies to current run manifests. With the item-only array, no row has
page kind A or B, so the loader reaches the exact reported pairing error. The
canonical plan is not the source of that error: its SHA-256 remains
`74fa3f62af49e5fcd6ed5af62bf3520ab6292aa12b4dcbfe9a28723b57e6b98c`, and its P
context rows are not included in the loader's run-manifest pairing assertion.
At the diagnostic read, current manifests loaded as 80 pages, 40 pairs, and
248 items, with no duplicate page IDs or shared A-page companions.

A temporary-directory probe through the actual private `loadStep3` function
reproduced the same error using batch 11's seven item rows as the manifest.
Restoring the actual A/B rows in that isolated fixture loaded two pages, one
pair, and ten items. The probe changed no repository artifact.

Only this diagnostic report was written. No code, canonical plan, manifest,
claim inventory, import pin, workflow evidence, or controller state was changed.
Semantic manifest failures must remain fatal after writers drain. Workers
should construct and validate complete A/B manifests away from the live path
and publish the whole validated file atomically; item work files must never be
published at the live `.pages.json` path.

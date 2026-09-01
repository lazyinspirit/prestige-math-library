# frontier-28 — Alpha group `a` Step 3 scaffold review

Scope: batches `2`, `3`, and `8`, covering
`rees-modules-artin-rees-and-hilbert-samuel-theory`,
`flatness-and-faithful-flatness`,
`inverse-limits-and-noetherian-completion`, and
`projective-and-injective-resolutions`.

I read each owned batch manifest, coverage file, notes file, the controlling
design sections in `research/plan-commutative-algebra-track.md` and
`research/plan-homological-algebra-track.md`, the flatness cross-track mention
in `research/plan-algebraic-geometry-track.md`, and the current
`research/plan-spec.json`. On Tuesday, September 1, 2026, I refreshed
`research/frontier-28-alpha-a-scope-decisions.json`, resolved its `15` pending
rows, repaired the live scaffold defects below, and reran the relevant checks
on current bytes.

## Verdicts

| A page | Batch | Verdict | Reason |
|---|---:|---|---|
| `rees-modules-artin-rees-and-hilbert-samuel-theory` | 2 | sufficient | The CA-11 route still matches the current design, its deferred/out-of-scope boundaries remain honest, and the missing carrier for the induced-versus-intrinsic filtration corollary is now restored. |
| `flatness-and-faithful-flatness` | 2 | sufficient | The CA-12 scaffold still cleanly cites the upstream MOD-3 flatness primitives, keeps the Tor-free local criteria the design requires, and its retained deferments still have exact current support. |
| `inverse-limits-and-noetherian-completion` | 3 | sufficient | The CA-13 scaffold now records the load-bearing CA-11 and CA-12 backward prerequisites directly in the manifest, and the owned A/B pair remains closure-safe on the merged plan overlay. |
| `projective-and-injective-resolutions` | 8 | sufficient | The HA-5 scaffold now has carriers for every current A-page item, and the Grothendieck injective-embedding theorem no longer depends on later same-page support items. |

## Direct repairs applied

### Batch 2 — `rees-modules-artin-rees-and-hilbert-samuel-theory`

`research/frontier-28-batch-2.coverage.json` omitted a direct carrier for
`cor-induced-and-intrinsic-adic-filtrations-are-equivalent`. I added a
canonical coverage row for that current A-page item. This closes the only live
coverage-completeness defect in batch `2` without changing scope, sources, or
reading order.

### Batch 3 — `inverse-limits-and-noetherian-completion`

The CA-13 notes explicitly recorded that several CA-11 / CA-12 bridges were
left only in strategy prose because batch `2` was still empty when Beta
scaffolded the page. Group `a` now owns both batches, so I repaired those
backward prerequisites directly in
`research/frontier-28-batch-3.pages.json`:

- `thm-completion-is-exact-on-finite-modules` now depends on
  `thm-artin-rees-lemma` and
  `cor-induced-and-intrinsic-adic-filtrations-are-equivalent`.
- `thm-faithful-flatness-of-jacobson-adic-completion` now depends on
  `thm-faithfully-flat-ring-map-characterisations`.
- `thm-finite-modules-over-complete-noetherian-rings-are-complete` now depends
  on `thm-krull-intersection-theorem`.
- `thm-completion-preserves-dimension-and-hilbert-samuel-data` now depends on
  `def-hilbert-samuel-multiplicity` and
  `thm-hilbert-samuel-dimension-theorem`.

I also updated `research/frontier-28-batch-3.notes.md` so its durable account
matches the repaired manifest state.

### Batch 8 — `projective-and-injective-resolutions`

`research/frontier-28-batch-8.coverage.json` omitted direct carriers for
fifteen current A-page items. I added canonical carriers for:

- `def-augmented-chain-complex-over-an-object`
- `def-coaugmented-cochain-complex-under-an-object`
- `lem-one-step-extension-of-a-partial-projective-resolution`
- `lem-one-step-extension-of-a-partial-injective-resolution`
- `def-augmentation-preserving-map-of-projective-resolutions`
- `lem-lift-a-map-through-degree-zero-of-a-projective-resolution`
- `lem-extend-a-partial-comparison-homotopy-by-one-degree`
- `thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object`
- `lem-degree-zero-horseshoe-lift`
- `lem-the-horseshoe-kernel-fits-a-short-exact-sequence`
- `lem-inductive-horseshoe-step`
- `thm-horseshoe-lemma-for-injective-resolutions`
- `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy`
- `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution`
- `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map`

The merged-overlay `validate-plan` run also exposed five same-page backward
edges in the Grothendieck block: the theorem
`thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings` was
still placed before its own support lemmas. I moved that theorem after the
generator-subobject, one-step-extension, transfinite, and injectivity-closing
lemmas and updated `research/frontier-28-batch-8.notes.md` to remove the stale
item-number references.

## Scope-decision review

`node tools/scope-decisions.mjs refresh --run frontier-28 --group a` produced
`15` current decline rows for this group. All `15` now resolve as `stands`.

The retained deferred rows still have exact live homes on current disk:

- `rees-modules-artin-rees-and-hilbert-samuel-theory-examples` at order
  `111.022`
- `flatness-and-faithful-flatness-examples` at order `111.024`
- `henselian-rings-and-equicharacteristic-cohen-structure` at order `111.027`
- `regular-local-rings-and-homological-dimension` at order `111.035`
- `yoneda-extensions-and-homological-dimension` at order `365.053`

The retained out-of-scope rows still match the current page contracts:

- CA-11 stays on the standard graded / Rees / Artin-Rees / Hilbert-Samuel
  spine and does not reopen height-theorem, graded-Nakayama, nonstandard
  grading, or blowup-geometry branches.
- CA-12 keeps the Tor-free flatness criteria and the Noetherian finite-flat
  branch, so the Tor formulation and non-Noetherian warning remain outside the
  owned scaffold.
- CA-13 keeps the inverse-limit and Noetherian-completion route without derived
  `\varprojlim^1`, formal power series, or principality-reflection side results.

## Checks run

- `node tools/scope-decisions.mjs refresh --run frontier-28 --group a`
  Result: `scope-decisions: a: 15 decline(s), 15 pending`.
- `node tools/scope-decisions.mjs check --run frontier-28 --group a`
  Result after resolution: `scope-decisions: 15 current decline(s), 0 error(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-2.coverage.json`
  Result: `coverage-checklist: 2 page(s), 70 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-3.coverage.json`
  Result: `coverage-checklist: 1 page(s), 83 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-8.coverage.json`
  Result: `coverage-checklist: 1 page(s), 72 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-2.pages.json research/frontier-28-batch-3.pages.json research/frontier-28-batch-8.pages.json`
  Result: `content-policy: 134 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-2.coverage.json`
  Result: `source-fetch-check: 13/13 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-3.coverage.json`
  Result: `source-fetch-check: 6/6 source(s) fetch-verified`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-8.coverage.json`
  Result: `source-fetch-check: 5/5 source(s) fetch-verified`.
- Local overlay audit over the four owned A-page manifests
  Result: every owned A page is coverage-complete, closure-safe, and free of
  later-page or foreign-B item dependencies.
- `node tools/validate-plan.mjs <temporary merged overlay>`
  Result: ended with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 630 page(s) with item lists.` The trailing note is only the standing reminder that `663` planned pages still carry no item list.

No Step-3 blocker remains in group `a`'s owned scaffold scope.

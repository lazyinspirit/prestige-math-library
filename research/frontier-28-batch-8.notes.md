# frontier-28 · Beta · batch-8 notes — `projective-and-injective-resolutions`

Run `frontier-28`, batch `8`, one A/B pair, category `homological-algebra`.
Author: Beta. Session date: Monday, August 31, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-28-batch-8.pages.json`
- `research/frontier-28-batch-8.coverage.json`
- this file

Per the batch brief, I did not edit workflow state, published content, another
batch artifact, or `proof-contracts`.

---

## 1. Control files and active-run check

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-28-dispatch/beta-batch-8.prompt.md`, the generated task
`research/frontier-28-beta-8.task.md`, the seed manifest
`research/frontier-28-batch-8.pages.json`, the controlling design material in
`research/plan-homological-algebra-track.md`, and the live plan entries in
`research/plan-spec.json`.

I also checked the live autopilot state with:

- `cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..`

On current disk, that command reported **`frontier-23`** in stage `5-author`,
not `frontier-28`. Because workflow state is out of scope and the dispatch
explicitly assigns `frontier-28`, I edited only the three
`research/frontier-28-batch-8.*` scaffold artifacts and did not try to steer or
repair `.autopilot/`.

## 2. Controlling design and design/spec drift

### Controlling design material

I treated the design block beginning at line `1101` as the controlling HA-5 page
inventory and the later match at line `1278` as its continuation. The later
match does not replace the earlier item list; it extends the same HA-5 section
with the B-page inventory, source set, and proof traps. Where the two touches
overlap, the later continuation controls because it is the more specific
statement of how the pair is to be scaffolded.

### Design/spec drift recorded, not adjudicated

The direct prerequisite lists disagree.

- The design block for `projective-and-injective-resolutions` names
  `long-exact-sequences-in-homology`,
  `subobject-lattices-generators-and-the-grothendieck-axioms`, and
  `free-modules-and-exact-sequences`.
- The live `plan-spec.json` entry and the seed batch manifest name only
  `long-exact-sequences-in-homology-examples`.

Per the dispatch rule, I did **not** choose between them locally or edit the
plan. I carried on with the spec.

Important practical note: on current `plan-spec.json`, the spec-side transitive
closure of `projective-and-injective-resolutions` already reaches

- `free-modules-and-exact-sequences`
- `subobject-lattices-generators-and-the-grothendieck-axioms`
- `order-zorn-and-the-axiom-of-choice`
- `the-diagram-lemmas-in-an-abelian-category`

so the item-level scaffold can still cite the published projective/injective,
snake/nine-lemma, generator, AB5, and choice infrastructure honestly **without**
changing the page-level `requires` metadata.

### No order drift

The design and the live plan agree on order `365.045` for the A page and on the
paired B-page placement immediately after it.

## 3. Scaffold shape and split check

The scaffold now has:

- `projective-and-injective-resolutions` (A): **51 items**
- `projective-and-injective-resolutions-examples` (B): **9 items**

The A page is below the `60`-item split threshold, so **no split is proposed**.

## 4. Route choices

The A page follows the design route and keeps the proof layers separate instead
of compressing them into one omnibus theorem.

1. It starts with augmented/coaugmented complexes, projective/injective
   resolutions, deleted resolutions, length, and relative syzygies.
2. It proves existence through one-step extension lemmas before specializing to
   module corollaries and the canonical iterated free resolution.
3. It keeps comparison **existence**, comparison **uniqueness up to homotopy**,
   and homotopy-equivalence of two resolutions as three separate items, exactly
   as the design warns.
4. It builds the horseshoe lemma through the short exact sequence on new kernels
   before stating the full theorem.
5. It keeps Schanuel and stable syzygy comparison separate from literal
   isomorphism claims.
6. It gives the Grothendieck injective-embedding theorem in the visible
   Stacks-style decomposition into the generator-subobject injectivity lemma,
   the one-step extension functor, the functorial monomorphism lemma, the
   transfinite factorization lemma, the injectivity-closing lemma, and only
   then the theorem/corollary pair, rather than hiding the set-sized
   subobject, pushout, transfinite, AB5, and cofinality steps inside one
   sentence.

Important local decisions:

- I **did not** recreate projective or injective objects, or enough projectives
  for modules, under new ids. Those stay on the already published prerequisite
  pages and are cited directly.
- I kept `def-syzygy-and-cosyzygy-relative-to-a-resolution` explicitly
  **relative** to the displayed resolution. The design is clear that no
  canonical-object claim should be smuggled in.
- I chose the torsion-abelian-group example for the B-page counterexample
  `cex-a-category-with-enough-injectives-but-not-enough-projectives`, because
  it can be proved directly from earlier module and injective material without
  waiting for later sheaf pages.
- I fixed the final false statement to the standard periodic `\mathbb Z/4`
  projective complex route, so it is genuinely about **projective** terms rather
  than the already published acyclic-noncontractible complex whose last term is
  not projective.

## 5. Source set actually recorded

I recorded five verified source rows for the A page.

1. Charles A. Weibel, *An Introduction to Homological Algebra*:
   `https://djvu.online/file/WrPctxOTQCdBj`
2. Romyar Sharifi, *Homological Algebra*:
   `https://math.ucla.edu/~sharifi/homalg.pdf`
3. The Stacks Project, Section 12.28 `Projectives`:
   `https://stacks.math.columbia.edu/tag/013A`
4. The Stacks Project, Section 19.11 `Injectives in Grothendieck categories`:
   `https://stacks.math.columbia.edu/tag/05AB`
5. The Stacks Project, Section 10.109 `Rings of finite global dimension`:
   `https://stacks.math.columbia.edu/tag/00O2`

This satisfies the standing source rule:

- an eligible primary textbook treatment
- an independent full lecture-note treatment
- additional independent reference-work support for the Grothendieck injective
  theorem, the functorial-projective-surjection distinction, and Schanuel's
  lemma

What each source is doing:

- **Weibel** carries the textbook backbone for definitions of projective and
  injective resolutions, existence, comparison, uniqueness up to homotopy, and
  the projective horseshoe theorem.
- **Sharifi** independently confirms the same projective/injective resolution
  route, gives an explicit open lecture-note version of the cyclic-group
  resolution example, and supplies the module corollaries from enough
  projectives/injectives.
- **Stacks 12.28** is the control for distinguishing plain enough projectives
  from the strictly stronger notion of functorial projective surjections; that
  difference drives `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects`.
- **Stacks 19.11** is the controlling accessible source for the
  generator/pushout/transfinite/injectivity block that culminates in the
  Grothendieck injective-embedding theorem and its enough-injectives corollary.
- **Stacks 10.109** supplies Schanuel's lemma and the stable-syzygy viewpoint
  that the design wants separated from literal syzygy isomorphism.

## 6. Fetch verification and source-liveness handling

Local network fetches from this runner fail on DNS resolution, so I could not
obtain local byte stamps via `node` or `tools/source-fetch-check.mjs` itself.
Instead, I re-opened every recorded source in the web reader and wrote durable
manual receipts of the form
`fetch_verified: { at, kind, verified_via: "web-open", note }`.

That shape is already used elsewhere in this repo, and it made the mechanical
fetch gate pass without any unstamped source rows:

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`

## 7. Known limits and step-5 risks

1. **Choice accounting must stay explicit.**
   Items `10`, `11`, `14`, the Grothendieck support lemmas, and the final
   enough-injectives corollary deliberately separate pointwise
   existence, functoriality, and transfinite iteration. Step `5` should not
   collapse them into informal “choose resolutions once and for all” language.

2. **The torsion-category counterexample is direct, not deferred.**
   I scaffolded `cex-a-category-with-enough-injectives-but-not-enough-projectives`
   with the torsion-abelian-group route so it can be proved from earlier module
   facts. Step `5` should actually prove the three claims used there:
   abelianity of the torsion subcategory, enough injectives via torsion divisible
   hulls, and nonexistence of nonzero projectives via arbitrarily high
   `\mathbb Z/p^n -> \mathbb Z/p` lifts.

3. **The final false statement needs the projective counterexample, not the old nonprojective one.**
   The published counterexample
   `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension` does not
   have projective terms in every degree. Step `5` should keep the periodic
   `\mathbb Z/4` complex with differential `2` (or an equivalent genuinely
   projective example) for
   `fs-every-acyclic-complex-of-projective-objects-is-contractible`.

4. **The Grothendieck theorem block is intentionally decomposed.**
   The design explicitly wants the source proof's set-indexed pushout,
   functorial monomorphism, transfinite iteration, AB5 limit step, and
   cofinality factorization to remain separately visible. Step `5` should not
   compress those support items into a single pre-theorem remark.

## 8. Validator results

I ran the scaffold-stage checks on Monday, August 31, 2026.

- `node -e 'JSON.parse(...)'` on `research/frontier-28-batch-8.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-28-batch-8.coverage.json`
  -> `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-28-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 57 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-8.pages.json`
  -> `content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 5/5 source(s) fetch-verified (0 newly stamped)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> final status:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.`

## Step-3 fix pass

Run date for this pass: Tuesday, September 1, 2026.

No batch-8 finding ids were issued in
`research/frontier-28-alpha-a-step3-scaffold-review.md`. The stable batch-8
review is instead the unlabeled repair paragraph under
`### Batch 8 — projective-and-injective-resolutions`, and its verdict remains
`sufficient` in `research/frontier-28-alpha-a-step3-verdicts.json`.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none | accepted the Alpha review's unlabeled batch-8 repairs as already applied on current bytes | The review's batch-8 repair paragraph says `research/frontier-28-batch-8.coverage.json` had omitted direct carriers for fifteen current A-page items and that the Grothendieck injective-embedding theorem needed to move after its support lemmas. On Tuesday, September 1, 2026, a live audit over `research/frontier-28-batch-8.pages.json` and `research/frontier-28-batch-8.coverage.json` found all fifteen named items carrier-covered, all `51` current A-page items covered across source-content and canonical rows, and the Grothendieck block ordered as items `39`-`43` for the support lemmas, item `44` for `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`, and item `45` for the enough-injectives corollary. I also re-opened the five recorded coverage URLs in the web reader on Tuesday, September 1, 2026 and found no URL recovery, archive substitution, `original_url` rewrite, or harvest rewrite was needed. | Refreshed the five `fetch_verified` receipts in `research/frontier-28-batch-8.coverage.json` to Tuesday, September 1, 2026 after the web re-open. `research/frontier-28-batch-8.pages.json` needed no further change. This notes file now records the Step-3 receipt. |

Validator reruns on Tuesday, September 1, 2026:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-28-batch-8.pages.json','utf8')); console.log('pages-json: ok')"`
  -> `pages-json: ok`
- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-28-batch-8.coverage.json','utf8')); console.log('coverage-json: ok')"`
  -> `coverage-json: ok`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-8.coverage.json`
  -> `coverage-checklist: 1 page(s), 72 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-8.coverage.json`
  -> `source-fetch-check: 5/5 source(s) fetch-verified`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended with `OK`, with only the repository's standing out-of-batch
  `redundant-prereq` advisories.

## Step-5 authoring

Run date for this pass: Tuesday, September 1, 2026.

Authored page ids:

- `projective-and-injective-resolutions`
- `projective-and-injective-resolutions-examples`

Authored item ids on `projective-and-injective-resolutions`:

- `def-augmented-chain-complex-over-an-object`
- `def-coaugmented-cochain-complex-under-an-object`
- `def-projective-resolution-in-an-abelian-category`
- `def-injective-resolution-in-an-abelian-category`
- `def-deleted-resolution`
- `def-length-of-a-resolution`
- `def-syzygy-and-cosyzygy-relative-to-a-resolution`
- `lem-one-step-extension-of-a-partial-projective-resolution`
- `lem-one-step-extension-of-a-partial-injective-resolution`
- `thm-enough-projectives-gives-projective-resolutions`
- `thm-enough-injectives-gives-injective-resolutions`
- `cor-every-module-admits-a-projective-resolution`
- `cor-every-module-admits-an-injective-resolution`
- `prop-the-iterated-free-module-resolution-is-canonical-in-zf`
- `def-augmentation-preserving-map-of-projective-resolutions`
- `lem-lift-a-map-through-degree-zero-of-a-projective-resolution`
- `lem-extend-a-partial-comparison-map-by-one-degree`
- `thm-projective-comparison-map-exists`
- `lem-extend-a-partial-comparison-homotopy-by-one-degree`
- `thm-projective-comparison-maps-are-unique-up-to-chain-homotopy`
- `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object`
- `thm-injective-comparison-map-exists`
- `thm-injective-comparison-maps-are-unique-up-to-cochain-homotopy`
- `thm-injective-resolutions-of-the-same-object-are-homotopy-equivalent-under-that-object`
- `cor-a-projective-or-injective-resolution-is-unique-up-to-nonunique-homotopy-equivalence`
- `prop-comparison-maps-respect-composition-up-to-homotopy`
- `prop-comparison-of-the-identity-is-homotopic-to-the-identity`
- `lem-degree-zero-horseshoe-lift`
- `lem-the-horseshoe-kernel-fits-a-short-exact-sequence`
- `lem-inductive-horseshoe-step`
- `thm-horseshoe-lemma-for-projective-resolutions`
- `thm-horseshoe-lemma-for-injective-resolutions`
- `prop-horseshoe-resolutions-are-compatible-with-morphisms-of-short-exact-sequences-up-to-homotopy`
- `cor-a-split-short-exact-sequence-admits-the-direct-sum-resolution`
- `thm-schanuel-lemma-in-an-abelian-category`
- `cor-syzygies-from-two-projective-resolutions-are-stably-isomorphic`
- `thm-dual-schanuel-lemma-for-injective-copresentations`
- `prop-a-projective-object-has-a-length-zero-projective-resolution`
- `lem-extension-from-subobjects-of-a-generator-detects-injectivity`
- `def-functorial-one-step-generator-extension`
- `lem-the-one-step-generator-map-is-a-functorial-monomorphism`
- `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps`
- `lem-a-sufficiently-long-generator-extension-iteration-is-injective`
- `thm-a-grothendieck-abelian-category-has-functorial-injective-embeddings`
- `cor-every-grothendieck-category-has-enough-injectives-and-every-object-admits-an-injective-resolution`
- `fs-enough-projectives-selects-a-projective-resolution-functor-on-all-objects`
- `fs-a-comparison-map-between-resolutions-is-unique-as-a-chain-map`
- `fs-two-syzygies-of-an-object-are-canonically-isomorphic`
- `fs-the-horseshoe-middle-resolution-is-canonical`
- `fs-every-abelian-category-has-enough-projectives-and-enough-injectives`
- `fs-every-acyclic-complex-of-projective-objects-is-contractible`

Authored item ids on `projective-and-injective-resolutions-examples`:

- `ex-a-projective-resolution-of-a-cyclic-abelian-group`
- `ex-the-canonical-iterated-free-resolution-of-a-module`
- `ex-an-injective-resolution-of-an-abelian-group-beginning-with-a-divisible-envelope`
- `ex-comparison-maps-between-two-resolutions-of-a-cyclic-group`
- `ex-an-explicit-comparison-homotopy`
- `ex-the-horseshoe-resolution-of-an-extension-of-cyclic-groups`
- `ex-schanuel-lemma-for-two-presentations-of-a-module`
- `cex-two-projective-resolutions-with-nonisomorphic-first-syzygies`
- `cex-a-category-with-enough-injectives-but-not-enough-projectives`

Provenance rationale used in the authored files:

- I marked the standard A-page structural definitions, lemmas, theorems, and corollaries as `literature-derived` statements with `ai-generated` local proofs, with source URLs drawn from the batch coverage set.
- I marked the explicitly computed B-page examples and counterexamples as `ai-generated` when they are newly instantiated witnesses local to this batch, except for `ex-a-projective-resolution-of-a-cyclic-abelian-group` and `ex-comparison-maps-between-two-resolutions-of-a-cyclic-group`, which I retagged to `ai-altered` statements so downstream batch examples could depend on them without violating the generated-statement dependency rule.
- I kept all authored pages and items at `status: draft`, and I wrote `research/frontier-28-batch-8.proof-contracts.json` for the 51 proof-bearing scoped ids, then regenerated its `citations` and `derivations` from the on-disk item text.

Narrowed or dropped claims:

- none

Blockers:

- none remaining after the final repair pass

Authoring repairs applied during validation:

- Normalized proof paragraphs so each numbered step ended with a canonical tag group visible to `precheck`.
- Added missing resolvable `deps` for cited facts in three A-page items and one B-page example.
- Adopted the canonical step numbering that `precheck` requested in `lem-the-one-step-generator-map-is-a-functorial-monomorphism` and `cex-a-category-with-enough-injectives-but-not-enough-projectives`.
- Changed the proof-strategy tag on two examples from `constructive` to `direct` after the focused `precheck` pass showed the stronger strategy label was not needed.

Final checks run on Tuesday, September 1, 2026:

- `node tools/regen-contract-entries.mjs research/frontier-28-batch-8.proof-contracts.json $(node -e "...doc.scope.join(' ')...")`
  -> `research/frontier-28-batch-8.proof-contracts.json: regenerated 51, skipped 0`
- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "...batch item paths...")`
  -> `51 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-28-batch-8.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 51/51 item(s) checked`
- `node tools/content-policy.mjs research/frontier-28-batch-8.pages.json`
  -> `content-policy: 60 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> ended with `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`

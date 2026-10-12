# Batch 40 — `analytic-derived-six-operations-and-duality` (order 1813) / `analytic-derived-six-operations-and-duality-examples` (order 1817)

Run `frontier-44-special-representation-examples-28`, role beta, one A/B pair, category
`scheme-theory`. Owner direction
(`research/frontier-44-special-representation-examples-28-owner-authoring-direction.md`) was read
before constructing any item; it requires the appended 21 prerequisite pairs to live in this same
native run and preserves every original claim and source obligation. Canonical plan:
`research/plan-spec.json` orders 1813/1817 with the nine-entry `requires` list reproduced verbatim in
the manifest. Design: the "Analytic Derived Six Operations And Duality" section of
`research/plan-klr-foundation-prerequisites.md`, its nine carrier drafts under
`research/frontier-44-special-representation-examples-28-klr-foundation-sixfunctor-drafts/items/`
(items 1–6 and the B example) and
`research/frontier-44-special-representation-examples-28-klr-foundation-constructible-drafts/`
(items 7–9), plus the sixfunctor packet/metadata/proof-state notes.

Scaffold written: **9 A items + 1 B item = 10 items**, all recorded `ready`. In-run dependency
levels 8, 9, 10, 11, 14, 15, 16, 17, 18, and 15 (B example), computed by
`tools/item-dependency-levels.mjs`; the levels were recomputed after the AC/dependency corrections
below. No new local item was needed beyond the plan inventory, every prerequisite is already
scaffolded in this run or published, no page split was needed, and both pages are far below the
100-item cap. Only this batch's manifest, coverage, notes, cross-batch dependency input and Step-1
readiness records were written; no published content, shared plan, engine state or verdict was
edited.

## Design / plan comparison (every conflict recorded)

1. **Task locator drift, not a scope conflict.** The batch task cites the design at
   `research/plan-klr-foundation-prerequisites.md` **L715**. That line falls inside the preceding
   "Complex Algebraic Stratified Topology" section; the "Analytic Derived Six Operations And
   Duality" section of the current file begins at line **855** and ends before "Equivariant
   Constructible Perverse Foundations" (line 945). The section was located by title and read in full
   together with every linked carrier draft, its source ledger and the packet.
2. **The plan controls and matches the design item for item.** The plan-spec inventory (9 A items,
   1 B example, orders 1813/1817, same IDs, same declared dependency lists, same requires list)
   agrees with the design's suppliers and the draft carriers; no claim, source or proof route was
   dropped, narrowed or weakened. The design's within-page order equals the plan order and was
   scaffolded as such (ordinary-operations lemma, definition of the operations, exceptional adjoint,
   support/trace calculus, Verdier duality, coherent six operations, constructible specialization,
   ordinary middle perverse t-structure, smooth pullback exactness; the B example last).
3. **One metadata-order divergence recorded, plan kept.** The author packet's
   `frontier-44-...-sixfunctor-metadata.json` lists the coherent six-operation theorem before the
   support-and-trace intermediary on its proposed page. The plan (and the design) place the
   intermediary `lem-analytic-six-operation-support-and-trace-calculus` before
   `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`; the scaffold
   follows the plan, which also removes a potential dependency cycle, as the packet itself notes.
4. **Superseded perverse draft, no double home.** The constructible-drafts folder contains a
   superseded `thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes` beside
   the canonical ordinary variant. The plan-spec homes the ordinary variant on order 1813 (this
   batch) and the non-ordinary/equivariant variant on order 1818
   (`equivariant-constructible-perverse-foundations`, batch 41); the ordinary item is the one
   scaffolded here, per the plan and the design text.
5. **Design warnings preserved verbatim in substance.** The scaffold keeps: the uniform all-fibre-open
   dimension bound $d$ and the lower bound $\inf(B)-d$ (item 3); the explicit "does not assume or
   claim extraordinary dual base change before constructible biduality" boundary (item 4); "the
   fixed-space triangulation is not an assumed globally simplicial model of $f$" (item 5); "geometric
   output preservation is the exact geometric supplier, not an additional axiom" and the
   supplied-proper/open-factorization-only smooth base change (item 6); "this is the ORDINARY
   category; no equivariant category, normalization, semisimplicity or noncharacteristic theorem is
   used" (item 8); and the packet's open inputs (actual conical/triangulation and incidence
   suppliers; no arbitrary Nagata compactification).

## Dependency corrections against the design's declared inputs

Every added target resolves inside the declared `requires` closure (`validate-plan --run` exit 0);
each change repairs a missing or implicit declaration and none changes a claim.

- **AC => DC discharge (item 1).** Added the published batch-2 item
  `thm-choice-implies-dependent-implies-countable-choice`: the bounded-below injective replacement
  lemma and the injective-model theorem are stated for DC (or supplied embeddings), and item 1's
  stated AC must discharge that hypothesis. This is also how batch 39 handled an AC_ω-only
  published supplier. Rechecked: it raises only the item-1..4 labels 0-3 places (8/9/10/11), all
  recomputed.
- **Product-projection acyclicity (item 6).** Added
  `lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology` (batch 30,
  level 0): the carrier proof's contractible-factor section-acyclicity invokes the independently
  proved constant-sheaf comparison, which was absent from the design's declared input list.
- **Compatible stratifications for the smooth-pullback lemma (item 9).** Added
  `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications` (batch 37,
  level 3): the dimension count on smooth preimage strata needs compatible source/target
  stratifications of the smooth map, not only the conical cochain wrapper.
- **Closed-support description for the B example.** Added the support-and-trace lemma (item 4): the
  example's explicit computation $i^!k_{\mathbb C}=k[-2]$ uses the closed-support identification
  $i^!=R\Gamma_{\{0\}}$ (equivalently the duality route through the Verdier theorem, also recorded).
- **Definitional completeness.** Added the basic definitions the statements need to be well formed:
  sheaf/Hom/tensor/extension-by-zero/direct-image/inverse-image/flasque/bounded-complex/derived
  category/derived Hom/sheaf-cohomology definitions on items 1, 3-9 and the example, the batch-30
  constructible-category and finite-rank local-system definitions on items 5-8, and the batch-32
  c-soft / compactly-supported-sections / support-of-a-section definitions on items 2-7 and the
  example. These are direct dependencies of the statements and proofs, all resolvable, all inside
  the requires closure; no padding.
- **Well-definedness.** Item 2 carries `justified_by:
  [thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint]` (same batch,
  discharging the exceptional candidate's well-definedness); no logical dep edge is created, as the
  plan validator and the frontier ledger both confirm.

## AC bookkeeping

Full AC is stated on all ten items (the drafts assume AC; the two constructible-integration items
are AC-stated suppliers). `def-axiom-of-choice` is declared on every item. Item 1 additionally
declares `thm-choice-implies-dependent-implies-countable-choice` for the DC-stated replacement
suppliers and states the exact uses in `axiom_use`: the AC=>DC derivation, the enough-injectives
embedding (Grothendieck's theorem) and the flasque-kernel lifting (Zorn); all remaining stalk/tensor/
Hom/adjunction verifications are choice-free. Items 2-7 inherit AC through their suppliers (each
says so in `axiom_use`); items 8-9 are AC-stated through the geometric suppliers; the B example
states that it consumes the AC-assumed Verdier supplier while its finite relative-cellular
computation is choice-free. No incompatible-axiom branch is created; no Foundations item is reached,
and `deferred-set-theory-beyond-choice` is on no proof or prerequisite path.

## Source work (full text fetched, stamped and inspected)

`source-fetch-check --coverage … --stamp`: **6/6 source instances fetch-verified (6 newly
stamped)**; check mode `6/6 source(s) fetch-verified`, `6/6 resolved (0 documented drops)`. Four
distinct documents, each a complete treatment:

- **Verdier, Bourbaki expose 300** (Numdam full scan; 820080 bytes, sha256_16
  `48571f9856f26ba3`, 14 pp.): §§1 pp. 339-341 (f_! left exactness, proper-support sections, base
  change 1.2, colimits 1.3, finite cohomological dimension and Y-mou resolutions 1.4, composition
  1.5), §2 pp. 341-343 (construction of f^! from a finite Y-mou resolution, flasqueness, the trace),
  §3 pp. 343-345 (the duality Hom isomorphism), §4 pp. 345-347 (cohomologically constructible
  spaces; polyhedral opens), §5 p. 348 (submersive maps; projection formula). Complete text read;
  OCR display formulas inspected in the cached images from the same fetched bytes.
- **Stacks Project, Cohomology of Sheaves** (chapter PDF; 1054846 bytes, sha256_16
  `23fbd6af99fe8f0b`, 137 pp.): §12 (Definition 12.1 tag 09SW; Lemmas 12.2/09SX, 12.3/09SY,
  12.4/09SZ, 12.5/09T0), §16 (Lemmas 16.1-16.2, tags 09V1-09V2), §17 (base change map tag 02N7),
  §18 (Lemma 18.1 tag 09V5), §21 (tag 0A39 and the RΓ_Z localization triangle), §54 (Lemma 54.2 tag
  01E8). Section statements read in the fetched text.
- **BBD, Faisceaux pervers** (Asterisque 100 scan; 15581222 bytes, sha256_16
  `b1e10440e13cb6bf`, 172 pp.): §§1.4.1-1.4.26 (recollement, Theoreme 1.4.10, j_{!*} 1.4.22-1.4.25,
  simple objects 1.4.26) and §§2.1.1-2.1.23 (perverse t-structure on stratified spaces,
  Propositions 2.1.3/2.1.9, intermediate extension 2.1.11, IC characterization 2.1.17, perverse
  descent 2.1.20-2.1.23), read in the cached extracted text whose hash equals the fetch stamp.
- **Bernstein-Lunts, Equivariant Sheaves and Functors, Part I** (2666651 bytes, sha256_16
  `d5c84bf06367288d`, 66 pp.): §§1.4.1-1.4.6 (tensor-Hom, composition, adjunctions, proper
  equality, localization triangles, base change), §§1.6.1-1.6.3 (dualizing object and Verdier
  duality), §1.7 (smooth maps: invertible dualizing object, locally C[d]), §1.8 (smooth base
  change), §1.9 + Appendix A (n-acyclic maps), §§2.1-2.5.2 + Appendix B, §§3.1-3.6 and §§5.1-5.3
  (equivariant functor/perverse material, deferred or out of scope with reasons). Read in the cached
  extracted text whose hash equals the fetch stamp.

Coverage output: **36 harvested results, 0 errors, 0 warnings**
(`coverage-checklist --require-destination`), with every decline carrying a specific reason and
every deferral naming a resolvable destination page of this run. Scoped `url-sweep --recover
--fail-on-dead`: `4/4 live; 0 failed; 0 blocking` (output kept in `/tmp/b40/url-liveness.json` so
the engine's own run-level sweep is not pre-empted). Scoped `source-backing` against that liveness
file: `8 authored result(s) … every one still backed by an openable source`.

## Cross-batch dependencies

`research/frontier-44-special-representation-examples-28-batch-40.cross-batch-dependencies.json`
has **39 reviewed rows** — one for every cross-batch edge declared by this batch (4 page edges and
35 item edges), each `status: verified` with an evidence paragraph recording the exact consumed
contract: page edges to batches 30, 32, 36, 37; item edges to
`def-algebraically-constructible-complex-of-analytic-field-sheaves` and
`def-locally-constant-sheaf-of-finite-rank` and
`lem-locally-contractible-metric-spaces-have-singular-constant-sheaf-cohomology` (batch 30),
`def-c-soft-sheaf`, `def-compactly-supported-global-sections`, `def-support-of-a-sheaf-section`,
`lem-c-soft-field-sheaves-are-compact-support-acyclic`,
`lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`,
`lem-sections-near-a-compact-set-are-sections-on-that-set` (batch 32),
`lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model` (batch 36),
`lem-complex-algebraic-stratifications-have-finite-conical-cochain-models` and
`thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications` (batch 37), and
the published batch-2 item `thm-choice-implies-dependent-implies-countable-choice`. The ledger
(`frontier-dependency-ledger.mjs refresh --run …`) lists batch 40 among `reviewed_batches` with all
39 of its edges reviewed; `--require-reviewed` still fails **only** through unreviewed sibling
batches (11, 24, 25, 41-49 at this writing), exactly as batch 39 recorded. Supplier-side expectation
for the Step-8 reconciler: batches 41, 42, 43, 44, 45 and 48 declare this pair in their plan
`requires`; their own writers own those consumer rows.

## Published defects

None found. Every published `deps` target was read on disk and its statement, hypotheses,
direction and conventions match the use: the inverse/direct-image adjunction
(`thm-inverse-direct-image-adjunction`), stalk exactness (`thm-exactness-of-sheaves-stalkwise`,
`lem-stalk-inverse-image-sheaf`), the enough-injectives embedding
(`lem-ringed-space-module-sheaves-enough-injectives`, AC), bounded-below replacements and the
injective model (`lem-bounded-below-complexes-admit-injective-replacements` (DC),
`thm-injective-complexes-model-the-bounded-below-derived-category` (DC)), the derived Hom definition
with its cochain differential, `def-sheaf-hom`, extension-by-zero adjunction/exactness and the
short exact sequence, flasque-kernel lifting (AC/Zorn), flasque acyclicity, the bounded-above flat
resolution (no choice principle per its own proof), the t-structure definition and the AC=>DC
implication. No repair was needed and no defect row is entered for the canonical ledger.

## Findings belonging to other batches (reported, not repaired here)

- At this writing `tools/step1-decisions.mjs check` reports **678 items, 676 ready**, `closed:
  false`, and **zero** batch-40 rows in its work list. The two unresolved item rows are batch-38's
  owner-held `logarithmic-hodge-complexes-and-smooth-open-weights` escalations; the remaining work
  entries are empty scaffold inventories of the still-unscaffolded sibling batches (11, 24, 25,
  41-49).
- Batch 32's notes record an owner-action request to add
  `simplicial-complexes-and-simplicial-homology` and
  `simplicial-subdivision-and-simplicial-approximation` to the `requires` of
  `compact-support-sheaf-calculus` (or to relocate its finite-polyhedron instantiation to this
  batch). No batch-40 item consumes the affected finite-polyhedral item directly; this batch
  reaches it only through `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`,
  whose statement and hypotheses match its use here, so nothing in batch 40 is blocked. If the owner
  edits the shared `requires` list, this batch's two page `requires` arrays are unchanged by that
  decision (page-level prerequisites are transitive).
- Forward references to this pair's items 1-2 already exist, as intended, in batch 30's B example
  `ex-constructible-six-operations-on-a-point-and-an-open-closed-line`; they close at this
  scaffold and were counted in this batch's consumer-side rows only after being read there.
- The unified ledger also carries edges where batch 40 is the **supplier** to later consumer
  batches (41, 42, 43, 44, 45, 48); those consumer rows are owned by those batches and are
  unreviewed until their manifests are scaffolded.

- **New cross-batch finding (sibling-owned, reported not repaired).** Scaffolding this batch closed the
  two load-bearing forward references of batch 30's B example
  `ex-constructible-six-operations-on-a-point-and-an-open-closed-line`
  (`def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces` and
  `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`).
  Two consequences, both outside this batch's write scope and both anticipated by batch 30's own
  notes ("the owner/operator stable guard should refresh the records once the sibling writers have
  drained"): (i) that example's Step-1 record is now stale
  (`step1-decisions check` reports `Item or dependency changed; record current readiness`) because a
  Step-1 hash binds the whole transitive input closure including forward-reference targets, so the
  run-level readiness gate will stay red until batch 30's record is re-recorded on stable content;
  and (ii) the two batch-30→batch-40 ledger edges now exist with **zero** review rows, and only a
  row in batch 30's own `cross-batch-dependencies.json` can review them (consumer-owned reviews by
  construction), so `frontier-dependency-ledger refresh --require-reviewed` now also fails through
  those two edges in addition to the unreviewed sibling batches (11, 24, 25, 41-49). No batch-40
  item is affected: neither edge is a dependency of this batch, both supplier items are recorded
  ready here, and the Step-3b/5b review of those uses belongs to batch 30 as its own notes state.

## Checks (actual results at this writing)

- `node tools/manifest-deps.mjs research/…-batch-*.pages.json` — `678 item(s), 0 normalized,
  0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no label, shape or cycle error for any batch-40 item (labels 8/9/10/11/14/15/16/17/18/15 equal
  the computed levels); remaining findings are `empty scaffold inventory` for pending sibling
  batches only.
- `node tools/content-policy.mjs --manifest-only research/…-batch-*.pages.json` —
  `678 scoped item(s), 0 error(s), 0 warning(s)`. (A single-manifest invocation legitimately
  reports the cross-batch targets as `batch-dependency-missing`; the engine's scaffold gate runs the
  whole-level join over all manifests, which passes.)
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — exit 0, zero `ERROR` lines; both batch-40 pages appear among the 74 pages with item lists. Only
  pre-existing plan-level `redundant-prereq` advisories remain (34 on this page's `requires` edges,
  unchanged and left for the Step-4 reconciler).
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28` —
  `98 page(s) owed, 98 in the manifests … no scope drift`.
- `node tools/coverage-checklist.mjs research/…-batch-40.coverage.json --require-destination` —
  `2 page(s), 36 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/…-batch-40.coverage.json --stamp` —
  `6/6 source(s) fetch-verified (6 newly stamped)`; check mode `6/6 resolved (0 documented drops)`.
- `node tools/url-sweep.mjs --coverage research/…-batch-40.coverage.json --out /tmp/b40/url-liveness.json --recover --fail-on-dead`
  — `4/4 live; 0 failed … 0 blocking`, exit 0 (scoped; the run-level artifact is left to the
  engine).
- `node tools/source-backing.mjs --coverage research/…-batch-40.coverage.json --liveness /tmp/b40/url-liveness.json`
  — `8 authored result(s) … every one still backed by an openable source`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — `refreshed and deduplicated`; batch 40 has 39/39 reviewed consumer edges (see above). The
  `--require-reviewed` variant fails only through the unreviewed sibling batches listed above.
- External-reference boundary: at Step 1 the item-mode validators cannot resolve manifest IDs,
  because item files are authored only at Step 3; the scaffold gate therefore runs
  `content-policy --manifest-only`. A direct grep over the batch-40 manifest finds **0**
  occurrences of `proved_here`, `external_refs`, `external_dependency` or `forward_refs`; the one
  `justified_by` field is the sanctioned well-definedness discharge for the definition item.

## Step-1 decisions

Recorded `ready`, one at a time in prerequisite order, with the examined dependency IDs and the
evidence above:

1. `lem-bounded-analytic-field-sheaves-have-derived-tensor-hom-and-pullback-pushforward-adjunctions`
   (`9c1c6fdfcec0ca33`, 21 deps, level 8)
2. `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`
   (`4f3d58edf275f0aa`, 16 deps, level 9; hash includes its `justified_by` target)
3. `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
   (`4f3d58edf275f0aa`, 21 deps, level 10)
4. `lem-analytic-six-operation-support-and-trace-calculus` (`dc4425a68640c9ec`, 19 deps, level 11)
5. `thm-verdier-duality-on-oriented-stratified-complex-varieties` (`206f7a6bef2b1008`, 17 deps,
   level 14)
6. `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`
   (`999b977a63f5aad6`, 18 deps, level 15)
7. `lem-analytic-constructible-sheaves-admit-coherent-six-operations` (`e9916f065372a212`, 16 deps,
   level 16)
8. `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`
   (`9e726ed72ed42a57`, 11 deps, level 17)
9. `lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure` (`3456caa395409088`,
   10 deps, level 18)
10. `ex-dualizing-and-closed-support-shifts-on-the-complex-line` (`d9b8beaa2c80195c`, 10 deps,
    level 15)

Zero escalations. Owner/operator reconciliation and the full engine gate follow construction;
neither a worker exit nor a readiness record is independent mathematical approval. Step 3 provides
that review.

## Step 3b authoring (alpha-high dispatch `…-9e6fef0239462c91`)

All nine plan items and the B example were authored, together with **two added
prerequisite items on the A page** — `def-proper-continuous-map` and
`lem-proper-continuous-map-stability`, levels 0 and 1 — which close Step 3a's
U1 finding (no topological properness in the library or scaffold). The manifest
gained those two entries; every other entry had its `deps` synced to its
authored item file and its statement aligned to the authored text. Sibling
manifest drift during the dispatch raised the dependency levels, which were
recomputed and re-recorded (0, 1, 8, 13, 14, 15, 16, 17, 17, 18, 19, 20), and
the pair scope decision was refreshed (`sufficient`). The two library pages
were created, the proof contracts written (12 contracts, 96 boundary rows),
and the cross-batch dependency input refreshed (38 verified / 1 open). The
last batch-32 supplier, `lem-finite-fibre-dimension-gives-bounded-fibrewise-soft-resolutions`,
was authored before handoff: it is consumed by `def-derived-operations-on-analytic-sheaves-over-locally-compact-spaces`
and `thm-compactly-supported-derived-pushforward-has-exceptional-inverse-image-adjoint`
(steps 2.1 and 3.1), its clause matches these uses, and `depcheck`, `fwdcheck`
and `proof-contract --strict` all pass; both consumer decisions still read
`escalate` only because a non-owner cannot clear a recorded escalation. The
single open cross-batch row is the batch-32 page `compact-support-sheaf-calculus`
required by the A page. `validate-plan` reports no error for either owned page.

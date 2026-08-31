# frontier-26 · Beta · batch-7 notes — `mapping-cones-cylinders-and-chain-triangles`

Run `frontier-26`, batch `7`, one A/B pair, category `homological-algebra`.
Author: Beta. Session date: Sunday, August 30, 2026.

Artifacts owned by this batch at scaffold stage:

- `research/frontier-26-batch-7.pages.json`
- `research/frontier-26-batch-7.coverage.json`
- this file

Per the dispatch, I did not edit workflow state, published content, another
batch artifact, or any step-5 authoring file.

## 1. Control files and live batch context

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the dispatch prompt
`research/frontier-26-dispatch/beta-batch-7.prompt.md`, the seed manifest
`research/frontier-26-batch-7.pages.json`, and the cited design anchors in
`research/plan-homological-algebra-track.md`.

Because `AGENTS.md` says the live run state is owned by `tools/autopilot/` and
not by the old `*RESUME.md` files, I verified the run against the live
controller and recent history instead of trusting a resume note:

- `node --import tsx bin/autopilot.mts status --repo ../..` from
  `tools/autopilot/` reported run `frontier-26` as active at scaffold stage,
  with batch `7` in flight.
- `git log --oneline --decorate -5 -- .autopilot research/frontier-26-batch-7.pages.json research/frontier-26-dispatch/beta-batch-7.prompt.md`
  showed no contrary batch-local history that would supersede the current disk
  state.

## 2. Controlling design and design/spec drift

### Controlling design material

The generated task cites two line ranges in the same homological-algebra track
file:

- `research/plan-homological-algebra-track.md:774`
- `research/plan-homological-algebra-track.md:901`

I treated the HA-3 block beginning at line `774` as the controlling design.
The later match at line `901` is not a competing redesign; it is the B-page,
sources, and proof-trap tail of the same HA-3 block. I therefore followed the
single HA-3 design as one continuous instruction set. The controlling decisions
preserved from that block are:

- the page is chain-level and stops at cone triangles, not arbitrary
  distinguished triangles
- the cone sign convention is fixed before any cone or cylinder argument is used
- quasi-isomorphism via acyclic cone and homotopy equivalence via contractible
  cone must stay separate
- mapping-cone functoriality is only honest on strict arrow squares, not on the
  homotopy category without extra choices
- the three-cone calculation may be recorded, but the page must not falsely
  claim the octahedral axiom or a short exact sequence of the three cones
- forward references remain `NONE`

### Design/spec drift

The design and the live spec disagree on prerequisites:

- HA-3 design: `chain-homotopy-and-the-homotopy-category`,
  `exactness-and-the-member-calculus`
- live `research/plan-spec.json` and seed manifest:
  `chain-homotopy-and-the-homotopy-category-examples`

Per the dispatch, I did not adjudicate that inside the batch. I kept the live
spec edge in the manifest and recorded the disagreement here. The current spec
closure still reaches the design's real suppliers transitively:

- `chain-homotopy-and-the-homotopy-category-examples`
  -> `chain-homotopy-and-the-homotopy-category`
- `chain-homotopy-and-the-homotopy-category`
  -> `chain-complexes-and-homology-examples`
- `chain-complexes-and-homology-examples`
  -> `chain-complexes-and-homology`
- `chain-complexes-and-homology`
  -> `exactness-and-the-member-calculus`

There is no order disagreement. The live spec and seed manifest place:

- A page `mapping-cones-cylinders-and-chain-triangles` at order `365.041`
- B page `mapping-cones-cylinders-and-chain-triangles-examples` at order
  `365.042`

## 3. Scaffold shape and dependency choices

The scaffold now has:

- `mapping-cones-cylinders-and-chain-triangles` (A): **34 items**
- `mapping-cones-cylinders-and-chain-triangles-examples` (B): **8 items**

The A page is below the 60-item split threshold, so no split is proposed.

### Main structural decisions

- I kept the design's 29 ordinary A-page items plus all 5 planned `fs-` items,
  for the intended total of 34.
- I did not add a separate distinguished-triangle or triangulated-category
  definition. The design explicitly denies that scope to HA-3.
- I encoded the two real well-definedness obligations from the design with
  schema-level `justified_by` metadata:
  `def-mapping-cone-of-a-chain-map` by
  `lem-the-mapping-cone-differential-squares-to-zero`, and
  `def-mapping-cylinder-of-a-chain-map` by
  `lem-the-mapping-cylinder-differential-squares-to-zero`.
- I kept the cone and cylinder page chain-level. Item
  `prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences`
  is stated as a direct chain-level transport fact, not as a triangulated
  exact-functor theorem.
- I kept the relative-homology definition purely algebraic:
  `H_n(D,C;f) := H_n(Cone(f))`. The notes and coverage both record that this
  makes no topological pair claim.

### Why the page keeps both cone criteria

The HA-3 design treats the two headline criteria as genuinely different:

- acyclic cone <-> quasi-isomorphism
- contractible cone <-> chain-homotopy equivalence

I preserved that split exactly. Nothing in the manifest quietly collapses
acyclic to contractible, and one of the `fs-` items records that false move
explicitly.

## 4. Source set actually recorded

I recorded three verified source rows across three independent treatments:

1. Weibel chapter PDF:
   `https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf`
2. Stacks Project Section 13.9:
   `https://stacks.math.columbia.edu/tag/014D`
3. Sharifi lecture notes PDF:
   `https://math.ucla.edu/~sharifi/homalg.pdf`

This satisfies the standing source rule:

- at least two independent treatments
- at least one textbook or full lecture-note set with a harvestable table of
  contents
- an eligible primary treatment

### Why this source mix

- Weibel is the primary textbook treatment for the cone and cylinder formulas,
  the quasi-isomorphism criterion, and the explicit cylinder homotopy.
- Stacks gives a current open control on cone triangles, split-sequence
  comparisons, and the honest limitations on functoriality.
- Sharifi gives an independent full lecture-note set with a harvestable table of
  contents and an explicit total-complex sign convention that supports the
  cone-sign bookkeeping.

### Design-listed source that I did not retain

The HA-3 design also names Rotman as an independent textbook control. I tried
the available web index route for the DOKUMEN mirror during this session, but
the reader timed out before I could verify the exact cone/cylinder text range.
Per the dispatch's URL discipline, I therefore did not retain a Rotman harvest
row or cite unread text.

## 5. Source verification and receipt handling

I opened all three retained URLs in the web reader and read the recorded ranges
on Sunday, August 30, 2026. Because the shell runner in this session does not
have reliable external fetch access, I added conservative manual
`fetch_verified` blocks after the web-reader verification instead of inventing
byte or hash data:

- Weibel: `{at, kind: pdf, pages: 29}`
- Stacks: `{at, kind: html}`
- Sharifi: `{at, kind: pdf, pages: 86}`

The common timestamp used is the session UTC stamp
`2026-08-30T19:34:03Z`, which I recorded from the local shell immediately after
the source-read pass.

## 6. Harvest and disposition decisions

### Material explicitly deferred to the next HA page

The coverage ledger defers the genuinely next-page material rather than
silently dropping it:

- Weibel Lemma `1.5.7` and Sharifi Theorem `2.7.13` ->
  `long-exact-sequences-in-homology`

That matches the design boundary: HA-3 builds cone and cylinder machinery, and
HA-4 builds the long exact sequence in homology and its connecting morphism.

### Material explicitly deferred to later triangulated or double-complex pages

- Stacks `13.9.9`, `13.9.10`, `13.9.14`, and `13.9.16` ->
  `triangulated-categories`
- Sharifi `2.8.4` product totalization, `2.8.6`, and `2.8.8` ->
  `double-complexes-exact-couples-and-convergence`

These are design-faithful deferrals, not omissions. HA-3 is not where
distinguished triangles or infinite-totalization choices are licensed.

### Out-of-scope declines

I kept the topological remarks and a few auxiliary formulations as explicit
`out-of-scope` declines with page-specific reasons:

- Weibel's topological cone and cylinder interpretations
- Weibel Exercise `1.5.2`, the extension criterion for null homotopy
- Sharifi Remark `2.8.7`, the quadrant-notation guide
- Stacks `13.9.8` and `13.9.12`, which belong to later dual-factorization or
  triangulated-axiom bookkeeping rather than HA-3's chosen route

### Canonical scaffold rows

The coverage ledger uses a nonempty `canonical` block for the results that are
standard or design-mandated but are not cleanly named as single source
headings:

- the strict-arrow functoriality item
- the cone criterion for homotopy equivalence
- the three-cone composite calculation
- the shift-compatibility proposition
- the exact-functor transport proposition
- the relative-homology definition and its two consequences
- all five `fs-` items
- all eight B-page items

This keeps the scaffold source-grounded without falsely attributing those items
to source headings that do not actually state them in that exact form.

## 7. Known limits before step 5

- The page deliberately does **not** define distinguished triangles or prove
  the triangulated axioms. That later page still owes the sign-sensitive bridge
  from split short exact sequences to cone triangles.
- The page deliberately does **not** define model structures, cofibrations, or
  lifting axioms. The factorization corollary stays explicitly
  "cofibration-like" in prose only.
- The retained source set is sufficient and verified, but the design's Rotman
  control was not reusable in this session because I could not verify that
  mirror's exact text range end-to-end.

## 8. Validator runs

I ran the scaffold-stage checks on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-7.coverage.json`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-7.coverage.json --stamp`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-7.coverage.json`
- a local Node one-liner wrote the spliced manifest to
  `/tmp/frontier-26-batch-7-spliced-plan.json`
- `node tools/validate-plan.mjs /tmp/frontier-26-batch-7-spliced-plan.json`
- `git diff --check -- research/frontier-26-batch-7.pages.json research/frontier-26-batch-7.coverage.json research/frontier-26-batch-7.notes.md`

The `validate-plan` run uses the temporary spliced copy rather than the base
`research/plan-spec.json`, because the base plan still has the empty batch-7
placeholder and would not validate the actual scaffold item graph.

## Step-5 authoring

Authoring date: Monday, August 31, 2026.

- Authored the A page `mapping-cones-cylinders-and-chain-triangles`, the B page `mapping-cones-cylinders-and-chain-triangles-examples`, all 34 planned A-page items, all 8 planned B-page items, and the batch contract artifact `research/frontier-26-batch-7.proof-contracts.json`.
- A-page authored ids: `def-mapping-cone-of-a-chain-map`, `lem-the-mapping-cone-differential-squares-to-zero`, `def-canonical-inclusion-and-projection-for-a-mapping-cone`, `thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact`, `def-cone-triangle-of-a-chain-map`, `prop-the-cone-of-the-zero-map-is-the-direct-sum-with-a-shift`, `thm-the-cone-of-an-identity-map-is-contractible`, `prop-isomorphic-chain-maps-have-isomorphic-cones`, `def-morphism-of-chain-maps`, `thm-a-morphism-of-chain-maps-induces-a-chain-map-of-cones`, `prop-mapping-cone-is-functorial-on-the-arrow-category-of-complexes`, `lem-homotopic-maps-have-chain-isomorphic-mapping-cones`, `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic`, `thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible`, `def-mapping-cylinder-of-a-chain-map`, `lem-the-mapping-cylinder-differential-squares-to-zero`, `thm-the-mapping-cylinder-factors-a-chain-map`, `prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder`, `cor-every-chain-map-factors-as-a-cofibration-like-inclusion-followed-by-a-homotopy-equivalence`, `prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone`, `prop-cones-preserve-chain-homotopy-equivalences-of-arrows`, `lem-the-three-cone-calculation-for-a-composite-chain-map`, `prop-the-cone-triangle-of-a-null-homotopic-map-splits-in-the-homotopy-category`, `prop-a-chain-map-with-contractible-cone-becomes-an-isomorphism-in-the-homotopy-category`, `prop-the-cone-construction-commutes-with-shift-up-to-the-canonical-sign-isomorphism`, `prop-an-exact-functor-carries-mapping-cone-sequences-to-mapping-cone-sequences`, `def-relative-homology-of-a-chain-map`, `prop-relative-homology-is-invariant-under-homotopy-equivalence-of-arrows`, `cor-relative-homology-vanishes-exactly-for-quasi-isomorphisms`, `fs-the-mapping-cone-differential-needs-no-minus-sign`, `fs-the-degreewise-splitting-of-the-cone-sequence-is-a-chain-splitting`, `fs-mapping-cone-is-a-functor-on-the-homotopy-category-with-no-extra-data`, `fs-an-acyclic-mapping-cone-is-contractible`, `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization`.
- B-page authored ids: `ex-the-cone-of-multiplication-by-m-on-the-integers`, `ex-the-cone-of-zero-and-of-the-identity`, `ex-a-quasi-isomorphism-detected-by-an-acyclic-cone`, `cex-an-acyclic-noncontractible-cone`, `ex-the-mapping-cylinder-of-an-inclusion-of-two-term-complexes`, `ex-relative-homology-of-a-map-between-stalk-complexes`, `ex-the-three-cone-calculation-for-a-composite`, `cex-a-degreewise-split-cone-sequence-with-no-chain-splitting`.

### Provenance rationale

- I tagged the source-backed definitions and standard cone/cylinder criteria as `literature-derived` where the authored statement matches the retained Weibel or Stacks formulations up to the library's notation.
- I tagged chain-level packaging statements such as strict arrow functoriality limits, relative-homology naming, the chain-level octahedral calculation packaging, and the five `fs-` boundary markers as `ai-altered`, because the library wording and scope decisions are adapted from the design and source remarks rather than copied as exact harvested theorem statements.
- I tagged every local proof, refutation, counterexample verification, and example verification as `ai-generated`, because the written proof text is new batch-local derivation rather than quoted or transcribed source prose.
- I did not use any `ai-generated` statement provenance in this batch, so no batch-7 item is blocked by the schema rule forbidding generated statements as dependency targets.

### Narrowed or dropped claims

- No planned item id was dropped.
- No forward reference was introduced.
- I did not widen the HA-3 design scope to distinguished triangles, model structures, or long exact sequences in homology.
- The model-category boundary remains an explicit `fs-` item only; the positive factorization corollary stays at the promised chain-level "degreewise split inclusion followed by a chain-homotopy equivalence" claim.

### Blockers

- None at Step 5 on current bytes.

### Checks run on current bytes

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "const fs=require('fs');const data=JSON.parse(fs.readFileSync('research/frontier-26-batch-7.pages.json','utf8'));const ids=[];for(const page of data)for(const it of page.items||[]) ids.push('items/'+it.id+'.md');process.stdout.write(ids.join(' '));")`
  Result: `36 checked, 0 failing — all clean`.
- `node tools/regen-contract-entries.mjs research/frontier-26-batch-7.proof-contracts.json $(node -e "const fs=require('fs');process.stdout.write(JSON.parse(fs.readFileSync('research/frontier-26-batch-7.proof-contracts.json','utf8')).scope.join(' '))")`
  Result: `research/frontier-26-batch-7.proof-contracts.json: regenerated 36, skipped 0`.
- `node tools/proof-contract.mjs research/frontier-26-batch-7.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 36/36 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-26-batch-7.pages.json`
  Result: `content-policy: 42 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs /tmp/frontier-26-batch-7-spliced-plan.json`
  Result: trailing `OK`; only the standing repo-wide `redundant-prereq` advisories remain outside this batch.

## 9. Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 79 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 361 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-7.coverage.json --stamp`
  -> `source-fetch-check: 3/3 source(s) fetch-verified (0 newly stamped)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-7.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs /tmp/frontier-26-batch-7-spliced-plan.json`
  -> exit `0`; the log ends with `OK` and only the standing repository-wide
  `redundant-prereq` advisories remain. On the scaffolded batch itself there are
  no item-level cycles, forward references, B-page dependency violations, or
  unresolved ids.
- `git diff --check -- research/frontier-26-batch-7.pages.json research/frontier-26-batch-7.coverage.json research/frontier-26-batch-7.notes.md`
  -> clean

### One local repair during validation

The first spliced `validate-plan` run found one real batch-local issue:

- `cex-an-acyclic-noncontractible-cone` depended on the earlier B-page item
  `cex-an-acyclic-noncontractible-complex-from-a-nonsplit-extension`, which
  violates the examples-page leaf rule.

I repaired that by making the current counterexample self-contained: its
strategy now names a concrete nonsplit short exact sequence of abelian groups,
and its dependencies are only A-page results plus the published abelian-groups
supplier page. After regenerating the spliced plan, `validate-plan` passed.

## Step-3 fix pass

Run date for this pass: Sunday, August 30, 2026. The governing alpha review is
`research/frontier-26-alpha-b-step3-scaffold-review.md`.

No numbered batch-7 finding id was assigned in the alpha review. The single
batch-local review finding is the narrative carrier repair:
`research/frontier-26-batch-7.coverage.json` had been missing the canonical
carrier for `lem-the-mapping-cylinder-differential-squares-to-zero`.

| finding id | disposition | evidence | changed scaffold record |
| --- | --- | --- | --- |
| none assigned (batch-7 carrier finding) | closed on current bytes; no further scaffold edit required | Alpha group `b` records batch `7` as `sufficient` only after restoring the missing coverage carrier for `lem-the-mapping-cylinder-differential-squares-to-zero`. On current bytes, `research/frontier-26-batch-7.pages.json` still records `def-mapping-cylinder-of-a-chain-map` with `justified_by: [lem-the-mapping-cylinder-differential-squares-to-zero]`, and `research/frontier-26-batch-7.coverage.json` now carries the included result `The mapping-cylinder differential squares to zero by the same block-matrix cancellation that fixes the cone sign convention` for that exact item. The companion `research/frontier-26-alpha-b-step3-verdicts.json` still marks `mapping-cones-cylinders-and-chain-triangles` as `sufficient`. | `research/frontier-26-batch-7.notes.md` |

Source verification for this fix pass on Sunday, August 30, 2026:

- I re-opened all `3` recorded HTTP(S) source URLs from
  `research/frontier-26-batch-7.coverage.json` in the web reader and checked
  them against the stored locators.
- Weibel still exposes the recorded locator
  `Section 1.5 "Mapping Cones and Cylinders" from paragraph 1.5.1 through
  Lemma 1.5.7, including Exercises 1.5.1-1.5.4 and the two topological
  remarks (PDF pp. 17-22; printed pp. 18-23)`, including the mapping-cone
  definition, the short exact cone sequence, the mapping-cylinder definition,
  and the quotient-to-cone paragraph.
- The Stacks Project tag `014D` still exposes the recorded locator
  `Definition 13.9.1 through Lemma 13.9.17 (HTML lines 16-205)`, including the
  cone definition, the strict/homotopy functoriality cautions, the
  factorization lemma, and the terminal cone-triangle comparison.
- Sharifi still exposes the recorded locator
  `Remark 2.7.12 through Proposition 2.7.15` and
  `Definition 2.8.3 through Remark 2.8.8 (PDF pp. 44-45 and 47-48)`,
  including the exact-sequence and homotopy controls together with the
  alternating-sign total-complex differential used in the cone and
  mapping-cylinder sign bookkeeping.
- No URL recovery, archive substitution, or re-sourcing was needed.

Validator rerun on Sunday, August 30, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-26-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 80 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-26-batch-*.pages.json`
  -> `content-policy: 440 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-26-batch-7.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories
- `node tools/validate-plan.mjs /tmp/frontier-26-batch-7-spliced-plan.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories
     and no batch-7 item-level cycle, forward-reference, B-page dependency, or
     unresolved-id failure on the actual scaffold bytes

# frontier-27 · Beta · batch 6 scaffold notes — `long-exact-sequences-in-homology`

Run `frontier-27`, batch `6`, one A/B pair, category `homological-algebra`.

Artifacts owned by this batch:
`research/frontier-27-batch-6.pages.json`,
`research/frontier-27-batch-6.coverage.json`,
and this file.

---

## 1. Controlling design and drift

- The controlling A-page design is `research/plan-homological-algebra-track.md`
  lines `937-1060`. The second prompt match at line `1061` is only the B-page
  subsection, not a later amendment overriding the A-page instructions.
- I followed the current `research/plan-spec.json`, not the stale generated
  batch manifest.
- The design/spec drift is real and recorded here instead of decided locally:
  the design names `mapping-cones-cylinders-and-chain-triangles`, while the
  live spec names `mapping-cones-cylinders-and-chain-triangles-examples`,
  which still closes transitively through the A page.
- The design also requires
  `the-diagram-lemmas-in-an-abelian-category`; Step 0's drift review on
  August 31, 2026 added that backward edge to `research/plan-spec.json`.
  The generated batch manifest still missed it, so this scaffold syncs the
  batch file to the live plan.

## 2. Scope and split decision

- A-page item count: `35` total.
  `30` structural items and `5` false statements.
- B-page item count: `8`.
- No split is needed. The A page stays `25` items below the 60-item cap.
- The design's chosen route is preserved:
  build the connecting morphism from the categorical snake arrow on the
  quotient/kernel diagram, keep the elementwise lift-boundary formula as a
  module-specialized verification item only, and separate chain splitting from
  merely degreewise splitting.

## 3. Duplicate-risk resolutions

- Item `18` versus item `27` looked redundant as written in the design text.
  I resolved that by taking item `18` to be the full any-two-of-three
  quasi-isomorphism result for a morphism of short exact sequences, while item
  `27` is the conventional short-five-lemma specialization where the outer two
  vertical maps are quasi-isomorphisms and the middle one is the target.
- Item `22` would duplicate the already-published HA-3 cone criterion if it
  were scaffolded as a fresh standalone theorem. I kept it only as the design's
  requested cross-check corollary: item `20` re-derives the criterion by
  exactness, and the corollary is required to cite the published
  `thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic`
  rather than compete with it.

## 4. Dependency and proof-shape decisions

- Item `2` uses the Stacks-style quotient/kernel diagram from the source proof
  of the long exact sequence. That is why the batch depends genuinely on
  `the-diagram-lemmas-in-an-abelian-category`: the snake construction is not
  re-proved here.
- Items `3` through `5` isolate the actual descent route:
  snake arrow on cycles, proof that boundaries are killed, then quotient to
  homology.
- Items `7` through `10` keep exactness local. The page theorem is assembled
  only after the four exactness nodes have been proved one by one.
- Items `14` and `15` use the published cochain reindexing convention already
  on disk. I did not scaffold a second independent cochain construction.
- Item `19` states the vanishing criterion with a chain section/retraction
  explicitly. The false statement
  `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map`
  is then refuted against the already-published cone example from HA-3.
- Item `23` uses the published three-cone calculation and relative-homology
  definition from HA-3 rather than rebuilding either.
- Items `25`, `28`, and `30` are real page consequences but not source TOC
  headings, so they are carried in `canonical` coverage rows rather than being
  forced onto unrelated source headings.

## 5. Source support

- Primary textbook treatment:
  Weibel Chapter 1, Section `1.3` and the `1.5.7`-`1.5.7` cone comparison
  block back the general long exact sequence, the elementwise formula,
  naturality, the cohomology analogue, the acyclicity two-out-of-three
  corollary, and the cone-sign comparison.
- Independent lecture-note treatment:
  Sharifi Remark `2.7.12`, Theorem `2.7.13`, and Definition `3.1.1` back the
  cohomology long exact sequence, degreewise exactness reminder, and the
  concrete homological delta-functor packaging.
- Independent categorical open treatment:
  Stacks `12.13.6` and `12.13.12` back the quotient/kernel snake diagram, the
  long exact homology sequence, and the cohomology sequence's shift-compatible
  functorial form.
- I did look for Rotman because the design lists it, but the live search only
  surfaced metadata and paywalled landing pages rather than a fetch-verifiable
  full-text copy. Under the URL-discipline rule, that is not a usable harvest
  row, so I did not record Rotman as evidence.

## 6. Known limits

- The exact-functor transport theorem on this page is source-grounded through
  existing published dependencies plus the new naturality theorem, not through a
  new external source heading. That is deliberate and recorded in the canonical
  coverage row.
- The six-term exact-sequence proposition is likewise a collapsed-window
  consequence of the long exact sequence rather than a separately harvested TOC
  theorem.
- No forward references are needed.

### Alpha step-3 repair on current bytes

- On Monday, August 31, 2026, Alpha redirected
  `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences`
  away from the foreign B-page example
  `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups`
  and onto the local A-page carrier
  `prop-elementwise-formula-for-the-connecting-map-in-module-categories`.
  The design only needs the lift-boundary formula, not that foreign example
  home.
- On the same current bytes,
  `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-6.coverage.json`
  passes with `3/3` sources fetch-verified. The earlier resolver-failure note
  below is historical environment evidence, not a current scaffold blocker.

## 7. Validator state on August 31, 2026

- `node tools/coverage-checklist.mjs research/frontier-27-batch-6.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-27-batch-*.pages.json`
  -> `content-policy: 298 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the repository's standing `redundant-prereq` advisories only.
- `node tools/source-fetch-check.mjs --coverage research/frontier-27-batch-6.coverage.json --stamp`
  failed for all three recorded sources with `EAI_AGAIN`.
- `node tools/url-sweep.mjs --coverage research/frontier-27-batch-6.coverage.json --out /tmp/frontier-27-batch-6-url-liveness.json --recover --fail-on-dead`
  also failed for all three with `curl: (6) Could not resolve host`.

This is a local resolver/network blocker, not a mathematical or harvest-shape
failure of the batch files themselves: the URLs were readable in the browsing
tool during source selection, but the repo-local fetch validators could not
resolve any of the three hosts from this shell session. Because no live fetch
or archive fetch succeeded inside the validator environment, the coverage file
is intentionally left unstamped rather than carrying invented `fetch_verified`
metadata.

## Step-3 fix pass

- `Finding 3` — `accepted`; no pushback and no further manifest edit were
  needed on the current August 31, 2026 bytes.
  Evidence: item `3.` in
  `research/frontier-27-alpha-b-step3-scaffold-review.md` requires
  `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences` to
  stop depending on the foreign B-page example
  `ex-the-connecting-morphism-computed-for-a-short-exact-sequence-of-abelian-groups`
  and instead close from the local A-page carrier
  `prop-elementwise-formula-for-the-connecting-map-in-module-categories`.
  The current record in `research/frontier-27-batch-6.pages.json` already lists
  the example with deps
  `thm-naturality-of-the-homology-connecting-morphism` and
  `prop-elementwise-formula-for-the-connecting-map-in-module-categories`, with
  no foreign B-page dependency left.
  Changed scaffold record:
  `research/frontier-27-batch-6.pages.json` item
  `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences`.
  Coverage impact: none; `research/frontier-27-batch-6.coverage.json` already
  supports the local carrier proposition and needed no source-row repair in
  this fix pass.

## Step-5 authoring

- Authored all batch-6 page material on Monday, August 31, 2026:
  `library/homological-algebra/long-exact-sequences-in-homology.md`,
  `library/homological-algebra/long-exact-sequences-in-homology-examples.md`,
  and `research/frontier-27-batch-6.proof-contracts.json`.
- Authored all 43 scoped item files, all `status: draft`.
  A-page definitions:
  `def-morphism-of-short-exact-sequences-of-complexes`,
  `def-preconnecting-arrow-on-cycles`,
  `def-connecting-morphism-in-homology`,
  `def-homological-delta-functor-carried-by-homology-of-complexes`.
  A-page proof-bearing items:
  `lem-the-cycle-boundary-diagram-associated-to-a-short-exact-sequence-of-complexes`,
  `lem-the-preconnecting-arrow-annihilates-boundaries`,
  `prop-elementwise-formula-for-the-connecting-map-in-module-categories`,
  `lem-exactness-at-the-homology-of-the-left-complex`,
  `lem-exactness-at-the-homology-of-the-middle-complex`,
  `lem-exactness-at-the-homology-of-the-right-complex`,
  `lem-exactness-at-the-target-of-the-connecting-map`,
  `thm-long-exact-sequence-in-homology`,
  `thm-naturality-of-the-homology-connecting-morphism`,
  `cor-the-long-exact-homology-sequence-is-natural`,
  `thm-long-exact-sequence-in-cohomology`,
  `thm-naturality-of-the-cohomology-connecting-morphism`,
  `cor-a-short-exact-sequence-with-acyclic-middle-identifies-neighbouring-homology`,
  `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes`,
  `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram`,
  `prop-the-connecting-morphism-vanishes-for-a-chain-split-short-exact-sequence`,
  `thm-the-cone-long-exact-sequence`,
  `prop-the-cone-connecting-map-agrees-with-the-shifted-identity-up-to-the-declared-sign`,
  `cor-the-cone-criterion-from-the-general-long-exact-sequence`,
  `thm-long-exact-sequence-of-relative-homology-for-a-composable-pair`,
  `cor-a-chain-map-between-acyclic-complexes-has-acyclic-cone`,
  `prop-an-exact-functor-carries-the-long-exact-homology-sequence-to-the-corresponding-long-exact-sequence`,
  `cor-homology-of-a-degreewise-split-direct-sum-sequence`,
  `cor-short-five-lemma-for-quasi-isomorphisms`,
  `prop-a-short-exact-sequence-of-complexes-gives-six-term-exact-sequences-when-homology-is-concentrated-in-two-degrees`,
  `prop-homology-of-complexes-satisfies-the-delta-functor-naturality-and-exactness-laws`,
  `fs-the-connecting-morphism-is-defined-by-choosing-one-lift-with-no-independence-proof`,
  `fs-a-degreewise-split-short-exact-sequence-of-complexes-has-zero-connecting-map`,
  `fs-the-homology-functor-is-exact-on-short-exact-sequences-of-complexes`,
  `fs-the-cohomology-connecting-morphism-lowers-degree`,
  `fs-naturality-of-the-long-exact-sequence-follows-without-checking-the-connecting-square`.
  B-page items:
  `ex-the-connecting-map-for-a-short-exact-sequence-of-two-term-complexes`,
  `ex-a-degreewise-split-sequence-with-nonzero-connecting-map`,
  `ex-the-cone-long-exact-sequence-for-multiplication-by-m`,
  `ex-two-out-of-three-for-a-diagram-of-finite-complexes`,
  `ex-a-six-term-cohomology-sequence`,
  `cex-homology-is-not-an-exact-functor`,
  `ex-naturality-of-a-connecting-map-under-a-map-of-coefficient-sequences`,
  `ex-relative-homology-of-a-composable-pair-of-stalk-complexes`.
- Provenance rationale by claim type:
  `literature-derived` statements cover the standard long-exact-sequence,
  cohomology, naturality, and chain-splitting claims directly backed by the
  recorded Weibel / Stacks / Sharifi harvest.
  `ai-altered` statements cover the local packaging consequences, false
  statements, and concrete examples whose proofs were written here in the
  library's dependency-closed notation instead of copied from one printed
  source heading.
  Every proof-bearing item uses `provenance.proof: ai-generated`; every
  definition uses `provenance.proof: not-applicable`.
- No claim was dropped at Step 5.
  No forward references were introduced.
  No recorded-not-proved fallback was used.
- The only canonical precheck repair was the required phase renumbering on
  `cor-two-out-of-three-for-acyclicity-in-a-short-exact-sequence-of-complexes`
  and
  `cor-two-out-of-three-for-quasi-isomorphisms-in-a-short-exact-sequence-diagram`,
  from `1.1 / 2.1 / 3.1` to `1.1 / 1.2 / 2.1`.
- The batch proof-contract now contains 39 scoped proof-bearing items, 93 exact
  citation rows, one derivation row per numbered proof step, and all eight
  boundary dispositions per item.
- Gates actually run on the final bytes, Monday, August 31, 2026:
  `node tools/tsx-run.mjs tools/precheck.mts ...batch-6 proof-bearing items...`
  -> `39 checked, 0 failing`;
  `node tools/content-policy.mjs research/frontier-27-batch-6.pages.json`
  -> `43 scoped item(s), 0 error(s), 0 warning(s)`;
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the repository's standing `redundant-prereq` advisories;
  `node tools/proof-contract.mjs research/frontier-27-batch-6.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 39/39 item(s) checked`;
  `node tools/citation-fidelity.mjs research/frontier-27-batch-6.proof-contracts.json --fail-on-missing-quote`
  -> `93 citation(s)`, `QUOTE NOT FOUND — none`, `WIDENING CANDIDATES — none`;
  `git diff --check`
  -> clean.
- No new blocker remains inside batch 6. The only non-batch-local noise in the
  validation outputs is the repository's standing whole-plan
  `redundant-prereq` advisory set.

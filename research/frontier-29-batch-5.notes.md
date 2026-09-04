# frontier-29 · Beta · batch 5 scaffold notes

Run `frontier-29`, batch `5`, one A/B pair, category `functional-analysis`.
Author: Beta. Session date: Tuesday, September 1, 2026.

Artifacts owned by this batch:
`research/frontier-29-batch-5.pages.json`,
`research/frontier-29-batch-5.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-functional-analysis-track.md` line `31`
- `research/plan-functional-analysis-track.md` lines `424-476`
- `research/frontier-29-alpha-step0-drift.md` lines covering
  `finite-dimensional-normed-spaces-and-riesz-lemma`

The controlling design is the single FA-3 block at
`research/plan-functional-analysis-track.md:424-476`.

Shape after scaffolding:

- `finite-dimensional-normed-spaces-and-riesz-lemma` (A): **16 items**
- `finite-dimensional-normed-spaces-and-riesz-lemma-examples` (B): **7 items**

The A page stays well below the `60`-item split ceiling, so no split is
proposed.

The scaffold keeps the design's route intact:

- coordinate-space identification first, then the finite-dimensional
  consequences for completeness, closedness, and bounded linear maps;
- Riesz lemma and its optional DC separated-sequence witness before the
  compactness theorems that use them;
- the compact-unit-ball and local-compactness characterizations written in the
  design's choice-aware form;
- the Banach/Hamel-basis seam kept explicit rather than buried under a generic
  citation to Baire; and
- the based Kuratowski isometry before the Kuratowski-Wojdyslawski embedding,
  with the convex-hull wording kept exactly as the design warns.

One local order repair was necessary for dependency closure:

- `lem-riesz-lemma` is placed before
  `thm-locally-compact-normed-space-iff-finite-dimensional`, although the design
  prose lists the theorem first. The design itself says the theorem's reverse
  implication uses Riesz's lemma, so the manifest reverses them and records the
  reason here instead of keeping a forward edge.

---

## 2. Drift and local seams

### No page-level drift

- The design and `research/plan-spec.json` agree on order `288.051`,
  companion order `288.052`, title, category, and declared page prerequisite
  `bounded-linear-operators-and-quotient-spaces-examples`.
- `research/frontier-29-alpha-step0-drift.md` already records
  `VERDICT: no-drift` for this page.
- I therefore left the page-level `requires` list exactly as the live spec
  states it.

### Local seam 1: the page stays pre-Hahn-Banach even though one source does not

- The FA-3 design is explicit that Hahn-Banach is not required here.
- Teschl's read range includes Hahn-Banach consequences that can also prove
  finite-dimensional compactness statements.
- I harvested those consequences only to defer them to
  `the-analytic-hahn-banach-theorem`, and I kept FA-3's actual proof spine on
  Riesz lemma plus finite nets as the design requires.

### Local seam 2: the Banach/Hamel-basis item needs a sharper Baire route than the published theorem on disk

- The published item `thm-baire-category-for-complete-metric-spaces` on disk is
  the unrestricted complete-metric form and explicitly assumes dependent choice.
- The FA-3 design instead demands the sharper countable-dense-set route for
  `thm-banach-space-no-countably-infinite-hamel-basis`.
- The manifest therefore records the theorem with that sharper route and keeps
  `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost` as a
  separate ledger item. I did not silently downgrade the theorem to the
  published DC form.

### Local seam 3: two nearby draft recorded-not-proved remarks overlap this page's theorem content

- `items/rem-banach-no-countable-hamel-basis.md` is a draft recorded-not-proved
  remark with essentially the same mathematical claim as the planned theorem
  `thm-banach-space-no-countably-infinite-hamel-basis`.
- `items/rem-kuratowski-wojdyslawski.md` is a draft recorded-not-proved remark
  with essentially the same headline statement as the planned theorem
  `thm-kuratowski-wojdyslawski-embedding`.
- I kept the new theorem ids because this page needs proved-here scaffold items,
  not earlier citation stubs. The duplicate-content seam is recorded here rather
  than left silent.

### Local seam 4: the B-page choice-strength remark could not reuse the existing draft id

- The repository already has `items/rem-discontinuous-functional-choice-strength.md`.
- `content-policy --manifest-only` rejects reusing an already-authored item id in
  a future-batch scaffold, even when the old item is only a draft.
- I therefore kept the design's fresh id
  `rem-discontinuous-functionals-on-banach-spaces-and-choice` and recorded this
  as an intentional duplicate that will need reconciliation at authoring time.

### Local seam 5: the compact-operator corollary keeps the criterion inline

- The design wants the corollary "the identity on an infinite-dimensional normed
  space is not compact", but there is no published compact-operator definition
  below this page.
- I did not mint a new standalone compact-operator definition here, because the
  page's actual load-bearing content is just the unit-ball image criterion and
  the noncompactness of that image. The corollary's strategy states that
  criterion explicitly so the scaffold stays dependency-closed.

---

## 3. Source stack actually read

The A page carries the formal coverage harvest. Included rows may land on the A
page or on its B companion.

Recorded harvest sources:

1. Theo Buhler and Dietmar A. Salamon, *Functional Analysis*:
   `https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon`
2. Gerald Teschl, *Topics in Real and Functional Analysis*:
   `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`
3. Andrew Lin and Casey Rodriguez, MIT 18.102, *Introduction to Functional
   Analysis*:
   `https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf`
4. Paul Howard and Eleftherios Tachtsis, *On infinite-dimensional Banach spaces
   and weak forms of the axiom of choice*:
   `https://commons.emich.edu/fac_sch2017/127/`
5. Richard S. Palais, *Homotopy Theory of Infinite Dimensional Manifolds*:
   `https://studyres.com/doc/4327981/homotopy-theory-of-infinite-dimensional-manifolds%3F`

### Why these five

- Buhler-Salamon and Teschl are the two independent functional-analysis
  treatments the design asks for.
- MIT 18.102 is the third independent treatment the design explicitly names for
  the finite-dimensional compactness seam and the standard `ell^2` witness.
- Howard-Tachtsis is the primary-source audit for the exact choice-strength
  claims the design attaches to Riesz/Mazur and to the compact-unit-ball
  characterization.
- Palais is the readable treatment that fixes the exact
  Kuratowski-Wojdyslawski wording the design warns about: closed in the
  algebraic convex hull, not in the whole Banach space.

### Source repair and access handling

#### Buhler-Salamon

- The design names the ETH-hosted PDF
  `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`.
- That exact URL was not reader-openable in this session.
- I therefore reopened the same text through the live Scribd HTML view and kept
  the ETH URL as `original_url` provenance in coverage.

#### Howard-Tachtsis

- The EMU repository page was reader-openable, but only the bibliographic page
  and abstract were visible in-session.
- I harvested only the claims explicitly visible in that abstract and did not
  pretend to have read theorem numbering or full proofs from the paywalled
  publication.

#### Palais

- The DOI and ScienceDirect landing pages exposed metadata and abstract, but not
  a readable full-text transcription in this session.
- I therefore read the same paper through the live transcript mirror at the
  recorded `studyres` URL and preserved the DOI as `original_url` provenance in
  coverage.

---

## 4. Scaffold decisions and proof-route choices

### Decision 1: keep the compactness results on the Riesz-and-net route

- The design explicitly wants the infinite-dimensional direction of
  `thm-closed-unit-ball-compact-iff-finite-dimensional` to be ZF, using a finite
  `alpha`-net and one application of Riesz's lemma.
- The manifest keeps exactly that route.
- Teschl's Hahn-Banach-based alternative is harvested only as deferred material
  for FA-4.

### Decision 2: keep the Banach/Hamel-basis theorem as a theorem, not a remark

- There is already a draft remark on disk with the same headline claim.
- I still scaffolded a theorem because the FA-3 design makes the statement
  load-bearing: the B-page polynomial counterexample depends on it, and the
  notes must isolate the sharper choice-cost issue rather than merely citing a
  recorded-not-proved remark.

### Decision 3: keep the choice-cost warning separate from the theorem

- `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost`
  remains its own ledger item.
- That separation keeps the theorem mathematical and lets the foundational seam
  be cited later without forcing later pages to restate the whole Banach/Hamel
  argument.

### Decision 4: keep the Kuratowski tail on real-valued function spaces

- The design's item 14 already fixes the target as `C_b(M)` of bounded
  real-valued continuous functions.
- I kept that choice, so the convex-hull clause in item 16 lives in an honest
  real Banach-space setting and does not need an additional complex-convexity
  detour.

### Decision 5: the B page stays mostly worked examples, not a second theorem page

- `ex-explicit-equivalence-constants-for-standard-norms-on-kn`,
  `ex-an-infinite-separated-subset-of-the-unit-sphere`,
  `ex-kuratowski-embedding-of-a-finite-metric-space`, and
  `ex-choice-free-discontinuous-functional-on-c00` are intentionally concrete
  companion computations.
- `cex-heine-borel-fails-in-ell-two` is the source-backed standard witness from
  the design.
- `cex-polynomial-space-admits-no-complete-norm` packages the A-page Banach and
  Hamel-basis theorem into the explicit polynomial example the design asks for.

---

## 5. Validation

Commands run on Tuesday, September 1, 2026:

- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-5.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/coverage-checklist.mjs research/frontier-29-batch-5.coverage.json --require-destination`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-5.coverage.json`
- `git diff --check -- research/frontier-29-batch-5.pages.json research/frontier-29-batch-5.coverage.json research/frontier-29-batch-5.notes.md`

Results are recorded after the final validator pass below.

- `content-policy --manifest-only`:
  `content-policy: 23 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan`:
  passed on the current plan bytes. The final summary was:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.
  NOTE: 643 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`

---

## 6. Reharvest addendum on Wednesday, September 2, 2026

This addendum supersedes the dead-source parts of Section 3 and the original
validation battery in Section 5. The page/item scaffold did not change; only
the batch coverage and these notes were repaired.

### Dead source 1: Buhler-Salamon via Scribd/Wayback

- Dead source on the reharvest plan:
  `https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon`
- Also checked before re-sourcing:
  `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`,
  `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana-ams.pdf`,
  and the previously recorded Wayback snapshot of the Scribd page.
- Result:
  no same-document URL or complete archive copy was usable in this environment
  on Wednesday, September 2, 2026. The author index page still lists the work,
  but the direct ETH PDF targets were not reader-openable here, and the old
  Scribd/Wayback route is no longer a liveness-usable full-text citation.

Replacement harvests written into coverage:

1. `https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf`
   - Affected result:
     `the basis-dependent coordinate-space identification with K^n`
     -> `thm-coordinate-map-for-a-finite-dimensional-normed-space`
   - Affected result:
     `Corollary 1.2.7, finite-dimensional subspaces are closed`
     -> `cor-finite-dimensional-subspaces-are-closed`
   - Source actually read:
     Daniel Daners, *Introduction to Functional Analysis*, Chapter II,
     Section 10 `Finite Dimensional Normed Spaces`, through Corollary 10.2.

2. `https://heil.math.gatech.edu/papers/bases.pdf`
   - Affected result:
     `the Hamel-basis construction of an unbounded linear functional`
     -> `rem-discontinuous-functionals-on-banach-spaces-and-choice`
   - Source actually read:
     Christopher Heil, *A Basis Theory Primer*, Chapter III,
     Section 4 `Bases in Banach Spaces`, the axiom-of-choice/Hamel-basis
     paragraph and Example 4.1.

### Dead source 2: Palais via StudyRes transcript

- Dead source on the reharvest plan:
  `https://studyres.com/doc/4327981/homotopy-theory-of-infinite-dimensional-manifolds%3F`
- Same-document URLs checked before re-sourcing:
  `https://doi.org/10.1016/0040-9383(66)90002-4`
  and the Elsevier API metadata endpoints for
  `PII:0040938366900024`.
- Result:
  none of those gave a liveness-usable same-document full text in this
  environment on Wednesday, September 2, 2026, and I did not recover a complete
  archive copy of the Palais paper.

Replacement harvest written into coverage:

1. `https://dokumen.pub/topology-12th-printingnbsped-9780697068897.html`
   - Affected result:
     `the sentence before Lemma 6.4: the Kuratowski embedding K:X->B(X) is isometric and K(X) is closed in its convex hull`
     -> `thm-kuratowski-distance-map-is-an-isometry`
   - Affected result:
     `Lemma 6.4, every metrizable space can be embedded as a closed subspace of a convex subset of a Banach space`
     -> `thm-kuratowski-wojdyslawski-embedding`
   - Source actually read:
     James Dugundji, *Topology*, Chapter XIII, Section 5 `Embedding of Y in
     C(Y)`, especially Theorem 5.2 and its proof.

### Changed claim constraint recorded for Alpha

- The Dugundji replacement states the theorem at the level of **metric spaces**
  directly: `(Y,d)` embeds isometrically into `C(Y)` and its image is closed in
  its convex hull.
- The scaffolded item kept the design's **metrizable-space** statement and
  Banach-space target. That is now carried as the immediate metrizable corollary
  of the stronger Dugundji metric-space formulation, not as a quote from
  Palais's Lemma 6.4.

### Coverage source stack after reharvest

On the reharvest bytes, the live coverage rows read from these six sources:

1. Daniel Daners, *Introduction to Functional Analysis*.
2. Gerald Teschl, *Topics in Real and Functional Analysis*.
3. Andrew Lin and Casey Rodriguez, MIT 18.102, *Introduction to Functional
   Analysis*.
4. Paul Howard and Eleftherios Tachtsis, *On infinite-dimensional Banach spaces
   and weak forms of the axiom of choice*.
5. Christopher Heil, *A Basis Theory Primer*.
6. James Dugundji, *Topology*.

## 7. Reharvest validation on Wednesday, September 2, 2026

### Fetch receipts

Local DNS from this runner is restricted, so I used the established
`verified_via: "web-open"` receipt pattern for the three replacement sources:

- Daners: opened in the web reader as a 123-page PDF.
- Heil: opened in the web reader as a 97-page PDF.
- Dugundji: opened in the web reader as a full-text HTML mirror containing the
  Chapter XIII, Section 5 theorem text.

That left every source row stamped for the gate that checks receipt presence.

### Commands and results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-29-batch-5.coverage.json`
  -> `coverage-checklist: 1 page(s), 27 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-5.coverage.json --stamp`
  -> `source-fetch-check: 6/6 source(s) fetch-verified (0 newly stamped)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-5.coverage.json`
  -> `source-fetch-check: 6/6 source(s) fetch-verified`
- `node tools/url-sweep.mjs --coverage research/frontier-29-batch-5.coverage.json --out /tmp/frontier-29-batch-5.url-sweep.json --recover --fail-on-dead`
  -> blocked locally by runner DNS, not by batch source choice.
- `node tools/source-backing.mjs --coverage research/frontier-29-batch-5.coverage.json --liveness /tmp/frontier-29-batch-5.url-sweep.json`
  -> `source-backing: 9 authored result(s) have no openable source left`
  because the fresh liveness artifact marks every batch URL dead at DNS
  resolution.

Exact local `url-sweep` failure mode on this runner:

- `https://commons.emich.edu/fac_sch2017/127/`
  -> `curl: (6) Could not resolve host: commons.emich.edu`
- `https://dokumen.pub/topology-12th-printingnbsped-9780697068897.html`
  -> `curl: (6) Could not resolve host: dokumen.pub`
- `https://heil.math.gatech.edu/papers/bases.pdf`
  -> `curl: (6) Could not resolve host: heil.math.gatech.edu`
- `https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf`
  -> `curl: (6) Could not resolve host: ocw-preview.odl.mit.edu`
- `https://www.maths.usyd.edu.au/u/athomas/FunctionalAnalysis/daners-functional-analysis-2017.pdf`
  -> `curl: (6) Could not resolve host: www.maths.usyd.edu.au`
- `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`
  -> `curl: (6) Could not resolve host: www.uomustansiriyah.edu.iq`

This is the same local DNS/network blocker pattern already seen on other
frontier-29 batches. It does **not** justify another batch-local reharvest: the
replacement sources were all re-opened successfully in the web reader during
this dispatch, and the repaired coverage no longer depends on the specific
dead Scribd or StudyRes citations that triggered `reharvest-1-b5`.

The downstream `source-backing` failure is therefore mechanical rather than
mathematical: with every URL marked dead in `/tmp/frontier-29-batch-5.url-sweep.json`,
the tool reports the nine affected scaffold items as unbacked even though the
replacement sources were re-read successfully in the web reader. No additional
batch-local source swap is justified from that runner-local DNS failure alone.

## Step-3 fix pass

Fix pass run on Wednesday, September 2, 2026 (Australia/Sydney local time)
against the current batch-5 scaffold bytes and the stable review in
`research/frontier-29-alpha-e-step3-scaffold-review.md`.

### B5-1 — `finite-dimensional-normed-spaces-and-riesz-lemma` is missing a live full-text carrier for `lem-riesz-lemma` — **applied**

- Disposition:
  accepted. I repaired the source sufficiency defect by adding a live
  lecture-note source with a full-text proof of Riesz's lemma and the
  local-compactness corollary on the same pre-Hahn-Banach route. No page-manifest
  edit was needed.
- Evidence:
  `research/frontier-29-alpha-e-step3-scaffold-review.md` identifies `B5-1` as
  a missing full-text carrier for `lem-riesz-lemma`. Tomasz Kochanek,
  *Functional analysis, Lecture 1*, at
  `https://www.impan.pl/~tkoch/FA_lecturenotes/lecture1.pdf`, was re-opened in
  the web reader as a 5-page PDF. PDF p. 4 contains the distance-to-a-subspace
  definition, `Lemma 1.3 (Riesz' lemma)`, and its proof; PDF pp. 4-5 contain
  `Corollary 1.8`, the locally-compact-if-and-only-if-finite-dimensional
  result. The Howard-Tachtsis abstract row remains in coverage as foundational
  corroboration, but it is no longer the only carrier for `lem-riesz-lemma`.
- Changed scaffold record:
  `research/frontier-29-batch-5.coverage.json` gained the Kochanek source row
  and its harvested `Lecture 1`, `Lemma 1.3`, and `Corollary 1.8` results.
  `research/frontier-29-batch-5.notes.md` gained this fix-pass receipt.
  `research/frontier-29-batch-5.pages.json` is unchanged.

Current validator evidence on the Step-3 fix-pass bytes:

- `node -e "JSON.parse(require('fs').readFileSync('research/frontier-29-batch-5.pages.json','utf8')); JSON.parse(require('fs').readFileSync('research/frontier-29-batch-5.coverage.json','utf8')); console.log('json-parse: ok')"`
  passed: `json-parse: ok`.
- `node tools/coverage-checklist.mjs research/frontier-29-batch-5.coverage.json --require-destination`
  passed: `coverage-checklist: 1 page(s), 30 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-29-batch-*.pages.json`
  passed: `content-policy: 753 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-29-batch-5.coverage.json`
  passed: `source-fetch-check: 7/7 source(s) fetch-verified`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` and ended in `OK`; it again emitted only the repository's
  standing out-of-batch `redundant-prereq` advisories, with no batch-5
  closure, cycle, forward-reference, B-page dependency, unresolved-id, or
  item-cap defect. The terminal receipt was:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.
  NOTE: 643 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```
- `git diff --check -- research/frontier-29-batch-5.pages.json research/frontier-29-batch-5.coverage.json research/frontier-29-batch-5.notes.md`
  passed with no whitespace errors.

## Step-5 authoring

- Authored page files:
  `library/functional-analysis/finite-dimensional-normed-spaces-and-riesz-lemma.md`
  and
  `library/functional-analysis/finite-dimensional-normed-spaces-and-riesz-lemma-examples.md`.
- Authored A-page items:
  `thm-coordinate-map-for-a-finite-dimensional-normed-space`,
  `thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent`,
  `cor-finite-dimensional-normed-spaces-are-banach`,
  `cor-finite-dimensional-subspaces-are-closed`,
  `cor-linear-maps-with-finite-dimensional-domain-are-bounded`,
  `lem-riesz-lemma`,
  `thm-locally-compact-normed-space-iff-finite-dimensional`,
  `lem-dependent-choice-riesz-separated-unit-sequence`,
  `thm-closed-unit-ball-compact-iff-finite-dimensional`,
  `cor-infinite-dimensional-closed-unit-ball-is-not-compact`,
  `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact`,
  `thm-banach-space-no-countably-infinite-hamel-basis`,
  `rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost`,
  `def-kuratowski-distance-map`,
  `thm-kuratowski-distance-map-is-an-isometry`,
  and `thm-kuratowski-wojdyslawski-embedding`.
- Authored B-page items:
  `ex-explicit-equivalence-constants-for-standard-norms-on-kn`,
  `ex-an-infinite-separated-subset-of-the-unit-sphere`,
  `cex-heine-borel-fails-in-ell-two`,
  `cex-polynomial-space-admits-no-complete-norm`,
  `ex-kuratowski-embedding-of-a-finite-metric-space`,
  `rem-discontinuous-functionals-on-banach-spaces-and-choice`,
  and `ex-choice-free-discontinuous-functional-on-c00`.
- Proof-contract output authored at
  `research/frontier-29-batch-5.proof-contracts.json`.
- Provenance rationale:
  the source-backed classical statements and the two choice-ledger remarks are
  tagged `literature-derived`; the short corollary-level repackagings
  (`cor-linear-maps-with-finite-dimensional-domain-are-bounded`,
  `cor-infinite-dimensional-closed-unit-ball-is-not-compact`,
  `cor-identity-on-an-infinite-dimensional-normed-space-is-not-compact`, and
  `thm-banach-space-no-countably-infinite-hamel-basis`) are tagged
  `ai-altered` where the page-local formulation is sharper than a single
  harvested theorem heading; every proved item is tagged `proof: ai-generated`;
  the definition and remark items keep `proof: not-applicable`.
- Narrowed or corrected claims:
  none dropped. One mathematical scaffold correction was required inside
  `lem-riesz-lemma`: the approximate minimizer must satisfy
  `||y-m|| < d/alpha`, not `d/(1-alpha)`, for the written lower bound
  `dist(x,M) > alpha`. The Banach/Hamel item was written with the explicit
  separable-complete nested-ball argument so the proof actually matches the
  design's sharper choice-cost claim.
- Dependency and scope correction:
  `thm-locally-compact-normed-space-iff-finite-dimensional` now declares
  `cor-finite-dimensional-subspaces-are-closed`, because the written reverse
  implication genuinely uses that earlier page item to close finite spans before
  applying Riesz's lemma.
- Blockers:
  none remain on the authored batch-5 items.
- Checks actually run on the authored bytes:
  `node tools/tsx-run.mjs tools/precheck.mts ...batch-5 proof-bearing items...`
  -> `20 checked, 0 failing — all clean`.
  `node tools/content-policy.mjs research/frontier-29-batch-5.pages.json`
  -> `content-policy: 23 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exited `0`; the terminal receipt remained the standing run-wide `OK`
  summary with only out-of-batch `redundant-prereq` advisories.
  `node tools/proof-contract.mjs research/frontier-29-batch-5.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 20/20 item(s) checked`.

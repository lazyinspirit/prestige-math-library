# frontier-22 · Beta-8 · batch notes — `subobject-lattices-generators-and-the-grothendieck-axioms`

## 1. Scope, control files, and owned artifacts

This batch owns one A/B pair:

- `subobject-lattices-generators-and-the-grothendieck-axioms`
- `subobject-lattices-generators-and-the-grothendieck-axioms-examples`

I read `AGENTS.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, the generated task
`research/frontier-22-beta-8.task.md`, the live manifest
`research/frontier-22-batch-8.pages.json`, and the cited design anchors in
`research/plan-category-theory-track.md` at lines 1918 and 2033. I also checked
the live autopilot state from `.autopilot/status.md` after the repo-local
`node --import tsx tools/autopilot/bin/autopilot.mts status --repo .` route
failed because `tsx` is not installed in this runner. The status file shows
`frontier-22` running and stage `1-scaffold` in flight on Friday, August 28,
2026.

Artifacts written by this dispatch:

- `research/frontier-22-batch-8.pages.json`
- `research/frontier-22-batch-8.coverage.json`
- this file

I did not edit plan structure, workflow state, published library content, or any
artifact outside batch 8.

## 2. Design/spec control and conflicts

### Controlling design sections

The task cites two locations in the same track file:

- `research/plan-category-theory-track.md:1918` is the `MA-9` A-page block
- `research/plan-category-theory-track.md:2033` is the companion B-page block

I treated them as a single controlling design unit rather than as competing
versions. The second anchor is not a later amendment changing the A page; it is
the continuation of the same `MA-9` block giving the B-page inventory, source
list, and traps. So the batch follows the A-page inventory at line 1918 and the
companion-page inventory plus source/trap register beginning at line 2033.

### Design/spec drift

There is one real design/spec conflict and I did not adjudicate it locally:

- design `requires` at `plan-category-theory-track.md:1921-1926`:
  `abelian-categories`, `reflective-subcategories-and-the-adjoint-functor-theorems`,
  `limits-and-colimits`, `composition-series-and-solvable-groups`,
  `free-modules-and-exact-sequences`, `chains-antichains-sperner-and-dilworth`
- live spec and batch manifest:
  `abelian-categories-examples`

The `order` agrees: both design and spec place the A page at `365.017`.

Per the batch brief, I kept the live spec edge and recorded the mismatch here.
`validate-plan` still accepts the scaffold because the item-level dependency graph
is closed even though the page-level `requires` line is narrower than the design.

## 3. Scaffold shape

The A page now has **54 items**:

- 48 affirmative items
- 6 `fs-` items

This matches the design's 54-item target and stays below the 60-item split
threshold, so no split is proposed.

The B page has **8 items**, matching the design count. The sheaf-denied slot was
filled with a verified substitute:

- `cex-an-abelian-category-with-no-nonzero-projective-object`
  now uses the category of finite abelian groups instead of sheaves

Key design decisions preserved in the scaffold:

- AB4 and AB5 are stated here in the primitive monomorphism/lattice form, not in
  the later exactness form.
- Modularity is a theorem, not a standing hypothesis.
- Group-theory ids already published on `composition-series-and-solvable-groups`
  are cited as instances and not re-used bare.
- `thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star` remains
  scaffolded as a theorem, but its strategy and notes explicitly preserve the
  design's contingency: if the direct proof does not close at authoring time, it
  is the designated conversion point to a sourced `rem-` with `proved_here:
  false`.

## 4. Source set and replacements

### Sources actually read for this scaffold

I read and harvested these URLs:

1. Daniel Murfet, `https://therisingsea.org/notes/AbelianCategories.pdf`
2. Grothendieck/Barr translation,
   `https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf`
3. Weibel Appendix A.4,
   `https://math.mit.edu/~hrm/palestine/weibel/A-category_theory_language.pdf`
4. Weibel chapters 1-4 extract,
   `https://locallyringed.space/Weibel%20Chapters%201-4.pdf`
5. Stacks 079B, `https://stacks.math.columbia.edu/tag/079B`
6. EGNO,
   `https://math.mit.edu/~etingof/egnobookfinal.pdf`
7. Parra-Saorín-Virili,
   `https://arxiv.org/pdf/2103.14159`
8. Abdulwahid thesis,
   `https://iro.uiowa.edu/view/pdfCoverPage?download=true&filePid=13730791840002771&instCode=01IOWA_INST`

This satisfies the standing two-treatment requirement and includes an eligible
primary treatment through Grothendieck's Tôhoku paper in the Barr translation.

### Design-source replacements

Two design rows were not carried into the coverage ledger as written:

- **Freyd, *Abelian Categories***:
  the design wants TAC Reprint 3, §3.3. In this runner the live TAC PDF could not
  be fetched locally at all (`EAI_AGAIN`), and I could not get a directly readable
  OCR slice through the web fetcher. I therefore reharvested the generator /
  epi-generator / well-powered material from Parra-Saorín-Virili §2, which
  explicitly states Definition 2.2 and Lemma 2.7.
- **Mac Lane, *CWM* §V.7**:
  the design wants Mac Lane's terminology remark. The live MIT PDF likewise could
  not be fetched locally, and the available direct web access to that full PDF was
  not workable in this dispatch. I therefore reharvested an accessible secondary
  treatment, Abdulwahid Definitions 1.38-1.39, which explicitly quotes Mac Lane's
  wording and preserves the `"generates" / "separates"` terminology split the
  design cares about.

I recorded both substitutions explicitly rather than silently copying the design's
source list into the coverage file.

### Source-shape decisions worth preserving

- I used the **Barr translation** rather than the French scan for the harvested
  Tôhoku row because it was directly readable in this dispatch. The notes still
  preserve the design trap that Grothendieck does **not** state the starred axioms
  and that the French source controls if AB6 ever becomes load-bearing.
- The **Stacks 079B** row is present for the modern AB3-AB5*, generator, and
  Grothendieck-category wording, even though Weibel also covers those axioms.
- The **EGNO** row is intentionally narrow: Jordan-Hölder plus the projective /
  injective definitions. I did not over-harvest projective covers or injective
  hulls, because this page does not use them.

## 5. Dependency and proof-strategy notes

- The modular-lattice block follows Murfet's interval route and keeps the
  corrected-typo warning at the center of item 6's strategy. I did not route this
  through Freyd's exercise, because the design explicitly forbids the
  embedding-theorem-dependent proof.
- The Jordan-Hölder block keeps the sequence
  `modularity -> butterfly -> Schreier -> Jordan-Hölder -> length additivity`,
  rather than flattening it into one long theorem.
- The generator block uses the cocomplete `generator iff canonical coproduct map
  is epic` statement as the load-bearing theorem, then pays that off with
  well-poweredness and the SAFT-facing corollary.
- The Grothendieck-axiom block records three separate traps from the design:
  AB4 vs AB4*, AB5 vs AB5*, and the fact that Grothendieck does not state the
  starred axioms.
- The projective/injective block stops at enough projectives for module
  categories and the published enough-injectives remark. It does **not** claim the
  harder theorem that every Grothendieck category has enough injectives.

## Controller recovery — Friday, August 28, 2026

The step-4 plan validator found one page-local forward reference: the
generator-characterisation theorem consumed the AB3/AB3* definition that
appeared later on this same page. The controller moved that unchanged definition
immediately before the theorem in both this batch manifest and the canonical
plan. No claim, dependency, or page prerequisite changed. The canonical
`validate-plan` check then passed, with the AB3/AB3* definition at item 24 and
the theorem at item 25.

## 6. Known limits before and after validation

- The page-level `requires` mismatch between design and spec is still open and is
  deliberately not fixed here.
- The Freyd and Mac Lane design sources are not in the coverage ledger as
  first-hand reads from their own URLs in this dispatch. They were replaced by the
  accessible harvested sources listed above, and the substitution is explicit.
- Only one source row currently carries a local `fetch_verified` receipt:
  the Barr translation row reuses the exact byte receipt already recorded on the
  same URL in `research/frontier-21-batch-9.coverage.json`. I did **not**
  fabricate new receipts for any other source.

## 7. Validator results on Friday, August 28, 2026

I ran the required scaffold-stage gates after writing the manifest and coverage.

- `node tools/coverage-checklist.mjs research/frontier-22-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-1.pages.json research/frontier-22-batch-2.pages.json research/frontier-22-batch-3.pages.json research/frontier-22-batch-4.pages.json research/frontier-22-batch-5.pages.json research/frontier-22-batch-6.pages.json research/frontier-22-batch-7.pages.json research/frontier-22-batch-8.pages.json research/frontier-22-batch-9.pages.json`
  -> `content-policy: 283 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with run-wide warnings only**. The tool ended with `OK`; the visible
  warnings were the existing `redundant-prereq` class elsewhere in the run, not a
  batch-8-specific unresolved id or dependency failure.

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-8.coverage.json --stamp`
  -> `source-fetch-check: 1/8 source(s) fetch-verified (0 newly stamped), 7 FAILED`
  with `EAI_AGAIN` on:
  `therisingsea.org`, `math.mit.edu`, `locallyringed.space`,
  `stacks.math.columbia.edu`, `arxiv.org`, and `iro.uiowa.edu`

- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-8.coverage.json --out /tmp/frontier-22-batch-8-url-liveness.json --recover --fail-on-dead`
  -> `url-sweep: 0/8 live; 8 failed; 0 recoverable from the archive; 0 suspect`
  and every failure was `curl: (6) Could not resolve host`

## 8. Interpretation of the source-gate failures

These source-gate failures are local transport failures in this runner, not
evidence that the harvested documents were not read:

- the same eight documents were opened and read through the web tool during this
  dispatch
- `coverage-checklist` passed on structure
- `content-policy --manifest-only` passed
- `validate-plan` passed
- both failing source tools stopped at **DNS resolution**, before any content-level
  challenge to the harvested locators or dispositions

So the precise blocker is:

**On Friday, August 28, 2026, the local runner could not resolve the source hosts,
so it could not mint fresh fetch receipts or liveness confirmations for seven of
the eight harvested URLs.**

If a later runner has working DNS, the next exact actions are:

1. Re-run `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-8.coverage.json --stamp`.
2. Re-run `node tools/url-sweep.mjs --coverage research/frontier-22-batch-8.coverage.json --out /tmp/frontier-22-batch-8-url-liveness.json --recover --fail-on-dead`.
3. If either tool then surfaces a true dead URL rather than a DNS failure,
   recover a same-text live or archived URL first; only then re-source.

## Step-3 fix pass

- `B8-1` — disposition: accepted as already applied on the live scaffold bytes.
  Evidence: `research/frontier-22-alpha-a-step3-scaffold-review.md` records the
  repair, and `research/frontier-22-batch-8.pages.json` now lists both page
  prerequisites `abelian-categories-examples` and
  `chains-antichains-sperner-and-dilworth`. The A-page item
  `cex-a-subobject-lattice-need-not-be-distributive` now computes the
  nondistributive `M_3` witness internally in
  $(\mathbb Z/2)\oplus(\mathbb Z/2)$ and depends on
  `def-lattice-distributive-lattice-and-order-ideal`, not on the published
  B-page counterexample. Changed scaffold record:
  `research/frontier-22-batch-8.pages.json`.
- Source verification evidence on the current bytes: every source row in
  `research/frontier-22-batch-8.coverage.json` now carries `fetch_verified`,
  and all eight recorded URLs opened successfully through the web fetcher on
  Friday, August 28, 2026. No coverage rewrite was needed in this fix pass.
- Required validators rerun on Friday, August 28, 2026:
  `node tools/coverage-checklist.mjs research/frontier-22-batch-8.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- Required validators rerun on Friday, August 28, 2026:
  `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-1.pages.json research/frontier-22-batch-2.pages.json research/frontier-22-batch-3.pages.json research/frontier-22-batch-4.pages.json research/frontier-22-batch-5.pages.json research/frontier-22-batch-6.pages.json research/frontier-22-batch-7.pages.json research/frontier-22-batch-8.pages.json research/frontier-22-batch-9.pages.json`
  -> `content-policy: 425 scoped item(s), 0 error(s), 0 warning(s)`.
- Required validators rerun on Friday, August 28, 2026:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing repository-wide `redundant-prereq`
  advisories outside this batch.

## Step-5 authoring

- Authored page files:
  `library/category-theory/subobject-lattices-generators-and-the-grothendieck-axioms.md` and
  `library/category-theory/subobject-lattices-generators-and-the-grothendieck-axioms-examples.md`.
- Authored A-page ids, lattice / image / Galois block:
  `def-modular-lattice`, `def-the-join-of-subobjects-in-an-abelian-category`,
  `thm-the-join-of-subobjects-is-their-least-upper-bound`,
  `thm-the-meet-of-subobjects-is-their-pullback`,
  `thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice`,
  `thm-the-subobject-lattice-of-an-abelian-category-is-modular`,
  `rem-the-published-modular-law-for-subgroups-is-the-instance`,
  `cex-a-subobject-lattice-need-not-be-distributive`,
  `thm-second-isomorphism-theorem-in-an-abelian-category`,
  `def-the-direct-image-and-inverse-image-of-a-subobject`,
  `thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection`,
  `cor-inverse-image-preserves-meets-and-direct-image-preserves-joins`,
  `cor-the-kernel-and-image-constructions-are-the-inverse-and-direct-images-along-a-morphism`.
- Authored A-page ids, length / Jordan-Holder block:
  `def-simple-object`,
  `def-composition-series-and-composition-factors-of-an-object`,
  `thm-zassenhaus-butterfly-lemma-in-an-abelian-category`,
  `thm-schreier-refinement-theorem-in-an-abelian-category`,
  `thm-jordan-holder-theorem-in-an-abelian-category`,
  `def-object-of-finite-length`,
  `thm-length-is-additive-along-a-subobject`,
  `thm-objects-of-finite-length-form-an-abelian-subcategory`,
  `rem-the-published-group-development-is-the-instance`.
- Authored A-page ids, generators / AB3-AB5 / Grothendieck block:
  `def-generator-and-cogenerator-of-a-category`,
  `def-the-axioms-ab3-and-ab3-star`,
  `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree`,
  `thm-a-locally-small-abelian-category-with-a-generator-is-well-powered`,
  `rem-generator-separator-and-the-three-inequivalent-looking-definitions`,
  `cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied`,
  `thm-a-generator-detects-equality-of-subobjects`,
  `def-the-axioms-ab4-and-ab4-star`,
  `def-the-axioms-ab5-and-ab5-star`,
  `thm-ab5-implies-ab4`,
  `def-grothendieck-category`,
  `thm-module-categories-are-grothendieck-categories`,
  `thm-abelian-groups-satisfy-ab4-star`,
  `cex-abelian-groups-do-not-satisfy-ab5-star`,
  `thm-a-nonzero-abelian-category-cannot-satisfy-both-ab5-and-ab5-star`,
  `cex-the-opposite-of-abelian-groups-does-not-satisfy-ab5`.
- Authored A-page ids, projective / injective / false-statement block:
  `def-projective-object`, `thm-projective-object-characterisations`,
  `def-injective-object`, `thm-injective-object-characterisations`,
  `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`,
  `thm-a-direct-summand-of-a-projective-is-projective`,
  `def-a-category-with-enough-projectives-and-with-enough-injectives`,
  `thm-module-categories-have-enough-projectives`,
  `rem-module-categories-have-enough-injectives-is-already-published`,
  `thm-a-projective-generator-detects-isomorphisms`,
  `fs-the-subobject-lattice-of-an-abelian-category-is-distributive`,
  `fs-every-abelian-category-has-a-generator`,
  `fs-every-object-of-an-abelian-category-has-a-composition-series`,
  `fs-ab4-implies-ab5`,
  `fs-a-generator-is-the-same-thing-as-a-projective-generator`,
  `fs-jordan-holder-needs-a-finiteness-hypothesis-only-on-the-category`.
- Authored B-page ids:
  `ex-the-subobject-lattice-of-a-cyclic-group-of-order-twelve`,
  `ex-the-subobject-lattice-of-a-two-dimensional-vector-space`,
  `ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism`,
  `ex-two-composition-series-of-a-module-refined`,
  `ex-the-ring-as-a-generator-of-its-module-category`,
  `cex-an-abelian-category-with-no-nonzero-projective-object`,
  `ex-a-directed-union-of-subgroups-meeting-a-fixed-subgroup`,
  `ex-length-computed-for-a-finite-abelian-group`.
- Created `research/frontier-22-batch-8.proof-contracts.json` for the `44`
  proof-bearing batch items and regenerated its `citations` and `derivations`
  from the final on-disk Facts and numbered proof steps.

### Provenance rationale

- Definitions and theorem statements taken directly from Murfet, Grothendieck,
  Weibel, EGNO, Freyd, Parra-Saorin-Virili, or the already-published library
  foundations are marked `provenance.statement: literature-derived`.
- Worked examples, false statements, and library-shaped packaging the sources do
  not state verbatim are marked `provenance.statement: ai-altered`.
- Every proof-bearing item in this batch is `provenance.proof: ai-generated`.
  Every definition and remark remains `proof: not-applicable`.
- No item statement is `ai-generated`, so no `generation` block was introduced
  and no generated statement became a dependency target.

### Claim-shape decisions

- The denied sheaf slot on the B page was authored as
  `cex-an-abelian-category-with-no-nonzero-projective-object` with the verified
  witness `\mathbf{FinAb}`. The proof uses the maximal cyclic $p$-power quotient
  argument, not the unavailable sheaf example.
- `ex-the-subobject-lattice-of-a-two-dimensional-vector-space` was specialized
  to `\mathbf F_2^2` so the intended `M_3` lattice is literally present on the
  page; over larger fields the two-dimensional subspace lattice is not finite.
- `thm-length-is-additive-along-a-subobject` was written in the standard
  two-of-three form together with the additive formula. That is stronger than
  the terse scaffold slogan, but it is the exact statement used by the next item
  to prove extension-closure of finite-length objects.
- The projective-side existence items keep the choice cost explicit:
  `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`
  names the arbitrary-family lift/extension choice, and
  `thm-module-categories-have-enough-projectives` is stated under AC.
- No planned item was dropped. No theorem was converted to a recorded-not-proved
  remark. No blocker remains inside batch 8.

### Validators run on Friday, August 28, 2026

- `node tools/tsx-run.mjs tools/precheck.mts $(node -e "const fs=require('fs'); const m=JSON.parse(fs.readFileSync('research/frontier-22-batch-8.pages.json','utf8')); process.stdout.write(m.flatMap(p=>p.items.map(it=>'items/'+it.id+'.md')).join(' '));")`
  -> `44 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-22-batch-8.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 44/44 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-8.proof-contracts.json --items-dir items`
  -> `105` citation rows over `44` authored items; no missing quotes; no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-22-batch-8.proof-contracts.json --items-dir items`
  -> `352` boundary rows; no contradicted dispositions; no template reuse warning.
- `node tools/content-policy.mjs research/frontier-22-batch-8.pages.json`
  -> `content-policy: 62 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> pass; ends with `OK` and reports only the standing run-wide
  `redundant-prereq` advisories outside this batch.

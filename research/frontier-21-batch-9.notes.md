# frontier-21 · Beta-9 · batch notes — `abelian-categories`

Run `frontier-21`, batch `9`, one A/B pair, category `category-theory`.
Author: Beta-9. Session date: Thursday, August 27, 2026.

Artifacts owned by this batch:
`research/frontier-21-batch-9.pages.json`,
`research/frontier-21-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and shape

Design locations opened:

- [research/plan-category-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-category-theory-track.md:1732)
- [research/plan-category-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-category-theory-track.md:1887)
- [research/plan-algebra-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-algebra-track.md:4674)

The controlling design is the `MA-8` block at
[research/plan-category-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-category-theory-track.md:1732)
with its companion B-page block at
[research/plan-category-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-category-theory-track.md:1887).
The algebra-track line is only a seam handoff saying that the tensor-product and
diagram-lemma prerequisites live elsewhere; it does not supply a competing page
shape.

Shape after scaffolding:

- `abelian-categories` (A): **55 items**
- `abelian-categories-examples` (B): **9 items**

The A page stays below the 60-item split threshold, so no split is proposed.

---

## 2. Design-vs-spec drift that I did not settle

The dispatch explicitly says to record drift and follow
`research/plan-spec.json` at page level rather than choosing one side locally.

### Finding 1 — page prerequisite drift is real

The MA-8 design block states:

`preadditive-and-additive-categories-and-biproducts`,
`limits-and-colimits`,
`free-modules-and-exact-sequences`,
`the-structure-of-finite-abelian-groups`

but the current `research/plan-spec.json` record for `abelian-categories` is:

`["preadditive-and-additive-categories-and-biproducts-examples"]`

I kept the manifest page-level `requires` at the spec value. The scaffold still
uses item-level `deps` on the published kernels/cokernels, subobject,
functor-category, module, and quotient results that the design genuinely needs.

### Finding 2 — no order drift here

The design and `research/plan-spec.json` both place the A page at order
`365.015` and the B page at `365.016`. No local adjudication was needed.

---

## 3. Source choices and coverage boundaries

Only the A page needs a harvest ledger.

Sources actually read and recorded:

1. Grothendieck/Barr, *Some aspects of homological algebra*, via Michael
   Barr's McGill-hosted PDF of the English translation:
   `https://www.math.mcgill.ca/barr/papers/gk.pdf`
2. The Stacks Project, Section 12.5:
   `https://stacks.math.columbia.edu/tag/00ZX`
3. The Stacks Project, Lemma 12.7.2:
   `https://stacks.math.columbia.edu/tag/010N`
4. Gautam Tamme, Algebra II lecture-notes index:
   `https://people.math.osu.edu/gautam.42/S21/AII/notes.html`
5. Gautam Tamme, Lecture 9:
   `https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf`
6. Gautam Tamme, Lecture 10:
   `https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture10.pdf`
7. Junhan Tan, *The Freyd-Mitchell Embedding Theorem*:
   `https://arxiv.org/pdf/1901.08591`
   Same-document recovery from the blocked ResearchGate reader URL
   `https://www.researchgate.net/publication/330672934_The_Freyd-Mitchell_Embedding_Theorem`,
   which is now preserved in coverage as `original_url`.

How these sources are used:

- Grothendieck/Barr is the eligible primary treatment. I used it for the
  original Chapter 1 route and the source-side provenance of the AB1/AB2
  viewpoint, plus the permanence-of-diagram-categories heading that supports
  the functor-category theorem.
- Stacks supplies the cleanest exact statements for the structural abelian
  consequences: opposite categories, finite limits/colimits, pullbacks as
  kernels of differences, pullback-stability of epimorphisms, and the
  exact-functor short-exact-sequence tests.
- Tamme supplies an independent lecture-note treatment with a harvestable table
  of contents and explicit in-text definitions of image, coimage, abelian
  categories, module examples, and left/right exact functors.
- Tan supplies the Freyd-style axiomatisation, the balancedness theorem, the
  kernel/cokernel anti-isomorphism viewpoint on subobjects and quotients, the
  functor-category embedding route, and the final Freyd-Mitchell theorem.

Coverage boundaries I kept explicit:

- Grothendieck's §1.11 quotient-category material is **out of scope** here.
  MA-8 only needs cokernel quotients by subobjects, not Serre quotient
  categories.
- Stacks Lemmas 12.5.15, 12.5.16, and 12.5.17 are **deferred** to the later
  exactness and diagram-lemma pages. They are not silently imported into MA-8.

---

## 4. Local scaffold decisions

### Decision 1 — the page keeps the design's non-negotiable route

The scaffold constructs image and coimage before defining an abelian category,
then makes AB2 the axiom that the canonical coimage-to-image map is invertible.
I did not redefine image by epi-mono factorization, exactly because the design
flags that as circular.

### Decision 2 — the Freyd block stays theorem-shaped

Items 17–20 remain a theorem block about the alternative Freyd axiomatisation,
not the page's working definition. The working definition is still item 9, in
the Grothendieck/Stacks/Weibel form the later pages will cite.

### Decision 3 — the pullback theorem stays on the A page

The theorem that pullbacks of epimorphisms are epimorphisms remains a central
A-page item, because the design marks it as the load-bearing fact for the later
member calculus.

### Decision 4 — one contingent A item was dropped, and one B witness was replaced

The design makes the quiver-representation theorem contingent on a published
A-page quiver home. None exists: the only quiver material on disk is B-page
example material (`ex-quivers-as-a-functor-category` and
`ex-the-free-category-on-a-quiver`), which is not a safe dependency home for an
A-page theorem. So I **dropped** the contingent A item and recorded the reason
here instead of silently keeping a dependency on B-only vocabulary.

The design's B-page Banach-space witness was also not kept verbatim. The
library's own deferred-functional-analysis page explicitly says Banach spaces
are still deferred, so that witness would not have been dependency-closed. I
replaced it with a worked filtered-vector-space AB2 failure, which the A page
already owns and sources honestly.

---

## 5. Known limits and caution points

- The page-level `requires` in `plan-spec.json` still understate the actual
  mathematical dependencies. I recorded that drift rather than "fixing" it
  inside the batch.
- The recorded primary treatment is used for route and provenance, while the
  sharp theorem statements for pullbacks and exact functors come from Stacks and
  the independent lecture-note source.
- The false statement about pullbacks of epimorphisms in arbitrary categories is
  scaffolded as a false statement because the design keeps it there, but the
  eventual authoring step still needs a concrete, library-grounded non-abelian
  witness rather than a generic warning sentence.

---

## 6. Validator results

### Actual results run on Thursday, August 27, 2026

- `node tools/coverage-checklist.mjs research/frontier-21-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs research/frontier-21-batch-2.pages.json research/frontier-21-batch-3.pages.json research/frontier-21-batch-4.pages.json research/frontier-21-batch-5.pages.json research/frontier-21-batch-6.pages.json research/frontier-21-batch-7.pages.json research/frontier-21-batch-8.pages.json research/frontier-21-batch-9.pages.json research/frontier-21-batch-10.pages.json --manifest-only`
  -> `content-policy: 298 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The validator ended with `OK`.
  The extracted MA-8 / MA-10 / MA-11 lines showed the expected page order
  around:
  `abelian-categories`,
  `exactness-and-the-member-calculus`,
  and `the-diagram-lemmas-in-an-abelian-category`.
  I did not get any batch-specific hard error from `validate-plan`; the warning
  stream remained the usual run-wide redundant-prerequisite noise.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json --stamp`
  -> **failed mechanically in this sandbox** with `EAI_AGAIN` on every URL:
  Scribd, Stacks, Ohio State, and ResearchGate all failed DNS resolution from
  the shell. This does **not** contradict the source reads used for the batch:
  those URLs were read and verified through the web reader, but the shell-side
  network gate cannot resolve them here.

- `timeout 20s node tools/url-sweep.mjs --coverage research/frontier-21-batch-9.coverage.json --out /tmp/frontier-21-batch-9-url-liveness.json --recover --fail-on-dead`
  -> **timed out** with exit code `124` and wrote no output artifact before the
  timeout. Given the matching `EAI_AGAIN` failures from `source-fetch-check`,
  this is best read as another sandbox-side network failure rather than as
  source-specific evidence.

---

## 7. Reharvest round 1 for the Tan source

Date: Thursday, August 27, 2026.

Dead source verified against the run liveness ledger:

- `research/frontier-21-url-liveness.json` records
  `https://www.researchgate.net/publication/330672934_The_Freyd-Mitchell_Embedding_Theorem`
  with HTTP `403` and no recovered snapshot.

Recovery and replacement decision:

- I checked for a usable same-document URL before re-sourcing. The blocked
  ResearchGate page itself exposes DOI `10.48550/arXiv.1901.08591`, and the
  live full-text PDF `https://arxiv.org/pdf/1901.08591` is the same 28-page
  preprint with the same section and theorem numbering.
- Because the same document was recoverable directly, this batch did **not**
  switch to a different treatment and did **not** rewrite the surrounding
  mathematics onto a different source family.

Affected orphaned results now re-backed from the arXiv PDF:

- `def-the-freyd-axioms-for-an-abelian-category` <- Definition 2.2.
- `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects`
  <- Theorem 2.3.
- `thm-an-abelian-category-is-balanced` <- Theorem 2.4.
- `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism`
  <- Theorem 2.5.
- `rem-the-freyd-mitchell-embedding-theorem` <- Corollary 7.17.

Claim-constraint changes:

- No page-item statement changed.
- The only precision change is source-side: the Freyd-Mitchell remark is now
  backed by **Corollary 7.17**, which is Tan's explicit `A -> R-Mod`
  formulation, instead of the broader intermediate Theorem 7.16 formulation
  "every abelian category is fully abelian".

Validator reruns for this reharvest:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-backing.mjs --coverage research/frontier-21-batch-9.coverage.json --liveness research/frontier-21-url-liveness.json`
  -> `source-backing: 18 authored result(s) across 1 file(s), every one still backed by an openable source`
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json --stamp`
  -> `source-fetch-check: 5/7 source(s) fetch-verified (0 newly stamped), 2 FAILED`
  The failed URLs were the unstamped Scribd primary source
  `https://ro.scribd.com/document/234152867/Grothendieck-Tohoku-Eng` and the
  recovered Tan PDF `https://arxiv.org/pdf/1901.08591`, both with shell-side
  `EAI_AGAIN`.
- `timeout 30s node tools/url-sweep.mjs --coverage research/frontier-21-batch-9.coverage.json --out /tmp/frontier-21-batch-9-url-liveness.json --recover --fail-on-dead`
  -> timed out with exit code `124` and wrote no output artifact before the
  timeout.

---

## 8. Reharvest round 2 status check

Date: Thursday, August 27, 2026.

Batch-9 scope check:

- `research/frontier-21-reharvest-plan.json` currently has **no** `work[]` row
  for `research/frontier-21-batch-9.coverage.json`. So this round had no new
  orphaned-result replacement assignment to perform.
- The only dead-source repair in current batch-9 scope remains the round-1
  replacement of
  `https://www.researchgate.net/publication/330672934_The_Freyd-Mitchell_Embedding_Theorem`
  by the same-document arXiv PDF
  `https://arxiv.org/pdf/1901.08591`, with the dead ResearchGate URL preserved
  as `original_url`.

Live-source re-verification:

- I re-opened the seven active batch-9 source URLs through the web reader on
  Thursday, August 27, 2026. The current live source set is unchanged:
  Scribd Tohoku mirror, Stacks tags `00ZX` and `010N`, the Ohio State index and
  Lectures `9`/`10`, and Tan's arXiv PDF.
- The checked locator-bearing mathematics still matches the current coverage
  rows: Grothendieck's contents with `1.4 Abelian categories` and
  `1.6 Categories of diagrams and permanence properties`; Stacks `Definition
  12.5.1` through `Lemma 12.5.17` and `Lemma 12.7.2`; Tamme's Lecture `9`
  `§9.4` and Lecture `10` `§10.4`; and Tan's `Definition 2.2`,
  `Theorems 2.3-2.5`, `Theorem 5.1`, and `Corollary 7.17`.

Dead source, replacement/search, affected results, claim constraints:

- No new dead source was assigned by the reharvest plan in this round.
- No new replacement search was needed beyond re-verifying that the existing
  repaired Tan arXiv row is still the right same-document replacement.
- The affected result set is unchanged from round 1:
  `def-the-freyd-axioms-for-an-abelian-category`,
  `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects`,
  `thm-an-abelian-category-is-balanced`,
  `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism`,
  and `rem-the-freyd-mitchell-embedding-theorem`.
- No new claim constraint changed. The only standing source-side precision
  change remains the round-1 choice to back
  `rem-the-freyd-mitchell-embedding-theorem` from `Corollary 7.17`.

Validator reruns from current disk:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-9.coverage.json --require-destination`
  passed:
  `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/source-backing.mjs --coverage research/frontier-21-batch-9.coverage.json --liveness research/frontier-21-url-liveness.json`
  passed:
  `source-backing: 18 authored result(s) across 1 file(s), every one still backed by an openable source`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json --stamp`
  improved relative to round 1 because the repaired Tan PDF is now stamped, but
  still fails on the unstamped Scribd primary-source row:
  `source-fetch-check: 6/7 source(s) fetch-verified (0 newly stamped), 1 FAILED`.
  The lone failing URL was
  `https://ro.scribd.com/document/234152867/Grothendieck-Tohoku-Eng`
  with shell-side `EAI_AGAIN`, so I did **not** invent a `fetch_verified`
  record by hand and I did **not** replace a currently openable source merely to
  clear the fetch gate.

- `node tools/url-sweep.mjs --coverage research/frontier-21-batch-9.coverage.json --out /tmp/frontier-21-batch-9-url-liveness.reharvest-2-b9.json --recover --fail-on-dead`
  failed in this runner with host-resolution errors for all seven URLs and
  still wrote the receipt
  `/tmp/frontier-21-batch-9-url-liveness.reharvest-2-b9.json`:
  `url-sweep: 0/7 live; 7 failed; 0 recoverable from the archive; 0 suspect`.
  Because the same dispatch re-opened all seven URLs in the web reader, this
  sweep failure is best read as runner-local DNS failure, not as evidence that
  the batch's active source rows have gone dead.

Current round-2 state:

- `research/frontier-21-batch-9.coverage.json` stayed unchanged.
- This notes file now records the no-new-row outcome and the current validator
  state.

---

## 9. Source scout repair for the Grothendieck/Barr row

Date: Thursday, August 27, 2026.

Failed source isolated by the required validator:

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json --stamp`
  still failed on the Grothendieck/Barr row at
  `https://ro.scribd.com/document/234152867/Grothendieck-Tohoku-Eng`
  with shell-side `EAI_AGAIN`.

Replacement search and verification:

- I searched for a same-document live URL before considering any re-source.
  The best hit was Michael Barr's own McGill-hosted PDF
  `https://www.math.mcgill.ca/barr/papers/gk.pdf`, with the nLab mirror
  `https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf`
  confirming that the same 120-page Barr translation is still live elsewhere.
- I re-opened the McGill PDF in the web reader on Thursday, August 27, 2026.
  Its contents page still shows `0.1 Content of the article` and Chapter 1
  headings `1.3 Additive categories`, `1.4 Abelian categories`,
  `1.6 Categories of diagrams and permanence properties`, and
  `1.11 Quotient categories`, so the existing harvest rows and locator remain
  faithful without reharvesting.

Coverage change applied:

- `research/frontier-21-batch-9.coverage.json` now uses the McGill PDF as the
  live URL for the Grothendieck/Barr row.
- The old Scribd URL is preserved as `original_url`, and the row carries a
  recovery note explaining the same-document replacement.
- No harvested result disposition changed, and no page-item claim changed.

Post-change validator rerun:

- `node tools/coverage-checklist.mjs research/frontier-21-batch-9.coverage.json --require-destination`
  passed:
  `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.

- `node tools/source-backing.mjs --coverage research/frontier-21-batch-9.coverage.json --liveness research/frontier-21-url-liveness.json`
  passed:
  `source-backing: 18 authored result(s) across 1 file(s), every one still backed by an openable source`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json --stamp`
  still ends at
  `source-fetch-check: 6/7 source(s) fetch-verified (0 newly stamped), 1 FAILED`
  because the current runner now reports `EAI_AGAIN` on the replacement McGill
  URL as well.

Remaining blocker:

- This batch's only unstamped row is no longer the weaker Scribd mirror but the
  stronger same-document McGill PDF. The remaining failure is runner-local DNS
  resolution during `source-fetch-check`, not lack of a verified same-text
  replacement.

---

## 10. Source scout follow-up for the unstamped McGill row

Date: Thursday, August 27, 2026.

Current validator state from disk:

- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json`
  now isolates the remaining problem exactly:
  `ERROR fetch-check-unstamped: abelian-categories: https://www.math.mcgill.ca/barr/papers/gk.pdf`
  and
  `source-fetch-check: 6/7 source(s) fetch-verified, 1 FAILED`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-21-batch-9.coverage.json --stamp`
  still cannot stamp that row:
  `ERROR fetch-check-dead: abelian-categories: https://www.math.mcgill.ca/barr/papers/gk.pdf — EAI_AGAIN`
  and
  `source-fetch-check: 6/7 source(s) fetch-verified (0 newly stamped), 1 FAILED`.

Additional same-text search results tested after the McGill replacement:

- I re-opened the nLab mirror
  `https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf`
  in the web reader. It is the same 120-page Barr translation and its contents
  page still matches the current locator, but a temp-file
  `source-fetch-check --stamp` run on that exact URL also failed with
  `EAI_AGAIN`.
- I checked the Rochester mirror cited in the TeX Stack Exchange bibliography
  answer:
  `https://people.math.rochester.edu/faculty/lubkin/grothendieck-barr_tohoku.pdf`.
  A temp-file `source-fetch-check --stamp` run on that same-text candidate also
  failed with `EAI_AGAIN`.
- I also tested the hostname variants
  `https://math.mcgill.ca/barr/papers/gk.pdf` and
  `https://ftp.math.mcgill.ca/barr/pdffiles/gk.pdf`.
  Both temp-file checks failed with `EAI_AGAIN`, so there is no newly usable
  same-document host in this runner.

Different-treatment fallback considered but not adopted:

- I opened the official J-STAGE article page
  `https://www.jstage.jst.go.jp/article/tmj1949/9/2/9_2_119/_article`,
  whose own page exposes the direct PDF
  `https://www.jstage.jst.go.jp/article/tmj1949/9/2/9_2_119/_pdf/-char/en`.
  That fallback would require a genuine reharvest onto the French original or
  its official scan, but the temp-file `source-fetch-check --stamp` run on the
  direct PDF also failed with `EAI_AGAIN`, so there is no honest mechanical
  fetch basis for changing the coverage row again here.

Why I left coverage unchanged:

- Fresh Node fetch probes to `arxiv.org`, `stacks.math.columbia.edu`, and
  `people.math.osu.edu` now also return `EAI_AGAIN`, including hosts whose
  source rows are already stamped in this batch. That makes the present failure
  resolver-wide in this shell, not a source-specific defect of the McGill row.
- Because every same-text candidate and the official different-treatment
  fallback fail before HTTP in the same way, I did not fabricate a
  `fetch_verified` receipt and I did not replace a better same-document row with
  a mechanically unstampable re-source.

## 11. Root-environment source recovery

Date: Thursday, August 27, 2026.

After the two sandboxed scout attempts exhausted, the root workflow environment
fetched the nLab mirror completely: HTTP 200 and 979,561 bytes. The scout had
already verified in the web reader that this is the same 120-page Barr
translation and that its contents match the existing locator. The coverage URL
therefore now uses
`https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf`; the original
Scribd provenance remains recorded as `original_url`, and the intervening
McGill same-document URL remains recorded above. No title, locator, contents
row, or mathematical claim constraint changed.

## Step-3 fix pass

- Finding id: `B9-1`.
  Disposition: accepted as already applied on current bytes; no further
  manifest-route change was needed in this pass.
  Evidence: the stable Alpha group-`a` review in
  `research/frontier-21-alpha-a-step3-scaffold-review.md` records `B9-1` as
  the MA-8 prerequisite-closure repair and says the missing earlier page
  prerequisites were `localisation-of-modules-and-support` and
  `uniform-spaces`. At Step 3 that closure repair was already present on the
  scaffold. On the current Thursday, August 27, 2026 bytes, the later Step-4
  adjudication has since rehomed those two page prerequisites to the B page and
  added the genuine A-page prerequisite
  `modules-over-a-pid-and-canonical-forms`, so the current manifest reads
  `["preadditive-and-additive-categories-and-biproducts-examples","modules-over-a-pid-and-canonical-forms"]`
  for `abelian-categories` and
  `["abelian-categories","uniform-spaces","localisation-of-modules-and-support"]`
  for `abelian-categories-examples`. Those page edges are still genuinely spent
  on current bytes: `thm-abelian-groups-form-an-abelian-category` depends on
  `prop-abelian-groups-are-z-modules`, `cex-topological-abelian-groups-are-additive-and-not-abelian`
  depends on `def-topological-group`, and
  `ex-an-exact-functor-between-module-categories` depends on
  `thm-localisation-of-modules-is-exact`. I re-read the controlling MA-8 A/B
  design blocks in `research/plan-category-theory-track.md` and the seam note
  in `research/plan-algebra-track.md`, re-opened all seven active source URLs
  at their recorded locators in the web reader on Thursday, August 27, 2026,
  and reran the required validators on current bytes:
  `node tools/coverage-checklist.mjs research/frontier-21-batch-9.coverage.json --require-destination`
  returned `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`;
  `node tools/content-policy.mjs --manifest-only research/frontier-21-batch-*.pages.json`
  returned `content-policy: 432 scoped item(s), 0 error(s), 0 warning(s)`;
  and `node tools/validate-plan.mjs research/plan-spec.json` ended with `OK`
  and only the standing run-wide `redundant-prereq` advisories before the final
  summary.
  Changed scaffold record: no additional edit to
  `research/frontier-21-batch-9.pages.json` or
  `research/frontier-21-batch-9.coverage.json` was required to apply `B9-1`,
  because the prerequisite repair was already present on current bytes. I did
  correct one batch-local source-provenance note in
  `research/frontier-21-batch-9.coverage.json`: the Grothendieck/Barr row's
  `recovery_note` now matches the active nLab URL instead of saying that the
  row points to the earlier McGill mirror.

## Step-5 authoring

Authored on Thursday, August 27, 2026:

- Page files:
  `library/category-theory/abelian-categories.md`,
  `library/category-theory/abelian-categories-examples.md`.
- A-page item files:
  `def-normal-monomorphism-and-conormal-epimorphism`,
  `prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero`,
  `prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism`,
  `def-image-and-coimage-in-a-category-with-kernels-and-cokernels`,
  `thm-a-morphism-factors-uniquely-through-its-coimage`,
  `thm-a-morphism-factors-uniquely-through-its-image`,
  `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique`,
  `prop-the-coimage-projection-is-epic-and-the-image-inclusion-is-monic`,
  `def-abelian-category`,
  `rem-the-axiom-labels-and-where-they-come-from`,
  `thm-an-abelian-category-is-balanced`,
  `thm-the-opposite-of-an-abelian-category-is-abelian`,
  `thm-every-monomorphism-is-the-kernel-of-its-cokernel`,
  `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism`,
  `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors`,
  `cor-a-morphism-in-an-abelian-category-is-monic-exactly-when-its-kernel-is-zero-and-epic-exactly-when-its-cokernel-is-zero`,
  `def-the-freyd-axioms-for-an-abelian-category`,
  `thm-the-freyd-axioms-imply-the-additive-axioms`,
  `thm-the-freyd-mitchell-characterisation-of-an-abelian-category`,
  `rem-additivity-is-a-property-of-an-abelian-category-and-not-part-of-its-data`,
  `thm-an-abelian-category-has-all-finite-limits-and-all-finite-colimits`,
  `thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs`,
  `thm-the-pullback-of-an-epimorphism-is-an-epimorphism`,
  `cor-the-pushout-of-a-monomorphism-is-a-monomorphism`,
  `thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism`,
  `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism`,
  `thm-pullback-pasting-in-an-abelian-category`,
  `thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects`,
  `def-the-quotient-of-an-object-by-a-subobject`,
  `thm-the-quotient-is-independent-of-the-representing-monomorphism`,
  `thm-first-isomorphism-theorem-in-an-abelian-category`,
  `thm-third-isomorphism-theorem-in-an-abelian-category`,
  `thm-a-composite-of-a-quotient-and-a-subobject-inclusion-is-the-canonical-factorisation`,
  `def-exact-functor-between-abelian-categories`,
  `thm-a-left-or-right-exact-functor-between-abelian-categories-is-additive`,
  `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences`,
  `thm-an-additive-functor-is-exact-exactly-when-it-preserves-kernels-and-cokernels`,
  `thm-a-left-exact-functor-preserves-monomorphisms-and-a-right-exact-functor-preserves-epimorphisms`,
  `cex-an-exact-functor-need-not-be-faithful`,
  `thm-an-equivalence-between-abelian-categories-is-exact`,
  `def-abelian-subcategory-and-exact-embedding`,
  `thm-abelian-groups-form-an-abelian-category`,
  `thm-modules-over-a-ring-form-an-abelian-category`,
  `thm-additive-functors-from-a-small-preadditive-category-to-an-abelian-category-form-an-abelian-category`,
  `thm-a-small-product-of-abelian-categories-is-abelian`,
  `cex-filtered-vector-spaces-form-an-additive-category-with-all-kernels-and-cokernels-that-is-not-abelian`,
  `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category`,
  `cor-an-abelian-category-that-is-a-preorder-is-trivial`,
  `rem-the-freyd-mitchell-embedding-theorem`,
  `rem-why-the-diagram-lemmas-are-not-proved-by-the-embedding-theorem`,
  `fs-an-additive-category-with-all-kernels-and-cokernels-is-abelian`,
  `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic`,
  `fs-in-an-abelian-category-a-morphism-that-is-monic-and-epic-need-not-be-an-isomorphism`,
  `fs-every-abelian-category-is-equivalent-to-a-category-of-modules`,
  `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks`.
- B-page item files:
  `ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups`,
  `ex-the-canonical-factorisation-of-a-module-homomorphism`,
  `ex-a-pullback-computed-as-a-kernel-of-a-difference`,
  `ex-vector-spaces-over-a-field-as-an-abelian-category`,
  `ex-the-abelian-category-of-representations-of-a-two-object-quiver`,
  `cex-topological-abelian-groups-are-additive-and-not-abelian`,
  `ex-the-third-isomorphism-theorem-checked-for-abelian-groups`,
  `ex-an-exact-functor-between-module-categories`,
  `cex-filtered-vector-spaces-fail-the-coimage-image-axiom`.
- Proof-contract artifact:
  `research/frontier-21-batch-9.proof-contracts.json`
  with scope equal to the 53 proof-bearing items in this authored batch.

Provenance rationale actually used:

- Core definitions, propositions, theorems, and source-backed corollaries on
  the A page were tagged `literature-derived` where the authored claim matches
  the harvested Grothendieck/Barr, Stacks, Tamme, Tan, Freyd, or Mitchell
  result family closely enough to state as the same mathematics.
- Page-local recastings, cautionary remarks, worked examples, counterexamples,
  and the five `fs-` items were tagged `ai-altered` where the batch adapts a
  source-side statement, packages a standard witness into this page's route, or
  negates an overstatement for the page's own trap structure.
- Proofs were tagged `ai-generated` unless the text is an explicit close
  adaptation of a recorded source route; the Freyd-additivity and exactness
  items are the only proof entries tagged `ai-altered` because their written
  argument follows the sourced Mitchell/Tan route rather than a fresh local
  decomposition.
- `rem-the-freyd-mitchell-embedding-theorem` remains the design-mandated
  recorded-not-proved item with `proved_here: false`, a truthful
  `external_dependency` block, no `verification.judge`, and no outgoing
  dependence from any later item on this page or its companion.

Batch-local authoring changes beyond the raw file creation:

- Synced the authored dependency routes back into
  `research/frontier-21-batch-9.pages.json` for
  `thm-epimorphism-monomorphism-factorisation-exists-and-is-unique-up-to-unique-isomorphism`,
  `thm-the-image-is-the-least-subobject-through-which-a-morphism-factors`,
  `thm-a-commuting-square-with-monic-legs-is-a-pullback-exactly-when-the-induced-morphism-to-the-intersection-is-an-isomorphism`,
  `thm-third-isomorphism-theorem-in-an-abelian-category`,
  `thm-one-sided-and-two-sided-exactness-by-short-exact-sequences`,
  `thm-an-equivalence-between-abelian-categories-is-exact`,
  `cex-torsion-free-abelian-groups-do-not-form-an-abelian-category`, and
  `fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic`.
- Replaced the scaffold's still-generic `fs-the-pullback-of-an-epimorphism-is-an-epimorphism-in-any-category-with-pullbacks`
  placeholder with a concrete checked Hausdorff-space witness, and declared the
  needed earlier topology dependencies honestly.
- After the independent GPT-5.6 Sol audit, repaired four semantic defects on
  current bytes:
  `thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique`,
  `thm-the-pullback-of-an-epimorphism-is-an-epimorphism`,
  `fs-every-abelian-category-is-equivalent-to-a-category-of-modules`,
  and the stale Step-3 prerequisite paragraph in these notes. The final Freyd
  additivity theorem was then strengthened with an explicit monic/epic proof of
  the coimage-image comparison and rechecked.
- Kept every planned batch-9 item id stable. No authored claim was dropped or
  narrowed during Step 5.

Checks actually run on current bytes:

- Full batch precheck over the 53 proof-bearing batch-9 items:
  `53 checked, 0 failing — all clean`.
- Item-scoped content policy:
  `node tools/content-policy.mjs research/frontier-21-batch-9.pages.json`
  -> `content-policy: 64 scoped item(s), 0 error(s), 0 warning(s)`.
- Live plan validation:
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK` with only the repository's standing run-wide
  `redundant-prereq` advisories.
- Strict proof-contract check:
  `node tools/proof-contract.mjs research/frontier-21-batch-9.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 53/53 item(s) checked`.
- Boundary audit:
  `node tools/boundary-audit.mjs research/frontier-21-batch-9.proof-contracts.json --fail-on-contradicted --fail-on-template`
  -> no template clusters and no contradicted dispositions.
- Citation fidelity:
  `node tools/citation-fidelity.mjs research/frontier-21-batch-9.proof-contracts.json`
  -> `152 citation(s) over 53 authored item(s)`, with no missing quotes and no
  widening candidates.
- `git diff --check` on the touched batch files and authored page directory:
  clean.

Known blockers after authoring:

- None inside batch 9.
- `rem-the-freyd-mitchell-embedding-theorem` is intentionally recorded and not
  proved here; that is a design choice already encoded in the batch plan, not an
  authoring blocker.
- Independent GPT-5.6 Sol side-audit outcome on current bytes: the first pass
  found three high defects, one medium defect, and one stale-notes drift; all
  five are now resolved. The closing Sol verdict on
  `thm-the-freyd-axioms-imply-the-additive-axioms` was:
  `resolved — The explicit monic/epic argument now proves the canonical comparison is an isomorphism`.

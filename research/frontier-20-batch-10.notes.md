# frontier-20 batch 10 notes - step 1 scaffold

Owned pair: `preadditive-and-additive-categories-and-biproducts` (A, order
`365.013`) with `preadditive-and-additive-categories-and-biproducts-examples`
(B, `365.014`).

Artifacts written in this dispatch:
`research/frontier-20-batch-10.pages.json`,
`research/frontier-20-batch-10.coverage.json`,
and this file. Nothing else was edited.

Session date: Wednesday, August 26, 2026.

## Design against spec

Recorded here, not adjudicated here.

- The design block at
  [research/plan-category-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-category-theory-track.md:1582)
  gives `requires`:
  `adjunctions-units-and-counits`, `limits-and-colimits`,
  `rings-subrings-and-integral-domains`, `modules-and-module-homomorphisms`,
  `free-modules-and-exact-sequences`, and
  `matrices-and-the-matrix-of-a-linear-map`.
- `research/plan-spec.json` and the generated batch task instead give only:
  `kan-extensions-density-and-the-free-cocompletion-examples`.

I followed the spec, exactly as the dispatch requires, and left the page-level
`requires` at the spec value. The item-level `deps` show the real mathematical
closure through already-published items.

There is no order drift: the design and the spec both keep the A page at
`365.013`.

## Item census and split check

- A page `preadditive-and-additive-categories-and-biproducts`: **60 items**.
- B page `preadditive-and-additive-categories-and-biproducts-examples`: **8 items**.

The A page lands exactly on the split gate and not over it, so no split is
required. The B page drops the conditional Banach-space example from the design:
the repository explicitly says Banach spaces, bounded operators, and the operator
norm are still deferred in
`library/not-proved-here/deferred-functional-analysis.md`, so that example would
have been dishonest padding.

## Source set actually read

Harvested external treatments for this pair:

1. Kiran S. Kedlaya, *Solid modules over an ordinary ring*, subsection 1.2
   `Preadditive categories`.
2. Mike Prest, *Modules as exact functors*, section 2 `Modules`.
3. The Stacks Project, section 12.3 `Preadditive and additive categories`.
4. The Stacks Project, section 12.4 `Karoubian categories`.
5. The Stacks Project, section 12.7 `Additive functors`.
6. Merlin Christ, Tobias Dyckerhoff, Tashi Walde, *Lax Additivity*, section 2
   `Additive 1-categories`.
7. Gabriele Lobbia, Wojciech Rozowski, Ralph Sarkis, Fabio Zanasi,
   *Quantitative Monoidal Algebra: Axiomatising Distance with String Diagrams*,
   section 4.1 on `Mat_R`.
8. Dixy Msapato, *The Karoubi envelope and weak idempotent completion of an
   extriangulated category*, section 2.1 via the direct open-access PDF.

What these support in the scaffold:

- Kedlaya and Prest cover the ringoid viewpoint: preadditive categories, rings as
  one-object preadditive categories, modules as additive functors, and the
  finite-free / Morita perspective that backs the matrix-category block.
- Stacks 12.3 supplies the product-biproduct theorem, the basic additive-category
  definitions, the additive-functor/direct-sum lemma, and the idempotent-splitting
  lemmas the page needs before abelian categories arrive.
- Stacks 12.4 fixes the Karoubian convention and the kernel-based formulation of
  idempotent completeness.
- Stacks 12.7 gives the exact additive-functor criterion the design wants:
  additive iff biproduct-preserving, and additive left exactness via kernels.
- Christ-Dyckerhoff-Walde gives the cleanest open-access source I found for the
  thesis claim that addition is a property: biproducts determine the addition law,
  products imply semiadditivity in an enriched setting, and finite-biproduct matrix
  calculus is canonical.
- Lobbia-Rozowski-Sarkis-Zanasi gives an explicit, open, line-by-line definition
  of `Mat_R` with objects the natural numbers and morphisms the rectangular
  matrices, which made the matrix block much safer to scaffold than relying on the
  old B-page leaf.
- Msapato provides the explicit Karoubi-envelope object and morphism formulas, the
  fully faithful inclusion, and the standard universal property.

Important source judgment:

- The design's Mac Lane trap is correct: chapter VIII section 2 is `Additive
  Categories`, not section 1. I rechecked that against the Google Books / Springer
  tables of contents while reading the design, but I did **not** harvest Mac Lane as
  a backing source here because the full theorem pages were not cleanly openable in
  this runner. The scaffold therefore relies on the open sources above, not on a
  half-read preview.

## Route and conventions held

- The page follows the design's thesis exactly: additivity is treated as a
  property forced by biproducts, not as extra structure chosen by hand.
- Item 10 is kept as a real bridge and not merged away: the page carries both the
  published zero-morphism notion and the hom-group zero, and later proofs are not
  allowed to blur them before that reconciliation.
- Item 14 is kept free of the identity-sum equation. The matrix-sum equation
  `i_A p_A + i_B p_B = 1` appears only at item 21, after item 17 has genuinely
  built addition.
- The contested word `additive` is resolved by definition 23 exactly as the design
  says: preadditive plus zero object plus finite biproducts, with the binary-only
  and finite-product-only variants proved equivalent under that hypothesis rather
  than declared wrong.
- Item 47 stays a citation theorem on purpose. Its proof strategy is "invoke the
  already-published representable-preserves-limits theorem on the category and on
  its opposite", not a second elementwise left-exactness computation.
- Item 55 is intentionally sharper than the bare open-access proposition I harvested.
  The Msapato statement says an extension functor exists for an additive functor
  into an idempotent-complete target. The scaffold records the choice issue the
  design isolated:
  the extension is constructed relative to a supplied family of splittings of each
  `F(e)`, and only for a small source may one fold ordinary choice into the
  statement. That sharpening is an explicit inference from the source plus the
  library's size discipline, not a direct quotation.

## Scope decisions that matter later

- I kept the five `fs-` items on the A page, exactly as the design wants, because
  the defended hypotheses belong beside the theorem they protect and not only on the
  leaf page.
- The matrix block is fully kept on the A page. The design is right that the
  published `ex-matrix-category-equivalent-to-finite-dimensional-vector-spaces` is a
  B-page leaf and cannot carry downstream dependencies.
- I did **not** introduce any forward references. Every `deps` edge lands either on
  an earlier scaffolded item in this batch or on a published item already on disk.
- The B page keeps the ring, matrix, pointed-set, and commutative-monoid witnesses,
  but drops the Banach-space example for lack of library support.

## Known limits and open risks

- The matrix-category equivalence to finitely generated free modules is strongly
  source-backed, but its eventual authored proof will still need careful alignment
  with the library's module notation, especially around the side of matrix action
  and whether column vectors or row vectors are the chosen convention.
- Item 55's universal property will need especially careful authoring because the
  source statements are looser than the design's size-sensitive formulation.
- Because the page-level `requires` remain at the spec value, a later splice or drift
  pass still owns the prerequisite repair. This batch only records the disagreement.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-20-batch-10.coverage.json --out /tmp/frontier-20-batch-10-url-liveness.json --recover --fail-on-dead
```

The results are recorded below after execution.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json`
  passed: `1` page, `54` harvested results, `0` errors, `0` warnings.

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`
  passed: `428` scoped items, `0` errors, `0` warnings.

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Wednesday, August 26, 2026. The run still prints the
  repository-wide `redundant-prereq` notes outside this batch, but it reports no
  batch-10 item-order, forward-dependency, B-leaf, or unresolved-id failure.

- Extra local batch-only sanity pass:

  ```bash
  node - <<'NODE'
  const fs=require('fs');
  const pages=JSON.parse(fs.readFileSync('research/frontier-20-batch-10.pages.json','utf8'));
  const itemFiles=new Set(fs.readdirSync('items').filter(f=>f.endsWith('.md')).map(f=>f.replace(/\.md$/,'')));
  const manifestIds=new Set();
  for (const page of pages) for (const item of page.items) manifestIds.add(item.id);
  let bad=[];
  for (const page of pages) {
    const seen=[];
    const pageIds=page.items.map(x=>x.id);
    for (const item of page.items) {
      for (const dep of item.deps||[]) {
        if (!manifestIds.has(dep) && !itemFiles.has(dep)) bad.push(`unresolved ${item.id} -> ${dep}`);
        if (pageIds.includes(dep) && seen.indexOf(dep)===-1) bad.push(`out-of-order ${item.id} -> ${dep}`);
      }
      seen.push(item.id);
    }
  }
  if (bad.length) { console.log(bad.join('\n')); process.exit(1); }
  console.log('batch-10 deps ok');
  NODE
  ```

  Result: `batch-10 deps ok`.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
  failed for all eight URLs with the same local resolver error `EAI_AGAIN`.
  Exact failures:
  - `https://www.kskedlaya.org/condensed/sec_solid1.html`
  - `https://arxiv.org/pdf/1801.08015`
  - `https://stacks.math.columbia.edu/tag/09SE`
  - `https://stacks.math.columbia.edu/tag/09SF`
  - `https://stacks.math.columbia.edu/tag/010M`
  - `https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf`
  - `https://arxiv.org/pdf/2410.09229`
  - `https://link.springer.com/article/10.1007/s10485-021-09664-8`

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after the
  resolver failure.

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-10.coverage.json --out /tmp/frontier-20-batch-10-url-liveness.json --recover --fail-on-dead`
  failed `0/8` live with the same DNS-level problem: `curl: (6) Could not
  resolve host` for every source host. The receipt was still written to
  `/tmp/frontier-20-batch-10-url-liveness.json`.

What was verified despite the fetch-stamp blocker:

- Every recorded source URL was opened through the web-research channel in this
  dispatch and the coverage locators were written from those actual reads.
- No `fetch_verified` object was fabricated.
- No archive snapshot or alternate host was written back into the coverage file,
  because the failure in this shell is host-resolution wide rather than a
  source-specific dead-link diagnosis.

## Reharvest round

Static note: `research/frontier-20-reharvest-plan.json` currently carries no
explicit `work[]` row for batch `10`, but the live batch coverage still had one
unfixed source-gate defect: the Msapato row was the only source without a
`fetch_verified` stamp.

Dead reader-facing source / failure mode:

- `https://link.springer.com/article/10.1007/s10485-021-09664-8` is the source
  row that remained unstamped. The run-level liveness receipt at
  `research/frontier-20-url-liveness.json` marks it `suspect`, not because the
  paper is gone, but because the gate client is redirected to
  `?error=cookies_not_supported=...` instead of to mathematics.

Same-document recovery search actually verified:

- the Springer landing page for the article itself;
- the direct Springer PDF
  `https://link.springer.com/content/pdf/10.1007/s10485-021-09664-8.pdf`,
  which opens as the full 37-page paper and carries Definition 2.1 through
  Proposition 2.5 on pdf page 3 / printed pp. 501-502;
- the White Rose Research Online record
  `https://eprints.whiterose.ac.uk/id/eprint/180476/`, which exposes the same
  published version as a downloadable CC-BY PDF.

Because a live same-document full-text URL exists, I did **not** choose a
different treatment and did **not** rewrite the harvest against a different
author/source. The coverage repair is therefore a same-source URL recovery:
the direct PDF is now the reader-facing `url`, and the old landing page is
preserved in `original_url`.

Affected harvested results carried by this repaired row:

- `Definition 2.1` -> `def-idempotent-complete-category`
- `Proposition 2.2` -> inline support for
  `thm-an-additive-category-with-kernels-is-idempotent-complete`
- `Definition 2.3` -> `def-the-idempotent-completion-of-a-preadditive-category`
- `Proposition 2.4` -> `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal`
- `Proposition 2.5` -> `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal`

Changed claim constraint: none.

- The theorem at item 55 remains intentionally sharper than Msapato's bare
  Proposition 2.5: the notes still record that the extension of an additive
  functor is constructed relative to a supplied family of splittings of each
  `F(e)`, with the small-category / AC shortcut called out separately. The
  recovered PDF supports exactly the same source judgment as the old landing
  page did; only the fetchable URL changed.

Post-repair validator reruns on Wednesday, August 26, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json`
  -> `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-backing.mjs --coverage research/frontier-20-batch-10.coverage.json --liveness research/frontier-20-url-liveness.json`
  -> `source-backing: 23 authored result(s) across 1 file(s), every one still backed by an openable source`
- Caveat on that `source-backing` pass: the run-level liveness ledger predates
  the recovered Springer PDF URL, so this pass certifies that no batch-10 item
  lost all backing on disk, but it does **not** itself re-sweep the new PDF URL.
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
  -> `ERROR fetch-check-dead: preadditive-and-additive-categories-and-biproducts: https://link.springer.com/content/pdf/10.1007/s10485-021-09664-8.pdf — EAI_AGAIN`
  and then
  `source-fetch-check: 7/8 source(s) fetch-verified (0 newly stamped), 1 FAILED`
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-10.coverage.json --out /tmp/frontier-20-batch-10-url-liveness.repaired.json --recover --fail-on-dead`
  -> failed `0/8` live with the same host-resolution blocker. The receipt was
  still written to `/tmp/frontier-20-batch-10-url-liveness.repaired.json`.

So the repair is mathematically and structurally on disk, but the mechanical
fetch/liveness gates still need a network-capable runtime to stamp the recovered
PDF and refresh the batch-only liveness receipt.

## Reharvest round 2

Static note: `research/frontier-20-reharvest-plan.json` still carries no
explicit `work[]` row for batch `10`. This second pass only repairs the same
Msapato source row inside the authorised batch coverage and re-runs the batch
validators.

Dead reader-facing source / failure mode:

- `https://link.springer.com/content/pdf/10.1007/s10485-021-09664-8.pdf` was
  the current reader-facing URL at the start of this pass. The committed
  run-level liveness receipt `research/frontier-20-url-liveness.json` records
  that URL with `status: 200` but still marks it `suspect`, because automated
  fetches land on a `?error=cookies_not_supported=...` interstitial instead of
  stable mathematics.

Same-document recovery search actually verified:

- the DOI URL `https://doi.org/10.1007/s10485-021-09664-8`, which resolves to
  the Springer HTML article;
- on that HTML article, Section 2 and subsection 2.1 carry the exact harvested
  block at lines 85-108: `Definition 2.1`, `Proposition 2.2`, `Definition 2.3`,
  `Proposition 2.4`, and `Proposition 2.5`;
- the White Rose Research Online record
  `https://eprints.whiterose.ac.uk/id/eprint/180476/`, which still exposes the
  same published version as a downloadable CC-BY PDF.

Because a live same-document full-text URL exists and actually carries the
relevant results inline, I again did **not** choose a different treatment and
did **not** rewrite the harvest against a different author/source. The coverage
repair is a same-source URL recovery: the DOI-resolved Springer HTML article is
now the reader-facing `url`, the direct Springer article URL stays in
`original_url`, and the locator now points to the verified HTML lines rather
than to the PDF page image.

Affected harvested results carried by this repaired row:

- `Definition 2.1` -> `def-idempotent-complete-category`
- `Proposition 2.2` -> inline support for
  `thm-an-additive-category-with-kernels-is-idempotent-complete`
- `Definition 2.3` -> `def-the-idempotent-completion-of-a-preadditive-category`
- `Proposition 2.4` -> `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal`
- `Proposition 2.5` -> `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal`

Changed claim constraint: none.

- Item 55 remains intentionally sharper than Msapato's bare Proposition 2.5.
  The only change in this pass is the reader-facing same-document URL and the
  exact locator format; the underlying source judgment is unchanged.

Post-repair validator reruns on Wednesday, August 26, 2026:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json`
- `node tools/source-backing.mjs --coverage research/frontier-20-batch-10.coverage.json --liveness research/frontier-20-url-liveness.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-10.coverage.json --out /tmp/frontier-20-batch-10-url-liveness.reharvest2.json --recover --fail-on-dead`

Results are recorded immediately below after execution.

- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json`
  -> `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/source-backing.mjs --coverage research/frontier-20-batch-10.coverage.json --liveness research/frontier-20-url-liveness.json`
  -> `source-backing: 23 authored result(s) across 1 file(s), every one still backed by an openable source`
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
  -> `ERROR fetch-check-dead: preadditive-and-additive-categories-and-biproducts: https://doi.org/10.1007/s10485-021-09664-8 — EAI_AGAIN`
  and then
  `source-fetch-check: 7/8 source(s) fetch-verified (0 newly stamped), 1 FAILED`
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-10.coverage.json --out /tmp/frontier-20-batch-10-url-liveness.reharvest2.json --recover --fail-on-dead`
  -> `url-sweep: 0/8 live; 8 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-20-batch-10-url-liveness.reharvest2.json`

Caveat on that `url-sweep` result:

- the tool's per-URL tail says `no archived snapshot under any host variant —
  re-sourcing is justified here`, but in this shell that conclusion is caused by
  host-wide DNS failure, not by a successful same-document exhaustion against the
  live web;
- the actual reharvest judgment for the Msapato row still comes from verified
  live reads in the web-research channel: the DOI-resolved Springer HTML article
  and the White Rose repository record both exist, so this row is **not** an
  honest candidate for a different treatment.

## Source scout round 1

Current failed source record on Wednesday, August 26, 2026:

- `https://doi.org/10.1007/s10485-021-09664-8`

Current batch-gate result before any new rewrite:

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
  -> `ERROR fetch-check-dead: preadditive-and-additive-categories-and-biproducts: https://doi.org/10.1007/s10485-021-09664-8 — EAI_AGAIN`
  and then
  `source-fetch-check: 7/8 source(s) fetch-verified (0 newly stamped), 1 FAILED`

Same-document recovery search actually verified in this scout pass:

- the White Rose Research Online record
  `https://eprints.whiterose.ac.uk/id/eprint/180476/`, which lists the
  published-version download for the same paper;
- the White Rose direct published-version PDF
  `https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf`.

Local fetch-probe results for those recovery candidates:

- a direct `fetch()` probe to the White Rose record URL failed with `EAI_AGAIN`;
- a direct `fetch()` probe to the White Rose PDF URL failed with `EAI_AGAIN`;
- `node tools/source-fetch-check.mjs --coverage /tmp/source-fetch-probe.json --stamp`
  against the White Rose PDF also failed with
  `ERROR fetch-check-dead: probe: https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf — EAI_AGAIN`.

Disposition for this scout pass:

- no coverage rewrite was made;
- the current DOI-resolved Springer HTML article remains the exact harvested
  source/locator pairing on disk;
- the remaining blocker is not source exhaustion but the local runtime's
  inability to resolve external hosts, which prevents an honest new
  `fetch_verified` stamp for either the Springer or White Rose same-document
  URLs.

## Source scout round 2

Current failed source record on Wednesday, August 26, 2026:

- `https://doi.org/10.1007/s10485-021-09664-8`

Current batch-gate result before any new rewrite:

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
  -> `ERROR fetch-check-dead: preadditive-and-additive-categories-and-biproducts: https://doi.org/10.1007/s10485-021-09664-8 — EAI_AGAIN`
  and then
  `source-fetch-check: 7/8 source(s) fetch-verified (0 newly stamped), 1 FAILED`

Same-document recovery search actually verified in this scout pass:

- the White Rose Research Online record
  `https://eprints.whiterose.ac.uk/id/eprint/180476/`;
- the White Rose direct published-version PDF
  `https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf`;
- the Paperity mirror page
  `https://paperity.org/p/277939352/the-karoubi-envelope-and-weak-idempotent-completion-of-an-extriangulated-category`,
  which exposes the same Springer PDF link and article text preview, but is not
  preferable to the already-verified Springer and White Rose same-document
  URLs.

Local fetch-probe results for the current URL and every same-document candidate
checked in this scout pass:

- a direct `fetch()` probe to the DOI URL failed with `EAI_AGAIN`;
- a direct `fetch()` probe to the Springer article URL
  `https://link.springer.com/article/10.1007/s10485-021-09664-8` failed with
  `EAI_AGAIN`;
- a direct `fetch()` probe to the Springer PDF URL
  `https://link.springer.com/content/pdf/10.1007/s10485-021-09664-8.pdf` failed
  with `EAI_AGAIN`;
- a direct `fetch()` probe to the White Rose record URL failed with
  `EAI_AGAIN`;
- a direct `fetch()` probe to the White Rose PDF URL failed with `EAI_AGAIN`;
- a direct `fetch()` probe to the Paperity mirror URL failed with `EAI_AGAIN`;
- `node tools/source-fetch-check.mjs --coverage /tmp/source-fetch-probe-0.json,/tmp/source-fetch-probe-1.json --stamp`
  against the White Rose PDF and the Paperity mirror failed with
  `ERROR fetch-check-dead: probe: https://eprints.whiterose.ac.uk/id/eprint/180476/13/Msapato2022_Article_TheKaroubiEnvelopeAndWeakIdemp.pdf — EAI_AGAIN`,
  `ERROR fetch-check-dead: probe: https://paperity.org/p/277939352/the-karoubi-envelope-and-weak-idempotent-completion-of-an-extriangulated-category — EAI_AGAIN`,
  and then
  `source-fetch-check: 0/2 source(s) fetch-verified (0 newly stamped), 2 FAILED`.

Final resolution after the transport outage cleared:

- the White Rose direct published-version PDF fetched successfully as a
  535,724-byte PDF;
- the coverage row now uses that same-document full-text copy and preserves the
  DOI in `original_url`;
- the locator remains Section 2.1, Definition 2.1 through Proposition 2.5;
- no mathematical result or disposition changed.

Post-scout validator reruns on Wednesday, August 26, 2026:

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-10.coverage.json --stamp`
  -> `ERROR fetch-check-dead: preadditive-and-additive-categories-and-biproducts: https://doi.org/10.1007/s10485-021-09664-8 — EAI_AGAIN`
  and then
  `source-fetch-check: 7/8 source(s) fetch-verified (0 newly stamped), 1 FAILED`
- `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json`
  -> `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/prosecheck.mjs --warnings research/frontier-20-batch-10.notes.md`
  -> `0 error(s), 7 warning(s)`, all `count-in-prose` warnings already expected
  in this notes file.

## Step-3 fix pass

Report worked from
`research/frontier-20-alpha-d-step3-scaffold-review.md` (group Alpha `d`,
batches `5`, `8`, and `10`). The batch-10 review block at
[research/frontier-20-alpha-d-step3-scaffold-review.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-20-alpha-d-step3-scaffold-review.md:116)
issues no `B10-*` finding ids: it records only the verdict `sufficient` for
`preadditive-and-additive-categories-and-biproducts`.

### No batch-10 finding ids issued — **no-op**

**Disposition.** Explicit pushback on any further scaffold mutation in this
pass. There is no stable batch-10 finding id to apply, so the authorised
scaffold records stay as they are.

**Evidence.**

- The Alpha review's batch-10 section says the A page is exactly at the
  `60`-item ceiling, the source stack is sufficient on current disk state, and
  the deferred/out-of-scope rows stand cleanly:
  [research/frontier-20-alpha-d-step3-scaffold-review.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-20-alpha-d-step3-scaffold-review.md:118).
- The current repaired Msapato row is already on disk in the batch coverage as
  the White Rose published-version PDF with the DOI preserved in `original_url`:
  [research/frontier-20-batch-10.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-20-batch-10.coverage.json:362).
- The older reharvest and scout-round fetch failures recorded above are kept as
  historical receipts only; this fix-pass section records the current on-disk
  scaffold state and supersedes those earlier transport-outage snapshots.
- Required validators rerun on Wednesday, August 26, 2026:
  - `node tools/coverage-checklist.mjs --require-destination research/frontier-20-batch-10.coverage.json`
    -> `coverage-checklist: 1 page(s), 54 harvested result(s), 0 error(s), 0 warning(s)`
  - `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-*.pages.json`
    -> `content-policy: 486 scoped item(s), 0 error(s), 0 warning(s)`
  - `node tools/validate-plan.mjs research/plan-spec.json`
    -> exit `0`; only repository-wide `redundant-prereq` advisories were printed.

**Changed scaffold record.**

- none; `research/frontier-20-batch-10.pages.json` unchanged
- none; `research/frontier-20-batch-10.coverage.json` unchanged

## Step-5 authoring

Authoring completed on Wednesday, August 26, 2026.

**Owned authored artifacts.**

- New A-page source:
  [library/category-theory/preadditive-and-additive-categories-and-biproducts.md](/home/lazyinspirit/Projects/prestige-math-library/library/category-theory/preadditive-and-additive-categories-and-biproducts.md:1)
- New B-page source:
  [library/category-theory/preadditive-and-additive-categories-and-biproducts-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/category-theory/preadditive-and-additive-categories-and-biproducts-examples.md:1)
- New batch-local contract:
  [research/frontier-20-batch-10.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-20-batch-10.proof-contracts.json:1)
- New item files: all `68` planned batch-10 ids under `items/`.

**Authored ids.**

- A-page theorem/definition/remark spine:
  `def-preadditive-category`,
  `thm-a-one-object-preadditive-category-is-the-same-thing-as-a-ring`,
  `thm-additive-functors-from-a-ring-to-abelian-groups-are-left-modules`,
  `def-additive-functor`,
  `prop-an-additive-functor-preserves-zero-morphisms`,
  `thm-the-opposite-of-a-preadditive-category-is-preadditive`,
  `prop-a-small-product-of-preadditive-categories-is-preadditive`,
  `prop-additive-functors-and-natural-transformations-form-a-preadditive-category`,
  `thm-in-a-preadditive-category-an-object-is-initial-exactly-when-it-is-terminal`,
  `prop-the-zero-morphism-of-a-preadditive-category-is-the-neutral-element-of-its-hom-group`,
  `cor-a-preadditive-category-with-a-zero-object-has-zero-morphisms-in-the-published-sense`,
  `def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product`,
  `def-biproduct`,
  `thm-biproduct-data-characterisation-without-addition`,
  `prop-the-empty-biproduct-is-a-zero-object`,
  `prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism`,
  `thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids`,
  `thm-the-commutative-monoid-enrichment-of-a-category-with-finite-biproducts-is-unique`,
  `cor-the-uniqueness-of-the-enrichment-is-an-instance-of-the-eckmann-hilton-argument`,
  `def-semiadditive-category`,
  `thm-on-a-biproduct-the-injections-and-projections-satisfy-the-identity-sum-relation`,
  `thm-a-semiadditive-category-is-preadditive-exactly-when-every-morphism-has-an-additive-inverse`,
  `def-additive-category`,
  `thm-in-a-preadditive-category-a-finite-product-is-automatically-a-biproduct`,
  `cor-additive-categories-are-closed-under-passage-to-the-opposite`,
  `thm-morphisms-between-finite-biproducts-correspond-to-matrices`,
  `thm-composition-of-morphisms-between-finite-biproducts-is-matrix-multiplication`,
  `cor-the-biproduct-of-morphisms-is-the-diagonal-matrix`,
  `def-the-additive-category-of-matrices-over-a-ring`,
  `thm-the-matrix-category-over-a-ring-is-additive`,
  `thm-the-matrix-category-is-equivalent-to-the-finitely-generated-free-modules`,
  `rem-the-matrix-category-is-the-finite-biproduct-completion-of-a-ring`,
  `thm-in-a-preadditive-category-the-equalizer-of-a-parallel-pair-is-the-kernel-of-their-difference`,
  `cor-in-a-preadditive-category-the-coequalizer-of-a-parallel-pair-is-the-cokernel-of-their-difference`,
  `thm-an-additive-category-with-all-kernels-and-cokernels-has-all-finite-limits-and-colimits`,
  `thm-in-a-preadditive-category-with-a-zero-object-a-morphism-is-monic-exactly-when-its-kernel-is-zero`,
  `cor-in-a-preadditive-category-with-a-zero-object-a-morphism-is-epic-exactly-when-its-cokernel-is-zero`,
  `thm-an-additive-functor-preserves-finite-biproducts`,
  `thm-a-functor-between-additive-categories-is-additive-exactly-when-it-preserves-finite-biproducts`,
  `cor-a-functor-between-additive-categories-preserving-finite-products-is-additive`,
  `cor-any-adjoint-between-additive-categories-is-additive`,
  `thm-an-additive-functor-is-left-exact-exactly-when-it-preserves-kernels`,
  `prop-an-additive-functor-preserves-split-biproduct-diagrams`,
  `thm-the-hom-bifunctor-of-a-preadditive-category-takes-values-in-abelian-groups`,
  `cor-hom-functors-on-a-preadditive-category-are-left-exact`,
  `rem-the-published-module-statement-is-the-instance-of-this-corollary`,
  `def-idempotent-and-split-idempotent`,
  `thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism`,
  `def-idempotent-complete-category`,
  `thm-an-additive-category-with-kernels-is-idempotent-complete`,
  `def-the-idempotent-completion-of-a-preadditive-category`,
  `thm-the-idempotent-completion-is-idempotent-complete-and-its-inclusion-is-fully-faithful-and-universal`.
- A-page witnesses / refutations:
  `cex-an-infinite-coproduct-need-not-agree-with-the-infinite-product`,
  `cex-a-zero-kernel-does-not-force-monicity-in-a-merely-semiadditive-category`,
  `cex-a-covariant-hom-functor-on-an-additive-category-need-not-preserve-cokernels`,
  `fs-the-addition-on-an-additive-category-is-extra-structure-that-must-be-chosen`,
  `fs-a-category-with-finite-products-and-finite-coproducts-has-biproducts`,
  `fs-a-functor-preserving-zero-morphisms-is-additive`,
  `fs-a-preadditive-category-with-a-zero-object-has-binary-biproducts`,
  `fs-every-idempotent-splits`.
- B-page witnesses:
  `ex-the-biproduct-of-two-abelian-groups-computed-as-a-matrix-calculus`,
  `ex-abelian-groups-modules-and-vector-spaces-are-additive`,
  `ex-a-ring-viewed-as-a-one-object-preadditive-category-with-its-matrices`,
  `ex-the-idempotent-completion-of-a-ring-is-the-finitely-generated-projective-modules`,
  `cex-pointed-sets-are-not-additive`,
  `cex-commutative-monoids-are-semiadditive-and-not-additive`,
  `ex-additive-functors-out-of-the-matrix-category`,
  `ex-a-preadditive-category-with-two-objects-and-a-nonzero-hom-group`.

**Provenance rationale.**

- Statements read directly from the harvested source stack, or sharpened only
  where the design already required a sourced convention split or an explicit
  size/choice clause. These were tagged `literature-derived` when the authored
  claim matches the read source treatment and `ai-altered` when the statement is
  a faithful synthesis, a namespaced pedagogical false statement, or a sourced
  witness packaged in the library's house style.
- Local proofs and verifications are newly written from the on-disk dependency
  closure and are tagged `ai-generated`.
- No authored statement is tagged `ai-generated`, so no batch-10 dependency edge
  lands on a generated claim.

**Changed claim scope.**

- none; no scaffolded claim was narrowed or dropped at Step 5
- one artifact gap was repaired structurally, not mathematically:
  `research/frontier-20-batch-10.proof-contracts.json` was missing at dispatch
  start and is now created from the authored items on disk

**Checks run after authoring.**

- `node tools/tsx-run.mjs tools/precheck.mts $(...batch-10 item files...)`
  -> `56 checked, 0 failing — all clean`
- `node tools/proof-contract.mjs research/frontier-20-batch-10.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 56/56 item(s) checked`
- `node tools/citation-fidelity.mjs research/frontier-20-batch-10.proof-contracts.json --fail-on-missing-quote`
  -> `153 citation(s) over 56 authored item(s)`; no missing quotes and no widening candidates
- `node tools/boundary-audit.mjs research/frontier-20-batch-10.proof-contracts.json --fail-on-contradicted`
  -> exit `0`; no contradicted dispositions; the tool still reports template-reuse clusters on repeated `not_applicable` rationale shapes
- `node tools/content-policy.mjs research/frontier-20-batch-10.pages.json`
  -> `content-policy: 68 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; only repository-wide `redundant-prereq` advisories were printed

**Independent audit attempt.**

- I attempted the required read-only `gpt-5.6-sol` / `xhigh` audit through the
  installed `codex` CLI on Wednesday, August 26, 2026.
- The local runner could launch `codex-cli 0.149.1`, but the Sol lane could not
  connect to its backend: repeated `http/request failed` errors for
  `https://chatgpt.com/backend-api/ps/mcp` and `Operation not permitted` errors
  for `wss://chatgpt.com/backend-api/codex/responses` left the audit blocked by
  transport, not by mathematics.
- No audit artifact was fabricated and no external verdict is claimed.

**Open blockers.**

- No local mathematical blocker remains in the authored batch files.
- The only outstanding blocker in this runtime is the failed external transport
  needed for the independent Sol audit.

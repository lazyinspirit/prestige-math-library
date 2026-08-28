# frontier-23 · Beta-9 · batch notes — `smooth-manifolds-and-smooth-maps`

Run `frontier-23`, batch `9`, two A/B pairs, category `differential-geometry`.
Author: Beta-9. Session date: Friday, August 28, 2026.

Artifacts owned by this batch:
`research/frontier-23-batch-9.pages.json`,
`research/frontier-23-batch-9.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Controlling design and resulting shape

Design locations opened:

- `research/plan-differential-geometry-track.md` lines `442-608` for DG-1
- `research/plan-differential-geometry-track.md` lines `2086-2265` for DG-8
- `research/plan-realanalysis-completion-track.md` lines `775-781` for the
  owner seam amendment that retargets DG-8 to RC-10

Controlling design calls:

- For `smooth-manifolds-and-smooth-maps`, the controlling design is the DG-1
  section itself. The later matched location at line `608` is not a competing
  amendment; it is the proof-strategy / traps block inside the same section and
  therefore constrains the scaffold rather than replacing it.
- For `euclidean-ordinary-differential-equations-with-smooth-dependence`, the
  controlling design is the DG-8 section **together with** the explicit
  2026-08-19 seam amendment. I treated that amendment as controlling over the
  older pre-seam item list beneath it, because it states in owner language that
  RC-10 now owns local existence, uniqueness, Gronwall, continuous dependence,
  and maximal continuation, and that DG-8 keeps the smooth-dependence layer.

Shape after scaffolding:

- `smooth-manifolds-and-smooth-maps` (A): **40 items**
- `smooth-manifolds-and-smooth-maps-examples` (B): **10 items**
- `euclidean-ordinary-differential-equations-with-smooth-dependence` (A):
  **17 items**
- `euclidean-ordinary-differential-equations-with-smooth-dependence-examples`
  (B): **6 items**

Neither A page crosses the 60-item split ceiling, so no split is proposed.

---

## 2. Design-vs-spec drift I did not settle

The dispatch says to record drift and follow `research/plan-spec.json` rather
than adjudicating locally.

### Finding 1 — no order drift

- DG-1 is `443/444` in both the design and `research/plan-spec.json`.
- DG-8 is `457/458` in both the design and `research/plan-spec.json`.

### Finding 2 — no prerequisite drift

- DG-1's declared prerequisites match the design and the spec exactly.
- DG-8's declared prerequisites also match exactly, including the added
  prerequisite `picard-lindelof-and-first-order-odes`.

### Finding 3 — the live seam is inside design, not a spec conflict

The only substantive tension I had to resolve was internal to DG-8's design:
the owner seam amendment says RC-10 now owns the local-existence / uniqueness /
continuous-dependence block, while the older DG-8 item list below it still
shows that material. I treated this as a **design-control** issue, not a
design-vs-spec drift issue, and followed the amendment.

### Finding 4 — no hidden prerequisite drift from step 0

`research/frontier-23-alpha-step0-drift.md` records `no-drift` for both DG-1
and DG-8. I did not surface any extra page prerequisite beyond those already
declared there and in the spec.

---

## 3. Source choices and coverage boundaries

Only the A pages need harvest ledgers.

### 3.1 DG-1 — `smooth-manifolds-and-smooth-maps`

Recorded harvest sources:

1. Rob van der Vorst, *Introduction to differentiable manifolds*:
   `https://www.few.vu.nl/~vdvorst/notes-2012.pdf`
2. Nigel Hitchin, *Differentiable Manifolds*:
   `https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`

Why these two:

- Van der Vorst is the batch's qualifying primary treatment: a full lecture-note
  set with a harvestable contents page and explicit topological-manifold,
  differentiable-structure, and smooth-map statements.
- Hitchin is the design-listed independent treatment I used to cross-check the
  chart, atlas, smooth-map, and diffeomorphism conventions.

What I did **not** do:

- I opened the design-listed Lee and Merry metadata / table-of-contents pages
  for context, but I am **not** treating those pages as harvested evidence of
  the mathematics. They are not in the coverage ledger because I did not verify
  full text for them in this pass.

Coverage boundaries I kept explicit:

- Hitchin's `Theorem 2.2` is the regular-level-set route to sphere examples.
  I deferred that to `rank-theorems-and-embedded-submanifolds`, because DG-1 is
  intentionally atlas-first and the later DG-4 page owns the submersion / slice
  machinery.
- The topological consequences block on DG-1 is scaffolded here, but its proofs
  are routed through the **published** topology pages exactly as the design
  requires. External lecture notes support the statements; they do not replace
  the library's choice ledger.

### 3.2 DG-8 — `euclidean-ordinary-differential-equations-with-smooth-dependence`

Recorded harvest sources:

1. Nigel Hitchin, *Differentiable Manifolds*:
   `https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`
2. Chin-Lung Wang, *Banach Calculus*:
   `https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf`

Why these two:

- Hitchin is the design-listed concise smooth-dependence proof, with explicit
  `Theorems 10.4-10.7` and `Lemma 10.6`.
- Wang gives the full-text time/parameter-reduction and implicit-function-
  theorem route to local smoothness of the flow, which is exactly the seam-safe
  remainder DG-8 still owns after RC-10.

Coverage boundaries I kept explicit:

- All source rows for local existence, local uniqueness, and continuous
  dependence are marked `already-published` against RC-10, not re-minted here.
- The DG-8 scaffold therefore keeps only the smooth-dependence, flow-domain,
  and Euclidean completeness block, plus the worked examples that actually
  support that scope.
- I deliberately dropped the pre-seam DG-8 false/example claims that would only
  duplicate already-published RC-10 material, especially the standard
  nonuniqueness and finite-time blow-up witnesses in their old roles.

### 3.3 URL verification status

On Friday, August 28, 2026 I re-opened all three distinct source URLs through
the web reader:

- `https://www.few.vu.nl/~vdvorst/notes-2012.pdf`
- `https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`
- `https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf`

So the recorded coverage rows are attached only to URLs whose contents I
actually opened and read in this dispatch. The original Oxford author-page URL
for Hitchin is preserved as `original_url` provenance, but the current coverage
rows now point at a complete Wayback copy that `source-fetch-check --stamp`
successfully fetched and stamped.

---

## 4. Local scaffold decisions

### Decision 1 — DG-1 keeps the full layered structure from the design

I kept the DG-1 separation the design insists on:

- topological manifold data,
- chart compatibility and atlases,
- maximal atlas / smooth structure,
- smooth maps and local smoothness checks,
- topological consequences of Hausdorff + second countable + locally Euclidean.

That is why the page stays at 40 A-items instead of collapsing the atlas /
smooth-structure / smooth-map well-definedness obligations into a few informal
definitions.

### Decision 2 — DG-8 follows the seam amendment, not the stale pre-seam list

I treated RC-10 as already owning:

- the IVP / Volterra equivalence,
- the Picard operator and contraction block,
- Picard-Lindelof existence and uniqueness,
- Gronwall,
- continuous dependence,
- maximal solutions and continuation.

So DG-8 now scaffolds only:

- the variational equation and linear matrix ODE bridge,
- $C^1$ and $C^\infty$ dependence on initial data,
- smooth dependence on parameters,
- the autonomous / nonautonomous fundamental theorems,
- openness and composition of the maximal solution domain,
- bounded / compact-support Euclidean completeness corollaries.

### Decision 3 — DG-8 avoids silent duplication of RC-10 claims

The pre-seam design's old false statements and examples would have duplicated
already-published RC-10 mathematics under new ids. I did not keep those. The
page keeps only claims whose mathematical role survives the seam honestly.

### Decision 4 — canonical rows cover the honest intermediate results

Several results genuinely needed for authoring do not sit under one clean source
heading:

- DG-1: atlas-compatibility equivalence, maximal-atlas generation, coordinate
  ball bases, and the product / disjoint-union smoothness criteria.
- DG-8: autonomous terminology, the variational equation, matrix-ODE
  invertibility, Euclidean completeness corollaries, and the open maximal-domain
  / time-shift composition consequences.

I therefore recorded those as `canonical` coverage rows instead of pretending a
single source heading states them verbatim.

---

## 5. Known limits and caution points

- The shell cannot resolve the harvested hosts in this workspace today, so no
  local `fetch_verified` stamps or local liveness receipts could be written.
- The original scaffold used a `paperzz.com` mirror of Wang's notes. This
  reharvest replaced it with Wang's live author-hosted NTU PDF and preserved
  the dead mirror as `original_url` in the coverage row.
- DG-1's topological consequences are statement-backed by the external lecture
  notes, but the actual proofs must still cite the published topology pages in
  the library, because the design made those exact hypotheses and choice costs
  controlling.

---

## 6. Validator results

### Actual results run on Friday, August 28, 2026

- `node -e 'JSON.parse(...)'` on `research/frontier-23-batch-9.pages.json`
  -> `pages-json: ok`

- `node -e 'JSON.parse(...)'` on `research/frontier-23-batch-9.coverage.json`
  -> `coverage-json: ok`

- `node tools/coverage-checklist.mjs research/frontier-23-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  -> `content-policy: 365 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The validator ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 484 page(s) with item lists.`
  The visible warning stream was the standing repo-wide `redundant-prereq`
  class, not a batch-9 failure.

---

## 7. Reharvest-1 repair on Friday, August 28, 2026

This beta reharvest consumed the two DG-8 work rows in
`research/frontier-23-reharvest-plan.json`:

- `thm-fundamental-theorem-for-nonautonomous-smooth-odes`
- `thm-fundamental-theorem-for-autonomous-smooth-odes`

### Dead source and same-document recovery

- Dead source as named by the reharvest plan and the merged
  `research/frontier-23-url-liveness.json`:
  `https://paperzz.com/doc/7010229/banach-calculus---national-taiwan-university`
- I checked same-document recovery before considering any different treatment.
  The author page `https://www.math.ntu.edu.tw/~dragon/` links to the teaching
  page `https://www.math.ntu.edu.tw/~dragon/courses.html`, and that 2012 course
  page links directly to the live PDF:
  `https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf`
- The recovered NTU PDF is the same April 26, 2012 `BANACH CALCULUS` document:
  identical title, author, abstract, table of contents, and §4 headings
  `4.1`-`4.4`.
- Provenance action:
  the dead `paperzz` URL is preserved as `original_url` in
  `research/frontier-23-batch-9.coverage.json`.

This is a **same-document URL recovery**, not a different-treatment re-source
and not an archive substitution.

### Affected results

- `thm-fundamental-theorem-for-nonautonomous-smooth-odes`
  is now backed by Wang §4.3 `Reduction to time/parameter independent case`,
  at pdf pp. 13-14 and extracted lines `885-919`, where the nonautonomous and
  parameter-dependent systems are reduced by adjoining the time and parameter
  variables.

- `thm-fundamental-theorem-for-autonomous-smooth-odes`
  is now backed by Wang §4.4 `Local smoothness of the flow: The C^p case`,
  at pdf pp. 14-16 and extracted lines `920-1171`, where the implicit-function-
  theorem proof establishes local smoothness of the flow and the variational
  equation identifies the derivative with a linear ODE.

### Claim constraints changed

- None. No item id, dependency, destination, page split, or page-scope
  decision changed.

### Post-repair validator results

- `node tools/coverage-checklist.mjs research/frontier-23-batch-9.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-backing.mjs --coverage research/frontier-23-batch-9.coverage.json --liveness research/frontier-23-url-liveness.json`
  -> `source-backing: 17 authored result(s) across 1 file(s), every one still backed by an openable source`

  This is the important reharvest closure against the same merged liveness
  artifact that produced the scout work list: the two DG-8 authored results are
  no longer orphaned there.

- `node tools/url-sweep.mjs --coverage research/frontier-23-batch-9.coverage.json --out /tmp/frontier-23-batch-9-url-liveness.reharvest-1-b9.json --recover --fail-on-dead`
  -> **failed mechanically in this runner**:

  ```text
  url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-23-batch-9-url-liveness.reharvest-1-b9.json
  FAIL 0 https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf — curl: (6) Could not resolve host: people.maths.ox.ac.uk
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.few.vu.nl/~vdvorst/notes-2012.pdf — curl: (6) Could not resolve host: www.few.vu.nl
    no archived snapshot under any host variant — re-sourcing is justified here
  FAIL 0 https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf — curl: (6) Could not resolve host: www.math.ntu.edu.tw
    no archived snapshot under any host variant — re-sourcing is justified here
  ```

- `node tools/source-backing.mjs --coverage research/frontier-23-batch-9.coverage.json --liveness /tmp/frontier-23-batch-9-url-liveness.reharvest-1-b9.json`
  -> **failed mechanically after the fresh batch liveness sweep**:

  `source-backing: 17 authored result(s) have no openable source left`

  This does **not** identify a Wang-specific remaining orphan after the repair.
  It is the expected consequence of the fresh batch liveness receipt recording
  `0/3 live` because this runner could not resolve any of the three external
  hosts.

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-9.coverage.json --stamp`
  -> **failed mechanically in this runner**:

  ```text
  ERROR fetch-check-dead: smooth-manifolds-and-smooth-maps: https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf — EAI_AGAIN
  ERROR fetch-check-dead: euclidean-ordinary-differential-equations-with-smooth-dependence: https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf — EAI_AGAIN
  ERROR fetch-check-dead: euclidean-ordinary-differential-equations-with-smooth-dependence: https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf — EAI_AGAIN
  source-fetch-check: 1/4 source(s) fetch-verified (0 newly stamped), 3 FAILED
  ```

- No `fetch_verified` stamp was fabricated for the recovered NTU PDF. The
  exact current blocker is the runner's outbound DNS failure, not lack of a
  same-document replacement.

---

## 8. Source scout follow-up for the remaining Hitchin rows

Date: Friday, August 28, 2026.

Current validator state from disk:

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-9.coverage.json --stamp`
  now isolates only the two Hitchin uses:

  ```text
  ERROR fetch-check-dead: smooth-manifolds-and-smooth-maps: https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf — EAI_AGAIN
  ERROR fetch-check-dead: euclidean-ordinary-differential-equations-with-smooth-dependence: https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf — EAI_AGAIN
  source-fetch-check: 2/4 source(s) fetch-verified (0 newly stamped), 2 FAILED
  ```

Additional same-text search results tested:

- The controlling design bibliography itself cites the `~joyce` variant
  `https://people.maths.ox.ac.uk/~joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf`.
  A temp-file `source-fetch-check --stamp` run on that exact candidate still
  failed with `EAI_AGAIN`.
- Oxford's course page
  `https://courses.maths.ox.ac.uk/mod/resource/view.php?forceview=1&id=8141`
  says "These are Nigel Hitchin's 2014 Differentiable Manifolds lecture notes"
  and links the direct PDF
  `https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf`.
  The web reader opened that PDF and confirmed the same 94-page text:
  title page `DIFFERENTIABLE MANIFOLDS`, `Course C3.3b 2014`, `Nigel Hitchin`,
  and contents listing §2 `Manifolds` plus Appendix §§10.2-10.3 exactly in the
  ranges batch `9` harvested. A temp-file `source-fetch-check --stamp` run on
  that direct PDF still failed with `EAI_AGAIN`.
- The author-page file path
  `https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`
  is another same-document Oxford-hosted candidate surfaced by search, but the
  same temp-file `source-fetch-check --stamp` probe also failed with
  `EAI_AGAIN`.

Why I left coverage unchanged:

- Fresh Node `fetch(...)` probes to
  `https://www.few.vu.nl/~vdvorst/notes-2012.pdf`,
  `https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf`,
  `https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf`, and
  `https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/b4d9bf1573dccea21bee82cfba4224d4_MIT18_404f20_lec1.pdf`
  now also return `EAI_AGAIN`, including hosts whose source rows are already
  stamped in this and other batches. That makes the present failure resolver-
  wide in this shell, not a Hitchin-specific defect.
- A repo-wide search found no other batch coverage row already carrying a
  `fetch_verified` receipt for any Hitchin candidate URL, so there is no exact-
  URL stamp on disk to reuse here.
- Because every same-text candidate that I verified in the web reader still
  fails the mechanical full-text fetch check in this runner, I did not replace
  the current Oxford row with an equally unstamped mirror and I did not
  fabricate a `fetch_verified` record.

---

## 9. Archive-fallback scout for the Hitchin blocker

Date: Friday, August 28, 2026.

New same-source archive candidate:

- GitHub search surfaced Marcello Seri's `AoM` bibliography entry
  `@misc{lectures:hitchin}` in `aom.bib`, which records the Wayback fallback
  `http://web.archive.org/web/20201111215108/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`
  for Hitchin's 2014 lecture notes.

Mechanical probe results:

- A direct Node `fetch(...)` probe to the HTTPS Wayback form of that archive
  URL failed before HTTP with `getaddrinfo EAI_AGAIN web.archive.org`.
- A direct Node `fetch(...)` probe to Oxford's same-text course mirror
  `https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf`
  also failed with `EAI_AGAIN`, matching the earlier temp-file
  `source-fetch-check --stamp` result already recorded in §8.

Disposition:

- I left `research/frontier-23-batch-9.coverage.json` unchanged. The current
  Oxford URL is still the row backed by `research/frontier-23-url-liveness.json`,
  while the course-mirror and archive candidates remain verified scouting leads
  that this runner cannot mechanically fetch. Replacing the row with another
  unstamped URL would not close the gate and would sever the current link to
  the run liveness artifact.
- No `fetch_verified` receipt was fabricated for the Hitchin rows. The
  remaining blocker is still resolver-wide shell access, now confirmed on the
  archive host as well.

---

## 10. Hitchin archive resolution on the current bytes

Date: Friday, August 28, 2026.

This section supersedes the unresolved blocker recorded in §§8-9.

Current validator state from disk:

- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-9.coverage.json --stamp`
  now passes on the current bytes:

  ```text
  source-fetch-check: 4/4 source(s) fetch-verified (0 newly stamped)
  ```

Resolved source record:

- Failed source record under earlier scouting: both A-page Hitchin rows rooted at
  `https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf`
  and then at Oxford's `pluginfile.php` course mirror.
- Search result that supplied the durable fallback: Marcello Seri's `AoM`
  bibliography entry `@misc{lectures:hitchin}` pointing to the complete Wayback
  copy `https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf`.
- Replacement on current bytes: both Hitchin coverage rows now use that Wayback
  PDF as `url`, while preserving
  `https://people.maths.ox.ac.uk/joyce/Nairobi2019/Hitchin-DifferentiableManifolds.pdf`
  as `original_url`.

Why no reharvest was needed:

- This is a same-text source recovery, not a different treatment. The recorded
  locators and result dispositions stay attached to the same Hitchin lecture
  notes, and the current `fetch_verified` stamps on both rows show the same
  fetched file size and hash prefix (`1028810` bytes, `313ad04858e53840`).

## Step-3 fix pass

Run date for this pass: Saturday, August 29, 2026. The governing alpha review
is `research/frontier-23-alpha-b-step3-scaffold-review.md`, whose findings
table names only `B2-1`, `B2-2`, and `B5-1`.

- Finding `B2-1` disposition: pushed back as non-applicable to batch `9`.
  Evidence: the review assigns `B2-1` to
  `complexification-realification-and-real-structures` in batch `2`, while its
  batch-9 page review marks `smooth-manifolds-and-smooth-maps` as
  `sufficient`, with "no local repair needed."
  Changed scaffold record: none in batch `9`; no edit was warranted in
  `research/frontier-23-batch-9.pages.json` or
  `research/frontier-23-batch-9.coverage.json`.
- Finding `B2-2` disposition: pushed back as non-applicable to batch `9`.
  Evidence: the review assigns `B2-2` to
  `exterior-powers-orientation-and-hodge-duality` in batch `2`, while the same
  review marks both batch-9 A pages `sufficient`.
  Changed scaffold record: none in batch `9`; no edit was warranted in
  `research/frontier-23-batch-9.pages.json` or
  `research/frontier-23-batch-9.coverage.json`.
- Finding `B5-1` disposition: pushed back as non-applicable to batch `9`.
  Evidence: the review assigns `B5-1` to
  `matrix-norms-condition-numbers-and-numerical-stability` in batch `5`, and
  its page-review sections for `smooth-manifolds-and-smooth-maps` and
  `euclidean-ordinary-differential-equations-with-smooth-dependence` both say
  "no repair needed" on the current bytes.
  Changed scaffold record: none in batch `9`; no edit was warranted in
  `research/frontier-23-batch-9.pages.json` or
  `research/frontier-23-batch-9.coverage.json`.

Current validator evidence on the unchanged batch-9 scaffold bytes:

- `node tools/coverage-checklist.mjs --require-destination research/frontier-23-batch-9.coverage.json`
  passed on Saturday, August 29, 2026:
  `coverage-checklist: 2 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-23-batch-*.pages.json`
  passed on Saturday, August 29, 2026:
  `content-policy: 499 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Saturday, August 29, 2026 and ended with the repository-wide
  `OK` summary. It again emitted only the standing out-of-batch
  `redundant-prereq` advisories.
- `node tools/source-fetch-check.mjs --coverage research/frontier-23-batch-9.coverage.json`
  passed on Saturday, August 29, 2026:
  `source-fetch-check: 4/4 source(s) fetch-verified`.

Current source verification note:

- I re-opened the recorded van der Vorst and Wang PDFs through the web reader
  at their coverage URLs on Saturday, August 29, 2026.
- The web reader did not open the archived Hitchin URL directly in this pass,
  so I re-opened the same 2014 notes at Oxford's live course PDF
  `https://courses.maths.ox.ac.uk/pluginfile.php/31073/mod_resource/content/1/Manifold_notes.pdf`
  and confirmed the same table of contents and manifold / ODE appendix ranges
  used by the recorded locators.
- I did not rewrite the Hitchin coverage rows during this fix pass, because the
  current batch already carries durable `fetch_verified` stamps for the
  archived URL and no batch-9 finding required a reharvest.

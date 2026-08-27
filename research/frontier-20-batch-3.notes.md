# frontier-20 · Beta-3 · batch notes — `subharmonic-functions-and-the-dirichlet-problem`

## 1. Scope, order, and owned artifacts

This batch owns the A/B pair
`subharmonic-functions-and-the-dirichlet-problem` / `subharmonic-functions-and-the-dirichlet-problem-examples`
at orders `329` and `330`.

I read the design block at
`research/plan-complex-analysis-track.md` lines `2031-2129`, then checked
`research/plan-spec.json`. The design and the spec agree on:

- page id
- title
- order
- category
- companion page
- prerequisites

So there is no design/spec drift to record for this pair.

Artifacts written by this dispatch:

- `research/frontier-20-batch-3.pages.json`
- `research/frontier-20-batch-3.coverage.json`
- this file

No plan structure, workflow state, published content, or other batch artifact
was edited.

## 2. Scaffold shape

The A page has **31 items**. The B page has **9 items**. The A page is well
below the 60-item ceiling, so no split is proposed.

The A page breaks into three proof clusters:

- **Subharmonic core (items 1-14).**
  Convention remark; subharmonic/superharmonic definitions; Borel/integrability
  setup; harmonic-comparison and `C^2` characterisations; `log|f|` and `|f|^p`;
  stability under finite maxima and positive sums; decreasing limits;
  upper-semicontinuous regularisation and upper envelopes; maximum principle.

- **Perron core (items 15-24).**
  Poisson modification; the gluing lemma; Perron lower family and envelope;
  harmonicity of the regularised Perron envelope; barrier and regular-point
  definitions; barrier characterisation; Perron solvability on regular bounded
  plane domains.

- **Geometric regularity and transport (items 25-31).**
  Exterior disc / exterior cone criteria; the locality bridge for peak
  functions; the Bouligand weak-peak bridge; the complementary-component
  peak-function lemma; boundary-component regularity; bounded simply connected
  proper domains as a corollary; conformal transport of continuous Dirichlet
  solutions across closure-homeomorphic conformal maps.

The companion page is intentionally lean and concrete:

- two basic subharmonic examples
- an explicit Poisson modification
- an explicit annulus Perron solution
- an explicit corner barrier
- the punctured-disc irregular-boundary / nonsolvability witness
- four false-statement refutations built off the same A-page spine

## 3. Design adjustments

I kept the Perron / barrier / regularity route of the design, but I did **not**
scaffold three non-load-bearing design items:

- `thm-hartogs-lemma-for-subharmonic-functions`
- `cor-almost-everywhere-equality-determines-a-plane-subharmonic-function`
- `thm-mollifier-regularization-of-plane-subharmonic-functions`

Reason: in the verified ranges I actually read for this dispatch, I obtained
direct harvest support for the subharmonic-definition spine, the upper-envelope
spine, the Perron construction, the barrier criterion, and the geometric
regularity theorems, but not an equally honest harvested route for those three
extra results. None of them is load-bearing for Perron's method or for the
regularity theorems authored here, so I left them out. The step-3 repair then
added three different load-bearing peak-function bridge items (`7.6.3`,
`7.6.4`, and the §7.7 complementary-component construction), bringing the A
page back to 31 items for honest route closure rather than for padding.

If Alpha wants any of the three restored before step 5, the right fix is **new
read source support**, not a prose insistence that the design once proposed
them.

## 4. Source choices and URL discipline

I used three independent treatments in the coverage artifact:

1. **Axler–Bourdon–Ramey, _Harmonic Function Theory_**, Chapter 11.
   This is the design's textbook source and it carries the Perron, barrier, and
   geometric-regularity half of the page.

2. **Boris Khoruzhenko, _Potential Theory_ lecture notes**, via the live Yumpu
   mirror.
   This supplies the harmonic-majoration theorem, local integrability,
   punctured-disc irregularity, the simply-connected regularity theorem, and the
   conformal transport / harmonic-measure section.

3. **Harold P. Boas, Math 618 complex-analysis notes**, via the direct
   course-site PDF.
   This replaces the inaccessible Schlag source for the verified scaffold. It
   supplies the Chapter 2 working definition of planar simple connectivity, the
   standard upper-semicontinuous convention, the harmonic comparison theorem,
   the `C^2` criterion, `log|f|`, the Perron upper-envelope theorem, the
   locality and Bouligand peak-function bridges, and the complementary-
   component peak-function theorem that closes the simply-connected regularity
   endpoint.

### Same-source recovery notes

- The Khoruzhenko notes were read from a live mirror because the QMUL source
  page exposed the lecture-note existence but not a directly fetchable full-text
  PDF through this dispatch's web tooling.

- The Boas notes now point to the direct PDF linked from Boas's Spring 2016
  course page. The earlier Studylib mirror is retained as `original_url`
  provenance after the source-scout repair in §8.

I did **not** fabricate `original_url` fields where I could not verify the exact
superseded full-text document URL. The coverage file records the live URLs I
actually read.

## 5. Convention and scope decisions

- **Subharmonic convention.**
  This page adopts the standard upper-semicontinuous, extended-real convention
  with the componentwise exclusion of `u ≡ -∞`. That is what makes `log|f|`
  belong on this page without an ad hoc exception.

- **No Green-function or harmonic-measure page capture here.**
  The current `plan-spec.json` has no exact page id for the later Green /
  harmonic-measure branch named only in the complex-analysis track prose. So the
  Khoruzhenko harmonic-measure rows are honestly deferred to
  `owner-decision`, not silently absorbed into CA-14.

- **No prime ends.**
  The conformal transport theorem is scoped only to conformal bijections that
  extend homeomorphically to the closures. The slit-domain / prime-end warning
  from the design is kept conceptually, but I did not mint a separate B-page
  remark item for it.

- **No load-bearing forward references.**
  I kept none.

## 6. Dependency rationale

The manifest's external dependencies stay inside already-published material from:

- `harmonic-functions-and-the-poisson-integral`
- `the-lebesgue-integral-and-the-convergence-theorems`
- `the-topology-of-euclidean-space`

plus their already-published prerequisite closure.

I deliberately avoided depending on an unplanned harmonic-measure page, on a
Green-function page, or on prime-end machinery.

The simply-connected corollary now runs through an explicit bridge stack:
`lem-local-subharmonic-peak-function-globalizes`,
`lem-weak-local-subharmonic-peak-function-implies-regularity`, and
`lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`
package the Boas §7.6.3, §7.6.4, and §7.7 bridge stack, and
`cor-simply-connected-proper-plane-domains-are-regular` applies that lemma
using the source's working definition of planar simple connectivity. Khoruzhenko
Theorem 52 remains as an independent endpoint check on the same claim.

Known limits:

- the Bouligand upgrade is now explicit as its own scaffold item, but in the
  Boas notes it is still a cited imported refinement rather than a locally
  decomposed proof;
- the live CA-14 design still says that the simply-connected corollary should
  run through `thm-nonsingleton-boundary-component-is-regular`, while the
  verified batch-3 source stack closes only the complementary-component route.
  I did not find an in-scope, fetch-verified bridge that restores the older
  singleton-boundary-component reduction inside the authorised batch-3 files, so
  the scaffold keeps the source-backed route and records the mismatch explicitly
  below instead of pretending it is repaired.

## 7. Expected validator targets

Per the frontier-20 batch brief, the in-scope gate set is:

- `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only ...`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-3.coverage.json --out research/frontier-20-url-liveness.json --recover --fail-on-dead`

I append the actual results below after running them.

### Actual results run on Wednesday, August 26, 2026

- `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-1.pages.json ... research/frontier-20-batch-9.pages.json`
  -> `content-policy: 96 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> **pass with warnings only**. The validator ended with `OK` and reported no
  cycles, no unresolved ids, and no forward-reference or B-page violations.
  The warning relevant to this batch is:
  `page subharmonic-functions-and-the-dirichlet-problem requires the-topology-of-euclidean-space directly, but already reaches it through harmonic-functions-and-the-poisson-integral` and likewise through `the-lebesgue-integral-and-the-convergence-theorems`.
  I left the spec prerequisite list unchanged, exactly as the batch brief
  instructs: drift and prereq-reduction decisions are not settled inside a batch.

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json --stamp`
  -> **failed mechanically**:
  `0/3 source(s) fetch-verified, 3 FAILED`
  with
  `EAI_AGAIN` on:
  `https://www.axler.net/HFT.pdf`,
  `https://www.yumpu.com/en/document/view/12029492/potential-theory`, and
  `https://studylib.net/doc/10482300/class-notes-math-618--complex-variables-ii-spring-2016-ha...`.

- `node tools/url-sweep.mjs --coverage research/frontier-20-batch-3.coverage.json --out research/frontier-20-url-liveness.json --recover --fail-on-dead`
  -> **failed mechanically**:
  `url-sweep: 0/3 live; 3 failed; 0 recoverable from the archive; 0 suspect`
  with `curl: (6) Could not resolve host` for all three hosts.

### Interpretation of the failed URL gates

These are **transport failures in this sandbox**, not a mathematical or harvest
failure discovered by reading:

- the same three sources were opened and read through the web tool during this
  dispatch;
- both failing gate tools stopped at DNS resolution (`EAI_AGAIN` and `curl: (6)`)
  before any PDF/HTML-content test, archive recovery, or bot-wall classification
  could occur;
- the liveness tool's printed line `re-sourcing is justified here` is its
  generic output for an unresolved host with no checked snapshot, not evidence
  that the harvested document itself is dead.

So the current blocker is: **no durable local fetch stamps and no local
liveness receipt because the sandbox could not resolve the hosts on
August 26, 2026**. If the DNS issue clears, the next action is to rerun exactly
those two commands before any source substitution is considered.

## 8. Source-scout repair on Wednesday, August 26, 2026

I reran the batch-local fetch gate before editing:

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json`
  -> `ERROR fetch-check-unstamped: subharmonic-functions-and-the-dirichlet-problem: https://studylib.net/doc/10482300/class-notes-math-618--complex-variables-ii-spring-2016-ha...`
  -> `source-fetch-check: 2/3 source(s) fetch-verified, 1 FAILED`

So the only failed source record on disk was the unstamped Boas mirror row.
The Axler and Khoruzhenko rows already carried `fetch_verified` stamps.

### Search result and replacement

- Failed source: the Studylib mirror for Harold P. Boas's Spring 2016 Math 618
  notes.
- Search result read: the live course page
  `https://haroldpboas.gitlab.io/courses/618-2016a/`, which links directly to
  the same full text at
  `https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf`.
- Verification of sameness: the linked PDF opens as `Class Notes / Math 618:
  Complex Variables II / Spring 2016 / Harold P. Boas / updated April 29, 2016`
  and its table of contents places the harvested range at Chapter 7, with
  `7.2 Subharmonic functions` on page 50, `7.4 Perron's method` on page 56,
  `7.6 Remarks on barriers` on pages 59-60, and `7.7 Construction of peak
  functions` on page 61.
- Coverage action: I replaced the reader-facing `url` with the direct Boas PDF,
  removed the now inaccurate `(mirror copy)` label from the title, and tightened
  the locator to `Ch. 7, §§7.2 and 7.4-7.7 (PDF pp. 50-61 / printed pp. 50-61)`.
  After archive recovery for the superseded Studylib URL failed and the direct
  same-text PDF received a durable fetch-verification stamp, I kept the exact
  dead mirror URL in `original_url` provenance.

### Post-change fetch result

The first batch-local stamp attempt encountered transient DNS failure. The
subsequent level gate fetched the direct Boas PDF and recorded its durable
`fetch_verified` stamp at `2026-08-26T18:00:42.404Z` (552,969 bytes,
SHA-256 prefix `a9197e062a990312`). With the replacement verified and the dead
mirror unrecoverable from the archive, the dead mirror remains only as
`original_url` provenance.

## Step-3 fix pass

- `B3-1` — `applied`
  Evidence: on Wednesday, August 26, 2026, I re-read the recorded late-branch
  sources behind the disputed corollary. Khoruzhenko Lecture 4 states `Thm 52`
  as the simply-connected regularity endpoint (`If D is a simply connected
  domain such that C∞\D contains at least two points then D is a regular
  domain`). Boas, Ch. 2 gives the working definition of a simply connected
  plane region as one whose extended-plane complement is connected, while Ch.
  7 §7.6.3, §7.6.4, and §7.7 provide the locality bridge, the Bouligand weak-
  peak bridge, and the complementary-component construction actually used in
  the proof route. Changed scaffold record:
  `research/frontier-20-batch-3.pages.json` now adds
  `lem-local-subharmonic-peak-function-globalizes`,
  `lem-weak-local-subharmonic-peak-function-implies-regularity`, and
  `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`
  and routes
  `cor-simply-connected-proper-plane-domains-are-regular` through that lemma
  instead of through an unstated singleton-boundary-component bridge.

- `B3-1` — `coverage labels repaired while verifying evidence`
  Evidence: the fetch-verified Axler PDF at `https://www.axler.net/HFT.pdf`
  shows that `11.7` is the one-way barrier-to-boundary-limit theorem, `11.10`
  is the barrier-equivalence theorem for bounded Dirichlet solvability, `11.11`
  is the external-ball theorem, and `11.16` is the external-cone theorem. The
  fetch-verified Boas PDF at
  `https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf` labels the
  relevant headings `7.6.1 Lebesgue`, `7.6.2 Necessity and sufficiency`,
  `7.6.3 Locality`, `7.6.4 Bouligand`, and `7.7 Construction of peak
  functions`, with the complementary-component statement on page 61.
  Changed scaffold record: `research/frontier-20-batch-3.coverage.json`
  now maps those headings onto the items they actually support, and moves the
  Boas §7.6.3, §7.6.4, and §7.7 support onto the three explicit bridge items
  rather than burying them inside a single later strategy.

- Boas same-document provenance restored on Wednesday, August 26, 2026
  Evidence: the exact superseded StudyLib mirror URL survives in the local
  source-scout and gate receipts as
  `https://studylib.net/doc/10482300/class-notes-math-618--complex-variables-ii-spring-2016-harold-p.-boas`.
  Changed scaffold record: `research/frontier-20-batch-3.coverage.json` now
  restores that URL in `original_url` while keeping the direct Boas PDF as the
  verified reader-facing source.

- Independent audit residual on Wednesday, August 26, 2026
  Evidence: the final GPT-5.6 Sol audit still flags one mathematical blocker:
  the Bouligand weak-to-strict peak upgrade is now explicit in the scaffold,
  but the current verified source stack still treats it as an imported theorem
  rather than a locally decomposed proof. Structural validators stay green, but
  that source-level dependency remains an honest limit on batch readiness.
  Changed scaffold record: none beyond the explicit bridge items already added;
  this bullet records the remaining blocker rather than hiding it.

- Validator rerun on Wednesday, August 26, 2026
  `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 43 harvested result(s), 0 error(s), 0 warning(s)`
  `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-{1..10}.pages.json`
  -> `content-policy: 522 scoped item(s), 0 error(s), 0 warning(s)`
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK` with the same batch-local redundant-prerequisite warnings already noted for
  `subharmonic-functions-and-the-dirichlet-problem`: the direct
  `the-topology-of-euclidean-space` prerequisite is still redundant via
  `harmonic-functions-and-the-poisson-integral` and via
  `the-lebesgue-integral-and-the-convergence-theorems`. I left the plan-level
  prerequisite list unchanged because the dispatch authorizes scaffold repair,
  not plan-structure edits.

## Scaffold-fix round

- `B3-1` — `pushback in the manifest; applied in coverage and notes`
  Evidence: on Wednesday, August 26, 2026, I re-read the live design and the
  fetch-verified late-branch sources. `research/plan-complex-analysis-track.md`
  still says, for CA-14, “The proof says boundary component, not complementary
  component.” The direct Boas PDF now harvested in
  `research/frontier-20-batch-3.coverage.json` reads, in Chapter 2's opening
  discussion (PDF p. 3 / printed p. 3), that a planar region is simply
  connected when its extended-plane complement is connected, and in Chapter 7
  §7.7 (PDF p. 61 / printed p. 61) that a boundary point is regular when the
  connected component of the complement containing it contains another point.
  Khoruzhenko Lecture 4 states Theorem 52 as the same simply-connected
  regularity endpoint. I did not find an in-scope, fetch-verified source row
  that restores the missing singleton-boundary-component bridge required to run
  the corollary through `thm-nonsingleton-boundary-component-is-regular`.
  Change: `research/frontier-20-batch-3.pages.json` now states that
  `cor-simply-connected-proper-plane-domains-are-regular` uses the current
  source-backed complementary-component route rather than an unstated
  singleton-boundary-component reduction; `research/frontier-20-batch-3.coverage.json`
  now widens the Boas locator to include the Chapter 2 simply-connected
  definition and records that harvested row against the corollary; this notes
  file now records the remaining plan-level mismatch explicitly instead of
  treating it as closed. Validator confirmation on the current bytes:
  `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
  now reports `44` harvested results with `0` errors and `0` warnings;
  `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json`
  reports `3/3` source(s) fetch-verified; the whole-run manifest-only
  `content-policy` remains `522` scoped items with `0` errors and `0`
  warnings; and `validate-plan` still passes with only the standing
  redundant-prerequisite advisories.

## Scaffold-fix round

- `B3-closure-1` — `pushback reaffirmed in manifest, coverage, and notes`
  Evidence: on Wednesday, August 26, 2026, I re-read the batch-3 row in
  `research/frontier-20-scaffold-closure.json`, the live CA-14 design block in
  `research/plan-complex-analysis-track.md`, and the current fetch-verified
  Boas/Khoruzhenko rows in `research/frontier-20-batch-3.coverage.json`. The
  closure finding still asks either for a sourced derivation of
  `cor-simply-connected-proper-plane-domains-are-regular` through
  `thm-nonsingleton-boundary-component-is-regular` or for plan-level acceptance
  of the complementary-component route now used in the manifest. The current
  fetch-verified harvest still supplies only the complementary-component bridge
  plus Khoruzhenko's Theorem 52 as an independent endpoint check; I found no
  batch-local, fetch-verified source row proving the missing no-singleton-
  boundary-component bridge, and this dispatch is not authorised to edit
  `research/plan-complex-analysis-track.md` or `research/plan-spec.json`.
  Change: `research/frontier-20-batch-3.pages.json` now says explicitly that
  the corollary keeps the complementary-component route on current bytes and
  does not treat `thm-nonsingleton-boundary-component-is-regular` as its
  load-bearing dependency; `research/frontier-20-batch-3.coverage.json` now
  sharpens the Boas locator to the exact Chapter 2 and Chapter 7 sections/pages
  supporting that route. This notes file records the finding as a scoped
  pushback rather than pretending the plan-level mismatch is closed inside the
  batch-3 artifacts.

- `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-{1,2,3,4,5,6,7,8,9,10}.pages.json`
  -> `content-policy: 522 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the standing `redundant-prereq` advisories only; the batch-local
  ones remain that `subharmonic-functions-and-the-dirichlet-problem` requires
  `the-topology-of-euclidean-space` directly even though it already reaches that
  page through `harmonic-functions-and-the-poisson-integral` and through
  `the-lebesgue-integral-and-the-convergence-theorems`.

## Scaffold-fix round

- `B3-closure-1` — `pushback reaffirmed after direct source re-read`
  Evidence: on Wednesday, August 26, 2026, I re-read the live CA-14 design at
  `research/plan-complex-analysis-track.md` lines `2105-2108`, where the page
  still says the simply-connected regularity proof should run through the
  boundary-component theorem and should not silently switch to the
  complementary-component theorem. I then re-read the current fetch-verified
  Boas PDF at `https://haroldpboas.gitlab.io/courses/618-2016a/notes2016.pdf`:
  the opening Chapter 2 discussion (PDF p. 3 / printed p. 3) states the working
  planar convention that a simply connected region has connected complement in
  `\mathbb C_\infty`, and Chapter 7 §7.6.3, §7.6.4, and §7.7 (PDF pp. 60-61 /
  printed pp. 60-61) provide the locality step, the quoted Bouligand upgrade,
  and the complementary-component peak-function construction actually used by
  the current corollary route. I also re-read the current fetch-verified
  Khoruzhenko mirror at `https://www.yumpu.com/en/document/view/12029492/potential-theory`,
  where Theorem 52 (HTML lines `3022-3024`) gives the same simply-connected
  regularity endpoint directly. I did not find a batch-local, fetch-verified
  source row supplying the missing no-singleton-boundary-component bridge
  needed to restore the design-specified derivation through
  `thm-nonsingleton-boundary-component-is-regular`, and this dispatch is not
  authorised to edit the design or the run plan.
  Change: `research/frontier-20-batch-3.pages.json` now says explicitly that
  the complementary-component route is a scoped pushback against the still-live
  CA-14 design route. `research/frontier-20-batch-3.coverage.json` already had
  the exact fetch-verified Boas and Khoruzhenko rows backing that route, so no
  further coverage edit was honest on current bytes. This notes file now adds
  the fresh closure-round record instead of pretending the plan mismatch was
  repaired inside batch `3`.

- `node tools/coverage-checklist.mjs research/frontier-20-batch-3.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`

- `node tools/source-fetch-check.mjs --coverage research/frontier-20-batch-3.coverage.json`
  -> `source-fetch-check: 3/3 source(s) fetch-verified`

- `node tools/content-policy.mjs --manifest-only research/frontier-20-batch-{1,2,3,4,5,6,7,8,9,10}.pages.json`
  -> `content-policy: 522 scoped item(s), 0 error(s), 0 warning(s)`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with the same standing `redundant-prereq` advisories only; the
  batch-local ones remain that `subharmonic-functions-and-the-dirichlet-problem`
  requires `the-topology-of-euclidean-space` directly even though it already
  reaches that page through `harmonic-functions-and-the-poisson-integral` and
  through `the-lebesgue-integral-and-the-convergence-theorems`.

## Step-5 authoring

On Wednesday, August 26, 2026, I authored the full batch-3 page material:

- A page `subharmonic-functions-and-the-dirichlet-problem` and B page
  `subharmonic-functions-and-the-dirichlet-problem-examples` in
  `library/complex-analysis/`.

- A-page content ids:
  `rem-standard-upper-semicontinuous-subharmonic-convention`,
  `def-plane-subharmonic-function`,
  `def-plane-superharmonic-function`,
  `lem-upper-semicontinuous-functions-are-borel-and-circle-integrals-are-defined`,
  `thm-harmonic-majorant-characterization-of-plane-subharmonicity`,
  `thm-c-two-characterization-of-plane-subharmonicity`,
  `thm-plane-subharmonic-functions-are-locally-integrable`,
  `thm-log-modulus-of-a-holomorphic-function-is-subharmonic`,
  `cor-modulus-powers-of-holomorphic-functions-are-subharmonic`,
  `lem-positive-linear-combinations-and-finite-maxima-preserve-subharmonicity`,
  `thm-decreasing-limit-theorem-for-plane-subharmonic-functions`,
  `def-upper-semicontinuous-regularization`,
  `thm-upper-envelope-theorem-for-plane-subharmonic-functions`,
  `thm-maximum-principle-for-plane-subharmonic-functions`,
  `def-poisson-modification-of-a-subharmonic-function`,
  `lem-gluing-lemma-for-plane-subharmonic-functions`,
  `thm-poisson-modification-preserves-subharmonicity-and-majorizes`,
  `def-perron-family-for-the-plane-dirichlet-problem`,
  `def-perron-envelope-for-the-plane-dirichlet-problem`,
  `lem-perron-family-is-nonempty-and-bounded`,
  `thm-perron-envelope-is-harmonic`,
  `def-barrier-and-regular-boundary-point`,
  `thm-barrier-characterization-of-regular-boundary-points`,
  `thm-perron-solves-dirichlet-on-regular-plane-domains`,
  `thm-exterior-disc-and-exterior-cone-points-are-regular`,
  `lem-local-subharmonic-peak-function-globalizes`,
  `lem-weak-local-subharmonic-peak-function-implies-regularity`,
  `lem-boundary-point-whose-complementary-component-contains-another-point-is-regular`,
  `thm-nonsingleton-boundary-component-is-regular`,
  `cor-simply-connected-proper-plane-domains-are-regular`,
  `thm-conformal-transport-of-plane-dirichlet-solutions`.

- B-page content ids:
  `ex-basic-plane-subharmonic-functions`,
  `ex-poisson-modification-of-a-radial-quadratic-on-a-disc`,
  `ex-perron-solution-on-an-annulus-with-radial-data`,
  `ex-a-square-corner-has-an-explicit-barrier`,
  `cex-the-punctured-disc-has-an-irregular-boundary-point-and-a-nonsolvable-datum`,
  `fs-every-bounded-plane-domain-has-a-dirichlet-solution`,
  `fs-the-perron-envelope-always-attains-the-boundary-data`,
  `fs-a-subharmonic-function-can-attain-an-interior-maximum`,
  `fs-the-pointwise-supremum-of-an-arbitrary-family-of-subharmonic-functions-is-subharmonic`.

- Proof-contract artifact created:
  `research/frontier-20-batch-3.proof-contracts.json`.

Provenance rationale on current bytes:

- The theorem/lemma/definition spine is tagged `literature-derived` where the
  batch coverage directly harvested the corresponding source statements.

- The two explicitly constructed companion examples
  `ex-poisson-modification-of-a-radial-quadratic-on-a-disc` and
  `ex-a-square-corner-has-an-explicit-barrier` are tagged
  `provenance.statement: ai-generated` with `generation.role: example`,
  because the authored statements are batch-local worked examples rather than
  exact harvested source propositions.

- The remaining examples and the false-statement / counterexample items are
  kept `literature-derived` or `ai-altered` according to whether the witness is
  directly sourced or a scoped reformulation of the A-page theorem spine.

Narrowed or repaired claims on current authored bytes:

- `thm-upper-envelope-theorem-for-plane-subharmonic-functions` now states the
  family is nonempty. This was required to keep the supremum claim honest under
  the page convention excluding identically `-∞`.

- After the first item-mode `content-policy` run, I corrected
  `ex-poisson-modification-of-a-radial-quadratic-on-a-disc` and
  `ex-a-square-corner-has-an-explicit-barrier` from
  `provenance.statement: ai-altered` to `ai-generated` so their
  `generation.role: example` metadata became schema-truthful.

- No planned item was dropped.

Checks run after authoring on the current bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-3 item set...`
  -> `32 checked, 0 failing — all clean`

- `node tools/proof-contract.mjs research/frontier-20-batch-3.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 32/32 item(s) checked`

- `node tools/validate-plan.mjs research/plan-spec.json`
  -> `OK`, with only the standing repository-wide `redundant-prereq`
  advisories; the batch-local CA-14 advisories remain the same redundant
  `the-topology-of-euclidean-space` edges already recorded above

- `node tools/content-policy.mjs research/frontier-20-batch-3.pages.json`
  -> `content-policy: 40 scoped item(s), 0 error(s), 0 warning(s)`

Blockers:

- No batch-local authoring blocker remains on current bytes.

# frontier-22 batch 7 notes — step 1 scaffold

Owned pair: `holomorphic-inverse-and-weierstrass-preparation` (A, order 353)
with `holomorphic-inverse-and-weierstrass-preparation-examples` (B, order 354).

Artifacts written in this dispatch:
`research/frontier-22-batch-7.pages.json`,
`research/frontier-22-batch-7.coverage.json`,
and this file. Nothing else in the repo was edited.

## Design against spec

Recorded, not adjudicated here.

- The SC-3 design block at `research/plan-complex-analysis-track.md` lines
  3336-3411 and `research/plan-spec.json` agree on the page order `353` and on
  the four batch-declared prerequisites:
  `holomorphic-functions-of-several-variables`,
  `inverse-and-implicit-function-theorems`,
  `the-argument-principle-and-rouche`,
  and `euclidean-domains-pids-and-unique-factorisation`.
- The scaffolded manifest nevertheless adds two earlier published
  `requires` edges that the design's own chosen route makes load-bearing:
  `the-field-of-fractions-and-localisation` for the fraction-field / local-ring
  vocabulary the design explicitly cites, and
  `constant-rank-submersions-and-regular-level-sets` for the real constant-rank
  normal form the design explicitly uses to build the holomorphic
  constant-rank theorem.

This is not a plan-spec adjudication. It is a manifest-only closure repair so
the batch does not silently rest on undeclared earlier pages when Step 4 splices
the scaffold.

## Scope and duplicate-control choices

- I kept the design's 27-item A-page spine. It already has the right density:
  the local inverse / implicit / constant-rank arc, the germ-ring dictionary,
  preparation and division, the Noetherian and UFD consequences, the
  no-isolated-zero theorem, and the hypersurface Riemann extension theorem.
- I retained the local Newton-recurrence lemma and the local finite-module /
  Noetherian auxiliary lemma. The design explicitly warns that the needed
  Newton identities only existed on an examples page elsewhere, and the existing
  algebra pages are outside the spec closure. Reusing them silently would have
  hidden genuine prerequisites.
- I did not re-mint the one-variable biholomorphic or holomorphic inverse items.
  Those are already published for one complex variable and this batch's scope is
  the several-variable upgrade.
- I also did not scaffold the stronger global theorem that an injective
  equidimensional holomorphic map is biholomorphic onto its image. The design
  only needs the local inverse theorem plus the exponential witness showing why
  no naive global upgrade is available here.
- Likewise, I left the regular-point and local-variety geometry around zero sets
  as source-harvested but out of scope. Those belong with the later analytic-set
  pages rather than this local preparation page.

## Source set actually read

Independent treatments harvested for this pair:

1. Jiří Lebl, *Tasty Bits of Several Complex Variables*, version 4.4.
   Read the table of contents, Section 1.6, and Chapter 6 Sections 6.1-6.4.
2. Jaap Korevaar and Jan Wiegerinck, *Several Complex Variables*.
   Read the table of contents and Sections 4.2, 4.4, 4.5, 4.7, and 5.2.
3. Keith Conrad, *Eisenstein Criterion and Gauss' Lemma*.
   Read Section 1 Theorem 1.3 and Section 2 Theorem 2.1.
4. The Stacks Project, Section 10.120 *Factorization*.
   Read Definition 10.120.1 through Lemma 10.120.10.

Source replacement recorded:

- The design names Freitag Chapter I sections 1-4 as the second SCV treatment.
  On Friday, August 28, 2026 I could verify the metadata route for that source
  but not recover a live full-text copy from the available ResearchGate /
  Springer entry points. The coverage ledger therefore re-sources that slot to
  the open Korevaar-Wiegerinck notes and preserves the design-named Freitag URL
  in `original_url` provenance.

This satisfies the standing requirement of two independent primary treatments
with harvestable tables of contents, plus two narrower algebra sources for the
Gauss/atomicity auxiliaries the design says must be proved locally.

## Route and trap compliance

- The determinant identity
  `det_R = |det_C|^2` is explicit as its own lemma. Nothing assumes the real
  inverse theorem already understands complex Jacobians.
- The preparation proof follows the design's chosen route: zero-count stability
  on slices, residue / logarithmic-derivative power sums, and a local Newton
  recurrences lemma before the coefficients are assembled.
- The page never states or hints at the Jacobian conjecture. The B page keeps
  the explicit exponential counterexample so the locality of the inverse theorem
  is visible.
- The UFD route is not the integer-only Gauss material already in the library.
  The scaffold includes a general UFD Gauss lemma, the prepared-factorization
  transfer lemma, and the Noetherian-domain atomicity lemma because the design
  requires them.
- The extension theorem is the general hypersurface-zero-set version, not only
  the coordinate-hyperplane case deliberately left earlier in the track.
- No A-page split is needed. The A page has 27 items, comfortably below the
  hard 60-item ceiling.
- There are no forward references and no B-page dependencies.

## Item census

- A page `holomorphic-inverse-and-weierstrass-preparation`: 27 items.
- B page `holomorphic-inverse-and-weierstrass-preparation-examples`: 11 items.

## Known limits and open risks

- The manifest-only extra `requires` edges need the usual Step-4 splice
  adjudication because `research/plan-spec.json` itself was not edited here.
- The Freitag replacement is honest and source-backed, but if the owner wants
  the design's exact second text rather than a replacement treatment, a later
  source-scout should keep hunting for a live full-text copy or archive snapshot
  of the Freitag chapter itself.
- The B page keeps the two related false statements about global injectivity and
  the global inverse theorem separately because the design listed both. They
  share the same counterexample, but they are mathematically distinct claims.

## Validation checklist

Commands to run after writing the scaffold:

```bash
node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-7.coverage.json
node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json
node tools/validate-plan.mjs research/plan-spec.json
node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json --stamp
node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json
node tools/url-sweep.mjs --coverage research/frontier-22-batch-7.coverage.json --out /tmp/frontier-22-batch-7-url-liveness.json --recover --fail-on-dead
```

I also plan one temporary spliced sanity check in `/tmp` so the batch manifest
can be validated as though Step 4 had already injected it into `plan-spec.json`.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-7.coverage.json`
  passed: `1` page, `40` harvested results, `0` errors, `0` warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json`
  passed: `362` scoped items, `0` errors, `0` warnings.
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, August 28, 2026. As usual for the current repo, it
  emitted a long existing `redundant-prereq` advisory stream outside this batch,
  but there was no SC-3-specific cycle, forward-reference, B-leaf, or unresolved
  id failure.
- Temporary spliced sanity check:
  `node tools/validate-plan.mjs ../../../../tmp/frontier-22-batch-7-spliced-plan.json`
  also exited `0`, so the batch manifest itself is syntactically and
  dependency-order clean when injected into the plan.
- Temporary spliced dependency-source check:
  `node tools/depsource.mjs ../../../../tmp/frontier-22-batch-7-spliced-plan.json --page holomorphic-inverse-and-weierstrass-preparation`
  reported `39` published external dependencies, `0` planned-later,
  `0` draft-page, `0` homeless, and `0` unresolved.

Source-side blockers:

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json --stamp`
  failed `0/4` with the same DNS resolver error on every source:
  `EAI_AGAIN`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json`
  then failed, correctly, because no `fetch_verified` stamps exist after that
  resolver failure: `0/4` fetch-verified, `4` failed.
- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-7.coverage.json --out /tmp/frontier-22-batch-7-url-liveness.json --recover --fail-on-dead`
  failed `0/4` live on Friday, August 28, 2026, again at DNS resolution:
  `curl: (6) Could not resolve host`.
  The receipt was still written to
  `/tmp/frontier-22-batch-7-url-liveness.json`.

What was still verified despite the shell-network blocker:

- On Friday, August 28, 2026 I opened and read all four cited sources through
  the web-research channel at the exact locators recorded in
  `research/frontier-22-batch-7.coverage.json`.
- No `fetch_verified` object was fabricated.

## Reharvest 1 — Friday, August 28, 2026

- `research/frontier-22-reharvest-plan.json` currently contains no `work[]`
  row for `research/frontier-22-batch-7.coverage.json`. Accordingly, this pass
  found no batch-7 authored result that `source-backing` currently treats as
  orphaned.
- I rechecked the superseded Freitag provenance named in this batch's
  `original_url`. The ResearchGate landing page for
  `https://www.researchgate.net/publication/251097344_Analytische_Funktionen_mehrerer_Variabler`
  still exposes only metadata/abstract and explicitly says "No full-text
  available"; the Springer book and chapter pages for DOI
  `10.1007/978-3-540-87899-5_5` and the 2014 edition metadata likewise expose
  only table-of-contents / purchase-preview metadata, not readable chapter
  text. I also searched exact-title / DOI / archive routes and did not recover
  a usable same-document full text or complete archive copy. The different
  Korevaar-Wiegerinck treatment therefore remains justified for now.
- While rechecking that replacement, I verified an official University of
  Amsterdam course page for the same lecture-note treatment:
  `https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/`, with a direct PDF at
  `https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf`. I read
  the contents and the same relevant sections there. I did not rewrite the
  coverage row to this URL in this pass, because batch 7 has no orphaned result
  row to repair and the existing Yumpu-backed entry already carries a
  `fetch_verified` receipt that I could not reproduce for the new host from
  this shell.
- Affected result set in this reharvest pass: none newly changed. The batch
  still has `12` authored results, and `source-backing` reports every one still
  backed by an openable source.
- Changed claim constraints: none.

### Reharvest validation results

- `node tools/source-backing.mjs --coverage research/frontier-22-batch-7.coverage.json --liveness research/frontier-22-url-liveness.json`
  -> `source-backing: 12 authored result(s) across 1 file(s), every one still backed by an openable source`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json --stamp`
  -> `source-fetch-check: 3/4 source(s) fetch-verified (0 newly stamped), 1 FAILED`.
  The remaining failure is
  `https://www.jirka.org/scv/scv.pdf` with shell-side DNS `EAI_AGAIN`.
- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-7.coverage.json --out /tmp/frontier-22-batch-7-url-liveness.reharvest-1-b7.json --recover --fail-on-dead`
  -> `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-22-batch-7-url-liveness.reharvest-1-b7.json`.
  Every failure in this runner was DNS resolution (`curl: (6) Could not resolve
  host`), so this receipt is not evidence of a batch-local source death.

## Step-5 authoring

Authoring date: Friday, August 28, 2026.

Artifacts written in this pass:

- `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation.md`
- `library/complex-analysis/holomorphic-inverse-and-weierstrass-preparation-examples.md`
- `research/frontier-22-batch-7.proof-contracts.json`
- all 38 scoped item files under `items/` for this pair

Authored ids:

- A page: `def-biholomorphic-map-several-complex-variables`, `lem-real-jacobian-determinant-of-a-complex-linear-map`, `thm-holomorphic-inverse-function-theorem-several-variables`, `thm-holomorphic-implicit-function-theorem`, `thm-holomorphic-constant-rank-theorem`, `def-holomorphic-germ-ring-and-its-maximal-ideal`, `prop-units-in-the-holomorphic-germ-ring`, `def-regular-holomorphic-germ`, `def-weierstrass-polynomial`, `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular`, `lem-stability-of-slice-zero-count-under-holomorphic-parameters`, `lem-holomorphic-power-sums-of-slice-zeros`, `lem-newton-identities-for-slice-roots`, `thm-weierstrass-preparation-theorem`, `thm-uniqueness-in-weierstrass-preparation`, `thm-weierstrass-division-theorem`, `def-noetherian-ring-and-module`, `lem-finite-modules-over-noetherian-rings-are-noetherian`, `lem-weierstrass-quotient-is-a-finite-module`, `thm-holomorphic-germ-ring-is-noetherian`, `lem-noetherian-domains-are-atomic`, `lem-gauss-lemma-over-a-ufd`, `lem-prepared-factorizations-and-irreducibility`, `thm-holomorphic-germ-ring-is-a-ufd`, `thm-zero-set-has-no-isolated-points-in-several-complex-variables`, `thm-riemann-extension-across-hypersurface-zero-sets`, `cor-locally-bounded-meromorphic-poles-are-removable`
- B page: `ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared`, `cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin`, `ex-a-shear-makes-z-one-z-two-regular-in-z-two`, `ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one`, `ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one`, `cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective`, `fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity`, `fs-the-holomorphic-inverse-function-theorem-is-global`, `fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change`, `fs-weierstrass-preparation-is-unique-without-the-unit-condition`, `fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero`

Provenance rationale actually used:

- The page-level structural definitions, lemmas, propositions, theorems, and corollary were tagged `literature-derived` on the statement side except for the combined local bridge `def-noetherian-ring-and-module`, which I tagged `ai-altered` because it packages earlier commutative-algebra vocabulary into the SC-3 local form rather than copying a single source definition verbatim.
- Those A-page proofs were written locally in the library's phase format and tagged `ai-altered` except where no proof applies.
- The B-page examples, counterexamples, and false statements were tagged `ai-altered` on the statement side. Their witness choices are source-backed and standard for this seam, but the exact local presentation and proof text were synthesized here for the batch companion page.

Scope, narrowing, and corrections:

- No planned item was dropped and no page split was introduced.
- I corrected one scaffolded worked-example claim during authoring: `ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one` now records the actual unique division
  `z_1 = 0\cdot(z_2^2-z_1) + z_1`.
  The earlier scaffold note suggesting quotient `-1` and remainder `z_2^2` was not mathematically admissible because that remainder has `z_2`-degree `2`, not `< 2`.
- I added only item-level dependencies needed by the proofs actually written; I did not alter `plan-spec.json`, the batch manifest item census, or any other batch.

Checks run on current bytes:

- `node tools/tsx-run.mjs tools/precheck.mts ...batch-7 scoped items...`
  -> pass; `33 checked, 0 failing — all clean`.
- `node tools/content-policy.mjs research/frontier-22-batch-7.pages.json`
  -> `content-policy: 38 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; ended `OK — declared page order is acyclic and consistent...` and printed only the standing repository-wide `redundant-prereq` advisory stream, including the already-known direct-edge redundancies on `holomorphic-inverse-and-weierstrass-preparation`.

Additional focused checks run before handoff:

- `node tools/proof-contract.mjs research/frontier-22-batch-7.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 33/33 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-7.proof-contracts.json`
  -> `119 citation(s) over 33 authored item(s)`; no missing quote and no widening candidate.
- `node tools/boundary-audit.mjs research/frontier-22-batch-7.proof-contracts.json`
  -> advisory only: `264` boundary rows, `226` `not_applicable`, `0` contradicted disposition after the repair pass; it still reports template-reuse clusters in the remaining non-applicable rows, so those rows are mechanically acceptable but not yet stylistically diverse.

Blockers remaining on current bytes:

- No batch-7 authoring blocker remains in the item text, page text, or strict proof-contract artifact.
- The shell-side source-fetch and URL-liveness DNS blocker recorded above is unchanged and remains outside this Step-5 authoring pass.

## Reharvest 2 — Friday, August 28, 2026

- `research/frontier-22-reharvest-plan.json` still contains no `work[]` row
  for `research/frontier-22-batch-7.coverage.json`, so this dispatch again had
  no batch-7 authored result that `source-backing` currently treats as
  orphaned.
- I re-verified the four recorded source URLs through the web-research channel
  at the batch's existing locators: Lebl's version 4.4 PDF at
  `https://www.jirka.org/scv/scv.pdf`; Korevaar-Wiegerinck at the existing
  Yumpu viewer URL, with the same lecture-note treatment also confirmed on the
  official University of Amsterdam course page
  `https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/` and its direct PDF
  `https://staff.fnwi.uva.nl/j.j.o.o.wiegerinck/edu/scv/scvboek.pdf`; Conrad's
  `gausslemma.pdf`; and Stacks tag `034O`.
- I also rechecked the superseded Freitag provenance. The ResearchGate record
  for
  `https://www.researchgate.net/publication/251097344_Analytische_Funktionen_mehrerer_Variabler`
  still says "No full-text available", and the Springer book/chapter routes for
  DOI `10.1007/978-3-540-87899-5_5` still expose only metadata / table of
  contents / purchase-preview pages rather than readable chapter text. I again
  searched exact-title, DOI, and archive routes and did not recover a usable
  same-document full text or complete archive copy, so the existing
  Korevaar-Wiegerinck replacement remains justified.
- I checked for a same-document Lebl mirror because shell fetch-stamping still
  fails on `www.jirka.org`. The alternate host
  `https://jirilebl.github.io/scv/scv.pdf` serves the same version 4.4 PDF in
  web verification, but shell-side network access was still unable to fetch it
  either. I therefore left the coverage row unchanged rather than swapping one
  web-verified URL for another without a reproducible shell receipt.
- Dead source acted on in this pass: none batch-local. Replacement/search
  outcome: Freitag remained unrecoverable as full text; the Lebl GitHub Pages
  mirror was confirmed as a same-document alternative but was not adopted
  because no orphaned result existed and shell fetch verification still failed.
- Affected result set in this reharvest pass: none newly changed. The batch
  still has `12` authored results, and `source-backing` again reports every one
  still backed by an openable source.
- Changed claim constraints: none.

### Reharvest 2 validation results

- `node tools/source-backing.mjs --coverage research/frontier-22-batch-7.coverage.json --liveness research/frontier-22-url-liveness.json`
  -> `source-backing: 12 authored result(s) across 1 file(s), every one still backed by an openable source`.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json --stamp`
  -> `source-fetch-check: 3/4 source(s) fetch-verified (0 newly stamped), 1 FAILED`.
  The remaining failure is
  `https://www.jirka.org/scv/scv.pdf` with shell-side DNS `EAI_AGAIN`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-7.coverage.json`
  -> `source-fetch-check: 3/4 source(s) fetch-verified, 1 FAILED`.
  The unstamped source is again
  `https://www.jirka.org/scv/scv.pdf`.
- `node tools/url-sweep.mjs --coverage research/frontier-22-batch-7.coverage.json --out /tmp/frontier-22-batch-7-url-liveness.reharvest-2-b7.json --recover --fail-on-dead`
  -> `url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-22-batch-7-url-liveness.reharvest-2-b7.json`.
  Every failure in this runner was again DNS resolution (`curl: (6) Could not
  resolve host`), including Stacks, Stanford, Jirka, and Yumpu, so this
  receipt is not evidence of a batch-local source death and does not justify
  re-sourcing the batch harvest.

## Controller recovery — Friday, August 28, 2026

The controller environment successfully fetched the same-document version 4.4
Lebl PDF at `https://jirilebl.github.io/scv/scv.pdf` (1,652,309 bytes, PDF
magic). The coverage record now uses that live mirror, retains the original
`www.jirka.org` URL as `original_url`, and carries a durable full-text fetch
receipt. This changes no harvested claim, locator, or disposition.

## Step-3 fix pass

- Shared group-`d` review finding `B6-1` is out of batch for this dispatch, so
  it required no batch-7 scaffold edit. Evidence: the only finding row in
  `research/frontier-22-alpha-d-step3-scaffold-review.md` is
  `B6-1 | normal-families-and-montels-theorem | high | repaired in manifest`,
  and there is no `B7-*` row. Changed scaffold record: none in
  `research/frontier-22-batch-7.pages.json` or
  `research/frontier-22-batch-7.coverage.json`.
- Batch-7 disposition: no-op after recheck. Evidence: the same review marks
  `holomorphic-inverse-and-weierstrass-preparation` **sufficient** and states
  that the live batch-7 manifest already carries the extra earlier published
  prerequisites `the-field-of-fractions-and-localisation` and
  `constant-rank-submersions-and-regular-level-sets`, so the SC-3 scaffold
  already closes on current bytes. Changed scaffold record:
  `research/frontier-22-batch-7.notes.md` only.
- Validation evidence on Friday, August 28, 2026:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-7.coverage.json`
  -> `coverage-checklist: 1 page(s), 40 harvested result(s), 0 error(s), 0 warning(s)`.
  `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json`
  -> `content-policy: 425 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`
  -> exit `0`; the usual repo-wide `redundant-prereq` advisory stream still
  includes the existing SC-3 advisories for direct `inverse-and-implicit-function-theorems`
  and `euclidean-domains-pids-and-unique-factorisation`, but the check ends with
  `OK — declared page order is acyclic and consistent; no item-level cycles, forward`
  and the standard `NOTE: 741 planned page(s) carry no item list yet`.

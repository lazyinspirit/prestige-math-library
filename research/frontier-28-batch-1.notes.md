# frontier-28 batch 1 notes — scaffold

Owned pairs:
`small-cancellation-and-dehn-algorithms` (A, order `71.015`) with
`small-cancellation-and-dehn-algorithms-examples` (B, order `71.016`).
`inverse-systems-profinite-groups-and-completion` (A, order `302.013`) with
`inverse-systems-profinite-groups-and-completion-examples` (B, order
`302.014`).

Artifacts owned by this batch:
`research/frontier-28-batch-1.pages.json`,
`research/frontier-28-batch-1.coverage.json`,
and this file.

Session date: Tuesday, September 1, 2026.

## Design against spec

Recorded here, not adjudicated here.

- `small-cancellation-and-dehn-algorithms`:
  the GT-8 design at `research/plan-group-theory-track.md:1226-1319` states
  direct prerequisites `decision-problems-for-finitely-presented-groups` and
  `hnn-extensions-and-brittons-lemma`, while the live
  `research/plan-spec.json` row and generated batch manifest use only
  `decision-problems-for-finitely-presented-groups-examples`. I followed the
  spec exactly and kept the design/spec mismatch explicit here for drift to own.
- `inverse-systems-profinite-groups-and-completion`:
  the GT-16 design at `research/plan-group-theory-track.md:2083-2198` states
  direct prerequisites `uniform-spaces` and
  `normal-subgroups-and-quotient-groups`, while the live
  `research/plan-spec.json` row and generated batch manifest use only
  `graphs-of-groups-and-bass-serre-theory-examples`. I followed the spec
  exactly and left the conflict recorded here.

## Controlling design locations

- `small-cancellation-and-dehn-algorithms`:
  the two matched design locations at lines `1226` and `1293` are not rival
  designs but one continuous GT-8 section. I treated the combined section as
  controlling, with the earlier block governing the A-page dependency order and
  the later block governing the B-page roster, source list, and trap notes.
- `inverse-systems-profinite-groups-and-completion`:
  the two matched locations at lines `2083` and `2171` are likewise the single
  GT-16 section split by the B-page subheading. I treated the later portion as
  the more specific source-and-examples continuation of the earlier A-page item
  list, not as a conflicting amendment.

## Current scaffold shape

- A page `small-cancellation-and-dehn-algorithms`: **26 items**.
- B page `small-cancellation-and-dehn-algorithms-examples`: **7 items**.
- A page `inverse-systems-profinite-groups-and-completion`: **33 items**.
- B page `inverse-systems-profinite-groups-and-completion-examples`:
  **7 items**.

Both A pages stay below the 60-item split ceiling, so no split is owed.

## Non-duplication decisions

- I did not re-mint the already-published free-group cyclic-reduction item.
  GT-8 uses the published `def-cyclically-reduced-word` directly, and the
  coverage file records that explicitly as an already-published canonical row.
- I did not create a second home theorem for hyperbolic groups admitting Dehn
  presentations. GT-8 keeps the classical C prime(1/6) route local and leaves
  the hyperbolic agreement theorem to the existing published
  `thm-hyperbolic-groups-admit-finite-dehn-presentations`.
- I did not re-mint `def-topological-group`,
  `thm-marshall-hall-free-factor-theorem`,
  `cor-each-factor-is-a-retract-of-a-free-product`, or the Nielsen-Schreier
  basis theorem. GT-16 uses those published earlier results rather than
  duplicating them.
- The GT-16 remark
  `rem-malcev-finitely-generated-linear-groups-are-residually-finite`
  is scaffolded only as a remark carrier. At authoring time it must become the
  design's `proved_here: false` non-load-bearing remark with the required
  `external_dependency` record; current scaffolds do not encode that item-file
  frontmatter contract directly.

## Scope and proof-route choices

- GT-8 follows the design's strict C prime(1/6) path from symmetrisation and
  pieces through reduced diagrams, curvature counting, Greendlinger's lemma,
  Dehn's algorithm, the linear isoperimetric corollary, and the torsion
  theorem. I did not add the parallel C(4)-T(4) route from Lyndon-Schupp
  Theorem 4.6.
- GT-8 also avoids the forward hyperbolicity branch exactly as the design
  requires. The Löh local-geodesic continuation is recorded in coverage as
  deferred to `hyperbolic-spaces-and-hyperbolic-groups`, where the live plan
  actually homes the small-cancellation-to-hyperbolicity bridge, not silently
  pulled in here.
- GT-16 keeps the algebraic inverse-limit construction before topology, exactly
  as the design requires, and separates nonemptiness from the choice-sensitive
  surjectivity issue.
- GT-16 proves subgroup separability of finitely generated free groups from the
  already-published Marshall Hall free-factor theorem plus a local residual
  finiteness theorem for free groups. I did not add a stronger Hall-style
  theorem to this page, because GT-5 explicitly deferred the separability
  consequence here and already owns the free-factor statement itself.

## Source set actually read

The coverage ledger records these source documents read through the web-research
channel on Tuesday, September 1, 2026:

1. GAP SmallCancellation manual, Chapter 1,
   `https://mate.dm.uba.ar/~isadofschi/smallcancellation/chap1_mj.html`
2. Jay Williams, *Universal Countable Borel Quasi-Orders*,
   `https://arxiv.org/pdf/1306.1270`
3. Nicholas Touikan,
   `https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-18.html`
4. Clara Löh,
   `https://loeh.app.uni-regensburg.de/ggt_book/ggt_book_draft.pdf`
5. Brian Osserman,
   `https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf`
6. H. W. Lenstra,
   `https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf`
7. Rita Gitik and Eliyahu Rips,
   `https://arxiv.org/pdf/1906.07275`
8. Matthew Stover,
   `https://arxiv.org/pdf/2407.07680`

Source substitutions and omissions kept explicit:

- I used the GAP classical-conditions chapter, Williams, Touikan, and Löh for
  GT-8. Together they cover symmetrization, pieces, the C and T conditions,
  Greendlinger's theorem, the Dehn algorithm, and the torsion theorem without
  changing the page boundary. The original Lyndon-Schupp Scribd mirror is
  retained as `original_url` provenance after it began returning an access wall.
- I could not obtain a stable web read of the Cambridge-hosted Wilkes PDF from
  this runner, so GT-16 uses accessible full-note treatments by Osserman and
  Lenstra for the inverse-limit and completion chain, together with the
  Gitik-Rips arXiv note for the Hall/LERF endpoint and the arXiv PDF of
  Stover's survey for the non-load-bearing Malcev remark.
- I did not claim to have re-read Hall's 1949 article directly in this batch.
  The new GT-16 scaffold uses the already-published
  `thm-marshall-hall-free-factor-theorem` from GT-5 as a load-bearing earlier
  result, and the new page's genuinely new theorem is the profinite-topological
  separability consequence.

## Exact-id and dependency audit

- The final manifest contains **73** proposed batch-local ids.
- All proposed ids were checked against the current `items/` corpus and the
  live `research/plan-spec.json` before finalizing the scaffold.
- The one intentional non-minting decision that matters mechanically is
  `def-cyclically-reduced-word`: it remains an already-published dependency and
  is not duplicated in this batch manifest.

## Validator repair applied during this pass

- The first temporary-splice `validate-plan` run caught one real batch-local
  defect: `ex-a-non-residually-finite-baumslag-solitar-group` had been given an
  illegal dependency on the published B-page example
  `ex-baumslag-solitar-groups-as-hnn-extensions`.
- I repaired that item to depend on the A-safe pair
  `cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite` and
  `def-group-presentation` instead.
- After regenerating the temporary splice, `validate-plan` passed cleanly on
  the batch-local bytes.

## Validation

- `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-1.coverage.json`
  passed on Tuesday, September 1, 2026:
  `2` page(s), `53` harvested result(s), `0` error(s), `0` warning(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  passed on Tuesday, September 1, 2026:
  `424` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-1.pages.json`
  passed on Tuesday, September 1, 2026:
  `73` scoped item(s), `0` error(s), `0` warning(s).
- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Tuesday, September 1, 2026. Its terminal output ended with the
  standard `OK` line and only the repository's standing out-of-batch
  `redundant-prereq` advisories.
- `node tools/validate-plan.mjs /tmp/frontier-28-batch-1.spliced-plan.json`
  exited `0` on Tuesday, September 1, 2026 after the Baumslag-Solitar example
  dependency repair. Its terminal output ended with:
  `OK — declared page order is acyclic and consistent; no item-level cycles,
  forward references, B-page dependencies, or unresolved ids among the 626
  page(s) with item lists.`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-1.coverage.json --stamp`
  failed on Tuesday, September 1, 2026:
  `0/7` source(s) fetch-verified, `7` failed, every failure `EAI_AGAIN`.
- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-1.coverage.json --out /tmp/frontier-28-batch-1-url-liveness.json --recover --fail-on-dead --timeout-ms 4000`
  failed on Tuesday, September 1, 2026:
  `0/7` live, `7` failed, `0` recoverable from the archive, `0` suspect.
  The written artifact is `/tmp/frontier-28-batch-1-url-liveness.json`, and
  every row records `curl: (6) Could not resolve host`.
- `git diff --check -- research/frontier-28-batch-1.pages.json research/frontier-28-batch-1.coverage.json research/frontier-28-batch-1.notes.md`
  passed on Tuesday, September 1, 2026 with no whitespace or conflict-marker
  issues.

The live blocker is therefore runner-local DNS, not a known structural defect
in the three owned batch artifacts. I did read the cited source contents through
the web-research channel, but I did not fabricate `fetch_verified` stamps or a
false liveness receipt when the shell could not resolve any external host.

## Reharvest — Monday, August 31, 2026

- Dead source:
  `https://londmathsoc.onlinelibrary.wiley.com/doi/abs/10.1112/blms/25.1.37`
  for `thm-finitely-generated-free-groups-are-subgroup-separable`. I confirmed
  before re-sourcing that the same-document `doi/pdf` route still redirected to
  the abstract page in the web reader, and the existing
  `research/frontier-28-url-liveness.json` row for that URL still records
  `403` with `recovered: null`. I then searched by exact title and DOI for a
  live or archived full-text copy and found no usable same-document route, so I
  replaced the coverage row with the live arXiv PDF
  `https://arxiv.org/pdf/1906.07275` (Gitik-Rips, Section 1 `Introduction`,
  PDF p. 1 lines 26-34 and p. 2 lines 38-42), which explicitly states Hall's
  theorem and the stronger Ribes-Zalesskii product theorem. The stronger
  product-closure row stayed deferred to `owner-decision`. No scaffolded claim
  was widened or weakened.
- Dead source:
  `https://www.researchgate.net/publication/382145844_Residual_finiteness_and_discrete_subgroups_of_Lie_groups`
  for `rem-malcev-finitely-generated-linear-groups-are-residually-finite`.
  Here the same document was recoverable: the dead ResearchGate landing page is
  the arXiv preprint `2407.07680`, and the live PDF
  `https://arxiv.org/pdf/2407.07680` carries Theorem 1.2 on PDF p. 2 lines
  30-34 and Theorem 1.8 on PDF p. 3 lines 101-109. I swapped only the
  reader-facing URL and preserved the dead ResearchGate URL as provenance in
  coverage. The scaffolded remark did not change; only the adjacent out-of-scope
  harvest row changed from the dead-page scrape's Selberg-lemma note to the
  arXiv v2 PDF's Theorem 1.8.

- Reharvest validator reruns on the repaired batch bytes:
  `node tools/coverage-checklist.mjs --require-destination research/frontier-28-batch-1.coverage.json`
  passed after the source replacement:
  `coverage-checklist: 2 page(s), 53 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-1.coverage.json --out /tmp/frontier-28-batch-1-url-liveness-reharvest.json --recover --fail-on-dead --timeout-ms 4000`
  failed from this runner with:
  `url-sweep: 0/7 live; 7 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-28-batch-1-url-liveness-reharvest.json`.
  Every row failed as `curl: (6) Could not resolve host`.
- `node tools/source-backing.mjs --coverage research/frontier-28-batch-1.coverage.json --liveness /tmp/frontier-28-batch-1-url-liveness-reharvest.json`
  therefore failed with:
  `source-backing: 24 authored result(s) have no openable source left`.
  That failure is generated by the runner-local DNS outage in the fresh
  liveness artifact rather than by a new batch-local source omission.
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-1.coverage.json --stamp`
  failed only on the three unstamped external sources and otherwise kept the
  prior four stamps:
  `source-fetch-check: 4/7 source(s) fetch-verified (0 newly stamped), 3 FAILED`.
  The three failures were all `EAI_AGAIN`, so no new `fetch_verified` stamps
  were fabricated.

## Source scout — Tuesday, September 1, 2026

- Current targeted scout run:
  `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-1.coverage.json --stamp`
  now fails only on
  `https://www.scribd.com/document/384118619/CombinatorialGroupTheory`
  for `small-cancellation-and-dehn-algorithms` with `EAI_AGAIN`, leaving the
  batch at `6/7` fetch-verified sources and the Lyndon-Schupp row as the sole
  unstamped source.
- Same-document URL probes from this runner checked the nearby Scribd variants
  `https://scribd.com/document/384118619/CombinatorialGroupTheory`,
  `https://www.scribd.com/document/384118619`,
  `https://scribd.com/document/384118619`, and the embed routes
  `https://www.scribd.com/embeds/384118619/content` and
  `https://scribd.com/embeds/384118619/content`. Every DNS lookup and fetch
  attempt failed as `EAI_AGAIN`, so this pass did not produce a better
  same-document live URL.
- Historical liveness evidence still matters here:
  `research/frontier-28-url-liveness.json` records the exact Scribd URL as
  `status: 200`, `ok: true`, with `final_url` unchanged. I therefore did not
  treat the Scribd citation as newly dead on the strength of this runner's DNS
  failure alone.
- Title-and-DOI search by exact book identity found the Springer landing page
  `https://link.springer.com/book/10.1007/978-3-642-61896-3` and the SciSpace
  metadata page `https://scispace.com/papers/combinatorial-group-theory-4rzjokzljw`.
  The Springer route is only a subscription preview, not full text, and this
  pass did not expose a stable fetchable document URL behind the SciSpace
  metadata page. Neither candidate qualifies as a replacement source row.
- Control re-fetching with
  `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-1.coverage.json --stamp --force`
  failed on all seven external sources, including previously stamped UNB,
  Regensburg, OSU, Leiden, and arXiv rows, all with `EAI_AGAIN`. That makes
  the remaining blocker runner-wide DNS, not a batch-local harvest defect.
- Replacement outcome:
  the later autonomous recovery replaced the walled Scribd row with the open
  GAP classical-conditions chapter and Williams's complete arXiv paper. The
  GAP source backs the definitions of symmetrization, pieces, C(p), C'(lambda),
  and T(q); Williams Definition 5.4 and Theorems 5.5-5.6 back the symmetrized
  convention, Greendlinger conclusion, torsion theorem, and torsion-free
  corollary. Touikan Definition 3.5.9 supplies the strictly shortening Dehn
  replacement. The canonical fetcher stamped both replacement sources, taking
  the batch to `8/8` fetch-verified sources.

## Step-3 fix pass

On Tuesday, September 1, 2026 I re-read the controlling GT-8 and GT-16 design
sections in `research/plan-group-theory-track.md`, the live
`research/plan-spec.json` entries for both owned A pages, the current batch-1
`pages` and `coverage` files, and the current batch-1 rows in
`research/frontier-28-alpha-b-scope-decisions.json`. I also re-opened each of
the eight current recorded source `url` values in
`research/frontier-28-batch-1.coverage.json` through the web-research channel
to confirm that the live reader-facing URLs recorded here are still the ones
intended by the current harvest.

- Finding `197015618faf02f31af92454f03ea976eb6eca158146af1c5f5af57c39bc3ec4` —
  disposition: `accepted`; the alpha finding stands.
  Evidence: the live GT-8 design still keeps the hyperbolicity bridge off this
  page and homes it later on
  `hyperbolic-spaces-and-hyperbolic-groups`
  (`research/plan-group-theory-track.md:1661-1730`), while the current Löh row
  in `research/frontier-28-batch-1.coverage.json` already defers the
  local-geodesic continuation to that exact page.
  Changed scaffold record: no new `pages.json` or `coverage.json` edit was
  needed in this pass because the corrected destination was already present on
  current disk; this notes section records the accepted repair.
- Finding `2c9de93b0f00e9ab0ea871651c9a4a582ee03bde652af93a70a7a69cd7852dbe` —
  disposition: `accepted`; the alpha finding stands.
  Evidence: GT-8 still ends at the torsion theorem and torsion-free corollary
  (`research/plan-group-theory-track.md:1226-1284`), and batch 1 still has no
  retained infinitude item or downstream dependency that would force Touikan
  `Theorem 3.5.12` into scope.
  Changed scaffold record: none; the existing out-of-scope row for Touikan
  `Theorem 3.5.12` remains the honest boundary record in
  `research/frontier-28-batch-1.coverage.json`.
- Finding `c50ed693e868b6a9166853dd39ded81eed1da62e8c078877c03c3385f3d688ce` —
  disposition: `accepted`; the alpha finding stands.
  Evidence: GT-16 still runs from inverse limits through completion and
  subgroup separability with no complements, Schur-Zassenhaus, or Frattini item
  on this page (`research/plan-group-theory-track.md:2083-2153`), so Lenstra
  Section 3 remains outside the retained route.
  Changed scaffold record: none; the existing out-of-scope Lenstra Section 3
  row remains correct in `research/frontier-28-batch-1.coverage.json`.
- Finding `4273fdf3d8827b8f3a698ac7d871bc30b797173e778d8a8f3dbba852214559cf` —
  disposition: `accepted`; the alpha finding stands.
  Evidence: GT-16 still retains only the non-load-bearing Malcev remark and
  does not build any lattice-level residual-finiteness application
  (`research/plan-group-theory-track.md:2140-2153`), so Stover `Theorem 1.8`
  remains outside the page boundary.
  Changed scaffold record: none; the existing out-of-scope Stover `Theorem 1.8`
  row remains correct in `research/frontier-28-batch-1.coverage.json`.
- Finding `abf3776d16f615a5c4f947382922a326eb0f5b20c98d1ad1c0484f8a71098c80` —
  disposition: `accepted`; the alpha finding remains `owner-decision`.
  Evidence: the current GT-16 scaffold still closes at subgroup separability,
  but the live `research/plan-spec.json` and
  `research/plan-group-theory-track.md` still provide no exact later page or
  item that owns the stronger Ribes-Zalesskii subgroup-product-closure theorem.
  Changed scaffold record: none; the existing deferred row with destination
  `owner-decision` remains the honest current record in
  `research/frontier-28-batch-1.coverage.json`.

Validator reruns on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-28-batch-1.coverage.json --require-destination`
  -> `coverage-checklist: 2 page(s), 48 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed with the standard terminal `OK` line and only the standing
  repository-wide `redundant-prereq` advisories.

## Step-5 authoring

Authored on Tuesday, September 1, 2026:

- Pages:
  `small-cancellation-and-dehn-algorithms`,
  `small-cancellation-and-dehn-algorithms-examples`,
  `inverse-systems-profinite-groups-and-completion`,
  `inverse-systems-profinite-groups-and-completion-examples`.
- GT-8 A-page items:
  `def-symmetrisation-of-a-relator-set`,
  `lem-symmetrisation-has-the-same-normal-closure`,
  `def-piece-in-a-symmetrised-presentation`,
  `def-small-cancellation-conditions-c-lambda-and-c-prime-lambda`,
  `def-small-cancellation-condition-t-q`,
  `lem-c-prime-lambda-implies-c-lambda`,
  `def-van-kampen-diagram-boundary-label-and-area`,
  `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`,
  `thm-van-kampen-lemma`,
  `thm-diagram-area-agrees-with-algebraic-relator-area`,
  `def-reduced-van-kampen-diagram`,
  `lem-minimal-area-diagrams-are-reduced`,
  `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`,
  `thm-greendlinger-lemma-for-c-prime-one-sixth-presentations`,
  `def-dehn-reduced-word-and-dehn-presentation`,
  `lem-dehn-replacement-strictly-shortens-a-word`,
  `thm-dehn-algorithm-solves-the-word-problem`,
  `cor-finite-c-prime-one-sixth-presentations-have-solvable-word-problem`,
  `cor-linear-isoperimetric-bound-for-finite-c-prime-one-sixth-presentations`,
  `thm-torsion-theorem-for-c-prime-one-sixth-groups`,
  `cor-c-prime-one-sixth-with-no-proper-power-relators-is-torsion-free`,
  `fs-every-repeated-subword-is-a-piece`,
  `fs-c-prime-one-sixth-means-every-relator-has-length-at-most-six`,
  `fs-greendlinger-lemma-applies-to-every-finitely-presented-group`,
  `fs-dehn-reduction-is-the-same-as-free-reduction`,
  `fs-no-proper-power-relators-alone-implies-torsion-free`.
- GT-8 B-page items:
  `ex-symmetrising-a-one-relator-presentation`,
  `ex-finding-pieces-and-checking-c-prime-one-sixth`,
  `ex-a-dehn-reduction-sequence`,
  `ex-a-greendlinger-cell-in-a-van-kampen-diagram`,
  `ex-a-torsion-free-small-cancellation-group`,
  `cex-an-overlap-at-exactly-one-sixth-under-the-strict-convention`,
  `cex-a-no-proper-power-presentation-with-torsion-outside-small-cancellation`.
- GT-16 A-page items:
  `def-directed-set-and-inverse-system-of-groups`,
  `def-compatible-tuple-inverse-limit-of-groups`,
  `lem-compatible-tuples-form-a-subgroup`,
  `def-coordinate-projections-from-an-inverse-limit`,
  `thm-concrete-inverse-limit-universal-property-in-groups`,
  `def-inverse-limit-topology-for-finite-discrete-groups`,
  `lem-inverse-limit-of-finite-discrete-groups-is-a-closed-topological-subgroup`,
  `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected`,
  `def-profinite-group-by-inverse-limit`,
  `lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis`,
  `thm-continuity-into-an-inverse-limit-is-coordinatewise`,
  `def-cofinal-subsystem`,
  `thm-cofinal-subsystems-have-isomorphic-inverse-limits`,
  `def-totally-disconnected-and-totally-separated-spaces`,
  `thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree`,
  `thm-topological-characterisation-of-profinite-groups`,
  `def-profinite-topology-on-an-abstract-group`,
  `def-finite-residual-and-residually-finite-group`,
  `def-profinite-completion-of-an-abstract-group`,
  `def-canonical-map-to-the-profinite-completion`,
  `thm-kernel-and-density-of-the-canonical-map-to-the-profinite-completion`,
  `cor-the-canonical-map-is-injective-iff-the-group-is-residually-finite`,
  `thm-universal-property-of-profinite-completion`,
  `thm-profinite-completion-is-functorial`,
  `rem-malcev-finitely-generated-linear-groups-are-residually-finite`,
  `thm-free-groups-are-residually-finite`,
  `def-subgroup-separable-and-lerf`,
  `thm-finitely-generated-free-groups-are-subgroup-separable`,
  `fs-an-inverse-limit-of-groups-may-be-empty`,
  `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf`,
  `fs-the-canonical-map-to-profinite-completion-is-always-injective`,
  `fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness`,
  `fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic`.
- GT-16 B-page items:
  `ex-an-eventually-constant-inverse-system`,
  `ex-the-profinite-completion-of-a-finite-group`,
  `ex-the-profinite-completion-of-the-integers`,
  `ex-a-residually-finite-free-group`,
  `ex-a-dense-nonclosed-copy-of-a-group-in-its-completion`,
  `ex-a-non-residually-finite-baumslag-solitar-group`,
  `cex-same-finite-quotients-do-not-trivially-identify-abstract-groups`.

Provenance rationale:

- Core GT-8 and GT-16 definitions and positive theorems were authored as
  `literature-derived` statements with local `ai-generated` proofs, because the
  batch kept the source-backed classical route from the coverage ledger and
  wrote the proofs out in page-local dependency order.
- The batch-local examples, counterexamples, and false statements were tagged
  `ai-altered` where the witness was chosen or streamlined locally while staying
  within the sourced page boundary.
- `rem-malcev-finitely-generated-linear-groups-are-residually-finite` was
  authored as the required `proved_here: false` remark with truthful
  `external_dependency` metadata and no `verification.judge` record.

Narrowed or dropped claims:

- None of the scaffolded batch-1 item ids were dropped.
- The page boundaries stayed as scaffolded: no hyperbolicity bridge item was
  pulled back onto GT-8, and no stronger subgroup-product theorem was pulled
  onto GT-16.
- Two items remained explicitly source-backed rather than locally derived from
  earlier library material: the ZF failure statement
  `fs-projections-from-every-surjective-inverse-system-are-surjective-in-zf`
  and the classical Baumslag-Solitar example
  `ex-a-non-residually-finite-baumslag-solitar-group`. Their bodies state that
  dependence truthfully.

Validator results rerun after authoring on Tuesday, September 1, 2026:

- `node tools/tsx-run.mjs tools/precheck.mts $(cat /tmp/frontier28_batch1_items.txt)`
  -> `53 checked, 0 failing — all clean`.
- `node tools/proof-contract.mjs research/frontier-28-batch-1.proof-contracts.json --strict`
  -> `proof-contract: 0 error(s), 0 warning(s), 53/53 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-28-batch-1.pages.json`
  -> `content-policy: 73 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed with the standard terminal `OK` line and only the standing
  repository-wide `redundant-prereq` advisories.
- `git diff --check -- research/frontier-28-batch-1.proof-contracts.json research/frontier-28-batch-1.notes.md library/group-theory/small-cancellation-and-dehn-algorithms.md library/group-theory/small-cancellation-and-dehn-algorithms-examples.md library/group-theory/inverse-systems-profinite-groups-and-completion.md library/group-theory/inverse-systems-profinite-groups-and-completion-examples.md items`
  -> passed with no whitespace or conflict-marker issues.

Blockers:

- No new batch-local blocker remains after Step 5 authoring.
- The earlier runner-local DNS failure recorded above was not reopened here; no
  Step-5 validator in this dispatch required fresh shell-side source fetching.

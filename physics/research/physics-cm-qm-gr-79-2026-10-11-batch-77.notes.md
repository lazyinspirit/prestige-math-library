# Batch 77 notes — `gr-gr13-convex-normal-neighborhoods` / `gr-gr13-convex-normal-neighborhoods-examples`

Run `physics-cm-qm-gr-79-2026-10-11`, role beta, label batch-77, covers 77.
Step 1 complete initial authoring only; neither a worker exit nor a readiness
record is independent mathematical approval (Step 2/3 review follows). The A
page is mixed-domain: 37 items are mathematics (`domain: mathematics`) and the
closing scope note `rem-gr-convex-normal-neighborhoods-scope` is
`domain: physics`; all four B-page items are mathematics. No item reports a
measurement, and no experiment, empirical premise or empirical uncertainty
occurs anywhere in the batch; the physics remark states the physical scope and
records the deferrals. Every other item is a conditional mathematical statement
about smooth Lorentzian four-manifolds, their geodesics, causal structure and
the auxiliary Riemannian metric.

## Scope built

- A page `gr-gr13-convex-normal-neighborhoods` (order 257, category
  `general-relativity`, `library: physics`), 38 locally authored items: 2
  definitions, 27 lemmas, 8 theorems and 1 physics remark.
- B page `gr-gr13-convex-normal-neighborhoods-examples` (order 258), 4 leaf
  items: 3 examples and 1 counterexample, each with a numbered verification or
  counterexample argument.
- Library carriers `library/general-relativity/gr-gr13-convex-normal-neighborhoods.md`
  and `…-examples.md`; the `general-relativity` `_category.md` is unchanged.
- Manifest `research/physics-cm-qm-gr-79-2026-10-11-batch-77.pages.json`:
  page order, kind, category and `library` fields are unchanged from the run
  scaffold; the edits are the item inventories, item metadata, dependency
  levels and the `requires` reconciliation recorded below. Statement, deps,
  dependency_roles, provenance, sources and level fields were regenerated from
  the final carriers with a script; after regeneration the carrier → manifest
  direction agrees for all 42 items.
- Design budget and the 100-item cap are respected (38 + 4). Inventory coverage
  (`research/plan-general-relativity-track.md` L288, reservation `GR13`,
  inventory "Convex normal neighborhoods; auxiliary completeness; limit curves
  and Lorentz length; Cauchy equivalence, volume time, smooth temporal
  splitting", closure "H0–H3"):
  - convex normal neighborhoods: `lem-gr-joint-exponential-diffeomorphism`,
    `lem-gr-coordinate-ball-geodesic-convexity`,
    `lem-gr-contained-geodesic-velocity-bound`,
    `def-gr-normal-neighborhoods-and-position-vectors`,
    `thm-gr-convex-normal-neighborhoods`,
    `lem-gr-position-vector-differential`,
    `lem-gr-normal-neighborhood-length-monotonicity`,
    `thm-gr-normal-neighborhood-causal-cone`,
    `lem-gr-null-position-vector-forces-null-velocity`,
    `lem-gr-causal-curve-initial-cone-step`, `lem-gr-convex-normal-causality`;
  - auxiliary completeness: `thm-gr-auxiliary-complete-riemannian-metric`,
    `lem-gr-maximal-flow-escape`, `lem-gr-lipschitz-family-limit-subsequence`;
  - limit curves and Lorentz length: `lem-gr-basic-limit-curve`,
    `thm-gr-limit-curve-two-endpoints`, `thm-gr-length-upper-semicontinuity`,
    `lem-gr-strong-causality-compact-length-bound`,
    `lem-gr-strong-causality-escape-sequence`,
    `lem-gr-causal-curve-conventions`, `lem-gr-chronology-openness`,
    `lem-gr-dominating-cone-bounds`;
  - Cauchy equivalence, volume time, smooth temporal splitting:
    `def-gr-future-and-past-sets`,
    `lem-gr-achronal-boundaries-lipschitz-graphs`, `lem-gr-push-up-rule`,
    `lem-gr-cauchy-set-topology-and-graph`, `lem-gr-local-cauchy-neighborhood`,
    `thm-gr-cauchy-surface-implies-globally-hyperbolic`,
    `lem-gr-globally-hyperbolic-causal-structure`,
    `lem-gr-chronological-volume-continuity`, `thm-gr-volume-time-function`,
    `lem-gr-compact-future-cone-intersections`, `lem-gr-cone-bump-functions`,
    `lem-gr-locally-finite-shell-sum`, `lem-gr-strip-weak-steps`,
    `thm-gr-smooth-cauchy-temporal-splitting`;
  - worked examples on the B page: `ex-gr-flat-cone-bump-explicit`,
    `ex-gr-null-legs-corner-push-up`, `ex-gr-flat-slab-explicit-splitting`,
    `cex-gr-flat-slab-coordinate-time-flow-incomplete`.

## Design versus plan

No conflict. The design block for `GR13` declares `requires: ["GR11"]`; the
current `research/plan-spec.json` resolves that reservation to the page
`gr-causal-and-initial-value-boundaries` (batch 75), and the dispatch names the
same page. The manifest and both library pages require
`gr-causal-and-initial-value-boundaries` plus the published mathematical
prerequisite pages of the design and the owner-permitted draft supplier
`sr-proper-time-comparisons`. The design's closure statement "H0–H3 locally
supplied; H3.1–H3.3 supplies the full smooth Cauchy temporal splitting kernel
in the owner-directed 2026-10-11 repair phase" is exactly the scope of
`thm-gr-smooth-cauchy-temporal-splitting` and its strip/bump prerequisites. No
design text is stale for this page, and no claim was narrowed or added beyond
the design inventory.

## Dependencies and levels

- `requires` on the A page lists every transitive page prerequisite (published
  mathematics pages, `gr-causal-and-initial-value-boundaries`,
  `sr-proper-time-comparisons`); the B page requires the A page. The same
  arrays are present in the manifest and in both library carrier frontmatters.
  `validate-plan.mjs research/plan-spec.json --run physics-cm-qm-gr-79-2026-10-11`
  exits 0 (advisory `redundant-prereq` notes only: a page that already reaches
  a published page through `gr-causal-and-initial-value-boundaries` also names
  it directly because the design names it).
- Dependency levels follow the engine rule (in-run dependencies only;
  published and out-of-run suppliers do not raise a level). After the final
  edits the canonical computation
  (`item-dependency-levels.mjs check --run …`) reports no
  `dependency_level` mismatch for any of the 42 items; A levels run 0–29 and B
  levels 20–29. The remaining engine errors for this run are other batches'
  empty scaffold inventories and three nrqm labels owned by other agents —
  outside this batch's scope.
- Actual proof dependencies were checked item-by-item: every `[L#]` fact names
  a supplier in `deps` or `justified_by`, every numbered step reference names
  an existing step, and no item depends on a later item, on a B-page leaf, or
  on a physical premise (the single physics remark has no mathematical
  consumers). `depcheck --items-file` (42 items) reports no hard errors; its
  seven transient `cited-not-in-deps` warnings were resolved before handoff
  (see "Repairs").
- Choice assumptions are explicit: `mathrm{AC}_\omega` is stated where
  countably many selections are made (diagonal subsequences, countable covers
  and partitions of unity, locally finite bump families) and Dependent Choice
  where the limit-curve and maximal-flow arguments use it. No item consumes a
  Recorded result to prove its replacement, and no path from Foundations
  reaches `deferred-set-theory-beyond-choice`.
- Cross-batch inputs: `research/physics-cm-qm-gr-79-2026-10-11-batch-77.cross-batch-dependencies.json`
  contains the 230 item edges from this batch's items into other batches'
  items (roles `mathematical-premise`) and the page edge
  `gr-gr13-convex-normal-neighborhoods → gr-causal-and-initial-value-boundaries`,
  each with `status: verified` and the declared-use evidence. The collector
  `frontier-dependency-ledger.mjs` finds 231 edges owned by batch 77 and
  reports 0 without a review and 0 orphaned reviews. The B→A edge within the
  pair is structural (same batch) and is recorded here rather than as a
  cross-batch review row.

## Sources and harvest

`research/physics-cm-qm-gr-79-2026-10-11-batch-77.coverage.json` records five
source records: Minguzzi, *Lorentzian causality theory*, Living Reviews in
Relativity 22 (2019), article 3 (fetch-verified, full text); Chruściel,
*Elements of causality theory*, arXiv:1110.6706 (fetch-verified, full text);
Bernal–Sánchez, arXiv:gr-qc/0308090 (fetch-verified); Bernal–Sánchez,
arXiv:gr-qc/0401112 (fetch-verified); and the dropped do Carmo record described
below. `coverage-checklist` reports 0 errors and 0 warnings over 35 harvested
dispositions; `source-fetch-check` reports 4/5 fetch-verified and 5/5 resolved
with 1 documented drop.

### do Carmo drop (history, retained)

The three convexity items originally cited M. P. do Carmo, *Riemannian
Geometry*, Birkhäuser (1992), at the author-mirror URL
`https://www.maths.ed.ac.uk/~v1ranick/papers/docarmo.pdf`. That URL returns
HTTP 404 on the initial fetch and on five retries (six recorded attempts,
2026-10-11T08:32:54Z–08:33:05Z), and two recorded web searches found only
Scribd/Academia uploads and bibliographic records, no citable full text. The
dropped source is retained in the coverage file as a `source_resolution` record
with `status: dropped`, `decided_by: step-1-scaffolder`, `confidence: certain`,
the six attempts, the searches, and an `alternatives` entry for each of its
four originally intended results
(`lem-gr-coordinate-ball-geodesic-convexity`,
`lem-gr-contained-geodesic-velocity-bound`,
`thm-gr-convex-normal-neighborhoods`,
`thm-gr-auxiliary-complete-riemannian-metric`). The three item reference
entries were re-sourced to the already fetch-verified Chruściel notes
(Proposition 2.2.6 with proof, pp. 12-13) and the auxiliary-metric item keeps
the fetch-verified Minguzzi article (section 1.6 with Theorem 1.5 and Lemma
2.17, corrected locator).

### Interim substitute rejected (history)

An earlier interim record had substituted W. J. Merry, *Differential Geometry*
(ETH 2021), for the do Carmo group and attributed "Chapter 3, Proposition 4.2"
and "Hopf–Rinow" content to it. Screening the fetch-verified 406-page PDF shows
that this text contains no treatment of convex normal neighbourhoods, no
injectivity-radius or cut-locus material, and no Hopf–Rinow theorem (its only
"Hopf" occurrence is the Killing–Hopf theorem). The Merry record was therefore
removed from the coverage file rather than kept with false dispositions; the
affected items are supported by Minguzzi and Chruściel, and the incident is
recorded here for the reviewer. This is the kind of source-fidelity finding
Step 1 must surface, not absorb.

### Other source repairs

- `lem-gr-causal-curve-conventions`: the Hawking–Ellis DOI was a typo
  (`10.1017/CBO1521524646`, HTTP 404); it now reads the correct
  `https://doi.org/10.1017/CBO9780511524646` (HTTP 200).
- `lem-gr-maximal-flow-escape`: the pirated `dokumen.pub` copy of Lee's book
  was replaced by the publisher DOI `https://doi.org/10.1007/978-1-4419-9982-5`
  (HTTP 200); Teschl's author-hosted notes remain the second treatment.
- `thm-gr-auxiliary-complete-riemannian-metric`: the Minguzzi locator now reads
  section 1.6 with Theorem 1.5 and Lemma 2.17 (the construction is in §1.6, not
  §2.6).

### Source resolution on the SR cone lemma (no new item needed)

`lem-gr-locally-finite-shell-sum` had imported clauses (i) and (iv) of the
draft special-relativity item
`lem-sr-reverse-cauchy-schwarz-for-future-timelike-vectors`, which is not on
the owner's `external_draft_context` list; `audit-manifest` flagged it as the
run's only unresolved dependency edge. The only facts the proof actually uses
are: the past timelike vectors form an open convex set closed under positive
multiples with closure `{v : v⁰ ≤ −|v_vec|}`, and a finite sum of past timelike
or zero vectors is past timelike unless every summand is zero. Both are
immediate from the authorized
`lem-timelike-cone-has-two-convex-components` (convexity plus the displayed
description), so fact `[L5]` was rewritten to cite only authorized suppliers,
the unauthorized dependency was removed, and a short convexity/induction
argument was recorded inline. No new item was needed; the audit over all 79
batch manifests now reports 0 defects.

## Mathematical content and proof contracts

- `research/physics-cm-qm-gr-79-2026-10-11-batch-77.proof-contracts.json`
  covers the 39 items with numbered steps (the two definitions and the physics
  remark have no proof contract), with 512 citations, step derivations mapped
  to actual numbered steps and boundary worksheets. `proof-contract.mjs
  --strict` reports 0 errors and 4 advisory `shotgun-bracket` warnings: in
  `thm-gr-normal-neighborhood-causal-cone` (step 3.1),
  `thm-gr-length-upper-semicontinuity` (step 3.2),
  `lem-gr-causal-curve-conventions` (step 2.2) and `lem-gr-push-up-rule`
  (step 2.1), one step carries most of the fact citations while other steps of
  the same proof carry none. The warnings are citation-distribution advice,
  not missing prerequisites: every cited fact is declared in `deps` and used
  where the step says it is, and the remaining steps are algebraic
  consequences of earlier steps.
- Empirical content: none. Every statement is a conditional mathematical
  theorem, lemma, definition, example, counterexample or the closing physics
  remark; no measurement, sample, calibration or statistical inference
  appears. `rem-gr-convex-normal-neighborhoods-scope` (`domain: physics`)
  states the physical scope of the GR framework and the deferrals
  (domain-of-dependence and horizon calculus, singularity theorems,
  smoothability of arbitrary Cauchy hypersurfaces, Riemannian comparison
  geometry) without asserting any observation.

## Repairs made during Step 1

- Stale `step N.M` references left by the canonical step renumbering were
  corrected in twelve items (conclusion steps of
  `lem-gr-dominating-cone-bounds`,
  `lem-gr-strong-causality-compact-length-bound`,
  `thm-gr-convex-normal-neighborhoods`,
  `lem-gr-position-vector-differential`,
  `lem-gr-causal-curve-initial-cone-step`,
  `thm-gr-normal-neighborhood-causal-cone`,
  `lem-gr-null-position-vector-forces-null-velocity`,
  `thm-gr-length-upper-semicontinuity`, `lem-gr-basic-limit-curve`,
  `thm-gr-limit-curve-two-endpoints`, `thm-gr-volume-time-function` and the
  case labels of `thm-gr-limit-curve-two-endpoints`). All step references now
  name existing steps; the scanner reports none stale.
- `lem-gr-locally-finite-shell-sum` fact `[L2]` cited "the Riemannian metric of
  [L4]" where `[L4]` is the finite-sum fact and `[L3]` is the complete
  auxiliary metric; corrected to `[L3]`.
- Eleven display-math blocks that spanned two source lines were joined to one
  line each (in `lem-gr-dominating-cone-bounds`,
  `thm-gr-auxiliary-complete-riemannian-metric`,
  `lem-gr-achronal-boundaries-lipschitz-graphs`, `lem-gr-push-up-rule`,
  `lem-gr-local-cauchy-neighborhood`,
  `lem-gr-chronological-volume-continuity`, `thm-gr-volume-time-function`,
  `thm-gr-smooth-cauchy-temporal-splitting`); the renderer requires a display
  block to be a single source line.
- Three unnumbered bold case headings inside the proof of
  `thm-gr-limit-curve-two-endpoints` split numbered steps in the layout
  renderer; the headings were removed and the case structure is carried by the
  step titles and the conclusion step.
- Seven `cited-not-in-deps` warnings were resolved by declaring the actual
  load-bearing citations (`def-gr-causal-conditions-and-global-hyperbolicity`,
  `lem-gr-coordinate-ball-geodesic-convexity`,
  `thm-gr-cauchy-surface-implies-globally-hyperbolic`,
  `lem-gr-normal-neighborhood-length-monotonicity`,
  `lem-gr-cone-bump-functions`) and by moving two purely orientational
  citations (`thm-gr-auxiliary-complete-riemannian-metric` in
  `lem-gr-strong-causality-compact-length-bound`,
  `ex-gr-flat-slab-explicit-splitting` in
  `cex-gr-flat-slab-coordinate-time-flow-incomplete`) to Remarks, where they
  are not dependencies.

## Verification evidence (actual results)

- `precheck` on all 42 item files: 42/42 pass, 0 failing.
- `rendercheck` on the 42 items and 2 library pages (44 files): OK — no
  wikilink in math, no nested or unbalanced delimiters, no multiline display,
  every math span parses under KaTeX, every frontmatter block parses.
- `proof-layout` on the 42 item paths: 42 items, 241 steps, 0 defects.
- `proof-contract --strict`: 0 errors, 4 advisory warnings, 39/39 items.
- `depcheck --items-file` (42 items): selected item/page and prerequisite
  cycle checks pass, 0 hard errors; `fwdcheck --items-file` (42 items): OK.
- `validate-plan --run`: exit 0, no item-level cycle, forward reference,
  B-page dependency or unresolved id among the run's 126 item-bearing pages.
- `manifest-deps`: 42 items, 0 errors. `audit-manifest` over all 79 batch
  manifests of the run: 15908 relationships, 0 defects.
- `coverage-checklist`: 1 page, 35 harvested results, 0 errors, 0 warnings.
  `source-fetch-check`: 4/5 fetch-verified, 5/5 resolved (1 documented drop).
- `item-dependency-levels check --run`: no dependency-level mismatch among the
  42 items; other batches' empty scaffolds and three nrqm labels are outside
  this batch.

## Unresolved findings for the reviewer

- The four `shotgun-bracket` warnings above are advisory citation-distribution
  observations; no missing premise, cycle or forward reference is involved.
  A reviewer who wants them gone should move each fact citation to the step
  that first uses it in those four proofs; this was left unchanged because the
  citations as written are accurate and re-distributing them would rewrite
  proof text after the step-renumbering audit.
- `validate-plan` prints 107 advisory `redundant-prereq` notes for pages of
  this run (including the A page): the design and dispatch name prerequisites
  directly that are also reached transitively. This is the earlier
  reconciliation choice and does not affect acyclicity or levels.
- The other batches' state visible in the run manifest set
  (`empty scaffold inventory` for gr14/gr15/cm16/qm pages, three nrqm level
  labels) belongs to other owners; nothing in this batch depends on those
  pages' item lists.
- The dropped do Carmo source and the rejected Merry substitution are recorded
  above and in the coverage record; the reviewer should confirm the Chruściel
  Proposition 2.2.6 and Minguzzi Theorem 2.4 readings used as the alternatives.

## Readiness records

After the final carrier edits, `step1-decisions.mjs record` was run for all 42
items with `--decision ready`, each item's actual manifest `deps` as the
dependency JSON, and a reason that lists the examined dependencies and the
verification evidence; no item was recorded `escalated` and no `--owner` record
was written. These records are authoring dispositions only; Step 2/3 review
remains the independent mathematical check.

# Real-analysis enrichment run report (`ra-enrich-01`)

Date: 2026-08-13  
Outcome: phase 1a plan prepared; no authoring, judging, auditing, publishing, or
pair building performed.

## Published-content findings that do not belong in Table A

### 1. The Archimedean polygon item has a geometric-calibration seam

`thm-archimedean-polygon-perimeter-characterization-of-pi` is mathematically
correct, but its proof says that adjacent vertices “subtend angle
\(2\pi/n\)” and uses a right triangle with opposite/adjacent ratio
\(\tan(\pi/n)\). At that point the corpus has analytic sine, cosine, tangent,
and arc length, but no item has yet defined geometric angle by arc length or
proved the right-triangle ratios.

This is **not** an unambiguous falsehood: it is a missing bridge and a
convention seam, exactly the kind of issue excluded from the narrow
published-dependency repair exception. I therefore did not edit the item. The
planned `def-radian-angle-by-unit-circle-arc-length` and
`thm-analytic-sine-cosine-agree-with-right-triangle-ratios` are both inserted
immediately before it, in that order, making the intended geometry explicit
before the polygon argument uses it and without rewriting published
mathematics.

### 2. Green's theorem is already published

The prior scaffold concern that “no page homes Green's theorem” is stale.
`line-integrals-and-the-gradient-theorem` now contains:

- `def-type-i-type-ii-and-elementary-green-regions`;
- both type-I/type-II boundary identities;
- finite boundary-cancellation/gluing;
- `thm-greens-theorem-for-finite-unions-of-elementary-regions`;
- `cor-area-as-a-line-integral-for-elementary-regions`; and
- `rem-greens-theorem-jordan-domain-limitation`.

Accordingly, no Green theorem was re-proposed. The phase-2 vector-calculus
proposal begins with surfaces, flux, divergence, and classical three-dimensional
Stokes, and treats planar Green only as an already-published special case.

### 3. Two prose-scaffold promises are not on the published pages

- RA-36 in `research/plan-realanalysis-pages.md` names “the rank theorem,” but
  `inverse-and-implicit-function-theorems` publishes only the inverse and
  implicit theorem chain. The missing material is too large for one enrichment
  item and is proposed as the phase-2 constant-rank/regular-level-set A/B pair.
- RA-40 names `rem-stokes-outlook`, but no item with that id exists. The
  published line-integral page instead has the precise Green/Jordan-domain
  scope remark above. The missing classical surface theory is proposed as the
  phase-2 surface-integrals/divergence/Stokes A/B pair.

These are planning mismatches, not false published statements; no library item
was edited.

## Amendments owed to other tracks

No other subject scaffold was edited. If the orchestrator routes cross-track
notes, the following boundaries should remain explicit:

1. **Measure theory:** Lebesgue FTC for absolutely continuous functions,
   Banach–Zarecki, Carathéodory ODE solutions, \(L^1/L^2\) Fourier convergence,
   Kolmogorov, and a.e. convergence results.
2. **Functional analysis:** Hilbert-space orthonormal bases, Riesz–Fischer,
   Plancherel, and abstract Fourier operators.
3. **Differential geometry:** differential forms, de Rham cohomology, and the
   general Stokes theorem on manifolds. The proposed real-analysis pair stops
   at classical Euclidean surface Stokes and divergence.

The repository already has deferred notes
`rem-kolmogorov-divergent-fourier`,
`rem-riesz-fischer`, and
`rem-de-rham-and-stokes-on-manifolds`, so these are routing reminders rather
than requests to duplicate them.

## Source-acquisition note

The requested local PDF route was attempted in
`/tmp/ra-enrich-01-venv`. The environment had neither `pypdf` nor `PyPDF2`,
and installing `pypdf` failed because the shell environment could not resolve
the package index. I did not request permission. Full PDF text was instead
obtained through the available document reader for the official/hosted PDFs,
and exact page/section ranges were read there. The source URLs, ranges, named
headings, and dispositions are all recorded in
`research/ra-enrich-01-harvest.md`. This is a tooling variance, not a blocker
to the plan.

## Blockers

None. The plan is ready for owner review.

## Scope/invariant record

- Proposed scope: 7 item ids, 5 existing page files, exactly as listed in
  `research/ra-enrich-01-placement.json`.
- Proposed later scope: 4 A/B pairs, recorded in the real-analysis prose
  scaffold only.
- No file under `items/` was created or edited.
- No file under `library/` was edited.
- `research/plan-spec.json` was not edited.
- No status was changed to `published`.
- No precheck, level-build gate, judge, audit, or publish action was run.
- No published-dependency repair was made.

## Plan-only validation performed

- `ra-enrich-01-placement.json` parses as JSON and contains 7 rows with 7
  unique ids.
- Each of its 5 target page files exists, and every `after` anchor is presently
  listed on that target page.
- None of the 7 proposed ids currently exists under `items/`.
- Every pre-existing dependency listed in Table A has `status: published`;
  every dependency mapped to a plan page is no later than its proposed target,
  and the two planned dependency edges follow manifest order.
- The page-by-page table in `ra-enrich-01-gaps.md` contains 83 unique page
  rows, exactly matching the 83 non-category Markdown files under
  `library/real-analysis/`.
- A protected-path diff check found no changes under `items/`, `library/`, or
  `research/plan-spec.json`.

# frontier-31 — Batch 3 scaffold notes

## Scope and plan check

- Batch: `3`; A page `geometric-hahn-banach-and-convex-separation` at
  order `288.055`; B companion at `288.056`.
- The design at `research/plan-functional-analysis-track.md` L525--577 and
  `research/plan-spec.json` agree on order, title, category, companion, and
  prerequisite `the-analytic-hahn-banach-theorem-examples`. No drift is
  recorded.
- The A scaffold has 19 items and the B scaffold has 11, so the A page is well
  below the 60-item split limit. No published page, workflow state, plan
  structure, or other batch was changed.

## Conventions and proof routes

- Scalars are real or complex as declared by
  `rem-real-and-complex-normed-space-convention`. A complex separation always
  compares `Re f`; it never orders complex values. Gauge homogeneity is first
  nonnegative-real homogeneity and becomes absolute homogeneity only under
  balance.
- A gauge is finite from absorption, sublinear from convexity, and a seminorm
  only from absolute convexity. It is not silently called a norm. The set used
  in the gauge separation proof is translated by a point *of the open convex
  set*, so it contains zero; the exterior point supplies the distinguished
  one-dimensional direction.
- `def-continuous-annihilator-of-a-subspace` introduces `M^perp` in `X*` and
  explicitly distinguishes it from the existing algebraic `U^circ` notation.
  `thm-geometric-hahn-banach-for-subspaces` uses the coefficient functional on
  `M + Kx`, with norm `dist(x,M)^(-1)`, then norm-preserving Hahn--Banach.
- Strong separation obtains a positive distance by the extreme-value theorem
  on the compact set, thickens the closed convex set, and only then applies the
  one-open theorem. The `exp` epigraph counterexample records why closedness
  alone does not give that gap.
- The Mazur item defines the weak-closure test locally by finite families of
  continuous functionals. It deliberately does not pre-empt the global weak
  topology definition on `weak-and-weak-star-topologies`.
- The Phillips route is split into the almost-disjoint-family lemma, the
  quotient no-countable-separating-family lemma, and the projection
  contradiction. Its countable-union step invokes the existing
  `thm-countable-union-of-countable`, so the two latter results explicitly
  assume Countable Choice. This is a known scope qualification, not an
  unconditional elementary proof claim.

## Item ledger and dependency rationale

### A page

1. `def-absorbing-balanced-and-absolutely-convex-set` fixes the set language.
2. `def-minkowski-functional` gives the finite gauge from absorption.
3. `lem-minkowski-functional-is-sublinear` supplies the dominated functional
   bound without an attained infimum.
4. `lem-balanced-gauge-is-a-seminorm` supplies the complex/real scalar law.
5. `lem-open-convex-set-recovered-from-its-gauge` supplies continuity and the
   strict sublevel characterization for separation.
6. `def-weak-and-strict-separation` fixes one-sided strictness, strong gaps,
   and `Re f`.
7. `thm-separation-of-an-open-convex-set-and-a-point` is the gauge plus
   analytic Hahn--Banach engine.
8. `thm-separation-of-disjoint-convex-sets-one-open` applies it to a convex
   difference.
9. `thm-strong-separation-of-closed-and-compact-convex-sets` supplies the
   compactness-strengthened gap.
10. `cor-closed-convex-set-is-an-intersection-of-closed-half-spaces` is the
    immediate exterior-point consequence.
11. `def-continuous-annihilator-of-a-subspace` is needed before all uses of
    `M^perp`.
12. `thm-geometric-hahn-banach-for-subspaces` is the exact normalized
    annihilator construction.
13. `cor-annihilator-detects-closure` and 14.
    `cor-density-characterised-by-annihilator-zero` are the resulting closure
    tests.
15. `cor-finite-dimensional-subspaces-are-complemented` uses extended finite
    coordinate functionals and the already proved closedness of finite-dimensional
    subspaces; 16.
    `cor-finite-codimensional-subspaces-are-complemented` uses a bounded
    quotient section. Both are cheap, source-backed corollaries rather than
    padding.
17. `def-linear-hyperplane` is required to state 18.
    `thm-closed-hyperplanes-are-kernels-of-nonzero-functionals` without an
    unintroduced codimension term.
19. `thm-mazur-weak-and-norm-closure-of-convex-sets` closes the planned A
    route.

### B page

`ex-gauges-of-norm-balls-and-ellipsoids`,
`cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm`,
`cex-two-closed-convex-sets-need-not-be-strongly-separated`, and
`ex-distance-to-a-subspace-via-annihilating-functionals` exercise the four
core A mechanisms. The epigraph counterexample carries the published
continuity, positivity, and two-point convexity facts for `exp`, so neither
closedness nor convexity is merely asserted. The remaining B chain is
`def-c-zero-and-ell-infinity` →
`lem-c-zero-is-a-closed-subspace-of-ell-infinity` →
`lem-uncountable-almost-disjoint-family-on-natural-numbers` →
`lem-quotient-by-c-zero-has-no-countable-separating-family` →
`thm-c-zero-is-not-complemented-in-ell-infinity` →
`ex-a-closed-uncomplemented-subspace`; it ends with
`rem-two-results-called-mazurs-lemma`. This avoids relying on an old examples
page, which would violate the B-leaf rule. The almost-disjoint construction
uses a fixed rational enumeration and least-index approximants; only the later
countable union step spends Countable Choice.

## Source evidence and harvest

- Theo Buehler and Dietmar A. Salamon, *Functional Analysis*, complete 2017
  lecture-note treatment, §2.3.2--§2.3.5, printed pp.76--87. The source was
  read at
  `https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf`.
  The design's official URL,
  `https://people.math.ethz.ch/~salamond/PREPRINTS/funcana-ams.pdf`, is
  preserved as `original_url`: direct reader rendering failed, but the
  recovered complete PDF was checked against title, contents, pagination, and
  numbered results before its full harvest was written.
- Gerald Teschl, *Topics in Real and Functional Analysis*, §5.1 pp.137--141
  and §5.3 pp.146--148, read at
  `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`.
  This contributes the gauge route, real/complex separation, compact strong
  separation, and Mazur theorem.
- Anthony W. Knapp, *Basic Real Analysis*, Chapter IV §5 pp.125--128, read at
  `https://www.math.stonybrook.edu/~aknapp/download/a2-realanal-inside.pdf`.
  This independent textbook treatment corroborates the support/gauge route
  and algebraic separation.
- Piotr Hajlasz, *Functional Analysis*, §10.5, source PDF pp.93--97 (printed
  pp.94--98), read at
  `https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf`.
  This author-hosted, complete 189-page PDF is the recovered same treatment
  after the Paperzz mirror at
  `https://paperzz.com/doc/9271898/functional-analysis---university-of-pittsburgh`
  was reported terminal-dead. The current edition renumbers the mirror's
  material: Theorem 10.19 (Phillips) and Lemma 10.20 provide the fully
  decomposed route for the closed uncomplemented-subspace example, and the
  proof's finite-set estimate proves that `(ell-infinity/c-zero)*` has no
  countable total family. The mirror URL is retained as `original_url` in
  coverage provenance.
- Every heading or named result over these read ranges is recorded in
  `frontier-31-batch-3.coverage.json` with an item-bearing `included`/`inline`
  disposition, an existing item, or a result-specific deferred/out-of-scope
  reason. Deferred destinations resolve to planned pages.

## Validation checkpoint

- `manifest-deps research/frontier-31-batch-3.pages.json`: 30 items, 0
  normalized, 0 errors.
- Batch-local `content-policy --manifest-only`: 30 scoped items, 0 errors, 0
  warnings.
- `coverage-checklist --require-destination`: 75 harvested results, 0 errors.
  It emits one advisory low-yield warning (29 included results of 75 harvested)
  because the harvest faithfully records the source sections deliberately kept
  out of the pair; the result-specific reasons and destinations are present.
- `source-fetch-check`: 4/4 source records carry full-text verification. The
  records state the exact web-reader verification method and page count rather
  than inventing byte counts or hashes.
- The ordinary `validate-plan research/plan-spec.json` passes. A temporary,
  non-repository copy with this batch's 30 manifest items merged in also passes:
  no unresolved id, item/page cycle, forward reference, or B-page dependency.

### External gate blockers recorded, not repaired out of scope

- `url-sweep --recover --fail-on-dead` failed `0/4` because this workspace's
  terminal resolver returned `curl: (6) Could not resolve host` for all four
  recorded hosts: `sci.mu.edu.iq`, `www.uomustansiriyah.edu.iq`,
  `www.math.stonybrook.edu`, and `paperzz.com`. Its archive probes consequently
  found no snapshots. Each source was nonetheless directly opened in the web
  reader and read at its stated locator. No source row or harvested result was
  removed to mask this environment-only failure.
- With that liveness output, `source-backing --require-verified` reports 23
  included items as lacking an *openable-by-terminal* source. This is the
  mechanical consequence of the same four DNS failures, not a loss of source
  evidence: all four have recorded web-reader full-text verification above.
- The required whole-run manifest-only policy was run across all
  `frontier-31` manifests. It reports six unrelated dependency errors in other
  batch material: three items require
  `def-group-homology-as-a-derived-functor`, and one also requires
  `def-group-cohomology-as-a-derived-functor` plus
  `thm-universal-coefficient-theorem-for-cohomology-over-a-pid`.
  Those files are outside Batch 3 and were not modified.

Batch-local scaffold checks are green; the DNS and whole-run external failures
remain explicit obligations for the run owner or a network-capable validator.

## Reharvest — 2026-09-05 (reharvest-1-b3)

- Dead source reported by `research/frontier-31-reharvest-plan.json`:
  Piotr Hajlasz, *Functional Analysis*, Paperzz mirror
  `https://paperzz.com/doc/9271898/functional-analysis---university-of-pittsburgh`.
  The terminal sweep had no usable DNS response for that host. A current,
  author-hosted same-document PDF was found and fully read instead:
  `https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf`.
  It is an eligible independent course-note treatment (189 PDF pages), not a
  replacement exposition. Its complete Phillips passage was read from §10.5,
  source PDF pp.93--97 (printed pp.94--98), beginning at Theorem 10.11 and
  ending before §11. The former mirror remains `original_url`.
- Reharvested result mapping: Theorem 10.19 (Phillips) now backs
  `thm-c-zero-is-not-complemented-in-ell-infinity`; Lemma 10.20 now backs
  `lem-uncountable-almost-disjoint-family-on-natural-numbers`; and the proof
  of Theorem 10.19, specifically its countable-total-family reduction and
  the estimate `#E_n <= n ||x*||`, now backs
  `lem-quotient-by-c-zero-has-no-countable-separating-family`. Every other
  named result and definition in the recovered §10.5 range has a refreshed
  coverage disposition.
- Claim constraint unchanged: the two quotient/Phillips scaffold claims retain
  their explicit Countable Choice qualification. Hajlasz writes the usual
  countability step without set-theoretic annotation; this scaffold continues
  to name the exact countable-union principle it uses rather than silently
  strengthening its foundational assumptions.
- Next action: run the batch-local destination, liveness/recovery,
  source-backing, and fetch-stamp gates against the recovered URL; retain any
  terminal-network failure as a gate result rather than altering the claim or
  removing source-backed results.

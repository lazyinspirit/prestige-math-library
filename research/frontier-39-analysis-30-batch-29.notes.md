# Batch 29 Step 1 scaffold — Poisson Summation Sampling and Lattice Duality

Run `frontier-39-analysis-30`, role beta, label batch-29. Owned pair:
`poisson-summation-sampling-and-lattice-duality` (A, order 510.06509) /
`poisson-summation-sampling-and-lattice-duality-examples` (B, order 510.06510),
category `fourier-analysis`. Outputs: `research/frontier-39-analysis-30-batch-29.pages.json`
(17 A items + 5 B items; page cap 100 respected), `...-batch-29.coverage.json`, this note,
`...-batch-29.cross-batch-dependencies.json` (2 page edges, both `open` into in-run batches 27
and 28), one `research/frontier-39-analysis-30-step1-<id>.json` readiness record per item
(22 records: 22 `ready`, 0 `escalated`), and the refreshed unified ledger
`research/frontier-39-analysis-30-cross-batch-dependencies.json`. No published content, item
file, shared plan, engine state or verdict was edited. This record covers construction only;
it is not an independent mathematical review.

## Scope, plan and owner direction

- `research/frontier-39-analysis-30-owner-authoring-direction.md` does **not** exist (checked
  before construction); the binding texts are the dispatch, CLAUDE.md, SCHEMA.md, WORKFLOW.md,
  the design section and `research/plan-spec.json`.
- The design section is **FR-19** at `research/plan-fourier-analysis-track.md` L1366
  (`## FR-19. Poisson summation, sampling, and lattice duality`), read in full (L1366–L1411),
  together with the per-pair source matrix row at L329 and the reconciliation-ledger row at
  L80. It contains 12 numbered A rows and 5 B leaves plus the hard proof/boundary obligations
  quoted below; all 17 design rows are preserved (row 7 generalised, see conflict 3).
- `research/plan-spec.json` pages 510.06509/510.06510 carry the same `order`, `title`,
  `companion`, `kind`, `category`, `requires` and empty `items: []` as the dispatch and the
  manifest stub. The reconciliation-ledger row (L80) says "FR-19 | move to 510.06509/.06510 |
  FR-1 A, FR-2 A, FR-15 A, FR-17 A, FR-18 A, `tempered-distributions-and-the-fourier-transform`",
  which is exactly the plan's `requires` array. No plan-vs-dispatch conflict exists; the one
  design-prose divergence is conflict 2 below.
- Hard obligations honoured: full-rank lattices with nonzero covolume (definition item 1);
  every interchange in periodisation backed by absolute/local uniform convergence (items 3,
  5, 6, 9, 10 and the decay theorem); Poisson summation is never stated for bare $L^1$ data
  with point values (the decay theorem states continuity plus two-sided $(n+\varepsilon)$
  decay, and the B remark records the sourced failure); Shannon equality is first in $L^2$,
  with pointwise/local-uniform claims only under the extra hypothesis $\sum_k|f(hk)|<\infty$;
  endpoint frequency values are treated a.e. only.

## Recorded conflicts and design-vs-evidence notes

1. **T range label (recorded; pagination mismatch, no mathematical difference).** The design
   matrix cites "T, §7, PDF pp. 59–68". In the current author PDF (107 pages) §7, "The method
   of images and Poisson's summation formula", is at **printed pp. 71–74 / PDF pp. 70–73**;
   PDF pp. 59–68 hold the end of §5 and §6 (radial distributions, polar coordinates, Bessel
   functions). The coverage records the range actually read, printed pp. 71–74, and this note
   records the discrepancy. Nothing in the design's §7 obligations (periodisation, translate
   tiling, Gaussian instance, theta/zeta continuation) is lost: (7.11)–(7.17) and (7.18)–(7.28)
   were read at the correct location.
2. **Design prose "FR-15–FR-18" vs the plan's `requires` (recorded; plan controls).** The
   FR-19 prose says the pair requires "the FR-1, FR-2, FR-15--FR-18 A pages", but the design's
   own reconciliation ledger (L80) and `plan-spec.json` both omit FR-16
   (`bochner-inversion-and-plancherel-on-lca-groups`). The manifest keeps the plan's six
   `requires` entries unchanged. This is immaterial to closure: no FR-19 item consumes any
   batch-26 item, and the page edge is not declared.
3. **Design row 7 was generalised, not duplicated (recorded deviation).** Row 7's literal claim,
   $\widehat{\sum_{k\in\mathbb Z^n}\delta_k}=\sum_{k\in\mathbb Z^n}\delta_k$, is **already
   published** as `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-tempered-distributions`
   (and as the number-theory `thm-dirac-comb-is-fourier-invariant`). Minting a second identical
   lemma would be padding. The manifest therefore keeps a comb-duality row (same design row,
   same purpose "distributional form behind sampling and aliasing") but states the **general
   full-rank lattice form** $\mathcal F\operatorname{comb}_\Lambda
   =\operatorname{covol}(\Lambda)^{-1}\operatorname{comb}_{\Lambda^*}$, which is exactly what
   row 8 (sampling at $\Lambda=h\mathbb Z^n$, scale $h^{-n}$) consumes, and records the
   published unit case as its explicit specialization and cross-check. The design id
   `lem-dirac-comb-is-self-dual-as-a-tempered-distribution` was renamed to
   `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb` so the id matches the
   statement. The claim is strictly stronger at $\Lambda=\mathbb Z^n$ and is not weakened.
4. **Local additions (5, all marked `local_addition: true`).** The design's rows presuppose
   items it does not list; each was added before its consumers:
   `def-normalized-sinc-function` (rows 9/10 use $\operatorname{sinc}$; no published definition
   exists — the normalised convention $\operatorname{sinc}(k)=\delta_{k0}$ is fixed),
   `lem-invertible-linear-substitutions-preserve-schwartz-space` (the periodisation lemma
   reduces a lattice to $\mathbb Z^n$; no published item states $f\circ A\in\mathcal S$),
   `lem-lattice-fundamental-parallelotope-partitions-euclidean-space` (tiling + covolume
   volume), `lem-character-orthogonality-on-a-lattice-fundamental-domain` and
   `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients`
   (the scaled coefficient/orthogonality/uniqueness engine for the two Poisson theorems).
   No item was weakened or padded; the A page holds 17 of the hard cap of 100.
5. **Choice strength kept at Countable Choice (recorded).** The published
   `lem-full-lattice-fundamental-domain-and-bounded-points` states the tiling at **Axiom-of-
   Choice** strength, which would gratuitously raise every FR-19 item from CC to AC. It is
   deliberately **not consumed** (recorded near-duplicate, not a defect); the local tiling
   lemma proves the same unique representation choice-free and uses Countable Choice only in
   the change-of-variables volume computation. All 17 A items and the 5 B items carry at most
   Countable Choice, inherited from the published Euclidean integration, Fubini/Tonelli, the
   Schwartz Poisson theorem and the torus Riesz–Fischer isometry. No Axiom of Choice, DC, or
   any `deferred-set-theory-beyond-choice` path is used.
6. **Near-duplicates deliberately not consumed (recorded).** `thm-dirac-comb-is-fourier-
   invariant` and `ex-dirac-comb-and-poisson-summation` (number-theory, published) restate the
   unit-lattice Poisson/comb material; `thm-unit-lattice-dirac-comb-is-fourier-invariant-in-
   tempered-distributions` restates row 7's literal claim; `ex-poisson-summation-for-the-
   gaussian-and-theta-functional-equation` owns the Gaussian/theta instance. The page consumes
   the first only as the statement-level cross-check in row 7, and the last only as the target
   of the B-page ownership remark; the others are recorded as cross-checks, not dependencies.
   `thm-poisson-summation-for-schwartz-functions` **is** consumed, but exactly and only for the
   convergence clause of its statement (local uniform convergence of the periodisation and all
   derivative series), which the lattice periodisation lemma pulls back; the ownership remark
   item 4 records that citation so no duplicate proof is minted.
7. **Sampling convergence mode (source caveat recorded).** Laugesen's Theorem 22.3 asserts
   $L^2$ convergence and also "uniform" convergence, but its proof passes from the $L^2$
   Fourier expansion of $\widehat f$ to $L^1(\mathbb R)$ convergence of the coefficient series,
   which is not justified by Bessel alone (it needs $\sum_k|f(hk)|<\infty$). The design already
   requires the convergence mode to be stated, and the manifest's Shannon theorem therefore
   proves the $L^2$ identity unconditionally and the locally uniform/pointwise identity only
   under the explicit hypothesis $\sum_k|f(hk)|<\infty$; the $L^2$-only case is explicitly
   disclaimed. This is a source-proof caveat, not a published defect of the library.
8. **Convention translation recorded (no constant silently changed).** Laugesen uses
   $\widehat f(\xi)=\int f(x)e^{-i\xi x}dx$ and $2\pi$-spaced periodisation; the library uses
   the $2\pi$-free $\widehat f(\xi)=\int f(x)e^{-2\pi ix\cdot\xi}dx$. The manifest states every
   result in the library convention: samples $f(hk)$, kernel
   $\operatorname{sinc}(x/h-k)$, band $[-1/(2h),1/(2h)]$, dual lattice
   $\Lambda^*=A^{-T}\mathbb Z^n$. Sutherland's MITP notes already use the $2\pi$-free
   convention, Silberman uses $e(z)=e^{2\pi iz}$ with $\operatorname{covol}(\Lambda)$, and
   Elkies' positive-sign transform gives the same identity by conjugation; all translations
   are recorded in the coverage locators.

## Inventory and dependency levels

Every item carries `design_row: FR-19`, explicit `deps`, provenance and source references, and
the `dependency_level` recomputed by `tools/item-dependency-levels.mjs` (1 + maximum level of
its in-run deps; published suppliers do not raise it). Five local additions carry
`local_addition: true` (def-normalized-sinc-function, lem-invertible-linear-substitutions-
preserve-schwartz-space, lem-lattice-fundamental-parallelotope-partitions-euclidean-space,
lem-character-orthogonality-on-a-lattice-fundamental-domain, lem-lattice-periodic-continuous-
functions-are-determined-by-their-lattice-fourier-coefficients).

| Level | Item |
|---:|---|
| 0 | `def-full-rank-lattice-covolume-and-dual-lattice` |
| 0 | `lem-invertible-linear-substitutions-preserve-schwartz-space` (local addition) |
| 0 | `rem-schwartz-poisson-formula-is-owned-by-functional-analysis` (recorded, not proved) |
| 0 | `def-normalized-sinc-function` (local addition) |
| 0 | `lem-bandlimited-samples-are-fourier-coefficients-on-the-band-interval` |
| 0 | `rem-gaussian-theta-reciprocity-is-already-instantiated-on-functional-analysis` (B, recorded) |
| 0 | `cex-undersampling-identifies-two-distinct-pure-frequencies` (B) |
| 1 | `lem-lattice-fundamental-parallelotope-partitions-euclidean-space` (local addition) |
| 1 | `lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable` |
| 1 | `ex-dual-lattice-and-covolume-for-a-diagonal-scaling` (B) |
| 1 | `thm-shannon-sampling-for-bandlimited-ltwo-functions` |
| 2 | `lem-character-orthogonality-on-a-lattice-fundamental-domain` (local addition) |
| 2 | `lem-fourier-coefficients-of-lattice-periodisation` |
| 2 | `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients` (local addition) |
| 2 | `ex-shannon-reconstruction-of-a-sinc-function` (B) |
| 3 | `thm-poisson-summation-for-a-full-rank-lattice` |
| 3 | `thm-poisson-summation-under-two-sided-polynomial-decay` |
| 4 | `lem-dirac-comb-of-a-full-rank-lattice-transforms-to-the-dual-comb` |
| 4 | `rem-lone-integrability-alone-does-not-license-pointwise-poisson-summation` (B, recorded) |
| 5 | `lem-sampling-produces-periodisation-in-frequency` |
| 6 | `cor-nyquist-no-aliasing-condition` |
| 6 | `rem-aliasing-above-the-nyquist-rate` |

The B page's five leaves are the design's B1–B5 (two `ai-generated` statements with
`generation.role: example`/`counterexample`, three `literature-derived` recorded or
literature-proof items), and no A item depends on a B item.

## Dependency and prerequisite verification

Published suppliers were opened and their statements (and, for the load-bearing ones, their
argument routes) were checked against the use declared here. Key checks:

- **`thm-poisson-summation-for-schwartz-functions`** (published): statement read in full. Its
  conclusion asserts absolute convergence of both sums and locally uniform convergence of the
  left series with every derivative, which is the exact clause consumed by item 5. Its proof
  (periodisation, coefficients $\widehat f(\ell)$, uniqueness of continuous periodic functions,
  `def-countable-choice`) is the same route the local lattice theorem re-implements at lattice
  scale, so no stronger machinery is assumed.
- **`lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients`**
  (published, assumes Countable Choice): continuous $\mathbb Z^n$-periodic functions with all
  vanishing coefficients are zero. Consumed by the local uniqueness lemma via the pullback
  $h_A(y)=h(Ay)$; the change of variables transports the coefficient integrals.
- **`thm-fourier-transform-converts-allowed-tempered-convolutions-to-products`** (published):
  the second displayed clause $\mathcal F(\varphi u)=(\mathcal F\varphi)*(\mathcal F u)$ for
  $\varphi\in\mathcal S$, $u\in\mathcal S'$ under the distribution-first convolution is exactly
  what item 12 applies to $u=\operatorname{comb}_\Lambda$.
- **`def-convolution-of-a-tempered-distribution-with-a-schwartz-function`** (published):
  $(u*\varphi)(x)=\langle u_y,\varphi(x-y)\rangle$, so
  $(\operatorname{comb}_{\Lambda^*}*\widehat f)(x)=\sum_{\lambda^*}\widehat f(x-\lambda^*)$;
  the sign convention gives $c^{-1}\sum_{\lambda^*}\widehat f(\cdot-\lambda^*)$ in item 12.
- **`thm-riesz-fischer-for-fourier-coefficients`**, **`thm-plancherel`**,
  **`thm-l-two-fourier-inversion`**, **`thm-l-one-l-two-agreement-of-fourier-transform`**,
  **`thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`**,
  **`thm-finite-measure-l-r-includes-into-l-p-for-p-less-r`** (all published): the $L^2$ band
  sampling item uses them for the continuous representative ($\widehat f\in L^1$ since the band
  has finite measure), for the coefficient computations and for the isometry
  $\sum_k|\widehat{G_h}(k)|^2=\|G_h\|^2$.
- **`ex-fourier-transform-of-an-interval-indicator`** and
  **`lem-complex-integration-by-parts-on-intervals-and-decaying-lines`** (published):
  $\widehat{\mathbf 1_{[-1/2,1/2]}}(t)=\sin(\pi t)/(\pi t)$ and the complex FTC, giving the
  kernel $\int_{-1/(2h)}^{1/(2h)}e^{2\pi i(x-hk)\xi}d\xi=h^{-1}\operatorname{sinc}(x/h-k)$ in
  the Shannon proof and the $F_2(\operatorname{sinc})=\mathbf 1$ verification on the B page.
- **`def-full-euclidean-lattice-and-covolume`**, **`lem-integer-part`**,
  **`thm-linear-change-of-variables-for-lebesgue-measure`**,
  **`thm-lebesgue-measure-of-a-box-of-every-kind`**, **`thm-tonelli-...`**,
  **`thm-fubini-...`**, **`thm-dominated-convergence`** (all published): the tiling, volume and
  interchange interfaces; their Countable-Choice assumptions are the page's choice contract.
- **`def-dirac-comb`** and **`thm-finite-seminorm-bound-characterizes-tempered-distributions`**:
  the shell-count temperedness argument is transported to $\Lambda= A\mathbb Z^n$ using
  `lem-euclidean-linear-maps-have-matrices-and-are-bounded` and `thm-p-series-real-exponents`.
- **`lem-trigonometric-characters-are-orthonormal`** and
  **`thm-kernel-and-fibres-of-complex-exponential`**: the one-dimensional character integrals
  in the lattice orthogonality lemma, and $e^{2\pi i m}=1$ for integers $m$.
- **No item-level cross-batch dependency exists.** The two page `requires` edges into batch 27
  (`pontryagin-duality-for-locally-compact-abelian-groups`) and batch 28
  (`finite-fourier-analysis-and-the-fast-fourier-transform`) are page-scope interfaces only,
  recorded as `open` in the cross-batch input; no FR-19 item consumes any batch-26/27/28 item.
  The design's FR-16 edge is absent from the plan and is recorded in conflict 2.
- **Published defects:** none was established in the suppliers used. The examination here is
  statement-level plus the declared argument routes; it is not an independent audit of those
  published proofs, and any later finding must go to the canonical ledger.

## Coverage and sources

`...-batch-29.coverage.json` records 5 sources and 39 harvested headings (A page: Laugesen
chs. 22–23, Taylor §7, Sutherland §§16.1–16.1.1, Silberman §§1–4, Elkies §2; B page: the same
sources at the worked-example headings). Two are a book (Taylor) and full lecture-note sets
(Laugesen, Silberman); Sutherland and Elkies are lecture/course notes. Dispositions:
`included` for every scaffolded row, `inline` for absorbed arguments, `already-published`
where the library owns the result (unit-lattice Poisson, Gaussian/theta, midpoint values,
Jacobi theta), five reasoned `out-of-scope` declines, and one `deferred` row (Laugesen ch. 24,
uncertainty principles, destination `uncertainty-principles-for-fourier-analysis`, FR-20).
All five source URLs were fetch-verified in full-text stamp mode.

## Checks actually run (2026-10-04)

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-29.pages.json` →
  `22 item(s), 0 normalized, 0 error(s)`; whole-run form over all 30 manifests →
  `458 item(s), 0 normalized, 0 error(s)`.
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-29.pages.json`
  → `22 scoped item(s), 0 error(s), 0 warning(s)`. Whole-run form →
  `458 scoped item(s), 1 error(s), 0 warning(s)`, the single error being the pre-existing
  batch-27 dangling dep `lem-positive-compactly-supported-transform-bump-on-the-dual` →
  `thm-unique-left-haar-measure-up-to-scale` (already recorded in batch-28's notes; not this
  batch and not touched here).
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30` → exit 1 with
  findings only in other batches (empty scaffold inventories and missing labels in batch 6);
  **zero findings mention batch-29**: no cycle, no duplicate id, and every `dependency_level`
  label equals the computed value. One mislabelled item was found and fixed during
  construction (`lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable`
  2 → 1) before the readiness records were written.
- `node tools/coverage-checklist.mjs ...-batch-29.coverage.json --require-destination` →
  `2 page(s), 39 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage ...-batch-29.coverage.json --stamp` →
  `9/9 source(s) fetch-verified (9 newly stamped)` and `9/9 source(s) resolved`. Stamps:
  Laugesen PDF 887135 bytes sha256_16 `b1ef00490b91e492` (176 pages), Taylor PDF 603921 bytes
  sha256_16 `e85e7a4e882a278d` (107 pages), Sutherland PDF 224056 bytes sha256_16
  `f5093cf6a6aca88a` (6 pages), Silberman PDF 114856 bytes sha256_16 `7f418ee81f4b5e4d`
  (5 pages), Elkies PDF 481451 bytes sha256_16 `913c5082b973f24b` (51 pages). All five full
  texts were read directly by text extraction at the locators recorded in the coverage.
- `node tools/url-sweep.mjs --coverage ...-batch-29.coverage.json --out /tmp/... --fail-on-dead`
  → `5/5 live; 0 failed`.
- `node tools/validate-plan.mjs research/plan-spec.json` → exit 0; the declared page order is
  acyclic and consistent, with no item-level cycles, forward references, B-page dependencies or
  unresolved ids (planned pages without item lists remain the expected Step-4-era state).
- `node tools/manifest-integrity.mjs --run frontier-39-analysis-30` →
  `60 page(s) owed, 60 in the manifests; no scope drift`.
- `node tools/extcheck.mjs` → exit 0; the only rows are pre-existing published
  `unproved-on-published` warnings on unrelated pages, none in this batch.
- `node tools/fwdcheck.mjs` → exit 0; no batch-29 row.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30` → refreshed;
  batch 29 is `reviewed`, its two declared page edges carry exactly the two `open` reviews from
  `...-batch-29.cross-batch-dependencies.json`, and `orphaned_reviews` is empty.
- `node tools/step1-decisions.mjs record` × 22, once per item, in dependency-level order
  (levels 0,0,1,1,…,6 as tabled), every record `ready`, owner `false`, with the examined
  dependency list and the evidence above; then `node tools/step1-decisions.mjs check --run
  frontier-39-analysis-30` → 437 ready of 458 declared run items, `closed: false` only through
  other batches' `Readiness record missing` / `Empty scaffold inventory` rows, **no batch-29
  row** (all 22 records current against the frozen manifest and dependency bytes).

## Hash currency and concurrent siblings

The readiness records were written only after the last manifest edit and the last coverage
stamp; the manifest and coverage are frozen at the bytes hashed by those 22 records, and
`step1-decisions check` reports all 22 current (no "Item or dependency changed" row). Editing
any item statement, deps list or stamped coverage below invalidates exactly the transitive
consumer records and requires re-recording them before the Step-1 gate. The whole-run state at
the final check is the expected mid-scaffold one: 458 run items are declared by the landed
inventories, other batches are still empty or unlabelled in places, and the frontier ledger
lists batch 29 as `reviewed` with its two `open` interface edges.

## Escalations and unresolved uncertainty

- **No escalation is raised by batch 29.** The complete local closure fits on the A page
  (17 of at most 100 items), every prerequisite is published or locally scaffolded in order,
  and no selected pair or cross-batch placement needed changing.
- **Open interface edges (recorded, not a defect).** The two page edges into the in-run FR-17
  and FR-18 scaffolds stay `open` until Step 3 authors those items; since no FR-19 item
  consumes them, they cannot block authoring or mathematical closure of this pair. The
  design's FR-16 omission is recorded in conflict 2 as a plan-over-prose resolution.
- **Design deviations (recorded for the reader).** Row 7's id and content generalisation
  (conflict 3), the five local additions (note 4) and the Countable-Choice-level tiling in
  place of the published AC-level tiling lemma (note 5) are the only departures from the
  design text; all strengthen or preserve the design's claims. If Step 5 disagrees with the
  row-7 generalisation, the owner holds that scope call.
- **Largest authoring obligation (recorded, not a scaffold failure).** Items 5, 6, 9, 10 and 12
  carry the genuine analytic content: reductions of a lattice to $\mathbb Z^n$, termwise
  integration under Tonelli, the two decay/regularity hypotheses and the tempered-distribution
  product-to-convolution law. The strategies state the exact routes and the convention
  translations so Step 3 does not silently change the $2\pi$-free $h$-normalisation.
- **Source caveat (recorded).** Laugesen's Theorem 22.3 uniform-convergence clause is not
  justified by its printed proof; the manifest's Shannon theorem therefore uses the stronger
  explicit coefficient hypothesis for its locally uniform clause. This is a caveat about the
  source, not a defect established in any published library item.
- **Published defects:** none established. Near-duplicates recorded above are not defects;
  any later finding must go to the canonical ledger with exact ids and evidence.


## Owner follow-up on the historical batch-27 dependency report

The earlier whole-run content-policy observation in this note predates the owner correction to batch 27. The bump lemma now declares the published supplier `thm-uniqueness-of-left-haar-measure-up-to-scale`; its owner readiness record was refreshed. The prior missing-supplier error is resolved, pending the full Step 1 gate on the stable run manifests.

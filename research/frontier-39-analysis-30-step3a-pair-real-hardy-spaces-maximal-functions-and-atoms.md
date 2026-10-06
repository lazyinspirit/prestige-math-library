# Step 3a scope report — `real-hardy-spaces-maximal-functions-and-atoms`

- Run: `frontier-39-analysis-30` (batch 5) · Role: alpha, step 3a scope review.
- A page: `real-hardy-spaces-maximal-functions-and-atoms` (order 458.02607, fourier-analysis).
- B page: `real-hardy-spaces-maximal-functions-and-atoms-examples` (order 458.02608).
- Assigned pair inventory: A 23 items, B 5 items (28 total).
- **Decision: `sufficient`.** Receipt: `research/frontier-39-analysis-30-step3a-review-real-hardy-spaces-maximal-functions-and-atoms.json`.

Scope only: this review compares the planned definitions, results and examples
with the prose design, source coverage and intended library role. It is not a
proof audit and records no item approval and no owner record.

## Inputs read

- Manifests: `research/frontier-39-analysis-30-batch-5.pages.json` (both pages),
  `research/plan-spec.json` (orders 458.02607/.02608), batch-5
  `coverage.json`, `cross-batch-dependencies.json` (`[]`) and `notes.md`.
- Prose design: `research/plan-fourier-analysis-track.md` §FR-9 (lines
  758–805), summary row line 39, reconciliation-ledger row line 70, convention
  audit line 252.
- Owner input: `research/frontier-39-analysis-30-step1-owner-resolution.md` has
  no FR-9 row; no `-owner-authoring-direction.md` exists for this run; no
  Step 3 owner scope record exists for this page.
- Dependency records: batch-5 cross-batch file is empty; the batch-6 (BMO) and
  batch-7 (Littlewood–Paley) consumer rows for this pair are all `verified`;
  all 28 items have a step-1 readiness record (`ready`, none owner-held);
  `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  reports 899 items across 60 pages, maximum level 22, no errors.

## Scope determination

1. **Design crosswalk is exact.** All 18 designed FR-9 A-page items and all 5
   designed B-page leaves are present in the manifests with matching IDs,
   kinds and subject matter; no designed item was dropped or narrowed. The
   A page adds exactly five local prerequisites, all inside the pair's subject
   and all consumed by designed items:
   `lem-existence-of-schwartz-functions-with-flat-fourier-transform-at-the-origin`,
   `lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions`,
   `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`,
   `lem-whitney-type-ball-cover-of-a-proper-open-set`,
   `thm-fourier-transform-decay-of-real-hardy-space-elements`.
   The B page has no extra items. The design's deliberate exclusions
   (Littlewood–Paley characterisation, holomorphic/anisotropic Hardy theory,
   finite or continuous-atom refinements, $H^p$ duality) are unchanged and are
   owned elsewhere (FR-11, complex analysis, FR-10) or marked out of scope in
   the coverage harvest, so no promise of the design is missing.

2. **Definitions, results and examples cover the promised subject.** The pair
   delivers radial/nontangential/grand maximal definitions, the $H^p$ space for
   $0<p<\infty$, the maximal-function equivalence theorem, the $(p,\infty,s)$
   atom definition with the exact order $s=\lfloor n(1/p-1)\rfloor$, the
   Whitney + local polynomial projection + Calderón reproducing pair route to
   the atomic decomposition for $0<p\le1$, the atomic characterisation with
   $\ell^p$ coefficients, $H^p=L^p$ for $p>1$, Fourier-decay and
   vanishing-moment consequences, the recorded (unproved) Riesz-transform
   characterisation, the CZ $H^1\to L^1$ endpoint, and the quasi-Banach
   caveat below $p=1$. The five B leaves check atom normalisation, the
   independence of cancellation from size, $H^1\subsetneq L^1$, the atomic
   near/far estimate for Hilbert/Riesz transforms, and non-regularity of
   atoms. The design's boundary obligations are respected in the statements:
   nonempty finite cubes, the integer moment thresholds, $\mathcal S'$
   convergence of atomic sums (norm convergence only where claimed),
   $p=1$ norm vs. $p<1$ quasi-norm.

3. **Source coverage is complete and disposed.** The coverage record carries 12
   fetch-verified sources and 76 harvested results with 0 errors/0 warnings
   (`coverage-checklist … --require-destination`); 39 results are `included`
   and 10 `inline` on the A page, 9 `included` on the B page, 13
   `out-of-scope`, 3 `already-published` (named published FR-8 items) and 1
   `deferred`. The single deferred row (Littlewood–Paley characterisation,
   Wa §1.1.2) has a home in this run: FR-11 plans
   `rem-square-function-characterisation-of-real-hone` (recorded, not proved).
   The design's W source range "pp. 40–47" vs. section 7.6 ending at p. 46 is
   the recorded design typo; the exercised material is covered.

4. **Prerequisite closure resolved: no confirmed unmet prerequisite.** A
   read-only closure audit over both pages (direct `deps` plus all in-run
   dependencies recursively, checking each terminal id against the published
   `items/<id>.md`) resolves 68 nodes: 28 in-run items and 40 published
   suppliers, 0 missing. All five page-level `requires` of the A page resolve
   to published library pages (`hilbert-and-riesz-transforms`,
   `calderon-zygmund-decomposition-and-singular-integrals`,
   `distributions-test-functions-and-differentiation`,
   `tempered-distributions-and-the-fourier-transform`,
   `the-maximal-function-and-lebesgue-differentiation`); the B page requires
   only the A page. No forward reference exists inside the pair, and the pair
   consumes nothing from its batch-5 sibling pairs. The load-bearing published
   supplier statements were opened and checked against the consuming plan:
   `thm-maximal-truncations-are-weak-one-one-and-strong-lp` (standard
   $\delta$-Hölder kernel class, weak $(1,1)$ for $T^{**}$/$T^*$, Countable
   Choice), `cor-principal-value-truncations-converge-almost-everywhere`
   (dense-class a.e. convergence), `lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function`,
   `thm-fourier-transform-maps-l-one-to-bounded-uniformly-continuous-functions`,
   `prop-the-p-functional-is-not-a-norm-for-zero-less-p-less-one`, the
   $L^p$-duality/separability/weak-star-compactness suppliers used in
   $H^p\subset L^p$ for $p>1$, and the FR-7 Riesz/Hilbert suppliers used by the
   recorded remark and the B page. Their hypotheses match the declared uses.

5. **Intended library role is served.** FR-10 (BMO/$H^1$ duality) consumes the
   atom definition, the grand-maximal class, the $H^1$ definition with its
   norm status at $p=1$, the measurability lemma, the maximal-characterisation
   theorem, the atomic characterisation and the $\ell^1$-sums lemma; FR-11
   consumes the space itself and the characterisations for its recorded
   endpoint remark. Every consumed clause exists on this scaffold with the
   needed hypotheses (the consumer cross-batch rows were re-read and are
   consistent with the statements here).

## Unmet prerequisites

- **None confirmed.** Every id in the transitive closure of the 28 items
  resolves to the current scaffold or to the published library, and the five
  required pages are published. No consuming planned item lacks a required
  claim at the statement level in the audited set.
- **Recorded uncertainty (not a scope gap).** Two proof-evidence risks already
  documented in `batch-5.notes.md` remain for authoring/verification, not for
  scope: (i) the only fetched full proof of the maximal-characterisation
  theorem is CUW §3.1–3.2, whose pointwise estimate (3.4) is cited there to
  Stein, *Harmonic Analysis*, p. 96, which was not fetched; (ii) the
  level-decomposition item must confirm at authoring time whether it follows
  the designed Stein III.2 route or the fetched DKKP Theorem 1 route, and whose
  declared dependencies match. Similarly, the vanishing-moments corollary is
  proved via the added Fourier-decay theorem rather than "atomic
  approximation"; its designed statement is preserved, so scope is unchanged.
- **Minor observation (no action required for scope).** No item states
  explicitly that $H^1$ is complete ("Banach"); the design's boundary
  obligation "the $p=1$ case is Banach" is realised only as norm (not
  quasi-norm) status plus the $p<1$ completeness remark. Completeness at
  $p=1$ follows from the atomic characterisation (bounded surjection from
  $\ell^1$) and is not needed by any planned consumer, whose density/extension
  arguments work in a normed space. Recorded for the owner's information only.

## Non-edits

No manifest, scaffold, prose, plan or owner record was edited. The only writes
are this report and the Step 3a review scope receipt for the A page.

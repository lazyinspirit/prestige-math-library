# frontier-28 · Beta · batch 5 scaffold notes

Run `frontier-28`, batch `5`, one A/B pair, category `functional-analysis`.
Author: Beta. Session date: Monday, August 31, 2026.

Design locations opened:

- [research/plan-functional-analysis-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-functional-analysis-track.md:362)
- [research/plan-functional-analysis-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-functional-analysis-track.md:2218)
- [research/frontier-28-alpha-step0-drift.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-alpha-step0-drift.md:25)

Artifacts owned by this batch:
`research/frontier-28-batch-5.pages.json`,
`research/frontier-28-batch-5.coverage.json`,
and this file.

No plan structure, workflow state, published content, or another batch artifact
was edited.

---

## 1. Shape and split check

- `bounded-linear-operators-and-quotient-spaces` (A): **26 items**
- `bounded-linear-operators-and-quotient-spaces-examples` (B): **8 items**

The A page stays well below the `60`-item split ceiling, so no split is
proposed.

High-level shape kept from the design:

- bounded linear operators, their continuity and norm package first;
- then the dense-extension theorem and bounded bilinear maps;
- then the quotient norm, quotient completeness, and normed factorization;
- finally complemented subspaces, bounded-below operators, and the left/right
  inverse criteria.

The B page remains a worked companion rather than a second theorem page:
coordinate maps, shifts, evaluation, unbounded differentiation, quotient-norm
computations, the nonproximinal closed-subspace witness, and the Hamel-basis
algebraic-complement warning.

## 2. Design control, drift, and local mathematical repairs

### No page-level drift

- The design row and `research/plan-spec.json` agree on order `288.049`,
  companion order `288.05`, category, title, and declared page prerequisite
  `normed-and-banach-spaces-examples`.
- [research/frontier-28-alpha-step0-drift.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-28-alpha-step0-drift.md:25)
  already records `VERDICT: no-drift` for this page.
- I therefore left the page-level `requires` list exactly as the live spec
  states it.

### Local repair 1: item 23 is stated in the Banach-codomain form

The FA-2 design line for item 23 says:

- “for a bounded operator from a Banach space, bounded below is equivalent to
  injectivity plus closed range, via bounded inverse on the range.”

As written without a Banach codomain, that statement is too weak for the
source-backed proof route: the inverse-on-the-range argument needs the range to
be Banach in its inherited norm, and items 25-26 then use this theorem on
bounded bijections between Banach spaces.

I therefore tightened only the item title, not the page order or page-level
prerequisite:

- `thm-bounded-below-iff-injective-with-closed-range` now reads “for a bounded
  operator **between Banach spaces** ...”.

This is a local mathematical repair to keep the scaffold true and to supply the
later right/left inverse items honestly; it is not a design-vs-spec drift
adjudication.

### Local repair 2: the item-23 converse is kept dependency-closed

The design and Brezis source route prove item 23 through bounded inverse / open
mapping ideas that are later packaged globally on FA-6. A direct forward edge
to FA-6 would fail the scaffold contract.

To keep FA-2 closed without smuggling a later theorem into a definition:

- item 23 depends on the already-published
  `thm-baire-category-for-complete-metric-spaces`;
- its strategy records a **local** inverse-on-the-range proof for the Banach
  range, instead of citing FA-6 forward;
- items 25 and 26 then use item 23 rather than an illegal later dependency.

This preserves the design’s route while keeping the item DAG acyclic on the
current plan.

### Local repair 3: quotient proofs keep the epsilon-minimizer route

The design warns against “choose a nearest point” arguments. The scaffold keeps
that warning visible in the manifest:

- representative independence and the triangle inequality are separate items;
- `thm-quotient-map-is-open` uses epsilon-minimizers rather than proximinality;
- `thm-quotient-of-banach-by-closed-subspace-is-banach` uses the design’s
  rapidly Cauchy subsequence plus summable lifted increments.

### Local repair 4: finite-dimensional complement claims stay deferred

The design explicitly says the finite-dimensional-complement theorem does not
belong here. Accordingly:

- Teschl’s Corollary 1.19 and Brezis’s finite-(co)dimension complement
  examples are **deferred** to
  `geometric-hahn-banach-and-convex-separation`;
- FA-2 only introduces complemented subspaces and the operator-theoretic
  projection/splitting criteria.

## 3. Source stack actually read

The A page carries the formal coverage harvest. Included rows may land on the A
page or on its B companion.

Recorded harvest sources:

1. Theo Buhler and Dietmar A. Salamon, *Functional Analysis*:
   `https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon`
2. Gerald Teschl, *Topics in Real and Functional Analysis*:
   `https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf`
3. Andrew Lin and Casey Rodriguez, MIT 18.102, *Introduction to Functional
   Analysis*:
   `https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf`
4. Haim Brezis, *Functional Analysis, Sobolev Spaces and Partial Differential
   Equations*:
   `https://math.jhu.edu/~sire/brezis.pdf`

All four were opened through the web reader on Monday, August 31, 2026.

### Source repair and provenance

The design’s canonical Bühler-Salamon URL is the ETH host:

- `https://people.math.ethz.ch/~salamon/PREPRINTS/funcana.pdf`

That exact URL was not reader-openable in this session. Under the
recover-before-replace rule, I reopened the same text through the live Scribd
HTML view and preserved the ETH URL as `original_url` in coverage rather than
pretending the original fetch had succeeded.

### Supplemental B-page source check

The design says the B-page item
`cex-a-closed-subspace-need-not-have-a-best-approximation` is included only
after its construction is checked. I checked a concrete auxiliary witness at:

- `https://www.mathcounterexamples.net/distance-between-a-point-and-a-hyperplane-not-reached/`

The web-visible example is a closed hyperplane in `c_0` defined by the
continuous functional `u(x)=\sum 2^{-n}x_n`, together with a point whose
distance to that hyperplane is not attained. This auxiliary source is not part
of the A-page harvest ledger, but it is the reason the B-page counterexample
remains in the scaffold rather than being dropped as unverified.

## 4. What the harvested sources support

- Bühler-Salamon is the clearest textbook backing for the FA-2 core itself:
  bounded operators, the operator norm, the normed quotient factorization, and
  the Banach-space-of-operators theorem.
- Teschl gives the strongest open treatment for the dense-extension theorem,
  composition inequality, complemented-subspace vocabulary, quotient norm, and
  quotient completeness, with explicit problem statements that match the page’s
  examples and inverse-operator endpoints.
- MIT 18.102 independently backs the operator-space definitions, the operator
  norm as a norm, and the quotient/seminorm viewpoint in a concise lecture-note
  form.
- Brezis backs the complemented-subspace and right/left inverse equivalences,
  while also making explicit which surrounding theorems actually belong to the
  later Baire-principles page.

## 5. Dependency and proof-route choices

### Bounded operators

- The page distinguishes the operator definition, the continuity equivalence,
  the operator norm, the composition inequality, and the Banach theorem for
  `\mathcal B(X,Y)`.
- The dense-extension theorem is the design’s chosen `AC_omega` route: one
  approximating sequence per ambient point, independence proved afterwards.

### Quotients

- The algebraic quotient itself is not rebuilt; the local definition item cites
  the published quotient-vector-space construction and only fixes the normed
  notation.
- The quotient-norm package is explicitly split into representative
  independence, triangle inequality, definiteness versus closedness, openness of
  the quotient map, completeness of the quotient, and the normed universal
  property.
- The factorization theorem uses the published algebraic quotient universal
  property and then proves boundedness and norm equality in the normed setting.

### Complements and inverses

- Complemented subspaces are defined through a closed direct sum with bounded
  coordinate projections, and the projection characterization is kept separate.
- The bounded-below theorem is the bridge item that lets right and left inverse
  criteria close without forward references to FA-6.
- Neither a standalone open mapping theorem nor a standalone bounded inverse
  theorem is minted here; those remain on FA-6, and the coverage rows defer
  them there explicitly.

## 6. Known limits and downstream caution

- The page does **not** prove the finite-dimensional complement theorem; FA-5
  still owns that Hahn-Banach-dependent result.
- The page does **not** turn separate continuity of bilinear maps into a theorem
  here. The design explicitly sends that Baire-dependent statement to FA-6.
- The quotient page does **not** assume best approximations exist in closed
  subspaces. The B-page nonproximinal witness is included precisely to guard
  against that mistake.
- The Hamel-basis algebraic-complement counterexample is intentionally
  non-load-bearing and choice-tagged. It is a boundary witness, not a reusable
  dependency.

## 7. Run-state note

The on-disk autopilot status command still reports `frontier-23` as the live
run under `.autopilot/`, while the `frontier-28` task, scope, and dispatch
artifacts are present on disk as generated research files. I treated the
generated `frontier-28` batch task as authoritative for this turn and did not
touch `.autopilot/` or any workflow-state file.

## 8. Validator results

Commands run on Monday, August 31, 2026:

- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-5.pages.json`
- `node tools/validate-plan.mjs research/plan-spec.json`
- `node tools/coverage-checklist.mjs research/frontier-28-batch-5.coverage.json --require-destination`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-5.coverage.json --stamp`
- `node tools/url-sweep.mjs --coverage research/frontier-28-batch-5.coverage.json --out /tmp/frontier-28-batch-5-url-liveness.json --recover --fail-on-dead`
- `git diff --check -- research/frontier-28-batch-5.pages.json research/frontier-28-batch-5.coverage.json research/frontier-28-batch-5.notes.md`

Results are recorded after the final validator pass below.

- `content-policy --manifest-only` on the batch manifest:
  `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`
- `validate-plan` on `research/plan-spec.json`:
  passed on the current plan bytes. The final summary was:

  ```text
  OK — declared page order is acyclic and consistent; no item-level cycles, forward
  references, B-page dependencies, or unresolved ids among the 622 page(s) with item lists.
  NOTE: 671 planned page(s) carry no item list yet (marked * above). Their reading
  order is guaranteed; their item dependencies are not yet asserted, so re-run this
  after writing each page's items.
  ```

- `coverage-checklist`:
  `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`
- `content-policy --manifest-only research/frontier-28-batch-*.pages.json`:
  `content-policy: 217 scoped item(s), 0 error(s), 0 warning(s)`
- `source-fetch-check --stamp`:

## Step-5 authoring

Authoring completed on Tuesday, September 1, 2026 for the batch-5 pair:

- A page: `bounded-linear-operators-and-quotient-spaces`
- B page: `bounded-linear-operators-and-quotient-spaces-examples`

Authored item ids:

- A-page definitions: `def-bounded-linear-operator`, `def-operator-norm`, `def-space-of-bounded-linear-operators`, `def-topological-isomorphism-of-normed-spaces`, `def-bounded-bilinear-map`, `def-quotient-vector-space-coset-notation`, `def-quotient-seminorm`, `def-complemented-subspace`, `def-bounded-below-operator`, `def-bounded-left-and-right-inverses`
- A-page proof-bearing items: `thm-bounded-linear-operator-equivalences`, `lem-operator-norm-is-a-norm`, `lem-composition-operator-norm-inequality`, `thm-bounded-operator-space-is-banach`, `thm-extension-of-a-bounded-map-from-a-dense-subspace`, `thm-bounded-bilinear-map-equivalences`, `lem-quotient-seminorm-is-representative-independent`, `lem-quotient-seminorm-triangle-inequality`, `thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed`, `thm-quotient-map-is-open`, `thm-quotient-of-banach-by-closed-subspace-is-banach`, `thm-universal-property-of-the-normed-quotient`, `thm-complemented-subspace-iff-range-of-a-bounded-projection`, `thm-bounded-below-iff-injective-with-closed-range`, `thm-bounded-right-inverse-iff-kernel-is-complemented`, `thm-bounded-left-inverse-iff-range-is-complemented`
- B-page items: `ex-coordinate-projections-and-inclusions-on-product-banach-spaces`, `ex-shift-operators-on-classical-sequence-spaces`, `ex-evaluation-functional-on-c-of-k`, `ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm`, `ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm`, `ex-c-mod-constants-and-oscillation-norm`, `cex-a-closed-subspace-need-not-have-a-best-approximation`, `cex-an-algebraic-complement-need-not-be-topological`

Provenance rationale:

- The page-level statements and example choices are literature-derived from the batch-5 source stack already harvested in `research/frontier-28-batch-5.coverage.json`.
- Proof fields are `ai-generated` where I wrote the local proofs or verifications from the harvested route; the one local statement retagged `ai-altered` is `thm-bounded-below-iff-injective-with-closed-range`, because the batch notes had already narrowed the scaffold from “from a Banach space” to the Banach-to-Banach form actually justified by the proof route.
- `def-quotient-seminorm` records its representative-independence obligation truthfully in `justified_by: [lem-quotient-seminorm-is-representative-independent]`.
- The two choice-sensitive items remain explicit about their costs: `thm-extension-of-a-bounded-map-from-a-dense-subspace` records the selected `AC_omega` approximation-sequence route in the proof text, and `cex-an-algebraic-complement-need-not-be-topological` is a non-load-bearing Hamel-basis witness.

Narrowed or dropped claims:

- No scoped item was dropped.
- The previously recorded local narrowing of `thm-bounded-below-iff-injective-with-closed-range` was preserved: the authored statement is for a bounded operator **between Banach spaces**, matching the actual inverse-on-the-range argument.
- The quotient proofs continue to avoid any “nearest point” claim; only infimum and epsilon-minimizer arguments were written.

Blockers:

- None in the owned batch scope.

Final checks run on the authored bytes:

- `node tools/tsx-run.mjs tools/precheck.mts items/thm-bounded-linear-operator-equivalences.md items/lem-operator-norm-is-a-norm.md items/lem-composition-operator-norm-inequality.md items/thm-bounded-operator-space-is-banach.md items/thm-extension-of-a-bounded-map-from-a-dense-subspace.md items/thm-bounded-bilinear-map-equivalences.md items/lem-quotient-seminorm-is-representative-independent.md items/lem-quotient-seminorm-triangle-inequality.md items/thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed.md items/thm-quotient-map-is-open.md items/thm-quotient-of-banach-by-closed-subspace-is-banach.md items/thm-universal-property-of-the-normed-quotient.md items/thm-complemented-subspace-iff-range-of-a-bounded-projection.md items/thm-bounded-below-iff-injective-with-closed-range.md items/thm-bounded-right-inverse-iff-kernel-is-complemented.md items/thm-bounded-left-inverse-iff-range-is-complemented.md items/ex-coordinate-projections-and-inclusions-on-product-banach-spaces.md items/ex-shift-operators-on-classical-sequence-spaces.md items/ex-evaluation-functional-on-c-of-k.md items/ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm.md items/ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm.md items/ex-c-mod-constants-and-oscillation-norm.md items/cex-a-closed-subspace-need-not-have-a-best-approximation.md items/cex-an-algebraic-complement-need-not-be-topological.md`
- Result: `24 checked, 0 failing — all clean`
- `node tools/content-policy.mjs research/frontier-28-batch-5.pages.json`
- Result: `content-policy: 34 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/validate-plan.mjs research/plan-spec.json`
- Result summary: `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 650 page(s) with item lists.`
- `node tools/proof-contract.mjs research/frontier-28-batch-5.proof-contracts.json --strict`
- Result: `proof-contract: 0 error(s), 0 warning(s), 24/24 item(s) checked`
- `git diff --check -- library/functional-analysis/bounded-linear-operators-and-quotient-spaces.md library/functional-analysis/bounded-linear-operators-and-quotient-spaces-examples.md items/def-bounded-linear-operator.md items/thm-bounded-linear-operator-equivalences.md items/def-operator-norm.md items/lem-operator-norm-is-a-norm.md items/lem-composition-operator-norm-inequality.md items/def-space-of-bounded-linear-operators.md items/thm-bounded-operator-space-is-banach.md items/thm-extension-of-a-bounded-map-from-a-dense-subspace.md items/def-topological-isomorphism-of-normed-spaces.md items/def-bounded-bilinear-map.md items/thm-bounded-bilinear-map-equivalences.md items/def-quotient-vector-space-coset-notation.md items/def-quotient-seminorm.md items/lem-quotient-seminorm-is-representative-independent.md items/lem-quotient-seminorm-triangle-inequality.md items/thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed.md items/thm-quotient-map-is-open.md items/thm-quotient-of-banach-by-closed-subspace-is-banach.md items/thm-universal-property-of-the-normed-quotient.md items/def-complemented-subspace.md items/thm-complemented-subspace-iff-range-of-a-bounded-projection.md items/def-bounded-below-operator.md items/thm-bounded-below-iff-injective-with-closed-range.md items/def-bounded-left-and-right-inverses.md items/thm-bounded-right-inverse-iff-kernel-is-complemented.md items/thm-bounded-left-inverse-iff-range-is-complemented.md items/ex-coordinate-projections-and-inclusions-on-product-banach-spaces.md items/ex-shift-operators-on-classical-sequence-spaces.md items/ex-evaluation-functional-on-c-of-k.md items/ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm.md items/ex-quotient-by-the-kernel-is-isometric-to-the-range-with-the-induced-quotient-norm.md items/ex-c-mod-constants-and-oscillation-norm.md items/cex-a-closed-subspace-need-not-have-a-best-approximation.md items/cex-an-algebraic-complement-need-not-be-topological.md research/frontier-28-batch-5.proof-contracts.json research/frontier-28-batch-5.notes.md`
- Result: passed with no whitespace or conflict-marker errors
  `source-fetch-check: 4/4 source(s) fetch-verified (0 newly stamped)`

The only red validator is `url-sweep`, and its failure is transport-level on
this runner rather than a harvested dead link in the web reader:

```text
url-sweep: 0/4 live; 4 failed; 0 recoverable from the archive; 0 suspect -> /tmp/frontier-28-batch-5-url-liveness.json
FAIL 0 https://math.jhu.edu/~sire/brezis.pdf — curl: (6) Could not resolve host: math.jhu.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf — curl: (6) Could not resolve host: ocw-preview.odl.mit.edu
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon — curl: (6) Could not resolve host: www.scribd.com
  no archived snapshot under any host variant — re-sourcing is justified here
FAIL 0 https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf — curl: (6) Could not resolve host: www.uomustansiriyah.edu.iq
  no archived snapshot under any host variant — re-sourcing is justified here
```

I kept the harvest and manifest as written because the same four texts were
successfully opened through the web reader earlier in this session and the
batch-local structural gates are green. I did not fabricate a shell liveness
result that the runner could not actually obtain.

- `git diff --check` on the three batch-owned artifacts was clean.

## Step-3 fix pass

On Tuesday, September 1, 2026 I re-read
`research/frontier-28-alpha-c-step3-scaffold-review.md` for the stable
Step-3 findings that apply to batch `5`, the FA-2 design block at
`research/plan-functional-analysis-track.md:360-411`, the downstream routing
blocks at `:525-620` and `:1248-1277`, the live `research/plan-spec.json`
entry for `bounded-linear-operators-and-quotient-spaces`, the current
batch-5 `pages` and `coverage` files, and the current batch-5 rows in
`research/frontier-28-alpha-c-scope-decisions.json`. I also re-opened the
four harvested texts for this batch through the web-research channel:
Buhler-Salamon through the Scribd recovery row behind the archived coverage
entry, plus the recorded Teschl, MIT, and Brezis URLs.

- Finding id: none for batch `5`
- Disposition: no scaffold change
- Evidence: the Alpha group `c` review marks
  `bounded-linear-operators-and-quotient-spaces` as `sufficient` and records
  no direct repair for batch `5`. The current scope register still closes the
  FA-2 boundary rows as `stands` on Tuesday, September 1, 2026: Teschl
  `Problem 1.34` still defers to
  `banach-algebras-spectrum-and-holomorphic-functional-calculus`; Brezis
  `Theorem 2.6`, `Corollary 2.7`, `Corollary 2.8`, and `Theorem 2.9` still
  defer to `the-baire-principles-of-functional-analysis`; and Teschl
  `Corollary 1.19` plus Brezis's finite-(co)dimension complement material
  still defer to `geometric-hahn-banach-and-convex-separation`.
- Changed scaffold record: none; `research/frontier-28-batch-5.pages.json`
  and `research/frontier-28-batch-5.coverage.json` remain unchanged on this
  fix pass, and this receipt is the only batch-5 artifact updated here.

Validator reruns on Tuesday, September 1, 2026:

- `node tools/coverage-checklist.mjs research/frontier-28-batch-5.coverage.json --require-destination`
  -> `coverage-checklist: 1 page(s), 44 harvested result(s), 0 error(s), 0 warning(s)`
- `node tools/content-policy.mjs --manifest-only research/frontier-28-batch-*.pages.json`
  -> `content-policy: 424 scoped item(s), 0 error(s), 0 warning(s)`
- `node tools/source-fetch-check.mjs --coverage research/frontier-28-batch-5.coverage.json`
  -> `source-fetch-check: 4/4 source(s) fetch-verified`
- `node tools/validate-plan.mjs research/plan-spec.json`
  -> passed with the standard terminal `OK` line and only the standing
  repository-wide `redundant-prereq` advisories

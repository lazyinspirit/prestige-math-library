# Step 3a scope review — `strongly-continuous-semigroups-and-hille-yosida`

- Run: `frontier-39-analysis-30`
- A page: `strongly-continuous-semigroups-and-hille-yosida` (order 458.043, `pde`, batch 17)
- B page: `strongly-continuous-semigroups-and-hille-yosida-examples` (order 458.044)
- Batches owned: 17 only; no other pair or shared batch file edited.
- The original inventory and gate counts below describe the initial scope-review
  baseline; the owner-approved enrichment and its pending receipt refresh are
  recorded at the end of this report.
- Decision: **sufficient** (complete design crosswalk, verified source coverage, resolved
  prerequisite closure, and a supported downstream role; non-scope observations only).
  Receipt: `research/frontier-39-analysis-30-step3a-review-strongly-continuous-semigroups-and-hille-yosida.json`.

## Inputs read

- Manifests `research/frontier-39-analysis-30-batch-17.pages.json` (A: 33 items, B: 9 items),
  `research/plan-spec.json` orders 458.043/458.044 (item lists still empty pre-splice),
  `research/frontier-39-analysis-30-batch-17.coverage.json` (100 harvested headings, 5 sources /
  9 page-source rows), `research/frontier-39-analysis-30-batch-17.notes.md`,
  `research/frontier-39-analysis-30-batch-17.cross-batch-dependencies.json` (6 rows: 1 page +
  5 item), and the run-level ledger `research/frontier-39-analysis-30-cross-batch-dependencies.json`.
- Prose design `research/plan-pde-track.md` PDE-23 (L2045–L2109), its additions table
  `#### PDE-23 additions` (L3761–L3774), the PDE-track seam notes, and
  `research/frontier-39-analysis-30-planning-notes.md` row 17.
- Alpha drift verdict for this page: **no-drift**
  (`research/frontier-39-analysis-30-alpha-step1-drift.md`, section
  `strongly-continuous-semigroups-and-hille-yosida`, L232–L243).
- Owner record: `research/frontier-39-analysis-30-step1-owner-resolution.md` entry 19
  (nine batch-17 repairs; the scope-relevant ones are reconciled below).
- Published suppliers opened where load-bearing: Bochner-integration items
  (`def-bochner-integrable-function`, the integrability criterion, norm inequality, dominated
  convergence, commutation with bounded maps, the simple-integral item), unbounded-operator
  vocabulary on the FA-21 side, `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`,
  `cor-weierstrass-approximation-on-the-unit-interval`, the unitary-group/Stone items, and
  `fs-translation-is-continuous-in-l-infinity`.
- Read-only checks rerun (exact outputs): `manifest-deps` 42/0; `coverage-checklist`
  2 pages / 100 results / 0 errors / 1 warning (B-page `coverage-low-yield`); `source-fetch-check`
  9/9 fetch-verified; `source-backing` 33 authored results, all still backed; `item-dependency-levels`
  whole run 899 items, no cycle; `content-policy` whole run 899 items, 0/0; direct dependency
  scan of the 42 items: exactly the five declared cross-batch item edges, no others.

## Design crosswalk (scope vs prose plan)

- A page: **21/21** design items present with matching IDs and kinds — `def-strongly-continuous-semigroup`,
  `lem-strong-continuity-at-zero-implies-orbit-continuity`, `thm-exponential-bound-for-a-c-zero-semigroup`,
  `def-infinitesimal-generator-of-a-c-zero-semigroup`, `lem-semigroup-generator-commutes-with-orbits-on-its-domain`,
  `lem-integrated-semigroup-orbits-belong-to-the-generator-domain`, `thm-generators-are-closed-and-densely-defined`,
  `def-resolvent-of-a-closed-operator`, `thm-laplace-transform-formula-for-the-semigroup-resolvent`,
  `cor-resolvent-power-estimates-for-semigroup-generators`, `def-yosida-approximants`,
  `lem-yosida-approximants-are-bounded-and-converge-on-the-domain`, `thm-hille-yosida-generation-theorem`,
  `cor-contraction-hille-yosida-theorem`, `def-dissipative-operator`, `thm-lumer-phillips-generation-theorem`,
  `def-classical-strong-and-mild-abstract-cauchy-solutions`,
  `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`, `thm-variation-of-constants-formula`,
  `rem-semigroup-sign-and-generator-conventions`,
  `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class`.
- A additions: **7/7** present (`lem-a-c-zero-semigroup-is-uniformly-bounded-on-every-compact-time-interval`,
  `lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity`,
  `lem-yosida-resolvent-converges-strongly-to-the-identity`,
  `thm-bounded-yosida-semigroups-converge-to-the-generated-semigroup`,
  `lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`,
  `cor-closed-invariant-subspace-restriction-is-a-c-zero-semigroup`,
  `lem-variation-of-constants-integral-is-continuous-for-lone-time-forcing`).
- B page: **6/6** design items plus **3/3** additions present (bounded-operator exponential, right
  translation on `L^p` with weak-derivative generator and domain, multiplication semigroup,
  Dirichlet heat from the Laplacian, strong-vs-norm-continuity counterexample, mild-not-classical
  counterexample, `L^infinity` translation endpoint counterexample, the right-differentiability
  criterion, and the unbounded-generator/norm-continuity corollary).
- Plus **5** disclosed local prerequisites, each at its consumer's use point and each justified
  against disk: `lem-linearity-of-the-bochner-integral` (the published Bochner page states the
  definition, criterion, norm inequality and dominated convergence but no linearity item — confirmed
  by scanning `items/`); `lem-average-convergence-of-a-continuous-banach-valued-function`,
  `lem-mean-value-inequality-for-a-differentiable-banach-valued-curve` and
  `lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves` (Teschl §11.1
  evolution-specific consequences, exactly as the design's harvest row plans);
  `lem-exponential-series-of-a-bounded-operator` (the design assumes "published exponential-series
  results" that do not exist for a bounded operator — no published item defines `e^{tA}`).
- Design conventions and obligations are kept: one-sided generator limits; `u'=Au` with the sign
  dictionary in `rem-semigroup-sign-and-generator-conventions`; the real half-line Hille–Yosida
  with **all** resolvent powers; the contraction shortcut isolated in
  `cor-contraction-hille-yosida-theorem`; the complex half-plane noted there for complex scalars;
  Bochner integrability supplied by the published FA-12 items; the sufficiency route is the
  design's own `e^{tA_lambda}` construction (Yosida approximants, uniform estimate, Cauchy limit,
  closedness); Laplace uniqueness is a proved local theorem, not an assumed transform theorem;
  the translation example is finite-`p` with its weak-derivative domain stated.
- Reconciled design conflicts (recorded by the scaffold writer, no scope claim weakened):
  plan-spec declares a single generated page `requires` edge; the design's assumed published
  exponential-series results are absent and are minted locally; `stone-weierstrass-general` is
  replaced by the sharper published `cor-weierstrass-approximation-on-the-unit-interval`; the
  named Banach fixed-point input is unused because no spine proof is a fixed-point argument.

## Source coverage

- Five source entries back the pair ([EN] Engel–Nagel I.5 / II.1–II.3 / II.6; [T] Teschl
  §§11.1–11.4; [J] Johnson §§1–3, §5; [B] Brezis Ch. 7; [SN] Schnaubelt Ch. 1 §§1.1–1.4);
  `source-fetch-check` reports 9/9 page-source rows fetch-verified and 9/9 resolved.
- 100 harvested headings are dispositioned 55 `included`, 21 `inline`, 20 `out-of-scope`,
  4 `deferred`. Every decline carries a written reason; the four deferrals name the
  `analytic-semigroups-and-linear-evolution-equations` destination (batch 18), which scaffolds
  the deferred sectorial/contour/smoothing, parabolic-regularity and self-adjoint-generation
  material (batch-18 manifest: 27 A + 9 B items, `requires` this pair). All 42 scaffold items
  carry provenance and source locators.
- The B-page `coverage-low-yield` warning (5/17 scaffolded) is confirmed as explained: the
  declines are the analytic/parabolic material deferred to PDE-24, the hyperbolic/wave
  realisations owned by the published wave pages, the nonlinear/NLS methods outside the linear
  remit, the `C_0(Omega)` multiplication variant, and the boundary/interface operator examples
  for later PDE pages. None of these is promised by the PDE-23 design lists, and none is
  consumed by a pair item.
- `source-backing` confirms every authored A-page result remains backed by an openable source or
  a documented alternative argument (the minted calculus items are the documented alternatives).

## Intended role in the library

- The pair is the PDE track's `C_0`/Hille–Yosida gateway: definitions, generator and resolvent
  theory, the generation theorems, and the classical/mild solution theory, as designed.
- Downstream consumers are supported: the batch-18 `analytic-semigroups-and-linear-evolution-equations`
  page declares `requires: [strongly-continuous-semigroups-and-hille-yosida]` and its 66
  item-level dependency edges (across 22 of its items) into this pair all resolve to present
  items (generator, resolvent, Laplace formula, Bochner linearity, average convergence, domain
  invariance, closedness/density, C0 and exponential-bound items, dissipativity and
  Lumer–Phillips). No other current-frontier pair consumes this pair.
- Seams with published content are coherent: the published Stone/unitary-group route
  (`def-strongly-continuous-one-parameter-unitary-group` and
  `cex-strongly-continuous-unitary-group-need-not-be-norm-continuous`) uses the same generator
  sign convention; the recorded overlap of the `L^infinity` translation counterexample with
  `fs-translation-is-continuous-in-l-infinity` stands; the B-page strong-vs-norm counterexample
  also overlaps conceptually with the published unitary-group counterexample (different
  operator/space) — a splice cross-reference matter, not a scope conflict.

## Prerequisite audit (unmet-prerequisite duty)

- Transitive closure of the 42 pair items: 1658 nodes = 1588 published item files + 70 in-run
  scaffold items (42 batch 17, 12 batch 11, 11 batch 10, 4 batch 9, 1 batch 4), **0 missing IDs**.
  No `[[...]]` reference in any statement or strategy of the pair is absent from both the
  manifests and `items/`.
- Direct cross-batch edges are exactly the five declared rows, all to in-run drafts, and each
  supplier exists with the required claim: the batch-11 `def-ltwo-operator-associated-with-a-symmetric-elliptic-form`,
  `lem-associated-elliptic-operator-is-densely-defined-symmetric-and-lower-bounded`,
  `thm-symmetric-elliptic-form-operator-is-self-adjoint-with-compact-resolvent` and
  `thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator`, and the batch-4
  `thm-poincare-inequality-for-w-one-p-zero` — the last supplies the coercivity constant needed
  for `lambda_1 > 0` and `I + L` bijectivity in the heat example.
- The A page's declared page prerequisite `constrained-variational-problems-and-variational-inequalities`
  is a plan-spec-generated ordering edge (the generation chains the PDE pages in their planned
  order); no item in the pair consumes it, and the drift verdict says no further page edge is
  needed. It is a Step-4 splice/declaration matter, not an unmet prerequisite: both pages are
  in-run drafts.
- No prerequisite claim was found that is absent from both the published library and the current
  scaffold for this pair.

## Non-scope observations for authoring (do not change this verdict)

1. **Two LaTeX artefacts in scope-hash-bearing text.** The statement of
   `thm-uniqueness-of-the-scalar-laplace-transform-in-the-exponential-growth-class` contains a
   literal `\n` before `\le` (`$|f(t)|\n\le Ce^{\sigma t}$`); four further occurrences sit in
   strategies (`lem-laplace-transform-uniqueness-identifies-two-exponentially-bounded-semigroups`,
   `ex-multiplication-semigroup-and-its-generator`, `cor-a-semigroup-with-unbounded-generator-cannot-be-operator-norm-continuous-at-zero` twice).
   The statement of the B item
   `thm-semigroup-orbit-is-right-differentiable-at-zero-if-and-only-if-the-vector-is-in-the-generator-domain`
   has an unclosed `$(A,D(A))` (odd dollar count; the `$` before `([[` is missing). Fixing
   statement text changes `scopeHash` under `tools/step3-decisions.mjs`; if the owner wants these
   repaired, the resulting scope must be re-decided and the scope receipt re-recorded.
2. **Sharpness clause.** Resolved by the owner-approved enrichment below: the B page now has a
   locally computed two-dimensional maximum-norm example showing that the first resolvent
   estimate can hold while the second-power estimate and the prescribed semigroup bound fail.
   Engel–Nagel Example II.3.2 remains the source motivation; its separate operator is not
   reproduced.
3. **Wording caveat on the single-power shortcut.** "The first power alone is sufficient exactly
   in the contraction case" should be read as the `M = 1` case: for `M = 1` with any `omega` the
   estimate reduces to the contraction case by the exponential rescaling `A -> A - omega I`, while
   for `M > 1` the single-power estimate does not imply generation in general. Authoring may wish
   to align the clause with `cor-contraction-hille-yosida-theorem`.
4. The choice/axiom declarations are honest and propagated (`ex-multiplication-semigroup-and-its-generator`
   declares Countable Choice; `ex-dirichlet-heat-semigroup-from-the-laplacian` declares AC and
   Countable Choice from its batch-11 suppliers; the main spine is choice-free apart from the
   declared Hahn–Banach uses).

## Closure evidence

- `manifest-deps`: "42 item(s), 0 normalized, 0 error(s)".
- `coverage-checklist --require-destination`: "2 page(s), 100 harvested result(s), 0 error(s),
  1 warning(s)" — the warning is the confirmed B-page low-yield decline set.
- `source-fetch-check`: "9/9 source(s) fetch-verified". `source-backing --require-verified`:
  "33 authored result(s) ... every one still backed".
- `item-dependency-levels check --run frontier-39-analysis-30`: 899 items, no cycle;
  `content-policy --manifest-only` over all run manifests: 899 items, 0 errors, 0 warnings.
- Cross-batch comparison: 6 expected rows (1 page + 5 item) and 6 actual; no stale or missing row.

## Decision

`sufficient` recorded via `tools/step3-decisions.mjs record-scope` for the A page, citing the
complete 21+7+6+3 design crosswalk, the verified 100-heading source coverage with reasoned
declines and PDE-24 destinations, the resolved downstream role for batch 18, and the 0-missing
transitive closure of all 42 items, with this report as the evidence artifact.

## Owner-approved enrichment — 2026-10-05

The owner approved adding `cex-first-resolvent-estimate-does-not-give-hille-yosida-bound` to the
companion B page. It uses $X=\mathbb C^2$ with the maximum norm and
$A=\begin{pmatrix}-1&4\\0&-1\end{pmatrix}$, with $M=25/16$ and $\omega=0$. For every
$\lambda>0$, the direct resolvent calculation gives
$\lambda\|R(\lambda,A)\|_\infty=5x-4x^2\le25/16$, where $x=\lambda/(\lambda+1)$. At
$\lambda=3$, however, $\|R(3,A)^2\|_\infty=27/144>25/144=M/3^2$. The explicit semigroup
$e^{tA}=e^{-t}\begin{pmatrix}1&4t\\0&1\end{pmatrix}$ also has
$\|e^{A/2}\|_\infty=3e^{-1/2}>25/16$. This independently computed witness supplies the
sharpness support for the existing statement that the general Hille–Yosida criterion requires
all resolvent powers. It does not challenge the $M=1$ contraction shortcut.

The B-page manifest now has 10 items (43 total in batch 17), the EN Example II.3.2 coverage row
is mapped to the local witness on the B page, and the proof-contract inventory includes the new
calculation. The coverage total remains 100 harvested rows; the disposition totals are now 56
included, 21 inline, 19 out of scope and 4 deferred. The earlier gate counts and 42-item closure
figures in this report are historical pre-enrichment results; no gates or tests were run for this
addition. The prior scope receipt covers the pre-enrichment bytes and is not renewed here. The
owner will review the updated scope and record the current receipt after this handoff.

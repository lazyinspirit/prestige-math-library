# Batch 17 notes — `em-wave-equation-prerequisites` / `-examples`

Run `physics-em-sr-40-2026-10-08`, role beta, Step 1 scaffold construction, 2026-10-09.
Scope: exactly one A/B pair, A page order **311**, B page order **312**, category
`classical-electromagnetism-mathematics`, library `mathematics`. Final inventory:
**2 A items + 1 B item**, all three recorded `ready` with current dependency
hashes. No item file, page, plan, published item, engine state or verdict was
edited. Files written: the batch manifest, coverage, cross-batch input, the three
`step1-*` readiness records, the tool-refreshed unified ledger, and this note.
The binding owner direction `research/physics-em-sr-40-2026-10-08-owner-authoring-direction.md`
and the Step-1 drift report `research/physics-em-sr-40-2026-10-08-alpha-step1-drift.md`
(whose `em-wave-equation-prerequisites` verdict is `no-drift`) were read first,
together with `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the plan section
`research/plan-classical-electromagnetism-track.md` L516–L562 and
`research/plan-spec.json`.

## Design vs plan, and the conflicts recorded

- Page metadata agrees exactly with `plan-spec.json` entries 311/312: ids, kinds,
  orders, category, library `mathematics`, titles, companion links and
  `requires: ["em-expanded-analysis-prerequisites"]` (and the B page requiring the
  A page). **No page-metadata conflict.**
- The design reservation for this pair declares `A_item_count: 1`
  (`thm-em-wave-cauchy-kirchhoff`) and `B_item_count: 0`. The engine, however,
  requires every scaffolded page, B pages included, to carry a nonempty item
  inventory (`scaffoldArtifacts` and `step1-decisions check` both fail on an empty
  page: "Empty scaffold inventory"). Two consequences, both deliberate and
  recorded rather than silent:
  1. **A local prerequisite was added** on the A page:
     `lem-em-spherical-mean-family-smoothness`. It is the joint
     `C^∞`-in-`(x,s,v)` smoothness of the spherical-mean family of a smooth
     spacetime function, with the differentiated-integral formula. The design's
     W2 proof uses this step silently ("each integral is over a compact
     interval/sphere, so every finite derivative is justified by uniform
     bounds"); it is the only ingredient of the source term for which no published
     statement exists for the *family* (the published
     `lem-spherical-means-of-smooth-data-are-smooth` covers one fixed datum only),
     so it is a genuine, not a padding, prerequisite. It is placed before its
     consumer and carries a complete local branch argument.
  2. **A new B example was constructed** on page 312:
     `ex-em-wave-equation-prerequisites-source-and-support-boundaries`. The
     promised example `ex-em-wave-equation-prerequisites-hypothesis-boundaries`
     exists in the exact source inventory, but the current design homes it on
     **`em-retarded-point-prerequisites-examples` (order 324)**, together with
     `thm-em-retarded-root-and-fields` (order 323); it is therefore **not moved,
     duplicated or re-homed here**, and it must be scaffolded by the page-324
     batch in dependency order. Page 312 receives instead a locally constructed,
     source-grounded example with a stable new ID and a complete verification
     strategy: (i) the spatially constant source `h = 1` gives the nonzero
     spatially constant solution `u = c^2 t^2 / 2`, so clause (d)'s compact-support
     hypothesis cannot be dropped; (ii) a source supported in the closed unit
     ball propagates with the explicit bound `|x| > 1 + c(t−t_0)`; (iii) the
     linear velocity datum `b(x) = x_1` gives `u = (t−t_0) x_1`, a smooth
     non-decaying solution whose total energy is `+∞` for `t ≠ t_0` (box bound
     `≥ (4/3) R^5`), so the finite-initial-energy hypothesis of the published
     energy-uniqueness corollary fails while the theorem's local uniqueness still
     applies. No promised claim is dropped.
- The design's `dependency_level` labels follow the design's own convention; the
  labels here are the tool's whole-run in-run labels. Recomputed values:
  `lem-em-spherical-mean-family-smoothness` **1**, `thm-em-wave-cauchy-kirchhoff`
  **2** (equal to the design's declared 2), and the B example **3**.
- **Dep-list corrections for `thm-em-wave-cauchy-kirchhoff`** (design block vs
  actual use, each read against the supplier's statement and proof):
  - **Dropped** `thm-distributional-differentiation-is-continuous-and-commutes`.
    The completed smooth branch of W2 never enters distribution theory: the
    statement concerns `C^∞` data and the classical operator
    `W = c^{-2}∂_t² − Δ`, and every differentiation of the argument is a
    classical parameter differentiation. The distributional edge belongs to the
    separately homed `lem-em-retarded-wave-kernel` (order 321), which is where
    `def-distributional-derivative` is consumed. Dropping an unused dep does not
    weaken a claim.
  - **Kept**: `def-ck-euclidean-maps-and-diffeomorphisms`,
    `def-euclidean-inner-product`, `thm-algebra-of-derivatives`,
    `thm-chain-rule-for-total-derivatives`, `lem-em-parameter-integrals`,
    `lem-em-spherical-mean-wave-identity`.
  - **Added** because the recorded proof actually consumes them (each read in
    full for statement, hypotheses, direction and axiom strength):
    `lem-derivative-of-an-integral-with-moving-endpoints` (the two
    `t`-differentiations of `∫_{t_0}^t H(x,t,v) dv`),
    `def-laplacian-of-a-c2-function`, `thm-clairaut-schwarz-mixed-partials`
    (commutation `∂_s ∘ Δ`), `def-wave-equation-cauchy-data-and-wave-speed`
    (the `□_c = c² W` normalisation), `thm-domain-of-dependence-and-local-uniqueness`
    (uniqueness and domain of dependence; used with the zero solution as the
    comparison object), `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`
    (the cone and base-ball vocabulary), `thm-heine-borel-rn` (boundedness of the
    compact data supports and compactness of the closed ball in clause (d)), and
    `def-countable-choice` (`AC_ω`, declared and used through the suppliers).

## The imported published wave development (key finding)

The pinned import `research/math-imports.json` contains a complete, published,
independently judged wave-equation development (`pipeline_run frontier-39-analysis-30`,
judge stamp 2026-10-06), byte-identical on disk (spot-checked hashes match the pin,
e.g. `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`
`1445f134…`). The relevant items — `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`,
`thm-wave-duhamel-principle`, `cor-energy-uniqueness-for-the-wave-cauchy-problem`,
`thm-finite-propagation-speed-for-the-wave-equation`,
`thm-domain-of-dependence-and-local-uniqueness`,
`lem-derivative-of-an-integral-with-moving-endpoints`,
`def-spherical-mean-of-space-dependent-data`,
`lem-spherical-means-of-smooth-data-are-smooth`,
`lem-euler-poisson-darboux-equation-for-spherical-means`,
`lem-ball-and-sphere-mean-radial-identity`, `def-wave-equation-cauchy-data-and-wave-speed`
and the auxiliary compactness/measure items — are read-only suppliers for this
page. This changes the proof route in one substantive way, recorded here:

- **Uniqueness and domain of dependence** now route through the published
  `thm-domain-of-dependence-and-local-uniqueness` (the two-solution local form of
  the shrinking-ball energy argument that the design's W2 prose carries). This is
  a strengthening of the *support*, not a weakening of the claim: the published
  theorem keeps the local, finite-energy-free argument, and the theorem's clauses
  (b) and (c) are exactly its conclusion after the time shift `t ↦ t − t_0`
  (the published statement is anchored at `t = 0`, `t_0 > 0`). The design's
  inline energy computation is therefore not reproduced; the theorem statement
  keeps every promised clause unchanged.
- The homogeneous part is still derived from `lem-em-spherical-mean-wave-identity`
  (batch 16) rather than from the published Kirchhoff formula, because the exact
  `H_φ(x,s) = s M_{cs} φ(x)` packaging is the interface the rest of the EM track
  consumes; the published Kirchhoff/Duhamel items were read and their statements
  matched to the same mathematics (see the coverage harvest rows).
- **Normalisation checked twice.** With `W = c^{-2} ∂_t² − Δ` one has
  `□_c = c² W`; the source term of W2 is `c² ∫_{t_0}^t H_{h(·,v)}(x, t−v) dv`,
  which is exactly the two-source Duhamel integral
  `∫_0^t (t−s) M_{c(t−s)} f(·,s)(x) ds` with `f = c² h` applied to
  `□_c u = f`. Teschl Corollary 7.3 and Ivrii (9.1.11)–(9.1.12) both compute
  this with the Leibniz rule, with **no spatial compact-support hypothesis** —
  the published `thm-wave-duhamel-principle` is the compactly supported
  special case, which is why the general smooth source is proved here.

## Dependency verification (actual uses, not declared edges)

All dep targets resolve: the in-run suppliers are scaffolded and recorded ready
(`lem-em-parameter-integrals`, batch 13, level 0; `lem-em-spherical-mean-wave-identity`,
batch 16, level 1; `lem-em-spherical-mean-family-smoothness`, this batch, level 1),
and all published suppliers are pinned imports with `status: published`.
Statements and hypotheses were read for: the moving-endpoints lemma (open interval,
`C¹` endpoints, `C¹` integrand — satisfied at fixed `x` by the joint smoothness of
`(t,v) ↦ H(x,t,v)` near the closed triangle); the local-uniqueness theorem (two
`C²` solutions on a neighbourhood of the closed cone, equal data on the base ball,
equal source on the cone — satisfied by `w = u − v` against the zero solution);
the spherical-mean identity (identities on `t ≥ 0`, extended to `t = 0` by the
signed compact integral); and the parameter-integral lemma (compact integration
sets only — the sphere `S²` and the fixed interval `[t_0, t_0+δ]`; no moving set is
used). No missing, circular, forward or inadequate dependency was found; the
`dependency_level` labels are the tool's `item-dependency-levels` values.
`AC_ω` is declared in both A items and in the example, and its exact uses
(surface integrals, parameter differentiation, the published wave suppliers) are
identified.

Two cross-batch truths worth recording for downstream batches: the promised
page-324 example depends on `thm-em-retarded-root-and-fields` (order 323) *and*
on this batch's `thm-em-wave-cauchy-kirchhoff` (order 311), which is fine on a B
page at order 324; and the paper design's dependency on
`thm-distributional-differentiation-is-continuous-and-commutes` for
`thm-em-wave-cauchy-kirchhoff` should not be reintroduced by those consumers.

## Sources (two independent treatments, books)

1. Gerald Teschl, *Partial Differential Equations: From Classical to Modern*
   (2025 archived author manuscript, AMS Graduate Studies in Mathematics),
   <https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf>,
   §7.1 (printed pp. 166–172), §7.2 (printed pp. 172–176), §7.3 (printed
   pp. 176–178), read in full for the listed named results: Kirchhoff formula
   (7.10) and Theorem 7.2; Corollary 7.3 (Duhamel, (7.11)–(7.13)); retarded
   potential (7.13); spherical means (7.16) and Euler–Poisson–Darboux (7.17);
   Lemma 7.6 and Theorems 7.7–7.8; Corollary 7.9; Lemma 7.10, Theorems 7.11–7.12,
   Corollary 7.13, plus the exercise blocks disposed of in the coverage file.
2. Victor Ivrii, *Partial Differential Equations* (University of Toronto, 2018,
   CC BY-SA),
   <https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf>,
   §9.1.1–§9.1.4 (printed pp. 281–288) and §9.2.1–§9.2.3 (printed pp. 288–292),
   read in full for the listed named results: (9.1.4), (9.1.8)–(9.1.10),
   Definition 9.1.1 (9.1.14), Remarks 9.1.2–9.1.3, Duhamel (9.1.11) and Kirchhoff
   with source (9.1.12), retarded potential (9.1.13), the local energy identity
   (9.2.1)–(9.2.3), Proposition 9.2.1, Theorems 9.2.2–9.2.3, and the IBVP
   subsection disposed of as out of scope.

Harvest: 27 rows over the two sources plus two page-level `canonical` rows
(the family-smoothness prerequisite and the `c²`-normalised Duhamel computation),
each with an explicit disposition: 1 `included`, 4 `inline` (all naming
`thm-em-wave-cauchy-kirchhoff` or the local-uniqueness supplier whose proof
absorbs the result), 17 `already-published` (naming the pinned imported item),
2 `deferred` (both to `em-causal-wave-kernel-prerequisites` for the retarded
kernel/convolution), and 5 `out-of-scope` with individual reasons. The single
`coverage-low-yield` warning (1/27 `included`) is expected on an A page whose
mathematics is already published: 22 of the 27 rows are `already-published`,
`inline` or `deferred`, and every one is disposed of explicitly.

## Checks run (actual results, 2026-10-09)

- `manifest-deps` (whole run): 155 items, 0 missing, 0 errors.
- `content-policy --manifest-only` (whole run): **155 scoped items, 0 errors,
  0 warnings**.
- `item-dependency-levels check --run`: no label, dep-shape or cycle error in any
  batch; the only errors are `empty scaffold inventory` for the batches not yet
  scaffolded at the time of the run. All three new labels equal the computed
  whole-run levels (1, 2, 3).
- `step1-decisions check --run` (after recording): 155/155 declared run items
  ready; **none of this batch's items or pages outstanding**. The residual work
  list is exactly the not-yet-scaffolded empty future pages of sibling batches.
- `coverage-checklist --require-destination`: 1 page, 27 harvested results,
  0 errors, 1 low-yield warning (explained above).
- `source-fetch-check --stamp`: 2/2 sources fetch-verified (both newly stamped);
  check mode 2/2 resolved, 0 drops. `url-sweep --coverage … --recover`: 2/2 live,
  0 failed, 0 recoverable (output in `/tmp`, not engine state).
- `extcheck --quiet`: exit 0 ("every recorded-not-proved statement is a cited
  remark with no proof, and every consequence is marked").
- `manifest-integrity --run`: 80 pages owed, 80 in the manifests, no scope drift.
- `validate-plan research/plan-spec.json` (page level): exit 0, with the usual
  note that 578 planned pages carry no item list yet.
- `validate-plan research/plan-spec.json --run physics-em-sr-40-2026-10-08`:
  **FAIL**, exit 1 — 33 `undeclared-prereq` errors run-wide, of which exactly
  **three** are on this batch's pages: two on page 311 and one on page 312, all
  naming published supplier home pages absent from the plan. See the escalation
  below; also 10 `redundant-prereq` warnings run-wide (none introduced by this
  batch).
- `frontier-item-gate --run … --tool extcheck -- --manifest-only`: cannot run
  yet; `run-manifest-pages.mjs` fails on other, still-empty manifests
  (`Invalid or empty current page in …-batch-10.pages.json`). The same run-level
  condition blocks the wrapper form of every Step-1 gate until all batches are
  scaffolded; the direct tools above were run instead, as batch 16 did.
- `frontier-dependency-ledger refresh --run`: refreshed; batch 17 registered as
  reviewed with 5 rows, 0 orphaned reviews, and every declared edge of this batch
  carrying its review row.
- `physics-check --plan research/plan-spec.json`: **FAIL** with the pre-existing
  owner-held import drift `items/thm-hilbert-basis-theorem.md` first recorded by
  batch 15 (original now differs from the pin). Not caused by this batch; no item
  here reaches that theorem through any dependency or prerequisite path.

## Unresolved findings / escalation (owner or operator action)

1. **Plan-context escalation: two published supplier home pages used by this
   batch must be declared for page 311/312 before the run's plan gate can pass.**
   `validate-plan --run` fails on this batch solely for that reason.

   | missing home page | supplier items used by this batch | consumers |
   |---|---|---|
   | `wave-equation-representation-formulas` | `def-wave-equation-cauchy-data-and-wave-speed`, `lem-derivative-of-an-integral-with-moving-endpoints`, `lem-first-moment-of-the-unit-sphere-vanishes`, `thm-wave-duhamel-principle` | `thm-em-wave-cauchy-kirchhoff`, `ex-em-wave-equation-prerequisites-source-and-support-boundaries` |
   | `wave-energy-finite-propagation-and-huygens` | `def-wave-energy-and-energy-flux`, `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`, `thm-domain-of-dependence-and-local-uniqueness`, `cor-energy-uniqueness-for-the-wave-cauchy-problem` | `thm-em-wave-cauchy-kirchhoff`, `ex-em-wave-equation-prerequisites-source-and-support-boundaries` |

   Both are *published* imported pages (they exist in `library/`), neither is in
   `research/plan-spec.json`, so no `requires` closure can reach them. Batch 16
   already escalated `wave-energy-finite-propagation-and-huygens` for the same
   reason (batch 16 notes, escalation 1); this batch adds
   `wave-equation-representation-formulas`. The repair is a plan-metadata
   declaration (P-context entries, or the owner's same-scope `requires` sync),
   not a content change: every supplier resolves on disk, was read, and its use is
   recorded in the item strategies and readiness evidence. Per the owner
   direction, no plan or `requires` field was edited by this worker.
2. **Pre-existing import drift** (`items/thm-hilbert-basis-theorem.md`) blocking
   whole-run `physics-check`: owner re-import action outside the active run;
   unchanged from batches 15 and 16, and unrelated to this batch.
3. **Run-level wrapper gates** (`frontier-item-gate` and therefore the Step-1
   gate battery) cannot pass while sibling batches still carry empty page
   shells; recorded as a run-state observation, not a defect of this batch.
4. **Coverage low-yield warning**: explained above; it is Alpha's Step-5
   confirmation item, not an omission claim.

No defective published prerequisite was found among the suppliers used; the only
statement mismatches encountered (the published Duhamel's compact-support
hypothesis; the published local-uniqueness theorem's `t_0 > 0` anchor) are
handled explicitly in the theorem's statement and proof strategy. No test,
judgment or review stamp is claimed. Owner/operator reconciliation and the full
engine gate follow construction; neither this worker's exit nor a readiness record
is independent mathematical approval — Step 3 provides that review.

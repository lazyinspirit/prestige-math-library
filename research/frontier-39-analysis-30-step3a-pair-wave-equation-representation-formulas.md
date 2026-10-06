# Step 3a scope review — Wave equation representation formulas

- Run: `frontier-39-analysis-30` (role: alpha; batch 2; this pair only)
- A page: `wave-equation-representation-formulas` (plan order 458.015, `pde`)
- B page: `wave-equation-representation-formulas-examples` (plan order 458.016)
- Scope decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`;
  receipt `research/frontier-39-analysis-30-step3a-review-wave-equation-representation-formulas.json`)
- Scope is judged here, not proof correctness. No scaffold, item contract, plan, page,
  coverage, engine or owner record was edited. Nothing below is an item approval.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-39-analysis-30-batch-2.pages.json` | Current scope carrier: A has 28 items (levels 0–9), B has 9 items (levels 3–8); A `requires` is exactly `heat-equation-maximum-principles-duhamel-and-smoothing`; B `requires` the A page; companion pointers pair the pages; batch 2 carries no other pair |
| `research/frontier-39-analysis-30-batch-2.coverage.json` | 7 fetch-verified treatments; 63 harvested rows (31 `included`, 12 `inline`, 10 `deferred`, 10 `out-of-scope`) |
| `research/frontier-39-analysis-30-batch-2.notes.md` | Scaffolder construction record: design control, the five recorded deviations, choice accounting, checks |
| `research/frontier-39-analysis-30-batch-2.cross-batch-dependencies.json`, `research/frontier-39-analysis-30-cross-batch-dependencies.json` | One incoming edge (heat page, page-level only, no item depends on it) and one outgoing edge (batch 3 `wave-energy-finite-propagation-and-huygens`), both `open` |
| `research/plan-pde-track.md` PDE-9 lines 1185–1237 and "PDE-9 additions" lines 3500–3512 | Binding prose design: 14 ordered A rows, 7 B rows, forcing/singularity/descent obligations, well-definedness note; 6 overlay A rows + 2 overlay B rows |
| `research/plan-pde-track.md` lines 44, 331, 2388, 2728/2734, 2788–2791, 3126–3132, 3251, 3524 | Pair table, dependency spine, the `r=0` obligation row, source dispositions, source matrix; Teschl §3.3 deferred as recorded below |
| `research/plan-spec.json` orders 458.015/458.016 | Both pages present with the same `requires`; unspliced `items` arrays empty |
| `research/frontier-39-analysis-30-alpha-step1-drift.md` §wave page | Step-1 verdict `no-drift`, directing to lines 1185–1234 and 3500–3512 |
| `research/frontier-39-analysis-30-scope-ledger.json` | Both pages in the 60-page ledger; no page dropped |
| `research/frontier-39-analysis-30-step1-<id>.json` (37 files) | All 37 readiness records `ready`/owner-`ready`; the support-dichotomy record is owner-signed after the shell-support correction |
| `items/*.md` resolution of all 53 distinct declared dependency ids | Every dependency exists with `status: published` except ids belonging to this batch or the batch-3 scaffold; spot-read interfaces below |
| Re-fetched Teschl PDF (sha256-16 `cea9939acea1858e`, 392 pp.) | Matches the coverage `fetch_verified` record byte-for-byte; I re-read §7.1–§7.2 statements and proofs of Theorems 7.2/7.4/7.7/7.8, Corollaries 7.3/7.5/7.9, Lemma 7.6, Problems 7.10–7.12 |

## Role in the library and inventory against the prose design

PDE-9 is the classical representation-formula pair of the PDE spine: it converts
PDE-3/MT-11 measure-and-mean machinery into explicit solution formulas for the
Cauchy problem, in the plan order PDE-3 + PDE-2D → PDE-9 → PDE-10. Its single
in-run consumer is batch 3 (`wave-energy-finite-propagation-and-huygens`), which
consumes the wave definition, spherical means, d'Alembert, Kirchhoff, Poisson,
the odd/even formulas, data attainment and time reversal (23 declared item-level
edges checked against the batch-3 manifest). The physics root catalogues for
fluid dynamics and Einstein–Maxwell list this pair's items as `planned-unproved`
root mathematics. The B page is a leaf (no consumer).

Design conformance is 1:1 in ids, kinds and routes; no design row was dropped or
renamed, and no new pair is needed:

| Design row | Scaffold item(s) |
|---|---|
| A1–A4, A6–A14 (lines 1190–1220) | `def-wave-equation-cauchy-data-and-wave-speed`, `lem-one-dimensional-wave-operator-factorisation`, `thm-dalembert-formula`, `thm-one-dimensional-forced-wave-duhamel-formula`, `lem-euler-poisson-darboux-equation-for-spherical-means`, `thm-kirchhoff-formula-for-the-three-dimensional-wave-equation`, `thm-poisson-formula-for-the-two-dimensional-wave-equation`, `thm-odd-dimensional-wave-formula-by-spherical-means`, `thm-even-dimensional-wave-formula-by-descent`, `thm-wave-duhamel-principle`, `lem-wave-formulas-attain-the-cauchy-data`, `cor-classical-wave-solutions-are-locally-determined-by-cauchy-data`, `rem-wave-poisson-formula-is-not-the-harmonic-poisson-kernel` |
| A5 (definition + smoothness clause) | `def-spherical-mean-of-space-dependent-data` + split lemma `lem-spherical-means-of-smooth-data-are-smooth` (recorded deviation 1) |
| B1–B7 (lines 1223–1231) | the seven design examples/counterexamples, incl. `cex-wave-formula-with-sphere-area-and-ball-volume-confused`, `cex-characteristic-line-data-do-not-determine-a-one-dimensional-wave` |
| Overlay A rows (lines 3500–3508) | `lem-dalembert-formula-attains-both-initial-data`, `cor-one-dimensional-wave-domain-of-dependence`, `thm-forced-three-dimensional-kirchhoff-duhamel-formula`, `lem-odd-dimensional-wave-kernels-obey-the-radial-recursion`, `thm-support-dichotomy-for-free-wave-fundamental-solutions`, `cor-time-reversal-invariance-of-the-homogeneous-wave-equation` |
| Overlay B rows | `ex-point-source-wave-front-in-three-dimensions`, `ex-wave-support-from-pure-displacement-versus-pure-velocity-data` |
| Local closure (8 extra A items) | `lem-iterated-radial-derivative-identity`, `lem-radial-derivative-expansion-of-the-epd-transform`, `lem-first-moment-of-the-unit-sphere-vanishes`, `lem-derivative-of-an-integral-with-moving-endpoints`, `lem-ball-and-sphere-mean-radial-identity`, `lem-spherical-surface-integrals-project-onto-weighted-ball-integrals`, `lem-general-solution-of-the-one-dimensional-wave-equation`, `lem-spherical-means-of-smooth-data-are-smooth` — every one is consumed by a design or overlay item, so this is proof-closure enrichment, not filler |

The design's hard obligations are visibly assigned: the `r=0` removable
singularity via the radial-expansion/limit lemmas (design lines 1240–1247), the
dummy-coordinate descent and square-root weight via the projection lemma, and
the retained dimensional constants via the odd/even statements. Uniqueness for
`n≥2` is deliberately absent here and deferred to PDE-10
(`cor-energy-uniqueness-for-the-wave-cauchy-problem`), exactly as the design's
energy section and recorded deviation 5 state; the one-dimensional uniqueness
is proved locally. That is a scope split, not an omission.

## Source coverage, independently checked on the load-bearing points

- I re-fetched Teschl and hash-matched the archived PDF. Its (7.23) odd formula
  is the scaffold's odd formula at unit speed with the same exponent
  `D_t^{(n-3)/2}` and `(n-2)!!` constant; (7.24) is the even formula with
  `W(x,t)` at radius `t`; Lemma 7.6 and Problem 7.11 are the two radial lemmas;
  Problem 7.10 is the Euler–Poisson–Darboux equation; Theorems 7.2/7.4 and
  Corollaries 7.3/7.5/7.9 are the Kirchhoff, Poisson, forced and Duhamel items.
  Data classes also match (`u_0∈C^{k+2}`, `u_1∈C^{k+1}`).
- The six other treatments (Ivrii, Oh, Hunter, Speck ×2, Jakobsen) are
  fetch-verified and live in the coverage record; their declared dispositions
  are consistent with the design route (Fourier and distributional routes
  `out-of-scope`, energy and reflection/interval material `deferred` into the
  in-run PDE-10 pair, Teschl §3.3 sine-mode series `deferred` to
  `fredholm-elliptic-problems-and-the-elliptic-spectrum`, whose scaffold does
  carry the spectral-series item `thm-spectral-series-solution-of-an-invertible-symmetric-elliptic-problem`).
  The plan's §3.3 row ("d'Alembert/interval examples included PDE-9") is
  satisfied across PDE-9 (d'Alembert here) and PDE-10 B
  (`ex-reflection-at-a-dirichlet-endpoint`), which I read.
- Evans (the plan's publisher-hosted cross-check) backs no coverage row, as the
  notes state; the same content is backed by the open treatments above, so no
  coverage row rests on an unverifiable source.

## Prerequisite audit

All 53 distinct dependency ids resolve: 26 are ids of this batch's own scaffold,
and the rest are published items. I read the pivotal published interfaces and
found the needed hypotheses present:
`lem-sphere-and-ball-measures-scale` (ω_{n-1}=nV_n, scaling),
`def-spherical-averages-and-local-ball-means-in-rn` and
`lem-radial-derivative-of-a-spherical-average` (mean normalisation; the
`m'(r)=r/(n|B_r|)∫Δu` identity behind EPD),
the MT-11 chain (`def-polar-surface-measure-on-the-unit-sphere`,
`thm-polar-coordinates-formula-for-lebesgue-measure`,
`lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, incl. orthogonal
invariance used for the vanishing first moment), the surface-integral
definition, the one-variable toolkit
(`cor-primitives-of-a-continuous-function`,
`cor-zero-derivative-implies-constant`,
`thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`), and
`def-countable-choice`. The page-level `requires` edge to the heat page is an
ordering edge with no item-level consumer (no wave item names a heat item), so
it constrains nothing; the heat page is itself part of the current frontier.
**No unmet prerequisite was found**: nothing the planned items need is absent
from both the published library and the current scaffold.

Two dependency-declaration gaps for Step 3b (not scope, not unmet): the
smoothness item's compactness/extremum uses are supplied by the published
`cor-euclidean-closed-balls-and-spheres-are-compact` (not declared), and the
constant identity `2·n!!V_n/ω_n=(n-1)!!` is derivable from the published
`cor-volume-of-the-unit-n-ball` plus the Γ-function items (neither declared).
The authoring step should add the declarations.

## Flagged statement-level finding (reported, not a scope defect)

`thm-even-dimensional-wave-formula-by-descent` and
`lem-spherical-surface-integrals-project-onto-weighted-ball-integrals` display
`W_f(x,t)`, whose only definition on the page is the radius-parametrised
`W_f(x,r)` integrating over `B_r(x)`; under that literal reading the displayed
formulas are false for `c≠1`, while the intended radius-`ct` integral `W_f(x,ct)`
is what the odd formula's `M(x,ct)`, Poisson's formula, the same page's
strategies (e.g. the support-dichotomy strategy writes
`W_{u_1}(x,t)=∫_{B_{ct}(x)}u_1K_0` with `K_0=(n!!V_n)^{-1}(c^2t^2-ρ^2)^{-1/2}`)
and the already-scaffolded downstream kernel
`K(ρ,t)=c^{1-n}D_t^{k-1}[(c^2t^2-ρ^2)^{-1/2}/(n!!V_n)]`
(batch 3's `thm-wave-tails-in-one-and-even-spatial-dimensions`) use:

- `n=2`, `c=2`, `t=1`, `u_0≡1`, `u_1≡0`: the literal even statement returns
  `c^{-1}∂_t W_1(x,t)=1/2`, while the true solution is `1` (and `W_1(x,ct)`
  returns `1`); `n=4`, `c=2` gives `1/8` vs `1`.
- The projection identity with `n=2`, `g(y)=|y|²`, `x=0`, `t=1`, `c=2`:
  literal LHS `8/3` versus literal RHS `1/3`; with `W_g(x,ct)` both sides are
  `8/3`.
- The readiness reason
  `research/frontier-39-analysis-30-step1-thm-even-dimensional-wave-formula-by-descent.json`
  records the same `W_f(x,t)` form (the projection item's reason records only the
  constant identity). The strategies and the manifestation of the kernel
  elsewhere are consistent with the radius-`ct` reading, so this is a notation
  clash between the definition item and two displayed formulas, not a wrong
  intended result.

Recommended repair at authoring/owner correction (Step 3a prohibits scaffold
edits): write `W_{u_0}(x,ct)`, `W_{u_1}(x,ct)` in the even theorem and
`W_g(x,ct)` in the projection identity (or introduce an explicit shorthand
`W̃_f(x,t):=W_f(x,ct)` before first use), and refresh the two readiness
reasons. I flagged this rather than deciding it; it does not change the pair's
scope, inventory or dependencies.

Accepted recorded deviations (no action requested): the overlay's distributional
kernel language is rendered classical kernel/operator statements without
dropping the promised dichotomy (recorded conflict 2, re-affirmed by the owner
shell-support correction to `thm-support-dichotomy`, which I confirmed is the
statement now in the manifest); the `n≥2` uniqueness deferral; and the local
building of the one-dimensional theory because no published one-variable wave
item exists (searched: only `ex-classification-of-laplace-heat-and-wave-equations`,
consistently with notes deviation 4).

## Checks run in this session

- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-2.pages.json` → 37 items, 0 errors (exit 0)
- `node tools/content-policy.mjs --manifest-only research/frontier-39-analysis-30-batch-2.pages.json` → 37 scoped items, 0 errors, 0 warnings (exit 0)
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-2.coverage.json --require-destination` → 1 page, 63 harvested, 0 errors, 0 warnings (exit 0)
- dependency-resolution script over all 53 declared dep ids → 0 unresolved; all published or in-scaffold
- `node tools/step3-decisions.mjs check --run frontier-39-analysis-30 --phase scope` → 30 pairs open as expected; no pair-level receipt existed for this pair before this review
- Teschl PDF re-fetch → sha256-16 `cea9939acea1858e` matches the coverage `fetch_verified` record; §7.1–§7.2 statements and the even-formula arithmetic re-derived by hand and checked numerically

## Limits of this review

- Scope, inventory, source identity and prerequisite resolution were verified; I
  did not verify proofs, choice accounting inside arguments or every `inline`
  disposition (Step 3b/5 duties).
- Source reading covered the cited printed ranges and named results with their
  immediate context, not every page of each source.
- The companion Step 3a task file (`…-44e765021fc17f95.task.md`) is byte-identical
  to the dispatched task; this review records the single A-page scope receipt.

## Decision

`sufficient`: the pair's definitions, results and examples cover the intended
subject — the wave operator/Cauchy setting with the speed-rescaling convention,
the one-dimensional theory (factorisation, general solution, d'Alembert with
data attainment, forcing, domain of dependence, characteristic-line
counterexample), spherical means and the Euler–Poisson–Darboux equation,
Kirchhoff, Poisson by descent, the odd/even-dimensional formulas with exact
constants, data attainment, Duhamel with the forced three-dimensional retarded
potential, the sphere/interior support dichotomy, local determination,
time-reversal and the naming remark — matching the binding PDE-9 design and its
overlay row-for-row, with all 63 harvested source rows disposed to live
destinations and every declared prerequisite resolving to published or
in-scaffold content. The single flagged issue is a statement-level `W(·,ct)`
notation repair for Step 3b, not an omitted topic; no enrichment, merger or
pair change is requested.

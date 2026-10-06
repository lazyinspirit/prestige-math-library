# Step 3a scope review — `hamilton-jacobi-equations-and-viscosity-solutions`

- Run `frontier-39-analysis-30`; role alpha; label
  `step3a-pair-hamilton-jacobi-equations-and-viscosity-solutions-c67070ba645ab5b7`.
- Pair: A `hamilton-jacobi-equations-and-viscosity-solutions` (order 458.047) / B
  `hamilton-jacobi-equations-and-viscosity-solutions-examples` (order 458.048),
  batch 19, category `pde`. A has 33 scaffolded items, B has 10.
- Decision: **sufficient**. Design PDE-25 is realised item-for-item on 43 scaffold
  items: all 23 designed A rows and all 7 designed B rows, all 7 A and all 3 B
  additions-table rows, plus three recorded local prerequisites (two noted at
  scaffold time, one owner-audited at Step 1). Source coverage is complete and
  re-verified against byte-identical re-downloads; the pair's 1 018-node
  transitive closure has no missing node and no unmet prerequisite. No omission,
  merger or enrichment is required.
- No prior reviewer or owner scope receipt existed for this page; no scaffold,
  item, page, coverage or owner record was edited by this review.

## Design comparison (A and B, item-for-item)

Controlling design: section PDE-25 of `research/plan-pde-track.md` L2159--L2244
(page row at L2246/L3791 with the additions table at L3791--L3805). Plan row
`plan-spec.json` order 458.047 requires `analytic-semigroups-and-linear-evolution-equations`
(batch 18, in-run draft) and `convex-and-semicontinuous-functions-on-rn`
(published). Drift verdict for this page: **drift-applied**
(`research/frontier-39-analysis-30-alpha-step1-drift.md`, section
"hamilton-jacobi-equations-and-viscosity-solutions"), adopted as item 2 of
`research/frontier-39-analysis-30-step1-owner-resolution.md`.

A page — all 23 designed rows are present with matching ids and kinds:
`def-hamilton-jacobi-cauchy-problem`, `def-upper-and-lower-semicontinuous-envelopes`,
`def-viscosity-subsolution-and-supersolution`, `def-discontinuous-viscosity-solution`,
`lem-viscosity-testing-by-first-order-jets`, `prop-classical-solutions-are-viscosity-solutions`,
`prop-maxima-of-subsolutions-and-minima-of-supersolutions`,
`thm-stability-of-viscosity-solutions-under-local-uniform-convergence`,
`thm-half-relaxed-limit-stability-for-viscosity-solutions`,
`lem-doubling-variables-maximum-localisation`,
`thm-comparison-for-first-order-hamilton-jacobi-equations`,
`cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions`,
`lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump`,
`thm-perron-method-for-hamilton-jacobi-equations`,
`def-legendre-transform-of-a-hamiltonian`,
`lem-finite-valued-convex-hamiltonian-equals-its-biconjugate`, `def-hopf-lax-operator`,
`lem-hopf-lax-infima-localise`, `thm-hopf-lax-dynamic-programming-semigroup`,
`thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation`,
`thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations`,
`cor-finite-speed-of-dependence-for-lipschitz-hamiltonians`,
`rem-value-functions-and-hamilton-jacobi-bellman-equations`. All 7 A additions-table
rows are present: `lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation`,
`lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers`,
`thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions`,
`lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary`,
`cor-hopf-lax-is-a-contraction-in-the-supremum-norm`,
`cor-hopf-lax-preserves-a-modulus-of-continuity`,
`lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points`.

Three local A prerequisites beyond the design inventory, each recorded with a
named consumer:

1. `lem-envelopes-are-the-least-semicontinuous-majorants` — carries the proof the
   design's item 2 asked of the definition item (a definition carries no proof in
   this schema); batch-19 notes, point 2.
2. `def-half-relaxed-limits` — the design's items 9/21 use half-relaxed limits and
   no page item defined them; batch-19 notes, point 2.
3. `thm-comparison-for-autonomous-convex-superlinear-hamiltonians` — owner-audited
   Step-1 repair for the escalated Hopf--Lax claim (3): comparison in the bounded
   uniformly continuous class for finite continuous convex superlinear $H$, which
   includes $H(p)=|p|^2/2$ where the momentum-Lipschitz case (a) does not apply
   (`research/frontier-39-analysis-30-step1-thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation.json`,
   owner=true: "Added and audited the autonomous convex-superlinear BUC comparison
   theorem").

Statement-level scope checks (scope, not proof correctness): comparison appears in
both designed settings, case (a) on $\mathbb R^n$ under the two Lipschitz
conditions and case (b) on a compact cylinder under the uniform modulus condition
(the design's "explicit continuity hypotheses", correctly strengthened because
mere continuity fails); uniqueness and sup-norm contraction as designed; Perron's
method between barriers on $\mathbb R^n$; Legendre transform with extended-real
values and no superlinearity at definition level; the biconjugacy claim kept,
proved choice-free (the owner-resolution item 2 route through subgradients would
import AC+CC); Hopf--Lax with $Q_0=\mathrm{id}$, localisation, dynamic programming
and unique BUC solution; vanishing viscosity with boundedness and equicontinuity
as explicit hypotheses and no compactness assertion; finite speed in the strict
open backward cone. The four Step-1 escalations (Hopf--Lax uniqueness, finite
speed, forming corner, vanishing-viscosity example) are all resolved with their
designed claims retained; `step1-decisions` reports 899/899 items ready, closed.

B page — all 7 designed rows and all 3 B additions-table rows are present:
`ex-eikonal-equation-as-a-viscosity-equation`, `ex-quadratic-hopf-lax-formula-and-moreau-envelope`,
`ex-hopf-lax-solution-with-a-forming-corner`,
`ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense`,
`ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution`,
`cex-hopf-lax-without-convex-superlinear-coercivity`,
`cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality`,
`cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions`,
`cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class`,
`ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem`.
No designed leaf is missing or re-typed; A items have no dependency on B items.

## Source coverage

- `research/frontier-39-analysis-30-batch-19.coverage.json`: three fetch-stamped
  sources per page — [TR] Tran, *Hamilton--Jacobi Equations* (289 pp.), [BHJ]
  Bressan, *Viscosity Solutions ... and Optimal Control* (64 pp.), [CIL]
  Crandall--Ishii--Lions, *User's guide* (69 pp.) — with 72 dispositioned rows on
  A and 13 on B (85 total), every harvest given included/inline/out-of-scope/
  deferred status with a reason and, where deferred, a destination.
- Re-ran 2026-10-05: `coverage-checklist ... --require-destination` → 2 pages,
  85 results, 0 errors, 0 warnings; `source-fetch-check` → 6/6 fetch-verified,
  6/6 resolved, 0 documented drops. I re-downloaded all three documents the same
  day: TR 1 271 596 B / `4107d365872d5308`, BHJ 689 929 B / `1668513cecebb571`,
  CIL 599 424 B / `58aac2fbf8773e56` — byte- and sha256_16-identical to the
  coverage stamps, page counts 289/64/69 matching.
- Load-bearing anchors checked in the fetched texts: [TR] Theorem 2.13(ii) and
  Remark 2.14 p. 62 (biconjugacy), Theorems 2.22--2.23 with their proof and
  Example 2.4 pp. 67--68 (Hopf--Lax and quadratic case; Theorem 2.23 presupposes
  the unique viscosity solution, which the added comparison theorem now supplies),
  Theorem 1.19 hypotheses (1.13) pp. 26--29; [CIL] Lemma 3.1/Proposition 3.7
  pp. 15--21 (doubling), Theorem 4.1/Lemma 4.4 pp. 23--25 (Perron and bump),
  Theorems 8.2--8.3 pp. 50--52 (parabolic comparison and theorem of sums);
  [BHJ] Theorem 5.2 p. 19 (comparison on $\mathbb R^n$ under (5.21)--(5.22)) and
  the characteristic-crossing section for the corner example.
- [E] Evans Ch. 10 §§10.1--10.3 remains a convention cross-check only, as the plan
  states; no batch-19 statement or strategy cites [E], so no coverage backing is
  claimed from it. All 80 `[[...]]` item citations in the pair's statements and
  strategies resolve (published item or in-run item).

## Prerequisites and intended role

- Direct dependency edges of the 43 items: 245, of which 123 resolve to published
  items and 122 stay inside the pair; no edge leaves batch 19. The pair's
  transitive closure is 1 018 nodes: 975 published items, all with
  `status: published`, and 43 in-run items (the pair itself); **0 missing**.
- Page `requires` resolve: `analytic-semigroups-and-linear-evolution-equations`
  (batch 18 scaffold, 27 items; the cross-batch row is a reading-order declaration
  and no batch-19 item consumes any of its items, so this is not an unmet
  prerequisite) and `convex-and-semicontinuous-functions-on-rn` (published, items
  used are `def-convex-and-strictly-convex-functions-on-euclidean-sets`,
  `cor-convex-functions-on-open-convex-sets-are-continuous`, etc.). The
  design-versus-plan divergence (design names PDE-2, PDE-7--PDE-8, MT-8, MT-11,
  FA-1--FA-2) is recorded in the batch notes and the batch-19 cross-batch file; the
  plan controls and every item-level input resolves to published content.
- Intended role confirmed against consumers: the B page, and
  `scalar-conservation-laws-and-entropy-solutions` (order 458.049, batch 20),
  whose items `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension`
  and `ex-hamilton-jacobi-primitive-of-a-burgers-solution` consume the Cauchy
  problem, discontinuous-solution and sub/supersolution definitions, the Hopf--Lax
  theorem, contraction, localisation and Legendre transform. The batch-20
  cross-batch review marks those edges `verified` and relies on the retained
  Hopf--Lax uniqueness for finite continuous convex superlinear $f$ — consistent
  with the Step-1 repair. No B item is consumed anywhere in the run.
- Checks re-run 2026-10-05: `manifest-deps` 43 items / 0 errors;
  `content-policy --manifest-only` 43 scoped items / 0 errors / 0 warnings;
  `item-dependency-levels check --run` 899 items across 60 pages, maximum level 22,
  no cycle or label error; `step1-decisions check` 899/899 ready, closed.

## Unmet prerequisites

**None confirmed and none potential.** No consuming planned item lacks a required
claim and hypotheses in either the published library or the current scaffold: the
pair closure above has 0 missing nodes, every published supplier carries
`status: published`, and no cross-batch item edge exists. The only prerequisite
not present as item content is the page-level reading-order edge to batch 18,
which is in-run and recorded (`research/frontier-39-analysis-30-batch-19.cross-batch-dependencies.json`,
status `open`). No scaffold addition is recommended beyond the owner-audited
comparison theorem already applied; the earlier missing adaptive-comparison
machinery for $H(p)=|p|^2/2$ (batch-19 notes, escalation 1) is now supplied by
`thm-comparison-for-autonomous-convex-superlinear-hamiltonians`, whose four
declared dependency ids all resolve to published items.

## Observations (no scope action; 3b authoring notes)

- O1. `ex-distance-to-the-boundary-...` has a verbally self-contradictory clause
  on lower contacts (it first says lower tests satisfy $|D\phi(0)|\le1$, then
  correctly says no lower contact exists). The conclusion (vacuous supersolution
  test, distance solves the Dirichlet problem) is the designed one; 3b should
  state the vacuity cleanly.
- O2. `thm-perron-method-...` applies comparison case (a) to $W^*$ and $W_*$,
  which are defined on the open cylinder; 3b should state the initial-face
  extension by the relaxed-limit values $u_0$ that the trace lemma supplies.
- O3. `thm-comparison-for-autonomous-convex-superlinear-hamiltonians` and
  `cor-finite-speed-of-dependence-...` use nonstandard penalisations (Lipschitz
  radial penalty, cone barrier); their declared dependencies are complete, but 3b
  must write out the contact and limit steps rather than cite the standard
  quadratic-penalty lemma verbatim.

## Method

Design, additions table, plan-spec row, manifests, coverage, batch notes, batch-19
cross-batch file, drift verdict, owner resolution and Step-1 readiness records were
read directly. The dependency closure was walked with the same resolution rule as
`tools/step3-decisions.mjs` (published frontmatter, run manifests, `plan-spec.json`).
All tools listed above were re-run on 2026-10-05; the three sources were
re-downloaded and their page anchors spot-read with `pymupdf`. Report: this file.

Receipt: `node tools/step3-decisions.mjs record-scope --run frontier-39-analysis-30
--page hamilton-jacobi-equations-and-viscosity-solutions --decision sufficient
--reason "Scope evidence: PDE-25 design fully scaffolded on 33 A + 10 B items ... report path"`.

# Batch 22 notes — Particle spacetime, observers and worldlines

Run: `physics-td-qft-rpm-62-2026-10-14`  
Page pair: `rpm-geometry-actions` / `rpm-geometry-actions-examples`  
Category: `relativistic-particle-mechanics`; A-page order 413.

## Scope and design reconciliation

The assigned pair contains 13 A items and 4 B examples. It retains the design's signature $(-,+,+,+)$, distinguishes affine Minkowski spacetime from a prescribed smooth time-oriented Lorentzian background, and treats the background as fixed data. Clock readings are adopted proper-time conventions; massive and null particle actions and the named force law are separate model postulates. The consequences are conditional deductions. No completeness, field equation, empirical force law, or general energy-conservation claim is added.

The current track and assigned plan/manifest agree on page IDs, titles, category, companion, order, and four declared A-page prerequisites. The older geometry worker proposal and closure ledger also list `lem-rpm-low-speed-uniform-remainders` and `pthm-rpm-controlled-newtonian-reduction` in its proposed inventory. The current track places that controlled-limit material on `rpm-controlled-limits` (order 431); it is not in this assigned pair. The current plan and batch scope control. Research aliases such as S0/G0 were resolved to exact inspected library IDs and are not declared as dependencies.

## Inventory, direct dependencies, and local levels

Levels use only suppliers inside this assigned pair: zero when none are present, otherwise one plus the maximum level of an in-pair direct supplier. All declared dependencies have a `dependency_roles` entry. Mathematics-domain items use mathematical prerequisites only; model postulates and physical assumptions are identified through their roles and statements. The cross-batch input is `[]` because no supplier page from another batch is used.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-rpm-spacetime-observer-and-worldline` | 0 | `def-sr-affine-minkowski-model`, `def-gr-smooth-lorentzian-objects`, `def-gr-timelike-worldline-and-proper-time`, `def-gr-observer-and-rest-space`, `def-gr-observer-congruence-and-adapted-charts`, `def-gr-local-frame-and-tetrad-fields`, `def-sr-chart-tetrad-and-congruence-distinction` |
| `lem-rpm-shell-tangent-force-ivp` | 1 | `def-rpm-spacetime-observer-and-worldline`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-gr-parallel-transport-and-geodesic-speed`, `thm-picard-lindelof-local-existence-and-uniqueness`, `thm-smooth-dependence-of-ode-solutions-on-parameters`, `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, `lem-gr-future-causal-classification-by-a-timelike-field`, `def-covariant-derivative-along-a-curve`, `def-christoffel-symbols-of-an-affine-connection` |
| `thm-rpm-proper-time-parametrization` | 1 | `def-rpm-spacetime-observer-and-worldline`, `def-gr-timelike-worldline-and-proper-time`, `thm-ftc-first-part`, `thm-chain-rule-for-total-derivatives`, `thm-euclidean-inverse-function-theorem`, `cor-mean-value-theorem` |
| `post-rpm-test-clock-and-background` | 1 | `def-rpm-spacetime-observer-and-worldline`, `post-sr-ideal-clocks-and-light` |
| `lem-rpm-length-action-first-variation` | 2 | `def-rpm-spacetime-observer-and-worldline`, `thm-rpm-proper-time-parametrization`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-gr-connection-conditions-in-chart-components`, `def-covariant-derivative-along-a-curve`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-integration-by-parts`, `lem-smooth-bump-between-concentric-euclidean-balls`, `def-gr-inverse-metric-and-musical-isomorphisms`, `thm-clairaut-schwarz-mixed-partials`, `thm-monotone-change-of-variable-for-riemann-integrals`, `thm-monotonicity-of-the-integral` |
| `post-rpm-massive-test-particle-action` | 2 | `post-rpm-test-clock-and-background`, `thm-rpm-proper-time-parametrization` |
| `lem-rpm-einbein-variation-and-equivalence` | 3 | `def-rpm-spacetime-observer-and-worldline`, `thm-rpm-proper-time-parametrization`, `lem-rpm-length-action-first-variation`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `lem-gr-connection-conditions-in-chart-components`, `def-covariant-derivative-along-a-curve`, `thm-differentiation-under-the-integral-sign-on-a-compact-rectangle`, `thm-integration-by-parts`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-monotonicity-of-the-integral`, `thm-monotone-change-of-variable-for-riemann-integrals`, `thm-clairaut-schwarz-mixed-partials` |
| `post-rpm-null-test-particle-action` | 4 | `post-rpm-test-clock-and-background`, `lem-rpm-einbein-variation-and-equivalence` |
| `def-rpm-mechanical-momentum-and-observer-energy` | 5 | `post-rpm-massive-test-particle-action`, `post-rpm-null-test-particle-action`, `def-gr-observer-and-rest-space`, `lem-gr-observer-projection-decomposition` |
| `pthm-rpm-free-massive-and-null-geodesics` | 6 | `post-rpm-massive-test-particle-action`, `post-rpm-null-test-particle-action`, `def-rpm-mechanical-momentum-and-observer-energy`, `lem-rpm-length-action-first-variation`, `lem-rpm-einbein-variation-and-equivalence`, `thm-rpm-proper-time-parametrization`, `thm-gr-local-geodesics-and-exponential-map` |
| `post-rpm-prescribed-force-law` | 6 | `def-rpm-mechanical-momentum-and-observer-energy`, `lem-rpm-shell-tangent-force-ivp` |
| `pthm-rpm-killing-particle-charge` | 7 | `def-gr-killing-field`, `thm-gr-killing-and-on-shell-matter-identities`, `lem-gr-parallel-transport-and-geodesic-speed`, `cor-zero-derivative-implies-constant`, `def-rpm-mechanical-momentum-and-observer-energy`, `post-rpm-prescribed-force-law`, `post-rpm-null-test-particle-action`, `lem-rpm-einbein-variation-and-equivalence` |
| `pthm-rpm-mass-shell-and-force-work` | 7 | `post-rpm-prescribed-force-law`, `lem-rpm-shell-tangent-force-ivp`, `def-rpm-mechanical-momentum-and-observer-energy`, `def-gr-observer-and-rest-space`, `lem-gr-observer-projection-decomposition`, `lem-gr-observer-pairing-with-future-causal-vectors`, `lem-sr-four-force-and-work-energy-identities`, `lem-gr-parallel-transport-and-geodesic-speed`, `def-inertial-frame-and-inertial-chart` |
| `ex-rpm-incomplete` | 1 | `def-rpm-spacetime-observer-and-worldline` |
| `ex-rpm-clock-reunion` | 2 | `post-rpm-test-clock-and-background`, `thm-rpm-proper-time-parametrization`, `def-gr-timelike-worldline-and-proper-time` |
| `ex-rpm-null-scale` | 7 | `pthm-rpm-free-massive-and-null-geodesics`, `def-rpm-mechanical-momentum-and-observer-energy` |
| `ex-rpm-straight` | 7 | `pthm-rpm-free-massive-and-null-geodesics`, `def-rpm-mechanical-momentum-and-observer-energy` |

The scoped DAG audit found no cycles, missing direct dependencies, dependency-role omissions, or manifest/carrier dependency mismatches. The A and B page `requires` lists match the assigned manifest and current plan.

## Source coverage and dispositions

`physics-td-qft-rpm-62-2026-10-14-batch-22.coverage.json` records every source URL, locator, supported item, and per-result disposition. The eight successful retrieval records are full-text, independently inspected treatments from:

- Tong, *General Relativity*, author-hosted Chapter 1, §§1.1.1–1.2.3 and §1.2.6 (printed pp. 8–28), `https://www.davidtong.org/pdfs/teaching/general-relativity/gr1.pdf`.
- Tong, *General Relativity*, Chapter 3, §§3.1.2–3.2.3 (printed pp. 93–111), `https://www.davidtong.org/pdfs/teaching/general-relativity/gr3.pdf`.
- Tong, *General Relativity*, Chapter 4, §§4.3.1–4.3.2 (printed pp. 160–166), `https://www.davidtong.org/pdfs/teaching/general-relativity/gr4.pdf`.
- Carroll, *Lecture Notes on General Relativity*, complete 238-page notes, Chs. 1, 3, and 5 at the locators recorded in coverage, `https://arxiv.org/pdf/gr-qc/9712019`.
- Tong, *String Theory*, complete 19-page notes, §1.1.1–1.1.2 (printed pp. 10–13), `https://www.damtp.cam.ac.uk/user/tong/string/string1.pdf`.

Tong GR Chapters 1/3/4 and Carroll support the geometry, proper-time, action, geodesic, Killing-charge, force/work, and example items. Tong String supports the null/einbein action and affine-parameter examples. The A page has independent Tong and Carroll full-text treatments; the B page has the same two independent treatments. Coverage preserves each harvested result's `included`, `inline`, or `dropped` disposition and exact item mapping.

Four supplementary URLs are recorded as dropped after the initial attempt plus five recovery retries: Tong's combined GR PDF (`https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf`, compressed page-count parsing failure); MIT OCW Lecture 6 (`https://ocw.mit.edu/courses/8-251-string-theory-for-undergraduates-spring-2007/ff2f84174d08a88ac0732145f00b3b7f_lec6.pdf`, compressed page-count parsing failure); Teschl's ODE text (`https://www.mat.univie.ac.at/~gerald/ftp/book-ode/ode.pdf`, compressed page-count parsing failure); and Wang's Banach Calculus notes (`https://www.math.ntu.edu.tw/~dragon/Lecture%20Notes/Banach%20Calculus%202012.pdf`, DNS failure). The Tong combined-PDF record contains 12 attempts: two duplicated six-attempt series against the same URL, corresponding to the two page placements; the history is preserved, and this redundant second series exceeded the five-retry limit. The source was already replaced by separately fetched Tong chapters, and no further retries are pending. The recorded alternatives identify affected items, exact inspected dependencies, and complete local arguments; none of these dropped sources is cited as active evidence. `source-fetch-check --stamp` verified 8/12 source records and accepted the four documented drops; check mode also passed.

## Checks and owner follow-up

- Strict proof-contract validation: 17 items, 31 derivations, 0 errors, 0 warnings. Contracts contain the final proof steps, claims, inputs, supplier excerpts, and applicable boundary/finite checks.
- Scoped `content-policy`, dependency closure, forward-reference, external-citation, cite, render, and phase-format checks passed with no item errors or warnings. Phase precheck examined 15 proof-bearing items, with 0 failures; render check covered all 17 carriers.
- Scoped proof-layout passed: 17 items, 31 steps, 0 defects. The local app checkout did not expose `tsx` to the tool, so the renderer was loaded through a temporary `/tmp/prestige-physics-render` setup without changing the shared app checkout.
- Local item dependency levels are 0–7 as listed above. The run-wide `item-dependency-levels check` reports empty scaffold inventories on unrelated pages, including thermodynamics, later RPM, and QFT pages; it reports no errors for this batch. The run-wide `batch-dependency-levels check` says the aggregate record is stale and asks for recomputation. That run-level derived record is outside this batch's edit scope and is left for the owner after other batches finish.
- The category directory has no `_category.md`; page placement is established by the assigned plan and manifest, but category metadata remains an owner-level repository gap and was not added outside this assignment.


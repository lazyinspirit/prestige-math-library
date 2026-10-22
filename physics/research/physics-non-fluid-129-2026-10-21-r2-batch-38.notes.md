# Batch 38 authoring and evidence notes

Run: physics-non-fluid-129-2026-10-21-r2  
Pair: gr-fx10-cosmological-dynamics-and-shear and gr-fx10-cosmological-dynamics-and-shear-examples

## Scope, plan and conflicts

The current research/plan-spec.json, the run manifest, the dispatch and the detailed inventory all identify the same A/B pair, title, category and three page prerequisites. The plan gives A order **773** and B order **774**. The design index section at research/plan-general-relativity-frontier-expansion-track.md lines 154–160 says **8019**. This is the only plan/design conflict found; the plan controls, so the authored manifest uses 773/774.

The page-plan item arrays are empty scaffolds, not a conflicting inventory. The detailed FX10 module and research/frontier-expansion-2026-10-19/general-relativity/inventory.json specify three A items and two B examples. The optional research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md is absent.

The assigned inventory is complete with two necessary A-page additions. The planned Bianchi datum has only C2 scale factors, while the shared curvature definition assumes a smooth metric. A local C2 curvature definition and a component lemma were therefore added before the Kasner and shear propositions. No claim was narrowed to avoid this regularity gap; the quotient-chart patching and the component calculation are supplied locally. The resulting seven items remain far below the 100-item page limit.

## Dependency order and levels

Direct dependencies are mathematical only. The in-batch graph is acyclic:

| Item | Level | In-batch suppliers |
| --- | ---: | --- |
| def-gr-fx-bianchi-i-data | 0 | — |
| def-gr-fx-bianchi-i-curvature | 1 | Bianchi I data |
| lem-gr-fx-bianchi-i-curvature-components | 2 | Bianchi I data; C2 curvature definition |
| prop-gr-fx-kasner-vacuum | 3 | Bianchi I data; C2 curvature definition; component lemma |
| prop-gr-fx-bianchi-shear-decay | 3 | Bianchi I data; C2 curvature definition; component lemma |
| ex-gr-fx10-1 | 4 | both definitions; component lemma; both propositions |
| ex-gr-fx10-2 | 4 | both definitions; component lemma; both propositions |

These levels use only suppliers authored in this pair; all external mathematical suppliers are context and do not raise the levels. The run scheduling record assigns batch 38 level 1 with requires [31]; the live batch graph was recomputed after manifest authoring and retains that edge and level. The recorded shared scheduling digest binds the pre-authoring manifests and is therefore stale after this manifest changed. The batch scheduling artifact is owner-maintained and was left untouched.

The A page retains its planned requirements gr-homogeneous-cosmology, gr-fx03-geometric-cauchy-stability and gr-curvature-and-tides. The first and third are existing published context, with their relevant current definitions inspected. The FX03 page is the only in-run cross-batch page supplier. Its full current A-page summary and all four A-page item carriers, including the complete finite-slab and observable-continuity proofs, were read. loadStep1Record and step1Decision report current owner ready records for all four; their draft and verification.precheck: pending labels are not prerequisite gaps. The local Kasner/shear proofs use exact finite-dimensional formulas; the FX03 page remains required contextual prerequisite and is not cited as a PDE proof input. Its scoped page dependency row is recorded as verified in the cross-batch JSON.

Focused depcheck also reports the page’s transitive context through gr-fx03 to gr-gr14-full-high-regularity-symmetric-hyperbolic-proof, gr-framework-and-geometry and countability-and-uncountability. These are observations about the supplier page closure, not direct batch-38 consumer edges, so they remain in these notes rather than being added as unsupported cross-batch rows.

The Bianchi definition inherits only AC_omega from the published FLRW and torus definitions. No arbitrary choice or dependent-choice assumption is introduced. The actual component proofs are finite algebra and differentiation. Every local item has domain mathematics and every item dependency is marked mathematical-premise; the library: physics placement records the GR subject page, not a physical premise.

## Mathematical scope and conventions

The datum uses a nonempty open time interval I in the real line, measured in seconds; only the power-law Kasner branch restricts to t>0. Its positive C2 scale factors a_i are in metres, c is in metres per second, and angular coordinates are dimensionless and 2 pi-periodic. Thus H_i and H are in inverse seconds, V in cubic metres, and the scalar sigma squared in inverse seconds squared. The metric has signature (-,+,+,+) and the selected smooth time orientation is N=partial_t, whose squared norm is -c^2.

The smooth curvature supplier fixes R(X,Y)Z = nabla_X nabla_Y Z - nabla_Y nabla_X Z - nabla_[X,Y]Z and R(partial_c,partial_d)partial_b = R^a_bcd partial_a, but its metric hypothesis is smoothness. The local C2 definition adopts that sign/index convention, verifies the Levi-Civita coefficient formula and uniqueness at C2 regularity, and proves consistency on overlaps because the quotient-chart transitions are translations. The following lemma explicitly computes the C2 Christoffel, Riemann and Ricci components; it does not cite a smooth-metric result outside its hypotheses.

The Kasner proposition defines the geometric vacuum equation used here as Ric = 0. This is a mathematical model condition, not a derivation of a physical postulate or an assertion about nature. It proves the two sums for every nonstatic power-law triple and separately shows the static all-zero triple is fully flat. The shear proposition assumes explicit spatial diagonal equations G^i_i + Lambda = Q_i; equal source functions give the unsourced V^-2 scalar law, while unequal functions remain as the displayed source term. The examples establish a nonzero Riemann component for (-1/3,2/3,2/3) and give an explicit local Minkowski chart for (1,0,0). The latter coordinate map is only on a local lift and is not asserted to descend to the torus. No curvature blowup follows from the excluded endpoint t=0 alone.

The scope warnings in the design are retained: these exact models do not prove generic BKL oscillations, past inextendibility of arbitrary developments, a homogeneous no-hair theorem, or an inhomogeneous de Sitter stability result. No density parameter, perturbation spectrum, observational fit, measurement or empirical precision is asserted. Anisotropic sources do not inherit the unsourced shear law.

## Source inspection and disposition

Two independent full-text treatments were inspected for the A page. Jha is the full 108-page lecture-note treatment and satisfies the book/full-lecture requirement. Cáceres–Castañeda–Tejeiro is the independent 11-page research article. Both full-text reads and every selected result’s item-level disposition are recorded in the coverage JSON.

| Source | Full-text locator and use | Qualification |
| --- | --- | --- |
| [Rishabh Jha, *Introduction to Hamiltonian Formulation of General Relativity and Homogeneous Cosmologies*](https://arxiv.org/pdf/2204.03537) | Section 4.3.1, equations (159)–(172), printed pp. 36–38 (PDF pp. 37–39): Bianchi I equations, Kasner route, constraints and exceptional flat triple. | Uses c=G=1 and an invariant-basis/generic-eigenvalue route. Local formulas restore SI c and handle repeated and static exponents directly. Bianchi IX/BKL results are out of scope. |
| [Cáceres, Castañeda and Tejeiro, *Shear Dynamics in Bianchi I Cosmology*](https://arxiv.org/pdf/1003.3491) | Section 2, equations (2.1)–(2.2), and Section 2.1, equations (1.6), (2.8)–(2.17), printed pp. 2–4 (PDF pp. 3–5): diagonal metric/connection and shear evolution with anisotropic-pressure terms. | Uses c=1 and a non-tilted perfect-fluid model, followed by selected dust solutions. Those matter-specific claims are not imported; the local proposition subtracts its explicit diagonal equations. |

The official SciPost PDF route for Jha returned an Anubis access-denied page. A search located the full arXiv version of the same lecture notes; its complete relevant section was opened and read. The alternative and the failed route remain recorded in source_resolution and retrieval_history. The arXiv version is the active source, so no source or mathematical claim was dropped.

## Cross-batch inputs

The JSON cross-batch record has one row: consumer page gr-fx10-cosmological-dynamics-and-shear requires the exact batch-31 supplier page gr-fx03-geometric-cauchy-stability, scoped check verified. The other two required pages are published suppliers outside this run and are recorded as read-only context here, not as unsupported cross-batch review rows. The B companion’s requirement on its A page is in-batch.

## Step 1 readiness and checks

Readiness records are written only after the final item files, A/B placements, contracts and direct dependency declarations are current. They record the complete direct dependency IDs and item-specific evidence. The records establish authoring readiness only; they do not give independent proof approval.

## Step 1 readiness and final checks

Non-owner ready records were refreshed in supplier-before-consumer order for all seven items after the final interval and time-orientation interface was set. A fresh loadStep1Record/step1Decision pass reports every assigned record closed and current. Each record binds its direct item dependencies; the page-level FX03 dependency is separately recorded as verified.

The full-text source stamps are:

| Source | Stamp | SHA-256 prefix |
| --- | --- | --- |
| Jha lecture notes | 1,927,077 bytes; 108 PDF pages; 2026-10-21T11:34:28.915Z | 0393454a6287b1fb |
| Cáceres–Castañeda–Tejeiro article | 135,122 bytes; 11 PDF pages; 2026-10-21T11:34:28.965Z | b3c5ec0cd14a864f |

Final scoped checks:

- content-policy: 7 items, 0 errors, 0 warnings.
- focused depcheck: 7 items; selected prerequisite cycle checks passed across 1,640 items and 312 pages.
- normative precheck: 5 proof-bearing items checked, 0 failing.
- proof-contract: 7/7 items, 0 errors, 0 warnings.
- rendercheck: 9 item/page files, all YAML and KaTeX checks passed.
- proof-layout: 7 changed items, 17 steps, 0 defects.
- source-fetch-check: 2/2 full-text sources fetch-verified and resolved; 0 drops.
- scoped dependency-level calculation: 7 items, no errors; levels 0, 1, 2, 3, 3, 4, 4.
- recomputed current batch graph: batch 38 remains level 1 with requires [31], matching the recorded graph rows.

The official batch-dependency-levels check reports the shared scheduling digest stale because the authoring manifest changed: recorded input SHA-256 e9464e11acecf8f1a8bda27ba93ac324cf04cd85b6d1fd546ef373621e7cc91b; current input SHA-256 1ab8ad6290d47783d89c4a1dce385731dd315002f034dc4208bc0da534ea1f07. Its graph rows are unchanged. This scheduling artifact is owner-maintained and was left for the drained construction join to refresh.

The run-wide proof-contract-coverage check stops at the unrelated empty inventory qsmx-modular-equilibrium. The assigned batch’s seven strict proof contracts pass; no other batch inventory was edited.

No mathematical prerequisite remains unresolved within this pair. The local C2 curvature supplier closes the regularity gap identified in the planned route; source limitations and the physical scope warnings remain recorded above.

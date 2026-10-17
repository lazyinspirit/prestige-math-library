# Batch 57 — authoring notes

Run: physics-remaining-80-2026-10-17  
Pair: tgr-mc04 / tgr-mc04-examples  
Category: thermodynamics-and-general-relativity-mathematics  
Library: mathematics

## Plan and design reconciliation

The binding owner direction was read before authoring. The complete TGR-MC04 design section and the current plan-spec entry agree on the A/B page IDs, order 611/612, title, category, mathematics library, companion, and A-page requirement tgr-mc03. The design and proposed inventory both reserve three A items and one B example; the plan-spec items arrays are empty inventory placeholders, not a conflicting item assignment. No scope or proof-route conflict was found.

The page files remain under the 100-item cap: three items on tgr-mc04 and one example on tgr-mc04-examples.

## Item inventory and dependency levels

The exact authored inventory, direct dependencies, and recomputed in-run levels are:

| Item | Level | Direct dependencies | In-run suppliers |
|---|---:|---|---|
| def-tgr-entropy-only-radiation-state | 0 | none | none |
| lem-tgr-radiation-state-balance | 1 | def-tgr-entropy-only-radiation-state; def-schwartz-space-and-its-seminorms; def-countable-choice; thm-gr-nondegenerate-levi-civita-and-tensor-derivative; lem-tgr-constant-linear-energy-causality | def-tgr-entropy-only-radiation-state (0); lem-tgr-constant-linear-energy-causality (0) |
| lem-tgr-cattaneo-stability-causality | 1 | def-countable-choice; def-schwartz-space-and-its-seminorms; lem-tgr-constant-linear-energy-causality | lem-tgr-constant-linear-energy-causality (0) |
| ex-tgrmath-cattaneo-damped-mode | 2 | lem-tgr-cattaneo-stability-causality | lem-tgr-cattaneo-stability-causality (1) |

The scoped item-level dependency calculation included batch 57 and its only in-run item supplier from batch 56. It found no level errors: computed levels are 0, 1, 1, and 2. The current batch graph computes batch 56 at level 2 with requires [53, 55] and batch 57 at level 3 with requires [56]. No cycle was found.

The latest read-only run-wide graph recomputation at final validation gives input hash 4bdb63061b5aaf20c88ddc8b751dcd33020f63bd4f7e8d61cfbb16e0df03f93d. It gives batch 56 level 2 with requires [53, 55] and batch 57 level 3 with requires [56], with no cycle. The shared run-wide batch-dependency-levels file carries earlier input hash 2f4f39f4278dc89c3f6aab6d0ba61a1790e3bce6a0483da898fe467f7249c977. `batch-dependency-levels.mjs check` reports the shared receipt stale: current prerequisite rows changed for batches 22 (added 6), 46 (added 34), and 47 (added 36 and 38), while batches 56 and 57 retain their exact levels and requires edges. This shared receipt is owner-scoped and was not rewritten; the owner must refresh it at the drained run join.

## Dependency review and current page hold

The actual lem-tgr-constant-linear-energy-causality carrier and its complete proof were inspected. It states the AC-omega, constant-matrix, positive-symmetrizer, damping, Schwartz/periodic data, Fourier norm, and shrinking-ball hypotheses used here. Its current Step 1 decision is ready with closure hash e3482779ab371e1f2ea428cfaf3eff4708fd2e24a83abe3034e9113b2b39526a. Its carrier remains draft and the consuming evolution clauses are conditional; ready records and verified dependency rows are not independent proof approval.

The two current item edges to that supplier are verified as scoped interface checks. The supplier does state a generic periodic supremum bound with unspecified constant $C_{s,L,M}$. The Cattaneo item derives its explicit componentwise $K_{r,L,C}$ temperature bound locally from Fourier reconstruction, the temperature Fourier coefficients, and the $C|\widehat\theta_k|^2$ part of the supplier's actual weighted norm. This avoids comparing the SI temperature and heat-flux coordinates using a least eigenvalue of their mixed-unit matrix.

The required page edge tgr-mc04 to tgr-mc03 remains open. The tgr-mc03 page exists, and the exact MC03 item used by this batch is current and ready, but batch-56 notes record the page's separate tgr-mc02 edge open because two MC02 supplier decisions are escalated on stale MC01 readiness hashes and a related Gibbs-Euler record is hash-stale. This page-level hold affects the planned prerequisite chain for tgr-mc04. No MC02 item conclusion is used in the four proofs here, and no outside carrier or readiness record was changed. The exact edge is recorded as open in the batch cross-dependency array; transitive context is recorded here rather than as an off-owner review row.

## Mathematical scope and proof route

- def-tgr-entropy-only-radiation-state defines positive-domain scalar maps for arbitrary a_R>0. It assigns conventional SI units only conditionally and does not derive a quantum blackbody coefficient or assert a physical realization.
- lem-tgr-radiation-state-balance proves the inverse and differential identities directly, contracts the specified stress conservation equation with the normalized flow to obtain the energy projection, derives entropy-current conservation using h=Ts, and checks the frozen rest linearization and symmetrizer.
- lem-tgr-cattaneo-stability-causality proves the telegrapher consequence, effective entropy production, quadratic Lyapunov identity, symmetrizer, characteristic spectrum, flux bound, comparison-speed threshold, and a periodic small-data positivity estimate. The periodic estimate includes Fourier-series recovery and a componentwise temperature bound using the $C|\widehat\theta_k|^2$ portion of the supplier norm, avoiding a least-eigenvalue comparison of mixed-unit coordinates. The supplier's generic supremum estimate is recorded as context but is not used to obtain the explicit constant.
- ex-tgrmath-cattaneo-damped-mode verifies a real-valued underdamped periodic mode by direct substitution. The positive-temperature proxy is asserted only for t>=0 and no material-specific observation is claimed.

The remaining direct prerequisites are mathematical only. The imported mathematical files used by the constant-linear supplier and the Schwartz definition were checked against research/math-imports.json; all seven used source hashes match their pins. The local published GR connection theorem's full statement and proof were inspected, including metric compatibility and tensor derivative properties.

## Source reading and disposition

The full-text source coverage remains in research/physics-remaining-80-2026-10-17-batch-57.coverage.json. Two independent lecture-note treatments were read for the radiation state and perfect-fluid context, and two independent papers for the constant-parameter Cattaneo model:

- Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, full 37-page PDF; §4.3 equations (4.10)–(4.14), PDF pp. 15–16, and §§5.2–5.3 equations (5.4)–(5.9), PDF pp. 17–18: [full text](https://arxiv.org/pdf/gr-qc/0603009). The source uses particle-number variables; the local entropy-only argument does not import a particle current.
- Nicolas Borghini, Elements of Hydrodynamics, full 202-page lecture notes; Chapter X.3.1–X.3.2, PDF pp. 157–160, and Chapter XI.2.1 equations (XI.17)–(XI.19), PDF pp. 177–178: [full text](https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics22/Hydrodynamics2022.pdf). The radiation section supports p=epsilon/3 and the T^4/T^3 scaling, but does not determine a_R; the entropy proof uses conserved-charge hypotheses that are not assumed locally.
- N. Andersson and G. L. Comer, Variational multifluid dynamics and causal heat conductivity, full 15-page PDF; §4 equations (4.2)–(4.12), PDF pp. 5–7: [full text](https://arxiv.org/pdf/0908.1707). Its constant-parameter Cattaneo equation is model context; it does not prove the local entropy, energy, existence, or speed claims. The paper notes that constant alpha/sT is a comparison assumption, not a general material law.
- N. Andersson and G. L. Comer, Heat conduction in rotating relativistic stars, full 13-page PDF; §2.1 equations (1)–(3), PDF pp. 1–2: [full text](https://arxiv.org/pdf/1804.01520). It describes the Cattaneo term phenomenologically; no measured coefficient or physical realization is inferred.

All four selected full-text URLs have existing fetch stamps. source-fetch-check --stamp verified 4/4, with 0 new stamps and 0 documented drops. No retrieval failure or unresolved source-access escalation occurred. Coverage retains the exact item-supported results, read extents, limitations, searches, and dispositions.

## A/B pages and scoped checks

Both draft pages are present with the exact assigned inventories. The canonical plan's page entries are empty item placeholders, so the selected physics-check --plan command reports 0 items while checking the two selected page records and their prerequisite context.

Final scoped check results:

- Precheck on the four assigned carriers: 3 proof-bearing items checked, 0 failing. The proposed canonical phase renumbering for the Cattaneo Fourier estimate and comparison-speed step was adopted before this final pass.
- proof-layout on all four changed items: 4 items, 18 steps, 0 defects.
- rendercheck on the four items and both pages: 6 files; YAML and KaTeX passed with no errors.
- proof-contract --strict: 4/4 items checked, 0 errors, 0 warnings.
- depcheck with the explicit four-item selection: 4 selected items; 1,340 dependency-closure items and 232 prerequisite pages checked; passed. A focused in-run item-level calculation including the direct batch-56 supplier reports levels 0, 1, 1, 2 for the assigned definition, radiation lemma, Cattaneo lemma, and example, with no cycle or mismatch.
- content-policy --manifest-only --authored on the batch manifest: 4 items, 0 errors, 0 warnings.
- selected physics-check --plan for tgr-mc04 and tgr-mc04-examples: 0 errors, 0 plan items because the plan entries are inventory placeholders.
- manifest-deps: all four batch entries have explicit dependency arrays. manifest-integrity: 160/160 run pages accounted for, no scope drift.
- Cross-batch JSON validation: exactly three owned dependency rows, valid array shape and nonempty evidence; the MC03 page edge is open and the two exact item interface checks are verified.
- source-fetch-check --stamp: 4/4 sources fetch-verified; 0 newly stamped.

Final Step 1 item decisions are recorded separately in the four run-local readiness files. Each record is non-owner, ready, and current:

| Item | Readiness file | Dependency-closure hash |
|---|---|---|
| def-tgr-entropy-only-radiation-state | physics-remaining-80-2026-10-17-step1-def-tgr-entropy-only-radiation-state.json | 757006ffe710bbb5cde22f8b2435c64afcb44ffb6958940fa40a82166359cb1d |
| lem-tgr-radiation-state-balance | physics-remaining-80-2026-10-17-step1-lem-tgr-radiation-state-balance.json | 16b10038f3d325ebd1c74d0570ac9a23abe5b677430f5001e64ddb9608e5b12c |
| lem-tgr-cattaneo-stability-causality | physics-remaining-80-2026-10-17-step1-lem-tgr-cattaneo-stability-causality.json | c6aa22f4044821289d6d6853d5d09ec32f4bd8016b6a3f2dbf4971323eafb0d1 |
| ex-tgrmath-cattaneo-damped-mode | physics-remaining-80-2026-10-17-step1-ex-tgrmath-cattaneo-damped-mode.json | 4adbe09144e7eec3b3a57cd74132f358d3567ac00dd2891873a2fe2c14c0962b |

The open tgr-mc04 to tgr-mc03 page edge remains a distinct unresolved batch prerequisite. These item-level records do not approve proofs or close that page edge.

## Scope boundaries

No imported mathematical source, root original, other pair, shared plan, run engine state, verdict, or published content was edited. No source was dropped. The owner retains the open transitive tgr-mc02 page hold and the stale shared batch-level input hash for run-wide reconciliation.

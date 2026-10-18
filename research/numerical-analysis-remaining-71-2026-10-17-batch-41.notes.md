# Current owner integration — both original pressure assertions refuted

Recorded 2026-10-17T21:48:23.950Z. Current inventory:23A+7B=30items, same71-pair frontier. The new level9 generated counterexample is cex-na-graded-mini-mass-initialization-pressure-rate, complete local proof, original-owner consumer work and SAME-child actual canonical acceptance. All positive velocity and primitive Statements/proofs are retained except the velocity theorem's stale editorial status sentence. See research/numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/canonical-materialization-handoff.md and research/numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-direct-dual-cycle5/independent-canonical-proof-consumer-audit-smooth-fresh-c4.md. Root alone integrates current manifests/contracts/readiness; no native execution or gate credit is inferred.

The source-author notes below are retained historical observations and counts, superseded by the actual current manifest, current coverage and dated owner integration receipt.

---

# Batch 41 authoring notes — PE06 evolutionary incompressible flow

## Scope and controlling-plan reconciliation

This dispatch owns the A/B pair `energy-stable-incompressible-navier-stokes-discretization` and its five examples. The controlling `plan-spec.json` row (A-page order 2636) and current task manifest both require the pages `mixed-finite-elements-and-stokes-stability` and `nonlinear-parabolic-compactness-and-monotone-evolution`; the run-local batch dependency record assigns batch 41 level 1 with prerequisite batches 31 and 39.

The older PE06 design section in `research/plan-numerical-spatial-track.md` §PE06 also names same-frontier NA-36 and PE12, and its proof route refers to NA-28 scaling. That list is broader than the current task and `plan-spec.json` row, which declare NA-34 and PE12 only. I followed the current plan/task interface and reused the available shape-scaling, discrete-energy and Sobolev suppliers through their actual item dependencies. This discrepancy is recorded here; no shared plan or supplier page was changed.

The retained PE06 design requires the pressure-bearing weak limit with $p\in L^{4/3}(0,T;L^2_0(D))$ and a smooth-branch velocity/pressure error estimate. Those pressure claims remain open and are preserved explicitly in `rem-na-pe06-pressure-recovery-escalation`; they are not certified by the velocity-only theorem statements. The exact gaps and affected claims are in that item.

## Inventory, dependencies and item levels

The current batch manifest contains 17 A-page items and 5 B-page examples (22 total, below the 100-item page cap). Its `deps` arrays are synchronized with the item frontmatter. The run graph was recomputed from all current page manifests; `justified_by` remains a separate well-definedness discharge and is not included in the scheduler's item levels.

| Dependency level | Items |
|---:|---|
| 0 | `lem-na-solenoidal-scalar-equations-give-weak-continuity` |
| 2 | `def-na-evolutionary-skew-convective-form` |
| 3 | `lem-na-evolutionary-skew-convective-form-bound`; `def-na-evolutionary-incompressible-ns-weak-solution` |
| 4 | `lem-na-evolutionary-ns-weak-form-is-well-defined`; `def-na-solenoidal-energy-weak-ns-velocity`; `def-na-mini-navier-stokes-backward-euler-scheme`; `thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d` |
| 5 | `lem-na-mini-be-scheme-is-well-defined` |
| 6 | `lem-na-continuous-pressure-recovery-from-solenoidal-residual` |
| 8 | `lem-na-mini-fortin-l2-approximation`; `thm-na-mini-be-step-existence-energy` |
| 9 | `lem-na-mini-weak-solenoidal-compactness`; `thm-na-mini-solenoidal-stokes-projection-error` |
| 10 | `thm-na-mini-navier-stokes-be-subsequential-limit`; `thm-na-mini-be-smooth-velocity-error` |
| 11 | `rem-na-pe06-pressure-recovery-escalation` |

B-page levels are 2: `ex-na-zero-mean-pressure-gauge`; 3: `ex-na-periodic-taylor-green-vortex`; 8: `ex-na-unit-square-mini-mesh-family`; 9: `ex-na-mini-backward-euler-energy-budget`; 10: `ex-na-conditional-three-dimensional-flow-computation`. Exact direct supplier arrays are in `numerical-analysis-remaining-71-2026-10-17-batch-41.pages.json` and match the carriers. The new level-0 scalar weak-continuity lemma is placed before its consumer; it supplies the countable dense-test argument needed to construct a weakly continuous $H_\sigma$ representative without taking an uncountable intersection of null sets.

## Cross-batch supplier checks

The assigned A page has two page-level edges and 63 direct item edges: 54 to batch 31 and 9 to batch 39. Each edge is recorded as author-verified in `numerical-analysis-remaining-71-2026-10-17-batch-41.cross-batch-dependencies.json`, with current supplier and consumer excerpts. This verifies the interfaces used by this draft only; it is not proof acceptance or independent supplier approval.

The batch-31 bodies checked include `def-na-stokes-zero-mean-pressure-and-velocity-spaces` (level 1; $d=2,3$, bounded connected Lipschitz domain, $V=H^1_0$, $Q=L^2_0$), `def-na-mini-element-p1-bubble-p1-spaces` (level 2), `def-na-discrete-weak-and-exact-divergence-free-spaces` (level 3), `thm-na-mini-element-fortin-stability` (level 7; matching shape-regular conforming meshes and the actual MINI pair), `thm-na-mini-element-h1-pressure-error` and `thm-na-discrete-helmholtz-projection-and-pressure-schur` (level 8), `thm-na-bounded-lipschitz-domain-divergence-right-inverse` (level 5), `thm-na-mixed-galerkin-quasioptimality` (level 2), `lem-na-zero-mean-of-zero-boundary-divergence`, `lem-na-homogeneous-dirichlet-korn-identity`, and `lem-na-scott-zhang-boundary-preserving-p1-interpolant` (level 0). Their actual statements were checked against the spaces, discrete kernel, coercivity, Fortin, pressure gauge and projection claims cited here.

The batch-39 bodies checked include `def-pe12-gelfand-triple` (level 0), `lem-pe12-outward-zero-brouwer` (level 0), `lem-pe12-evolution-energy-chain-rule` (level 1), `thm-pe12-discrete-aubin-lions-compactness` (level 1), `lem-pe12-space-time-gradient-weak-compactness` (level 1; applied componentwise to the finite-dimensional vector product), `lem-pe12-bochner-lp-mollification` and `thm-pe12-bochner-lp-completeness` (level 0). Their actual hypotheses are carried in the corresponding PE06 facts and proofs. Batch 39 also has escalated nonlinear finite-element branch items, but those are not PE06 dependencies. Its $L^2$ projector stability theorem is onto the full $V_h$ space; it does not give the missing $H^1$ stability of the orthogonal projector onto the MINI kernel $Z_h$.

The 18 unique direct item suppliers across batches 31 and 39 have current Step-1 decisions `ready`, `owner:false`. This is prior author-readiness evidence, not independent acceptance of those suppliers.

## Sources and harvested results

Four full-text sources were inspected and stamped; their locators, supported items and per-result dispositions are recorded in the coverage file.

- Süli–Tscherpel, complete arXiv PDF (43 pages): §2.1, §§3.1–3.2, assumptions, MINI example, and §4 / Theorem 4.1 proof. Its auxiliary stress regularization is explicitly not imported as the unregularized Newtonian proof.
- Xiaoming He, complete Chapter 9 (77 pages): §1 weak formulation and §3 backward Euler. It is a 2D Taylor–Hood treatment, not MINI or a 3D stability source.
- Guermond, complete MATH 661 Chapter 53 (16 pages): §§53.2–53.4 for Stokes, pressure gauge and divergence lift.
- Boffi–Brezzi–Fortin, complete textbook PDF (691 pages): Chapter 5 Theorem 5.2.2 and the cited Chapter 8 MINI sections.

The Boffi URL initially returned `ENOTFOUND`; the recorded second fetch of the same full-text URL succeeded. Both attempts are preserved in `recovery_attempts`, and the successful fetch stamp records 7,683,535 bytes and hash prefix `4e171bb3c7060771`. No source was dropped. The other source stamps and all harvest dispositions remain in the coverage file.

## Mathematical decisions and unresolved PE06 claims

- The pressure recovery lemma is conditional on an actual residual $R\in L^s(0,T;V^*)$ annihilating $V_\sigma$ outside one common null set. The subsequential limit proof controls the time derivative only on $V_\sigma$; extending it by a divergence right inverse does not establish the full-space distributional derivative. Therefore no $L^{4/3}_tL^2_0$ pressure follows.
- The smooth estimate proves the velocity error only and retains explicit viscosity dependence, including $\Lambda=1+C_D\nu^{-3}M_u^4$. The full-test pressure residual would require a uniform $H^1$-stable $L^2$ projector onto $Z_h$ or another complete estimate. The published-in-run discrete Helmholtz result supplies only its $L^2$ best-approximation property, while the PE12 projector has a different range.
- Proposed A-page suppliers, all unauthored and unaccepted: `thm-na-mini-kernel-projector-h1-stability` would prove uniform $H^1_0$ stability of the $L^2$-orthogonal projector $P_{Z_h}:V_h\to Z_h$ on the bounded connected Lipschitz polyhedral $d=2,3$ domain and the same matching shape-regular MINI mesh family. `lem-na-mini-limit-full-space-time-derivative-bound` would then prove the limit velocity's distributional derivative on **all** $V=H^1_0(D)^d$ lies in $L^{4/3}(0,T;V^*)$ under the stated $f\in L^2_tL^2_x$, $u_0\in H_\sigma$, energy and vanishing-mesh/time-step hypotheses. Place these after the current velocity-limit result and before `cor-na-mini-limit-pressure-bearing-weak-solution`, which would combine that derivative, annihilation on $V_\sigma$, and the existing divergence-right-inverse pressure lemma. `thm-na-mini-be-smooth-pressure-error` would use the same kernel-projector estimate with the existing smooth velocity theorem and MINI inf-sup estimate. The proof currently controls time derivatives only on $V_\sigma$; extending by a divergence lift alone does not prove full-space differentiation.
- The missing claims are exactly the PE06 pressure-bearing subsequential limit with $p\in L^{4/3}(0,T;L^2_0(D))$ and the smooth-branch pressure error estimate. The existing PE12 $L^2$ projector has range $V_h$, not $Z_h$. `rem-na-pe06-pressure-recovery-escalation` records these affected claims and the discrete supplier proposal. These proposed IDs and hypotheses are reconciliation directions only; no proof or acceptance is claimed. Owner reconciliation is required before either pressure claim can be considered ready.
- The discrete summation-by-parts proof uses left-endpoint test values on arbitrary nonuniform partitions; the energy limit chooses the first time node above $t$ so the reconstructed kinetic term is exactly the one at $t$ and controls the overshoot work.
- Choice branches are explicit: Countable Choice is inherited by the weak formulation, interpolation and finite-step inputs; the compactness and subsequential-limit arguments state full Axiom of Choice; the scalar weak-continuity helper names its countable selections. No stronger branch is inferred from Countable Choice.

## Scoped checks and current blockers

- Scoped precheck: 22 assigned carriers inspected, 17 proof-bearing checked, 0 failures.
- `proof-layout` on all 17 changed proof-bearing carriers: 68 steps, 0 defects.
- `rendercheck` on the two pages and 22 assigned carriers: 24 files passed YAML, KaTeX and delimiter checks.
- Strict proof contracts: 17/17 checked, 0 errors, 0 warnings. The contracts record 183 exact supplier citations and 68 numbered steps with inputs, plus all eight boundary dispositions per item.
- No registered finite-smoke check applies to these PDE claims; the finite boundary cases and worked examples are computed in their local proofs. No test suite was run.
- `manifest-deps`: 22 items, 0 missing dependency arrays, 0 errors.
- Run-wide `item-dependency-levels`: 1,405 items across 142 pages, maximum level 12; passed. The batch dependency input states batch 41 level 1 with prerequisites 31 and 39.
- The `batch-dependency-levels.mjs check` could not complete because the same unrelated malformed batch-42 frontmatter blocks its repository-wide YAML read; the current `batch-dependency-levels.json` row for batch 41 was inspected directly and agrees with the task (level 1, batches 31 and 39).
- Coverage checklist: 1 A page, 16 harvested source results, 0 errors, 0 warnings. `source-fetch-check --stamp`: 4/4 sources verified; 0 newly stamped.
- Focused `depcheck` for the 22 items and two pages: dependency closure 1,834 items and 364 pages; 0 errors, 0 warnings.
- The batch-41 cross-batch input was compared against all current direct `requires`/`deps` edges: 65/65 recorded (2 page, 63 item), no missing or orphan rows.
- The read-only global `frontier-dependency-ledger.collect` could not complete because unrelated current-run frontmatter is invalid or missing: its first YAML failure is batch 42 `items/def-maxwell-edge-fem-semidiscretization.md` at line 23, column 14; the scan also finds malformed batch 57/71 entries and absent carriers in batches 25/71. Those files and the shared ledger are outside this dispatch and were left untouched. The batch-41 edge input was validated locally instead.
- Current autopilot status remains `1-scaffold`, `54/71` covered, with batch 41 among the missing authoring results and no writer in flight. The engine reports the existing owner repair/recertification blocker from `step1-blockers.json`; no run transition or shared engine state was changed.

Step-1 records are authoring-readiness records only, not independent proof approval. The 22 batch-41 records are current against their item/dependency hashes: 21 `ready`, one `escalated`, no owner override. The pressure escalation item is `rem-na-pe06-pressure-recovery-escalation`; the other assigned items are ready for independent review with their current statements, suppliers, placement and contracts.

## Owner-requested pressure continuation

The original 22 items and five examples are preserved. The current A page has 19 items after adding exactly two same-page results: lem-na-solenoidal-evolution-integrated-pressure-recovery and thm-na-mini-be-smooth-integrated-pressure-error. The A/B pair and its requires edges are unchanged; the A page remains under the 100-item cap. The plan section and plan-spec.json still agree on the approved PE06 scope and proof route. The earlier NA-36 versus NA-34 interface conflict is recorded above and remains resolved in favor of the current plan/task interface. The current owner direction supersedes the earlier suggested kernel-projector route only: it does not change any original Statement or Definition.

The combined recovery item follows thm-na-mini-navier-stokes-be-subsequential-limit; the dependency is one-way. Both additions are level 11, one plus the maximum in-run supplier level 10. The updated escalation remark is level 12 because it depends on both additions. Batch 41 remains run-level 1 with prerequisite batches 31 and 39; no cycle was introduced. The original velocity-limit and smooth-velocity Statements and the pressure-bearing solution Definition remain unchanged. All five B-page examples and its prose remain unchanged.

The recovery proof constructs the actual full-test integrated residual, uses the bounded divergence right inverse and Riesz representation to recover the unique pressure primitive, and proves the discrete primitive bound and weak time-distribution convergence only after the existing velocity limit. Its additional necessary-and-sufficient interface is pressure in $L^{4/3}_tL^2_0$ exactly when the actual full distributional derivative lies in $L^{4/3}_tV^*$. The smooth addition proves a first-order estimate for the pressure primitive and its stated negative time norm. Neither result claims instantaneous pressure regularity or rate. Both d=2 and d=3 Sobolev routes are named explicitly: dimension three uses the zero-boundary p=2 critical embedding; dimension two uses p=3/2 and finite-measure Holder. No d=2, p=2 critical formula is invoked.

The proposed uniform H1 stability of the mass-orthogonal projector onto the weak MINI kernel is false. The exact square-family obstruction in research/numerical-analysis-remaining-71-2026-10-17-ROOT-mini-pressure-supplier-cycle1/projector-obstruction.md was checked; no such supplier is authored or used. The remark and A-page prose now record the false route, preserve the two original instantaneous obligations, distinguish the source's pressure-free formulation from the exact Newtonian/L2-forcing question, and retain those obligations as owner escalations rather than open problems.

For the additive proofs, the author inspected the complete Suli–Tscherpel source at the cited pressure-free formulation, MINI/Fortin and time-reconstruction sections, the full 16-page Guermond Chapter 53 at its divergence-lift and inf-sup arguments, and the complete cited He Chapter 9 weak-form/backward-Euler sections. Their exact scope limits are recorded in the updated source harvest: Suli–Tscherpel motivates distributional pressure but does not establish this item's exact primitive theorem; Guermond supplies static divergence/inf-sup context only; He is a 2D Taylor–Hood implementation context, not a MINI estimate. The already successful full Boffi–Brezzi–Fortin retrieval and its earlier failed attempt remain unchanged in coverage.json; that textbook is used only for its previously read static mixed-MINI context. No new retrieval failed and no source was dropped.

The proposed smooth-item source list named the full-interval absolutely-continuous FTC and the one-dimensional W1p corollary while declaring only Countable Choice; the actual suppliers require a stronger AC/DC branch. The final smooth proof preserves the original Countable Choice scope and proves the needed Lipschitz representative directly by a Bochner primitive, scalar distributional derivative argument, separability and a countable common-null-set construction. No AC or DC claim was added to the smooth theorem.

Current authoring closure is recorded in the continuation supplement below after the final scoped checks. The existing escalated Step-1 record for rem-na-pe06-pressure-recovery-escalation remains untouched; it is not overwritten. The exact current escalation and both additive conclusions are recorded here and in the current remark.


## Owner-requested continuation — final scoped authoring record

The current manifest contains 19 A-page items and 5 B-page examples (24 total). The two commissioned additions are placed at level 11, after the existing velocity-limit and smooth-velocity results they consume; the updated escalation remark is level 12. The original 71-pair frontier and all five examples are preserved. Both original velocity-limit and smooth-velocity Statements and the pressure-bearing solution Definition remain unchanged. The recovery theorem follows the existing subsequential velocity limit; it does not reverse that dependency. The rejected full-test uniform H1 mass-projector route was removed from the proposed proof path and retained only as the proved square-family obstruction in the escalation record.

The recovery result proves a unique mean-zero time-distribution pressure with a bounded continuous primitive, bounded discrete primitives and weak time-distribution convergence after the existing velocity limit. Its exact regular-pressure criterion is membership of the actual full distributional derivative in $L^{4/3}(0,T;V^*)$. The smooth addition proves only the pressure-primitive estimate and its stated negative-time norm. Neither additive result discharges the original instantaneous $L^{4/3}_tL^2_0$ pressure clause or instantaneous smooth pressure-error rate. Those two unchanged claims remain explicitly escalated to the owner with the actual derivative and discrete full-test derivative-error gaps; they are not relabeled as open problems. The proof distinguishes the d=3 p=2 Sobolev route from d=2 p=3/2 plus finite-measure Holder.

The final actual checks were:

- `precheck`: both new items pass; `proof-layout`: the two additions and escalation item pass with 31 proof steps and 0 defects.
- Strict batch-41 proof contracts: 19/19 items checked, 0 errors, 0 warnings. Coverage checklist: 1 page, 27 harvested results, 0 errors, 0 warnings. `source-fetch-check --stamp`: all 4 full-text sources verified, 0 newly stamped and no new recovery retries (the earlier Boffi failure/success history remains preserved).
- Focused `depcheck`, `fwdcheck`, `extcheck`, and `citecheck` pass: selected additions 2/2, 0 errors or warnings. `rendercheck` passes all 5 explicitly inspected targets (two additions, escalation item, A page and B page). `manifest-deps` reports 24 items, 0 missing dependency arrays, 0 errors.
- `item-dependency-levels.mjs check` passes for the current run: 1,425 items on 142 pages, maximum level 12. The batch-41 manifest still declares level 1 with prerequisite batches 31 and 39. Its cross-batch input now contains 75 rows, including 10 current author-side rows for the new items; a direct manifest comparison found 75/75 expected edges, with no missing, extra or duplicate rows. These are interface checks, not independent proof approval.
- `batch-dependency-levels.mjs check` currently reports `Stale batch dependency levels for numerical-analysis-remaining-71-2026-10-17`. The stored batch-41 row still says level 1, prerequisites 31 and 39. This is a shared run-derived artifact; it was left untouched for owner recomputation.
- Run-wide `proof-contract-coverage` currently stops on `Invalid or duplicate frontier item in numerical-analysis-remaining-71-2026-10-17-batch-48.pages.json`. The complete batch-41 strict proof-contract check passes independently; batch 48 and the run-wide artifact were left untouched.

`step1-decisions record` marks both new items `ready`, `owner:false`, with their full direct dependency lists and current item/dependency hashes. The prior escalation record for `rem-na-pe06-pressure-recovery-escalation` was not overwritten. The final run-wide Step-1 check reports 1,332/1,425 ready, 93 outstanding items, and remains open; the PE06 escalation is still present, while both new items are closed as ready. These records show authoring readiness only, not independent mathematical review or acceptance. No test suite was run.

A final constants audit corrected the smooth primitive proof's pressure approximation: it now uses the $L^2$-orthogonal projection onto the finite-dimensional pressure space $Q_h$, so it applies the Statement's selected best-approximation constant $C_I$ exactly. The proof locally derives that a finite such constant exists from the mean-adjusted face-average interpolant, and it declares the published closed-subspace Hilbert decomposition supplier. This is a pressure-space projection only; it does not invoke the false $H^1$ stability claim for the velocity-kernel projector onto $Z_h$. The new dependency is outside the in-run frontier, so both additions remain at level 11.

A subsequent read-only recomputation changed the earlier batch-level check result: the current `batch-dependency-levels.mjs check` passes for all 71 batches (maximum level 5). The batch-41 row remains level 1 with prerequisites 31 and 39; the earlier stale result above is retained as check history. After the smooth proof's Hilbert-projection dependency was declared, the current item-level check passes for 1,432 items across 142 pages, maximum level 12; both additions remain level 11. The current run-wide proof-contract-coverage blocker remains the malformed/duplicate batch-48 manifest entry recorded above.

After recording the updated smooth-item dependency hash, the final run-wide Step-1 check reports 1,303 ready of 1,432 current items, 129 outstanding, and remains open. Both additive items are closed as `ready`; the original PE06 escalation remains `escalated`. The earlier 1,332/1,425 observation above is preserved as history and superseded by this current check; other active authoring changed the run inventory/readiness while this continuation was underway.

## Final check after current frontier updates

Both new readiness hashes were recomputed after the final proof edits. The latest full Step-1 check reports 1,305 ready of 1,432 current run items, 127 outstanding, and remains open. Both additions are closed as `ready`; the original PE06 escalation remains `escalated`. This is authoring readiness only.

The latest batch-local checks still pass: 19/19 strict contracts, two prechecks, 31 proof-layout steps across the two additions and escalation, five rendered targets, 24 manifest items, 27 source-harvest results, 4/4 full-text fetch stamps, and all current item levels (1,432 items across 142 pages, maximum 12). The direct manifest comparison remains 75/75 expected cross-batch edges with no missing, extra or duplicate rows.

The live run changed again after an intermediate all-71-batch dependency-level check passed. The latest check now reports stale batch dependency levels; the stored batch-41 row remains level 1 with prerequisites 31 and 39. The latest run-wide proof-contract-coverage check reports `Missing frontier item lem-bem-smooth-trace-and-helmholtz-layer-extension`, outside batch 41. Earlier malformed/duplicate batch-48 and intermediate pass/stale observations are retained above as history. These shared checks were not repaired from this assigned batch.

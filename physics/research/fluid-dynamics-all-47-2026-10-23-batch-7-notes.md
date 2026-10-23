# Batch 7 authoring notes — `fd-x03`

Run: `fluid-dynamics-all-47-2026-10-23`  
Batch: 7  
Page order: 373, `fluid-dynamics-mathematics`

## Controlling design and plan comparison

- `research/plan-fluid-dynamics-refresh-track.md` L212–243 controls `fd-x03`. Its header names the 2026-10-18 owner refresh as controlling, reserves three A results and three B examples, makes B a leaf, and preserves the inherited local proof modules and their warnings.
- The task's refresh-track L455–488 is a separate physical pair, `fd-px03`, with physical interpretation and extra physical prerequisites. It is not part of this assigned mathematical pair.
- The historical `research/plan-fluid-dynamics-track.md` L190–219 describes the same FD-X03 reservation but is explicitly superseded by the owner refresh at the top of the refresh-track. Its old source-inventory path does not control.
- `research/plan-spec.json` and `research/fluid-dynamics-all-47-2026-10-23-batch-7.pages.json` agree with the controlling refresh on the A/B IDs, category/library, order, titles, companion, and required pages. Their `items: []` entries are empty authoring scaffolds; the controlling `proposed-inventory.json` resolves the complete 3/3 inventory below. No page-level plan conflict was found.
- `research/fluid-dynamics-all-47-2026-10-23-owner-authoring-direction.md` is absent. The current blocker file contains only a historical stage-stalemate entry for unit 30 and does not mention batch 7.

## Assigned inventory, dependencies, and levels

Controlling inventory: `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json`, pair `FD-X03`; page map: `research/scaffold-refresh-2026-10-18/fluid-dynamics/inventory-and-pathway.md`, §FD-X03.

| Item | Side | Exact direct dependencies | `dependency_level` |
|---|---|---|---:|
| `thm-fd-x07` | A | `def-fd-x00`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `def-countable-choice` | 1 |
| `thm-fd-x10` | A | `def-fd-x00`, `thm-fd-x07`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `def-countable-choice` | 2 |
| `thm-fd-x11` | A | `def-fd-x00` | 1 |
| `ex-fd-x11-application` | B | `thm-fd-x11` | 2 |
| `ex-fd-x07-formal-verification` | B | `thm-fd-x07` | 2 |
| `ex-fd-x10-formal-verification` | B | `thm-fd-x10` | 3 |

The run's `batch-dependency-levels.json` puts batch 7 at level 1 because it requires batch 5. The item levels above use batch-5 `def-fd-x00` at level 0, then one plus the maximum in-run supplier level. The within-batch chain is `thm-fd-x07` → `thm-fd-x10`, with each B example consuming only its named A theorem. No cycle is present. A/B capacities are 3/3, below the 100-item cap.

The design interface in the inherited `proofs.md#x00` is now compared with the current carrier `items/def-fd-x00.md`. The carrier exists as a draft definition with `provenance.proof: not-applicable`; its `Definition` section specifies nonempty open `R^3` spatial domains, pointwise regularity, Euclidean derivatives, the constant-density incompressible equation for `rho_0>0`, `mu>0`, `nu=mu/rho_0`, and the steady Stokes equation with time and convection omitted. This matches the actual consumers after their facts were revised to quote its current interface; the theorem's stronger closure and channel regularity are explicit in their own statements. The definition directly depends on six published mathematical definitions for divergence/curl, Laplacian, Jacobian/gradient, Euclidean inner product, line integrals and surface normals/flux. Their relevant Definition sections were inspected; none of these six direct inputs is itself a proof-bearing result used by the consumers. There is a cross-batch plan discrepancy: the current `def-fd-x00.md` frontmatter declares those six direct dependencies, while `research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json` lists only `def-divergence-and-curl-of-a-c1-vector-field`. This batch preserves the actual carrier interface and does not repair batch 5's planned metadata. The current `loadStep1Record` snapshot does not index `def-fd-x00`, because batch 5's `fd-x01` manifest has an empty inventory; `step1Decision(..., "def-fd-x00")` reports `Readiness record missing`. Draft status and pending precheck alone are not treated as gaps. The exact current interface is available, but the missing current run readiness record remains the unresolved prerequisite; batch 7 does not edit or record for this batch-5 item.

## Supplier inspection and mathematical qualifications

- `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` is an imported published theorem. Its inspected statement is for `n >= 2`, a bounded `C^1` Euclidean domain, a `C^1` vector field on the closure, and assumes exactly `AC_omega`; its proof uses the stated local graph, finite partition, chart-invariance, integral-linearity, and rigid-change-of-variables suppliers. The outward normal is used on all boundary components. The consumer applies it only to `C^1` fields on the stated smooth Euclidean domain. Periodic channel integration is proved separately by coordinate FTC and cancellation of paired periodic faces; a periodic cell is not mislabeled a `C^1` Euclidean domain.
- `def-countable-choice` is used at its indexed countable-choice statement only. The argument carries `AC_omega` through the bounded-domain divergence supplier; it does not assume full AC.
- `thm-cauchy-schwarz-and-the-euclidean-norm` is used only for the finite-dimensional Euclidean inner-product/norm inequality. The needed integral Cauchy–Schwarz estimate is proved in `thm-fd-x07` by a nonnegative quadratic, with zero-norm cases handled separately.
- `thm-fd-x07` is an a-posteriori residual estimate for already-given fields and an explicitly assumed Poincare bound. Its channel constant `h` is proved directly for the periodic slab, not transferred to exterior domains. Its NS/Stokes application assumes both fields already exist and gives no Reynolds-number-only error or existence claim.
- `thm-fd-x10` assumes a smooth solution on its interval and proves only the sufficient energy-decay condition `|S| h^2 / nu < 2`; it is not sharp and does not imply global three-dimensional regularity or transition thresholds.
- `thm-fd-x11` is an exact solution calculation for the stipulated equal-density, no-gravity/no-surface-tension linear interface equations. It does not claim a controlled nonlinear approximation or nonlinear transition theorem. Its periodic-interface `H^m` growth is a separate linear-model statement.

## Source reading and disposition

The full inherited local argument sections were read at `research/scaffold-refresh-2026-10-18/fluid-dynamics/inherited/workers/examples/proofs.md#x07`, `#x10`, and `#x11`. Five full-text sources were inspected at the exact locators recorded in `research/fluid-dynamics-all-47-2026-10-23-batch-7.coverage.json`; `source-fetch-check --stamp` verified and stamped all 5/5: Guermond Volume 1 (212 pages; SHA-256 prefix `79debe62e480b94f`), Tong Chapter 2 (56 pages; `4fd0e835ea501e81`), Falsaperla–Mulone–Perrone (22 pages; `74c4596e7ecd7c44`), Tong Chapter 4 (38 pages; `9c05784dc8c531ea`), and MIT OCW's complete 4-page note (`595e24b05bb332a7`). No fetch failures or source drops occurred. Tong's full 11.3 MB lecture-set PDF exceeded the browser text viewer's size limit; the publisher page exposed the complete Chapter 2 and Chapter 4 PDFs, which were read at the assigned sections and successfully stamped as full-text documents. Source harvests are contextual/independent comparisons; every production proof step is supplied locally in the item.

The imported snapshot hashes for `thm-cauchy-schwarz-and-the-euclidean-norm`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, and `def-countable-choice` match their read-only root originals exactly. `AC_omega` is the only choice assumption carried into the consuming claims. In x07 the divergence supplier is applied on the bounded `C^1` Euclidean domain exactly as stated; in x10 the periodic representative is handled by direct coordinate integration and paired-face cancellation.

## Work progress

### Completed: thm-fd-x07

- Claim and conventions: for a bounded \(C^1\) Euclidean domain, an existing \(C^2\) divergence-free zero-trace Stokes-difference field satisfying \(-\mu\Delta w+\nabla q=f\), and an explicitly assumed zero-trace Poincare bound \(C_\Omega\), the theorem proves \(\|\nabla w\|_2\le C_\Omega\|f\|_2/\mu\) and \(\|w\|_2\le C_\Omega^2\|f\|_2/\mu\). It separately proves \(C=h\) for the periodic channel by the vertical FTC estimate. The stationary NS/Stokes application is conditional on already-existing fields and gives no existence result or Reynolds-only error.
- Dependencies recorded: def-fd-x00 (current draft definition exists but is omitted from batch 5's run manifest and has no Step-1 record), thm-cauchy-schwarz-and-the-euclidean-norm, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, and def-countable-choice; all roles are mathematical-premise; dependency_level: 1.
- Argument path: items/thm-fd-x07.md, proof steps 1.1–5.1. The general-domain integrations use the imported theorem with its exact AC_omega hypothesis; the periodic channel bound uses coordinate integration and paired-face cancellation. The required integral Cauchy–Schwarz estimate is proved locally.
- Source locators: Guermond, M602 Volume 1, Part I Chapter 3 §§3.3 and 3.4.4, Theorem 3.4 and Corollary 3.5, https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf; Tong, Fluid Mechanics Chapter 2 §3.2.2 and Stokes-flow dissipation discussion, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf (explicitly context only for the residual claim). Both source bodies are stamped in the batch coverage file; Guermond has 212 pages and Tong Chapter 2 has 56.
- Decision and checks: inherited scope preserved; no new supplier item was created. The scoped precheck passed (direct), proof-layout passed with 9 steps and 0 defects, and rendercheck passed YAML/KaTeX/link parsing. verification.precheck: pass records the actual precheck.
- Unresolved: the current `def-fd-x00` statement was inspected and matches the comparison use, but it is absent from batch 5's `fd-x01` manifest and has no Step-1 readiness record. The contract now quotes the current Definition section; the final item readiness remains escalated for that exact missing current readiness record.

### Completed: thm-fd-x10

- Claim and conventions: for an already-existing smooth incompressible Navier-Stokes solution on the \(x,z\)-periodic channel with Couette base \(U_b=(Sy,0,0)\), matched wall speeds and zero-trace perturbation, \(|S|h^2/\nu<2\) implies the squared \(L^2\) perturbation energy decays at least as \(e^{-(2\nu/h^2-|S|)t}\) on the assumed smooth interval. This is a sufficient, nonsharp conditional estimate, not an existence or transition theorem.
- Dependencies recorded: def-fd-x00 (current draft definition exists but is omitted from batch 5's run manifest and has no Step-1 record), thm-fd-x07, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, and def-countable-choice; all roles are mathematical-premise; dependency_level: 2. AC_omega is explicit in the statement and passes through the inspected dependency interface.
- Argument path: items/thm-fd-x10.md, proof steps 1.1–4.1. The proof verifies the Couette base, subtracts it from the full equation, derives the energy identity by componentwise FTC and periodic-face cancellation, applies the explicit h Poincare bound from thm-fd-x07, and integrates the differential inequality. The bounded-C1 divergence theorem is not applied to the periodic representative cell.
- Source locators: Tong, Fluid Mechanics Chapter 2 §3.2.2, printed pp.64–65/PDF pp.10–11, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf; Guermond, Part I Chapter 3 §§3.3 and 3.4.4, https://people.it.tamu.edu/~guermond/M602_FALL_2024/vol1.pdf; Falsaperla–Mulone–Perrone, arXiv:2105.06443v1 §§2.1 and 3.1, PDF pp.4 and 8–10, https://arxiv.org/pdf/2105.06443. The Falsaperla result is explicitly restricted to streamwise perturbations and a different normalization; it is context only, not a premise for this all-smooth-perturbation proof. All three files are stamped in coverage.
- Decision and checks: the assigned sufficient claim and all nonsharp/existence caveats are preserved. Scoped precheck passed (direct), proof-layout passed with 5 steps and 0 defects, and rendercheck passed YAML/KaTeX/link parsing. verification.precheck: pass records the actual precheck.
- Unresolved: the actual `def-fd-x00` Definition matches the equation use and is quoted in the proof contract, but the item is omitted from batch 5's run manifest and has no Step-1 record. Final readiness remains escalated for that exact missing current readiness record.

### Completed: thm-fd-x11

- Claim and conventions: the explicitly stipulated equal-density, no-gravity/no-surface-tension linear interface equations on the two half-planes admit modes with \(\lambda=-ik\overline U\pm k|\Delta U|/2\); nonzero velocity jump gives a growing branch. On the periodic interface, the normalized integer modes have bounded initial \(H^m\) norm and exponentially unbounded norm at each fixed positive time. The item explicitly makes no nonlinear, viscous-layer, physical-experiment, or transition claim.
- Dependency recorded: def-fd-x00, role mathematical-premise, dependency_level: 1. The theorem uses the current carrier's pointwise Euclidean scalar-Laplacian convention after embedding its two-coordinate fields independently of a third coordinate.
- Argument path: items/thm-fd-x11.md, proof steps 1.1, 2.1, 3.1, 4.1, 5.1, and 6.1. The dispersion equation is derived by solving both kinematic conditions and imposing the defined pressure continuity; the \(H^m\) conclusion is proved from the normalized Fourier coefficients.
- Source locators: Tong, Fluid Mechanics Chapter 4 §§5.1 and 5.1.1, printed pp.182–185/PDF pp.1–5, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids4.pdf; MIT OCW 6.642, complete 4-page Kelvin–Helmholtz lecture note, https://ocw.mit.edu/courses/6-642-continuum-electromechanics-fall-2008/acf162c3f92b66baf592c488ee2624ca_kelvin_helmholtz.pdf. Tong's equal-density, zero-gravity/surface-tension relation matches after converting \(e^{i(kx-\omega t)}\) to \(e^{ikx+\lambda t}\). MIT's finite-depth relation matches in the equal-density, zero-gravity/surface-tension deep-layer limit. Both are fully stamped in the coverage file.
- Decision and checks: inherited scope preserved; no nonlinear inference added. Scoped precheck passed (direct), proof-layout passed with 6 steps and 0 defects, and rendercheck passed YAML/KaTeX/link parsing. verification.precheck: pass records the actual precheck.
- Unresolved: the current `def-fd-x00` derivative interface was inspected and its Laplacian convention matches the two-coordinate use; its absence from batch 5's manifest and its missing Step-1 record keep final readiness escalated.

### Completed: ex-fd-x07-formal-verification

- Claim and conventions: the explicit periodic field \(w=(\sin(\pi y/h),0,0)\) has zero wall trace, is divergence-free, has \(C=h\) as a valid channel Poincare bound, and yields a concrete residual \(f=\mu(\pi/h)^2w\). The example verifies the channel Poincare clause only; it does not apply the bounded \(C^1\) Euclidean residual estimate to the periodic quotient cell.
- Dependency recorded: thm-fd-x07, mathematical-premise, dependency_level: 2. The example carries the supplier's stated AC_omega condition.
- Argument path: items/ex-fd-x07-formal-verification.md, verification steps 1.1, 1.2 and 2.1. The proof directly computes the derivatives and norms.
- Source path: exact current supplier items/thm-fd-x07.md. No new external source is needed; the five stamped A-page sources remain in batch coverage.
- Decision and checks: example is an AI-generated statement/proof with generation.role example; scope is a mathematical field calculation only. Scoped precheck passed (direct), proof-layout passed with 3 steps and 0 defects, rendercheck passed, and verification.precheck: pass records the actual precheck.
- Unresolved: x07's actual `def-fd-x00` interface matches the channel use through the inspected theorem, but the missing batch-5 manifest entry/Step-1 record leaves this example's final readiness escalated.

### Completed: ex-fd-x10-formal-verification

- Claim and conventions: with \(S=\nu=h=1\) on a \(2\pi\)-periodic unit-height channel, the exact field \(u=(y+a e^{-\pi^2t}\sin(\pi y),0,0)\), \(p=0\), is a smooth incompressible Navier-Stokes solution for every \(t\ge0\). Its perturbation energy is exactly \(e^{-2\pi^2t}E(0)\), which satisfies the supplier's weaker \(e^{-t}E(0)\) estimate because \(2\pi^2\ge1\); the sufficient parameter is \(1<2\).
- Dependency recorded: thm-fd-x10, mathematical-premise, dependency_level: 3. The example carries the supplier's AC_omega qualification.
- Argument path: items/ex-fd-x10-formal-verification.md, verification steps 1.1, 2.1, and 3.1. The field equation, wall values, norm, and estimate comparison are calculated directly.
- Source path: exact current supplier items/thm-fd-x10.md; no new external source. Source readings and full-text stamps remain in batch coverage.
- Decision and checks: example is classified as AI-generated with generation.role example. Scoped precheck passed (direct), proof-layout passed with 3 steps and 0 defects, rendercheck passed, and verification.precheck: pass records the actual check.
- Unresolved: x10's exact `def-fd-x00` equation interface was checked through the theorem, but the missing batch-5 manifest entry/Step-1 record leaves this example's final readiness escalated.

### Completed: ex-fd-x11-application

- Claim and conventions: with equal density \(1\), \(U_+=1\), \(U_-=-1\), \(k=1\), no gravity or surface tension, \(\eta=e^t\cos x\), \(\phi_+=e^{t-y}(\sin x-\cos x)\), and \(\phi_-=e^{t+y}(\cos x+\sin x)\) form an exact real growing solution of the stipulated linear interface equations. The growth rate is \(\lambda=1\); there is no nonlinear or physical transition inference.
- Dependency recorded: thm-fd-x11, mathematical-premise, dependency_level: 2.
- Argument path: items/ex-fd-x11-application.md, verification steps 1.1, 1.2, 2.1, and 3.1; harmonicity/decay, both pressure and kinematic conditions, and the theorem's parameter specialization are checked directly.
- Source path: exact current supplier items/thm-fd-x11.md; the independently read Tong Chapter 4 and MIT OCW four-page note remain linked there and are fully stamped in batch coverage.
- Decision and checks: example is AI-generated with generation.role example. Scoped precheck passed (direct), proof-layout passed with 4 steps and 0 defects, rendercheck passed, and verification.precheck: pass records the actual precheck.
- Unresolved: the transitive `def-fd-x00` carrier exists and its relevant interface was checked, but batch 5 has not indexed it in the current run manifest or recorded its Step-1 readiness; this example remains escalated for that missing prerequisite record.

### Assigned authoring and finalization

All three A theorems and all three B examples have complete conditional arguments. The current `def-fd-x00` definition has been read and its used interfaces checked; it has no current Step-1 readiness record because it is not present in batch 5's manifest. The six owned Step-1 records are escalated for that exact blocker. The run-wide dependency-level check also reports the absent batch-5 manifest entry, unfinished scaffold inventories and mismatches elsewhere in the run; assigned levels remain based on the controlling planned inventory and are not lowered to conceal the missing supplier edge.

## Final artifacts and scoped validation

- The batch-7 manifest now contains all six item records, with A items on `fd-x03` and example items on `fd-x03-examples`; each manifest claim exactly mirrors its item's complete claim section. Both local pages are YAML-frontmatter-only with empty bodies, exact planned page requirements and the 3/3 A/B inventories. No page summary or `page_layout` flag was authored.
- `research/fluid-dynamics-all-47-2026-10-23-batch-7.proof-contracts.json` records every numbered step, cited fact, exact current supplier excerpt, eight boundary dispositions per item, and direct finite calculations for the three worked examples. Strict scoped contract validation passed for all six items with zero errors and warnings.
- The cross-batch dependency file is a JSON array with the four direct in-run edges (the A page to `fd-x01`, and the three A theorems to `def-fd-x00`); all four remain `open` for the missing current batch-5 inventory/readiness input. Transitive dependencies are recorded here, not as extra review rows.
- Final scoped checks: precheck passed 6/6; proof-layout passed 30 numbered steps with 0 defects; rendercheck passed all 6 item files and 2 page files; `manifest-deps` passed all 6 manifest entries; focused `depcheck` passed with 0 errors/warnings; content policy passed 6/6 with 0 errors/warnings; page-body/statement-mirror/cross-edge checks passed. The editorial check found no hyperlinks inside any complete assigned Statement or Example description; the B descriptions have no statement links and need no empty reference section.
- The five required full-text sources remain recorded and stamped `fetch_verified` 5/5 in batch coverage; there were no source drops or unresolved retrieval failures. Per-source locators, supported items, arguments and dispositions are recorded above and in the coverage file.
- The run-wide dependency-level check is not clean: its final scoped invocation reports 50 unfinished scaffold inventories and 19 dependency-level mismatches across the run, including all six assigned items. Each assigned label is one higher than the checker computes because its current batch-5 manifest omits the planned level-0 `def-fd-x00`; the controlling proposed inventory places the definition in batch 5. No levels or other-batch artifacts were changed to mask this discrepancy.
- `step1-decisions.mjs record` created six `owner:false`, `escalated` records with examined dependencies and the exact blocker. No existing escalation was overwritten. The actual `def-fd-x00` Definition was interface-checked, but its missing current run record and its cross-batch dependency-plan discrepancy remain escalated for owner resolution.


### Owner readiness resolution (2026-10-22T15:48:50.368Z)

Owner /root resolves the former missing readiness/placement hold using research/fluid-dynamics-all-47-2026-10-23-owner-formal-consumer-readiness-resolution/review.json and current source5, F01 and finite-Reynolds readiness bindings. Actual R3 conventions, locally defined all-n residual and R2 shallow-water branches, and stress sign/units match their precise consuming scopes. This records authoring readiness; independent review and native gates remain required.
Earlier author observations are historical and preserved in before-integration.

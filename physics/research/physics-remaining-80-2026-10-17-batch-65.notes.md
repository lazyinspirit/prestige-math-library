# Batch 65 — Heat and viscous entropy specialization

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-et04` / `tgr-et04-examples`  
Category: `thermodynamics-and-general-relativity-mathematics`  
Owner: beta

## Plan and design reconciliation

The binding direction is `research/physics-remaining-80-2026-10-17-owner-authoring-direction.md`; it overrides stale plans/tasks and requires conditional consumers to be fully authored while missing suppliers remain explicit. The selected `plan-spec.json` and batch-65 manifest set order 627/628, category/library `thermodynamics-and-general-relativity-mathematics` / `mathematics`, title, and page prerequisites `tgr-et01` and `tgr-mc02`. The full design section at `research/plan-thermodynamics-and-general-relativity-track.md` §“Heat and viscous entropy specialization” reserves two A items and one B example, and points to the complete ET06 proof module and `proposed-inventory.json`. One additional local A-page lemma, `lem-tgr-spatial-shear-properties`, is required because the inspected MC02 frame-projection statement does not itself establish the shear's symmetry, spatiality, trace-free property or positive norm; it is placed before the entropy consumer as the missing mathematical prerequisite.

The design reservation lists `TGR-MC01`, `TGR-MC02`, and `TGR-ET01` as pair prerequisites; the current plan omits the page-level `TGR-MC01` requirement. The current plan controls page metadata, so the A page keeps only `tgr-et01` and `tgr-mc02` in `requires`. The mathematical dependency is not dropped: `lem-tgr-eckart-entropy-specialization` directly depends on the exact MC01 carriers `def-tgr-local-fluid-state`, `lem-tgr-local-gibbs-euler`, and `lem-tgr-fluid-frame-projection`, as needed for the local state, Gibbs/Euler identities, and spatial projection. The new local shear lemma separately cites the published Lorentzian observer-projection result for positive rest-space geometry and proves the needed tensor properties in full. The three reserved item IDs remain unchanged; the extra helper is an explicitly required A-page prerequisite.

The authored scope follows `workers/equilibrium-transport/proofs.md#ET06` and its stated warnings. The first item is conditional on a supplied smooth solution and explicitly selected first-order heat/shear/bulk closures with nonnegative coefficients; after the local shear prerequisite it proves an entropy identity only. It does not prove an evolution theorem or causal propagation. The static example is confined to a fixed positive-lapse rectangular background, constant heat capacity, conductivity `A0/N`, zero-power external support, insulated faces, and compatible reflected periodic data. The heat branch proves existence, uniqueness, energy conservation, entropy increase and exponential `L2` relaxation for that model only; it does not assert a general variable-conductivity theorem, full Einstein-fluid solution or finite propagation.

## Dependency inventory and levels

`research/physics-remaining-80-2026-10-17-batch-dependency-levels.json` assigns batch 62 level 0 with no in-run pair suppliers, batch 55 level 1 with supplier batch 53, and batch 65 level 2 with suppliers batches 53, 55, and 62. Item levels below were recomputed from the exact item-level `deps`; out-of-run published mathematics does not increase the level.

| Item | Level | In-run direct suppliers |
|---|---:|---|
| `lem-tgr-spatial-shear-properties` | 0 | none; all six direct inputs are outside this run |
| `lem-tgr-eckart-entropy-specialization` | 3 | `def-tgr-local-fluid-state` (0), `lem-tgr-local-gibbs-euler` (1), `lem-tgr-fluid-frame-projection` (1), `lem-tgr-dissipative-entropy-identity` (2), `lem-tgr-spatial-shear-properties` (0) |
| `thm-tgr-supported-static-heat-evolution` | 4 | `def-tgr-local-fluid-state` (0), `lem-tgr-killing-thermal-normalization` (1), `lem-tgr-eckart-entropy-specialization` (3) |
| `ex-tgr-static-cosine-heat-relaxation` | 5 | `thm-tgr-supported-static-heat-evolution` (4) |

The item graph is acyclic. The theorem also cites the exact external published heat-Cauchy, heat-kernel, affine change-of-variables, Lorentzian geometry, connection, and Countable Choice suppliers in its manifest and proof contract. `def-countable-choice` records the inherited `AC_omega` use; no unrestricted choice principle is assumed.

## Supplier interfaces and unresolved readiness

The current TGR-ET01 normalization lemma was read with its definition and complete local proof. It states that, on its connected selected stationary thermal domain, `beta` is Killing exactly when `N_xi T` is one positive constant. This supplies the exact interface used for the limit `T_eq=overline(vartheta)/N`. The current ET01 pair remains conditional on four absent plan pages; their exact IDs and evidence are listed in `batch-65.cross-batch-dependencies.json`.

The current TGR-MC01 state definition, Gibbs–Euler lemma and fluid-frame lemma were read at their actual statements and proof bodies. Batch-55 notes record stale MC01 ready-record hashes: `def-tgr-local-fluid-state` recorded `36e4a355f60c0908c2dd3a0e40b44c3dd6354f9e6553f0aac91b5f03457940d4` vs current `d880869678fdaf538cef2461c84436aa54176480d41b6824b15e3d051fbfe7fa`; `lem-tgr-local-gibbs-euler` recorded `475b6cdf13a56466970ee4e620395eed1e4db8611f3151c3e43ef381c6ff2905` vs current `9be4ed52545ba9e7fd5a0e800420e842a32eaea797bc5b6e88e194dfd5c44292`; and `lem-tgr-fluid-frame-projection` recorded `d09c0988c51deacc276a46dcb7147c5d5ed9fe197e3c6d7b532da8375b729ee3` vs current `7b547ce5dabcb086f239be7199af722b68859e75e92e4b591bbbec166f8e35bb`. The frame item proves the orthogonal projection and spatial stress decomposition; it does not state shear positivity. The new ET04 helper supplies that result using the inspected published `lem-gr-observer-projection-decomposition`, whose proof explicitly establishes positive definiteness of the observer rest space. Batch-55’s `lem-tgr-dissipative-entropy-identity` proof is complete conditional on the inspected state/Gibbs interfaces, and its own readiness is escalated on their stale hashes. The ET04 consumers preserve these actual statements and proofs conditionally; no upstream record or proof status was changed.

The external `thm-heat-cauchy-solution-for-bounded-continuous-data`, `lem-heat-kernel-normalisation-scaling-and-derivatives`, `def-heat-kernel`, and `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` were inspected at their exact statements and relevant proof clauses. The first supplies positive-time smoothing, the heat equation and local-uniform initial recovery for bounded uniformly continuous data under `AC_omega`; the heat-kernel lemma supplies positivity/unit mass and the Gaussian formula; the change-of-variables theorem supplies the affine translation/reflection substitutions with unit Jacobian. The exact Killing-field definition, Lebesgue measure, `L2` quotient/norm, integral Holder, and product Fubini suppliers used by the static theorem are published and inspected; the theorem defines its spatial integral convention, requires a strictly positive lapse on the geometric neighborhood, and proves the reflected boundary condition, uniqueness, state construction, stress support, energy/entropy identities, and box `L2` estimate locally.

## Full-text sources and dispositions

- Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, full 37-page lecture-note PDF; §§4.3 and 5.2–5.4, PDF pp. 16–20. Inspected the local thermodynamic differential, isolated perfect-fluid stress projection and energy/entropy balance. Disposition: inline context for both A items; the assigned proofs supply the dissipative force/heat terms and all static heat PDE steps.
- Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, §7.3, Eq. (7.30), PDF p. 32. Inspected the projected symmetric trace-free shear convention. Disposition: inline convention for `lem-tgr-spatial-shear-properties`; the local item proves its own symmetry, spatiality, trace and norm claims.
- Romatschke, *Relativistic Viscous Fluid Dynamics and Non-Equilibrium Entropy*, full 25-page article; §§3–4.1, PDF pp. 7–13. Inspected the stress/frame discussion, shear conventions and entropy-current derivation. Disposition: inline context for the entropy specialization and local shear lemma; its conformal zero-charge scope is recorded and not imported into the more general local identity.
- Hunter, *Notes on Partial Differential Equations*, full 242-page lecture notes; §5.1.2, Theorem 5.5, printed pp. 130–131. Inspected the Gaussian convolution smoothing and positive-time heat equation proof. Disposition: included for the heat theorem; the locally proved reflected Neumann boundary, positive bounds, uniqueness and initial compatibility are not attributed to that theorem.

The sources are independent full-text treatments. No retrieval failure or source drop is recorded. Retrieval stamps and source-to-item support entries are in `batch-65.coverage.json`.

## Scoped checks and readiness

Final scoped checks:

- `proof-layout.mjs` on the two changed proof items: 2 items, 5 steps, 0 defects.
- Strict proof-contract check on all four assigned items: pass, 0 errors and warnings.
- Scoped `precheck.mts` on all four assigned items: pass, 4 checked, 0 failing.
- `rendercheck.mjs` on four items and both pages: 6 checked, 0 errors and warnings.
- `depcheck.mjs` on the four assigned items and their dependency closure: 0 errors and warnings; 1,463 prerequisite items and 354 prerequisite pages checked.
- `content-policy.mjs` on the batch-65 manifest: 4 items, 0 errors and warnings.
- `coverage-checklist.mjs` on batch-65 coverage: 2 pages, 9 harvested source results, 0 errors and warnings.
- `source-fetch-check.mjs --stamp` on batch-65 coverage: 5/5 source records fetch-verified, 5/5 resolved, 0 new stamps and 0 drops.
- Recomputed item levels for the assigned inventory: shear helper 0, entropy specialization 3, static heat theorem 4, cosine example 5; all match their manifest labels.

The full-run item-level checker still exits nonzero on 54 empty scaffold inventories and 36 stale item-level labels outside this batch; it reports no mismatch for the four batch-65 items. The batch-level check reports a stale input hash after this batch manifest update. Recalculation gives batch 65 level 2 with suppliers 53, 55 and 62, exactly the same graph row as before; stored `input_sha256` is `9ae552630020f11a58258306acc2562dd5c44760bb2d426d34d01f38ab43e99d`, while the recomputed current hash is `7821e1f8536333cc603305d754bc87cfd02259a6fa20f8807d9cc5aba50ead19`. That run-wide scheduling file is left for the owner to refresh at the drained join. The run-wide proof-contract-coverage wrapper also cannot complete across the incomplete frontier: it stops at the unrelated empty `emg-mm03` inventory; the strict batch-65 contract check passes all four assigned items.

Step-1 readiness records were written without `--owner`: `lem-tgr-spatial-shear-properties` is `ready` at level 0; `lem-tgr-eckart-entropy-specialization`, `thm-tgr-supported-static-heat-evolution`, and `ex-tgr-static-cosine-heat-relaxation` are `escalated`. The entropy item is blocked by stale MC01 and batch-55 entropy readiness; the static theorem also needs the four absent ET01 page inputs; the example depends on that theorem. Exact suppliers, interfaces and gaps remain in `batch-65.cross-batch-dependencies.json`. These records state authoring readiness only and do not constitute independent approval.

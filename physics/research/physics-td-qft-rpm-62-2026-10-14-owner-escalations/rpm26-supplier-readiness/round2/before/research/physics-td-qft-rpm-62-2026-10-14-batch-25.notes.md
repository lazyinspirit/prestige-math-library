# Batch 25 notes — Cotangent phase data, observables and action dimensions

## Scope and plan reconciliation

The assigned pair is rpm-hamiltonian-constraints (A, order 419) and rpm-hamiltonian-constraints-examples (B, order 420), in relativistic-particle-mechanics. The A page has 22 items and the B page has two examples; both are below the 100 item page cap and remain draft pages.

The assigned task and current plan-spec require six earlier pages: distributions-integral-manifolds-and-the-frobenius-theorem, geodesics-the-exponential-map-completeness-and-hopf-rinow, hamiltonian-mechanics-and-completely-integrable-systems, rank-theorems-and-embedded-submanifolds, rpm-geometry-actions, and symplectic-manifolds-moser-stability-and-darboux-weinstein-theory. The original reservation embedded in the track design lists only rpm-geometry-actions in its JSON deps field, despite the prose naming all six. I followed the task and plan-spec and kept all six edges in the A page and manifest.

The five mathematical prerequisite pages are present as published read-only originals in the parent library. The rpm-geometry-actions draft page and its item def-rpm-spacetime-observer-and-worldline are current in batch 22; that item has a Step 1 records with current input hashes ready record. The B page keeps its required edge to A.

## Authoring decisions

The A page fixes the cotangent convention as theta = p_i dq^i and omega = -d theta = dq^i wedge dp_i, defines the mathematical observable domain and action units, and states explicit almost-regular and regular-constraint hypotheses. It proves the local first-class leaf-space result and the local second-class Dirac reduction, then keeps their limits visible: the first-class counterexample has a non-Hausdorff global orbit space, and the Dirac result assumes an invertible constraint matrix on the stated neighborhood.

The square-root massive action and the nonzero massless-shell action remain separate adopted models. The homogeneous Legendre result is restricted to the future massive shell. The first-order action proof states a compact chart interval and proves both directions of the massive auxiliary-variable reduction; the null branch uses a positive parameter multiplier and has no proper-time normalization.

The flat future-shell quotient and inertial-time reduction are explicitly global only in the free flat model. The curved lapse-shift Hamiltonian and its variational reduction are local to the supplied temporal chart and compact path interval. Coordinate Hamiltonian, normal-observer energy, and velocity statements are conditional deductions; a negative coordinate Hamiltonian and coordinate speed above c do not imply negative normal-observer energy or a super-c local observer speed. No experiment or measurement is claimed, and no general constraint algorithm termination or global curved quotient is asserted.

Every assigned item declares domain, library, dependency roles and physical scope. The only choice premise is countable choice ACω where the cited cotangent or manifold carriers require it; no full Axiom of Choice is used.

## Cross-batch inputs and item levels

The cross-batch file records seven page edges and all 63 direct item-dependency edges outside this pair. All suppliers exist. The 16 imported mathematical supplier snapshots used by these edges match their pinned hashes in math-imports.json. The remaining inputs are inspected existing physics carriers or the ready batch-22 observer/worldline definition. The item rows preserve each supplier's current status and proof provenance and point to the exact consuming fact and proof-contract excerpt; these records establish interface availability, not independent approval.

A scoped recomputation over the 24 assigned manifest items has no errors and maximum dependency level 6:

- Level 0: cotangent phase space; temporal chart data.
- Level 1: almost-regular Legendre; background quantities; regular constraints; canonical Poisson flow.
- Level 2: the two action postulates; constraint consistency; first-class local reduction; homogeneous Legendre degeneracy; local energy descent; second-class Dirac bracket.
- Level 3: the non-Hausdorff quotient example; flat global shell reduction; homogeneous massive shell; local gauge slice.
- Level 4: first-order action and geodesics.
- Level 5: action momentum identity; inertial-time reduced Hamiltonian; temporal shell reduction.
- Level 6: shifted-chart example; massive/null time motion; coordinate versus observer energy.

The full item-dependency check is broader than this assignment and currently reports 36 unrelated errors: 32 empty scaffold inventories and four dependency-level mismatches in other pages. It reports no errors for batch 25. The full batch-dependency check reports that the shared level file is stale after the manifest refresh; a read-only recomputation still gives batch 25 level 1 with prerequisite batch 22. The shared level file was left for its owner.

## Sources and retrieval history

The coverage file maps 25 harvested results to the assigned items and records included, inline or other dispositions. The A page has independent full-text treatments including a book and lecture notes: Hanson, Regge and Teitelboim, Constrained Hamiltonian Systems, Part 1; Carroll, complete GR notes; Date, Lectures on Constrained Systems; Chagas-Filho, Free massless particles and extended space-time algebra; and Gourgoulhon, complete 3+1 notes. The relevant sections were inspected in full. The active source records passed coverage-checklist with zero errors or warnings, and source-fetch-check --stamp verified all 5/5 active sources.

The complete CMI classical-mechanics PDF and Tong Dynamics and Relativity and GR PDFs were also retrieved and the relevant sections inspected, but their source-fetch stamps could not verify compressed PDF page counts because mutool is unavailable. Those candidates are retained in coverage source_history and replaced by the active stamped treatments above; no mathematical claim was dropped or left without proof coverage. No failed source is marked as a dropped result.

## Checks and readiness

The strict proof-contract checker passes all 24 assigned items with no warnings. All 24 frontmatter documents parse, all page item rows match their item dependencies, levels, roles, library and scope, and manifest-integrity reports 128 pages owed and present with no missing or added pages. The scoped dependency-level calculation passes for all 24 items. Coverage and active-source checks pass as stated above.

Step 1 records were written with the supported record command, without owner override. A scoped hash check finds all 24 assigned records closed and current. The run-wide Step 1 check remains open for other batches and empty scaffold pages; this pair has no open readiness records.

The required proof-layout scan was attempted on all 24 changed items. Its renderer pipe closed with EPIPE. Repeating on one item exposed the underlying environment error: the renderer checkout cannot resolve the package alias @/components imported from the parent web project's ItemBody.tsx. No item-specific layout result was produced. The renderer and parent web checkout were outside this assignment's edit scope.

A read-only autopilot status probe also reported a workflow-revision mismatch and no configured run/status file; no engine state or shared verdict was changed. Step 1 readiness records document authoring readiness only and do not constitute independent mathematical approval.

# Batch 42 authoring notes — Holonomy and discrete geometric interfaces

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Assigned pair: `gr-fx14-holonomy-and-discrete-geometric-interface` and its examples page

## Plan reconciliation and scope

- The controlling `research/plan-spec.json` and this run's manifest place A/B at orders 781/782. The retained GR track and detailed module reservation place A at order 8027. The current plan controls; the batch manifests and both pages use 781/782. Their assigned page prerequisites are retained verbatim.
- The detailed design specifies five A results: connection path transport, path-functor/gauge covariance, small-loop curvature, finite graph holonomy, and vertex Haar projection. Eight A-page prerequisite carriers were added with complete statements and proofs: thin paths, quotient-groupoid laws, thin path groupoid, non-thin-contractibility of the once-around circle, piecewise matrix-ODE transport existence, thin-transport invariance, compactness of SU(2), and Wilson-trace gauge invariance. The resulting A page has 13 items; the B page has the three planned examples. The detailed design lists all five A results as dependencies of every example; the final example item dependencies name the exact results each complete proof uses, while the B page retains its planned A-page requirement. The three example claims, scope, and proof routes are preserved.
- A keeps the planned requirements `gr-fx13-tetrads-and-lorentz-spin`, `gr-fx12-covariant-phase-space`, `complete-reducibility-for-compact-groups`, `gauge-groups-and-representation-theory-interfaces`, and `relations-functions-and-quotients`; B requires A. FX12 remains a page-level dependency, but no dynamical covariant-phase-space conclusion is asserted here.
- All 16 items have `domain: mathematics`, `library: physics`, mathematical-premise dependency roles, and `physical_scope: null`. The pages remain under the 100-item cap. No published content, imported supplier, mathematical original, shared plan, engine state, or verdict was edited.
- Scope limits are explicit: the SU(2) graph is a finite kinematic model and is not derived from Lorentz symmetry by time gauge; no continuum limit, physical Hilbert space, Hamiltonian constraint, physical-observable claim, or experimental inference is asserted. The flat-connection example distinguishes local path independence from global holonomy.

## Item inventory and dependency levels

Levels are recomputed from the exact `deps` in the current manifest; external suppliers do not raise an item level. Suppliers in this pair are authored before their consumers.

| Level | Items |
|---:|---|
| 0 | `def-gr-fx-thin-paths`, `prop-gr-fx-connection-path-transport-exists`, `prop-gr-fx-su2-compact` |
| 1 | `prop-gr-fx-thin-path-quotient-groupoid`, `def-gr-fx-connection-path-transport` |
| 2 | `def-gr-fx-thin-path-groupoid`, `prop-gr-fx-thin-transport-invariance` |
| 3 | `prop-gr-fx-s1-loop-noncontractible`, `prop-gr-fx-path-functor-and-gauge` |
| 4 | `prop-gr-fx-small-loop-curvature`, `def-gr-fx-discrete-holonomy-model`, `ex-gr-fx14-1` |
| 5 | `prop-gr-fx-discrete-wilson-trace`, `prop-gr-fx-vertex-haar-projection` |
| 6 | `ex-gr-fx14-2`, `ex-gr-fx14-3` |

The finite-triangle step in `prop-gr-fx-thin-transport-invariance` consumes `thm-qftx-cw-fundamental-group-presentation` from batch 78. Its full finite-CW statement and proof were inspected: connected finite CW hypotheses, non-tree 1-cell generators, and 2-cell attaching-word relators match the finite curvilinear-triangle disk used in step 2.1. `loadStep1Record` / `step1Decision` report its current record closed, hash-current, and ready (`b98e54cb2ebd2421f2da8b7121ec71cf85605c572c4882d923d3c5d8b7b102b3`). Its draft or pending independent-review label is not treated as a proof gap.

The FX13 carrier `def-gr-fx-tetrad-spin-connection` was read with its complete proof and matched at each use. The consumers retain its `AC_omega` regularity convention, Lorentzian signature `(-+++)`, eta-skew connection, `e'=Lambda e`, `omega'=Lambda omega Lambda^-1-dLambda Lambda^-1`, and `F=domega+omega wedge omega` conventions. Its global gauge warning is preserved: a local frame change is a principal-bundle gauge transformation only when it extends globally. The CW theorem edge is the additional batch-78 item edge; the other reviewed cross-batch edges are the two planned page edges and five direct uses of the FX13 tetrad definition. All eight exact rows are in `physics-non-fluid-129-2026-10-21-r2-batch-42.cross-batch-dependencies.json`, each `verified` only for its scoped interface/readiness check.

Current batch dependency calculation places batch 42 at level 2, requiring batches 40, 41, and 78. The saved and recomputed logical row for batch 42 agrees, but `batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2` reports a stale input hash after the final manifest changes. The retained order 781 for batch 42 also precedes its added supplier page in batch 78 (order 853). These are owner scheduling-evidence reconciliations; the shared schedule was not rewritten. Refresh its input hash after the final manifest is accepted.

## Proof route and conventions

- Thin paths use the assigned piecewise-smooth convention and finite subdivisions into curvilinear triangles. Equivalence, endpoint compatibility, composition, identity, inverse, and associativity are proved on representatives before quotient use. The circle obstruction uses a closed 1-form and Stokes to rule out a thin contraction.
- Transport solves `Udot=-omega(gammadot)U`, `U(0)=I`, with finite piecewise concatenation. The path-functor proof derives composition, reversal, thin-class independence, and the endpoint Lorentz-frame law from ODE uniqueness and the FX13 transformation rule. Thin invariance includes the local curvature-variation calculation and finite-cell closure; it does not assume flatness.
- The small-loop statement fixes positive boundary orientation and the negative sign in `U_loop=I-epsilon^2 F_ij+O(epsilon^3)`; its four segment expansions and uniform remainder are local proof obligations, not inferred from a diagram. The SU(2) compactness proof uses the closed-and-bounded matrix realization and Heine–Borel. The graph model fixes edge reversal, path product order, vertex action, representation and dual conventions before Wilson traces are defined.
- The finite vertex average explicitly assumes the imported Haar theorem's full Axiom of Choice and normalized Haar probability on compact SU(2). It proves orthogonal projection onto invariant tensors and commuting vertex projections only on the finite coefficient space; it imposes no Hamiltonian constraint.
- The B pages use TikZ for the graph and intertwiner diagrams and explain their orientation and tensor-slot conventions. Proofs derive the claims algebraically and do not rely on the figures.

## Full-text sources and resolution history

`research/physics-non-fluid-129-2026-10-21-r2-batch-42-sources/source-reading.md` records full-text locations, each harvested result's disposition and item support, convention differences, local raw paths and hashes. Coverage records source URLs, locators, supports, and the 7/7 `source-fetch-check --stamp` results.

- Tong, *General Relativity*, §§3.3, 3.3.3, 3.4.2, supports transport, curvature/holonomy, tetrad, and connection conventions. Carroll, *Lecture Notes on General Relativity*, Chapter 3, printed pp. 88–95 / PDF pp. 95–102, independently supports tetrad/frame and curvature conventions. Neither source is used to import torsion-free or Bianchi claims.
- Schreiber–Waldorf, *Parallel Transport and Functors*, §2.1 and Appendix B.3, supports thin paths, quotient/groupoid structure, and curvature variation. Their smooth paths with sitting instants and globally smooth thin homotopies differ from the local piecewise-smooth finite-triangle convention; the local proofs are supplied directly rather than attributed verbatim to the paper.
- Baez, *Spin Network States in Gauge Theory*, §2, supports finite graph gauge data and invariant tensors. Its outgoing representation/incoming dual convention arises from its function action; the local items retain the design's incoming `V_e` / outgoing `V_e^*` slots and prove the chosen action directly. Kowalski, *An Introduction to the Representation Theory of Groups* (2025), §§2.5, 3.4, Theorems 5.2.1 and 5.2.11 with proofs, supports finite-dimensional unitary representation and compact Haar context. The local statements assume unitary representations and full AC; no unitarization theorem is imported.
- Older candidate retrievals failed: a Rossmann 2004 landing route returned 404 and a direct PDF request timed out; Harvard `diffgeom.pdf` returned 404; Michor `dgbook.pdf` returned 502. The prior handoff preserved source names and outcomes but not the full candidate URLs, exact times, or exact search queries; those details are identified as unavailable in the source history and were not reconstructed. Retrieval stopped after successful full-text alternatives were available. No candidate is marked dropped, no mathematical coverage is waived, and the alternatives include per-item argument/dependency records in `coverage.json`'s `source_resolution_history`.

## Scoped checks and readiness

- Proof layout: 16 items, 37 proof steps, 0 defects.
- Strict proof contracts: 16/16, 0 errors and 0 warnings. Contracts contain actual arguments, steps, inputs, exact supplier excerpts, boundary cases, and applicable finite checks.
- Authored content policy: 16 items in scope, 0 errors and 0 warnings. Render check: 18 assigned files, 0 errors and 0 warnings.
- Dependency closure: 16 selected items, closure of 1,452 items and 343 pages, 0 errors and 0 warnings. Scoped item-level graph over batches 40, 41, 78, and 42: 49 items, 0 errors; batch-42 levels are listed above. Coverage checklist: 2 pages, 28 harvested results, 0 errors and 0 warnings. Source fetch verification: 7/7 stamped sources, 0 drops.
- `loadStep1Record` / `step1Decision` report all 16 assigned items ready and hash-current, including the newly added cross-batch CW input; direct dependencies match the manifest. Records capture authoring readiness only, not independent proof approval.
- The run-wide Step 1 scan is not closed because other batches still contain missing records and empty scaffold inventories. This is outside batch 42's owned scope. The scoped batch-level schedule check separately remains stale by input hash as described above and requires owner refresh.

The proof contracts, source history, coverage, manifest, and cross-batch review rows agree with the authored pages and items. No content blocker remains in this pair.

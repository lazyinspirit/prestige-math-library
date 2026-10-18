# AFEM interpolant focused repair, cycle 1

Scope: the cross-batch defect reported in the genuine batch-65 notes, plus the actual direct-consumer localization defect encountered while checking its uses. This is repair evidence, not a mathematical acceptance, native review, certification, or audit stamp.

## Native state and ownership

Read-only native status was recomputed twice with `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run numerical-analysis-remaining-71-2026-10-17 --state-dir .autopilot/numerical-analysis-remaining-71-2026-10-17`; the immediately pre-edit status had update time 2026-10-17T13:13:46.452Z and listed no batch-54 or batch-65 writer. Immutable successful attempt results were read: batch 54 ended 2026-10-17T12:17:42.066Z and batch 65 ended 2026-10-17T13:11:17.820Z, both complete, unaborted, exit zero. Both edited canonical carriers belong to drained batch 54. Full original bytes are retained under `before/items/`.

## Confirmed original defect and repair

`thm-afem-local-moment-interpolation-estimates`, original step 1.2, applied the globally defined operator to a shifted function outside its H01 domain. The definition and theorem Statement are unchanged. The replacement estimates the local differences between the already-defined coefficients and the patch constant: the identity integral(psi)=1 follows by summing the barycentric dual identities, and the shifted function is used solely in L2 cell integrals. On a boundary cell the constant is zero. The local hat expansion, patch Poincare bound, and trace step give precisely the original volume, gradient, and edge rates. No domain extension or new boundary hypothesis is needed.

## Additional confirmed direct-consumer defect and repair

`lem-afem-localized-galerkin-refinement-estimate`, original step 2.1, justified vanishing only outside the vertex enlargement of R, then silently replaced the residual sum on that enlargement by a sum on R. The fixed least-index interpolant does not justify that replacement. The original refined-cell estimate is retained. A proof-local auxiliary coarse moment map J chooses an unchanged incident coarse cell whenever possible and otherwise the original moment cell. Step 1.1 proves its same uniform approximation, gradient, and trace bounds by local dual moments, diameter comparability, patch Poincare, and scaling. No substantial new prerequisite is missing: this is the same elementary three-hat argument, supplied locally. For the continuous fine P1 correction, moments on unchanged cells recover the common vertex values, so Jd=d on every unchanged coarse cell. Traces also vanish on every edge incident to such a cell. Only refined cells and edges with both incident cells refined survive; their weights occur in the existing indicators on R. Patch overlap is used solely to bound the energy factor globally. The energy identity now uses Jd, which belongs to the coarse zero-boundary space.

## Exact reading and affected-use dispositions

Read fully: CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md; actual batch-54 and batch-65 notes and successful immutable attempt results; the full original definition, patch-Poincare lemma, interpolation theorem, both direct consumers, and all three downstream consumers listed below. No external full-text source was newly consulted or claimed: the finite coefficient argument and auxiliary-map construction were verified directly from the actual local suppliers, without unresolved source uncertainty.

Full immediate supplier reading included def-matching-affine-simplicial-meshes, def-broken-and-conforming-polynomial-spaces, thm-reference-simplex-trace-and-gauss-green, thm-reference-simplex-poincare-wirtinger, thm-polynomial-inverse-and-discrete-trace-estimates, thm-matching-continuous-piecewise-polynomials-are-wkp, thm-zero-boundary-piecewise-polynomials-in-w10p, lem-reference-polynomial-norm-equivalence, lem-shape-regular-affine-simplex-scaling, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-countable-choice, lem-afem-p1-residual-representation, and lem-galerkin-orthogonality-for-conforming-galerkin-approximations.

Actual textual/dependency use search found exactly these item consumers of the interpolation theorem, including its transitive closure:

- thm-afem-p1-residual-reliability-and-local-efficiency: direct use tests the original map only on e=u-U in H01 and uses unchanged cell/edge bounds. No change required for this escalation.
- lem-afem-localized-galerkin-refinement-estimate: repaired proof as above; Statement unchanged.
- lem-afem-dorfler-marking-cardinality: uses the original exact refined-cell estimate on the overlay, now justified; no adjustment to theta or cardinality needed.
- thm-afem-error-and-oscillation-contraction: uses reliability and marked efficiency, whose interpolation interface is unchanged. No change required for this escalation.
- thm-afem-p1-poisson-optimal-complexity: uses marking cardinality and contraction with their original rates and thresholds. No change required for this escalation.

The A page lists the original items; no page prose adjustment is needed. Batch 65 has no item dependency on the flawed theorem, as confirmed by its actual notes and cross-batch use search; its FE-HMM branch uses best approximation, not the interpolant. No live consumer edit or owner-delayed consumer proposal remains from these two proof repairs. These are focused affected-use checks, not whole-item acceptance of every unrelated argument.

## Mechanical result and remaining owner work

After the final canonical edits, `node tools/proof-layout.mjs items/thm-afem-local-moment-interpolation-estimates.md items/lem-afem-localized-galerkin-refinement-estimate.md` returned exit zero: `proof-layout: 2 items, 6 steps, 0 defects`.

Only the two canonical proof bodies and this repair evidence/before archives were changed. No original Definition, Statement, frontmatter, metadata, dependency, level, manifest, proof contract, readiness record, hash record, runtime state, test, gate, or stamp was changed. The owner retains all current contract-quote/step and readiness/hash reconciliation, independent native review and ordinary scoped gates. No missing prerequisite or unresolved gap remains in the two focused repaired inferences.

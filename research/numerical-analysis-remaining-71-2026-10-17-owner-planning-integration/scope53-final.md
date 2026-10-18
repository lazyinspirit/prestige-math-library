# Scope 53 SIPDG focused resolution

Run: `numerical-analysis-remaining-71-2026-10-17`, actual native finding: `research/numerical-analysis-remaining-71-2026-10-17-scope-review/batch-53/review-0.json`. The complete report, both current A/B pages, all fourteen current assigned items, current run-local owner direction and the actual premises used below were read. This is focused owner repair evidence, not a native review, gate verdict or whole-corpus audit.

Exact preimages of all fourteen source items and both pages are under `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/scope53-before/`, retaining each original filename. Four canonical items were edited; all other items and both pages remain untouched by this worker.

## Confirmed omissions and source repairs

- `lem-sipdg-energy-seminorm-is-a-norm`: its physical-simplex Green premise [F5] explicitly assumes Countable Choice. Added that hypothesis to the Statement, Given, deps and new [F6], cited at its actual use in proof 2.1. The imported form Definition and Sobolev conventions already carry CC; even the existing classical affine-simplex Green supplier carries CC. Explicit propagation is the smallest repair of this actual proof, avoiding a gratuitous replacement geometry proof. All original norm guarantees remain, with the actual inherited hypothesis made explicit. No claim of necessity of CC is made.
- `thm-sipdg-coercivity-large-penalty`: added `thm-holder-inequality-for-integrals` and `thm-cauchy-schwarz-and-the-euclidean-norm` to deps and Facts [F5]–[F6]; proof 1.1 now explicitly applies integral Cauchy–Schwarz on each facet before finite weighted Cauchy–Schwarz on the face sum. Updated its CC fact to identify both existing dependent suppliers. Its Statement, threshold gamma>=4 C_flux, constant 1/2, and unique-solvability conclusion are unchanged.
- `ex-sipdg-broken-function-is-not-h1`: added the actual Holder supplier to deps and [F4], cited at the small-bump test-pairing bound. Its Example and complete contradiction argument are unchanged.
- `def-sipdg-bilinear-form-and-energy-norm`: replaced the contradictory counting/surface-measure sentence by explicit (d-1)-dimensional surface measure for every facet integral and L2(F) norm at d>=2. Counting measure remains only in the separately defined one-dimensional interval examples. The form, fluxes, domain D_h, mesh dimensions, coefficients, penalties, norms and solution definition remain exactly the same.

The actual complete local suppliers read include the matching mesh, broken polynomial, Sobolev and zero-boundary definitions; CC definition; affine weak pullback; reference smooth density; reference trace/Green; affine-simplex Green; C1 Lebesgue change of variables; polynomial inverse/discrete trace; Holder; finite Euclidean Cauchy–Schwarz; and the existing second Strang theorem. No cited supplier was edited or supplied by a literature citation alone.

## Same-owner affected-consumer dispositions

The original/current Definition dependencies and textual uses identify exactly these eight direct item consumers, all within batch53. Each complete actual proof was checked against the clarified measure and preserved form domain:

- `lem-sipdg-discrete-flux-inverse-bound`: accepts surface measure in its physical facet trace estimate, h_F<=h_K and finite facet sum. CC is already explicit. No repair needed.
- `lem-sipdg-energy-seminorm-is-a-norm`: repaired above. Boundary cancellation sums oriented surface integrals; each facet-adjacency component has a boundary facet by the positive-volume Green identity. Constants vanish there. The inner-product/Holder/finite-Cauchy argument proves the remaining norm axioms.
- `lem-sipdg-boundedness-augmented-norm`: accepts surface measure, including both weighted face pairings. Its CC hypothesis is explicit, and the energy seminorm proof applies on D_h. No repair needed.
- `thm-sipdg-exact-consistency`: accepts surface measure. Piecewise H2 with constant A makes its flux a W1,2 vector field; Green, opposing interior normals and matching fluxes cancel exactly the form's consistency term. CC is explicit. No repair needed.
- `lem-sipdg-adjoint-consistency-h2`: accepts surface measure. Its piecewise H2 error and dual flux satisfy the stated physical Green identity, and zero jumps of the dual cancel precisely the remaining flux sum. CC is explicit. No repair needed.
- `thm-sipdg-coercivity-large-penalty`: repaired inequality premises above. It is the norm lemma's sole direct logical consumer and already assumes CC, including in Given; no further interface propagation is required.
- `thm-sipdg-energy-error-estimate`: already assumes CC and the coercivity theorem's complete hypotheses. This is the norm lemma's indirect consumer through coercivity. The direct proof is checked below and needs no source edit.
- `thm-sipdg-l2-error-under-adjoint-regularity`: accepts surface measure throughout its DG* continuity bound and weak L2 facet-flux domain. Its s in (1/2,1], branch-specific adjoint identity, regularity and face-aware approximation remain conditional exactly as stated; CC is explicit. No repair needed.

No outside item depends on either changed interface in the current source inventory. The A page describes precisely the preserved SIPDG, direct energy and conditional duality interfaces. The B page and both one-dimensional jump/small-penalty examples continue to use their separate counting-measure convention and cell-length h_F; their complete arithmetic remains sound. The broken-H1 example has its separate Holder repair. These page/example checks complete the affected old/current closure without any outside write.

## Direct energy route and preserved guarantees

Root explicitly approved retaining the current direct regular-comparison-space proof after reading its full body, and will record that direction. This approval does not assert a bounded extension on all H0^1+V_h. The actual published second Strang theorem expressly requires such an extension on its whole comparison space; general H0^1 fluxes do not provide the L2 face traces required by D_h, so that theorem is not invoked here.

The full existing direct argument is sound. For every w_h, set z_h=u_h-w_h. The exact u is cellwise H2 and all discrete polynomials lie in D_h; linearity of the defining weak Green identity and uniqueness of its flux give u-w_h,z_h in D_h. Exact consistency and the discrete equation yield a_h(z_h,z_h)=a_h(u-w_h,z_h). Coercivity gives one half of ||z_h||_DG squared on the left. The discrete inverse-flux estimate gives ||z_h||_DG,*<=sqrt(1+C_flux)||z_h||_DG. Thus the actual augmented boundedness bound gives

`(1/2)||z_h||_DG^2 <= C_B sqrt(1+C_flux)||u-w_h||_DG,* ||z_h||_DG`,

where C_B=2+2 gamma^(-1/2). If z_h=0 the estimate is immediate; otherwise norm definiteness permits division. The energy seminorm triangle inequality on D_h and ||u-w_h||_DG<=||u-w_h||_DG,* prove exactly

`||u-u_h||_DG <= (1+2 C_B sqrt(1+C_flux))||u-w_h||_DG,*`.

This holds for every w_h, hence also with its infimum. The current theorem retains the full original per-comparison and best-approximation estimates, coefficient/mesh/degree-dependent sufficient penalty, unique discrete solution, CC background and cellwise H2 matching-value/matching-flux exact-solution assumptions. No rate is inferred without controlling the augmented approximation error. The L2 theorem independently preserves its exact s>1/2 factor h^s ell_Omega^(1-s), DG* error, and conditional dual approximation/regularity assumptions. No strongest branch or original estimate was removed.

## Owner integration and verification boundary

The exact current published prerequisite page tokens are `finite-element-meshes-and-interpolation` (NA-28) and `ceas-lemma-and-aubin-nitsche-error-estimates` (NA-29), in `library/numerical-pdes-and-spatial-discretization/`; both current carriers have status published. Existing NA-30 token is `variational-crimes-and-strang-lemmas`. Root owns restoring the explicit NA-28/29 page prerequisite edges, preserving NA-30, at the drained metadata boundary, and any contracts/levels/hashes. This worker did not rewrite shared plan designs or metadata.

After the final four item edits, the exact command `node tools/proof-layout.mjs items/def-sipdg-bilinear-form-and-energy-norm.md items/lem-sipdg-energy-seminorm-is-a-norm.md items/thm-sipdg-coercivity-large-penalty.md items/ex-sipdg-broken-function-is-not-h1.md` exited 0 with `proof-layout: 4 items, 8 steps, 0 defects`. No tests, full validators, gates, native controls, native reports or runtime state were run or edited. All items remain draft. Root metadata reconciliation and ordinary later native review/gates remain due.

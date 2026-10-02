# Step 5b page prerequisite repair

The latest native validate-plan advisory at 2026-10-01T20:25:15.198Z reported 29 undeclared page prerequisites. I checked these exact edges against the current plan, actual consumer item deps and cited fact paragraphs, supplier claim interfaces, live supplier home pages and page order. The review found 58 actual item-level supplier uses across 17 consumer pages. All suppliers exist on earlier A pages; 57 edges use published suppliers and one uses the earlier active-run draft lattice lemma from the Dirichlet-units page. Its Statement and Proof are present. This is a prerequisite interface review, not an independent re-audit of supplier proofs.

20 direct requires entries were added; the remaining nine diagnostics are covered through the updated declared closure. In particular examples companions inherit newly declared A-page prerequisites. Every affected library page now mirrors its approved plan prerequisite interface, including previously absent requires fields. No dependency was removed. Page identities, pair selection, ordering, item lists, Statements, proofs and item deps were preserved.

The plan and matching batch manifests were updated only in requires fields. Library edits affect only requires frontmatter, preserving body bytes. The accompanying JSON records exact old/new requires, all 29 edge reviews with supplier claim/use evidence, and before/after hashes for the plan, 11 batch manifests and 17 library files. Stable post-edit hashes were checked against disk.

## Changed prerequisite interfaces

| Page | Newly declared direct prerequisites |
|---|---|
| cyclotomic-arithmetic-and-reciprocity-via-frobenius | exterior-powers-orientation-and-hodge-duality |
| cartier-and-weil-divisors-line-bundles-and-picard-groups-examples | normalization-finiteness-for-affine-domains |
| hilbert-and-riesz-transforms | divergence-and-almost-everywhere-convergence-of-fourier-series, trigonometric-and-oscillatory-examples-in-one-variable |
| riemannian-comparison-theorems | simply-connected-plane-domains |
| riemannian-comparison-theorems-examples | Inherited through repaired companion/other prerequisites; page mirror synchronized |
| complete-reducibility-for-compact-groups | maschkes-theorem-and-complete-reducibility |
| complete-reducibility-for-compact-groups-examples | decomposition-inertia-and-frobenius |
| pure-braids-fadell-neuwirth-and-asphericity | asymptotic-cones-and-the-sublinear-triangle-criterion |
| pure-braids-fadell-neuwirth-and-asphericity-examples | permutation-statistics-inversions-and-eulerian-numbers |
| logarithmic-potential-capacity-and-riesz-decomposition | weak-derivatives-and-sobolev-spaces, weak-convergence-tightness-and-representation |
| logarithmic-potential-capacity-and-riesz-decomposition-examples | infinite-products-and-weierstrass-factorisation, hausdorff-measure-and-hausdorff-dimension |
| harmonic-hardy-classes-and-fatou-boundary-limits | measure-preserving-transformations-and-poincare-recurrence, trigonometric-and-oscillatory-examples-in-one-variable |
| harmonic-hardy-classes-and-fatou-boundary-limits-examples | Inherited through repaired companion/other prerequisites; page mirror synchronized |
| nevanlinna-second-main-theorem-and-defects | product-measures-and-the-fubini-tonelli-theorems |
| hyperbolic-riemann-surfaces-and-uniformization | sublevel-deformation-and-the-handle-attachment-theorem, weak-derivatives-and-sobolev-spaces, dirichlets-unit-theorem-regulators-and-s-units |
| analytic-hypersurfaces-and-local-parametrisation | fundamental-solutions-newtonian-potentials-and-green-functions |
| analytic-hypersurfaces-and-local-parametrisation-examples | Inherited through repaired companion/other prerequisites; page mirror synchronized |

## Verification and integration

One invocation of `node tools/validate-plan.mjs research/plan-spec.json` returned OK with exit 0 after all 29 subjects were addressed: zero hard errors and zero undeclared-prerequisite errors. The validator also emits existing global plan warnings; those were outside this repair scope. The JSON records the output checksum and result. No native retry, broad mathematical audit, decision/verdict rewrite, impact receipt write, common-ledger write or merged proof-contract write was performed.

The JSON contains 17 proposed closed defect rows, one per repaired page prerequisite interface. Root owns their integration and changed-page verdict, impact and certification binding. Root should bind using the recorded stable page/manifest hashes after any subsequent authorized metadata changes.

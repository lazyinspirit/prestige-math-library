# Batch 86 authoring notes

The scaffold began with twelve A-page items and four B-page examples. Proof audit exposed the need for a local phase-residual retraction before the global finite-residual trajectory claim could be stated; that proved prerequisite was added, leaving thirteen A-page items and four B-page examples. The logical item levels in the page manifest range from 0 to 5; the pair scheduling level remains 5 with prerequisite batches 54, 65, and 75 from the supplied dependency input.

## Plan reconciliation

The T07 pair requires the same four pages in the task and current plan-spec: Hamiltonian Monte Carlo and leapfrog, implicit stiff time stepping, differential-algebraic equations and consistent initialization, and geometric numerical integration. The current T07 plan says NA-22 supplies the symplectic interface to T07; owner direction E7 makes this one-way. Any earlier amendment wording that makes NA-22 consume T07 is superseded. T07 supplies no theorem to NA-22.

## Supplier interface checks

- HMC: the published def-leapfrog-step-map supplies the kick and drift formulas used in the RATTLE equations. Its separate volume theorem uses Countable Choice; no volume claim or choice principle is used here.
- Batch 54 / NA-22: the current shear and local leapfrog results concern unconstrained maps. Their statements do not prove a projected constrained map symplectic. T07 proves constrained symplecticity from the discrete Lagrangian.
- Batch 65 / T01: the residual definition and finite Newton/chord procedure apply. The finite solver only reports residual-tolerance and failure statuses. The local scaled IFT branch, inverse estimates, and phase-space retraction here supply the stated forward-error claims; raw nonzero-residual outputs are not valid next inputs without restoration.
- Batch 75 / T06: the current DAE theorem applies to semi-explicit index-one systems with an invertible algebraic Jacobian. The unreduced holonomic system with differentiated tangency is index three; T07 does not apply the index-one result and proves the local multiplier reduction directly.
- The IFT, Picard–Lindelöf, Taylor, chain-rule, mean-value, and symplectic-form interfaces were read in their actual current library bodies. Full transitive mathematical dependencies remain in the direct suppliers' deps; no extra axiom is needed.

## Source history and reading

The complete relevant reasoning was inspected in two independent full-text treatments:

1. Hairer–Lubich–Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.1–VII.1.4, printed pp. 237–247 (PDF pp. 254–264). The inspected material covers consistent constrained data, the cotangent-bundle interpretation, the constrained flow, RATTLE equations, and the symmetry/symplecticity/order-two argument.
2. McLachlan–Modin–Verdier–Wilkins, Geometric Generalisations of SHAKE and RATTLE, §§4.1–4.5 and 5.1.1–5.1.3 (PDF pp. 4–11 and 18–24). The inspected material checks the nondegeneracy and coisotropy hypotheses, classical holonomic specialization, local well-posedness, symmetry, and symplecticity.

The planned Leimkuhler–Reich chapter mirror at https://nzdr.ru/data/media/biblio/kolxoz/M/MN/MNs/Leimkuhler%20B.%2C%20Reich%20S.%20Simulating%20Hamiltonian%20dynamics%20%28CUP%2C%202004%29%28ISBN%200521772907%29%28O%29%28397s%29_MNs_.pdf returned HTTP 404 on the initial retrieval. Searching alternatives found the independent author-hosted arXiv full text above, which was downloaded and read; this supplied the second complete treatment, so no recovery retry was needed. The failed mirror is not a source claim in the final carriers. The initial outcome and alternative search are preserved in the source-coverage retrieval history; no source was marked dropped or owner-escalated. `node tools/source-fetch-check.mjs --coverage research/numerical-optimization-dynamics-2026-10-16-batch-86.source-coverage.json --stamp` verified both final full-text URLs (2/2 fetch-verified, 0 newly stamped).

No source theorem substitutes for a local proof. The batch remains draft and awaits independent review.

## Scoped checks

- Precheck: 14 proof-bearing items passed; three definition/algorithm items were not applicable.
- Proof layout: 17 items, 48 numbered steps, 0 defects.
- Proof contracts: strict validation passed for 17/17 items with 0 errors and 0 warnings.
- Renderer: all 17 item files and both pages passed KaTeX and frontmatter checks (19 files).
- Content policy: 17 scoped items, 0 errors and 0 warnings.
- Depcheck: focused 17-item scope and both pages, 0 errors and 0 warnings.
- Dependency levels: 17 items checked against the batch-86 manifest, 0 errors, maximum item level 5.
- Coverage checklist: both pages, 41 harvested results, 0 errors and 0 warnings.
- Manifest dependencies, library page order, coverage order, and contract scope match the final item inventory.
- Step-1 readiness: 17/17 batch items recorded `ready`; the scoped hash check using `step1Decision` confirms 17/17 records are closed. These records are not independent approval.
- The whole-run `node tools/step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16` cannot complete: it encounters duplicate top-level `pipeline_run` in the out-of-batch item `items/alg-chebyshev-composite-simpson-weighted-mass-matrix.md` at line 25 while parsing its frontmatter. That carrier is outside T07 ownership and was left unchanged.

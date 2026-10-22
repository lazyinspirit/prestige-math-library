# Batch 11 authoring notes — Compatible matrix evolution and time stepping

Run: `physics-non-fluid-129-2026-10-21-r2`  
Role: beta  
Pair: `emx-compatible-matrix-evolution` / `emx-compatible-matrix-evolution-examples`

## Scope and plan comparison

The run-specific owner authoring direction file was absent. The assigned task's complete design section at `research/plan-classical-electromagnetism-frontier-expansion-track.md` §“Compatible matrix evolution and time stepping” agrees with the two exact entries in `research/plan-spec.json`: title, A/B page IDs, category, `library: mathematics`, order 719/720, and the four page prerequisites. The detailed inventory supplies four A items and two B counterexamples. No plan/design conflict was found. The run manifest and pages remain drafts.

The plan's item scope is retained: a finite real compatible matrix system, its energy and algebraic constraints, an exact staggered leapfrog procedure, its strict matrix-norm CFL condition, explicit Euler energy growth, and a defective equality endpoint. No mesh construction, continuum convergence estimate, physical field claim, or empirical result is asserted.

The matrix dimensions $n_e,n_b,n_c,n_g$ are nonnegative, matching the design's unrestricted finite-dimensional scope. The definitions specify $\mathbb R^0$ as the singleton empty-vector space, its unique square matrix as the identity, and positive-definiteness as vacuous there. The ODE existence/uniqueness proof and the leapfrog theorem explicitly cover empty state blocks and the zero operator domain; their proof contracts include those boundary checks.

## Inventory, dependencies, and levels

Batch 11 is dependency level 0 in `research/physics-non-fluid-129-2026-10-21-r2-batch-dependency-levels.json`, with no in-run batch prerequisites. Item levels were computed from the current batch item graph before carrier authoring and retained in both item frontmatter and the manifest:

| Item | Home | Direct item dependencies | Level |
|---|---|---|---:|
| `def-emx-matrix-maxwell-system` | A | `thm-finite-dimensional-orthogonal-decomposition` | 0 |
| `thm-emx-matrix-energy-constraints` | A | `def-emx-matrix-maxwell-system`; `lem-xd-finite-matrix-exponential-series`; `thm-continuous-on-a-rectangle-is-riemann-integrable`; `def-riemann-integral-over-a-jordan-set`; `cor-zero-derivative-implies-constant` | 1 |
| `alg-emx-staggered-leapfrog` | A | `def-emx-matrix-maxwell-system` | 1 |
| `thm-emx-leapfrog-cfl` | A | `def-emx-matrix-maxwell-system`; `alg-emx-staggered-leapfrog`; `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`; `thm-singular-value-decomposition`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `thm-operator-norm-is-the-largest-singular-value`; `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces` | 2 |
| `cex-emx-explicit-euler-growth` | B | `def-emx-matrix-maxwell-system` | 1 |
| `cex-emx-cfl-endpoint` | B | `alg-emx-staggered-leapfrog`; `thm-emx-leapfrog-cfl` | 3 |

The four added matrix-theorem inputs make implicit proof obligations explicit: componentwise Riemann integration and the zero-derivative conclusion support continuous-forcing existence and uniqueness; the operator norm, its largest-singular-value characterization, and Cauchy–Schwarz support the stated norm threshold and energy bounds. They are all mathematical suppliers. Each local dependency role is `mathematical-premise`.

## Prerequisite interface review

The four planned prerequisite pages are current published mathematics pages: `discrete-de-rham-complexes-and-edge-elements`, `finite-generator-master-equations-and-uniformization`, `inner-product-spaces-and-orthogonality`, and `the-spectral-theorem-and-singular-value-decomposition`. Their actual summaries and relevant current item statements/proofs were inspected. The discrete de Rham page identifies incidence maps as cochain coboundaries with successive compositions zero; the finite matrix definition therefore states `CG=0` and `DC=0` as explicit algebraic hypotheses and claims no mesh assembly. The matrix-exponential supplier has the finite-matrix series, local uniform convergence, derivative, initial value, and commuting-product identity required by the variation-of-constants proof. The inner-product suppliers use the linear-first convention, and every matrix norm here is explicitly Euclidean. The real spectral theorem applies to the symmetric positive mass matrices; the SVD and operator-norm suppliers apply to the finite real map `K` in the stated direction.

The actual current supplier items and full proofs were inspected. The finite-dimensional orthogonal decomposition proof uses finite basis extension and Gram–Schmidt; the matrix-exponential proof establishes convergence and differentiation rather than assuming Picard existence; the real spectral theorem supplies an orthonormal eigenbasis; the SVD constructs both singular bases; the operator-norm result proves both the bound and attainment; and Cauchy–Schwarz supplies the mixed-term estimate. The Riemann-integrability result applies coordinatewise on compact time intervals, and the zero-derivative corollary applies because `I` is an interval and every point of `I` is interior. These carriers are published mathematical suppliers with current statements and proofs, not accepted by this Step 1 record. The proofs require no arbitrary-index choice.

## Source reading and harvesting

The current A-page coverage uses two independent full lecture treatments. Source URLs, exact locators, harvested-result names, dispositions, and item support are recorded in `physics-non-fluid-129-2026-10-21-r2-batch-11.coverage.json`.

- Gilbert Strang, MIT 18.086 §5.3, *The Wave Equation and Staggered Leapfrog*: the complete 11-page PDF was retrieved and the relevant text was read, including the semidiscrete wave equation, centered and staggered leapfrog, the one- and higher-dimensional Fourier CFL arguments, the symmetric first-order-system energy calculation, and Maxwell's equations. Its grid-specific Fourier conditions are not used as the proof of the abstract matrix threshold.
- J. Zank, University of Vienna, *Topics in Finite Elements, Part I: Wave Equation*, Chapter 2 §2.3: the discrete-energy definition, Lemma 2.10's CFL positivity proof, the full energy-conservation proof of Theorem 2.12, and Theorem 2.14's finite-element hypotheses and stability statement were inspected. Mesh inverse inequalities, finite-element regularity, and PDE error bounds are not imported into the matrix theorem.
- `source-fetch-check --stamp` fetched and stamped both complete source PDFs successfully: 2/2 sources, with no recovery attempts needed for either current source.

The earlier classical-electromagnetism research source catalogue records a separate full-text read of Long Chen's ten-page *Finite Element Methods for Maxwell Equations*. A current re-open attempt encountered an HTTP 502/UnexpectedStatusCode; exact-title and official UCI-domain searches found the official course directory and the previously indexed text. That older source history was left intact. This batch does not rely on a Chen-only statement: the relevant mathematical claims are locally proved and the current page's source coverage is supplied by the two successfully inspected lecture treatments above.

## Carrier and contract evidence

The A and B pages and all six assigned items are present in the current batch manifest and their canonical page homes. The five proof-bearing carriers have proof contracts regenerated from the final numbered arguments, including exact supplier excerpts for each labelled fact, a step-by-step input map, all standard boundary dispositions, and applicable finite-dimensional hand checks. The definition, ODE theorem, and CFL theorem contracts explicitly check zero-dimensional cases. The algorithm remains a procedure definition; correctness, energy preservation, stability, and termination are established only in their separate theorem items.

There are no declared in-run cross-batch item or page edges for this batch. The four A-page prerequisites are external published pages, and the B page requires its A companion in the same batch. The required cross-batch dependency file is therefore the JSON array `[]`; external prerequisites and their inspected interfaces are recorded above.

## Scoped checks and readiness

The scoped final checks passed:

- The planning check on the exact A/B page selection passed before authoring (`physics-content: 0 error(s), 0 items checked`). A second planning check used a temporary `/tmp` plan copy containing the completed six-item batch inventory and passed with `physics-content: 0 error(s), 6 items checked`; the shared `plan-spec.json` was not changed.
- The batch-scoped `dependencyLevels` calculation reported `def-emx-matrix-maxwell-system=0`, `thm-emx-matrix-energy-constraints=1`, `alg-emx-staggered-leapfrog=1`, `thm-emx-leapfrog-cfl=2`, `cex-emx-explicit-euler-growth=1`, and `cex-emx-cfl-endpoint=3`, with no graph errors.
- After the zero-dimensional boundary edits and manifest statement refresh, the normative phase precheck passed all five proof-bearing items; `proof-layout.mjs` checked six explicitly changed items and 23 steps with zero defects; strict proof-contract validation passed all five items with zero errors or warnings.
- The final batch-scoped `physics-check` passed six items with zero errors. The standalone run-wide dependency-level helper reports empty scaffold inventories on unassigned pages from other batches; the isolated assigned-batch graph above has all six item records and zero dependency errors.
- The source harvest checklist passed one A page and 15 harvested results with zero errors or warnings.
- The batch content-policy check passed all six items with zero errors or warnings. Scoped `depcheck` passed the six selected items and their prerequisite cycle checks. `rendercheck` passed all six items and both pages with real KaTeX and renderer YAML parsing.
- `source-fetch-check --stamp` fetched both active sources successfully, then check mode confirmed 2/2 stamps. MIT: 148,979 bytes, 11 PDF pages, SHA256 prefix `140ef9ab4dd9ab90`. Vienna: 1,225,903 bytes, 48 PDF pages, SHA256 prefix `eb766b344841fab9`. Neither required a recovery retry.
- After all item and manifest edits, `step1-decisions.mjs record` refreshed six non-owner `ready` records with their direct examined item dependencies. The final `loadStep1Record`/`step1Decision` audit confirmed all six records current and closed: `def-emx-matrix-maxwell-system`, `thm-emx-matrix-energy-constraints`, `alg-emx-staggered-leapfrog`, `thm-emx-leapfrog-cfl`, `cex-emx-explicit-euler-growth`, and `cex-emx-cfl-endpoint`. The records are under the corresponding `research/physics-non-fluid-129-2026-10-21-r2-step1-<item-id>.json` paths.

No assigned prerequisite, placement, source, proof-contract, or check blocker remains. These are Step 1 authoring readiness records; independent review and later gates remain separate.

# Batch 97 authoring notes — Self consistent projector iterations and certified mixing

Run: numerical-optimization-dynamics-2026-10-16 · pair: self-consistent-projector-iterations-and-certified-mixing · batch: 97.

## Controlling design and conflict record

I read the complete assigned optimization-track design section at `research/plan-numerical-optimization-track.md` L1275 and its `contract-pc-scf` appendix, the matching `research/plan-spec.json` row, the owner authoring direction, and the generated batch assignment. The owner direction is controlling. The current plan contract supplies the rich SCF scope: gapped occupied-projector response; distinct projector and density-mixing maps; block-projector regularity and resolvent constants; explicit contractive and inexact residual bounds; finite-memory capped DIIS with singular-solve and gap fallbacks; a separately certified residual safeguard; level-shift equivalence under commutation and shifted ordering; and finite examples of gap loss, cycles, density mixtures, residual error, and singular Gram systems.

The plan-spec row agrees with the controlling contract on this pair’s claim scope and required placement. I found no scope conflict. The old task summary is narrower than the controlling PC-SCF contract; I followed the latter and retained the C1 response, block derivative, gap constants, density-completeness, constrained DIIS tie-break, and certified safeguard obligations rather than treating the summary as the full scope.

## Scheduling input and item inventory

The dispatch pins scheduling input `129360b77b8f51b329f01ff0a9bbb4516e207c277696a448a190e34bd6b427cf`. The current shared `batch-dependency-levels.json` stores internal input hash `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327` and raw file SHA-256 `2a0f995df70f741205c9b460eae21cf51eceb2a02408210e329dd6ad95fa74b7`. Its batch-97 row still matches the dispatch: dependency level 7, prerequisites 3 and 92. I preserved both hashes and did not alter the shared scheduling artifact.

Batch 97 has 19 A items and 6 B examples (25 items total), all below the 100-item page cap. Manifest, item frontmatter, page lists, and computed in-run item levels were reconciled. The full item graph has no batch-97 cycle.

| Item dependency level | Batch-97 items |
|---:|---|
| 0 | lem-capped-diis-coefficient-minimizer-exists |
| 1 | def-self-consistent-projector-response-map, def-admissible-hermitian-density-domain, lem-spectral-gap-persistence-and-uniform-resolvent-bound |
| 2 | lem-gapped-projector-map-well-defined, lem-projector-is-admissible-density, lem-admissible-density-domain-is-closed-convex-complete, ex-occupied-projector-discontinuity-at-zero-gap |
| 3 | thm-block-projector-frechet-derivative-and-bound, thm-contractive-scf-convergence-and-inexact-error-bound, thm-level-shift-fixed-projector-equivalence, alg-undamped-scf-with-gap-and-residual-status, alg-capped-diis-projector-proposal, lem-density-mixing-preserves-domain-but-not-projectors |
| 4 | thm-gapped-response-projector-lipschitz-certificate, cor-finite-basis-energy-model-has-c1-response, thm-density-mixing-contracts-under-jacobian-certificate, alg-certified-scf-with-diis-safeguard, ex-self-consistent-projector-two-cycle-with-gap, ex-affine-contractive-response-and-residual-error, ex-density-mixture-leaves-projector-manifold, ex-diis-singular-gram-fallback, ex-additive-eigensolve-tolerance-residual-certificate |
| 5 | thm-certified-diis-error-inheritance, alg-relaxed-density-mixing-with-finite-budget |

The exact level map is also in `research/numerical-optimization-dynamics-2026-10-16-batch-97-dependency-inputs.json`. The new local item `lem-projector-is-admissible-density` closes the missing prerequisite P_r ⊆ D_r before convex density mixing is used. It depends on the local density definition, the batch-92 rank-r projector definition, and the spectral theorem.

## In-run suppliers and actual interfaces

Batch 3’s actual `alg-fixed-point-iteration` body was inspected. It takes a metric self-map, starting point, residual tolerance, and finite budget; computes the fixed-point residual; and returns residual-tolerance-met or budget-exhaustion status. It claims no convergence or error bound. The undamped and relaxed finite-budget algorithms import only this update interface; their SCF gap checks, admissibility, and convergence cautions are local.

Batch 92’s actual A page and relevant item bodies were inspected, including `def-rank-r-orthogonal-projector-domain`, `lem-complex-hermitian-eigenvalues-lipschitz`, `def-finite-basis-projector-energy-model`, and its transitive `justified_by` supplier `prop-finite-projector-energy-reality-and-gradient`. The rank-r definition uses Hermitian idempotents of trace r. The eigenvalue bound is stated in descending order with multiplicity; the local spectral-gap proof reverses indices to use the same bound for its ascending convention. The finite-basis definition assumes positive-definite overlap and Cholesky whitening, Hermitian one-body data, real-linear Frobenius-self-adjoint G, and a real C2 functional on an open neighborhood. The examples set S=L=I, h=0, E_xc=0 and verify each G is real-linear and self-adjoint. The gradient proposition supplies the formula F=h+G+∇E_xc.

The current finite-basis A page is present and its item placement matches the batch-92 manifest. All in-run suppliers are available in current files; no source excerpt, review verdict, or acceptance is inferred. Exact interfaces and the transitive definition justification are recorded in `cross-batch-dependencies.json`.

## External prerequisite interfaces and axioms

All five assigned prerequisite pages are present. The page-level and direct external item prerequisites, with their actual current page homes, are recorded in `dependency-inputs.json`; the relevant full Statements/Definitions were inspected. In particular, Banach is used only on a nonempty complete invariant set with a contraction constant 0≤q<1; the vector-valued FTC hypothesis is a C1 path on [0,1] with the stated derivative bound; the Euclidean C2-to-C1 gradient step uses the exact continuous-partial theorem; and matrix operator/Frobenius inequalities use the singular-value formulas.

No axiom of choice or dependent choice is used. The abstract Banach-algebra Riesz projection definition has a Choice dependency, so the proof deliberately avoids it: a finite Hermitian spectral expansion and scalar circle Cauchy formula establish the contour identity locally. Eigenbasis choices are individual finite-dimensional witnesses, not selections from an indexed family. DIIS coefficient minimizers are selected by compactness and strict convexity of squared Euclidean norm, so the Gram matrix need not be nonsingular for the exact tie-break.

## Source reading and retrieval history

The A-page coverage ledger records six independent full-text treatments and each harvested result’s disposition. The primary treatments include Kato’s complete monograph and Rohwedder’s complete thesis, as required. The read ranges and role limits are:

- Kato, *Perturbation Theory for Linear Operators*, Chapter II §§1.3–1.4 and §1.6: resolvent/eigenprojection perturbation and singular-projector examples. Local contour derivatives and constants are proved here.
- Texier, “Basic matrix perturbation theory,” §§1–2: eigenvalue multiset continuity, total-projector contour formula, and regularity. Local Hermitian estimates are proved here.
- Cancès–Le Bris (2000), §2.2 Theorem 7 and Example 9, and §4 Theorem 11: Roothaan well-posedness, oscillation, and a different level-shift convergence theorem. No global theorem is imported.
- Cancès–Kemlin–Levitt (2020), §§2.1, 3.2, 4.4 and Appendix Lemma 4.1: projector conventions, a model-specific convex density hull, and local damped-SCF convergence under energy/retraction hypotheses. The local contraction theorem uses a different, explicit derivative certificate.
- Rohwedder, *An analysis for some methods and algorithms of quantum chemistry*, Chapter 4 §§4.1 and 4.4: DIIS objective and finite-history method, plus local convergence assumptions. No generic nonlinear DIIS theorem is imported.
- Walker–Ni (2011), §1 and §2.2: Anderson acceleration and the linear, untruncated GMRES-equivalence theorem under nonsingularity/nonstagnation conditions. The theorem is not extended to nonlinear capped DIIS.

The old plan’s Rohwedder–Schneider DOI candidate `10.1007/s00211-011-0401-3` did not yield full text: the Springer PDF route returned a 3,038-byte HTML response and ResearchGate returned HTTP 403. Search found the corrected DOI `10.1007/s10910-011-9863-y` and, as a complete directly retrievable alternative, the official TU Berlin full thesis used above. The thesis’s complete Chapters 4.1 and 4.4 were read. The failed candidate is replaced, not an unresolved prerequisite; no item proof is dropped. The attempts and resolution are retained in `coverage.json`.

## Proof and example coverage

The A page defines the occupied projector only across a strict rth gap and states internal-cluster degeneracies are allowed. A fixed circle centered at the lowest eigenvalue of H0 with radius R=λ_r(H0)−λ_1(H0)+g/2 remains at distance at least g/4 on the operator-norm ball of radius g/4. The contour resolvent bound is 4/g; the local block derivative is 16R/g² in Frobenius norm, and composition with an L_F-Lipschitz F yields q=16R L_F/g². The response is not called contractive unless q<1 and the set is invariant.

The density domain is distinguished from the projector manifold. Mixing preserves Hermitian positivity, upper bound by I, and trace r, but a direct 2×2 example proves the mixture may not be idempotent. The density set is proved nonempty, closed, convex, and Frobenius-complete. The relaxed-map convergence theorem uses a uniform bound on ||(1−α)I+αDΦ||; α>0 alone is not sufficient, and α=0 has a zero relaxed residual without implying a response fixed point.

DIIS is a finite-memory capped least-squares proposal. The coefficient feasible set is nonempty compact; a minimizer exists and has a unique minimum-Euclidean-norm tie-break even for singular Gram data. The certified outer algorithm separately checks a fixed-point residual plus additive response error; its theorem carries the error budget across accepted DIIS steps and fallback updates. No bare DIIS convergence claim is made.

The B page contains six locally verified cases: zero-gap discontinuity, a finite-basis gapped two-cycle, an affine contraction with exact residual bound, additive response-solve error, an admissible nonprojector density mixture, and a singular Gram/KKT fallback. The source’s infinite-dimensional oscillation and local convergence claims are context only; each finite calculation in this batch is verified directly.

## Scoped checks and readiness

Final scoped checks after the proof-contract repairs:

- `precheck.mts` on the 25 assigned items: 19 proof-bearing items checked, 0 failures; 6 definitions/algorithms not applicable.
- `proof-contract.mjs --strict`: 19/19 contracts checked, 0 errors and 0 warnings.
- `proof-layout.mjs` on all 25 assigned items: 62 steps, 0 defects.
- `rendercheck.mjs` on all 25 item files and both A/B page files: 27 files, 0 errors and 0 warnings.
- `depcheck.mjs` focused on the 25 assigned items and their dependency closure: 0 errors and 0 warnings.
- `content-policy.mjs` on the batch manifest: all 25 items, 0 errors and 0 warnings.
- `coverage-checklist.mjs`: 1 A page, 22 harvested results, 0 errors and 0 warnings.
- `source-fetch-check.mjs`: all 6 full-text sources fetch-verified and resolved; 0 documented drops.
- Full-run `item-dependency-levels.mjs check`: 2,009 items across 214 pages, maximum level 16; no label or cycle errors.

The source-coverage sidecar was synchronized from the final six stamped source records after the Cancès–Kemlin–Levitt harvest update. No shared plan, engine state, or verdict was changed. Recomputed autopilot status remains `running` at `1-scaffold`; there are no in-flight tasks. The persisted blocker record names batches 44 and 54 only. Batch 97 readiness records are authoring evidence and do not advance the run or constitute independent proof approval.

`step1-decisions.mjs record` produced `ready` records for all 25 assigned items using their declared direct item dependencies; a hash-current audit confirms 25/25 ready. No escalation was overwritten and no owner flag was used.

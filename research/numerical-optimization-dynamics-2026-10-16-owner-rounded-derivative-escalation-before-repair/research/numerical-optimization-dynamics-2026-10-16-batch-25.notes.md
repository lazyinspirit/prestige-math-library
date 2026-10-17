# Batch 25 authoring notes — Numerical inverse problems and regularization error

Date: 2026-10-16. Scope: only the NA-44 A/B pair and batch-25 evidence.

## Controlling design and conflicts

- The controlling design is `research/plan-numerical-optimization-track.md`, NA-44 at lines 258–282, and its incorporated Contract NA-44 in `research/numerical-analysis-four-category-scaffolds-2026-10-16/optimization-audit.md`. The owner direction names this route, and the current `plan-spec.json` row points to the optimization plan and exact contract. That contract requires a compact Hilbert-space forward map, the four-term bias/noise/operator-discretization/solve chain, the pre-inversion forward residual, conditional solve/roundoff terms, and the L²/cross-term caveat.
- The older `research/plan-numerical-analysis-track.md` NA-44 and the finite-matrix clause in the plan-spec description center on $A^\#_\lambda=(A^*A+\lambda I)^{-1}A^*$ and the finite-dimensional bias/noise identity. They agree with the specialization, but do not state the controlling compact Hilbert-space chain. Preserve both by proving the Hilbert-space chain locally and retaining the canonical finite-matrix formula as its specialization. The pair manifest also retains the plan-spec `finite-precision-direct-factorizations` requirement; that cross-pair application remains unresolved and is recorded separately below.
- Hansen writes the penalty as $\|Ax-b\|^2+\lambda_H^2\|x\|^2$. This batch uses $\|Ax-b\|^2+\lambda\|x\|^2$, so $\lambda=\lambda_H^2$. Clason's $\alpha$ is the coefficient of the squared penalty and maps directly to this $\lambda$.
- The A-page has five items and the B-page four examples, within the 100-item page cap. Published SVD, thresholded pseudoinverse, and finite-matrix Tikhonov objective/minimizer results remain at their canonical items; no compact-operator rate or universal parameter rule is inferred.

## Inventory and dependency levels

The batch-25 scaffold manifest was populated before carriers. The in-run graph is:

| Item | Direct in-run dependencies | Level |
|---|---|---:|
| `lem-hilbert-tikhonov-normal-operator-invertible` | none | 0 |
| `lem-truncated-svd-bias-and-data-noise-decomposition` | none | 0 |
| `lem-hilbert-tikhonov-noise-amplification-bound` | normal-operator lemma | 1 |
| `thm-tikhonov-error-chain-with-discretization-and-residual` | normal-operator lemma; noise-amplification lemma | 2 |
| `cor-l2-inverse-error-budget-and-cross-term-condition` | error-chain theorem | 3 |
| `ex-tikhonov-normal-equation-residual-bound` | normal-operator lemma | 1 |
| `ex-diagonal-inverse-noise-amplification` | noise-amplification lemma | 2 |
| `ex-tikhonov-bias-noise-tradeoff` | error-chain theorem | 3 |
| `ex-quadrature-discretization-residual-before-inversion` | error-chain theorem | 3 |

The scoped `dependencyLevels` calculation found nine items, no cycles or label errors; each carrier's `dependency_level` agrees with its manifest entry. External published suppliers do not raise in-run levels. The dispatch input was `ca41fcdd6d4a40fbd61e4921a8bfdd410bd704a05c937a5f709843ed28d2e97d`; batch 25 is level 1 with prerequisite batch 1.

## Supplier interfaces and axiom use

- The full statements and proofs for `def-hilbert-space-adjoint`, `thm-orthogonal-decomposition-by-a-closed-subspace`, and their Countable Choice prerequisite were inspected. The local normal-operator proof uses exactly Countable Choice for the adjoint and orthogonal decomposition; it does not claim full Choice. The energy proof uses no spectral theorem or compact-operator source condition.
- The actual `thm-singular-value-decomposition` and `def-truncated-singular-value-pseudoinverse-at-a-declared-threshold` bodies were inspected. The local TSVD statement uses the strict threshold convention $\sigma_i>\tau$ and includes the nullspace in the discarded-direction bias.
- The actual `def-tikhonov-regularised-least-squares` and `thm-tikhonov-regularised-least-squares-has-a-unique-minimiser` bodies were inspected. Their scope is finite matrices; only the finite-matrix specialization uses them. The Hilbert-space normal equation and error chain are proved locally.
- The new A3 theorem states compactness as required by Contract NA-44; the normal-operator and noise lemmas remain valid for bounded maps more generally. A3 also defines its discrete operator by requiring finite-dimensional range, and now cites `cor-inner-product-induces-a-norm` for the triangle-inequality steps. Its direct factorization application is not claimed without a finite-dimensional coefficient-space interface and arithmetic proof.

## Source reading and dispositions

`batch-25.coverage.json` records all 13 harvested results, exact locators, supported item IDs, names, dispositions, and fetch stamps. Hansen's Chapters 4 and 5 are one treatment: the complete 29-slide Chapter 4 and complete 27-slide Chapter 5 were inspected. Chapter 4 slides 3–8 cover ill-conditioning/TSVD, slides 11–17 discrete Tikhonov filters, and slides 21–23 perturbations; Chapter 5 slides 2–6 give the forward-error split and slides 7–27 discuss parameter-choice criteria and their limits. Source URLs: [Hansen Chapter 4](https://www2.compute.dtu.dk/~pcha/DIP/chap4.pdf) and [Hansen Chapter 5](https://people.compute.dtu.dk/pcha/DIP/chap5.pdf).

The independent second treatment is Guido Clason's full 119-page lecture note, [Regularization of Inverse Problems](https://imsc.uni-graz.at/clason/preprints/InverseNotes.pdf). The relevant reasoning inspected includes Chapters 2–3 and Chapter 6, equations (6.1)–(6.4) and Theorem 6.5 with its proof (PDF pp. 56–63). The local proofs supply details not imported from those references, including the coercive normal-operator argument, the sharp energy estimate, the full discretization/residual chain, and the cross-term condition. There were no retrieval failures, recovery retries, or drops. `source-fetch-check --stamp` previously verified all 3/3 full-text sources; the final no-network check also verified 3/3.

## Cross-batch supplier inspection and unresolved interface

The actual batch-1 manifest and bodies were inspected; no absent supplier item or proof was invented. The `finite-precision-direct-factorizations` page currently declares these relevant items:

- `thm-computed-full-rank-least-squares-backward-stability` is a real, full-column-rank reduced-QR least-squares result with conditional QR, range, gamma, successful-dot/solve, and nonsingularity hypotheses. Its actual Proof 1.2 says, “No such estimate has been proved here, so DeltaR cannot yet be constructed.” The owner-escalation section identifies the rounded triangular-solve estimate and zero-solution branch as unresolved.
- `thm-scaled-householder-qr-backward-stability` is conditional on the local per-step premise. Its Readiness section says, “Its formation/update estimate is unresolved, so this item cannot be ready for acceptance.”
- `lem-scaled-householder-step-meets-local-backward-error-premise` states, “The nonzero formation and rank-one-update estimate is unresolved.” Only its zero-column branch is established.
- `thm-rounded-cholesky-componentwise-and-normwise-backward-error` proves a successful factorization backward-error bound. Its statement/proof do not give a triangular solve or evaluated normal-equation residual certificate.

The missing interface is larger than invoking a finite matrix theorem by name. A3 permits a finite-rank $A_h:X\to Y$ on a possibly infinite-dimensional domain and does not choose a finite-dimensional coefficient representation. Applying batch 1 therefore also needs a finite-dimensional space and map whose represented Tikhonov solution is proved to equal $R_{\lambda,h}y_\delta$ (or a proved restriction to such a space). For that representation, a complete computed augmented-system result for $[A_h;\sqrt{\lambda}I]$ must establish the actual output error or a residual-evaluation allowance, under its real/complex branch, square-root representation, range/success, QR-local-error or Cholesky-solve, and nonsingularity/conditioning hypotheses. Alternatively supply certified $\rho_h,\rho_{h,h}$ and a returned-output roundoff bound. The exact A3 chain remains conditional and locally proved; it does not claim these certificates automatically.

The affected A3 subclaims are application of $\rho_h$ or $\rho_{h,h}$ to computed residuals, the exact-stop/returned-output split, and interpreting its abstract $A_h$ normal solve as a direct-factorization computation. `cor-l2-inverse-error-budget-and-cross-term-condition`, `ex-tikhonov-bias-noise-tradeoff`, and `ex-quadrature-discretization-residual-before-inversion` remain escalated through A3. The exact calculations remain in their drafts. This interface and the actual excerpts are preserved in `batch-25.cross-batch-dependencies.json`; no unproved batch-1 item appears in local `deps` or proof-contract citations.

## Authored content

- A1 proves the shifted Hilbert normal operator is bijective and has inverse norm at most $1/\lambda$, using coercivity, closed range, orthogonal decomposition, and the stated Countable Choice assumption.
- A2 proves the sharp Tikhonov data-noise bound $1/(2\sqrt\lambda)$ by the normal-equation energy identity and completing a scalar square.
- A3 proves the exact bias/noise/operator-discretization/solve-residual chain, conditional operator/residual evaluation estimates, the separate exact-stopping/returned-output term, the pre-inversion $d_h=(A-A_h)x^\dagger$ refinement, and the finite-matrix canonical bias/noise identity. No rate, parameter rule, direct floating-point solve certificate, or residual-evaluation bound is implicit.
- A4 proves the exact TSVD discarded-direction bias and retained-direction noise formula, including the empty retained set.
- A5 proves the pathwise-to-$L^2$ inequality by Minkowski and the integrated cross-term identity. Root-sum-square is asserted only when the displayed cross terms vanish.
- B1 is an exact diagonal equality case for the noise bound; B2 gives exact scalar bias/noise values; B3 verifies all five terms in a scalar pre-inversion quadrature-residual chain; B4 computes an exact scalar normal-equation residual and explicitly does not certify its floating-point evaluation.

## Final scoped checks and readiness

- Scoped dependency levels: 9 items, no graph errors; all manifest/carrier levels match. `manifest-deps`: 9 items, 0 errors. `depcheck` on all nine items and both pages: 0 errors/warnings, closure 1,049 items and 171 pages.
- `content-policy`: 9 items, 0 errors/warnings. `rendercheck`: 11 item/page files, 0 errors/warnings. `precheck`: 9/9 pass. `proof-layout`: 9 items, 28 numbered steps, 0 defects. Strict `proof-contract`: 9/9 checked, 0 errors/warnings.
- `coverage-checklist`: 13 harvested results, 0 errors/warnings. Final `source-fetch-check`: 3/3 verified and resolved, 0 drops; the earlier `--stamp` run verified all 3/3 sources.
- The run-wide item-level check still reports 154 empty scaffold inventories and six level mismatches in other batches: `def-na-dct-ii-and-dst-i-even-odd-extension` (1 vs computed 2), `thm-na-dct-ii-orthogonality-inverse-and-dft-extension` (2 vs 3), `thm-na-dst-i-orthogonality-inverse-and-dft-extension` (2 vs 3), `thm-na-dct-ii-chebyshev-coefficient-extraction` (3 vs 4), `ex-na-three-sample-dct-chebyshev-coefficients` (4 vs 5), and `lem-stopping-time-ito-step-interval-sum` (0 vs 1). None is in batch 25; no other pair was edited.
- The run-wide batch-level check cannot finish parsing: `items/def-matching-affine-simplicial-meshes.md:16` has an unquoted YAML locator containing `: reference maps`. This is outside batch 25; the shared dependency-level artifact was left unchanged. At final inspection that artifact records input hash `cd9fe01da8dcbe3ff6a540a1485d702ae31df66e19a4a5ace4f8444eb6c687a3` and still lists batch 25 at level 1 with prerequisite batch 1. Because recomputation fails on the unrelated malformed locator, current shared-hash currency is unverified; the dispatch hash remains the `ca41...` value above.
- The recomputed `.autopilot/numerical-optimization-dynamics-2026-10-16` status is `running`, at `1-scaffold` with 3/107 covered and nothing in flight. The current Git log begins with `3290b4defb` (“Split numerical methods into four audited prose categories”). This batch's local carriers/readiness files do not advance or mutate the owner-controlled run.
- Five items have `ready` Step 1 records and four have `escalated` records, all `owner:false`; no `--owner` override was used. Escalations are A3, A5, B2, and B3 because the actual required batch-1 direct-solver interface is incomplete. The explicit A3 triangle-norm supplier was added after its escalation was recorded; the escalation record was left unchanged under the no-overwrite instruction, and remains open. Readiness records denote authoring readiness only, not independent approval.

No tests were run. No published content, shared plan, shared dependency-level artifact, engine state, verdict, or other pair's files were edited.

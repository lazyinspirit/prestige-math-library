# Batch 93 authoring notes — sparse grid cubature and mixed regularity

## Scope, controlling design, and inventory

Batch 93 owns the A/B pair `sparse-grid-cubature-and-mixed-regularity` and `sparse-grid-cubature-and-mixed-regularity-examples` (orders 2470–2471). The current pair plan and `plan-spec.json` agree on scope, examples, and the three page requirements: `composite-quadrature-rules`, `clenshaw-curtis-and-extrapolation-quadrature`, and `gaussian-quadrature`. The A page has 12 items and the B page has 3 examples, both below the 100-item cap.

The provisional scaffold used a trapezoid hierarchy. The controlling plan requires a selected one-dimensional rule whose detail decay and node increments are proved. I replaced that provisional route with the composite-Simpson hierarchy supplied by batch 20: level $\ell$ uses $2^{\ell+1}$ equal panels. This preserves the full planned scope and uses the actual Simpson algorithm, cubic exactness theorem, and $C^4$ error theorem. The current pair manifest and item bodies now use matching Simpson dependencies and IDs.

The item levels were recomputed over all current run manifests, counting in-run dependencies only:

| Level | Batch 93 items |
|---:|---|
| 1 | `def-smolyak-univariate-level-hierarchy` |
| 2 | `def-smolyak-cubature`; `lem-smolyak-dyadic-tensor-simpson-convergence` |
| 3 | `alg-smolyak-node-deduplication`; `def-smolyak-absolute-detail-summability`; `lem-smolyak-mixed-simpson-detail-decay`; `lem-smolyak-rectangular-telescope` |
| 4 | `alg-dimension-adaptive-smolyak-surplus-selection`; `thm-smolyak-absolute-detail-reconstruction-and-tail-error`; `thm-smolyak-polynomial-multi-degree-exactness` |
| 5 | `lem-smolyak-adaptive-surplus-termination`; `thm-smolyak-isotropic-mixed-smoothness-work-error-rate` |
| 6 | `ex-smolyak-diagonal-ridge-breaks-mixed-regularity` |
| 8 | `ex-smolyak-four-dimensional-product-integrand`; `ex-smolyak-signed-weights-polynomial-chaos-coefficient` |

The run scheduling artifact records batch 93 at dependency level 6 with prerequisite batches 20, 43, and 82. The dispatch’s scheduling-input digest is `a20c83d967c4fb82d96b2681fe009f89c3dd179bbf56683e847ca38526498979`, while the current shared `batch-dependency-levels.json` has `input_sha256` `04a57edb982e756b2bdf7b54936383b64b17fbc7a6e2709dddb29d8083b46327`. Both record the same batch-93 level and prerequisite batch set. I did not modify the shared scheduling artifact.

### Design wording reconciliation

The pair section says no external canonical item is a proof premise, while the same `plan-spec.json` entry says to reuse published canonical algorithms/definitions. I read the specific restriction as prohibiting reliance on an external sparse-grid/Smolyak error or exactness theorem: all such claims here are proved locally. The method-specific one-dimensional facts come from the explicitly required same-frontier suppliers (batches 20, 43, and 82); standard finite-sum, real-analysis, calculus, logarithm, and counting definitions are cited by exact published IDs. If the restriction was intended to prohibit those foundational published items too, the affected consumers are the tensor-convergence, mixed-detail, reconstruction, rate, polynomial-exactness, ridge, and signed-weight items; local foundational replacements would need owner direction and placement on the A page. This interpretation is recorded rather than silently dropping those prerequisites.

## Mathematical route and caveats

- The local A-page definitions fix finite nested levels, $Q_{-1}=0$, tensor differences, finite downward-closed Smolyak sets, exact-key node deduplication, combined signed weights, and actual union work.
- Rectangular finite telescoping is proved directly. The polynomial exactness theorem is derived from actual level exactness; it also specializes the selected Simpson hierarchy using the batch-20 cubic-exactness theorem.
- Tensor composite-Simpson convergence is proved by a Darboux squeeze: every tensor block is a positive weighted average over its cell. The mixed detail lemma applies the batch-20 Simpson error bound at adjacent levels and obtains $17/2880\cdot16^{-\ell}$ in each active coordinate; summing active levels gives $17/43200$ per coordinate in the absolute-summability bound.
- The reconstruction theorem proves the omitted absolute-detail tail bound by rectangular telescoping, finite triangle inequalities, and convergence of tensor terminal rules. The mixed derivative result establishes the theorem’s absolute-summability hypothesis.
- The isotropic count is the exact distinct-node count $\sum_{|t|_1\le n}\prod_j a_{t_j}$, with $a_0=3$ and $a_r=2^r$ for $r\ge1$. The proof gives $2^n\binom{n-1}{d-1}\le W_{n,d}\le 2\cdot3^d d^{d-1}2^n(n+1)^{d-1}$ and the explicit Simpson error $T_d\|f\|_{\mathrm{mix},d}16^{-n}(n+1)^{d-1}$, followed by the stated $W^{-4}(\log(2+W))^{5(d-1)}$ form. Constants remain dimension dependent; no weighted-anisotropic tractability claim is made.
- The adaptive algorithm has a finite candidate cap and evaluation budget. A computed surplus is a refinement indicator only; it is not treated as a certified omitted tail.
- The B examples verify the 48-node Clenshaw–Curtis product example, show $|x-y|^3$ fails the fourth-derivative hypothesis, and compute a positive constant-chaos coefficient whose level-two Simpson-Smolyak estimate is $-1/144$. The Gaussian sign comparison uses positive weights only and makes no exactness claim for the example polynomial.

## Supplier interfaces inspected

The actual supplier bodies and proofs were inspected; this is interface verification only and does not imply acceptance of another pair’s draft.

- **Batch 20 — composite quadrature.** `alg-composite-simpson-rule` fixes the even-panel formula and exact-real finite sum. `thm-composite-simpson-exact-through-degree-three` applies for $a<b$, even $n\ge2$, and cubic polynomials. `thm-composite-simpson-error-bound` applies for $a<b$, even $n\ge2$, and $f\in C^4([a,b])$, with $|I-Q_S|\le(b-a)h^4M_4/180$. Its Peano-kernel proof and panel hypotheses were inspected.
- **Batch 43 — Clenshaw–Curtis.** `def-na-clenshaw-curtis-quadrature` has the midpoint convention at $n=0$ and Chebyshev–Lobatto rules at $n\ge1$. `thm-na-clenshaw-curtis-exactness-and-near-best-error` gives degree-$n$ exactness for continuous functions. The B example uses $n=1,2$ on $[0,1]$ and the actual cosine values supplied by the listed trigonometric item.
- **Batch 82 — Gaussian quadrature.** `def-gauss-quadrature-rule`, `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights`, and `def-tensor-product-gauss-rule` were inspected. The sign comparison uses the theorem only under its valid positive-measure moment-data hypotheses, then the tensor definition’s product weights.

`batch-93.cross-batch-dependencies.json` records all 3 required page edges and 11 direct cross-batch item edges, with current supplier excerpts and matched hypotheses. A scoped read-only reconciliation found 3/3 page edges, 11/11 item edges, no missing or extra edges, and exact excerpt matches for every item edge.

## Source reading, stamps, and retrieval history

The A-page coverage has independent full-text sparse-grid treatments in the Gerstner–Griebel reference-work chapter and the Zabaras full lecture-note deck. Coverage also records the full Gerstner–Griebel dimension-adaptive paper and Driscoll–Braun §5.6 for Simpson setup. The B page has the Trefethen Clenshaw–Curtis paper, Gubner Gaussian-quadrature paper, and the Zabaras lecture-note treatment. Exact URLs, locators, supported items, dispositions, read evidence, and stamps are in `numerical-optimization-dynamics-2026-10-16-batch-93.coverage.json`.

Seven coverage entries (six unique URLs because the Zabaras lecture notes support both pages) pass `source-fetch-check`. No cited source is dropped or unresolved. Earlier nonselected candidates included an obsolete Garcke tutorial URL returning 404 and a Citeseer alternative that did not retrieve; neither is represented as a harvested source. A search for Art Owen’s Simpson chapter also timed out at the candidate PDF URLs; the complete Driscoll–Braun §5.6 and the inspected batch-20 proof supplied the needed formula and error argument instead. These are unselected candidates, so no source-resolution drop was recorded and no mathematical coverage depends on them.

## Final scoped checks and remaining run-wide blockers

- `author-check.mts ... 93`: pass; its report is `numerical-optimization-dynamics-2026-10-16-author-check-93.json`.
- `proof-contract.mjs --strict`: 0 errors, 0 warnings, 15/15 contracts checked.
- `proof-layout.mjs` on the 15 explicitly changed item files: 15 items, 32 numbered steps, 0 defects.
- `manifest-deps.mjs`: 15 items, 0 normalized, 0 errors.
- `coverage-checklist.mjs`: 2 pages, 21 harvested source results, 0 errors, 0 warnings.
- `source-fetch-check.mjs`: 7/7 source entries fetch-verified; 7/7 resolved.
- Scoped dependency calculation: all 15 labels match the computed levels above, with no batch-93 dependency errors.
- The run-wide `item-dependency-levels.mjs check` remains blocked by unrelated empty manifests for `simulation-gradient-estimation-and-simultaneous-perturbation` and its examples, `multirate-and-partitioned-time-integration` and its examples, `langevin-splittings-and-invariant-measure-error` and its examples, and `global-sensitivity-anova-and-sobol-estimation` and its examples. It also reports unrelated stale labels on `ex-additive-eigensolve-tolerance-residual-certificate` (3 vs 4) and `ex-affine-random-diffusion-uniform-coercivity` (4 vs 5). None is batch 93.
- `batch-dependency-levels.mjs check` cannot parse an unrelated duplicate YAML `locator` key reported around line 25 in the batch-90 Chebyshev Dirichlet collocation source lists (`items/alg-chebyshev-dirichlet-bvp-collocation-boundary-elimination.md` and `items/thm-chebyshev-dirichlet-collocation-status-and-system.md`). The shared dependency artifact was left untouched.
- All 15 batch-93 items now have current `step1-decisions` records marked `ready`, with their exact direct dependency IDs and the scoped evidence above. These are authoring-readiness records only, not independent approval.

No test suites were run. New content remains draft. The run state, shared plans, dependency artifact, and verdicts were not modified.

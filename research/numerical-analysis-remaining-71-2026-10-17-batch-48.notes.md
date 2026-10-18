# Batch 48 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: beta  
Pair: `nystrom-product-integration-and-fredholm-error`  
Scheduling input: `a9c2867eaa03cf0691cfe311c2db2df06f2bb75d230effbc8a099369ec33749c`

## Plan and design reconciliation

The controlling `plan-spec.json` row and this dispatch agree on the A/B page IDs, category, order 2650/2651, title and three page requirements. The complete design section is at `research/plan-numerical-spatial-track.md` §1124 (the task’s design pointer is line 1124 in that file). One stale interface conflict is recorded: the design’s prerequisite discussion describes `composite-quadrature-rules` and `gaussian-quadrature` as unpublished, same-frontier suppliers in the linear track; the current plan-spec row and checkout place both as published pages under `numerical-linear-algebra-and-approximation`. The compact-operator page and Fredholm alternative are also published. These are external published interfaces, so this batch has no in-run prerequisite edges and its cross-batch dependency input is empty.

The design’s scope and cautions are preserved: finite-node Nyström reconstruction, stability and solution error, a smooth-integrand rate, the distinction between pointwise and operator-norm convergence on $C([0,1])$, and a weakly singular product-integration example. The local half-order construction does not claim a generic singular-kernel theorem.

## Inventory and dependency levels

| Local item group | Items | Level |
|---|---|---:|
| A definitions and independent prerequisites | `def-nystrom-quadrature-and-finite-rank-operators`, `lem-finite-node-equation-reconstruction-equivalence`, `lem-continuous-kernel-integral-operator-is-compact-on-C`, `thm-collectively-compact-operator-stability-and-error`, `lem-half-order-singular-integral-exists`, `lem-half-order-kernel-translation-modulus-in-l1` | 0 |
| A first consumers | `thm-nystrom-operator-norm-perturbation-error`, `lem-midpoint-nystrom-collective-compactness-and-consistency`, `def-half-order-product-integration` | 1 |
| A second consumers | `lem-half-order-product-weights-closed-form`, `thm-midpoint-nystrom-smooth-solution-error`, `lem-half-order-product-integration-stability-and-consistency` | 2 |
| A final product-integration result | `thm-half-order-product-integration-fredholm-error` | 3 |
| B examples | Gaussian, near-resonance, and operator-norm counterexample items are level 1; the half-order midpoint order-loss example is level 2. | 1/2 |

The local finite-node equivalence and continuous-kernel compactness results are proved before consumers. The half-order scalar functional and its L1 translation-modulus lemma are proved locally before product integration is used, and a separate level-2 lemma gives exact endpoint and interior hat-weight formulas. The midpoint operator-norm counterexample is explicit and has exact norm 2 for every panel count.

## Supplier interfaces and axiom branches

- `thm-fredholm-alternative-for-identity-minus-compact` is used only under AC: for a compact operator on a Banach space, injectivity of $I-K$ gives surjectivity and a bounded inverse. The local collective-compactness stability theorem and the final Fredholm error theorem state this branch explicitly.
- The real Arzelà–Ascoli supplier requires Countable Choice and Dependent Choice. The local compactness items cite the explicit bridge from AC when invoked. The direct quadrature residual bounds, scalar improper-integral argument, and L1 translation-modulus proof are choice-free.
- The operator-norm perturbation branch uses a bounded inverse and an actual operator-norm bound; it uses the Neumann-series supplier and remains independent of the AC-dependent collective-compactness branch.
- The composite midpoint error supplier assumes a $C^2$ integrand on the panel interval and gives the $h^2\|g''\|_\infty/24$ bound. The Nyström rate is applied to the actual fixed solution integrand, not to the unit ball of continuous functions.
- The Gaussian example uses the published degree-3 exactness and positive-weight result for an order-3 moment datum with $m=2$, and Countable Choice only for equality of the continuous Riemann and Lebesgue integrals.
- The singular product-integration branch defines the improper diagonal integral by an explicit cutoff limit and proves the $2\sqrt{x}+2\sqrt{1-x}$ weight formula. A separate local lemma proves existence and uniform continuity of the improper L1 translation modulus. The Fredholm conclusion alone invokes AC.

Actual published supplier bodies were read for the composite midpoint rule/error bound, Gaussian moment/exactness interfaces, compactness and Fredholm alternative, Neumann perturbation, real Arzelà–Ascoli, completeness of (C([0,1])), interpolation error, and Riemann integration facts. The local facts blocks restate the hypotheses used and the proofs supply the intermediate arguments.

## Source reading and dispositions

The batch coverage records the complete retrieval and the per-result disposition for each source:

1. Neubauer–Ramlau, *Lecture Notes: Integral Equations and Boundary Value Problems*, §2.2 and §3.3, printed pp. 15–16 and 60–65. The Nyström definitions and matrix reconstruction, collective compactness framework, convergence theorem, and error discussion are included or used as comparison. Lemmas 3.16–3.17 and the iterative-method Remark 3.22 are explicitly out of scope because the local proof route does not need them and this pair adds no iteration method.
2. Ammari–Fitzpatrick–Yu, *Mathematical and Computational Methods in Photonics: Tutorial Notes*, §§1.3–1.4, printed pp. 10–17. This supplies an independent treatment of norm perturbation and Nyström convergence. Its printed Theorem 1.7 repeats one expression in both limits, Theorem 1.9 has a sign typo in the right-hand-side difference, Theorem 1.10 has omissions in its displayed equations, and the title of Theorem 1.11 reverses the direction stated in its body. These defects are recorded in coverage; no malformed claim is used as a proof step. The corresponding local proofs are complete.
3. Lebl, *Basic Analysis I*, §5.5, Definition 5.5.1 and Proposition 5.5.2. The complete relevant endpoint p-test argument is used for the p=1/2 diagonal singularity and its exact hat-weight primitives; all remaining section examples are out of scope.

The design’s Atkinson/Anselone readings were pending in the checkout and were not claimed as read. A prior search for a Schneider paper mirror failed at network/DNS retrieval; its exact candidate URL was not retained in the inherited evidence. It is not used as a supplier: the local half-order proof is complete, and the two full lecture-note treatments plus Lebl’s textbook section were successfully inspected. `source-fetch-check --stamp` retrieved and verified all three selected source files; the coverage records their byte counts, hashes, and page/text counts. No recovery retries were needed for these selected sources.

## Finite checks and validation log

No registered finite-smoke check applies: all claims here are proved symbolically, and the numerical examples have exact closed-form verifications rather than a finite search.

Final scoped checks:

- `precheck.mts`: 15 proof-bearing items checked, 0 failures; 2 definitions were not applicable.
- `proof-layout.mjs`: 17 items, 54 steps, 0 defects.
- `proof-contract.mjs --strict`: 17/17 items, 0 errors, 0 warnings.
- Item dependency levels: all 17 batch items checked; maximum level 3. `manifest-deps.mjs` found 17 entries with explicit dependency arrays.
- `content-policy.mjs`: 17 items, 0 errors, 0 warnings. `coverage-checklist.mjs`: 1 page, 28 harvested results, 0 errors, 0 warnings. `source-fetch-check.mjs`: 3/3 selected sources verified.
- `audit-manifest.mjs`: 111 relationships over all 17 items, 0 defects.
- Focused `depcheck.mjs`: 16 selectable item IDs, 0 errors, 0 warnings. Its selector grammar rejects the assigned carrier `lem-continuous-kernel-integral-operator-is-compact-on-C` because of the uppercase `C`; the full 17-item dependency-level check and the 17-item audit-manifest check include it.
- Step 1 readiness records: all 17 assigned items have valid `ready` records. The whole-run check reports 308/701 ready and no open item from batch 48; other run items remain unrecorded outside this pair, so the run-level check remains open.

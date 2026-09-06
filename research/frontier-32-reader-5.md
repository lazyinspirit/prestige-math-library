# Frontier 32 — independent reader report, batch 5

## Opened scope

I read the current batch manifest, proof contract, notes, both assigned pages,
and all 32 assigned items. The A page is
`modes-of-convergence-for-random-variables`; its 23 items are the five mode
definitions, the measurable-event lemma, the implication and subsequence
theorems, the $d_0$ definition and theorem, the two uniform-integrability
results, Slutsky, the implication remark, pairing, and continuous maps. The B
page is `modes-of-convergence-for-random-variables-examples`; its nine items
are the seven counterexamples and the fast-subsequence and
uniform-integrability examples listed in the manifest.

I also opened the direct dependency statements used to check the claims:
probability spaces and real random variables; real limits; convergence in
measure, $L^1$, and $L^p$; laws, CDFs, and their continuity points;
expectation and almost-everywhere equality; Markov, Borel--Cantelli,
dominated convergence, finite-measure $L^q\subset L^p$, Vitali, and the
nonnegative-integral-zero criterion. The current Durrett source was opened at
§3.2, including Exercises 3.2.12--3.2.14, and the current Roch notes were
opened through §§1.1--1.3 (Definitions 3.1, Theorem 3.12, and Theorem 3.14).

## Permitted repairs

All repairs below are in in-flight A items. No B-page body, published item,
plan, or other batch was changed; no `verification.judge` record was present
to remove.

- `def-convergence-in-lp-for-random-variables`: made the $p=\infty$ branch
  explicit. The preceding $L^q\Rightarrow L^p$ theorem quantified over
  $q=\infty$, while the former definition only defined the finite-$p$ case.
- `thm-limits-in-probability-are-unique-almost-surely`,
  `thm-lp-convergence-implies-convergence-in-probability`,
  `thm-lq-convergence-implies-lp-convergence-on-a-probability-space`,
  `thm-convergence-in-distribution-to-a-constant-is-convergence-in-probability`,
  `thm-subsequence-characterization-of-convergence-in-probability`,
  `thm-dominated-convergence-in-lp`, and
  `cor-uniform-integrability-characterizes-l1-convergence-under-probability-convergence`:
  restored omitted containment/conclusions and repaired malformed proof
  sentences. The dominated-$L^p$ proof now explicitly takes the countable
  intersection of the full-measure domination events.
- `thm-slutsky-for-real-random-variables`: replaced the unsupported claim that
  one CDF squeeze works unchanged for products and quotients with a complete
  perturbation argument: a CDF perturbation lemma, scalar weak convergence,
  tightness of $(X_n)$, and the product/quotient error estimates. The source
  locator now identifies Durrett §3.2 Exercises 3.2.12--3.2.14, which actually
  contains the converging-together and product statements.
- `lem-pairing-preserves-convergence-in-probability`: replaced its incorrectly
  global product-topology-metric proof with the exact max-metric statement and
  union-bound proof.
- `thm-continuous-maps-preserve-convergence-in-probability`: stated the
  finite-dimensional norm-tail hypothesis and conclusion explicitly and fixed
  the compact-localization bound from a non-justified weak inequality to the
  valid half-threshold bound.

The proof contract was updated for the changed $L^p$ definition, the repaired
Slutsky proof steps, and the pairing/continuous-map proof claims and citations.

## Uneditable defect

`reader-5-01` remains in
`items/ex-a-probability-convergent-sequence-with-a-prescribed-fast-as-subsequence.md:22,28,38`.
It permits $a_k\downarrow0$ without $a_k>0$, although its proof invokes a
positive-threshold property. With deterministic $X_n=1/n$, $X=0$, $a_k=0$,
and any positive summable $b_k<1$, the premise holds but
$\mathbb P(|X_{n_k}-X|>a_k)=1$ for every choice of $n_k$. The claimed
selection is therefore false. This is B-page prose, so it is not editable by
this reader; the matching structured finding is in
`research/frontier-32-reader-findings-5.json`.

## Verdict and checks

| Page | Verdict |
| --- | --- |
| A: Modes of Convergence for Random Variables | repaired and sufficient |
| B: Modes of Convergence for Random Variables — Examples | fatal uneditable missing hypothesis in the fast-subsequence example |

Validation after the repairs:

- Reflow ran on every changed item.
- Focused precheck passed for every changed proof-bearing item.
- Full batch precheck passed: 26 proof-bearing items, 0 failures.
- `node tools/proof-contract.mjs research/frontier-32-batch-5.proof-contracts.json --strict` passed: 26/26, 0 errors and 0 warnings.
- `node tools/manifest-deps.mjs research/frontier-32-batch-5.pages.json` passed: 32 items, 0 errors.
- `node tools/content-policy.mjs research/frontier-32-batch-5.pages.json` passed: 32 scoped items, 0 errors and 0 warnings.

Blocker: the sole remaining defect is in assigned B prose, outside this
reader's edit authorization.

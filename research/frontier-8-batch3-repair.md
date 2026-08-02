# Frontier 8 — Batch 3 repair record

**Repair author:** Beta, after the common frozen-context DeepSeek V4 Pro and
Terra judge pass.  This record concerns only the Batch 3 pair set:
Approximation and compactness in $C(K)$, and Mixed partials, Taylor, and
extrema.  No independent judge, audit, renderer, or publication gate was run
after these edits.

## Confirmed-fatal repair scope

| Item | Repair made |
| --- | --- |
| `def-ck-and-multi-index-notation-in-several-variables` | Defined $h\in\mathbb R^m$, $D^0f$, factorial/sum provenance, and $C^k$ by the existence and continuity of **every ordered** iterated partial. The canonical multi-index derivative is now only notation, so it does not assume mixed-partial symmetry. |
| `lem-rectangle-second-difference-mean-value-formula` | Replaced the ambiguous “relevant mixed derivative” condition by open-neighbourhood existence of $f_x,f_{xy}$; stated a nondegenerate subrectangle; ordered MVT endpoints explicitly; and applied MVT first in $x$, then to $f_x$ in $y$. |
| `thm-peano-mixed-partial-theorem` | Cited the strengthened rectangle lemma precisely and retained the correct $k\to0$, then $h\to0$ iterated-limit route to $f_{yx}$. |
| `thm-clairaut-schwarz-mixed-partials` | Removed the unused Young dependency and made the Peano and $C^2$ facts exact: ordered second partials now exist and are continuous before Peano is applied. |
| `thm-symmetry-of-higher-mixed-partials` | Stated the result for $f\in C^k$, $k\ge2$, and justified each adjacent swap by showing that the partially differentiated field is itself $C^2$ from the ordered-derivative definition. |
| `lem-derivatives-along-a-line-have-the-multinomial-expansion` | Required an open domain and open line interval; changed the result to all orders $0\le r\le k$; supplied the needed total-differentiability/chain-rule support; and derived the coefficient collection identity directly rather than attributing an unstated recurrence to the multinomial theorem. |
| `thm-multivariable-taylor-formula-with-lagrange-remainder` | Made the three cited facts faithful, including the full one-variable Lagrange formula and the interval on which the line derivatives are available. |
| `cor-multivariable-taylor-formula-with-peano-remainder` | Replaced the invalid varying-line one-variable Peano argument. The new proof applies the preceding Lagrange formula at degree $k-1$ and uses continuity of the finite collection of order-$k$ partials to obtain the uniform $o(\|h\|^k)$ bound. |
| `thm-multivariable-second-derivative-test` | Restricted the inconclusive case to semidefinite **but not definite** Hessians and gave the zero-Hessian examples $x^4,-x^4,x^3$ to establish that no general classification is possible. |
| `cor-two-variable-hessian-determinant-test` | Replaced the false vectors in the $\Delta<0$ calculation by $Q(1,0)=A$ and $Q(-B/A,1)=\Delta/A$, and made the $\Delta=0$ semidefinite-but-not-definite case explicit. |
| `thm-real-stone-weierstrass-for-compact-metric-spaces` | Required $K$ to be nonempty, matching the proof’s finite max/min construction, and repaired the malformed inline delimiter in step 4.1. |
| `def-bernstein-polynomial` | Rewrote the vulnerable inline ordinal wording in the definition heading to remove the frozen unmatched-delimiter site. |

## Contract synchronization

The owning Batch 3 proof contract was updated for the corrected rectangle,
$C^k$, higher-symmetry, line-derivative, Peano-remainder, and
second-derivative citations. The merged cross-batch contract is deliberately
left to the orchestrator’s normal regeneration step, so it cannot silently be
treated as a post-repair verification artifact.

## Residual handoff concerns

- The Batch 3 contract still contains older generic derivation/boundary records
  outside the materially changed citation entries. Its broad metadata cleanup
  is not a substitute for a new independent proof review.
- Source-URL repairs noted in Alpha’s frozen audit for Bernstein and
  nowhere-differentiability references were not part of a judge-confirmed fatal
  proof cluster and were not altered here.
- The next Alpha/judge cycle must inspect all downstream users of the repaired
  $C^k$/Taylor chain, especially the Hessian expansion, rather than infer their
  validity from this repair record.

## Post-repair contract synchronization

After the strict contract gate identified stale propagation records, the owning
Batch 3 contract was synchronized—without any new mathematical review—for the
Bernstein definition wording; line-derivative facts and induction inputs;
Lagrange and Peano Taylor facts and step maps; the second-order Taylor source
quote; the two-variable Hessian final-step map; and the three downstream
second-derivative-test citations. The monkey-saddle and zero-Hessian item facts
now also say “semidefinite but not definite,” matching the repaired source
theorem.

## Current-adjudication repair pass — frozen-judge clusters only

This addendum applies only the eight confirmed-fatal clusters in
research/frontier-8-alpha-current-adjudication.md. It does not constitute a
new audit, judge pass, or Alpha review.

| Item | Exact repair |
| --- | --- |
| def-ck-and-multi-index-notation-in-several-variables | Separated natural-number operations in $|\alpha|$ and $\alpha!$ from the real finite product $h^\alpha$; added the real finite-product and natural-exponent dependencies. |
| def-multivariable-taylor-polynomial | Changed “degree $k$” to “degree at most $k$”, explicitly embedded $\alpha!$ into $\mathbb R$ as $\iota(\alpha!)$, and identified the displayed sum as a real finite sum. |
| thm-symmetry-of-higher-mixed-partials | Rebuilt the adjacent-swap step: form the inner field before the inverted pair, establish that field is $C^2$, swap only that pair, then apply the remaining outer operations to the resulting equality. |
| thm-young-mixed-partial-theorem | Removed the false directional-derivative citation; derived coordinate coefficients from the total-differentiability expansion, and made both rectangular-difference $Bh^2+o(h^2)$ and $Ch^2+o(h^2)$ estimates explicit. |
| def-bernstein-polynomial | Replaced the false exact-degree wording with “index $n$” and recorded that a nonzero Bernstein polynomial has degree at most $n$, while the zero polynomial can occur. |
| def-tent-function-and-takagi-series | Eliminated the undefined ceiling function by defining the tent function through $r(t)=t-\lfloor t\rfloor$ and $\min\{r(t),1-r(t)\}$. |
| cex-noncompact-domain-breaks-arzela-ascoli | Stated the ordinary all-metric-space $\varepsilon$–$\delta$ condition directly and cited the uniform-Cauchy theorem, rather than a compact-domain equicontinuity definition and a bare convergence definition. |
| cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence | Restricted the claim to nonempty compact metric $K$ and made Countable Choice plus Dependent Choice explicit, matching the two cited compactness theorems. |

### Proof-contract synchronization

research/frontier-8-batch-3.proof-contracts.json now carries the corrected
Young L2 source and remainder derivations, the higher-symmetry adjacent-swap
derivation, the counterexample’s uniform-Cauchy source, the changed Bernstein
definition quote, and the corrected real-versus-natural multi-index quote.
Only the owning Batch 3 contract was touched; no aggregate-contract
regeneration was performed.

### Scoped mechanical checks

- Parsed the Batch 3 proof-contract JSON successfully.
- Checked the eight repaired item files for their repaired scope/type/degree/
  ceiling/compactness anchors and checked the contract entries for the changed
  citations.
- No judge, audit, rejudge, Alpha pass, plan/page update, commit, push, or
  publication action was run after the frozen-context repair.

## Strict merged-contract corrective pass

The mandatory merged strict gate reported ten Batch 3 contract errors. The
Lipschitz-closure contract now records the actual uniform-convergence
definition linked by L1, rather than an unlinked uniform-Cauchy theorem. The
noncompact-domain counterexample now quotes the actual uniform-Cauchy theorem
statement. Young’s L2 quote now matches the total-derivative definition, and
its final derivation records step 1.1 as an input.

Young’s mathematics was not changed. Its pre-existing L2 and L3 tags were
moved onto the numbered proof lines so the durable contract parser can see
them; the repeated trailing tags were removed. No other Batch 3 content was
touched in this pass.

Merged all five Frontier 8 batch contracts to
/tmp/frontier-8-proof-contracts-strict-gate.json and ran the strict gate:
0 errors, 0 warnings, 190/190 scoped items checked. No judge, audit, rejudge,
Alpha pass, commit, push, publication, plan, or page action was run.

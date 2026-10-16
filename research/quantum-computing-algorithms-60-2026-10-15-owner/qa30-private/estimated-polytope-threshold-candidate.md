# Private proof candidate — estimated SDP polytope and threshold soundness

Not integrated: native batch 54 remains an active writer. No canonical
carrier or shared operational contract is changed. This candidate supplies
an established finite argument, not an open-problem classification.

Proposed supplier ID: `lem-qa-30-estimated-polytope-threshold-soundness`.
Proposed logical suppliers: def-qa-30-sdp-primal-dual-pair,
lem-qa-30-positive-product-trace-nonnegative,
lem-qa-30-mmw-dual-output-feasibility. The complete geometric quantum
oracle is a separate prerequisite, not asserted by this proof.

## Statement

Let the dual minimum be attained by $y^*\ge0$, with
$\|y^*\|_1\le r$, $r\ge1$, and write $v_D=b\cdot y^*$.
For a density matrix $\rho$, set
$a_j=\operatorname{tr}(A_j\rho)$ and $c=\operatorname{tr}(C\rho)$.
For a threshold $\alpha$, a tolerance $\theta\ge0$, and estimates satisfying
$|\widetilde a_j-a_j|,|\widetilde c-c|\le\theta$, put $w=r+1$ and
$$P_q(\rho)=\{y\ge0:b\cdot y\le\alpha,\ a\cdot y-c\ge-q\},$$
$$\widetilde P=\{y\ge0:b\cdot y\le\alpha,\ \|y\|_1\le r,\ \widetilde a\cdot y\ge\widetilde c-w\theta\}.$$
Then
$$P_0(\rho)\cap\{\|y\|_1\le r\}\subseteq\widetilde P\subseteq P_{2w\theta}(\rho)\cap\{\|y\|_1\le r\}.$$
If $X=R\rho$, the rightmost trace slack is $2Rw\theta\le4Rr\theta$.
If $\widetilde P$ is empty, then $\alpha<v_D$.

Suppose an implemented round oracle, on an explicitly specified good event,
returns a vector in $\widetilde P$ or returns `EMPTY` only when
$\widetilde P=\varnothing$. With the MMW losses and exact Gibbs update of
lem-qa-30-mmw-dual-output-feasibility, every all-good threshold execution
has these outcomes: a round's `EMPTY` certifies $\alpha<v_D$; otherwise
all rounds produce a feasible dual vector of objective at most
$\alpha+\gamma R$, provided
$\gamma\ge w(2\theta+\eta+\ln(n)/(\eta T))$, $0<\eta\le1$.
No dense primal-output assertion is inferred from bounded-polytope emptiness.

For adaptively chosen thresholds, losses, states and repeated subroutines,
if every invoked classical-output block has its asserted conditional good
probability and the predictable per-call bad-probability budgets sum to at
most $\delta$ on every execution, all of these implications hold
simultaneously with probability at least $1-\delta$. Independence is not
needed.

## Proof

**Given:** The hypotheses and exact/estimated polytopes just defined.

1.1 For every nonnegative $y$ with $\|y\|_1\le r$, the estimate discrepancy is bounded by $|(\widetilde a-a)\cdot y-(\widetilde c-c)|\le\theta\|y\|_1+\theta\le w\theta$. Hence an exact nonnegative trace slack implies $\widetilde a\cdot y-\widetilde c\ge-w\theta$, proving the first inclusion. Conversely an estimated slack at least $-w\theta$ implies $a\cdot y-c\ge-2w\theta$, proving the second. Multiplication by $R$ gives the statement for $X$, and $w=r+1\le2r$ gives the source's $4Rr\theta$ bound. All objective, sign and norm constraints are retained exactly. [given, algebra]

1.2 The dual slack $D^*=\sum_jy_j^*A_j-C$ is positive semidefinite. The positive-product trace lemma gives $a\cdot y^*-c=\operatorname{tr}(D^*\rho)\ge0$. Thus if $\alpha\ge v_D$, then $y^*\in P_0(\rho)$ and $\|y^*\|_1\le r$; step 1.1 implies $y^*\in\widetilde P$. Taking the contrapositive proves $\widetilde P=\varnothing\Rightarrow\alpha<v_D$, including the equality endpoint. This argument works for every density matrix and therefore for a state selected adaptively from earlier rounds. It uses the bounded attained optimal dual itself; it does not assert that every unbounded-polytope feasible vector has bounded norm. [given, step 1.1, algebra, contradiction]

2.1 On the good event a returned multiplier has all the finite hypotheses of lem-qa-30-mmw-dual-output-feasibility: nonnegative coordinates, norm at most $r$, objective at most $\alpha$, and the shifted estimated-trace inequality. That lemma therefore gives a feasible averaged dual vector with objective at most $\alpha+\gamma R$ if all $T$ rounds return multipliers. If an oracle instead returns its sound `EMPTY` outcome, step 1.2 gives $\alpha<v_D$. These are precisely the threshold alternatives needed for binary search on the dual optimum. Statistical failures outside the good event may produce either outcome incorrectly; their probability is budgeted rather than declared impossible. [given, step 1.2, algebra]

3.1 Index all actually invoked blocks in execution order by $i=1,2,\ldots$ and let $\mathcal H_{i-1}$ record their prior classical history and the event that block $i$ is reached. Its input may depend on that history. Suppose its bad-output event $B_i$ satisfies $\Pr(B_i\mid\mathcal H_{i-1},\ i\text{ reached})\le\delta_i(\mathcal H_{i-1})$ for every admissible history. Then $\Pr(i\text{ reached and }B_i)\le\mathbb E[\mathbf1_{i\text{ reached}}\delta_i]$ by conditioning. A union bound and nonnegative sums give $\Pr(\bigcup_i\{i\text{ reached and }B_i\})\le\mathbb E\sum_i\mathbf1_{i\text{ reached}}\delta_i\le\delta$. For a known cap $B$ one may allocate $\delta_i=\delta/B$; without a known cap use $\delta_i=\delta2^{-i}$. This covers adaptive threshold/refinement paths without multiplying independent probabilities or union-bounding unmeasured quantum branches as if they were classical samples. Deterministic operator/numerical approximation errors must already have been included in each block's guarantee. [given, algebra]

3.2 On the complement of that union, every invoked oracle has its stated complete/sound contract and steps 1.1–2.1 apply to every reached threshold. In particular a cap/search miss is permitted to generate the probabilistic `HIGHER` outcome only after proving that the complete round oracle's bad-output probability is included in the conditional budget. A low-level timeout or unresolved numerical comparison for which no such guarantee has been established remains a separate failure, not an emptiness certificate. This distinguishes a legitimate bounded-error threshold algorithm from either an unconditional emptiness assertion or an always-aborting threshold search. [step 2.1, step 3.1] ∎

## Exact remaining prerequisites

- Prove the two-sparse geometric oracle's completeness, including its boundary
  cases, and generalized minimum finding on coherent approximate score labels.
  For this use, an effective estimate vector may be an existential selection
  consistent with the selected labels/minimizers; its existence and uniform
  estimate bounds require proof. They do not follow from the standalone
  normalized-purification expectation theorem.
- Prove the flagged TraceMean/RelProb path's probability, ratio perturbation
  and query costs; supply ShiftMin and SmoothFourier's concrete cutoffs.
- Close the exact MMW update versus implemented approximate Gibbs access
  interface, and allocate all state/trace/rounding margins.
- Prove local strict-dual Slater/separation if the final OPT is the primal
  optimum. Weak duality alone does not identify it with $v_D$ or establish
  the initial optimum interval. A1=I permits a strictly feasible dual;
  the corresponding established strong-duality proof is still needed.
- Prove the finite binary-search certificate invariant and the source query
  exponent, sparse-sum/QRAM/reference/output accounting. Shared OP8's failure
  branch cannot be adjudicated in isolation from the round-oracle guarantee.

No tests, gates, hashes, readiness records, stamps or commits performed.

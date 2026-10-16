---
id: lem-qa-30-estimated-polytope-threshold-soundness
kind: lemma
title: Estimated SDP polytopes and sound bounded-dual threshold exclusion
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
page: quantum-optimization-sdp-and-variational-algorithms
deps:
  - def-qa-30-sdp-primal-dual-pair
  - lem-qa-30-positive-product-trace-nonnegative
  - lem-qa-30-mmw-dual-output-feasibility
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: van Apeldoorn et al., Quantum SDP-solvers, Lemma 6 and Meta-Algorithm 1
      url: https://arxiv.org/pdf/1705.01843v4
---

## Statement

Let $n,m\ge1$ and let $C,A_1,\ldots,A_m\in\mathbb C^{n\times n}$ be Hermitian with $\|A_j\|,\|C\|\le1$, $A_1=I_n$, and $b_1=R>0$, as in the primal-dual pair definition. Suppose the dual minimum is attained by $y^*\ge0$ with $\|y^*\|_1\le r$, $r\ge1$, and write $v_D=b\cdot y^*$. Fix a threshold $\alpha$ and tolerance $\theta\ge0$, and put $w=r+1$. For any density matrix $\rho$, set $a_j=\operatorname{tr}(A_j\rho)$ and $c=\operatorname{tr}(C\rho)$. Given estimates satisfying $|\widetilde a_j-a_j|,|\widetilde c-c|\le\theta$, define
$$P_q(\rho)=\{y\ge0:b\cdot y\le\alpha,\ a\cdot y-c\ge-q\},$$
$$\widetilde P(\rho)=\{y\ge0:b\cdot y\le\alpha,\ \|y\|_1\le r,\ \widetilde a\cdot y\ge\widetilde c-w\theta\}.$$
Then
$$P_0(\rho)\cap\{\|y\|_1\le r\}\subseteq\widetilde P(\rho)\subseteq P_{2w\theta}(\rho)\cap\{\|y\|_1\le r\}.$$
If $X=R\rho$, the rightmost trace slack is $2Rw\theta\le4Rr\theta$.
If $\widetilde P(\rho)$ is empty, then $\alpha<v_D$.

For the MMW conclusion, fix $T\ge1$ and $0<\eta\le1$. At each round $t=1,\ldots,T$, let $\rho_t$ be the exact MMW density matrix generated from the preceding losses with parameter $\eta$, and set $a_{t,j}=\operatorname{tr}(A_j\rho_t)$, $c_t=\operatorname{tr}(C\rho_t)$. Suppose the estimates obey $|\widetilde a_{t,j}-a_{t,j}|,|\widetilde c_t-c_t|\le\theta$. Define $\widetilde P_t=\widetilde P(\rho_t)$ using these estimates. If every round returns $y_t\in\widetilde P_t$, use losses $M_t=(\sum_jy_{t,j}A_j-C)/w$ and the exact Gibbs update, and take $\gamma\ge w(2\theta+\eta+\ln(n)/(\eta T))$, then $\bar y=\gamma e_1+T^{-1}\sum_ty_t$ is dual feasible with objective at most $\alpha+\gamma R$. More generally, if a round oracle returns a vector in $\widetilde P_t$ or returns `EMPTY` only when $\widetilde P_t=\varnothing$, every all-good threshold execution either has an `EMPTY` round certifying $\alpha<v_D$, or has all rounds produce that feasible dual vector. No dense primal-output assertion is inferred from bounded-polytope emptiness.

For adaptively chosen thresholds, losses, states and repeated subroutines,
if every invoked classical-output block has its asserted conditional good
probability and the predictable per-call bad-probability budgets sum to at
most $\delta$ on every execution, all of these implications hold
simultaneously with probability at least $1-\delta$. Independence is not
needed.

## Facts & Assumptions

**Given:** The normalized finite Hermitian SDP, bounded attained optimal dual, the exact/estimated polytopes for each density matrix, exact MMW updates, and each invoked block's conditional error guarantee.

[F1] [[def-qa-30-sdp-primal-dual-pair]] fixes nonnegative dual multipliers and positive semidefinite dual slack.

[F2] [[lem-qa-30-positive-product-trace-nonnegative]] gives nonnegative trace for a product of positive semidefinite matrices.

[F3] [[lem-qa-30-mmw-dual-output-feasibility]] proves the no-failure MMW certificate and the required identity shift.

## Proof

**Given:** The hypotheses and exact/estimated polytopes just defined.

1.1 For every nonnegative $y$ with $\|y\|_1\le r$, the estimate discrepancy is bounded by $|(\widetilde a-a)\cdot y-(\widetilde c-c)|\le\theta\|y\|_1+\theta\le w\theta$. Hence an exact nonnegative trace slack implies $\widetilde a\cdot y-\widetilde c\ge-w\theta$, proving the first inclusion. Conversely an estimated slack at least $-w\theta$ implies $a\cdot y-c\ge-2w\theta$, proving the second. Multiplication by $R$ gives the statement for $X$, and $w=r+1\le2r$ gives $2Rw\theta\le4Rr\theta$. All objective, sign and norm constraints are retained exactly. [given, algebra]

1.2 Index all actually invoked blocks in execution order by $i=1,2,\ldots$ and let $\mathcal H_{i-1}$ record their prior classical history and the event that block $i$ is reached. Its input may depend on that history. Suppose its bad-output event $B_i$ satisfies $\Pr(B_i\mid\mathcal H_{i-1},\ i\text{ reached})\le\delta_i(\mathcal H_{i-1})$ for every admissible history. Then $\Pr(i\text{ reached and }B_i)\le\mathbb E[\mathbf1_{i\text{ reached}}\delta_i]$ by conditioning. A union bound and nonnegative sums give $\Pr(\bigcup_i\{i\text{ reached and }B_i\})\le\mathbb E\sum_i\mathbf1_{i\text{ reached}}\delta_i\le\delta$. For a known cap $B$ one may allocate $\delta_i=\delta/B$; without a known cap use $\delta_i=\delta2^{-i}$. This covers adaptive threshold/refinement paths without multiplying independent probabilities or union-bounding unmeasured quantum branches as if they were classical samples. Deterministic operator/numerical approximation errors must already have been included in each block's guarantee. [given, algebra]

2.1 The dual slack $D^*=\sum_jy_j^*A_j-C$ is positive semidefinite. The positive-product trace lemma [F2] gives $a\cdot y^*-c=\operatorname{tr}(D^*\rho)\ge0$. Thus if $\alpha\ge v_D$, then $y^*\in P_0(\rho)$ and $\|y^*\|_1\le r$; step 1.1 implies $y^*\in\widetilde P$. Taking the contrapositive proves $\widetilde P=\varnothing\Rightarrow\alpha<v_D$, including the equality endpoint. This argument works for every density matrix and therefore for a state selected adaptively from earlier rounds. It uses the bounded attained optimal dual itself; it does not assert that every unbounded-polytope feasible vector has bounded norm. [given, F1, F2, step 1.1, algebra, contradiction]

3.1 On the good event a returned multiplier has all the finite hypotheses of [F3]: nonnegative coordinates, norm at most $r$, objective at most $\alpha$, the shifted estimated-trace inequality, and the exact MMW states and losses specified in the Statement. That lemma therefore gives a feasible averaged dual vector with objective at most $\alpha+\gamma R$ if all $T$ rounds return multipliers. If an oracle instead returns its sound `EMPTY` outcome, step 2.1 gives $\alpha<v_D$. These are precisely the threshold alternatives needed for binary search on the dual optimum. Statistical failures outside the good event may produce either outcome incorrectly; their probability is budgeted rather than declared impossible. [given, F3, step 2.1, algebra]

4.1 On the complement of that union, every invoked oracle has its stated complete/sound contract and step 1.1 and step 2.1 and step 3.1 apply to every reached threshold. In particular a cap/search miss is permitted to generate the probabilistic `HIGHER` outcome only after proving that the complete round oracle's bad-output probability is included in the conditional budget. A low-level timeout or unresolved numerical comparison for which no such guarantee has been established remains a separate failure, not an emptiness certificate. This distinguishes a legitimate bounded-error threshold algorithm from either an unconditional emptiness assertion or an always-aborting threshold search. [step 3.1, step 1.2] ∎


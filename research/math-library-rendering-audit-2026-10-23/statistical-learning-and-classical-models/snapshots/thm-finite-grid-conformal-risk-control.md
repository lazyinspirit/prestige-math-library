---
id: thm-finite-grid-conformal-risk-control
kind: theorem
title: "Finite-sample expected-risk control on a finite grid"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-nested-decision-family-and-bounded-risk
  - alg-finite-grid-conformal-risk-control
  - def-regular-conditional-distribution
  - def-conditional-expectation-given-a-sigma-algebra
  - def-law-or-distribution-of-a-random-element
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Anastasios N. Angelopoulos, Stephen Bates, Adam Fisch, Lihua Lei, and Tal Schuster, Conformal Risk Control, arXiv:2208.02814v4"
      url: "https://arxiv.org/pdf/2208.02814v4"
      locator: "§2.1 Theorem 1 and proof; the authored proof is the finite-grid version."
    - title: "Anastasios N. Angelopoulos, Rina Foygel Barber, and Stephen Bates, Theoretical Foundations of Conformal Prediction, prepublication book manuscript"
      url: "https://arxiv.org/pdf/2411.11824"
      locator: "Chapter 2 §§2.1–2.2 for finite exchangeability."
---

## Statement

For every admissible input to the finite-grid risk-control rule, the rule returns a unique output after at most $M$ threshold tests; no loss monotonicity or endpoint-safety assumption is required for this assertion.

Let $n,M\ge1$, $B>0$, and $\alpha\in[0,B)$. On a probability space $(\Omega,\mathcal F,\mathbb P)$, let $W_1,\ldots,W_{n+1}$ be exchangeable random elements of $[0,B]^M$ with its Borel sigma-algebra, and write $L_i(\lambda_j)=(W_i)_j$ on a deterministic grid $\Lambda=\{\lambda_1<\cdots<\lambda_M\}$. Assume that, almost surely, $L_i(\lambda_1)\ge\cdots\ge L_i(\lambda_M)$ for every $i$ and $L_i(\lambda_M)\le\alpha$ for every $i$. Apply the finite-grid risk-control rule to the first $n$ rows and let $\hat\lambda$ be its selected parameter. Then
$$\mathbb E[L_{n+1}(\hat\lambda)]\le\alpha,$$
where the expectation is over all $n+1$ rows.

For a sub-sigma-algebra $\mathcal T\subseteq\mathcal F$, suppose the full matrix $W=(W_1,\ldots,W_{n+1})$, viewed in $([0,B]^M)^{n+1}$ with its product Borel sigma-algebra, has an actual regular conditional distribution $Q_\omega$ given $\mathcal T$. Suppose that, for almost every training outcome $\omega$, the section $Q_\omega$ is row-exchangeable and the same bounds, monotonicity, and endpoint hypotheses hold $Q_\omega$-almost surely. Then the same argument gives $\mathbb E[L_{n+1}(\hat\lambda)\mid\mathcal T]\le\alpha$ almost surely.

## Statement references

[[def-finite-nested-decision-family-and-bounded-risk]]: finite grid, row exchangeability, bounded losses, loss monotonicity, endpoint safety, and marginal expected test risk.

[[alg-finite-grid-conformal-risk-control]]: the first-passing calibration rule and maximum-grid fallback.

[[def-regular-conditional-distribution]]: a conditional probability kernel satisfying the conditional-event identity.

[[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is characterized by its integrals over all conditioning events.

[Angelopoulos et al., Conformal Risk Control, §2.1](https://arxiv.org/pdf/2208.02814v4)

[Angelopoulos, Barber, and Bates, Theoretical Foundations of Conformal Prediction, Chapter 2 §§2.1–2.2](https://arxiv.org/pdf/2411.11824)

## Facts & Assumptions

**Given:** The finite grid and bounded loss matrix in the statement, row exchangeability, coordinatewise nonincrease, endpoint safety, and the algorithm's selected parameter. For the conditional assertion, also the stated regular conditional law.

[F1] Rows are random elements of $[0,B]^M$, their joint law is invariant under all row permutations, every loss lies in $[0,B]$, each row is nonincreasing along the grid, and the maximum-grid loss is at most $\alpha$ almost surely. [[def-finite-nested-decision-family-and-bounded-risk]]

[F2] On calibration losses, the rule tests $\bigl(\sum_{i=1}^nL_i(\lambda_j)+B\bigr)/(n+1)$ in increasing grid order, returns the first index whose value is at most $\alpha$, and otherwise returns $M$. [[alg-finite-grid-conformal-risk-control]]

[F3] A regular conditional distribution is a probability kernel whose section integrals give conditional probabilities on every event in the conditioning sigma-algebra. [[def-regular-conditional-distribution]]

[F4] A conditional-expectation version is a measurable integrable function whose integrals over all events in the conditioning sigma-algebra agree with those of the original integrable variable. [[def-conditional-expectation-given-a-sigma-algebra]]

[F5] For nonnegative measurable functions increasing pointwise to a limit, their integrals increase to the integral of the limit. [[thm-monotone-convergence-for-the-integral]]

[F6] Expectation is monotone and linear on integrable real random variables. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F7] A random element's law is its pushforward probability measure. [[def-law-or-distribution-of-a-random-element]]

[F8] The expectation of a bounded nonnegative random variable is its Lebesgue integral against the probability measure. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]

## Proof

1.1 For any admissible input to the rule, every threshold is a finite real number since its numerator is a finite sum and $n+1>0$. The scan tests each index at most once, returning at the first passing index; if none passes, the specified fallback returns the supplied rule at index $M$. Since $M\ge1$, both branches give a unique output after at most $M$ tests, without any monotonicity or endpoint-safety assumption. [F2, algebra]

1.2 Write $C_j=(\sum_{i=1}^nL_i(\lambda_j)+B)/(n+1)$ and $S_j=(\sum_{i=1}^{n+1}L_i(\lambda_j))/(n+1)$. These are Borel functions of the finite row matrix. Each calibration pass event and the fallback event is a finite Boolean combination of Borel threshold sets, so the selected index is Borel-measurable. Define $j_*=\min\{j:S_j\le\alpha\}$; this set is nonempty since $S_M\le\alpha$ by endpoint safety. Each event $\{j_*=j\}=\{S_j\le\alpha\}\cap\bigcap_{k<j}\{S_k>\alpha\}$ is Borel, so $j_*$ and $g(W)=L_{n+1}(\hat\lambda(W))$ are Borel-measurable as well. [given, F1, F2, construct]

2.1 If the calibration scan passes first at $q$, then $S_q=C_q+(L_{n+1}(\lambda_q)-B)/(n+1)\le C_q\le\alpha$, so $j_*\le q=\hat j$. If the scan has no pass, then $\hat j=M$ and $j_*\le M$. In either case $j_*\le\hat j$, and row monotonicity gives $L_{n+1}(\lambda_{\hat j})\le L_{n+1}(\lambda_{j_*})$ almost surely. [F1, F2, step 1.2, algebra]

2.2 Set $V_i=L_i(\lambda_{j_*})$. The full-row averages $S_j$ are invariant under row permutations, so $j_*$ is a symmetric measurable function of all rows. Consequently the vector $(V_1,\ldots,V_{n+1})$ is exchangeable. Its entries have the same law by [F7]; since they are bounded, [F8] gives finite expectations and [F6] gives their equality. By [F6], the expectation of their average is $\mathbb E[S_{j_*}]$, which is at most $\alpha$ because $S_{j_*}\le\alpha$ almost surely. Thus $\mathbb E[L_{n+1}(\lambda_{j_*})]\le\alpha$. [F1, F6, F7, F8, step 1.2, construct, algebra]

3.1 By step 2.1 and monotonicity of expectation in [F6], $\mathbb E[L_{n+1}(\hat\lambda)]\le\mathbb E[L_{n+1}(\lambda_{j_*})]$. Step 2.2 bounds the right side by $\alpha$, proving the marginal guarantee. [F6, step 2.1, step 2.2, algebra]

4.1 For almost every training outcome $\omega$, apply the argument established in steps 1.2 and 2.1–2.2 under the conditional row law $Q_\omega$ to obtain $\int g\,dQ_\omega\le\alpha$, where $g(W)=L_{n+1}(\hat\lambda(W))$. The function is Borel-measurable by step 1.2 and bounded by $B$ by [F1]. Its dyadic lower approximations $g_m=2^{-m}\lfloor2^m g\rfloor$ are finite-valued Borel simple functions increasing to $g$. For each conditioning event $H\in\mathcal T$, decompose $g_m$ into its finitely many level-set indicators. The event identities in [F3] and linearity in [F6] then give $\int_H\int g_m\,dQ_\omega\,d\mathbb P(\omega)=\int_H g_m(W)\,d\mathbb P$. Applying [F5] to both sides gives the same identity for $g$. Each kernel integral of $g_m$ is $\mathcal T$-measurable by [F3], so their pointwise limit $\int g\,dQ_\omega$ is measurable. By [F4], this bounded function is a version of $\mathbb E[g\mid\mathcal T]$. The sectionwise bound therefore gives the claimed conditional inequality almost surely. [F1, F3, F4, F5, F6, step 1.2, step 2.1, step 2.2, step 3.1] ∎

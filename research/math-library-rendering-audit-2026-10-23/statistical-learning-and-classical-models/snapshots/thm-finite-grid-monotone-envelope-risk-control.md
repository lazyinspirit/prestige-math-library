---
id: thm-finite-grid-monotone-envelope-risk-control
kind: theorem
title: "Finite-grid risk control by monotone envelopes"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-nested-decision-family-and-bounded-risk
  - alg-finite-grid-conformal-risk-control
  - thm-finite-grid-conformal-risk-control
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-regular-conditional-distribution
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
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
      locator: "§2.4, Corollary 1 and its finite-sample motivation; this item proves the finite-grid version directly."
---

## Statement

Let $n,M\ge1$, $B>0$, and $\alpha\in[0,B)$. On a probability space $(\Omega,\mathcal F,\mathbb P)$, let $W_1,\ldots,W_{n+1}$ be exchangeable random elements of $[0,B]^M$ with its Borel sigma-algebra, and write their coordinates as $L_i(\lambda_j)$ on a deterministic grid $\Lambda=\{\lambda_1<\cdots<\lambda_M\}$; do not assume the original rows are nonincreasing. Assume $L_i(\lambda_M)\le\alpha$ almost surely for every $i$. Define the finite tail-maximum losses
$$\widetilde L_i(\lambda_j)=\max_{j\le k\le M}L_i(\lambda_k).$$
Apply the finite-grid risk-control rule to the transformed calibration rows and let $\widetilde\lambda$ be its selected parameter. Then
$$\mathbb E[L_{n+1}(\widetilde\lambda)]\le\alpha.$$
The expectation is over all calibration and test rows. If the rows have an actual regular conditional exchangeable law given a training sigma-algebra and the same bounds and endpoint condition hold almost surely in that law, the corresponding conditional expected-risk bound also holds almost surely.

## Statement references

[[def-finite-nested-decision-family-and-bounded-risk]]: exchangeable loss rows, bounds, grid, endpoint safety, and expected test risk.

[[thm-finite-grid-conformal-risk-control]]: finite-grid risk control for exchangeable coordinatewise nonincreasing rows.

[[def-regular-conditional-distribution]]: the actual conditional probability kernel used for the conditional clause.

[[def-conditional-expectation-given-a-sigma-algebra]]: conditional expected risk is identified by its integrals on conditioning events.

[Angelopoulos et al., Conformal Risk Control, §2.4, Corollary 1](https://arxiv.org/pdf/2208.02814v4)

## Facts & Assumptions

**Given:** The finite grid, exchangeable bounded loss rows, the endpoint condition, and the algorithm applied to their finite tail maxima. For the conditional clause, also an actual regular conditional distribution of the full row matrix given the stated sigma-algebra, with the stated sectionwise assumptions.

[F1] The original rows are exchangeable and their coordinates are measurable and lie in $[0,B]$; the endpoint losses satisfy $L_i(\lambda_M)\le\alpha$ almost surely. [[def-finite-nested-decision-family-and-bounded-risk]]

[F2] The maximum-grid risk-control theorem applies to exchangeable bounded loss rows that are nonincreasing along the finite grid and endpoint-safe. [[thm-finite-grid-conformal-risk-control]]

[F3] Expectation is monotone: if integrable real random variables $X\le Y$ almost surely, then $\mathbb E[X]\le\mathbb E[Y]$. [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

[F4] A regular conditional distribution is a probability kernel whose section evaluations satisfy the conditional-event identity for every conditioning event and measurable target set. [[def-regular-conditional-distribution]]

[F5] A conditional-expectation version is measurable, integrable, and has the same integrals as the original variable on every event in the conditioning sigma-algebra. [[def-conditional-expectation-given-a-sigma-algebra]]

[F6] For nonnegative measurable functions increasing pointwise to a limit, their integrals increase to the integral of the limit. [[thm-monotone-convergence-for-the-integral]]

## Proof

1.1 For each $i$, $\widetilde L_i(\lambda_j)$ is a maximum of finitely many measurable coordinates, so it is measurable and lies in $[0,B]$. The set of indices in the maximum shrinks as $j$ increases, hence $\widetilde L_i(\lambda_{j+1})\le\widetilde L_i(\lambda_j)$. At the endpoint, $\widetilde L_i(\lambda_M)=L_i(\lambda_M)\le\alpha$. The same deterministic row map is applied to every $W_i$, and it commutes with row permutations; therefore the transformed rows remain exchangeable. Each calibration threshold is a finite sum of transformed coordinates, and each first-pass or fallback event is a finite Boolean combination of Borel threshold sets. Thus the selected parameter $\widetilde\lambda(W)$ and the losses $g(W)=L_{n+1}(\widetilde\lambda(W))$ and $h(W)=\widetilde L_{n+1}(\widetilde\lambda(W))$ are Borel functions of the full matrix. [given, F1, construct, algebra]

1.2 By [F2], applying the calibration rule to the transformed rows gives $\mathbb E[\widetilde L_{n+1}(\widetilde\lambda)]\le\alpha$. [F1, F2, given]

2.1 For every grid index $j$, the maximum defining $\widetilde L_{n+1}(\lambda_j)$ includes $L_{n+1}(\lambda_j)$, so $L_{n+1}(\widetilde\lambda)\le\widetilde L_{n+1}(\widetilde\lambda)$ almost surely. Both variables are bounded and integrable; [F3] and step 1.2 give $\mathbb E[L_{n+1}(\widetilde\lambda)]\le\alpha$. [F3, step 1.2, algebra]

2.2 For the conditional clause, let $Q_\omega$ be the stated regular conditional distribution of the full matrix $W=(W_1,\ldots,W_{n+1})$ given $\mathcal T$. For almost every $\omega$, its row law is exchangeable, its coordinates lie in $[0,B]$, and its endpoint losses are at most $\alpha$ almost surely. Applying the same Borel tail-maximum map to each row preserves exchangeability under $Q_\omega$, gives nonincreasing bounded rows, and leaves the endpoint unchanged. The marginal assertion of [F2], applied under each such probability measure $Q_\omega$ to the transformed rows, gives $\int h\,dQ_\omega\le\alpha$. Since $0\le g\le h\le B$ pointwise, [F3] under $Q_\omega$ yields $\int g\,dQ_\omega\le\alpha$. [given, F2, F3, step 1.1, construct]

3.1 For each $m\ge1$, put $g_m=2^{-m}\lfloor2^m g\rfloor$. These are finite-valued Borel simple functions increasing pointwise to $g$. Write $g_m=\sum_r c_{m,r}\mathbf 1_{A_{m,r}}$ for Borel level sets $A_{m,r}$ in the full matrix space. By the kernel identity [F4], for every $H\in\mathcal T$, $$\int_H\int g_m\,dQ_\omega\,d\mathbb P(\omega)=\int_H g_m(W)\,d\mathbb P.$$ The kernel integrals of $g_m$ are $\mathcal T$-measurable finite sums of kernel evaluations. By [F6], they increase to $k(\omega)=\int g\,dQ_\omega$, and the right-hand integrals increase to $\int_H g(W)\,d\mathbb P$. Applying [F6] on both sides gives the same identity with $g$ in place of $g_m$. Thus $k$ is $\mathcal T$-measurable, bounded, and has the defining integral identities of a conditional-expectation version by [F5]. Step 2.2 gives $k\le\alpha$ almost surely, proving the conditional bound. [F4, F5, F6, step 1.1, step 2.2, construct] ∎


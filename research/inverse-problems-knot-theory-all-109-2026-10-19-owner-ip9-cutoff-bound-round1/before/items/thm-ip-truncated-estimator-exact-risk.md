---
id: thm-ip-truncated-estimator-exact-risk
kind: theorem
title: Exact worst-case risk of the truncated estimator
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-ip-gaussian-sequence-inverse-model
  - def-ip-statistical-ellipsoid-class
  - alg-ip-svd-truncated-estimator
  - def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited through the compact SVD and complete-basis coefficient identification used in the model; the finite-coordinate risk calculation itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Litao Ding and Peter Mathé, Minimax rates for statistical inverse problems under general source conditions, Lemma 1 and its complete proof, PDF pp. 2–3"
      url: https://arxiv.org/pdf/1707.01706
    - title: "Iain M. Johnstone, Gaussian estimation: Sequence and wavelet models, §3.2, equations (3.11)–(3.12), printed pp. 60–61"
      url: https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf
---

## Statement

Assume Countable Choice and let $\epsilon\ge0$. In the Gaussian sequence inverse model with positive singular numbers $(s_j)_{j\in\mathbb N}$, let $Q\ge0$ and let $(a_j)_{j\in\mathbb N}$ be positive and nondecreasing. For each $\theta\in\Theta_a(Q)$, define the squared sequence risk of the cutoff estimator at $D\in\mathbb N_0$ by
$$R_\theta(D):=\mathbb E_\theta\!\left[\|\widehat\theta_D(Z)-\theta\|_{\ell^2}^2\right].$$
Then its exact worst-case squared sequence risk is
$$\sup_{\theta\in\Theta_a(Q)}R_\theta(D)=\frac{Q^2}{a_{D+1}^2}+\epsilon^2\sum_{j=1}^{D}s_j^{-2},$$
where the sum is $0$ for $D=0$. The supremum is attained by the one-coordinate truth $\theta^\star=(Q/a_{D+1})e_{D+1}$, with $\theta^\star=0$ when $Q=0$.

## Statement references

[Litao Ding and Peter Mathé, *Minimax rates for statistical inverse problems under general source conditions*, Lemma 1 and its complete proof, PDF pp. 2–3](https://arxiv.org/pdf/1707.01706)

[Iain M. Johnstone, *Gaussian estimation: Sequence and wavelet models*, §3.2, equations (3.11)–(3.12), printed pp. 60–61](https://mathweb.ucsd.edu/~jbradic/math281a/Johnstone.pdf)

## Facts & Assumptions

[F1] [[def-ip-gaussian-sequence-inverse-model]]: For $\epsilon>0$, $Z_j=\theta_j+\epsilon s_j^{-1}\xi_j$ with $\mathbb E\xi_j=0$ and $\mathbb E\xi_j^2=1$; at $\epsilon=0$, $Z_j=\theta_j$ deterministically.

[F2] [[def-ip-statistical-ellipsoid-class]]: $\theta\in\Theta_a(Q)$ means $\theta\in\ell^2$ and $\sum_{j\ge1}a_j^2\theta_j^2\le Q^2$, with $0<a_1\le a_2\le\cdots$.

[F3] [[alg-ip-svd-truncated-estimator]]: $\widehat\theta_{D,j}(Z)=Z_j$ for $1\le j\le D$ and $0$ for $j>D$.

[A1] [[def-countable-choice]]: Countable Choice is assumed only for the upstream compact SVD coordinate identification; it is not used in the finite-coordinate risk calculation.

**Given:** Countable Choice, $\epsilon\ge0$, positive singular numbers $(s_j)$, a cutoff $D\in\mathbb N_0$, and the ellipsoid $\Theta_a(Q)$ with positive nondecreasing weights.

## Proof

1.1 Under [A1], the model coordinates in [F1] are fixed by the countable-choice SVD branch. If $\epsilon>0$, [F1] and [F3] give $\widehat\theta_{D,j}(Z)-\theta_j=\epsilon s_j^{-1}\xi_j$ for $j\le D$ and $-\theta_j$ for $j>D$, hence $\|\widehat\theta_D(Z)-\theta\|_{\ell^2}^2=\epsilon^2\sum_{j=1}^{D}s_j^{-2}\xi_j^2+\sum_{j>D}\theta_j^2$. If $\epsilon=0$, the retained error is zero and the omitted error is $-\theta_j$, so the squared error is $\sum_{j>D}\theta_j^2$. In both cases the error is in $\ell^2$ because the estimator has finite support and $\theta\in\ell^2$. [given, A1, F1, F2, F3, algebra]

2.1 For $\epsilon>0$, taking expectation in the finite random sum of [step 1.1] and using $\mathbb E\xi_j^2=1$ from [F1] gives $R_\theta(D)=\epsilon^2\sum_{j=1}^{D}s_j^{-2}+\sum_{j>D}\theta_j^2$. For $\epsilon=0$, the deterministic error in [step 1.1] gives the same formula with the first term zero. The deterministic tail is finite because $\theta\in\ell^2$. [step 1.1, F1, algebra]

3.1 For every $\theta\in\Theta_a(Q)$, monotonicity gives $a_j\ge a_{D+1}$ for $j>D$, so $\sum_{j>D}\theta_j^2=\sum_{j>D}a_j^2\theta_j^2a_j^{-2}\le a_{D+1}^{-2}\sum_{j>D}a_j^2\theta_j^2\le Q^2/a_{D+1}^2$. Thus [step 2.1] is bounded above by the asserted right-hand side. [given, F2, step 2.1, algebra]

4.1 The sequence with $\theta^\star_{D+1}=Q/a_{D+1}$ and all other coordinates zero belongs to $\ell^2$ and satisfies $\sum_{j\ge1}a_j^2(\theta^\star_j)^2=Q^2$, including $Q=0$. Its tail squared norm is exactly $Q^2/a_{D+1}^2$, so it attains the upper bound from [step 3.1]. The finite-coordinate variance term in [step 2.1] is independent of $\theta$, hence the same sequence attains the full worst-case risk. [F2, step 2.1, step 3.1, construct, algebra]

5.1 Taking the supremum in [step 2.1], using the universal upper bound [step 3.1] and the attaining sequence [step 4.1], yields the exact equality and the stated zero-cutoff convention. [step 2.1, step 3.1, step 4.1, algebra] ∎

## Remarks

This is expected squared loss in the Gaussian sequence experiment, over a weighted ellipsoid of coefficient sequences. It is not a deterministic worst-case error bound for arbitrary norm-bounded data perturbations.

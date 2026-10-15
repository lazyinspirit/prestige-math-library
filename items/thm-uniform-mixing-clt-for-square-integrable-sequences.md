---
dependency_level: 3
id: thm-uniform-mixing-clt-for-square-integrable-sequences
kind: theorem
title: A uniform-mixing CLT for square-integrable stationary sequences
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-axiom-of-choice
  - cor-cauchy-schwarz-for-random-variables
  - thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p
  - thm-rho-mixing-clt-for-square-integrable-sequences
  - def-mixing-coefficients-for-stationary-markov-chain
  - def-moments-variance-and-covariance
  - lem-zero-long-run-variance-gives-degenerate-clt
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: Galin L. Jones, On the Markov Chain Central Limit Theorem, Theorem 8
      url: https://arxiv.org/pdf/math/0409112
    - title: Mikhail Gordin and Magda Peligrad, On the functional central limit theorem via martingale approximation, §§1–2 and §3.3; finite-partition phi-to-rho bound proved locally
      url: https://arxiv.org/pdf/0910.3448
proof_strategy: direct
axiom_use: AC is explicit and is inherited through the local two-sided extension, conditional-expectation, Birkhoff and martingale-CLT suppliers; no stronger choice principle is introduced.
---

## Statement

Assume AC. Let $(Y_k)_{k\ge0}$ be a centered strictly stationary real sequence with $\mathbb E[Y_0^2]<\infty$. If
$$\sum_{n=1}^{\infty}\sqrt{\phi_Y(n)}<\infty,$$
then the covariance series
$$\sigma_Y^2:=\mathbb E[Y_0^2]+2\sum_{k=1}^{\infty}\operatorname{Cov}(Y_0,Y_k)$$
converges absolutely and is nonnegative. If $\sigma_Y^2>0$, then for $S_n=\sum_{k=1}^nY_k$,
$$n^{-1/2}S_n\Rightarrow N(0,\sigma_Y^2).$$
If $\sigma_Y^2=0$, [[lem-zero-long-run-variance-gives-degenerate-clt]] gives the degenerate normal limit.

## Facts & Assumptions

**Given:** AC, the centered strictly stationary real sequence $Y$, finite second moment, and $\sum_{n\ge1}\sqrt{\phi_Y(n)}<\infty$.

[A1] AC is inherited through the rho-mixing CLT. ([[def-axiom-of-choice]])

[F1] The coefficient $\phi_Y(n)$ bounds $|\mathbb P(B\mid A)-\mathbb P(B)|$ for a positive-probability past event $A$ and an event $B$ in the separated future; $\rho_Y(n)$ is the supremum of their square-integrable variable correlations. ([[def-mixing-coefficients-for-stationary-markov-chain]])

[F2] Real square-integrable random variables satisfy Cauchy–Schwarz. ([[cor-cauchy-schwarz-for-random-variables]])

[F3] Simple functions are dense in real $L^2$ on a probability space. ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]])

[F4] For a centered stationary real sequence of finite second moment, $\sum_{n\ge1}\rho_Y(n)<\infty$ gives absolute convergence and nonnegativity of the covariance variance, and the normal CLT with that variance, including zero. ([[thm-rho-mixing-clt-for-square-integrable-sequences]])

[F5] Variance and covariance are centered second and product moments. ([[def-moments-variance-and-covariance]])

## Proof

1.1 Fix a gap $n\ge1$ and a split $k\ge0$, put $\mathcal A=\sigma(Y_0,\ldots,Y_k)$ and $\mathcal B=\sigma(Y_{k+n},Y_{k+n+1},\ldots)$, and put $\phi=\phi_Y(n)$. Take finite partitions $(A_i)$ in $\mathcal A$ and $(B_j)$ in $\mathcal B$. Write $a_i=\mathbb P(A_i)$, $b_j=\mathbb P(B_j)$, $p_{ij}=\mathbb P(A_i\cap B_j)$, and $d_{ij}=p_{ij}-a_ib_j$. For each fixed $i$ the $d_{ij}$ sum to zero. If $a_i>0$, their positive sum is $\mathbb P(A_i\cap B)-a_i\mathbb P(B)\le\phi a_i$ for $B=\bigcup_{j:d_{ij}>0}B_j$, by [F1]. Hence $\sum_j|d_{ij}|\le2\phi a_i$; when $a_i=0$, every $d_{ij}=0$ and the same bound holds. For each $j$, $|p_{ij}-a_ib_j|\le p_{ij}+a_ib_j$ gives $\sum_i|d_{ij}|\le2b_j$. [F1, given, construct, algebra]

2.1 For simple $U=\sum_i u_i\mathbf1_{A_i}$ and $V=\sum_j v_j\mathbf1_{B_j}$, [F5] and finite Cauchy–Schwarz with weights $|d_{ij}|$ give $|\operatorname{Cov}(U,V)|=|\sum_{i,j}d_{ij}u_iv_j|\le(\sum_{i,j}|d_{ij}|u_i^2)^{1/2}(\sum_{i,j}|d_{ij}|v_j^2)^{1/2}\le2\sqrt\phi\,\|U\|_2\|V\|_2$, using step 1.1's row and column bounds. The finite Cauchy–Schwarz inequality here is also the probability-space inequality [F2] on a finite set, after normalizing the total weight; if all weights vanish the conclusion is immediate. [F2, F5, step 1.1, algebra]

3.1 For arbitrary real square-integrable $\mathcal A$-measurable $U$ and $\mathcal B$-measurable $V$, choose simple approximants in their respective $L^2$ spaces using [F3]. Their means, norms and product expectations converge by [F2]; therefore step 2.1's inequality passes to the limit. Apply it to $U-\mathbb EU$ and $V-\mathbb EV$ to get $|\operatorname{Cov}(U,V)|\le2\sqrt\phi\sqrt{\operatorname{Var}(U)\operatorname{Var}(V)}$. Taking the supremum over positive-variance variables and then splits in [F1] proves $\rho_Y(n)\le2\sqrt{\phi_Y(n)}$. No reversal of the conditioning direction of $\phi$ has been used. [F1, F2, F3, F5, step 2.1]

4.1 Summation of step 3.1 gives $\sum_{n\ge1}\rho_Y(n)\le2\sum_{n\ge1}\sqrt{\phi_Y(n)}<\infty$. The given stationarity, centering, and second-moment assumptions are exactly those of [F4], so that theorem proves absolute convergence and nonnegativity of the displayed covariance series and $S_n/\sqrt n\Rightarrow N(0,\sigma_Y^2)$ for positive or zero $\sigma_Y^2$. Thus every claimed conclusion holds. [A1, F4, step 3.1, given] ∎

## Source notes

The phi-to-rho bound is proved directly by finite partitions and $L^2$ approximation. The normal limit is supplied by the locally proved rho-mixing CLT, rather than an external uniform-mixing limit theorem.

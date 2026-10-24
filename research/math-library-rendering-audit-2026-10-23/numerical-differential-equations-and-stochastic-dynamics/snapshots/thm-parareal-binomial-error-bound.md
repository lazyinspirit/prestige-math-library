---
id: thm-parareal-binomial-error-bound
kind: theorem
title: "A conditional binomial error bound for Parareal"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-parareal-correction-sweeps
  - def-parareal-propagator-pair
  - def-norm-and-normed-space
  - def-real-exponential-function-and-e
  - lem-exponential-dominates-one-plus-x
  - thm-exponential-addition-formula
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "PDF pp. 14–16, standard recurrence and conditional error estimate."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Full lecture notes, slides 23–29: Parareal recurrence and the superlinear error recurrence."
    - title: "Ben S. Southworth, Necessary Conditions and Tight Two-Level Convergence Bounds for Parareal and Multigrid Reduction in Time"
      url: "https://arxiv.org/pdf/1810.07292"
      locator: "§1–2.2: linear time-invariant convergence assumptions and why no unconditional convergence rate is available."
---

## Statement

Let $x_{n+1}=F_n(x_n)$ be the sequential fine trajectory and let $U_n^k$ be the exact-arithmetic table from [[alg-parareal-correction-sweeps]]. Let $D\subseteq X$ contain every $x_n$ and every iterate used in the requested sweeps. Suppose constants $a,b,M\ge0$ satisfy, for every $0\le n<N$ and $u,v\in D$,
$$\|G_n(u)-G_n(v)\|\le a\|u-v\|,\qquad \|(F_n-G_n)(u)-(F_n-G_n)(v)\|\le b\|u-v\|,$$
and $\|U_n^0-x_n\|\le M$ for all $0\le n\le N$. Use $\binom nk$ for the number of $k$-element subsets of an $n$-element set, set it to $0$ for $k>n$, and put $A=\max\{1,a\}$. Then for every node $0\le n\le N$ and completed sweep $k\ge0$,
$$\|U_n^k-x_n\|\le M\binom nk A^n b^k,$$
with $b^0=1$. The hypotheses include all comparison points; invariance of $D$ under $F_n,G_n$ alone does not ensure that corrected iterates stay in $D$.

For a fixed horizon $T=NH$, suppose $a\le1+C_aH$, $b\le C_bH^{q+1}$ for constants $C_a,C_b\ge0$ and integer $q\ge1$, and one $M$ works uniformly as $N$ varies. Then, for each fixed $k\le N$,
$$\|U_N^k-x_N\|\le M(C_bT)^k\exp(C_aT)H^{qk}.$$
Thus the exact-solve error is $O(H^{qk})$ at each fixed iteration $k$ under these uniform assumptions. Neither estimate includes finite-solver error; that effect requires a separate update-defect analysis.

## Facts & Assumptions

**Given:** The exact Parareal recurrence, its sequential fine trajectory, a common comparison set, and the stated Lipschitz and initial-error bounds.

[F1] [[def-parareal-propagator-pair]]: the sequential fine trajectory is $x_{n+1}=F_n(x_n)$ from $x_0$.

[F2] [[alg-parareal-correction-sweeps]]: $U_0^k=x_0$ and $U_{n+1}^{k+1}=G_n(U_n^{k+1})+F_n(U_n^k)-G_n(U_n^k)$.

[F3] [[def-norm-and-normed-space]]: the norm satisfies $\|u+v\|\le\|u\|+\|v\|$.

[F4] [[lem-exponential-dominates-one-plus-x]]: for every real $z$, $1+z\le\exp(z)$.

[F5] [[thm-exponential-addition-formula]]: $\exp(u+v)=\exp(u)\exp(v)$ for real $u,v$.

[F6] [[def-real-exponential-function-and-e]]: for every real $x$, $\exp(x)$ is defined by the convergent series $\sum_{n=0}^{\infty}x^n/n!$.

[A1] All fine and coarse evaluations are exact and defined, all comparison points lie in $D$, the two Lipschitz inequalities hold on $D$, and the coarse initial-row errors are at most $M$.

[A2] In the fixed-horizon branch, $H=T/N$, $T>0$, $a\le1+C_aH$, $b\le C_bH^{q+1}$, $q\ge1$, and the envelope $M$ is independent of $N$.

## Proof

1.1 Put $e_n^k=U_n^k-x_n$. Subtract $x_{n+1}=F_n(x_n)$ from the recurrence in [F2] and add and subtract $G_n(x_n)$; this gives $e_{n+1}^{k+1}=G_n(U_n^{k+1})-G_n(x_n)+(F_n-G_n)(U_n^k)-(F_n-G_n)(x_n)$. By [A1] and the triangle inequality in [F3], $E_{n+1}^{k+1}\le aE_n^{k+1}+bE_n^k$, where $E_n^k=\|e_n^k\|$. [given, F1, F2, F3, A1, algebra]

1.2 At node $0$, $E_0^k=0$ for every $k$ by [F2]. At sweep $k=0$, [A1] gives $E_n^0\le M\le MA^n$. These are the initial cases for induction on the node, simultaneously over all completed sweeps. [F2, A1, induction]

2.1 Assume the bound holds at node $n$. For the level-zero row at node $n+1$, [A1] gives $E_{n+1}^0\le M\le MA^{n+1}$. For each $k\ge0$, [step 1.1] gives $E_{n+1}^{k+1}\le MA^n b^{k+1}\left(a\binom n{k+1}+\binom nk\right)\le MA^{n+1}b^{k+1}\left(\binom n{k+1}+\binom nk\right)$. The last inequality uses $a\le A$ and $1\le A$. Partitioning the $(k+1)$-element subsets of an $(n+1)$-element set according to whether they contain its final element gives $\binom n{k+1}+\binom nk=\binom{n+1}{k+1}$, including the zero convention. Thus the bound holds at node $n+1$, and induction proves the first estimate. [step 1.1, step 1.2, A1, induction, algebra]

3.1 In the fixed-horizon branch, $A\le1+C_aH\le\exp(C_aH)$ by [A2], [F4], and the definition of $\exp$ in [F6]. Repeated use of [F5] gives $A^N\le\exp(C_aNH)=\exp(C_aT)$. Each $k$-element subset of an $N$-element set has a unique increasing $k$-tuple, so $\binom Nk\le N^k$. Substituting these bounds and $b\le C_bH^{q+1}$ into the first estimate gives $\|U_N^k-x_N\|\le M N^k\exp(C_aT)(C_bH^{q+1})^k=M(C_bT)^k\exp(C_aT)H^{qk}$. For fixed $T,k$ and uniform $M$, this is $O(H^{qk})$. [A2, F4, F5, F6, step 2.1, construct, algebra] ∎


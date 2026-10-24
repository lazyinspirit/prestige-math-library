---
id: thm-shapley-effects-are-nonnegative-and-efficient
kind: theorem
title: Dependent-input Shapley effects are nonnegative and sum to one
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-dependent-input-shapley-effects, thm-conditional-expectation-is-the-l2-orthogonal-projection, def-axiom-of-choice, alg-exact-permutation-shapley-effects]
proof_strategy: direct
axiom_use: AC is inherited only through the stated conditional-expectation projection result; the permutation telescoping is finite and choice-free.
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Eunhye Song, Barry L. Nelson, and Jeremy Staum, Shapley Effects for Global Sensitivity Analysis: Theory and Computation, §3.1"
      url: https://users.iems.northwestern.edu/~nelsonb/Publications/SongNelsonStaum.pdf
---

## Statement

Assume AC and the positive-variance hypotheses of
[[def-dependent-input-shapley-effects]]. Then $v$ is monotone with
$v(\varnothing)=0$, $v([d])=V$, and $0\le v(S)\le V$ for every
$S\subseteq[d]$. Every $\phi_i\ge0$, and
$$\sum_{i=1}^d\phi_i=1.$$
Moreover, on the exact-oracle input for this game, the procedure
[[alg-exact-permutation-shapley-effects]] terminates after at most
$2d\,d!$ coalition-value calls and returns the Shapley effects defined above.

## Facts & Assumptions

**Given:** AC, $Y=f(X)\in L^2$, $V=\operatorname{Var}(Y)>0$, and the variance game $v$ and effects $\phi_i$ from the definition.

[A1] [[def-axiom-of-choice]]: AC is assumed for the conditional-expectation supplier.

[F1] [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]: under AC, conditional expectation is the orthogonal projection onto the corresponding $L^2$ subspace and fixes measurable inputs.

[F2] [[def-dependent-input-shapley-effects]]: $v(S)=\operatorname{Var}(\mathbb E[Y\mid\mathcal G_S])$ and $\phi_i$ is the average normalized marginal contribution over all permutations.

[F3] [[alg-exact-permutation-shapley-effects]]: the procedure initializes the accumulators, starts each permutation with $S=\varnothing$, adds $v(S\cup\{i\})-v(S)$ at entry $i$, updates $S$ to $S\cup\{i\}$, and returns the accumulated values divided by $d!V$.

## Proof

**Given:** The objects in the Statement and facts [A1], [F1]–[F3].

1.1 Fix $S\subseteq T\subseteq[d]$, and write $m_S=\mathbb E[Y\mid\mathcal G_S]$ and $m_T=\mathbb E[Y\mid\mathcal G_T]$. The subspaces of $\mathcal G_S$- and $\mathcal G_T$-measurable $L^2$ functions are nested. For every $h$ in the smaller subspace, $\langle m_T-Y,h\rangle=0$ because $h$ also belongs to the larger subspace. Thus $m_T$ and $Y$ have the same orthogonal projection onto the smaller subspace, namely $m_S$, so $m_T-m_S\perp m_S-\mathbb EY$. Pythagoras gives $v(T)-v(S)=\|m_T-m_S\|_2^2\ge0$. [A1, F1, given, algebra]

2.1 For any permutation $\pi$, sum the successive increments $v(P_i^\pi\cup\{i\})-v(P_i^\pi)$ in the order of that permutation. Every intermediate coalition value appears once positively and once negatively, leaving $v([d])-v(\varnothing)$. The projection in [F1] fixes $Y$, so $v([d])=V$; the empty-set projection is constant $\mathbb EY$, so $v(\varnothing)=0$. Step 1.1 gives monotonicity, so these endpoint values imply $0\le v(S)\le V$ for every coalition. Thus the increments sum to $V$. [F1, F2, step 1.1, algebra]

3.1 Each increment in step 2.1 is nonnegative by step 1.1. Average over the finite set of $d!$ permutations and divide by $V>0$. The resulting effects are nonnegative and their sum is $V/V=1$. [F2, step 1.1, step 2.1, given, algebra]

4.1 In the procedure [F3], before each entry $i$ of a permutation $\pi$, the current set $S$ is exactly $P_i^\pi$: it starts empty and each preceding entry is added once. Thus the increment added to $A_i$ is $v(P_i^\pi\cup\{i\})-v(P_i^\pi)$. There are $d!$ permutations with $d$ entries each, so the loops perform finitely many iterations and at most $2d\,d!$ exact coalition-value calls; every queried value is available by the stated oracle input. Summing the increments gives $A_i=\sum_{\pi\in\mathfrak S_d}(v(P_i^\pi\cup\{i\})-v(P_i^\pi))$, and division by $d!V$ returns exactly $\phi_i$ by [F2]. [F2, F3, given, algebra] ∎

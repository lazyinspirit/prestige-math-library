---
id: lem-infinite-past-conditional-block-information-rate
kind: lemma
title: "Conditional block information rate given the infinite past"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-finite-alphabet-stationary-source
  - lem-finite-alphabet-past-information-convergence
  - thm-conditional-probability-multiplication-and-chain-rules
  - thm-monotone-class
  - thm-birkhoff-ergodic-probability-case-for-strong-laws
  - thm-monotone-convergence-for-the-integral
  - thm-dominated-convergence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice axiom is used; conditional laws are constructed by explicit finite-partition martingale limits, and the remaining suppliers are choice-free."
---
## Statement

For each $n\ge1$, constructs the conditional law of $X_0^{n-1}$ given the full infinite past by finite-past martingale limits, then proves its realized information per symbol converges almost surely to the entropy rate for every stationary ergodic finite-alphabet source, without choice.

## Facts & Assumptions

**Given:** A stationary ergodic finite-alphabet source $X=(X_i)_{i\in\mathbb Z}$ with bit entropy rate $h$, and $\mathcal F^-:=\sigma(X_j:j<0)$.

[F1] [[lem-finite-alphabet-past-information-convergence]]: the finite-past one-symbol probabilities converge to $p_\infty(a)$; the realized information $g_\infty=-\log_2p_\infty(X_0)$ is nonnegative, integrable, and has mean $h$.

[F2] [[thm-conditional-probability-multiplication-and-chain-rules]]: a finite joint probability factors into successive conditional probabilities on positive-probability prefixes.

[F3] [[thm-monotone-class]]: identities on the algebra of finite-past cylinders extend to $\mathcal F^-$.

[F4] [[thm-monotone-convergence-for-the-integral]]: integrals of increasing nonnegative measurable functions converge to the integral of their pointwise limit.

[F5] [[thm-dominated-convergence]]: bounded almost-surely convergent functions on a probability space converge in integral when dominated by an integrable function.

[F6] [[thm-birkhoff-ergodic-probability-case-for-strong-laws]]: for an integrable function on an ergodic probability-preserving shift, its time averages converge almost surely to its integral.

## Proof

**Given:** The source, entropy rate and sigma-algebra above.

1.1 For $k\ge0$, $n\ge1$ and each word $w\in\mathcal A^n$, define $q_{k,n}(w)$ on each positive-probability atom of $\sigma(X_{-k},\ldots,X_{-1})$ as the conditional average of $1_{\{X_0^{n-1}=w\}}$ there; on null atoms use the uniform vector on $\mathcal A^n$. Refining the past partition shows that for fixed $n,w$, $(q_{k,n}(w))_{k\ge0}$ is a martingale bounded in $[0,1]$. For rational $0\le u<v\le1$, hold one unit after the martingale first falls to at most $u$, sell it when the martingale next reaches at least $v$, and repeat. Each finite-horizon gain is a sum of predictable holdings times martingale increments, so its expectation is zero by the martingale property. Every completed upcrossing earns at least $v-u$, and an unfinished holding loses at most one because the martingale stays in $[0,1]$. Thus the expected completed upcrossing count through any horizon is at most $(v-u)^{-1}$. By [F4], the total upcrossing count is finite almost surely for each rational pair. A bounded real sequence that does not converge has distinct liminf and limsup, hence has infinitely many upcrossings of some rational interval strictly between them. A countable intersection over rational pairs, words and lengths therefore gives simultaneous almost-sure limits $q_{\infty,n}(w)$. [F4, given, algebra]

1.2 For each $n$, the limits are nonnegative and sum to one because there are finitely many words and every $q_{k,n}$ is a probability vector. They are $\mathcal F^-$-measurable. Every finite-past cylinder $B$ belongs to the conditioning sigma-algebra for all sufficiently large $k$; [F5], with majorant one on the probability space, then gives $\int_Bq_{\infty,n}(w)\,dP=P(B\cap\{X_0^{n-1}=w\})$. [F3] extends this identity from the generating cylinder algebra to every $B\in\mathcal F^-$. Thus $q_{\infty,n}(w)$ is a conditional probability version of the block given the full past. [F3, F5, step 1.1, given]

1.3 Fix a positive-probability atom $B$ of the $k$-past partition. Applying [F2] to $B$ and its successive intersections with the realized symbol events factors $P(X_0^{n-1}=w\mid B)$ into ratios on the refined atoms $B\cap\{X_0^{i-1}=w_0^{i-1}\}$. Those ratios are exactly the finite-past conditional probabilities $p_{k+i}(w_i)$, since the refined atom records $X_{-k}^{i-1}$. Therefore, almost surely on the realized block,
$$q_{k,n}(X_0^{n-1})=\prod_{i=0}^{n-1}p_{k+i}(X_i).$$ For fixed $n$, every factor converges as $k\to\infty$ to $p_\infty(X_i)$ evaluated at the shifted path; the left side converges to $q_{\infty,n}(X_0^{n-1})$ by step 1.1. The realized one-symbol limits are positive almost surely by [F1] and stationarity, so
$$-\log_2q_{\infty,n}(X_0^{n-1})=\sum_{i=0}^{n-1}g_\infty\circ T^i\quad\text{almost surely}.$$
[F1, F2, step 1.1, algebra]

1.4 Apply [F6] to $g_\infty$. By [F1] its integral is $h$, so the right side of step 1.3 divided by $n$ converges almost surely to $h$. This proves the asserted conditional block-information rate and uses no choice axiom. [F1, F6, step 1.3, given] ∎

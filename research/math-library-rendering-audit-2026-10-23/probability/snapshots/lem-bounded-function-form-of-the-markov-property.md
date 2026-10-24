---
id: lem-bounded-function-form-of-the-markov-property
kind: lemma
title: "Bounded-function form of the Markov property"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-time-homogeneous-markov-chain-with-transition-kernel, thm-measurability-of-integration-against-a-kernel, thm-monotone-class, thm-taking-out-what-is-known, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, lem-conditional-expectation-is-unique-almost-surely]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Section 5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Equation (5.1.1) and Theorem 5.1.1, printed pp. 268-269"
---

## Statement

Assume Choice. An adapted process has the indicator Markov property with kernel
$K$ if and only if, for every bounded $\mathcal E$-measurable real function
$f$ and every $n\ge0$,
$$ \mathbb E[f(X_{n+1})\mid\mathcal F_n]=Kf(X_n)\quad\text{a.s.}, \qquad Kf(x):=\int_E f(y)K(x,dy). $$

## Facts & Assumptions

**Given:** Choice, a probability kernel $K$, and an adapted $E$-valued process $X$.

[F1] The indicator Markov property is the conditional-probability identity in [[def-time-homogeneous-markov-chain-with-transition-kernel]].

[F2] If $f$ is measurable and its kernel integral is defined, then $Kf$ is measurable. ([[thm-measurability-of-integration-against-a-kernel]])

[F3] Every nonnegative measurable function is the pointwise increasing limit of nonnegative measurable simple functions. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F4] Dominated convergence passes a pointwise limit under an integral when one integrable majorant dominates the sequence. ([[thm-dominated-convergence]])

[F5] Two conditional expectations of the same integrable variable given the same sigma-algebra are equal almost surely. ([[lem-conditional-expectation-is-unique-almost-surely]])

## Proof

1.1 Assume [F1]. If $s=\sum_{j=1}^r a_j1_{A_j}$ is a nonnegative measurable [F1, F2] simple function, then, for $B\in\mathcal F_n$, finite additivity of the integral and [F1] give $$ \mathbb E[1_Bs(X_{n+1})] =\sum_j a_j\mathbb E[1_B1_{\{X_{n+1}\in A_j\}}] =\mathbb E[1_BKs(X_n)]. $$ The variable $Ks(X_n)$ is $\mathcal F_n$-measurable by [F2], so it is a version of $\mathbb E[s(X_{n+1})\mid\mathcal F_n]$. [F1, F2]

2.1 Let $0\le f\le M$. By [F3], choose simple $s_j\uparrow f$, replacing [F2, F3, F4, F5, step 1.1] $s_j$ by $s_j\wedge M$ if necessary. Then $Ks_j(x)\to Kf(x)$ for every $x$; this follows from [F4] with the probability measure $K(x,\cdot)$ and majorant $M$. For each $B\in\mathcal F_n$, [F4] under $\mathbb P$ on both sides of the identity from step 1.1 gives $$ \mathbb E[1_Bf(X_{n+1})]=\mathbb E[1_BKf(X_n)]. $$ Thus $Kf(X_n)$ is a conditional-expectation version; [F5] makes the equality an equality of almost-everywhere classes. [F2, F3, F4, F5, step 1.1]

3.1 For bounded real $f$, apply step 2.1 to $f^+$ and $f^-$. Subtracting the [F2, F5, step 2.1] two defining event-integral identities shows that $Kf(X_n)=Kf^+(X_n)-Kf^-(X_n)$ is a version of the desired conditional expectation. This proves the bounded-function form. [F2, F5, step 2.1]

4.1 Conversely, put $f=1_A$. Then $Kf(X_n)=K(X_n,A)$, so the asserted [F1, step 3.1] bounded-function identity is exactly [F1] for $A$. Together with the forward direction through step 3.1, this proves the equivalence. [F1, step 3.1] ∎

---
id: thm-countable-state-martingale-problem-characterization
kind: theorem
title: "Countable-state martingale-problem characterization"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, def-discrete-generator-of-a-countable-state-transition-matrix, lem-bounded-function-form-of-the-markov-property, def-martingale-submartingale-and-supermartingale]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Roch, Markov Chains: Martingale Methods, Theorem 24.2"
      url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes24.pdf"
      locator: "Theorem 24.2 and proof, printed p. 2"
---

## Statement

Assume Choice. Let $S$ be countable, let $p$ be a transition matrix with
generator $L=P-I$, and let $X$ be an $S$-valued process adapted to
$(\mathcal F_n)$. Then $X$ is a $p$-chain if and only if, for every bounded
$f:S\to\mathbb R$,
$$ M_n^f=f(X_n)-\sum_{m=0}^{n-1}Lf(X_m),\qquad n\ge0, $$
is an $(\mathcal F_n)$-martingale (the empty sum at $n=0$ is zero).

## Facts & Assumptions

**Given:** Choice, countable $S$, $p$, $L$, and the adapted $S$-valued process
$X$.

[F1] For bounded $f$, $Lf=Pf-f$ and $|Lf|\le2\lVert f\rVert_\infty$. ([[def-discrete-generator-of-a-countable-state-transition-matrix]])

[F2] The $p$-chain property is equivalent to $\mathbb E[f(X_{n+1})\mid\mathcal F_n]=Pf(X_n)$ for every bounded $f$. ([[lem-bounded-function-form-of-the-markov-property]])

[F3] An integrable adapted process is a martingale exactly when $\mathbb E[M_{n+1}\mid\mathcal F_n]=M_n$ for every $n$. ([[def-martingale-submartingale-and-supermartingale]])

## Proof

1.1 Suppose $X$ is a $p$-chain. By [F1], [F1, F2, F3] $$|M_n^f|\le(1+2n)\lVert f\rVert_\infty,$$ so $M^f$ is integrable; it is adapted because $X$ is. Its increment is $$ M_{n+1}^f-M_n^f=f(X_{n+1})-f(X_n)-Lf(X_n) =f(X_{n+1})-Pf(X_n). $$ By [F2] this increment has conditional mean zero given $\mathcal F_n$. Therefore [F3] makes $M^f$ a martingale. This includes $n=0$ and constant $f=0,1$, for which the compensator vanishes. [F1, F2, F3]

2.1 Conversely, suppose every $M^f$ is a martingale. The finite preceding sum [F1, F2, F3] in its definition is $\mathcal F_n$-measurable and integrable. Expanding the identity in [F3] and cancelling that sum gives $$ \mathbb E[f(X_{n+1})\mid\mathcal F_n] =f(X_n)+Lf(X_n)=Pf(X_n). $$ By [F2], $X$ is a $p$-chain. Equivalently, choosing $f=1_A$ for every $A\subseteq S$ gives the conditional transition probability $p(X_n,A)=\sum_{y\in A}p(X_n,y)$; $A=\varnothing$ and $A=S$ give zero and one. This proves both implications. Choice is used precisely for the conditional expectations in [F2]--[F3]. [F1, F2, F3] ∎

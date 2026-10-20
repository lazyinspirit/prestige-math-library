---
id: lem-exp4-weighted-estimated-loss-second-moment
kind: lemma
title: Exp4 weighted estimated loss has conditional second moment at most k
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-contextual-bandit-protocol
  - alg-exp4
  - def-conditional-expectation-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; each conditional second moment is a finite sum over actions and experts.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§18.4, Eq. (18.12) and the following $P_t=Q_tE(t)$ calculation, PDF pp. 239–240 / printed pp. 230–231."
    - title: "Peter Auer, Nicolò Cesa-Bianchi, Yoav Freund, and Robert Schapire, The Nonstochastic Multiarmed Bandit Problem"
      url: "https://homepages.math.uic.edu/~lreyzin/papers/auer02.pdf"
      locator: "§7 second-moment calculation in the proof of Theorem 7.1, PDF pp. 18–19 / SIAM printed pp. 66–67; the exploration mixture is not imported."
---

## Statement

At every round $t$ in Exp4, define the estimated action loss by $\widehat L_{t,i}=1-\widehat X_{t,i}$ and the estimated loss of expert $m$ by $\widetilde L_{t,m}=1-\widetilde X_{t,m}$. Then
$$
\mathbb E\left[\sum_{m=1}^M Q_{t,m}\widetilde L_{t,m}^{2}\,\middle|\,\mathcal F_{t-1}\right]\le k.
$$
This bound includes actions with zero sampling probability under the zero-quotient convention.

## Statement references

[[alg-exp4|Exp4 expert weights and estimated losses]]: the action distribution, arm reward estimates, and expert weights define the random variables in the statement.

## Facts & Assumptions

**Given:** A contextual bandit instance, a round $t$, and the Exp4 algorithm with finite action and expert sets.

[F1] [[alg-exp4]]: $P_{t,i}=\sum_m Q_{t,m}E(t)_{m,i}$, $Q_{t,m}>0$, $\widetilde L_{t,m}=\sum_i E(t)_{m,i}\widehat L_{t,i}$, and the quotient for $\widehat L_{t,i}$ is zero when $P_{t,i}=0$.

[F2] [[def-contextual-bandit-protocol]]: each advice row is a probability vector, $0\le x_{t,i}\le1$, and the learner's action has conditional probability $P_{t,i}$.

[F3] [[alg-exp4]]: $X_t=x_{t,A_t}$, and when $P_{t,i}>0$, $\widehat L_{t,i}=\mathbf1\{A_t=i\}(1-X_t)/P_{t,i}$.

[F4] [[def-conditional-expectation-given-a-sigma-algebra]]: a conditional-expectation version is a measurable integrable function with the same integrals as the original variable on every event in the conditioning sigma-algebra.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is the Lebesgue integral; a measurable finite-range real random variable on a probability space is integrable.

## Proof

1.1 For the fixed instance, weights and finite estimates are functions of finitely many action histories; they and their squares are measurable with finite ranges, hence integrable. Fix a positive-probability pre-action history. If $P_{t,i}=0$, then $0=\sum_m Q_{t,m}E(t)_{m,i}$ with all terms nonnegative and every $Q_{t,m}>0$, so $E(t)_{m,i}=0$ for every expert $m$. Thus these coordinates contribute zero. For each realized action, at most one arm loss estimate $\widehat L_{t,i}$ is nonzero, and hence $\widetilde L_{t,m}^{2}=\sum_{i:P_{t,i}>0}E(t)_{m,i}^{2}\widehat L_{t,i}^{2}$. [F1, F2, F3, F5, algebra]

2.1 On this history, for $P_{t,i}>0$, the square $\widehat L_{t,i}^{2}$ equals $(1-x_{t,i})^2/P_{t,i}^{2}$ when $A_t=i$ and zero otherwise. By [F2], its conditional mean is therefore $P_{t,i}(1-x_{t,i})^2/P_{t,i}^{2}=(1-x_{t,i})^2/P_{t,i}$. These finite conditional sums on the history atoms satisfy [F4]; null histories do not affect the identities. Applying this calculation to step 1.1 gives $\mathbb E[\widetilde L_{t,m}^{2}\mid\mathcal F_{t-1}]=\sum_{i:P_{t,i}>0}E(t)_{m,i}^{2}(1-x_{t,i})^2/P_{t,i}\le\sum_{i:P_{t,i}>0}E(t)_{m,i}(1-x_{t,i})/P_{t,i}$, because $0\le E(t)_{m,i}(1-x_{t,i})\le1$, whose square is at most itself. [F2, F3, F4, step 1.1, algebra]

3.1 Multiply step 2.1 by $Q_{t,m}$ and sum over experts. For every supported $i$, $\sum_m Q_{t,m}E(t)_{m,i}=P_{t,i}$, so the result is at most $\sum_{i:P_{t,i}>0}(1-x_{t,i})\le k$. This proves the conditional bound. [F1, F2, step 2.1, algebra] ∎

---
id: prop-expander-sync-prop-6-9
title: Quantitative two-sided expansion — Proposition 6.9
kind: proposition
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-two-sided-expander
  - def-expander-sync-shifted-rate-roots
  - lem-author-6ad39f024b17-shifted-expander-probability-counterexample
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-two-sided-expander: mathematical-premise
  def-expander-sync-shifted-rate-roots: mathematical-premise
  lem-author-6ad39f024b17-shifted-expander-probability-counterexample: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 36–38, Proposition 6.9, equations (6.7)–(6.8), and proof
      statement: The article asserts the shifted-root quantitative two-sided expansion
        probability bound reproduced in the Statement.
      hypotheses: Real parameters 0 < ε < 1 and 1 + ε < γ < 1 + ε⁻²; p = γ log(n)/n,
        with n sufficiently large for this to be a probability.
      reading_limits: The supplied article text for Proposition 6.9 and its proof was
        inspected. This citation attributes the claim; it is not used to prove
        the refutation.
provenance:
  statement: ai-altered
  proof: ai-generated
formulation_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-two-sided-expander
  - def-expander-sync-shifted-rate-roots
argument_deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-two-sided-expander
  - def-expander-sync-shifted-rate-roots
  - lem-author-6ad39f024b17-shifted-expander-probability-counterexample
dependency_level: 10
---

## Statement

The article asserts the following. For every $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, there is a constant $C=C(\gamma,\varepsilon)>0$ such that, for $p=\gamma\log n/n$, $d^*=\gamma\log n$ and $\alpha=8(\gamma\log n)^{-1/2}$, the random graph $G(n,p)$ is an $(n,d^*,\alpha,c^-,c^+)$-expander with probability at least $1-C(\log n)^4n^{-\varepsilon}$. Here $h(x)=(1+x)\log(1+x)-x$ for $x>-1$; $c^-<0$ and $c^+>0$ are the shifted roots defined by $\gamma h(c^--\varepsilon)=1+\varepsilon$ and $\gamma h(c^++\varepsilon)=1+\varepsilon$, respectively.

This assertion is false. At $\gamma=2$ and $\varepsilon=1/2$, the probability of the stated expander event tends to zero as $n\to\infty$.

In this statement $G(n,p)$ is the loop-free graph on $n$ vertices whose unordered edges occur independently with probability $p$. The expander predicate requires $\|A-pJ\|\leq\alpha d^*$ and $c^-d^*I\preceq\Delta_L\preceq c^+d^*I$, where $A$ is adjacency, $D$ is the diagonal degree matrix, $\Delta_L=D-A-d^*I+pJ$, $J$ is the all-ones matrix, and $\preceq$ denotes quadratic-form order.

## Facts & Assumptions

[F1] The graph law, shifted roots, and expander predicate have the meanings in [[def-expander-sync-erdos-renyi]], [[def-expander-sync-shifted-rate-roots]], and [[def-expander-sync-two-sided-expander]].

[F2] At $\gamma=2$ and $\varepsilon=1/2$, the expander probability is at most $\eta_n=2e^4\log n/\sqrt n+2p/(1-p)^2$, where $p=2\log n/n$ and $\eta_n\to0$. For every fixed $C>0$, the proposed failure bound $C(\log n)^4n^{-1/2}$ tends to zero ([[lem-author-6ad39f024b17-shifted-expander-probability-counterexample]]).

## Proof

**Given:** The parameters and graph law in the Statement.

**Goal:** Refute the attributed probability assertion.

1.1 The choice $\varepsilon=1/2$, $\gamma=2$ satisfies $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, since $3/2<2<5$. For all sufficiently large $n$, $p=2\log n/n$ lies in $(0,1)$. By [F1] the event in [F2] is exactly the event in the attributed assertion at these parameters. [F1, F2, given, algebra]

2.1 By [F2], its probability tends to zero. If the attributed assertion held for some fixed $C>0$, its lower bound would tend to one. These two limits are incompatible, so no such constant exists for this admissible parameter pair. [F2, step 1.1, algebra] ∎

## Source attribution

The assertion and its notation are attributed to Proposition 6.9 of the cited article. The refutation uses the separate local counterexample supplier; it does not use the article's assertion as a premise.

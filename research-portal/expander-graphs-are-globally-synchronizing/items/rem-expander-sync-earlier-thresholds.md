---
id: rem-expander-sync-earlier-thresholds
title: Previous Erdős–Rényi synchronization bounds
kind: remark
domain: mathematics
status: published
origin: pipeline
deps:
  - def-expander-sync-erdos-renyi
  - def-expander-sync-global-synchrony
  - def-expander-prereq-asymptotic-quantifiers
  - rem-expander-prereq-earlier-random-thresholds
  - lem-author-2bcd11f9e275-logarithmic-tangent-bound
  - math:thm-natural-logarithm-laws
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-erdos-renyi: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  rem-expander-prereq-earlier-random-thresholds: mathematical-premise
  lem-author-2bcd11f9e275-logarithmic-tangent-bound: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 4, Section 1; PDF p. 5, opening paragraph
      statement: The article attributes the n^(-1/3) log n high-probability
        global-synchronization bound to Ling, Xu and Bandeira and the (log
        n)^2/n improvement to Kassabov, Strogatz and Townsend.
      hypotheses: The article discusses the homogeneous Kuramoto model on the
        Erdős–Rényi graph G(n,p), with probability tending to one as n tends to
        infinity.
      reading_limits: The indicated passages of the extracted article text were
        inspected for attribution. This citation is not used to prove the
        synchronization bounds or to establish the precise scope of the earlier
        papers.
provenance:
  statement: ai-altered
  proof: ai-generated
dependency_level: 7
---

## Statement

Assume countable choice. Let $G(n,p)$ be the simple Erdős–Rényi graph, and consider identical unit-coupled Kuramoto oscillators on it. If $p=p(n)\in[0,1]$ and $p=\Omega((\log n)^2/n)$, then $G(n,p)$ is globally synchronizing with high probability. The same conclusion holds if $p=\Omega(n^{-1/3}\log n)$.

Here $p=\Omega(f(n))$ means that some constant $c>0$ satisfies $p(n)\ge c f(n)$ for all sufficiently large $n$. High probability means that the probability tends to one as $n\to\infty$. Global synchronization means that, outside a phase-volume-null set of initial states, the rotating-frame trajectory converges to a state in which all phases agree.

The article attributes the $n^{-1/3}\log n$ bound to Ling, Xu and Bandeira and the $(\log n)^2/n$ improvement to Kassabov, Strogatz and Townsend.

## Statement references

[[def-expander-sync-erdos-renyi]]

[[def-expander-sync-global-synchrony]]

[[def-expander-prereq-asymptotic-quantifiers]]

[[rem-expander-prereq-earlier-random-thresholds]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] Under countable choice, for every fixed $c>0$ and every sequence $p\in[0,1]$ satisfying $np\ge c(\log n)^2$ eventually, the probability that the simple $G(n,p)$ is globally synchronizing tends to one. This is the stated local consequence of the independent criterion and concentration inputs in [[rem-expander-prereq-earlier-random-thresholds]].

[F2] For every $a>0$, $\log a\le a-1$ ([[lem-author-2bcd11f9e275-logarithmic-tangent-bound]]). The logarithm laws give $\log n=3\log(n^{1/3})$ for $n>0$ ([[math:thm-natural-logarithm-laws]]).

## Proof

**Given:** Countable choice and a sequence $p(n)\in[0,1]$ satisfying either lower bound in the Statement.

**Goal:** Show that the probability of global synchronization tends to one.

1.1 If $p=\Omega((\log n)^2/n)$, then for some fixed $c>0$ and all sufficiently large $n$ we have $np\ge c(\log n)^2$. The conclusion follows from [F1]. [F1, given, algebra]

2.1 Suppose instead that $p\ge c n^{-1/3}\log n$ eventually, for some $c>0$. For $n\ge 1$, [F2] gives $\log n\le3(n^{1/3}-1)\le3n^{2/3}$. For sufficiently large $n$, $\log n>0$, so $np\ge c n^{2/3}\log n\ge(c/3)(\log n)^2$. Applying [F1] with the fixed positive constant $c/3$ proves the conclusion. [F1, F2, given, algebra] ∎

## Source notes

The article's historical attributions are recorded from its Section 1. The argument above obtains both conclusions from the independently supplied squared-logarithmic result; it does not infer dynamical convergence from the separate local-minimum statement of Ling, Xu and Bandeira. The earlier-threshold supplier records the distinction between the published $p\gg(\log n)^2/n$ statement and its locally derived fixed-constant consequence.

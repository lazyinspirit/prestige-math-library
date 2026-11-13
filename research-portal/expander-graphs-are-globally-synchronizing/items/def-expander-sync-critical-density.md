---
id: def-expander-sync-critical-density
title: Critical minimum-degree connectivity parameter
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - def-expander-sync-global-synchrony
  - def-expander-prereq-asymptotic-quantifiers
  - def-expander-prereq-phase-volume
  - prop-author-4f905b3f6478-critical-density-family
  - math:def-countable-choice
  - math:thm-dedekind-complete
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
  def-expander-prereq-phase-volume: mathematical-premise
  prop-author-4f905b3f6478-critical-density-family: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:thm-dedekind-complete: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 9, Section 1.5, first paragraph
      statement: The critical connectivity threshold is the smallest number such that,
        for every larger density parameter and sufficiently large graph order,
        every graph meeting the corresponding minimum-degree bound globally
        synchronizes.
      hypotheses: The homogeneous graph Kuramoto model and the article's graph and
        global-synchronization conventions.
      reading_limits: The first paragraph of Section 1.5 was inspected in the supplied
        extracted article text. This reference attributes the definition; it is
        not used to prove existence of the threshold.
dependency_level: 7
---

## Definition

Assume countable choice. A graph here is finite and undirected, with a nonempty vertex set, at most one edge between each pair of vertices, and possible self-loops; a loop contributes once to its vertex degree. For $n$ vertices, $d_{\min}$ is the minimum vertex degree. Global synchronization means that, for the homogeneous Kuramoto system in its rotating frame, a uniformly chosen initial phase state converges to a state in which all phases are equal with probability one; the uniform law is normalized phase volume.

For a real number $a$, say that $a$ has the threshold property if, for every real $\mu>a$, there is an integer $N=N(\mu)$ such that, for every $n\ge N$, every graph on $n$ vertices satisfying $d_{\min}\ge\mu(n-1)$ is globally synchronizing. The **critical connectivity threshold** $\mu_c$ is the smallest real number with the threshold property. Thus the cutoff may depend on $\mu$, but not on the graph of that order.

## Definition references

[[math:def-countable-choice]]

[[def-expander-sync-graph-notation]]

[[def-expander-sync-global-synchrony]]

[[def-expander-prereq-phase-volume]]

[[def-expander-prereq-asymptotic-quantifiers]]

## Facts & Assumptions

[F1] The graph convention gives a symmetric binary adjacency matrix, with each degree its row sum and a loop counted once ([[def-expander-sync-graph-notation]]). The probability-one synchronization condition and its normalized phase-volume law are specified in [[def-expander-sync-global-synchrony]] and [[def-expander-prereq-phase-volume]], under [[math:def-countable-choice]].

[F2] For every integer $k\ge3$, there is a nonsynchronizing simple graph on $8k$ vertices whose minimum degree is $5k+\lceil k/2\rceil-2$ ([[prop-author-4f905b3f6478-critical-density-family]]).

[F3] Every nonempty set of real numbers bounded above has a least upper bound ([[math:thm-dedekind-complete]]). The phrase “sufficiently large” means an eventual cutoff in the order parameter ([[def-expander-prereq-asymptotic-quantifiers]]).

## Justification

**Given:** The graph, phase-volume and synchronization conventions and countable choice above.

**Goal:** Show that the smallest real number in the definition exists and is unique.

1.1 Let $B$ be the set of real $b$ such that, for every integer $N$, some nonsynchronizing graph on $n\ge\max\{N,2\}$ vertices satisfies $d_{\min}\ge b(n-1)$. The graphs in [F2] have nonnegative degree and arbitrarily large orders, so $0\in B$. By [F1], $d_{\min}\le n$, and for $n\ge2$ this gives $d_{\min}/(n-1)\le2$. Hence $2$ is an upper bound for $B$. By [F3], $s=\sup B$ exists. [given, F1, F2, F3, algebra]

2.1 If $\mu>s$, then $\mu\notin B$; negating the defining condition for $B$ gives a cutoff beyond which every graph meeting $d_{\min}\ge\mu(n-1)$ synchronizes. Thus $s$ has the threshold property. If $a<s$, the least-upper-bound property gives some $b\in B$ with $b>a$. Set $\mu=(a+b)/2$. For every cutoff, the nonsynchronizing graph supplied by $b\in B$ also satisfies the weaker degree bound with parameter $\mu$, so $a$ does not have the threshold property. Consequently $s$ is its unique smallest real number, and the definition is well defined. [step 1.1, F3, algebra] ∎

## Source notes

The critical-threshold formulation is attributed to [Expander graphs are globally synchronizing](https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf), Section 1.5, first paragraph. The justification uses the independently supplied family and real completeness, rather than the article's threshold claim.

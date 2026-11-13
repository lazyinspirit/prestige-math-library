---
id: def-expander-sync-random-regular-model
title: Uniform random regular graph convention
kind: definition
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-graph-notation
  - math:def-uniform-finite-probability-space
  - def-expander-prereq-asymptotic-quantifiers
dependency_roles:
  def-expander-sync-graph-notation: mathematical-premise
  math:def-uniform-finite-probability-space: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 7, Section 1.3; PDF p. 9, Section 1.5; PDF p. 28, Section 5
      statement: The article discusses uniformly chosen d-regular graphs and their
        high-probability properties as the number of vertices grows.
      hypotheses: The random regular graph discussions include fixed degrees d at
        least 3; Section 5 discusses the range d at least 600.
      reading_limits: The extracted passages at the cited locations were inspected.
        This reference attributes the article's usage; it is not a premise for
        the local justification. The explicit labelled simple-graph convention
        and feasible-order restriction are supplied here to make the model
        precise.
dependency_level: 2
---

## Definition

Let $n$ be a positive integer and $d$ a nonnegative integer. Put $V=\{1,\ldots,n\}$. A simple graph on $V$ has as its edges a set of unordered pairs of distinct vertices; its degree at a vertex is the number of edges incident to that vertex. It is $d$-regular if every vertex has degree $d$. Let $\mathcal G_{n,d}$ be the set of all such graphs on the labelled vertex set $V$.

When $\mathcal G_{n,d}$ is nonempty, a uniformly random $d$-regular graph on $n$ vertices is a random element of $\mathcal G_{n,d}$ under the uniform law: each graph has probability $1/|\mathcal G_{n,d}|$, and an event $E\subseteq\mathcal G_{n,d}$ has probability $|E|/|\mathcal G_{n,d}|$. An order $n$ is feasible for $d$ when $\mathcal G_{n,d}$ is nonempty.

For fixed $d$, limits as $n\to\infty$ in this model run through feasible orders. A sequence of events $E_n\subseteq\mathcal G_{n,d}$ holds with high probability if, for every $\varepsilon>0$, there is an $N$ such that $\mathbb P(E_n)>1-\varepsilon$ for every feasible $n\ge N$.

## Definition references

[[def-expander-sync-graph-notation]]

[[math:def-uniform-finite-probability-space]]

[[def-expander-prereq-asymptotic-quantifiers]]

## Facts & Assumptions

[F1] For a finite graph with binary adjacency, degree is the adjacency row sum and $d$-regularity means that every row sum equals $d$ ([[def-expander-sync-graph-notation]]).

[F2] On a nonempty finite set, the uniform probability of an event is its cardinality divided by the cardinality of the set ([[math:def-uniform-finite-probability-space]]).

[F3] For events indexed by an unbounded set of orders, holding with high probability means that their probabilities tend to one along that set ([[def-expander-prereq-asymptotic-quantifiers]]).

## Justification

**Given:** A positive integer $n$ and a nonnegative integer $d$; for the probability law suppose that $n$ is feasible, and for the limit keep $d$ fixed.

**Goal:** Verify that the stated graph law and asymptotic convention are well defined.

1.1 There are finitely many unordered pairs of distinct vertices, so there are finitely many possible edge sets and $\mathcal G_{n,d}$ is finite. For a simple graph, each incident edge contributes exactly one to the adjacency row sum, so its degree and regularity agree with [F1]. At a feasible order the outcome set is nonempty; [F2] therefore gives the stated uniform probabilities for every event. [given, F1, F2]

2.1 For every positive integer $k$, take $k$ disjoint blocks of $d+1$ vertices and include every edge within each block and no edge between blocks. Every vertex has exactly $d$ neighbors, including when $d=0$, so $n=k(d+1)$ is feasible. Thus feasible orders are unbounded. The displayed quantifier condition is exactly convergence of the event probabilities to one along those orders, as in [F3]. This establishes the convention. [given, F3, construct, step 1.1] ∎





## Source notes

The article discusses uniformly chosen regular graphs and high-probability conclusions in Sections 1.3 and 1.5, and explicitly considers the limit as $n$ grows in Section 5. Its citation is attribution for that usage; the argument above uses the stated mathematical suppliers.

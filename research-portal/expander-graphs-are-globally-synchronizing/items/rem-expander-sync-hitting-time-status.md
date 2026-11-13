---
id: rem-expander-sync-hitting-time-status
title: Synchronization at the connectivity hitting time
kind: remark
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-sync-random-graph-process
  - def-expander-sync-global-synchrony
  - def-expander-prereq-edge-order-process-coupling
  - thm-expander-prereq-synchronization-hitting-time-input
  - math:def-countable-choice
dependency_roles:
  def-expander-sync-random-graph-process: mathematical-premise
  def-expander-sync-global-synchrony: mathematical-premise
  def-expander-prereq-edge-order-process-coupling: mathematical-premise
  thm-expander-prereq-synchronization-hitting-time-input: mathematical-premise
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 38, Section 7, random graph process paragraph
      statement: The authors propose that the random graph process is globally
        synchronizing for every m at or after its first connected time and
        report that a follow-up article by Jain, Mizgerd and Sawhney established
        the conjecture.
      hypotheses: The process starts with the empty graph on n vertices and adds a
        uniformly chosen missing edge at each step; the hitting time is the
        first connected index.
      reading_limits: The supplied article text at the cited paragraph was inspected.
        This reference attributes the article's claim and report; it is not a
        proof premise. The paragraph does not itself state the asymptotic
        probability quantifier.
    - title: The random graph process is globally synchronizing
      url: https://arxiv.org/abs/2501.12205
      locator: Abstract
      statement: The authors report that, with high probability, the random graph
        process becomes globally synchronizing as soon as it is connected,
        confirming the cited conjecture.
      hypotheses: The homogeneous Kuramoto model on the random graph process, in the
        asymptotic high-probability sense described in the abstract.
      reading_limits: Only the arXiv abstract was inspected for this contextual
        attribution; the theorem statement and proof were not independently read
        here. The local argument below instead uses the separately supplied
        theorem.
dependency_level: 7
---

## Statement

Assume countable choice. For $n\ge2$, let $G(n,0)$ be the empty graph on $n$ vertices and obtain $G(n,m+1)$ by adding a uniformly chosen missing edge. Put $N=\binom n2$ and $\tau=\min\{m:G(n,m)\text{ is connected}\}$. Connectivity means that every pair of vertices is joined by a path. A graph is globally synchronizing if, for normalized-volume almost every initial phase, its homogeneous Kuramoto trajectory in the rotating frame converges to a state whose phases all agree.

The article conjectures that $G(n,m)$ is globally synchronizing for every $m\ge\tau$ and reports that Jain, Mizgerd and Sawhney established this conjecture. Precisely, the simultaneous event $\{G(n,m)\text{ is globally synchronizing for every }\tau\le m\le N\}$ has probability tending to one as $n\to\infty$. The probability here is over the graph process; the almost-everywhere qualification inside global synchronization concerns initial phases for each fixed graph. The article paragraph does not explicitly state this asymptotic probability quantifier.

## Statement references

[[def-expander-sync-random-graph-process]]

[[def-expander-sync-global-synchrony]]

[[thm-expander-prereq-synchronization-hitting-time-input]]

[[math:def-countable-choice]]

## Facts & Assumptions

[F1] Under countable choice, the random graph process is the uniform ordering of all possible edges, and conditional on any revealed prefix its next edge is uniform among the missing edges. Its connectivity time is the first connected index ([[def-expander-sync-random-graph-process]], [[def-expander-prereq-edge-order-process-coupling]], [[math:def-countable-choice]]).

[F2] Global synchronization is the stated almost-everywhere convergence of rotating-frame homogeneous Kuramoto trajectories to fully synchronized states, with normalized phase volume defining almost everywhere ([[def-expander-sync-global-synchrony]]).

[F3] Under countable choice, the supplied hitting-time theorem states that, in the uniform edge-order process on $n\ge2$ vertices, the single event that every graph from its first connected index through $N$ is globally synchronizing has probability tending to one as $n\to\infty$ ([[thm-expander-prereq-synchronization-hitting-time-input]]).

## Proof

**Given:** The random graph process and global-synchronization convention in the statement, under countable choice.

**Goal:** Establish the stated simultaneous high-probability assertion.

1.1 By [F1], the process defined by successive uniform choices of missing edges has the uniform edge-order law used in [F3], and its $\tau$ is the same first connected index. By [F2], the graph property in the statement is the property used in [F3]. [F1, F2, F3, given]

2.1 Apply [F3] to that process and property. Its conclusion is the one event requiring global synchronization at every index from $\tau$ through $N$, with probability tending to one. For each graph, the almost-everywhere assertion refers to its own initial-phase measure, so this does not identify graph probability with phase volume. [F2, F3, step 1.1] ∎

## Source notes

The article's Section 7 paragraph supplies the attribution and reports the follow-up result. The abstract of Jain, Mizgerd and Sawhney's [The random graph process is globally synchronizing](https://arxiv.org/abs/2501.12205) also reports confirmation with high probability. The proof above uses the independent supplied hitting-time theorem; it does not use the article's reported claim as its premise.

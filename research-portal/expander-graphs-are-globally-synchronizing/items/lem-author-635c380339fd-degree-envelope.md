---
id: lem-author-635c380339fd-degree-envelope
kind: lemma
title: Simultaneous degree deviations on the squared logarithmic scale
domain: mathematics
status: published
origin: pipeline
deps:
  - prop-expander-prereq-degree-chernoff-union
  - prop-expander-prereq-degree-law-and-dependence
  - def-expander-prereq-asymptotic-quantifiers
dependency_roles:
  prop-expander-prereq-degree-chernoff-union: mathematical-premise
  prop-expander-prereq-degree-law-and-dependence: mathematical-premise
  def-expander-prereq-asymptotic-quantifiers: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Fix $c>0$ and let $G\sim G(n,p)$ with $np=d\ge c(\log n)^2$ and $p\le1$. Put $\mu=(n-1)p$ and $t=\sqrt{12\mu\log n}$. Eventually, with probability at least $1-2n^{-3}$, every loop-free degree $d_i$ satisfies $|d_i-\mu|<t\le\sqrt{12d\log n}$. The statement applies along every sequence of allowed probabilities.

## Facts & Assumptions

**Given:** The data and hypotheses in the Statement.

**Goal:** Establish the conclusions in the Statement.

[F1] The exact-mean Chernoff union estimate is $\mathbb P(\exists i:|d_i-\mu|\ge\delta\mu)\le2n e^{-\mu\delta^2/3}$ for $0\le\delta\le1$ ([[prop-expander-prereq-degree-chernoff-union]]); the graph law and sequence quantifiers are those of [[prop-expander-prereq-degree-law-and-dependence]] and [[def-expander-prereq-asymptotic-quantifiers]].

## Proof

1.1 Because $\mu=(1-1/n)d\ge(c/2)(\log n)^2$ eventually, $\delta=\sqrt{12\log n/\mu}$ is eventually at most one and $\delta\mu=t$. [F1, algebra]

2.1 Substitution in the union bound gives $2n\exp(-4\log n)=2n^{-3}$. Finally $\mu\le d$ gives the stated envelope. [F1, step 1.1, algebra] ∎

---
id: ex-orthogonal-brauer-centralizer-not-faithful-in-rank-one
kind: example
title: The orthogonal Brauer action has a kernel at dimension one and rank two
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-brauer-and-partition-diagram-categories
  - lem-brauer-and-partition-diagram-basis-ranks
proof_strategy: direct
generation:
  role: example
axiom_use: "No choice principle is used; all spaces are one-dimensional."
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Lehrer and Zhang, The Brauer Category and Invariant Theory, Theorem 4.6"
      url: https://arxiv.org/pdf/1207.5889
      locator: 'PDF pp. 20–21: orthogonal stable range $r\le m$ and the first determinant relation.'
---

## Example

Take $k=\mathbb Q$, $V=\mathbb Q e$ with $B(e,e)=1$, $G=O(V)=\{1,-1\}$, and tensor rank $r=2$. Then $B_2(1)$ has three distinct pairing basis diagrams, while $\operatorname{End}_G(V^{\otimes2})\cong\mathbb Q$ is one-dimensional. The orthogonal contraction map sends all three diagrams to the scalar $1$, so it is not injective. This is the first orthogonal failure, since $r=2>m=1$.

## Facts & Assumptions

**Given:** The Brauer diagram basis convention and the contraction assignment, specialized to $m=1$ and $r=2$.

[F1] [[def-brauer-and-partition-diagram-categories]] and [[lem-brauer-and-partition-diagram-basis-ranks]]: $B_2(1)$ is free on the three perfect matchings of its four boundary points.

[F2] [[def-brauer-and-partition-diagram-categories]]: the product of two basis diagrams is obtained by stacking and contributes one factor $\delta$ per removed loop.

## Verification

1.1 Name the three matchings $I$ (through identity), $X$ (crossed through strands), and $E$ (top cup and bottom cap). The orthogonal tensor assignment sends them to $\operatorname{id}$, $P$, and $cB$, respectively. On $e\otimes e$, each is the identity because $P(e\otimes e)=e\otimes e$ and $cB(e\otimes e)=e\otimes e$. Also $O(V)=\{1,-1\}$ acts trivially on $V^{\otimes2}$, whose endomorphism algebra is one-dimensional. [given, F1, algebra]

2.1 At $\delta=1$, stacking any two of $I,X,E$ gives one of these basis diagrams with coefficient $1$ (the possible closed loop also has coefficient $\delta=1$). Since all three images are the identity, this defines the contraction algebra map and its image is one-dimensional. Its domain has rank three by [F1] and [[lem-brauer-and-partition-diagram-basis-ranks]], so the map has a two-dimensional kernel. For $r=0$ the map is $\mathbb Q\to\operatorname{End}(\mathbb Q)$ sending identity to identity, and for $r=1$ both $B_1(1)$ and $\operatorname{End}_{O(V)}(V)$ are one-dimensional with identity mapping to identity. Thus $r=2=m+1$ is the first failure. [F1, F2, step 1.1, algebra] ∎

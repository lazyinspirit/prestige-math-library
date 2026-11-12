---
title: Exact range of a cofiber connectivity bound
status: published
research_item: lem-author-13e6fe931c45-cone-exact-range
dependency_level: 5
---

PDF p. 4: equivalence in degrees at most three

## Prerequisites

- [lem-author-13e6fe931c45-cone-low-degrees](item-lem-author-13e6fe931c45-cone-low-degrees)
- [lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)


## Statement
If the cofiber of $f:A\to B$ in $D(\mathbb Z)$ is supported in degrees $>3$, meaning its cohomology vanishes in every degree at most three, then $H^i(f)$ is an isomorphism for every $i\leq3$.

## Facts & Assumptions

**Given:** A morphism $f:A\to B$ in $D(\mathbb Z)$ and its cofiber $C$, with $H^j(C)=0$ for every $j\leq3$.

**Goal:** Prove that $H^i(f)$ is an isomorphism for every $i\leq3$.

[F1] For a morphism $f:A\to B$ in $D(\mathbb Z)$ with cofiber $C$, represented by a mapping cone, if $H^j(C)=0$ for every $j\leq n$, then $H^i(f)$ is an isomorphism for every $i\leq n$ ([lem-author-13e6fe931c45-cone-low-degrees](item-lem-author-13e6fe931c45-cone-low-degrees)).

[F2] The category $D(\mathbb Z)$ is the derived category of cochain complexes of abelian groups, obtained by inverting quasi-isomorphisms. Cohomology defines a functor $H^i:D(\mathbb Z)\to\operatorname{Ab}$, so $H^i(f)$ is its well-defined induced map ([lem-author-b747b28c359f-derived-cohomology](item-lem-author-b747b28c359f-derived-cohomology)).

## Proof

1.1 The given cofiber $C$ satisfies $H^j(C)=0$ for every $j\leq3$, which is exactly the vanishing hypothesis of [F1] with $n=3$. [F1, given]

2.1 Apply [F1] with $n=3$ to obtain that $H^i(f)$ is an isomorphism for every $i\leq3$. These are the induced cohomology maps in the statement by [F2]. [F1, F2, step 1.1] ∎

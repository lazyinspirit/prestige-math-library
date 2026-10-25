---
id: "def-relative-fundamental-class-and-boundary-orientation"
kind: "definition"
title: "Relative fundamental class and boundary orientation"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology, Chapter 21 §4
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $M$ be a compact $R$-oriented $n$-manifold with boundary $A$, where $R$ is a commutative unital ring and the orientation is supplied on $M\setminus A$. Its **relative fundamental class** is the unique class
$$[M,A]\in H_n(M,A;R)$$
whose restriction at every interior point is the prescribed local generator. Existence and uniqueness, including manifolds with closed components, are proved in [[lem-a-collar-identifies-boundary-local-homology-with-the-pair-fundamental-class]].

The **induced boundary orientation** is the orientation whose local generator at $x\in A$ is the restriction of $\partial[M,A]$, where $\partial$ is the homology pair connector. The same lemma proves that these restrictions are generators and form a continuous section. Thus
$$\partial[M,A]=[A]$$
for this orientation. In tangent-then-inward coordinates its generator is $(-1)^n$ times the tangent generator for the product orientation: this is the outward-normal-first convention. Each component inherits its sign from the supplied interior orientation; there is no further independent selection of signs.

If $A$ is empty, this is the absolute fundamental class and the boundary class is zero. In dimension zero the boundary is empty. Empty $M$ and the zero coefficient ring give the unique zero class. These definitions and their well-definedness use no AC.

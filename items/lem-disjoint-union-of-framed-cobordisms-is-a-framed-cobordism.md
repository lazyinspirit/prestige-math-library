---
id: lem-disjoint-union-of-framed-cobordisms-is-a-framed-cobordism
kind: lemma
title: "Disjoint unions of framed cobordisms"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 2
deps: [def-framed-cobordism-of-embedded-submanifolds,
       def-framing-of-a-normal-bundle,
       def-neat-submanifold-of-a-manifold-with-boundary,
       def-smooth-embedding,
       def-smooth-manifold,
       def-compact-space,
       def-diffeomorphism-and-local-diffeomorphism-of-manifolds,
       def-countable-choice,
       thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: https://people.math.harvard.edu/~dafr/bordism.pdf
      locator: "Definition 1.19 and (2.31)-(2.32): bordism is a relation on descending data and classes are taken under disjoint union, printed pp.8-9, 20-21"
    - title: "John Milnor, Topology from the Differentiable Viewpoint"
      url: https://people.math.osu.edu/davis.12/courses/7851/milnortop.pdf
      locator: "Section 7, framed cobordism with product collars, printed pp.42-43; the union operation requires additional range hypotheses, printed p.50"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $M$ be a closed smooth manifold and $k\ge0$.
Let $(W_N,\varepsilon_N,\Psi_N)$ and $(W_L,\varepsilon_L,\Psi_L)$ be framed
codimension-$k$ cobordisms in $M\times I$, from $(N_0,\varphi_0)$ to
$(N_1,\varphi_1)$ and from $(L_0,\psi_0)$ to $(L_1,\psi_1)$, respectively.
If their images are disjoint, then their union, with the combined framing
and collar width $\min(\varepsilon_N,\varepsilon_L)$, is a framed cobordism
from $(N_0\sqcup L_0,\varphi_0\sqcup\psi_0)$ to
$(N_1\sqcup L_1,\varphi_1\sqcup\psi_1)$.

Disjoint endpoint sets alone do not assert disjointness of the cobordisms.
This lemma does not assert that arbitrary embedded framed cobordism classes
in a fixed $M$ form a monoid. For finite disjoint sets of framed points,
cardinality modulo two is additive, and, when $M$ is oriented, the sum of
framing signs is additive.

## Facts & Assumptions

**Given:** Two framed cobordisms as above with $W_N\cap W_L=\varnothing$.

[F1] A framed cobordism is a compact neat embedded submanifold with literal product ends of width $0<\varepsilon<1/2$ and a normal-quotient framing equal to the specified endpoint framing throughout each collar ([[def-framed-cobordism-of-embedded-submanifolds]], [[def-framing-of-a-normal-bundle]], [[def-neat-submanifold-of-a-manifold-with-boundary]]).

[F2] The ambient smooth manifold is Hausdorff; compact subsets are closed, and a finite union of compact sets is compact. Embeddedness and smoothness are local properties ([[def-smooth-manifold]], [[def-compact-space]], [[def-smooth-embedding]], [[thm-compact-subset-of-a-hausdorff-space-is-closed]]).

## Proof

**Proof technique:** direct.

1.1 Each of $W_N,W_L$ is closed by compactness and the Hausdorff property. Thus every point of either has an ambient neighbourhood missing the other. On that neighbourhood $W=W_N\cup W_L$ is exactly the corresponding neat embedded submanifold. Therefore $W$ is a compact neat embedded submanifold, with boundary $(N_0\sqcup L_0)\times\{0\}\sqcup(N_1\sqcup L_1)\times\{1\}$. The normal quotient restricts on each open-and-closed piece to its original normal quotient. [F1, F2, given]

2.1 Set $\varepsilon=\min(\varepsilon_N,\varepsilon_L)\in(0,1/2)$. The product ends of the two pieces give product ends of $W$ with this width. Their framings paste smoothly on its disjoint open-and-closed pieces and restrict to the combined endpoint framings throughout those collars. Hence $(W,\varepsilon,\Psi_N\sqcup\Psi_L)$ is the asserted framed cobordism. For disjoint finite sets, summing one per point, or the orientation sign per point, splits into the sums over the two sets; reducing cardinalities modulo two gives parity additivity. This includes either set being empty and rank-zero cobordisms. [F1, step 1.1, algebra] ∎

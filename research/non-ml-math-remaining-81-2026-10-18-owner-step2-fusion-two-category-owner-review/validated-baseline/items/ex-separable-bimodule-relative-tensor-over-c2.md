---
id: ex-separable-bimodule-relative-tensor-over-c2
kind: example
title: Relative tensor products of bimodules over C times C
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - thm-separable-bimodule-relative-tensor-is-associative
  - def-separable-algebra-and-bimodule-in-fusion-category
  - def-fusion-and-multifusion-category
  - def-braided-monoidal-category
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, Construction 2.1.19
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Example

Work in the braided fusion category $\mathrm{Vec}_{\mathbb C}$ of finite-dimensional complex vector spaces, with ordinary tensor product and flip braiding. Let $R=\mathbb C\times\mathbb C$ with orthogonal idempotents $e_1,e_2$. For $i,j\in\{1,2\}$ let $M_{ij}=\mathbb C$ with left action through the $i$th coordinate and right action through the $j$th coordinate.

## Facts & Assumptions


**Given:** The separability-projector and relative-tensor construction of [[thm-separable-bimodule-relative-tensor-is-associative]].

[F1] [[def-separable-algebra-and-bimodule-in-fusion-category]]: The regular $R$-$R$ bimodule is the unit for relative tensor composition, and balancing identifies the right action on the first factor with the left action on the second.

[F2] [[def-fusion-and-multifusion-category]]: A fusion category is finite semisimple, rigid, and has simple tensor unit.

[F3] [[def-braided-monoidal-category]]: A braiding is a natural family of invertible crossings satisfying the two hexagon identities.

## Verification

1.1 Finite-dimensional complex vector spaces form a finite semisimple category, their tensor unit $\mathbb C$ is simple, and vector-space duals give rigidity; thus they satisfy the fusion conditions in [F2]. The flip $v\otimes w\mapsto w\otimes v$ is natural and invertible, and on triples both hexagon composites perform the same adjacent transpositions to reverse the order past one tensor factor; hence it is a braiding as in [F3]. The element $E=e_1\otimes e_1+e_2\otimes e_2$ satisfies $m_R(E)=e_1+e_2=1_R$ and $rE=Er$ for every $r\in R$, so it is a separability idempotent. On $M_{ij}\otimes M_{kl}\cong\mathbb C$, the projector $\sum_{s=1}^2(r_{e_s}\otimes l_{e_s})$ acts by the scalar $\sum_s\delta_{j,s}\delta_{k,s}$; this is $1$ when $j=k$ and $0$ when $j\ne k$. By the image description, $M_{ij}\otimes_R M_{kl}\cong\begin{cases}M_{il},&j=k,\\0,&j\ne k.\end{cases}$ [F1, F2, F3, given, algebra]

2.1 Applying the rule twice gives $(M_{ij}\otimes_R M_{kl})\otimes_R M_{mn}\cong\delta_{j,k}\delta_{l,m}M_{in}\cong M_{ij}\otimes_R(M_{kl}\otimes_R M_{mn}),$ where $\delta_{u,v}$ is $1$ if $u=v$ and $0$ otherwise. The regular bimodule decomposes as $R=M_{11}\oplus M_{22}$ and acts as a unit on every $M_{ij}$. These explicit products verify the associativity and unit rules in this finite split-semisimple example. [F1, step 1.1, algebra] ∎

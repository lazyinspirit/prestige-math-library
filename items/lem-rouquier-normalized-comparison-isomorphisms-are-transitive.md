---
id: lem-rouquier-normalized-comparison-isomorphisms-are-transitive
kind: lemma
title: "Normalized comparison isomorphisms are transitive"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
deps: [lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps, def-rouquier-canonical-comparisons-between-standard-graph-tensors, def-rouquier-complex-of-a-braid-word]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.3.1, the transitive system $\\gamma_{t,u}$ before $G_v$, arXiv p. 10"
verification:
  precheck: pass
---

## Statement

Let $t,u,w$ be signed words representing the same braid. Then
$$\gamma_{u,w}\circ\gamma_{t,u}=\gamma_{t,w}\qquad\text{in }\operatorname{Hom}_{K^b}(F(t),F(w))=\mathbb Q\cdot[\gamma_{t,w}].$$
In particular $\gamma_{t,t}=\mathrm{id}$ and $\gamma_{u,t}\gamma_{t,u}=\mathrm{id}$,
so the maps $\gamma$ form a transitive system of homotopy equivalences between
the word complexes of a fixed braid; consequently the multiplication
comparisons of the next theorem are well defined on chosen representatives.

## Facts & Assumptions

**Given:** Signed words $t,u,w$ with the same product, the word complexes $F(t),F(u),F(w)$ of [[def-rouquier-complex-of-a-braid-word]], and the normalized maps $\gamma_{t,u},\gamma_{u,w},\gamma_{t,w}$ of [[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]].

[F1] *Uniqueness.* For words $a,b$ with the same product, $\operatorname{Hom}_{K^b}(F(a),F(b))$ is one-dimensional in internal degree $0$, the localization map to $\operatorname{Hom}_{D^b}$ is an isomorphism, and $\gamma_{a,b}$ is the unique homotopy class whose derived image is the comparison $c_{a,b}$ of the graph models. ([[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]])

[F2] *Transitivity of the comparisons.* The derived comparisons satisfy $c_{u,w}c_{t,u}=c_{t,w}$ and $c_{t,t}=\mathrm{id}$; they are the multiplication isomorphisms of the words through the standard graph bimodules. ([[def-rouquier-canonical-comparisons-between-standard-graph-tensors]])

## Proof

**Proof technique:** direct.

1.1 The composite $\gamma_{u,w}\circ\gamma_{t,u}$ is an element of $\operatorname{Hom}_{K^b}(F(t),F(w))$, which by [F1] is one-dimensional in internal degree $0$; its derived image is $c_{u,w}c_{t,u}$ because localization is a functor on the homotopy categories in which the $\gamma$ become isomorphisms. [F1]

2.1 By [F2] $c_{u,w}c_{t,u}=c_{t,w}$, which is the derived image of $\gamma_{t,w}$ by [F1]; two elements of the one-dimensional space with the same nonzero derived image coincide, so $\gamma_{u,w}\gamma_{t,u}=\gamma_{t,w}$. [F1, F2, step 1.1]

3.1 Taking $u=t=w$ and using $c_{t,t}=\mathrm{id}$ gives $\gamma_{t,t}=\mathrm{id}$ by the same uniqueness argument; then $\gamma_{t,u}$ and $\gamma_{u,t}$ are mutually inverse homotopy equivalences because both composites equal the corresponding identity maps, and the identity is the unique degree-zero endomorphism class whose derived image is the normalized identity comparison. [F1, F2, step 2.1] ∎ 
---
id: ex-normalized-comparison-maps-around-a-relation-loop
kind: example
title: "Normalized comparison maps around a relation loop"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [def-braid-group-by-the-artin-presentation, lem-rouquier-normalized-comparison-isomorphisms-are-transitive, lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps, def-rouquier-canonical-comparisons-between-standard-graph-tensors]
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
      locator: "§3.3.1, the transitive system $\\gamma_{t,u}$ before Theorem 3.5, arXiv p. 10"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Take the braid $v=\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2\in B_3$ and
three signed words representing it, for instance $t=(1,2,1)$ and $w=(2,1,2)$,
together with the word $u=(1,2,1,2,2^{-1})$ obtained from $t$ by appending a
cancelling pair; the three normalized maps $\gamma_{t,u},\gamma_{u,w},\gamma_{t,w}$
form a loop in the expression graph, and the example verifies
$$\gamma_{u,w}\circ\gamma_{t,u}=\gamma_{t,w}$$
by computing the three derived images $c_{t,u},c_{u,w},c_{t,w}$ and checking
$c_{u,w}c_{t,u}=c_{t,w}$ in
$\operatorname{Hom}_{D^b}(R_{\pi(v)}(-3),R_{\pi(v)}(-3))=\mathbb Q\cdot\mathrm{id}$. Here $\pi(v)=s_1s_2s_1\in S_3$ is the permutation projection and the
common internal shift is $(-3)$, since every word has signed exponent $3$.
The two comparison composites are displayed and each has its unique
normalized degree-zero lift.

## Facts & Assumptions

**Given:** The three signed words $t=(1,2,1)$, $u=(1,2,1,2,2^{-1})$, $w=(2,1,2)$ of $B_3$, their word complexes, and the normalized maps $\gamma$ and derived comparisons $c$ of [[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]] and [[def-rouquier-canonical-comparisons-between-standard-graph-tensors]].

[F1] *Same braid.* $t$, $u$ and $w$ all represent the braid $v=\sigma_1\sigma_2\sigma_1=\sigma_2\sigma_1\sigma_2$; $u$ is obtained from $t$ by adjoining the letters $\sigma_2\sigma_2^{-1}$, whose product is the identity, so the product of $u$ is $v$; the equality $t=w$ is an Artin relation ([[def-braid-group-by-the-artin-presentation]]). The graph word tensors use their permutation projections and the comparison system of [[def-rouquier-canonical-comparisons-between-standard-graph-tensors]].

[F2] *Uniqueness and dimension.* For any two of these words, the homotopy Hom space is one-dimensional in internal degree $0$ and the homotopy comparison is the unique element lifting the derived map $c$. ([[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]])

[F3] *Transitivity.* $\gamma_{u,w}\gamma_{t,u}=\gamma_{t,w}$ and, in the derived category, $c_{u,w}c_{t,u}=c_{t,w}$. ([[lem-rouquier-normalized-comparison-isomorphisms-are-transitive]], [[def-rouquier-canonical-comparisons-between-standard-graph-tensors]])

## Verification

**Proof technique:** direct.

1.1 The three words represent the same braid by [F1], so the three maps $\gamma_{t,u},\gamma_{u,w},\gamma_{t,w}$ are defined as elements of one-dimensional degree-zero homotopy Hom spaces; their derived images are the comparisons $c_{t,u},c_{u,w},c_{t,w}$, each obtained by composing the multiplication maps from the shifted graph word tensors through $R_{\pi(v)}(-3)$. [F1, F2]

2.1 Let $M_t,M_u,M_w$ be the three tensor graph models and $\mu_a:M_a\to R_{\pi(v)}(-3)$ their iterated multiplication maps, with shifts adding to $(-3)$. The cancelling pair in $u$ contributes $R_{s_2}(-1)\otimes_RR_{s_2}(1)\cong R$, by $b\otimes c\mapsto b\,s_2(c)$, and its inverse sends $1\mapsto1\otimes1$. Thus the typed comparisons are $c_{t,u}=\mu_u^{-1}\mu_t:M_t\to M_u$, $c_{u,w}=\mu_w^{-1}\mu_u:M_u\to M_w$ and $c_{t,w}=\mu_w^{-1}\mu_t:M_t\to M_w$. In particular $$c_{u,w}c_{t,u}=\mu_w^{-1}\mu_u\mu_u^{-1}\mu_t=\mu_w^{-1}\mu_t=c_{t,w},\qquad c_{w,t}c_{t,w}=\mu_t^{-1}\mu_w\mu_w^{-1}\mu_t=1_{M_t}.$$ Transporting each comparison by its source and target multiplication maps gives the identity of the common graph model. [F1, F2, F3, step 1.1, algebra]

3.1 Since $c_{u,w}c_{t,u}=c_{t,w}$ by step 2.1 and the derived images of the two sides of the claim are these comparisons, and since the homotopy Hom space is one-dimensional in degree $0$ by [F2], the composite $\gamma_{u,w}\gamma_{t,u}$ has the same derived image as $\gamma_{t,w}$ and therefore coincides with it. The two displayed composites therefore have the asserted unique normalized degree-zero lifts. [F2, F3, step 2.1] ∎


## Remarks

The loop is nondegenerate: the three words are pairwise distinct, and $u$ differs from $t$ by a cancelling pair rather than being equal to it, so the composites displayed are computed by nontrivial comparisons. The identity obtained after transporting $c_{t,u}$ to the common graph model and the typed equality $c_{u,w}c_{t,u}=c_{t,w}$ are the worked special case of the comparison system's transitivity.

---
id: def-pontryagin-dual-and-compact-open-topology
kind: definition
title: "The Pontryagin dual with the compact-open topology"
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-topological-group
- def-compact-open-topology-for-topological-domains
- def-group-homomorphism
- def-continuous-map-top
- def-subspace-topology-top
justified_by: [lem-compact-open-character-group-operations-are-continuous]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: "Dikran D. Dikranjan, Introduction to Topological Groups (author lecture notes, Universita di Udine / Universidad Complutense de Madrid, 2007)"
    url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
    locator: "Section 7.1 (printed pp. 46-47): G* = Hom(G,T), the subgroup Ĝ of continuous characters, the sets W(K,U) = {χ : χ(K) ⊆ U}, and the compact-open topology; the additive circle notation there is translated into the multiplicative circle here."
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand 1953, Chapter VII, Sections 34-35 (printed pp. 134-140)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
    locator: "Section 34 introduction, printed pp. 134-135: modulus-one characters; Section 34C, printed p. 137: compact uniform convergence; Section 34D, printed pp. 137-138: pointwise group operations."
status: published
origin: pipeline
---
## Definition

Let $G$ be an abelian topological group ([[def-topological-group]]) written
additively, and let $\mathbb T=\{z\in\mathbb C:|z|=1\}$ be the multiplicative
unit circle ([[lem-unit-circle-is-a-compact-metrizable-topological-group]]).

A **character** of $G$ is a continuous group homomorphism
$\gamma:G\to\mathbb T$ ([[def-group-homomorphism]],
[[def-continuous-map-top]]). The **Pontryagin dual** of $G$ is
$$\widehat G:=\operatorname{Hom}_{cts}(G,\mathbb T):=\{\gamma:G\to\mathbb T:\gamma\text{ is a continuous group homomorphism}\},$$
the set of characters, equipped with:

1. **Pointwise multiplication.** For $\gamma_1,\gamma_2\in\widehat G$ the
   product is $(\gamma_1\gamma_2)(x):=\gamma_1(x)\gamma_2(x)$ for every
   $x\in G$, with the constant character $x\mapsto1$ as its identity and
   $x\mapsto\gamma(x)^{-1}$ as the inverse of $\gamma$. With these operations
   the set of characters is a group, and it is abelian; this and the continuity
   of the two operations are proved in the next item, so no separate
   well-definedness obligation is left open here.
2. **Compact-open topology.** The topology is the compact-open topology
   inherited from $C(G,\mathbb T)$ ([[def-compact-open-topology-for-topological-domains]]),
   that is the subspace topology ([[def-subspace-topology-top]]) for the
   subbasis
   $$S(K,V):=\{\gamma\in\widehat G:\gamma[K]\subseteq V\},\qquad K\subseteq G\text{ compact},\ V\subseteq\mathbb T\text{ open}.$$

The **evaluation pairing** is written
$$\langle x,\gamma\rangle:=\gamma(x)\in\mathbb T,\qquad x\in G,\ \gamma\in\widehat G .$$

The dual is written multiplicatively, so products of characters are written
$\gamma_1\gamma_2$ and the identity is written $1$. Through the topological
group isomorphism $\varepsilon:\mathbb R/\mathbb Z\to\mathbb T$ of
[[lem-unit-circle-is-a-compact-metrizable-topological-group]], characters may
equivalently be viewed as continuous homomorphisms into the published circle
$\mathbb R/\mathbb Z$; all statements below use the multiplicative circle
$\mathbb T$ and the compact-open subbasis displayed above.

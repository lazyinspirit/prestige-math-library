---
id: lem-pointwise-limits-of-characters-are-characters
kind: lemma
title: Pointwise limits of homomorphisms and of equicontinuous characters
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-pointwise-closure-preserves-equicontinuity
- def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness
- def-topology-of-pointwise-convergence
- def-product-topology
- def-standard-topologies
- def-generated-subgroup
- thm-closure-characterised-by-nets
- def-directed-set-and-net
- thm-product-universal-property
- lem-continuity-is-local-and-pastes
- thm-metric-hausdorff-separation
- def-hausdorff-space
- lem-compact-open-topology-on-a-discrete-domain-is-pointwise
- def-continuous-map-top
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
  - title: Dikran D. Dikranjan, Introduction to Topological Groups (author lecture
      notes, Universita di Udine / Universidad Complutense de Madrid, 2007)
    url: http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf
    locator: Section 7.1 (printed p. 47), Theorem 7.2(e) and the closedness of the
      set of characters used in Example 7.1(2); the multiplicative form of the closedness
      argument.
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand
      1953, Chapter VII, Sections 34-35 (printed pp. 134-140)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: "Sections 34C-34D give the dual-topology background; closedness in the pointwise product and the equicontinuity argument are proved here."
status: draft
origin: pipeline
proof_strategy: direct
---
## Statement

(1) Let $G$ be a group, written additively. A pointwise limit of group homomorphisms $G\to\mathbb T$ is a homomorphism;
precisely, $\operatorname{Hom}(G,\mathbb T)$ is closed in $\mathbb T^{G}$ for
the topology of pointwise convergence
([[def-topology-of-pointwise-convergence]],
[[def-product-topology]]). (2) For an abelian topological group $G$, if a pointwise limit of continuous homomorphisms
is taken along an equicontinuous family, then the limit is continuous, hence a
character. (3) If the abelian topological group $G$ is discrete
([[def-standard-topologies]]), then
$\widehat G=\operatorname{Hom}(G,\mathbb T)$ is closed in $\mathbb T^{G}$ for
the product topology.

## Facts & Assumptions

[F1] Multiplication in $\mathbb T$ is continuous. $\mathbb T^{G}$ is the product of the constant family with one factor $\mathbb T$ per $x\in G$; a map into a product is continuous exactly when all its components are, and the projection $f\mapsto f(x)$ is continuous for every $x$. ([[def-product-topology]], [[thm-product-universal-property]], [[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[lem-continuity-is-local-and-pastes]])

[F2] $\mathbb T$ is Hausdorff, and the diagonal $\Delta=\{(z,z):z\in\mathbb T\}$ is closed in $\mathbb T\times\mathbb T$: if $z\ne w$, disjoint open neighbourhoods of $z$ and $w$ give an open rectangle around $(z,w)$ missing $\Delta$. ([[def-hausdorff-space]], [[thm-metric-hausdorff-separation]], [[def-product-topology]])

[F3] A point lies in the closure of a set exactly when some net in the set converges to it. ([[thm-closure-characterised-by-nets]], [[def-directed-set-and-net]])

[F4] The closure in $Y^{X}$ with the topology of pointwise convergence of an equicontinuous family $\mathcal F\subseteq C(X,Y)$ into a metric space $Y$ is equicontinuous, and every member of that closure is continuous; the topology of pointwise convergence on $C(X,Y)$ is the subspace topology inherited from $Y^{X}$. ([[lem-pointwise-closure-preserves-equicontinuity]], [[def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness]], [[def-topology-of-pointwise-convergence]])

[F5] A discrete topology makes every subset open, and continuity means that for each point and open neighbourhood of its image there is an open source neighbourhood mapped into it. ([[def-standard-topologies]], [[def-continuous-map-top]])

[F6] The dual consists of the continuous homomorphisms $G\to\mathbb T$ with the compact-open topology, and the compact-open topology on a discrete domain agrees with the topology of pointwise convergence, i.e. with the subspace topology from $\mathbb T^{G}$. ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]])

## Proof

**Given:** A group $G$, the product space $\mathbb T^{G}$ with the topology of pointwise convergence, and the set $\operatorname{Hom}(G,\mathbb T)$ of all group homomorphisms $G\to\mathbb T$.

1.1 $\operatorname{Hom}(G,\mathbb T)$ is closed in $\mathbb T^{G}$: it is the intersection over all $x,y\in G$ of the sets $E_{x,y}:=\{f:f(x+y)=f(x)f(y)\}$, and each $E_{x,y}$ is the preimage of the diagonal $\Delta\subseteq\mathbb T\times\mathbb T$ under the map $\varphi_{x,y}(f):=\big(f(x+y),f(x)f(y)\big)$, which is continuous because both components are continuous by [F1]; preimages of the closed set $\Delta$ under continuous maps are closed by [F2], and arbitrary intersections of closed sets are closed. [F1, F2]

2.1 Consequently a pointwise limit of group homomorphisms is a homomorphism: if a net $(\gamma_{j})$ in $\operatorname{Hom}(G,\mathbb T)$ converges pointwise to $\gamma$, then $\gamma$ lies in the closure of $\operatorname{Hom}(G,\mathbb T)$ by [F3], and that closure equals the closed set $\operatorname{Hom}(G,\mathbb T)$ by step 1.1, so $\gamma$ is a homomorphism. [step 1.1, F3]

2.2 If $G$ is discrete, then for any map $f:G\to\mathbb T$, point $x\in G$ and open set $V$ containing $f(x)$, the preimage $f^{-1}[V]$ is a subset of $G$, hence open and contains $x$; it maps into $V$, so the continuity definition [F5] makes $f$ continuous at every $x$. Thus every map $G\to\mathbb T$ is continuous, so the continuous characters are exactly the homomorphisms, $\widehat G=\operatorname{Hom}(G,\mathbb T)$, and this set is closed in $\mathbb T^{G}$ by step 1.1; by [F6] the compact-open topology on $\widehat G$ is its subspace topology from $\mathbb T^{G}$, so $\widehat G$ is a closed subset of $\mathbb T^{G}$ as asserted. [step 1.1, F5, F6]

3.1 If the homomorphisms $\gamma_{j}$ above are continuous and the family $\{\gamma_{j}\}$ is equicontinuous, then $\gamma$ is continuous: the family lies in $C(G,\mathbb T)$, its pointwise closure is equicontinuous and consists of continuous functions by [F4], and $\gamma$ belongs to that closure. [step 2.1, F4]

4.1 Clauses (1), (2) and (3) of the statement are steps 2.1, 3.1 and 2.2 respectively. [step 2.1, step 3.1, step 2.2] ∎

---
id: ex-pontryagin-dual-of-the-integers-is-the-circle
kind: example
title: The Pontryagin dual of $\mathbb Z$ is the circle
deps:
- lem-unit-circle-is-a-compact-metrizable-topological-group
- lem-compact-open-topology-on-a-discrete-domain-is-pointwise
- def-pontryagin-dual-and-compact-open-topology
- thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals
- def-integers
- def-standard-topologies
- def-group-homomorphism
- lem-group-power-laws
- def-product-topology
- def-subspace-topology-top
- def-continuous-map-top
- def-topology-of-pointwise-convergence
- def-homeomorphism-and-open-maps
- def-complex-integer-powers
- thm-complex-numbers-form-a-field
- thm-product-universal-property
- lem-continuity-is-local-and-pastes
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
    locator: 'Section 7.2 (printed pp. 48-49), Example 7.7: the dual of the discrete
      group Z is the circle.'
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand
      1953, Chapter VII, Sections 34-35 (printed pp. 134-140)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: "Section 35E, printed p. 140: the dual of the integer group is the circle."
status: draft
origin: pipeline
proof_strategy: direct
---
## Example

The dual of the discrete additive group $\mathbb Z$
([[def-integers]], [[def-standard-topologies]]) is canonically isomorphic to
the multiplicative unit circle ([[lem-unit-circle-is-a-compact-metrizable-topological-group]]):
the map $z\mapsto\gamma_{z}$ with $\gamma_{z}(n):=z^{n}$ is an isomorphism of
topological groups $\mathbb T\to\widehat{\mathbb Z}$. Under the identification
$\mathbb T\cong\mathbb R/\mathbb Z$ this reads
$\widehat{\mathbb Z}\cong\mathbb R/\mathbb Z$.

## Facts & Assumptions

[F1] The dual $\widehat G$ consists of the continuous homomorphisms $G\to\mathbb T$ with pointwise multiplication and the compact-open topology; on a discrete domain the compact-open topology is the topology of pointwise convergence, i.e. the subspace topology from $\mathbb T^{G}$. ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]], [[def-topology-of-pointwise-convergence]], [[def-subspace-topology-top]])

[F2] $\mathbb Z$ is discrete, so every function on $\mathbb Z$ is continuous; integer powers in a group satisfy $z^{m+n}=z^{m}z^{n}$ and $z^{-n}=(z^{n})^{-1}$ for $z\ne0$, and $(zw)^{n}=z^{n}w^{n}$ in an abelian group. ([[def-standard-topologies]], [[def-continuous-map-top]], [[lem-group-power-laws]], [[def-complex-integer-powers]], [[def-group-homomorphism]])

[F3] $\mathbb T$ is a topological abelian group, so $z\mapsto z^{n}$ is continuous on $\mathbb T$ for every $n$; a map into a product is continuous exactly when its components are, and composites of continuous maps are continuous. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[thm-product-universal-property]], [[lem-continuity-is-local-and-pastes]])

[F4] A bijective continuous homomorphism with continuous inverse is an isomorphism of topological groups. ([[def-homeomorphism-and-open-maps]])

## Verification

**Given:** The discrete additive group $\mathbb Z$, the unit circle $\mathbb T$, and the map $\Psi(z):=\gamma_{z}$ with $\gamma_{z}(n)=z^{n}$.

1.1 For each $z\in\mathbb T$ the map $\gamma_{z}:\mathbb Z\to\mathbb T$, $\gamma_{z}(n)=z^{n}$, is a character: it is a homomorphism by the power laws $\gamma_{z}(m+n)=z^{m+n}=z^{m}z^{n}$ of [F2], and it is continuous because for every open $V\subseteq\mathbb T$, $\gamma_z^{-1}[V]$ is a subset of the discrete source $\mathbb Z$, hence open; at each point mapped into $V$ it is the source neighbourhood required by [F2]. [F1, F2]

1.2 The inverse $\gamma\mapsto\gamma(1)$ is continuous: it is the restriction to the subspace $\widehat{\mathbb Z}$ of the projection $\pi_{1}:\mathbb T^{\mathbb Z}\to\mathbb T$, which is continuous for the product topology by [F3], and a restriction of a continuous map to a subspace is continuous by the characteristic property of the subspace topology [F1]. [F1, F3]

2.1 $\Psi$ is a bijective group homomorphism: it is a homomorphism because $\gamma_{zw}(n)=(zw)^{n}=z^{n}w^{n}=(\gamma_{z}\gamma_{w})(n)$ by [F2]; it is injective because $\gamma_{z}(1)=z$ recovers $z$; and it is surjective because a homomorphism $\gamma$ determines $z:=\gamma(1)$ and then $\gamma(n)=z^{n}$ for $n\ge0$ by induction and $\gamma(n)=\gamma(-n)^{-1}=z^{n}$ for $n<0$ by the power laws of [F2], so $\gamma=\gamma_{z}$. [step 1.1, F2]

2.2 $\Psi$ is continuous: the codomain carries the subspace topology from $\mathbb T^{\mathbb Z}$ by [F1], so by the characteristic property of the subspace it suffices that $z\mapsto(z^{n})_{n\in\mathbb Z}$ is continuous into $\mathbb T^{\mathbb Z}$, and by [F3] it suffices that each component $z\mapsto z^{n}$ is continuous, which holds because $\mathbb T$ is a topological group by [F3]. [step 1.1, F1, F3]

3.1 By steps 1.1, 1.2, 2.1 and 2.2 the map $\Psi$ is a continuous bijective homomorphism with continuous inverse, hence an isomorphism of topological groups $\mathbb T\to\widehat{\mathbb Z}$ by [F4]; composing with the topological group isomorphism $\mathbb R/\mathbb Z\to\mathbb T$ gives $\widehat{\mathbb Z}\cong\mathbb R/\mathbb Z$. [step 1.1, step 1.2, step 2.1, step 2.2, F4] ∎

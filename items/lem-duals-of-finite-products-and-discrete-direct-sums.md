---
id: lem-duals-of-finite-products-and-discrete-direct-sums
kind: lemma
title: Duals of finite products and of discrete direct sums
deps:
- def-pontryagin-dual-and-compact-open-topology
- lem-compact-open-character-group-operations-are-continuous
- thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals
- lem-dual-homomorphisms-are-continuous-and-functorial
- lem-compact-open-topology-on-a-discrete-domain-is-pointwise
- lem-unit-circle-is-a-compact-metrizable-topological-group
- def-external-direct-product-of-groups
- def-direct-sum-of-a-family-of-modules
- thm-product-universal-property
- thm-finite-products-of-compact-spaces
- thm-tychonoff
- thm-closed-subspace-of-a-compact-space-is-compact
- def-product-topology
- def-standard-topologies
- def-subspace-topology-top
- def-topological-group
- def-homeomorphism-and-open-maps
- thm-compactness-under-continuous-maps
- def-axiom-of-choice
- lem-continuity-is-local-and-pastes
- def-neighbourhood-top
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
    locator: 'Section 7.3 (printed pp. 50-52), Lemma 7.12 and Theorem 7.14: the dual
      of a finite product and the dual of a discrete direct sum.'
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand
      1953, Chapter VII, Sections 34-35 (printed pp. 134-140)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 35A: the dual of a finite product of LCA groups is the product
      of the duals.'
status: published
origin: pipeline
proof_strategy: direct
---
## Statement

(1) For locally compact Hausdorff abelian groups $G_{1},\dots,G_{n}$ the map
$$\Phi:\widehat{G_{1}}\times\cdots\times\widehat{G_{n}}\to\widehat{G_{1}\times\cdots\times G_{n}},\qquad \Phi(\gamma_{1},\dots,\gamma_{n})\big((x_{1},\dots,x_{n})\big):=\prod_{j}\gamma_{j}(x_{j}),$$
is an isomorphism of topological groups for the product topologies (choice-free,
finite $n$). (2) If $(G_{i})_{i\in I}$ is a family of discrete abelian groups and
$G=\bigoplus_{i}G_{i}$ is their algebraic direct sum equipped with the discrete
topology ([[def-direct-sum-of-a-family-of-modules]]), then, assuming the Axiom
of Choice ([[def-axiom-of-choice]]), $\widehat G$ is topologically isomorphic to
the product $\prod_{i}\widehat{G_{i}}$ with the product topology. No claim is
made here about a direct sum carrying the subspace topology of the product of
non-discrete factors.

## Facts & Assumptions

[F1] A finite product $H_{1}\times\cdots\times H_{n}$ of topological groups with the product topology is a topological group: multiplication and inversion are continuous because each component is a composite of projections, which are continuous, with the continuous operations of the factors, and a map into a product is continuous exactly when its components are. ([[def-product-topology]], [[thm-product-universal-property]], [[def-topological-group]], [[lem-continuity-is-local-and-pastes]])

[F2] The dual of an abelian topological group is a Hausdorff topological abelian group; the dual of a discrete abelian group is compact. ([[lem-compact-open-character-group-operations-are-continuous]], [[thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals]])

[F3] Pullback along a continuous homomorphism is a continuous homomorphism of duals; on a discrete domain the compact-open topology is the topology of pointwise convergence, i.e. the subspace topology from the product. ([[lem-dual-homomorphisms-are-continuous-and-functorial]], [[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]], [[def-standard-topologies]], [[def-continuous-map-top]])

[F4] Tychonoff's theorem (Choice) makes arbitrary products of compact spaces compact, finite products of compact spaces are compact, and a continuous bijection from a compact space onto a Hausdorff space is a homeomorphism. ([[thm-tychonoff]], [[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]], [[def-homeomorphism-and-open-maps]], [[def-axiom-of-choice]])

[F5] In $\mathbb T$ multiplication is continuous and $1$ has an open neighbourhood basis; the finite product of open sets containing $1$ contains an open neighbourhood of $(1,\dots,1)$ and the product of $n$ factors all lying in an open neighbourhood $W$ of $1$ lies in $W$ whenever they lie in a suitable smaller open neighbourhood. ([[lem-unit-circle-is-a-compact-metrizable-topological-group]], [[def-neighbourhood-top]])

## Proof

**Given:** Locally compact Hausdorff abelian groups $G_{1},\dots,G_{n}$, and a family $(G_{i})_{i\in I}$ of discrete abelian groups.

1.1 Part (1), the map $\Phi$ is a bijective group homomorphism: it is a homomorphism because both sides multiply pointwise, $\Phi(\gamma_{1}\gamma_{1}',\dots,\gamma_{n}\gamma_{n}')(x)=\prod_{j}\gamma_{j}(x_{j})\gamma_{j}'(x_{j})=\big(\Phi(\gamma)\Phi(\gamma')\big)(x)$; it is injective because $\gamma_{j}$ is recovered from $\chi=\Phi(\gamma)$ by restricting $\chi$ to the $j$-th coordinate axis, and it is surjective because every character $\chi$ of the product gives characters $\gamma_{j}(x_{j}):=\chi(0,\dots,0,x_{j},0,\dots,0)$ with $\chi(x)=\prod_{j}\gamma_{j}(x_{j})$ for every $x$, by multiplicativity of $\chi$ and the decomposition of $x$ into its coordinate vectors; $\gamma_{j}$ is a continuous homomorphism because the coordinate inclusion $x_{j}\mapsto(0,\dots,x_{j},\dots,0)$ is continuous. [F1, algebra]

1.2 Part (2), the restriction map: let $G=\bigoplus_{i}G_{i}$ carry the discrete topology and let $\iota_{i}:G_{i}\to G$ be the coordinate inclusion, a homomorphism and continuous because its source $G_i$ is discrete: every open target set has an open preimage, as every subset of $G_i$ is open. The map $\rho:\widehat G\to\prod_{i}\widehat{G_{i}}$, $\rho(\chi):=(\chi\circ\iota_{i})_{i}$, is a group homomorphism, and it is bijective: injective because a homomorphism on the direct sum is determined by its values on the summands, and surjective because for any family $(\gamma_{i})$ the formula $\chi(x):=\prod_{i}\gamma_{i}(x_{i})$ is a finite product over the support of $x$, is a homomorphism, is continuous because every open target set has an open preimage in the discrete source $G$, and satisfies $\chi\circ\iota_{i}=\gamma_{i}$. [F3]

2.1 Part (1), $\Phi$ is continuous at the identity: let $K\subseteq G_{1}\times\cdots\times G_{n}$ be compact and $W\subseteq\mathbb T$ open with $1\in W$; the projections $K_{j}:=\pi_{j}[K]$ are compact, and by [F5] choose an open neighbourhood $V$ of $1$ with $V^{n}\subseteq W$, so that whenever $\gamma_{j}[K_{j}]\subseteq V$ for all $j$ and $x\in K$ one has $\prod_{j}\gamma_{j}(x_{j})\in V^{n}\subseteq W$. Hence $\Phi\big(S(K_{1},V)\times\cdots\times S(K_{n},V)\big)\subseteq S(K,W)$, and the product is an open neighbourhood of the identity of $\widehat{G_{1}}\times\cdots\times\widehat{G_{n}}$ by [F1] and [F2]; since $\Phi$ is a homomorphism of topological groups and translations are homeomorphisms, continuity at the identity gives continuity everywhere. [step 1.1, F1, F2, F5]

2.2 $\rho$ is continuous: each component $\chi\mapsto\chi\circ\iota_{i}$ is the pullback along the continuous homomorphism $\iota_{i}$, hence continuous by [F3]; a map into the product $\prod_{i}\widehat{G_{i}}$ is continuous exactly when all its components are. [step 1.2, F3]

3.1 Part (1), $\Phi^{-1}$ is continuous at the identity: let $K_{j}\subseteq G_{j}$ be compact and $U_{j}\subseteq\mathbb T$ open with $1\in U_{j}$, and put $K:=(K_{1}\cup\{0\})\times\cdots\times(K_{n}\cup\{0\})$, a compact subset of the product; if $\chi\in S(K,\bigcap_{j}U_{j})$ and $\gamma_{j}(x_{j}):=\chi(0,\dots,x_{j},\dots,0)$ for $x_{j}\in K_{j}$, then $\gamma_{j}(x_{j})\in\bigcap_{j}U_{j}\subseteq U_{j}$, so $\Phi^{-1}(\chi)\in S(K_{1},U_{1})\times\cdots\times S(K_{n},U_{n})$; hence $\Phi^{-1}$ maps a subbasic identity neighbourhood into a basic identity neighbourhood and is continuous at the identity, hence everywhere. Since $\Phi$ is a continuous bijective homomorphism with continuous inverse, it is an isomorphism of topological groups, completing (1). [step 1.1, step 2.1, F1, F2, F5]

3.2 Both sides of $\rho$ are compact Hausdorff: $\widehat G$ is compact by [F2] because $G$ is discrete, each $\widehat{G_{i}}$ is compact by [F2], and the product $\prod_{i}\widehat{G_{i}}$ is compact by Tychonoff's theorem by [F4]; both are Hausdorff being duals of topological groups by [F2] and products of Hausdorff spaces. Therefore the continuous bijection $\rho$ from the compact space $\widehat G$ onto the Hausdorff space $\prod_{i}\widehat{G_{i}}$ is a homeomorphism by [F4], so $\widehat G$ is topologically isomorphic to the product of the duals; this completes (2). [step 1.2, step 2.2, F2, F4]

4.1 Parts (1) and (2) are steps 3.1 and 3.2 respectively, so the lemma is proved. [step 3.1, step 3.2] ∎

---
id: lem-dual-of-zd-is-torus
kind: lemma
title: "The Pontryagin dual of the integer lattice is the torus"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 1
deps:
  - def-pontryagin-dual-and-compact-open-topology
  - lem-integers-lattice-is-discrete-lca-group
  - lem-compact-open-topology-on-a-discrete-domain-is-pointwise
  - lem-unit-circle-is-a-compact-metrizable-topological-group
  - def-integers
  - def-standard-topologies
  - def-group-homomorphism
  - def-topological-group
  - def-complex-integer-powers
  - lem-group-power-laws
  - def-product-topology
  - thm-product-universal-property
  - def-homeomorphism-and-open-maps
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Oxford Mathematical Institute, Harmonic Analysis lecture notes, characters of Z^d, pp. 17–18"
      url: "https://www.maths.ox.ac.uk/system/files/media/HarmAnLectureNotes.pdf"
---

## Statement

Give $\mathbb Z^d$ the discrete topology and let
$\mathbb T:=\{z\in\mathbb C:|z|=1\}$ be the multiplicative unit circle. The
map
$$\Psi:\mathbb T^d\longrightarrow\widehat{\mathbb Z^d},\qquad \Psi(z_1,\ldots,z_d)(k_1,\ldots,k_d):=\prod_{r=1}^d z_r^{k_r}$$
is a topological group isomorphism, where the dual has the compact-open
topology and $\mathbb T^d$ has the product topology.

## Facts & Assumptions

**Given:** $d\ge1$, the discrete additive group $\mathbb Z^d$, the
multiplicative unit circle $\mathbb T$, and the map $\Psi$ in the Statement.

[F1] [[def-pontryagin-dual-and-compact-open-topology]]: a character is a
continuous group homomorphism to $\mathbb T$, and the dual consists of these
characters with pointwise multiplication and the compact-open topology.

[F2] [[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]]: on a
discrete domain, the compact-open topology on the character set is the
subspace topology inherited from $\mathbb T^{\mathbb Z^d}$; in particular,
evaluation at any fixed lattice point is continuous.

[F3] [[def-integers]], [[def-standard-topologies]], [[def-group-homomorphism]],
[[def-complex-integer-powers]], and [[lem-group-power-laws]]: $\mathbb Z^d$ has
the discrete topology, each $k\in\mathbb Z^d$ has integer coordinates, a
homomorphism preserves addition, and integer powers satisfy
$z^{a+b}=z^az^b$ for $z\in\mathbb T$.

[F4] [[lem-unit-circle-is-a-compact-metrizable-topological-group]] and
[[def-topological-group]] and [[thm-product-universal-property]]: $\mathbb T$ is
a topological abelian group, integer-power maps on it are continuous by repeated
multiplication and inversion, and a map into a product is continuous when each
coordinate map is continuous.

[F5] [[def-homeomorphism-and-open-maps]]: a homeomorphism is a bijection that
is continuous with continuous inverse.

[F6] [[lem-integers-lattice-is-discrete-lca-group]]: $\mathbb Z^d$ with
coordinatewise addition and the discrete topology is a Hausdorff locally
compact abelian topological group; maps out of it are continuous.

## Verification

1.1 For $z=(z_1,\ldots,z_d)\in\mathbb T^d$, the formula for $\Psi(z)$ is a homomorphism because for $k,\ell\in\mathbb Z^d$, $\Psi(z)(k+\ell)=\prod_r z_r^{k_r+\ell_r} =\left(\prod_r z_r^{k_r}\right)\left(\prod_r z_r^{\ell_r}\right).$ It is continuous because its domain $\mathbb Z^d$ is discrete, so every preimage of an open set is open. Therefore $\Psi(z)\in\widehat{\mathbb Z^d}$. [F1, F3, F6]

1.2 The map $\Psi$ is a group homomorphism because $\Psi(zz')(k)=\prod_r(z_rz'_r)^{k_r} =\left(\prod_rz_r^{k_r}\right)\left(\prod_r(z'_r)^{k_r}\right)$ by [F3] and commutativity of $\mathbb T$ [F4]. If $\chi\in\widehat{\mathbb Z^d}$, put $z_r:=\chi(e_r)$, where $e_r$ is the $r$th standard basis vector. Then $z_r\in\mathbb T$ by [F1], and the decomposition $k=\sum_r k_re_r$ together with homomorphism and power laws gives $\chi(k)=\prod_r z_r^{k_r}$. Thus $\chi=\Psi(z)$; also $z_r=\chi(e_r)$ recovers each coordinate uniquely, so $\Psi$ is bijective. [F1, F3, F4, F6]

1.3 For each fixed $k$, the coordinate map $z\mapsto\Psi(z)(k)$ is a finite product of continuous integer-power maps on $\mathbb T$, hence continuous by [F4]. The product-topology criterion and [F2] then imply that $\Psi$ is continuous into $\widehat{\mathbb Z^d}$. [F2, F4]

2.1 The inverse map is $\chi\mapsto(\chi(e_1),\ldots,\chi(e_d))$. Each coordinate is continuous by [F2], so the inverse is continuous into the finite product $\mathbb T^d$. Thus $\Psi$ is a homeomorphism by [F5] and a group isomorphism by step 1.2 and the pointwise group law in [F1]. [F1, F2, F5, step 1.2, step 1.3] ∎
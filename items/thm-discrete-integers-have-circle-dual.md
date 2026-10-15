---
id: thm-discrete-integers-have-circle-dual
kind: theorem
title: "The Pontryagin dual of the discrete integers is the circle"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-integers
  - def-int-operations
  - thm-int-comm-ring
  - def-standard-topologies
  - def-pontryagin-dual-and-compact-open-topology
  - def-group-homomorphism
  - def-complex-integer-powers
  - thm-complex-exponential-addition-and-real-extension
  - lem-group-power-laws
  - def-complex-metric-convergence-and-continuity
  - def-subspace-topology-top
  - thm-complex-numbers-form-a-field
  - lem-complex-conjugation-and-modulus-laws
  - lem-compact-open-topology-on-a-discrete-domain-is-pointwise
  - def-topology-of-pointwise-convergence
  - def-product-topology
  - def-topology-basis-subbasis
  - lem-continuity-is-local-and-pastes
  - def-homeomorphism-and-open-maps
  - thm-sine-and-cosine-parametrize-the-unit-circle
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Dikran D. Dikranjan, Introduction to Topological Groups, Section 7.1, Example 7.1(2)"
      url: "http://www.mat.ucm.es/imi/documents/20062007_Dikran.pdf"
      locator: "Section 7.1, Example 7.1(2), printed p. 46: for a discrete group the compact-open topology on its dual is pointwise; Section 7.2, Example 7.7, printed pp. 48–49: the dual of Z is isomorphic to T via evaluation at 1."
    - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, Chapter VII, Section 35E"
      url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
      locator: "Printed p. 140: each character of the integer group is n↦e^{2πiyn}, and the dual is topologically isomorphic to R/Z."
---

## Statement

Let $\mathbb Z$ have the discrete topology, let
$\mathbb T=\{z\in\mathbb C:|z|=1\}$ have the subspace topology from $\mathbb C$,
and give
$\widehat{\mathbb Z}$ the compact-open topology of the Pontryagin dual. Then
$$\Psi:\mathbb T\longrightarrow\widehat{\mathbb Z},\qquad \Psi(z)(n):=z^n,$$
is a group isomorphism and a homeomorphism. Thus in the angular coordinate
$z=e^{i\lambda}$, the characters of $\mathbb Z$ are exactly
$n\mapsto e^{in\lambda}$, with $\lambda$ taken modulo $2\pi$.

## Facts & Assumptions

**Given:** The additive integer group with the discrete topology, the
multiplicative unit circle, and the Pontryagin dual with its compact-open
topology.

[F1] [[def-pontryagin-dual-and-compact-open-topology]]:
$\widehat{\mathbb Z}$ is the set of continuous group homomorphisms
$\mathbb Z\to\mathbb T$, with pointwise multiplication and the compact-open
topology.

[F2] [[def-integers]], [[def-int-operations]], [[thm-int-comm-ring]], and
[[def-standard-topologies]]: the integers form an additive group, and the
discrete topology makes every subset open; every map from a discrete space is
continuous.

[F3] [[def-group-homomorphism]]: a group homomorphism preserves multiplication.

[F4] [[def-complex-integer-powers]] and [[lem-group-power-laws]]: for
$z\ne0$, integer powers satisfy $z^{m+n}=z^mz^n$ and
$z^{-n}=(z^n)^{-1}$.

[F5] [[def-complex-metric-convergence-and-continuity]] and
[[def-subspace-topology-top]]: $\mathbb T$ carries the metric and topology
inherited from $\mathbb C$.

[F6] [[thm-complex-numbers-form-a-field]] and
[[lem-complex-conjugation-and-modulus-laws]]: multiplication on $\mathbb C$ is
commutative, $|zw|=|z||w|$, $z\overline z=|z|^2$, and conjugation is an
involution. Hence $|\overline z|^2=\overline z\,z=z\overline z=|z|^2$,
and nonnegative moduli give $|\overline z|=|z|$. Thus for $|z|=1$,
$z\overline z=1$ and $|\overline z|=1$, so the unit circle is an abelian
group under multiplication with inverse $z^{-1}=\overline z$.

[F7] [[lem-compact-open-topology-on-a-discrete-domain-is-pointwise]] and
[[def-topology-of-pointwise-convergence]]: when the domain is discrete, the
compact-open topology on a family of functions is the subspace topology from
the product $\mathbb T^{\mathbb Z}$.

[F8] [[def-product-topology]] and [[def-topology-basis-subbasis]]: product
basic open sets restrict only finitely many coordinates, and the projections
are continuous.

[F9] [[def-homeomorphism-and-open-maps]]: a homeomorphism is a continuous
bijection with continuous inverse.

[F10] [[lem-continuity-is-local-and-pastes]]: the composite of continuous maps
is continuous.

[F11] [[thm-complex-exponential-addition-and-real-extension]] and
[[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: the
complex exponential satisfies $\exp(u+v)=\exp(u)\exp(v)$ and
$\exp(i\lambda)=\cos\lambda+i\sin\lambda$.

[F12] [[thm-sine-and-cosine-parametrize-the-unit-circle]]: under
$z=x+iy\leftrightarrow(x,y)$, every point of $\mathbb T$ has the form
$\exp(i\lambda)$ for a unique
$\lambda\in[0,2\pi)$.

## Proof



**Proof technique:** Identify each character by its value at $1$, then verify
continuity in the pointwise topology.

1.1 For $z\in\mathbb T$, define $\chi_z(n):=z^n$. By [F4], $\chi_z(m+n)=z^{m+n}=z^mz^n=\chi_z(m)\chi_z(n)$, so $\chi_z$ is a group homomorphism by [F3]. It is continuous because its domain $\mathbb Z$ is discrete by [F2]. Hence $\chi_z\in\widehat{\mathbb Z}$ by [F1], and $\Psi(z)=\chi_z$ is well defined. [F1, F2, F3, F4]

1.2 Multiplication on $\mathbb T$ is continuous. For $z,w,z_0,w_0\in\mathbb T$, $|zw-z_0w_0|\le |z|\,|w-w_0|+|w_0|\,|z-z_0|=|w-w_0|+|z-z_0|.$ Thus a product-neighborhood restricting both coordinates within $\varepsilon/2$ of $(z_0,w_0)$ maps inside the $\varepsilon$-ball about $z_0w_0$. Inversion is continuous because $z^{-1}=\overline z$ by [F6] and $|\overline z-\overline w|=|z-w|$ by conjugation preserving modulus [F6]. [F5, F6, F8, algebra]

2.1 The map $\Psi$ is a group homomorphism: for $z,w\in\mathbb T$ and $n\in\mathbb Z$, $(zw)^n=z^nw^n$ because $\mathbb T$ is abelian, by [F4] and [F6]. It is injective since $\Psi(z)(1)=z$. If $\chi\in\widehat{\mathbb Z}$, put $z:=\chi(1)\in\mathbb T$. First $\chi(0)=\chi(0)^2$; since $\chi(0)\in\mathbb T$ is invertible, $\chi(0)=1$. Repeatedly applying the homomorphism law then gives $\chi(n)=z^n$ for $n\ge0$. Thus for $n>0$, $\chi(n)\chi(-n)=\chi(0)=1$, so $\chi(-n)=z^{-n}$; hence $\chi=\Psi(z)$ and $\Psi$ is surjective. [F1, F2, F3, F4, F6, step 1.1]

2.2 Each coordinate map $z\mapsto\Psi(z)(n)=z^n$ is continuous: for $n=0$ it is constant; for $n>0$ it is a finite composite of the continuous multiplication map from step 1.2 and the identity; for $n<0$ it is a finite composite followed by the continuous inverse map from step 1.2. Composite continuity follows from [F10]. A basic open set in the product $\mathbb T^{\mathbb Z}$ restricts only finitely many coordinates by [F8], so its preimage is a finite intersection of open coordinate preimages. Thus $\Psi$ is continuous into the product, and [F7] gives continuity into the subspace $\widehat{\mathbb Z}$. [F5, F7, F8, F10, step 1.2]

3.1 The inverse map sends $\chi$ to $\chi(1)$. Evaluation at coordinate $1$ is continuous as the restriction of a product projection by [F7]–[F8], and $\Psi(\chi(1))=\chi$ by step 2.1. Thus the inverse is continuous; $\Psi$ is a homeomorphism by [F9], and with step 2.1 it is the asserted group isomorphism. [F7, F8, F9, step 2.1]

4.1 By [F12], every $z\in\mathbb T$ has a unique angle $\lambda$ modulo $2\pi$ with $z=e^{i\lambda}$, using [F11]. The exponential addition law [F11] and integer-power laws [F4] give $\Psi(e^{i\lambda})(n)=(e^{i\lambda})^n=e^{in\lambda}$ for every $n\in\mathbb Z$. [F4, F11, F12, step 1.1] ∎
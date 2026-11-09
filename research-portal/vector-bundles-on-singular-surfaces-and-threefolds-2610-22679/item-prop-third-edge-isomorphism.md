---
title: Third edge isomorphism
status: draft
research_item: prop-third-edge-isomorphism
dependency_level: 23
---

PDF p. 14: Proposition 6.2

## Prerequisites

- [def-third-edge-map](item-def-third-edge-map)
- [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism)
- [prop-top-motivic-torsion-free](item-prop-top-motivic-torsion-free)
- [prop-rational-motivic-degeneration](item-prop-rational-motivic-degeneration)
- [lem-rational-injection-detection](item-lem-rational-injection-detection)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Statement
Assume the Axiom of Choice. Let $k$ be an algebraically closed field and $X$ a normal affine threefold over $k$, where threefold means a finite-type $k$-scheme of Krull dimension three. Then the third edge homomorphism
$$\epsilon_3:H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\longrightarrow F^3_{\mathrm{mot}}K_0(X)$$
is an isomorphism. Moreover, the actual stage-to-$K$ homomorphism $\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X)$ is injective.

Here $K(X)$ is the nonconnective $K$-theory spectrum of perfect complexes, $K_0(X)=\pi_0K(X)$, and $F^3_{\mathrm{mot}}K(X)$ is the third stage of its decreasing motivic filtration. The group $F^3_{\mathrm{mot}}K_0(X)$ is the image of the stage-to-$K_0$ homomorphism. The group $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-six cohomology of the weight-three motivic complex. The map $\epsilon_3$ is the inverse of the actual third-stage-to-graded isomorphism $p_3$ followed by the stage-to-$K_0$ homomorphism with codomain restricted to its image. A group is torsion-free if no nonzero element is killed by a nonzero integer.

## Statement references

[def-third-edge-map](item-def-third-edge-map)

[lem-third-graded-isomorphism](item-lem-third-graded-isomorphism)

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraically closed field $k$, and a normal affine finite-type $k$-scheme $X$ of dimension three.

**Goal:** Prove that the specified third edge map is an isomorphism and that the actual third-stage map to $K_0(X)$ is injective.

[F1] A finite-type scheme over a field is Noetherian. Under the Axiom of Choice, [lem-third-graded-isomorphism](item-lem-third-graded-isomorphism) supplies the actual isomorphism $p_3:\pi_0F^3_{\mathrm{mot}}K(X)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. By [def-third-edge-map](item-def-third-edge-map), the stated edge map is $p_3^{-1}$ followed by the stage map restricted to its image, and is surjective. The choice assumption used by these suppliers is as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] For an affine finite-type threefold over an algebraically closed field, [prop-top-motivic-torsion-free](item-prop-top-motivic-torsion-free) states that $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is torsion-free.

[F3] Under the Axiom of Choice, [prop-rational-motivic-degeneration](item-prop-rational-motivic-degeneration) states that the rationalization of the actual third edge map is an isomorphism for a Noetherian dimension-three scheme over a field.

[F4] [lem-rational-injection-detection](item-lem-rational-injection-detection) states that a homomorphism with torsion-free domain is injective if its rationalization is injective.

## Proof

**Proof technique:** Detect the kernel of the edge map after rationalization, then use its relation to the actual third-stage map.

1.1 The given finite-type scheme $X$ is Noetherian and has dimension three. Thus the hypotheses of [F1], [F2], and [F3] hold. In particular, the domain of $\epsilon_3$ is torsion-free, and $\epsilon_3\otimes_{\mathbb Z}\mathbb Q$ is an isomorphism, hence injective. [F1, F2, F3, given]

2.1 Apply [F4] to $\epsilon_3$. Step 1.1 shows that its domain is torsion-free and its rationalization is injective, so $\epsilon_3$ is injective. It is surjective by [F1], and therefore is an isomorphism. [F1, F4, step 1.1]

3.1 Let $u:\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X)$ be the actual stage-to-$K_0$ homomorphism and let $v$ be the same map with codomain restricted to its image. By [F1], $v=\epsilon_3\circ p_3$. Both factors are isomorphisms by [F1] and step 2.1, so $v$ is injective. The inclusion of its image into $K_0(X)$ is injective; consequently $u$ is injective. This proves both assertions. [F1, step 2.1] ∎

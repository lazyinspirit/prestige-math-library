---
id: prop-third-edge-isomorphism
kind: proposition
title: Third edge isomorphism
status: published
domain: mathematics
deps:
  - def-third-edge-map
  - lem-third-graded-isomorphism
  - prop-top-motivic-torsion-free
  - prop-rational-motivic-degeneration
  - lem-rational-injection-detection
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-algebraically-closed-field
  - math:def-integral-closure-and-integrally-closed-domain
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-field
  - math:def-noetherian-ring-and-module
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-third-edge-map: mathematical-premise
  lem-third-graded-isomorphism: mathematical-premise
  prop-top-motivic-torsion-free: mathematical-premise
  prop-rational-motivic-degeneration: mathematical-premise
  lem-rational-injection-detection: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
  math:def-integral-closure-and-integrally-closed-domain: mathematical-premise
  math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-field: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Proposition 6.2 and its proof, PDF p. 14
      statement: For a normal affine threefold over an algebraically closed field, the
        third edge map is an isomorphism and the third-stage map into K_0 is
        injective.
      hypotheses: X is a normal affine threefold over an algebraically closed field,
        with the article’s motivic filtration and conventions.
      reading_limits: For this proposal, read the supplied article extraction at PDF
        p. 14, Proposition 6.2 and its complete proof, and read the current
        bodies of the five local direct suppliers and the declared Math
        interfaces. The proof preserves the article’s rational-kernel argument;
        the affine finite-type Noetherian derivation and explicit formulation
        and size conventions are local elaborations using those interfaces. No
        fresh visual inspection of the PDF, reconstruction of upstream external
        proofs, independent acceptance or library audit is claimed.
dependency_level: 25
formulation_deps:
  - def-third-edge-map
  - lem-third-graded-isomorphism
  - lem-rational-injection-detection
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-algebraically-closed-field
  - math:def-integral-closure-and-integrally-closed-domain
  - math:def-grothendieck-universe-closure-convention
  - prop-top-motivic-torsion-free
argument_deps:
  - def-third-edge-map
  - lem-third-graded-isomorphism
  - prop-top-motivic-torsion-free
  - prop-rational-motivic-degeneration
  - lem-rational-injection-detection
  - math:def-axiom-of-choice
  - math:def-affine-scheme
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-field
  - math:def-noetherian-ring-and-module
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume the Axiom of Choice and the compatible universe, site-size, smallness and pointed-space bounds specified in [A1] below. Universe existence is an additional size assumption, separate from Choice. Let $k$ be an algebraically closed field and $X$ a normal affine threefold over $k$, where threefold means a finite-type $k$-scheme of Krull dimension three. Then the third edge homomorphism
$$\epsilon_3:H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)\longrightarrow F^3_{\mathrm{mot}}K_0(X)$$
is an isomorphism. Moreover, the actual stage-to-$K$ homomorphism $\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X)$ is injective.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$. An affine scheme is isomorphic to $\operatorname{Spec}A$ for a commutative ring $A$, and finite type refers to the structure morphism $X\to\operatorname{Spec}k$. Normal means that every local ring $\mathcal O_{X,x}$ is an integrally closed domain: every element of its fraction field integral over it already belongs to it. Krull dimension uses lengths of strict chains of nonempty irreducible closed subsets, with a one-member chain of length zero.

Here $K(X)$ is the nonconnective $K$-theory spectrum of perfect complexes, $K_0(X)=\pi_0K(X)$, and $F^3_{\mathrm{mot}}K(X)$ is the third stage of its decreasing motivic filtration. The group $F^3_{\mathrm{mot}}K_0(X)$ is the image of the stage-to-$K_0$ homomorphism. The group $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is degree-six cohomology of the weight-three motivic complex. The map $\epsilon_3$ is the inverse of the actual third-stage-to-graded isomorphism $p_3$ followed by the stage-to-$K_0$ homomorphism with codomain restricted to its image. A group is torsion-free if no nonzero element is killed by a nonzero integer. Rationalization of an abelian group or homomorphism means tensoring over $\mathbb Z$ with $\mathbb Q$.

## Statement references

[[def-third-edge-map]]

[[lem-third-graded-isomorphism]]

[[prop-top-motivic-torsion-free]]

[[lem-rational-injection-detection]]

[[math:def-axiom-of-choice]]

[[math:def-algebraically-closed-field]]

[[math:def-affine-scheme]]

[[math:def-locally-finite-type-and-finite-type-morphism]]

[[math:def-integral-closure-and-integrally-closed-domain]]

[[math:def-grothendieck-universe-closure-convention]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the compatible universe, site-size, smallness and pointed-space assumptions of [A1], an algebraically closed field $k$, and a normal affine finite-type $k$-scheme $X$ of dimension three.

**Goal:** Prove that the specified third edge map is an isomorphism and that the actual third-stage map to $K_0(X)$ is injective.

[A1] Assume Choice as in [[math:def-axiom-of-choice]]. Use Grothendieck universes in the closure convention of [[math:def-grothendieck-universe-closure-convention]], with the same compatible bounds as [[lem-third-graded-isomorphism]]: nested universes $U\in V\in W$, $\omega\in U$, field and scheme data in $U$, the unbounded derived enhancement of $V$-small abelian groups considered in $W$, and compatible enlargements for spectral realizations. Retain that supplier's smallness and pointed-space conventions. Use compatible sites with the universe and site-size bounds required by [[prop-top-motivic-torsion-free]]. These are assumed construction bounds, not consequences of Choice. Choice is inherited in those constructions and is also used by the affine coordinate-ring supplier in [F5] for affine-chart quasi-compactness and the unit-ideal relation.

[F1] For a Noetherian dimension-three scheme over a field, under [A1], [[lem-third-graded-isomorphism]] supplies the actual isomorphism $p_3:\pi_0F^3_{\mathrm{mot}}K(X)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. By [[def-third-edge-map]], the stated edge map is $p_3^{-1}$ followed by the stage map restricted to its image, and is surjective. That definition supplies the scheme-over-field, chain-dimension and motivic object conventions used here. The choice assumption used by these suppliers is as in [[math:def-axiom-of-choice]].

[F2] Under [A1], [[prop-top-motivic-torsion-free]] states that $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ is torsion-free for an affine finite-type threefold over an algebraically closed field, in every characteristic.

[F3] With the actual constructions taken under [A1], [[prop-rational-motivic-degeneration]] states that the rationalization of the actual third edge map is an isomorphism for a Noetherian dimension-three scheme over a field.

[F4] [[lem-rational-injection-detection]] defines rationalization by tensoring with $\mathbb Q$ and states that a homomorphism with torsion-free domain is injective if its rationalization is injective. A surjective such homomorphism is an isomorphism.

[F5] [[math:def-affine-scheme]] gives an affine presentation $X\cong\operatorname{Spec}A$. Finite type is the morphism notion of [[math:def-locally-finite-type-and-finite-type-morphism]]; under Choice, [[math:lem-affine-finite-type-scheme-coordinate-ring-finitely-generated]] makes this coordinate ring $A$ a finitely generated $k$-algebra. By [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], a finite-type algebra over a Noetherian commutative ring is Noetherian. By [[math:def-noetherian-ring-and-module]], a commutative ring is Noetherian if every ideal is finitely generated. By [[math:def-field]], nonzero elements of $k$ are invertible. Finally, [[math:def-locally-noetherian-and-noetherian-scheme]] characterizes a Noetherian scheme by a finite affine open cover with Noetherian coordinate rings.

[F6] [[math:def-algebraically-closed-field]] gives the polynomial-root meaning of algebraically closed. Normality is defined inline above in terms of local rings and the meaning of integrally closed domain in [[math:def-integral-closure-and-integrally-closed-domain]]. It remains part of the stated domain; the proof needs no further consequence of normality.

## Proof

**Proof technique:** Establish the Noetherian hypothesis, detect the kernel after rationalization, and use the relation between the edge and the actual third-stage map.

1.1 Use [F5] to write $X\cong\operatorname{Spec}A$ with $A$ a finitely generated $k$-algebra. Every ideal $I$ of $k$ is either zero, generated by zero, or contains a nonzero $a$, in which case $1=a^{-1}a\in I$ and $I=k$, generated by one. Thus $k$ is Noetherian by [F5]. The finite-type algebra result in [F5] makes $A$ Noetherian, and the single affine chart $X$ is a finite Noetherian affine cover, so $X$ is Noetherian. Its dimension is three by hypothesis. Under [A1], [F1] supplies $p_3$ and surjectivity of $\epsilon_3$, [F2] makes its domain torsion-free, and [F3] makes $\epsilon_3\otimes_{\mathbb Z}\mathbb Q$ an isomorphism, hence injective. [A1, F1, F2, F3, F5, given]

2.1 By [F4] and step 1.1, $\epsilon_3$ is injective; it is surjective by [F1], so is an isomorphism. Let $u:\pi_0F^3_{\mathrm{mot}}K(X)\to K_0(X)$ be the actual stage-to-$K_0$ homomorphism, and let $v$ be the same map with codomain restricted to its image. By [F1], $v=\epsilon_3\circ p_3$. Both factors are isomorphisms, so $v$ is injective. Explicitly, $u(a)=u(b)$ implies $v(a)=v(b)$, hence $\epsilon_3(p_3(a))=\epsilon_3(p_3(b))$; injectivity of $\epsilon_3$ and then $p_3$ gives $a=b$. Consequently $u$ is injective. This proves both assertions. [F1, F4, step 1.1] ∎

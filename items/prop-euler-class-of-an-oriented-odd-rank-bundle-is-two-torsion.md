---
id: prop-euler-class-of-an-oriented-odd-rank-bundle-is-two-torsion
kind: proposition
title: The Euler class of an oriented odd-rank bundle is two-torsion
status: draft
origin: pipeline
deps: ["def-euler-class-by-zero-section-pullback-of-the-thom-class", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Euler orientation sign and Proposition 3.13(d), printed pp.90–92"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 orientation reversal of Euler classes, printed pp.115–124"
---

## Statement

Assume AC. Let $(E,o)\to B$ be an integrally oriented numerable real vector
bundle of odd rank $n\geq1$ over a base in the scope of the general Thom
theorem. Then
$$2e(E,o)=0\qquad\text{in }H^n(B;\mathbb Z).$$
No unconditional vanishing of $e(E,o)$ is asserted, and no homotopy of
fiberwise $-1$ to the identity is used or claimed.

## Facts & Assumptions

**Given:** AC, an integrally oriented numerable real rank-$n$ bundle $(E,o)\to B$ with $n$ odd and $n\geq1$, over a base in the general Thom scope.

[F1] An orientation of $E$ is a continuous fiberwise choice of generator of the top exterior power; a fiberwise invertible bundle map is orientation-preserving when it carries the selected generator to the selected generator, and for a rank-$r$ space the map $-\operatorname{id}$ multiplies orientation generators by $(-1)^r$ ([[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F2] The Euler class is natural for orientation-preserving pullbacks and isomorphism squares, and reversing an integral orientation negates it: $e(f^*E)=f^*e(E)$ for orientation-preserving $f$, and $e(E,-o)=-e(E,o)$ ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F3] An oriented positive-rank real line bundle admits a nowhere-zero section and hence has vanishing Euler class ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The map $\varphi=-\operatorname{id}_E:E\to E$, fiberwise multiplication by $-1$, is a bundle isomorphism over $\operatorname{id}_B$. On each fiber it multiplies every vector by $-1$, hence acts on the top exterior power by $(-1)^n$; since $n$ is odd this is $-1$, so $\varphi$ carries the chosen orientation generator of $(E,o)_b$ to the chosen generator of $(E,-o)_b$. Therefore $\varphi$ is an orientation-preserving bundle isomorphism $(E,o)\to(E,-o)$ over the identity. [F1]

1.2 The orientation-sign law gives $e(E,-o)=-e(E,o)$, by the reversal clause of [F2] applied to the same underlying bundle with its two orientations. [F2]

2.1 Oriented naturality gives $e(E,o)=e(E,-o)$. Applying the naturality clause of [F2] to the isomorphism $\varphi$ over the identity base map, the class of the source and the class of the target agree, which is the displayed identity and uses only that $\varphi$ is orientation-preserving. [F2, step 1.1]

3.1 Combining gives $e(E,o)=e(E,-o)=-e(E,o)$, hence $2e(E,o)=0$ in the abelian group $H^n(B;\mathbb Z)$. No assertion that $\varphi$ is homotopic to the identity is made: the argument compares two orientations of one bundle through an orientation-preserving isomorphism, exactly as displayed. [step 2.1, step 1.2, algebra]

4.1 Boundary cases. For rank $n=1$ the bundle is an oriented line bundle, which carries a nowhere-zero section and has vanishing Euler class by [F3]; this is consistent with $2e=0$ and is not a separate assumption. Rank zero is excluded, since no orientation reversal separates the two orientations of the zero bundle. Even rank is excluded from the statement: there $-\operatorname{id}$ is orientation-preserving on $(E,o)$ itself, so the argument gives no two-torsion conclusion. Over the empty base the group is zero and the identity is vacuous. The only choice principle used is the Thom-theoretic AC of [F2]. [F2, F3, A1, step 3.1] ∎
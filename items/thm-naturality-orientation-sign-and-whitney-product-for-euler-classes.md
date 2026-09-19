---
id: thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
kind: theorem
title: Naturality, orientation sign, and Whitney product for Euler classes
status: draft
origin: pipeline
deps: ["def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-thom-euler-class-of-an-oriented-vector-bundle", "thm-naturality-and-uniqueness-of-thom-classes", "thm-external-product-and-whitney-sum-formulas-for-thom-classes", "thm-naturality-of-the-singular-cohomology-pair-sequence", "prop-cup-product-is-natural-unital-and-associative", "thm-singular-cohomology-is-graded-commutative", "def-pullback-vector-bundle-and-pullback-section", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Proposition 3.13(a)–(b) and the surrounding sign discussion, printed pp.90–92"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Proposition 35.4, printed pp.131–132"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 Euler class properties, printed pp.115–124"
---

## Statement

Assume AC and work over bases in the scope of the general Thom theorem. Let
$E\to B$ and $F\to B$ be $R$-oriented numerable real bundles of ranks $m,n\geq0$
with normalized Thom classes $u_E,u_F$ and Euler classes
$e(E),e(F)$.

1. **Naturality.** For an orientation-preserving pullback square
   $$\begin{CD} f^*E @>>> E\\ @VVV @VVV\\ B' @>f>> B\end{CD}$$
   one has $e(f^*E)=f^*e(E)$.
2. **Orientation sign.** Over $R=\mathbb Z$, reversing the orientation of $E$
   negates the class: $e(E,-o)=-e(E,o)$.
3. **Whitney product.** Give $E\oplus F$ the ordered direct-sum orientation.
   Then $e(E\oplus F)=e(E)e(F)$, including the rank-zero unit $e(0_B)=1$.
4. **Koszul sign.** The swap $E\oplus F\to F\oplus E$ changes the ordered-sum
   orientation by $(-1)^{mn}$. Consequently the Euler products in the two
   standard orders satisfy
   $$e(E)e(F)=(-1)^{mn}e(F)e(E).$$

## Facts & Assumptions

**Given:** AC, an orientation-preserving pullback square as displayed, and suitable oriented bundles over bases in the general Thom scope.

[F1] The Euler class is the Thom-defined class $e(\xi)=s^*j^*(u_\xi)$, with $j^*$ relative-to-absolute, $s$ the zero section and $u_\xi$ the normalized Thom class ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F2] Thom classes are natural for orientation-preserving pullbacks, are unique for a supplied orientation, and reverse sign with an integral orientation ([[thm-naturality-and-uniqueness-of-thom-classes]]).

[F3] For ordered oriented bundles over one base, diagonal pullback gives $u_{E\oplus F}=u_E\smile u_F$, and interchanging the ordered summands changes the class and the orientation by the Koszul sign $(-1)^{mn}$ ([[thm-external-product-and-whitney-sum-formulas-for-thom-classes]]).

[F4] The zero section of a pullback bundle is the pullback of the zero section, and the induced map of disk-sphere pairs covers $f$ ([[def-pullback-vector-bundle-and-pullback-section]]).

[F5] The pair sequences are natural: a map of pairs induces a map of exact sequences with commuting squares, in particular $f^*\partial_{Y,B}=\partial_{X,A}(f|_A)^*$ ([[thm-naturality-of-the-singular-cohomology-pair-sequence]]).

[F6] Pullback is a unital ring homomorphism and cup products are natural; singular cohomology is graded-commutative, so homogeneous classes of degrees $m,n$ satisfy $xy=(-1)^{mn}yx$ ([[prop-cup-product-is-natural-unital-and-associative]], [[thm-singular-cohomology-is-graded-commutative]]).

[F7] An orientation of a direct sum assigns to each fiber the ordered product orientation of the two summands; $-1$ on a fiber multiplies the orientation generator of a rank-$r$ space by $(-1)^r$, and swapping the two ordered blocks multiplies the ordered product generator by $(-1)^{mn}$ ([[def-oriented-real-vector-bundle-and-oriented-frame-bundle]], [[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 Naturality. Pull back along $f$: by [F4] the zero section of $f^*E$ is $f^*s$ and the disk-sphere bundles map to those of $E$ over $f$; by [F2] the pullback $f^*u_E$ is the normalized Thom class $u_{f^*E}$ for the pulled-back orientation. Naturality of the pair sequence [F5] gives a commuting square $$f^*s^*j^*(u_E)=s'^*j'^*(f^*u_E),$$ where $j'^*$ is the relative-to-absolute map for $f^*E$. Substituting $f^*u_E=u_{f^*E}$ and applying [F1] gives $e(f^*E)=s'^*j'^*u_{f^*E}=f^*s^*j^*u_E=f^*e(E)$. [F1, F2, F4, F5]

1.2 Orientation sign. Suppose $R=\mathbb Z$ and $E$ carries the reversed orientation $-o$. By [F2] the normalized Thom class of the reversed orientation is $-u_E$. Substituting into the defining composite of [F1] and using linearity of $j^*$ and $s^*$ gives $e(E,-o)=s^*j^*(-u_E)=-s^*j^*(u_E)=-e(E,o)$. In characteristic two the two orientations give the same class, and the statement's integral clause is the one asserted. [F1, F2]

1.3 Whitney product. Equip $E\oplus F$ with the ordered sum orientation and metric. By [F3] its normalized Thom class is $u_E\smile u_F$ under the canonical identification of the disk-sphere pair of the sum with the fiberwise product of the disk-sphere pairs. The zero section of $E\oplus F$ is the fiberwise diagonal $(s_E,s_F)$, and the relative product of the two pulled-back classes restricts on each fiber to the product of the two fiber generators; hence $$e(E\oplus F)=s^*j^*(u_E\smile u_F)=(s_E^*j^*u_E)(s_F^*j^*u_F)=e(E)e(F),$$ where the middle step uses the naturality of the relative cup product under the pair map $(B,\varnothing)\to(D(E)\times_BD(F),\text{boundary})$ and the compatibility of the relative-to-absolute and zero-section maps with cup products [F6]. For $m=0$ or $n=0$ the corresponding bundle is zero, its Thom class and Euler class are the unit by [F1] and the product formula reduces to the rank-zero unit. [F1, F3, F6, algebra]

2.1 Koszul sign. Interchanging the two ordered summands is the bundle isomorphism $\sigma:E\oplus F\to F\oplus E$ over the identity. On each fiber it is the block swap, which multiplies the ordered product orientation generator by $(-1)^{mn}$ by [F7]. The Thom swap formula [F3], followed by the relative-to-absolute map and the zero section, therefore gives $$e(E\oplus F)=(-1)^{mn}e(F\oplus E).$$ Applying step 1.3 in the two displayed orders yields $e(E)e(F)=(-1)^{mn}e(F)e(E)$, exactly as also required by graded commutativity [F6]. No unsigned equality of the two products is used. [F3, F6, F7, step 1.3]

3.1 Boundary cases. Rank zero: $u=1$, $s$ and $j$ are identities, so $e(0_B)=1$ and the product formula reads $e(0\oplus F)=1\cdot e(F)=e(F)$, the unit convention matching [F1]. For two rank-one bundles, $mn=1$ and the block swap reverses the ordered orientation, so step 2.1 gives the sign $-1$ exactly. The empty base carries the unique zero class on both sides, and the zero ring has its unit equal to its zero element, so the displayed identities hold. Pullback along the identity and along composites are the two ends of the naturality square of step 1.1. AC is used only through the Thom-class suppliers [F2] and [F3]. [F1, F2, F3, A1, step 1.1, step 1.3, step 2.1] ∎

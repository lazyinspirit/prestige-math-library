---
id: thm-mod-two-euler-class-is-the-top-stiefel-whitney-class
kind: theorem
title: The mod-two Euler class is the top Stiefel–Whitney class
status: published
origin: pipeline
deps: ["def-euler-class-by-zero-section-pullback-of-the-thom-class", "def-thom-euler-class-of-an-oriented-vector-bundle", "def-r-oriented-vector-bundle-and-orientation-local-system", "def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-naturality-of-stiefel-whitney-classes", "thm-naturality-orientation-sign-and-whitney-product-for-euler-classes", "thm-whitney-sum-formula-for-stiefel-whitney-classes", "thm-real-splitting-principle-with-mod-two-injective-pullback", "def-real-flag-bundle-and-stiefel-whitney-roots", "thm-naturality-and-uniqueness-of-thom-classes", "thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "thm-stable-stiefel-space-is-contractible", "prop-singular-cohomology-is-contravariantly-functorial", "def-axiom-of-choice", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "def-tautological-degree-one-class-on-a-real-projective-bundle", "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating", "def-relative-singular-cochain-complex", "thm-cellular-cochains-compute-cohomology-with-local-coefficients"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Proposition 3.13(c) and the mod-two Euler discussion, printed pp.89–92"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lectures 35–37 Thom and Euler classes, printed pp.129–139"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§9 the top class is w_n, printed pp.115–124"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $E\to B$ be a numerable real vector bundle of rank $n\geq0$
over a paracompact Hausdorff CGWH base of CW homotopy type. With the canonical $\mathbb F_2$-orientation of $E$,
$$e_2(E)=w_n(E)\qquad\text{in }H^n(B;\mathbb F_2).$$
If $E$ carries an integral orientation $o$, then
$$\rho_2(e(E,o))=w_n(E),$$
where $\rho_2$ is reduction of coefficients. For $n=0$ both assertions read
$1=1$.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq0$ over a paracompact Hausdorff CGWH base of CW homotopy type, its canonical $\mathbb F_2$-orientation, and, in the second clause, an integral orientation.

[F1] The Euler class is $e(\xi)=s^*j^*(u_\xi)$; for $R=\mathbb F_2$ every real bundle is canonically oriented ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]], [[def-r-oriented-vector-bundle-and-orientation-local-system]]).

[F2] The Euler class is natural for orientation-preserving pullbacks, is negated by reversing an integral orientation, is multiplicative for ordered Whitney sums, and satisfies $e(0_B)=1$ for the standard unit orientation ([[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]]).

[F3] The Stiefel–Whitney classes satisfy naturality and the Whitney product formula, with $w_i=0$ above the rank and $w_0=1$ ([[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[thm-naturality-of-stiefel-whitney-classes]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F4] The flag bundle $q:\operatorname{Fl}(E)\to B$ is admissible, splits $q^*E\cong L_1\oplus\cdots\oplus L_n$ into line bundles, and $q^*$ is injective on $\mathbb F_2$-cohomology ([[def-real-flag-bundle-and-stiefel-whitney-roots]], [[thm-real-splitting-principle-with-mod-two-injective-pullback]]).

[F5] The mod-two Gysin sequence of an $\mathbb F_2$-oriented bundle in the Thom scope is exact and natural ([[thm-gysin-long-exact-sequence-of-an-oriented-sphere-bundle]]).

[F6] $S(\gamma_1)\cong S^\infty$ is contractible, $H^1(S^\infty;\mathbb F_2)=0$, and $H^1(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2\cdot a$ ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-stable-stiefel-space-is-contractible]], [[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F7] A normalized Thom class is unique for a supplied orientation ([[thm-naturality-and-uniqueness-of-thom-classes]], [[def-thom-euler-class-of-an-oriented-vector-bundle]]). A coefficient homomorphism acts on absolute cochains by postcomposition and commutes with pullback ([[prop-singular-cohomology-is-contravariantly-functorial]]); relative cochains are homomorphisms on the quotient chain complex ([[def-relative-singular-cochain-complex]]).

[F8] Every numerable real line bundle on the stipulated bases is the pullback of the tautological line along a map to $\mathbb{RP}^\infty$ ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]). Its first Stiefel–Whitney class is $x_L=c^*a$; any classifying map can be used ([[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F9] Cellular cochains of a CW pair with constant coefficients compute its relative singular cohomology naturally in coefficients ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The line case. Let $L\to B$ be a numerable real line bundle over a paracompact Hausdorff CGWH base of CW homotopy type and let $c:B\to\mathbb{RP}^\infty$ be a classifying map supplied by [F8], so $c^*\gamma_1\cong L$. For the universal line, $P(\gamma_1)\cong\mathbb{RP}^\infty$ and its tautological line identifies with $\gamma_1$ itself. The identity therefore classifies this line, so [F8] gives $w_1(\gamma_1)=\operatorname{id}^*a=a$. The unit sphere of $\gamma_1$ is $S^\infty$ by $v\mapsto(\mathbb R v,v)$, with inverse the vector projection; these maps are continuous in each finite-stage chart and compatible with the weak colimits. Compute its Euler class: by [F5] the Gysin sequence of the double cover $S(\gamma_1)\cong S^\infty\to\mathbb{RP}^\infty$ contains the exact piece $$H^0(\mathbb{RP}^\infty;\mathbb F_2)\xrightarrow{\smile e_2(\gamma_1)}H^1(\mathbb{RP}^\infty;\mathbb F_2)\xrightarrow{\pi^*}H^1(S^\infty;\mathbb F_2);$$ the last group vanishes by [F6], so $\smile e_2(\gamma_1)$ is surjective onto the nonzero one-dimensional group $H^1(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2\cdot a$; hence its value on $1$ is $e_2(\gamma_1)=a=w_1(\gamma_1)$. Now naturality of the Euler class [F2] and of $w_1$ [F3] along $c$ gives $$e_2(L)=e_2(c^*\gamma_1)=c^*e_2(\gamma_1)=c^*a=w_1(L).$$ [F2, F3, F5, F6, F8]

2.1 The general case by splitting. Let $n\geq1$ and let $q:\operatorname{Fl}(E)\to B$ be the flag bundle of [F4], with $q^*E\cong L_1\oplus\cdots\oplus L_n$ and $q^*$ injective. Naturality [F2] gives $e_2(q^*E)=q^*e_2(E)$, the product formula for Euler classes [F2] applied to the successive summands gives $e_2(q^*E)=\prod_{j=1}^{n}e_2(L_j)$, and step 1.1 turns each factor into $w_1(L_j)$. The Whitney formula [F3] gives $w_n(q^*E)=w_n(L_1\oplus\cdots\oplus L_n)=\prod_{j=1}^{n}w_1(L_j)$. Hence $q^*e_2(E)=q^*w_n(E)$, and injectivity of $q^*$ yields $e_2(E)=w_n(E)$. For $n=0$ both classes are the unit by [F1] and [F3]. [F1, F2, F3, F4, step 1.1]

3.1 The integral clause. Suppose $E$ carries an integral orientation $o$. Reduce an integral cocycle representing its normalized Thom class $u_E$ valuewise modulo two. On relative cochains postcomposition with $\mathbb Z\to\mathbb F_2$ commutes with the differential: $\rho(\varphi\bar\partial)=(\rho\varphi)\bar\partial$. It preserves cocycles and coboundaries, hence by [F7] this defines the coefficient-reduction class $\rho_2(u_E)$ and commutes with restriction to every fiber. On a fiber pair $(D^n,S^{n-1})$, the integral normalization is a generator of $H^n(D^n,S^{n-1};\mathbb Z)\cong\mathbb Z$, whose reduction is the unique nonzero element of $H^n(D^n,S^{n-1};\mathbb F_2)\cong\mathbb F_2$. Indeed the relative cellular complex for $(D^n,S^{n-1})$ has one generator in degree $n$ and no other generators (also for $n=0$, with $S^{-1}=\varnothing$); coefficient reduction is $\mathbb Z\to\mathbb F_2$ on that generator by [F9], sending either integral generator to $1$. Thus $\rho_2(u_E)$ is normalized for the reduced orientation and equals the normalized mod-two Thom class by uniqueness [F7]. Coefficient reduction also commutes with the pair map $j^*$ and zero-section pullback, again by the cochain formula in [F7]. Applying the defining composites and step 2.1 gives $\rho_2(e(E,o))=\rho_2(s^*j^*u_E)=s^*j^*\rho_2(u_E)=e_2(E)=w_n(E)$. This uses no orientation hypothesis beyond the existence of the integral orientation; when $E$ is not integrally orientable the second clause is not asserted. [F1, F7, F9, step 2.1]

4.1 Boundary cases. In rank zero the canonical mod-two orientation is $1$, so $e_2=w_0=1$. A supplied integral cohomological orientation is a locally constant sign, and its Euler class is that sign because $j$ and $s$ are identities; reduction sends either sign to $1$ as in step 3.1. Thus the second assertion also reads $1=1$ after reduction. In rank one the flag projection is an identity up to its canonical bundle isomorphism and step 1.1 applies; every line here has a classifying map by [F8]. For the empty base both sides are the zero class, with the zero ring's unit coinciding with zero. The canonical mod-two orientation is preserved by every bundle isomorphism; integral orientation choices do not enter the first clause. AC is inherited from the classification, Thom, Gysin, splitting and characteristic-class interfaces. [F1, F2, F3, F4, F5, F7, F8, F9, A1, step 1.1, step 2.1, step 3.1] ∎

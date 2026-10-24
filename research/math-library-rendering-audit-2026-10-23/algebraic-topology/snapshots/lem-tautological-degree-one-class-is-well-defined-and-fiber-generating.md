---
id: lem-tautological-degree-one-class-is-well-defined-and-fiber-generating
kind: lemma
title: The tautological degree-one class is well defined and fiber generating
status: published
origin: pipeline
deps: ["def-tautological-degree-one-class-on-a-real-projective-bundle", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "lem-real-projective-space-cellular-homology-and-pinch-map", "thm-cellular-cochains-compute-cohomology-with-local-coefficients", "def-stiefel-space-grassmannian-and-tautological-bundle", "prop-cup-product-is-natural-unital-and-associative", "def-real-projective-bundle-and-tautological-line", "prop-compact-spaces-are-paracompact", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.1 independence of g and fiber normalization, printed pp.78–79"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 projective-bundle relation, printed pp.123–126"
verification:
  audited: 2026-09-22
---

## Statement

Assume AC, let $E\to B$ be a numerable real vector bundle of rank $n\geq1$ over
an paracompact Hausdorff CGWH base of CW homotopy type, and form $P(E)$, $\gamma_E$ and
$x_E\in H^1(P(E);\mathbb F_2)$ as in
[[def-tautological-degree-one-class-on-a-real-projective-bundle]]. Then:

1. the class $x_E$ does not depend on the classifying map of $\gamma_E$ used to
   define it;
2. for every $b\in B$, restriction to the fiber $P(E_b)\subseteq P(E)$ carries
   $x_E$ to the standard generator of $H^1(P(E_b);\mathbb F_2)$ when $n\geq2$,
   and to zero when $n=1$;
3. consequently $1,x_E,\ldots,x_E^{n-1}$ restrict on every fiber $P(E_b)\cong
   \mathbb{RP}^{n-1}$ to the standard $\mathbb F_2$-basis
   $1,a,\ldots,a^{n-1}$ of $H^*(P(E_b);\mathbb F_2)$.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq1$ over an paracompact Hausdorff CGWH base of CW homotopy type, and the construction of $x_E$ from a classifying map of $\gamma_E$.

[F1] Under AC, pullback of the universal real rank-one bundle gives a bijection from unbased homotopy classes of maps $[X,\mathbb{RP}^\infty]$ to numerable real line bundles on every paracompact Hausdorff CGWH space $X$ ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F2] Homotopic maps induce the same map on singular cohomology with every coefficient group ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F3] Restriction along the standard skeletal inclusion $i_m:\mathbb{RP}^m\hookrightarrow\mathbb{RP}^\infty$ is an isomorphism in degrees at most $m$ and sends the generator $a$ to the unique nonzero degree-one class on $\mathbb{RP}^m$ when $m\geq1$, and to zero when $m=0$; also $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F4] Real projective space $\mathbb{RP}^m$ has a finite CW structure with one cell in degrees $0,\ldots,m$ ([[lem-real-projective-space-cellular-homology-and-pinch-map]]). Cellular cochains with the constant $\mathbb F_2$ system compute singular cohomology, so there is no cohomology above degree $m$ ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F5] For $0\leq m$ and $m+1\leq N\leq\infty$ the inclusion $\operatorname{Gr}_1(\mathbb R^{m+1})\subseteq\operatorname{Gr}_1(\mathbb R^N)$ pulls the tautological line back to the tautological line over $\operatorname{Gr}_1(\mathbb R^{m+1})$, because the tautological bundle is the bundle of pairs $(W,v)$ with $v\in W$ and the inclusion is induced by the ambient coordinate inclusions ([[def-stiefel-space-grassmannian-and-tautological-bundle]]); a map with that pullback property is what it means to classify the line ([[def-tautological-degree-one-class-on-a-real-projective-bundle]]).

[F6] Pullback of cohomology is a unital ring homomorphism, so it carries $x^k$ to the $k$-th power of the pulled-back class ([[prop-cup-product-is-natural-unital-and-associative]]).

[F7] For a fiber $P(E_b)$ of the projective bundle, the restriction of $\gamma_E$ is the tautological line of the fiber $E_b$ ([[def-real-projective-bundle-and-tautological-line]]).

[F8] Every compact topological space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 Let $c,c':P(E)\to\mathbb{RP}^\infty$ be any two classifying maps as in the definition. They have isomorphic tautological pullbacks, both isomorphic to $\gamma_E$. By the projective definition $P(E)$ is paracompact Hausdorff CGWH and $\gamma_E$ is numerable, so injectivity of the bijection [F1] gives equality of the actual unbased homotopy classes $[c]=[c']$. Thus [F2] gives $c^*a=c'^*a$. This proves independence for all classifying maps, without limiting them to any particular embedding construction. AC is inherited from the stated projective and classification interfaces. [F1, F2, F7, A1]

2.1 Restriction to a fiber. Fix $b\in B$ and identify the fiber $P(E_b)$ with $\mathbb{RP}^{n-1}$ through a linear isomorphism $E_b\cong\mathbb R^n$; write $i:P(E_b)\hookrightarrow P(E)$ for the inclusion. By [F7] the pullback $i^*\gamma_E$ is the tautological line $\gamma^1$ over $P(E_b)\cong\mathbb{RP}^{n-1}$, and the standard inclusion $j:\mathbb{RP}^{n-1}\hookrightarrow\mathbb{RP}^\infty$ satisfies $j^*\gamma_1\cong\gamma^1$ by [F5]. On the other hand $(ci)^*\gamma_1\cong i^*c^*\gamma_1\cong i^*\gamma_E\cong\gamma^1$, so $ci$ and $j$ are two maps to $\mathbb{RP}^\infty$ with isomorphic pullbacks of the tautological line. The fiber is a compact Hausdorff finite CW complex, hence paracompact by [F8] and CGWH. Its tautological line is numerable by the same finite coordinate partition used in the projective definition. Injectivity of the classification bijection [F1] therefore gives an actual homotopy $ci\simeq j$ on this fiber. Therefore [F2] and the definition of $x_E$ give $$i^*x_E=(ci)^*a=j^*a,$$ which is the standard generator of $H^1(\mathbb{RP}^{n-1};\mathbb F_2)$ when $n-1\geq1$ and zero when $n-1=0$, by [F3]. This proves clause 2. [F1, F2, F3, F5, F7, F8, step 1.1]

3.1 Fiber basis. Restriction $i^*:H^*(P(E);\mathbb F_2)\to H^*(P(E_b);\mathbb F_2)$ is a unital ring homomorphism, so [F6] gives $i^*(x_E^k)=(i^*x_E)^k$. By step 2.1 this is $a^k$ for every $k\geq0$, with the convention that $a^0=1$ and that $a=0$ when $n=1$; in particular $i^*(1)=1$. By [F3], restriction is an isomorphism in every degree from zero to $n-1$, so its images $1,a,\ldots,a^{n-1}$ are nonzero and span their respective one-dimensional groups. By [F4] there are no groups in higher degrees. They therefore form an $\mathbb F_2$-basis; they are the restrictions of $1,x_E,\ldots,x_E^{n-1}$. For $n=1$ the fiber is $\mathbb{RP}^0$, a point, and the list reduces to $1$. For $n\geq2$ the class $i^*x_E=a$ is nonzero and generates $H^1$ of the fiber. This proves clause 3. [F3, F4, F6, step 2.1] ∎

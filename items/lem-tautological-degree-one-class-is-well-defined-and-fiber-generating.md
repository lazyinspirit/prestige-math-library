---
id: lem-tautological-degree-one-class-is-well-defined-and-fiber-generating
kind: lemma
title: The tautological degree-one class is well defined and fiber generating
status: draft
origin: pipeline
deps: ["def-tautological-degree-one-class-on-a-real-projective-bundle", "def-real-projective-bundle-and-tautological-line", "def-stiefel-space-grassmannian-and-tautological-bundle", "lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely", "thm-homotopic-maps-induce-equal-maps-in-singular-cohomology", "prop-cup-product-is-natural-unital-and-associative", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "lem-real-projective-space-cellular-homology-and-pinch-map", "cor-cohomology-over-a-field-is-dual-to-homology-over-that-field", "prop-compact-spaces-are-paracompact", "def-axiom-of-choice"]
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
---

## Statement

Assume AC, let $E\to B$ be a numerable real vector bundle of rank $n\geq1$ over
an admissible base, and form $P(E)$, $\gamma_E$ and
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

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq1$ over an admissible base, and the construction of $x_E$ from a classifying map of $\gamma_E$.

[F1] If two continuous maps $f_0,f_1:X\to\operatorname{Gr}_m(\mathbb F^\infty)$ have isomorphic pullbacks of the tautological bundle, then they are homotopic after the standard stabilization; in particular, classifying maps obtained from two numerable embeddings of one bundle are homotopic ([[lem-homotopic-grassmannian-maps-classify-isomorphic-bundles-and-conversely]]).

[F2] Homotopic maps induce the same map on singular cohomology with every coefficient group ([[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F3] Restriction along the standard skeletal inclusion $i_m:\mathbb{RP}^m\hookrightarrow\mathbb{RP}^\infty$ is an isomorphism in degrees at most $m$ and sends the generator $a$ to the unique nonzero degree-one class on $\mathbb{RP}^m$ when $m\geq1$, and to zero when $m=0$; also $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F4] For each $m\geq0$, $\mathbb{RP}^m$ has a CW structure with one cell in each dimension $0,\ldots,m$; under AC, cohomology over a field is the dual of homology, so $H^k(\mathbb{RP}^m;\mathbb F_2)\cong\mathbb F_2$ for $0\leq k\leq m$ and is zero for $k>m$ ([[lem-real-projective-space-cellular-homology-and-pinch-map]], [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]).

[F5] For $0\leq m\leq N\leq\infty$ the inclusion $\operatorname{Gr}_1(\mathbb R^{m+1})\subseteq\operatorname{Gr}_1(\mathbb R^N)$ pulls the tautological line back to the tautological line over $\operatorname{Gr}_1(\mathbb R^{m+1})$, because the tautological bundle is the bundle of pairs $(W,v)$ with $v\in W$ and the inclusion is induced by the ambient coordinate inclusions ([[def-stiefel-space-grassmannian-and-tautological-bundle]]); a map with that pullback property is what it means to classify the line ([[def-tautological-degree-one-class-on-a-real-projective-bundle]]).

[F6] Pullback of cohomology is a unital ring homomorphism, so it carries $x^k$ to the $k$-th power of the pulled-back class ([[prop-cup-product-is-natural-unital-and-associative]]).

[F7] For a fiber $P(E_b)$ of the projective bundle, the restriction of $\gamma_E$ is the tautological line of the fiber $E_b$ ([[def-real-projective-bundle-and-tautological-line]]).

[F8] Every compact topological space is paracompact ([[prop-compact-spaces-are-paracompact]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 The class is independent of the classifying map. Let $c$ and $c'$ be two maps obtained as in the definition of $x_E$ from numerable bundle embeddings of $\gamma_E$. Then $c^*\gamma_1\cong\gamma_E\cong c'^*\gamma_1$, because each embedding identifies $\gamma_E$ with the pullback along its image-plane map. The converse clause of [F1] applies to the two maps $c,c'$ with target $\operatorname{Gr}_1(\mathbb R^\infty)$: its published proof homotopes $c$ to $Oc$ and $c'$ to $Pc'$ through the Gram-normalized injective paths, interpolates the two image-plane embeddings using the given isomorphism of pullbacks, and concatenates; the inputs are the stable-Stiefel contraction and the canonical identification of a bundle with the pullback along its image-plane map, so the argument needs only the two maps at hand and not a hypothesis on $P(E)$. Hence $c\simeq c'$, and [F2] gives $c^*a=c'^*a$, that is, the same class $x_E$. The AC hypothesis is used exactly as in the construction of the embeddings. [F1, F2, A1]

2.1 Restriction to a fiber. Fix $b\in B$ and identify the fiber $P(E_b)$ with $\mathbb{RP}^{n-1}$ through a linear isometry $E_b\cong\mathbb R^n$; write $i:P(E_b)\hookrightarrow P(E)$ for the inclusion. By [F7] the pullback $i^*\gamma_E$ is the tautological line $\gamma^1$ over $P(E_b)\cong\mathbb{RP}^{n-1}$, and the standard inclusion $j:\mathbb{RP}^{n-1}\hookrightarrow\mathbb{RP}^\infty$ satisfies $j^*\gamma_1\cong\gamma^1$ by [F5]. On the other hand $(ci)^*\gamma_1\cong i^*c^*\gamma_1\cong i^*\gamma_E\cong\gamma^1$, so $ci$ and $j$ are two maps to $\mathbb{RP}^\infty$ with isomorphic pullbacks of the tautological line. The fiber $P(E_b)$ is compact Hausdorff, hence paracompact Hausdorff by [F8], so the converse clause of [F1] applies in its stated form and gives $ci\simeq j$. Therefore [F2] and the definition of $x_E$ give $$i^*x_E=(ci)^*a=j^*a,$$ which is the standard generator of $H^1(\mathbb{RP}^{n-1};\mathbb F_2)$ when $n-1\geq1$ and zero when $n-1=0$, by [F3]. This proves clause 2. [F1, F2, F3, F5, F7, F8, step 1.1]

3.1 Fiber basis. Restriction $i^*:H^*(P(E);\mathbb F_2)\to H^*(P(E_b);\mathbb F_2)$ is a unital ring homomorphism, so [F6] gives $i^*(x_E^k)=(i^*x_E)^k$. By step 2.1 this is $a^k$ for every $k\geq0$, with the convention that $a^0=1$ and that $a=0$ when $n=1$; in particular $i^*(1)=1$. By [F4] the classes $1,a,\ldots,a^{n-1}$ are exactly the nonzero elements in the finitely many nonzero degrees $0,\ldots,n-1$ of $H^*(\mathbb{RP}^{n-1};\mathbb F_2)$, hence form an $\mathbb F_2$-basis; they are the restrictions of $1,x_E,\ldots,x_E^{n-1}$. For $n=1$ the fiber is $\mathbb{RP}^0$, a point, and the list reduces to $1$. For $n\geq2$ the class $i^*x_E=a$ is nonzero and generates $H^1$ of the fiber. This proves clause 3. [F3, F4, F6, step 2.1] ∎
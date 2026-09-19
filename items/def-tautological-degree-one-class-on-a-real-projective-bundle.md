---
id: def-tautological-degree-one-class-on-a-real-projective-bundle
kind: definition
title: Tautological degree-one class on a real projective bundle
status: draft
origin: pipeline
deps: ["def-real-projective-bundle-and-tautological-line", "def-stiefel-space-grassmannian-and-tautological-bundle", "lem-a-bundle-embedding-produces-its-grassmannian-classifying-map", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.1 construction of the class x, printed pp.77–79"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 projective-bundle relation, printed pp.123–126"
---

## Definition

Assume AC, and let $E\to B$ be a numerable real vector bundle of rank $n\geq1$
over an admissible base. Put $P(E)$ and $\gamma_E$ as in
[[def-real-projective-bundle-and-tautological-line]]; both are numerable.

By the bundle embedding lemma there is a countable bundle embedding of
$\gamma_E$ into $P(E)\times\mathbb R^S$, and its image-plane map
$$c:P(E)\longrightarrow\operatorname{Gr}_1(\mathbb R^\infty)=\mathbb{RP}^\infty =\operatorname{Gr}_1(\mathbb R^\infty)$$
is continuous and satisfies $c^*\gamma_1\cong\gamma_E$, that is, $c$ classifies
$\gamma_E$. Here $\gamma_1$ denotes the tautological line over
$\mathbb{RP}^\infty$, and the finite-stage Grassmannian is regarded inside the
stable one by the coordinate inclusions.

Let $a\in H^1(\mathbb{RP}^\infty;\mathbb F_2)$ be the fixed generator of
$H^*(\mathbb{RP}^\infty;\mathbb F_2)\cong\mathbb F_2[a]$ supplied by
[[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]. The
**tautological degree-one class** of $E$ is
$$x_E:=c^*a\in H^1(P(E);\mathbb F_2),$$
computed for a chosen classifying map $c$ of $\gamma_E$. The definition uses
neither $w_1$ nor any Stiefel–Whitney class, and no Thom class. Independence of
$x_E$ from the choice of $c$ is proved in
[[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]]; all
later statements about $x_E$ are read modulo that lemma. For $n=1$ the
identification $P(E)\cong B$ of the projective-bundle definition presents
$x_E$ as a class in $H^1(B;\mathbb F_2)$.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq1$ over an admissible base, and the bundles $P(E),\gamma_E$ of [[def-real-projective-bundle-and-tautological-line]].

[F1] Under AC, a supplied numeration of a rank-one bundle gives a countable bundle embedding $j$ of it into the base times $\mathbb R^\infty$; the image-plane map $c_j$ is continuous and satisfies $c_j^*\gamma_1\cong \gamma_E$ ([[lem-a-bundle-embedding-produces-its-grassmannian-classifying-map]]).

[F2] The stable Grassmannian $\operatorname{Gr}_1(\mathbb R^\infty)$ is the chosen model $B\operatorname O(1)$ of [[def-stiefel-space-grassmannian-and-tautological-bundle]], and pullback of its tautological line gives natural bijections $[X,B\operatorname O(1)]\cong\operatorname{Vect}^{\mathbb R}_1(X)$ on paracompact Hausdorff CGWH spaces under AC ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F3] Infinite real projective space has $H^*(\mathbb{RP}^\infty;\mathbb F_2)\cong\mathbb F_2[a]$ with $|a|=1$, and $a$ is the fixed generator ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 A classifying map of $\gamma_E$ exists. By the projective-bundle definition, $\gamma_E\to P(E)$ is a numerable rank-one real bundle. Apply [F1] to a supplied numeration of $\gamma_E$, which is the numeration inherited from $E$ in the definition of the tautological line: it gives a countable embedding of $\gamma_E$ and the continuous image-plane map $c:P(E)\to\operatorname{Gr}_1(\mathbb R^\infty)$ with $c^*\gamma_1\cong\gamma_E$. This is the sense in which $c$ classifies $\gamma_E$; the classification bijection [F2] records that the same assignment is the classifying map of the line bundle and is natural for base maps. AC is used exactly through [F1] and [F2]. [F1, F2, A1]

2.1 The class is well typed. The generator $a$ of [F3] is a class in $H^1(\mathbb{RP}^\infty;\mathbb F_2)$, and $c^*$ is defined on it, so $x_E=c^*a$ is a class in $H^1(P(E);\mathbb F_2)$. The definition has fixed one classifying map; it asserts nothing about other choices, and the next lemma shows that any other choice gives the same class. When $n=1$, $P(E)\cong B$ and $\gamma_E\cong E$ by the projective-bundle definition, so $x_E=c^*a$ is the degree-one cohomology class obtained from a classifying map of $E$; the later classification theorem proves that this class determines $E$, but no such injectivity is asserted here. For the empty base, $P(E)=\varnothing$ and $H^1(P(E);\mathbb F_2)=0$, so the unique value is $x_E=0$; the rank-zero convention of the projective-bundle definition is not used here because $n\geq1$. [F2, F3, step 1.1] ∎

---
id: def-tautological-degree-one-class-on-a-real-projective-bundle
kind: definition
title: Tautological degree-one class on a real projective bundle
status: draft
origin: pipeline
deps: ["def-real-projective-bundle-and-tautological-line", "def-stiefel-space-grassmannian-and-tautological-bundle", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "def-axiom-of-choice"]
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
over an paracompact Hausdorff CGWH base of CW homotopy type. Put $P(E)$ and $\gamma_E$ as in
[[def-real-projective-bundle-and-tautological-line]]; both are numerable.

The projective total space is paracompact Hausdorff CGWH of CW type and the tautological line has the refined numeration of the projective-bundle definition. The stable-Grassmannian classification theorem therefore gives a classifying map
$$c:P(E)\longrightarrow\operatorname{Gr}_1(\mathbb R^\infty)=\mathbb{RP}^\infty$$
with $c^*\gamma_1\cong\gamma_E$, where $\gamma_1$ is the tautological line. Here a classifying map means precisely a map with this bundle-pullback isomorphism.

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

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq1$ over an paracompact Hausdorff CGWH base of CW homotopy type, and the bundles $P(E),\gamma_E$ of [[def-real-projective-bundle-and-tautological-line]].

[F1] Over the specified base under AC, the projective total space is paracompact Hausdorff CGWH of CW type and its tautological line is numerable on refined projective-coordinate charts ([[def-real-projective-bundle-and-tautological-line]]).

[F2] The stable Grassmannian $\operatorname{Gr}_1(\mathbb R^\infty)$ is the chosen model $B\operatorname O(1)$ of [[def-stiefel-space-grassmannian-and-tautological-bundle]], and pullback of its tautological line gives natural bijections $[X,B\operatorname O(1)]\cong\operatorname{Vect}^{\mathbb R}_1(X)$ on paracompact Hausdorff CGWH spaces under AC ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[F3] Infinite real projective space has $H^*(\mathbb{RP}^\infty;\mathbb F_2)\cong\mathbb F_2[a]$ with $|a|=1$, and $a$ is the fixed generator ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 By [F1], $\gamma_E$ is a numerable rank-one real bundle on the paracompact Hausdorff CGWH space $P(E)$. Surjectivity of the classification bijection [F2] gives a map $c:P(E)\to\operatorname{Gr}_1(\mathbb R^\infty)$ and a bundle isomorphism $c^*\gamma_1\cong\gamma_E$. This is all the classifying-map assertion needed here. AC is inherited from [F1] and [F2]. [F1, F2, A1]

2.1 The class is well typed. The generator $a$ of [F3] is a class in $H^1(\mathbb{RP}^\infty;\mathbb F_2)$, and $c^*$ is defined on it, so $x_E=c^*a$ is a class in $H^1(P(E);\mathbb F_2)$. The definition has fixed one classifying map; it asserts nothing about other choices, and the next lemma shows that any other choice gives the same class. When $n=1$, $P(E)\cong B$ and $\gamma_E\cong E$ by the projective-bundle definition, so $x_E=c^*a$ is the degree-one cohomology class obtained from a classifying map of $E$; no injectivity of the assignment of cohomology classes to line bundles is asserted or used here. For the empty base, $P(E)=\varnothing$ and $H^1(P(E);\mathbb F_2)=0$, so the unique value is $x_E=0$; the rank-zero convention of the projective-bundle definition is not used here because $n\geq1$. [F2, F3, step 1.1] ∎

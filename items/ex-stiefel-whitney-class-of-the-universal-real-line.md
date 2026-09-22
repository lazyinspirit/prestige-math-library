---
id: ex-stiefel-whitney-class-of-the-universal-real-line
kind: example
title: Stiefel–Whitney class of the universal real line
status: draft
origin: pipeline
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "def-real-projective-bundle-and-tautological-line", "def-tautological-degree-one-class-on-a-real-projective-bundle", "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating", "lem-mod-two-cohomology-ring-of-infinite-real-projective-space", "def-axiom-of-choice", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.1 normalization on the universal line, printed pp.79–80"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 universal line normalization, printed pp.123–126"
---

## Example

Assume AC. For the universal real line
$\gamma_1\to\mathbb{RP}^\infty=B\operatorname O(1)$, with $a$ the fixed
generator of $H^1(\mathbb{RP}^\infty;\mathbb F_2)$, the total Stiefel–Whitney
class is
$$w(\gamma_1)=1+a,\qquad\text{that is}\quad w_0(\gamma_1)=1,\ w_1(\gamma_1)=a,\ w_i(\gamma_1)=0\ (i\geq2).$$

## Facts & Assumptions

**Given:** AC and the universal real line $\gamma_1\to\mathbb{RP}^\infty$.

[F1] $H^*(\mathbb{RP}^\infty;\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$, and $a$ is the fixed generator ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F2] For a rank-one bundle $L$, the projection $P(L)\to B$ is a homeomorphism over $B$, the tautological line is $L$, and the defining relation of the projective bundle reads $x_L+w_1(L)=0$, so $w_1(L)=x_L$ and $w(L)=1+x_L$; the classes above the rank vanish by convention ([[def-real-projective-bundle-and-tautological-line]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F3] The tautological degree-one class of a line is the pullback of the fixed generator $a$ along any classifying map, independently of that map ([[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]]).

[F4] Stable real Grassmannians are CW complexes ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]), and their universal tautological bundles are the numerable bundles used by the classification bijection ([[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]], inherited from the projective-bundle coefficients, classification and mod-two projective cohomology supplies.

## Verification
1.1 The base is a CW complex by [F4], hence paracompact Hausdorff CGWH and admissible, and its tautological line is numerable by [F4]. The projective bundle of $\gamma_1$ is $\mathbb{RP}^\infty$ itself, since a point of $P(\gamma_1)$ is a line in a line, and its tautological line is $\gamma_1$; by [F2] the defining relation is $x_{\gamma_1}+w_1(\gamma_1)=0$ in $H^1(\mathbb{RP}^\infty;\mathbb F_2)$. [F2, F4]

2.1 By [F3], $x_{\gamma_1}$ is the pullback of $a$ along any classifying map of $\gamma_1$. The identity map of $\mathbb{RP}^\infty$ classifies $\gamma_1$, so $x_{\gamma_1}=\operatorname{id}^*a=a$. Substituting in step 1.1 and using that $-1=1$ in $\mathbb F_2$ gives $w_1(\gamma_1)=a$; by the rank convention $w_i(\gamma_1)=0$ for $i\geq2$ and $w_0=1$, so $w(\gamma_1)=1+a$. [F1, F2, F3, step 1.1]

3.1 Boundary cases. The degree-zero class is the unit $1$ in $H^0$ of the connected space $\mathbb{RP}^\infty$, matching the degree-zero convention. The bundle is a line, so every Stiefel–Whitney class of degree at least two vanishes, while $w_1=a$ is nonzero by [F1]. All these classes have $\mathbb F_2$ coefficients. The base is nonempty, so no empty-base convention is exercised, and no choice beyond [A1] is made. [F1, F2, A1, step 2.1] ∎

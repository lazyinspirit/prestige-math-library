---
id: thm-naturality-of-stiefel-whitney-classes
kind: theorem
title: Naturality of Stiefel–Whitney classes
status: draft
origin: pipeline
deps: ["def-stiefel-whitney-classes-from-the-projective-bundle-relation", "thm-mod-two-real-projective-bundle-theorem", "def-real-projective-bundle-and-tautological-line", "def-tautological-degree-one-class-on-a-real-projective-bundle", "lem-tautological-degree-one-class-is-well-defined-and-fiber-generating", "prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism", "prop-cup-product-is-natural-unital-and-associative", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Naturality following Theorem 3.1, printed pp.79–80"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§8 axioms (1)–(3), printed pp.97–110"
---

## Statement

Assume AC. Let $f:B'\to B$ be a continuous map of admissible bases and let
$E\to B$ be a numerable real bundle of rank $n\geq0$. Then
$$w_i(f^*E)=f^*w_i(E)\quad\text{for every }i\geq0,\qquad w(f^*E)=f^*w(E).$$
Consequently the Stiefel–Whitney classes depend only on the isomorphism class
of the bundle.

## Facts & Assumptions

**Given:** AC, admissible bases $B,B'$, a continuous map $f:B'\to B$, and a numerable real rank-$n$ bundle $E\to B$.

[F1] The projective bundle of a pullback is the pullback of the projective bundle: the tautological lines of $f^*E$ are the pullbacks of the tautological lines of $E$, so there is a canonical homeomorphism $f':P(f^*E)\to P(E)$ over $f$ carrying $\gamma_{f^*E}$ to $\gamma_E$. Both $\gamma$'s are numerable and the construction is obtained by gluing the linear charts of $E$ after applying $f$ ([[def-real-projective-bundle-and-tautological-line]]).

[F2] The tautological degree-one class is natural: for the map $f'$ of [F1], $x_{f^*E}=f'^*x_E$. Indeed $x$ is obtained from a classifying map of the tautological line, and composing that classifying map with $f'$ classifies the pulled-back line ([[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]]).

[F3] Under AC, $H^*(P(E);\mathbb F_2)$ is free over $H^*(B;\mathbb F_2)$ on $1,x_E,\ldots,x_E^{n-1}$, with unique monic relation $x_E^n+w_1(E)x_E^{n-1}+\cdots+w_n(E)=0$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[thm-mod-two-real-projective-bundle-theorem]]).

[F4] Pullback of cohomology is a unital ring homomorphism and cup products are natural ([[prop-cup-product-is-natural-unital-and-associative]]).

[F5] Canonical pullback comparisons: $\operatorname{id}^*E\cong E$ and $f^*(g^*E)\cong(gf)^*E$ ([[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 Pulling back the defining relation. Let $p:P(E)\to B$ and $p':P(f^*E)\to B'$ be the projections, and let $f':P(f^*E)\to P(E)$ be the map of [F1]. Applying the ring homomorphism $f'^*$ to the relation of [F3] and using [F4] together with $f'p'=pf$ gives $$f'^*\Bigl(x_E^n+\sum_{i=1}^{n}p^*w_i(E)\smile x_E^{n-i}\Bigr)=x_{f^*E}^n+\sum_{i=1}^{n}p'^*f^*w_i(E)\smile x_{f^*E}^{n-i}=0,$$ where the first equality uses [F2] for the $x$-powers. Thus the displayed class is a monic degree-$n$ relation for $x_{f^*E}$ over the base $B'$. [F2, F3, F4]

2.1 Comparing with the defining relation of $f^*E$. The pullback $f^*E$ is a numerable real rank-$n$ bundle over the admissible base $B'$, and $f^*E$ is the zero bundle exactly when $E$ is, so for $n\geq1$ [F3] provides the unique monic relation $x_{f^*E}^n+w_1(f^*E)x_{f^*E}^{n-1}+\cdots+w_n(f^*E)=0$ of $f^*E$. By uniqueness in step 1.1 the coefficients agree: $$w_i(f^*E)=f^*w_i(E)\qquad(1\leq i\leq n).$$ For $i=0$ both sides are the unit $1$ by the conventions, and for $i>n$ both sides are $0$, since $f^*0=0$. Summing the finitely many nonzero terms gives $w(f^*E)=\sum_if^*w_i(E)=f^*w(E)$ by [F4]. [F3, F4, step 1.1]

3.1 Isomorphism invariance. Let $\varphi:E\to E'$ be a bundle isomorphism over the identity of $B$. It induces a homeomorphism $P(E)\to P(E')$ over $B$ carrying tautological lines to tautological lines, hence carrying $x_E$ to $x_{E'}$ by the defining construction of the classes from classifying maps; the defining relation of $E$ is therefore carried to the defining relation of $E'$, and uniqueness of the monic relation gives $w_i(E)=w_i(E')$ for all $i$. When $n=0$ both bundles are the zero bundle, and the conventions give $w=1$ on both sides. [F3, step 2.1]

4.1 Boundary cases. For $n=0$ the bundle and its pullback are zero bundles, $w=1$ on both sides, and the identity $w(f^*0)=f^*w(0)=f^*1=1$ holds by [F4]. For $n=1$ the relation is $x+w_1=0$ and the argument is the displayed one with $i=1$. For the empty base $B$ or $B'$ all groups are zero and all displayed classes vanish, with the unit conventions on the zero ring. The identity map is the case $f=\operatorname{id}$, where [F5] identifies the pullback with $E$ itself. AC is used only through [F3], as recorded. [F3, F4, F5, A1, step 2.1, step 3.1] ∎

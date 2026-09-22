---
id: thm-naturality-of-stiefel-whitney-classes
kind: theorem
title: Naturality of Stiefel–Whitney classes
status: published
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
verification:
  audited: 2026-09-22
---

## Statement

Assume AC. Let $f:B'\to B$ be a continuous map of paracompact Hausdorff CGWH bases of CW homotopy type and let
$E\to B$ be a numerable real bundle of rank $n\geq0$. Then
$$w_i(f^*E)=f^*w_i(E)\quad\text{for every }i\geq0,\qquad w(f^*E)=f^*w(E).$$
Consequently the Stiefel–Whitney classes depend only on the isomorphism class
of the bundle.

## Facts & Assumptions

**Given:** AC, paracompact Hausdorff CGWH bases $B,B'$ of CW homotopy type, a continuous map $f:B'\to B$, and a numerable real rank-$n$ bundle $E\to B$.

[F1] Projective bundles and their tautological lines are glued from the local models $U\times\mathbb{RP}^{n-1}$ and $\{(b,\ell,v):v\in\ell\}$ with the transition matrices of the vector bundle. Their numerations and base-space properties are as in [[def-real-projective-bundle-and-tautological-line]].

[F2] The class $x_E$ is $c^*a$ for any classifying map $c$ of $\gamma_E$, and is independent of that choice ([[def-tautological-degree-one-class-on-a-real-projective-bundle]], [[lem-tautological-degree-one-class-is-well-defined-and-fiber-generating]]).

[F3] For $n\geq1$, under AC, $H^*(P(E);\mathbb F_2)$ is free over $H^*(B;\mathbb F_2)$ on $1,x_E,\ldots,x_E^{n-1}$, with unique monic relation $x_E^n+w_1(E)x_E^{n-1}+\cdots+w_n(E)=0$ ([[def-stiefel-whitney-classes-from-the-projective-bundle-relation]], [[thm-mod-two-real-projective-bundle-theorem]]). The definition also gives $w_0=1$, $w_i=0$ for $i>n$, and $w(0)=1$.

[F4] Pullback of cohomology is a unital ring homomorphism and cup products are natural ([[prop-cup-product-is-natural-unital-and-associative]]).

[F5] Canonical pullback comparisons: $\operatorname{id}^*E\cong E$ and $f^*(g^*E)\cong(gf)^*E$ ([[prop-vector-bundle-pullback-is-functorial-up-to-canonical-isomorphism]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Proof
1.1 Pulling back the defining relation. Assume first that $n\geq1$. Let $p:P(E)\to B$ and $p':P(f^*E)\to B'$ be the projections, and let $f':P(f^*E)\to P(E)$ be the canonical map. In a chart $E|_U\cong U\times\mathbb R^n$, it is $(b',\ell)\mapsto(f(b'),\ell)$. These formulas commute with transition matrices, so they glue to a continuous map and identify $P(f^*E)$ homeomorphically with $B'\times_B P(E)$, not generally with $P(E)$. The corresponding formulas on vectors in $\ell$ give $\gamma_{f^*E}\cong f'^*\gamma_E$ by [F1]. If $c$ classifies $\gamma_E$, then $c f'$ classifies $\gamma_{f^*E}$ by [F5], hence [F2] and [F4] give $x_{f^*E}=(c f')^*a=f'^*x_E$. Applying the ring homomorphism $f'^*$ to the relation of [F3] and using [F4] together with $pf'=fp'$ gives $$f'^*\Bigl(x_E^n+\sum_{i=1}^{n}p^*w_i(E)\smile x_E^{n-i}\Bigr)=x_{f^*E}^n+\sum_{i=1}^{n}p'^*f^*w_i(E)\smile x_{f^*E}^{n-i}=0,$$ where the equality uses the just-proved naturality of $x$. Thus the displayed class is a monic degree-$n$ relation for $x_{f^*E}$ over the base $B'$. [F1, F2, F3, F4, F5]

2.1 Comparing with the defining relation of $f^*E$. For $n\geq1$, the pullback $f^*E$ is a numerable real rank-$n$ bundle over the admissible base $B'$, so [F3] provides its unique monic relation $x_{f^*E}^n+w_1(f^*E)x_{f^*E}^{n-1}+\cdots+w_n(f^*E)=0$. By the uniqueness in [F3], comparing with step 1.1, the coefficients agree: $$w_i(f^*E)=f^*w_i(E)\qquad(1\leq i\leq n).$$ For $i=0$ both sides are the unit $1$ by the conventions, and for $i>n$ both sides are $0$, since $f^*0=0$. Summing the finitely many nonzero terms gives $w(f^*E)=\sum_if^*w_i(E)=f^*w(E)$ by [F4]. When $n=0$, neither projective bundle nor $x_E$ is used: both $E$ and $f^*E$ are rank-zero bundles and the defining convention gives $w_0=1$ and $w_i=0$ for $i>0$, so the same conclusions hold directly. [F3, F4, step 1.1]

3.1 Isomorphism invariance. Let $\varphi:E\to E'$ be a bundle isomorphism over the identity of $B$. It induces a homeomorphism $P(E)\to P(E')$ over $B$ carrying tautological lines to tautological lines, write this homeomorphism as $P\varphi$. The vector formula gives $(P\varphi)^*\gamma_{E'}\cong\gamma_E$, so composition of a classifying map of $\gamma_{E'}$ with $P\varphi$ gives $(P\varphi)^*x_{E'}=x_E$, exactly as in step 1.1; the defining relation of $E$ is therefore carried to the defining relation of $E'$, and uniqueness of the monic relation gives $w_i(E)=w_i(E')$ for all $i$. When $n=0$ both bundles are the zero bundle, and the conventions give $w=1$ on both sides. [F1, F2, F3, F4, F5, step 1.1, step 2.1]

4.1 Boundary cases. For $n=0$ the bundle and its pullback are zero bundles, $w=1$ on both sides, and the identity $w(f^*0)=f^*w(0)=f^*1=1$ holds by [F4]. For $n=1$ the relation is $x+w_1=0$ and the argument is the displayed one with $i=1$. If $B'$ is empty, both sides of every naturality equality lie in its zero cohomology ring and vanish. If $B$ is empty, existence of $f$ forces $B'$ empty too. The identity map is the case $f=\operatorname{id}$, where [F5] identifies the pullback with $E$ itself. AC is inherited through the projective-space, classification and relation interfaces [F1]–[F3]. [F1, F2, F3, F4, F5, A1, step 2.1, step 3.1] ∎

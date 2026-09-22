---
id: def-stiefel-whitney-classes-from-the-projective-bundle-relation
kind: definition
title: Stiefel–Whitney classes from the projective-bundle relation
status: published
origin: pipeline
deps: ["thm-mod-two-real-projective-bundle-theorem", "def-real-projective-bundle-and-tautological-line", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Theorem 3.1, definition of the classes w_i, printed pp.78–80"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 34 projective-bundle relation, printed pp.123–126"
    - title: Milnor and Stasheff, Characteristic Classes
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "§8 existence of Stiefel–Whitney classes, printed pp.97–114"
verification:
  audited: 2026-09-22
---

## Definition

Assume AC, let $E\to B$ be a numerable real vector bundle of rank $n\geq1$ over
a paracompact Hausdorff CGWH base of CW homotopy type (an admissible base on
this page), and let
$x_E\in H^1(P(E);\mathbb F_2)$ be its tautological degree-one class. By
[[thm-mod-two-real-projective-bundle-theorem]] there are unique classes
$c_i\in H^i(B;\mathbb F_2)$, $1\leq i\leq n$, with
$$x_E^n+c_1x_E^{n-1}+\cdots+c_n=0\qquad\text{in }H^n(P(E);\mathbb F_2).$$
The **Stiefel–Whitney classes** of $E$ are these coefficients:
$$w_i(E):=c_i\in H^i(B;\mathbb F_2)\quad(1\leq i\leq n).$$
The definition is completed by the conventions $w_0(E):=1\in H^0(B;\mathbb F_2)$
and $w_i(E):=0$ for $i>n$, and the **total Stiefel–Whitney class** is the
finite sum
$$w(E):=\sum_{i\geq0}w_i(E)=1+w_1(E)+\cdots+w_n(E)\in H^*(B;\mathbb F_2).$$
For the zero bundle of rank $0$ the conventions give $w(0_B)=1$.

Applying the definition to a line bundle $L\to B$: here $n=1$,
$P(L)\cong B$ over $B$ and $\gamma_L\cong L$ under that identification, so the
relation is $x_L+w_1(L)=0$, that is, $w_1(L)=x_L$, and
$w(L)=1+x_L$.

## Facts & Assumptions

**Given:** AC, a numerable real rank-$n$ bundle $E\to B$ with $n\geq1$ over a paracompact Hausdorff CGWH base of CW homotopy type, its projective bundle, and the class $x_E$.

[F1] Under AC, for a numerable positive-rank real bundle over a paracompact
Hausdorff CGWH base of CW homotopy type, $H^*(P(E);\mathbb F_2)$ is free over
$H^*(B;\mathbb F_2)$ on $1,x_E,\ldots,x_E^{n-1}$, and there is a unique monic
degree-$n$ relation $x_E^n+c_1x_E^{n-1}+\cdots+c_n=0$ with
$c_i\in H^i(B;\mathbb F_2)$, which generates all polynomial relations
([[thm-mod-two-real-projective-bundle-theorem]]).

[F2] For a rank-one bundle $L$, the projection $P(L)\to B$ is a homeomorphism over $B$ and $\gamma_L$ corresponds to $L$ ([[def-real-projective-bundle-and-tautological-line]]).

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The classes $w_i(E)$ are well defined and have the asserted degrees and conventions. Existence and uniqueness of the coefficients $c_i$ is [F1], so each $w_i(E)$ is a single well-defined element of $H^i(B;\mathbb F_2)$; the relation is monic because its $x^n$-coefficient is $1$. The conventions $w_0=1$ and $w_i=0$ for $i>n$ extend the definition to all indices, and the total class is the finite sum of the nonzero terms, so it is a class in $H^0\oplus\cdots\oplus H^n$. For the zero bundle no positive coefficients exist and the total class is $1$. The construction consumes AC only through [F1]. [F1, A1]

2.1 The rank-one case. Let $L\to B$ be a numerable real line bundle. By [F2], $P(L)\cong B$ over $B$ and the tautological line $\gamma_L$ is $L$, so $x_L\in H^1(P(L);\mathbb F_2)=H^1(B;\mathbb F_2)$ and the defining relation of [F1] reads $x_L+w_1(L)=0$ in $H^1(B;\mathbb F_2)$. Since $-1=1$ in $\mathbb F_2$, this gives $w_1(L)=x_L$; the conventions give $w_i(L)=0$ for $i\geq2$ and $w(L)=1+x_L$. [F1, F2, step 1.1, algebra]

3.1 Boundary cases. In rank one the fiber $\mathbb{RP}^0$ is a point, so the base of the relation is the whole base $B$ and the displayed computation is literal. Over the empty base every group is zero, the relation is the zero relation, and the conventions give the zero classes with $w_0=1=0$ in the zero ring. The rank-zero convention $w(0_B)=1$ is the unit, matching the degree-zero convention used in every rank. [F1, F2, step 1.1, step 2.1] ∎

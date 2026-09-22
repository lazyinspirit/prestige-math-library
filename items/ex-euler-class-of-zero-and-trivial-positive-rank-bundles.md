---
id: ex-euler-class-of-zero-and-trivial-positive-rank-bundles
kind: example
title: Euler class of zero and trivial positive-rank bundles
status: draft
origin: pipeline
deps: ["def-euler-class-by-zero-section-pullback-of-the-thom-class", "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish", "def-r-oriented-vector-bundle-and-orientation-local-system", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "def-axiom-of-choice"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Allen Hatcher, Vector Bundles & K-Theory
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "§3.2 Euler class conventions and trivial bundles, printed pp.90–92"
    - title: Haynes Miller, MIT 18.906 Algebraic Topology II lecture notes
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Lecture 35 rank-zero and trivial cases, printed pp.129–132"
---

## Example

Assume AC. For every base $B$ in the general Thom scope and every commutative
ring $R$:

1. the zero bundle of rank zero with its standard unit orientation has
   $e(0_B,1)=1\in H^0(B;R)$;
2. every trivial bundle $\varepsilon_B^n$ of positive rank $n\geq1$, with its
   standard product $R$-orientation, has
   $e(\varepsilon_B^n)=0\in H^n(B;R)$.

## Facts & Assumptions

**Given:** AC, a base $B$ in the general Thom scope, a commutative ring $R$ and an integer $n\geq1$.

[F1] The Euler class is $e(\xi)=s^*j^*(u_\xi)$; in rank zero the maps $j$ and $s$ are identities and $e(0_B,o)=o$ for the supplied orientation $o$, so the standard unit orientation gives $e(0_B,1)=1$ ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F2] Under AC, an $R$-oriented numerable real bundle of positive rank over a base in the general Thom scope has zero Euler class if it admits a nowhere-zero section; no converse is asserted ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F3] Give $\varepsilon_B^n=B\times\mathbb R^n$ its product Euclidean metric.
The global product chart identifies every fiber disk pair with
$(D^n,S^{n-1})$ and every stalk of its $R$-orientation local system with
$H^n(D^n,S^{n-1};R)\cong R$. The constant fiber class corresponding to
$1_R$ generates every stalk and is compatible in the single global chart, so
it is an $R$-orientation by
[[def-r-oriented-vector-bundle-and-orientation-local-system]]. For
$R=\mathbb Z$ it is the coefficient orientation induced by the standard
ordinary orientation of $\mathbb R^n$ in
[[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]. The formula
$b\mapsto(b,e_1)$ is a continuous section by the product topology and is
nowhere zero because $e_1\ne0$.

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The rank-zero value. Give $0_B$ the standard unit orientation. Its disk bundle is $B$, its sphere bundle is empty, and the zero section and relative-to-absolute map are identities; fiber normalization makes the Thom class the unit $1$ in degree zero. Hence $e(0_B,1)=s^*j^*(1)=1\in H^0(B;R)$ by [F1]. For another supplied rank-zero orientation $o$, the same calculation instead gives $e(0_B,o)=o$. [F1]

1.2 The trivial bundle of positive rank. For $n\geq1$ the constant section $b\mapsto(b,e_1)$ of $\varepsilon_B^n$ is nowhere zero and continuous. Its global product chart, together with the constant partition of unity $1$, makes the bundle numerable, while [F3] supplies its standard product $R$-orientation. The standing hypothesis places $B$ in the general Thom scope. Thus every hypothesis of [F2] holds, and $e(\varepsilon_B^n)=0\in H^n(B;R)$. [F2, F3]

2.1 Boundary cases. For the empty base the unique cohomology class in every degree is zero, and the standard rank-zero convention reads $e(0,1)=1=0$ in the zero ring; the two displayed identities remain consistent. For a point base, $\varepsilon^0$ with unit orientation contributes $e=1\in H^0(*;R)=R$ and $\varepsilon^n$ with $n\geq1$ contributes $e=0\in H^n(*;R)=0$. For the zero ring both classes coincide with the unique element, so the identities hold. The section of step 1.2 is a specified function and no choice is made in it; AC is used only through the Thom suppliers that give the Euler class its value. [F1, F2, F3, A1, step 1.1, step 1.2] ∎

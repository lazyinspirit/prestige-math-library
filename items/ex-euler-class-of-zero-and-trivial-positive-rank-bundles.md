---
id: ex-euler-class-of-zero-and-trivial-positive-rank-bundles
kind: example
title: Euler class of zero and trivial positive-rank bundles
status: draft
origin: pipeline
deps: ["def-euler-class-by-zero-section-pullback-of-the-thom-class", "prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish", "def-oriented-real-vector-bundle-and-oriented-frame-bundle", "def-axiom-of-choice"]
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

1. the zero bundle of rank zero has $e(0_B)=1\in H^0(B;R)$;
2. every trivial bundle $\varepsilon_B^n$ of positive rank $n\geq1$, with its
   standard orientation, has $e(\varepsilon_B^n)=0\in H^n(B;R)$.

## Facts & Assumptions

**Given:** AC, a base $B$ in the general Thom scope, a commutative ring $R$ and an integer $n\geq1$.

[F1] The Euler class is $e(\xi)=s^*j^*(u_\xi)$; in rank zero the maps $j$ and $s$ are identities, $u=1$, and $e(0_B)=1$ ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[F2] If an oriented positive-rank bundle admits a nowhere-zero section then its Euler class vanishes; no converse is asserted ([[prop-a-nowhere-zero-section-forces-the-euler-class-to-vanish]]).

[F3] The standard orientation of $\mathbb R^n$ defines the constant product orientation of $\varepsilon_B^n=B\times\mathbb R^n$ in the sense of [[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]. The formula $b\mapsto(b,e_1)$ is a continuous section by the product topology and is nowhere zero because $e_1\ne0$.

[A1] AC is the Axiom of Choice in the form fixed by [[def-axiom-of-choice]].

## Verification
1.1 The rank-zero value. For the zero bundle $0_B$ of rank zero the disk bundle is $B$, the sphere bundle is empty, and the zero section and relative-to-absolute map are identities; the normalized Thom class is the unit $1$ in degree zero. Hence $e(0_B)=s^*j^*(1)=1\in H^0(B;R)$ by [F1]. [F1]

1.2 The trivial bundle of positive rank. For $n\geq1$ the constant section $b\mapsto(b,e_1)$ of $\varepsilon_B^n$ is nowhere zero, and it is continuous because it is the product of the identity of $B$ with a constant map. The standard product orientation orients $\varepsilon_B^n$ compatibly with the section. By [F2] the Euler class vanishes: $e(\varepsilon_B^n)=0\in H^n(B;R)$. [F2, F3]

2.1 Boundary cases. For the empty base the unique cohomology class in every degree is zero, and the rank-zero convention reads $e(0)=1=0$ in the zero ring; the two displayed identities remain consistent. For a point base, $\varepsilon^0$ contributes $e=1\in H^0(*;R)=R$ and $\varepsilon^n$ with $n\geq1$ contributes $e=0\in H^n(*;R)=0$. For the zero ring both classes coincide with the unique element, so the identities hold. The section of step 1.2 is a specified function and no choice is made in it; AC is used only through the Thom suppliers that give the Euler class its value. [F1, F2, F3, A1, step 1.1, step 1.2] ∎

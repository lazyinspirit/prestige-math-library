---
id: cor-mod-two-evenness-does-not-by-itself-supply-a-whitney-move
kind: corollary
title: Mod-two evenness does not by itself supply a Whitney move
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps:
- def-countable-choice
- def-local-oriented-intersection-sign
- def-mod-two-intersection-number
- def-oriented-intersection-number
- def-oriented-smooth-manifold-and-oriented-chart
- cor-oriented-intersection-reduces-to-mod-two-intersection
- thm-oriented-intersection-number-is-homotopy-invariant
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press
      2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 7 §7.2, printed pp. 136-137 (algebraic intersection as a signed group-ring count) and §7.3
      (the sign condition $I(x)=-I(y)$), together with the contrast in the unoriented (mod-two) setting
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University
      Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: 'Chapter 6, printed pp. 67-69 (intersection numbers of complementary submanifolds: signs, deformation
      invariance, and the orientation conventions)'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
dependency_level: 0
---

## Statement

Assume $\mathrm{AC}_\omega$ for the homotopy-invariance supplier. On the oriented torus $T^2=\mathbb R^2/\mathbb Z^2$, orient $A=S^1\times\{0\}$ and $B=\{(\theta,2\theta):\theta\in S^1\}$ by increasing $\theta$. Then $A\cap B$ consists of exactly two transverse points, each of local oriented sign $+1$. Thus $I_2(A,B)=0$ but $I(A,B)=2\ne0$. Homotopy invariance of oriented intersection implies that no homotopy, hence no isotopy, of $A$ can make it disjoint from $B$. In particular even parity alone does not supply a Whitney move: the only pair already fails the necessary opposite-sign condition. This example establishes that mod-two vanishing does not imply oriented cancellability; it makes no separate claim about the independence of the label and framing conditions.

## Facts & Assumptions

**Given:** The torus $T^2=\mathbb R^2/\mathbb Z^2$ with its orientation $d\theta\wedge dy$, the oriented embedded circles $A=S^1\times\{0\}$ and $B=\{(\theta,2\theta \bmod 1):\theta\in S^1\}$, both oriented by increasing $\theta$, and the inclusion $i_A:A\to T^2$.

[F1] For compact oriented complementary-dimensional submanifolds $A,B\subseteq M$, where one is compact and the other closed, one sets $I(A,B):=I(i_A,B)$ with $i_A$ the inclusion, so the first factor is the submanifold $A$ ([[def-oriented-intersection-number]]).

[F2] For transverse oriented embedded submanifolds $A^a,B^b\subseteq M$ with $a+b=n$ one takes $f$ and $g$ to be the inclusion maps; the sign at $p\in A\cap B$ then compares $T_pA\oplus T_pB\to T_pM$ with $A$ first ([[def-local-oriented-intersection-sign]]).

[F3] For compact complementary-dimensional transverse submanifolds $A,B\subseteq M$, where one is compact and the other closed, $I_2(A,B):=I_2(i_A,B)$ with $i_A$ the inclusion, and $I_2$ is the cardinality of the transverse intersection reduced modulo two ([[def-mod-two-intersection-number]]).

[F4] In the common setting of compact oriented complementary submanifolds, the oriented and mod 2 intersection numbers satisfy $I(A,B)\equiv I_2(A,B)\pmod 2$ ([[cor-oriented-intersection-reduces-to-mod-two-intersection]]).

[F5] If a smooth family $F:[0,1]\times X\to M$ is transverse to $Z$, including on the boundary faces, then $I(F_0,Z)=I(F_1,Z)$; consequently $I(\cdot,Z)$ is well defined on homotopy classes of smooth maps, any two transverse maps in the same homotopy class give the same number, and the definition extends to all smooth maps ([[thm-oriented-intersection-number-is-homotopy-invariant]]). That theorem assumes the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) for the transverse representatives it selects.

## Proof

**Proof technique:** direct; compute the two local signs, then apply the homotopy-invariance consequence on the oriented intersection number.

1.1 The parametrization $\theta\mapsto(\theta,2\theta \bmod 1)$ is injective on $S^1=\mathbb R/\mathbb Z$ because its first coordinate is, so $B$ is an embedded circle with tangent spanned by $(1,2)$, while $T_pA$ is spanned by $(1,0)$; hence $A\cap B=\{(\theta,0):2\theta\equiv0\}=\{(0,0),(1/2,0)\}$, at both of which $T_pA+T_pB=T_pT^2$, so the two intersections are transverse, and the isomorphism $T_pA\oplus T_pB\to T_pT^2$ with the factor $A$ first has, in the basis $(\partial_\theta,\partial_y)$, the matrix with columns $(1,0)$ and $(1,2)$ and determinant $2>0$, so both local signs equal $+1$. [F2, given, construct, algebra]

2.1 Summing the two local signs $+1$ over the transverse intersection as in [F1], and counting its two points modulo two as in [F3], gives $I(A,B)=2$ and $I_2(A,B)=0$; the two values are congruent modulo $2$, as [F4] requires, and the example therefore has $I_2(A,B)=0$ while $I(A,B)\ne0$. [step 1.1, F1, F3, F4, algebra]

3.1 Suppose a smooth homotopy of $i_A$ ended at a smooth map $F_1$ whose image meets $B$ in no point; then $F_1$ is transverse to $B$ with empty preimage, so $I(F_1,B)=0$ by [F1], while the homotopy-invariance consequence [F5], applied to the two transverse maps $i_A$ and $F_1$ in the same homotopy class, gives $I(i_A,B)=I(F_1,B)$, which with step 2.1 is the contradiction $2=0$. Since an isotopy of $A$ is such a homotopy, no isotopy can make $A$ disjoint from $B$; in particular no Whitney cancellation of the pair — an isotopy removing the two points and creating no new ones — is available, and the necessary opposite-sign hypothesis is violated because both local signs equal $+1$ by step 1.1. The homotopy-invariance input [F5] assumes $\mathrm{AC}_\omega$, inherited here through [[def-countable-choice]], while steps 1.1-2.1 are choice-free. [step 2.1, F1, F5, given] ∎

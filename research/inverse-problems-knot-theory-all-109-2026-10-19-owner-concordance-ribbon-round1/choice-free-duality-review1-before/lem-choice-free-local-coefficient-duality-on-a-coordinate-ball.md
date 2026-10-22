---
id: lem-choice-free-local-coefficient-duality-on-a-coordinate-ball
kind: lemma
title: Local-coefficient cap duality on a coordinate ball without choice
status: draft
origin: session
deps: [def-compactly-supported-cohomology-with-local-coefficients, def-cup-and-cap-products-with-local-coefficient-pairings, lem-canonical-twisted-fundamental-classes-over-compact-subsets, thm-excision-and-mayer-vietoris-with-local-coefficients, thm-pair-long-exact-sequences-with-local-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology, local calculation in Poincare duality and local coefficients
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

Let $B$ be an oriented coordinate ball of dimension $n\ge0$ and let $\mathcal L$ be a local system of abelian groups on $B$. Cap with the integral support orientation classes gives isomorphisms
$$H_c^k(B;\mathcal L)\xrightarrow{\sim}H_{n-k}(B;\mathcal L)$$
in every integer degree. Under a coordinate contraction trivialization with fiber $A$, both sides are $A$ for $k=n$ and zero otherwise, and the displayed nonzero map is the identity on $A$. No choice principle is assumed; any commuting coefficient-ring action is respected.

## Facts & Assumptions

**Given:** The coordinate ball, its orientation, and the local system. Use the given chart to identify the ball with $\mathbb R^n$.

[F1] Compact-support representatives and their equality criterion are defined by relative local cohomology. [[def-compactly-supported-cohomology-with-local-coefficients]]

[F2] Pair sequences and Mayer–Vietoris hold for local coefficients by explicit small-chain homotopies. [[thm-pair-long-exact-sequences-with-local-coefficients]], [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

[F3] Integral support orientation classes exist without choice, and the actual cap product is front-face evaluation followed by retention of the back face. [[lem-canonical-twisted-fundamental-classes-over-compact-subsets]], [[def-cup-and-cap-products-with-local-coefficient-pairings]]

## Proof

1.1 Fix the coordinate center $0$. Transport along straight radii trivializes $\mathcal L$ with fiber $A=\mathcal L_0$; triangular straight homotopies show that these identifications intertwine every path transport, since the ball is contractible. A contraction induces the usual singular prism homotopy by triangulating each simplex times the interval into its finitely many standard prisms, carrying constant coefficients unchanged. Its boundary identity proves directly that a contractible space has cohomology $A$ in degree zero and zero in positive degrees, with no universal-coefficient theorem or chosen primitive family. It also computes homology as $A$ in degree zero and zero elsewhere. For two points the cochain complex splits as two such complexes, so its reduced degree-zero cohomology is $A$ by the difference of the two values. [given, construct, algebra]

2.1 The same coefficient calculation gives $\widetilde H^k(S^m;A)=A$ for $k=m$ and zero otherwise, for each $m\ge0$. Start with the two-point sphere from step 1.1. For $m\ge1$, cover $S^m$ by the complements of the two poles; both are contractible and their intersection retracts onto $S^{m-1}$. The reduced cohomology Mayer–Vietoris sequence in [F2] identifies each group with the preceding degree on that intersection. This is a finite induction. These identifications are normalized by evaluation on the oriented sphere cycle: split a triangulated sphere into its two oriented hemispheres; the connecting cochain evaluates on their sum as the preceding cochain evaluates on their common boundary. This follows from $(\delta a)(c)=a(\partial c)$ with the difference signs of Mayer–Vietoris. Starting with the oriented difference of the two points, induction proves that evaluation on the oriented fundamental sphere cycle is the resulting isomorphism to $A$, including its sign. [F2, step 1.1, construct, algebra]

3.1 For $n\ge1$, closed concentric balls are cofinal among compact supports in $\mathbb R^n$. The complement of a closed radius-$r$ ball retracts radially onto any larger concentric sphere. Since the ambient space is contractible, its pair sequence in [F2] and step 2.1 identify $H^k(\mathbb R^n,\mathbb R^n\setminus\overline B_r;A)$ with $A$ for $k=n$ and with zero otherwise. The isomorphism is evaluation on a positively oriented relative ball cycle: the pair connector and $(\delta a)(c)=a(\partial c)$ identify it with the sphere evaluation of step 2.1. Enlargement from $r$ to a larger radius preserves this normalization, since the two oriented sphere cycles bound the oriented intervening annulus and the relative ball cycles restrict to the same local orientation. Hence the direct limit in [F1] has exactly the asserted groups, without a choice of representatives at infinitely many radii. For $n=0$ the ball is a point and the same conclusion is step 1.1. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 A finite triangulated coordinate ball enclosing the support, with boundary disjoint from it, represents the canonical support class by [F3]. In degree $n$, the cap formula sends a relative cocycle $\alpha$ and this oriented cycle $z$ to a zero-chain whose sum of coefficients is $\alpha(z)$: each retained back face is a vertex and each coefficient is the front evaluation on that simplex. The coefficient sum identifies $H_0(B;A)$ with $A$ by the contraction in step 1.1. Step 3.1 shows that $\alpha\mapsto\alpha(z)$ is exactly the source identification with $A$. Thus cap is the identity in its only nonzero degree, and it is the unique zero-group isomorphism in all other degrees. Every transport, prism, finite hemisphere induction, and cofinal-support comparison commutes with any commuting scalar action. Only one center and finitely many geometric data at a time were used, so no choice axiom is needed. [F3, step 1.1, step 3.1, construct, algebra] ∎

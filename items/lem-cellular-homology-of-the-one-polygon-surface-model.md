---
id: lem-cellular-homology-of-the-one-polygon-surface-model
kind: lemma
title: Cellular homology of the one-polygon surface model
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-polygonal-normal-form-for-compact-connected-surfaces
  - thm-classification-of-compact-connected-surfaces
  - def-polygonal-schema-and-edge-pairing
  - def-oriented-cellular-chain-group
  - def-cellular-boundary-from-three-consecutive-skeleta
  - def-incidence-number-of-two-cw-cells
  - thm-cellular-boundary-is-the-incidence-degree-matrix
  - lem-the-cellular-boundary-squares-to-zero
  - def-cellular-homology
  - thm-cellular-homology-computes-singular-homology
  - def-euler-characteristic-of-a-finite-cw-complex
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 2.2, Example 2.36, printed p. 141; cellular boundary formula and cellular homology comparison in the same section
    - title: Jean Gallier and Dianna Xu, A Guide to the Classification Theorem for Compact Surfaces
      url: https://www.cis.upenn.edu/~jean/surfclassif-root.pdf
      locator: Chapter 6, §§6.1–6.2, printed pp. 79–86, one-polygon words and the sphere digon
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a compact connected oriented topological surface of genus $g\geq0$. The Axiom of Choice is used only to invoke the polygonal normal form and surface classification ([[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]]) and identify the standard one-polygon model $\Sigma_g$ with $X$. For $g=0$, $\Sigma_0$ is the paired sphere digon with boundary word $aa^{-1}$; for $g\geq1$, $\Sigma_g$ is the $4g$-gon with boundary word $\prod_{i=1}^g a_i b_i a_i^{-1}b_i^{-1}$ ([[def-polygonal-schema-and-edge-pairing]]). In the associated cellular chain complex with integral coefficients:

1. If $g\geq1$, there is one $0$-cell, $2g$ oriented $1$-cells $e_1,\ldots,e_{2g}$ corresponding in order to $a_1,b_1,\ldots,a_g,b_g$, and one $2$-cell, with $\partial_1=\partial_2=0$. Thus $H_1(X;\mathbb Z)\cong\mathbb Z^{2g}$, freely based by the side-loop classes, while $H_0(X;\mathbb Z)\cong H_2(X;\mathbb Z)\cong\mathbb Z$ and $H_q(X;\mathbb Z)=0$ for $q\geq3$.
2. If $g=0$, the digon has two $0$-cells $v_0,v_1$, one oriented $1$-cell $e$ from $v_0$ to $v_1$, and one $2$-cell. Its differentials are $\partial_1 e=v_1-v_0$ and $\partial_2=0$, so $H_1(X;\mathbb Z)=0$, $H_0(X;\mathbb Z)\cong H_2(X;\mathbb Z)\cong\mathbb Z$, and $H_q(X;\mathbb Z)=0$ for $q\geq3$.
3. The Euler characteristic of the displayed cell structure is $2-2g$ in both cases.

For $g\geq1$, subdividing one loop $1$-cell by inserting a vertex and replacing it by two oriented edges leaves $H_1$ free of rank $2g$: the subdivided side class is represented by the sum of the two new edge classes, together with the other side-loop classes.

## Facts & Assumptions

**Given:** $X$ is a compact connected oriented topological surface of genus $g\geq0$.

[F1] Under the Axiom of Choice, the polygonal normal form and surface classification identify $X$ with the sphere digon when $g=0$, and with the commutator $4g$-gon when $g\geq1$ ([[thm-polygonal-normal-form-for-compact-connected-surfaces]], [[thm-classification-of-compact-connected-surfaces]], [[def-axiom-of-choice]]).

[F2] A one-polygon schema has a finite CW structure with its corner classes as $0$-cells, paired side classes as $1$-cells, and polygon interiors as $2$-cells ([[def-polygonal-schema-and-edge-pairing]]).

[F3] The cellular groups and boundary maps are those of [[def-oriented-cellular-chain-group]] and [[def-cellular-boundary-from-three-consecutive-skeleta]]; the incidence-degree formula computes each boundary coefficient ([[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]]), and $\partial^2=0$ ([[lem-the-cellular-boundary-squares-to-zero]]).

[F4] Cellular homology is the homology of this chain complex and agrees naturally with singular homology ([[def-cellular-homology]], [[thm-cellular-homology-computes-singular-homology]]).

[F5] For a finite CW structure, Euler characteristic is the alternating cell count ([[def-euler-characteristic-of-a-finite-cw-complex]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], it is enough to compute on the indicated polygonal model; the homeomorphism transfers the resulting singular homology groups to $X$. In the commutator polygon, let $v_0,\ldots,v_{4g}=v_0$ be the successive corners. For each handle block $a_i b_i a_i^{-1}b_i^{-1}$, its side identifications join the four corners in that block successively: the $a_i$ pair identifies the first with the fourth and the second with the third, while the $b_i$ pair identifies the second with the next block's first and the third with the fourth. Thus every corner lies in one class. There are consequently one $0$-cell, $2g$ paired $1$-cells, and one $2$-cell. [F1,F2]

1.2 For $g=0$, the sphere digon has two corner classes: its paired sides identify each corner with itself, leaving the two distinct corners $v_0,v_1$. Orient the single paired edge from $v_0$ to $v_1$. The $1$-cell incidence formula gives $\partial_1 e=v_1-v_0$. The attaching word $aa^{-1}$ has total exponent zero, so its $2$-cell has $\partial_2=0$. Therefore $\ker\partial_1=0$ and $\operatorname{coker}\partial_1\cong\mathbb Z$. [F1,F2,F3]

2.1 When $g\geq1$, every $1$-cell is a loop at the unique vertex, so $\partial_1=0$ by [F3]. The coefficient of each $1$-cell in $\partial_2$ is the degree of the attaching word after the other edges are collapsed; each label occurs once with each exponent, so that degree is $1-1=0$. Hence $\partial_2=0$. The chain groups are $C_2=\mathbb Z$, $C_1=\mathbb Z^{2g}$, $C_0=\mathbb Z$, and $C_q=0$ for $q\geq3$. [F3, step 1.1]

3.1 Taking kernels modulo images in the chain complexes of steps 2.1 and 1.2 gives the stated cellular homology groups in both cases. By [F4], these are the singular homology groups, and the cellular generators in the commutator model are exactly its side-loop classes. Counting cells gives $1-2g+1=2-2g$ for $g\geq1$ and $2-1+1=2$ for the digon, proving the Euler-characteristic claim by [F5]. [F4,F5,step 2.1,step 1.2]

4.1 To verify the subdivision claim, let the new vertex be $w$ and orient the two replacement edges from the old vertex $v$ to $w$ and from $w$ to $v$. Their boundaries are $w-v$ and $v-w$; all other loop edges still have zero boundary. In the attaching word the subdivided side occurs once in each direction, so each new edge also has total exponent zero and $\partial_2=0$. The kernel of $\partial_1$ is generated by the sum of the two replacement edges and the other $2g-1$ loop edges. This gives the asserted basis, with the original side class represented by that sum. [F3, step 2.1] ∎

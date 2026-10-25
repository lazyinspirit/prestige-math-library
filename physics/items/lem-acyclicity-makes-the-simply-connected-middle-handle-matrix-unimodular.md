---
id: lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular
kind: lemma
title: Acyclicity makes the simply connected middle-handle matrix unimodular
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 14
deps:
- lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
- prop-relative-handle-chain-complex-of-a-cobordism
- lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices
- def-middle-handle-intersection-matrix-of-an-h-cobordism
- lem-relative-homology-of-the-standard-handle-pair
- def-determinant-of-a-square-matrix
- cor-operator-determinant-on-the-general-linear-group
- def-invertible-matrix-and-general-linear-group
- def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, Oxford University Press 2002; complete electronic copy)
    url: https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro
    locator: Chapter 8 §§8.1--8.2, printed pp. 147--163 (electronic pp. 154--170); Proposition 8.32
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; §7, printed pp. 79--92
verification:
  precheck: pass
---
## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $(W;M_0,M_1)$ be a
connected simply connected h-cobordism with $\dim W=n+1$, $n\ge5$, and let a
presentation relative to $M_0$ have handles only in indices $k,k+1$ with
$2\le k\le n-2$, with $r$ handles of each index (as supplied by the
concentration lemma
([[lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices]])).
Then the middle-handle intersection matrix $M\in M_r(\mathbb Z)$
([[def-middle-handle-intersection-matrix-of-an-h-cobordism]]) is invertible over
$\mathbb Z$, i.e. its determinant is $\pm1$, and
$M\in\operatorname{GL}_r(\mathbb Z)$. Equivalently, the differential
$\partial_{k+1}:C_{k+1}\to C_k$ of the relative handle chain complex is an
isomorphism of finitely generated free abelian groups.

## Facts & Assumptions

**Given:** A connected simply connected h-cobordism with $\dim W=n+1$, $n\ge5$, presented with handles only in indices $k,k+1$, $2\le k\le n-2$, with $r$ handles of each index; $\mathrm{AC}_\omega$.

[F1] In the two-index presentation the relative handle chain complex is $0\to C_{k+1}\xrightarrow{\partial_{k+1}}C_k\to0$, with $C_k,C_{k+1}$ free abelian on the handle cores, and the row-coordinate matrix of $\partial_{k+1}$ in these bases is $M$ (the column-coordinate matrix is $M^T$) ([[prop-relative-handle-chain-complex-of-a-cobordism]], [[def-middle-handle-intersection-matrix-of-an-h-cobordism]]).

[F2] Each $C_j$ is free abelian on one generator per $j$-handle, and the homology of the complex computes $H_j(W,M_0;\mathbb Z)$ ([[prop-relative-handle-chain-complex-of-a-cobordism]], [[lem-relative-homology-of-the-standard-handle-pair]]).

[F3] For an h-cobordism the relative homology vanishes in every degree, $H_j(W,M_0;\mathbb Z)=0$ ([[lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends]]).

[F4] The determinant over a field is multiplicative, and the Leibniz formula for an integer matrix takes integer values; we apply the field theorem over $\mathbb Q$ to an integer inverse ([[def-invertible-matrix-and-general-linear-group]], [[def-determinant-of-a-square-matrix]], [[cor-operator-determinant-on-the-general-linear-group]]).

## Proof

**Proof technique:** direct.

1.1 By the concentration lemma the presentation has handles only in the two adjacent indices $k,k+1$, so by [F1] the relative handle chain complex is $0\to C_{k+1}\xrightarrow{\partial_{k+1}}C_k\to0$ with $C_k,C_{k+1}$ free abelian and bases given by the handle cores, and the row-coordinate matrix of $\partial_{k+1}$ in these bases is $M$ (the column-coordinate matrix is $M^T$). [F1, F2, given]

2.1 Vanishing of the relative homology [F3] is exactly acyclicity of this complex: $H_{k+1}(C_\bullet)=\ker\partial_{k+1}=0$ and $H_k(C_\bullet)=C_k/\operatorname{im}\partial_{k+1}=0$. Hence $\partial_{k+1}$ is injective and surjective, that is, a bijection of abelian groups. [F3, step 1.1]

3.1 A bijection between the finitely generated free abelian groups $C_{k+1}$ and $C_k$ forces their ranks to be equal, and the row-coordinate matrix of $\partial_{k+1}$ is a square integer matrix invertible over $\mathbb Z$ (its inverse is the matrix of the inverse isomorphism). For $r>0$, view this matrix and its integer inverse over $\mathbb Q$. The field determinant identity in [F4] gives $\det M\det M^{-1}=1$; both determinants are integers by the Leibniz formula, so each is $\pm1$. For $r=0$, set the empty determinant equal to $1$ by the empty-product convention; the empty matrix is its own inverse. Thus $M\in\operatorname{GL}_r(\mathbb Z)$. [F2, F4, step 2.1]

4.1 By the definition of the middle-handle matrix [F1] this invertible matrix is exactly $M$, so $M$ is unimodular with $\det M=\pm1$. This is Ranicki's unimodularity proposition specialised to the trivial fundamental group, where the group ring reduces to $\mathbb Z$. [F1, step 3.1] ∎
